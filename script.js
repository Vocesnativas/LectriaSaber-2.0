/* =====================================================
   LECTRIASABER 2.0
   JAVASCRIPT PRINCIPAL
   Leer • Escribir • Hablar • Comprender
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("LectriaSaber 2.0 iniciado correctamente 🚀");


    /* =================================================
       MENÚ MÓVIL
    ================================================= */

    const menuBtn = document.getElementById("menu-btn");
    const nav = document.querySelector(".nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            const abierto = nav.classList.toggle("active");

            menuBtn.textContent = abierto ? "✕" : "☰";

            menuBtn.setAttribute(
                "aria-label",
                abierto ? "Cerrar menú" : "Abrir menú"
            );

        });


        nav.querySelectorAll("a").forEach((enlace) => {

            enlace.addEventListener("click", () => {

                nav.classList.remove("active");

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Abrir menú"
                );

            });

        });

    }


    /* =================================================
       RESPONSIVE — CERRAR MENÚ
    ================================================= */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 760 && nav && menuBtn) {

            nav.classList.remove("active");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Abrir menú"
            );

        }

    });


    /* =================================================
       BOTONES DE LECTURA
    ================================================= */

    const botonesLectura = document.querySelectorAll(".card-btn");

    botonesLectura.forEach((boton) => {

        boton.addEventListener("click", () => {

            mostrarMensaje(
                "📖 Próximamente",
                "Estamos preparando cuentos, lecturas, actividades y experiencias interactivas para LectriaSaber 2.0."
            );

        });

    });


    /* =================================================
       PRUEBAS SABER
    ================================================= */

    const botonesSaber =
        document.querySelectorAll(".saber-card button");

    botonesSaber.forEach((boton) => {

        boton.addEventListener("click", () => {

            mostrarMensaje(
                "🎯 Ruta Pruebas Saber",
                "Esta sección estará disponible próximamente con actividades de práctica, comprensión lectora y preguntas tipo Saber."
            );

        });

    });


    /* =================================================
       PLANES
    ================================================= */

    const botonesPlanes =
        document.querySelectorAll(".plan-btn");

    botonesPlanes.forEach((boton) => {

        boton.addEventListener("click", () => {

            const tarjeta = boton.closest(".plan-card");

            if (!tarjeta) return;

            const titulo =
                tarjeta.querySelector("h3")?.textContent.trim()
                || "Plan";


            if (titulo === "Gratis") {

                mostrarMensaje(
                    "🆓 Plan Gratis",
                    "Puedes comenzar a explorar LectriaSaber 2.0 y descubrir sus recursos educativos."
                );

            } else if (titulo === "Plus") {

                mostrarMensaje(
                    "⭐ Plan Plus",
                    "El plan Plus estará disponible próximamente con más actividades, lecturas y experiencias interactivas."
                );

            } else if (titulo === "Docente") {

                mostrarMensaje(
                    "👨‍🏫 Plan Docente",
                    "El espacio docente está en preparación para ofrecer herramientas de acompañamiento y seguimiento."
                );

            } else if (titulo === "Institucional") {

                mostrarMensaje(
                    "🏫 Plan Institucional",
                    "Próximamente podrás conocer las opciones para instituciones educativas."
                );

            }

        });

    });


    /* =================================================
       ESPACIO DOCENTE
    ================================================= */

    const botonDocente =
        document.querySelector(".teacher-info a");

    if (botonDocente) {

        botonDocente.addEventListener("click", (evento) => {

            evento.preventDefault();

            const planes =
                document.getElementById("planes");

            if (planes) {

                planes.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    /* =================================================
       MODAL
    ================================================= */

    function mostrarMensaje(titulo, texto) {

        cerrarMensaje();


        const modal = document.createElement("div");

        modal.className = "ls-modal";

        modal.innerHTML = `

            <div class="ls-modal-overlay"></div>

            <div
                class="ls-modal-box"
                role="dialog"
                aria-modal="true"
                aria-labelledby="ls-modal-title">

                <button
                    class="ls-modal-close"
                    aria-label="Cerrar">
                    ✕
                </button>

                <div class="ls-modal-icon">
                    📚
                </div>

                <h2 id="ls-modal-title">
                    ${titulo}
                </h2>

                <p>
                    ${texto}
                </p>

                <button class="ls-modal-button">
                    Entendido
                </button>

            </div>

        `;


        document.body.appendChild(modal);


        const cerrarBtn =
            modal.querySelector(".ls-modal-close");

        const entendidoBtn =
            modal.querySelector(".ls-modal-button");

        const overlay =
            modal.querySelector(".ls-modal-overlay");


        cerrarBtn.addEventListener(
            "click",
            cerrarMensaje
        );

        entendidoBtn.addEventListener(
            "click",
            cerrarMensaje
        );

        overlay.addEventListener(
            "click",
            cerrarMensaje
        );

        cerrarBtn.focus();

    }


    /* =================================================
       CERRAR MODAL
    ================================================= */

    function cerrarMensaje() {

        const modal =
            document.querySelector(".ls-modal");

        if (modal) {
            modal.remove();
        }

    }


    /* =================================================
       TECLA ESC
    ================================================= */

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {

            cerrarMensaje();

        }

    });


    /* =================================================
       ANIMACIONES
    ================================================= */

    const elementosAnimados =
        document.querySelectorAll(
            ".info-card, .level-card, .skill-card, .saber-card, .plan-card, .teacher-box"
        );


    if ("IntersectionObserver" in window) {

        const observador =
            new IntersectionObserver(
                (entradas, observer) => {

                    entradas.forEach((entrada) => {

                        if (entrada.isIntersecting) {

                            entrada.target.classList.add(
                                "ls-visible"
                            );

                            observer.unobserve(
                                entrada.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        elementosAnimados.forEach((elemento) => {

            elemento.classList.add("ls-hidden");

            observador.observe(elemento);

        });

    }


    /* =================================================
       ESTILOS DEL MODAL Y ANIMACIONES
    ================================================= */

    const estilos = document.createElement("style");

    estilos.textContent = `

        .ls-modal {
            position: fixed;
            inset: 0;
            z-index: 9999;
        }

        .ls-modal-overlay {
            position: absolute;
            inset: 0;
            background: rgba(15, 23, 42, 0.65);
            backdrop-filter: blur(4px);
        }

        .ls-modal-box {
            position: relative;
            z-index: 2;

            width: min(460px, 90%);

            margin: 15vh auto 0;

            padding: 35px 30px;

            text-align: center;

            background: white;

            border-radius: 24px;

            box-shadow:
                0 25px 70px rgba(0, 0, 0, 0.25);

            animation:
                lsModalEntrada 0.25s ease;
        }

        .ls-modal-close {
            position: absolute;

            top: 14px;
            right: 14px;

            width: 36px;
            height: 36px;

            border: none;

            border-radius: 50%;

            background: #eef5ff;

            color: #2563EB;

            font-size: 18px;

            cursor: pointer;
        }

        .ls-modal-icon {
            font-size: 50px;

            margin-bottom: 10px;
        }

        .ls-modal-box h2 {
            margin-bottom: 10px;

            color: #173B8F;
        }

        .ls-modal-box p {
            margin-bottom: 25px;

            color: #64748B;

            line-height: 1.7;
        }

        .ls-modal-button {
            border: none;

            padding: 12px 25px;

            border-radius: 12px;

            background: #2563EB;

            color: white;

            font-weight: 800;

            cursor: pointer;
        }

        .ls-modal-button:hover {
            background: #173B8F;
        }

        .ls-hidden {
            opacity: 0;

            transform: translateY(20px);

            transition:
                opacity 0.6s ease,
                transform 0.6s ease;
        }

        .ls-visible {
            opacity: 1;

            transform: translateY(0);
        }

        @keyframes lsModalEntrada {

            from {
                opacity: 0;
                transform:
                    translateY(-20px)
                    scale(0.97);
            }

            to {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1);
            }

        }

        @media (prefers-reduced-motion: reduce) {

            .ls-hidden {
                opacity: 1;
                transform: none;
                transition: none;
            }

            .ls-modal-box {
                animation: none;
            }

        }

    `;

    document.head.appendChild(estilos);

});
