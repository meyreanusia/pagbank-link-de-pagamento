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
        <dd>
          <h3 className={styles.produto}>{product.produto}</h3>
          <dt className={styles.valor}>R$ {product.valor}</dt>
        </dd>
        <dd>
          <h3>Status do link</h3>
          <dt>{product.status}</dt>
        </dd>
        <dd>
          <h3>Data de Criação</h3>
          <dt>Data: {product.data}</dt>
        </dd>
      </section>
    </div>
  );
}
