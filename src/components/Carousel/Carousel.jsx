import classes from './Carousel.module.scss';
import CarouselItem from '../CarouselItem/CarouselItem';
import { forwardRef, useEffect, useRef, useState } from 'react';

export default function Carousel(props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef(null);
  return (
    <>
      <div className={classes.carousel}>
        <div
          className={classes.carouselSlide}
          ref={slideRef}
          style={{ transform: `translateX(0%)` }}
        >
          {props.information.map((recipe) => {
            return (
              <CarouselItem
                key={recipe.title}
                information={recipe}
                className={classes.carouselItem}
              ></CarouselItem>
            );
          })}
        </div>
      </div>
      <div className={classes.carouselNavigation}>
        <button
          className='carouselButton'
          id='buttonLeft'
          onClick={() => navigateCarousel(slideIndex - 1)}
        >
          &larr;
        </button>

        <button
          className='carouselButton'
          id='buttonRight'
          onClick={() => navigateCarousel(slideIndex + 1)}
        >
          &rarr;
        </button>
      </div>
    </>
  );
  function navigateCarousel(index) {
    let distance = 0;
    console.log();
    let lastIndex;
    if (window.innerWidth > 1000)
      lastIndex = slideRef.current.childNodes.length - 1;
    else {
      lastIndex = slideRef.current.childNodes.length;
    }
    if (index < 0) {
      index = lastIndex - 1;
    } else if (index >= lastIndex) {
      index = 0;
    }
    setSlideIndex(index);
    console.log('Slide Index: ' + slideIndex);
    console.log('Index: ' + index);
    console.log(slideRef.current.childNodes[0]);
    let width = slideRef.current.childNodes[0].clientWidth + 20;

    distance = index * width * -1;

    slideRef.current.style.transform = `translateX(${distance}px)`;
    console.log(slideRef.current.style.transform);
  }
}
