import React from 'react';
import { MDBDataTable } from 'mdbreact';

const GuidelinesData = () => {
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
          type: "Aaptation",
          name: "National Environmental Management Act: Implementation guidelines",
          description: "The Department of Environment, Forestry and Fisheries (DEFF) determined that a guideline on the Environmental Impact Assessmet (EIA) process would be of value in respect of particular types of developments. These are referred to as \"sectors' and the DEFF identified 5 sectors that required attention, namely agri-industry projects, energy projects, large-scale developments, social infrastructure and housing projects and linear developments.",
          year: 2010,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-environmental-management-act-implementation-guidelines-draft-0");}}>link</button>]
        },
        {
          type: "Mitigation",
          name: "Environmental Impact Assessment Guideline for Renewable Energy Projects",
          description: "In order to facilitate the development of IPPs in South Africa, these guidelines have been written to assist project planning, financing, permitting, and implementation for both developers and regulators. The purpose of these guidelines is not to provide an exhaustive checklist of requirements, but to promote efficient, effective, and expedited authorisation processes.",
          year: 2013,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/eia-guideline-renewable-energy-projects-draft");}}>link</button>]
        },
        {
          type: "Mitigation",
          name: "National Environmental Management Act: Environmental impact assessment guideline for renewable projects",
          description: "The Renewable Energy sector has long indicated its interest and readiness to invest in renewable energy technologies. This guideline aims to ensure that all potential environmental issues pertaining to renewable energy projects are adequately and timeously assessed and addressed as necessary so as to ensure sustainable roll-out of these technologies by creating a better understanding of the environmental approval process for renewable energy projects.",
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-environmental-management-act-environmental-impact-assessment-guideline-renewable");}}>link</button>]
        },
        {
          type: "Adaptation",
          name: "National Environmental Management: Protected Areas Act: Cultural Heritage Survey guidelines and assessment tools for protected areas in South Africa",
          description: "The Department of Environment, Forestry and Fisheries (DEFF) following the introduction of the Management Effectiveness Tracking Tool (METT-SA) to track protected area management effectiveness, has identified cultural heritage survey, inventory, planning, and condition assessment in relation to planned objectives as a gap in the management of cultural heritage resources in Protected Areas in South Africa.",
          year: 2017,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-environmental-management-protected-areas-act-cultural-heritage-survey-0");}}>link</button>]
        },
        {
          type: "Adaptation",
          name: "Guidelines for Ecosystem-based Adaptation (EBA) in South Africa",
          description: "Ecosystem-based Adaptation (EbA) is the use of biodiversity and ecosystem services as part of an overall adaptation strategy to help people to adapt to the adverse effects of climate change (CBD, 2009; DEFF & SANBI, 2016). Ecosystem-based Adaptation (EbA) represents a coherent approach for adaptation to climate change that makes use of the role that well-functioning ecosystems play in achieving positive societal and development outcomes.",
          year: 2017,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.sanbi.org/wp-content/uploads/2018/09/SA-Ecosystem-based-Adaptation-EbA-Guidelines.pdf");}}>link</button>]
        },
        {
          type: "Mitigation",
          name: "Mitigation Monitoring and Evaluation Guidelines Series of the National Climate Change Response Monitoring & Evaluation System Volume 1 - POLICIES, STRATEGIES & LAWS",
          description: "These M&E guidelines for policies and actions draw from and were developed in accordance with the World Resources Institute (WRI) GHG Protocol Policy and Action Standard, which is an accounting and reporting standard for estimating the greenhouse gas effects of policies and actions.",
          year: 2019,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/legislations/climatechange_monitoringandevaluation_guidelineseries_volume1.pdf");}}>link</button>]
        },
        {
          type: "Climate Change",
          name: "TNA Step by Step A guidebook for countries conducting a Technology Needs Assessment and Action Plan",
          description: "The purpose of this guidebook is to summarize the various steps in the implementation of a Technology Needs Assessment (TNA) and to be the �go-to� document for national TNA teams, including TNA coordinators and consultants.",
          year: 2019,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://tech-action.unepdtu.org/wp-content/uploads/sites/2/2019/04/2019-02-tna-step-by-step-guide.pdf");}}>link</button>]
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

export default GuidelinesData;