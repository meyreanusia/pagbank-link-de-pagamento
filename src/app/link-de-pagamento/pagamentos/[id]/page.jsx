"use client";
import Title from "app/components/Title";
import styles from "./pagamentos.module.scss";
import NavBarDetalhes from "app/components/NavBarDetalhesProduto";
export default function pagamentos({ id }) {

  return (
    <div className={styles.containerProductDetails}>
      <Title title={"Detalhes do link de pagamento"} />
      <NavBarDetalhes id={id} />
      <div className="nav-detalhes-produto"></div>
      <section className={styles.detalhes}>Detalhes de pagamento aqui</section>
    </div>
  );
}

