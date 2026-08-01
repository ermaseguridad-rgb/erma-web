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
    document.getElementById("periodo").textContent = recibo.periodo;
    document.getElementById("importe").textContent = recibo.importe;

  })
  .catch(error => console.log(error));
