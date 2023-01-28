import { useState } from "react";
import { navLinks } from "../../constants/data";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <nav className={styles.navbar}>
      <a href="#">
        <img src={logo} alt="Easybank logo" />
      </a>

      <ul className={styles.links}>
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <a href="#" className={styles.link}>
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>

      <a href="#" className={styles.invite}>
        Request Invite
      </a>

      <img
        src={toggle ? close : menu}
        onClick={handleToggle}
        className={styles.toggler}
      />

      {toggle && (
        <ul className={styles["links-mobile"]}>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <a href="#" className={styles["link-mobile"]}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
