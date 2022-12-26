import { useState, useEffect  } from 'react';
import Square from './Square';

export default function Logica() {
  const [pieza, setPieza] = useState(Array(9).fill(null)); //inicializa tablero con celdas vacias
  const [siguiente_pos, setsiguiente_pos] = useState(true);// fija la posicion en true o false
  const [winner, setWinner] = useState(null);// almacena jugadas para definir ganador
  
  
  const manejaPosClick = i => {
    if (winner || pieza[i]) {
      return;
    }

    const newSquare = pieza.slice();
    newSquare[i] = siguiente_pos ? "X" : "O";
    setPieza(newSquare);
    setsiguiente_pos(!siguiente_pos);
  
    if (LogicaGanaGame(newSquare)) { setWinner(siguiente_pos ? "X" : "O"); }
  }
const limpiarTablero=()=>{
  setPieza(Array(9).fill(null))
  setWinner(null)
}
console.log("reinicio:",limpiarTablero)
  const pintaSquare = i => {
    return <Square value={pieza[i]} onClick={() => manejaPosClick(i)} />;
  };

  const LogicaGanaGame = (pieza)=>{
    const posicionesWin =[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < posicionesWin.length; i++) {
      const [a, b, c] = posicionesWin[i];
      if (pieza[a] && pieza[a] === pieza[b] && pieza[a] === pieza[c] ) {
        return pieza[a];
      }
    }
    return null;
  };
  let resultado;
  let pinta = true;
  
  for (let i = 0; i < pieza.length; i++) {
    if (pieza[i] === null) {
      pinta = false;
      break;
    }
  }
  // aqui evalua ganador
  if (winner) {
    resultado = `GANA: ${winner}`;
  } else if (pinta) {
    resultado = "No-Hay-Ganador";
  } else {
    resultado = `Turno de: ${siguiente_pos ? "X" : "O"}`;
  }

  return (
    <div>
      <div className="mt-3">
      <div className='titulo-juego'> 
      <h1 className="d-flex justify-content-center mb-3">Juego-Gato</h1>
      </div>
      <div className="resultado mt-3">{resultado}</div>
      <div className="container-tablero">
        <div>
          {pintaSquare(0)}
          {pintaSquare(1)}
          {pintaSquare(2)}
        </div>
        <div>
          {pintaSquare(3)}
          {pintaSquare(4)}
          {pintaSquare(5)}
        </div>
        <div>
          {pintaSquare(6)}
          {pintaSquare(7)}
          {pintaSquare(8)}
        </div>
      </div>
      <button className={'align-content-center boton'}onClick={()=>{limpiarTablero()}}>Reiniciar</button>
    </div>
    </div>
  );
}

