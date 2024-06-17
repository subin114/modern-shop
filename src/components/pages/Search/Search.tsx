import { useSearchParams } from "react-router-dom";
import styles from "./Search.module.scss";
import { useRecoilValue } from "recoil";
import { fetchProductsSelector } from "../../../utils/api";
import { Product } from "../../../types/Product";
import { Container, Grid } from "@mui/material";
import ProductCard from "../../common/ProductCard/ProductCard";

const renderProductSection = (title: JSX.Element, filteredProducts: Product[]) => {
  return (
    <Container className={styles.sectionWrap}>
      <span className={styles.searchResult}>{title}</span>
      <Grid container>
        {filteredProducts.map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} className={styles.sectionGrid}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const productsAll = useRecoilValue(fetchProductsSelector);

  const productSearchFilter = productsAll.filter((product: Product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.Search}>
      {productSearchFilter.length > 0
        ? renderProductSection(
            <>
              <span className={styles.productLength}>({productSearchFilter.length} products)</span>These are search
              results for <b>"{query}"</b>.
            </>,
            productSearchFilter
          )
        : renderProductSection(
            <>
              <span className={styles.productLength}>({productSearchFilter.length} products)</span>
              There are no products matching <b>&quot;{query}&quot;.</b>
            </>,
            productSearchFilter
          )}
    </div>
  );
};

export default Search;
