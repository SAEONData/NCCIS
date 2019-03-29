import React from "react" 
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact" 

const CarouselPage = () => {
  return (
    <MDBContainer >
     
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={false} style={{height:'400px', width:'auto'}}>
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView styles={{height:'400px', width:'auto', margin:'0, auto'}}>
              <img  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" />
              <MDBMask overlay="black-light" />
            </MDBView>
            
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img  src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"  />
              <MDBMask overlay="black-strong" />
            </MDBView>
            
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img  src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"  />
              <MDBMask overlay="black-slight" />
            </MDBView>
           
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img  src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
              <MDBMask overlay="black-light" />
            </MDBView>
            
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  ) 
}



export default CarouselPage 