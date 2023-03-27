import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { describe, test, vitest } from 'vitest';
import TestWrapper from '../../utils/testUtils';

beforeEach(() => {
  history.pushState({}, '', '/notfound');
});

describe('Header component', () => {
  test('renders Header', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    const logo = screen.getByText('gn');
    const tiles = screen.getByText('Tiles');
    const list = screen.getByText('List');
    const popup = screen.getByText('Popup');

    expect(logo).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(tiles).toBeInTheDocument();
    expect(popup).toBeInTheDocument();
  });

  test('Redirects to main page after clicking logo', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    );

    const logo = screen.getByRole('link');

    fireEvent.click(logo);

    expect(logo).toBeInTheDocument();
    expect(window.location.pathname).toContain(`/`);
    expect(window.location.pathname).not.toContain(`/notfound`);
  });
});
