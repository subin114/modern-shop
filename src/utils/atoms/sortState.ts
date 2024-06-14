import { atom } from "recoil";
import { DropdownSort } from "../../types/DropdownSort";

export const sortStateAll = atom<DropdownSort>({
  key: "sortStateAll",
  default: "none",
});
