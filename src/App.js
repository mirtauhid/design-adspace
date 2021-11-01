import React, { createContext, useState } from 'react';
import Home from './components/Home';

export const GlobalContext = createContext();

const App = () => {
  const [windows, setWindows] = useState([]);
  return (
    <GlobalContext.Provider value={[windows, setWindows]}>
      <Home />
    </GlobalContext.Provider>
  );
};

export default App;
