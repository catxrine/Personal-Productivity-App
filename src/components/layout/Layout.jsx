import HeroBar from "../HeroBar/HeroBar";
import Rewards from "../../pages/rewards/Rewards";
import Calendar from "../../pages/calendar/Calendar";
import Todos from "../../pages/to-dos/To-dos";
import Xp from "../../XP/XP";
import "./layout.scss";

export default function Layout() {
  return (
    <>
      <div>
        <HeroBar className="hero-bar" />
      </div>
      <Xp className="XP" />

      <div className="wrapper">
        <Rewards className="rewards" />
        <Calendar className="calendar" />
        <Todos className="todos" />
      </div>
    </>
  );
}
