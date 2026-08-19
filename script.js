/* =====================================================
   LECTRIASABER 2.0
   JAVASCRIPT PRINCIPAL
   Leer • Escribir • Hablar • Comprender
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("LectriaSaber 2.0 iniciado correctamente 🚀");


    /* =====================================================
       MENÚ MÓVIL
    ===================================================== */

    const menuBtn = document.getElementById("menu-btn");
    const nav = document.querySelector(".nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            const abierto = nav.classList.contains("active");

            menuBtn.setAttribute(
                "aria-label",
                abierto ? "Cerrar menú" : "Abrir menú"
            );

            menuBtn.textContent = abierto ? "✕" : "☰";
        });


        /* Cerrar menú al seleccionar una opción */

        const enlacesMenu = nav.querySelectorAll("a");

        enlacesMenu.forEach((enlace) => {

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


    /* =====================================================
       NAVEGACIÓN SUAVE
    ===================================================== */

    const enlacesInternos = document.querySelectorAll(
        'a[href^="#"]'
    );

    enlacesInternos.forEach((enlace) => {

        enlace.addEventListener("click", (evento) => {

            const destino = enlace.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const elemento = document.querySelector(destino);

            if (elemento) {

                evento.preventDefault();

                const alturaHeader =
                    document.querySelector(".header")?.offsetHeight || 0;

                const posicion =
                    elemento.getBoundingClientRect().top +
                    window.scrollY -
                    alturaHeader;

                window.scrollTo({
                    top: posicion,
                    behavior: "smooth"
                });

            }

        });

    });


    /* =====================================================
       BOTONES DE LECTURA
    ===================================================== */

    const botonesLectura =
        document.querySelectorAll(".level-card .card-btn");

    botonesLectura.forEach((boton, indice) => {

        boton.addEventListener("click", () => {

            const mensajes = [
                "📖 Aventuras con las letras estará disponible muy pronto.",
                "📚 Historias que cobran vida estará disponible muy pronto.",
                "📖 La Biblioteca de LectriaSaber estará disponible muy pronto."
            ];

            mostrarMensaje(
                mensajes[indice] ||
                "📚 Esta sección estará disponible próximamente."
            );

        });

    });


    /* =====================================================
       BOTONES PRUEBAS SABER
    ===================================================== */

    const botonesSaber =
        document.querySelectorAll(".saber-card button");

    botonesSaber.forEach((boton) => {

        boton.addEventListener("click", () => {

            mostrarMensaje(
                "🎯 Esta prueba estará disponible próximamente en LectriaSaber 2.0."
            );

        });

    });


    /* =====================================================
       BOTONES DE PLANES
    ===================================================== */

    const botonesPlanes =
        document.querySelectorAll(".plan-btn");

    botonesPlanes.forEach((boton, indice) => {

        boton.addEventListener("click", () => {

            if (indice === 0) {

                mostrarMensaje(
                    "🆓 El plan Gratis te permitirá comenzar a explorar LectriaSaber 2.0."
                );

            } else if (indice === 1) {

                mostrarMensaje(
                    "⭐ El plan Plus estará disponible próximamente."
                );

            } else if (indice === 2) {

                mostrarMensaje(
                    "👨‍🏫 El espacio Docente estará disponible próximamente."
                );

            } else {

                mostrarMensaje(
                    "🏫 El plan Institucional estará disponible próximamente."
                );

            }

        });

    });


    /* =====================================================
       BOTÓN ESPACIO DOCENTE
    ===================================================== */

    const botonDocente =
        document.querySelector(".teacher-info .btn");

    if (botonDocente) {

        botonDocente.addEventListener("click", () => {

            const planes =
                document.getElementById("planes");

            if (planes) {

                const alturaHeader =
                    document.querySelector(".header")?.offsetHeight || 0;

                const posicion =
                    planes.getBoundingClientRect().top +
                    window.scrollY -
                    alturaHeader;

                window.scrollTo({
                    top: posicion,
                    behavior: "smooth"
                });

            }

        });

    }


    /* =====================================================
       INTERACCIÓN DE LETRÍN
    ===================================================== */

    const mascot =
        document.querySelector(".mascot");

    const mascotCard =
        document.querySelector(".mascot-card");

    if (mascot && mascotCard) {

        mascot.style.cursor = "pointer";

        mascot.addEventListener("click", () => {

            mostrarMensaje(
                "🦊 ¡Hola! Soy Letrín. Vamos a descubrir juntos el maravilloso mundo de las palabras."
            );

        });

    }


    /* =====================================================
       MENSAJE GENERAL
    ===================================================== */

    function mostrarMensaje(texto) {

        const mensajeAnterior =
            document.querySelector(".lectria-mensaje");

        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }


        const mensaje =
            document.createElement("div");

        mensaje.className = "lectria-mensaje";

        mensaje.textContent = texto;


        mensaje.style.position = "fixed";
        mensaje.style.left = "50%";
        mensaje.style.bottom = "25px";
        mensaje.style.transform = "translateX(-50%)";

        mensaje.style.width = "min(90%, 520px)";

        mensaje.style.padding = "16px 20px";

        mensaje.style.background = "#172554";
        mensaje.style.color = "#ffffff";

        mensaje.style.borderRadius = "14px";

        mensaje.style.textAlign = "center";

        mensaje.style.fontWeight = "700";

        mensaje.style.boxShadow =
            "0 15px 35px rgba(0,0,0,0.20)";

        mensaje.style.zIndex = "9999";

        mensaje.style.animation =
            "mensajeEntrada 0.3s ease";


        document.body.appendChild(mensaje);


        setTimeout(() => {

            mensaje.style.opacity = "0";

            mensaje.style.transition =
                "opacity 0.3s ease";

            setTimeout(() => {

                mensaje.remove();

            }, 300);

        }, 3500);

    }


    /* =====================================================
       ANIMACIÓN DE MENSAJES
    ===================================================== */

    const estilo =
        document.createElement("style");

    estilo.textContent = `

        @keyframes mensajeEntrada {

            from {
                opacity: 0;
                transform:
                    translate(-50%, 20px);
            }

            to {
                opacity: 1;
                transform:
                    translate(-50%, 0);
            }

        }

    `;

    document.head.appendChild(estilo);


    /* =====================================================
       CERRAR MENÚ SI SE AMPLÍA LA VENTANA
    ===================================================== */

    window.addEventListener("resize", () => {

        if (
            window.innerWidth > 760 &&
            nav
        ) {

            nav.classList.remove("active");

            if (menuBtn) {
                menuBtn.textContent = "☰";
            }

        }

    });

});
