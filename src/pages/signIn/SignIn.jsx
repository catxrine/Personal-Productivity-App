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
  const [showWarning, setShowWarning] = useState(false);

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
            if (username && password) {
              dispatch(
                addUser({
                  username: username,
                  password: password,
                  id: nanoid(),
                  userInfo: {
                    currentXP: 0,
                    achievedRewards: [],
                    completed: 0,
                    tasks: [],
                  },
                })
              );
              navigate("/");
            } else {
              setShowWarning(true);
              setTimeout(() => {
                setShowWarning(false);
              }, 1000);
            }
          }}
        >
          Sign in
        </button>
        {showWarning && (
          <p className="warning">Please, enter your username and password!</p>
        )}
      </div>
    </div>
  );
}
