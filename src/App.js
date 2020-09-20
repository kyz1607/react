import React from 'react';
import styles from './App.module.scss';
import './App.scss'

function App() {
  return (
  <div className={`error ${styles.box}`}>456
      <button className={styles.error}>Error Button</button>
  </div>
);
}

export default App;
