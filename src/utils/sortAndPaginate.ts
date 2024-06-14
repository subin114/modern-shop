import { DropdownSort } from "../types/DropdownSort";
import { Product } from "../types/Product";

export const sortAndPaginate = (products: Product[], sortAllProducts: DropdownSort, currentPage: number) => {
  const pageSize = 8;
  const sortProductsAll = [...products];

  if (sortAllProducts === "price-high") {
    sortProductsAll.sort((a, b) => b.price - a.price);
  } else if (sortAllProducts === "price-low") {
    sortProductsAll.sort((a, b) => a.price - b.price);
  } else if (sortAllProducts === "rating-high") {
    sortProductsAll.sort((a, b) => b.rating.rate - a.rating.rate);
  } else if (sortAllProducts === "rating-low") {
    sortProductsAll.sort((a, b) => a.rating.rate - b.rating.rate);
  }

  const totalPages = Math.ceil(sortProductsAll.length / pageSize);

  const paginatedProducts = sortProductsAll.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return {
    paginatedProducts,
    totalPages,
  };
};
