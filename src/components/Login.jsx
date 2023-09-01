import { useState } from "react";
import { useDispatch } from "react-redux";
import { action } from "../store";

function Login() {
  const [login, setLogin] = useState({ user: "", pass: "" });
  const [loginmsg, setLoginMsg] = useState("");

  const dispatch = useDispatch();

  let checkLogin = (event) => {
    event.preventDefault();
    if (login.user === "admin" && login.pass === "password") {
      setLoginMsg("Login Successful");
      dispatch(action.changeLogin(true));
      dispatch(
        action.changeUser({
          username: login.user,
          password: login.password,
        })
      );
    } else {
      setLoginMsg("Invalid Username or Password! Try again!");
      dispatch(action.changeLogin(false));
    }
  };

  return (
    <div className="main">
      <form onSubmit={checkLogin}>
        <div className="container justify-content-center card p-5 w-50 ">
          <h3 class=" h1 fw-bold mb-3 pb-3">Sign into your account</h3>
          <div className="mb-4">
            <label className="h3 fw-normal ">Username</label>
            <input
              className="form-control form-control-lg shadow-sm"
              type="text"
              id="user"
              onBlur={(e) => {
                setLogin({
                  user: e.target.value,
                  pass: login.pass,
                });
              }}
              autoFocus
            />
          </div>
          <div className="form-outline mb-4">
            <label className="h3 fw-normal ">Password</label>
            <input
              className="form-control form-control-lg mb-4 shadow-sm"
              type="password"
              id="pass"
              onBlur={(e) => {
                setLogin({
                  user: login.user,
                  pass: e.target.value,
                });
              }}
            />
            <button className="btn btn-dark btn-lg login-btn" type="submit">
              Login
            </button>
          </div>
          <div className="text-danger">{loginmsg}</div>
        </div>
      </form>
    </div>
  );
}

export default Login;
