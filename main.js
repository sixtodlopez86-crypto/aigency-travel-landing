// Language Dictionary
const translations = {
    es: {
        nav_problem: "El Problema",
        nav_solution: "La Solución",
        nav_benefits: "Beneficios",
        nav_cta: "Mapa de Ruta GRATIS",

        hero_tag: "Exclusivo para Dueños",
        hero_title: "Deja de Perder.<br><span class=\"highlight\">Empieza a Ganar.</span>",
        hero_desc: "El mercado de las agencias de viajes ha cambiado. O te transformas en una **Agencia de Inteligencia** o te conviertes en historia. Te entregamos el mapa para dominar con el 1% de esfuerzo.",
        hero_cta: "¡Quiero El Mapa del Tesoro!",
        hero_benefit1: "+80% Tiempo Libre",
        hero_benefit2: "0% Fuga de Leads",

        comp_tag: "Análisis Competitivo",
        comp_title: "Por qué somos el <span style=\"color: var(--primary);\">Santo Grial</span>",
        comp_desc: "No compares un Ferrari con un triciclo. Mira la diferencia real entre sobrevivir y dominar el sector.",

        comp_col1: "Punto de Dolor",
        comp_col3: "Tu Agencia (Manual)",
        comp_col4: "Tu Agencia (AI)",

        comp_row1: "Capacidad de Ventas",
        comp_ab_row1: "30+ Cotizaciones/Día",
        comp_other_row1: "Solo Respuestas",
        comp_manual_row1: "3.5 Cotizaciones/Día",

        comp_row2: "Velocidad de Propuesta",
        comp_ab_row2: "8 Minutos (IA)",
        comp_other_row2: "Plantillas Rígidas",
        comp_manual_row2: "3 Hours (Manual)",

        comp_row3: "Conciliación Financiera",
        comp_ab_row3: "100% Recuperación",
        comp_other_row3: "Suscripción Fija",
        comp_manual_row3: "-$400k/año en Fugas",

        comp_row4: "Gestión de Sistemas",
        comp_ab_row4: "Unificado (MCP)",
        comp_other_row4: "Meses de Configuración",
        comp_manual_row4: "12 Pantallas/Reserva",

        benefit_tag: "Beneficios de Élite",
        benefit_title: "Inyectamos <span style=\"color: var(--primary);\">Rendimiento Puro</span>",
        benefit_desc: "Convertimos tu agencia en una estructura esbelta, potente y extremadamente rentable.",

        benefit_1_title: "Operación 24/7 Sin Descanso",
        benefit_1_desc: "Mientras duermes, tu IA cierra ventas, responde objeciones y gestiona reservas. <strong style=\"color: var(--primary);\">Cero errores humanos. 100% de precisión.</strong>",

        benefit_2_title: "ROI Garantizado",
        benefit_2_desc: "Identificamos cada centavo que se escapa por no responder en 5 minutos. Con nosotros, <strong style=\"color: var(--primary);\">capturas cada lead al instante.</strong>",

        card_1_title: "Ejecución Instantánea",
        card_1_desc: "No más \"déjame revisar disponibilidad\". Tu IA responde en segundos con opciones reales y actualizadas.",

        card_2_title: "Blindaje de Margen",
        card_2_desc: "Eliminamos los costos de staff ocioso. Tu equipo virtual escala automáticamente según la demanda.",

        card_3_title: "Escalabilidad Real",
        card_3_desc: "¿Llegan 1000 cotizaciones hoy? Tu IA las atiende todas con la misma calidad que si fuera una sola.",

        steps_tag: "El Método",
        steps_title: "Tu Ruta Hacia el Tesoro",
        steps_desc: "Sin experimentos. Pasos probados para alcanzar la libertad operativa total.",

        step_1_title: "Escaneo de Fricción",
        step_1_desc: "Detectamos dónde estás tirando dinero y tiempo a la basura. Sin filtros.",

        step_2_title: "Inyección del Grial",
        step_2_desc: "Instalamos el motor Boost-Flow™ configurado específicamente para tu agencia.",

        step_3_title: "Escalado Masivo",
        step_3_desc: "Monitorizamos el ROI y ajustamos la potencia para que solo te preocupes de viajar.",

        cta_tag: "Oferta Limitada",
        cta_title: "Consigue Tu Auditoría de IA de Élite",
        cta_desc: "Analizaremos tu agencia y te entregaremos el plan exacto para automatizar el 80% de tus tareas. **Solo 3 sesiones disponibles esta semana.**",

        form_placeholder_agency: "Nombre Comercial de tu Agencia",
        form_placeholder_email: "Email VIP (Donde enviaremos el Mapa)",
        form_btn: "¡QUIERO MI MAPA DE RUTA!",
        form_disclaimer: "Sin spam. Solo valor estratégico de alto nivel.",

        form_submitting: "Calculando tu Mapa...",
        form_success: "¡Felicidades! 🎉\n\nTu solicitud para el \"Mapa del Tesoro\" ha sido procesada.\nUn asesor de AIgency Boost te contactará por WhatsApp en breve para agendar tu auditoría sin costo.",

        footer_desc: "Transformamos agencias de viajes en potencias tecnológicas impulsadas por ROI.",
        footer_links_title: "Enlaces Rápidos",
        footer_contact_title: "Contacto Corporativo",
        footer_copyright: "&copy; 2026 AIgency Boost. Todos los derechos reservados. | \"Boost Your Future with AI\""
    },
    en: {
        nav_problem: "The Bottleneck",
        nav_solution: "The Solution",
        nav_benefits: "Elite Benefits",
        nav_cta: "Get FREE Analysis",

        hero_tag: "Exclusive for Agency Owners",
        hero_title: "Stop Being<br><span class=\"highlight\">Human Middleware.</span>",
        hero_desc: "Modern agencies are <b>Human Middleware</b>, copying data between GDS and NDC. Pivot to an <b>Autonomous Agency</b>: Proposals in 8 minutes, zero ADMs, and $400k+ recovered commissions.",
        hero_cta: "Get the 'Holy Grail' Map",
        hero_benefit1: "Turn 3h to 8m",
        hero_benefit2: "Zero Commission Leaks",

        comp_tag: "Competitive Reality",
        comp_title: "Manual vs. <span style=\"color: var(--primary);\">Autonomous</span>",
        comp_desc: "Running a manual agency in 2026 is like trying to cross the Atlantic in a rowboat. See the math:",

        comp_col1: "Critical Metric",
        comp_col3: "Your Agency (Manual)",
        comp_col4: "With AIgency Boost",

        comp_row1: "Sales Capacity",
        comp_ab_row1: "30+ Quotes/Day",
        comp_other_row1: "Replies Only",
        comp_manual_row1: "3.5 Quotes/Day",

        comp_row2: "Proposal Speed",
        comp_ab_row2: "8 Minutes (IA)",
        comp_other_row2: "Rigid Templates",
        comp_manual_row2: "3 Hours (Manual)",

        comp_row3: "Financial Reconciliation",
        comp_ab_row3: "100% Recovery",
        comp_other_row3: "Fixed Subscription",
        comp_manual_row3: "-$400k/yr Leaks",

        comp_row4: "System Chaos",
        comp_ab_row4: "Unified (MCP)",
        comp_other_row4: "Months of Setup",
        comp_manual_row4: "12 Screens/Booking",

        benefit_tag: "Elite Benefits",
        benefit_title: "We Inject <span style=\"color: var(--primary);\">Pure Performance</span>",
        benefit_desc: "We turn your agency into a lean, powerful, and extremely profitable structure.",

        benefit_1_title: "24/7 Operation No Breaks",
        benefit_1_desc: "While you sleep, your AI closes sales, handles objections, and manages bookings. <strong style=\"color: var(--primary);\">Zero human errors. 100% precision.</strong>",

        benefit_2_title: "Guaranteed ROI",
        benefit_2_desc: "We identify every penny leaking from 5+ minute response times. With us, <strong style=\"color: var(--primary);\">you capture every lead instantly.</strong>",

        card_1_title: "Instant Execution",
        card_1_desc: "No more \"let me check availability\". Your AI responds in seconds with real, updated options.",

        card_2_title: "Margin Armor",
        card_2_desc: "Eliminate idle staff costs. Your virtual team scales automatically based on demand.",

        card_3_title: "True Scalability",
        card_3_desc: "1000 quotes today? Your AI handles them all with the same quality as if it were just one.",

        steps_tag: "The Method",
        steps_title: "Your Route To The Treasure",
        steps_desc: "No experiments. Proven steps to achieve total operational freedom.",

        step_1_title: "Friction Scan",
        step_1_desc: "We detect where you are throwing money and time away. No filters.",

        step_2_title: "Grail Injection",
        step_2_desc: "We install the Boost-Flow™ engine specifically configured for your agency.",

        step_3_title: "Massive Scaling",
        step_3_desc: "We monitor ROI and adjust power so you only worry about traveling.",

        cta_tag: "Limited Offer",
        cta_title: "Get Your Elite AI Audit",
        cta_desc: "We'll analyze your agency and hand you the exact plan to automate 80% of your tasks. **Only 3 sessions available this week.**",

        form_placeholder_agency: "Your Agency Trade Name",
        form_placeholder_email: "VIP Email (Where we define the Map)",
        form_btn: "I WANT MY ROADMAP!",
        form_disclaimer: "Sin spam. Solo valor estratégico de alto nivel.",

        form_submitting: "Calculando tu Mapa...",
        form_success: "¡Felicidades! 🎉\n\nTu solicitud para el \"Mapa del Tesoro\" ha sido procesada.\nUn asesor de AIgency Boost te contactará por WhatsApp en breve para agendar tu auditoría sin costo.",

        footer_desc: "Transformamos agencias de viajes en potencias tecnológicas impulsadas por ROI.",
        footer_links_title: "Enlaces Rápidos",
        footer_contact_title: "Contacto Corporativo",
        footer_copyright: "&copy; 2026 AIgency Boost. Todos los derechos reservados. | \"Boost Your Future with AI\""
    }
};

