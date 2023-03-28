import React, { useState } from 'react';
import {
  createStyles,
  Menu,
  Center,
  Header as HeaderComp,
  Container,
  Group,
  Button,
  Burger,
  Flex,
  Text,
  SegmentedControl,
  Modal,
} from '@mantine/core';

import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useAppDispatch, useAppSelector } from '../../types/redux';
import { toggleViewType } from '../../store/options/viewSlice';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const dispatch = useAppDispatch();
  const optionValue = useAppSelector((state) => state.view.viewType);
  const [modalOpened, modalHandlers] = useDisclosure(false);
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);

  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    console.log('sadsa');
    if (i18n.language === 'en') i18n.changeLanguage('pl');
    else if (i18n.language === 'pl') i18n.changeLanguage('en');
  };

  console.log(i18n.language);

  return (
    <>
      <header className="flex h-28 items-center justify-between  px-4 py-2  font-semibold md:px-8">
        <h1 className="te text-2xl text-primary md:text-4xl">
          <Link to="/">
            gn<span className="text-gray-400">News</span>
          </Link>
        </h1>
        <div
          className={`absolute top-28 right-0 z-10 flex w-full flex-col items-center justify-center gap-4 bg-gray-500  py-4 md:static md:w-auto md:flex-row md:bg-transparent ${
            dropdownOpened ? '' : 'hidden md:flex'
          }`}
        >
          <SegmentedControl
            color="primary"
            size="lg"
            value={optionValue}
            onChange={() => dispatch(toggleViewType())}
            data={[
              { label: t('viewType.list'), value: 'list' },
              { label: t('viewType.tiles'), value: 'tiles' },
            ]}
          />
          <Button size="lg" onClick={modalHandlers.open}>
            {t('aboutMe')}
          </Button>
          <div
            onClick={toggleLanguage}
            className="font-semi-bold flex h-14 w-14 items-center justify-center rounded-full border-8 border-primary bg-theme text-xl text-gray-600 hover:cursor-pointer hover:border-primarShaded"
          >
            {i18n.language.toUpperCase()}
          </div>
        </div>
        <Burger
          opened={dropdownOpened}
          color="white"
          onClick={dropdownHandlers.toggle}
          className={'md:hidden'}
        />
      </header>
      <Modal
        size="lg"
        opened={modalOpened}
        onClose={modalHandlers.close}
        title="Popup"
        centered
        radius="lg"
      >
        Ut sed nisl a nunc semper eleifend in id ante. Nunc vitae libero hendrerit, sollicitudin
        neque vel, ultrices justo. Donec id lorem in nulla congue imperdiet. Nulla fringilla, leo
        vitae lobortis porttitor, ante justo dapibus massa, sodales commodo sapien urna sed magna.
        Nulla lobortis nec dolor ut faucibus. Vivamus arcu magna, sagittis id massa nec, venenatis
        pellentesque lacus. In tincidunt dictum risus, ut scelerisque diam ultrices et.
      </Modal>
    </>
  );
};

export default Header;
