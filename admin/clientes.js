import { db } from "../firebase.js/firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// ==========================================
// ERMA OS
// Módulo Clientes
// ==========================================

async function cargarClientes() {

    const tbody = document.querySelector("#tablaClientes tbody");

    tbody.innerHTML = "";

    const consulta = await getDocs(collection(db, "clientes"));

    let numero = 1;

    consulta.forEach((doc) => {

        const cliente = doc.data();

        tbody.innerHTML += `
            <tr>
                <td>CL-${String(numero).padStart(3, "0")}</td>
                <td>${cliente.nombre}</td>
                <td>${cliente.estado}</td>
                <td>
                    <button>✏️</button>
                    <button>🗑️</button>
                </td>
            </tr>
        `;

        numero++;

    });

}

window.onload = function () {

    const btnNuevo = document.getElementById("btnNuevo");
    const modal = document.getElementById("modalCliente");
    const cerrar = document.getElementById("cerrarModal");

    if (!btnNuevo || !modal || !cerrar) {
cargarClientes();
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
            cargarClientes();
            modal.style.display = "none";

        } catch (error) {

            console.error(error);

            alert("Error al guardar.");

        }

    });

}

    async function cargarClientes() {

    const tbody = document.querySelector("#tablaClientes tbody");

    tbody.innerHTML = "";

    const consulta = await getDocs(collection(db, "clientes"));

    consulta.forEach((doc) => {

        const cliente = doc.data();

 
        tbody.innerHTML += `
            <tr>
                <td>${doc.id}</td>
                <td>${cliente.nombre}</td>
                <td>${cliente.estado}</td>
                <td>
                <button onclick="alert('Editar ${doc.id}')">
    Editar
</button>

<button onclick="alert('Eliminar ${doc.id}')">
    Eliminar
</button>
                </td>
            </tr>
        `;

    });

}
    cargarClientes();

window.eliminarCliente = async function(id) {

    const confirmar = confirm("¿Eliminar este cliente?");

    if (!confirmar) return;

    try {

        await deleteDoc(doc(db, "clientes", id));

        alert("✅ Cliente eliminado.");

        location.reload();

    } catch (error) {

        console.error(error);

        alert("Error al eliminar.");

    }

};
    
    console.log("✅ ERMA OS - Clientes iniciado correctamente");

};
