import React from "react"
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact"

//Images
import map1 from '../../../../Images/LandingPage/nccis-landing map 1.gif'
import map2 from '../../../../Images/LandingPage/nccis-landing map 2.gif'
import map3 from '../../../../Images/LandingPage/nccis-landing map 3.gif'
import map4 from '../../../../Images/LandingPage/nccis-landing map 4.gif'
import map5 from '../../../../Images/LandingPage/nccis-landing map 5.gif'

const mapImages = [map1, map2, map3, map4, map5]

const CarouselPage = () => {
  return (
    <>
      <MDBCarousel
        activeItem={1}
        interval={10000}
        length={5}
        showControls={true}
        slide={true}
        showIndicators={false}
        style={{
          height: '400px',
          width: 'auto',
          textAlign: 'center',
          backgroundColor: "#6198c3",
          position: 'relative', zIndex: 2
        }}
      >
        <MDBCarouselInner>
          {
            mapImages.map(map => {
              let index = mapImages.indexOf(map) + 1
              return (
                <MDBCarouselItem key={`ci_${index}`} itemId={index}>
                  <MDBView styles={{ height: '400px', width: 'auto', margin: '0, auto' }}>
                    <img src={map} style={{ margin: "auto", maxHeight: 400 }} />
                  </MDBView>
                </MDBCarouselItem>
              )
            })
          }
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  )
}



export default CarouselPage 