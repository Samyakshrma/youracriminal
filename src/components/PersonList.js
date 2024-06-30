import React, { useState, useEffect } from 'react';

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // Fetch persons from the database
    // setPersons(fetchedPersons);
  }, []);

  return (
    <div>
      <h2>Persons</h2>
      <ul>
        {persons.map(person => (
          <li key={person.personId}>
            {person.firstName} {person.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
