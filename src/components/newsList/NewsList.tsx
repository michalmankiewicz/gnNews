import { Loader, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { Article } from '../../types/article';
import { useAppSelector } from '../../types/redux';
import NewsItem from './NewsItem';

type Props = {
  articles?: Article[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

function NewsList({ articles = [], isSuccess, isLoading, isError }: Props) {
  const viewType = useAppSelector((state) => state.view.viewType);

  console.log(articles);

  return (
    <ul
      className={`relative flex min-h- ${
        viewType === 'list' ? 'flex-col gap-4' : 'flex-wrap justify-around'
      }  mx-4 my-2`}
    >
      {isLoading && <Loader size="xl" className="absolute top-60 left-1/2" />}
      {isSuccess &&
        articles.length !== 0 &&
        articles.map((a) => (
          <NewsItem
            key={a.title}
            title={a.title}
            source={a.source.name}
            publishedAt={a.publishedAt}
            imageUrl={a.urlToImage}
            description={a.description}
            newsUrl={a.url}
          />
        ))}
      {isSuccess && articles.length === 0 && (
        <h3 className="text-primary absolute top-60 left-1/2 -translate-x-1/2">
          There is no news for this country
        </h3>
      )}
      {isError && (
        <h3 className="text-primary absolute top-60 left-1/2 -translate-x-1/2">
          Something went wrong!
        </h3>
      )}
    </ul>
  );
}

export default NewsList;
