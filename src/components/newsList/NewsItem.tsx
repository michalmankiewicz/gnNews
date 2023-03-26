import { Badge, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { useAppSelector } from '../../types/redux';
import NewsModal from './NewsModal';
import noImage from '../../assets/no-image.png';

type Props = {
  title: string;
  source: string;
  publishedAt: string;
  imageUrl: string;
  newsUrl: string;
  description: string;
};

function NewsItem({ title, source, publishedAt, imageUrl, description, newsUrl }: Props) {
  const viewType = useAppSelector((state) => state.view.viewType);

  const [modalOpened, modalHandlers] = useDisclosure(false);

  return (
    <>
      <li
        onClick={modalHandlers.open}
        className={`text-black bg-primary border-4  border-primary rounded-xl flex ${
          viewType === 'list' ? '' : 'flex-col max-w-sm mb-4'
        }  justify-between cursor-pointer  `}
      >
        <div className={`rounded-xl overflow-hidden ${viewType === 'list' ? 'w-1/3' : 'w-full'}`}>
          <img src={imageUrl ?? noImage} className="mx-auto" />
        </div>

        <div
          className={` ${
            viewType === 'list' ? 'w-2/3' : 'w-full'
          }  p-4  flex flex-col justify-between`}
        >
          <div>
            <h2 className=" text-2xl font-semibold mb-1 ">{title}</h2>
            <Badge variant="outline" color="dark" size="xl" className="">
              {source}
            </Badge>
          </div>
          <p>{publishedAt}</p>
        </div>
      </li>

      <Modal
        withCloseButton={false}
        onClose={modalHandlers.close}
        opened={modalOpened}
        centered
        size="lg"
      >
        <NewsModal
          title={title}
          source={source}
          publishedAt={publishedAt}
          imageUrl={imageUrl}
          description={description}
          newsUrl={newsUrl}
        />
      </Modal>
    </>
  );
}

export default NewsItem;
