import React from 'react';

function ListadoCorredores({ corredores }) {
  return (
    <div>
      <h2>Listado de Corredores</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Id del Corredor</th>
            <th>Referencia del corredor</th>
            <th>Codigo</th>
            <th>Apellidos + nombre</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {corredores.map(({ driverId, driverRef, code, surname, forename, url }) => (
            <tr key={driverId}>
              <td>{driverId}</td>
              <td>{driverRef}</td>
              <td>{code}</td>
              <td>{surname}, {forename}</td>
              <td>{url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoCorredores;
