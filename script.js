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

            nav.classList.toggle("active");

            const abierto = nav.classList.contains("active");

            menuBtn.textContent = abierto ? "✕" : "☰";

        });


        /* Cerrar menú al seleccionar una opción */

        const enlacesNav = nav.querySelectorAll("a");

        enlacesNav.forEach((enlace) => {

            enlace.addEventListener("click", () => {

                nav.classList.remove("active");

                menuBtn.textContent = "☰";

            });

        });

    }


    /* =================================================
       NAVEGACIÓN SUAVE
    ================================================= */

    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach((enlace) => {

        enlace.addEventListener("click", (evento) => {

            const destino = enlace.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const elemento = document.querySelector(destino);

            if (!elemento) {
                return;
            }

            evento.preventDefault();

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =================================================
       BOTONES DE TARJETAS
    ================================================= */

    const botonesTarjetas = document.querySelectorAll(".card-btn");

    botonesTarjetas.forEach((boton) => {

        boton.addEventListener("click", () => {

            mostrarMensaje(
                "📚 Próximamente",
                "Estamos preparando nuevas actividades para esta sección."
            );

        });

    });


    /* =================================================
       BOTONES DE PRUEBAS SABER
    ================================================= */

    const botonesSaber = document.querySelectorAll(".saber-card button");

    botonesSaber.forEach((boton) => {

        boton.addEventListener("click", () => {

            mostrarMensaje(
                "🎯 Ruta Saber",
                "Los simulacros y actividades de esta sección estarán disponibles próximamente."
            );

        });

    });


    /* =================================================
       MENSAJE MODAL
    ================================================= */

    function mostrarMensaje(titulo, texto) {

        const modalExistente = document.querySelector(".modal-mensaje");

        if (modalExistente) {
            modalExistente.remove();
        }


        const modal = document.createElement("div");

        modal.className = "modal-mensaje";


        modal.innerHTML = `

            <div class="modal-contenido">

                <button
                    class="modal-cerrar"
                    aria-label="Cerrar"
                >
                    ✕
                </button>

                <div class="modal-icono">
                    🦊
                </div>

                <h2>${titulo}</h2>

                <p>${texto}</p>

                <button class="modal-ok">
                    Entendido
                </button>

            </div>

        `;


        document.body.appendChild(modal);


        const cerrar = () => {
            modal.remove();
        };


        modal.querySelector(".modal-cerrar")
            .addEventListener("click", cerrar);


        modal.querySelector(".modal-ok")
            .addEventListener("click", cerrar);


        modal.addEventListener("click", (evento) => {

            if (evento.target === modal) {
                cerrar();
            }

        });

    }


    /* =================================================
       CERRAR MODAL CON ESC
    ================================================= */

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {

            const modal = document.querySelector(".modal-mensaje");

            if (modal) {
                modal.remove();
            }

        }

    });

});
