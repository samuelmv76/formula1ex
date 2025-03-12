import React, { useState, useEffect } from "react";
import ListadoCorredores from "./ListadoCorredores";
import FiltradoCorredores from "./FiltradoCorredores";

function Formula1Main() {
  const [corredores, setCorredores] = useState([]);

  useEffect(() => {
    async function fetchCorredores() {
      try {
        const response = await fetch("/json/Formula1.json");
        const data = await response.json();
        setCorredores(data);
      } catch (error) {
        console.error("Error al obtener las canciones:", error);
      }
    }fetchCorredores();
  },
    []);
  /** */
  return (
    <div>
      <h1>SpotifEx</h1>
      <ListadoCorredores corredores={corredores} />
      <FiltradoCorredores corredores={corredores} />
   
    </div>
  );
}

export default Formula1Main;
