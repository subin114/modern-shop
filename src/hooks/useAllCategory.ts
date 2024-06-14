import { selector, useRecoilValue } from "recoil";
import { fetchProductsSelector } from "../utils/api";
import { sortAndPaginate } from "../utils/sortAndPaginate";
import { currentPageState } from "../utils/atoms/currentPageState";
import { sortStateAll } from "../utils/atoms/sortState";
import { Product } from "../types/Product";
import { currentCategoryState } from "../utils/atoms/currentCategoryState";

const filterProductsByCategory = (products: Product[], category: string) => {
  switch (category) {
    case "Fashion":
      return products.filter(
        (product: Product) => product.category === "men's clothing" || product.category === "women's clothing"
      );
    case "Jewelry":
      return products.filter((product: Product) => product.category === "jewelry");
    case "Digital":
      return products.filter((product: Product) => product.category === "electronics");
    default:
      return products;
  }
};

export const fetchAllCategorySelector = selector({
  key: "fetchAllCategorySelector",
  get: ({ get }) => {
    const products = get(fetchProductsSelector);
    const currentPage = get(currentPageState);
    const sortAllProducts = get(sortStateAll);

    const category = get(currentCategoryState);

    const filteredCategory = filterProductsByCategory(products, category);
    console.log(filteredCategory);

    return sortAndPaginate(filteredCategory, sortAllProducts, currentPage);
  },
});

export const useAllCategory = () => {
  return useRecoilValue(fetchAllCategorySelector);
};
