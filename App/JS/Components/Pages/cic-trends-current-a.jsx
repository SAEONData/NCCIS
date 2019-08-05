import React from 'react'
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader, MDBIcon } from "mdbreact";

class TrendsCurrent extends React.Component {


render() {
    return (
      <>
      <div className="ea-tabs">
        <div className="tab-parent" maploc="ZA-NC">
          <h3>Northern Cape:</h3>
          <div className="tab-child">
          <p>The Northern Cape is the driest province in South Africa, with some areas receiving less than 70 mm/year on average. The north western parts of the province are arid and experience very infrequent rainfall events produced either by the passage of rare cold fronts in winter or occasional convective rainfall during summer. The south western parts experience infrequent winter rainfall, while the eastern two thirds of the province experience summer rainfall associated with local or large scale convective rainfall systems. The south and west of the province experience low rainfall during winter. The eastern part of the province responds partly to ENSO oscillations while the south and western areas having very weak, if any, association with ENSO. </p>
          <p>The northern parts of the province also experience some of the highest maximum temperatures in the country, with places like Upington experiencing average daytime temperatures in summer of over 32 °C and more than 30% of days in January exceed 36 °C. However, typical of many arid and semi-arid inland locations, winter night time temperatures can regularly drop below 0 °C. The western coastline is very dry, and the northern extremes transition into coastal desert. In these areas coastal marine fog forms an important source of water for ecosystems.</p>
          </div>
        </div>

        <div className="tab-parent" maploc="ZA-WC">
          <h3>Western Cape:</h3>
          <div className="tab-child">
            <p>The Western Cape, dominated by ocean, mountains and plains (coastal and inland), has a very diverse climate. Locations such as Bethlehem in the Hottentots Holland mountains experience some of the highest annual rainfall totals in the country (1500 mm/year), whereas Laingsberg only receives around 120 mm/year. Temperatures also range widely from cool coastal mountains often covered by low orographic cloud where even in summer temperatures rarely exceed 25 °C, through to semi-arid Karoo valleys where summer temperatures can average 35 °C.</p>
            <p>Rainfall in the coastal regions and coastal mountains is largely produced by cold fronts generated in the mid-latitudes that bring cold weather and rainfall to the province. Cold fronts interact with the mountains such that far more rainfall falls in the mountains than on the coastal plains. The mountains also impede the inland progression of cold fronts and so produce a rain shadow inland marked by much lower rainfall. These inland areas of the province actually experience summer rainfall resulting from strong surface heating and thunderstorm type weather, similar to the rest of the summer rainfall regions in South Africa. However, strong cold fronts can sweep inland bringing cold weather and rainfall or even snow. While this is more common in winter, strong cold fronts have been experienced during summer.</p>
            <p>Southerly winds transporting relatively moist but cool air from the southern oceans to the Western Cape are also key to the province’s climate. There is some evidence that the very common orographic clouds that cloak the mountains of the Western Cape contribute a great deal of water to mountain runoff through cloud droplet capture as well as through low intensity rainfall. Moist surface winds coupled with high altitude lower pressure systems are responsible for more significant rainfall events in the province, colloquially known as “black south-easters” which have even been known to produce flooding.</p>
            <p>The Western Cape has experienced droughts in the past and will continue to do so going into the future as natural climate variability continues. There are currently no long term changes in rainfall identifiable in historical weather records. This does not mean that changes are not occurring, it just means that currently there is insufficient evidence to suggest that any changes identified are not just an artefact of natural cycles (10-30 year cycles) rather than long term steady change.</p>
          </div>
        </div>

        
        <div className="tab-parent" maploc="ZA-EC">
          <h3>Eastern Cape:</h3>
          <div className="tab-child">
            <p>The Eastern Cape, like the Western Cape, is characterized by a very diverse climate due to the proximity to the ocean and extensive mountain ranges and altitude variations. Minimum temperatures in Barkley East (1800 m) hover around 0 °C during the winter months, with snow not an unusual occurrence. Port St Johns on the other hand experienced average winter temperatures more than 10 °C warmer. The significant east-west mountain ranges produce stark rainfall climate gradients. Willomore receives around 240 mm/year with mostly summer rainfall, whereas Tsitsikamma, a mere 120 km south, receives around 720 mm/year of all year around rainfall.</p>
            <p>Rainfall is produced by a combination of three processes. The influence of cold fronts sweeping over the south of the country produces rainfall through the winter months along the coast and in the coastal mountains. Further inland (north) the influence of these cold fronts diminishes and summer rainfall dynamics (surface heating and convective/thunderstorms) dominate. During summer, onshore flow of relatively moist air forced to rise by coastal mountains produces substantial summer rainfall. </p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-NL">
          <h3>KwaZulu-Natal:</h3>
          <div className="tab-child">
            <p>KwaZulu-Natal is the wettest province in South Africa, with high rainfall totals occurring along both the eastern escarpment and over the coastal areas. It is a summer rainfall region that experiences hot and humid summers and mild winters.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-MP">
          <h3>Mpumalanga:</h3>
          <div className="tab-child">
            <p>Mpumalanga’s Lowveld region experiences a sub-tropical climate, with high rainfall totals towards the escarpment in the west and with a drier climate to the east. The Mpumalanga Highveld experiences cold winters with frost events, with summers being warm and with rainfall occurring mostly in the form of thunderstorms.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-LP">
          <h3>Limpopo:</h3>
          <div className="tab-child">
            <p>Limpopo is a summer rainfall region that generally experiences hot summers and cooler winters. Rainfall varies greatly across the province, with large parts of the Limpopo basin being semi-arid, and with high rainfall and rainforests along the eastern escarpment of the province. The province sporadically suffer from devastating flood events, when tropical lows or cyclones from the Indian Ocean make landfall over neighbouring Mozambique, or even over Limpopo itself.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-GT">
          <h3>Gauteng:</h3>
          <div className="tab-child">
            <p>The Gauteng Province is the economic heartland of South Africa. The province falls in the summer rainfall region, and receives the bulk of its rainfall in the form of thunderstorms. Annual rainfall totals reach 700 mm over much of the province. Winters over Gauteng are dry and associated with clear skies, cold nights that occur in association with the formation of strong inversion layers and polluted mornings. Gauteng’s water security does not only depend on local rainfall and streamflow and dams located within the province, but that about 40% of Gauteng’s rainfall is provided by the mega-deam region of southeastern South Africa.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-FS">
          <h3>Free State:</h3>
          <div className="tab-child">
            <p>The Free State spans the centre of the country, and ranges from the relatively dry, hot and arid west (Bloemhof receives around 450 mm/year) and south through to higher altitude cooler wetter climate in the north and east (Royal National Park receives 1200 mm/year). It is entirely a summer rainfall region, with rainfall resulting from either local small scale convective events or larger organised convection. Rainfall in the province is partly linked to ENSO, though it is not uncommon for El-Nino years to normal or even wetter than normal in a few cases. The province is the “bread basket” of the country with extensive maize, wheat, and other crop production. This is a result of generally good soils and moderate climate, with sufficient rainfall to allow rain-fed agriculture.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-NW">
          <h3>North West:</h3>
          <div className="tab-child">
            <p>The climate in the province varies considerably with the areas in the east being much wetter than those in the west. Average annual rainfall ranges from 300 to 700 mm and summer temperatures between 22 and 34ºC. The province is dominated by a flat savanna and grassland landscape, which is home to rich biodiversity and agriculture, with hills and ridges dividing up this landscape.</p>
          </div>
        </div>

      </div>
      </>
    );
  }
}

export default TrendsCurrent;