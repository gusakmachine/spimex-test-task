import React from 'react';
import styles from "./App.module.css";
import SpimexCompaniesCounter from "./components/SpimexCompaniesCounter/SpimexCompaniesCounter";

function App() {
  return (
    <div className={styles.container}>
      <SpimexCompaniesCounter/>
    </div>
  );
}

export default App;
