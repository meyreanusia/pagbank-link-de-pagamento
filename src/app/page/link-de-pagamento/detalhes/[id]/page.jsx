"use client";
import Title from "app/components/Title";
import products from "app/store/reducers/products";
import store from "app/store/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import styles from './detalhes.module.scss'
export default function detalhesProduto({ params }) {
  const { id } = params;
  const products = useSelector((store) => store.products);
  const product = products.find((products) => products.id === id);

  if (!product) {
    return <>Produto não encontrado</>;
  }
  return (
    <div className={styles.containerProductDetails}> 
      <Title title={"Detalhes do link de pagamento"} />
      <div className="nav-detalhes-produto"></div>
      <section className={styles.detalhes}>
        <h2>Produto</h2>
        <dl>
          <dt>Nome</dt>
          <dd className={styles.produto}>{product.produto}</dd>
          <dt>Valor</dt>
          <dd className={styles.valor}>R$ {product.valor}</dd>
          <dt>Status do link</dt>
          <dd>{product.status}</dd>
          <dt>Data de Criação</dt>
          <dd>Data: {product.data}</dd>
        </dl>
      </section>
    </div>
  );
}
