import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetNewsQuery } from '../api/newsApiSlice';
import NewsList from '../components/newsList/NewsList';
import { setNumberOfNews } from '../store/view/viewSlice';
import { useAppDispatch } from '../types/redux';

function Country() {
  const dispatch = useAppDispatch();

  const { countryId } = useParams();
  const { data, isSuccess, isLoading, isError } = useGetNewsQuery(countryId);

  useEffect(() => {
    if (!data) return;
    dispatch(setNumberOfNews(data?.articles?.length));
  }, [data, dispatch]);

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
