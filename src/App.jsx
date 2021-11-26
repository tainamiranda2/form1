//alguns erros
import React, { useState } from 'react';
import './App.css';


function App() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  //Receber os dados do formulário
  const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

  //Enviar os dados para o back-end em  algum momento
  const addUser = async e => {
    e.preventDefault();

    if (!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'ok',
        mensagem: "Usuário cadastrado com sucesso!"
      });
      setUser({
        name: '',
        email: '',
        password: ''
      });
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
      });
    }
  }

  function validate() {
    if (!user.name) return setStatus({ type: 'error', mensagem: 'Erro: preencher o campo nome!' });
    if (!user.email) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo e-mail!' });
    if (!user.password) return setStatus({ type: 'error', mensagem: 'Erro: preencher o campo senha!' });
    if (user.password.length < 6) return setStatus({ type: 'error', mensagem: 'Erro: A senha precisa ter pelo menos seis caracteres!' });

    return true;
  }


  //form começa aqui
  return (

    <main>


      <h1>Cadastrar de formulario</h1>

      {status.type === 'ok' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
      {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

      <form onSubmit={add}>
        <label>Nome: </label>
        <input type="text" name="name"
         placeholder="Nome "
          onChange={valueInput} value={user.name} /><br /><br />

        <label>Email: </label>
        <input type="email" name="email" 
        placeholder="Email "
         onChange={valueInput}
         value={user.email} /><br /><br />

        <label>Senha: </label>
        <input type="password" name="password" placeholder="Senha para o form" autoComplete="on" onChange={valueInput} value={user.password} /><br /><br />
//falto o segundo campo de  senha
        * Campo obrigatório<br /><br />

        <button type="submit">Cadastrar</button>
      </form>

    </main>

  );
}

export default App;