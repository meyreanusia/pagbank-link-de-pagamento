import ButtonPrimary from "../ButtonPrimary";
import styles from "./FiltrosLinksPagamentos.module.scss";
export default function FiltrosLinksPagamentos({ setFilter }) {

  const handleFilter = (event) => {
    setFilter((prev) => ({...prev,
      status: event.target.value
    }))
  };

  const handleSearch = (event) => {
    setFilter((prev) => ({
      ... prev,
      search:event.target.value}))

  }
  

  return (
    <div className={styles.filtrosContainer}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Buscar" id={styles.inputbusca} onChange={handleSearch} />
      </div>

      <div className={styles.selectcontainer}>
        <select
          id={styles.productselect}
          name="product"
          onChange={handleFilter}
        >
          <option value="todos">Todos</option>
          <option value="ativo">Ativo</option>
          <option value="pausado">Pausado</option>
          <option value="expirado">Expirado</option>
        </select>
      </div>

      <div className={styles.bttContainer}>
        <ButtonPrimary text="Filtrar" />
      </div>
    </div>
  );
}
