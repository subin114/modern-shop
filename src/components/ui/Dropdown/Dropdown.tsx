import styles from "./Dropdown.module.scss";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRecoilState } from "recoil";
import { DropdownSort } from "../../../types/DropdownSort";
import { sortStateAll } from "../../../utils/atoms/sortState";

const Dropdown = () => {
  const [sort, setSort] = useRecoilState<DropdownSort>(sortStateAll);

  const handleChange = (e: SelectChangeEvent) => {
    setSort(e.target.value as DropdownSort);
  };

  return (
    <div className={styles.Dropdown}>
      <FormControl variant="standard" sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sort}
          onChange={handleChange}
          label="Sort"
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          <MenuItem value="price-high">Highest Price</MenuItem>
          <MenuItem value="price-low">Lowest Price</MenuItem>
          <MenuItem value="rating-high">Highest Rating</MenuItem>
          <MenuItem value="rating-low">Lowest Rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
