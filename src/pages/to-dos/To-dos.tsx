import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { addAchievedReward } from "../login/loginSlice";
import { currentUser, addTodos, removeTask } from "../login/loginSlice";
import "./to-dos.scss";

export default function Todos({ className }: { className?: string }) {
  const dispatch = useDispatch();
  const currUser = useSelector(currentUser);
  const todos = currUser.userInfo?.tasks || [];
  const [inputData, setInputData] = useState("");
  const [show, setShow] = useState(false);
  const [XP, setXP] = useState(0);

  type TodosType = {
    XP: number;
    completed: boolean;
    id: string;
    title: string;
  };

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

      {todos.map((task: TodosType) => {
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
