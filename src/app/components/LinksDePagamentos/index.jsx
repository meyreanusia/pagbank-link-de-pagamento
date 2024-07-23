"use client";
import Link from "next/link";
import styles from "./LinksDePagamentos.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal";
export default function LinksDePagamentos({ filter }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const Products = useSelector((store) => store.products);

  const filteredProducts = Products?.filter((product) => {
    const status =
      filter.status === "todos" || product.status === filter.status;
    const search = product.produto
      .toLowerCase()
      .includes(filter.search.toLowerCase());
    return status && search;
  });

  const openModal = (product, position) => {
    setSelectedProduct(product);
    setModalPosition(position);
    setModalOpen(true);
  };
  return (
    <div className={styles.tableContainer}>
      <section className={styles.tableHeader}>
        <div>Data</div>
        <div className={styles.servicos}>Produto/Serviço</div>
        <div>Status</div>
        <div>Vendas</div>
        <div>Valor</div>
        <div className={styles.opcoes}>Opções</div>
      </section>

      <section className={styles.tableRowGroup}>
        {filteredProducts &&
          filteredProducts.map((item, index) => (
            <TableRow key={index} {...item} openModal={openModal}/>
          ))}
      </section>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)} product={selectedProduct} position={modalPosition} />
      )}
    </div>
  );
}

function TableRow({ data, produto, status, valor, vendas, id, openModal }) {

  const handleButtonClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const containerRect = event.currentTarget.closest(`.${styles.tableContainer}`).getBoundingClientRect();
    const modalWidth = 200;
    const position = {
      top: rect.bottom,
      left: containerRect.right - modalWidth ,
    };
    openModal({ data, produto, status, valor, vendas, id }, position);
  };

  let statusIcon;
  switch (status) {
    case "ativo":
      statusIcon = "./img/ativado.svg";
      break;
    case "expirado":
      statusIcon = "./img/expirado.svg";
      break;
    case "pausado":
      statusIcon = "./img/pausado.svg";
      break;
    default:
      statusIcon = null;
  }

  return (
    <div className={styles.row}>
      <div className={styles.tabelcell}>{data}</div>

      <div className={`${styles.tabelcell} ${styles.servicos}`}>
        <div className={styles.nomeProduto}>
          <Link href={`/link-de-pagamento/detalhes/${id}`}>{produto}</Link>
        </div>
      </div>
      <div className={`${styles.tabelcell} ${styles.status}`}>
        <div>
          {" "}
          <img
            className={styles.icon}
            src={statusIcon}
            alt={`Ícone ${status}`}
          />
          {status}
        </div>
      </div>
      <div className={`${styles.tabelcell} ${styles.vendas}`}>
        <div>{`${vendas} unid.`}</div>
      </div>
      <div className={styles.tabelcell}>R$ {valor}</div>
      <div className={`${styles.tabelcell} ${styles.opcoes}`}>
        <button
          className={styles.bttSecondary}
          onClick={handleButtonClick}>
          <img src="./img/IconButton.svg"></img>
        </button>
      </div>
    </div>
  );
}
