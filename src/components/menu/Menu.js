import styles from "./Menu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuButton from "components/menu/MenuButton";
import { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";


const Menu = () => {

  const [active, setActive] = useState(false);
  const router = useRouter();

  const toggleButton = () => setActive(!active);

  const close = () => setActive(false);

  return (
    <div className={styles.menu}>
      <Drawer
        anchor="right"
        open={active}
        onClose={close}
      >
        <div className={styles.drawer}>
          <a href="/" className={clsx(router.pathname === "/" && styles.activeLink)}>Coffee</a>
          <a href="/tea" className={clsx(router.pathname === "/tea" && styles.activeLink)}>Tea</a>
          <a href="/menu" className={clsx(router.pathname === "/menu" && styles.activeLink)}>Menu</a>
          <a href="/about-us" className={clsx(router.pathname === "/about-us" && styles.activeLink)}>About Us</a>
          <a href="/card" className={clsx(router.pathname === "/card" && styles.activeLink)}>Card</a>
        </div>
      </Drawer>
      <a href="/">
        <img src="/images/logo.svg" alt="Logo" title="logo" className={styles.logo}/>
      </a>
      <div>
        <div className={styles.hideOnMobile}>
          <a href="/" className={clsx(router.pathname === "/" && styles.activeLink)}>Coffee</a>
          <a href="/tea" className={clsx(router.pathname === "/tea" && styles.activeLink)}>Tea</a>
          <a href="/menu" className={clsx(router.pathname === "/menu" && styles.activeLink)}>Menu</a>
          <a href="/about-us" className={clsx(router.pathname === "/about-us" && styles.activeLink)}>About Us</a>
          <a href="/card" className={clsx(router.pathname === "/card" && styles.activeLink)}>Card</a>
        </div>
        <MenuButton active={active} clickCb={toggleButton}/>
      </div>
    </div>
  );
};

export default Menu;
