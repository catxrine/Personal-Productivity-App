import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../login/loginSlice";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <div className="login-container">
        <h2>Get your tasks done, while having fun.</h2>

        <label>Username</label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" />

        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="text" />

        <button
          onClick={() => {
            dispatch(addUser({ username: username, password: password }));
            navigate("/");
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
