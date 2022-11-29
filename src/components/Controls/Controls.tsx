import CustomSelect from "../CustomSelect/CustomSelect";
import Search from "../Search/Search";

import styles from "./Controls.module.css";

function Controls() {
  return (
    <div className={styles.wrapper}>
      <Search />
      <CustomSelect />
    </div>
  );
}

export default Controls;
