"use client";
import { useState } from "react";
import styles from "./menu.module.scss";
import Link from "next/link";


export default function Navbar() {
  const [selectedButton, setSelectedButton] = useState("/")

  const changeBackgroundBtt = (event, to) => {
    setSelectedButton(to);
  }

  return (
    <aside className={styles.navbar}>
      <Nav>
        <NavItem to="/" text="Página Inicial" src="/img/home.svg" />
      </Nav>
      <Nav title={"MEU NEGÓCIO"}>
        <NavItem to="/" text="Vendas" src="/img/vendas.svg" onclick={changeBackgroundBtt} isSelected={selectedButton === "/"}/>
        <NavItem to="" text="Máquininhas" src="/img/maquininhas.svg" />
        <NavItem
          to=""
          text="Extratos e Relatórios"
          src="/img/relatorios.svg"
        />
        <NavItem to="" text="Gestão e Fidelização" src="/img/gestao.svg" />
      </Nav>

      <Nav title={"CONTA PAGBANK"}>
        <NavItem to="" text="Pagar Contas" src="/img/barCode.svg" />
        <NavItem to="" text="Extratos" src="/img/extratos.svg" />
        <NavItem to="" text="Transferências" src="/img/Exchange.svg" />
        <NavItem to="" text="Investimentos" src="/img/invest.svg" />
        <NavItem to="" text="Empréstimos" src="/img/emprestimo.svg" />
        <NavItem to="" text="PIX" src="/img/pix.svg" />
        <NavItem to="" text="Cartões" src="/img/cartoes.svg" />
        <NavItem to="" text="Vantagens" src="/img/vantagens.svg" />
      </Nav>

      <Nav>
        <NavItem to="" text="Meus Dados" src="/img/dados.svg" />
        <NavItem to="" text="Central de Soluções" src="/img/solucoes.svg" />
        <NavItem to="" text="Configurações" src="/img/config.svg" />
        <NavItem to="" text="Ajuda" src="/img/help.svg" />
      </Nav>

      <Nav>
        <NavItem to="" text="Sair" src="/img/out.svg" />
      </Nav>
    </aside>
  );
}

const Nav = ({ title, children }) => (
  <nav className={styles.nav}>
    <ul>
      {title && <p className={styles.title}>{title}</p>}
      {children}
    </ul>
  </nav>
);

const NavItem = ({ to, text, src, onclick, isSelected}) => (
  <li className={styles.navItem}>
    <Link href={to} className={styles.link} onClick={onclick}
     style={{ backgroundColor: isSelected ? "#F3F4F5" : "none" }} >
      <img src={src} alt={src} className={styles.icon} />
      {text}
    </Link>
  </li>
);
