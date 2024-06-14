import { selector, useRecoilValue, atom } from "recoil";
import { fetchProductsSelector } from "../utils/api";

// 한 페이지당 표시할 상품 개수
const defaultPage = 8;

export const currentPageState = atom({
  key: "currentPageState",
  default: 1,
});

export const sortStateAll = atom({
  key: "sortStateAll",
  default: "none",
});

export const fetchAllCategorySelector = selector({
  key: "fetchAllCategorySelector",
  get: ({ get }) => {
    const products = get(fetchProductsSelector);
    const currentPage = get(currentPageState);
    const sortAllProducts = get(sortStateAll);

    const sortProductsAll = [...products];
    console.log(sortProductsAll);

    if (sortAllProducts === "price-high") {
      sortProductsAll.sort((a, b) => b.price - a.price);
    } else if (sortAllProducts === "price-low") {
      sortProductsAll.sort((a, b) => a.price - b.price);
    } else if (sortAllProducts === "rating-high") {
      sortProductsAll.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (sortAllProducts === "rating-low") {
      sortProductsAll.sort((a, b) => a.rating.rate - b.rating.rate);
    }

    const totalPages = Math.ceil(sortProductsAll.length / defaultPage);

    // 현재 페이지에 해당하는 데이터 필터링
    const paginatedProducts = sortProductsAll.slice((currentPage - 1) * defaultPage, currentPage * defaultPage);

    return {
      paginatedProducts,
      totalPages,
    };
  },
});

export const useAllCategory = () => {
  return useRecoilValue(fetchAllCategorySelector);
};
