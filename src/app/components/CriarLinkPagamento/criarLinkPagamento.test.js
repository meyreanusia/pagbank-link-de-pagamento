import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CriarLinkPagamento from './index'; 
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Ao renderizar componente CriarLinkPagamento', () => {
  const push = jest.fn();
  
  beforeEach(() => {
    useRouter.mockReturnValue({ push });
    render(<CriarLinkPagamento />);
  });

  test('Deve renderizar o texto "Criar novo Link de Pagamento"', () => {
    const linkText = screen.getByText(/Criar novo Link de Pagamento/i);
    expect(linkText).toBeInTheDocument();
  });

  test('Deve renderizar a imagem com o atributo alt e src corretos', () => {
    const imgElement = screen.getByAltText(/Criar novo Link de Pagamento/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/img/more.svg');
  });

  test('Deve renderizar o link com o atributo href correto', () => {
    const linkElement = screen.getByRole('link', { name: /Criar novo Link de Pagamento/i });
    expect(linkElement).toHaveAttribute('href', '/novoLink');
  });

});
