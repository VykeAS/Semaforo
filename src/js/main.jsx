import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../styles/index.css';
import Semaforo from './components/Semaforo';

function App() {
  const [color, setColor] = useState("rojo");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => {
        if (prevColor === "rojo") return "verde";
        if (prevColor === "verde") return "amarillo";
        return "rojo";
      });
    }, color === "amarillo" ? 3000 : 10000);

    return () => clearInterval(intervalId);
  }, [color]);

  function elegirColor(nuevoColor) {
    setColor(nuevoColor);
  }

  function colorRnd() {
    const colores = ["rojo", "amarillo", "verde"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(`${colorAleatorio}`);
  }

  function colorWhite() {
    const colores = ["rojo", "amarillo", "verde"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(`${colorAleatorio}-blanco`);
  }

  return (
    <div>
      <Semaforo color={color} elegirColor={elegirColor} />
      <button onClick={colorWhite}>FLASHBANG!</button>
      <button onClick={colorRnd}>Random</button>
    </div>
  );
}

  // Render
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
