let listaTareas = [
  new Tarea("JavaScript", "Aprender JavaScript", 2, "Created"),
  new Tarea("Java", "Aprender Java", 3, "Created"),
  new Tarea("TypeScript", "Aprender TypeScript", 3, "Created"),

  new Tarea("Angular", "Aprender Angular", 3, "Doing"),
  new Tarea("React.js", "Aprender React.js", 1, "Doing"),
  new Tarea("Vue.js", "Aprender Vue.js", 1, "Doing"),

  new Tarea("Python", "Aprender Python", 4, "Done"),
  new Tarea("C", "Aprender C", 1, "Done"),
  new Tarea("C++", "Aprender C++", 2, "Done"),

  new Tarea("Cyberseguridad", "Aprender cyberseguridad", 3, "Deleted"),
  new Tarea("Scrum", "Aprender Scrum", 4, "Deleted"),
  new Tarea("Pascal", "Aprender Pascal", 1, "Deleted")
];

let todasTareas = document.getElementById("todasTareas");
let tareasCreated = document.getElementById("tareasCreated");
let tareasDoing = document.getElementById("tareasDoing");
let tareasDone = document.getElementById("tareasDone");
let tareasDeleted = document.getElementById("tareasDeleted");

let tareaAClonar = document.getElementById("tareaAClonar");

let buttonVaciarTodo = document.getElementById("vaciarTodo");
let buttonVaciarCreated = document.getElementById("vaciarCreated");
let buttonVaciarDoing = document.getElementById("vaciarDoing");
let buttonVaciarDone = document.getElementById("vaciarDone");
let buttonVaciarDeleted = document.getElementById("vaciarDeleted");
let buttonOrganizarPrioridad = document.getElementById("organizarPrioridad");
let buttonAnadir = document.getElementById("anadirTarea");
let buttonEliminar = document.getElementById("eliminarTodo");

getTareas();
//Imprimo las vistas
function getTareas() {
  for (let i = 0; i < listaTareas.length; i++) {
    let templateTarea = tareaAClonar.cloneNode(true);
    let templateTarea2 = tareaAClonar.cloneNode(true);

    let chexboxTarea=templateTarea.getElementsByClassName("checkBoxTarea");
    chexboxTarea[0].style.display="none";

    let nombreTarea = templateTarea.getElementsByClassName("nombreTarea");
    nombreTarea[0].textContent = listaTareas[i].Nombre;

    let descripcionTarea = templateTarea.getElementsByClassName("descripcionTarea");
    descripcionTarea[0].textContent = listaTareas[i].Descripcion;

    let prioridadTarea = templateTarea.getElementsByClassName("prioridadTarea");
    prioridadTarea[0].textContent = listaTareas[i].Prioridad;

    let estadoTarea = templateTarea.getElementsByClassName("estadoTarea");
    estadoTarea[0].style.display="none";

    let nombreTarea2 = templateTarea2.getElementsByClassName("nombreTarea");
    nombreTarea2[0].textContent = listaTareas[i].Nombre;

    let descripcionTarea2 = templateTarea2.getElementsByClassName("descripcionTarea");
    descripcionTarea2[0].textContent = listaTareas[i].Descripcion;

    let prioridadTarea2 = templateTarea2.getElementsByClassName("prioridadTarea");
    prioridadTarea2[0].textContent = listaTareas[i].Prioridad;

    let estadoTarea2 = templateTarea2.getElementsByClassName("estadoTarea");
    estadoTarea2[0].textContent=listaTareas[i].Estado;

    if (listaTareas[i].Estado == "Created") {
      tareasCreated.appendChild(templateTarea);
    } else if (listaTareas[i].Estado == "Doing") {
      tareasDoing.appendChild(templateTarea);
    } else if (listaTareas[i].Estado == "Done") {
      tareasDone.appendChild(templateTarea);
    } else if (listaTareas[i].Estado == "Deleted") {
      tareasDeleted.appendChild(templateTarea);
    }
    todasTareas.appendChild(templateTarea2)
  }
    
}

//Borra las vistas
function borrarListas() {
  for (let i = 0; i < todasTareas.childElementCount; i++) {
    if (tareasCreated.hasChildNodes()) {
      tareasCreated.removeChild(tareasCreated.childNodes[0]);
    }

    if (tareasDoing.hasChildNodes()) {
      tareasDoing.removeChild(tareasDoing.childNodes[0]);
    }

    if (tareasDone.hasChildNodes()) {
      tareasDone.removeChild(tareasDone.childNodes[0]);
    }

    if (tareasDeleted.hasChildNodes()) {
      tareasDeleted.removeChild(tareasDeleted.childNodes[0]);
    }

    if (todasTareas.hasChildNodes()) {
      todasTareas.removeChild(todasTareas.childNodes[0]);
      i--;
    }
  }
}

