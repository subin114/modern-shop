import { Container, Grid } from "@mui/material";
import styles from "./CategoryProduct.module.scss";
import Dropdown from "./../../ui/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "./../../../../node_modules/@fortawesome/free-solid-svg-icons";
import { currentPageState, fetchAllCategorySelector, useAllCategory } from "../../../hooks/useAllCategory";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import MainProductCard from "../MainProductCard/MainProductCard";
import { Product } from "../../../types/Product";
import BasicPagination from "../../layout/Paginate/BasicPagination";

const CategoryProduct = () => {
  const allCategoryLoadable = useRecoilValueLoadable(fetchAllCategorySelector);
  // const { contents: products } = allCategoryLoadable;
  // console.log("allCategoryLoadable", products);

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
      <div className={styles.category}>
        Category
        <FontAwesomeIcon icon={faAngleRight} className={styles.arrowIcon} />
        All
      </div>
      <h2>All Product</h2>
      <Dropdown />
      {/* all product list */}
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
