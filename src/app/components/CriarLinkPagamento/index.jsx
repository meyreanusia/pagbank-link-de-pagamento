import React from 'react';
import Link from 'next/link'
import styles from "./criarLinkPagamento.module.scss";

export default function CriarLinkPagamento() {
  return (
    <Link href="/novoLink/">
       <div className={styles.containerCriarLinkPagamento}>
        <div>
          <img src="/img/more.svg" alt="Criar novo Link de Pagamento" />
        </div>
        <div>
          <p className={styles.link}>
            Criar novo Link de Pagamento
          </p>
        </div>
      </div>
    </Link>
     
  );
}
