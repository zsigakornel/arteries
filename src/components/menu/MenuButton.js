import styles from "./MenuButton.module.scss";
import clsx from "clsx";


const MenuButton = ({ active, clickCb }) => {
  return (
    <div className={clsx(styles.button, !active && styles.collapsed)} onClick={clickCb}>
      <span className={clsx(styles.line, styles.line01)}/>
      <span className={clsx(styles.line, styles.line02)}/>
      <span className={clsx(styles.line, styles.line03)}/>
    </div>
  );
};

export default MenuButton;
