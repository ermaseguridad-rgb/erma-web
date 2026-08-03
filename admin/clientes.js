import { db } from "../firebase.js/firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

    const btnGuardar = document.getElementById("guardarCliente");

   if (btnGuardar) {

    btnGuardar.addEventListener("click", async () => {

        const nombre = document.getElementById("nombre").value;
        const empresa = document.getElementById("empresa").value;
        const telefono = document.getElementById("telefono").value;
        const correo = document.getElementById("correo").value;
        const direccion = document.getElementById("direccion").value;
        const estado = document.getElementById("estado").value;

        try {

            await addDoc(collection(db, "clientes"), {

                nombre,
                empresa,
                telefono,
                correo,
                direccion,
                estado,
                fechaRegistro: new Date()

            });

            alert("✅ Cliente guardado correctamente.");

            modal.style.display = "none";

        } catch (error) {

            console.error(error);

            alert("Error al guardar.");

        }

    });

}

    console.log("✅ ERMA OS - Clientes iniciado correctamente");

};