// Language Toggle Logic
let currentLang = localStorage.getItem(\'lang\') || \'es\';

function updateLanguage(lang) {
    // 1. Text Content Update
    document.querySelectorAll(\'[data-i18n]\').forEach(element =\u003e {
        const key = element.getAttribute(\'data-i18n\');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // 2. Placeholder Attribute Update
    document.querySelectorAll(\'[data-i18n-placeholder]\').forEach(element =\u003e {
        const key = element.getAttribute(\'data-i18n-placeholder\');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // 3. Toggle Button UI Update
    const langIcon = document.getElementById(\'langIcon\');
    const langText = document.getElementById(\'langText\');
    if (langIcon \u0026\u0026 langText) {
        if (lang === \'es\') {
            langIcon.src = "https://flagcdn.com/w20/es.png";
            langIcon.alt = "ES";
            langText.innerText = "ES";
        } else {
            langIcon.src = "https://flagcdn.com/w20/us.png";
            langIcon.alt = "EN";
            langText.innerText = "EN";
        }
    }

    // 4. Update Html Lang Attribute
    document.documentElement.lang = lang;

    // 5. Save Preference
    localStorage.setItem(\'lang\', lang);
    currentLang = lang;
}

document.addEventListener(\'DOMContentLoaded\', () => {
    // Initialize Language
    updateLanguage(currentLang);

    // Toggle Event Listener
    const langBtn = document.getElementById(\'langToggle\');
    if (langBtn) {
        langBtn.addEventListener(\'click\', () => {
            const newLang = currentLang === \'es\' ? \'en\' : \'es\';
            updateLanguage(newLang);
        });
    }

    // Header Scroll Effect
    const header = document.getElementById(\'header\');
    window.addEventListener(\'scroll\', () => {
        if (window.scrollY \u003e 50) {
            header.classList.add(\'scrolled\');
        } else {
            header.classList.remove(\'scrolled\');
        }
    });

    // Staggered Reveal Animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: \'0px 0px -50px 0px\'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry =\u003e {
            if (entry.isIntersecting) {
                entry.target.classList.add(\'active\');
            }
        });
    }, observerOptions);

    document.querySelectorAll(\'.reveal\').forEach(el =\u003e observer.observe(el));

    // Lead Form Submission
    const leadForm = document.getElementById(\'leadForm\');
    // ⚠️ TODO: Replace with your Production CRM URL
    const WEBHOOK_URL = "https://aigency-boost-crm.vercel.app/api/leads";

    if (leadForm) {
        leadForm.addEventListener(\'submit\', async (e) => {
            e.preventDefault();
            const submitBtn = leadForm.querySelector(\'button[type="submit"]\');

            const submittingText = translations[currentLang][\'form_submitting\'];
            const successText = translations[currentLang][\'form_success\'];
            const originalTextKey = submitBtn.getAttribute(\'data-i18n\');
            const originalText = translations[currentLang][originalTextKey] || submitBtn.innerText;

            // 1. Lock UI
            submitBtn.innerText = submittingText;
            submitBtn.disabled = true;

            // 2. Prepare Data
            const formData = new FormData(leadForm);
            // Map to CRM \'leads\' table columns
            const data = {
                company_name: formData.get(\'agency\'),
                email_corporate: formData.get(\'email\'),
                first_name: "Lead", // Default name
                last_name: "Web",   // Default last name
                lead_source: \'landing_page_travel\', // Custom field if you add it, or just for metadata
                status_lead: \'Nuevo\',
                urgency_level: \'Alta\', // Hot lead from landing page
                bitacora: [{
                    title: "Lead Capturado",
                    desc: "Origen: Landing Page Agencias de Viaje",
                    time: new Date().toISOString(),
                    icon_type: "flag"
                }]
            };

            try {
                // 3. Send Data
                const response = await fetch(WEBHOOK_URL, {
                    method: \'POST\',
                    headers: {
                        \'Content-Type\': \'application/json\',
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) throw new Error(\'Network response was not ok\');

                // 4. Success State
                alert(successText);
                leadForm.reset();

            } catch (error) {
                console.error(\'Error:\', error);
                alert("Hubo un error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp.");
            } finally {
                // 5. Reset UI
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll(\'a[href^="#"]\').forEach(anchor =\u003e {
        anchor.addEventListener(\'click\', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute(\'href\'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});