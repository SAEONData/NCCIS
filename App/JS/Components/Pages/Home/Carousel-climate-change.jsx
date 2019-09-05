import React from "react"
import { MDBCarousel, MDBCard, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol } from
  "mdbreact"

//Images
import imgtmax1 from '../../../../Images/Stats/tmax/1.gif'
import imgtmax2 from '../../../../Images/Stats/tmax/2.gif'
import imgtmax3 from '../../../../Images/Stats/tmax/3.gif'
import imgtmax4 from '../../../../Images/Stats/tmax/4.gif'
import imgtmax5 from '../../../../Images/Stats/tmax/5.gif'
import imgtmax6 from '../../../../Images/Stats/tmax/6.gif'


const CarouselClimateChange = () => {
  return (
    <>
      <MDBCarousel
         activeItem={1} length={6} slide={true} showControls={true} showIndicators={false} multiItem
         interval={9000000} className="carouselPager"
      >
        <MDBCarouselInner>
          
          <MDBCarouselItem itemId="1" className="active">
          <MDBRow>
          <MDBCol>
            <MDBCard className="mb-2 h-100 p-2">
              <div className="text-center">
              <img className="img-fluid" src={imgtmax1} />
              </div>
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <MDBRow>
          <MDBCol>
            <MDBCard className="mb-2 h-100 p-2">
            <div className="text-center">
              <img className="img-fluid" src={imgtmax2} />
              </div>
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
          <MDBRow>
          <MDBCol>
            <MDBCard className="mb-2 h-100 p-2">
            <div className="text-center"><img className="img-fluid" src={imgtmax3} /></div>
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
          <MDBRow>
          <MDBCol>
            <MDBCard className="mb-2 h-100 p-2">
            <div className="text-center"><img className="img-fluid" src={imgtmax4} /></div>
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
          <MDBRow>
          <MDBCol>
            <MDBCard className="mb-2 h-100 p-2">
            <div className="text-center"><img className="img-fluid" src={imgtmax5} /></div>
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
          <MDBRow>
          <MDBCol>
            <MDBCard className="mb-2 h-100 p-2">
            <div className="text-center"><img className="img-fluid" src={imgtmax6} /></div>
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  )
}



export default CarouselClimateChange 