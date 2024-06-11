import styles from "./BasicPagination.module.scss";
import { Pagination, Stack } from "@mui/material";
import { PaginationProps } from "../../../types/PaginationProps";

const BasicPagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <div className={styles.BasicPagination}>
      <Stack spacing={2}>
        <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default BasicPagination;
