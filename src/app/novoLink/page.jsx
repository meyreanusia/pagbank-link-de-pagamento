"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Title from "app/components/Title";
import styles from "./inicio.module.scss";
import { useRouter } from "next/navigation";
import { NumericFormat } from "react-number-format";
import { addProduct } from "app/store/reducers/products";
import { v4 as uuidv4 } from "uuid";

export default function Inicio() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  
  const handleCancel = (event) => {
    event.preventDefault();
    router.push("/");
  };

  const hasError = (produto, valor) => {
    let errors = {};
    if (produto === "") {
      errors.produto = "O nome do produto é obrigatório";
    }
    if (valor === "") {
      errors.valor = "O valor do produto é obrigatório";
    } else if (parseFloat(valor.replace("R$", "").replace(",", ".")) < 5) {
      errors.valor = "O valor precisa ser maior que R$ 5,00";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length > 0;
  };

  const handleContinue = (event) => {
    event.preventDefault();
    if (!hasError(produto, valor)) {
      // Criar um novo produto
      const novoProduto = {
        data: new Date().toLocaleDateString("pt-BR"),
        produto: produto,
        status: "ativo",
        vendas: 0,
        valor: parseFloat(
          valor.replace("R$ ", "").replace(".", "").replace(",", ".")
        ), // Transformando o valor em número
        id: uuidv4(),
      };
      dispatch(addProduct(novoProduto));
      router.push(`/link-de-pagamento/detalhes/${novoProduto.id}`);
    }
  };

  return (
    <div className={styles.main}>
      <Title title="Criar Link de Pagamento" />
      <form action="" className={styles.formNovoLink}>
        <div className={styles.novoLinkContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor="produto">O que vocês está vendendo?</label>
            <input
              type="text"
              placeholder="Produto ou serviço"
              id="produto"
              onChange={(e) => setProduto(e.target.value)}
            />
            <div className={styles.errorsContainer}>
              {errorMessages.produto && (
                <span className={styles.error}>{errorMessages.produto}</span>
              )}
            </div>
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
              isAllowed={(values) => {
               const { floatValue } = values;
                return floatValue === undefined || floatValue === null || floatValue >= 0;
              }}
              placeholder="R$ 0,00"
              id="valor"
              className={styles.input}
            />

            <div className={styles.errorsContainer}>
              <section></section>

              {errorMessages.valor && (
                <span className={styles.error}>{errorMessages.valor}</span>
              )}
            </div>
          </div>
        </div>

        <div className={styles.bttContainer}>
          <button className={styles.bttCancelar} onClick={handleCancel}>
            Cancelar
          </button>
          <button
            className={styles.bttCriarLink}
            type="submit"
            onClick={handleContinue}
          >
            Criar Link
          </button>
        </div>
      </form>
    </div>
  );
}


