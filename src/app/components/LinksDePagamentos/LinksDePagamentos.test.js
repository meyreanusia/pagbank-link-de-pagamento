import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import LinksDePagamentos from "./index.jsx";
import productsReducer from "../../store/reducers/products"; 

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

const store = configureStore({
  reducer: {
    products: productsReducer
  },
  preloadedState: initialState
});

test('Deve renderizar o LinksDePagamentos com produtos', () => {
  render(
    <Provider store={store}>
      <LinksDePagamentos filter={{ status: "todos", search: "" }} />
    </Provider>
  );

  // Verifica se a tabela é renderizada
  expect(screen.getByText(/Data/i)).toBeInTheDocument();
  expect(screen.getByText(/Produto\/Serviço/i)).toBeInTheDocument();
  expect(screen.getByText(/Status/i)).toBeInTheDocument();
  expect(screen.getByText(/Vendas/i)).toBeInTheDocument();
  expect(screen.getByText(/Valor/i)).toBeInTheDocument();
  expect(screen.getByText(/Opções/i)).toBeInTheDocument();

  // Verifica se os produtos são exibidos
  mockProducts.forEach(product => {
    expect(screen.getByText(product.produto)).toBeInTheDocument();
    expect(screen.getByText(`R$ ${product.valor}`)).toBeInTheDocument();
    expect(screen.getByText(product.status)).toBeInTheDocument();
    expect(screen.getByText(product.data)).toBeInTheDocument();
    expect(screen.getByText(`${product.vendas} unid.`)).toBeInTheDocument();
  });
});