//Ademas de borrar las vistas, elimina elemento en el array de objetos
function vaciarLista(button) {
  if (button == buttonVaciarTodo) {
    for (let i = 0, j = 0; i < todasTareas.childElementCount; i++) {
      if (tareasCreated.hasChildNodes()) {
        tareasCreated.removeChild(tareasCreated.childNodes[j]);
      }

      if (tareasDoing.hasChildNodes()) {
        tareasDoing.removeChild(tareasDoing.childNodes[j]);
      }

      if (tareasDone.hasChildNodes()) {
        tareasDone.removeChild(tareasDone.childNodes[j]);
      }

      if (tareasDeleted.hasChildNodes()) {
        tareasDeleted.removeChild(tareasDeleted.childNodes[j]);
      }

      if (todasTareas.hasChildNodes()) {
        todasTareas.removeChild(todasTareas.childNodes[i]);
        listaTareas.splice(i, 1);
        i--;
      }
    }
  } else if (button == buttonVaciarCreated) {
    for (let i = 0; i < todasTareas.childElementCount; i++) {
        if (
          todasTareas.childNodes[i].childNodes[3].isEqualNode(tareasCreated.childNodes[0].childNodes[3])
        ) {
          listaTareas.splice(i, 1);
          todasTareas.removeChild(todasTareas.childNodes[i]);
          tareasCreated.removeChild(tareasCreated.childNodes[0]);
          i--;
        } 
      
    }
  } else if (button == buttonVaciarDoing) {
    for (let i = 0; i < todasTareas.childElementCount; i++) {
      if (
        todasTareas.childNodes[i].childNodes[3].isEqualNode(tareasDoing.childNodes[0].childNodes[3])
      ) {
        listaTareas.splice(i, 1);
        todasTareas.removeChild(todasTareas.childNodes[i]);
        tareasDoing.removeChild(tareasDoing.childNodes[0]);
        i--;
      }
    
  }
  } else if (button == buttonVaciarDone) {
    for (let i = 0; i < todasTareas.childElementCount; i++) {
      
      if (
        todasTareas.childNodes[i].childNodes[3].isEqualNode(tareasDone.childNodes[0].childNodes[3])
      ) {
        listaTareas.splice(i, 1);
        todasTareas.removeChild(todasTareas.childNodes[i]);
        tareasDone.removeChild(tareasDone.childNodes[0]);
        i--;
      }
    
  }
  } else if (button == buttonVaciarDeleted) {
    for (let i = 0; i < todasTareas.childElementCount; i++) {
      debugger
      if (
        todasTareas.childNodes[i].childNodes[3].isEqualNode(tareasDeleted.childNodes[0].childNodes[3])
      ) {
        listaTareas.splice(i, 1);
        todasTareas.removeChild(todasTareas.childNodes[i]);
        tareasDeleted.removeChild(tareasDeleted.childNodes[0]);
        i--;
      }
    
  }
  }
}

