'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'mdbreact'
import { apiBaseURL, vmsBaseURL } from '../../../../js/config/serviceURLs.js'
import FundingIGFX from './InfoGraphics/FundingIGFX.jsx'
import PlansIGFX from './InfoGraphics/PlansIGFX.jsx'
import GovernmentsIGFX from './InfoGraphics/GovernmentsIGFX.jsx'
import GHGReductionIGFX from './InfoGraphics/GHGReductionIGFX.jsx'
import SectorsIGFX from './InfoGraphics/SectorsIGFX.jsx'
import About from './../About.jsx'
import Carousel from './Carousel.jsx'

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNav: payload => {
      dispatch({ type: "NAV", payload })
    },
    setLoading: payload => {
      dispatch({ type: "SET_LOADING", payload })
    }
  }
}

class Home extends React.Component {

  constructor(props) {
    super(props);

    let filterRegion = 0
    let filterRegionParent = 0
    let filterSector = 0
    let filterGoal = 1
    let filterYear = (new Date()).getFullYear()
    let filterInstitution = ""

    this.state = {
      infoSection: false,
      filterRegion,
      filterRegionParent,
      filterSector,
      filterGoal,
      filterYear,
      filterInstitution,
      filterInstitutionOptions: [],
      goalData: [],
      goalDataUnfiltered: [],
      prevFilters: { filterRegion, filterSector, filterGoal, filterYear, filterInstitution },
      trafficLightFull: false,
      mapFullView: false
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  // componentDidMount() {
  //   this.props.updateNav(location.hash)

  //   //Get Goal data for info-graphics
  //   this.getGoalDataUnfiltered()

  //   //Apply default filtering
  //   this.handleFilterChange(true)
  // }

  // componentDidUpdate() {
  //   //Apply filtering
  //   this.handleFilterChange(false)
  // }

  // handleFilterChange(autoSelect = false) {

  //   let { filterRegion, filterSector, filterGoal, filterYear, filterInstitution, prevFilters } = this.state
  //   let getInstitutions = false
  //   let getTrafficLightData = false

  //   if (prevFilters.filterRegion !== filterRegion) {
  //     getInstitutions = true
  //     getTrafficLightData = true
  //   }
  //   if (prevFilters.filterSector !== filterSector) {
  //     getInstitutions = true
  //     getTrafficLightData = true
  //   }
  //   if (prevFilters.filterGoal !== filterGoal) {
  //     //will be used for map
  //   }
  //   if (prevFilters.filterYear !== filterYear) {
  //     getTrafficLightData = true
  //   }
  //   if (prevFilters.filterInstitution !== filterInstitution) {
  //     getTrafficLightData = true
  //   }

  //   if (getInstitutions === true || getTrafficLightData === true || autoSelect === true) {

  //     //update state
  //     this.setState({ prevFilters: { filterRegion, filterSector, filterGoal, filterYear, filterInstitution } },

  //       () => {
  //         let { filterRegion, filterSector, filterInstitution } = this.state

  //         //Fetch Institutions
  //         if (getInstitutions === true || autoSelect === true) {
  //           this.getInstitutions(filterRegion, filterSector, filterInstitution)
  //         }

  //         //Fetch Goal data
  //         if (getTrafficLightData === true || autoSelect === true) {
  //           this.getGoalData(filterRegion, filterSector, filterGoal, filterYear, filterInstitution)
  //         }

  //         //Fetch Regions data
  //         this.getFilterRegionParent(filterRegion)
  //       })
  //   }
  // }

  // async getInstitutions(filterRegion, filterSector, filterInstitution) {

  //   let { setLoading } = this.props
  //   setLoading(true)

  //   try {
  //     let res = await fetch(apiBaseURL +
  //       `GetFilteredInstitutions(region=${filterRegion},sector=${filterSector})`)

  //     if (res.ok) {
  //       res = await res.json() //parse response

  //       if (res.value) {
  //         this.setState({
  //           filterInstitutionOptions: res.value,
  //           filterInstitution: res.value.filter(x => x === filterInstitution).length > 0 ? filterInstitution : ""
  //         })
  //       }
  //     }
  //   }
  //   catch (ex) {
  //     console.error(ex)
  //   }
  //   finally {
  //     setLoading(false)
  //   }
  // }

  // async getGoalData(filterRegion, filterSector, filterGoal, filterYear, filterInstitution) {

  //   let { setLoading } = this.props
  //   setLoading(true)

  //   try {
  //     let res = await fetch(apiBaseURL + "Goals/Extensions." +
  //       `GetGoalData(region=${filterRegion},sector=${filterSector},goal=${filterGoal},year=${filterYear},institution='${filterInstitution}')` +
  //       "?$expand=Questions")

  //     if (res.ok) {
  //       res = await res.json() //parse response
  //       // console.log("RES", res)
  //       if (res) {
  //         this.setState({ goalData: res.value })
  //       }
  //     }
  //   }
  //   catch (ex) {
  //     console.error(ex)
  //   }
  //   finally {
  //     setLoading(false)
  //   }
  // }

  // async getGoalDataUnfiltered() {

  //   let { setLoading } = this.props
  //   setLoading(true)

  //   try {
  //     let res = await fetch(apiBaseURL + "Goals?$expand=Questions")

  //     if (res.ok) {
  //       res = await res.json() //parse response
  //       // console.log("RES", res)
  //       if (res) {
  //         this.setState({ goalDataUnfiltered: res.value })
  //       }
  //     }
  //   }
  //   catch (ex) {
  //     console.error(ex)
  //   }
  //   finally {
  //     setLoading(false)
  //   }
  // }

  // async getFilterRegionParent(filterRegion) {

  //   let { setLoading } = this.props
  //   setLoading(true)

  //   let parentSet = false
  //   try {
  //     let res = await fetch(vmsBaseURL + 'Regions/Flat')

  //     if (res.ok) {
  //       res = await res.json() //parse response

  //       if (res.items) {

  //         let searchRegions = res.items.filter(r => r.id == filterRegion)
  //         if (searchRegions.length > 0) {

  //           let searchPK = searchRegions[0].additionalData.filter(a => a.key === "ParentId")
  //           if (searchPK.length > 0 && !isNaN(searchPK[0].value)) {

  //             parentSet = true
  //             this.setState({
  //               filterRegionParent: parseInt(searchPK[0].value)
  //             })
  //           }
  //         }
  //       }
  //     }
  //   }
  //   catch (ex) {
  //     console.error(ex)
  //   }
  //   finally {

  //     if (parentSet === false) {
  //       this.setState({
  //         filterRegionParent: parseInt(filterRegion)
  //       })
  //     }

  //     setLoading(false)
  //   }
  // }

  render() {

    let { filterYear, goalDataUnfiltered } = this.state

    return (
      <>

        <div style={{ margin: "-15px -15px 0 -15px", position: 'relative', zIndex: 2 }}>
          <Carousel />
        </div>

        <div style={{ padding: "0px 15px 15px 15px", borderRadius: "10px" }}>
          <div style={{
            marginTop: "15px",
            marginBottom: "15px",
            paddingTop: "15px",
            borderTop: "1px solid gainsboro",
          }}>
            <Row>
              <Col>
                <FundingIGFX data={goalDataUnfiltered} year={filterYear} />
              </Col>
              <Col>
                <PlansIGFX data={goalDataUnfiltered} year={filterYear} />
              </Col>
              <Col>
                <GovernmentsIGFX data={goalDataUnfiltered} year={filterYear} />
              </Col>
              <Col>
                <GHGReductionIGFX data={goalDataUnfiltered} year={filterYear} />
              </Col>
              <Col>
                <SectorsIGFX data={goalDataUnfiltered} year={filterYear} />
              </Col>
            </Row>
          </div>

          <div style={{
            marginTop: "15px",
            marginBottom: "15px",
            paddingTop: "15px",
            paddingBottom: "15px",
            borderTop: "1px solid gainsboro",
            borderBottom: "1px solid gainsboro"
          }}>
            <Row>
              <Col>
                <About />
              </Col>
            </Row>
          </div>

        </div>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
