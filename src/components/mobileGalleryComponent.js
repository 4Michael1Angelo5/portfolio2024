import { useState, useCallback } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap';


// This component is responible for showing what a portfolio piece looks like on mobile

const MobileGalleryContent = ({ content }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const onExiting = useCallback(() => {
      setAnimating(true);
    }, []);
  
    const onExited = useCallback(() => {
      setAnimating(false);
    }, []);
  
    const next = useCallback(() => {
      if (animating) return;
      const nextIndex = activeIndex === content.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }, [animating, activeIndex, content.length]);
  
    const previous = useCallback(() => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? content.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }, [animating, activeIndex, content.length]);
  
    const goToIndex = useCallback((newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }, [animating]);
  
    const slides = content.map((item) => (
      <CarouselItem
        onExiting={onExiting}
        onExited={onExited}
        key={item.title}
      >
        <h3 className="projects-title text-center">{item.title}</h3>
        <div className="container d-flex justify-content-center p-3">
          <div className="iphone-case-1 col col-md-3 col-lg-3">
            <img src={item.image}
              width="100%"
              alt={item.title}
              style={{ borderRadius: "15px" }}
            />
          </div>
        </div>
      </CarouselItem>
    ));
  
    return (
      <div className="container pt-0 pb-3 border-bottom-p">
        <div className="row">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={content} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>
      </div>
    );
  };

  export default MobileGalleryContent