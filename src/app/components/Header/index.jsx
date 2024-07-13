import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <headers className={styles.headers}>
      <section className={styles.ContainersImgHeader}>
        <Link href="/">
          <img src="/img/logo.svg" alt="" />
        </Link>
      </section>
      <section
        className={`${styles.ContainersImgHeader} ${styles.containerUser}`}
      >
        <img src="/img/notificacao.svg" alt="" />
        <img src="/img/profile.svg" alt="" className={styles.imgProfile} />
        <div>
          <p className={styles.textUser}>Meyre França</p>
          <small className={styles.textUser}>manusia@uolinc.com</small>
        </div>
      </section>
    </headers>
  );
}
