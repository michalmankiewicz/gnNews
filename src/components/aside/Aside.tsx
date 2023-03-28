import React from 'react';
import { useGetCountriesByRegionQuery } from '../../api/countriesApiSlice';
import CountryItem from './countryItem/CountryItem';
import { Loader, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const { data, isLoading, isError, isSuccess } = useGetCountriesByRegionQuery('europe');

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <aside
        className={`${
          opened ? ' opacity-100' : 'pointer-events-none opacity-0 md:pointer-events-auto'
        } absolute right-0 z-10 rounded-l-xl border-4 border-r-0 border-primary bg-theme  p-2 transition-all md:static  md:translate-x-0 md:opacity-100`}
      >
        <h2 className=" mb-4 text-2xl font-semibold">{t('countries')}</h2>
        {isLoading && <Loader />}
        {isSuccess && (
          <ul className="ml-0.5 flex flex-col gap-3">
            {data.map((c: Country) => (
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
