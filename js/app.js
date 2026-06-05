const siteData = {
    projects: [
        { title: "Digitalização de Acervo", desc: "Processo de ofícios 100% online.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop" },
        { title: "Infraestrutura Base", desc: "Reforma do bloco principal.", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" },
        { title: "Fórum de Lideranças", desc: "Integração das chapas acadêmicas.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" }
    ],
    departments: [
        { name: "Presidência", icon: "ph-crown", desc: "Igor Micael", photo: "assets/images/team/presidencia/diretor/igor.jpeg", roleDesc: "Coordenação geral, representação institucional e liderança da diretoria executiva.", bio: "Líder estudantil focado em inovação e na defesa dos direitos acadêmicos." },
        { name: "Vice-Presidência", icon: "ph-star", desc: "Arthur Menezes", photo: "assets/images/team/vice-presidencia/diretor/arthur.jpeg", roleDesc: "Auxílio direto à presidência e coordenação das pautas estratégicas.", bio: "Engajado no movimento estudantil com experiência em articulação de projetos.", colabs: [] },
        { name: "Secretaria Geral", icon: "ph-file-text", desc: "Alice Santos", photo: "assets/images/team/secretaria-geral/diretor/alice.jpeg", roleDesc: "Gestão de documentos, atas, registros oficiais e organização administrativa.", bio: "Organizada e proativa, garantindo o fluxo e a transparência documental." },
        { name: "Primeira Secretaria", icon: "ph-pencil-simple", desc: "Mylena Cristina", photo: "assets/images/team/primeira-secretaria/diretor/mylena.jpg", roleDesc: "Apoio à secretaria geral, controle de reuniões e processos internos.", bio: "Estudante dedicada a otimizar os processos do grêmio no dia a dia." },
        { name: "Secretaria de Patrimônio e Finanças", icon: "ph-coin", desc: "Daniele Candeia", photo: "assets/images/team/secretaria-de-patrimonio-e-financas/diretor/daniele.jpeg", roleDesc: "Gestão do orçamento, captação de recursos e controle patrimonial.", bio: "Focada em responsabilidade fiscal e transparência nos recursos do grêmio.", colabs: [] },
        { name: "Secretaria de Assuntos Políticos", icon: "ph-scales", desc: "Grazielle Melissa", photo: "assets/images/team/secretaria-de-assuntos-politicos/diretor/grazy.jpeg", roleDesc: "Articulação política, debates institucionais e representação externa.", bio: "Ativista por melhorias educacionais e fortalecimento da voz dos estudantes.", colabs: [ { name: "Clara Camarão", photo: "assets/images/team/secretaria-de-assuntos-politicos/colabs/clara-camarao.jpeg" }, { name: "Ana Vitória", photo: "assets/images/team/secretaria-de-assuntos-politicos/colabs/ana-vitoria.jpeg" }, { name: "Miguel Sandes", photo: "assets/images/team/secretaria-de-assuntos-politicos/colabs/miguel-sandes.jpeg" } ] },
        { name: "Diretoria de Eventos", icon: "ph-calendar-star", desc: "Suzanne Victória", photo: "assets/images/team/diretoria-de-eventos/diretor/suzanne.jpeg", roleDesc: "Organização de atividades culturais, festas, recepções e integrações.", bio: "Apaixonada por criar momentos memoráveis e promover o convívio acadêmico.", colabs: [ { name: "Emilly Christine", photo: "assets/images/team/diretoria-de-eventos/colabs/emilly-christine.jpeg" }, { name: "Maysa Lins", photo: "assets/images/team/diretoria-de-eventos/colabs/maysa-lins.jpeg" }, { name: "Maria Eduarda", photo: "assets/images/team/diretoria-de-eventos/colabs/maria-eduarda.jpg" } ] },
        { name: "Diretoria de Comunicação", icon: "ph-megaphone", desc: "Miguel Araújo", photo: "assets/images/team/diretoria-de-comunicacao/diretor/miguel.jpeg", roleDesc: "Gestão das redes sociais, comunicados oficiais e identidade visual.", bio: "Criativo e atento às novas mídias para manter os estudantes sempre informados.", colabs: [ { name: "Carlos Henrique", photo: "assets/images/team/diretoria-de-comunicacao/colabs/carlos-henrique.jpeg" } ] },
        { name: "Diretoria de Tecnologia e Inovação", icon: "ph-laptop", desc: "José Lucena", photo: "assets/images/team/diretoria-de-tecnologia-e-inovacao/diretor/lucena.jpg", roleDesc: "Desenvolvimento de plataformas, modernização tecnológica e suporte digital.", bio: "Entusiasta de tecnologia buscando soluções digitais para os problemas da comunidade.", colabs: [ { name: "Arthur Calado", photo: "assets/images/team/diretoria-de-tecnologia-e-inovacao/colabs/arthur-calado.jpeg" }, { name: "Anny Curvelo", photo: "assets/images/team/diretoria-de-tecnologia-e-inovacao/colabs/anny-curvelo.jpeg" }, { name: "Guilherme Amorim", photo: "assets/images/team/diretoria-de-tecnologia-e-inovacao/colabs/guilherme-amorim.jpeg" }, { name: "Kamille Galvão", photo: "assets/images/team/diretoria-de-tecnologia-e-inovacao/colabs/kamille-galvao.jpg" } ] },
        { name: "Diretoria de Assistência Estudantil", icon: "ph-hand-heart", desc: "Andrey Romão", photo: "assets/images/team/diretoria-de-assistencia-estudantil/diretor/andrey.jpeg", roleDesc: "Apoio a políticas de permanência, bolsas e suporte aos alunos em vulnerabilidade.", bio: "Empático e dedicado a garantir que todos tenham condições adequadas de estudo.", colabs: [ { name: "Matheus Emanuel", photo: "assets/images/team/diretoria-de-assistencia-estudantil/colabs/matheus-emanuel.jpeg" } ] },
        { name: "Diretoria de Assuntos Educacionais", icon: "ph-book-open", desc: "Emile Vitória", photo: "assets/images/team/diretoria-de-assuntos-educacionais/diretor/emile.png", roleDesc: "Debate do currículo escolar, mediação com docentes e melhoria da qualidade de ensino.", bio: "Defensora de uma educação pública de qualidade e acessível a todos.", colabs: [ { name: "Esther Nascimento", photo: "assets/images/team/diretoria-de-assuntos-educacionais/colabs/esther-nascimento.jpeg" }, { name: "Lays Lira", photo: "assets/images/team/diretoria-de-assuntos-educacionais/colabs/lays-lira.jpeg" } ] },
        { name: "Diretoria de Diversidade Sexual", icon: "ph-rainbow", desc: "A definir", photo: "#", roleDesc: "Promoção do respeito, campanhas de conscientização e apoio à causa LGBTQIAPN+.", bio: "Posição atualmente em aberto aguardando indicação.", colabs: [ { name: "Mel Lins", photo: "assets/images/team/diretoria-de-diversidade-sexual/colabs/mel-lins.jpeg" } ] },
        { name: "Diretoria de Diversidade Étnica", icon: "ph-users-three", desc: "Alysson Teixeira", photo: "assets/images/team/diretoria-de-diversidade-etnica/diretor/chicote.jpeg", roleDesc: "Ações contra o racismo, valorização cultural e políticas afirmativas.", bio: "Liderança engajada na luta por igualdade e representatividade racial na instituição.", colabs: [] },
        { name: "Diretoria de Saúde e Meio Ambiente", icon: "ph-leaf", desc: "Pedro Coelho", photo: "assets/images/team/diretoria-de-saude-e-meio-ambiente/diretor/coelho.jpeg", roleDesc: "Campanhas de conscientização ecológica, saúde mental e física.", bio: "Atento às questões sustentáveis e ao bem-estar integral dos estudantes.", colabs: [ { name: "Yasmim Farias", photo: "assets/images/team/diretoria-de-saude-e-meio-ambiente/colabs/yasmim-farias.jpeg" }, ] },
        { name: "Diretoria de Arte e Cultura", icon: "ph-palette", desc: "Anna Placidus", photo: "assets/images/team/diretoria-de-arte-e-cultura/diretor/anna.png", roleDesc: "Promoção de expressões artísticas, mostras, debates e apresentações culturais.", bio: "Acredita na arte como principal motor de transformação social e acadêmica.", colabs: [ { name: "Mayara Rodrigues", photo: "assets/images/team/diretoria-de-arte-e-cultura/colabs/mayara-rodrigues.jpeg" }, { name: "Samuel Vinicius", photo: "assets/images/team/diretoria-de-arte-e-cultura/colabs/samuel-vinicius.jpeg" }, { name: "Samuel Juvino", photo: "assets/images/team/diretoria-de-arte-e-cultura/colabs/samuel-juvino.jpeg" }, { name: "Isis Nogueira", photo: "assets/images/team/diretoria-de-arte-e-cultura/colabs/isis-nogueira.jpeg" }, { name: "Samara Angelo", photo: "assets/images/team/diretoria-de-arte-e-cultura/colabs/samara-angelo.jpeg" }, { name: "Yasmim Maria", photo: "assets/images/team/diretoria-de-arte-e-cultura/colabs/yasmim-maria.jpeg" } ] },
        { name: "Diretoria da Mulher", icon: "custom icon-mulher", desc: "Lua Cardoso", photo: "assets/images/team/diretoria-da-mulher/diretor/lua.jpeg", roleDesc: "Defesa dos direitos das alunas, combate ao assédio e fomento à liderança feminina.", bio: "Feminista atuante focada na segurança e protagonismo das mulheres no campus.", colabs: [] },
        { name: "Diretoria de Esportes", icon: "ph-basketball", desc: "Yan Guimarães", photo: "assets/images/team/diretoria-de-esportes/diretor/yan.jpeg", roleDesc: "Organização de interclasses, times acadêmicos e incentivo às práticas esportivas.", bio: "Atleta que vê no esporte uma ferramenta fundamental de disciplina e integração.", colabs: [] },
    ]};

window.shareNews = async function(link, title, event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    const shareUrl = window.location.origin + '/noticia/' + link.split('/').filter(Boolean).pop();
    
    if (navigator.share) {
        navigator.share({
            title: title || 'Notícia - GEEL',
            text: 'Confira esta notícia no portal do GEEL!',
            url: shareUrl
        }).catch(err => console.log('Erro no share nativo:', err));
    } else {
        try {
            await navigator.clipboard.writeText(shareUrl);
            const btn = event.currentTarget;
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="ph ph-check"></i> Copiado!';
                setTimeout(() => { btn.innerHTML = originalText; }, 2000);
            }
        } catch (err) {}
    }
};

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // --- Injeção de Dados ---
    const featuredPost = document.getElementById('featuredPost');
    const latestPostsList = document.getElementById('latestPostsList');
    const morePostsGrid = document.getElementById('morePostsGrid');

    if (featuredPost) featuredPost.innerHTML = '<p style="color:var(--text-muted); padding: 20px;">Carregando...</p>';

    const escapeHtml = (str) => {
        if (!str) return "";
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    };

        function parseAndRenderNewsJSON(itemsArray) {
        const items = itemsArray.slice(0, 8);
        if (items.length > 0) {
            if(featuredPost) featuredPost.innerHTML = '';
            if(latestPostsList) latestPostsList.innerHTML = '';
            if(morePostsGrid) morePostsGrid.innerHTML = '';
            
            items.forEach((item, i) => {
                const title = escapeHtml(item.title || "");
                let link = escapeHtml(item.link || item.guid || "#");
                link = link.trim();
                
                const pubDateRaw = escapeHtml(item.pubDate || "");
                
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = item.description || "";
                let shortDesc = escapeHtml(tempDiv.textContent || "");
                
                let fallbackImg = "assets/images/ifal.jpeg";
                let highResImg = fallbackImg;
                const tempDivImg = document.createElement("div");
                tempDivImg.innerHTML = item.content || item.description || "";
                const rssImg = tempDivImg.querySelector("img");
                if (rssImg && rssImg.getAttribute("src")) {
                    let src = rssImg.getAttribute("src");
                    if (src.startsWith('/')) src = "https://www2.ifal.edu.br" + src;
                    highResImg = src.replace(/@@images\/.*/, '@@images/image');
                } else {
                    highResImg = link + "/@@images/image/large";
                }
                
                let onerrorAttr = `onerror="this.onerror=null; this.src='${fallbackImg}';" loading="lazy"`;
                
                const pubDate = new Date(pubDateRaw);
                let formattedDate = "Recente";
                if (!isNaN(pubDate.getTime())) {
                    formattedDate = pubDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
                }

                if (i === 0 && featuredPost) {
                    const html = `
                        <img src="${highResImg}" alt="${title}" ${onerrorAttr}>
                        <div class="featured-content">
                            <span class="category-pill"><span class="category-dot"></span> Novidade</span>
                            <a href="/noticia/${item.link.split('/').filter(Boolean).pop()}" class="featured-title">${title}</a>
                            <div class="featured-meta" style="display: flex; align-items: center; gap: 15px; flex-wrap: wrap;">
                                <span>${formattedDate} ⬢ Gestão REAL</span>
                                <button class="btn-share-inline" onclick="shareNews('${item.link}', '${item.title.replace(/'/g, "\\'")}', event)" title="Compartilhar"><i class="ph ph-share-network"></i> Compartilhar</button>
                            </div>
                        </div>
                    `;
                    gsap.fromTo(featuredPost.parentElement, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out" });
                    featuredPost.innerHTML = html;
                    featuredPost.parentElement.href = '/noticia/' + item.link.split('/').filter(Boolean).pop();
                    featuredPost.parentElement.removeAttribute("target");
                    featuredPost.parentElement.removeAttribute("rel");
                } 
                else if (i >= 1 && i <= 4 && latestPostsList) {
                    const el = document.createElement('a');
                    el.href = '/noticia/' + item.link.split('/').filter(Boolean).pop();
                    el.removeAttribute("target");
                    el.removeAttribute("rel");
                    el.className = 'latest-item';
                    el.innerHTML = `
                        <div class="latest-img-wrapper"><img src="${highResImg}" alt="${title}" ${onerrorAttr}></div>
                        <div class="latest-content">
                            <a href="/noticia/${item.link.split('/').filter(Boolean).pop()}" style="text-decoration:none; color:inherit; display:block;">
                                <h4 class="latest-title">${title}</h4>
                            </a>
                            <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                                <span class="latest-meta">${formattedDate}</span>
                                <button class="btn-share-inline" onclick="shareNews('${item.link}', '${item.title.replace(/'/g, "\\'")}', event)" title="Compartilhar"><i class="ph ph-share-network"></i> Compartilhar</button>
                            </div>
                        </div>
                    `;
                    latestPostsList.appendChild(el);
                    gsap.fromTo(el, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.8, delay: i * 0.1, ease: "expo.out" });
                }
                else if (i >= 5 && i <= 7 && morePostsGrid) {
                    const el = document.createElement('a');
                    el.href = '/noticia/' + item.link.split('/').filter(Boolean).pop();
                    el.removeAttribute("target");
                    el.removeAttribute("rel");
                    el.className = 'more-post-card';
                    el.innerHTML = `
                        <div class="more-img-wrapper"><img src="${highResImg}" alt="${title}" ${onerrorAttr}></div>
                        <div class="more-content">
                            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px; font-size: 11px; font-weight: 600; color: var(--text-main); text-transform: uppercase; letter-spacing: 0.05em;">
                                <span class="category-dot" style="background: var(--text-main);"></span> CAMPUS
                            </div>
                            <h4 class="more-title">${title}</h4>
                            <p class="more-desc">${shortDesc || 'Confira os detalhes desta notícia no portal oficial do Ifal Maceió.'}</p>
                            <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                                <span class="more-meta">${formattedDate}</span>
                                <button class="btn-share-inline" onclick="shareNews('${item.link}', '${item.title.replace(/'/g, "\\'")}', event)" title="Compartilhar"><i class="ph ph-share-network"></i> Compartilhar</button>
                            </div>
                        </div>
                    `;
                    morePostsGrid.appendChild(el);
                    gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: (i-5) * 0.15, ease: "expo.out", scrollTrigger: { trigger: morePostsGrid, start: "top 80%" } });
                }
            });
            
            setTimeout(() => { ScrollTrigger.refresh(); }, 500);
        } else {
            if (featuredPost) {
                featuredPost.innerHTML = '<p style="color:var(--text-muted); padding: 20px;">Nenhuma notícia encontrada.</p>';
            }
        }
    }

    async function loadCampusNews() {
        try {
            // Usando rss2json que é 100% confiável, retorna JSON direto, não sofre com bloqueios CORS estritos no Vercel
            const rssUrl = "https://www2.ifal.edu.br/campus/maceio/noticias/noticias/rss.xml";
            const proxyUrl = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(rssUrl);
            
            const cachedJson = localStorage.getItem('geel_news_cache_json');
            if (cachedJson) {
                try {
                    parseAndRenderNewsJSON(JSON.parse(cachedJson));
                } catch(e) {}
            }

            const response = await fetch(proxyUrl);
            const data = await response.json();
            
            if (data.status !== "ok") {
                throw new Error("RSS2JSON failed");
            }
            
            const jsonString = JSON.stringify(data.items);
            if (jsonString === cachedJson) return; // Evita piscar a tela
            
            localStorage.setItem('geel_news_cache_json', jsonString);
            
            // Renderiza novamente a nova versão
            parseAndRenderNewsJSON(data.items);

        } catch (error) {
            console.error('Falha ao buscar notícias RSS:', error);
            // Mostrar erro apenas se já não houver algo renderizado na tela pelo Cache
            if (featuredPost && featuredPost.innerHTML.includes('Carregando')) {
                featuredPost.innerHTML = '<p style="color:var(--text-muted); padding: 20px;">Não foi possível carregar as notícias. Verifique sua conexão.</p>';
            }
        }
    }

    loadCampusNews();
    setInterval(loadCampusNews, 120000);

    const accordionContainer = document.getElementById('deptAccordion');
    siteData.departments.forEach((dept) => {
        const el = document.createElement('div');
        el.className = 'accordion-item';
        let photoHTML = '';
        if (dept.photo && dept.photo !== '#') {
            photoHTML = `<img src="${dept.photo}" alt="Foto de ${dept.desc}" class="member-photo" loading="lazy">`;
        } else {
            photoHTML = `<div class="member-photo-placeholder"><i class="ph ph-user"></i></div>`;
        }

        let colabsHTML = '';
        if (dept.colabs && dept.colabs.length > 0) {
            let colabsItems = dept.colabs.map(colab => {
                return `<div class="colab-item">
                            <div class="colab-photo-wrapper">
                                <i class="ph ph-user colab-placeholder-icon"></i>
                                <img src="${colab.photo}" alt="${colab.name}" class="colab-photo-img" onerror="this.onerror=null; this.style.display='none';">
                            </div>
                            <span class="colab-name">${colab.name}</span>
                        </div>`;
            }).join('');
            
            colabsHTML = `
                <div class="colabs-section">
                    <h5 class="colabs-title">Equipe Colaboradora</h5>
                    <div class="colabs-grid">
                        ${colabsItems}
                    </div>
                </div>
            `;
        }

        el.innerHTML = `<button class="accordion-header">${dept.name} <i class="ph ph-plus accordion-icon"></i></button>
                        <div class="accordion-content">
                            <div class="accordion-inner member-bio-section">
                                ${photoHTML}
                                <div class="member-details">
                                    <h4 class="member-name"><i class="ph ${dept.icon}"></i> ${dept.desc}</h4>
                                    <p class="member-role"><strong>Responsabilidades:</strong> ${dept.roleDesc}</p>
                                    <p class="member-bio"><strong>Biografia:</strong> ${dept.bio}</p>
                                    ${colabsHTML}
                                </div>
                            </div>
                        </div>`;
        accordionContainer.appendChild(el);

        const header = el.querySelector('.accordion-header');
        const content = el.querySelector('.accordion-content');
        header.addEventListener('click', () => {
            const isOpen = el.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.height = '0px';
            });
            if (!isOpen) {
                el.classList.add('active');
                content.style.height = content.querySelector('.accordion-inner').scrollHeight + 'px';
            }
        });
    });

    // --- Lenis Smooth Scroll ---
    const lenis = new Lenis({ duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000) });
    gsap.ticker.lagSmoothing(0);

    // --- Text Splitting Utils ---
    document.querySelectorAll('.split-text').forEach(text => {
        const words = text.innerText.split(' ');
        text.innerHTML = '';
        words.forEach(word => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word-wrapper'; wordSpan.innerHTML = word + '&nbsp;';
            const lineSpan = document.createElement('span');
            lineSpan.className = 'line-wrapper'; lineSpan.appendChild(wordSpan);
            text.appendChild(lineSpan);
        });
    });

    // Inicia a animação da capa imediatamente (Sem Preloader)
    document.body.classList.remove('is-loading');
    gsap.to('.editorial-hero .fade-up', { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "expo.out" });
    gsap.from('.cinematic-img', { scale: 1.2, duration: 2.5, ease: "expo.out" });

    // --- 3D Tilt Effect ---
    const tiltElements = document.querySelectorAll('.tilt-effect');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            el.style.transition = `transform 0.5s var(--ease-out)`;
        });
        el.addEventListener('mouseenter', () => {
            el.style.transition = `none`;
        });
    });

    // --- Menu Full Screen ---
    const menuBtn = document.getElementById('menuToggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');
    const menuInfo = document.querySelector('.menu-info');
    let isMenuOpen = false;

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            document.body.classList.toggle('menu-open');

            if (isMenuOpen) {
                if (menuOverlay) menuOverlay.classList.add('active');
                if (menuLinks.length) gsap.to(menuLinks, { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "expo.out", delay: 0.4 });
                if (menuInfo) gsap.to(menuInfo, { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.8 });
                if (window.lenis) lenis.stop();
            } else {
                if (menuLinks.length) gsap.to([menuLinks, menuInfo].filter(Boolean), { y: 50, opacity: 0, duration: 0.4, ease: "power2.in" });
                setTimeout(() => { if (menuOverlay) menuOverlay.classList.remove('active'); }, 400);
                if (window.lenis) lenis.start();
            }
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => menuBtn.click());
        });
    }

    // --- Scroll Animations ---

    // Manifesto Scrollytelling
    const manifestoText = document.getElementById('manifestoText');
    const manifestoWords = manifestoText.innerText.split(' ');
    manifestoText.innerHTML = '';
    manifestoWords.forEach(word => {
        const span = document.createElement('span'); span.innerText = word + ' '; manifestoText.appendChild(span);
    });
    gsap.to('#manifestoText span', {
        opacity: 1, stagger: 0.1, ease: "none",
        scrollTrigger: { trigger: '.scrollytelling-section', start: "top 60%", end: "bottom 80%", scrub: true }
    });

    // Parallax Hero Img
    gsap.utils.toArray('.parallax-img').forEach(img => {
        gsap.to(img, { yPercent: 20, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
    });

    // Count Up Stats
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        ScrollTrigger.create({
            trigger: stat, start: "top 85%", once: true,
            onEnter: () => {
                gsap.to(stat, { innerHTML: target, duration: 3, ease: "expo.out", snap: { innerHTML: 1 }, onUpdate: function () { stat.innerHTML = Math.round(this.targets()[0].innerHTML); } });
            }
        });
    });


    // Fade Ups
    ScrollTrigger.batch(".fade-up", { onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "expo.out", overwrite: true }), start: "top 85%" });
    ScrollTrigger.batch(".footer-fade-up", { onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "expo.out", overwrite: true }), start: "top 95%" });

    // Footer Art Parallax
    gsap.to('.footer-art-bg', {
        y: -100, ease: "none",
        scrollTrigger: { trigger: '.editorial-footer', start: "top bottom", end: "bottom bottom", scrub: true }
    });

    // --- Dark Mode ---
    const themeBtn = document.getElementById('themeToggle');
    const themeCircle = document.getElementById('theme-transition-circle');
    let isDark = false;

    function applyTheme(dark) {
        isDark = dark;
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        const moonIcon = themeBtn.querySelector('.icon-moon');
        const sunIcon = themeBtn.querySelector('.icon-sun');
        if (moonIcon) moonIcon.style.opacity = isDark ? '0' : '1';
        if (sunIcon) sunIcon.style.opacity = isDark ? '1' : '0';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            if (themeCircle) {
                themeCircle.classList.add('active');
                setTimeout(() => {
                    applyTheme(!isDark);
                    setTimeout(() => {
                        if (themeCircle) {
                            themeCircle.style.transition = 'none';
                            themeCircle.classList.remove('active');
                            void themeCircle.offsetWidth;
                            themeCircle.style.transition = 'clip-path 1.2s cubic-bezier(0.19, 1, 0.22, 1)';
                        }
                    }, 50);
                }, 800);
            } else {
                applyTheme(!isDark);
            }
        });
    }



});
