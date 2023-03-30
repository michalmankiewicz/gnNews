import React, { useEffect } from 'react';
import { useGetNewsQuery } from '../api/newsApiSlice';
import NewsList from '../components/newsList/NewsList';
import { setNumberOfNews } from '../store/view/viewSlice';
import { useAppDispatch } from '../types/redux';

function MainPage() {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError, isSuccess } = useGetNewsQuery(undefined);

  useEffect(() => {
    if (!data) return;
    dispatch(setNumberOfNews(data?.articles?.length));
  }, [data, dispatch]);

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
