fetch("recibos.json")
.then(response => response.json())
.then(datos => {const recibo = datos[0];
document.getElementById("folio").textContent = recibo.folio;
document.getElementById("empleado").textContent = recibo.empleado;
document.getElementById("puesto").textContent = recibo.puesto;
document.getElementById("periodo").textContent = recibo.periodo;
document.getElementById("importe").textContent = recibo.importe;}
})
.catch(error => console.log(error));
