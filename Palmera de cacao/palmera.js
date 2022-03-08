let uds=1;

let botonSumar=document.getElementById("buttonSumar");
let botonRestar=document.getElementById("buttonRestar");

botonSumar.onclick=sumar;
botonRestar.onclick=restar;

botonSumar.addEventListener("mouseover",ratonEncimaS);
botonSumar.addEventListener("mouseout",ratonNoEncimaS);
botonRestar.addEventListener("mouseover",ratonEncimaR);
botonRestar.addEventListener("mouseout",ratonNoEncimaR);



function ratonEncimaS(){

  document.getElementById("precio").style.fontSize="25px";

  botonSumar.style.height="37px";
  botonSumar.style.width="37px";


}

function ratonNoEncimaS(){

  document.getElementById("precio").style.fontSize="17px";
  botonSumar.style.height="30px";
  botonSumar.style.width="30px";

}

function ratonEncimaR(){

  document.getElementById("precio").style.fontSize="25px";

  botonRestar.style.height="37px";
  botonRestar.style.width="37px";


}

function ratonNoEncimaR(){

  document.getElementById("precio").style.fontSize="17px";
  botonRestar.style.height="30px";
  botonRestar.style.width="30px";

}

function restar() {


    if(uds>0){
       
        uds--;
        
    }
    

    document.getElementById("uds").textContent=uds+" uds.";

}

function sumar() {

  if(uds<99){
       
    uds++;
    
}

    document.getElementById("uds").textContent=uds+" uds.";

}