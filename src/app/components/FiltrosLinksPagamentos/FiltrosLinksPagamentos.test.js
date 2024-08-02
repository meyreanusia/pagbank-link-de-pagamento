import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import FiltrosLinksPagamentos, { ButtonPrimary } from "./index";

const mockSetFilter = jest.fn();

describe('Filtros do Links de Pagamentos', () => {

  beforeEach(() => {
    mockSetFilter.mockClear();
  });

  test('Deve renderizar o campo de input de busca', () => {
    render(<FiltrosLinksPagamentos setFilter={mockSetFilter} />);
    const inputElement = screen.getByPlaceholderText('Buscar');
    expect(inputElement).toBeInTheDocument();
  });

  test('Deve renderizar o dropdown de seleção', () => {
    render(<FiltrosLinksPagamentos setFilter={mockSetFilter} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(screen.getByText('Ativo')).toBeInTheDocument();
    expect(screen.getByText('Pausado')).toBeInTheDocument();
    expect(screen.getByText('Expirado')).toBeInTheDocument();
  });
  test('Deve chamar filterApply ao clicar no botão de filtro', () => {
    const mockFilterApply = jest.fn();
    render(
      <ButtonPrimary text="Filtrar" filterApply={mockFilterApply} />
    );
    const buttonElement = screen.getByRole('button', { name: /Filtrar/i });
    fireEvent.click(buttonElement);
    expect(mockFilterApply).toHaveBeenCalled();
  });


  test('Deve chamar setFilter com o valor correto ao digitar no campo de busca', () => {
    render(<FiltrosLinksPagamentos setFilter={mockSetFilter} />);
    const inputElement = screen.getByPlaceholderText('Buscar');
    fireEvent.change(inputElement, { target: { value: 'teste' } });
 
    expect(mockSetFilter).toHaveBeenCalledTimes(1);
    const callArgs = mockSetFilter.mock.calls[0][0];
    expect(callArgs({ search: '' })).toEqual({ search: 'teste' });
  })
  
  
});
