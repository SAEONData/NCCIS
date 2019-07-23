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
import IconList from '../../Iconlist/index.jsx';
import About from './../About.jsx'
// import Carousel from './Carousel.jsx'

// Images
import home_map_1 from '../../../../Images/Maps/home/1.gif'
import home_map_2 from '../../../../Images/Maps/home/2.gif'
import home_map_3 from '../../../../Images/Maps/home/3.gif'
import home_map_4 from '../../../../Images/Maps/home/4.gif'
import home_map_5 from '../../../../Images/Maps/home/5.gif'


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
  }

  componentDidMount() {
    this.props.updateNav(location.hash)

    //Get Goal data for info-graphics
    this.getGoalDataUnfiltered()

    //Apply default filtering
    this.handleFilterChange(true)
  }

  componentDidUpdate() {
    //Apply filtering
    this.handleFilterChange(false)
  }

  handleFilterChange(autoSelect = false) {

    let { filterRegion, filterSector, filterGoal, filterYear, filterInstitution, prevFilters } = this.state
    let getInstitutions = false
    let getTrafficLightData = false

    if (prevFilters.filterRegion !== filterRegion) {
      getInstitutions = true
      getTrafficLightData = true
    }
    if (prevFilters.filterSector !== filterSector) {
      getInstitutions = true
      getTrafficLightData = true
    }
    if (prevFilters.filterGoal !== filterGoal) {
      //will be used for map
    }
    if (prevFilters.filterYear !== filterYear) {
      getTrafficLightData = true
    }
    if (prevFilters.filterInstitution !== filterInstitution) {
      getTrafficLightData = true
    }

    if (getInstitutions === true || getTrafficLightData === true || autoSelect === true) {

      //update state
      this.setState({ prevFilters: { filterRegion, filterSector, filterGoal, filterYear, filterInstitution } },

        () => {
          let { filterRegion, filterSector, filterInstitution } = this.state

          //Fetch Institutions
          if (getInstitutions === true || autoSelect === true) {
            this.getInstitutions(filterRegion, filterSector, filterInstitution)
          }

          //Fetch Goal data
          if (getTrafficLightData === true || autoSelect === true) {
            this.getGoalData(filterRegion, filterSector, filterGoal, filterYear, filterInstitution)
          }

          //Fetch Regions data
          this.getFilterRegionParent(filterRegion)
        })
    }
  }

  async getInstitutions(filterRegion, filterSector, filterInstitution) {

    let { setLoading } = this.props
    setLoading(true)

    try {
      let res = await fetch(apiBaseURL +
        `GetFilteredInstitutions(region=${filterRegion},sector=${filterSector})`)

      if (res.ok) {
        res = await res.json() //parse response

        if (res.value) {
          this.setState({
            filterInstitutionOptions: res.value,
            filterInstitution: res.value.filter(x => x === filterInstitution).length > 0 ? filterInstitution : ""
          })
        }
      }
    }
    catch (ex) {
      console.error(ex)
    }
    finally {
      setLoading(false)
    }
  }

  async getGoalData(filterRegion, filterSector, filterGoal, filterYear, filterInstitution) {

    let { setLoading } = this.props
    setLoading(true)

    try {
      let res = await fetch(apiBaseURL + "Goals/Extensions." +
        `GetGoalData(region=${filterRegion},sector=${filterSector},goal=${filterGoal},year=${filterYear},institution='${filterInstitution}')` +
        "?$expand=Questions")

      if (res.ok) {
        res = await res.json() //parse response
        // console.log("RES", res)
        if (res) {
          this.setState({ goalData: res.value })
        }
      }
    }
    catch (ex) {
      console.error(ex)
    }
    finally {
      setLoading(false)
    }
  }

  async getGoalDataUnfiltered() {

    let { setLoading } = this.props
    setLoading(true)

    try {
      let res = await fetch(apiBaseURL + "Goals?$expand=Questions")

      if (res.ok) {
        res = await res.json() //parse response
        // console.log("RES", res)
        if (res) {
          this.setState({ goalDataUnfiltered: res.value })
        }
      }
    }
    catch (ex) {
      console.error(ex)
    }
    finally {
      setLoading(false)
    }
  }

  async getFilterRegionParent(filterRegion) {

    let { setLoading } = this.props
    setLoading(true)

    let parentSet = false
    try {
      let res = await fetch(vmsBaseURL + 'Regions/Flat')

      if (res.ok) {
        res = await res.json() //parse response

        if (res.items) {

          let searchRegions = res.items.filter(r => r.id == filterRegion)
          if (searchRegions.length > 0) {

            let searchPK = searchRegions[0].additionalData.filter(a => a.key === "ParentId")
            if (searchPK.length > 0 && !isNaN(searchPK[0].value)) {

              parentSet = true
              this.setState({
                filterRegionParent: parseInt(searchPK[0].value)
              })
            }
          }
        }
      }
    }
    catch (ex) {
      console.error(ex)
    }
    finally {

      if (parentSet === false) {
        this.setState({
          filterRegionParent: parseInt(filterRegion)
        })
      }

      setLoading(false)
    }
  }

  render() {

    let { filterYear, goalDataUnfiltered } = this.state

    return (
      <>

       <section className="ea-content">
          <div className="container-fluid mt-4">
          <div className="row d-sm-none d-md-none d-lg-none">
            <div className="col-6"><h5>Actions</h5></div>
            <div className="col-6">
              <IconList></IconList>
            </div>
          </div>
          <Row>
          <Col md="auto"><button type="button" className="btn btn-success btn-lg" onClick={() => { location = "http://app01.saeon.ac.za/nccrdtestsite/#/" }}>
            <em className="fa fa-plus mr-1"></em> Submit a climate change response project</button></Col>
          <Col md="auto"><button type="button" className="btn btn-success btn-lg" onClick={() => { location = "http://app01.saeon.ac.za/nccrdtestsite/#/" }}>
            <em className="fa fa-plus mr-1"></em> Design a climate change plan</button></Col>
          <Col md="auto"><button type="button" className="btn btn-success btn-lg" onClick={() => { location = "http://app01.saeon.ac.za/ndaotestsite/#/" }}>
            <em className="fa fa-plus mr-1"></em> Evaluate a climate change plan</button></Col>
          <Col md="auto"><button type="button" className="btn btn-disabled btn-lg" disabled>
            <em className="fa fa-plus mr-1"></em> Review Report</button></Col>
          </Row>
          <hr className="hr-thin" />
          </div>
          </section>
          
          {/* <Carousel /> */}
       

        

        <section className="ea-content">
          <div className="container-fluid mt-4">
          <Row className="home-map">
            <div className="col-3 pb-1 text-center">
              <div className="round-edge green-bg pl-3 pr-3 pt-4 ml-n2 h-100 d-flex align-items-start flex-column">
                <h4 className="mt-4 mb-5">Monitoring and Evaluation of Climate Change Adaptation and Mitigation</h4>
                <p className="mt-3">The CCIS is part of the national effort to track South Africa's overall transition to a low carbon and climate resilient economy by offering a series of decision support tools to inform policy and decision-making.</p>
                <p>The system monitors and evaluates climate change drivers, events, links to national objectives, targets and strategies in respect of climate change mitigation and adaptation monitoring and assessment of actions taken by stakeholders.</p>
              </div>
            </div>
            <div className="col-9">
                <iframe src="http://ulwazi.saeon.ac.za:8000/" class="ea-map-frame round-edge" /> 
            </div>
          </Row>
          <hr className="hr-thin" />
          </div>
        </section>

        

       
          <section className="mt-4 mb-4 ea-content">
            <div className="container-fluid">
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
          </section>

          <section className="ea-home-maps ea-content light-bg pt-5 pb-5">
            <div className="container-fluid">
            <Row>
              <Col>
                <a className="border-light-radius d-block text-dark">
                <img src={home_map_1} />
                <h5>Air Quality</h5></a>
              </Col>
              <Col>
                <a className="border-light-radius d-block text-dark">
                <img src={home_map_2} />
                <h5>Historical Climate Trends</h5></a>
              </Col>
              <Col>
                <a className="border-light-radius d-block text-dark">
                <img src={home_map_3} />
                <h5>Disasterous Events</h5></a>
              </Col>
              <Col>
                <a className="border-light-radius d-block text-dark">
                <img src={home_map_4} />
                <h5>Climate Change Projections</h5></a>
              </Col>
              <Col>
                <a className="border-light-radius d-block text-dark">
                <img src={home_map_5} />
                <h5>Impacts</h5></a>
              </Col>
              
              
            </Row>
            </div>
          </section>


      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
