'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'


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
       <section class="ea-content-full">
          <div className="container-fluid mt-4">
          <div className="row d-sm-none d-md-none d-lg-none">
            <div className="col-6"><h5>Actions</h5></div>
            <div className="col-6">
              {/* <IconList></IconList> */}
            </div>
          </div>
          <h5>Observed Trends in Historical Climate</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "cic-ghg" }}>
            <em className="fa fa-chevron-right mr-1"></em> GHG Emissions Database</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success-active btn-lg" onClick={() => { location.hash = "/cic-trends" }}>
            <em className="fa fa-chevron-right mr-1"></em> Trends</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-projections" }}>
            <em className="fa fa-chevron-right mr-1"></em> Projections</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/cic-impacts" }}>
            <em className="fa fa-chevron-right mr-1"></em> Impacts</Button></Col>
          </Row>
          <hr className="hr-thin" />
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
            <p>South Africa has been warming significantly over the period 1931-2015:</p>
            <p>Over the western parts of the country, including much of the Western and Northern Cape, and also in the east over Gauteng, Limpopo and the east coast of KwaZulu-Natal, the observed rate of warming has been 2 °C/century or even higher – in the order of twice the global rate of temperature increase. </p> 
            <p>Associated increases in the annual number ofhot days have also occurred, but there have been decreases in the annual numberof cold nights over most of the country. </p>
            <p>There is strong evidence of statistically significant increases in rainfall occurring over the southern interior regions, extending from the western interior of the Eastern Cape and eastern interior of the Western Cape northwards into the central interior region of the Northern Cape, over the period 1921-2015. </p>
            <p>Extreme daily rainfall events have increased over these same areas, with these increases also being statistically significant and extending northwards into North West, the FreeState and Gauteng. Over Limpopo there is strong evidence of statistically significant decreases in annual rainfall totals.</p>
          <iframe width="100%" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiMDEyMWEzZjYtMWNmNi00YjRiLWFhMmUtZWZhNjllMmRiYWZmIiwidCI6IjgyZmNmOTdlLWJmMGItNDVlMy1iNzIwLTRhNzIzYmJmZWY4MiIsImMiOjl9" frameborder="0" allowfullscreen="true"></iframe>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CICtrends)