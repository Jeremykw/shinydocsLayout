import React, { useState } from 'react';
import LayoutDrawer from './components/LayoutDrawer.js';
import ControlLayout from './components/ControlLayout.js';
import './App.css';

function App() {
  const [portrait, setPortrait] = useState(true)

  const divColours = ['red', 'black', 'purple', 'blue', 'yellow', 'green']

  const handleLayoutChange = () => {
    setPortrait(!portrait)
  }

  return (
    <>
    <ControlLayout handleLayoutChange={handleLayoutChange} />
    <LayoutDrawer className="layout_drawer" port={portrait} >
      {divColours.map( (colour) => <div colour={colour}>{colour}</div> )}
    </LayoutDrawer>
    </>
  );
}

export default App;
