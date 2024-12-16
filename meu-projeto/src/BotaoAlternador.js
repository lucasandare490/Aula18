import React, { useState } from 'react';
import './BotaoAlternador.css';

function BotaoAlternador() {
  const [estado, setEstado] = useState('Desligado');

  const alternarEstado = () => {
    setEstado(estado === 'Ligado' ? 'Desligado' : 'Ligado');
  };

  return (
    <button
      className={estado === 'Ligado' ? 'ligado' : 'desligado'}
      onClick={alternarEstado}
    >
      {estado}
    </button>
  );
}

export default BotaoAlternador;
