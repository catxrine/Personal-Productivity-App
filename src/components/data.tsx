import { nanoid } from "@reduxjs/toolkit";

type heroType = {
  character: string;
  image: string;
  levelNeeded: number;
  locked: boolean;
  current: boolean;
  XP: number;
  id: string;
};

export const heroesData: heroType[] = [
  {
    character: "Bug",
    image: "death.png",
    levelNeeded: 0,
    locked: false,
    current: true,
    XP: 0,
    id: nanoid(),
  },
  {
    character: "Big Bug",
    image: "cute-ninja.png",
    levelNeeded: 10,
    locked: true,
    current: false,
    XP: 500,
    id: nanoid(),
  },
  {
    character: "Bigger bug",
    image: "green-ninja.png",
    levelNeeded: 20,
    locked: true,
    current: false,
    XP: 3000,
    id: nanoid(),
  },
  {
    character: "Random Name",
    image: "red-ninja.png",
    levelNeeded: 35,
    locked: true,
    current: false,
    XP: 80000,
    id: nanoid(),
  },
  {
    character: "Random Name",
    image: "ninja.png",
    levelNeeded: 50,
    locked: true,
    current: false,
    XP: 120000,
    id: nanoid(),
  },
  {
    character: "Random Name",
    image: "ninja-levelUp.png",
    levelNeeded: 70,
    locked: true,
    current: false,
    XP: 200000,
    id: nanoid(),
  },
  {
    character: "Master Fu",
    image: "smoke-bomb.png",
    levelNeeded: 90,
    locked: true,
    current: false,
    XP: 400000,
    id: nanoid(),
  },
];
