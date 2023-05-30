import "./rewards.scss";
import { nanoid } from "@reduxjs/toolkit";
import { rewards } from "./rewardsSlice";
import { useSelector } from "react-redux";
import { AddAchievdReward } from "../../XP/XPSlice";
import { useDispatch } from "react-redux";
import { completedRewards } from "./rewardsSlice";

export default function Rewards() {
  const dispatch = useDispatch();
  const allRewards = useSelector(rewards);
  const completed = useSelector(completedRewards);
  completed.forEach((reward) => {
    dispatch(AddAchievdReward(reward));
  });

  return (
    <div className="rewards-container">
      <h2 className="label">Rewards</h2>
      {allRewards?.map((reward) => {
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
      })}
    </div>
  );
}
