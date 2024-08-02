// components/Modal.js
import React from "react";
import styles from "./Modal.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { deleteProduct, resetProduct, pauseProduct } from "app/store/reducers/products";

export default function Modal({ onClose, product, position }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const deleteProductOnClick = (event) => {
    event.preventDefault();
    dispatch(deleteProduct(product.id));
    onClose();
  };
  const pauseProductOnClick = event => {
    event.preventDefault()
    dispatch(pauseProduct(product.id))
    onClose()
  }

  const resetProductOnClick = event => {
    event.preventDefault()
    dispatch(resetProduct(product.id))
    onClose()
  }
  let links;
  switch (product.status) {
    case "ativo":
      links = (
        <div className={styles.link}>
          <Link href={`/link-de-pagamento/detalhes/${product.id}`}>
            Ir para detalhes
          </Link>
          <button  onClick={pauseProductOnClick}>Pausar</button>
          <button onClick={deleteProductOnClick}>Excluir</button>
        </div>
      );
      break;
    case "pausado":
      links = (
        <div className={styles.link}>
          <Link href={`/link-de-pagamento/detalhes/${product.id}`}>
            Ir para detalhes
          </Link>
          <button onClick={resetProductOnClick}>Reiniciar vendas</button>
          <button onClick={deleteProductOnClick}>Excluir</button>
        </div>
      );
      break;
    case "expirado":
      links = (
        <div className={styles.link}>
          <Link href={`/link-de-pagamento/detalhes/${product.id}`}>
            Ir para detalhes
          </Link>
          <button onClick={deleteProductOnClick}>Excluir</button>
        </div>
      );
      break;
    default:
      links = null;
  }

  const dispatch = useDispatch();

  return (
    <div
      className={styles.modalOverlay}
      data-testid="modalOverlay"
      onClick={handleOverlayClick}
      style={{ position: "fixed" }}
    >
      <div
        className={styles.modalContent}
        style={{
          position: "fixed",
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        {links}
      </div>
    </div>
  );
}
