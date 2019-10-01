import React, { useState, useEffect } from 'react';

const App = () => {

  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0)

  /**
   *  Existe dois tipos de useEffect,
   *  Primeiro - aquele que necessita de fazer uma limpeza como cancelar requisições ou desativar um listening
   *  Segundo - Aquele que apenas usa do efeito sem necessitar de limpeza
   */

  //Caso não altere nenhum state você pode usar o useEffect apenas na montagem e demonstagem do componente
  useEffect(() => {
    console.log('didMount')
  }, [])

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {

    (count === 5) ? setTest(1) : setTest(0)

    // Atualiza o titulo do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;

  }, [count]);

  //Exemplo de efeito com limpeza (retornamos uma função)
  useEffect(() => {
    if (test === 0)
      return

    //A função vai ser executada após este efeito ser chamado novamente, ou seja, ele não é executado na mesma hora e sim após!
    return () => {
      setCount(0);
    };

  }, [test]);

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
