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
    // Generar QR automáticamente
const urlRecibo = window.location.href;

new QRCode(document.getElementById("qrRecibo"), {
    text: urlRecibo,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
    document.getElementById("qrRecibo").src =
"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
encodeURIComponent(window.location.href);
  })
 .catch(error => console.log(error));
    document.getElementById("btnSitio").onclick = () => {
        window.open("https://ermaseguridad-rgb.github.io/erma-web/","_blank");
    };

    document.getElementById("btnPDF").onclick = () => {
        window.print();
    };

