import HeroBar from "../HeroBar/HeroBar";
import Rewards from "../../pages/rewards/Rewards";
import Habits from "../../pages/habits/Habits";
import Todos from "../../pages/to-dos/To-dos";
import XP from "../../XP/XP";
import CongratsPopup from "./CongratsPopup/CongratsPopup";
import { useSelector, useDispatch } from "react-redux";
import { popup } from "../../pages/rewards/rewardsSlice";
import { setShowToFalse } from "../../pages/rewards/rewardsSlice";
import "./layout.scss";

export default function Layout() {
  const dispatch = useDispatch();
  const show = useSelector(popup);
  if (show) {
    setTimeout(() => {
      dispatch(setShowToFalse());
    }, 1000);
  }

  return (
    <>
      <div>
        <HeroBar className="hero-bar" />
        {show && <CongratsPopup />}
      </div>
      <XP className="XP" />
      <div className="wrapper">
        <Rewards className="rewards" />
        <Habits className="habits" />
        <Todos className="todos" />
      </div>
    </>
  );
}
