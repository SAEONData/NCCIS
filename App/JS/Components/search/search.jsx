
import React from 'react';
import '../../Components/search/search.css';
// import jsontest from '../../../../App/searchTerms.json';


class EASearch extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//         error : null,
//         isLoaded : false,
//         posts : []        
//     };
// }
  // getTermsList(){
  //   fetch('http://localhost:8093/searchTerms.json')
  //       .then( response => response.json())
  //       .then(
  //           // handle the result
  //           (result) => {
  //               this.setState({
  //                   isLoaded : true,
  //                   posts : result
  //               });
  //           },
  //           // Handle error 
  //           (error) => {
  //               this.setState({
  //                   isLoaded: true,
  //                   error
  //               })
  //           },
  //       )
  //       const {error, isLoaded, posts} = this.state;
  //       if(error){
  //           return <div>Error in loading</div>
  //       }else if (!isLoaded) {
  //           return <div>Loading ...</div>
  //       }else{
  //         console.log('data')
  //           return(
  //             <>
  //               <div>
  //                   <ol>
  //                   {
  //                       posts.map(post => (
  //                           <li key={post.id} align="start">
  //                               <div>
  //                                   <p>{post.title}</p>
  //                                   <p>{post.body}</p>
  //                               </div>
  //                           </li>
  //                       ))
  //                   }
  //                   </ol>
  //               </div>
  //               </>
  //           );
  //       }
        
  // }

  checkkeys(){
    var input = document.getElementById('searchInput');
    var inputcount = input.value.length;
    if( inputcount > 0 ){
      this.searchTermsList()
    }

  }
  hidelist(){
    var hidesearch = document.getElementById('search-list');
    hidesearch.style.display = "none";
  }
  
  searchTermsList() {
        var input, filter, ul, li, a, i, txtValue, searchnoresults;
        input = document.getElementById('searchInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("search-list");
        li = ul.getElementsByTagName('li');
        searchnoresults = document.getElementById("search-noresults");
        ul.style.display = "block";

        // Loop through all list items, and hide those who don't match the search query
        
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
            searchnoresults.style.display = "none";
            } else {
            li[i].style.display = "none";
            searchnoresults.style.display = "block";
            }
        }
    }

    render() {
      return (
          <>
        <input className="form-control mr-sm-2" id="searchInput" type="text" placeholder="Search" 
        onKeyUp={() => this.checkkeys()} 
        ></input>
        <ul id="search-list" onMouseLeave={() => this.hidelist()}>
        <li id="search-noresults"><a href="https://ccis.environment.gov.za/ndao/#/">No results</a></li>
        <li><a href="https://ccis.environment.gov.za/ndao/#/">Climate Change</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Climate Change Plan</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Climate Change Project</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Early warning system</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">EWS</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">business plan</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">business strategy</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">sectoral plan</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">sectoral strategy</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">provincial and municipal legal frameworks</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">policies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Spatial Development Frameworks</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Environmental Management Frameworks</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Growth and Development Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Disaster Management Plans</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Conservation Plans</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Food Security Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Energy Security Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Coastal Management Programmes</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Agricultural Plans and Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Integrated Development Plans and associated Sector Plans as prescribed in Municipal Systems and Structures Act</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Water Catchment Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Integrated Waste Management Plans</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Alien Invasive Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Environmental Impact Assessments</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">International Agreements on Water Allocation</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Business Plans</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Land Capability Plans</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Air Quality Plans</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Greening Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Green Economy Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Transport Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Water Management Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Forest Protection Strategies</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Education Plans</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Economic Plans</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Tourism Plans</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Human Settlements</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Rural Development Plans</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">licensing/permitting/authorisation procedures and by-laws</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Risk management</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Climate</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Change</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Risk</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Vulnerability</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Susceptibility</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Coping capacity</a></li>
<li><a href="https://ccis.environment.gov.za/ndao/#/">Impact</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Adaptation</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Mitigation</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">IPPU</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">AFOLU</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Energy</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Industrial Processes and Product Use</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Agriculture Forestry and Other Land Use</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Waste</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Climate Change Plan</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Climate Change Project</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Climate Change Response</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Climate change action</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Policy</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Biodiversity</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Energy Industries</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Manufacturing Industries and Construction</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Transport</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Other Sectors</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Non Specified</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Solid Fuels</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Oil and Natural Gas</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Other Emissions from Energy Production</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Transport of CO2</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Injections and Storage</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Other Energy</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Mineral Industry</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Chemical Industry</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Metal Industry</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Non Energy Products from Fuels and Solvent Use</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Electronics Industry</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Product Uses as Substitutes for Ozone Depleting Substances</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Other Product Manufacture and Use</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Other Industrial Processess</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Agriculture</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Conservation</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Fisheries</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Forestry</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Solid Waste Disposal</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Wastewater Treatment and Discharge</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Afforestation</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Agriculture</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Biomass Energy</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Biogas</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Cement</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Coal Bed Mine Methane</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">EE Households</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">EE Industry</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">EE Own Generation</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">EE Service</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">EE Supply Side</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Energy Distribution</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Fossil Fuel Switch</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Fugitive Gases</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Geothermal</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">HFCs</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Hydro</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Landfill Gas</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">N2O</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">PFCs</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Reforestation</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Solar</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Tidal</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Transport</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Wind</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Agricultural residues: Mustard crop</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Agricultural Residues: Other Kinds</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Agricultural Residues: Poultry Litter</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Agricultural Residues: Rice Husk</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Bagasse Power</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Biodiesel</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Black Liquor</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Ethanol</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Forest Biomass</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Forest Residues: Other</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Forest Residues: Sawmill Waste</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Gasification of Biomass</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Industrial Waste</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Irrigation</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Palm Oil Solid Waste</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Biogas Flaring</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Biogas Power</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Coal Mine Methane</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Building Materials</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Cement</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Chemicals</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Coke Oven</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Construction</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Electronics</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Food</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Glass</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Iron & Steel</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Machinery</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Metal products</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Mining</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Non-Ferrous Metals</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Paper</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Petrochemicals</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Textiles</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Wood</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Existing Dam</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">New Dam</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Run of River</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Combustion for MSW</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Composting</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Gasification of MSW</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Landfill Flaring</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Landfill Power</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Adipic Acid</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Caprolactam</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Nitric Acid</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Solar Coking</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Solar PV</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Solar Water Heating</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">CDM</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Emissions</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">GHG</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Green house gas</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">CO2</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">CH4</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">NO2</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Loss sharing</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Loss prevention</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Behaviour modification</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Relocation</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Research & Development</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">Research</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">HFCs</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">PFCs</a></li>
<li><a href="https://ccis.environment.gov.za/nccrd/#/">SF6</a></li>

        </ul>
        </>
      );
    }
  }
export default EASearch