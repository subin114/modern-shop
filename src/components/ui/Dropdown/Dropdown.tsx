import styles from "./Dropdown.module.scss";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const Dropdown = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.Dropdown}>
      <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
        <InputLabel id="demo-select-small-label">sort</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>가격순</MenuItem>
          <MenuItem value={20}>인기순</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
