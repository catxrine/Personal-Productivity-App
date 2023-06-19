import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { allHeroData } from "./heroBarSlice";
import { wonHero } from "./heroBarSlice";
import { currentUser } from "../../pages/login/loginSlice";
import "./hero-bar.scss";

export default function HeroBar({ className }: { className?: string }) {
  const dispatch = useDispatch();
  const heroData = useSelector(allHeroData);
  const currUser = useSelector(currentUser);
  const currentXP = currUser?.userInfo?.currentXP || 0;

  interface HeroType {
    character: string;
    image: string;
    levelNeeded: number;
    locked: boolean;
    current: boolean;
    XP: number;
    id: string;
  }

  return (
    <div>
      <div className="heroes">
        {heroData?.map((hero: HeroType) => {
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

                  <img src={hero.image} alt="" />
                  <p className="level">
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
