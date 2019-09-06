import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Program',
        field: 'program',
        sort: 'asc',
        width: 270
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
          type: 'Adaptation',
          program: '',
          name: 'Scoping of the Approximate Climate Change Adaptation Costs in Several Key Sectors for South Africa up to 2050',
          description: 'This report provides quantitative economic analyses of climate change impacts and the inferred estimated adaptation costs in key sectors, including water, agriculture and biodiversity and ecosystem services, up to 2050. It highlights that the costing of climate change adaptation responses and their benefits (calculated in terms of avoided damages) is still in its infancy, especially when compared to the advances made with respect to determining mitigation costs, and further outlines some of the challenges particular to economic analyses of adaptation. The report draws attention to the unique challenges of developing adaptation responses in the face of climate uncertainty, as well as the opportunities and benefits that adaptation responses can potentially provide, particularly in terms of local economic development. It concludes with recommendations of the conditions and actions required for an effective integrated adaptation response in the short, medium and long term.',
          year: 2011,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/climatechnage_adpation_costscoping.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: '',
          name: 'Governance of Climate Change in South Africa',
          description: 'This paper aims to provide informed recommendations for appropriate governance and coordination mechanisms that can support the mainstreaming of climate change within all spheres of government. It then draws lessons both from South African case studies outside the environment field and from international experiences, which might be useful for climate change governance.',
          year: 2011,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/climate_change_governance.pdf");}}>link</button>]
        },
        {
          type: 'Finance',
          program: '',
          name: 'Synthesis of Climate Finance Literature Report to the DBSA',
          description: 'South Africa will need to utilise both available external and domestic climate finance sources as efficiently as possible if it is to transition its economy to a lower-carbon growth path while at the same time addressing its significant socio-economic challenges and taking steps to ensure that the country is able to adapt to the inevitable impacts of man-made climate change. In order to do this, a good understanding is required of the current and likely future international climate finance architecture.',
          year: 2011,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/climatechnage_literaturereport_dbsasynthesis.pdf");}}>link</button>]
        },
        {
          type: 'Finance',
          program: '',
          name: 'High Level Consultation with Finance Sector on Climate Change and Funding Mechanisms',
          description: 'Based on the climate finance stakeholder engagements across various stakeholder groups and complementary information from international surveys, studies and report an analysis of the current understanding of stakeholders regarding climate change and the various financing options available for climate change solutions is presented.',
          year: 2011,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/financial_sector_consultation.pdf");}}>link</button>]
        },
        {
          type: 'Finance',
          program: '',
          name: 'Financing Climate Change',
          description: 'This report synthesizes research that was conducted in order to strengthen the financing component of the National Climate Change Response White Paper.',
          year: 2011,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/financing_climate_change.pdf");}}>link</button>]
        },
        {
          type: 'Finance',
          program: '',
          name: 'Institutional Funding Mechanisms: Case Study Review',
          description: 'This paper aims to identify an appropriate institutional model for climate change finance in South Africa. It first provides a comparative case study of international and national financial mechanisms that provide financial and other resources for climate change, the environment or, more broadly, sustainable development.',
          year: 2011,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/institutional_funding_mechanisms.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Opportunities for and Costs of Mitigation in South African Economy',
          description: 'This report provides an overview of issues pertaining to climate change mitigation relevant to South Africa, and highlights the threats and opportunities that climate mitigation presents for national development.',
          year: 2011,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/cost_mitigation_opportunities.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Environmental Research and Technologies in South Africa',
          description: 'This report argues that South Africa will need significant human capital and a sound science and technology base to develop and implement robust adaptation and mitigation strategies that will militate against the negative impacts of climate change, while simultaneously providing the possibility of an internationally competitive economic trajectory.',
          year: 2011,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/environmental_research_technologies.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'The Green Economy Modelling Report of South Africa: A focus on Natural Resource Management, Agriculture, Transport and Energy sectors',
          description: 'The present study presents a modelling exercise that compares a scenario of investments directed to \'business-as-usual\' (BAU) with scenarios of investments allocated to four critical sectors for a transition to a green economy in South Africa, namely: natural resource management, agriculture, transport and energy.',
          year: 2013,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/greeneconomy_modelingreport.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: '',
          name: 'South Africa\'s First Biennial Update Report',
          description: 'The Republic of South Africa submits BUR-1 under the United Nations Framework Convention on Climate Change (UNFCCC). This report follows the Biennial Reporting Guidelines for Parties not included in Annex I to the Convention and therefore comprises of the following seven chapters: I. National circumstances, II. National Greenhouse Gas Inventory, III. Mitigation actions and their effects, IV. Finance, Technology and Capacity, Building Needs and Support Received, V. Support received for preparation of BUR, VI. Measurement, Reporting and Verification, VII. Additional Information. Each chapter is summarises and highlights the progress made in South Africa\'s response to climate change, since reporting in BUR-1.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/sa1stbiennialupdatereport.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Climate Change Mitigation Policy Mainstreaming',
          description: 'The main objective of this study is to provide policy gap analysis of the alignment of existing legislation, policy, strategies, plans and regulatory frameworks in five key sectors with the National Climate Change Response Policy (NCCRP). The policy gap analysis shows the areas where alignment with identified NCCRP mitigation principles are lacking, and highlights priority areas to focus alignment efforts. The sectors considered are: Agriculture, forestry and other land use (AFOLU); Energy; Industry; Transport and Waste.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/climatechange_mitigationpolicy_mainstreaming.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Current carbon stock estimation capability for South African commercial forest plantations',
          description: 'The South African forest plantation industry requires country-\'specific carbon accounting/ estimation methods that are compatible with a wide range of existing local and/or regional forest plantation inventory and management systems. For this reason the Institute for Commercial Forestry Research (ICFR) was commissioned by the Department of Environmental Affairs (DEA) to conduct a scoping study to assess data availability for the development of local carbon estimation equations for all commercial plantation sites and species within the three major genera grown (i.e. pine, eucalypt and wattle), as well as the availability and access to grower activity data.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/carbonstocks_report2015_southafrica.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s Greenhouse Gas Mitigation Potential Analysis',
          name: 'Mitigation report: South Africa\'s Greenhouse Gas Mitigation Potential Analysis',
          description: 'A greenhouse gas mitigation potential analysis has been conducted for South Africa. The analysis has identified and analysed mitigation options in key economic sectors. In the process, an updated projection of national greenhouse gas (GHG) emissions into the future has been developed, along with marginal abatement cost curves (MACCs) for key sectors and subsectors. A socio-economic and environmental assessment of the identified mitigation options has also been conducted, leading to the development of national abatement pathways and an assessment of the wider macro-economic impacts of implementing a broad set of mitigation options.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/mitigationreport.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s Greenhouse Gas Mitigation Potential Analysis',
          name: 'Technical Appendix A \' Approach and Methodology',
          description: 'A greenhouse gas mitigation potential analysis has been conducted for South Africa. The analysis has identified and analysed mitigation options in key economic sectors. In the process, an updated projection of national greenhouse gas (GHG) emissions into the future has been developed, along with marginal abatement cost curves (MACCs) for key sectors and subsectors. A socio-economic and environmental assessment of the identified mitigation options has also been conducted, leading to the development of national abatement pathways and an assessment of the wider macro-economic impacts of implementing a broad set of mitigation options.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/appendixA_approachandmethodology.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s Greenhouse Gas Mitigation Potential Analysis',
          name: 'Technical Appendix B \' Macroeconomic Modelling',
          description: 'A greenhouse gas mitigation potential analysis has been conducted for South Africa. The analysis has identified and analysed mitigation options in key economic sectors. In the process, an updated projection of national greenhouse gas (GHG) emissions into the future has been developed, along with marginal abatement cost curves (MACCs) for key sectors and subsectors. A socio-economic and environmental assessment of the identified mitigation options has also been conducted, leading to the development of national abatement pathways and an assessment of the wider macro-economic impacts of implementing a broad set of mitigation options.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/appendixB_macroeconomicmodelling.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s Greenhouse Gas Mitigation Potential Analysis',
          name: 'Technical Appendix C \' Energy Sector',
          description: 'A greenhouse gas mitigation potential analysis has been conducted for South Africa. The analysis has identified and analysed mitigation options in key economic sectors. In the process, an updated projection of national greenhouse gas (GHG) emissions into the future has been developed, along with marginal abatement cost curves (MACCs) for key sectors and subsectors. A socio-economic and environmental assessment of the identified mitigation options has also been conducted, leading to the development of national abatement pathways and an assessment of the wider macro-economic impacts of implementing a broad set of mitigation options.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/appendixC_%20energysector.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s Greenhouse Gas Mitigation Potential Analysis',
          name: 'Technical Appendix D \' Industry Sector',
          description: 'A greenhouse gas mitigation potential analysis has been conducted for South Africa. The analysis has identified and analysed mitigation options in key economic sectors. In the process, an updated projection of national greenhouse gas (GHG) emissions into the future has been developed, along with marginal abatement cost curves (MACCs) for key sectors and subsectors. A socio-economic and environmental assessment of the identified mitigation options has also been conducted, leading to the development of national abatement pathways and an assessment of the wider macro-economic impacts of implementing a broad set of mitigation options.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/appendixD_industrysector.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s Greenhouse Gas Mitigation Potential Analysis',
          name: 'Technical Appendix E \' Transport Sector',
          description: 'A greenhouse gas mitigation potential analysis has been conducted for South Africa. The analysis has identified and analysed mitigation options in key economic sectors. In the process, an updated projection of national greenhouse gas (GHG) emissions into the future has been developed, along with marginal abatement cost curves (MACCs) for key sectors and subsectors. A socio-economic and environmental assessment of the identified mitigation options has also been conducted, leading to the development of national abatement pathways and an assessment of the wider macro-economic impacts of implementing a broad set of mitigation options.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/appendixE_transportsector.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s Greenhouse Gas Mitigation Potential Analysis',
          name: 'Technical Appendix F \' Waste Sector',
          description: 'A greenhouse gas mitigation potential analysis has been conducted for South Africa. The analysis has identified and analysed mitigation options in key economic sectors. In the process, an updated projection of national greenhouse gas (GHG) emissions into the future has been developed, along with marginal abatement cost curves (MACCs) for key sectors and subsectors. A socio-economic and environmental assessment of the identified mitigation options has also been conducted, leading to the development of national abatement pathways and an assessment of the wider macro-economic impacts of implementing a broad set of mitigation options.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/appendixF_wastesector.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s Greenhouse Gas Mitigation Potential Analysis',
          name: 'Technical Appendix G \' Agriculture, Forestry and Other Land Use (AFOLU) Sector',
          description: 'A greenhouse gas mitigation potential analysis has been conducted for South Africa. The analysis has identified and analysed mitigation options in key economic sectors. In the process, an updated projection of national greenhouse gas (GHG) emissions into the future has been developed, along with marginal abatement cost curves (MACCs) for key sectors and subsectors. A socio-economic and environmental assessment of the identified mitigation options has also been conducted, leading to the development of national abatement pathways and an assessment of the wider macro-economic impacts of implementing a broad set of mitigation options.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/appendixG_afolusector.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s Greenhouse Gas Mitigation Potential Analysis',
          name: 'Technical Summary',
          description: 'A greenhouse gas mitigation potential analysis has been conducted for South Africa. The analysis has identified and analysed mitigation options in key economic sectors. In the process, an updated projection of national greenhouse gas (GHG) emissions into the future has been developed, along with marginal abatement cost curves (MACCs) for key sectors and subsectors. A socio-economic and environmental assessment of the identified mitigation options has also been conducted, leading to the development of national abatement pathways and an assessment of the wider macro-economic impacts of implementing a broad set of mitigation options.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/technicalsummary.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: '',
          name: 'Multiple pathways to substainable development: Initial findings from Global South',
          description: 'The four national approaches to sustainable development reflect the particular experiences, circumstances, and priorities of the countries that adopted them. They are representative of the broad spectrum of sustainable development approaches that exist today.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/unep_substainabledevelopment.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: '',
          name: 'The National Climate Change Response Monitoring and Evaluation System Framework',
          description: 'The NCCRP notes that the measurement and monitoring of climate change responses are critical in ensuring their effective implementation, and that South Africa, through the coordination of the Department of Environmental Affairs (DEA), will design and publish the country\'s Climate Change Response Monitoring and Evaluation (M&E) System. Details of this M&E system are outlined in specific sections of the NCCRP.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/nationalclimatechangeresponse_MESF.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'A National Climate Change Monitoring and Evaluation system of the AFOLU Sector',
          description: 'The diverse nature of the AFOLU sector requires a robust monitoring system which will allow for the structured collection, collation and dissemination of information. AFOLU comprises a variety of sectors, ranging from agriculture to land use change. This study identifies the various mandates that are currently in place to collect AFOLU data.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/nationalclimatechange_monitoringevaluationsystem_afolusector.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Carbon Offset Standards and Methodologies Project Steering Committee',
          description: 'The National Terrestrial Carbon Sinks Assessment (NTCSA) for South Africa was primarily undertaken to improve our understanding of the distribution of carbon stocks and fluxes, equally important to identify landbased mitigation opportunities that can avoid or decrease emissions from the agriculture, forestry and other land use (AFOLU) sector.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/carbonoffset_standardsandmethodologies.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Assessment of the potential to produce biochar and its application to South African soils as a mitigation measure',
          description: 'Biochar is gradually gaining interest globally as a climate change mitigation measure in the agriculture forestry and other land use (AFOLU) sector. It is produced in the absence of oxygen through a process called pyrolysis, mainly from biomass material. However, a host of other materials (feedstock) can be used. Several studies in different areas across the world have demonstrated that deploying biochar in soils results in benefits that include enhanced agricultural yield, a reduction in leaching of nutrients, a reduction in soil acidity, increased soil water retention and a reduction in fertilizer use and irrigation requirements.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/biocharreport2015.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South African National Terrestrial Carbon Sinks Assessment',
          name: 'Research Synopsis Report',
          description: 'The National Terrestrial Carbon Sinks Assessment (NTCSA) is a first of its kind for South Africa and was commissioned following a directive from the National Climate Change Response Policy (NCCRP). Given this, the aim was to assess the national carbon sinks in relation to afforestation, forest restoration, wetlands, agricultural practices and urban greening.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/nationalterrestrial_carbonsinks_synopsisreport.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South African National Terrestrial Carbon Sinks Assessment',
          name: 'Section 1: Introduction of the South African National Terrestrial Carbon Sinks Assessment',
          description: 'The National Terrestrial Carbon Sinks Assessment (NTCSA) is a first of its kind for South Africa and was commissioned following a directive from the National Climate Change Response Policy (NCCRP). Given this, the aim was to assess the national carbon sinks in relation to afforestation, forest restoration, wetlands, agricultural practices and urban greening.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/nationalterrestrial_carbonsinksassessment_sect1.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South African National Terrestrial Carbon Sinks Assessment',
          name: 'Section 2: Phase 2 - Understanding potential climate change mitigation opportunities',
          description: 'The National Terrestrial Carbon Sinks Assessment (NTCSA) is a first of its kind for South Africa and was commissioned following a directive from the National Climate Change Response Policy (NCCRP). Given this, the aim was to assess the national carbon sinks in relation to afforestation, forest restoration, wetlands, agricultural practices and urban greening.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/nationalterrestrial_carbonsinksassessment_sect2.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South African National Terrestrial Carbon Sinks Assessment',
          name: 'Section 3: Review of existing policy',
          description: 'The National Terrestrial Carbon Sinks Assessment (NTCSA) is a first of its kind for South Africa and was commissioned following a directive from the National Climate Change Response Policy (NCCRP). Given this, the aim was to assess the national carbon sinks in relation to afforestation, forest restoration, wetlands, agricultural practices and urban greening.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/nationalterrestrial_carbonsinksassessment_sect3.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South African National Terrestrial Carbon Sinks Assessment',
          name: 'Section 4: Assessment - Suggested future amendments to policy',
          description: 'The National Terrestrial Carbon Sinks Assessment (NTCSA) is a first of its kind for South Africa and was commissioned following a directive from the National Climate Change Response Policy (NCCRP). Given this, the aim was to assess the national carbon sinks in relation to afforestation, forest restoration, wetlands, agricultural practices and urban greening.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/nationalterrestrial_carbonsinksassessment_sect4.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Report on the Implementation Evaluation of the Effectiveness of Environmental Governance in the Mining Sector',
          description: 'The purpose of this evaluation is to assess the relevance and effectiveness of the environmental governance legislation in mining and the implementation thereof in achieving its objective. The evaluation covers the period from the promulgation of the Minerals Act, 1991 (Act 50 of 1991) (the Minerals Act) up to the legislation in place as of March 2014. Given that amendments to the legislation were implemented on 8 December 2014, a post-script has been appended to the evaluation that details the context of these amendments and how they relate to the analysis and recommendations raised as part of this evaluation.',
          year: 2015,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/report_environmentalgovernance_miningsector.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'South Africa\'s first annual Climate Change report',
          name: 'Theme E: The Adaptation Landscape: Desired Adaptation Outcomes, Adaptation Projects and Intended Nationally Determined Contribution',
          description: 'Theme E is comprised of three chapters describing: Desired Adaptation Outcomes (DAOs) for Monitoring and Evaluating Climate Resilience, which sets out to inform and focus M&E of South Africa\'s progress towards a climate resilient society, with the Desired Adaptation Outcomes (DAOs) developed from sector specific adaptation priorities. Currently the sectors are biodiversity, water, health, human settlements and disaster management. Climate Change Adaptation Projects, the second chapter, outlines the approach taken and presents results achieved to date by climate change adaptation projects, while the third chapter, Setting the Scene for Monitoring Progress Toward Achieving the Intended Nationally Determined Contribution (INDC) from South Africa, sets out the components and goals of the INDC for the period up to 2030.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeE_adaptation_landscape.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'South Africa\'s first annual Climate Change report',
          name: 'Theme G: Climate Change Adaptation Governance and Management',
          description: 'Enabling Legislative Framework which starts by outlining the overarching legislation with explicit reference to climate change adaptation, with the emphasis on the Disaster Management Amendment Bill of 2015. The following section deals with overarching legislative instruments with implied provision for climate change adaptation including the Spatial Planning and Land Use Management Act, 2013, (Act No.16 of 2013); the National Environmental Management Act, 1998 (Act No. 107 of 1998); the National Water Act, 1998 (Act No. 36 of 1998) and the National Housing Code Technical and General Guidelines (Part 3). The second component of the Theme deals with the Enabling Environment for Climate Change Adaptation Governance and Management in Spheres of Government, presenting first the methodology used to collect information on the enabling environment, followed by the perspective of National Departments on incorporating adaptation strategies into policy and planning, and on mainstreaming adaptation into policies and plans. This is followed by sections on climate technology transfer, on provincial and then municipal / local municipal perspectives.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeG_adaptation_governance_management.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Climate Change Adaptation Perspectives for the South African Development Community (SADC)',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltasbook1of7_perspectivesfortheSADC.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Climate Information and early warning systems for supporting the Disaster Risk Reduction and Management Sector in South Africa under Future Climates',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltasbook2of7_climateinformationandearlywarningsystemsforsupportingtheDRR.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Climate Change Adaptation Perspectives for Disaster Risk Reduction and Management in South Africa',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltasbook3of7_perspectivesfordisasterriskreductionandmanagement.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Climate Change Adaptation Perspectives on Urban, Rural, and Coastal Human Settlements in South Africa',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltasbook4of7_perspectivesonurban-ruralandcoastalhuman_settlementsinSA.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Climate Change Adaptation Perspectives on Food Security in South Africa',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltasbook5of7_climatechangeadaptationperspectivesofoodsecurityinSA.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Climate Change Adaptation Perspectives to future Climates in South Africa',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltasbook6of7_economicsofadaptationtofutureclimatesinSA.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Long Term Adaptation Scenarios for South Africa',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltasbook7of7_longtermadaptationscenariosforSA.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Factsheet 1 of 7 - Perspectives for SADC',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltasfactsheet_perspectiveforSADC.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Factsheet 2 of 7 - Climate Information and Early Warning Systems',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltas_factsheet_climateinformationandearlywarningsystems.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Factsheet 3 of 7 - Disaster risk reduction and management',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltas_factsheet_disasterriskreductionandmanagement.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Factsheet 4 of 7 - Human Settlements',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltas_factsheet_climatechangeimpactsonhumansettlement.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Factsheet 5 of 7 - Food Security',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltas_factsheet_climatechangeimpactsonfoodsecurity.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Factsheet 6 of 7 \' Economics',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltas_factsheet6_economics.pdf");}}>link</button>]
        },
        {
          type: 'Adaptation',
          program: 'The Long-Term Adaptation Flagship Research Programme (LTAS)',
          name: 'Factsheet 7 of 7 - Scenarios',
          description: 'The Long-Term Adaptation Flagship Research Programme (LTAS) responds to the South African National Climate Change Response White Paper by undertaking climate change adaptation research and scenario planning for South Africa and the Southern African sub-region.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/ltasfactsheet_longtermadaptationscenario.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: '',
          name: 'South Africa\'s Second National Climate Change Report',
          description: 'This 2016/17 report includes chapters on (i) quantifying and profiling the impact of ongoing or recently completed mitigation actions (ii) progress in the work on climate change flagship programmes (iii) lessons learn from the recent drought phenomenon (iv) progress in the development of the national adaptation strategy and desired adaptation outcomes (v) progress in establishing a credible national tracking system for key climate change actions in the country, etc.',
          year: 2017,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/southafrica_secondnational_climatechnage_report2017.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: 'South Africa\'s first annual Climate Change report',
          name: 'Theme A: Synopsis',
          description: 'The objective of this report is to communicate the progress and lessons learnt in tracking South Africa\'s transition towards a climate resilient society and a lower carbon economy. As a knowledge product, this report aims to target people and institutions involved in technical, coordination and policy aspects of climate change, including those undertaking work relevant to these aspects of climate change. This annual report is seen as part of the broader programme to communicate regular reporting of climate change relevant information to the South African audience.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeA_climatechangeresponse_annualreport.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: 'South Africa\'s first annual Climate Change report',
          name: 'Theme B: South Africa\'s Climate Change Monitoring and Evaluation System is made up of the following sections:',
          description: 'South Africa\'s Climate Change Monitoring and Evaluation System which presents the objectives of the monitoring and evaluation (M&E) system, its benefits and an overview of the system, The National Climate Change Response M&E System Agriculture, Forestry and Other Land Uses (AFOLU): Demystifying the Measurement, Reporting and Verification of this Specialised Sector, The Greenhouse Gas Inventory Improvement Programme (GHGIP).',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeB_monitoring_evaluation.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: 'South Africa\'s first annual Climate Change report',
          name: 'Theme C: Climate Change Trends, Risks, Impacts and Vulnerabilities',
          description: 'Theme C is comprised of two chapters, namely: Observed Trends in the Climate of South Africa, which analyses observed temperature and rainfall trends over the past few decades and drivers of variability of South Africa\'s climate. Climate Change Risks, Impacts and Vulnerabilities in South Africa, emphasising climate change as a stress multiplier.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeC_vulnerabilities_risks.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: 'South Africa\'s first annual Climate Change report',
          name: 'Theme F: Climate Finance is structured according to the sources of finance',
          description: 'Domestic Public Climate Finance to support the transition towards a lower carbon economy, and national public funding mechanisms to support the transition to a climate resilient society and economy as well as outlining challenges, gaps and key success factors on funding climate resilience. The focus then shifts to; Bilateral and Multilateral Finance addressing issues on international finance mechanisms related to climate resilience as well as on bilateral finance, followed by short sections on Private Finance and; Civil Society Finance.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeF_climate_finance.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s first annual Climate Change report',
          name: 'Theme D: Tracking South Africa\'s Transition to a Lower Carbon Economy reviews the following:',
          description: 'National Level Indicators, including sustainable carbon levels and comparisons with various trajectories, indicators of lower carbon consumption and productivity and lower carbon resourcing, followed by; Key National and Industrial Mitigation Response Measures, looking at the mitigation impact of these measures and their impact on other sustainable development indicators, and Low Carbon Development in Provinces and Cities, assessing actions taken by provincial governments, metros and secondary cities, followed by a wide-ranging; Appendix on Response Measures by individuals, groups and sectors in energy efficiency, electricity generation and transportation, as well as a review of Clean Development Mechanism projects and the Extended Public Works Programme (EPWP).',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeD_lowercarbon_economy.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s first annual Climate Change report',
          name: 'Theme H: The Near-term Priority Climate Change Flagship Programmes',
          description: 'The flagship programmes contribute significantly to making South Africa\'s climate action development and implementation process predictable, continuous and optimised by establishing a pipeline of investment-grade climate change response programmes and projects. The programmes provide the necessary infrastructure to enable climate action at scale.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeH_flagship_programme.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'South Africa\'s first annual Climate Change report',
          name: 'Theme I: Key Outcomes of COP 21',
          description: 'Marking the culmination of a four-year negotiating round that started at the 17th Conference of the Parties (COP) to the United Nations Framework Convention on Climate Change (UNFCCC) in Durban in 2011, the \'Paris Outcome\' of the 21st COP is made up of three main elements: The Paris Agreement: An enduring, legally binding treaty on climate action starting in 2020, the Paris Agreement will enter into force once 55 countries covering 55% of global emissions have acceded to it. The COP Decision: This is a set of decisions that the COP agreed to prepare for implementing the Paris Agreement once it enters into force. The Paris Action Agenda: These are additional commitments, which were taken at COP 21 parallel to the formal agreements, by countries, regions, cities, investors, and companies for additional climate action.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/themeI_cop21_keyoutcomes.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Towards the development of a GHG emissions baseline for the Agriculture, Forestry and Other Land Use (AFOLU) sector in South Africa',
          description: 'The purpose of this report is to provide the first emissions baseline for the AFOLU sector in South Africa. Due to the complexity of the AFOLU sector, the agriculture and land sub-sector baselines were developed separately but reported as one combined baseline. Furthermore, the study also developed baselines for each province as part of enhancing our understanding of emissions dynamics at a finer scale.',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/afolu_research_report.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'Greenhouse Gas Improvement Programme',
          name: 'Strategic Climate Policy Fund - Improvement of the Greenhouse Gas Emissions Inventory for the Agricultural Sector',
          description: 'Greenhouse Gas Improvement Programmes (GHGIP) refers to a series of sector-specific projects aimed at improving the quality and accuracy of the National Greenhouse Gas Inventory. The GHGIP is a result of a collaborative effort by the Department of Environmental Affairs working with other relevant agencies and industry sectors. A majority of projects are donor funded with clear objectives and targets primarily focusing on the improvement of estimation methodologies, activity data and development of country-specific emission factors. The sectors covered in the GHGIP are the Energy Sector, Industrial Processes and Product Use (IPPU), Agriculture, Forestry and Land Use (AFOLU).',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/publications/strategicclimate_policyfund_report.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'Greenhouse Gas Improvement Programme',
          name: 'The Calculation of Country Specific Emission Factors for the Stationary Combustion of Fuels in the Electricity Generation Sector',
          description: 'Greenhouse Gas Improvement Programmes (GHGIP) refers to a series of sector-specific projects aimed at improving the quality and accuracy of the National Greenhouse Gas Inventory. The GHGIP is a result of a collaborative effort by the Department of Environmental Affairs working with other relevant agencies and industry sectors. A majority of projects are donor funded with clear objectives and targets primarily focusing on the improvement of estimation methodologies, activity data and development of country-specific emission factors. The sectors covered in the GHGIP are the Energy Sector, Industrial Processes and Product Use (IPPU), Agriculture, Forestry and Land Use (AFOLU).',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/publications/calculationofcountryspecificemissionfactors.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: 'Greenhouse Gas Improvement Programme',
          name: 'Survey on economy-wide fuel consumption with emphasis on demand-side sectors',
          description: 'Greenhouse Gas Improvement Programmes (GHGIP) refers to a series of sector-specific projects aimed at improving the quality and accuracy of the National Greenhouse Gas Inventory. The GHGIP is a result of a collaborative effort by the Department of Environmental Affairs working with other relevant agencies and industry sectors. A majority of projects are donor funded with clear objectives and targets primarily focusing on the improvement of estimation methodologies, activity data and development of country-specific emission factors. The sectors covered in the GHGIP are the Energy Sector, Industrial Processes and Product Use (IPPU), Agriculture, Forestry and Land Use (AFOLU).',
          year: 2016,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/publications/surveyoneconomy-widefuelconsumption_ondemand-sidesectors.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: '',
          name: 'South Africa\'s Second Biennial Update Report',
          description: 'The Republic of South Africa submits BUR-2 under the United Nations Framework Convention on Climate Change (UNFCCC). This report follows the Biennial Reporting Guidelines for Parties not included in Annex I to the Convention and therefore comprises of the following seven chapters: I. National circumstances, II. National Greenhouse Gas Inventory, III. Mitigation actions and their effects, IV. Finance, Technology and Capacity, Building Needs and Support Received, V. Support received for preparation of BUR, VI. Measurement, Reporting and Verification, VII. Additional Information. Each chapter is summarises and highlights the progress made in South Africa\'s response to climate change, since reporting in BUR-1.',
          year: 2017,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://unfccc.int/files/national_reports/non-annex_i_parties/biennial_update_reports/application/pdf/south_africa_2nd_bur.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'The South African Carbon Sinks Atlas 2017',
          description: 'The Carbon Sinks Atlas (CSA) is a web-based data and information tool aimed at providing spatial distribution of carbon stocks and fluxes across South Africa and it is the first of its kind. In this first edition, the CSA details soil and vegetation\'s carbon content in the form of carbon data layers (maps) and metadata, based on the National Terrestrial Carbon Sinks Assessment (NTCSA).',
          year: 2017,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/carbonsinks_southafricanatlas2017.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Integration of the Carbon Tax and Carbon Budgets in South Africa',
          description: 'This paper provides recommendations for combining the carbon budget with the carbon tax to support delivery of South Africa\'s emissions reduction targets beyond 2020. While both the carbon tax and carbon budget approach have merits, economic theory would suggest that there could be risks associated with applying both instruments to the same emissions at the same time.',
          year: 2017,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/carbontax_integration_carbonbudget.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: '',
          name: 'South Africa\s Third National Communication',
          description: 'The initial National Communication in accordance with Article 12 of the United Nations Framework Convention on climate Change (UNFCCC) was prepared in 2004, followed by the second communication in 2011. This document constitutes South Africa\'s Third National Communication (TNC). The document follows suggested UNFCCC guidelines for developing countries in reporting on national circumstances; a national Greenhouse Gas (GHG) Inventory for the period 2011-2012; climate change over South Africa in terms of trends and projected changes, vulnerability assessments and national adaptation strategies; measures to mitigate climate change; and other information relevant to the Convention (including a technology needs assessment, research and systematic observations and climate change education, training, awareness and capacity building needs).',
          year: 2018,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://unfccc.int/sites/default/files/resource/South%20African%20TNC%20Report%20%20to%20the%20UNFCCC_31%20Aug.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: '',
          name: 'Policy brief: towards a policy on indigenous bush encroachment in South Africa',
          description: 'Bush encroachment entails increased abundance of indigenous woody vegetation in the grassland and savanna biomes. In South Africa, where these biomes make up 27.9% and 32.5% of the land surface area, respectively, there has been a significant increase in tree cover since national-scale aerial photography was first undertaken in the 1940s.',
          year: 2019,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/indigenousbushencroachment_policybrief.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: '',
          name: 'Towards a policy on indigenous bush encroachment in South Africa',
          description: 'The aims of this study were to review the extent and causes of the problem in South Africa, broadly evaluate its impacts, determine the policy stance that South Africa should take towards bush encroachment and identify appropriate policy responses.',
          year: 2019,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/indigenousbushencroachment.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Identification and mapping of soils rich in organic carbon in South Africa as a climate change mitigation option',
          description: 'The main purposes of this project were to develop maps, in detail and at high resolution, of soil organic carbon content as percentages and as stocks of soils across the entire South Africa; use the above maps as an input to the current electronic based National Carbon Sinks Atlas; with a focus on areas with soils high in organic carbon.',
          year: 2019,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/identificationandmapping_soilsrich_organiccarboninsouthafrica.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Sustainability of Decentralised Renewable Energy Systems report',
          description: 'The purpose of the study was to stimulate the sustainable roll out of decentralised renewable energy system solutions to mitigate climate change and provide energy access where there is no mains electricity; the ultimate goal being to drive sustainable development by informing government policy and strategy on these issues.',
          year: null,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/decentralised_renewableenergysystems_report.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Facilitation of large-scale uptake of alternative transport fuels in South Africa \' the case for Biogas',
          description: 'The Department of Environment Affairs has completed the study to facilitate the large-scale uptake of alternative transport fuels in South Africa \' the case for biogas. The main objective of this study is to establish an understanding of the economic and practical potential for CBG as an alternative transport fuel and GHG mitigation measure. This could provide the basis for the further development of policies promoting biogas for transport and the emergence of a national CBG industry.',
          year: null,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/bioagas_report.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'Freight Shift from Road to Rail report',
          description: 'The Department of Environment Affairs has recently completed a Mitigation Potential Analysis (MPA) for South Africa aimed at identifying priority mitigation measures which will significantly reduce greenhouse gas emissions. One of the most favourable measures, taking both the extent of mitigation of emissions and the associated social and economic impacts in to consideration is the shift of freight from road to rail.',
          year: null,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/publications/freightshift_roadtorail.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'South Africa\'s Climate Change Technology Needs Assessment',
          description: 'This report is the outcome of a stakeholder-driven Technology Needs Assessment (TNA) to identify and assess environmentally sound technologies that will, within national development objectives, reduce the impact of climate change and the rate of greenhouse gas emissions in South Africa.',
          year: 2007,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/documents/south-africas-climate-change-technology-needs-assessment-2007");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'GHG National Inventory Report South Africa 2000 - 2012',
          description: 'This report documents South Africa\'s submission of its national greenhouse gas inventory for the year 2012. It also reports on the GHG trends for the period 2000 to 2012.',
          year: 2017,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/gng_nationalinventoryreport2000_2012.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'GHG Inventory for South Africa 2000 - 2010',
          description: 'This report documents South Africa\'s submission of its national greenhouse gas inventory for the year 2010. The reporting of these emissions is in line with the IPCC 2006 Guidelines.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/gng_nationalinventoryreport2000_2012.pdf");}}>link</button>]
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

export default DatatablePage;