import React from 'react';
import { MDBDataTable } from 'mdbreact';

const PolicyLData = () => {
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
        type: "Adaptation",
        name: "Subdivision of Agricultural Land Act, No. 70 of 1970",
        description: "Administers the retention of productive agricultural land and controls the subdivision of agricultural land and its use for purposes other than agriculture.",
        year: 1970,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/subdivision-agricultural-land-act-9-oct-1970-0000");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "Conservation of Agricultural Resources Act (CARA), No. 43 of 1983",
        description: "Aims to provide control over the utilisation of agricultural resources in order to promote conservation of soil, water sources, natural vegetation, prevention of soil erosion, and the control of weeds and invasive plant species.",
        year: 1983,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/conservation-agricultural-resources-act-1-apr-2015-0926");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "Municipality Structures Act, No. 117 of 1998",
        description: "Provides for the \'establishment of municipalities in accordance with the requirements relating to categories and types of municipality/' and to regulate the structures and functions of different types of municipalities (from local to district).",
        year: 1998,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/local-government-municipal-structures-act");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "The National Veld and Forest Fire Act, No. 101 of 1998",
        description: "Provides a variety of mechanisms, institutions, methods and practices for the prevention, combating and management of veld, forest and mountain fires in South Africa (Republic of South Africa 1998c). These include the formation of fire protection associations, which are voluntary organisations comprising land owners responsible for the prevention, suppression and management of veldfires in their areas of jurisdiction. Fire management entails three key activities: Suppression of wild fires. Implementation of control burns. The preparation of firebreaks.",
        year: 1998,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-veld-and-forest-act");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "National Environmental Management Act (NEMA) 107 of 1998",
        description: "The National Environmental Management Act (NEMA) 107 of 1998 provides a broad framework of legislation fir environmental management that is binding on all sectors. A key prescription of NEMA is that development must be \'socially, environmental and economically sustainable\'. Furthermore, NEMA requires the SDF to prevent negative effects on the environment and advocates for projects that restore the impacted natural environment.",
        year: 1998,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-environmental-management-act");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "National Water Act, No. 36 of 1998",
        description: "Ensures that the countries water resources are protected, used, development, conserved, managed and controlled.",
        year: 1998,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-water-act");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "National Forests Act, No. 84 of 1998",
        description: "Promotes the sustainable management and use of natural forests and woodlands as well as forest plantations in South Africa.",
        year: 1998,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-forests-act");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "National Heritage Resources Act (NHRA), No 25 of 1999",
        description: "Aims to promote good management of national heritage resources.",
        year: 1999,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-heritage-resources-act");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "Local Government Municipal Systems Act, No. 32 of 2000 (MSA)",
        description: "Provides provides the /'core principles, mechanisms and processes that are necessary to enable municipalities to move progressively towards the social and economic upliftment of local communities\' including ensuring access to basic services. It also provides for \'a uniform, effective and comprehensive system of spatial planning and land use management\' for South Africa. The Act requires all municipalities to produce a Spatial Development Framework (SDF) as a core component of the Integrated Development Plans (IDP) and sets out regulations and guidelines on how this should be done. The MSA requires that the SDF provides basic guidelines for a Municipal Land Use Management System.",
        year: 2000,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/local-government-municipal-systems-act");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "Municipal Systems Act, No. 32 of 2000 (MSA)",
        description: "Provides for \'a uniform, effective and comprehensive system of spatial planning and land use management\' for South Africa. The Act requires all municipalities to produce a Spatial Development Framework (SDF) as a core component of the Integrated Development Plans (IDP) and sets out regulations and guidelines on how this should be done. The MSA requires that the SDF provides basic guidelines for a Municipal Land Use Management System.",
        year: 2000,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/local-government-municipal-systems-act");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "White Paper on Integrated Pollution and Waste Management for South Africa (Notice No. 227 of 2000)",
        description: "A policy intended to support the introduction of preventative strategies aimed at waste minimisation and pollution prevention through the formulation of legislation addressing pollution and waste issues. The vision of the policy is the development of an integrated pollution and waste management system that contributes to sustainable development and human well-being.",
        year: 2000,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/integrated-pollution-and-waste-management-white-paper");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "The Weather Service Act, No. 8 of 2001",
        description: "Constitutes the South African Weather Service as the national weather forecasting body. The Weather Service is responsible for weather and climate forecasting and issuing severe weather related alerts (Republic of South Africa 2001).",
        year: 2001,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/south-african-weather-service-act");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "The National Disaster Management Act, No. 57 of 2002",
        description: "Calls for: An integrated and coordinated disaster management policy that focuses on preventing or reducing the risk of disasters, mitigating the severity of disasters, emergency preparedness, rapid and effective response to disasters and post disaster recovery. The establishment of national, provincial and municipal disaster management centres. Disaster risk management volunteers.",
        year: 2002,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/disaster-management-act");}}>link</button>]
  
      },
      {
        type: "Mitigation",
        name: "Renewable Energy Policy of South Africa White Paper",
        description: "This White Paper on Renewable Energy (herein referred to as the White Paper) supplements the White Paper on Energy Policy, which recognises that the medium and long-term potential of renewable energy is significant. This Paper sets out Government\'s vision, policy principles, strategic goals and objectives for promoting and implementing renewable energy in South Africa.",
        year: 2003,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/renewable-energy-policy-south-africa-white-paper");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "National Environmental Management Biodiversity Act (NEMBA), No. 10 of 2004",
        description: "Provides for the management and conservation of South African biodiversity within the NEMA framework, the protection of species and ecosystems, and the sustainable use of indigenous biological resources (amongst others).",
        year: 2004,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-environmental-management-biodiversity-act-0");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "Disaster Management Act: Policy framework for disaster risk management in South Africa",
        description: "The legal instrument specified by the Act to address the need for consistency across multiple interest groups, by providing \'a coherent, transparent and inclusive policy on disaster management appropriate for the Republic as a whole\'. The Framework is structured according to key performance areas (KPAs) such as institutional capacity for disaster risk reduction, disaster risk assessment, reduction and recovery. Enablers, which are components that need to be in place to implement the KPAs include: 1) information management and communication; 2) education, training, public awareness and research; and 3) funding structures for disaster risk management (Republic of South Africa 2005).",
        year: 2005,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/sites/default/files/gcis_document/201409/275340.pdf");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "The Drought Management Plan of 2005",
        description: "Seeks to reduce the impacts of droughts, by providing an information management, monitoring and evaluating system for drought situations. A specific drought policy is currently under development (Ngaka 2012).",
        year: 2005,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/drought-management-plan");}}>link</button>]
  
      },
      {
        type: "Mitigation",
        name: "National Energy Efficiency Strategy of the Republic of South Africa (Notice No. 908 of 2009)",
        description: "A strategy geared towards the implementation of energy efficient practices taking its mandate from the White Paper on Energy Policy (Notice No. 307 of 1998). The vision of the strategy is to reduce the costs of energy and to reduce the negative impacts of energy usage on human health and the environment.",
        year: 2009,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-energy-efficiency-strategy-republic-south-africa");}}>link</button>]
  
      },
      {
        type: "Climate Change",
        name: "National Climate Change Response White Paper (NO. 757 of 2011)",
        description: "This White Paper presents the South African Government's vision for an effective climate change response and the long-term, just transition to a climate-resilient and lower-carbon economy and society.",
        year: 2011,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-climate-change-response-white-paper-0");}}>link</button>]
  
      },
      {
        type: "Climate Change",
        name: "National Development Plan 2030: Our future - make it work, Chapter 5 Ensuring environmental sustainability and an equitable transition to a low-carbon economy",
        description: "South Africa faces urgent developmental challenges in terms of poverty, unemployment and inequality, and will need to find ways to \'decouple\' the economy from the environment, to break the links between economic activity, environmental degradation and carbon-intensive energy consumption. In the past, resources were exploited in a way that was deeply unjust and left many communities excluded from economic opportunities and benefits while the natural environment was degraded. The country must now find a way to use its environmental resources to support an economy that enables it to remain competitive, while also meeting the needs of society. Thus, sustainable development is not only economically and socially sustainable, but environmentally sustainable as well.",
        year: 2012,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/sites/default/files/gcis_document/201409/ndp-2030-our-future-make-it-workr.pdf");}}>link</button>]
  
      },
      {
        type: "Adaptation",
        name: "Spatial Planning and Land Use Management Act, No. 16 of 2013 (SPLUMA)",
        description: "Aims to provide for inclusive developmental, equitable and efficient spatial planning at the different spheres of government; national, provincial and municipal. SPLUMA adds to existing requirements on IDPs from the MSA and requires that municipalities align their SDF and land use management schemes.",
        year: 2013,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/spatial-planning-and-land-use-management-act");}}>link</button>]
      },
      {
        type: "Adaptation",
        name: "Climate Change Adaptation Sector Plan for Rural Human Settlements",
        description: "The overarching goal of the Climate Change Adaptation Sector Plan for Rural Human Settlements is to create sustainable livelihoods that are resilient to the shocks and stresses caused by climate change and do not adversely affect the environment for present and future generations.",
        year: 2013,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.ruraldevelopment.gov.za/phocadownload/spatial_Planning_Information/Climate_Change/Aug_dec/adaptation_plan_2808131.docx");}}>link</button>]
      },
      {
        type: "Adaptation",
        name: "The National Coastal Management Programme of South Africa",
        description: "This document presents South Africa\'s National Coastal Management Programme (NCMP) under the National Environmental Management: Integrated Coastal Management Act (Act No. 24 of 2008) (ICM Act) for the period 2013 to 2017.",
        year: 2014,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-coastal-management-programme-south-africa");}}>link</button>]
      },
      {
        type: "Adaptation",
        name: "The National Disaster Management Amendment Act, No.16 of 2015",
        description: "Calls for: Establishes a strong link between the impacts of climate changes for both Disaster Management and Human Settlement the establishment of national, provincial and municipal disaster management centres. Requires disaster management plans to include risk assessments, mapping of vulnerable areas. Provides measures to reduce the risk of disaster through adaptation to climate change and developing of early warning mechanisms.",
        year: 2015,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/disaster-management-amendment-act-16-2015-15-dec-2015-0000");}}>link</button>]
      },
      {
        type: "Climate Change",
        name: "Climate Change Sector Plan for Agriculture, Forestry and Fisheries (NO. 500 of 2015)",
        description: "In implementing an effective climate change programme in compliance with the National Climate Change Response White Paper (NCCRWP, 2012) and in support of disaster risk management, DAFF has developed a Climate Change Sector Plan for Agriculture, Forestry and Fisheries (CCSPAFF, 2013).",
        year: 2015,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/climate-change-sector-plan-agriculture-forestry-and-fisheries-draft-4-jun-2015-1029");}}>link</button>]
      },
      {
        type: "Mitigation",
        name: "State of Renewable Energy in South Africa",
        description: "This, the first State of Renewables Report in South Africa, traces the historic journey through the narratives of individual trailblazers and decision makers who influenced energy policy direction and, ultimately, RE implementation, in various ways. Building on these narratives, this report also highlights the main policy documents, legislative framework and institutions that are responsible for driving the RE agenda.",
        year: 2015,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/state-renewable-energy-south-africa-5-oct-2015-0000");}}>link</button>]
      },
      {
        type: "Adaptation",
        name: "Environmental Implementation Plan (EIP) 2015 -2020 (NO. 880 of 2015)",
        description: "\"Section 11 of the National Environmental Management Act (Act No. 107 of 1998) requires that the national and provincial departments exercising functions which may affect the environment, in terms of the Schedule 1 of the Act, prepare an Environmental Implementation Plan (EIP) and to monitor the implementation on a regular basis.\" The Department of Human Settlements has published its Environmental Implementation Plan, 2015-2020 in Government Gazette No. 39164 of 3 September 2015. \"The National Department?s core functions are to establish and facilitate a sustainable national housing development process and to fund the National Housing Programmes. This requires that the Minister, through the National Department, establish and facilitate a sustainable national housing development process.\" ?",
        year: 2015,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.greengazette.co.za/notices/national-environmental-management-act-107-1998-environmental-implementation-plan-eip-2015-2020_20150903-GGN-39164-00880");}}>link</button>]
      },
      {
        type: "Climate Change",
        name: "Climate change adaptation plans for South African biomes",
        description: "The Department of Environment Affairs is driving a national process, with participation of provincial and local government and civil society, to develop climate change adaptation action plans for South African biomes. One of the initial steps is to establish a plan for identifying and prioritising adaptation actions which apply to the broad South African landscape, the ecosystems which occur within it, the species which make up those ecosystems and their ecosystem services such as food and water supply; climate and disease regulation; crop pollination and tourism opportunities provided by the landscapes, and the various economic activities which take place in and depend on those landscapes. This has been called the \'Adaptation plan for South African Biomes\'.",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/climate-change-adaptation-plans-south-african-biomes-18-jul-2016-0000");}}>link</button>]
      },
      {
        type: "Adaptation",
        name: "Strategic Framework and Overarching Implementation Plan for Ecosystem-Based Adaptation (EbA) in South Africa 2016 - 2021",
        description: "Developed under the leadership of the Department of Environmental Affairs (DEA) and the South African National Biodiversity Institute (SANBI) and in consultation with biodiversity and climate change stakeholders, the Strategic Framework and Overarching Implementation Plan for EbA (hereafter referred to as the EbA Strategy) aims to take forward EbA as a central component of South Africa?s programme of work on biodiversity and climate change.",
        year: 2016,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.sanbi.org/wp-content/uploads/2018/09/Strategic-Framework-and-Overarching-Implementation-Plan-for-EbA-in-SA.pdf");}}>link</button>]
      },
      {
        type: "Climate Change",
        name: "Climate Change Bill (NO. 580 of 2018)",
        description: "To build the Republic's effective climate change response and the long term, just transition to a climate resilient and lower carbon economy and society in the context of an environmentally sustainable development framework.",
        year: 2018,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/climate-change-bill-comments-invited-8-jun-2018-0000");}}>link</button>]
      },
      {
        type: "Climate Change",
        name: "Climate Smart Agriculture Strategic Framework (NO. 428 of 2018)",
        description: "This framework outlines the role that Climate Smart Agriculture (CSA) can play in addressing vulnerabilities facing the agriculture sector. Various stakeholders, and farmers, have a role to play in promoting resource efficiency, increased productivity and social equity through mitigation and adaptation efforts. All South Africans have a role to play through implementation of this framework in ensuring sustainability of the agriculture sector as one of the anchors of our Gross Domestic Product (GDP). Targeted efforts will be made to ensure that women, youth, people living with disability and subsistence farmers are involved in implementation of this framework.",
        year: 2018,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/climate-smart-agriculture-strategic-framework-comments-invited-3-aug-2018-0000");}}>link</button>]
      },
      {
        type: "Adaptation",
        name: "National Climate Change Adaptation Stategy of South Africa (NO. 644 of 2019)",
        description: "The NCCAS serves as South Africa\'s National Adaptation Plan and fulfils South Africa\'s commitment to its international obligations as outlined in the Paris Agreement under the United Nations Framework Convention on Climate Change (UNFCCC). The NCCAS will be used as the basis for meeting South Africa\'s obligations in terms of the adaptation commitments outlined in the NDC. The NCCAS is a ten-year plan that will be reviewed every five years.",
        year: 2019,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/national-environmental-management-air-quality-act-national-climate-change-adaptation");}}>link</button>]
      },
      {
        type: "Adaptation",
        name: "District Health Planning and Monitoring Framework",
        description: "The revised District Planning and monitoring system is an effort to improve both efficiency and effectiveness of the process, thereby promoting better service delivery of District Health Services and improve health outcomes in South Africa through a direct focus on planning and monitoring for implementation.",
        year: 2017,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.health.gov.za/DHP/docs/DHP_and_M_Framework_and_Guidelines_25Aug_DG.pdf");}}>link</button>]
      },
      {
        type: "Adaptation",
        name: "DRAFT CLIMATE CHANGE RESPONSE STRATEGY FOR THE WATER AND SANITATION SECTOR",
        description: "The Climate Change Response Strategy for the Water and Sanitation Sector provides an integrated framework for climate change response to minimize the overall detrimental impact of climate change and to maximize beneficial impact. It sets out the key strategic actions to be undertaken to address climate change in the water and sanitation sector.",
        year: 2019,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://saeongroup.slack.com/files/UFYDT7DV3/FL5EBJFKR/draft_water_and_sanitation.docx");}}>link</button>]
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

export default PolicyLData;