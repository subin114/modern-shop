import { selector, useRecoilValue } from "recoil";
import { fetchProductsSelector } from "../utils/api";
import { sortAndPaginate } from "../utils/sortAndPaginate";
import { currentPageState } from "../utils/atoms/currentPageState";
import { sortStateAll } from "../utils/atoms/sortState";

export const fetchAllCategorySelector = selector({
  key: "fetchAllCategorySelector",
  get: ({ get }) => {
    const products = get(fetchProductsSelector);
    const currentPage = get(currentPageState);
    const sortAllProducts = get(sortStateAll);

    return sortAndPaginate(products, sortAllProducts, currentPage);
  },
});

export const useAllCategory = () => {
  return useRecoilValue(fetchAllCategorySelector);
};
