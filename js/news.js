document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = parseInt(urlParams.get('id'), 10);
    
    const titleEl = document.getElementById('news-title');
    const heroImgEl = document.getElementById('news-hero-img');
    const dateEl = document.getElementById('news-date');
    const bodyEl = document.getElementById('news-body');
    const shareBtn = document.getElementById('share-btn');

    const cachedJson = localStorage.getItem('geel_news_cache_json');
    
    if (!cachedJson || isNaN(newsId)) {
        titleEl.textContent = "Notícia não encontrada.";
        bodyEl.innerHTML = "<p>Não foi possível carregar a notícia. Retorne à página inicial e tente novamente.</p>";
        return;
    }

    try {
        const newsItems = JSON.parse(cachedJson);
        const article = newsItems[newsId];

        if (!article) throw new Error("Índice fora do limite");

        titleEl.textContent = article.title;
        
        const pubDateRaw = article.pubDate || "";
        const pubDate = new Date(pubDateRaw);
        let formattedDate = "Publicado Recentemente";
        if (!isNaN(pubDate.getTime())) {
            formattedDate = pubDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
        }
        dateEl.textContent = formattedDate;

        let link = (article.link || article.guid || "").trim();
        
        // 1. CARREGAMENTO INSTANTÂNEO DA IMAGEM E TÍTULO
        let instantImg = "assets/images/ifal.jpeg";
        
        // Extrai a imagem do cache do RSS instantaneamente (Zero delay)
        let rssContent = article.content || article.description || "";
        const rssDiv = document.createElement("div");
        rssDiv.innerHTML = rssContent;
        const rssImg = rssDiv.querySelector("img");
        
        if (rssImg && rssImg.getAttribute("src")) {
            let src = rssImg.getAttribute("src");
            if (src.startsWith('/')) src = "https://www2.ifal.edu.br" + src;
            instantImg = src.replace(/\/image_preview/g, '/image_large').replace(/\/image_thumb/g, '/image_large').replace(/\/image_mini/g, '/image_large');
        } else {
            instantImg = link + "/@@images/image/large";
        }
        
        heroImgEl.onerror = () => { heroImgEl.src = "assets/images/ifal.jpeg"; };
        heroImgEl.src = instantImg;
        document.title = article.title + " | Gestão REAL";
        
        // Destrava o scroll imediatamente
        document.body.classList.remove('is-loading');
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
        
        // Animação super rápida do titulo (0.4s)
        gsap.fromTo(titleEl, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });

        // 2. BUSCA DA MATÉRIA COMPLETA (CORRIDA DE PROXIES PARA VELOCIDADE MÁXIMA)
        let htmlText = sessionStorage.getItem('cache_html_' + link);
        
        if (!htmlText) {
            // Mostra o skeleton de carregamento enquanto baixa rápido
            bodyEl.innerHTML = `
                <div class="news-loading-skeleton" style="height: 30px; margin-bottom: 20px;"></div>
                <div class="news-loading-skeleton" style="height: 20px; width: 90%; margin-bottom: 20px;"></div>
                <div class="news-loading-skeleton" style="height: 20px; width: 85%; margin-bottom: 40px;"></div>
                <div class="news-loading-skeleton" style="height: 200px; border-radius: 16px;"></div>
            `;
            
            try {
                // Inicia requests simultâneos, o que responder primeiro (mais rápido) vence!
                const fetchPromises = [
                    fetch(`https://corsproxy.io/?${encodeURIComponent(link)}`, { cache: "no-store" }).then(r => { if (!r.ok) throw new Error(); return r.text(); }),
                    fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(link)}`, { cache: "no-store" }).then(r => { if (!r.ok) throw new Error(); return r.text(); })
                ];
                
                htmlText = await Promise.any(fetchPromises);
                sessionStorage.setItem('cache_html_' + link, htmlText);
            } catch (err) {
                console.log("Todos os proxies falharam.");
            }
        }

        // 3. INJEÇÃO DO TEXTO NA TELA
        if (htmlText) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, "text/html");
            
            let fullContent = doc.querySelector('div[property="rnews:articleBody"]');
            if (fullContent && fullContent.textContent.trim().length > 50) {
                
                // Trata as imagens internas para ficarem lindas e em alta resolução
                const imgs = fullContent.querySelectorAll('img');
                imgs.forEach(img => {
                    let src = img.getAttribute('src');
                    if (src && src.startsWith('/')) {
                        src = 'https://www2.ifal.edu.br' + src;
                    }
                    if(src) {
                        src = src.replace(/@@images\/.*/, '@@images/image'); // Força alta resolução
                        img.setAttribute('src', src);
                    }
                    img.removeAttribute('width');
                    img.removeAttribute('height');
                });

                bodyEl.innerHTML = fullContent.innerHTML;
                
                // Animação instantânea de entrada
                gsap.fromTo(bodyEl, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
            } else {
                mostrarErroBotao(bodyEl, link);
            }
        } else {
            mostrarErroBotao(bodyEl, link);
        }

        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: article.title,
                text: 'Confira esta novidade importante do Campus Maceió!',
                url: window.location.href
            };
            if (navigator.share) {
                try { await navigator.share(shareData); } catch (err) { }
            } else {
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    const originalHTML = shareBtn.innerHTML;
                    shareBtn.innerHTML = '<i class="ph ph-check"></i> Copiado!';
                    setTimeout(() => { shareBtn.innerHTML = originalHTML; }, 2000);
                } catch (err) {
                    alert('Copie o link no seu navegador!');
                }
            }
        });

    } catch (error) {
        titleEl.textContent = "Erro ao ler a notícia.";
        bodyEl.innerHTML = "<p>Ocorreu um problema ao formatar a notícia. Retorne à página inicial.</p>";
    }
});

function mostrarErroBotao(bodyEl, link) {
    bodyEl.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; background: #fff; border-radius: 20px; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.02);">
            <i class="ph ph-article" style="font-size: 48px; color: var(--primary-color); margin-bottom: 20px;"></i>
            <h2 style="font-family: var(--font-sans); font-size: 24px; color: #111; margin-bottom: 15px;">Matéria Completa Disponível</h2>
            <p style="font-family: var(--font-sans); color: #666; font-size: 16px; margin-bottom: 30px; max-width: 400px; margin-left: auto; margin-right: auto;">
                Acesse o ambiente oficial para visualizar toda a galeria de imagens e arquivos anexos desta notícia.
            </p>
            <a href="${link}" target="_blank" class="btn-secondary" style="text-decoration: none;">
                Ler no Portal Oficial <i class="ph ph-arrow-up-right"></i>
            </a>
        </div>
    `;
    gsap.fromTo(bodyEl, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.4 });
}
