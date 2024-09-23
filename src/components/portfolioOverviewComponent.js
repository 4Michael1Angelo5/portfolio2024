import React, { useState, useCallback } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

// this component displays information about a specific 
// portfolio item

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
            alt = {item.title}
            style = {{borderRadius:"15px"}}
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

const PortfolioOverview = ({ project, beerMe }) => {
  const content = project.projectOverview;
  const mobileContent = project.projectOverviewMobile;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row border-bottom-p pt-4 pb-2">
          <h1 className="projects-page-h1-title">{project.title}</h1>
          <p className="projects-page-p">{project.description}</p>

          <div className="d-flex justify-content-end pb-2">
            <a
              href={project.link}
              className={beerMe ? "link md-btn beerMe-btn" : "link md-btn"}
            >
              Visit site
            </a>
          </div>

          <h3 className="tech-title">Technologies</h3>
          <div className="container-fluid d-flex">
            <div className="row d-flex">
              {project.technologies.map((item, index) => (
                <div key={index} className="col-1 pr-1 pl-1">
                  <img
                    src={item.image}
                    style={{
                      minWidth: "100%",
                      maxWidth: "32px",
                      borderRadius: "100%",
                    }}
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="projects-page-h1-title mb-0 pt-2">Mobile</h2>
        <MobileGalleryContent content={mobileContent} />

        <h2 className="projects-page-h1-title mb-0 pt-2">Desktop</h2>

        <div className="row pt-4">
          {content.map((contentItem, index) => (
            <div key={index} className="col-12 pb-4">
              <h2 className="projects-title mb-3">{contentItem.title}</h2>
              <img
                className="projects-main-image"
                src={contentItem.image}
                style={{ width: "100%" }}
                alt={contentItem.title}
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PortfolioOverview;
