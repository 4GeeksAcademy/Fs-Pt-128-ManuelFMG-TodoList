import React, { useState } from "react";

const Home = () => {


  
  //Guarda lo que el usuario escribe en el input y el estado del input comienza vacío ("").
  const [tarea, setTarea] = useState("");

  //En este array se almacenan cada tarea ingresada en el input (efecto memoria y lo muestra)
  //Su estado inicial parte vacío ([]) hasta que no se introduce la primera tarea.
  const [nuevaTarea, setNuevaTarea] = useState([]);

  /*Este return nos devuelve lo que actualmente vemos en la pagina:
  - Un titulo h1 (Mi primera Lista de Tareas).
  - Un input de tipo texto sin datos aun pero con texto predefinido
    "Añade una tarea y pulsa Enter" utilizando placeholder.
  - Una lista que por defecto aparece vacía hasta que le introduzcas una tarea.
  - Un contador que muestra la cantidad de tareas que hay en ese mismo instante:
     (si añadimos una tarea suma una unidad y si eliminamos una tarea resta una unidad).*/

  return (
    //div padre, y todo lo que hay en su interior son sus hijos.
    <div>
      {/*Este es mi titulo*/}
      <h1 className="container d-flex justify-content-center mt-5">
        <strong>Mi Primera Lista de Tareas</strong>{" "}
        <i className="icono fa-solid fa-list mt-1"></i>
      </h1>

      <div className="container d-flex justify-content-center mt-5">
        <div className="notebook shadow">
          {/*Este es mi input*/}
          <input
            type="text"
            className="form-control p-3 border-0"
            placeholder="Añade una tarea y pulsa Enter"
            value={tarea}
            /*Esto me almacena el texto escrito en el input al pulsar la tecla Enter*/
            onChange={(e) => setTarea(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && tarea.trim() !== "") {
                /* Comprueba que la tecla sea Enter y evita que almacene nada cuando el input está vacío */
                setNuevaTarea([
                  ...nuevaTarea,
                  tarea,
                ]); /* Crea un nuevo array copiando las tareas existentes y añadiendo la nueva al final */
                setTarea(
                  ""
                ); /* Vacia el input al pulsar Enter volviendo a su estado inicial: "Añade una tarea y pulsa Enter" */
              }
            }}
          />

          {/*Esto me crea un listado con cada nueva tarea al macenada*/}
          <ul className=" list-group list-group-flush">
            {/*.map recorre el array nuevaTarea, por cada nuevaTarea crea una lista "por orden de llegada", eso de debe al index*/}
            {nuevaTarea.map((item, index) => (
              <li
                key={index}
                className="tarea list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{item}</span>

                {/*Esto es lo que hace la función de botón que permite al hacer click
				eliminar el iten (tarea) de esa línea  */}
                <button
                  className="borrar"
                  onClick={() =>
                    setNuevaTarea(nuevaTarea.filter((_, i) => i !== index))
                  }
                >
                  <p className="m-0">
                    <i className="fa-regular fa-rectangle-xmark"></i>
                  </p>
                </button>
              </li>
            ))}
          </ul>

          {/* Esto hace la función de contador recorre el array hasta el final (.length) y me registra el numero de elementos (tareas) que hay almacenado en el array*/}
          <div className="note-footer">
            {nuevaTarea.length} Tarea{nuevaTarea.length !== 1 && "s"}{" "}
            {/* Si la cantidad es diferente a 1 añade una "s" al final de la palabra tarea*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
