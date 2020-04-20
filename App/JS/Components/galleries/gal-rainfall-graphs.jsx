'use strict'

import React from "react";
import { MDBRow, MDBCol, MDBLightbox, MDBContainer, MDBIcon } from "mdbreact";
import Lightbox from "react-image-lightbox";
import arEc from "../../../Images/Stats/mapsgraphs/ar-ec.gif";
import arFs from "../../../Images/Stats/mapsgraphs/ar-fs.gif";
import arG from "../../../Images/Stats/mapsgraphs/ar-g.gif";
import arKzn from "../../../Images/Stats/mapsgraphs/ar-kzn.gif";
import arLim from "../../../Images/Stats/mapsgraphs/ar-lim.gif";
import arMp from "../../../Images/Stats/mapsgraphs/ar-mp.gif";
import arNc from "../../../Images/Stats/mapsgraphs/ar-nc.gif";
import arNw from "../../../Images/Stats/mapsgraphs/ar-nw.gif";
import arWc from "../../../Images/Stats/mapsgraphs/ar-wc.gif";

import '../../../css/lightbox.css';


const images = [
  {
    id: 1,
    src: [arEc],
    description: 'Eastern Cape'
  },
  {
    id: 2,
    src: [arFs],
    description: 'Free State'
  },
  {
    id: 3,
    src: [arG],
    description: 'Gauteng'
  },
  {
    id: 4,
    src: [arKzn],
    description: 'KZN'
  },
  {
    id: 5,
    src: [arLim],
    description: 'Limpopo'
  },
  {
    id: 6,
    src: [arMp],
    description: 'Mpumalanga'
  },
  {
    id: 7,
    src: [arNc],
    description: 'Northern Cape'
  },
  {
    id: 8,
    src: [arNw],
    description: 'North West'
  },
  {
    id: 9,
    src: [arWc],
    description: 'Western Cape'
  }
];

class RainfallGraphs extends React.Component {
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
              <MDBCol md="2" key={p.id} className="mb-3" >
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

export default RainfallGraphs;