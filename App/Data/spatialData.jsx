import React from 'react';
import { MDBDataTable } from 'mdbreact';

const SpatialData = () => {
  const data = {
    columns: [
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Spatial Plan',
        field: 'spatialplan',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Climate Change Checklist',
        field: 'climatechangechecklist',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Source',
        field: 'source',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [
      {
        type: "Sector",
        spatialplan: "Agriculture Sector Plan",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/1CIi52zwrowjlanQdtfqZ7Z_DbTr15x8wBNINiXDTTcY/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Sector",
        spatialplan: "Disaster Managment Plan",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/1izuKAhIqODWOn_IZNafARZIbA_nf83opYR0pKaR76SY/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Sector",
        spatialplan: "District Health Plan",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/18cD2lcjTYtZvQYWhEWO4w7P9uhTGuzUkzaNqQltvNtc/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Sector",
        spatialplan: "Environmental Management Framework",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/14P3xxg7Twkz3GWVj7lZNK0PcA7lYgvj0SIbSJCDNcNo/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Sector",
        spatialplan: "Housing Sector Plan",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/1krwALGshkYuWx8CWAC5JI34GtPv5ENqvzzwu3FPIS38/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Sector",
        spatialplan: "Land Reform Plan",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/1jBlclp4AbLHiewW7tD_eEjAi-4wpMNw4GYYbuxFTwWY/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Sector",
        spatialplan: "Rural Development Plan",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/1VjnUKT7GtzDpf0Xi7_E-53o_nn0J2DTv1r9Rlpg86fU/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Sector",
        spatialplan: "Tourism Sector Plan",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/1m9jT0K2ng0Oz95cpuRST-Rtnz7TpFAdcQtaMArVJNsY/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Sector",
        spatialplan: "Water Sector Plan",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/1d47meEgtxgaqE0cEbzKa0jYQfxyfywtTQXOq6evLa28/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Sector",
        spatialplan: "Local Economic Development Plan",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/1MMXW-v6t4BBg0zctG-HW-g0tTyMVNzDTs02HKp_xPBA/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Strategic",
        spatialplan: "Integrated Development Plan",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/1EKPomAZei6XKyQDhA7gIm5i8p2EEH7EBr3draMTMFN0/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
      },
      {
        type: "Strategic",
        spatialplan: "Spatial Development Framework",
        climatechangechecklist: [<button onClick={(event) => {event.preventDefault(); window.open("https://docs.google.com/a/saeon.ac.za/document/d/1eTMcvKrrBvAqTePkUKa9iLYe_b0AnOap-Hgy6yywGq4/edit?usp=drive_web");}}>link</button>],
        source: [<button onClick={(event) => {event.preventDefault(); window.open("http://www.letsrespondtoolkit.org/");}}>link</button>]
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

export default SpatialData;