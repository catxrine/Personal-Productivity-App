import HeroBar from "../HeroBar/HeroBar";
import Rewards from "../../pages/rewards/Rewards";
import Habits from "../../pages/habits/Habits";
import Todos from "../../pages/to-dos/To-dos";
import XP from "../../XP/XP";
import "./layout.scss";
export default function Layout() {
  return (
    <>
      <div>
        <HeroBar className="hero-bar" />
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
