"use client";
import React from "react";
import Title from "app/components/Title";
import { useSelector } from "react-redux";
import styles from './detalhes.module.scss';
import NavBarDetalhes from "app/components/NavBarDetalhesProduto";


export default function DetalhesProduto({ params }) {

  const { id } = params;
  const products = useSelector((store) => store.products);

  if (!products || !Array.isArray(products)) {
    return <>Carregando...</>;
  }
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <>Produto não encontrado!</>;
  }

  let statusClass;
  switch (product.status) {
    case "ativo":
      statusClass = styles.statusAtivo;
      break;
    case "pausado":
      statusClass = styles.statusPausado;
      break;
    case "expirado":
      statusClass = styles.statusExpirado;
      break;
    default:
      statusClass = "";
  }
  return (
    <div className={styles.containerProductDetails}> 
      <Title title={"Detalhes do link de pagamento"} />
      <NavBarDetalhes id={id}/>
      <div className="nav-detalhes-produto"></div>
      <section className={styles.detalhes}>
        <h2>Produto</h2>
        <dl>
          <dt className={styles.produto}>{product.produto}</dt>
          <dd className={styles.valor}>R$ {product.valor}</dd>
          <dt>Status do link</dt>
          <dd className={statusClass}><span>{product.status}</span></dd>
          <dt >Data de Criação</dt>
          <dd> {product.data}</dd>
          <dt>Meios de pagamento</dt>
          <dd>Cartão de Crédito, Pix, Débito e Boleto</dd>
          <dt> Parcelamento e taxas</dt>
          <dd>Parcelamento em até 18x. Eu assumo as taxas de parcelamento das 2 primeiras parcelas</dd>
          <dt>Tipo de envio</dt>
          <dd>Sem frete</dd>
        
        </dl>
      </section>
    </div>
  );
}


