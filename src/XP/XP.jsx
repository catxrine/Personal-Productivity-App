import { useSelector } from "react-redux";
import { curXP } from "./XPSlice";

export default function XP() {
  const currentXP = useSelector(curXP);
  console.log(currentXP);
  return (
    <div>
      <p>Current XP:{currentXP}</p>
    </div>
  );
}
