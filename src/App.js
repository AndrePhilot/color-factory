import './App.css';
import './Header.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Nav from './Nav';
import ColorDetails from './ColorDetails';
import AddColor from './AddColor';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {
  const defaultColorList = [
    {
      id: uuid(),
      name: "red",
      value: "#FF0000"
    },
    {
      id: uuid(),
      name: "green",
      value: "#00FF00"
    },
    {
      id: uuid(),
      name: "blue",
      value: "#0000FF"
    }
  ]

  const [ colors, setColors ] = useState(defaultColorList);

  const addColor = ({ name, value }) => {
    const id = uuid();
    const newColor = {
            id,
            name,
            value, };
    setColors(prevColors => [newColor, ...prevColors]);
  }

  return (
    <div className="App">
      <header className="Header">
        Welcome to the color factory.
        <Link className="Link" to="/colors/new">Add a color</Link>
      </header>
      <Routes>
        <Route path="/colors" element={<Nav colors={colors} />}/>
        <Route path="/colors/:color" element={<ColorDetails colors={colors}/>}/>
        <Route path="/colors/new" element={<AddColor addColor={addColor}/>}/>
        <Route path="/*" element={<Navigate to="/colors"/>} />
      </Routes>
    </div>
  );
}

export default App;
