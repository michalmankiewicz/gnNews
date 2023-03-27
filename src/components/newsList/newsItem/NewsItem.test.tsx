import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsItem from './NewsItem';
import { describe, test, vitest } from 'vitest';
import TestWrapper from '../../../utils/testUtils';
import userEvent from '@testing-library/user-event';

describe('NewsItem component', () => {
  test('renders NewsItem', () => {
    render(
      <TestWrapper>
        <NewsItem
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

    expect(title).toBeInTheDocument();
    expect(source).toBeInTheDocument();
  });
});
