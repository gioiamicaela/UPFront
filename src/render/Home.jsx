import React from 'react';
import Swiper from '../components/SwiperComponent';
import { photoList } from '../data/data';

function Home() {
  return (
    <div>
      <Swiper list={photoList} />
    </div>
  );
}

export default Home;
