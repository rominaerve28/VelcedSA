var BotonesMenu = document.getElementById("BotonesMenu")
BotonesMenu.style.maxHeight= "0px"
function menutoggle() {
    if(BotonesMenu.style.maxHeight=="0px")
        {
            BotonesMenu.style.maxHeight="200px"
        }
        else
        {
            BotonesMenu.style.maxHeight="0px"
        }
}

/** Form */

var FormLogin= document.getElementById("FormLogin")
var FormRegistro= document.getElementById("FormRegistro")
var Indicador= document.getElementById("Indicador")

function registrar(){
    FormRegistro.style.transform="translateX(0px)"
    FormLogin.style.transform="translateX(0px)"
    Indicador.style.transform="translateX(100px)"
}
function login(){
    FormRegistro.style.transform="translateX(300px)"
    FormLogin.style.transform="translateX(300px)"
    Indicador.style.transform="translateX(0px)"
}

/** Detalles */
var BigProductoImg= document.getElementById("BigProductoImg");
var smallImg= document.getElementsByClassName("smallImg");
 
smallImg[0].onclick = function(){
    BigProductoImg.src = smallImg[0].src 
}
smallImg[1].onclick = function(){
    BigProductoImg.src = smallImg[1].src 
}
smallImg[2].onclick = function(){
    BigProductoImg.src = smallImg[2].src 
}

