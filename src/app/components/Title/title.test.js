import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './index';

test('Deve renderizar o título corretamente', () => {
    const titleText = 'Título de Teste';
    render(<Title title={titleText} />);

    const title = screen.getByText(titleText);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('h1');
});
