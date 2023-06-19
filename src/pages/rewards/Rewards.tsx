import "./rewards.scss";
import { nanoid } from "@reduxjs/toolkit";
import { currentUser } from "../login/loginSlice";
import { useSelector, useDispatch } from "react-redux";
import { exitProfile } from "../login/loginSlice";
import { useNavigate } from "react-router-dom";
export default function Rewards({ className }: { className?: string }) {
  type rewardsTypes = {
    description: string;
    needed: number;
    completed: boolean;
    image: string;
    XP: number;
    id: string;
  };

  const currUser = useSelector(currentUser);
  const allRewards = currUser?.userInfo?.allRewards;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="rewards-container">
      <button
        onClick={() => {
          dispatch(exitProfile());
          navigate("/");
        }}
      >
        exit
      </button>

      <h2 className="label">Rewards</h2>
      {allRewards?.map((reward: rewardsTypes) => {
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
