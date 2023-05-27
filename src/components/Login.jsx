import "../styles/login.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../API/usersApi";

import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { data:users } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioRegistrado = users.map(
      user => user.username === username && user.password === password
    );

    if (usuarioRegistrado) {
      console.log("Usuario registrado");
      window.location.href= "/pokemonlist"
    } else {
      alert("Usuario no registrado o credenciales incorrectas");
    }
  };

  return (
    <div className="container mt-5 col-md-6 offset-md-3 border border-primary p-3 rounded shadow-neutral-900 bg-dark text-light shadow-netral-900 mb-5 ">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="title">Bienvenido</h1>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            autoFocus
            required
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            required
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary ">
          Login
        </button>
        <div className="register">
          <Link to="/register">Regístrate</Link>
        </div>
      </form>
    </div>
  );
}
