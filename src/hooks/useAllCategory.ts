import { selector, useRecoilValue, atom } from "recoil";
import { fetchProductsSelector } from "../utils/api";
import { sortAndPaginate } from "../utils/sortAndPaginate";
import { DropdownSort } from "../types/DropdownSort";

export const currentPageState = atom<number>({
  key: "currentPageState",
  default: 1,
});

export const sortStateAll = atom<DropdownSort>({
  key: "sortStateAll",
  default: "none",
});

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
