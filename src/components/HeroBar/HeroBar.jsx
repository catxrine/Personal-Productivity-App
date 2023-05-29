import { Outlet } from "react-router-dom";
import "./hero-bar.scss";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { curXP } from "../../XP/XPSlice";
import { allHeroData } from "./heroBarSlice";
import { wonHero } from "./heroBarSlice";
import { useDispatch } from "react-redux";

export default function HeroBar() {
  const dispatch = useDispatch();
  const currentXP = useSelector(curXP);
  const heroData = useSelector(allHeroData);
  return (
    <div>
      <div className="heroes">
        {heroData?.map((hero) => {
          if (hero.XP <= currentXP) {
            dispatch(wonHero(hero));
          }
          return (
            <div key={nanoid()}>
              <div
                className={`container ${!hero.locked ? "unlocked" : "locked"}`}
              >
                <div className="hero">
                  <h3 className="hero-name">
                    {hero.character}
                    {hero.locked && "-" + hero.XP + "XP"}
                  </h3>

                  <img src={hero.body} alt="" />
                  <p>
                    <span>level {hero.levelNeeded}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}
