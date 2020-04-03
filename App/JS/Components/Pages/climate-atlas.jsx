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

class ClimateAtlas extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    this.props.updateNav(location.hash)
    return (
      <>
        <section className="ea-content-full light-bg explore-data" style={{ padding: "0"}}>
          <div className="pt-0 pb-0">
            <iframe src="https://gisportal.saeon.ac.za/portal/apps/webappviewer/index.html?id=2d572dcf9c5f47c484540f8c934e03f4" frame="none" border="none" style={{ width: "100%" , height: "800px" , border:"none"}} />
          </div>
        </section>
    </>
    
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClimateAtlas)