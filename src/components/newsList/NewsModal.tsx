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
    <div className="text-black flex flex-col justify-between cursor-pointer">
      <div className="rounded overflow-hidden">
        <img src={imageUrl ?? noImage} className="mx-auto" />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className=" text-2xl font-semibold mb-1 ">{title}</h2>
          <Badge variant="outline" color="dark" size="xl" className="">
            {source}
          </Badge>
        </div>
        <p>{description}</p>
        <a href={newsUrl} className="text-primary font-bold">
          See more
        </a>
        <p>{publishedAt}</p>
      </div>
    </div>
  );
}

export default NewsModal;
