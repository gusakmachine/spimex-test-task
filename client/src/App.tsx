import React from 'react';
import styles from "./App.module.css";
import ActiveCompaniesCounter from "./components/ActiveCompaniesCounter/ActiveCompaniesCounter";

function App() {
  return (
    <div className={styles.container}>
      <ActiveCompaniesCounter/>
    </div>
  );
}

export default App;
