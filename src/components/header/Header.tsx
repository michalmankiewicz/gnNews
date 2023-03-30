import { Button, Burger, SegmentedControl, Modal } from '@mantine/core';

import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useAppDispatch, useAppSelector } from '../../types/redux';
import { toggleViewType } from '../../store/view/viewSlice';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const dispatch = useAppDispatch();
  const { i18n, t } = useTranslation();

  const optionValue = useAppSelector((state) => state.view.viewType);

  const [modalOpened, modalHandlers] = useDisclosure(false);
  const [dropdownOpened, dropdownHandlers] = useDisclosure(false);

  const toggleLanguage = () => {
    if (i18n.language === 'en') i18n.changeLanguage('pl');
    else if (i18n.language === 'pl') i18n.changeLanguage('en');
  };

  return (
    <>
      <header className="flex h-28 items-center justify-between  px-4 py-2  font-semibold md:px-8">
        <h1 className="te text-2xl text-primary md:text-4xl">
          <Link to="/">
            gn<span className="text-gray-400">News</span>
          </Link>
        </h1>
        <div
          className={`${
            dropdownOpened ? '' : 'hidden md:flex'
          } absolute top-28 right-0 z-10 flex w-full flex-col items-center justify-center gap-4 bg-black py-4 md:static md:w-auto md:flex-row md:bg-transparent `}
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
        title=" "
        centered
        radius="lg"
        padding="lg"
      >
        <div className="mb-4">
          <h3 className="mb-2 text-2xl font-bold">{t('popup.challenging.title')}</h3>
          <p className="ml-1 text-xl">{t('popup.challenging.content')}</p>
        </div>
        <div>
          <h3 className="mb-2 text-2xl font-bold">{t('popup.enjoyable.title')}</h3>
          <p className="ml-1 text-xl">{t('popup.enjoyable.content')}</p>
        </div>
      </Modal>
    </>
  );
};

export default Header;
