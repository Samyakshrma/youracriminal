import React, { useState, useEffect } from 'react';

const CrimeList = () => {
  const [crimes, setCrimes] = useState([]);

  useEffect(() => {
    // Fetch crimes from the database
    // setCrimes(fetchedCrimes);
  }, []);

  return (
    <div>
      <h2>Crimes</h2>
      <ul>
        {crimes.map(crime => (
          <li key={crime.crimeId}>
            {crime.crimeType} - {crime.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrimeList;
