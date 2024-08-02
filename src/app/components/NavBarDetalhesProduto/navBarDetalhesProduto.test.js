import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBarDetalhes from ".";

test("Deve renderizar link de detalhes", () => {
    const id = "12"
    render(<NavBarDetalhes id={id} />)

    const linkDetalhes = screen.getByRole('link', {name:/detalhes/i})
    expect(linkDetalhes).toBeInTheDocument()
    expect(linkDetalhes).toHaveAttribute('href', `/link-de-pagamento/detalhes/${id}`)
})
test("Deve renderizar link de pagamentos", () => {
    const id = "12"
    render(<NavBarDetalhes id={id} />)

    const linkDetalhes = screen.getByRole('link', {name:/pagamentos/i})
    expect(linkDetalhes).toBeInTheDocument()
    expect(linkDetalhes).toHaveAttribute('href', `/link-de-pagamento/pagamentos/${id}`)
})
