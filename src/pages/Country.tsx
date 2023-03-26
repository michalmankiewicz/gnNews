import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetCountriesByRegionQuery } from '../api/countriesApiSlice';
import { useGetNewsQuery } from '../api/newsApiSlice';
import NewsList from '../components/newsList/NewsList';
import { setNumberOfNews } from '../store/options/viewSlice';
import { useAppDispatch } from '../types/redux';

function Country() {
  const { countryId } = useParams();

  console.log(countryId);

  const { data, isSuccess, isLoading, isError } = useGetNewsQuery(countryId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data) return;
    dispatch(setNumberOfNews(data?.articles?.length));
  }, [data]);

  return (
    <NewsList
      isLoading={isLoading}
      isError={isError}
      articles={data?.articles}
      isSuccess={isSuccess}
    />
  );
}

export default Country;
