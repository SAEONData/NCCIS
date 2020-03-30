import React from 'react';
import { MDBDataTable } from 'mdbreact';
import ClimateChangeStatusQuofortheFreeStateProvince from '../content/pdfs/ClimateChangeStatusQuofortheFreeStateProvince.pdf';
import ClimateChangeModelProjectionfortheFreeStateProvince from '../content/pdfs/ClimateChangeModelProjectionfortheFreeStateProvince.pdf';
import VulnerabilityAssessmentforFreeStateProvince from '../content/pdfs/VulnerabilityAssessmentforFreeStateProvince.pdf';
import KZNDraftClimateChangeActionPlan from '../content/pdfs/KZNDraftClimateChangeActionPlan.pdf';
import AdaptationStrategiesforLimpopoProvince from '../content/pdfs/AdaptationStrategiesforLimpopoProvince.pdf';
import AdaptationStrategiesforMpumalangaProvince from '../content/pdfs/AdaptationStrategiesforMpumalangaProvince.pdf';
import VulnerabilityAssessmentforMpumalangaProvince from '../content/pdfs/VulnerabilityAssessmentforMpumalangaProvince.pdf';
import VulnerabilityAssessmentforNorthWestProvince from '../content/pdfs/VulnerabilityAssessmentforNorthWestProvince.pdf';
import AdaptationStrategiesforNorthWestProvince from '../content/pdfs/AdaptationStrategiesforNorthWestProvince.pdf';
import ClimateChangeModelProjectionsFortheNorthernCapeProvince from '../content/pdfs/ClimateChangeModelProjectionsFortheNorthernCapeProvince.pdf';
import VulnerabilityAssessmentforNorthernCapeProvince from '../content/pdfs/VulnerabilityAssessmentforNorthernCapeProvince.pdf';
import ClimateChangeStatusQuofortheNorthernCapeProvince from '../content/pdfs/ClimateChangeStatusQuofortheNorthernCapeProvince.pdf';


const ProvincialData = () => {
  const data = {
    columns: [
      {
        label: 'Province',
        field: 'province',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Document',
        field: 'document',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Link',
        field: 'link',
        sort: 'asc',
        width: 200
      }
    ],
    rows: [
      {
        province: "Eastern Cape",
        document: "Eastern Cape Climate Change Response Strategy",
        date: 2011,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.cityenergy.org.za/uploads/resource_182.pdf");}}>View Document <em className="fa fa-file-pdf-o"></em></button>]
      },
      {
        province: "Free State",
        document: "Climate Change Status Quo Report",
        date: 2015,
        link: [<a className="dataLink" href={ClimateChangeStatusQuofortheFreeStateProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "Free State",
        document: "Climate Change Model Projection for the Free State Province",
        date: 2015,
        link: [<a className="dataLink" href={ClimateChangeModelProjectionfortheFreeStateProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "Free State",
        document: "Vulnerability Assessment for the Free State Province",
        date: 2015,
        link: [<a className="dataLink" href={VulnerabilityAssessmentforFreeStateProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "Gauteng",
        document: "Report on the updated climate change projections and broad risk and vulnerability assessment of selected sectors",
        date: 2017,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.redirect1.gpg.gov.za/gchip/Documents/Gauteng%20Climate%20Change%20Risk%20and%20vulnerability%20assessment%20-%202017.pdf");}}>View Document <em className="fa fa-file-pdf-o"></em></button>]
      },
      {
        province: "KwaZulu-Natal",
        document: "Draft Climate Change ActionPlan",
        date: 2014,
        link: [<a className="dataLink" href={KZNDraftClimateChangeActionPlan} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "Limpopo",
        document: "Climate Support Programme (CSP) – Climate Change Adaptation Strategies: Adaptation Strategies for Limpopo Province ",
        date: 2015,
        link: [<a className="dataLink" href={AdaptationStrategiesforLimpopoProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "Limpopo",
        document: "Climate Support Programme (CSP) - Climate Change Adaptation Strategies: Adaptation Strategies for Limpopo Province",
        date: 2013,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/limpopogreen_economyplan.pdf");}}>View Document <em className="fa fa-file-pdf-o"></em></button>]
      },
      {
        province: "Mpumalanga",
        document: "Adaptation Strategies for Mpumalanga Province",
        date: 2015,
        link: [<a className="dataLink" href={AdaptationStrategiesforMpumalangaProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "Mpumalanga",
        document: "Mpumalanga Provincial Climate Change Vulnerability Assessment Report",
        date: 2015,
        link: [<a className="dataLink" href={VulnerabilityAssessmentforMpumalangaProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "North West",
        document: "North West Provincial Climate Change Vulnerability Assessment Report",
        date: 2015,
        link: [<a className="dataLink" href={VulnerabilityAssessmentforNorthWestProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "North West",
        document: "Provincial Climate Change Vulnerability Assessment Report",
        date: 2015,
        link: [<a className="dataLink" href={AdaptationStrategiesforNorthWestProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "Northern Cape",
        document: "Northern Cape Climate Change Projections",
        date: 2015,
        link: [<a className="dataLink" href={ClimateChangeModelProjectionsFortheNorthernCapeProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "Northern Cape",
        document: "Northern Cape Climate Change Vulnerability Assessment",
        date: 2015,
        link: [<a className="dataLink" href={VulnerabilityAssessmentforNorthernCapeProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "Northern Cape",
        document: "Northern Cape Climate Change Status Quo",
        date: 2015,
        link: [<a className="dataLink" href={ClimateChangeStatusQuofortheNorthernCapeProvince} target="_blank">View Document <em className="fa fa-file-pdf-o"></em></a>]
      },
      {
        province: "Western Cape",
        document: "Western Cape Climate Change Response Strategy",
        date: 2014,
        link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.westerncape.gov.za/text/2015/march/western_cape_climate_change_response_strategy_2014.pdf");}}>View Document <em className="fa fa-file-pdf-o"></em></button>]
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

export default ProvincialData;