import React from 'react';
import Logica from "./Logica";


const Tablero = (props) => {
  return (
      <>
        <Logica 
        onClick={(i) => {props.manejaPosClick(i)}}/>
      </>
  );
};

export default Tablero;

