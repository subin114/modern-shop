import { selector, useRecoilValue } from "recoil";
import { fetchProductsSelector } from "../utils/api";
import { sortAndPaginate } from "../utils/sortAndPaginate";
import { Product } from "../types/Product";
import { currentPageState } from "../utils/atoms/currentPageState";
import { sortStateAll } from "../utils/atoms/sortState";

export const fetchFashionCategorySelector = selector({
  key: "fetchAllCategorySelector",
  get: ({ get }) => {
    const products = get(fetchProductsSelector);
    const currentPage = get(currentPageState);
    const sortAllProducts = get(sortStateAll);

    const fashionProducts = products.filter(
      (product: Product) => product.category === "men's clothing" || product.category === "women's clothing"
    );

    return sortAndPaginate(fashionProducts, sortAllProducts, currentPage);
  },
});

export const useFashionCategory = () => {
  return useRecoilValue(fetchFashionCategorySelector);
};
