export default async function handler(req, res) {
    const { slug } = req.query;
    if (!slug) return res.status(400).send('Slug não fornecido.');

    try {
        // Tenta buscar no IFAL usando o AllOrigins para evitar bloqueios de IP da Vercel
        let proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://www2.ifal.edu.br/campus/maceio/noticias/' + slug);
        let fetchRes = await fetch(proxyUrl);
        let html = await fetchRes.text();

        // Se a página for um "Not Found", tenta o subdiretório /noticias/noticias/
        if (!fetchRes.ok || html.includes('página não foi encontrada') || !html.includes('rnews:articleBody')) {
            proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://www2.ifal.edu.br/campus/maceio/noticias/noticias/' + slug);
            fetchRes = await fetch(proxyUrl);
            html = await fetchRes.text();
        }

        // Extrai o Título
        let title = 'Notícia - GEEL';
        const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
        if (titleMatch) title = titleMatch[1].replace(/<[^>]+>/g, '').trim();

        // Extrai a Imagem
        let imgUrl = 'https://geelifalmaceio.vercel.app/assets/images/logo-geel.png';
        const imgMatch = html.match(/<img[^>]+src="([^">]+@@images\/image[^">]*)"/i) || html.match(/<img[^>]+src="([^">]+@@images[^">]*)"/i);
        if (imgMatch) {
            imgUrl = imgMatch[1];
            if (imgUrl.startsWith('/')) imgUrl = 'https://www2.ifal.edu.br' + imgUrl;
            imgUrl = imgUrl.replace(/@@images\/.*/, '@@images/image'); // Força alta resolução
        }

        // Extrai o Corpo da Notícia
        let articleBody = '<div style="text-align:center; padding: 40px 20px;"><p>Não foi possível extrair a notícia completa.</p><a href="https://www2.ifal.edu.br/campus/maceio/noticias/' + slug + '" target="_blank" class="btn-primary" style="display:inline-block; margin-top: 20px;">Ler no portal oficial</a></div>';
        const bodyStart = html.indexOf('property="rnews:articleBody"');
        if (bodyStart !== -1) {
            const startTagEnd = html.indexOf('>', bodyStart) + 1;
            // Pega o conteúdo até o final do documento (ou até a tag documentByLine)
            const endTag = html.indexOf('<div class="documentByLine"', startTagEnd) !== -1 
                ? html.indexOf('<div class="documentByLine"', startTagEnd) 
                : html.indexOf('<div class="visualClear">', startTagEnd);
            
            if (endTag !== -1) {
                articleBody = html.substring(startTagEnd, endTag);
                // Arruma imagens relativas e força alta resolução
                articleBody = articleBody.replace(/src="(\/campus[^"]+)"/g, 'src="https://www2.ifal.edu.br$1"');
                articleBody = articleBody.replace(/@@images\/[a-zA-Z0-9_-]+/g, '@@images/image');
            }
        }

        const finalHtml = `<!DOCTYPE html>
<html lang="pt-BR" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\${title} | GEEL</title>
    
    <meta property="og:type" content="article" />
    <meta property="og:title" content="\${title}" />
    <meta property="og:description" content="Leia esta notícia no Diário Oficial do GEEL." />
    <meta property="og:image" content="\${imgUrl}" />
    <meta property="og:url" content="https://geelifalmaceio.vercel.app/noticia/\${slug}" />
    <meta name="twitter:card" content="summary_large_image">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,600;1,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/images/icon.png" type="image/png">
</head>
<body>
    <header class="navbar container">
        <div class="nav-logo">
            <a href="/"><img src="/assets/images/logo-geel.png" alt="GEEL Logo" class="logo-img" style="height:40px;"></a>
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
        <section class="news-hero parallax-section" style="padding-top: 100px;">
            <div class="news-hero-bg">
                <img src="\${imgUrl}" alt="Capa da Notícia" class="parallax-img" style="width:100%; height:100%; object-fit:cover;">
                <div class="news-hero-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, var(--bg-primary) 0%, transparent 100%); z-index:1;"></div>
            </div>
            <div class="news-hero-content container" style="position:relative; z-index:2; max-width:900px; margin:0 auto; padding-bottom:120px; display:flex; flex-direction:column; align-items:center;">
                <h1 class="news-hero-title split-text" style="font-size:3rem; text-align:center;">\${title}</h1>
                <div class="news-hero-meta" style="margin-top:20px;">
                    <button class="btn-share-inline" id="share-btn">
                        <i class="ph ph-share-network"></i> Compartilhar Notícia
                    </button>
                </div>
            </div>
        </section>

        <article class="news-article-body container" id="news-body" style="width:100%; max-width:1000px; margin:-80px auto 100px auto; position:relative; z-index:10; background:var(--bg-secondary); padding:80px; border-radius:24px; box-shadow:0 30px 60px rgba(0,0,0,0.04);">
            \${articleBody}
        </article>
    </main>

    <script>
        const shareBtn = document.getElementById('share-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', async () => {
                if (navigator.share) {
                    try {
                        await navigator.share({
                            title: document.title,
                            text: 'Confira esta notícia no portal do GEEL!',
                            url: window.location.href
                        });
                    } catch(err) {}
                } else {
                    try {
                        await navigator.clipboard.writeText(window.location.href);
                        const originalHTML = shareBtn.innerHTML;
                        shareBtn.innerHTML = '<i class="ph ph-check"></i> Copiado!';
                        setTimeout(() => { shareBtn.innerHTML = originalHTML; }, 2000);
                    } catch(e) {}
                }
            });
        }

        const themeToggle = document.getElementById('themeToggle');
        let currentTheme = localStorage.getItem('geel_theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        if(themeToggle) {
            themeToggle.innerHTML = currentTheme === 'light' ? '<i class="ph ph-moon"></i>' : '<i class="ph ph-sun"></i>';
            themeToggle.addEventListener('click', () => {
                currentTheme = currentTheme === 'light' ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', currentTheme);
                localStorage.setItem('geel_theme', currentTheme);
                themeToggle.innerHTML = currentTheme === 'light' ? '<i class="ph ph-moon"></i>' : '<i class="ph ph-sun"></i>';
            });
        }
    </script>
</body>
</html>`;

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
        res.status(200).send(finalHtml);

    } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor.');
    }
}
