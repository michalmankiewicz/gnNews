import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../types/redux';

function Footer() {
  const numberOfNews = useAppSelector((state) => state.view.numberOfNews);

  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="flex items-center justify-between p-8 text-xl font-bold text-primary">
      <h4>Number of news: {numberOfNews ?? 0}</h4>
      <h4 className="">{date.toLocaleTimeString()}</h4>
    </div>
  );
}

export default Footer;
