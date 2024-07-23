import Link from "next/link";
import styles from './NavBarDetalhesProduto.module.scss'
export  default function NavBarDetalhes({id}) {
    return (
      <div className={styles.navBar}>
        <section>
          <Link href={`/link-de-pagamento/detalhes/${id}`}>Detalhes</Link>
        </section>
  
        <section>
        <Link href={`/link-de-pagamento/pagamentos/${id}`}>Pagementos</Link>
        </section>
      </div>
    );
  }