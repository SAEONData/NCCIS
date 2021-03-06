import React from 'react'
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader, MDBIcon } from "mdbreact";

class TrendsPage extends React.Component {


render() {
    return (
      <>
      <div className="ea-tabs">
        <div className="tab-parent" maploc="ZA-NC">
          <h3>Northern Cape:</h3>
          <div className="tab-child">
          <p>The Northern Cape has been experiencing strong temperature increases of 1.5 - 2 °C per century as recorded over the 1931-2015 period. Extreme warm events have also been increasing across the province, and particularly so over the northern interior. Here hot days have been increasing in frequency of occurrence, at a rate of about 2 days/decade. Annual rainfall totals show statistically significant increases over the southeastern interior parts of the province (at a rate of about 5 mm/decade), with associated increases in extreme daily rainfall events (rate of increase is about 2 days/decade in days with rainfall above the 90th percentile threshold). The rate of sea-level rise along the Northern Cape coast has been measured over the last five decades to be in the order of 20 cm/century.</p>
          </div>
        </div>

        <div className="tab-parent" maploc="ZA-WC">
          <h3>Western Cape:</h3>
          <div className="tab-child">
            <p>The Western Cape has been experiencing a drastic rate of temperature increase of more than 2 °C per century at some locations, as recorded over the 1931-2015 period. Extreme warm events have also been increasing during this period, for example, hot days have been increasing at a rate of about 1 day per decade. Annual rainfall totals show statistically significant increases over the eastern interior parts of the province over the last few decades, with the rate of rainfall total increase as high as 10 mm/decade. Associated increases in the number of days with extreme rainfall (daily rainfall above the 90th percentile threshold) have also occurred, at a rate of about 2 days per decade. The rate of sea-level rise along the Western Cape coast has been measured over the last five decades to be in the order of 20 cm/century along the west coast and 15 cm/century along the south coast.</p>
          </div>
        </div>

        
        <div className="tab-parent" maploc="ZA-EC">
          <h3>Eastern Cape:</h3>
          <div className="tab-child">
            <p>Over the Eastern Cape, a lack of long-term homogeneous time series data prevents an extensive analysis of temperature trends, and trends in extreme temperature events, to be performed. There is some evidence though, that strong temperature increases of about 2 °C per century has occurred over the western interior of the province over the 1931-2015 period. Annual rainfall totals show statistically significant increases over the western interior parts of the province (rate of increase about 10 mm/year), with associated increases in extreme daily rainfall events (rate of increase about 2 days/decade). The rate of sea-level rise along the Eastern Cape coast has been measured over the last five decades to be in the order of 15 cm/century along the Cape south coast region (in the west), but larger towards the east.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-NL">
          <h3>KwaZulu-Natal:</h3>
          <div className="tab-child">
            <p>KwaZulu-Natal has experienced drastic warming over the 1931-2015 period, with stations along the coast reporting temperature increases of more than 2 °C/century. Hot days have been increasing at a rate of about 0.5 days per decade. There is no clear evidence of statistically significant changes in annual precipitation totals or daily rainfall extremes. The rate of sea-level rise along the KwaZulu-Natal coast has over the last five decades been measured to be in the order of 30 cm/century.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-MP">
          <h3>Mpumalanga:</h3>
          <div className="tab-child">
            <p>A lack of stations with sufficiently long homogeneous temperature records complicate the identification of temperature trends over Mpumalanga. It is plausible that the trends are strong though, given the drastic temperature increases recorded over Gauteng to the west, Limpopo to the north and KwaZulu-Natal to the south. There is no evidence of statistically significant trends in annual rainfall or extreme daily precipitation events, but an indication of spatially coherent increases in rainfall over the Highveld areas in the west, and spatially coherent decreases over the Lowveld areas in the east.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-LP">
          <h3>Limpopo:</h3>
          <div className="tab-child">
          <p>Strong warming of more than 1 °C per century has been recorded for the province over the period 1931-2015, with the number of hot days increasing by about 1 day/decade over the same period. Stations in the northern parts of the province have also recorded statistically significant decreases in annual precipitation (at a rate of more than 10 mm/decade), but with no statistically significant increases in extreme daily rainfall events that can be discerned.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-GT">
          <h3>Gauteng:</h3>
          <div className="tab-child">
            <p>Drastic temperature increases of more than 2 °C/century have been recorded in Gauteng over the period 1931-2015. The number of hot days has been increasing over the same period at a rate of about 1 day/decade. Annual rainfall totals at stations in the province do not exhibit statistically significant trends, but there is evidence of increases in the occurrence of extreme daily rainfall events (rate of increase as high as 2 days per decade).</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-FS">
          <h3>Free State:</h3>
          <div className="tab-child">
            <p>The analysis of temperature trends over the Free State is hampered by a lack of station data with sufficiently long and homogeneous records. There is evidence that the warming that is occurring is statistically significant but less in magnitude than over the Northern Cape to the west and Gauteng to the north. Rainfall stations do not report statistically significant increases in annual precipitation totals or extreme precipitation events, although a spatially coherent pattern of extreme daily precipitation increases is present over the province.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-NW">
          <h3>North West:</h3>
          <div className="tab-child">
            <p>A lack of stations with sufficiently long homogeneous temperature records complicate the identification of temperature trends over North West. It is plausible that the trends are strong given the drastic temperature increases recorded over the Northern Cape to the west, Botswana to the north and Gauteng to the east. There is no evidence of systematic changes in annual rainfall totals, but some evidence of an increase in extreme daily rainfall events.</p>
          </div>
        </div>

      </div>
      </>
    );
  }
}

export default TrendsPage;