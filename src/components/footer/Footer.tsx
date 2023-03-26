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
    <div className="font-bold text-xl text-primary p-8 border-t-2 border-primary flex justify-between items-center">
      <h4>Number of news: {numberOfNews ?? 0}</h4>
      <h4 className="">{date.toLocaleTimeString()}</h4>
    </div>
  );
}

export default Footer;
