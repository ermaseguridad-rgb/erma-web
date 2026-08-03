const btnNuevo = document.getElementById("btnNuevo");
const modal = document.getElementById("modalCliente");
const cerrar = document.getElementById("cerrarModal");

btnNuevo.onclick = () => {

    modal.style.display = "block";

};

cerrar.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e)=>{

    if(e.target==modal){

        modal.style.display="none";

    }

};
