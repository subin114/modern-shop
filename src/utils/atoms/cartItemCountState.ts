import { AtomEffect, atom } from "recoil";

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

export const cartItemCountState = atom({
  key: "cartItemCountState",
  default: 0,
  effects_UNSTABLE: [sessionStorageEffect("cartItemCountState")],
});
