import React, { useState } from 'react';

function FiltradoCorredores({ corredores }) {
  const [nacionalidad, setNacionalidad] = useState('');

  const cancionesFiltradas = corredores.filter((corredor) =>
    corredor.nationality.toLowerCase().includes(nacionalidad.toLowerCase())
  );

  return (
    <div>
      <h2>Filtrar Corredores por Nacionalidad</h2>
      <input
        type="text"
        placeholder="Nombre del corredor"
        value={nacionalidad}
        onChange={(e) => setNacionalidad(e.target.value)}
      />
      <ul>
        {cancionesFiltradas.map((corredor) => (
          <li key={corredor.driverId}>{corredor.forename} {corredor.surname}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltradoCorredores;
