"use client";
import Title from "app/components/Title";
import { useSelector } from "react-redux";
import styles from './detalhes.module.scss';
import NavBarDetalhes from "app/components/NavBarDetalhesProduto";
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
      <NavBarDetalhes id={id}/>
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


