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

getTareas();

//Imprimo las vistas
function getTareas() {
  for (let i = 0; i < listaTareas.length; i++) {
    let templateTarea = tareaAClonar.cloneNode(true);

    let nombreTarea = templateTarea.getElementsByClassName("nombreTarea");
    nombreTarea[0].textContent = listaTareas[i].Nombre;

    let descripcionTarea = templateTarea.getElementsByClassName("descripcionTarea");
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
  }

  for (let i = 0; i < listaTareas.length; i++) {
    let templateTarea = tareaAClonar.cloneNode(true);

    let nombreTarea = templateTarea.getElementsByClassName("nombreTarea");
    nombreTarea[0].textContent = listaTareas[i].Nombre;

    let descripcionTarea = templateTarea.getElementsByClassName("descripcionTarea");
    descripcionTarea[0].textContent = listaTareas[i].Descripcion;

    let prioridadTarea = templateTarea.getElementsByClassName("prioridadTarea");
    prioridadTarea[0].textContent = listaTareas[i].Prioridad+" "+listaTareas[i].Estado;

    todasTareas.appendChild(templateTarea.cloneNode(true));
  }
}

//Borra las vistas
function borrarListas() {
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
      for (let j = 0; j < tareasCreated.childElementCount; j++) {
        if (
          todasTareas.childNodes[i].isEqualNode(tareasCreated.childNodes[j])
        ) {
          listaTareas.splice(i, 1);
          todasTareas.removeChild(todasTareas.childNodes[i]);
          tareasCreated.removeChild(tareasCreated.childNodes[j]);
          i--;
          break;
        }
      }
    }
  } else if (button == buttonVaciarDoing) {
    for (let i = 0; i < todasTareas.childElementCount; i++) {
      for (let j = 0; j < tareasDoing.childElementCount; j++) {
        if (todasTareas.childNodes[i].isEqualNode(tareasDoing.childNodes[j])) {
          listaTareas.splice(i, 1);
          todasTareas.removeChild(todasTareas.childNodes[i]);
          tareasDoing.removeChild(tareasDoing.childNodes[j]);
          i--;
          break;
        }
      }
    }
  } else if (button == buttonVaciarDone) {
    for (let i = 0; i < todasTareas.childElementCount; i++) {
      for (let j = 0; j < tareasDone.childElementCount; j++) {
        if (todasTareas.childNodes[i].isEqualNode(tareasDone.childNodes[j])) {
          listaTareas.splice(i, 1);
          todasTareas.removeChild(todasTareas.childNodes[i]);
          tareasDone.removeChild(tareasDone.childNodes[j]);
          i--;
          break;
        }
      }
    }
  } else if (button == buttonVaciarDeleted) {
    for (let i = 0; i < todasTareas.childElementCount; i++) {
      for (let j = 0; j < tareasDeleted.childElementCount; j++) {
        if (
          todasTareas.childNodes[i].isEqualNode(tareasDeleted.childNodes[j])
        ) {
          listaTareas.splice(i, 1);
          todasTareas.removeChild(todasTareas.childNodes[i]);
          tareasDeleted.removeChild(tareasDeleted.childNodes[j]);
          i--;
          break;
        }
      }
    }
  }
}

//Añadimos tareas mediante un formulario
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
    listaTareas.push(
      new Tarea(nombre.value, descripcion.value, prioridadValue, estadoValue)
    );

    borrarListas();
    getTareas();
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

//Listener, onClick
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
