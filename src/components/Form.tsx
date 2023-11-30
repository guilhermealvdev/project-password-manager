import { useState } from 'react';

function Form() {
  const [formVisibility, setFormVisibility] = useState(false);

  const toggleForm = () => {
    setFormVisibility(!formVisibility);
  };

  const toggleCancel = () => {
    setFormVisibility(!formVisibility);
  };

  return (
    <div>
      {!formVisibility ? (
        <button onClick={ toggleForm }>Cadastrar nova senha</button>
      ) : (
        <form action="">
          <label htmlFor="service-name">Nome do Serviço</label>
          <input type="text" id="service-name" />

          <label htmlFor="login">Login</label>
          <input type="text" id="login" />

          <label htmlFor="pw">Senha</label>
          <input type="password" id="pw" />

          <label htmlFor="url">URL</label>
          <input type="text" id="url" />

          <button>Cadastrar</button>
          <button onClick={ toggleCancel }>Cancelar</button>
        </form>
      )}
      ;
    </div>
  );
}

export default Form;
