import styles from "./BreadCrumbs.module.scss";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

interface BreadCrumbsProps {
  main: string;
  sub: string;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ main, sub }) => {
  return (
    <div role="presentation" className={styles.BreadCrumbs}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          {main}
        </Link>
        <Typography color="text.primary">{sub}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
