const siteData = {
    projects: [
        { title: "Digitalização de Acervo", desc: "Processo de ofícios 100% online.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop" },
        { title: "Infraestrutura Base", desc: "Reforma do bloco principal.", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" },
        { title: "Fórum de Lideranças", desc: "Integração das chapas acadêmicas.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" }
    ],
    departments: [
        { name: "Presidência", icon: "ph-crown", desc: "Igor", photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150", roleDesc: "Coordenação geral, representação institucional e liderança da diretoria executiva.", bio: "Líder estudantil focado em inovação e na defesa dos direitos acadêmicos." },
        { name: "Vice-Presidência", icon: "ph-star", desc: "Arthur", photo: "assets/images/gestão/arthur.jpeg", roleDesc: "Auxílio direto à presidência e coordenação das pautas estratégicas.", bio: "Engajado no movimento estudantil com experiência em articulação de projetos." },
        { name: "Secretaria Geral", icon: "ph-file-text", desc: "Alice", photo: "assets/images/gestão/alice.jpeg", roleDesc: "Gestão de documentos, atas, registros oficiais e organização administrativa.", bio: "Organizada e proativa, garantindo o fluxo e a transparência documental." },
        { name: "Primeira Secretaria", icon: "ph-pencil-simple", desc: "Mylena", photo: "assets/images/gestão/mylena.jpg", roleDesc: "Apoio à secretaria geral, controle de reuniões e processos internos.", bio: "Estudante dedicada a otimizar os processos do grêmio no dia a dia." },
        { name: "Secretaria de Patrimônio e Finanças", icon: "ph-coin", desc: "Daniele", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150", roleDesc: "Gestão do orçamento, captação de recursos e controle patrimonial.", bio: "Focada em responsabilidade fiscal e transparência nos recursos do grêmio." },
        { name: "Secretaria de Assuntos Políticos", icon: "ph-scales", desc: "Grazielle Melissa", photo: "assets/images/gestão/grazy.jpeg", roleDesc: "Articulação política, debates institucionais e representação externa.", bio: "Ativista por melhorias educacionais e fortalecimento da voz dos estudantes." },
        { name: "Diretoria de Eventos", icon: "ph-calendar-star", desc: "Suzane", photo: "assets/images/gestão/suzanne.jpeg", roleDesc: "Organização de atividades culturais, festas, recepções e integrações.", bio: "Apaixonada por criar momentos memoráveis e promover o convívio acadêmico." },
        { name: "Diretoria de Comunicação", icon: "ph-megaphone", desc: "Miguel", photo: "assets/images/gestão/miguel.jpeg", roleDesc: "Gestão das redes sociais, comunicados oficiais e identidade visual.", bio: "Criativo e atento às novas mídias para manter os estudantes sempre informados." },
        { name: "Diretoria de Tecnologia e Inovação", icon: "ph-laptop", desc: "José Lucena", photo: "assets/images/gestão/lucena.jpg", roleDesc: "Desenvolvimento de plataformas, modernização tecnológica e suporte digital.", bio: "Entusiasta de tecnologia buscando soluções digitais para os problemas da comunidade." },
        { name: "Diretoria de Assistência Estudantil", icon: "ph-hand-heart", desc: "Andrey", photo: "assets/images/gestão/andrey.jpeg", roleDesc: "Apoio a políticas de permanência, bolsas e suporte aos alunos em vulnerabilidade.", bio: "Empático e dedicado a garantir que todos tenham condições adequadas de estudo." },
        { name: "Diretoria de Assuntos Educacionais", icon: "ph-book-open", desc: "Emile", photo: "assets/images/gestão/emile.png", roleDesc: "Debate do currículo escolar, mediação com docentes e melhoria da qualidade de ensino.", bio: "Defensora de uma educação pública de qualidade e acessível a todos." },
        { name: "Diretoria de Diversidade Sexual", icon: "ph-rainbow", desc: "A definir", photo: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?auto=format&fit=crop&w=150&h=150", roleDesc: "Promoção do respeito, campanhas de conscientização e apoio à causa LGBTQIAPN+.", bio: "Posição atualmente em aberto aguardando indicação." },
        { name: "Diretoria de Diversidade Étnica", icon: "ph-users-three", desc: "Chicote", photo: "assets/images/gestão/chicote.jpeg", roleDesc: "Ações contra o racismo, valorização cultural e políticas afirmativas.", bio: "Liderança engajada na luta por igualdade e representatividade racial na instituição." },
        { name: "Diretoria de Saúde e Meio Ambiente", icon: "ph-leaf", desc: "Coelho", photo: "assets/images/gestão/coelho.jpeg", roleDesc: "Campanhas de conscientização ecológica, saúde mental e física.", bio: "Atento às questões sustentáveis e ao bem-estar integral dos estudantes." },
        { name: "Diretoria de Arte e Cultura", icon: "ph-palette", desc: "Anna", photo: "assets/images/gestão/anna.png", roleDesc: "Promoção de expressões artísticas, mostras, debates e apresentações culturais.", bio: "Acredita na arte como principal motor de transformação social e acadêmica." },
        { name: "Diretoria da Mulher", icon: "custom icon-mulher", desc: "Lua", photo: "assets/images/gestão/lua.jpeg", roleDesc: "Defesa dos direitos das alunas, combate ao assédio e fomento à liderança feminina.", bio: "Feminista atuante focada na segurança e protagonismo das mulheres no campus." },
        { name: "Diretoria de Esportes", icon: "ph-basketball", desc: "Yan", photo: "assets/images/gestão/yan.jpeg", roleDesc: "Organização de interclasses, times acadêmicos e incentivo às práticas esportivas.", bio: "Atleta que vê no esporte uma ferramenta fundamental de disciplina e integração." }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // --- Injeção de Dados ---
    const newsList = document.getElementById('newsList');
    const newsViewerImg = document.getElementById('newsViewerImg');

    function updateNewsImage(imgSrc) {
        if (!newsViewerImg.src.includes(imgSrc)) {
            newsViewerImg.src = imgSrc;
        }
    }

    const newsData = window.noticiasData || [];
    newsData.forEach((news, i) => {
        const item = document.createElement('div');
        item.className = 'news-item fade-up';
        item.innerHTML = `<span class="news-meta">${news.date}</span><h3 class="news-item-title">${news.title}</h3>`;
        newsList.appendChild(item);

        ScrollTrigger.create({
            trigger: item,
            start: "top 60%",
            end: "bottom 60%",
            onEnter: () => updateNewsImage(news.img),
            onEnterBack: () => updateNewsImage(news.img)
        });
    });
    if (newsData.length > 0) newsViewerImg.src = newsData[0].img;

    const hzContainer = document.getElementById('horizontalContainer');
    siteData.projects.forEach(proj => {
        const el = document.createElement('div');
        el.className = 'horizontal-item project-card';
        el.innerHTML = `<img src="${proj.img}" alt="${proj.title}"><div class="project-info"><h3>${proj.title}</h3><p>${proj.desc}</p></div>`;
        hzContainer.appendChild(el);
    });

    const accordionContainer = document.getElementById('deptAccordion');
    siteData.departments.forEach((dept) => {
        const el = document.createElement('div');
        el.className = 'accordion-item';
        el.innerHTML = `<button class="accordion-header">${dept.name} <i class="ph ph-plus accordion-icon"></i></button>
                        <div class="accordion-content">
                            <div class="accordion-inner member-bio-section">
                                <img src="${dept.photo}" alt="Foto de ${dept.desc}" class="member-photo">
                                <div class="member-details">
                                    <h4 class="member-name"><i class="ph ${dept.icon}"></i> ${dept.desc}</h4>
                                    <p class="member-role"><strong>Responsabilidades:</strong> ${dept.roleDesc}</p>
                                    <p class="member-bio"><strong>Biografia:</strong> ${dept.bio}</p>
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

    // --- Scramble Text Preloader ---
    const scrambleEl = document.querySelector('.scramble-text');
    const finalTxt = scrambleEl.getAttribute('data-text');
    const chars = '!<>-_\\/[]{}—=+*^?#_';
    let frame = 0;
    const scrambleInterval = setInterval(() => {
        scrambleEl.innerText = finalTxt.split('').map((c, i) => {
            if (i < frame / 3) return c;
            return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        frame++;
        if (frame / 3 >= finalTxt.length) clearInterval(scrambleInterval);
    }, 30);

    // --- Preloader Timeline ---
    const tlLoader = gsap.timeline();
    let counter = { value: 0 };
    tlLoader.to('.reveal-up', { y: 0, duration: 1, ease: "expo.out" })
        .to(counter, {
            value: 100, duration: 2.5, ease: "power4.inOut",
            onUpdate: () => {
                let val = Math.round(counter.value);
                document.getElementById('loader-counter').innerText = val < 10 ? '0' + val : val;
                gsap.set('.preloader-progress', { width: val + "%" });
            }
        })
        .to('.awwwards-preloader', { yPercent: -100, duration: 1.2, ease: "expo.inOut", delay: 0.2 })
        .call(() => document.body.classList.remove('is-loading'))
        .to('.hero-title .word-wrapper', { y: 0, duration: 1.5, stagger: 0.05, ease: "expo.out" }, "-=0.8")
        .to('.fade-up-delay', { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "-=1")
        .from('.scale-out', { scale: 1.2, duration: 2.5, ease: "expo.out" }, "-=1.5");

    // --- 3D Tilt Effect ---
    // Aplica interação de perspectiva em caixas sem usar cursos magnéticos
    const tiltElements = document.querySelectorAll('.tilt-effect');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5; // Intensidade (max 5 graus)
            const rotateY = ((x - centerX) / centerX) * 5;

            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            el.style.transition = `transform 0.5s var(--ease-out)`;
        });
        el.addEventListener('mouseenter', () => {
            el.style.transition = `none`; // remove transição pro drag ser responsivo
        });
    });

    // --- Menu Full Screen ---
    const menuBtn = document.getElementById('menuToggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');
    const menuInfo = document.querySelector('.menu-info');
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        document.body.classList.toggle('menu-open');

        if (isMenuOpen) {
            menuBtn.querySelector('.menu-text').innerText = 'Fechar';
            menuOverlay.classList.add('active');
            gsap.to(menuLinks, { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "expo.out", delay: 0.4 });
            gsap.to(menuInfo, { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.8 });
            lenis.stop();
        } else {
            menuBtn.querySelector('.menu-text').innerText = 'Menu';
            gsap.to([menuLinks, menuInfo], { y: 50, opacity: 0, duration: 0.4, ease: "power2.in" });
            setTimeout(() => { menuOverlay.classList.remove('active'); }, 400);
            lenis.start();
        }
    });

    // Fechar menu ao clicar em link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.click();
        });
    });

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

    // Horizontal Scroll
    const hzSection = document.querySelector('.horizontal-container');
    function getScrollAmount() { return -(hzSection.scrollWidth - window.innerWidth + (window.innerWidth * 0.1)); }
    gsap.to(hzSection, {
        x: getScrollAmount, ease: "none",
        scrollTrigger: { trigger: ".horizontal-section", start: "top top", end: () => `+=${getScrollAmount() * -1}`, pin: true, scrub: 1, invalidateOnRefresh: true }
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
    themeBtn.addEventListener('click', () => {
        themeCircle.classList.add('active');
        setTimeout(() => {
            isDark = !isDark;
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            themeBtn.innerHTML = isDark ? '<i class="ph ph-sun"></i>' : '<i class="ph ph-moon"></i>';
            setTimeout(() => {
                themeCircle.style.transition = 'none';
                themeCircle.classList.remove('active');
                void themeCircle.offsetWidth;
                themeCircle.style.transition = 'clip-path 1.2s cubic-bezier(0.19, 1, 0.22, 1)';
            }, 50);
        }, 800);
    });
});