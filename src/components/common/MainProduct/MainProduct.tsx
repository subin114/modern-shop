import { useRecoilValueLoadable } from "recoil";
import styles from "./MainProduct.module.scss";
import { fetchProductsSelector } from "../../../utils/api";
import MainProductCard from "../MainProductCard/MainProductCard";
import { Product } from "../../../types/Product";
import { Container, Grid } from "@mui/material";

const renderProductSection = (title: string, filteredProducts: Product[]) => {
  return (
    <Container className={styles.sectionWrap}>
      <h2>{title}</h2>
      <Grid container>
        {filteredProducts.map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} className={styles.sectionGrid}>
            <MainProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const MainProduct = () => {
  const productsLoadable = useRecoilValueLoadable(fetchProductsSelector);
  const { contents: products } = productsLoadable;
  console.log("contents", products);

  if (productsLoadable.state === "loading") {
    return <div>Loading...</div>;
  }

  if (productsLoadable.state === "hasError") {
    return <div>Error loading products</div>;
  }

  const fashionProducts = products
    .filter((product: Product) => product.category === "men's clothing" || product.category === "women's clothing")
    .slice(0, 4);

  const jewelryProducts = products.filter((product: Product) => product.category === "jewelery").slice(0, 4);

  const digitalProducts = products.filter((product: Product) => product.category === "electronics").slice(0, 4);

  return (
    <div className={styles.MainProduct}>
      {renderProductSection("Our Fashion Products", fashionProducts)}
      {renderProductSection("Our Jewelry Products", jewelryProducts)}
      {renderProductSection("Our Digital Products", digitalProducts)}
    </div>
  );
};

export default MainProduct;
