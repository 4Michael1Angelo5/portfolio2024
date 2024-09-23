// maps content of projects and porfolio
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';


const ContentComponent = (props) => {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {

        setScreenHeight(window.innerHeight)

    }, [])

    let content = props.content

    let hasLinkedContent = props.hasLinks

    let pageTitle = props.pageTitle;
    let headLine = props.headLine;
    let location = useLocation();


    return (
        <React.Fragment>
            <Container>
                <h1 className="projects-page-h1-title">{pageTitle}</h1>
                <p className="projects-page-p">{headLine}</p>
            </Container>

            <div className="container">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="section"
                        style={{
                            minHeight: `${screenHeight * .75}px`,
                            // alignContent:"center"
                        }}
                    >
                        <div
                            className={
                                index % 2 === 0
                                    ? 'd-flex flex-row-reverse row pt-2 pb-2 projects-row-container'
                                    : 'row pt-2 pb-2 projects-row-container'
                            }
                            >

                            
                            <div className="col-lg-6 col-sm-12 pb-2 mb-3">
                                    <h2 className="projects-title">{item.title}</h2>

                                <div className = "content-decription-container"
                                    style={{
                                        
                                    backgroundColor: "#3d475b",
                                    borderRadius: "10px"
                             
                                    }}
                                    >

                                <p className="projects-page-p">{item.shortDescription}</p>
                                </div>
                            </div>


                            <div className="col-lg-6 col-sm-12 pb-3">

                                {
                                    hasLinkedContent
                                        ?

                                        <Link to={`${location.pathname + "/" + item.title.replace(/\s/g, '')}`}>
                                            <img
                                                className="projects-main-image"
                                                src={item.image}
                                                alt={item.title}
                                                style={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Link>
                                        :
                                        <img
                                            className="projects-main-image"
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                width: '100%',
                                            }}
                                        />

                                }


                            </div>

                        </div>
                    </div>

                ))}
            </div>
        </React.Fragment>
    )




}

export default ContentComponent