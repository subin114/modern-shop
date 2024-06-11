import { selector, useRecoilValue } from "recoil";
import { fetchProductsSelector } from "../utils/api";

// 한 페이지당 표시할 상품 개수
// const defaultPage = 8;

// export const currentPageState = atom({
//   key: "currentPageState",
//   default: 1,
// });

export const fetchAllCategorySelector = selector({
  key: "fetchAllCategorySelector",
  get: ({ get }) => {
    const products = get(fetchProductsSelector);
    // const currentPage = get(currentPageState);
    // const totalPage = Math.ceil(products.length / defaultPage);

    // // 현재 페이지에 해당하는 데이터 필터링
    // const paginatedProducts = products.slice((currentPage - 1) * defaultPage, currentPage * defaultPage);

    // return {
    //   paginatedProducts,
    //   totalPage,
    // };
    return products;
  },
});

export const useAllCategory = () => {
  return useRecoilValue(fetchAllCategorySelector);
};
