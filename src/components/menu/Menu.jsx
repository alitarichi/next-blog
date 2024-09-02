import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../MenuPosts/MenuPosts";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.detail}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <div>
        <h2 className={styles.subtitle}>Discover by topic</h2>
        <h1 className={styles.detail}>Categories</h1>
        <Link href="/" className={`${styles.categoryItem} ${styles.style}`}>
          Style
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.culture}`}>
          Culture
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.food}`}>
          Food
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.fashion}`}>
          Fashion
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.travel}`}>
          Travel
        </Link>
        <Link href="/" className={`${styles.categoryItem} ${styles.coding}`}>
          Coding
        </Link>
      </div>

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.detail}>Editor's Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
