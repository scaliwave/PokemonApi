import "../styles/register.css";
import { useMutation } from "@tanstack/react-query";
import { addUsers } from "../API/usersApi";

export function Register() {

  const addUserMutation = useMutation({
    mutationFn: addUsers,
    onSuccess: () => {
      window.location.href = "/";
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);
    addUserMutation.mutate(user);
  };

  return (
    <div className="backgroundRegister">
      <div className="container mt-5 col-md-6 offset-md-3 border border-primary p-3 rounded shadow-neutral-900 bg-dark text-light shadow-netral-900 mb-5 ">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1 className="title">Crea tu cuenta </h1>
          <div className="mb-3">
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="username"
              name="username"
              placeholder="example@example.com"
              autoFocus
              required
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
            ></input>
          </div>
          <button type="submit" className="btn btn-primary ">
            Crea tu cuenta
          </button>
        </form>
      </div>
    </div>
  );
}
