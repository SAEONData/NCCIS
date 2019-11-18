'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { CardBody,Card } from 'mdbreact'


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

class CARBONsinks extends React.Component {

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
          <h5>SA Carbon Sinks Atlas</h5>
          <Card className="mb-5 mt-5">
            <CardBody>
              <div
                style={{ backgroundColor: 'white', border: '1px solid gainsboro', borderRadius: 10, padding: '15px 15px 5px' }}
              >
                <h5 style={{ margin: 0 }}>
                  <b>Coming Soon</b>
                </h5>

                <hr style={{ marginTop: 10 }} />

                <p style={{ overflowY: 'auto', paddingRight: 15 }}>
                  This page will be online in our next release. Come back to check for feature additions
                </p>
              </div>
            </CardBody>
          </Card>
          </div>
          </section>


    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CARBONsinks)