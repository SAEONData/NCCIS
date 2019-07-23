import React from 'react';
import { MDBDataTable } from 'mdbreact';

const ToolsData = () => {
  const data = {
    columns: [
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
        title: "GreenBook",
        description: "The Green Book is an online planning support tool that provides quantitative scientific evidence on the likely impacts that climate change and urbanisation will have on South Africa's cities and towns, as well as presenting a number of adaptation actions that can be implemented by local government to support climate resilient development.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.greenbook.co.za/");}}>link</button>]
      },
      {
        title: "Climate Information Portal (CIP)",
        description: "The Climate Information Portal (CIP) is a web interface that integrates two important information sources into one easy to use interface. The first important source is a climate database that stores and manages queries to a large suite of observational climate data as well as projections of future climate. The second important source of information is an extensive collection of guidance documentation that facilitates the best use of the climate data, it's interpretation and, importantly, resultant actions.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://cip.csag.uct.ac.za/webclient2/app/");}}>link</button>]
      },
      {
        title: "Climate Change Knowledge Portal",
        description: "Explore historical and projected climate data, climate data by sector, impacts, key vulnerabilities and what adaptation measures are being taken. Explore the overview for a general context of how climate change is affecting South Africa.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://climateknowledgeportal.worldbank.org/country/south-africa");}}>link</button>]
      },
      {
        title: "SARVA",
        description: "The South African Risk and Vulnerability Atlas offers comprehensive resources which include live web mapping, static maps, reports, case studies and integrated analysis which assist in an increased understanding of global change impacts, by building the evidence base for decision makers and other stakeholders for local level planning. The portal allows easy access through advanced search functionalities to data on other platforms from different research institutes, such as SASDI, the Bioenergy Atlas, SAEON, and SAEOSS.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://sarva2.dirisa.org/");}}>link</button>]
      },
      {
        title: "SAAQIS",
        description: "The South African Air Quality Information System (SAAQIS) provides a common platform for managing air quality information in South Africa. It makes data available to stakeholders including the public and provides a mechanism to ensure uniformity in the way air quality data is managed i.e. captured, stored, validated, analysed and reported on in South Africa.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("saaqis.environment.gov.za/");}}>link</button>]
      },
      {
        title: "SA 2050 Pathway Calculator",
        description: "The South African 2050 Pathway Calculator is designed to empower South Africans to make informed choices that contribute to a transition to a lower carbon economy and society. The system shows the implications of a selected pathway, and enables the user to visually track how energy flows through the system, what the greenhouse gas implications are, and even how much the new energy system will cost to build.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://sa2050pathways.environment.gov.za/");}}>link</button>]
      },
      {
        title: "National Environmental Screening Tool",
        description: "The Environmental Screening Tool is a geographically based web-enabled application which allows a proponent intending to submit an application for environmental authorisation in terms of the Environmental Impact Assessment Regulations (2014), to pre-screen their proposed site for any environmental sensitivity.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://screening.environment.gov.za/screeningtool/index.html#/pages/welcome");}}>link</button>]
      },
      {
        title: "HST Health Indicators",
        description: "The objective of this tool is to present the best available data on a wide range of health and related indicators and where possible data from multiple years are presented.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.hst.org.za/healthindicators");}}>link</button>]
      },
      {
        title: "NDMC Disaster Atlas",
        description: "The information required on hazardous events is coordinated and managed by the National Disaster Management Centre (NDMC)",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://gis-portal.ndmc.gov.za/portal/apps/webappviewer/index.html?id=700928590ea84665b234b038eb96c210");}}>link</button>]
      },
      {
        title: "DEA Coastal Viewer",
        description: "The Coastal Viewer aims to make spatial data relating to the Coastal Zone available to the public. The data is sourced from the relevant custodians to inform decision making processes focussing on the sustainable use of coastal resources and promoting coastal management objectives as described in the National Coastal Management Programme of South Africa.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://mapservice.environment.gov.za/Coastal%20Viewer/");}}>link</button>]
      },
      {
        title: "Carbon Sinks Atlas",
        description: "South Africa's National Climate Change Response Policy (NCCRP) highlighted the need to assess the national carbon sinks related to forest restoration, wetlands, agricultural practice, all significant changes in land use and to quantify the potential future carbon stocks under varying climate change scenarios and land use change. Consequently, the National Terrestrial Carbon Sinks Assessment (NTCSA) was commissioned by the Department of Environmental Affairs. The main objectives were to understand the distribution of the carbon stocks and fluxes across South Africa, to identify the land based mitigation opportunities and to conduct policy review to understand the impact of policy on sustainable land management.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://carbon-atlas.dirisa.org/");}}>link</button>]
      },
      {
        title: "Biennial Update Report Explorer",
        description: "The South Africa Biennial Update Report Explorer offers open data, visualizations and analysis to help users gather insights on South Africa's climate progress. It is an an important part of the National Climate Change Monitoring and Evaluation (M&E) System established as part of the national efforts to track South Africa's overall transition to a low carbon and climate resilient society and economy.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://southafricaclimateexplorer.org/");}}>link</button>]
      },
      {
        title: "Let's Respond Toolkit",
        description: "The purpose of this website is to provide stakeholders with information and tools to respond to climate change at a local level in South Africa.",
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
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