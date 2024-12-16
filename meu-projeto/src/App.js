import React, { useState } from 'react';
import Contador from './Contador';
import ListaDeTarefas from './ListaDeTarefas';
import './App.css';  // Importando o arquivo CSS para o botão

function App() {
  const [ligado, setLigado] = useState(true);

  return (
    <div>
      <h1>Meu Site</h1>
      <button
        onClick={() => setLigado(!ligado)}
        className={ligado ? 'botao-ligado' : 'botao-desligado'}
      >
        {ligado ? 'Desligar' : 'Ligar'}
      </button>

      {ligado && (
        <div>
          <Contador />
          <ListaDeTarefas />
        </div>
      )}
    </div>
  );
}

export default App;
