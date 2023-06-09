import { nanoid } from "@reduxjs/toolkit";

type rewardsTypes = {
  description: string;
  needed: number;
  completed: boolean;
  image: string;
  XP: number;
  id: string;
};

export const rewardsData: rewardsTypes[] = [
  {
    description: "Complete 2 tasks",
    needed: 2,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 100,
    id: nanoid(),
  },
  {
    description: "Complete 5 tasks",
    needed: 5,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 400,
    id: nanoid(),
  },
  {
    description: "Complete 30 tasks",
    needed: 30,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 900,
    id: nanoid(),
  },
  {
    description: "Complete 45 tasks",
    needed: 45,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 1000,
    id: nanoid(),
  },
  {
    description: "Complete 60 tasks",
    needed: 60,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 1100,
    id: nanoid(),
  },
  {
    description: "Complete 80 tasks",
    needed: 80,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 1200,
    id: nanoid(),
  },
  {
    description: "Complete 100 tasks",
    needed: 100,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 1300,
    id: nanoid(),
  },
  {
    description: "Complete 130 tasks",
    needed: 130,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 1400,
    id: nanoid(),
  },
  {
    description: "Complete 160 tasks",
    needed: 160,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 1500,
    id: nanoid(),
  },
  {
    description: "Complete 190 tasks",
    needed: 190,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 1600,
    id: nanoid(),
  },
  {
    description: "Complete 220 tasks",
    needed: 220,
    completed: false,
    image: "icons8-ok-100.png",
    XP: 1700,
    id: nanoid(),
  },
];
