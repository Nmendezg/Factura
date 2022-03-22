var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var fecha = document.getElementById("fecha");
var guardar = document.getElementById("guardar");
var compra = document.getElementById("compra");
var generar = document.getElementById("generar");
var nomFac = document.getElementById("nomFac");
var apeFac = document.getElementById("apeFac");
var emaFac = document.getElementById("emaFac");
var telFac = document.getElementById("telFac");
var fecFac = document.getElementById("fecFac");
var prod = document.getElementById("producto");
var cant = document.getElementById("cantidad");
var precio = document.getElementById("precio");
var listaProductos = document.getElementById("listaProductos");
var listaCantidades=document.getElementById("listaCantidades");
var listaUnitarios=document.getElementById("listaUnitarios");
var listaTotales=document.getElementById("listaTotales");
var labelTotal=document.getElementById("labelTotal");


var nom = "";
var ape = "";
var ema = "";
var tel = "";
var fec = "";

var productos="";
var cantidades="";
var unitarios="";
var totales="";
var total=0;

guardar.addEventListener("click", function () {
    nom = nombre.value;
    ape = apellido.value;
    ema = email.value;
    tel = telefono.value;
    fec = fecha.value;

    localStorage.setItem("nom", nom);
    localStorage.setItem("ape", ape);
    localStorage.setItem("ema", ema);
    localStorage.setItem("tel", tel);
    localStorage.setItem("fec", fec);

    nomFac.innerHTML = localStorage.getItem("nom");
    apeFac.innerHTML = localStorage.getItem("ape");
    emaFac.innerHTML = localStorage.getItem("ema");
    telFac.innerHTML = localStorage.getItem("tel");
    fecFac.innerHTML = localStorage.getItem("fec");

})

compra.addEventListener("click", function () {
    productos=productos+"<br>"+prod.value;
    cantidades=cantidades+"<br>"+cant.value;
    unitarios=unitarios+"<br>"+"$"+precio.value;
    totales=totales+"<br>"+"$"+(parseInt(cant.value)*parseInt(precio.value))
    total=total+(parseInt(cant.value)*parseInt(precio.value));

    localStorage.setItem("productos",productos);
    localStorage.setItem("cantidades",cantidades);
    localStorage.setItem("unitarios",unitarios);
    localStorage.setItem("totales",totales);
    prod.value = "";
    cant.value = "";
    precio.value = "";

   
    listaProductos.innerHTML=localStorage.getItem("productos");
    listaCantidades.innerHTML=localStorage.getItem("cantidades");
    listaUnitarios.innerHTML=localStorage.getItem("unitarios");
    listaTotales.innerHTML=localStorage.getItem("totales");
    labelTotal.innerHTML="$"+total;
   
    
})

