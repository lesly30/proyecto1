//alert("Hola mundo");
		//alert(5 + 5)
		function sumar(){
		alert("la suma de 50 + 45 =" + (50 + 45))
		}
		function cambiaColor(){
    document.getElementById('cuerpo').style.backgroundColor='green';
}
function cambiaColor2(colorElegido){
    document.getElementById('cuerpo').style.backgroundColor='colorElegido';
}
function calcular(){
    var nro1 = document.getElementById("nro1").value;
    var nro2 = document.getElementById("nro2").value;

    var suma = parseInt(nro1) + parseInt(nro2);
        alert(suma)
}

