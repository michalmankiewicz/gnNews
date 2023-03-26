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
        `flex gap-2 items-center ${
          isActive ? 'bg-primarShaded' : ''
        }  rounded p-4 hover:bg-primarShaded`
      }
    >
      <img src={imageUrl} className="h-6 w-10" />

      <h3 className="text-black text-lg">{name}</h3>
    </NavLink>
  );
}

export default CountryItem;
