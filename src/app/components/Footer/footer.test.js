import Footer from "./index";
import React from "react"; 
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react";
test("Ao ser rederizado o Footer deve", () => {
    render(<Footer/>)

    // Verifica se os dois paragrafos estão no Dom
    const direitosReservados = screen.getAllByText(/1996-2022 Todos os direitos reservados./i);
    expect(direitosReservados).toHaveLength(2)
    // Verifica se há img 
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/img/logo.svg')
})