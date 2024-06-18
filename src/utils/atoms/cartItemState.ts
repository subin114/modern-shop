import { atom } from "recoil";
import { CartItem } from "../../types/cartItem";

export const cartItemState = atom<CartItem[]>({
  key: "cartItemState",
  default: [],
});
