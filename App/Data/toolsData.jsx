import React from 'react';
import { MDBDataTable } from 'mdbreact';
import NCCRD_Training_Manual_V1 from '../content/pdfs/NCCRD_Training_Manual_V1.pdf';
import NDAO_Training_Manual_V1 from '../content/pdfs/NDAO_Training_Manual_V1.pdf';

const ToolsData = () => {
  const data = {
    columns: [
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Link',
        field: 'link',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [
      {
        type: "Training material",
        title: "NCCRD Training Manual V1",
        description: "This user manual was designed to walk users through the National Climate Change. Response Database and was intended as a resource to inform anyone currently working on climate change adaptation or mitigation on how to add these projects to the NCCRD.",
        link: [<a className="dataLink" href={NCCRD_Training_Manual_V1} target="_blank">link</a>]
      },
      {
        type: "Training material",
        title: "NCCRD Training Manual V1",
        description: "This user manual was designed to walk users through the National Desired Adaptation Outcome Questionnaire and is intended as a resource to inform anyone interested in evaluating their climate change adaptation approach of DEAs current monitoring and evaluation approach and to submit an evaluation questionnaire to DEA.",
        link: [<a className="dataLink" href={NDAO_Training_Manual_V1} target="_blank">link</a>]
      },
      {
        type: "Adaptation",
        title: "GreenBook",
        description: "The Green Book is an online planning support tool that provides quantitative scientific evidence on the likely impacts that climate change and urbanisation will have on South Africa's cities and towns, as well as presenting a number of adaptation actions that can be implemented by local government to support climate resilient development.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.greenbook.co.za/");}}>link</button>]
      },
      {
        type: "Climate Change",
        title: "Climate Information Portal (CIP)",
        description: "The Climate Information Portal (CIP) is a web interface that integrates two important information sources into one easy to use interface. The first important source is a climate database that stores and manages queries to a large suite of observational climate data as well as projections of future climate. The second important source of information is an extensive collection of guidance documentation that facilitates the best use of the climate data, it's interpretation and, importantly, resultant actions.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://cip.csag.uct.ac.za/webclient2/app/");}}>link</button>]
      },
      {
        type: "Adaptation",
        title: "Climate Change Knowledge Portal",
        description: "Explore historical and projected climate data, climate data by sector, impacts, key vulnerabilities and what adaptation measures are being taken. Explore the overview for a general context of how climate change is affecting South Africa.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://climateknowledgeportal.worldbank.org/country/south-africa");}}>link</button>]
      },
      {
        type: "Adaptation",
        title: "SARVA",
        description: "The South African Risk and Vulnerability Atlas offers comprehensive resources which include live web mapping, static maps, reports, case studies and integrated analysis which assist in an increased understanding of global change impacts, by building the evidence base for decision makers and other stakeholders for local level planning. The portal allows easy access through advanced search functionalities to data on other platforms from different research institutes, such as SASDI, the Bioenergy Atlas, SAEON, and SAEOSS.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://sarva2.dirisa.org/");}}>link</button>]
      },
      {
        type: "Mitigation",
        title: "SAAQIS",
        description: "The South African Air Quality Information System (SAAQIS) provides a common platform for managing air quality information in South Africa. It makes data available to stakeholders including the public and provides a mechanism to ensure uniformity in the way air quality data is managed i.e. captured, stored, validated, analysed and reported on in South Africa.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("saaqis.environment.gov.za/");}}>link</button>]
      },
      {
        type: "Mitigation",
        title: "SA 2050 Pathway Calculator",
        description: "The South African 2050 Pathway Calculator is designed to empower South Africans to make informed choices that contribute to a transition to a lower carbon economy and society. The system shows the implications of a selected pathway, and enables the user to visually track how energy flows through the system, what the greenhouse gas implications are, and even how much the new energy system will cost to build.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://sa2050pathways.environment.gov.za/");}}>link</button>]
      },
      {
        type: "Adaptation",
        title: "National Environmental Screening Tool",
        description: "The Environmental Screening Tool is a geographically based web-enabled application which allows a proponent intending to submit an application for environmental authorisation in terms of the Environmental Impact Assessment Regulations (2014), to pre-screen their proposed site for any environmental sensitivity.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://screening.environment.gov.za/screeningtool/index.html#/pages/welcome");}}>link</button>]
      },
      {
        type: "Adaptation",
        title: "HST Health Indicators",
        description: "The objective of this tool is to present the best available data on a wide range of health and related indicators and where possible data from multiple years are presented.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.hst.org.za/healthindicators");}}>link</button>]
      },
      {
        type: "Adaptation",
        title: "NDMC Disaster Atlas",
        description: "",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://gis-portal.ndmc.gov.za/portal/apps/webappviewer/index.html?id=700928590ea84665b234b038eb96c210");}}>link</button>]
      },
      {
        type: "Adaptation",
        title: "DEA Coastal Viewer",
        description: "The Coastal Viewer aims to make spatial data relating to the Coastal Zone available to the public. The data is sourced from the relevant custodians to inform decision making processes focussing on the sustainable use of coastal resources and promoting coastal management objectives as described in the National Coastal Management Programme of South Africa.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://mapservice.environment.gov.za/Coastal%20Viewer/");}}>link</button>]
      },
      {
        type: "Mitigation",
        title: "Carbon Sinks Atlas",
        description: "South Africa's National Climate Change Response Policy (NCCRP) highlighted the need to assess the national carbon sinks related to forest restoration, wetlands, agricultural practice, all significant changes in land use and to quantify the potential future carbon stocks under varying climate change scenarios and land use change. Consequently, the National Terrestrial Carbon Sinks Assessment (NTCSA) was commissioned by the Department of Environmental Affairs. The main objectives were to understand the distribution of the carbon stocks and fluxes across South Africa, to identify the land based mitigation opportunities and to conduct policy review to understand the impact of policy on sustainable land management.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://carbon-atlas.dirisa.org/");}}>link</button>]
      },
      {
        type: "Climate Change",
        title: "Biennial Update Report Explorer",
        description: "The South Africa Biennial Update Report Explorer offers open data, visualizations and analysis to help users gather insights on South Africa's climate progress. It is an an important part of the National Climate Change Monitoring and Evaluation (M&E) System established as part of the national efforts to track South Africa's overall transition to a low carbon and climate resilient society and economy.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://southafricaclimateexplorer.org/");}}>link</button>]
      },
      {
        type: "Adaptation",
        title: "Let's Respond Toolkit",
        description: "The purpose of this website is to provide stakeholders with information and tools to respond to climate change at a local level in South Africa.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Climate Change",
        title: "South Africa Biennial Update Report Explorer",
        description: "The South Africa Biennial Update Report Explorer offers open data, visualizations and analysis to help you gather insights on South Africa's climate progress.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://southafricaclimateexplorer.org/");}}>link</button>]
      },
      {
        type: "Adaptation",
        title: "The RedBook - The Neighbourhood Planning and Design Guide",
        description: "The Red Book supports the development of sustainable human settlements by providing practical information related to the planning and design of the services and infrastructure typically provided as part of a neighbourhood development project.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.dhs.redbook.gov.za/");}}>link</button>]
      },
      {
        type: "Climate Change",
        title: "Smart Home",
        description: "A smarthome is a home that enables you to save money. It is a home that has been designed to help you save water and electricity and is fitted with features and tools that assist you in reducing your usage of these limited resources. An EDGE certified smarthome gives you the opportunity to save 20% or more on your water and electricity costs as long as you use the green features in the home correctly.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("smarthome.org.za");}}>link</button>]
      },
      {
        type: "Climate Change",
        title: "South African Weather Service",
        description: "The is the website for the South African Weather Service (SAWS) which features a variety of useful products including forcasts, historical weather trends, and climate data.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.weathersa.co.za/");}}>link</button>]
      },
      {
        type: "Adaptation",
        title: "Mine Water Atlas",
        description: "The South African Mine Water Atlas is a comprehensive reference on the vulnerability of water resources to mining activity in South Africa. It shows the critical interplay between mining and water resources and is the most extensive set of documents of its kind.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.wrc.org.za/programmes/mine-water-atlas/");}}>link</button>]
      },
      {
        type: "Adaptation",
        title: "Environment & Health Research Unit",
        description: "The SAMRC's Environment & Health Research Unit (E&HRU) conducts population-based research on environmental risks to health - with particular emphasis on those living in poverty. The Unit - which is made up of experts in environmental epidemiology, public health, chemistry, geography, botany, and environmental science/management - protects and promotes the health of South African communities by investigating serious health risks such as climate change and rising heat, lead poisoning, air pollution, environmental exposures from living near mining land, and other health hazards specific to urban environments.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.mrc.ac.za/intramural-research-units/EnvironmentHealth");}}>link</button>]
      }
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

export default ToolsData;