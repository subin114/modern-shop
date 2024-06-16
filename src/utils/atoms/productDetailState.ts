import { atom, selectorFamily } from "recoil";
import { fetchProductsById } from "../productApi";

export const productDetailState = atom({
  key: "productDetailState",
  default: null,
});

export const fetchProductDetailSelector = selectorFamily({
  key: "fetchProductDetailSelector",
  get: (productId: string) => async () => {
    try {
      const productData = await fetchProductsById(productId);
      return productData;
    } catch (error) {
      console.error("Error fetching product detail:", error);
      throw error;
    }
  },
});
