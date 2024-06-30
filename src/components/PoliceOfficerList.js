import React, { useState, useEffect } from 'react';

const PoliceOfficerList = () => {
  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    // Fetch police officers from the database
    // setOfficers(fetchedOfficers);
  }, []);

  return (
    <div>
      <h2>Police Officers</h2>
      <ul>
        {officers.map(officer => (
          <li key={officer.officerId}>
            {officer.firstName} {officer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PoliceOfficerList;
