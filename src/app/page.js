import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <img className="main" src="example-photo.jpg"></img>
      <div className="overlay"></div>
      <div className="nav-header">
        <img className="logo-icon" src="icon-logo.png"></img>
        <div className="nav-links">
          <Link className="nav-link" href="/about">ABOUT US</Link>
          <Link className="nav-link" href="/">HOME</Link>
          <Link className="nav-link" href="/contact">CONTACT US</Link>
        </div>
      </div>
      <div className="title">
        Transight Consulting
      </div>
    </div>
  );
}
