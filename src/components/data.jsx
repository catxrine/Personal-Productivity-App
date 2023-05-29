import { nanoid } from "@reduxjs/toolkit";
export const heroesData = [
  {
    character: "Bug",
    body: "death.png",
    levelNeeded: 0,
    locked: false,
    current: true,
    XP: 0,
    id: nanoid(),
  },
  {
    character: "Big Bug",
    body: "cute-ninja.png",
    levelNeeded: 10,
    locked: true,
    current: false,
    XP: 500,
    id: nanoid(),
  },
  {
    character: "Bigger bug",
    body: "green-ninja.png",
    levelNeeded: 20,
    locked: true,
    current: false,
    XP: 30000,
    id: nanoid(),
  },
  {
    character: "Random Name",
    body: "red-ninja.png",
    levelNeeded: 35,
    locked: true,
    current: false,
    XP: 80000,
    id: nanoid(),
  },
  {
    character: "Random Name",
    body: "ninja.png",
    levelNeeded: 50,
    locked: true,
    current: false,
    XP: 120000,
    id: nanoid(),
  },
  {
    character: "Random Name",
    body: "ninja-levelUp.png",
    levelNeeded: 70,
    locked: true,
    current: false,
    XP: 200000,
    id: nanoid(),
  },
  {
    character: "Master Fu",
    body: "smoke-bomb.png",
    levelNeeded: 90,
    locked: true,
    current: false,
    XP: 400000,
    id: nanoid(),
  },
];
