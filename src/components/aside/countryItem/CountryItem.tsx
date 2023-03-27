import React from 'react';
import { Image } from '@mantine/core';
import { Link, NavLink } from 'react-router-dom';

type Props = {
  name: string;
  imageUrl: string;
  symbol: string;
};

function CountryItem({ name, imageUrl, symbol }: Props) {
  return (
    <NavLink
      to={`country/${symbol.toLowerCase()}`}
      className={({ isActive }) =>
        `flex items-center gap-2 ${isActive ? 'bg-primary' : ''}  rounded-xl p-4 hover:bg-primary
        `
      }
    >
      <img src={imageUrl} className="h-6 w-10" />

      <h3 className="text-lg text-black">{name}</h3>
    </NavLink>
  );
}

export default CountryItem;
