"use client";
import Title from "app/components/Title";
import products from "app/store/reducers/products";
import store from "app/store/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function detalhesProduto({ params }) {
  const { id } = params;
  const products = useSelector((store) => store.products);
  const product = products.find((products) => products.id === id);

  if (!product) {
    return <>Produto não encontrado</>;
  }
  return (
    <div>
      <Title title={"Detalhes do link de pagamento"} />
      <div className="nav-detalhes-produto"></div>
      <section className="detalhes">
        <h2>Produto</h2>
        <dd>
          <h3>{product.produto}</h3>
          <dt>{product.valor}</dt>
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
