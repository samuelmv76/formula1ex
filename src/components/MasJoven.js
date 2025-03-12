import React from 'react';

function MasJoven({ corredores }) {
  if (corredores.length === 0) return null;

  const corredorJoven = corredores.reduce((prev, curr) =>
    curr.dob < prev.dob ? curr : prev
  );

  return (
    <div>
      <h2>Corredor Mas Joven</h2>
      <p>
        - <br />
      </p>
    </div>
  );
}

export default MasJoven;