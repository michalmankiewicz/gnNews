import React from 'react';
import { useGetNewsQuery } from '../api/newsApiSlice';
import NewsList from '../components/newsList/NewsList';

function MainPage() {
  const { data, isLoading, isError, isSuccess } = useGetNewsQuery(undefined);

  console.log(data);

  return (
    <NewsList
      articles={data?.articles}
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
    />
  );
}

export default MainPage;
