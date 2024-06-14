import { atom } from "recoil";

export const currentCategoryState = atom<string>({
  key: "currentCategoryState",
  default: "All",
});
