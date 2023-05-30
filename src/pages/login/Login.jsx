import "./login.scss";
import { Link } from "react-router-dom";
import { checkForUser } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { canLogIn } from "./loginSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const checkLogin = useSelector(canLogIn);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login-container">
        <h2>Get your tasks done, while having fun.</h2>

        <label>Username</label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" />

        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="text" />

        <button
          onClick={() => {
            dispatch(checkForUser({ username, password }));
            if (checkLogin) {
              navigate("/tasks");
            }
          }}
        >
          Login
        </button>

        <Link to="/signIn">
          <p>Don't have an accout? Create one!</p>
        </Link>

        <Link to="/tasks">
          <p>Stay as a guest.</p>
        </Link>
      </div>
    </div>
  );
}
