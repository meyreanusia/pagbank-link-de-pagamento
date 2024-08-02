import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import Inicio from "./page";
import productsReducer from "../store/reducers/products"; 

// Mock do useRouter para verificar a navegação
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
const mockProducts = [
    {
      id: 1,
      data: "01/01/2024",
      produto: "Produto A",
      status: "ativo",
      valor: "100.00",
      vendas: 10
    },
    {
      id: 2,
      data: "02/02/2024",
      produto: "Produto B",
      status: "expirado",
      valor: "200.00",
      vendas: 20
    }
  ];
  
  const initialState = {
    products: mockProducts
  };
// Mock do Redux Store
const store = configureStore({
  reducer: {
    products: productsReducer
  },
  preloadedState: initialState

});

test('Deve adicionar um novo produto e redirecionar', () => {
  const mockPush = jest.fn();
  useRouter.mockReturnValue({ push: mockPush });

  render(
    <Provider store={store}>
      <Inicio />
    </Provider>
  );

  // Preenche o formulário
  fireEvent.change(screen.getByLabelText(/O que você está vendendo\?/i), { target: { value: 'Produto Teste' } });
  fireEvent.change(screen.getByLabelText(/Qual o valor\?/i), { target: { value: '50' } });

  // Simula o envio do formulário
  fireEvent.click(screen.getByRole('button', { name: /Criar Link/i }));

  expect(mockPush).toHaveBeenCalledWith(expect.stringMatching(/\/link-de-pagamento\/detalhes\/.*/));

})

test('Deve mostrar mensagens de erro se o formulário estiver inválido', () => {
  render(
    <Provider store={store}>
      <Inicio />
    </Provider>
  );

  // Simula o envio do formulário sem preencher os campos
  fireEvent.click(screen.getByRole('button', { name: /Criar Link/i }));

  // Verifica se as mensagens de erro são exibidas
  expect(screen.getByText(/O nome do produto é obrigatório/i)).toBeInTheDocument();
  expect(screen.getByText(/O valor do produto é obrigatório/i)).toBeInTheDocument();
});
