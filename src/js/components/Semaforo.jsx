import React from "react";

export default function Semaforo({ color, elegirColor }) {
  return (
    <div className="semaforo">
      <div className="background">
        <div
          className={`luz rojo ${color === "rojo" ? "encendida" : ""} ${color === "rojo-blanco" ? "blanco" : ""}`}
          onClick={() => elegirColor("rojo")}
        ></div>
        <div
          className={`luz amarillo ${color === "amarillo" ? "encendida" : ""} ${color === "amarillo-blanco" ? "blanco" : ""}`}
          onClick={() => elegirColor("amarillo")}
        ></div>
        <div
          className={`luz verde ${color === "verde" ? "encendida" : ""} ${color === "verde-blanco" ? "blanco" : ""}`}
          onClick={() => elegirColor("verde")}
        ></div>
      </div>
    </div>
  );
}
