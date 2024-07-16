import CriarLinkPagamento from "../app/components/CriarLinkPagamento";
import FiltrosLinksPagamentos from "./components/FiltrosLinksPagamentos";
import LinksDePagamento from "./components/LinksDePagamento";
import Title from "./components/Title";
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <main className={styles.main} >
      <Title title="Link de Pagamento"/>
      <CriarLinkPagamento/>
      <FiltrosLinksPagamentos/>
      <LinksDePagamento/>
    </main>
  );
}
