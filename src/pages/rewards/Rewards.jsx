import "./rewards.scss";
import { nanoid } from "@reduxjs/toolkit";
import { rewards } from "./rewardsSlice";
import { useSelector } from "react-redux";
export default function Rewards() {
  const allRewards = useSelector(rewards);
  return (
    <div className="rewards-container">
      <h2 className="label">Rewards</h2>
      {allRewards.map((reward) => {
        return (
          <div key={nanoid()}>
            <div className="reward">
              <h3>
                {reward.description}: {reward.XP}XP
              </h3>
              <img src={reward.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
