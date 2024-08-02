// Modal.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "./index";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  resetProduct,
  pauseProduct,
} from "app/store/reducers/products";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("app/store/reducers/products", () => ({
  deleteProduct: jest.fn(),
  resetProduct: jest.fn(),
  pauseProduct: jest.fn(),
}));

const mockDispatch = jest.fn();
useDispatch.mockReturnValue(mockDispatch);

const product = {
  id: "1",
  status: "ativo",
};

const position = { top: 100, left: 100 };

const renderModal = (productStatus) => {
  render(
    <Modal
      onClose={jest.fn()}
      product={{ ...product, status: productStatus }}
      position={position}
    />
  );
};

describe("Modal", () => {
  it('Deve renderizar com o status do link "ativo"', () => {
    renderModal("ativo");
    expect(screen.getByText(/Ir para detalhes/i)).toBeInTheDocument();
    expect(screen.getByText(/Pausar/i)).toBeInTheDocument();
    expect(screen.getByText(/Excluir/i)).toBeInTheDocument();
  });

  it('Deve renderizar com o status do link "pausado"', () => {
    renderModal("pausado");

    expect(screen.getByText(/Ir para detalhes/i)).toBeInTheDocument();
    expect(screen.getByText(/Reiniciar vendas/i)).toBeInTheDocument();
    expect(screen.getByText(/Excluir/i)).toBeInTheDocument();
  });

  it('Deve renderizar com o status do link "expirado"', () => {
    renderModal("expirado");

    expect(screen.getByText(/Ir para detalhes/i)).toBeInTheDocument();
    expect(screen.getByText(/Excluir/i)).toBeInTheDocument();
  });

  it("deve fechar o modal com o overlay click", () => {
    const onCloseMock = jest.fn();
    render(
      <Modal onClose={onCloseMock} product={product} position={position} />
    );

    fireEvent.click(screen.getByTestId("modalOverlay"));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('deve disparar o  deleteProduct quando clicar em "Excluir"', () => {
    renderModal("ativo");

    fireEvent.click(screen.getByText(/Excluir/i));
    expect(mockDispatch).toHaveBeenCalledWith(deleteProduct(product.id));
  });

  it('Deve disparar pauseProduct qunado clicar em "Pausar"', () => {
    renderModal("ativo");

    fireEvent.click(screen.getByText(/Pausar/i));
    expect(mockDispatch).toHaveBeenCalledWith(pauseProduct(product.id));
  });

  it('Deve dispara resetProduct quando clicar em "Reiniciar vendas"', () => {
    renderModal("pausado");

    fireEvent.click(screen.getByText(/Reiniciar vendas/i));
    expect(mockDispatch).toHaveBeenCalledWith(resetProduct(product.id));
  });
});
