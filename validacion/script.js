const params = new URLSearchParams(window.location.search);
const folioBuscado = params.get("folio");

fetch("recibos.json")
  .then(response => response.json())
  .then(datos => {

    const recibo = datos.find(r => r.folio === folioBuscado);

    if (!recibo) {
      alert("Recibo no encontrado");
      return;
    }

   document.getElementById("folio").textContent = recibo.folio;
document.getElementById("cliente").textContent = recibo.cliente;
document.getElementById("concepto").textContent = recibo.concepto;
document.getElementById("periodo").textContent = recibo.periodo;
document.getElementById("importe").textContent = recibo.importe;
document.getElementById("formaPago").textContent = recibo.formaPago;
document.getElementById("fecha").textContent = recibo.fecha;
document.getElementById("codigo").textContent = recibo.codigo;
document.getElementById("estado").textContent = recibo.estado;
  })
  .catch(error => console.log(error));
