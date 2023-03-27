import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsList from './NewsList';
import { describe, test, vitest } from 'vitest';
import TestWrapper from '../../utils/testUtils';

beforeEach(() => {
  history.pushState({}, '', '/notfound');
});

describe('NewsList component', () => {
  test('renders appropiate list of items when onSuccess=true', () => {
    render(
      <TestWrapper>
        <NewsList
          isLoading={false}
          isSuccess={true}
          isError={false}
          articles={[
            {
              author: 'Author',
              content: 'Content',
              description: 'Description',
              publishedAt: '04/04/12',
              source: {
                id: '1',
                name: 'CNN',
              },
              title: 'Title',
              url: 'url',
              urlToImage: 'imageUrl',
            },
          ]}
        />
      </TestWrapper>
    );
    const newsList = screen.getAllByRole('list');
    const sourceName = screen.getByText('CNN');

    expect(newsList).toHaveLength(1);
    expect(sourceName).toBeInTheDocument();
  });
  test('renders error if isError=true', () => {
    render(
      <TestWrapper>
        <NewsList isLoading={false} isSuccess={false} isError={true} articles={undefined} />
      </TestWrapper>
    );
    const error = screen.getByText('Something went wrong!');

    expect(error).toBeInTheDocument();
  });

  test('renders message on empty state (no news)', () => {
    render(
      <TestWrapper>
        <NewsList isLoading={false} isSuccess={true} isError={false} articles={[]} />
      </TestWrapper>
    );
    const message = screen.getByText('There is no news for this country');

    expect(message).toBeInTheDocument();
  });
});
