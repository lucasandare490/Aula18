# Documentação do Projeto

## Informações Gerais

-   **Data de Execução**: 13/12/2024
-   **Aluno**: Lucas André

## Objetivo do Projeto

Este projeto tem como objetivo aplicar o uso do hook `useState` do React, criando componentes interativos simples. Foram desenvolvidos três componentes principais, cada um com uma funcionalidade distinta: um contador, um botão que alterna entre dois estados ("Ligado" e "Desligado") e uma lista de tarefas. O foco principal é o gerenciamento de estado dentro de componentes funcionais.

## Estrutura do Projeto

O projeto contém três componentes principais:

### 1. Componente **Contador**

Este componente implementa um contador simples que usa o hook `useState` para controlar o valor do número. O contador começa com o valor 0 e pode ser incrementado ou decrementado com dois botões. Uma validação foi adicionada para garantir que o número não fique negativo.

**Código do Componente:**

```javascript
import React, { useState } from 'react';

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h1>Contador: {numero}</h1>
      <button onClick={() => setNumero(numero + 1)}>+1</button>
      <button onClick={() => numero > 0 && setNumero(numero - 1)}>-1</button>
    </div>
  );
}

export default Contador;
```

**Explicação**:

-   O número começa em `0` e é atualizado ao clicar nos botões de incremento e decremento.
-   A verificação `numero > 0` impede que o número seja decrementado abaixo de zero.

----------

### 2. Componente **BotaoAlternador**

Este componente cria um botão que alterna entre dois textos: "Ligado" e "Desligado". O estado do botão é controlado pelo hook `useState`, e o texto do botão muda conforme o estado. A cor do botão também é alterada dependendo do estado, utilizando classes CSS.

**Código do Componente:**

```javascript
import React, { useState } from 'react';
import './BotaoAlternador.css';

function BotaoAlternador() {
  const [estado, setEstado] = useState("Desligado");

  const alternarEstado = () => {
    setEstado(estado === "Ligado" ? "Desligado" : "Ligado");
  };

  return (
    <button
      className={estado === "Ligado" ? "ligado" : "desligado"}
      onClick={alternarEstado}
    >
      {estado}
    </button>
  );
}

export default BotaoAlternador;` 
```
**Explicação**:

-   O estado `estado` alterna entre "Ligado" e "Desligado" com a função `setEstado`.
-   O estilo do botão muda dependendo do estado, com classes CSS aplicadas para alterar as cores..

----------

### 3. Componente **ListaDeTarefas**

Este componente permite ao usuário adicionar e remover tarefas de uma lista. O campo de texto para digitar a tarefa e o botão "Adicionar" atualizam o estado da lista de tarefas. Além disso, cada tarefa pode ser removida ao clicar nela. O hook `useState` é utilizado para controlar tanto o valor do campo de texto quanto a lista de tarefas.

**Código do Componente:**

```javascript
import React, { useState } from 'react';

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== "") {
      setTarefas([...tarefas, tarefa]);
      setTarefa("");
    }
  };

  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index} onClick={() => removerTarefa(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;` 
```
**Explicação**:

-   O estado `tarefa` controla o valor do campo de texto.
-   O estado `tarefas` mantém a lista de tarefas.
-   As tarefas podem ser removidas ao clicar nelas.

----------

## Estilização

A estilização foi feita de forma simples, com a utilização de classes CSS para alterar a aparência do botão no componente `BotaoAlternador`. Também foi utilizado CSS inline para a organização básica dos componentes e layout. O botão de "Ligar/Desligar" foi estilizado com cores diferentes para cada estado, utilizando as classes `ligado` e `desligado`.

**Código do CSS (BotaoAlternador.css)**:
 
```css
button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.ligado {
  background-color: green;
  color: white;
}

.desligado {
  background-color: red;
  color: white;
}
```

![aaaa](https://github.com/user-attachments/assets/57ddc3af-95e7-42d9-9b74-b943d89333af)

![bbbb](https://github.com/user-attachments/assets/1e1ffa2f-24a3-428b-abb8-3229361befe4)
