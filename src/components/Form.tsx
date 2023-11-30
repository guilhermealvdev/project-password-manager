import { useState } from 'react';

function Form() {
  const [formVisibility, setFormVisibility] = useState(false);

  const toggleForm = () => {
    setFormVisibility(!formVisibility);
  };

  const toggleCancel = () => {
    setFormVisibility(!formVisibility);
  };

  /* Req 8 abaixo */
  const [checkboxMark, setCheckboxMark] = useState(false);
  const [pwAlv, setPwAlv] = useState(true);

  const toggleCheckbox = () => {
    setCheckboxMark(!checkboxMark);
    setPwAlv(!pwAlv);
  };

  /* Req 4 abaixo - Teste (Revisar!) */

  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const validateFields = () => {
    const isServiceNameValid = serviceName.trim() !== '';
    const isLoginValid = login.trim() !== '';
    const isPasswordValid = password.length >= 8
      && password.length <= 16
      && /[a-zA-Z]/.test(password)
      && /\d/.test(password)
      && /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password);

    setIsButtonEnabled(isServiceNameValid && isLoginValid && isPasswordValid);
  };

  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  /* Req 6 */

  const [listaServicos, setListaServicos] = useState([]);

  const cadastrar = () => {
    const servico = {
      serviceName,
      login,
      password,
      url,
    };
    console.log(servico);
  };

  return (
    <div>
      {!formVisibility ? (
        <button onClick={ toggleForm }>Cadastrar nova senha</button>
      ) : (
        <form action="">
          <label htmlFor="service-name">Nome do Serviço</label>
          <input
            type="text"
            id="service-name"
            value={ serviceName }
            onChange={ (e) => {
              setServiceName(e.target.value);
              validateFields();
            } }
          />

          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            value={ login }
            onChange={ (e) => {
              setLogin(e.target.value);
              validateFields();
            } }
          />

          { /* Editado type abaixo para Requisito 8 */ }

          <label htmlFor="pw">Senha</label>
          <input
            type={ !pwAlv ? 'text' : 'password' }
            id="pw"
            value={ password }
            onChange={ (e) => {
              setPassword(e.target.value);
              validateFields();
            } }
          />

          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            value={ url }
            onChange={ (e) => setUrl(e.target.value) }
          />

          <button
            type="button"
            disabled={ !isButtonEnabled }
            onClick={ cadastrar }
          >
            Cadastrar
          </button>

          <button onClick={ toggleCancel }>Cancelar</button>

          { /* Req 5 Abaixo */ }
          { /* Verificação da Senha */ }

          <p
            className={ password.length < 8 ? invalid
              : valid }
          >
            Possuir 8 ou mais caracteres
          </p>

          <p
            className={ password.length > 16 ? invalid
              : valid }
          >
            Possuir até 16 caracteres
          </p>

          <p
            className={ `${/[a-zA-Z]/.test(password) && /\d/.test(password)
              ? valid
              : invalid
            }` }
          >
            Possuir letras e números
          </p>

          <p
            className={ `${/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)
              ? valid
              : invalid
            }` }
          >
            Possuir algum caractere especial
          </p>

          { /* Req 8 */ }

          <label htmlFor="cb">Esconder senhas</label>
          <input type="checkbox" id="cb" onChange={ toggleCheckbox } />

        </form>
      )}
    </div>
  );
}

export default Form;
