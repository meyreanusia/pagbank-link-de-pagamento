import React from "react";
import { useState } from "react";
import styles from "./FiltrosLinksPagamentos.module.scss";


export default function FiltrosLinksPagamentos({ setFilter }) {
  const [filterSelect, setFilterSelect] = useState("todos");

  const handleFilter = (event) => {
    setFilterSelect(event.target.value);
  };

  const handleSearch = (event) => {
    setFilter((prev) => ({
      ...prev,
      search: event.target.value,
    }));
  };

  const filterApply = () => {
    setFilter((prev) => ({ ...prev, status: filterSelect }));
  };

  return (
    <div className={styles.filtrosContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Buscar"
          id={styles.inputbusca}
          onChange={handleSearch}
        />
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
        <ButtonPrimary text="Filtrar" filterApply={filterApply} />
      </div>
    </div>
  );
}

export function ButtonPrimary({ text, filterApply }) {
  return (
    <button className={styles.bttprimary} onClick={filterApply}>
      {text}
    </button>
  );
}
