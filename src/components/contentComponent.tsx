import {PersonalAsset} from "../assets/PersonalAssests";
import {ImageComponent} from "./ImageLink";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useScreenHeight} from "./useScreenHeight";

// content component is responsible for mapping
// the content of each project and portfolio

// it is not responsible for displaying detailed information
// on each project/portfolio ( see presentationComponent for that)

// the user can click an individual portfolio piece or project
// and then is taken to a detailed overview of that work
// managed by presentationComponent


interface ContentComponentProps {
    content : PersonalAsset[];
    pageTitle : string;
    headLine : string; // What is this? should it be named short description?
    // am I destructing the AssestDetail obj before its getting passed to this component?
    // if so then maybe it would be better to just pass the array object instead.
}

export const ContentComponent:React.FC<ContentComponentProps> = ({content,pageTitle,headLine})=> {
    const location = useLocation();

    const screenHeight = useScreenHeight();

    return (
       <>
           <div className = "container">
               <h1 className="projects-page-h1-title">{pageTitle}</h1>
               <div className='content-decription-container'>
                   <p className="projects-page-p">{headLine}</p>
               </div>
           </div>

           <div className = "container">
               {
                   content.map((item,idx) => (
                       <div
                           key = {idx}
                           className = "section"  // may need to remove/ change if you want position sticky to work.
                           style={{
                               minHeight: `${screenHeight * .75}px`,
                               // alignContent:"center"
                           }}>

                           <div
                               className={
                                   idx % 2 === 0
                                       ? 'd-flex flex-row-reverse row pt-2 pb-2 projects-row-container'
                                       : 'row pt-2 pb-2 projects-row-container'
                               }
                               style={{
                                   alignContent: "center",
                                   // height:"100%" // experimental
                               }}>

                           <div className="col-lg-6 col-sm-12 pb-2 mb-3">
                               <h2 className="projects-title">{item.title}</h2>

                               <div className="content-decription-container" >

                                   <p className="projects-page-p">{item.shortDescription}</p>

                               </div>
                           </div>

                           <div className="col-lg-6 col-sm-12 pb-3"
                                // style={{ // experimental remove if this does not work
                                //     position: 'relative', // Important: sticky needs a positioned parent
                                //     height: "100vh",
                                //     overflowY: "auto",
                                // }}

                           >

                               <Link
                                   // className = "image-sticky-wrapper" // experimental remove if does not work
                                   to={`${location.pathname + "/" + item.title.replace(/\s/g, '')}`}>

                                   <ImageComponent
                                       key = {idx}
                                       idx= {idx}
                                       item= {item}
                                   />

                               </Link>
                            </div>
                           </div>
                       </div>
                   ))
               }
           </div>
       </>
    );
}