"use client";
import { useState } from "react";
import Title from "app/components/Title";
import styles from "./inicio.module.scss";
import { useRouter } from "next/navigation";
import { NumericFormat } from 'react-number-format';
export default function Inicio() {
  const router = useRouter();
  const [produto, setProduto] = useState("")
  const [valor, setValor] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const handleCancel = (event) => {
    event.preventDefault()
    router.push("/");
  };

  const hanleContinue = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  
  
  return (
    <div className={styles.main}>
      <Title title="Criar Link de Pagamento" />
      <form action="" className={styles.formNovoLink}>
        <div className={styles.novoLinkContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="produto">O que vocês está vendendo?</label>
            <input type="text" placeholder="Produto ou serviço" id="produto" onChange={(e) => setProduto(e) }/>
            {errorMessages.produto && (
              <span className={styles.error}>{errorMessages.produto}</span>
            )}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="valor">Qual o valor?</label>
            <NumericFormat 
             thousandSeparator="."
             decimalSeparator=","
             prefix="R$ "
             value={valor}
             onValueChange={(values) => {
               const { formattedValue, value } = values;
               setValor(formattedValue);
               
             }}
             placeholder="R$ 0,00"
             id="valor"
             className={styles.input} />
             {errorMessages.valor && (
              <span className={styles.error}>{errorMessages.valor}</span>
            )}

          </div>
        </div>

        <div className={styles.bttContainer}>
          <button className={styles.bttCancelar} onClick={handleCancel}>
            Cancelar
          </button>
          <button
            className={styles.bttCriarLink}
            type="submit"
            onClick={hanleContinue}
          >
            Criar Link
          </button>
        </div>
      </form>
    </div>
  );
}
