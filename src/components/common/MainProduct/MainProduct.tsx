import { useRecoilValue } from "recoil";
import styles from "./MainProduct.module.scss";
import { fetchProductsSelector } from "../../../utils/api";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../../types/Product";
import { Container, Grid } from "@mui/material";

const renderProductSection = (title: string, filteredProducts: Product[]) => {
  return (
    <Container className={styles.sectionWrap}>
      <h2>{title}</h2>
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

const MainProduct = () => {
  const productsAll = useRecoilValue(fetchProductsSelector);

  const fashionProducts = productsAll
    .filter((product: Product) => product.category === "men's clothing" || product.category === "women's clothing")
    .slice(0, 4);

  const jeweleryProducts = productsAll.filter((product: Product) => product.category === "jewelery").slice(0, 4);

  const digitalProducts = productsAll.filter((product: Product) => product.category === "electronics").slice(0, 4);

  return (
    <div className={styles.MainProduct}>
      {renderProductSection("Our Fashion Products", fashionProducts)}
      {renderProductSection("Our Jewelery Products", jeweleryProducts)}
      {renderProductSection("Our Digital Products", digitalProducts)}
    </div>
  );
};

export default MainProduct;
