import React from "react"
import { MDBCarousel, MDBCard, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol } from
  "mdbreact"

//Images
import imgNdmc from '../../../../Images/Other/ndmc-events.gif'
import imgFreq from '../../../../Images/Other/FrequencyofDisastersAcrossSouthAfrica.gif'
import imgNuDi from '../../../../Images/Other/NumberofDisastersbetween2006and2019.gif'


const CarouselExtreme = () => {
  return (
    <>
      <MDBCarousel
         activeItem={1} length={3} slide={true} showControls={true} showIndicators={false} multiItem
         interval={9000000} className="carouselPager"
      >
        <MDBCarouselInner>
          
          <MDBCarouselItem itemId="1" className="active">
          <MDBRow>
          <MDBCol md="6">
            <div className="mb-2 h-100 p-3 d-flex align-items-center shadow-bg light-bg">
              <div>
              <p>South Africa is susceptible to a number of extreme weather events with the most common being floods, droughts, fires and large storms. Other disaster risks include lighting strikes, heat waves, hail damage, wind storms and sea level rise as well as possible increases in health related disasters.</p>
              <p className="bg-danger p-3 round-edge">Data from the National Disaster Management Centre shows that since 2006 there have been <b>411 declared disasters</b> in South Africa of which <b>97% were climate-related disasters</b>.</p>
              <p><b>Meteorological droughts</b> (below average precipitation) are the most frequent disasters with <b>237 events</b> being declared between 2006 and 2019. The second and third most frequent disasters are flash floods and riverine floods and the fourth agricultural drought events (low soil moisture).</p>
              <p>Drought impacts stem from a combination of factors. Increasing rainfall variability is one aspect, but how this affects communities depends upon how well people, the economy and the environment can adapt.</p>
              <p>Various factors may undermine people’s ability to withstand reduced water availability (a meteorological drought) and to prevent it from developing into agricultural and hydrological drought with social, economic and environmental impacts.</p>
            </div></div>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard className="mb-2 h-100">
              <img className="img-fluid" src={imgNdmc} />
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <MDBRow>
          <MDBCol md="6">
            <div className="mb-2 h-100 p-3 d-flex align-items-center shadow-bg light-bg">
              <div>
              <p><b>Kwa-Zulu Natal</b> experiences the highest number of disasters; 200 declared between 2006 and 2019.</p>
              <p>This is a result of a high exposure to recurrent flood events and persistent drought conditions between 2014 and 2017. Floods are often a result of tropical cyclones that bring widespread flooding to Mozambique and north-eastern South Africa.</p>
              <p>Such events may then be exacerbated by dam and infrastructure failures related to inadequate design and maintenance, particularly in the case of stormwater infrastructure in urban areas, as well as poor land use planning and presence of informal settlements. </p>
              <p className="bg-danger p-3 round-edge">Between 2014 and 2017 South Africa was severely affected by a number of drought events with <b>261 events</b> being declared across the country.</p>
              <p>Over December 2010 and January 2011, a number of regions across South Africa were affected by flooding as a result of a La Nina events and consequent above average rainfall. Heavy rainfall in KwaZulu Natal in November 2011 resulted in a number of 26 flash floods across the province. </p>
              </div>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard className="mb-2 h-100 p-2">
              <img className="img-fluid" src={imgFreq} />
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
          <MDBRow>
          <MDBCol md="6">
            <div className="mb-2 h-100 p-3 d-flex align-items-center shadow-bg light-bg">
              <div>
              <h5>South Africa’s vulnerability to drought - 2014-2016 agricultural drought</h5>
              <p>South Africa has recently experienced the worst drought since 1930, with total rainfall in 2015 of 403 mm, the lowest annual amount on record. Temperatures over this period were of the hottest recorded over the last 10 years. The 2015 drought was the result of a strong El Niño event (South African Weather Service).</p>
              <p className="light-grey-bg p-3 round-edge">An agricultural drought is a period of time (either months or years) when the moisture supply of a region falls to a level where crop and range production is severely impacted. The agricultural sectors that have been most severely affected are maize, wheat and sugarcane along with beef and sheep production. The majority of maize (83%), wheat (53%) and sugarcane (73%) are produced under dryland conditions making them especially vulnerable to periods of drought (<a href="http://www.nstf.org.za/wp-content/uploads/2016/06/Agri-SA-Drought-Report_CS4.pdf" target="_blank">Agri-SA Drought Report, 2016</a>). </p>
              <p>The following provinces have been declared drought disaster areas:</p>
              <ul>
                <li>Free State</li>
                <li>KwaZulu-Natal</li>
                <li>Limpopo</li>
                <li>Mpumalanga</li>
                <li>Northern Cape</li>
                <li>North West</li>
                <li>Western Cape (with areas of the Eastern Cape also affected)</li>
              </ul>
              </div>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard className="mb-2 h-100 p-2">
              <img className="img-fluid" src={imgNuDi} />
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  )
}



export default CarouselExtreme 