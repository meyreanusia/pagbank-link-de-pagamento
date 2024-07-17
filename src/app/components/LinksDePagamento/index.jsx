"use client";
import ButtonSecondary from "../ButtonSecondary";
import ButtonPrimary from "../ButtonSecondary";
import styles from "./LinksDePagamento.module.scss";
import { useSelector } from "react-redux";

export default function LinksDePagamento() {
  const Products = useSelector((store) => store.products);
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
        {Products &&
          Products.map((item, index) => <TableRow key={index} {...item} />)}
      </section>
    </div>
  );
}

function TableRow({ data, produto, status, valor, vendas }) {

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

        <div className={styles.nomeProduto}>{produto}</div>
      </div>
      <div className={`${styles.tabelcell} ${styles.status}`}>
        <img src={statusIcon} alt={`Ícone ${status}`} />
        {status}
      </div>
      <div className={styles.tabelcell}>{`${vendas} unid.`}</div>
      <div className={styles.tabelcell}>{valor}</div>
      <div className={`${styles.tabelcell} ${styles.opcoes}`}>
        <ButtonSecondary />
      </div>
    </div>
  );
}
