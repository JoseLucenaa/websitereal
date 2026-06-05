import { parse } from 'node-html-parser';

export default async function handler(req, res) {
    const { slug } = req.query;
    if (!slug) return res.status(400).send('Slug não fornecido.');

    try {
        // Fetch direto e rápido do servidor da Vercel (sem CORS, sem proxy lento)
        let fetchUrl = `https://www2.ifal.edu.br/campus/maceio/noticias/${slug}`;
        let fetchRes = await fetch(fetchUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
        });
        let htmlText = await fetchRes.text();

        // Fallback com subdiretório alternativo
        if (!htmlText.includes('rnews:articleBody')) {
            fetchUrl = `https://www2.ifal.edu.br/campus/maceio/noticias/noticias/${slug}`;
            fetchRes = await fetch(fetchUrl, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
            });
            htmlText = await fetchRes.text();
        }

        const root = parse(htmlText);

        // Extrai o Título
        const h1 = root.querySelector('h1');
        const title = h1 ? h1.text.trim() : 'Notícia IFAL';

        // Extrai a data
        const dateEl = root.querySelector('.documentPublished') || root.querySelector('.documentByLine');
        const dateText = dateEl ? dateEl.text.trim().replace(/\s+/g, ' ') : '';

        // Extrai a Imagem de Alta Resolução
        let imgUrl = 'https://geelifalmaceio.vercel.app/assets/images/ifal.jpeg';
        const imgTags = root.querySelectorAll('img');
        for (const img of imgTags) {
            const src = img.getAttribute('src');
            if (src && src.includes('@@images')) {
                imgUrl = src.replace(/@@images\/.*/, '@@images/image');
                if (imgUrl.startsWith('/')) imgUrl = 'https://www2.ifal.edu.br' + imgUrl;
                break;
            }
        }
        // Fallback: tenta pegar a primeira imagem grande
        if (imgUrl.includes('ifal.jpeg')) {
            for (const img of imgTags) {
                const src = img.getAttribute('src');
                if (src && !src.includes('logo') && !src.includes('icon') && src.startsWith('/')) {
                    imgUrl = 'https://www2.ifal.edu.br' + src;
                    break;
                }
            }
        }

        // Extrai o Corpo da notícia
        let articleBodyHtml = '';
        const bodyNode = root.querySelector('[property="rnews:articleBody"]');
        if (bodyNode) {
            // Corrige caminhos de imagens dentro da matéria
            bodyNode.querySelectorAll('img').forEach(img => {
                let src = img.getAttribute('src');
                if (src) {
                    if (src.startsWith('/')) src = 'https://www2.ifal.edu.br' + src;
                    src = src.replace(/@@images\/.*/, '@@images/image');
                    img.setAttribute('src', src);
                    img.removeAttribute('width');
                    img.removeAttribute('height');
                }
            });
            articleBodyHtml = bodyNode.innerHTML;
        }

        const pageUrl = `https://geelifalmaceio.vercel.app/noticia/${slug}`;

        // HTML final com EXATAMENTE o mesmo design do news.html original
        const finalHtml = `<!DOCTYPE html>
<html lang="pt-BR" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Gestão REAL</title>

    <!-- Open Graph para WhatsApp/Instagram/etc mostrarem foto e título certos -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="Acompanhe as últimas novidades do IFAL Maceió trazidas pelo Grêmio Estudantil Edson Luís.">
    <meta property="og:image" content="${imgUrl}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:site_name" content="GEEL - Gestão REAL">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="${imgUrl}">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,600;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

    <!-- CSS EXATO do site original -->
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/images/icon.png" type="image/png">
</head>
<body class="news-reading-page" style="overflow-x: hidden;">

    <header class="glass-header" style="position: sticky; top: 0; background: rgba(255,255,255,0.9); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);">
        <div class="container header-inner">
            <a href="/" class="header-logo" style="text-decoration: none;">
                <img src="/assets/images/logo.png" alt="GEEL Logo" class="dynamic-logo">
            </a>
            <div class="header-right">
                <a href="/" class="btn-primary" style="padding: 10px 20px; font-size: 14px; text-decoration: none;">
                    <i class="ph ph-arrow-left"></i> Voltar ao Início
                </a>
            </div>
        </div>
    </header>

    <main class="news-main-content">
        <div class="news-hero">
            <img id="news-hero-img" src="${imgUrl}" alt="${title}" onerror="this.src='/assets/images/ifal.jpeg'">
            <div class="news-hero-overlay"></div>
            <div class="news-hero-content container">
                <span class="category-pill"><span class="category-dot"></span> Matéria na Íntegra</span>
                <h1 id="news-title" class="news-h1-title">${title}</h1>
                <div class="news-meta-flex">
                    <span id="news-date">${dateText}</span>
                    <button id="share-btn" class="btn-share" title="Compartilhar">
                        <i class="ph ph-share-network"></i> Compartilhar
                    </button>
                </div>
            </div>
        </div>

        <article class="news-article-body container" id="news-body">
            ${articleBodyHtml || `<p style="text-align:center; padding: 40px;">Não foi possível carregar o conteúdo desta notícia.</p>`}
        </article>
    </main>

    <footer class="editorial-footer" style="margin-top: 0; position: relative;">
        <div class="footer-art-bg parallax-footer">GEEL</div>
        <div class="container footer-content-layer">
            <div class="footer-grid">
                <div class="footer-col">
                    <img src="/assets/images/logo.png" alt="GEEL Logo" class="footer-logo-img">
                    <h2 class="footer-logo">Diretoria de Tecnologia e Inovação.</h2>
                    <p class="footer-desc">Transparência, Arte e Inovação Acadêmica.</p>
                </div>
                <div class="footer-col">
                    <h4 class="col-title">Portal</h4>
                    <ul class="footer-nav">
                        <li><a href="https://www2.ifal.edu.br/" class="link-hover" target="_blank">Portal do IFAL</a></li>
                        <li><a href="https://exame.ifal.edu.br/publico/exames/emandamento" class="link-hover" target="_blank">Seleção IFAL</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="col-title">Sede</h4>
                    <address class="footer-address">
                        Pátio Central<br>
                        IFAL Campus Maceió<br><br>
                        <a href="mailto:gremioedsonluisifal@gmail.com" class="link-hover">gremioedsonluisifal@gmail.com</a>
                    </address>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 GEEL - Grêmio Estudantil Edson Luís.</p>
                <div class="social-links">
                    <a href="#"><i class="ph ph-instagram-logo"></i></a>
                    <a href="#"><i class="ph ph-linkedin-logo"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Animações de entrada (idênticas ao news.js original)
        gsap.fromTo('#news-title', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
        gsap.fromTo('#news-body', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: 'power2.out' });

        // Botão Compartilhar (compartilha o link limpo com OG tags)
        document.getElementById('share-btn').addEventListener('click', async () => {
            const shareData = {
                title: document.title,
                text: 'Confira esta novidade importante do Campus Maceió!',
                url: '${pageUrl}'
            };
            if (navigator.share) {
                try { await navigator.share(shareData); } catch (err) {}
            } else {
                try {
                    await navigator.clipboard.writeText('${pageUrl}');
                    const btn = document.getElementById('share-btn');
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = '<i class="ph ph-check"></i> Copiado!';
                    setTimeout(() => { btn.innerHTML = originalHTML; }, 2000);
                } catch (err) { alert('Copie o link no seu navegador!'); }
            }
        });

        // Tema (compatibilidade com o site principal)
        const savedTheme = localStorage.getItem('geel_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    </script>
</body>
</html>`;

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        // Cache de 1 hora para ser rápido mas sempre atualizado
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
        res.status(200).send(finalHtml);

    } catch (err) {
        console.error('Erro na serverless function:', err);
        res.status(500).send('Erro interno ao processar a notícia.');
    }
}
