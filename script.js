document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileToggle) mobileToggle.classList.remove('active');
            if (nav) nav.classList.remove('active');
        });
    });

    // ===================================
    // Header Scroll Effect
    // ===================================
    const header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
            }
        });
    }

    // ===================================
    // Smooth Scroll for Navigation Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // FAQ Accordion
    // ===================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // ===================================
    // Scroll to Top Button
    // ===================================
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                scrollToTopBtn.classList.add('active');
            } else {
                scrollToTopBtn.classList.remove('active');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===================================
    // Animate Elements on Scroll
    // ===================================
    const animateElements = document.querySelectorAll(
        '.service-card, .highlight-card, .benefit-item, .testimonial-card, .gallery-item, .contact-card'
    );

    if (animateElements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // ===================================
    // Stats Counter Animation
    // ===================================
    const statsNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const target = element.textContent;
        const isPlus = target.includes('+');
        const isPercent = target.includes('%');
        const numericValue = parseInt(target.replace(/\D/g, ''));
        const duration = 2000;
        const increment = numericValue / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < numericValue) {
                element.textContent = Math.floor(current).toLocaleString('pt-BR');
                if (isPlus) element.textContent += '+';
                if (isPercent) element.textContent += '%';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    };

    if (statsNumbers.length) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsNumbers.forEach(stat => statsObserver.observe(stat));
    }

    // ===================================
    // Gallery Image Click (Lightbox Effect)
    // ===================================
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (!img) return;

            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;

            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';

            if (!document.getElementById('lightbox-styles')) {
                const style = document.createElement('style');
                style.id = 'lightbox-styles';
                style.textContent = `
                    .lightbox {
                        position: fixed;
                        top: 0; left: 0; right: 0; bottom: 0;
                        background: rgba(0, 0, 0, 0.95);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 9999;
                        animation: fadeIn 0.3s ease;
                    }
                    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                    .lightbox-content { position: relative; max-width: 90%; max-height: 90%; }
                    .lightbox-content img {
                        max-width: 100%;
                        max-height: 90vh;
                        border-radius: 10px;
                        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                    }
                    .lightbox-close {
                        position: absolute;
                        top: -40px; right: 0;
                        font-size: 40px;
                        color: white;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    .lightbox-close:hover { transform: scale(1.2); color: #dc2626; }
                `;
                document.head.appendChild(style);
            }

            const closeLightbox = () => {
                lightbox.remove();
                document.body.style.overflow = '';
            };

            lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });

            const handleEscape = (e) => {
                if (e.key === 'Escape') {
                    closeLightbox();
                    document.removeEventListener('keydown', handleEscape);
                }
            };
            document.addEventListener('keydown', handleEscape);
        });
    });

    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');

    if (sections.length && navLinks.length) {
        const highlightNavigation = () => {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', highlightNavigation);
    }

    // ===================================
    // Testimonials Auto-Scroll Animation
    // ===================================
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // ===================================
    // Performance: Lazy Load Images
    // ===================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            if (img.dataset.src) img.src = img.dataset.src;
        });
    } else {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ===================================
    // Prevent Gallery Overlay Click Propagation
    // ===================================
    document.querySelectorAll('.gallery-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => e.stopPropagation());
    });

    document.body.classList.add('loaded');
    console.log('Auto Center Premium - Landing Page Loaded Successfully');

    // ===================================================
    // CARRINHO DE COMPRAS - JK Portões
    // ===================================================

    // --- CONFIGURAÇÃO ---
    const NUMERO_WHATSAPP = "5561999999999";

    const produtos = [
        { id: 1, nome: "Motor de Portão Deslizante", descricao: "Motor rápido de alta durabilidade para portões residenciais.", preco: 450.00, icone: "fa-microchip" },
        { id: 2, nome: "Central de Comando Inteligente", descricao: "Placa eletrônica com freio e parada suave configurável.", preco: 120.00, icone: "fa-memory" },
        { id: 3, nome: "Controle Remoto 433MHz", descricao: "Controle com alça de fixação e 3 canais independentes.", preco: 35.00, icone: "fa-walkie-talkie" },
        { id: 4, nome: "Cremalheira(1 metro)", descricao: "Gomos em náilon industrial ultra resistente com cantoneira em aço.", preco: 45.00, icone: "fa-gears" },
        { id: 5, nome: "Engrenagem de Tração", descricao: "Engrenagem interna/externa em alumínio injetado.", preco: 55.00, icone: "fa-gear" },
        { id: 6, nome: "Capacitor de Partida (15uF a 30uF)", descricao: "Capacitor para motores assíncronos de portão elétrico.", preco: 25.00, icone: "fa-bolt" }
    ];

    let carrinho = [];

    const productsGrid = document.getElementById('products-grid');
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Se os elementos do carrinho não existirem nesta página, não roda nada do carrinho
    if (!productsGrid) return;

    function renderizarProdutos() {
        productsGrid.innerHTML = '';
        produtos.forEach(produto => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <div>
                    <div class="product-icon"><i class="fa-solid ${produto.icone}"></i></div>
                    <h3 class="product-title">${produto.nome}</h3>
                    <p class="product-desc">${produto.descricao}</p>
                </div>
                <div>
                    <div class="product-price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
                    <button class="btn-add-cart" data-id="${produto.id}">
                        <i class="fa-solid fa-plus"></i> Adicionar
                    </button>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    function adicionarAoCarrinho(id) {
        const produto = produtos.find(p => p.id === id);
        const itemExistente = carrinho.find(item => item.id === id);

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ ...produto, quantidade: 1 });
        }

        atualizarCarrinho();
    }

    function removerDoCarrinho(id) {
        carrinho = carrinho.filter(item => item.id !== id);
        atualizarCarrinho();
    }

    function atualizarCarrinho() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let qtdTotal = 0;

        if (carrinho.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; color: var(--gray-color);">Seu carrinho está vazio.</p>';
        } else {
            carrinho.forEach(item => {
                total += item.preco * item.quantidade;
                qtdTotal += item.quantidade;

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <div>
                        <div class="cart-item-title">${item.nome} (${item.quantidade}x)</div>
                        <div class="cart-item-price">R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</div>
                    </div>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }

        cartCount.innerText = qtdTotal;
        cartTotalPrice.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    // Delegação de eventos: um único listener cuida de "Adicionar" e "Remover",
    // mesmo depois que os cards são recriados dinamicamente
    productsGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-add-cart');
        if (btn) adicionarAoCarrinho(Number(btn.dataset.id));
    });

    cartItemsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.remove-item');
        if (btn) removerDoCarrinho(Number(btn.dataset.id));
    });

    if (cartBtn && cartModal) {
        cartBtn.addEventListener('click', () => cartModal.classList.add('active'));
    }
    if (closeCartBtn && cartModal) {
        closeCartBtn.addEventListener('click', () => cartModal.classList.remove('active'));
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (carrinho.length === 0) {
                alert("Adicione produtos ao carrinho antes de finalizar!");
                return;
            }

            let mensagem = "Olá! Gostaria de fazer um pedido na *JK Portões*:\n\n";
            let total = 0;

            carrinho.forEach(item => {
                const subtotal = item.preco * item.quantidade;
                total += subtotal;
                mensagem += `• *${item.nome}* (${item.quantidade}x) - R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
            });

            mensagem += `\n*Total do Pedido:* R$ ${total.toFixed(2).replace('.', ',')}`;

            const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
        });
    }

    renderizarProdutos();
});