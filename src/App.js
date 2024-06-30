import React from 'react';
import CrimeList from './components/CrimeList';
import PersonList from './components/PersonList';
import CriminalRecordList from './components/CriminalRecordList';
import PoliceOfficerList from './components/PoliceOfficerList';
import WitnessList from './components/WitnessList';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <h1>Forensic Criminal Record Management</h1>
      <Search />
      <CrimeList />
      <PersonList />
      <CriminalRecordList />
      <PoliceOfficerList />
      <WitnessList />
    </div>
  );
}

export default App;
