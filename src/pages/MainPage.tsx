import React, { useEffect } from 'react';
import { useGetNewsQuery } from '../api/newsApiSlice';
import NewsList from '../components/newsList/NewsList';
import { setNumberOfNews } from '../store/options/viewSlice';
import { useAppDispatch } from '../types/redux';

function MainPage() {
  const { data, isLoading, isError, isSuccess } = useGetNewsQuery(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data) return;
    dispatch(setNumberOfNews(data?.articles?.length));
  }, [data]);

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
