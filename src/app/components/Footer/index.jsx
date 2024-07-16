import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/img/logo.svg" alt="" />
      <p>© 1996-2022 Todos os direitos reservados.</p>
      <p>
        © 1996-2022 Todos os direitos reservados. PAGSEGURO INTERNET S/A -
        CNPJ/MF 08.561.701/0001-01 Av. Brigadeiro Faria Lima, 1.384, São Paulo -
        SP - CEP 01452-002
      </p>
    </footer>
  );
}
