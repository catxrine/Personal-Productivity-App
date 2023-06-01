import "./to-dos.scss";
import { useSelector, useDispatch } from "react-redux";
import { addTask, doneTask, deleteTask, tasks } from "./todosSlice";
import { nanoid } from "@reduxjs/toolkit";
import { AddXP } from "../../XP/XPSlice";
import { useState } from "react";
import { achievedReward } from "../rewards/rewardsSlice";
import { currentUser } from "../login/loginSlice";

export default function Todos() {
  const [inputData, setInputData] = useState("");
  const [show, setShow] = useState(false);
  const [XP, setXP] = useState(0);
  const currUser = useSelector(currentUser);
  const dispatch = useDispatch();
  const allTasks = useSelector(tasks);

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
            addTask({
              title: inputData,
              XP: 100,
              id: nanoid(),
              completed: false,
            })
          );
          setInputData("");
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
                  dispatch(AddXP(task.XP));
                  dispatch(doneTask(task.id));
                  dispatch(achievedReward(task));
                  setXP(task.XP);

                  setShow(true);
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              >
                DONE
              </button>

              <button onClick={() => dispatch(deleteTask(task.id))}>
                DELETE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
