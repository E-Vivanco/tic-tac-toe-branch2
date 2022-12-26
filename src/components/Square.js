import React from 'react';
import '../estilos/Square.css'

const Square = props => {
    return (
      <div className="pieza" onClick={props.onClick}>
        {props.value}
      </div>
    );
  };

export default Square;
