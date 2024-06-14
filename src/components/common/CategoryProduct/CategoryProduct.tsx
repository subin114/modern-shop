import { Container, Grid } from "@mui/material";
import styles from "./CategoryProduct.module.scss";

import { currentPageState, fetchAllCategorySelector, useAllCategory } from "../../../hooks/useAllCategory";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import MainProductCard from "../MainProductCard/MainProductCard";
import { Product } from "../../../types/Product";
import BasicPagination from "../../layout/Paginate/BasicPagination";

const CategoryProduct = () => {
  const allCategoryLoadable = useRecoilValueLoadable(fetchAllCategorySelector);

  const { paginatedProducts, totalPages } = useAllCategory();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  if (allCategoryLoadable.state === "loading") {
    return <div>Loading...</div>;
  }

  if (allCategoryLoadable.state === "hasError") {
    return <div>Error loading products</div>;
  }

  return (
    <Container className={styles.CategoryProduct}>
      <Grid container>
        {paginatedProducts.map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} className={styles.sectionGrid}>
            <MainProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <BasicPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </Container>
  );
};

export default CategoryProduct;
