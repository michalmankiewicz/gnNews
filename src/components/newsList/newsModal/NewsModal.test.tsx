import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsModal from './NewsModal';
import { describe, test, vitest } from 'vitest';
import TestWrapper from '../../../utils/testUtils';
import userEvent from '@testing-library/user-event';

describe('NewsModal component', () => {
  test('renders NewsModal', () => {
    render(
      <TestWrapper>
        <NewsModal
          title="Title"
          source="CNN"
          publishedAt="04/04/2023"
          imageUrl="imageUrl"
          newsUrl="newsUrl"
          description="Description"
        />
      </TestWrapper>
    );

    const title = screen.getByText('Title');
    const source = screen.getByText('CNN');
    const description = screen.getByText('Description');

    expect(title).toBeInTheDocument();
    expect(source).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
