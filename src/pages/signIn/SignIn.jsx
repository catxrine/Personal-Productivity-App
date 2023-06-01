import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../login/loginSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import "./signIn.scss";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <div className="signIn-container">
        <h2>Create an account</h2>

        <div className="inputs">
          <label>Username</label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" />

          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="text" />
        </div>

        <button
          onClick={() => {
            dispatch(
              addUser({
                username: username,
                password: password,
                id: nanoid(),
                userInfo: { currentXP: 0, tasks: [] },
              })
            );
            navigate("/");
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
