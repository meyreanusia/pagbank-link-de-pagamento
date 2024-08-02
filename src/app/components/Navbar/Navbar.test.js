import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from ".";
import { useRouter } from "next/router";

jest.mock('next/navigation', () =>{
    useRouter: jest.fn()
})


test('should ', () => {
    render(<Navbar/>)

    const links = [
        "Página Inicial",
        "Vendas",
        "Máquininhas",
        "Extratos e Relatórios",
        "Gestão e Fidelização",
        "Pagar Contas",
        "Extratos",
        "Transferências",
        "Investimentos",
        "Empréstimos",
        "PIX",
        "Cartões",
        "Vantagens",
        "Meus Dados",
        "Central de Soluções",
        "Configurações",
        "Ajuda",
        "Sair"
    ];

    links.forEach(linkText => {
        const element = screen.getByText(linkText);
        expect(element).toBeInTheDocument();
        expect(element.closest('a')).toHaveAttribute('href')
    });
});