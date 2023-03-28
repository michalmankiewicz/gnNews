import { Badge, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { useAppSelector } from '../../../types/redux';
import NewsModal from '../newsModal/NewsModal';
import noImage from '../../../assets/no-image.png';

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
        className={`flex rounded-xl border-4  border-primary bg-theme text-black transition-all hover:-translate-y-1    ${
          viewType === 'list' ? '' : 'max-w-xs flex-col '
        }  cursor-pointer gap-2   `}
      >
        {/* TODO */}
        <div
          className={`h-40 overflow-hidden rounded-xl bg-cover    ${
            viewType === 'list' ? 'hidden  w-1/4 md:block' : 'h-52 w-full'
          }  `}
          style={{ backgroundImage: `url(${imageUrl ?? noImage})` }}
        ></div>

        <div
          className={` ${
            viewType === 'list' ? 'md:w-3/4' : 'w-full '
          }  flex  flex-col justify-between  p-4`}
        >
          <div>
            <h2 className=" mb-2 text-2xl font-semibold ">{title}</h2>
            <Badge variant="filled" size="xl" className="">
              {source}
            </Badge>
          </div>
        </div>
        <p className="self-end">{publishedAt}</p>
      </li>

      <Modal
        withCloseButton={false}
        onClose={modalHandlers.close}
        opened={modalOpened}
        centered
        size="lg"
        radius="lg"
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
