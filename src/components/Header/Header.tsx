import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { RootState } from "../../store";
import { setTheme } from "../../store/theme/themeSlice";
import { clearControls } from "../../store/controls/controlsSlice";

import styles from "./Header.module.css";

function Header() {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme);

  const cleanHandler = () => {
    dispatch(clearControls());
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link to='/' className={styles.link} onClick={cleanHandler}>
            Where is the world ?
          </Link>
          <div
            className={styles["mode-switcher"]}
            onClick={() =>
              dispatch(setTheme(theme === "light" ? "dark" : "light"))
            }
          >
            {theme === "light" ? (
              <IoMoonOutline size='14px' />
            ) : (
              <IoMoon size='14px' />
            )}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
