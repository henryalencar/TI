import { useState } from "react";
import "./Login.css";

function Login() {
  const [dados, setDados] = useState({
    email: "",
    senha: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (dados.email === "admin@admin.com" && dados.senha === "123") {
      alert("Login realizado com sucesso!");
    } else {
      alert("Email ou senha inválidos!");
    }
  }

  return (
    <div className="login-container">
      {/* Título do login */}
      <h2 className="login-title">LOGIN</h2>

      {/* Card do login */}
      <form onSubmit={handleSubmit} className="login-card">
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Digite sua senha"
          onChange={handleChange}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;