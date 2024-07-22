// components/Modal.js
import styles from "./Modal.module.scss";
import Link from "next/link";
export default function Modal({ onClose, product, position }) {
  console.log(position);
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  let links;
  switch (product.status) {
    case "ativo":
      links = (
        <div className={styles.link}>
          <Link href={`page/link-de-pagamento/detalhes/${product.id}`}>Ir para detalhes</Link>
          <Link href={''}>Pausar</Link>
          <Link href={''}>Excluir</Link>
        </div>
      );
      break;
    case "pausado":
      links = (
        <div className={styles.link}>
          <Link href={`page/link-de-pagamento/detalhes/${product.id}`}>Ir para detalhes</Link>
          <Link href={''}>Reiniciar vendas</Link>
          <Link href={''}>Excluir</Link>
        </div>
      );
      break;
    case "expirado":
      links = (
        <div className={styles.link}>
          <Link href={`page/link-de-pagamento/detalhes/${product.id}`}>Ir para detalhes</Link>
          <Link href={''}>Excluir</Link>
        </div>
      );
      break;
    default:
      links = null;
  }
  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent} style={{ top: `${position.top}px`, left: `${position.left}px` }}>
        {links}       
      </div>
    </div>
  );
}
