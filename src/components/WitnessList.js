import React, { useState, useEffect } from 'react';

const WitnessList = () => {
  const [witnesses, setWitnesses] = useState([]);

  useEffect(() => {
    // Fetch witnesses from the database
    // setWitnesses(fetchedWitnesses);
  }, []);

  return (
    <div>
      <h2>Witnesses</h2>
      <ul>
        {witnesses.map(witness => (
          <li key={witness.witnessId}>
            {witness.firstName} {witness.lastName} - {witness.statement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WitnessList;
