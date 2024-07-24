"use client";
import Title from "app/components/Title";
import styles from "./pagamentos.module.scss";
import NavBarDetalhes from "app/components/NavBarDetalhesProduto";
export default function pagamentos({ params }) {
  const { id } = params;
  return (
    <div className={styles.containerProductDetails}>
      <Title title={"Detalhes do link de pagamento"} />
      <NavBarDetalhes id={id} />
      <div className="nav-detalhes-produto"></div>
      <section className={styles.detalhes}>
        <h2>Pagamentos</h2>

        <div className={styles.pagamentos}>
          <strong>Ainda não existem pagamentos neste link</strong>
          <div>
            Compartilhe o link com seus clientes e acompanhe os pagamentos aqui
            quando realizar vendas.
          </div>
        </div>
      </section>
    </div>
  );
}
