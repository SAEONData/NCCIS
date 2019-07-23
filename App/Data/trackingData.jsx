import React from 'react';
import { MDBDataTable } from 'mdbreact';

const TrackingData = () => {
  const data = {
    columns: [
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Year',
        field: 'year',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Link',
        field: 'link',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        type: "M&E guidelines",
        name: "White Paper on Science, Technology and Innovation",
        description: "This White Paper focuses on using STI to accelerate inclusive economic growth, make the economy more competitive, and improve people\'s daily lives. It aims to help South Africa benefit from global developments such as rapid technological advancement and geopolitical and demographic shifts, as well as respond to the threats associated with some of these global trends.",
        year: 2018,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.dst.gov.za/images/2018/DST-WHITE-PAPER-2108-WEB.pdf");}}>link</button>],
      },
      {
        type: "M&E guidelines",
        name: "South Africa's National Research and Development Strategy",
        description: "This R&D Strategy will be a key enabler of economic growth and articulate with other strategies, such as the Human Resource Development Strategy, the Integrated Manufacturing Strategy and the Strategic Plan for South African Agriculture.",
        year: 2002,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.dst.gov.za/images/pdfs/National%20research%20%20development%20strategy%202002.pdf");}}>link</button>],
      },
      {
        type: "M&E guidelines",
        name: "South African Risk and Vulnerability Atlas 2ed",
        description: "SARVA t aims to enhance scientific understanding of global change and to develop innovative technologies to respond to global change, with an emphasis on climate change.",
        year: 2017,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.dst.gov.za/images/CSIR%20Global%20Change%20eBOOK.pdf");}}>link</button>],
      },
      {
        type: "M&E guidelines",
        name: "10-Year Global Change Research Plan for South Africa",
        description: "The Department of Science and Technology's Ten-year Innovation Plan for South Africa, Innovation towards a Knowledge-based Economy 2008-2018, identifies five key Grand Challenges for the National System of Innovation over the next decade.",
        year: 2010,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.dst.gov.za/images/GCRP_Summary_2010.pdf");}}>link</button>],
      },
      {
        type: "M&E guidelines",
        name: "First Biennial Report to Cabinet on State of Climate Change Science and Technology in South Africa",
        description: "Outcome 10 of the MTSF calls for a report on the state of climate change science and technology in South Africa to be provided to Cabinet by the DST and the Department of Environmental Affairs (DEA) every two years. This is the first such report.",
        year: 2017,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.dst.gov.za/index.php/resource-center/strategies-and-reports/2233-state-of-climate-change-science-and-technology");}}>link</button>],
      },
      {
        type: "M&E guidelines",
        name: "South African Research Infrastructure Roadmap",
        description: "The list of 17 research infrastructures initially emerging from the consultative process ranged from medium to large and were clustered around six scientific domains, namely, (i) humans and society, (ii) health, biological and food security, (iii) Earth and environment, (iv) materials and manufacturing, (v) energy and (vi) physical sciences and engineering.",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.dst.gov.za/images/Attachments/Department_of_Science_and_Technology_SARIR_2016.pdf");}}>link</button>],
      },
      {
        type: "Annual climate change reports",
        name: "South Africa's Second National Climate Change Report",
        description: "This 2016/17 report includes chapters on (i) quantifying and profiling the impact of ongoing or recently completed mitigation actions (ii) progress in the work on climate change flagship programmes (iii) lessons learn from the recent drought phenomenon (iv) progress in the development of the national adaptation strategy and desired adaptation outcomes (v) progress in establishing a credible national tracking system for key climate change actions in the country, etc.",
        year: 2017,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/southafrica_secondnational_climatechnage_report2017.pdf");}}>link</button>],
      },
      {
        type: "Annual climate change reports",
        name: "South Africa's first annual Climate Change report: Theme A: Synopsis",
        description: "The objective of this report is to communicate the progress and lessons learnt in tracking South Africa\'s transition towards a climate resilient society and a lower carbon economy. As a knowledge product, this report aims to target people and institutions involved in technical, coordination and policy aspects of climate change, including those undertaking work relevant to these aspects of climate change. This annual report is seen as part of the broader programme to communicate regular reporting of climate change relevant information to the South African audience.",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeA_climatechangeresponse_annualreport.pdf");}}>link</button>],
      },
      {
        type: "Annual climate change reports",
        name: "South Africa's first annual Climate Change report: Theme B: South Africa\'s Climate Change Monitoring and Evaluation System is made up of the following sections:",
        description: "South Africa\'s Climate Change Monitoring and Evaluation System which presents the objectives of the monitoring and evaluation (M&E) system, its benefits and an overview of the system, The National Climate Change Response M&E System Agriculture, Forestry and Other Land Uses (AFOLU): Demystifying the Measurement, Reporting and Verification of this Specialised Sector, The Greenhouse Gas Inventory Improvement Programme (GHGIP).",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeB_monitoring_evaluation.pdf");}}>link</button>],
      },
      {
        type: "Annual climate change reports",
        name: "South Africa's first annual Climate Change report: Theme C: Climate Change Trends, Risks, Impacts and Vulnerabilities",
        description: "Theme C is comprised of two chapters, namely: Observed Trends in the Climate of South Africa, which analyses observed temperature and rainfall trends over the past few decades and drivers of variability of South Africa\'s climate. Climate Change Risks, Impacts and Vulnerabilities in South Africa, emphasising climate change as a stress multiplier.",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeC_vulnerabilities_risks.pdf");}}>link</button>],
      },
      {
        type: "Annual climate change reports",
        name: "South Africa's first annual Climate Change report: Theme F: Climate Finance is structured according to the sources of finance",
        description: "Domestic Public Climate Finance to support the transition towards a lower carbon economy, and national public funding mechanisms to support the transition to a climate resilient society and economy as well as outlining challenges, gaps and key success factors on funding climate resilience. The focus then shifts to; Bilateral and Multilateral Finance addressing issues on international finance mechanisms related to climate resilience as well as on bilateral finance, followed by short sections on Private Finance and; Civil Society Finance.",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeF_climate_finance.pdf");}}>link</button>],
      },
      {
        type: "Annual climate change reports",
        name: "South Africa's first annual Climate Change report: Theme D: Tracking South Africa\'s Transition to a Lower Carbon Economy reviews the following:",
        description: "National Level Indicators, including sustainable carbon levels and comparisons with various trajectories, indicators of lower carbon consumption and productivity and lower carbon resourcing, followed by; Key National and Industrial Mitigation Response Measures, looking at the mitigation impact of these measures and their impact on other sustainable development indicators, and Low Carbon Development in Provinces and Cities, assessing actions taken by provincial governments, metros and secondary cities, followed by a wide-ranging; Appendix on Response Measures by individuals, groups and sectors in energy efficiency, electricity generation and transportation, as well as a review of Clean Development Mechanism projects and the Extended Public Works Programme (EPWP).",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeD_lowercarbon_economy.pdf");}}>link</button>],
      },
      {
        type: "Annual climate change reports",
        name: "South Africa's first annual Climate Change report: Theme H: The Near-term Priority Climate Change Flagship Programmes",
        description: "The flagship programmes contribute significantly to making South Africa\'s climate action development and implementation process predictable, continuous and optimised by establishing a pipeline of investment-grade climate change response programmes and projects. The programmes provide the necessary infrastructure to enable climate action at scale.",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeH_flagship_programme.pdf");}}>link</button>],
      },
      {
        type: "Annual climate change reports",
        name: "South Africa's first annual Climate Change report: Theme I: Key Outcomes of COP 21",
        description: "Marking the culmination of a four-year negotiating round that started at the 17th Conference of the Parties (COP) to the United Nations Framework Convention on Climate Change (UNFCCC) in Durban in 2011, the \'Paris Outcome\' of the 21st COP is made up of three main elements: The Paris Agreement: An enduring, legally binding treaty on climate action starting in 2020, the Paris Agreement will enter into force once 55 countries covering 55% of global emissions have acceded to it. The COP Decision: This is a set of decisions that the COP agreed to prepare for implementing the Paris Agreement once it enters into force. The Paris Action Agenda: These are additional commitments, which were taken at COP 21 parallel to the formal agreements, by countries, regions, cities, investors, and companies for additional climate action.",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeI_cop21_keyoutcomes.pdf");}}>link</button>],
      },
      {
        type: "M&E guidelines",
        name: "Environmental Implementation Plan (EIP) 2015 -2020 (NO. 880 of 2015)",
        description: "\"Section 11 of the National Environmental Management Act (Act No. 107 of 1998) requires that the national and provincial departments exercising functions which may affect the environment, in terms of the Schedule 1 of the Act, prepare an Environmental Implementation Plan (EIP) and to monitor the implementation on a regular basis.\" The Department of Human Settlements has published its Environmental Implementation Plan, 2015-2020 in Government Gazette No. 39164 of 3 September 2015. \"The National Department?s core functions are to establish and facilitate a sustainable national housing development process and to fund the National Housing Programmes. This requires that the Minister, through the National Department, establish and facilitate a sustainable national housing development process.\" ?",
        year: 2015,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.greengazette.co.za/notices/national-environmental-management-act-107-1998-environmental-implementation-plan-eip-2015-2020_20150903-GGN-39164-00880");}}>link</button>],
      },
      {
        type: "M&E guidelines",
        name: "National Climate Change and Health Adaptation Plan 2014 - 2019",
        description: "This plan outlines the broad apprroach of the health sector in South Africa in tackling adaptation to climate change in light of the unique challenges prevailing in the country. It will also refer to other national sector adaptation plans in order to ensure a comprehensive, integrated approach at a national level.",
        year: 2014,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.health.gov.za/index.php/shortcodes/2015-03-29-10-42-47/2015-04-30-08-29-27/2015-04-30-08-32-49/category/435-climate-change?download=2609:national-climate-change-and-health-adaptation-plan");}}>link</button>],
      },
      {
        type: "M&E guidelines",
        name: "National Guideline Towards the Establishment of Coastal Management Lines",
        description: "The purpose of this document is to provide guidance to Lead Agencies of Coastal Provinces on the establishment of Coastal Management Lines by the Members of the Executive Council (MECs).",
        year: 2017,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://cer.org.za/wp-content/uploads/2009/12/National-guideline-towards-the-establishment-of-coastal-management-lines.pdf");}}>link</button>],
      },
      {
        type: "M&E guidelines",
        name: "National Climate Change Adaptation Stategy of South Africa (NO. 644 of 2019)",
        description: "The NCCAS serves as South Africa\'s National Adaptation Plan and fulfils South Africa\'s commitment to its international obligations as outlined in the Paris Agreement under the United Nations Framework Convention on Climate Change (UNFCCC). The NCCAS will be used as the basis for meeting South Africa\'s obligations in terms of the adaptation commitments outlined in the NDC. The NCCAS is a ten-year plan that will be reviewed every five years.",
        year: 2019,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-environmental-management-air-quality-act-national-climate-change-adaptation");}}>link</button>],
      },
      {
        type: "GHG Improvement programme reports",
        name: "Greenhouse Gas Improvement Programme: Strategic Climate Policy Fund - Improvement of the Greenhouse Gas Emissions Inventory for the Agricultural Sector",
        description: "Greenhouse Gas Improvement Programmes (GHGIP) refers to a series of sector-specific projects aimed at improving the quality and accuracy of the National Greenhouse Gas Inventory. The GHGIP is a result of a collaborative effort by the Department of Environmental Affairs working with other relevant agencies and industry sectors. A majority of projects are donor funded with clear objectives and targets primarily focusing on the improvement of estimation methodologies, activity data and development of country-specific emission factors. The sectors covered in the GHGIP are the Energy Sector, Industrial Processes and Product Use (IPPU), Agriculture, Forestry and Land Use (AFOLU).",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/publications/strategicclimate_policyfund_report.pdf");}}>link</button>],
      },
      {
        type: "GHG Improvement programme reports",
        name: "Greenhouse Gas Improvement Programme: The Calculation of Country Specific Emission Factors for the Stationary Combustion of Fuels in the Electricity Generation Sector",
        description: "Greenhouse Gas Improvement Programmes (GHGIP) refers to a series of sector-specific projects aimed at improving the quality and accuracy of the National Greenhouse Gas Inventory. The GHGIP is a result of a collaborative effort by the Department of Environmental Affairs working with other relevant agencies and industry sectors. A majority of projects are donor funded with clear objectives and targets primarily focusing on the improvement of estimation methodologies, activity data and development of country-specific emission factors. The sectors covered in the GHGIP are the Energy Sector, Industrial Processes and Product Use (IPPU), Agriculture, Forestry and Land Use (AFOLU).",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/publications/calculationofcountryspecificemissionfactors.pdf");}}>link</button>],
      },
      {
        type: "GHG Improvement programme reports",
        name: "Greenhouse Gas Improvement Programme: Survey on economy-wide fuel consumption with emphasis on demand-side sectors",
        description: "Greenhouse Gas Improvement Programmes (GHGIP) refers to a series of sector-specific projects aimed at improving the quality and accuracy of the National Greenhouse Gas Inventory. The GHGIP is a result of a collaborative effort by the Department of Environmental Affairs working with other relevant agencies and industry sectors. A majority of projects are donor funded with clear objectives and targets primarily focusing on the improvement of estimation methodologies, activity data and development of country-specific emission factors. The sectors covered in the GHGIP are the Energy Sector, Industrial Processes and Product Use (IPPU), Agriculture, Forestry and Land Use (AFOLU).",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/publications/surveyoneconomy-widefuelconsumption_ondemand-sidesectors.pdf");}}>link</button>],
      },
      {
        type: "GHG inventory reports",
        name: "South African National Land-cover Dataset - Report",
        description: "Comparison of the 1990 and 2013/ 14 South African National Land-cover Datasets shows that there are significant land-cover- and land-use-specific changes evident at both the national and regional scale. These include changes such as a 67% increase in the mining footprint in Mpumalanga and a 220% national-level increase in centre pivot-irrigated field areas over the approximately 24-year period.",
        year: 2015,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://drive.google.com/open?id=1kHlHgj9bunF0aoPsxyP6thhDsRk8VE_e");}}>link</button>],
      },
      {
        type: "GHG inventory reports",
        name: "South African National Land-cover Dataset 2013/2014 - Report",
        description: "This report describes the 2013/ 14 South African National Land-cover Dataset produced by GTI as a commercial data product has been generated from digital, multi-seasonal Landsat 8 multi-spectral imagery, acquired between April 2013 and March 2014.",
        year: 2015,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://drive.google.com/open?id=1kt-UvbtNSTSkn971pEV0BE809A9VZDnJ");}}>link</button>],
      },
      {
        type: "GHG inventory reports",
        name: "South African National Land-cover Dataset 1990 - Report",
        description: "This report details the production of a 35-class National Land-cover Dataset for South Africa, circa 1990, generated primarily from multi-seasonal Landsat 5 imagery, acquired mainly between 1989 and 1991.",
        year: 2015,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://drive.google.com/open?id=1kDAe2BRlooWLnfQrjnWFfzcEf3DXJ50N");}}>link</button>],
      },
      {
        type: "GHG inventory reports",
        name: "South African National Land-cover Dataset 1990 to 2013/14 - Report",
        description: "An assessment of land-cover change has been undertaken using the 1990 and 2013/ 14 South African National Land- cover Datasets. In preparation for the land-cover change assessment, the original 35-class national land-cover datasets were reformated into the DEA-requested, simplified 17-class legend format to be used for land-cover change reporting.",
        year: 2015,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://drive.google.com/open?id=1kRZG6_n9m3usuXWD5wzCwGqXKptFNYTn");}}>link</button>],
      },
      {
        type: "GHG inventory reports",
        name: "GHG National Inventory Report South Africa 2000 - 2012",
        description: "This report documents South Africa\'s submission of its national greenhouse gas inventory for the year 2012. It also reports on the GHG trends for the period 2000 to 2012.",
        year: 2017,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/gng_nationalinventoryreport2000_2012.pdf");}}>link</button>],
      },
      {
        type: "GHG inventory reports",
        name: "GHG Inventory for South Africa 2000 - 2010",
        description: "This report documents South Africa\'s submission of its national greenhouse gas inventory for the year 2010. The reporting of these emissions is in line with the IPCC 2006 Guidelines.",
        year: 2014,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/gng_nationalinventoryreport2000_2012.pdf");}}>link</button>],
      },
     ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
}

export default TrackingData;