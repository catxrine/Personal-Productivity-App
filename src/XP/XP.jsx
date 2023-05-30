import { useSelector } from "react-redux";
import { curXP } from "./XPSlice";
import "./xp.scss";

export default function XP() {
  const currentXP = useSelector(curXP);
  return (
    <div className="xp">
      <p>Current XP:{currentXP}</p>
    </div>
  );
}
