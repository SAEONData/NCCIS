import React from 'react';
import { MDBDataTable } from 'mdbreact';

const InternationalData = () => {
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
        label: 'Link Program',
        field: 'linkprogram',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Link South African Contribution',
        field: 'linksa',
        sort: 'asc',
        width: 250
      }
    ],
    rows: [
      {
        title: "Paris Agreement and South Africa's Nationally Determined Contribution Goals",
        description: "The central aim of the Paris Agreement (UN, 2015a) is the long-term goal of holding global average temperature increase to well below 2\'C, and pursuing efforts to limit this to 1.5\'C above pre-industrial levels. The Paris Agreement also requires countries to effectively implement their national climate change commitments and to increase their \'ambition\' over time. Achieving these goals requires finance, with the Agreement aiming to make all financial flows consistent with a pathway towards low-emissions, climate-resilient development.",
        linkprogram: [<button onClick={(event) => {event.preventDefault(); window.open("https://unfccc.int/");}}>link</button>],
        linksa: [<button onClick={(event) => {event.preventDefault(); window.open("https://www4.unfccc.int/sites/ndcstaging/PublishedDocuments/South%20Africa%20First/South%20Africa.pdf");}}>link</button>]
      },
      {
        title: "UN Sustainable Development Goals",
        description: "The 2030 Agenda on Sustainable Development (adopted by UN member states in 2015) consists of 17 goals, 169 targets and 231 indicators (UN, 2015b). The targets are defined as aspirational and global, with each government setting its own national targets guided by the global \'ambition\' but taking into account national circumstances. Goal 13 \'climate action\' (take urgent action to combat climate change and its impacts) comprises five targets, which are of particular relevance to climate change action in South Africa.",
        linkprogram: [<button onClick={(event) => {event.preventDefault(); window.open("https://unstats.un.org/sdgs/ ");}}>link</button>],
        linksa: [<button onClick={(event) => {event.preventDefault(); window.open("https://sustainabledevelopment.un.org/index.php?page=view&type=30022&nr=1137&menu=3170");}}>link</button>]
      },
      {
        title: "UN Convention to Combat Desertification (UNCCD)",
        description: "The UN Convention to Combat Desertification (UNCCD) adopted a 10-year strategy in 2007 for the period 2008-2018 (UN, 2008). Four \'strategic objectives\' were identified to guide actions and a number of \'expected impacts\' capture the intended long-term effects of these objectives. At UNCCD COP13 (2017), countries agreed a new Strategic Framework to address land degradation, which currently affects over a third of the world\'s land resources. The new UNCCD 2018-2030 Strategic Framework (UN, 2017) is the most comprehensive global commitment to achieve Land Degradation Neutrality. Actions will be guided by five strategic objectives, the expected impacts of which will be monitored by a set of indicators. Parties may also wish to report on progress towards expected impacts for strategic objectives 1-3 by using nationally-relevant quantitative indicators or qualitative information, as appropriate.",
        linkprogram: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.unccd.int/");}}>link</button>],
        linksa: [<button onClick={(event) => {event.preventDefault(); window.open("https://knowledge.unccd.int/countries/south-africa");}}>link</button>]
      },
      {
        title: "UN Human Settlements Programme",
        description: "In the strategic plan 2014-2019 for the UN Human Settlements Programme (UN, 2013), which is focussed on cities in the developing world, UN Habitat cites seven \'focus areas\'. Focus area 2: Urban planning and design recognises that cities are facing increasing challenges associated with the impacts of climate change and that the pressure to adapt to these impacts is mounting.",
        linkprogram: [<button onClick={(event) => {event.preventDefault(); window.open("https://unhabitat.org/urban-themes/climate-change/");}}>link</button>],
        linksa: [<button onClick={(event) => {event.preventDefault(); window.open("https://unhabitat.org/donor-relations/country/south-africa");}}>link</button>]
      },
      {
        title: "Sendai Framework for Disaster Risk Reduction",
        description: "The Sendai Framework for Disaster Risk Reduction 2015-2030 (UN, 2015c) outlines seven clear targets and four priorities for action to reduce existing and prevent new disaster risks. It aims to achieve a substantial reduction in disaster risk and loss of life, livelihoods and health, and of the cultural, economic, environmental, physical and social assets of people, businesses, communities and countries over a 15 year period. UNISDR is tasked with the implementation, follow-up and review of the Sendai Framework.",
        linkprogram: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.unisdr.org/we/coordinate/sendai-framework");}}>link</button>],
        linksa: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.unisdr.org/partners/countries/zaf");}}>link</button>]
      },
      {
        title: "Dresden Declaration on Biosphere Reserves and Climate Change",
        description: "Biosphere reserves are an effective instrument for mitigating climate change and serve as models for adaptation to the impacts of this change. This applies particularly in the domains of sustainable land use, green economies, safeguarding ecosystem services, energy efficiency and the use of renewable energies. Biosphere reserves are learning sites for sustainable development.",
        linkprogram: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/biospheredelaration_climatechange.pdf");}}>link</button>],
        linksa: "none"
      },
      {
        title: "Third National Communication Report for South Africa to United Nations Framework Convention on Climate Change (NO. 497 of 2017)",
        description: "The initial National Communication in accordance with Article 12 of the United Nations Framework Convention on climate Change (UNFCCC) was prepared in 2004, followed by the second communication in 2011. This document constitutes South Africa\'s Third National Communication (TNC). The document follows suggested UNFCCC guidelines for developing countries in reporting on national circumstances; a national Greenhouse Gas (GHG) Inventory for the period 2011-2012; climate change over South Africa in terms of trends and projected changes, vulnerability assessments and national adaptation strategies; measures to mitigate climate change; and other information relevant to the Convention (including a technology needs assessment, research and systematic observations and climate change education, training, awareness and capacity building needs).",
        linkprogram: "none",
        linksa: [<button onClick={(event) => {event.preventDefault(); window.open("https://unfccc.int/sites/default/files/resource/South%20African%20TNC%20Report%20%20to%20the%20UNFCCC_31%20Aug.pdf");}}>link</button>]
      },
      {
        title: "The State of Climate Change Science and Technology: First Biennial Report to Cabinet",
        description: "The output performance of the climate change research area compares favourably to the national average in terms of both publication rate (and citation rate) and high-level skills developed per million Rand invested. On average in South Africa, one publication results from about R1.8 million invested; in climate research, it averages about R670 000 per publication.",
        linkprogram: "none",
        linksa: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.gov.za/sites/default/files/gcis_document/201708/assaf-state-climate-change.pdf");}}>link</button>]
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

export default InternationalData;