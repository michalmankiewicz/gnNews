import React from 'react';
import { useGetCountriesByRegionQuery } from '../../api/countriesApiSlice';
import CountryItem from './CountryItem';
import { Loader, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type Country = {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  cca2: string;
};

function Aside() {
  const { data, isLoading, isError, isSuccess } = useGetCountriesByRegionQuery('europe');

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <div
        className={`${
          opened ? 'opacity-100' : 'opacity-0'
        } opacity-0 md:opacity-100 bg-primary p-4 transition-all`}
      >
        <h2 className=" text-2xl mb-4 font-semibold">Countries</h2>
        {isLoading && <Loader />}
        {isSuccess && (
          <ul className="ml-1 flex flex-col gap-3">
            {data.slice(0, 15).map((c: Country) => (
              <CountryItem
                key={c.cca2}
                name={c.name.common}
                imageUrl={c.flags.png}
                symbol={c.cca2}
              />
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={toggle}
        className="fixed -right-5 top-1/2 p-4 rounded bg-primary -rotate-90 md:hidden "
      >
        Aside
      </button>
    </>
  );
}

export default Aside;
