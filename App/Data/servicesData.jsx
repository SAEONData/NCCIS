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
        datarequired: "xxx",
        presentation: "xxx",
        sector: "xxx",
        usage: "xxx",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "xxx",
        sawsproduct: 31,
        datarequired: "xxx",
        presentation: "xxx",
        sector: "xxx",
        usage: "Commercial",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "xxx",
        sawsproduct: 31,
        datarequired: "xxx",
        presentation: "xxx",
        sector: "xxx",
        usage: "Public",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "xxx",
        sawsproduct: 31,
        datarequired: "xxx",
        presentation: "xxx",
        sector: "xxx",
        usage: "Commercial",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "xxx",
        sawsproduct: 17,
        datarequired: "xxx",
        presentation: "xxx",
        sector: "xxx",
        usage: "Public",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "xxx",
        sawsproduct: 20,
        datarequired: "xxx",
        presentation: "xxx",
        sector: "xxx",
        usage: "xxx",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "xxx",
        sawsproduct: 18,
        datarequired: "xxx",
        presentation: "xxx",
        sector: "xxx",
        usage: "xxx",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "xxx",
        sawsproduct: 31,
        datarequired: "xxx",
        presentation: "xxx",
        sector: "xxx",
        usage: "xxx",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      },
      {
        category: "tar",
        sawsproduct: 31,
        datarequired: "xxx",
        presentation: "xxx",
        sector: "xxx",
        usage: "",
        link: [<a className="dataLink" href="#" target="_blank">link</a>]
      }
      
     ]
  };

  return (
    <>
    <div className="filterTable">
      <div id="record-filters" class="btn-group" data-toggle="buttons" >
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