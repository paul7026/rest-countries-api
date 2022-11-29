import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { RootState } from "../../store";
import { setRegion } from "../../store/controls/controlsSlice";

import styles from "./CustomSelect.module.css";

const optionsMap = {
  Africa: { value: "Africa", label: "Africa" },
  America: { value: "America", label: "America" },
  Asia: { value: "Asia", label: "Asia" },
  Europe: { value: "Europe", label: "Europe" },
  Oceania: { value: "Oceania", label: "Oceania" },
};

const options = Object.values(optionsMap);

function CustomSelect() {
  const dispatch = useDispatch();

  const region = useSelector((state: RootState) => state.controls.region);

  const selectHandler = (option: { value: string; label: string } | null) => {
    dispatch(setRegion(option?.value || ""));
  };

  return (
    <Select
      className={styles.select}
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: "var(--colors-ui-base)",
          color: "var(--colors-text)",
          borderRadius: "var(--radii)",
          padding: "0.25rem",
          border: "none",
          boxShadow: "var(--shadow)",
          height: "50px",
        }),
        option: (provided, state) => ({
          ...provided,
          cursor: "pointer",
          color: "var(--colors-text)",
          backgroundColor: state.isSelected
            ? "var(--colors-bg)"
            : "var(--colors-ui-base)",
        }),
      }}
      options={options}
      placeholder='Filter by Region'
      isClearable
      isSearchable={false}
      value={optionsMap[region as keyof typeof optionsMap]}
      onChange={selectHandler}
    />
  );
}

export default CustomSelect;
