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

class DOCdisclaimer extends React.Component {

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
          <h5>Disclaimer</h5>
          <Row>
          <Col md="auto"><Button type="button" className="btn btn-success-active btn-lg" onClick={() => { location.hash = "/doc-disclaimer" }}>
            <em className="fa fa-chevron-right mr-1"></em> Disclaimer</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-success btn-lg" onClick={() => { location.hash = "/doc-conditions" }}>
            <em className="fa fa-chevron-right mr-1"></em> Conditions of use</Button></Col>
          <Col md="auto"><Button type="button" className="btn btn-success btn-lg" onClick={() => { location.hash = "/doc-privacy" }}>
            <em className="fa fa-chevron-right mr-1"></em> Privacy policy</Button></Col>
          </Row>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container-fluid">
              <h5>The limits to responsibility and liability</h5>
              <p>While every reasonable effort is made to maintain current and accurate information on this site, we accept no responsibility for any error or omission on these pages or any site to which the site pages link, or for direct or indirect damage as a result of the usage or quoting the content on the site or the information delivered or not delivered or as a result of the downloading of computer files or the usage of computer programs available on the site.</p>
              <p>Where appropriate, external links have been provided for the user’s convenience. We are not responsible for the content or reliability of linked websites and does not necessarily endorse the views expressed in them. Listing shall not be taken as endorsement of any kind. We cannot guarantee that these links will work all of the time and has no control over the availability of the linked sites or pages.</p>
              <p>We provide meta-data descriptions of and links to its own data and that of others in the community of practice, in the belief that this will be useful and in support of Open Access to scientific publications and data. We cannot be held responsible for the quality of data provided by third parties, and while we take reasonable care in referencing these data sets, the content of both meta-data and data is under control of the third-party provider</p>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DOCdisclaimer)