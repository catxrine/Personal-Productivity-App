import "./rewards.scss";
import { nanoid } from "@reduxjs/toolkit";
import { rewards } from "./rewardsSlice";
import { useSelector } from "react-redux";
import { AddXP } from "../../XP/XPSlice";
import { useDispatch } from "react-redux";

export default function Rewards() {
  const dispatch = useDispatch();
  const allRewards = useSelector(rewards);

  return (
    <div className="rewards-container">
      <h2 className="label">Rewards</h2>
      {allRewards?.map((reward) => {
        if (!reward.completed) {
          return (
            <div key={nanoid()}>
              <div className="reward">
                <h3>
                  {reward.description}: +{reward.XP}XP
                </h3>
                <img src={reward.image} />
              </div>
            </div>
          );
        } else {
          // search for the bug here
          dispatch(AddXP(reward.XP));
        }
      })}
    </div>
  );
}
