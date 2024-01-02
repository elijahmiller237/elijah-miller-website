import Link from "next/link";
import styles from "../page.module.css";

const Navbar = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateAreas: '"title about contact"',
        gridTemplateColumns: "1fr auto auto",
        width: "100%",
        gap: "16px",
      }}
    >
      <div style={{ gridArea: "title" }}>
        <Link href="/">ELI MILLER</Link>
      </div>
      <div className={styles.navbarNavItem} style={{ gridArea: "about" }}>
        <Link href="/about">ABOUT</Link>
      </div>
      <div className={styles.navbarNavItem} style={{ gridArea: "contact" }}>
        <Link href="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Navbar;
