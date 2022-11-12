import Spacing from 'components/Spacing';
import React from 'react';
import HottestNews from './components/HottestNews';
import SubNews from './SubNews';

const NewsPage = () => {
  return (
    <div className="mt-80">
      <HottestNews></HottestNews>
      <SubNews />
    </div>
  );
};

export default NewsPage;
