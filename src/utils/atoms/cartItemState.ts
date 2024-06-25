import { AtomEffect, atom } from "recoil";
import { CartItem } from "../../types/cartItem";

const sessionStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: T) => {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const cartItemState = atom<CartItem[]>({
  key: "cartItemState",
  default: [],
  effects_UNSTABLE: [sessionStorageEffect("cartState")],
});
