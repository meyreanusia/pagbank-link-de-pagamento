"use client"
import { useState } from "react";
import CriarLinkPagamento from "../app/components/CriarLinkPagamento";
import FiltrosLinksPagamentos from "./components/FiltrosLinksPagamentos";
import LinksDePagamentos from "./components/LinksDePagamentos";
import Title from "./components/Title";
import styles from "./page.module.css";

export default function Home() {
  const [filter, setFilter] = useState("todos");

  
  return (
    <main className={styles.main} >
      <Title title="Link de Pagamento"/>
      <CriarLinkPagamento/>
      <FiltrosLinksPagamentos setFilter={setFilter}/>
      <LinksDePagamentos filter={filter}/>
    </main>
  );
}
