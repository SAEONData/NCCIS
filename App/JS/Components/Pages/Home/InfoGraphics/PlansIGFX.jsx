import React from 'react'
import { Row, Col, Button } from 'mdbreact'
import { connect } from 'react-redux'
import moment from 'moment'

//images
import plans from '../../../../../images/Icons/plans.jpg'

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class PlansIGFX extends React.Component {

  constructor(props) {
    super(props);
  }

  processData(data, year){
 
    if(data && data.length > 0){    
      let filteredData = data.filter(g => moment(g.CreateDate, 'YYYY/MM/DD').year() === year)
      if(filteredData.length > 0){
        return filteredData.length
      }
    }

    return "#####"
  }

  render() {

    let { data, year } = this.props
    let value = this.processData(data, year)

    return (
      <div className="border-light-radius light-bg h-100 text-center d-flex align-items-center">
      <div className="pl-2 pr-2 pt-3 pb-3">
      <img
        src={plans}
        className="pb-3"
        style={{height:'55px'}}
      />
      <h6 className="pt-3 pb-3">
        Total number of DAO reports submitted
      </h6>
      <h5>
        {value}
      </h5>
    </div>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlansIGFX)