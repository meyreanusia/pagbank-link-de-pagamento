"use client";
import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.headers}>
      <section className={styles.ContainersImgHeader}>
        <div>
          <img
            className={styles.menuHamburguer}
            src="/img/icomenu.svg"
            alt="Menu"
          />
        </div>
        <Link href="/">
          <img src="/img/logo.svg" alt="Logo PagBank" />
        </Link>
      </section>
      <section
        className={`${styles.ContainersImgHeader} ${styles.containerUser}`}
      >
        <img src="/img/notificacao.svg" alt="notificacao" />
        <img src="/img/profile.svg" alt="logo" className={styles.imgProfile} />
        <div>
          <p className={styles.textUser}>Meyre França</p>
          <small className={styles.textUser}>manusia@uolinc.com</small>
        </div>
      </section>
    </header>
  );
}
