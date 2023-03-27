import { Badge } from '@mantine/core';
import React from 'react';
import noImage from '../../assets/no-image.png';

type Props = {
  title: string;
  source: string;
  publishedAt: string;
  imageUrl: string;
  description: string;
  newsUrl: string;
};

function NewsModal({ title, source, publishedAt, imageUrl, description, newsUrl }: Props) {
  return (
    <div className="flex cursor-pointer flex-col justify-between text-black">
      <div className="overflow-hidden rounded">
        <img src={imageUrl ?? noImage} className="mx-auto" />
      </div>

      <div className="flex flex-col justify-between p-4">
        <div>
          <h2 className=" mb-1 text-2xl font-semibold ">{title}</h2>
          <Badge variant="filled" size="xl" className="">
            {source}
          </Badge>
        </div>
        <p>{description}</p>
        <a href={newsUrl} className="font-bold text-primary">
          See more
        </a>
        <p>{publishedAt}</p>
      </div>
    </div>
  );
}

export default NewsModal;
