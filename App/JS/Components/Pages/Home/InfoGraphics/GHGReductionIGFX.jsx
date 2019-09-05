import React from 'react'
import { Row, Col, Button } from 'mdbreact'
import { connect } from 'react-redux'
import buildQuery from 'odata-query'
import { ccrdBaseURL } from '../../../../../js/config/serviceURLs.js'
import moment from 'moment'

//images
import ghg_reduction from '../../../../../images/Icons/ghg_reduction.jpg'

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class GHGReductionIGFX extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      totalCO2Reductions: 0
    }
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(){
    this.getData()
  }

  async getData(){

    let { data, year } = this.props

    //Get GHG emissions
    const query = buildQuery({
      filter: {
        MitigationEmissionsData: {
          any: [
            { CO2: { gt: 0 } },
            { Year: year }
          ]
        },
        ProjectDAOs: {
          any: [
            { DAOId: { ne: null } }
          ]
        }
      },
      select: ['ProjectId'],
      expand: {
        MitigationEmissionsData: {
          filter: {
            and: [
              { CO2: { gt: 0 } },
              { Year: year }
            ]
          },
          select: ['CO2', 'Year']
        },
        ProjectDAOs: {
          select: ['DAOId']
        }
      }
    })

    try {
      let res = await fetch(ccrdBaseURL + `Projects${query}`)
      res = await res.json()

      if (res.value) {

        //Extract filtered GoalIDs
        let filteredIDs = data.map(g => g.Id)

        //Filter Project data on DOA
        let filteredProjects = res.value.filter(p => p.ProjectDAOs.filter(d => filteredIDs.includes(d.DAOId)).length > 0)

        //Sum CO2 values
        let totalCO2Reductions = 0
        filteredProjects.forEach(p => {
          p.MitigationEmissionsData.forEach(e => {
            totalCO2Reductions = totalCO2Reductions + e.CO2
          })
        })

        if(totalCO2Reductions > 0){
          this.setState({ totalCO2Reductions })
        }
      }
    }
    catch (ex) {
      console.error(ex)
    }
  }

  render() {

    let { totalCO2Reductions } = this.state

    return (
      <div className="border-light-radius light-bg h-100 text-center d-flex align-items-center">
        <div className="pl-2 pr-2 pt-3 pb-3 m-auto">
        <img
          src={ghg_reduction}
          className="pb-3"
          style={{height:'55px'}}
        />
        <h6 className="pt-3 pb-3">
          Projected reduction in GHG emissions from projects
        </h6>
        <h5>
          {totalCO2Reductions} Tons
        </h5>
      </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GHGReductionIGFX)