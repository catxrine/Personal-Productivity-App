import "./to-dos.scss";
import { useSelector, useDispatch } from "react-redux";
import { tasks, usersTodos } from "./todosSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { achievedReward } from "../rewards/rewardsSlice";
import { currentUser, addTodos, removeTask } from "../login/loginSlice";
import { addAchievedReward } from "../login/loginSlice";

export default function Todos() {
  const dispatch = useDispatch();
  const allTasks = useSelector(tasks);
  const currUser = useSelector(currentUser);

  const [inputData, setInputData] = useState("");
  const [show, setShow] = useState(false);
  const [XP, setXP] = useState(0);

  dispatch(usersTodos(currUser.userInfo?.tasks || []));

  return (
    <div className="todos-container">
      <h2 className="label">To-dos </h2>
      <input
        value={inputData}
        type="text"
        onChange={(e) => setInputData(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            addTodos({
              title: inputData,
              XP: 100,
              id: nanoid(),
              completed: false,
            })
          );
        }}
      >
        Add
      </button>

      {show && <p className="earnedXP">+{XP}</p>}

      {allTasks?.map((task) => {
        return (
          <div key={nanoid()}>
            <div className="task">
              <img src="checklist.png" />
              <div className="description">
                <h3>{task.title}</h3>
                <h5>+{task.XP}XP</h5>
              </div>
              <button
                onClick={() => {
                  dispatch(achievedReward(task));
                  dispatch(addAchievedReward(task.XP));

                  setXP(task.XP);
                  dispatch(removeTask(task.id));
                  setShow(true);
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              >
                DONE
              </button>

              <button onClick={() => dispatch(removeTask(task.id))}>
                DELETE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
