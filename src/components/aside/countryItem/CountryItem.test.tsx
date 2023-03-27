import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryItem from './CountryItem';
import { describe, test, vitest } from 'vitest';
import TestWrapper from '../../../utils/testUtils';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  history.pushState({}, '', '/');
});

describe('CountryItem component', () => {
  test('renders CountryItem', () => {
    render(
      <TestWrapper>
        <CountryItem name="Portugal" symbol="pt" imageUrl="imageUrl" />
      </TestWrapper>
    );

    const name = screen.getByText('Portugal');

    expect(name).toBeInTheDocument();
  });

  test('Redirects to country page after on click', () => {
    render(
      <TestWrapper>
        <CountryItem name="Portugal" symbol="pt" imageUrl="imageUrl" />
      </TestWrapper>
    );

    const link = screen.getByRole('link');

    fireEvent.click(link);

    expect(link).toBeInTheDocument();
    expect(window.location.pathname).toContain(`/country/pt`);
  });
});
