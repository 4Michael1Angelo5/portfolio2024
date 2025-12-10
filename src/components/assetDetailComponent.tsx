import React, {useState, useEffect, ReactNode} from 'react';
import MobileGalleryContent from "./mobileGalleryComponent"
import {AssetDetail, PersonalAsset} from "../assets/PersonalAssests";
import {useScreenHeight} from "./useScreenHeight";

/**
 * The component Displays specific information on an asset.
 * An asset is either a portfolio piece or a specific project.
 */

interface PresentationProps {
    asset : PersonalAsset
    darkMode: boolean;
}

const AssetStory:React.FC<PresentationProps>
    = ({asset,darkMode}) => {

    const screenHeight = useScreenHeight();
    const content = asset.assetDetails;
    const mobileContent = asset.mobileAssets && asset.mobileAssets;
    return (
        <>
            <div className="container">
                <div className="row border-bottom-p pt-4 pb-2">

                    <h1 className="projects-page-h1-title">{asset.title}</h1>

                    <div className = "content-decription-container">
                        <p className="projects-page-p">{asset.description}</p>
                    </div>

                    {
                        asset.link &&

                        <div className="d-flex justify-content-end pb-2">
                            <a
                                href={asset.link}
                                className={darkMode ? "link md-btn beerMe-btn" : "link md-btn"} //if dark theme is true or false
                            >
                                Visit site
                            </a>
                        </div>
                    }

                {/*    Display a list of technologies used in the project / portfolio piece*/}
                    <div className="container-fluid">
                        <div className="row">
                            {asset.technologies.map((item, index) => (
                                <div key={item.src} className="col-1 pr-1 pl-1">
                                    <img
                                        src={item.src}
                                        style={{
                                            minWidth: "100%",
                                            maxWidth: "32px",
                                            borderRadius: "100%",
                                        }}
                                        alt={item.title}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {
                        mobileContent &&
                        <>
                            <h2 className="projects-page-h1-title mb-0 pt-2">Mobile</h2>
                            <MobileGalleryContent content={mobileContent} />
                            <h2 className="projects-page-h1-title mb-0 pt-2">Desktop</h2>

                        </>
                    }
                    <div className=" pt-4">
                        {
                            content.map((asset, index) => (
                                <StoryPanel
                                    key = {asset.title}
                                    panel={asset}
                                    screenHeight={screenHeight}/>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
}

interface StoryPanelProps {
    panel: AssetDetail;
    screenHeight: number;
}

const StoryPanel:React.FC<StoryPanelProps> = ({panel,screenHeight}) => {
    return (
        <div className=" pt-4">
           <div className='section justify-content-center align-content-center'
                     style = {{
                         minHeight: `${.75*screenHeight}px`,
                         // set the min width of each section so that
                         // the user can see the cool animating background in between sections
                         // adjust as needed
                         flexWrap:"wrap"
                     }}
                >
                    <div  className="col-12 col-md-8 col-lg-8  pb-4">
                        <h2 className="projects-title mb-3">{panel.title}</h2>
                        {
                            //if it has a description
                            panel.description &&
                                // return its description
                                <div className="content-decription-container">
                                    <p className="projects-page-p">{panel.description}</p>
                                </div>
                        }
                        {
                            panel.media.type === "image" &&

                            <img
                                className ="projects-main-image"
                                src={panel.media.src}
                                alt = {panel.title}
                                style={{
                                    width: "100%",
                                    backgroundColor: "#19162d5c",
                                }}
                            />
                        }
                        {
                            panel.media.type === "video" &&
                            <video
                                className="mt-3 projects-main-image"
                                src={panel.media.src}
                                autoPlay
                                playsInline
                                loop
                                style={{ marginLeft: "0px", marginRight: "0px", width: "100%" }}
                            />
                        }

                    </div>
                </div>
        </div>
    );
}

export default AssetStory;