//Añadimos tareas mediante un formulario
function anadirTarea() {
  let aux = false;
  let nombre = document.getElementById("nombreTareaAnadir");
  let descripcion = document.getElementById("descripcionTareaAnadir");
  let prioridad = document.getElementById("prioridadTareaAnadir");
  let prioridadValue=prioridad.options[prioridad.selectedIndex].value;
  let estado = document.getElementById("estadoTareaAnadir");
  let estadoValue=estado.options[estado.selectedIndex].value;

  for(let i=0;i<listaTareas.length;i++){


  if(listaTareas[i].Nombre==nombre.value){

    aux=true;

  }
} if (nombre.value == "" || nombre.value == null) {
    alert("Introduce un nombre para la tarea...");
  } else if(aux==true){
    alert("El nombre elegido ya está en las tareas...");
  } else if (descripcion.value == "" || descripcion.value == null) {
    alert("Introduce una descripción para la tarea..");
  } else {
    listaTareas.push(
      new Tarea(nombre.value, descripcion.value, prioridadValue, estadoValue)
    );

    let templateTarea = tareaAClonar.cloneNode(true);
    let templateTarea2 = tareaAClonar.cloneNode(true)

    let chexboxTarea=templateTarea.getElementsByClassName("checkBoxTarea");
    chexboxTarea[0].style.display="none";

    let nombreTarea = templateTarea.getElementsByClassName("nombreTarea");
    nombreTarea[0].textContent = nombre.value;

    let descripcionTarea = templateTarea.getElementsByClassName("descripcionTarea");
    descripcionTarea[0].textContent = descripcion.value;

    let prioridadTarea = templateTarea.getElementsByClassName("prioridadTarea");
    prioridadTarea[0].textContent = prioridadValue;

    let estadoTarea = templateTarea.getElementsByClassName("estadoTarea");
    estadoTarea[0].style.display="none";

    let nombreTarea2 = templateTarea2.getElementsByClassName("nombreTarea");
    nombreTarea2[0].textContent = nombre.value;

    let descripcionTarea2 = templateTarea2.getElementsByClassName("descripcionTarea");
    descripcionTarea2[0].textContent = descripcion.value;

    let prioridadTarea2 = templateTarea2.getElementsByClassName("prioridadTarea");
    prioridadTarea2[0].textContent = prioridadValue;

    let estadoTarea2 = templateTarea2.getElementsByClassName("estadoTarea");
    estadoTarea2[0].textContent=estadoValue;

    if (estadoValue == "Created") {
      tareasCreated.appendChild(templateTarea);
    } else if (estadoValue == "Doing") {
      tareasDoing.appendChild(templateTarea);
    } else if (estadoValue == "Done") {
      tareasDone.appendChild(templateTarea);
    } else if (estadoValue == "Deleted") {
      tareasDeleted.appendChild(templateTarea);
    }

    todasTareas.appendChild(templateTarea2)

  }
}

//Organizamos las listas mediante el algoritmo de la burbuja, de manera descendente
function organizarPrioridad() {
  for (let i = 0; i < listaTareas.length - 1; i++) {
    for (let j = 0; j < listaTareas.length - 1; j++) {
      if (listaTareas[j + 1].Prioridad > listaTareas[j].Prioridad) {
        let aux = listaTareas[j + 1];
        listaTareas[j + 1] = listaTareas[j];
        listaTareas[j] = aux;
      }
    }
  }

  borrarListas();
  getTareas();
}

//Eliminamos tarea por medio de checkbox's
function eliminarTarea() {
  debugger
  for (let i = 0; i < todasTareas.childElementCount; i++) {

    if (todasTareas.childNodes[i].childNodes[1].checked) {

      for(let j=0;j<tareasCreated.childElementCount;j++){
        
        if(todasTareas.childNodes[i].childNodes[3].isEqualNode(tareasCreated.childNodes[j].childNodes[3])){

          tareasCreated.removeChild(tareasCreated.childNodes[j]);

        }
      }
      for(let j=0;j<tareasDoing.childElementCount;j++){

        if(todasTareas.childNodes[i].childNodes[3].isEqualNode(tareasDoing.childNodes[j].childNodes[3])){

          tareasDoing.removeChild(tareasDoing.childNodes[j]);

        }
      }
      for(let j=0;j<tareasDone.childElementCount;j++){

        if(todasTareas.childNodes[i].childNodes[3].isEqualNode(tareasDone.childNodes[j].childNodes[3])){

          tareasDone.removeChild(tareasDone.childNodes[j]);

        }
      }
      for(let j=0;j<tareasDeleted.childElementCount;j++){

        if(todasTareas.childNodes[i].childNodes[3].isEqualNode(tareasDeleted.childNodes[j].childNodes[3])){

          tareasDeleted.removeChild(tareasDeleted.childNodes[j]);

        }
      }

      todasTareas.removeChild(todasTareas.childNodes[i]);
      listaTareas.splice(i,1);
      i--;
    }
}
}
  
//Listeners, onClicks
buttonAnadir.addEventListener("click", (event) => {
  event.preventDefault();
  anadirTarea();
});

buttonOrganizarPrioridad.addEventListener("click", (event) => {
  event.preventDefault();
  organizarPrioridad();
});

buttonVaciarTodo.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarLista(buttonVaciarTodo);
});

buttonVaciarCreated.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarLista(buttonVaciarCreated);
});

buttonVaciarDoing.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarLista(buttonVaciarDoing);
});

buttonVaciarDone.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarLista(buttonVaciarDone);
});

buttonVaciarDeleted.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarLista(buttonVaciarDeleted);
});

buttonEliminar.addEventListener("click", (event) => {
  event.preventDefault();
  eliminarTarea();
});