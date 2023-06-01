import "./login.scss";
import { Link } from "react-router-dom";
import { checkForUser } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { canLogIn } from "./loginSlice";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../login/loginSlice";
import { usersTodos } from "../to-dos/todosSlice";

export default function Login() {
  const dispatch = useDispatch();
  const checkLogin = useSelector(canLogIn);
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [warningShowUp, setWarningShowUp] = useState(false);

  const currUser = useSelector(currentUser);
  // const allTasks = currUser.userInfo[0]?.tasks;
  // dispatch(usersTodos(allTasks));
  // console.log(allTasks);

  return (
    <div className="login">
      <div className="login-container">
        <h2>Get your tasks done, while having fun.</h2>

        <div className="inputs">
          <label>Username</label>
          <input onChange={(e) => setUsername(e.target.value)} type="text" />

          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="text" />
        </div>

        <button
          onClick={() => {
            dispatch(checkForUser({ username, password }));
            if (checkLogin) {
              navigate("/tasks");
              setPassword("");
              setUsername("");
            }
            setWarningShowUp(true);
            setTimeout(() => {
              setWarningShowUp(false);
            }, 1000);
          }}
        >
          Login
        </button>
        {/* see what you may or can do oabout it, the code is really messy and you have bugs all over there */}
        <Link className="create-acc" to="/signIn">
          <p>Don't have an accout? Create one!</p>
        </Link>

        <Link className="stay-as-guest" to="/tasks">
          <p>Stay as a guest.</p>
        </Link>
        {warningShowUp && (
          <p className="warning">Wrong password or username!</p>
        )}
      </div>
    </div>
  );
}
