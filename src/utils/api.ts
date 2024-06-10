import { selector } from "recoil";
import axios from "axios";

export const fetchProductsSelector = selector({
  key: "fetchProductsSelector",
  get: async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  },
});
