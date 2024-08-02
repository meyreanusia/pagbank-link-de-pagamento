import React from "react";
import { screen, render } from "@testing-library/react";
import { useRouter } from "next/router";
import "@testing-library/jest-dom"
import Header from "./index";

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}))

test("O header deve conter a logo com link para a Home", () =>{

    render(<Header/>)

    const linkLogo = screen.getByRole('link', {name: /Logo PagBank/i});
    expect(linkLogo).toBeInTheDocument();
    expect(linkLogo).toHaveAttribute('href', '/')

    const imgLogo = screen.getByRole('img', {name: /logo pagbank/i})
    expect(imgLogo).toBeInTheDocument()
})

test('Deve renderizar 4 imagens', () =>{
    render(<Header />)
    const imagens = screen.getAllByRole('img')
    expect(imagens).toHaveLength(4)
})

test('Deve conter o nome do usuário e e-mail', () => {
    render(<Header/>)
    const name = screen.getByText(/meyre frança/i)
    expect(name).toBeInTheDocument()

    const email = screen.getByText(/manusia@uolinc.com/i)
    expect(email).toBeInTheDocument()
});