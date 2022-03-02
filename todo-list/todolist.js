let listaTareas = [
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
  new Tarea("Pascal", "Aprender Pascal", 1, "deleted"),
];

let todasTareas;
let tareasCreated;
let tareasDoing;
let tareasDone;
let tareasDeleted;

let tareaAClonar;
getTareas();

function getTareas() {
  todasTareas = document.getElementById("todasTareas");
  tareasCreated = document.getElementById("tareasCreated");
  tareasDoing = document.getElementById("tareasDoing");
  tareasDone = document.getElementById("tareasDone");
  tareasDeleted = document.getElementById("tareasDeleted");

  tareaAClonar = document.getElementById("tareaAClonar");

  for (let i = 0; i < listaTareas.length; i++) {
    let templateTarea = tareaAClonar.cloneNode(true);

    let nombreTarea = templateTarea.getElementsByClassName("nombreTarea");
    nombreTarea[0].textContent = listaTareas[i].Nombre;

    let descripcionTarea =templateTarea.getElementsByClassName("descripcionTarea");
    descripcionTarea[0].textContent = listaTareas[i].Descripcion;

    let prioridadTarea = templateTarea.getElementsByClassName("prioridadTarea");
    prioridadTarea[0].textContent = listaTareas[i].Prioridad;

    if (listaTareas[i].Estado == "created") {
      tareasCreated.appendChild(templateTarea);
    } else if (listaTareas[i].Estado == "doing") {
      tareasDoing.appendChild(templateTarea);
    } else if (listaTareas[i].Estado == "done") {
      tareasDone.appendChild(templateTarea);
    } else if (listaTareas[i].Estado == "deleted") {
      tareasDeleted.appendChild(templateTarea);
    }

    todasTareas.appendChild(templateTarea.cloneNode(true));
  }
}

function vaciarListaGeneralTareas() {

    vaciarListaCreatedTareas();
    vaciarListaDeletedTareas();
    vaciarListaDoingTareas();
    vaciarListaDoneTareas();

}

function vaciarListaCreatedTareas() {

    tareasCreated = document.getElementById("tareasCreated");
    todasTareas = document.getElementById("todasTareas");
  
    for(let i=0;i<todasTareas.childElementCount;i++){
      
        for(let j=0;j<tareasCreated.childElementCount;j++){
  
            if(todasTareas.childNodes[i].isEqualNode(tareasCreated.childNodes[j])){
  
                listaTareas.splice(i,1)
                todasTareas.removeChild(todasTareas.childNodes[i])
                tareasCreated.removeChild(tareasCreated.childNodes[j])
                
                i--;
                break;
                
            } 
  
        }
        
    }

}

function vaciarListaDoingTareas() {

    tareasDoing = document.getElementById("tareasDoing");
    todasTareas = document.getElementById("todasTareas");

    for(let i=0;i<todasTareas.childElementCount;i++){

        for(let j=0;j<tareasDoing.childElementCount;j++){

            if(todasTareas.childNodes[i].isEqualNode(tareasDoing.childNodes[j])){
            
                listaTareas.splice(i,1)
                todasTareas.removeChild(todasTareas.childNodes[i])
                tareasDoing.removeChild(tareasDoing.childNodes[j])
                i--;
                break;
                
            } 

        }

    }

}

function vaciarListaDoneTareas() {
  tareasDone = document.getElementById("tareasDone");
  todasTareas = document.getElementById("todasTareas");

    for(let i=0;i<todasTareas.childElementCount;i++){

      for(let j=0;j<tareasDone.childElementCount;j++){

          if(todasTareas.childNodes[i].isEqualNode(tareasDone.childNodes[j])){
          
              listaTareas.splice(i,1)
              todasTareas.removeChild(todasTareas.childNodes[i])
              tareasDone.removeChild(tareasDone.childNodes[j])
              i--;
              break;
              
          } 

      }

  }

}

function vaciarListaDeletedTareas() {

    tareasDeleted = document.getElementById("tareasDeleted");
    todasTareas = document.getElementById("todasTareas");

    for(let i=0;i<todasTareas.childElementCount;i++){

        for(let j=0;j<tareasDeleted.childElementCount;j++){

            if(todasTareas.childNodes[i].isEqualNode(tareasDeleted.childNodes[j])){
            
                listaTareas.splice(i,1)
                todasTareas.removeChild(todasTareas.childNodes[i])
                tareasDeleted.removeChild(tareasDeleted.childNodes[j])
                i--;
                break;
                
            } 

        }

    }

}

function vaciarListaGeneralTareas2() {

  vaciarListaCreatedTareas2();
  vaciarListaDeletedTareas2();
  vaciarListaDoingTareas2();
  vaciarListaDoneTareas2();
}

