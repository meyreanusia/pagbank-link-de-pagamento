"use client";
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
      <h1>DETALHES DO PRODUTO</h1>
      <p>ID: {product.id}</p>
      <p>Data: {product.data}</p>
      <p>Produto: {product.produto}</p>
      <p>Status: {product.status}</p>
      <p>Vendas: {product.vendas}</p>
      <p>Valor: {product.valor}</p>
    </div>
  );
}
