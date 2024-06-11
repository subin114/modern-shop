import styles from "./BasicPagination.module.scss";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

const BasicPagination = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.BasicPagination}>
      <Stack spacing={2}>
        <Pagination count={2} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default BasicPagination;
