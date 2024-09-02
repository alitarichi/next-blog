import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../MenuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.detail}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <div>
        <h2 className={styles.subtitle}>Discover by topic</h2>
        <h1 className={styles.detail}>Categories</h1>
        <MenuCategories />
      </div>

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.detail}>Editor's Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
