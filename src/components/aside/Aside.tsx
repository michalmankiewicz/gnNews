import React from 'react';
import { useGetCountriesByRegionQuery } from '../../api/countriesApiSlice';
import CountryItem from './CountryItem';
import { Loader, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

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
      <aside
        className={`${
          opened ? ' opacity-100' : 'pointer-events-none opacity-0 md:pointer-events-auto'
        } absolute right-0 z-10 rounded-l-xl bg-primary  p-2 transition-all md:static  md:translate-x-0 md:opacity-100`}
      >
        <h2 className=" mb-4 text-2xl font-semibold">Countries</h2>
        {isLoading && <Loader />}
        {isSuccess && (
          <ul className="ml-0.5 flex flex-col gap-3">
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
      </aside>
      <button
        onClick={toggle}
        className="fixed -right-1 top-1/2 z-20   rounded border-4 border-white bg-primary px-1  py-6 md:hidden"
      >
        {opened ? <CaretRight size={40} weight="bold" /> : <CaretLeft weight="bold" size={40} />}
      </button>
    </>
  );
}

export default Aside;
