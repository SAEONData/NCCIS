'use strict'

import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import imgddec from "../../../Images/Stats/dd-ec.gif"
import imgddfs from "../../../Images/Stats/dd-fs.gif"
import imgddg from "../../../Images/Stats/dd-g.gif"
import imgddkzn from "../../../Images/Stats/dd-kzn.gif"
import imgdddl from "../../../Images/Stats/dd-l.gif"
import imgddm from "../../../Images/Stats/dd-m.gif"
import imgddnc from "../../../Images/Stats/dd-nc.gif"
import imgddnw from "../../../Images/Stats/dd-nw.gif"
import imgddwc from "../../../Images/Stats/d-wc.gif"

const images = [
  imgddec,
  imgddfs,
  imgddg,
  imgddkzn,
  imgdddl,
  imgddm,
  imgddnc,
  imgddnw,
  imgddwc
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
        <div className="mdb-lightbox no-margin">
          <MDBRow>
            <MDBCol md="3">
              <figure>
                <img
                  src={images[0]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="3">
              <figure>
                <img
                  src={images[1]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 1, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="3">
              <figure>
                <img
                  src={images[2]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 2, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="3">
              <figure>
                <img
                  src={images[3]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 3, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="3">
              <figure>
                <img
                  src={images[4]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 4, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="3">
              <figure>
                <img
                  src={images[5]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 5, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="3">
              <figure>
                <img
                  src={images[6]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 6, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="3">
              <figure>
                <img
                  src={images[7]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 7, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="3">
              <figure>
                <img
                  src={images[8]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 8, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
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
          />
        )}
      </>
    );
  }
}

export default LightboxPage;