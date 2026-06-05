import { parse } from 'node-html-parser';

export default async function handler(req, res) {
    const { slug } = req.query;
    if (!slug) return res.status(400).send('Slug não fornecido.');

    try {
        // Fetch Direto Ultra-Rápido do IFAL
        let fetchUrl = "https://www2.ifal.edu.br/campus/maceio/noticias/" + slug;
        let fetchRes = await fetch(fetchUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
        });
        
        let htmlText = await fetchRes.text();
        
        // Se a página for um "Not Found" genérico, tenta com /noticias/noticias/
        if (!htmlText.includes('rnews:articleBody')) {
            fetchUrl = "https://www2.ifal.edu.br/campus/maceio/noticias/noticias/" + slug;
            fetchRes = await fetch(fetchUrl, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
            });
            htmlText = await fetchRes.text();
        }

        const root = parse(htmlText);

        // Extrai Título
        const h1 = root.querySelector('h1');
        const title = h1 ? h1.text.trim() : 'Notícia IFAL';

        // Extrai Imagem
        let imgUrl = 'https://geelifalmaceio.vercel.app/assets/images/logo-geel.png';
        const imgTags = root.querySelectorAll('img');
        for (const img of imgTags) {
            const src = img.getAttribute('src');
            if (src && src.includes('@@images')) {
                imgUrl = src.replace(/@@images\/.*/, '@@images/image'); // força alta resolução
                if (imgUrl.startsWith('/')) imgUrl = 'https://www2.ifal.edu.br' + imgUrl;
                break;
            }
        }

        // Extrai Corpo da Notícia usando parser robusto
        let articleBody = '<p style="text-align:center; padding: 40px;">Erro ao processar conteúdo.</p>';
        const bodyNode = root.querySelector('[property="rnews:articleBody"]');
        if (bodyNode) {
            // Corrige caminhos relativos de imagens dentro da matéria
            const contentImgs = bodyNode.querySelectorAll('img');
            contentImgs.forEach(img => {
                let src = img.getAttribute('src');
                if (src && src.startsWith('/')) img.setAttribute('src', 'https://www2.ifal.edu.br' + src);
                if (src && src.includes('@@images')) img.setAttribute('src', src.replace(/@@images\/.*/, '@@images/image'));
            });
            articleBody = bodyNode.innerHTML;
        } else {
            // Fallback elegante caso a notícia não tenha o formato padrão
            articleBody = '<div style="text-align:center; padding: 40px 20px;"><p>Esta notícia possui um formato especial que não pôde ser renderizado perfeitamente aqui.</p><a href="' + fetchUrl + '" target="_blank" class="btn-primary" style="display:inline-block; margin-top: 20px;">Ler no portal oficial</a></div>';
        }

        // Constrói o HTML perfeitamente alinhado com o site
        const finalHtml = `<!DOCTYPE html>
<html lang="pt-BR" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | GEEL</title>
    
    <!-- Metatags para o WhatsApp! -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="Confira a matéria completa no portal do Grêmio Estudantil do IFAL." />
    <meta property="og:image" content="${imgUrl}" />
    <meta property="og:url" content="https://geelifalmaceio.vercel.app/noticia/${slug}" />
    <meta name="twitter:card" content="summary_large_image">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,600;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    
    <!-- Link para o CSS correto do site -->
    <link rel="stylesheet" href="/index.css">
    <link rel="icon" href="/assets/images/icon.png" type="image/png">
    
    <style>
        .news-main-content { margin-top: 0; }
        .editorial-hero { position: relative; width: 100%; height: 60vh; min-height: 400px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-bg-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
        .parallax-bg { width: 100%; height: 100%; background-size: cover; background-position: center; background-repeat: no-repeat; transform: scale(1.1); }
        .hero-gradient-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, var(--bg-primary) 0%, rgba(0,0,0,0.4) 100%); }
        .hero-content-overlay { position: relative; z-index: 2; text-align: center; color: #fff; padding: 0 20px; max-width: 1000px; }
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 20px; text-shadow: 0 4px 20px rgba(0,0,0,0.5); }
        .hero-meta { display: flex; justify-content: center; align-items: center; gap: 15px; }
        
        .news-body-section { position: relative; z-index: 10; margin-top: -80px; padding: 0 20px 100px 20px; }
        .news-article-content { background: var(--bg-primary); border-radius: 24px; padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); max-width: 800px; margin: 0 auto; color: var(--text-main); line-height: 1.8; font-size: 1.1rem; }
        .news-article-content img { max-width: 100%; height: auto; border-radius: 12px; margin: 20px 0; }
        .news-article-content p { margin-bottom: 20px; }
        
        /* Preloader */
        .is-loading .news-main-content { opacity: 0; }
        .awwwards-preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: var(--bg-primary); z-index: 9999; display: flex; justify-content: center; align-items: center; transition: opacity 0.6s ease; }
        .loader-spinner { width: 50px; height: 50px; border: 3px solid var(--accent-light); border-top-color: var(--accent); border-radius: 50%; animation: spin 1s infinite linear; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
    </style>
</head>
<body class="is-loading">
    <div class="awwwards-preloader" id="preloader">
        <div class="loader-spinner"></div>
    </div>

    <header class="navbar container">
        <div class="nav-logo">
            <a href="/"><img src="/assets/images/logo-geel.png" alt="GEEL Logo" class="logo-img"></a>
        </div>
        <nav class="nav-menu">
            <a href="/#institucional">A Gestão</a>
            <a href="/">Diário Oficial</a>
        </nav>
        <div class="nav-actions">
            <button class="theme-toggle" id="themeToggle"><i class="ph ph-moon"></i></button>
        </div>
    </header>

    <main class="news-main-content">
        <section class="editorial-hero">
            <div class="hero-bg-wrapper">
                <div class="parallax-bg cinematic-img" style="background-image: url('${imgUrl}');"></div>
                <div class="hero-gradient-overlay"></div>
            </div>
            <div class="container hero-content-overlay">
                <h1 class="hero-title">${title}</h1>
                <div class="hero-meta fade-up">
                    <button class="btn-share-inline" id="share-btn" style="background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); color: white; border: 1px solid rgba(255,255,255,0.3);">
                        <i class="ph ph-share-network"></i> Compartilhar
                    </button>
                </div>
            </div>
        </section>

        <section class="news-body-section">
            <article class="news-article-content fade-up">
                <div id="server-content">
                    ${articleBody}
                </div>
            </article>
        </section>
    </main>

    <script>
        // Remove Preloader
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    document.body.classList.remove('is-loading');
                    // Inicia animações GSAP
                    gsap.to('.news-main-content', { opacity: 1, duration: 0.5 });
                    gsap.from('.fade-up', { opacity: 0, y: 30, duration: 1, stagger: 0.2, ease: "expo.out" });
                    gsap.from('.cinematic-img', { scale: 1.15, duration: 2, ease: "power2.out" });
                }, 600);
            }
        });

        // Compartilhamento Integrado
        document.getElementById('share-btn').addEventListener('click', async (e) => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: document.title,
                        url: window.location.href
                    });
                } catch(err) {}
            } else {
                navigator.clipboard.writeText(window.location.href);
                const btn = e.currentTarget;
                const old = btn.innerHTML;
                btn.innerHTML = '<i class="ph ph-check"></i> Copiado!';
                setTimeout(() => btn.innerHTML = old, 2000);
            }
        });

        // Theme Toggle (Mantendo compatibilidade)
        const themeToggle = document.getElementById('themeToggle');
        let currentTheme = localStorage.getItem('geel_theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.innerHTML = currentTheme === 'light' ? '<i class="ph ph-moon"></i>' : '<i class="ph ph-sun"></i>';
        
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('geel_theme', currentTheme);
            themeToggle.innerHTML = currentTheme === 'light' ? '<i class="ph ph-moon"></i>' : '<i class="ph ph-sun"></i>';
        });
    </script>
</body>
</html>`;

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache agresivo de 1 dia para velocidade
        res.status(200).send(finalHtml);

    } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor.');
    }
}
