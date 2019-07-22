import React from "react"
import { MDBCarousel, MDBCard, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCardBody, MDBCol } from
  "mdbreact"

//Images
import map1 from '../../../../Images/Maps/saws/1.png'
import map2 from '../../../../Images/Maps/saws/2.png'
import map3 from '../../../../Images/Maps/saws/3.png'
import map4 from '../../../../Images/Maps/saws/4.png'
import map5 from '../../../../Images/Maps/saws/5.png'
import map6 from '../../../../Images/Maps/saws/6.png'
import map7 from '../../../../Images/Maps/saws/7.png'
import map8 from '../../../../Images/Maps/saws/8.png'
import map9 from '../../../../Images/Maps/saws/9.png'
import map10 from '../../../../Images/Maps/saws/10.png'
import map11 from '../../../../Images/Maps/saws/11.png'
import map12 from '../../../../Images/Maps/saws/12.png'
import map13 from '../../../../Images/Maps/saws/13.png'
import map14 from '../../../../Images/Maps/saws/14.png'
import map15 from '../../../../Images/Maps/saws/15.png'
import map16 from '../../../../Images/Maps/saws/16.png'
import map17 from '../../../../Images/Maps/saws/17.png'
import map18 from '../../../../Images/Maps/saws/18.png'
import map19 from '../../../../Images/Maps/saws/19.png'
import map20 from '../../../../Images/Maps/saws/20.png'
import map21 from '../../../../Images/Maps/saws/21.png'




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