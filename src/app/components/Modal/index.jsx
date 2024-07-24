// components/Modal.js
import styles from "./Modal.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { deleteProduct } from "app/store/reducers/products";

export default function Modal({ onClose, product, position }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const deleteProductClick = (event) => {
    event.preventDefault();
    dispatch(deleteProduct(product.id));
    onClose();
  };

  let links;
  switch (product.status) {
    case "ativo":
      links = (
        <div className={styles.link}>
          <Link href={`/link-de-pagamento/detalhes/${product.id}`}>
            Ir para detalhes
          </Link>
          <button >Pausar</button>
          <button onClick={deleteProductClick}>Excluir</button>
        </div>
      );
      break;
    case "pausado":
      links = (
        <div className={styles.link}>
          <Link href={`/link-de-pagamento/detalhes/${product.id}`}>
            Ir para detalhes
          </Link>
          <button>Reiniciar vendas</button>
          <button onClick={deleteProductClick}>Excluir</button>
        </div>
      );
      break;
    case "expirado":
      links = (
        <div className={styles.link}>
          <Link href={`/link-de-pagamento/detalhes/${product.id}`}>
            Ir para detalhes
          </Link>
          <button onClick={deleteProductClick}>Excluir</button>
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
