'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import Carousel from './Home/Carousel-saws.jsx'


const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNav: payload => {
      dispatch({ type: "NAV", payload })
    }
  }
}

class CICtrends extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    this.props.updateNav(location.hash)
    return (
      <>
       <section className="ea-content-full">
          <div className="container-fluid mt-4">
          <div className="row d-sm-none d-md-none d-lg-none">
            <div className="col-6"><h5>Actions</h5></div>
            <div className="col-6">
              {/* <IconList></IconList> */}
            </div>
          </div>
          <h5>Observed Trends in Historical Climate</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-trends-current" }}>
            <em className="fa fa-chevron-right mr-1"></em> Provincial Climate Description</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/cic-trends" }}>
            <em className="fa fa-chevron-right mr-1"></em> National Trends in Climate</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/cic-trends-provincial" }}>
            <em className="fa fa-chevron-right mr-1"></em> Provincial Trends in Climate</Button></Col>
          </Row>
          <hr className="hr-thin" />
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
            <div className="row">
            <div className="col-6">
              <p>South Africa has been warming significantly over the period 1931-2015. Over the western parts of the country, including much of the Western and Northern Cape, and also in the east over Gauteng, Limpopo and the east coast of KwaZulu-Natal, the observed rate of warming has been 2 °C/century or even higher – in the order of twice the global rate of temperature increase.  </p>
              <p>Associated increases in the annual number of hot days have also occurred, but there have been decreases in the annual number of cold nights over most of the country. </p>
              <p>There is strong evidence of statistically significant increases in rainfall occurring over the southern interior regions, extending from the western interior of the Eastern Cape and eastern interior of the Western Cape northwards into the central interior region of the Northern Cape, over the period 1921-2015. </p>
              <p>South Africa's 3rd National Communication to the UNFCCC, provides an updated analysis of trends in temperature, rainfall and extreme events.</p>
              <p>Extreme indices developed by the World Meteorological Organization (WMO) Expert Team on Climate Change Detection and Indices (ETCCDI) were utilised. The analysis builds on the studies of Kruger & Sekele (2012) and Mackellar et al. (2014).</p>
            </div>
            <div className="col-6">
              <p>A total of 27 weather stations was used for temperature trends analysis spanning the period 1931-2015. For rainfall, a total of 60 weather stations were used for the rainfall trend analysis spanning the period 1921-2015. The base period, from which the annual index values of all indices are determined (except the annual maxima and minima) was selected as 1981 – 2010, which can be considered to be the present general norm for similar trend studies.</p>
              <p>The trends were tested for significance at the 95% confidence level. In each map the arrows indicate the direction of change (increasing or decreasing), and the size of the arrows the magnitude of change.  Shaded symbols indicate significant trends at the 5% level. </p>
              <div className="credit-bg">
              <p>Chapter 3 (Engelbrecht et al. 2018) of <a href="https://unfccc.int/sites/default/files/resource/South%20African%20TNC%20Report%20%20to%20the%20UNFCCC_31%20Aug.pdf" target="_blank">South Africa's 3rd National Communication to the UNFCCC</a>, provides an updated analysis of trends in temperature, rainfall and extreme events.</p>
              Extreme indices developed by the World Meteorological Organization (WMO) Expert Team on Climate Change Detection and Indices (ETCCDI) were utilised. The analysis builds on the studies of <a href="https://rmets.onlinelibrary.wiley.com/doi/10.1002/joc.3455" target="_blank">Kruger & Sekele (2012)</a> and <a href="https://www.sajs.co.za/article/view/3952" target="_blank">Mackellar et al. (2014)</a>.
              </div>
            </div>
          </div>
 <Carousel />

 <table className="ea-table">
  <tr><td>	1	</td><td>	CDD	</td><td>	Change in the length of dry spell (1921-2015) defined as the maximum number of consecutive days with precipitation &lt; 1mm	</td></tr>
  <tr><td>	2	</td><td>	CSDI	</td><td>	Change in the annual longest cold spell (1931-2015) defined as the annual number of days with at least 6 consecutive days when minimum temperature (TN) &lt; 10th percentile	</td></tr>
  <tr><td>	3	</td><td>	CWD	</td><td>	Change in the annual maximum length of wet spell (1921-2015) as defined as the maximum number of consecutive days with precipitation ≥ 1mm	</td></tr>
  <tr><td>	4	</td><td>	prcptot	</td><td>	Change in the annual total precipitation when daily precipitation ≥1 mm	</td></tr>
  <tr><td>	5	</td><td>	r10mm	</td><td>	Change in the annual number of days with moderate rainfall (1921-2015) defined as the count of days when precipitation ≥ 10mm	</td></tr>
  <tr><td>	6	</td><td>	r20mm	</td><td>	Change in the annual number of days with moderate to high rainfall (1921-2015) as defined as the annual count of days when precipitation ≥ 20mm	</td></tr>
  <tr><td>	7	</td><td>	r25mm	</td><td>	Change in the annual number of days with moderate to high rainfall (1921-2015) as defined as the annual count of days when precipitation ≥ 25mm	</td></tr>
  <tr><td>	8	</td><td>	r95p	</td><td>	Change in the annual total precipitation from high daily rainfall (1921-2015) defined as when daily rainfall (RR) > 95th percentile of the baseline average	</td></tr>
  <tr><td>	9	</td><td>	r99p	</td><td>	Change in the annual total precipitation from very high daily rainfall (1921-2015) defined as when daily rainfall (RR) > 99th percentile of the baseline average	</td></tr>
  <tr><td>	10	</td><td>	rx1day	</td><td>	Change in the highest daily rainfall per year (1921-2015) defined as the annual maximum 1-day precipitation	</td></tr>
  <tr><td>	11	</td><td>	rx5day	</td><td>	Change in the highest daily rainfall per year (1921-2015) defined as the annual maximum 5-day precipitation	</td></tr>
  <tr><td>	12	</td><td>	SDII	</td><td>	Change in the annual mean amount of daily rainfall, indicating mean daily rainfall intensity (1921-2015)	</td></tr>
  <tr><td>	13	</td><td>	TN10P	</td><td>	Change in the annual number of cold nights (1931-2015) defined as the annual number of days when minimum temperature (TN) &lt; 10th percentile	</td></tr>
  <tr><td>	14	</td><td>	TN90P	</td><td>	Change in the annual number of warm nights (1931-2015) defined as the annual number of days when minimum temperature (TN) > 90th percentile	</td></tr>
  <tr><td>	15	</td><td>	TNn	</td><td>	Change in the annual night time coldest temperature (1931-2015) defined as the annual minimum value of minimum temperature (TN)	</td></tr>
  <tr><td>	16	</td><td>	TNx	</td><td>	Change in the annual night time warmest temperature (1931-2015) defined as the annual maximum value of minimum temperature (TN)	</td></tr>
  <tr><td>	17	</td><td>	TX10P	</td><td>	Change in the annual number of cool days (1931-2015) defined as the number of days when the maximum temperature (TX) &lt; 90th percentile of the baseline average.	</td></tr>
  <tr><td>	18	</td><td>	TX90P	</td><td>	Change in the annual number of hot days (1931-2015) defined as the number of days when the maximum temperature (TX) > 90th percentile of the baseline average.	</td></tr>
  <tr><td>	19	</td><td>	TXn	</td><td>	Change in the daytime coolest temperature (1931-2015) expressed as deg C and defined as the minimum value of maximum temperature (TX).	</td></tr>
  <tr><td>	20	</td><td>	TXx	</td><td>	Change in the daytime hottest temperature (1931-2015) expressed as deg C and defined as the maximum value of maximum temperature (TX).	</td></tr>
  <tr><td>	21	</td><td>	WSDI	</td><td>	Change in the longest hot spell (1931-2015) defined as the number of days with at least 6 consecutive days when maximum temperature (TX) > 90th percentile of the baseline average.	</td></tr>
 </table>
</div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICtrends)