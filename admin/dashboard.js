import { db } from "../firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

console.log("Dashboard ERMA iniciado");

async function cargarDashboard() {

    try {

        // RECIBOS
        const recibos = await getDocs(collection(db, "recibos"));
        document.getElementById("totalRecibos").textContent = recibos.size;

        // GUARDIAS
        const guardias = await getDocs(collection(db, "guardias"));
        document.getElementById("totalGuardias").textContent = guardias.size;

        // CLIENTES
        const clientes = await getDocs(collection(db, "clientes"));
        document.getElementById("totalClientes").textContent = clientes.size;

        // RONDINES
        const rondines = await getDocs(collection(db, "rondines"));
        document.getElementById("totalRondines").textContent = rondines.size;

        console.log("Dashboard actualizado");

    } catch (error) {

        console.error(error);

    }

}

cargarDashboard();
