import React from 'react'
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader, MDBIcon } from "mdbreact";

class CollapsePage extends React.Component {


render() {
    return (
      <>
      <div className="ea-tabs">
        <div className="tab-parent" maploc="ZA-NC">
          <h3>Northern Cape:</h3>
          <div className="tab-child">
          <p>The province continues to experience cycles of dry years and wet years, with dry years typically associated with higher temperatures. The province experiences more rapid warming than most of the rest of the country, particularly in the northern and eastern interior. This means that temperatures in the province will reach 2 °C warmer than the recent past by between 2040 and 2060. This has important impacts on hot spells, with days exceeding 36 °C reaching 20-30 days a month in the north of the province in summer. Most rapid warming is experienced in the months before the summer rainfall begins. </p>
          <p>
            <b>Narrative 1: A hotter drier future </b><br />
            Retreating cold fronts as a result of a southerly shift in the mid-latitude jet-stream means that the frequency of frontal winter rainfall events in the south west of the province decrease, resulting in lower annual rainfall totals. To the east of the province, increased subsidence, caused by more intense subtropical high pressure systems, suppresses convective rainfall processes reducing summer rainfall.
          </p>
          <p>Reduced rainfall together with substantially higher temperatures combine to increase evaporation, which places a strain on natural environments as well as dams for irrigation and human consumption. Groundwater is an important source of water in the west of the province, and reduced rainfall begins to reduce ground water recharge rates reducing well point yields.</p>
          <p><b>Narrative 2: A hotter, mixed rainfall future</b><br />
          To the east of the province, an intensified heat low combined with increased atmospheric moisture and moisture transport into the interior results in increased summer rainfall. These same dynamics of heating and increased moisture produces more intense rainfall events when they do occur, causing localised flooding and infrastructure damage. </p>
          </div>
        </div>

        <div className="tab-parent" maploc="ZA-WC">
          <h3>Western Cape:</h3>
          <div className="tab-child">
          <p>The Western Cape will continue to be characterised by cycles of drier years and wetter years for the next 20 to 30 years. At the same time average temperatures rise at around 0.5 °C /decade so the average temperatures will reach 1.5 °C higher than recent historical averages somewhere between 2040 and 2060. The impact of these higher temperatures will increase the frequency and length of hot spells in summer, as well as decrease the frequency and duration of cold spells in winter.</p>
          <p>The increasing effect of the sub-tropical high pressure systems combined with more intense inland heating will result in stronger summer south-easter winds. Higher wind speeds combined with higher temperatures will strongly influence evaporation and evapotranspiration either resulting in drier soils and crops or increasing demand for irrigation, particularly of summer crops. Higher evaporation from dams, combined with competing demands from agriculture and rapidly growing urban populations will place significant strain urban water supply systems.</p>
          <p><b>Narrative 1: A drier hotter, windier future</b><br />
          Moving towards the middle of the 21st century natural cycles of rainfall begin to shift towards more frequent dry years and consecutive dry years (such as the 2014-2015 years). Temperatures will continue to rise along with summer wind speeds which enhance evaporation, so reduced rainfall will only exacerbate the challenge of increased evaporation from agricultural land, natural ecosystems, and water storage dams. Competition for water between agriculture, industry and urban water supply could become critical. Winter storm intensity begins to increase resulting in more frequent heavy rainfall events in winter which produce flooding and related damage. </p>
          <p><b>Narrative 2: A warmer wetter future</b><br />
          Moving towards the middle of the 21st century natural cycles of rainfall will continue, but changes in average rainfall begin to emerge. Rainfall in the mountains increases as a result of more moist and energetic winter storms, as well as increased moist warm southerly flow off the ocean in the summer months. While coastal and inland plains do not experience these changes directly, they have important impacts on water supply and irrigation as river flows increase and runoff into dams increase. </p>
          <p>However, increased rainfall is offset by increased evaporation due to higher temperatures (reaching 2 °C higher than current) and stronger winds. This results in increasing demand for irrigation and higher losses from dams. Higher urban populations also place ever increasing demands on water supply systems. Therefore, while the relatively small increases in rainfall may partly delay the need for adaptation measures, adaption to reduce water demands is still required. </p>
          </div>
        </div>

        
        <div className="tab-parent" maploc="ZA-EC">
          <h3>Eastern Cape:</h3>
          <div className="tab-child">
          <p>The province continues to experience cycles of dry years and wet years. Temperatures rise consistently by 1.5 °C higher than recent averages between 2040 and 2060.</p>
          <p><b>Narrative 1: A warmer future </b><br />
          Warming results in a stronger heat low pressure in the interior of the country, which influences the northern part of the province and results in more intense rainfall events, even if long term annual rainfall totals are largely stable. These intense events have great impact on infrastructure such as roads and storm water systems. Increased ocean temperatures in the warm Algulhas current produce intense local convective storm systems, resulting in heavy rain and flooding along the coast and coastal mountains. Associated storm surge superimposed on rising sea-levels begins to impact coastal infrastructure, much of which is associated with tourism.</p>
          <p><b>Narrative 2: A warmer drier future</b><br />
          The impact of the warming temperatures will be increased frequency and length of hot spells in summer, as well as decreased frequency and duration of cold spells in winter. Higher temperatures will strongly influence evaporation and evapotranspiration, either resulting in drier soils and crops or increasing demand for irrigation, particularly of summer crops. Higher evaporation from dams, combined with competing demands from agriculture and rapidly growing urban populations will place significant strain on urban water supply systems.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-NL">
          <h3>KwaZulu-Natal:</h3>
          <div className="tab-child">
          <p><b>Narrative 1: A hot and dry future</b><br />
          KwaZulu-Natal may plausibly experience a climate future that is significantly hotter and drier compared to the present-day climate. Under low mitigation, temperature increases as large as 3 °C may occur by 2040-2060, with associated drastic decreases in rainfall. Such a climate regime will also be associated with an increase in the frequency of occurrence of heat-wave days and high fire-danger days and more El Niño induced drought events. Key impacts under such a scenario include significantly reduced yield from both the forestry and sugar cane industries. Human health may be increasingly affected by oppressive temperatures.</p>
          <p><b>Narrative 2: A hot future with increased rainfall</b><br />
          The main alternative future for KwaZulu-Natal is that rainfall over the province increases substantially, including an increase in intense thunderstorms and damaging flood events. Under such a future there are more options for the sugarcane and forestry sectors, but with frequent damage to infra-structure such as roads and bridges. In the increasingly hot and humid climate, pests and diseases affecting crops, the forestry sector and also human and animal health may become increasingly abundant.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-MP">
          <h3>Mpumalanga:</h3>
          <div className="tab-child">
          <p><b>Narrative 1: A hot and dry future</b><br />
          Mpumalanga may plausibly experience a climate future that is significantly hotter and drier compared to the present-day climate. Under low mitigation, temperature increases as large as 3 °C may occur by 2040-2060, with associated drastic decreases in rainfall. Such a climate regime will also be associated with an increase in the frequency of occurrence of heat-wave days and high fire-danger days. Such a change towards a generally warmer and drier climate would pose significant threats to the forestry sector, due to the likelihood for more frequent forest fires occurring during more frequent periods of drought.</p>
          <p><b>Narrative 2: A warmer future with increased rainfall</b><br />
          The main alternative narrative for Mpumalanga is that rainfall totals increase under climate change, rather than to increase. Such an increase may imply the more frequent occurrence of landfalling tropical lows over the Lowveld regions, with potentially significant impacts on tourism and infra-structure in areas such as Kruger Park an town in the Lowveld region. Under such a scenario drought will not be such a major problem for the forestry sector as under narrative 1, but the increased occurrence of pests and pathogens affecting forestry and agriculture may well pose an alternative set of challenges.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-LP">
          <h3>Limpopo:</h3>
          <div className="tab-child">
          <p><b>Narrative 1: A hot and dry future</b><br />
          Limpopo is likely to experience a climate future that is significantly hotter and drier compared to the present-day climate. Under low mitigation, temperature increases as large as 7 °C may occur by the end of the century,  with increases of about 4 °C plausible by the period 2040-2060. Such a climate regime will also be associated with an increase in the frequency of occurrence of heat-wave days and high fire-danger days. It is likely that the province may become drier under climate change, with more frequent El Niño induced drought events. Under such a scenario, dryland agriculture and livestock production in Limpopo will become increasingly less viable.</p>
          <p><b>Narrative 2: A warmer future with more flood events</b><br />
          The main alternative future for Limpopo is a future that is in fact projected by a minority of climate models, namely a future where the province becomes wetter, at least in the Limpopo basin and along the escarpment, due to a greater frequency of more intense tropical lows and cyclones making landfall. Under such a scenario, the province will still need to deal with the negative impacts of increasing temperatures as described in narrative 1.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-GT">
          <h3>Gauteng:</h3>
          <div className="tab-child">
          <p>Under low mitigation Gauteng may plausibly experience temperature increases of 3-4 °C in the during the period 2040-2060, with associated drastic increases in the annual number of very hot days, heat-wave days and high fire danger days, but with decreases in the number of cold nights and days with frost.</p>
          <p><b>Narrative 1: A warmer future with reduced water security</b><br />
          The drastic increases in temperature may occur in association with the more frequent occurrence of drought over southern Africa, including drought in the mega-dam region. This will significantly impact on Gauteng water security and may strongly constrain the province’s future economic growth. Locally, increases intense thunderstorms bringing hail, damaging winds and flash floods are plausible.</p>
          <p><b>Narrative 2: A warmer future but water secure future</b><br />
          An alternative narrative for Gauteng follows the same outcomes in terms of temperature than, but with the important exception that water yield in the mega-dam region of South Africa is not compromised by climate change. In fact, the opposite may occur, namely that more frequent and intense thunderstorms over the eastern escarpment region lead to enhanced streamflow. Under such a scenario Gauteng will still need to deal with significant problems caused by rising temperatures and local increases in extreme rainfall events, but with a relatively secure water supply.</p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-FS">
          <h3>Free State:</h3>
          <div className="tab-child">
          <p>The province continues to experience cycles of wetter and drier years, with drier years tending to be warmer than wetter years. However, increasing temperatures reach 2 °C higher than current temperatures by between 2040 and 2060, resulting in increased frequency and duration of hot spells in summer with potential impacts on key crop development stages. Most rapid warming is experienced in the months before the summer rainfall begins. </p>
          <p>Increasing temperatures increases evaporation, resulting in drier soils and greater loss from dams, particularly shallow farm dams. Combined with generally reduced rainfall, this means that even in relatively normal rainfall years crops experience greater water deficit and water supply for irrigation, human consumption, and livestock is placed under strain. Higher temperatures begin to impact some livestock as well. Dry years, combined with 2 °C higher temperatures produce higher impacts in the province than the 2015/2016 drought. </p>
          <p><b>Narrative 1: A warmer drier future</b><br />
          Increased sub-tropical high pressure belts produces enhanced subsidence over the province, suppressing moisture transport into the region and convective activity. The result is reduced frequency and magnitude of rainfall events, and generally reduced annual rainfall totals. However convective events, when they occur, are more intense resulting in localised flooding and related damage. </p>
          <p><b>Narrative 2: A warmer wetter future </b><br />
          An intensified heat low, resulting in enhanced moisture transport into the east of the province, results in marginally increased annual rainfall totals in the east. These changes are however very limited towards the west, where increased subsidence suppresses convection and rainfall remains the same as current day or even slightly drier in some parts. Convective rainfall events, when they do occur are more intense, resulting in localised flooding and related damage. </p>
          </div>
        </div>
        
        <div className="tab-parent" maploc="ZA-NW">
          <h3>North West:</h3>
          <div className="tab-child">
          <p><b>Narrative 1: A hot and dry future</b><br />
          North West may plausibly (under low mitigation) experience a climate future that is significantly hotter and drier compared to the present-day climate. Under low mitigation, temperature increases as large as 6 °C may occur, with associated drastic decreases in rainfall. Such a climate regime will also be associated with an increase in the frequency of occurrence of heat-wave days and high fire-danger days.</p>
          <p><b>Narrative 2: A warmer future with more frequent wet-spells</b><br />
          Under high mitigation, temperature increases may still be as high as 4 °C in the second half of the 21st century, but with the more frequent formation of tropical-temperate troughs over the province, with associated increases in wet spells.</p>
          </div>
        </div>

      </div>
      </>
    );
  }
}

export default CollapsePage;