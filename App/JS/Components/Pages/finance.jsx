'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'mdbreact'
import te1 from './../../../Images/Other/t_e_1.gif'
import te2 from './../../../Images/Other/t_e_2.gif'

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

class Finance extends React.Component {

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
          <h5>Financing Climate Change</h5>
          <p>In order for South Africa to implement effective climate action, support is required to fund programmes. The inancial suport, categorised by type and current status, required by South Africa to implenet action is presente below.</p>
          </div>
          </section>

          <section className="ea-content-full mt-4 pt-4 pb-4 light-bg">
          <div className="container pt-3 pb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h5>Support type (US $)</h5>
                <img src={te1} />
              </div>
              <div className="col-md-6">
                <h5>Support status (US $)</h5>
                <img src={te2} />
              </div>
            </div>
          </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Finance)