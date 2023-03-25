import React from 'react';
import { useParams } from 'react-router';
import { useGetCountriesByRegionQuery } from '../api/countriesApiSlice';
import { useGetNewsQuery } from '../api/newsApiSlice';
import NewsList from '../components/newsList/NewsList';

function Country() {
  const { countryId } = useParams();

  console.log(countryId);

  const { data, isSuccess, isLoading, isError } = useGetNewsQuery(countryId);

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
