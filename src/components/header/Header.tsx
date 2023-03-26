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

const Header = () => {
  const dispatch = useAppDispatch();
  const optionValue = useAppSelector((state) => state.view.viewType);
  const [modalOpened, modalHandlers] = useDisclosure(false);
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);

  return (
    <>
      <header className="h-28 px-4 md:px-8 py-2 border-b-2 border-primary flex items-center  justify-between">
        <h1 className="text-primary text-2xl md:text-4xl te">
          <Link to="/">
            gn<span className="text-gray-500">News</span>
          </Link>
        </h1>
        <div
          className={`w-full py-4 bg-gray-500 items-center flex flex-col gap-4 justify-center absolute top-28 right-0  md:flex-row md:static md:bg-transparent md:w-auto ${
            dropdownOpened ? '' : 'hidden md:flex'
          }`}
        >
          <SegmentedControl
            color="primary"
            size="lg"
            value={optionValue}
            onChange={() => dispatch(toggleViewType())}
            data={[
              { label: 'List', value: 'list' },
              { label: 'Tiles', value: 'tiles' },
            ]}
          />
          <Button size="lg" onClick={modalHandlers.open}>
            Popup
          </Button>
        </div>
        <Burger
          opened={dropdownOpened}
          color="white"
          onClick={dropdownHandlers.toggle}
          className={'md:hidden'}
        />
      </header>
      <Modal size="lg" opened={modalOpened} onClose={modalHandlers.close} title="Popup" centered>
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
