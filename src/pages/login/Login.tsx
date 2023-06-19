import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkForUser } from "./loginSlice";
import { canLogIn } from "./loginSlice";
import "./login.scss";

export default function Login() {
  const dispatch = useDispatch();
  const checkLogin = useSelector(canLogIn);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login-container">
        <h2>Get your tasks done, while having fun.</h2>

        <div className="inputs">
          <label>Username</label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" />

          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={() => {
            dispatch(checkForUser({ username, password }));
            checkLogin && navigate("/tasks");
          }}
        >
          Login
        </button>
        <Link className="create-acc" to="/signIn">
          <p>{"Don't"} have an accout? Create one!</p>
        </Link>

        <Link className="stay-as-guest" to="/tasks">
          <p>Stay as a guest.</p>
        </Link>
      </div>
    </div>
  );
}
