import { useSelector } from "react-redux";
import { currentUser } from "../pages/login/loginSlice";
import "./xp.scss";

export default function Xp() {
  const currUser = useSelector(currentUser);
  return (
    <div className="xp">
      <p>Current XP:{currUser.userInfo?.currentXP}</p>
    </div>
  );
}
