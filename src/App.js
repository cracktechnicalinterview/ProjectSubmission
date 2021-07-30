import React from 'react';
import "./App.css"
import Demo from './Component/Demo';

export const ThemeContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Demo />
    </div>
  );
}

export default App;
