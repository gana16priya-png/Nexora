/**
 * NEXORA - Future Launchpad Interactivity & Animations Script
 * Powered by GSAP, ScrollTrigger, MotionPathPlugin, AOS, and Swiper.js
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Preloader Fadeout
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    });
    // Fallback if load event takes too long
    setTimeout(() => {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }, 2000);
  }

  // 2. Sticky Header & Back to Top Scroll Listeners
  const header = document.querySelector('.site-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header scrolled class
    if (scrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollPos > 400) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });

  // Back to top button click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 3. Mobile Hamburger Menu & Overlay
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link, .mobile-nav-cta .btn');

  function toggleMobileMenu() {
    mobileToggle.querySelector('i').classList.toggle('fa-bars');
    mobileToggle.querySelector('i').classList.toggle('fa-xmark');
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  }

  mobileToggle.addEventListener('click', toggleMobileMenu);
  overlay.addEventListener('click', toggleMobileMenu);
  mobileLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));

  // 4. Learning Paths Side Drawer System & Brochure Data
  const pathsData = {
    'path-1': {
      title: 'Career & Communication Mastery',
      lead: 'Master interview strategies, group discussions, and high-impact placement readiness.',
      duration: '4 Weeks',
      modulesCount: '4 Core Modules',
      originalPrice: '₹1,999',
      currentPrice: '₹999',
      benefits: ['Guaranteed placement workshops', 'Mock interview simulations', 'Resume & portfolio critique'],
      skills: ['Public Speaking', 'Business Writing', 'Resume Crafting', 'Mock Interviews', 'Negotiation'],
      modules: [
        { num: '01', title: 'Resume Building & LinkedIn Mastery', desc: 'Craft ATS-friendly professional resumes and write a stellar LinkedIn bio that attracts global recruiters.' },
        { num: '02', title: 'Interview Navigation Strategy', desc: 'Structure answers for behavioral questions, master body language, and tackle technical interviews confidently.' },
        { num: '03', title: 'Group Discussions & Presentation Skills', desc: 'Lead conversations in high-pressure GD situations and design impactful decks.' },
        { num: '04', title: 'Corporate Etiquette & Communication', desc: 'Email writing, pitch training, and team collaboration fundamentals for modern workplaces.' }
      ]
    },
    'path-2': {
      title: 'Innovation & Future Skills',
      lead: 'Dive deep into AI applications, startup building blocks, hackathons, and ideathons.',
      duration: '6 Weeks',
      modulesCount: '5 Core Modules',
      originalPrice: '₹2,499',
      currentPrice: '₹1,119',
      benefits: ['Hands-on AI agent tools setup', 'Pitch deck creation to founders', 'Live hackathon hack-days'],
      skills: ['Generative AI', 'Product Management', 'Startup Pitching', 'Rapid Prototyping', 'Design Thinking'],
      modules: [
        { num: '01', title: 'Generative AI & Prompt Engineering', desc: 'Learn how to utilize LLMs, build custom AI pipelines, and automate daily tasks.' },
        { num: '02', title: 'Idea Validation & Prototyping', desc: 'From a simple concept to wireframe. Validate user need, build early mockups.' },
        { num: '03', title: 'Pitch Deck & Business Architecture', desc: 'Structure clear financials, define the TAM, and craft pitch decks inspired by Stripe.' },
        { num: '04', title: 'Hackathon Playbook', desc: 'Strategy to form winning hackathon groups, scope projects, and deliver stunning demos.' }
      ]
    },
    'path-3': {
      title: 'Career Essentials',
      lead: 'Unlock internships, professional networking guides, marketing foundations, and core requirements.',
      duration: '5 Weeks',
      modulesCount: '4 Core Modules',
      originalPrice: '₹2,799',
      currentPrice: '₹1,399',
      benefits: ['Direct referrals to hiring partners', 'Global networking blueprints', 'SaaS marketing simulation project'],
      skills: ['Digital Marketing', 'Cold Outreach', 'Client Relations', 'Growth Hacking', 'Project Management'],
      modules: [
        { num: '01', title: 'Securing High-Impact Internships', desc: 'Cold emailing templates, building proof-of-work portfolios, and targeting the right companies.' },
        { num: '02', title: 'Modern Marketing Foundations', desc: 'SEO, performance marketing, growth hacking, and social media brand building strategies.' },
        { num: '03', title: 'Client Management & Consulting', desc: 'How to pitch freelancers gigs, manage deliverables, and write contract scope papers.' },
        { num: '04', title: 'Cross-functional Collaboration', desc: 'Working with developers, marketers, and design teams using Agile tools like Notion.' }
      ]
    },
    'path-4': {
      title: 'Core Computer Foundations',
      lead: 'Construct a rock-solid technical background with non-coding computer foundations, OS, database systems, and OOP.',
      duration: '8 Weeks',
      modulesCount: '6 Core Modules',
      originalPrice: '₹2,999',
      currentPrice: '₹1,449',
      benefits: ['Hands-on system design sketches', 'Practice SQL on real datasets', 'Comprehensive foundation certificates'],
      skills: ['Operating Systems', 'Database Systems', 'SQL Querying', 'Object-Oriented Programming', 'System Design'],
      modules: [
        { num: '01', title: 'Introduction to Core Subjects', desc: 'High-level computer architecture, how compilers work, and binary numbers representation.' },
        { num: '02', title: 'Operating Systems Demystified', desc: 'Processes, memory allocations, CPU scheduling, threads, concurrency, and virtual memory.' },
        { num: '03', title: 'Database Management Systems & SQL', desc: 'Relational schemas, ACID properties, normalization, writing complex SQL filters.' },
        { num: '04', title: 'Object-Oriented Concepts (OOP)', desc: 'Encapsulation, inheritance, polymorphism, abstraction, and basic software design patterns.' }
      ]
    }
  };

  const pathCards = document.querySelectorAll('.path-card');
  const pathDrawer = document.getElementById('path-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');

  function openPathDrawer(pathId) {
    const data = pathsData[pathId];
    if (!data) return;

    document.getElementById('drawer-title').innerText = data.title;
    document.getElementById('drawer-lead').innerText = data.lead;
    document.getElementById('drawer-duration').innerText = data.duration;
    document.getElementById('drawer-modules-count').innerText = data.modulesCount;
    document.getElementById('drawer-original-price').innerText = data.originalPrice;
    document.getElementById('drawer-current-price').innerText = data.currentPrice;

    const benefitsList = document.getElementById('drawer-benefits-list');
    benefitsList.innerHTML = '';
    data.benefits.forEach(benefit => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${benefit}</span>`;
      benefitsList.appendChild(li);
    });

    const skillsContainer = document.getElementById('drawer-skills-container');
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
      const span = document.createElement('span');
      span.className = 'drawer-skill-tag';
      span.innerText = skill;
      skillsContainer.appendChild(span);
    });

    const modulesContainer = document.getElementById('drawer-modules-container');
    modulesContainer.innerHTML = '';
    data.modules.forEach(mod => {
      const div = document.createElement('div');
      div.className = 'drawer-module-item';
      div.innerHTML = `
        <span class="num">${mod.num}</span>
        <div class="text">
          <h6>${mod.title}</h6>
          <p>${mod.desc}</p>
        </div>
      `;
      modulesContainer.appendChild(div);
    });

    pathDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePathDrawer() {
    pathDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  pathCards.forEach(card => {
    card.addEventListener('click', () => {
      const pathId = card.getAttribute('data-path-id');
      openPathDrawer(pathId);
    });
  });

  drawerCloseBtn.addEventListener('click', closePathDrawer);
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closePathDrawer);
  }

  // 5. Swiper Carousel for Testimonials
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      grabCursor: true
    });
  }

  // 6. Pricing Toggle Switch
  const billingToggle = document.getElementById('billing-toggle');
  const labelInd = document.getElementById('label-individual');
  const labelBundle = document.getElementById('label-bundle');

  function updatePricingDisplay() {
    const isBundle = billingToggle.checked;

    if (isBundle) {
      labelBundle.classList.add('active');
      labelInd.classList.remove('active');

      gsap.to('.pricing-card.individual-card', {
        opacity: 0.4,
        scale: 0.95,
        duration: 0.3,
        pointerEvents: 'none'
      });
      gsap.to('.pricing-card.bundle-card', {
        scale: 1.05,
        borderColor: '#2FBF71',
        boxShadow: '0 20px 50px rgba(47, 191, 113, 0.25)',
        duration: 0.3
      });
    } else {
      labelInd.classList.add('active');
      labelBundle.classList.remove('active');

      gsap.to('.pricing-card.individual-card', {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        pointerEvents: 'auto'
      });
      gsap.to('.pricing-card.bundle-card', {
        scale: 1,
        borderColor: '#E8E2DC',
        boxShadow: '0 15px 40px rgba(47, 191, 113, 0.08)',
        duration: 0.3
      });
    }
  }

  if (billingToggle) {
    billingToggle.addEventListener('change', updatePricingDisplay);
  }

  // 7. FAQ Accordion Behavior
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // 8. Contact Form Validations
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        formFeedback.innerText = 'Please fill out all required fields.';
        formFeedback.className = 'form-feedback error';
        return;
      }

      formFeedback.innerText = 'Sending your inquiry...';
      formFeedback.className = 'form-feedback success';

      setTimeout(() => {
        formFeedback.innerText = 'Thank you! The Nexora admissions panel will reach out to you within 24 hours.';
        formFeedback.className = 'form-feedback success';
        contactForm.reset();
      }, 1500);
    });
  }

  // 9. Initialise AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
      offset: 120
    });
  }

  // ==========================================
  // 10. INTERACTIVE STORYTELLING ENGINE (GSAP)
  // ==========================================

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof MotionPathPlugin !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    // Make the new 3D rocket prominent (2.4x scale aligns perfectly with new canvas dimensions)
    gsap.set('#story-rocket', { scale: 2.4 });

    // Particle Emitter logic
    let lastParticleTime = 0;
    const particleContainer = document.getElementById('particle-container');

    function spawnSmokeSparks(rx, ry, velocity) {
      const now = Date.now();
      const throttleVal = velocity > 1500 ? 30 : 65;
      if (now - lastParticleTime < throttleVal) return;
      lastParticleTime = now;

      if (!particleContainer) return;

      // Coordinate scaling matching index.html viewBox='0 0 1200 2800'
      const leftPercent = (rx / 1200) * 100;
      const topPercent = (ry / 2800) * 100;

      // Spawn smoke
      const smoke = document.createElement('div');
      smoke.className = 'smoke-particle';
      smoke.style.left = `${leftPercent}%`;
      smoke.style.top = `${topPercent}%`;

      const size = Math.random() * 16 + 12;
      smoke.style.width = `${size}px`;
      smoke.style.height = `${size}px`;
      particleContainer.appendChild(smoke);

      gsap.to(smoke, {
        x: (Math.random() - 0.5) * 25,
        y: (Math.random() - 0.5) * 20 + 12,
        scale: 1.8,
        opacity: 0,
        duration: Math.random() * 0.7 + 0.6,
        onComplete: () => smoke.remove()
      });

      // Spawn spark
      if (Math.random() > 0.3) {
        const spark = document.createElement('div');
        spark.className = 'spark-particle';
        spark.style.left = `${leftPercent}%`;
        spark.style.top = `${topPercent}%`;
        particleContainer.appendChild(spark);

        gsap.to(spark, {
          x: (Math.random() - 0.5) * 50,
          y: (Math.random() - 0.5) * 40 + 25,
          scale: 0.15,
          opacity: 0,
          duration: Math.random() * 0.5 + 0.3,
          onComplete: () => spark.remove()
        });
      }
    }

    // Dynamic Flame Container Scaler based on scroll velocity
    function updateEngineFlame(velocity) {
      const scaleX = 1.0 + Math.min(velocity / 1200, 1.2);
      const scaleY = 1.0 + Math.min(velocity / 2500, 0.2);

      gsap.to('#rocket-flame-container', {
        scaleX: scaleX,
        scaleY: scaleY,
        duration: 0.1,
        overwrite: 'auto'
      });
    }

    // Main Storytelling scroll-triggered flight timeline
    const flightTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.storytelling-wrapper',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true, // Directly maps rocket progress 1:1 to scroll progress. Stops instantly!
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity());

          updateEngineFlame(velocity);

          const rx = gsap.getProperty('#story-rocket', 'x');
          const ry = gsap.getProperty('#story-rocket', 'y');

          if (velocity > 15) {
            spawnSmokeSparks(rx, ry, velocity);
          }
        }
      }
    });

    // Animate rocket along straight path with station stops (parks beside milestones)
    // Note: park duration set to 2.2 for a very long stationary presence at each milestone!
    flightTimeline
      // Hero to Milestone 1
      .to('#story-rocket', {
        motionPath: {
          path: '#flight-path',
          autoRotate: true,
          align: '#flight-path',
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 0.428
        },
        duration: 1.0,
        ease: 'power1.inOut'
      })
      // Highlight & Park at Milestone 1
      .to('#milestone-card-1', { opacity: 1, y: 0, scale: 1.05, duration: 2.2 })
      .to('#node-1 .node-core', { fill: '#2FBF71', scale: 1.4, duration: 2.2 }, '<')
      .to('#node-1 .node-bg', { stroke: '#2FBF71', strokeWidth: 5, duration: 2.2 }, '<')
      .to('#node-1 .node-ripple', { scale: 1.8, opacity: 0.7, duration: 2.2 }, '<')

      // Milestone 1 to 2
      .to('#story-rocket', {
        motionPath: {
          path: '#flight-path',
          autoRotate: true,
          align: '#flight-path',
          alignOrigin: [0.5, 0.5],
          start: 0.428,
          end: 0.528
        },
        duration: 1.0,
        ease: 'power1.inOut'
      })
      // Highlight & Park at Milestone 2
      .to('#milestone-card-2', { opacity: 1, y: 0, scale: 1.05, duration: 2.2 })
      .to('#node-2 .node-core', { fill: '#2FBF71', scale: 1.4, duration: 2.2 }, '<')
      .to('#node-2 .node-bg', { stroke: '#2FBF71', strokeWidth: 5, duration: 2.2 }, '<')
      .to('#node-2 .node-ripple', { scale: 1.8, opacity: 0.7, duration: 2.2 }, '<')

      // Milestone 2 to 3
      .to('#story-rocket', {
        motionPath: {
          path: '#flight-path',
          autoRotate: true,
          align: '#flight-path',
          alignOrigin: [0.5, 0.5],
          start: 0.528,
          end: 0.628
        },
        duration: 1.0,
        ease: 'power1.inOut'
      })
      // Highlight & Park at Milestone 3
      .to('#milestone-card-3', { opacity: 1, y: 0, scale: 1.05, duration: 2.2 })
      .to('#node-3 .node-core', { fill: '#2FBF71', scale: 1.4, duration: 2.2 }, '<')
      .to('#node-3 .node-bg', { stroke: '#2FBF71', strokeWidth: 5, duration: 2.2 }, '<')
      .to('#node-3 .node-ripple', { scale: 1.8, opacity: 0.7, duration: 2.2 }, '<')

      // Milestone 3 to 4
      .to('#story-rocket', {
        motionPath: {
          path: '#flight-path',
          autoRotate: true,
          align: '#flight-path',
          alignOrigin: [0.5, 0.5],
          start: 0.628,
          end: 0.728
        },
        duration: 1.0,
        ease: 'power1.inOut'
      })
      // Highlight & Park at Milestone 4
      .to('#milestone-card-4', { opacity: 1, y: 0, scale: 1.05, duration: 2.2 })
      .to('#node-4 .node-core', { fill: '#2FBF71', scale: 1.4, duration: 2.2 }, '<')
      .to('#node-4 .node-bg', { stroke: '#2FBF71', strokeWidth: 5, duration: 2.2 }, '<')
      .to('#node-4 .node-ripple', { scale: 1.8, opacity: 0.7, duration: 2.2 }, '<')

      // Milestone 4 to 5
      .to('#story-rocket', {
        motionPath: {
          path: '#flight-path',
          autoRotate: true,
          align: '#flight-path',
          alignOrigin: [0.5, 0.5],
          start: 0.728,
          end: 0.828
        },
        duration: 1.0,
        ease: 'power1.inOut'
      })
      // Highlight & Park at Milestone 5
      .to('#milestone-card-5', { opacity: 1, y: 0, scale: 1.05, duration: 2.2 })
      .to('#node-5 .node-core', { fill: '#2FBF71', scale: 1.4, duration: 2.2 }, '<')
      .to('#node-5 .node-bg', { stroke: '#2FBF71', strokeWidth: 5, duration: 2.2 }, '<')
      .to('#node-5 .node-ripple', { scale: 1.8, opacity: 0.7, duration: 2.2 }, '<')

      // Milestone 5 to 6
      .to('#story-rocket', {
        motionPath: {
          path: '#flight-path',
          autoRotate: true,
          align: '#flight-path',
          alignOrigin: [0.5, 0.5],
          start: 0.828,
          end: 0.928
        },
        duration: 1.0,
        ease: 'power1.inOut'
      })
      // Highlight & Park at Milestone 6
      .to('#milestone-card-6', { opacity: 1, y: 0, scale: 1.05, duration: 2.2 })
      .to('#node-6 .node-core', { fill: '#2FBF71', scale: 1.4, duration: 2.2 }, '<')
      .to('#node-6 .node-bg', { stroke: '#2FBF71', strokeWidth: 5, duration: 2.2 }, '<')
      .to('#node-6 .node-ripple', { scale: 1.8, opacity: 0.7, duration: 2.2 }, '<')

      // Exit off-screen
      .to('#story-rocket', {
        motionPath: {
          path: '#flight-path',
          autoRotate: true,
          align: '#flight-path',
          alignOrigin: [0.5, 0.5],
          start: 0.928,
          end: 0.98
        },
        duration: 0.5,
        ease: 'power1.in'
      });

    // Synchronize active glowing trail stroke drawing (matches total duration 6*1.0 + 6*2.2 + 0.5 = 19.7)
    flightTimeline.to('#glowing-trail', {
      strokeDashoffset: 0,
      ease: 'none',
      duration: 19.7
    }, 0);

    // Counters scroll trigger count-up (standard fallback triggers)
    const counters = document.querySelectorAll('.counter-number');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const isPercent = counter.getAttribute('data-percent') === 'true';
      const suffix = isPercent ? '%' : '+';

      gsap.fromTo(counter, {
        innerText: 0
      }, {
        innerText: target,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '.social-proof',
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          counter.innerText = Math.ceil(counter.innerText) + suffix;
        }
      });
    });
  }

  // ==========================================
  // 11. FEATURE MODAL OVERLAY TRIGGER BLOCKS
  // ==========================================

  const featureCards = document.querySelectorAll('.feature-card');
  const featureOverlay = document.getElementById('feature-modal-overlay');
  const featureCloseBtn = document.getElementById('feature-modal-close-btn');

  function openFeatureModal(card) {
    const iconClass = card.querySelector('.feature-icon-wrapper i').className;
    const title = card.querySelector('h3').innerText;
    const desc = card.querySelector('p').innerText;

    const modalIcon = document.getElementById('feature-modal-icon');
    const modalTitle = document.getElementById('feature-modal-title');
    const modalDesc = document.getElementById('feature-modal-desc');

    modalIcon.innerHTML = `<i class="${iconClass}"></i>`;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;

    featureOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeFeatureModal() {
    featureOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  featureCards.forEach(card => {
    card.addEventListener('click', () => openFeatureModal(card));
  });

  if (featureCloseBtn) {
    featureCloseBtn.addEventListener('click', closeFeatureModal);
  }
  if (featureOverlay) {
    featureOverlay.addEventListener('click', (e) => {
      if (e.target === featureOverlay) closeFeatureModal();
    });
  }

  // ==========================================
  // 12. FLOATING NEXORA CHATBOT ADVISOR
  // ==========================================

  const chatbotToggle = document.getElementById('chatbot-toggle-bubble');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotCloseWidget = document.getElementById('chatbot-close-btn-widget');
  const chatbotForm = document.getElementById('chatbot-input-form');
  const chatbotInput = document.getElementById('chatbot-input-field');
  const chatbotMessages = document.getElementById('chatbot-messages-list');
  const chatbotBadge = document.querySelector('.chatbot-badge');

  // Toggle chatbot panel open/close
  if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
      chatbotWindow.classList.toggle('active');
      if (chatbotBadge) chatbotBadge.style.display = 'none'; // Clear notification badge
    });
  }

  if (chatbotCloseWidget) {
    chatbotCloseWidget.addEventListener('click', () => {
      chatbotWindow.classList.remove('active');
    });
  }

  // Append single message to panel list
  function appendChatMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.innerHTML = `<p>${text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`;
    chatbotMessages.appendChild(messageDiv);

    // Auto scroll bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    return messageDiv;
  }

  // Show typing loader
  function showChatTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'chatbot-typing-indicator';
    indicator.id = 'chat-typing-loader';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    chatbotMessages.appendChild(indicator);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function removeChatTypingIndicator() {
    const indicator = document.getElementById('chat-typing-loader');
    if (indicator) indicator.remove();
  }

  // Fallback local NLP router if API key fails or CORS blocks requests
  function getLocalBotResponse(query) {
    const lower = query.toLowerCase();

    if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing') || lower.includes('fee')) {
      return "Individual paths are starting at **₹999 INR only**. Alternatively, you can unlock lifetime access to all 4 pathways (Career Mastery, Innovation, Career Essentials, and CS Foundations) with our **All-in-One Lifetime Bundle for ₹4,499 INR**! 🚀";
    }
    if (lower.includes('placement') || lower.includes('job') || lower.includes('referral') || lower.includes('hire')) {
      return "Nexora provides direct **placement referral assistance**. Students completing their capstone portfolios become eligible for direct admissions intros and warm referrals to our **30+ partner companies** and startups! 💼";
    }
    if (lower.includes('mentor') || lower.includes('teacher') || lower.includes('advisor')) {
      return "Our mentors are practitioners working at top organizations like Nexora Foundations and Global Talent Academy. This includes experts like **Devendra Singh** (Lead Systems Engineer) and **Anjali Sharma** (Communication Architect).";
    }
    if (lower.includes('course') || lower.includes('syllabus') || lower.includes('path') || lower.includes('learn')) {
      return "We offer 4 specialized tracks: \n1. **Career & Communication Mastery** (Public Speaking, Interviews) \n2. **Innovation & Future Skills** (AI Prompting, Startup Ideation) \n3. **Career Essentials** (Marketing, Outreaches) \n4. **Core Computer Foundations** (Operating Systems, DBMS, OOP). Click on any path card to view the detailed outline!";
    }
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      return "Hello! I am NEXORA, your Admissions Advisor. How can I help you accelerate your career preparation today? Ask me about our courses, pricing, or referrals! 😊";
    }
    return "I am NEXORA, your Cohort Advisor! I recommend exploring our **All-in-One Bundle (₹4,499)** for complete lifetime eligibility or getting in touch with our admissions desk at **+91 94921 82286** for direct counselor support! 🚀";
  }

  // Handle message submission
  if (chatbotForm) {
    chatbotForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const userText = chatbotInput.value.trim();
      if (!userText) return;

      // Add user message
      appendChatMessage(userText, 'user');
      chatbotInput.value = '';

      // Show typing load
      showChatTypingIndicator();

      const apiKey = "";

      try {
        // Send request to Sarvam AI completions API
        const response = await fetch("https://api.sarvam.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-subscription-key": apiKey
          },
          body: JSON.stringify({
            model: "sarvam-2b", // Indic-optimized small conversational model
            messages: [
              {
                role: "system",
                content: "You are NEXORA, a helpful, friendly, and premium AI admissions advisor for NEXORA - Future Launchpad. You answer student questions about courses (Career & Communication Mastery, Innovation & Future Skills, Career Essentials, Core Computer Foundations), pricing (₹999 per track, ₹4,499 lifetime bundle), mentors (Devendra Singh, Anjali Sharma), and placement referrals (30+ partner companies). Keep your answers concise (1-2 sentences), highly encouraging, professional, and clear."
              },
              {
                role: "user",
                content: userText
              }
            ],
            temperature: 0.3
          })
        });

        removeChatTypingIndicator();

        if (response.ok) {
          const data = await response.json();
          const botReply = data.choices[0].message.content;
          appendChatMessage(botReply, 'bot');
        } else {
          // Degrade gracefully to local NLP response on bad HTTP status
          const fallbackReply = getLocalBotResponse(userText);
          appendChatMessage(fallbackReply, 'bot');
        }
      } catch (err) {
        // Degrade gracefully on CORS blocks or network cuts
        removeChatTypingIndicator();
        const fallbackReply = getLocalBotResponse(userText);
        appendChatMessage(fallbackReply, 'bot');
      }
    });
  }
});
