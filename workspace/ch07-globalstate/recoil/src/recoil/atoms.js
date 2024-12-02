import { atom } from "recoil";

export const counterState = atom({
  key: "count",
  default: 8,
});

export const loginState = atom({
  key: "loginUser",
  default: null,
});
