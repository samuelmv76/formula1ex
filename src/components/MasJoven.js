import React from 'react';

function MasPopular({ corredores }) {
  if (corredores.length === 0) return null;

  const cancionPopular = corredores.reduce((prev, curr) =>
    curr.track_popularity > prev.track_popularity ? curr : prev
  );

  return (
    <div>
      <h2>Corredor Mas Joven</h2>
      <p>
        {cancionPopular.track_name} - {cancionPopular.track_artist} <br />
        Popularidad: {cancionPopular.track_popularity}
      </p>
    </div>
  );
}

export default MasPopular;
