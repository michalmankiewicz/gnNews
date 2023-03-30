import { Loader, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Article } from '../../types/article';
import { useAppSelector } from '../../types/redux';
import NewsItem from './newsItem/NewsItem';
import NewsModal from './newsModal/NewsModal';

type Props = {
  articles?: Article[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

function NewsList({ articles = [], isSuccess, isLoading, isError }: Props) {
  const viewType = useAppSelector((state) => state.view.viewType);

  const [modalOpened, modalHandlers] = useDisclosure(false);
  const [newsId, setNewsId] = useState<string | undefined>();

  const modalArticle = articles.find((a) => a.url === newsId);

  const handleOpenModal = (id: string) => {
    modalHandlers.open();
    setNewsId(id);
  };

  return (
    <>
      <ul
        className={` ${
          viewType === 'list' ? 'flex-col gap-4' : 'flex-wrap justify-center gap-4'
        } min-h- relative mx-4  my-2 flex`}
      >
        {isLoading && <Loader size="xl" className="absolute top-60 left-1/2" />}
        {isSuccess &&
          articles.length !== 0 &&
          articles.map((a) => (
            <NewsItem
              key={a.url}
              id={a.url}
              title={a.title}
              source={a.source.name}
              publishedAt={a.publishedAt}
              imageUrl={a.urlToImage}
              openModal={handleOpenModal}
            />
          ))}
        {isSuccess && articles.length === 0 && (
          <h3 className="absolute top-60 left-1/2 -translate-x-1/2 text-primary">
            There is no news for this country
          </h3>
        )}
        {isError && (
          <h3 className="absolute top-60 left-1/2 -translate-x-1/2 text-primary">
            Something went wrong!
          </h3>
        )}
      </ul>
      <Modal
        withCloseButton={false}
        onClose={modalHandlers.close}
        opened={modalOpened}
        centered
        size="lg"
        radius="lg"
      >
        <NewsModal
          title={modalArticle?.title}
          source={modalArticle?.source.name}
          author={modalArticle?.author}
          publishedAt={modalArticle?.publishedAt}
          imageUrl={modalArticle?.urlToImage}
          description={modalArticle?.description}
          newsUrl={modalArticle?.url}
        />
      </Modal>
    </>
  );
}

export default NewsList;
