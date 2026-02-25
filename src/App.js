import { useState, useEffect } from 'react'

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Realizar as tarefas',
  ]);

  useEffect(() => { // se der f5, a lista fica salva
    const tarefasStorage = localStorage.getItem('@tarefa');
    // foi no localStorage, buscou se tem alguma coisa e se tem,
    // colocou na UseState
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  },[]);

  useEffect(() => { // vai salvar a tarefa que foi registrada no LocalStorage
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input])
    setInput('');
  }

  return(
    <div>
      <h1>Cadastrando o nosso usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br/>
        <input 
          placeholder='Digite uma tarefa'
          value={input}
          onChange={ (e) => setInput(e.target.value) }
        /><br/>
        <button type='submit'>Registrar</button>
      </form>

      <br/><br/>

      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>
            {tarefa}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;