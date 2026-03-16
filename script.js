const cmsData = {
    news: [
        {
            title: "Assembleia Geral aprova novas pautas de reivindicação para 2026",
            summary: "Em plenária histórica, foram decididas as prioridades de infraestrutura e assistência estudantil para o semestre.",
            content: "Em plenária com mais de 500 alunos, foram decididas as prioridades de infraestrutura e assistência. As principais pautas incluem a reforma dos laboratórios e ampliação do cardápio do refeitório.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
            category: "Urgente",
            categoryColor: "category-purple",
            date: "Hoje, 09:00",
            featured: true
        },
        {
            title: "Line-up oficial do Festival de Arte Estudantil",
            summary: "Confira as bandas e artistas selecionados para a 5ª edição do nosso festival no campus.",
            content: "Confira as bandas selecionadas para a 5ª edição. Teremos exposições e apresentações musicais a partir das 18h. Entrada gratuita.",
            image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
            category: "Cultura",
            categoryColor: "category-orange",
            date: "Ontem, 14:30",
            featured: false
        },
        {
            title: "Novos horários para as monitorias de Exatas",
            summary: "A Diretoria de Ensino reorganizou os horários para melhor atender aos turnos.",
            content: "A Diretoria reorganizou os horários matutino e vespertino. Cálculo I e Física II contarão com salas no bloco B. Consulte o edital.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
            category: "Ensino",
            categoryColor: "category-dark",
            date: "14 de Março",
            featured: false
        }
    ],
    directories: [
        { name: "Presidência", icon: "ph-crown", highlight: true, content: "Órgão máximo de representação executiva do Grêmio. Coordena todas as diretorias." },
        { name: "Secretaria", icon: "ph-files", highlight: true, content: "Organização administrativa, redação de atas, ofícios e manutenção do arquivo histórico." },
        { name: "Secretaria de Patrimônio e Finanças", icon: "ph-bank", highlight: true, content: "Gerencia os recursos financeiros do Grêmio, organiza prestações de contas." },
        { name: "Tecnologia e Inovação", icon: "ph-laptop", highlight: false, content: "Desenvolve soluções tecnológicas, mantém o portal e promove eventos de inclusão digital." },
        { name: "Diretoria da Mulher", icon: "ph-gender-female", highlight: false, content: "Políticas de permanência, segurança e combate ao assédio no ambiente escolar." },
        { name: "Diversidade Sexual e Gênero", icon: "ph-rainbow", highlight: false, content: "Garantia dos direitos LGBTQIAPN+ e combate ativo à LGBTfobia." },
        { name: "Diversidade Étnica", icon: "ph-globe-hemisphere-west", highlight: false, content: "Ações de combate ao racismo e defesa das políticas de cotas e assistência." },
        { name: "Assuntos Educacionais", icon: "ph-student", highlight: false, content: "Acompanha projetos pedagógicos e representa os alunos nos conselhos de classe." },
        { name: "Assuntos Políticos", icon: "ph-scales", highlight: false, content: "Conecta o Grêmio aos movimentos estudantis estaduais e nacionais." },
        { name: "Assistência Estudantil", icon: "ph-hand-heart", highlight: false, content: "Luta pela ampliação de bolsas e apoia alunos em situação de vulnerabilidade." },
        { name: "Comunicação Social", icon: "ph-megaphone", highlight: false, content: "Gerencia redes sociais, site e toda a identidade visual do Grêmio." },
        { name: "Arte e Cultura", icon: "ph-mask-happy", highlight: false, content: "Incentiva manifestações artísticas, festivais e exposições no campus." },
        { name: "Social e Eventos", icon: "ph-calendar-star", highlight: false, content: "Planeja festas, calouradas e eventos de integração e arrecadação." },
        { name: "Esportes", icon: "ph-basketball", highlight: false, content: "Organiza jogos interclasses e apoia equipes em competições externas." },
        { name: "Saúde e Meio Ambiente", icon: "ph-leaf", highlight: false, content: "Campanhas de saúde mental, doação de sangue e sustentabilidade." }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    
    const renderNews = () => {
        const container = document.getElementById('newsGridContainer');
        container.innerHTML = '';
        
        cmsData.news.forEach(item => {
            const isFeatured = item.featured ? 'featured' : 'standard';
            const article = document.createElement('article');
            article.className = `news-card ${isFeatured} modal-trigger`;
            article.setAttribute('data-title', item.title);
            article.setAttribute('data-content', item.content);
            
            article.innerHTML = `
                <div class="news-image">
                    <img src="${item.image}" alt="${item.category}">
                    <div class="news-category ${item.categoryColor}">${item.category}</div>
                </div>
                <div class="news-content">
                    <time>${item.date}</time>
                    <h3>${item.title}</h3>
                    <p>${item.summary}</p>
                </div>
            `;
            container.appendChild(article);
        });
    };

    const renderDirectories = () => {
        const container = document.getElementById('directoriesGridContainer');
        container.innerHTML = '';

        cmsData.directories.forEach(dir => {
            const isHighlight = dir.highlight ? 'highlight' : '';
            const div = document.createElement('div');
            div.className = `dir-card ${isHighlight} modal-trigger`;
            div.setAttribute('data-title', dir.name);
            div.setAttribute('data-content', dir.content);

            div.innerHTML = `
                <i class="ph-fill ${dir.icon}"></i>
                <h4>${dir.name}</h4>
            `;
            container.appendChild(div);
        });
    };

    renderNews();
    renderDirectories();

    const tagBtns = document.querySelectorAll('.tag-btn');
    const activeTagsArea = document.getElementById('activeTagsArea');
    const mainInput = document.getElementById('mainInput');
    const chatForm = document.getElementById('chatForm');
    const submitBtn = document.getElementById('submitBtn');
    const toastMessage = document.getElementById('toastMessage');
    
    const anonToggle = document.getElementById('anonToggle');
    const studentDataFields = document.getElementById('studentDataFields');

    const modalOverlay = document.getElementById('globalModal');
    const modalBoxTitle = document.getElementById('modalBoxTitle');
    const modalBoxContent = document.getElementById('modalBoxContent');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalActionBtn = document.getElementById('modalActionBtn');

    const selectedTopics = new Set();

    anonToggle.addEventListener('change', (e) => {
        if(e.target.checked) {
            studentDataFields.classList.add('hidden-fields');
            document.getElementById('studentName').required = false;
            document.getElementById('studentId').required = false;
            document.getElementById('studentClass').required = false;
        } else {
            studentDataFields.classList.remove('hidden-fields');
            document.getElementById('studentName').required = true;
            document.getElementById('studentId').required = true;
            document.getElementById('studentClass').required = true;
        }
    });

    const updateSubmitState = () => {
        const textHasContent = mainInput.value.trim().length > 0;
        const hasTags = selectedTopics.size > 0;
        submitBtn.disabled = !(textHasContent || hasTags);
    };

    const renderTags = () => {
        activeTagsArea.innerHTML = '';
        selectedTopics.forEach(topic => {
            const tagEl = document.createElement('div');
            tagEl.className = 'selected-tag';
            tagEl.innerHTML = `
                ${topic}
                <button type="button" data-topic="${topic}">
                    <i class="ph-bold ph-x"></i>
                </button>
            `;

            tagEl.querySelector('button').addEventListener('click', (e) => {
                const topicToRemove = e.currentTarget.getAttribute('data-topic');
                selectedTopics.delete(topicToRemove);
                
                const originalBtn = document.querySelector(`.tag-btn[data-topic="${topicToRemove}"]`);
                if (originalBtn) originalBtn.classList.remove('hidden');
                
                renderTags();
                updateSubmitState();
                mainInput.focus();
            });

            activeTagsArea.appendChild(tagEl);
        });
    };

    tagBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const topic = e.currentTarget.getAttribute('data-topic');
            
            if (!selectedTopics.has(topic)) {
                selectedTopics.add(topic);
                e.currentTarget.classList.add('hidden');
                renderTags();
                updateSubmitState();
                mainInput.focus();
            }
        });
    });

    mainInput.addEventListener('input', updateSubmitState);

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (submitBtn.disabled) return;

        if(!anonToggle.checked) {
            const n = document.getElementById('studentName').value;
            const m = document.getElementById('studentId').value;
            const t = document.getElementById('studentClass').value;
            if(!n || !m || !t) return;
        }

        const originalIcon = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="ph-bold ph-spinner ph-spin"></i>';
        submitBtn.disabled = true;
        mainInput.disabled = true;

        setTimeout(() => {
            selectedTopics.forEach(topic => {
                const btn = document.querySelector(`.tag-btn[data-topic="${topic}"]`);
                if (btn) btn.classList.remove('hidden');
            });
            
            selectedTopics.clear();
            renderTags();
            mainInput.value = '';
            document.getElementById('studentName').value = '';
            document.getElementById('studentId').value = '';
            document.getElementById('studentClass').value = '';
            
            submitBtn.innerHTML = originalIcon;
            mainInput.disabled = false;
            updateSubmitState();

            toastMessage.classList.add('show');
            setTimeout(() => toastMessage.classList.remove('show'), 3000);
        }, 1200);
    });

    const openModal = (title, content) => {
        modalBoxTitle.textContent = title;
        modalBoxContent.textContent = content;
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
            const content = trigger.getAttribute('data-content');
            openModal(title, content);
        }
    });

    closeModalBtn.addEventListener('click', closeModal);
    modalActionBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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