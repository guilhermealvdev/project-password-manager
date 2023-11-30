function Form() {
  return (
    <div>
      { /* Req 3 aqui? */ }

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
        <button>Cancelar</button>
      </form>
    </div>
  );
}

export default Form;
