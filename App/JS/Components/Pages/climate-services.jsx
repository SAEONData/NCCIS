'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Card, CardBody } from 'mdbreact'
import ServicesData from '../../../Data/servicesData.jsx'

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

class ClimateServices extends React.Component {

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
          <h5>Climate Services</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/climate-services" }}>
            <em className="fa fa-chevron-right mr-1"></em> Climate Services</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/maps-graphs" }}>
            <em className="fa fa-chevron-right mr-1"></em> Maps and Graphs</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/data-download" }}>
            <em className="fa fa-chevron-right mr-1"></em> Download Data</Button></Col>
          </Row>
          </div>
        </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
            <div className="container">
            
            {/* <div id="record-filters" className="btn-group" data-toggle="buttons">
              <label >Filter records:</label>
              <label id="gridDisplayPublicLabel" className="btn btn-primary">
                <input type="radio" name="GridDisplay" id="gridDisplayPublic" value="Public" /> Public
              </label>
              <label id="gridDisplayCommercialLabel" className="btn btn-primary">
                <input type="radio" name="GridDisplay" id="gridDisplayCommercial" value="Commercial" /> Commercial
              </label>
              <label id="gridDisplayAllLabel" className="btn btn-primary active">
                <input type="radio" name="GridDisplay" id="gridDisplayAll"  value="all" /> All
              </label>
            </div>

            <form className='filter-form'>
              <h3>Filters</h3>
              <div>
                <label>Filter :</label>
                <input type='text' value='' className='filter' />
              </div>
            </form> */}

              <ServicesData />
            </div>
          </section>
    </>
    
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClimateServices)