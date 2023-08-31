import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const MultipleItems = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const productsToShow = products.slice(currentIndex, currentIndex + 3);

  const swiperParams = {
    navigation: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className=""style={{textAlign:"center"}}>
      <Swiper {...swiperParams}>
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="container">
              <Image src={product.imageSrc} alt={product.name} width={300} height={300}/>
              <p>{product.tag}</p>
              <p style={{padding:'0 10px'}}>{product.name}</p>
              <div  style={{display: 'flex', justifyContent:"center"}}>
                <div className='custom-sales-style'>{product.sales}</div>
                <div className='custom-price-style'>{product.price} 원</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MultipleItems;