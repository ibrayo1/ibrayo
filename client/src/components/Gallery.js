import React, {useState} from 'react';
import {
    Carousel, CarouselItem,
    CarouselControl
} from 'reactstrap';

const Gallery = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    // get the array of images
    const {images} = props;


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    
    const slides = images.map((image) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={image}
          >
            <img className="img-fluid gallerImage" src={image} alt="preview" />
          </CarouselItem>
        );
    });

    return (
        <Carousel
          className="galleryContainer"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
    
}

export default Gallery;