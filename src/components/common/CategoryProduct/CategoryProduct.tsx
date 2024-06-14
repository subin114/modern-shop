import { Container, Grid } from "@mui/material";
import styles from "./CategoryProduct.module.scss";
import { useRecoilState } from "recoil";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../../types/Product";
import BasicPagination from "../../layout/Paginate/BasicPagination";
import { useAllCategory } from "../../../hooks/useAllCategory";
import { currentPageState } from "../../../utils/atoms/currentPageState";

const CategoryProduct = () => {
  const { paginatedProducts, totalPages } = useAllCategory();
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  return (
    <Container className={styles.CategoryProduct}>
      <Grid container>
        {paginatedProducts.map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} className={styles.sectionGrid}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <BasicPagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </Container>
  );
};

export default CategoryProduct;
