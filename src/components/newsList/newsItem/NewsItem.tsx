import { Badge } from '@mantine/core';
import { useAppSelector } from '../../../types/redux';
import noImage from '../../../assets/no-image.png';
import { formatNewsDate } from '../../../utils/date';

type Props = {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  imageUrl: string;
  openModal: (id: string) => void;
};

function NewsItem({ title, source, publishedAt, imageUrl, openModal, id }: Props) {
  const viewType = useAppSelector((state) => state.view.viewType);

  return (
    <>
      <li
        onClick={() => openModal(id)}
        className={`relative flex rounded-xl border-4  border-primary bg-theme text-black transition-all hover:-translate-y-1    ${
          viewType === 'list' ? '' : 'max-w-xs flex-col items-stretch '
        }  cursor-pointer gap-2   `}
      >
        <div
          className={`${
            viewType === 'list' ? 'hidden  w-1/4 md:block' : 'h-52 w-full'
          } h-40 overflow-hidden rounded-xl bg-cover`}
          style={{ backgroundImage: `url(${imageUrl ?? noImage})` }}
        ></div>

        <div
          className={` ${
            viewType === 'list' ? 'md:w-3/4' : 'w-full '
          }  flex  flex-col justify-between  p-4 pb-8`}
        >
          <div>
            <h2 className=" mb-2 text-2xl font-semibold ">{title}</h2>
            <Badge variant="filled" size="xl" className="">
              {source}
            </Badge>
          </div>
        </div>
        <p className="absolute bottom-2 right-2 font-semibold text-gray-400">
          {formatNewsDate(publishedAt)}
        </p>
      </li>
    </>
  );
}

export default NewsItem;
