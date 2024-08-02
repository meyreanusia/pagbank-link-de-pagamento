import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../../../store/reducers/products";
import DetalhesProduto from "./page";

// Mock do Redux Store
const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  preloadedState: {
    products: [
      {
        id: "1",
        data: "01/01/2024",
        produto: "Produto Teste",
        status: "ativo",
        valor: "50.00",
        vendas: 5,
      },
    ],
  },
});

// Mock do componente de navegação
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Função para renderizar o componente com store
const renderWithStore = (props) => {
  return render(
    <Provider store={store}>
      <DetalhesProduto {...props} />
    </Provider>
  );
};

describe("Detalhes do Produto", () => {
  test("deve renderizar os detalhes do produto corretamente", async () => {
    renderWithStore({ params: { id: "1" } });

    expect(
      screen.getByText(/Detalhes do link de pagamento/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Produto Teste/i)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 50.00/i)).toBeInTheDocument();
    expect(screen.getByText(/ativo/i)).toBeInTheDocument();
    expect(screen.getByText(/01\/01\/2024/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Cartão de Crédito, Pix, Débito e Boleto/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Parcelamento em até 18x. Eu assumo as taxas de parcelamento das 2 primeiras parcelas/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Sem frete/i)).toBeInTheDocument();
  });

  test("deve mostrar mensagem de produto não encontrado quando o ID não existe", async () => {
    renderWithStore({ params: { id: "999" } });

    expect(screen.getByText(/Produto não encontrado!/i)).toBeInTheDocument();
  });

  test("deve aplicar a classe de status correta com base no status do produto", async () => {
    renderWithStore({ params: { id: "1" } });

    const ddElement = screen.getByText(/ativo/i).closest("dd");
    const spanElement = ddElement.querySelector("span");
    expect(spanElement).toHaveTextContent("ativo");
    expect(ddElement).toHaveClass("statusAtivo");
  });
});
