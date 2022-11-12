import NextIcon from 'assets/svg/Next';
import Image from 'next/image';
import React from 'react';

const ReadMore = ({link}:any) => {
  return (
    <a href='#' target="_blank" rel="noopener noreferrer"className="f-start red opacity-8">
      <span className='mr-8 red bold'>Read more</span>
      <NextIcon color="#8a1722" />
    </a>
  );
};

export default ReadMore;
