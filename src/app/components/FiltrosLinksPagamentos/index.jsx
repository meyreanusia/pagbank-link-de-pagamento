import ButtonPrimary from "../ButtonPrimary";
import styles from './FiltrosLinksPagamentos.module.scss'
export default function FiltrosLinksPagamentos() {
  return (
    <div className={styles.filtrosContainer}>
 
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Buscar" id={styles.inputbusca}/>
      </div>

      <div className={styles.selectcontainer}>
        <select id={styles.productselect} name="product">
          <option value="todos">Todos</option>
          <option value="ativado">Ativado</option>
          <option value="pausado">Pausado</option>
          <option value="expirado">Expirado</option>
        </select>
      </div>

      <div className={styles.bttContainer}> 
            <ButtonPrimary  text="Filtrar"/>
        </div>
    </div>
  );
}
