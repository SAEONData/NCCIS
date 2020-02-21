'use strict'

import React from "react";
import { MDBRow, MDBCol, MDBLightbox, MDBContainer, MDBIcon } from "mdbreact";
import Lightbox from "react-image-lightbox";
import mrAnnual from "../../../Images/Stats/mapsgraphs/mr-annual.gif";
import mrSpring from "../../../Images/Stats/mapsgraphs/mr-spring.gif";
import mrSummer from "../../../Images/Stats/mapsgraphs/mr-summer.gif";
import mrWinter from "../../../Images/Stats/mapsgraphs/mr-winter.gif";
import mtAnnual from "../../../Images/Stats/mapsgraphs/mt-annual.gif";
import mtAutumn from "../../../Images/Stats/mapsgraphs/mt-autumn.gif";
import mtSpring from "../../../Images/Stats/mapsgraphs/mt-spring.gif";
import mtSummer from "../../../Images/Stats/mapsgraphs/mt-summer.gif";
import mtWinter from "../../../Images/Stats/mapsgraphs/mt-winter.gif";

import '../../../css/lightbox.css';


const images = [
  {
    id: 1,
    src: [mrAnnual],
    description: 'Mean Rainfall Annual'
  },
  {
    id: 2,
    src: [mrSpring],
    description: 'Mean Rainfall Spring'
  },
  {
    id: 3,
    src: [mrSummer],
    description: 'Mean Rainfall Summer'
  },
  {
    id: 4,
    src: [mrWinter],
    description: 'Mean Rainfall Winter'
  },
  {
    id: 5,
    src: [mtAnnual],
    description: 'Mean Temperature Annual'
  },
  {
    id: 6,
    src: [mtAutumn],
    description: 'Mean Temperature Autumn'
  },
  {
    id: 7,
    src: [mtSpring],
    description: 'Mean Temperature Spring'
  },
  {
    id: 8,
    src: [mtSummer],
    description: 'Mean Temperature Summer'
  },
  {
    id: 9,
    src: [mtWinter],
    description: 'Mean Temperature Winter'
  }
];

class LightboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <>
      <MDBRow className="s-gallery">
         
         {images.map(p => {

            return (
                <MDBCol md="2" key={p.id} >
                <div md="2" className="s-gallery-item image-dl" onClick={() =>
                  this.setState({ photoIndex: 0, isOpen: true })
                }>
                {/* <div md="2" className="image-dl s-gallery-item "> */}
                  <img src={p.src} alt={p.description} />
                  <p className="s-gallery-description">{p.description}</p>
                </div>
                </MDBCol>
            );

            }) }
            

      </MDBRow>

        {isOpen && (
          <>
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          /><a href={images[photoIndex].src} className="s-gall-download" download target="_blank" ><MDBIcon icon="download" /></a>
          </>
        )}
      </>
    );
  }
}

export default LightboxPage;