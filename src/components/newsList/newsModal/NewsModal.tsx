import { Badge } from '@mantine/core';
import React from 'react';
import noImage from '../../../assets/no-image.png';
import { formatNewsDate } from '../../../utils/date';

type Props = {
  title?: string;
  source?: string;
  author?: string;
  publishedAt?: string;
  imageUrl?: string;
  description?: string;
  newsUrl?: string;
};

function NewsModal({ title, source, publishedAt, imageUrl, description, newsUrl, author }: Props) {
  return (
    <div className="flex cursor-pointer flex-col justify-between text-black">
      <div className="overflow-hidden rounded">
        <img src={imageUrl ?? noImage} className="mx-auto" />
      </div>
      <div className="flex flex-col px-2">
        <div className="mb-4">
          <h2 className=" mb-1 text-2xl font-semibold ">{title}</h2>
          <div className="flex items-center gap-2">
            <Badge variant="filled" size="xl" className="">
              {source}
            </Badge>
            <p>{author}</p>
          </div>
        </div>
        <p>{description}</p>
        <a href={newsUrl} className="font-bold text-primary">
          See more
        </a>
        <p className="place-self-end">{publishedAt ? formatNewsDate(publishedAt) : ''}</p>
      </div>
    </div>
  );
}

export default NewsModal;
