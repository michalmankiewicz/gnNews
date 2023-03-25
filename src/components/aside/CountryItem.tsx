import React from 'react';
import { Image } from '@mantine/core';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  imageUrl: string;
  symbol: string;
};

function CountryItem({ name, imageUrl, symbol }: Props) {
  return (
    <Link to={`country/${symbol.toLowerCase()}`} className="flex gap-2 items-center curs   ">
      <img src={imageUrl} className="h-6 w-10" />

      <h3 className="text-black text-lg">{name}</h3>
    </Link>
  );
}

export default CountryItem;
