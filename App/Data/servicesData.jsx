import React from 'react';
import { MDBDataTable } from 'mdbreact';

const ServicesData = () => {
  const data = {
    columns: [
      {
        label: 'Category',
        field: 'category',
        sort: 'asc',
        width: 150
      },
      {
        label: 'SAWS products and services to inform policy, planning and decision making',
        field: 'sawsproduct',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Data/information required to create products and data source',
        field: 'datarequired',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Presentation of information and dissemination channels/platforms',
        field: 'presentation',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Users/sector',
        field: 'sector',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Usage',
        field: 'usage',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Relevant NFCS pillar',
        field: 'pillar',
        sort: 'asc',
        width: 150
      },
      {
        label: 'View solution',
        field: 'link',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [
      {
        category: "Surface weather observations, forecasts and warnings",
        sawsproduct: [<ol><li>Surface data – measurements of rain, temp, humidity, pressure, wind speed, wind direction</li><li>Historical, real-time and weather forecast/warnings of meteorological variables for the public.</li></ol>],
        datarequired: [<ol><li>A range of meteorological variables at various time intervals, i.e. 5 minute, hourly, daily, monthly, annual</li><li>Climate database, forecast data</li></ol>],
        presentation: [<ol><li>Text, Graphical maps</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Surface weather observations, forecasts and warnings",
        sawsproduct: [<ol><li>Rainfall probability forecasts</li><li>Probability forecast over 14 upcoming days</li></ol>],
        datarequired: [<ol><li>14 day rainfall probabilities  1mm and 14 day maximum temperature changes > 2 degrees</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Text, Graphical maps</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Surface weather observations, forecasts and warnings",
        sawsproduct: [<ol><li>Hazardous  Weather forecast</li><li>Features/precaution depends on the type of hazard</li></ol>],
        datarequired: [<ol><li>Tailored warnings and alerts</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>XML, Text</li><li>SMS/email to clients</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Surface weather observations, forecasts and warnings",
        sawsproduct: [<ol><li>Severe thunderstorms</li><li>Advice on safety precautions to be taken. Listen to the radio or TV for warnings and obey the instructions from disaster management officers.</li></ol>],
        datarequired: [<ol><li>Severe thunderstorms are violent weather phenomena that can be very dangerous. Any thunderstorm can produce any combination of lightning, flash flooding, very strong winds, hail and in some cases tornadoes</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Text, Graphical maps</li><li>Forecasting through Media (Radio and TV)</li></ol>],
        sector: "General public",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Surface weather observations, forecasts and warnings",
        sawsproduct: [<ol><li>Strong damaging winds</li><li>Advice on safety precautions to be taken. Listen to the radio or TV for warnings and obey the instructions from disaster management officers</li></ol>],
        datarequired: [<ol><li>Strong damaging winds also called straight line winds that often come from a thunderstorm. The email communication is accompanied by xml files</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Text, graphical maps</li><li>Forecasting through Media (Radio & TV)</li></ol>],
        sector: "General public",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Drought monitoring desk</li><li>Summary of drought conditions</li></ol>],
        datarequired: [<ol><li>Maps of meteorological drought risk using the standardized precipitation index SPI.</li><li>Long-term rainfall data</li></ol>],
        presentation: [<ol><li>Text, graphical maps, pdf report</li><li>SAWS website and Climate Service: http://www.weathersa.co.za/Documents/Climate/CLS-CI-Drought%20Monitoring.pdf</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>A-Pan Evaporation data</li><li>Annual and seasonal totals of pan evaporation. The trend maps are a useful way to compare how pan evaporation has changed in different regions.</li></ol>],
        datarequired: [<ol><li>A small number of stations as well as a limited number of years</li><li>Climate data</li></ol>],
        presentation: [<ol><li>Graphical maps, data sets</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "Agriculture / water",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Enthalpy livestock heat stress</li><li>Enthalpy is computed from meteorological measurements of dry temperature, air pressure and relative humidity</li></ol>],
        datarequired: [<ol><li>Enthalpy expresses the atmospheric heat content by combining into a single variable air temperature and atmospheric moisture.</li><li>Climate data</li></ol>],
        presentation: [<ol><li>Text, graphical maps</li><li>Research</li></ol>],
        sector: "Agriculture",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Evapotranspiration (ETo)</li><li>Spatial maps available at hourly resolution</li></ol>],
        datarequired: [<ol><li>Gridded evapotranspiration derived from Numerical Weather Prediction (NWP) model weather variables output (air temperature, relative humidity, wind speed and solar irradiance).</li><li>Model data</li></ol>],
        presentation: [<ol><li>Text, graphical maps</li><li>Research</li></ol>],
        sector: "Agriculture",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Fire Danger Index (FDI) (Wet)/ FDI (Dry)</li><li>The FRDI uses 5 categories to rate the fire danger represented by colour codes. Each danger rating is accompanied by a precaution statement. An estimation of the magnitude, timing and duration using models and predictions.</li></ol>],
        datarequired: [<ol><li>The FDI (Wet) rating is based on the Lowveld Fire Danger Index formula that uses the last 21 days rainfall (FDI-W). With FDI (Dry) no rainfall is included in the calculation.</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Pdf in tabular form, graphical maps</li><li>Forecasting: http://www.weathersa.co.za/home/fireindex</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Frost Forecast</li><li>Deposit of soft white ice crystals or frozen dew drops on objects near the ground; formed when the surface temperature falls below freezing point. Frost can have a devastating effects on vegetation and crops</li></ol>],
        datarequired: [<ol><li>Forecast of the deposition of frost</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Text, graphical maps</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Greenhouse gases (GHG)</li><li>Carbon dioxide (CO2), Methane (CH4), Carbon monoxide (CO),  Nitrous oxide (N2O), Ozone (O3 (ground and total column), Gaseous Elemental Mercury (GEM), Aerosols, Radon (isotopes)</li></ol>],
        datarequired: [<ol><li>Measurements and sustained observations of greenhouse gas (GHG) datasets for Climate Change studies. Cape Point Global Atmosphere Watch (GAW) Station forms part of the World Meteorological Organizations (WMO) global network of 31 contributing stations that provide long-term observation and analysis of atmospheric chemical composition changes and associated meteorological, geophysical and oceanographic factors in support of international conventions and policy making.</li><li>Trace gas measurements</li></ol>],
        presentation: [<ol><li>Text</li><li>Research</li></ol>],
        sector: "Research",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Heat stress/thermal comfort observations</li><li>Heat stress measurements include: BlackGlobe, WetGlobe, DewPoint. Data available in: <br/>1 minute, Hourly, Daily <br/> Heat stress risk categories are grouped into normal (under 26°C), caution (27-31°C), extreme caution (32-38°C), danger (39-50°C) and extreme danger (greater than 51°C). Feel like temperature accompanied by 11 keys raging from frigidly cold to extremely hot with proper descriptions of each.</li></ol>],
        datarequired: [<ol><li>Apparent temperature is calculated in accordance with the Australian Bureau of Meteorology (BoM). This calculation uses a combination of the following: - Dry Bulb Temperature, Vapour pressure Humidity and Wind Speed.</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Text, colour-coded tables</li><li>Research</li></ol>],
        sector: "Health, general public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Lightning strike detectio</li><li>Text data available on near real-time, spatial maps available every 3 hourly and the next day’s maps.</li></ol>],
        datarequired: [<ol><li>Near Real-time lightning strike detection from the network of 25 sensors across South Africa.</li><li>Data from lightning detection network, forecasting data</li></ol>],
        presentation: [<ol><li>Text, spatial maps</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "Insurance, Eskom",
        usage: "Commercial",
        pillar: "2, 3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Lightning climatology</li><li>Yearly spatial maps e.g. Lightning ground flash density, 12 year averages available since 2006</li></ol>],
        datarequired: [<ol><li>Lightning climatology based on historic lightning data. Gives the indication of the most lightning prone areas within the country.</li><li>Data from lightning detection network</li></ol>],
        presentation: [<ol><li>Text, spatial maps</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "Power utilities and municipalities",
        usage: "Commercial",
        pillar: "2, 3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Observational weather data (SYNOP data)</li><li>Processed data for observation platforms and programmes</li></ol>],
        datarequired: [<ol><li>Hourly observational weather data from Southern African installations (as distributed through the Global Telecommunication Systems (GTS))</li><li>Real-time observational data</li></ol>],
        presentation: [<ol><li>Observational codes</li><li>Climate Service (historical): info4@weathersa.co.za /GTS (real-time)</li></ol>],
        sector: "Aviation",
        usage: "Commercial",
        pillar: "2, 3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Satellite data</li><li>Availability of high-resolution imagery allowing for observations for places around the globe and the planning of activities related to weather phenomenon</li></ol>],
        datarequired: [<ol><li>Data supplied from EUMETSAT satellites on observations related to the atmosphere, oceans and land surfaces</li><li>Satellite data</li></ol>],
        presentation: [<ol><li>Text/NetCDF</li><li>Research/EUMETSAT</li></ol>],
        sector: "Research/general public",
        usage: "Commercial",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Solar Radiation Data</li><li>Data available in 1 minute data, hour data, daily data, monthly</li></ol>],
        datarequired: [<ol><li>Solar radiation data from 13 stations across South Africa. The following components are measured:  Global Horizontal Irradiance, Diffuse Horizontal Irradiance, Direct Normal Irradiance, Longwave Radiation</li><li>Radiation data</li></ol>],
        presentation: [<ol><li>Text</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "Research",
        usage: "Commercial",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Solar Radiation Atlas</li><li>Global horizontal Irradiance in kWh/m2 – Mainly used by the PV industry, Direct Normal Irradiance in kWh/m2 – for the CSP industry, PV energy yield of global irradiation on optimally inclined plane in kWh/m2 – PV industry, Optimum inclination angle (in degrees) for installations of PV panels.</li></ol>],
        datarequired: [<ol><li>Regional solar resource data. The atlas was developed using a combination of ground observation data and satellite data.</li><li>Radiation data, satellite data</li></ol>],
        presentation: [<ol><li>Spatial maps</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "Research/general public",
        usage: "Commercial",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Upper-air data</li><li>Establishment of dominant (prevailing) weather patterns</li></ol>],
        datarequired: [<ol><li>Data measurements at various levels above the surface undertaken at 10 stations across South Africa (including the islands).</li><li>Upper-air data</li></ol>],
        presentation: [<ol><li>Text</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "Research",
        usage: "Commercial",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>UVA and UVB</li><li>UV index values and relevant exposure categories are linked to mitigation strategies</li></ol>],
        datarequired: [<ol><li>Forecasts of expected risk of exposure to the sun</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Text</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>UVI</li><li>Five colour coded exposure categories The higher the UVI, the greater the potential for damage to the skin and eye, and the less time it takes for harm to occur.    The UVI is an important vehicle to alert people about the need to use sun protection.</li></ol>],
        datarequired: [<ol><li>The UVI is a unitless measure of the level of UV radiation.</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Text and Graphical maps</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Visual observations – clouds, hail, dew, frost</li><li>N/A</li></ol>],
        datarequired: [<ol><li>Average number of days for each parameter provided in-line with client specific requirements.</li><li>Climate observational data</li></ol>],
        presentation: [<ol><li>Text, maps</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "General public / Research",
        usage: "Commercial",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Specialized data & products",
        sawsproduct: [<ol><li>Wind gusts</li><li>Forecast grids</li></ol>],
        datarequired: [<ol><li>Rapid fluctuations in the wind speed with a variation of 10 knots or more between peaks and lulls. The speed of the gust will be the maximum instantaneous wind speed.</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Text, graphical maps</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "General public, aviation, disaster management",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Aeronautical Met Outlook</li><li>Forecast information</li></ol>],
        datarequired: [<ol><li>Forecast information</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Email, ftp,xml,graphics</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "Aviation",
        usage: "Commercial",
        pillar: "2, 3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Specialized aviation forecasts</li><li>Forecast information</li></ol>],
        datarequired: [<ol><li>Coded forecaster inputted information</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Email, ftp,xml,graphics</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "Aviation",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Manning of joint operations centre</li><li>Full spectrum of weather-related services</li></ol>],
        datarequired: [<ol><li>Advisory services regarding weather and climate</li><li>Forecast and real-time observational data</li></ol>],
        presentation: [<ol><li>Interaction</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "Aviation",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Climate Change Scenarios</li><li>Downscaled future climate scenarios for regions, provinces and municipalities</li></ol>],
        datarequired: [<ol><li>Projections of future weather to assess future vulnerability to climate change</li><li>Model projections</li></ol>],
        presentation: [<ol><li>Various</li><li>Research</li></ol>],
        sector: "Research / industry / general public",
        usage: "Commercial",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Consultancy Services: Climate change Adaptation, Air quality services, CC Mitigation, Modelling, Training and capacity development (NEPAD & LDARD), Expert Advice</li><li>Provision of sector specific expert knowledge on specialised aspects of weather and climate</li></ol>],
        datarequired: [<ol><li>Advisory and consulting service</li><li>Various data needs</li></ol>],
        presentation: [<ol><li>Various</li><li>Expertise dependant</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "2, 3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Customised specific forecasts</li><li>Tailor-made site-specific forecasts for the following time frames at various resolutions: 2 day, 7 day, 14 day, seasonal climate outlooks</li></ol>],
        datarequired: [<ol><li>Tailored forecasts against specific criteria to enable improved planning and risk decision making in all sectors</li><li>Forecast and seasonal prediction data</li></ol>],
        presentation: [<ol><li>Various</li><li>Forecasting/Research: +27 12 367 6041</li></ol>],
        sector: "General public / all sectors",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Lightning products</li><li>Historical data issued according to client specific requirements, Lightning Verification Reports, Lightning Density Maps (updated annually), Lightning Risk Maps (updated annually), Lightning Density Point Values (updated annually), Daily Lightning Stroke Map</li></ol>],
        datarequired: [<ol><li>Provision of historical data in various formats</li><li>Historical lightning</li></ol>],
        presentation: [<ol><li>Various</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "General public / all sectors",
        usage: "Commercial",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Precipitation Concentration Index (PCI)</li><li>Three precipitation indices have been generated these are precipitation concentration index, precipitation concentration period and precipitation concentration degree, at different time scales.</li><li>Drought propagation index</li><li>Streamflow</li></ol>],
        datarequired: [<ol><li>Rainfall</li><li>Minimum and Maximum Temperature</li><li>Streamflow</li></ol>],
        presentation: [<ol><li>Maps</li></ol>],
        sector: "General public / all sectors",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Product development using NWP models</li><li>Tailored products for client specified requirements such as Frost Forecasts for Agriculture Fog Forecasts for Aviation Heat Stress Index for Manufacturing</li></ol>],
        datarequired: [<ol><li>Observation</li><li>NWP model data</li></ol>],
        presentation: [<ol><li>Various</li><li>Research</li></ol>],
        sector: "General public / all sectors",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Radar products</li><li>Historical data issued according to site, date and area as per client requirements, also hail reports, hail mass aloft</li></ol>],
        datarequired: [<ol><li>NWP model data</li><li>Observation </li><li>Satellite</li><li>Radar data</li></ol>],
        presentation: [<ol><li>Various</li><li>Research through Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "General public / all sectors",
        usage: "Commercial",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Rainfall characteristics</li><li>Provides certain number of days of exceeding a particular threshold (above or below)</li></ol>],
        datarequired: [<ol><li>N/A</li><li>Historical climate data</li></ol>],
        presentation: [<ol><li>Text</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "All sectors",
        usage: "Commercial",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Rainfall products</li><li>Products: Convection Rain Rate (CRR): real-time satellite-based rainfall estimation adapted from the Nowcasting Satellite Application Facility (SAF), Hydro Estimator (HE): real-time satellite and model-based rainfall estimation, Rapidly Developing Thunderstorm (RDT): monitoring of the growing / decaying phases and movement of thunderstorms, Severe thunderstorm</li></ol>],
        datarequired: [<ol><li>N/A</li><li>Real time weather, radar and satellite data</li></ol>],
        presentation: [<ol><li>Various</li><li>Dedicated web service: +27 12 367 6041</li></ol>],
        sector: "Aviation / Insurance / general public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Sector specific products: Historical Agriculture – Heat and Chill Units</li><li>Spatial-temporal distribution of estimated growth and development of plants and insects during the growing season</li></ol>],
        datarequired: [<ol><li>Temperature</li></ol>],
        presentation: [<ol><li>Graphs, tables and maps</li><li>Research through request from Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "Agriculture",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Severe weather warnings</li><li>Radar reflectivity indicating the location and movement of convective clouds, Radar rainfall product: real-time update of rainfall, Hall mass aloft: provides an indication of the occurrence of hail within a thunderstorm (location and intensity), Wind gusts</li></ol>],
        datarequired: [<ol><li>Various</li><li>Radar</li></ol>],
        presentation: [<ol><li>Various</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "All sectors / general public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Aeronautical climatological summary</li><li>Statistical Report on main airports for the Aviation Sector.</li></ol>],
        datarequired: [<ol><li>Aviation-relevant climate information in tabular format</li><li>Climate data</li></ol>],
        presentation: [<ol><li>Pdf report</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "Aviation",
        usage: "Public",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Disaster Management Advisory forums</li><li>Advisory services regarding weather and climate</li></ol>],
        datarequired: [<ol><li>Forecaster inputs</li><li>Forecast/seasonal prediction/observation data</li></ol>],
        presentation: [<ol><li>Interaction</li><li>Attendance of forums (NDMC)</li></ol>],
        sector: "Disaster management",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Climate Change Reference Atlas</li><li>Atlas in pdf format. Information about CC and its national, regional and local impacts. Data behind the Atlas includes climate model data</li></ol>],
        datarequired: [<ol><li>Provision of accessible climate basis for national and local scale climate change impacts, adaptation and response planning</li><li>Climate model data</li></ol>],
        presentation: [<ol><li>Pdf</li><li>SAWS website: http://www.weathersa.co.za/home/climatechangeatlas</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Global Producing Centre</li><li>Provision of global seasonal climate forecasts</li></ol>],
        datarequired: [<ol><li>Seasonal climate forecasts on a global scale</li><li>Climate model data</li></ol>],
        presentation: [<ol><li>Lead centre of GPC-MMS</li><li>Maps</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Solar energy atlas (make sure that it is public good)</li><li>Long-term mean of GHI and DNI maps</li></ol>],
        datarequired: [<ol><li>Maps of long-term mean of GHI and DNI</li><li>Product is static</li></ol>],
        presentation: [<ol><li>Maps</li><li>Research</li></ol>],
        sector: "General public, energy",
        usage: "Public",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Weather forecasts</li><li>N/A</li></ol>],
        datarequired: [<ol><li>Next day forecast: Minimum and maximum temperatures, rain, weather conditions, wind and wind speed; Herald forecast (3 days forecast), map with weather condition for the day, sun rise and sun set. Tides, rain probability; Radio forecast</li><li>Forecast data</li></ol>],
        presentation: [<ol><li>Various</li><li>Various incl. print media, tv, radio, web, social media; +27 12 367 6041</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Seasonal outlooks</li><li>3-month outlook of temperature (max and min) and rainfall</li></ol>],
        datarequired: [<ol><li>Monthly bulletin of 3-month outlook of temperature (max and min) and rainfall</li><li>Seasonal modelling data</li></ol>],
        presentation: [<ol><li>Pdf report</li><li>SAWS website: http://www.weathersa.co.za/images/data/longrange/gfcsa/scw.pdf</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Air Quality Data</li><li>Air quality parameters includes NO2, SO2, CO, H2S and O3 and particular matter (PM2.5 and PM10).</li></ol>],
        datarequired: [<ol><li>Data of trace gases and particular matter</li><li>Trace gas measurements</li></ol>],
        presentation: [<ol><li>Various</li><li>Air Quality through Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Climate data</li><li>Data as provided for Industry can also be provided for educational purposes</li></ol>],
        datarequired: [<ol><li>Various</li><li>Historical climate data</li></ol>],
        presentation: [<ol><li>Various</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Lightning products</li><li>Lightning Threat Index (LTI) utilising model data to forecast the occurrence of lightning, Lightning Climatology: based on historic lightning data we can provide the information on high risk areas</li></ol>],
        datarequired: [<ol><li>Various</li><li>Historical lightning data</li></ol>],
        presentation: [<ol><li>Various</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Nowcasting warning and notification service</li><li>1 to 5 day forecast of severe weather including storm tracking, and relevant notifications</li></ol>],
        datarequired: [<ol><li>N/A</li><li>Radar, satellite, model data</li></ol>],
        presentation: [<ol><li>Various</li><li>Various incl. print media, tv, radio, web, social media; +27 12 367 6041</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Rainfall products</li><li>Convection Rain Rate (CRR): real-time satellite-based rainfall estimation adapted from the Nowcasting Satellite Application Facility (SAF), Hydro Estimator (HE): real-time satellite and model-based rainfall estimation, Rapidly Developing Thunderstorm (RDT): monitoring of the growing / decaying phases and movement of thunderstorms</li></ol>],
        datarequired: [<ol><li>N/A</li><li>Real-time radar, satellite, observational data</li></ol>],
        presentation: [<ol><li>Various</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Severe Weather Forecasting Demonstration (SWFDP)</li><li>Various severe weather information maps and products</li></ol>],
        datarequired: [<ol><li>Various</li><li>Real-time rainfall</li></ol>],
        presentation: [<ol><li>Various</li><li>SWFDP website; +27 12 367 6041</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Severe Weather Warnings</li><li>Location and movement of convective clouds,  radar rainfall product: real-time update of rainfall, hail mass aloft, gusts</li></ol>],
        datarequired: [<ol><li>Various</li><li>Real time radar and satellite data</li></ol>],
        presentation: [<ol><li>Various</li><li>Forecasting: +27 12 367 6041</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Products and services/industry services",
        sawsproduct: [<ol><li>Statistical Reports</li><li>Historical Stats: District rainfall and provincial rainfall summary</li></ol>],
        datarequired: [<ol><li>Average rainfall for 94 rainfall districts, 9 provinces</li><li>Historical rainfall data</li></ol>],
        presentation: [<ol><li>Various (text, graphs etc)</li><li>Climate Service: info4@weathersa.co.za</li></ol>],
        sector: "General public, climate research",
        usage: "Public",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Weather APPS",
        sawsproduct: [<ol><li>WeatherSMART</li><li>Easy to use application for daily location-based information</li></ol>],
        datarequired: [<ol><li>Location based forecasting information</li><li>Forecast data, radar data</li></ol>],
        presentation: [<ol><li>APP</li><li>APP (iStore, Google Store)</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Weather services support desk",
        sawsproduct: [<ol><li>Weather lines</li><li>Easy access to weather lines for localised weather parameters</li></ol>],
        datarequired: [<ol><li>Telephonic weather enquiries</li><li>Various, mainly forecast and real time observations</li></ol>],
        presentation: [<ol><li>Telephonic</li><li>Telephonic channel to access weather forecasts for specified locations: 083 900 0162, *120*555#, 083 123 0500, *120*7297#</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Web products",
        sawsproduct: [<ol><li>AfricaWeather</li><li>Provision of client specific requirements via a web portal</li></ol>],
        datarequired: [<ol><li>Easy to use application with access control for users in the Construction, Insurance, Mining and Agriculture sectors</li><li>Mainly forecasting data</li></ol>],
        presentation: [<ol><li>Web</li><li>Website: www.africaweather.co.za</li></ol>],
        sector: "General public / all sectors",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Web products",
        sawsproduct: [<ol><li>WeatherSA</li><li>Comprehensive website providing information on products and services</li></ol>],
        datarequired: [<ol><li>Provision of contact information to access channels for data and products</li><li>Various</li></ol>],
        presentation: [<ol><li>Web</li><li>Website: www.weathersa.co.za</li></ol>],
        sector: "General public, all sectors",
        usage: "Public",
        pillar: "2,3",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Rainbows in the Mist: Indigenous Weather Knowledge, Beliefs and Folklore in South Africa",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Daily Weather Bulletin",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Climate Summary of South Africa",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Technical Papers no 22,23,25,26,27,28,29,30,31,21",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Climate of SA WB28: General survey",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Climate of SA  WB36: Extreme values",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "All sectors / research",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "The weather and climate of the extreme south-western Cape",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Tornadoes in South Africa",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public / all sectors",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Climate of SA WB41: Upper-air-statistics",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Climate of SA WS43: Surface Winds",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Climate of SA WS44: Climate Controls",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Climate of SA WS45: Climate Regions",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Climate of SA  WS46: Sunshine and Cloudiness",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Climate of SA WS47: Precipitation",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Climate of SA WS48: Surface Temperature",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "Climate resources library",
        sawsproduct: "Educational Unit Grade 1&2, Educational Unit Grade 3",
        datarequired: "N/A",
        presentation: [<ol><li>Hard copy</li><li>Climate Service: http://www.weathersa.co.za/home/aboutclimateatsaws</li></ol>],
        sector: "General public",
        usage: "Commercial",
        pillar: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      }
     ]
  };

  return (
    <>
    <div className="filterTable">
      <div id="record-filters" className="btn-group" data-toggle="buttons" >
        <label>Filter records:</label>
        <label id="gridDisplayPublicDeadLabel" className="btn btn-primary">
          <input type="radio" name="GridDisplay" id="gridDisplayDead" value="Public" /> Public
        </label>
        <label id="gridDisplayCommercialLabel" className="btn btn-primary">
          <input type="radio" name="GridDisplay" id="gridDisplayAlive" value="Commercial" /> Commercial
        </label>
        <label id="gridDisplayAllLabel" className="btn btn-primary active">
          <input type="radio" name="GridDisplay" id="gridDisplayAll" value="all" defaultChecked /> All
        </label>
      </div>
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
      // exportToCSV
      searching={false}
      paging={false}
      info={false}
      id="servicesTable"
    />
    </div>
    </>
  );
}



export default (ServicesData);