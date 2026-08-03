// ==========================================
// ERMA OS
// Módulo Clientes
// ==========================================

window.onload = function () {

    const btnNuevo = document.getElementById("btnNuevo");
    const modal = document.getElementById("modalCliente");
    const cerrar = document.getElementById("cerrarModal");

    if (!btnNuevo || !modal || !cerrar) {

        console.error("ERMA OS: No se encontraron los elementos del modal.");

        return;

    }

    btnNuevo.addEventListener("click", () => {

        modal.style.display = "block";

    });

    cerrar.addEventListener("click", () => {

        modal.style.display = "none";

    });

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

    console.log("✅ ERMA OS - Clientes iniciado correctamente");

};
