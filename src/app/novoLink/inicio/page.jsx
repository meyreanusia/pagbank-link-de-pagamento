import Title from "app/components/Title";
import styles from "./inicio.module.scss";

export default function Inicio() {
  return (
    <div className={styles.main}>
      <Title title="Criar Link de Pagamento" />
      <div className={styles.novoLinkContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="produto">O que vocês está vendendo?</label>
          <input type="text" placeholder="Produto ou serviço" id="produto"/>
        </div>
        <div className={styles.inputContainer}  >
          <label htmlFor="valor">Qual o valor?</label>
          <input type="text" name="valor" id="valor" placeholder="Valor" />
        </div>
      </div>
    </div>
  );
}
