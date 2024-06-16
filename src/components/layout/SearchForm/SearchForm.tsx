import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import styles from "./SearchForm.module.scss";
import SearchIcon from "../../../assets/icons/search.svg?react";

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (query) {
      setSearchParams({ q: query });
      navigate(`/search/?q=${query}`);
    } else {
      setSearchParams({});
      navigate(`/search`);
    }

    setQuery("");
  };

  return (
    <form className={styles.SearchForm} onSubmit={handleSearch}>
      <SearchIcon className={styles.icon} />
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search" />
    </form>
  );
};

export default SearchInput;
