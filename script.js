const cmsData = {
    instagramPosts: [
        {
            image: "https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=400&q=80",
            likes: "1.2k", comments: "84", link: "https://instagram.com/geelifal",
            caption: "O Programa Visão do Futuro chegou! Óculos de grau gratuitos para alunos..."
        },
        {
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80",
            likes: "850", comments: "42", link: "https://instagram.com/geelifal",
            caption: "Semana da Mulher no IFAL: Nossas diretoras comandando as oficinas de autodefesa..."
        },
        {
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            likes: "2.1k", comments: "156", link: "https://instagram.com/geelifal",
            caption: "Maior iFolia de todos os tempos! Confira o edital de bandas..."
        },
        {
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80",
            likes: "640", comments: "28", link: "https://instagram.com/geelifal",
            caption: "Gestão transparente: Reunião com a reitoria para liberação dos laboratórios de Agro."
        }
    ],
    directories: [
        { 
            name: "Presidência", icon: "ph-crown", highlight: true, 
            directorName: "Ana Clara Lins", role: "Presidente Executiva",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
            content: "Órgão máximo de representação do Grêmio. Coordena todas as áreas e frentes políticas.", 
            biography: "Ana atua como liderança unificadora, garantindo que os interesses estudantis sejam priorizados no CONSUP e nas diretorias gerais. Estuda Informática no 3º Ano." 
        },
        { 
            name: "Secretaria Geral", icon: "ph-files", highlight: true, 
            directorName: "João Pedro Silva", role: "Secretário Geral",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
            content: "Garante a organização administrativa, elaboração de pautas e manutenção do arquivo legal.", 
            biography: "Responsável pelas atas de assembleias universais e pelo controle do estatuto em vigência. Mantém a máquina da REAL operando diariamente." 
        },
        { 
            name: "Finanças", icon: "ph-bank", highlight: true, 
            directorName: "Marina Costa", role: "Tesoureira Geral",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
            content: "Gerência dos recursos financeiros do Grêmio, garantindo investimentos seguros.", 
            biography: "Com Marina, nenhuma receita é gasta sem rigor e transparência. Coordena as prestações de conta mensais da REAL abertas aos estudantes." 
        },
        { 
            name: "Tecnologia", icon: "ph-laptop", highlight: false, 
            directorName: "Lucas Almeida", role: "Diretor de TI",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
            content: "Desenvolve as soluções digitais da REAL, plataformas de ouvidoria e inclusão.", 
            biography: "Desenvolvedor entusiasta de interfaces minimalistas. Criou o portal de comunicação de demandas estruturais conectando alunos e reitoria de forma assíncrona." 
        },
        { 
            name: "Políticas para Mulheres", icon: "ph-gender-female", highlight: false, 
            directorName: "Sofia Mendes", role: "Coordenadora da Mulher",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
            content: "Foco absoluto em permanência, segurança e combate ao assédio institucional e moral.", 
            biography: "Liderada por Sofia, a pasta atua ferozmente para acolher relatos seguros e blindar a identidade das alunas contra retaliações." 
        },
        { 
            name: "Diversidade", icon: "ph-rainbow", highlight: false, 
            directorName: "Felipe Gomes", role: "Diretor de Diversidade",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
            content: "Proteção integral aos direitos LGBTQIAPN+ e promoção da visibilidade no campus.", 
            biography: "Luta incansavelmente pela aprovação do uso livre de nome social e promove rodas de conversa afirmativas." 
        },
        { 
            name: "Políticas Étnicas", icon: "ph-globe-hemisphere-west", highlight: false, 
            directorName: "Dandara Oliveira", role: "Diretora de Igualdade Racial",
            image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=256&q=80",
            content: "Fiscalização da lei de cotas e desenvolvimento de ações antirracistas perenes.", 
            biography: "Garante o fortalecimento cultural das matrizes africanas e indígenas. Cuidando da permanência dos estudantes negros cotistas com assistência rígida." 
        },
        { 
            name: "Ensino", icon: "ph-student", highlight: false, 
            directorName: "Bruno Carvalho", role: "Assuntos Educacionais",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
            content: "Ponte entre a base e o corpo docente para aprovações de PPC e resoluções pedagógicas.", 
            biography: "Intervém diretamente caso ocorra excesso de cobrança de atividades extracurriculares ou abusos de horários nas avaliações letivas mensais." 
        },
        { 
            name: "Cultura", icon: "ph-mask-happy", highlight: false, 
            directorName: "Luiza Santos", role: "Diretora Artística",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80",
            content: "Festival estudantil de curtas, sarais poéticos e batalhas de rima do campus.", 
            biography: "Responsável pela liberação de equipamentos musicais para testes. Traz arte para as sextas-feiras culturais do pátio institucional." 
        },
        { 
            name: "Esportes", icon: "ph-basketball", highlight: false, 
            directorName: "Thiago Lima", role: "Assessor de Esportes",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
            content: "Organiza as etapas das eliminatórias estaduais e torneios de basquete, vôlei e xadrez.", 
            biography: "Sua missão inclui a árdua negociação pela reabertura quadras após horários comerciais e aquisição de materiais via emendas." 
        },
        { 
            name: "Comunicação", icon: "ph-megaphone", highlight: false, 
            directorName: "Beatriz Nogueira", role: "Assessora de Imprensa",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
            content: "Mapeia todas as pautas importantes e coordena o Instagram, garantindo que nada passe em branco.", 
            biography: "Uma redatora nata que transformou as notas da REAL numa das páginas institucionais com a linguagem mais afiada e clara da história do grêmio." 
        },
        { 
            name: "Meio Ambiente", icon: "ph-leaf", highlight: false, 
            directorName: "Pedro Rocha", role: "Diretor de Sustentabilidade",
            image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=256&q=80",
            content: "Acompanha o tratamento dos resíduos laboratoriais e incentiva coleta seletiva rígida.", 
            biography: "Trabalha para retirar copos plásticos do Refeitório em substituição ao modelo circular retornável de extrema sustentabilidade e higiene." 
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {

    // Instagram Loader (Fallback Logic)
    const initInstagramFeed = async () => {
        const container = document.getElementById('instagramFeedContainer');
        if (!container) return;

        container.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-gray);">Atualizando galeria...</div>';

        try {
            const rssUrl = encodeURIComponent('https://rsshub.app/instagram/user/geelifal');
            const response1 = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
            if (response1.ok) {
                const data1 = await response1.json();
                if (data1.status === 'ok' && data1.items && data1.items.length > 0) {
                    return renderInstagramItems(data1.items.slice(0, 4), true);
                }
            }
            throw new Error("RSS Failed");
        } catch (e) {
            console.error("Using local IG Feed fallback via CMS");
            renderInstagramItems(cmsData.instagramPosts, false);
        }
    };

    const extractImageFromContent = (htmlContent) => {
        const div = document.createElement('div');
        div.innerHTML = htmlContent;
        const img = div.querySelector('img');
        return img ? img.src : 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80';
    };

    const renderInstagramItems = (items, isLive) => {
        const container = document.getElementById('instagramFeedContainer');
        container.className = 'mural-grid';
        container.innerHTML = '';

        items.forEach((post, index) => {
            if (index > 3) return; // Bento mural requires exactly 4 images
            const wrapper = document.createElement('a');
            wrapper.href = post.link;
            wrapper.target = "_blank";
            wrapper.className = `mural-item mural-item-${index} gsap-reveal`;

            let imageUrl = post.image;
            if (isLive) imageUrl = extractImageFromContent(post.content || post.description);

            wrapper.innerHTML = `
                <img src="${imageUrl}" alt="Mural REAL">
                <div class="mural-overlay">
                    <div class="mural-meta">
                        <span class="mural-tag">Destaque</span>
                        <div class="mural-stats"><i class="ph-fill ph-heart"></i> ${post.likes || '♥'}</div>
                    </div>
                    <p class="mural-caption">${post.caption || 'Acompanhe as últimas novidades diretamente em nosso Instagram oficial.'}</p>
                </div>
            `;
            container.appendChild(wrapper);
        });
    };

    // Directory Renderer with NEW Profile Meta
    const renderDirectories = () => {
        const container = document.getElementById('directoriesGridContainer');
        container.innerHTML = '';

        cmsData.directories.forEach(dir => {
            const isHighlight = dir.highlight ? 'highlight' : '';
            const div = document.createElement('div');
            div.className = `dir-card ${isHighlight} modal-trigger gsap-reveal`;
            
            // Standard Modal Data
            div.setAttribute('data-title', dir.name);
            div.setAttribute('data-content', dir.content);
            div.setAttribute('data-bio', dir.biography || '');
            
            // Advanced Profile Data
            div.setAttribute('data-director', dir.directorName || '');
            div.setAttribute('data-role', dir.role || '');
            div.setAttribute('data-image', dir.image || '');

            div.innerHTML = `
                <i class="ph-fill ${dir.icon}"></i>
                <h4>${dir.name}</h4>
            `;
            container.appendChild(div);
        });
    };

    renderDirectories();
    initInstagramFeed().then(() => initGSAP());

    // Original Standard GSAP Animation
    const initGSAP = () => {
        if (typeof gsap === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
        tl.to('#preloaderBar', { width: '100%', duration: 1.5, ease: "power2.inOut" })
          .to('.logotipo-preloader', { opacity: 0, y: -20, duration: 0.5, ease: "power2.in" })
          .to('.preloader', { yPercent: -100, duration: 0.8, ease: "power3.inOut" }, "-=0.2")
          .from('.badge', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
          .from('.hero-title', { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
          .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.5")
          .from('.hero-input-wrapper', { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");

        gsap.utils.toArray('.gsap-reveal').forEach(elem => {
            gsap.from(elem, {
                scrollTrigger: { trigger: elem, start: "top 85%" },
                y: 40, opacity: 0, duration: 0.8, ease: "power2.out"
            });
        });
    };

    // Google Forms & Form logic (Direct Magic Glow Input)
    const mainInput = document.getElementById('mainInput');
    const chatForm = document.getElementById('chatForm');
    const submitBtn = document.getElementById('submitBtn');
    const toastMessage = document.getElementById('toastMessage');
    const anonToggle = document.getElementById('anonToggle');
    const studentDataFields = document.getElementById('studentDataFields');

    anonToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            studentDataFields.classList.add('collapsed');
            document.getElementById('studentName').required = false;
            document.getElementById('studentId').required = false;
            document.getElementById('studentClass').required = false;
        } else {
            studentDataFields.classList.remove('collapsed');
            document.getElementById('studentName').required = true;
            document.getElementById('studentId').required = true;
            document.getElementById('studentClass').required = true;
        }
    });

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userInput = mainInput.value.trim();
        if (userInput.length === 0) return;

        const params = new URLSearchParams();
        const prefix = anonToggle.checked ? '[Denúncia Sigilosa]' : '[Dúvida Institucional]';
        let finalMessage = `${prefix}\n\n${userInput}`;
        
        params.append('entry.410295473', finalMessage);

        if (!anonToggle.checked) {
            params.append('entry.392085341', document.getElementById('studentName').value.trim());
            params.append('entry.896975119', document.getElementById('studentId').value.trim());
            params.append('entry.630776767', document.getElementById('studentClass').value.trim());
        }

        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="ph-bold ph-spinner ph-spin"></i>';
        submitBtn.disabled = true;
        mainInput.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            mainInput.disabled = false;
            mainInput.value = '';
            submitBtn.disabled = false;

            toastMessage.classList.add('active');
            setTimeout(() => toastMessage.classList.remove('active'), 3500);

            const gFormsUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfUI2ABqvSrS1di875406QoWbZUiklFr1zGTnWNHnLrIjfv8g/viewform?usp=pp_url&${params.toString()}`;
            window.open(gFormsUrl, "_blank");
        }, 800);
    });

    // Advanced Robust Modals
    const modalOverlay = document.getElementById('globalModal');
    const modalBoxTitle = document.getElementById('modalBoxTitle');
    const modalBoxContent = document.getElementById('modalBoxContent');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalActionBtn = document.getElementById('modalActionBtn');

    const openModal = (title, content, bioHtml = '', dirName = '', role = '', image = '') => {
        modalBoxTitle.textContent = title;
        modalBoxContent.innerHTML = content;

        let existingBio = document.getElementById('modalDynamicBio');
        if (existingBio) existingBio.remove();

        if (bioHtml) {
            const bioContainer = document.createElement('div');
            bioContainer.className = 'modal-bio';
            bioContainer.id = 'modalDynamicBio';
            bioContainer.innerHTML = bioHtml;
            modalBoxContent.parentNode.insertBefore(bioContainer, modalActionBtn);
        }

        const profileHeader = document.getElementById('modalProfileHeader');
        if (profileHeader) {
            if (dirName && role && image) {
                document.getElementById('modalBoxDirectorName').textContent = dirName;
                document.getElementById('modalBoxRole').textContent = role;
                document.getElementById('modalBoxImage').src = image;
                profileHeader.classList.remove('hidden');
            } else {
                profileHeader.classList.add('hidden');
            }
        }

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('.modal-trigger');
        if (trigger) {
            e.preventDefault();
            const title = trigger.getAttribute('data-title');
            const content = trigger.getAttribute('data-content') || '';
            const bio = trigger.getAttribute('data-bio');
            
            const dirName = trigger.getAttribute('data-director');
            const role = trigger.getAttribute('data-role');
            const img = trigger.getAttribute('data-image');

            let bioHtml = '';
            if (bio && bio.length > 0) {
                bioHtml = `<strong>Responsabilidades Formais:</strong><br>${bio}`;
            }

            openModal(title, content, bioHtml, dirName, role, img);
        }
    });

    closeModalBtn.addEventListener('click', closeModal);
    modalActionBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // FAQ Accordion Logic
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});