function vaciarListaCreatedTareas2() {
  tareasCreated = document.getElementById("tareasCreated");
  todasTareas = document.getElementById("todasTareas");

  for(let i=0;i<todasTareas.childElementCount;i++){
    
      for(let j=0;j<tareasCreated.childElementCount;j++){

          if(todasTareas.childNodes[i].isEqualNode(tareasCreated.childNodes[j])){

              todasTareas.removeChild(todasTareas.childNodes[i])
              tareasCreated.removeChild(tareasCreated.childNodes[j])
              
              i--;
              break;
              
          } 

      }
      
  }

}

function vaciarListaDoingTareas2() {
  tareasDoing = document.getElementById("tareasDoing");
  todasTareas = document.getElementById("todasTareas");

  for(let i=0;i<todasTareas.childElementCount;i++){

      for(let j=0;j<tareasDoing.childElementCount;j++){

          if(todasTareas.childNodes[i].isEqualNode(tareasDoing.childNodes[j])){
          
              todasTareas.removeChild(todasTareas.childNodes[i])
              tareasDoing.removeChild(tareasDoing.childNodes[j])
              i--;
              break;
              
          } 

      }

  }

}

function vaciarListaDoneTareas2() {
  tareasDone = document.getElementById("tareasDone");
  todasTareas = document.getElementById("todasTareas");

  for(let i=0;i<todasTareas.childElementCount;i++){

      for(let j=0;j<tareasDone.childElementCount;j++){

          if(todasTareas.childNodes[i].isEqualNode(tareasDone.childNodes[j])){
          
              todasTareas.removeChild(todasTareas.childNodes[i])
              tareasDone.removeChild(tareasDone.childNodes[j])
              i--;
              break;
              
          } 

      }

  }

}

function vaciarListaDeletedTareas2() {
  tareasDeleted = document.getElementById("tareasDeleted");
  todasTareas = document.getElementById("todasTareas");

  for(let i=0;i<todasTareas.childElementCount;i++){

      for(let j=0;j<tareasDeleted.childElementCount;j++){

          if(todasTareas.childNodes[i].isEqualNode(tareasDeleted.childNodes[j])){
          
              todasTareas.removeChild(todasTareas.childNodes[i])
              tareasDeleted.removeChild(tareasDeleted.childNodes[j])
              i--;
              break;
              
          } 

      }

  }

}

function anadirTarea() {
  let nombre = document.getElementById("nombreTareaAnadir");
  let descripcion = document.getElementById("descripcionTareaAnadir");
  let prioridad = document.getElementById("prioridadTareaAnadir");
  let prioridadValue = prioridad.options[prioridad.selectedIndex].value;
  let estado = document.getElementById("estadoTareaAnadir");
  let estadoValue = estado.options[estado.selectedIndex].value;

  if (nombre.value == "" || nombre.value == null) {
    alert("Introduce un nombre para la tarea..");
  } else if (descripcion.value == "" || descripcion.value == null) {
    alert("Introduce una descripción para la tarea..");
  } else {

    listaTareas.push(new Tarea(nombre.value,descripcion.value,prioridadValue,estadoValue));
  
    vaciarListaGeneralTareas2();
    getTareas();
  }
}

function organizarPrioridad(){

      for (let i = 0; i < listaTareas.length - 1; i++) {
          for (let j = 0; j < listaTareas.length - 1; j++) {
              if (listaTareas[j + 1].Prioridad > listaTareas[j].Prioridad) {
                  let aux = listaTareas[j + 1];
                  listaTareas[j + 1] = listaTareas[j];
                  listaTareas[j] = aux;
              }
          }
      }

    vaciarListaGeneralTareas2();
    getTareas();

}

let buttonAnadir = document.getElementById("anadirTarea");
buttonAnadir.addEventListener("click", (event) => {
  event.preventDefault();
  anadirTarea();
});

let buttonVaciarTodo = document.getElementById("vaciarTodo");
buttonVaciarTodo.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarListaGeneralTareas();
});

let buttonVaciarCreated = document.getElementById("vaciarCreated");
buttonVaciarCreated.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarListaCreatedTareas();
});

let buttonVaciarDoing = document.getElementById("vaciarDoing");
buttonVaciarDoing.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarListaDoingTareas();
});

let buttonVaciarDone = document.getElementById("vaciarDone");
buttonVaciarDone.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarListaDoneTareas();
});

let buttonVaciarDeleted = document.getElementById("vaciarDeleted");
buttonVaciarDeleted.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarListaDeletedTareas();
});

let buttonOrganizarPrioridad = document.getElementById("organizarPrioridad");
buttonOrganizarPrioridad.addEventListener("click", (event) => {
  event.preventDefault();
  organizarPrioridad();
});

