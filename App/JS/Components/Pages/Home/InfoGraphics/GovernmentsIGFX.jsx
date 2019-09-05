import React from 'react'
import { Row, Col, Button } from 'mdbreact'
import { connect } from 'react-redux'
import { vmsBaseURL } from '../../../../../js/config/serviceURLs.js'
import moment from 'moment'

//images
import governments from '../../../../../images/Icons/governments.jpg'

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class GovernmentsIGFX extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      regionCount: 0
    }
  }

  async componentDidMount(){

    //Get Region count
    try {
      let res = await fetch(vmsBaseURL + 'Regions/flat')
      res = await res.json()

      if (res.items) {
        this.setState({ regionCount: res.items.length })
      }
    }
    catch (ex) {
      console.error(ex)
    }
  }

  processData(data, year) {

    let regionCount = this.state.regionCount
    let implRegionCount = 0

    //Get count of "implemented" regions (unique list)
    let implRegions = []
    let filteredData = data.filter(g => moment(g.CreateDate, 'YYYY/MM/DD').year() === year)
    filteredData.forEach(g => {
      let filtered = g.Questions.filter(q => q.Key === "Region")
      if(filtered.length > 0 && !implRegions.includes(filtered[0].Value)){
        implRegions.push(filtered[0].Value)
      }
    })
    implRegionCount = implRegions.length

    //Calc percentage of implemented regions
    if(implRegionCount > 0 && regionCount > 0){
      let percentage = implRegionCount / regionCount * 100
      percentage = Math.round(percentage * 100) / 100
      return percentage + "%"
    }

    return "#####"
  }

  render() {

    let { data, year } = this.props
    let value = this.processData(data, year)

    return (
      <div className="border-light-radius light-bg h-100 text-center d-flex align-items-center">
        <div className="pl-2 pr-2 pt-3 pb-3 m-auto">
        <img
          src={governments}
          className="pb-3"
          style={{height:'55px'}}
        />
        <h6 className="pt-3 pb-3">
          Percentage of governments reporting at least 1 plan or action
        </h6>
        <h5>
          {value}
        </h5>
      </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GovernmentsIGFX)