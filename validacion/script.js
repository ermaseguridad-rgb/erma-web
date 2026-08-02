[11:04 p.m., 1/8/2026] Claudia Silva 💋: const params = new URLSearchParams(window.location.search);
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
    document.getElementById("f…
[11:18 p.m., 1/8/2026] Claudia Silva 💋: const params = new URLSearchParams(window.location.search);
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

    // Generar QR
    new QRCode(document.getElementById("qrRecibo"), {
        text: window.location.href,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Botón Sitio Oficial
    document.getElementById("btnSitio").addEventListener("click", () => {
        window.open("https://ermaseguridad-rgb.github.io/erma-web/", "_blank");
    });

    // Botón Descargar PDF
    document.getElementById("btnPDF").addEventListener("click", () => {
        window.print();
    });

  })
  .catch(error => {
    console.error(error);
    alert("Error al cargar el recibo.");
  });
