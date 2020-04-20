import React from 'react';
import { MDBDataTable } from 'mdbreact';
import WMOExtremeClimateIndicesreport2019FIN from '../content/pdfs/WMOExtremeClimateIndicesreport2019FIN.pdf'
import AnnualStateoftheClimate2019 from '../content/pdfs/AnnualStateoftheClimate2019.pdf'

const ReportYearData = () => {
  const data = {
    columns: [
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Source',
        field: 'source',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Document Reference',
        field: 'docref',
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
        title: "Annual State of the Climate of South Africa 2019",
        source: "SAWS",
        docref: "WCS-CLS-CI-ASC-2019",
        link: [<a className="dataLink" href={AnnualStateoftheClimate2019} target="_blank">link</a>]
      },
      {
        title: "Trends in Extreme Climate Indices in South Africa 2019",
        source: "SAWS",
        docref: "WCS-CLS-WMO_EXTREME_CLIMATE_INDICES_2019.1",
        link: [<a className="dataLink" href={WMOExtremeClimateIndicesreport2019FIN} target="_blank">link</a>]
      }
     ]
  };

  return (
    <>
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
      // exportToCSV
      info={false}
    />
    </>
  );
}



export default (ReportYearData);