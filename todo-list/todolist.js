let listaTareas=[
    
    new Tarea("JavaScript", "Aprender JavaScript", 2, "created"),
    new Tarea("Java", "Aprender Java", 3, "created"),
    new Tarea("TypeScript", "Aprender TypeScript", 3, "created"),

    new Tarea("Angular", "Aprender Angular", 3, "doing"),
    new Tarea("React.js", "Aprender React.js", 1, "doing"),
    new Tarea("Vue.js", "Aprender Vue.js", 1, "doing"),

    new Tarea("Python", "Aprender Python", 4, "done"),
    new Tarea("C", "Aprender C", 1, "done"),
    new Tarea("C++", "Aprender C++", 2, "done"),

    new Tarea("Cyberseguridad", "Aprender cyberseguridad", 3, "deleted"),
    new Tarea("Scrum", "Aprender Scrum", 4, "deleted"),
    new Tarea("Pascal", "Aprender Pascal", 1, "deleted")

];

getTareas();

function getTareas(){

let todasTareas=document.getElementById("todasTareas");
let tareasCreated=document.getElementById("tareasCreated");
let tareasDoing=document.getElementById("tareasDoing");
let tareasDone=document.getElementById("tareasDone");
let tareasDeleted=document.getElementById("tareasDeleted");

let tareaAClonar=document.getElementById("tareaAClonar")
    
    for(let i=0;i< listaTareas.length;i++){
    
        let templateTarea=tareaAClonar.cloneNode(true)
    
        let nombreTarea=templateTarea.getElementsByClassName("nombreTarea")
        nombreTarea[0].textContent=listaTareas[i].Nombre
    
        let descripcionTarea=templateTarea.getElementsByClassName("descripcionTarea")
        descripcionTarea[0].textContent=listaTareas[i].Descripcion
    
        let prioridadTarea=templateTarea.getElementsByClassName("prioridadTarea")
        prioridadTarea[0].textContent=listaTareas[i].Prioridad
    
        if(listaTareas[i].Estado=="created"){
    
            tareasCreated.appendChild(templateTarea)
    
        } else if(listaTareas[i].Estado=="doing"){
    
            tareasDoing.appendChild(templateTarea)
    
        } else if(listaTareas[i].Estado=="done"){
    
            tareasDone.appendChild(templateTarea)
    
        } else if(listaTareas[i].Estado=="deleted"){
    
            tareasDeleted.appendChild(templateTarea)
    
        }
    
        todasTareas.appendChild(templateTarea.cloneNode(true))
    
    }

}

function refrescarTareas(){

    borrarTodasTareas();    
    getTareas();
}

function borrarTodasTareas(){

    let todasTareas=document.getElementById("todasTareas");
    let tareasCreated=document.getElementById("tareasCreated");
    let tareasDoing=document.getElementById("tareasDoing");
    let tareasDone=document.getElementById("tareasDone");
    let tareasDeleted=document.getElementById("tareasDeleted");
        
            todasTareas.remove();
            tareasCreated.remove();
            tareasDeleted.remove();
            tareasDoing.remove();
            tareasDone.remove();  
    
}

function anadirTarea(){

let nombre=document.getElementById("nombreTareaAnadir")
let descripcion=document.getElementById("descripcionTareaAnadir")
let prioridad=document.getElementById("prioridadTareaAnadir")
let prioridadValue = prioridad.options[prioridad.selectedIndex].value;
let estado=document.getElementById("estadoTareaAnadir")
let estadoValue = estado.options[estado.selectedIndex].value;

if(nombre.value=="" || nombre.value==null){

alert("Introduce un nombre para la tarea..")

} else if(descripcion.value=="" || descripcion.value==null){

alert("Introduce una descripción para la tarea..")

} else{


  

    for(let i=0;i<listaTareas.length;i++){

        console.log(listaTareas[i].Nombre)

    } 
    
    refrescarTareas();

}
}

let button = document.getElementById("anadirTarea")
button.addEventListener("click",(event)=>{

   event.preventDefault();
   anadirTarea();

});