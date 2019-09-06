import React from "react"
import { MDBCarousel, MDBCard, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCardBody, MDBCol } from
  "mdbreact"

//Images
import map1 from '../../../../Images/Maps/saws/gifs/1.gif'
import map2 from '../../../../Images/Maps/saws/gifs/2.gif'
import map3 from '../../../../Images/Maps/saws/gifs/3.gif'
import map4 from '../../../../Images/Maps/saws/gifs/4.gif'
import map5 from '../../../../Images/Maps/saws/gifs/5.gif'
import map6 from '../../../../Images/Maps/saws/gifs/6.gif'
import map7 from '../../../../Images/Maps/saws/gifs/7.gif'
import map8 from '../../../../Images/Maps/saws/gifs/8.gif'
import map9 from '../../../../Images/Maps/saws/gifs/9.gif'
import map10 from '../../../../Images/Maps/saws/gifs/10.gif'
import map11 from '../../../../Images/Maps/saws/gifs/11.gif'
import map12 from '../../../../Images/Maps/saws/gifs/12.gif'
import map13 from '../../../../Images/Maps/saws/gifs/13.gif'
import map14 from '../../../../Images/Maps/saws/gifs/14.gif'
import map15 from '../../../../Images/Maps/saws/gifs/15.gif'
import map16 from '../../../../Images/Maps/saws/gifs/16.gif'
import map17 from '../../../../Images/Maps/saws/gifs/17.gif'
import map18 from '../../../../Images/Maps/saws/gifs/18.gif'
import map19 from '../../../../Images/Maps/saws/gifs/19.gif'
import map20 from '../../../../Images/Maps/saws/gifs/20.gif'
import map21 from '../../../../Images/Maps/saws/gifs/21.gif'




const CarouselPage = () => {
  return (
    <>
      <MDBCarousel
         activeItem={1} length={4} slide={true} showControls={true} showIndicators={true} multiItem
         interval={9000000}
      >
        <MDBCarouselInner>
          
          <MDBCarouselItem itemId="1" className="active">
          <MDBRow>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map1} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map2} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map3} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map4} />
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <MDBRow>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map5} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map6} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map7} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map8} />
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
          <MDBRow>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map9} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map10} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map11} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map12} />
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
          <MDBRow>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map13} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map14} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map15} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map16} />
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
          <MDBRow>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map17} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map18} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map19} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map20} />
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
          <MDBRow>
          <MDBCol md="3">
            <MDBCard className="mb-2">
              <img className="img-fluid" src={map21} />
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          
          
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  )
}



export default CarouselPage 