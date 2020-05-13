'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Card, CardBody } from 'mdbreact'
import DataWeather from '../../../images/data/weather.jpg'
import DataSAWS from '../../../images/data/saws.jpg'
import DataCSIR from '../../../images/data/csir.jpg'
import DataCSAG from '../../../images/data/csag.jpg'
import DataAgrohydrological from  '../../../images/data/agrohydrological.jpg'
import DataDisasters from  '../../../images/data/disasters.jpg'
import DataAgriculture from  '../../../images/data/agriculture.jpg'
import DataCoastal from  '../../../images/data/coastal.jpg'
import DataHealth from  '../../../images/data/health.jpg'
import DataBiodiversity from  '../../../images/data/biodiversity.jpg'
import DataSettlements from  '../../../images/data/settlements.jpg'
import DataWater from  '../../../images/data/water.jpg'
import DataDemography from  '../../../images/data/demography.jpg'
import DataEnergy from  '../../../images/data/energy.jpg'
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

class DataDownloadContent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    this.props.updateNav(location.hash)
    return (
      <>
          
          <h2 class="mt-5 mb-3">Climate Data:</h2>
            <div className="row dataDownTable">
              <div className="col-md-4">
                <div className="dataDownTableInner h-100">
                <h5>Open search:</h5>
                <p className="pt-4 pl-3 pr-3">Enter in the input below to enter an open search:</p>
                  <form className="input-group pb-3 pl-3 pr-3 pt-3" id="sasdisearch">
                    <input type="text" className="form-control sasdisearch" placeholder="Search Term" />
                    <div className="input-group-append">
                    <button className="btn btn-green" type="submit"><em className="fa fa-search"></em></button>
                    </div>
                  </form> 
                </div>
              </div>
              <div className="col-md-4">
                <div className="dataDownTableInner">
                <h5>Weather:</h5>
                <img src={DataWeather} />
                <a href="http://www.sasdi.net/atlas.aspx?uid=a3625478991a9714c6fc00335f9dd8c1&ro=true&control=hide&noframe=true&tab=Analysis" target="_blank" className="btn btn-success">Go to Data <em className="fa fa-database ml-2"></em></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="dataDownTableInner">
                <h5>Climate Projections from CSAG</h5>
                <img src={DataCSAG} />
                <a href="http://www.sasdi.net/search.aspx?guid=3444145e-0213-9a66-ca49-2a20de03e1b9&control=hide&noframe=true&tab=Results" target="_blank" className="btn btn-success">Go to Data <em className="fa fa-database ml-2"></em></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="dataDownTableInner">
                <h5>Climate Projections from SAWS:</h5>
                <img src={DataSAWS} />
                <a href="http://www.sasdi.net/search.aspx?guid=4787c3db-12ac-3350-5d75-1b829e1b1504&control=hide&noframe=true&tab=Results" target="_blank" className="btn btn-success">Go to Data <em className="fa fa-database ml-2"></em></a>
                <a href="/#/data-saws-products" className="btn btn-success">Products and services <em className="fa fa-database ml-2"></em></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="dataDownTableInner">
                <h5>Climate Projections from CSIR</h5>
                <img src={DataCSIR} />
                <a href="http://www.sasdi.net/search.aspx?guid=16625c5d-9112-91bc-e632-8f7408d15f3d&control=hide&noframe=true&tab=Analysis" target="_blank" className="btn btn-success">Go to Data <em className="fa fa-database ml-2"></em></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="dataDownTableInner">
                <h5>Agrohydrological Atlas</h5>
                <img src={DataAgrohydrological} />
                <a href="http://www.sasdi.net/search.aspx?guid=5e8a387e-32f7-dac4-1429-133397a9016d&control=hide&noframe=true&tab=Results" target="_blank" className="btn btn-success">Go to Data <em className="fa fa-database ml-2"></em></a>
                </div>
              </div>

            </div>
            <h2 class="mt-5 mb-3">Further Data Collections:</h2>
            

          <section className="pt-5 pb-5">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-3">
                  <div className="dataDownTableInner">
                  <h5>Climate Change Projections</h5>
                  <img src={DataSAWS} />
                  <a href="http://www.sasdi.net/search.aspx?guid=4787c3db-12ac-3350-5d75-1b829e1b1504&control=hide&noframe=true&tab=Results" target="_blank" className="btn btn-success">Access Data from SAWS <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dataDownTableInner">
                  <h5>Disasters</h5>
                  <img src={DataDisasters} />
                  <a href="http://www.sasdi.net/atlas.aspx?uid=cd6878477758be76cefe7761a1d0a968&ro=true&lat=-28.468610999999594&lon=24.66916700000036&z=5&control=hide&noframe=true&tab=Analysis" target="_blank" className="btn btn-success">Access Data <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dataDownTableInner">
                  <h5>Agriculture and Forestry</h5>
                  <img src={DataAgriculture} />
                  <a href="http://www.sasdi.net/atlas.aspx?uid=93d2b76075a3e7b11bd2ce2bb9a6680d&ro=true&control=hide&noframe=true&tab=Analysis" target="_blank" className="btn btn-success">Access Data <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dataDownTableInner">
                  <h5>Biodiversity</h5>
                  <img src={DataBiodiversity} />
                  <a href="http://www.sasdi.net/search.aspx?guid=4821e616-f786-8e41-fc9a-45ad113b1510&control=hide&noframe=true&tab=Results" target="_blank" className="btn btn-success">Access Data <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-3">
                  <div className="dataDownTableInner">
                  <h5>Demography</h5>
                  <img src={DataDemography} />
                  <a href="http://www.sasdi.net/atlas.aspx?uid=1ae960710c8a7749e33b9bfcc528c611&ro=true&control=hide&noframe=true&tab=Analysis" target="_blank" className="btn btn-success">Access Data <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dataDownTableInner">
                  <h5>Energy</h5>
                  <img src={DataEnergy} />
                  <a href="http://www.sasdi.net/atlas.aspx?uid=52e864404875eee9e1e2cf34996e5abf&ro=true&noframe=true&tab=Results" target="_blank" className="btn btn-success">Access Data <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dataDownTableInner">
                  <h5>Settlements</h5>
                  <img src={DataSettlements} />
                  <a href="https://www.greenbook.co.za/" target="_blank" className="btn btn-success">Access Data <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dataDownTableInner">
                  <h5>Water Resources</h5>
                  <img src={DataWater} />
                  <a href="http://www.sasdi.net/atlas.aspx?uid=6529763ce9983abf43d4192197d775c3&ro=true&control=hide&noframe=true&tab=Analysis" target="_blank" className="btn btn-success">Access Data <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="dataDownTableInner">
                  <h5>Human Health</h5>
                  <img src={DataHealth} className="w-100" />
                  <a href="http://www.letsrespondtoolkit.org/sectors/human-health/air-quality-priority-areas" target="_blank" className="btn btn-success">Air Quality Priority Areas <em className="fa fa-database ml-2"></em></a>
                  <a href="http://www.letsrespondtoolkit.org/sectors/human-health/malaria-risk-map" target="_blank" className="btn btn-success">Malaria Risk Map <em className="fa fa-database ml-2"></em></a>
                  <a href="http://www.sasdi.net/atlas.aspx?uid=f6184c4722433827463b8238cbd1d220&ro=true&control=hide&noframe=true&tab=Results" target="_blank" className="btn btn-success">Environmental and Economic <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dataDownTableInner">
                  <h5>Coastal and Marine</h5>
                  <img src={DataCoastal} className="w-100" />
                  <a href="https://mapservice.environment.gov.za/Coastal%20Viewer/" target="_blank" className="btn btn-success">Coastal Viewer <em className="fa fa-database ml-2"></em></a>
                  <a href="http://www.letsrespondtoolkit.org/sectors/coastal-and-marine/marine-benthic-and-coastal-threat-status" target="_blank" className="btn btn-success">Marine Benthic and Coastal Threat Status <em className="fa fa-database ml-2"></em></a>
                  <a href="http://www.letsrespondtoolkit.org/sectors/coastal-and-marine/coastal-areas-below-5m" target="_blank" className="btn btn-success">Coastal Areas Below 5m <em className="fa fa-database ml-2"></em></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDownloadContent)