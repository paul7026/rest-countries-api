import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setSearch } from "../../store/controls/controlsSlice";

import styles from "./Search.module.css";

function Search() {
  const dispatch = useDispatch();

  const search = useSelector((state: RootState) => state.controls.search);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <label className={styles.label}>
      <IoSearch />
      <input
        className={styles.input}
        type='search'
        placeholder='Search for a country...'
        onChange={searchHandler}
        value={search}
      />
    </label>
  );
}

export default Search;
