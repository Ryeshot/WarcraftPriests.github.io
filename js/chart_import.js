var SimTalents = {
  am: "Ancient Madness",
  hv: "Hungering Void",
};
  
var Sims = {
  conduit_combos: "Conduit Combos",
  conduits: "Conduits",
  consumables: "Consumables",
  covenant_choice: "Covenants Choice",
  covenants_launch: "Covenants launch",
  covenants_prog: "Covenants prog",
  covenants: "Covenants",
  enchants: "Enchants",
  legendaries: "Legendaries",
  legendary_items: "Legendary items",
  racials: "Racials",
  shards_of_domination: "Shards of Domination",
  soulbind_traits: "Soulbind Traits",
  soulbinds_launch: "Soulbind Launch",
  soulbinds_prog: "Soulbind prog",
  soulbinds: "Soulbinds",
  stats: "Stats",
  talents: "Talents",
  trinkets: "Trinkets",
  weights: "Weights",
  trinket_combos: "Trinket Combos",
};
  
var Consumables = {
  potion: "Potion",
  food: "Food",
};
  
var Talents = {
  // Row 15
  fotm: "Fortress of the Mind",
  dam: "Death and Madness",
  ud: "Unfurling Darkness",
  
  // Row 25
  bns: "Body and Soul",
  sl: "San'layn",
  in: "Intangibility",
  
  // Row 30
  tof: "Twist of Fate",
  mis: "Misery",
  sn: "Searing Nightmare",
  
  // Row 35
  lw: "Last Word",
  mbo: "Mind Bomb",
  ph: "Phsychic Horror",
  
  // Row 40
  as: "Auspicious Spirits",
  pl: "Psychic Link",
  sc: "Shadow Crash",
  
  // Row 45
  dm: "Damnation",
  mb: "Mindbender",
  vt: "Void Torrent",
  
  // Row 50
  am: "Ancient Madness",
  hv: "Hungering Void",
  stm: "Surrender To Madness",
};
  
var FightStyles = {
  Composite: "Composite",
  Single: "Single Target",
  Dungeons: "Dungeons",
};
  
var FightStyleExternal = {
  composite: "Raid",
  single: "Single Target",
  dungeons: "Dungeons",
};
  
var Conduits = {
  kyrian: "Kyrian",
  necrolord: "Necrolord",
  night_fae: "Night Fae",
  venthyr: "Venthyr",
};
  
var TalentIds = {
  FOTM: "193195",
  DAM: "321291",
  UD: "341273",
  BNS: "64129",
  SL: "199855",
  IN: "288733",
  TOF: "109142",
  MIS: "238558",
  SN: "341385",
  LW: "263716",
  MBO: "205369",
  PH: "64044",
  AS: "155271",
  PS: "199484",
  SC: "205385",
  DM: "341374",
  MB: "123040",
  VT: "263165",
  AM: "341240",
  HV: "345218",
  STM: "193223",
};
  
var ConduitsIds = {
  HA: "338319",
  DE: "338342",
  MD: "338332",
  RS: "338338",
  SP: "338315",
  FF: "338305",
  FT: "337979",
  CA: "337966",
  SS: "336239",
  TS: "331586",
  EP: "331580",
  DT: "331584",
  WP: "319983",
  BFW: "319973",
  GI: "322721",
  NTP: "320660",
  NTB: "320659",
  FOB: "319191",
  SB: "319210",
  WHT: "325066",
  FS: "325069",
  LGOTP: "328257",
  CM: "328266",
  PoC: "329778",
  BCTA: "333950",
  HOG: "333935",
  PPS: "323090",
  LBE: "342181",
  GC: "323919",
  HAMG: "326572",
  VS: "323074",
  DD: "331584",
  RP: "336243",
  FR: "326514",
  PF: "351750",
  FAFL: "352373",
  BP: "352417",
  ME: "350936",
  CE: "350899",
  KO: "352110",
  PC: "356390",
  BH: "352503",
  DRD: "352786",
  WHS: "352805",
  BT: "351146",
  NR: "351149",
  LTP: "351491",
  SoS: "352186",
  EAA: "352188",
  AAF: "357902",
};

var LegendTitles = {
  conduits: "Conduits Rank",
  conduit_combos: "Increase in %",
  consumables: "Increase in %",
  covenants: "Increase in %",
  covenantsChoice: "Increase in %",
  enchants: "Increase in %",
  legendaries: "Increase in %",
  racials: "Increase in %",
  shards_of_domination: "Increase in %",
  soulbinds: "Increase in %",
  soulbind_traits: "Increase in %",
  soulbinds_launch: "Increase in %",
  stats: "Increase in %",
  talents: "Increase in %",
  trinkets: "Item level",
  legendary_items: "Item level",
};

var ChartType = {
  covenant_choice: "multiple",
  conduits: "percentage",
  legendary_items: "percentage",
  trinkets: "percentage",
  stats: "dot",
};

var ChartPadding = {
  talents: -80,
  covenants: -40,
  legendaries: -40,
  soulbinds: -60,
  conduit_combos: -40,
  soulbind_traits: -40,
  soulbinds_launch: -60,
  racials: -40,
  soulbinds_prog: -60,
  consumables: -40,
  covenant_choice: -40,
  covenants_launch: -40,
  covenants_prog: -40,
  enchants: -40,
  trinket_combos: -40,
  shards_of_domination: -40,
};

var AggregateConduits = [
  "venthyr",
  "necrolord",
  "night_fae",
  "kyrian",
];

var LookupType = {
  apl: "none",
  conduit_combos: "none",
  conduits: "spell",
  consumables: "spell",
  covenant_choice: "none",
  covenants: "spell",
  covenants_launch: "spell",
  coventants_prog: "spell",
  enchants: "spell",
  gear: "item",
  legendaries: "spell",
  legendary_combos: "none",
  legendary_items: "spell",
  racials: "spell",
  shards_of_domination: "spell",
  soulbind_traits: "spell",
  soulbinds: "none",
  soulbinds_launch: "none",
  soulbinds_prog: "none",
  stats: "none",
  talents: "none",
  trinket_combos: "none",
  trinkets: "none",
  weights: "none"
}

var TrinketIds = {
  Cabalists_Hymnal_Allies_4: "184028",
  Cabalists_Hymnal_Allies_3: "184028",
  Cabalists_Hymnal_Allies_2: "184028",
  Cabalists_Hymnal_Allies_1: "184028",
  Cabalists_Hymnal_Allies_0: "184028",
  Inscrutable_Quantum_Device: "179350",
  Empyreal_Ordnance: "179350",
  Dreadfire_Vessel: "184030",
  Glyph_of_Assimilation: "184021",
  Soul_Igniter: "184019",
  Macabre_Sheet_Music: "184024",
  Soulletting_Ruby: "178809",
  Forbidden_Necromantic_Tome: "186421",
  Tome_of_Monstrous_Constructions: "186422",
  Titanic_Ocular_Gland: "186423",
  Shadowed_Orb_of_Torment: "186428",
  Ebonsoul_Vise: "186431",
  Tome_of_Insight: "186156",
  Unbound_Changeling_Mastery: "178708",
  Unbound_Changeling_Haste: "178708",
  Unbound_Changeling_All: "178708",
}

var getValue = function(list, key) {
    return list[key.replaceAll("-", "_")];
};

var getKeys = function(list) {
  let result = [];
  let values = Object.values(list);
  let keys = Object.entries(list);
  for (i = 0; i < values.length; i++) {
    result.push(keys[i][0]);
  }
  
  return result;
};
/*
 * Color definitions
 */
const defaultBackgroundColor = "#343a40";
const defaultFontColor = "#f8f9fa";
const defaultAxisColor = "#828282";
const lightColor = "#eeeeee";
const mediumColor = "#999999";
const darkColor = "#343a40";
const gridLineColor = "#616c77";
const buttonBorderColor = "#DDA0DD";
const buttonBackgroundColor = "#330066";
const buttonBorderColorDefault = "white";
const fontSize = "1.1rem";

/*
 * Chart definitions
 */
const fontWeightBold = "bold";
const legendTitleTextDps = "Increase in %";
const tooltipHeaderFormat = "<b>(point.x)</b>";
const tooltipPointFormat = '<span style=color: "{point.color}"><b>{series.name}</b></span>: <b>{point.y}</b><br/>';
const plotOptionsPointFormat = "Value: {point.y:,.0f} mm";
const alignRight = "right";
const alignMiddle = "middle";
const stackingNormal = "normal";
const legendTitleTextSteps = "Steps";
const chartType = "bar";
const defaultHeader = "Ancient Madness - Trinkets - Venthyr - Composite";
const whiteText = "white";
const legendLayoutVertical = "vertical";
const legendTitleTextItemLevel = "Item Level";
const increase = "% (Increase)";
const decrease = "% (Decrease)";
const dpsIncrease = "Increase in %";
/*
 * Other definitions
 */
const updateDataInnerHtml = "Last Updated: ";
const divText = "div";
const buttonContainerText = "button-container";
const buttonText = "button";
const dash = "-";
const space = " ";
const DPS = "DPS";
const px = "px";
const empty = "";
const jsonExtension = ".json";
const csvExtension = ".csv"
const simResultPath = "/results/Results_";
const slash = "/";
const underscore = "_";

/*
 * Repo url definition
 */
const baseUrl = "https://raw.githubusercontent.com/WarcraftPriests/sl-shadow-priest/master/";
const wowheadUrl = "https://www.wowhead.com/"
const wowheadSpellPath = "spell="
const wowheadItemPath = "item="
const config = "config.yml";
const textType = "text";

/*
 * Json data schema definitions
 */
const jsonLastUpdated = "last_updated";
const jsonSortedDataKeys = "sorted_data_keys";
const jsonIds = "ids";
const jsonData = "data";
const jsonDPS = "DPS";
const jsonBase = "Base";
const jsonSimulatedSteps = "simulated_steps";


/*
 * Simc related stuff definitions
 */
const trinkets = "trinkets";
const talents = "talents";
const soulbinds = "soulbinds";
const composite = "Composite";
const legendaries = "legendaries";
const fightStyle = "fightStyle";
const covenant = "covenant";
const conduits = "conduits";
const racials = "racials";
const ancientMadness = "am";
const venthyr = "venthyr";
const kyrian = "kyrian";
const nightFae = "night_fae";
const necrolord = "necrolord";
const ring = "ring";
const food = "food";
const sims = "sims";
const apl = "apl";
const gear = "gear";
const stats = "stats";
const soulbindTraits = "soulbind_traits";
const soulbindsLaunch = "soulbinds_launch";
const conduitCombos = "conduit_combos";
const legendaryCombos = "legendary_combos";
const legendaryItems = "legendary_items";

/*
 * Button related definitions
 */
const fightStyleDiv = "fightStyle-div";
const covenantDiv = "covenant-div";
const covenantChoiceDiv = "covenantChoice-div";
const consumablesDiv = "consumables-div";
const enchantDiv = "enchants-div";
const talentDiv = "talent-div";
const shardsDiv = "shards-div";
const simsDiv = "sims-div";
const buttonName = "button";
const buttonId = "id";
const buttonClass = "class";
const onClick = "onClick";
const click = "click";
const handleOnClickText = "handleOnClick('";
const show = "show";
const shards = "shards_of_domination";
const enchants = "enchants";
const consumables = "consumables";
const covenants = "covenants";
const covenantsChoice = "covenant_choice";
const weights = "weights";

const pointer = "pointer";
const attributeSpacer = "', '";
const attributeClose = "')";
const span = "span";
const classLabel = "class";
const divider = "divider";
const fivePixel = "5px";
const auto = "auto";
const inlineBlock = "inline-block";

const defaultTalent = ancientMadness
const defaultSims = trinkets;
const defaultCovenant = venthyr;
const defaultCovenantChoice = "aggregateCovenant";
const defaultEnchant = ring;
const defaultConsumable = food;
const defaultFightStyle = composite;
const coventantsChoiceChartName = "Covenant Choice - Aggregate"

const builds = "builds";
const files = "files";
const none = "none";
/*
 * Decides what kind of chart should be used 
 * and when a chart update should happen
 */
function updateChart(currTalentBtn, currSimsBtn, currCovenantBtn, currConsumablesBtn, currEnchantsBtn, currFightStyleBtn, chartId, metaData, maxEntries) {
  if(maxEntries != null || maxEntries != undefined) {
    maxEntries = maxEntries - 1;
  }
  
  if(currSimsBtn == "weights") {
    parseCSV(currSimsBtn, currFightStyleBtn, currTalentBtn, chartId, metaData);
  } else {
    createChart(currSimsBtn, currFightStyleBtn, currTalentBtn, currCovenantBtn, chartId, metaData, maxEntries);
  }
}

/*
 * Collects all data need for a chart an then create it
 */
function createChart( simsBtn, fightStyle, talentChoice, covenantType, chartId, metaData, maxEntries) {
  jQuery.getJSON( determineJsonUrl(simsBtn, baseUrl, fightStyle, talentChoice, covenantType),
      function (data) {
        if(metaData) {
          document.getElementById("updateData").innerHTML = updateDataInnerHtml + data[jsonLastUpdated];
          var header = determineChartName( covenantType, 
                                           getValue(SimTalents, talentChoice), 
                                           simsBtn.charAt(0).toUpperCase() + simsBtn.slice(1), 
                                           fightStyle);
          document.getElementById('header').innerHTML = "<h3 style='color:#ffffff'>" + header + "</h3>";
          document.getElementById('description').innerHTML = determineChartDescription(simsBtn);
        }
        
        buildData(data, simsBtn, chartId, maxEntries);
      }.bind(this)
    ).fail(function(xhr, status) {
      handleJsonFailure(xhr, status)
    });
}

/*
 * Choose which chart to show
 */
function buildData(data, simsBtn, chartId, maxEntries) {
  var chart = getValue(ChartType, simsBtn);
  if(chart == "multiple") {
    buildChartDataMultipleBar(data, simsBtn, chartId, maxEntries)
  } else if(chart == "percentage") {
    buildDataForPercentageChart(data, simsBtn, chartId, maxEntries);
  } else if(chart == "dot") {
    buildChartDataDot(data, chartId);
  } else {
    buildChartDataSingleBar(data, false, getValue(ChartPadding, simsBtn), simsBtn, chartId, maxEntries)
  }
}

/*
 * Updates the size of the div for the chart for the real data
 */
function updateSize(chart, chartId, size, maxEntries) {
  var realSize = 0;

  if(maxEntries != null || maxEntries != undefined) {
    realSize = maxEntries;
  } else {
    realSize = size;
  }

  document.getElementById(chartId).style.height = 200 + realSize * 30 + px; // Size the chart by our data.
  chart.setSize( 
    document.getElementById(chartId).style.width,
    document.getElementById(chartId).style.height
  );

  chart.redraw();
  try {
    $WowheadPower.refreshLinks();
  } catch (error) {
    console.log(error);
  }
}

/*
 * Determine the chart name for the current chart, for the used parameters
 */
function determineChartName(covenantType, firstTalent, fullSimType, fightStyle) {
  var simType = "";
  simType = fullSimType.replaceAll("-", " ");
  simType = simType.replaceAll("_", " ");

  if(fullSimType.toLowerCase() == covenantsChoice) {
    return coventantsChoiceChartName;
  } 
  if (covenantType === empty || covenantType == null) {
    return firstTalent 
              + space + dash + space
              + simType
              + space + dash + space
              + fightStyle;
  } else {
    return firstTalent 
              + space + dash + space
              + simType 
              + space + dash + space 
              + getValue(Conduits, covenantType)
              + space + dash + space 
              + fightStyle;
  }
}

/*
 * Determines the description of the chart from the config.yml
 */
function determineChartDescription(fullSimType) {
  fullSimType = fullSimType.replaceAll("_", "-");
  var descr = configData["sims"][fullSimType]["description"];
  return descr;
}

/*
 * Determines the url for the github repo to get the needed sim results
 */
function determineJsonUrl(simsBtn, baseurl, fightStyle, talentChoice, covenantType) {
  /*
   * Special cases!
   */
  if(talentChoice.includes(underscore)) {
    talentChoice = talentChoice.replaceAll(underscore, dash);
  }

  if(simsBtn.includes(underscore)) {
    simsBtn = simsBtn.replaceAll(underscore, dash);
  }

  if(simsBtn == talents){
    return baseurl + slash + simsBtn + simResultPath + fightStyle + jsonExtension;
  } else if(simsBtn == "covenant-choice") {
    return baseurl + slash + simsBtn + simResultPath + "Aggregate" + jsonExtension;
  } else if(configData["sims"][simsBtn]["covenant"]["lookup"]) {
    return baseurl + slash + simsBtn + simResultPath + fightStyle + underscore + talentChoice + underscore + covenantType + jsonExtension;
  } else {
    return baseurl + slash + simsBtn + simResultPath + fightStyle + underscore + talentChoice + jsonExtension;
  }
}

/*
 * Handles the failure of an json call to github, most a wrong combination of
 * talent, simType, convenant and fightStyle.
 * So no data could be fetched
 */
function handleJsonFailure(xhr, status) {
  console.log("The JSON chart failed to load, please let DJ/espo know via discord Djriff#0001/espo#6663");
  console.log(status);
}
var covenantChoiceColor = {
    kyrian_min: "#0033CC",
    kyrian_max: "#0099FF",
    night_fae_min: "#9933CC",
    night_fae_max: "#9966CC",
    necrolord_min: "#009933",
    necrolord_max: "#00CC66",
    venthyr_min: "#CC0000",
    venthyr_max: "#FF3300",
}

var covenantColor = {
    kyrian: "#0033CC",
    night_fae: "#9933CC",
    necrolord: "#009933",
    venthyr: "#CC0000",
}

var racialColor = {
    Goblin: "#F2545B",
    Gnome: "#4F86C6",
    Dark_Iron_Dwarf: "#4F86C6",
    Night_Elf_Haste: "#4F86C6",
    Draenei: "#4F86C6",
    Human: "#4F86C6",
    Troll: "#F2545B",
    Blood_Elf: "#F2545B",
    Void_Elf: "#4F86C6",
    Panda_Feast: "#F3F7F0",
    Nightborne: "#F2545B",
    Lightforged_Draenei: "#4F86C6",
    Night_Elf_Crit: "#4F86C6",
    Kul_Tiran: "#4F86C6",
    Zandalari_Troll_Paku: "#F2545B",
    Zandalari_Troll_Bwonsamdi: "#F2545B",
    Mechagnome: "#4F86C6",
    Undead: "#F2545B",
    Worgen: "#4F86C6",
    Maghar_Orc: "#F2545B",
    Zandalari_Troll_Kimbul: "#F2545B",
    Panda_Haste: "#F3F7F0",
    Dwarf: "#4F86C6",
    Tauren: "#F2545B",
    Panda_Mastery: "#F3F7F0",
    Panda_Crit: "#F3F7F0",
    Panda_Vers: "#F3F7F0",
    Vulpera: "#F2545B",
    Panda_Smothered_Shank: "#F3F7F0",
}

var getCovenantChoiceColor = function (key) {
    return covenantChoiceColor[key];
};

var getColor = function (key, key2) {
   var color = covenantColor[key];
   if(color == null || color == undefined || color == ""){
     color = covenantColor[key2];
   }
   if(color == null || color == undefined || color == "") {
      if(key.includes("Necrolord")) {
        color = covenantColor["necrolord"];
      } else if(key.includes("Night_Fae")) {
        color = covenantColor["night_fae"];
      } else if(key.includes("Venthyr")) {
        color = covenantColor["venthyr"];
      } else if(key.includes("Kyrian")) {
        color = covenantColor["kyrian"];
      }
   }
   if(color == null || color == undefined || color == "") {
       color = racialColor[key];
   }
   if(color == null || color == undefined || color == "") {
       color = "#496DC9";
   }   
   return color;
}

function create_color(dps, min_dps, max_dps) {
  let color_min = [0, 255, 255];
  let color_mid = [255, 255, 0];
  let color_max = [255, 0, 0];
  let diff_mid_max = 0;
  let diff_min_mid = 0;
  for (let i = 0; i < 3; i++) {
    diff_mid_max += Math.abs(color_max[i] - color_mid[i]);
    diff_min_mid += Math.abs(color_mid[i] - color_min[i]);
  }
  let mid_ratio = diff_min_mid / (diff_min_mid + diff_mid_max);
  let mid_dps = min_dps + (max_dps - min_dps) * mid_ratio;
  if (dps >= mid_dps) {
    let percent_of_max = (dps - mid_dps) / (max_dps - mid_dps);
    return [
      Math.floor(color_max[0] * percent_of_max + color_mid[0] * (1 - percent_of_max)),
      Math.floor(color_max[1] * percent_of_max + color_mid[1] * (1 - percent_of_max)),
      Math.floor(color_max[2] * percent_of_max + color_mid[2] * (1 - percent_of_max))
    ];
  } else {
    let percent_of_mid = (dps - min_dps) / (mid_dps - min_dps);
    return [
      Math.floor(color_mid[0] * percent_of_mid + color_min[0] * (1 - percent_of_mid)),
      Math.floor(color_mid[1] * percent_of_mid + color_min[1] * (1 - percent_of_mid)),
      Math.floor(color_mid[2] * percent_of_mid + color_min[2] * (1 - percent_of_mid))
    ];
  }
}
/*
 * Prepare data for single bar chart
 */
function buildChartDataSingleBar(data, showInLegend, xPadding, simsBtn, chartId, maxEntries) {
  var chartForSingle = new Highcharts.Chart( getSingleBarDefinition( 
                                                buildWowheadTooltips( data, true, simsBtn, showInLegend),
                                                data,
                                                getValue(LegendTitles, simsBtn),
                                                dpsIncrease,
                                                showInLegend,
                                                xPadding,
                                                chartId, 
                                                maxEntries))
  while (chartForSingle.series.length > 0) {
    chartForSingle.series[0].remove(false);
  }
  let result = [];
  var currName = data.name.split("-").pop();
  currName = currName.replace(/\s/g, '');
  for (sortedData of data[jsonSortedDataKeys]) {
    let dps = data[jsonData][sortedData][jsonDPS];
    let baselineDPS = data[jsonData][jsonBase][jsonDPS];
    if (baselineDPS == null) 
      baselineDPS = 0;
    
    if(dps >= 0) {
      var percentage = (dps / baselineDPS) * 100 - 100;
      if(percentage < 0) {
        result.push({y: 0, color: getColor(sortedData, currName)});
      } else {
        result.push({y: percentage, color: getColor(sortedData, currName)});
      }
    }
  }

  chartForSingle.addSeries({
    data: result,
    name: DPS,
    showInLegend: showInLegend,
  },false);
  updateSize(chartForSingle, chartId, result.length, maxEntries);
}

/*
 * Prepare data for percentage bar chart
 */
function buildDataForPercentageChart(data, simsBtn, chartId, maxEntries) {
  var chartForPercentage = new Highcharts.Chart( getChartDefinitionPercentage( 
                                                      buildWowheadTooltips(data, false, simsBtn), 
                                                      data,
                                                      getValue(LegendTitles, simsBtn),
                                                      dpsIncrease,
                                                      chartId,
                                                      maxEntries));

  while (chartForPercentage.series.length > 0) {
    chartForPercentage.series[0].remove(false);
  }

  for (currStep of data[jsonSimulatedSteps]) {
    let currResult = [];  
    
    for (sortedData of data[jsonSortedDataKeys]) {
      let dps = data[jsonData][sortedData.trim()][currStep];
      let baselineDPS = data[jsonData][jsonBase];
      if (baselineDPS == null) 
        baselineDPS = 0;
  
      if(dps >= 0) {
        var percentage = (dps / baselineDPS.DPS) * 100 - 100;
        if(percentage < 0) {
          currResult.push(0);
        } else {
          currResult.push(percentage);
        }
      } else {
        currResult.push(0);
      }
      
    }
    chartForPercentage.addSeries({
      data: currResult,
      name: currStep,
      showInLegend: true,
    }, false);
  }
  updateSize(chartForPercentage, chartId, data[jsonSortedDataKeys].length, maxEntries);
}

/*
 * Prepare data for multiple bar chart
 */
function buildChartDataMultipleBar(data, simsBtn, chartId, maxEntries) {
  var chartForMultipleBar = new Highcharts.Chart(getMultipleBarChartDefinition(
                                                      buildWowheadTooltipsMultipleBar( data, simsBtn), 
                                                      data,
                                                      getValue(LegendTitles, simsBtn),
                                                      dpsIncrease,
                                                      chartId,
                                                      maxEntries));
  while (chartForMultipleBar.series.length > 0) {
    chartForMultipleBar.series[0].remove(false);
  }
  var minResults = [];
  var maxResults = [];

  for(i = 0; i <= AggregateConduits.length -1; i++) {
    minResults = [];
    maxResults = [];

    for(currFight in data[jsonData]) {
      var minValue = ((data[jsonData][currFight][AggregateConduits[i]]["min"]) * 100);
      var maxValue = ((data[jsonData][currFight][AggregateConduits[i]]["max"]) * 100) - ((data[jsonData][currFight][AggregateConduits[i]]["min"])) * 100;
      minResults.push(minValue);
      maxResults.push(maxValue);
    }

    chartForMultipleBar.addSeries({
      color: getCovenantChoiceColor(AggregateConduits[i] + "_max"),
      data: maxResults,
      name: getValue(Conduits, AggregateConduits[i]) + " max",
      stack: AggregateConduits[i],
      showInLegend: true,
      }, false);
    
      chartForMultipleBar.addSeries({
      color: getCovenantChoiceColor(AggregateConduits[i] + "_min"),
      data: minResults,
      name: getValue(Conduits, AggregateConduits[i]) + " min",
      stack: AggregateConduits[i],
      showInLegend: true,
    }, false);
  }
  chartForMultipleBar.redraw();
  updateSize(chartForMultipleBar, chartId, AggregateConduits.length, maxEntries);
}

/*
 * Prepare data for dot chart
 */
function buildChartDataDot(githubData, chartId) {
  var chartForStats = new Highcharts.Chart(getDefaultDotDefinition(chartId));
  (function (H) {
      function dragStart(eStart) {
          eStart = chartForStats.pointer.normalize(eStart);

          var posX = eStart.chartX,
          posY = eStart.chartY,
          alpha = chartForStats.options.chart.options3d.alpha,
          beta = chartForStats.options.chart.options3d.beta,
          sensitivity = 5; // lower is more sensitive

          function drag(e) {
              e = chartForStats.pointer.normalize(e);

              chartForStats.update({
                  chart: {
                      options3d: {
                          alpha: alpha + (e.chartY - posY) / sensitivity,
                       beta: beta + (posX - e.chartX) / sensitivity
                      }
                  }
              }, undefined, undefined, false);
          }
          chartForStats.unbindDragMouse = H.addEvent(document, 'mousemove', drag);
          chartForStats.unbindDragTouch = H.addEvent(document, 'touchmove', drag);
          H.addEvent(document, 'mouseup', chartForStats.unbindDragMouse);
          H.addEvent(document, 'touchend', chartForStats.unbindDragTouch);
      }
      H.addEvent(chartForStats.container, 'mousedown', dragStart);
      H.addEvent(chartForStats.container, 'touchstart', dragStart);
  }(Highcharts));

  
  let light_color = "#eeeeee"
  let maxDPSPrefix = githubData[jsonSortedDataKeys][0];
  let minDPSPrefix = githubData[jsonSortedDataKeys][githubData[jsonSortedDataKeys].length -1];
  let maximalDps = githubData[jsonData][maxDPSPrefix][jsonDPS];
  let minimalDps = githubData[jsonData][minDPSPrefix][jsonDPS];
  
  let series = {
    name: Intl.NumberFormat().format(maximalDps) + " DPS",
    color: "#FF0000",
    data: []
  };

  for (sortedData of githubData[jsonSortedDataKeys]) {
    let entry = githubData[jsonData][sortedData][jsonDPS];
    let color_set = create_color(
      entry,
      minimalDps,
      maximalDps
    );
    let line_width = 1;
    let line_color = "#232227";

    let radius = 2 + 3 * (entry - minimalDps) / (maximalDps - minimalDps);
    if (maximalDps === entry) {
      line_width = 3;
      radius = 8;
      line_color = light_color;
    }

    let dataLabel = undefined;
    if(sortedData.includes("10")) {
      dataLabel = {
        enabled: true,
        allowOverlap: true,
      };
      
      if(sortedData.split(underscore)[0].includes("10")){
        dataLabel.format = "Mastery";
        dataLabel.verticalAlign = "top";
      } else if(sortedData.split("_")[1].includes("10")) {
        dataLabel.format = "Versatility";
        dataLabel.verticalAlign = "top";
      } else if(sortedData.split("_")[2].includes("10")) {
        dataLabel.format = "Haste";
      } else if(sortedData.split("_")[3].includes("10")) {
        dataLabel.format = "Crit";
        dataLabel.verticalAlign = "top";
      }
    }

    statMastery = ((parseInt(sortedData.split("_")[0].replace(/[^.\d]/g, ''))) * configData["stats"]["steps"] ) + configData["stats"]["base"] / configData["stats"]["include"].length;
    statVers = ((parseInt(sortedData.split("_")[1].replace(/[^.\d]/g, ''))) * configData["stats"]["steps"] ) + configData["stats"]["base"] / configData["stats"]["include"].length;
    statHaste = ((parseInt(sortedData.split("_")[2].replace(/[^.\d]/g, ''))) * configData["stats"]["steps"] ) + configData["stats"]["base"] / configData["stats"]["include"].length;
    statCrit = ((parseInt(sortedData.split("_")[3].replace(/[^.\d]/g, ''))) * configData["stats"]["steps"] ) + configData["stats"]["base"] / configData["stats"]["include"].length;
    sumStatValues = configData["stats"]["total"];

    series.data.push({
      x: Math.sqrt(3) / 2 * (parseInt(sortedData.split("_")[0].replace(/[^.\d]/g, '')) + 1 / 3 * parseInt(sortedData.split("_")[1].replace(/[^.\d]/g, ''))),
      y: Math.sqrt(2 / 3) * parseInt(sortedData.split("_")[1].replace(/[^.\d]/g, '')),
      z: parseInt(sortedData.split("_")[2].replace(/[^.\d]/g, '')) + 0.5 * parseInt(sortedData.split("_")[0].replace(/[^.\d]/g, '')) + 0.5 * parseInt(sortedData.split("_")[1].replace(/[^.\d]/g, '')),
      name: sortedData,
      color: "rgb(" + color_set[0] + "," + color_set[1] + "," + color_set[2] + ")",

      dps: entry,
      dpsMax: maximalDps,
      dpsMin: minimalDps,
      dpsBase: githubData[jsonData][jsonBase][jsonDPS],
      statMastery: statMastery,
      statVers: statVers,
      statHaste: statHaste,
      statCrit: statCrit,
      statMasteryPercent: Math.round(( 100 / sumStatValues ) * (((parseInt(sortedData.split("_")[0].replace(/[^.\d]/g, ''))) * configData["stats"]["steps"] ) + configData["stats"]["base"] / configData["stats"]["include"].length)),
      statVersPercent: Math.round(( 100 /sumStatValues ) * (((parseInt(sortedData.split("_")[1].replace(/[^.\d]/g, ''))) * configData["stats"]["steps"] ) + configData["stats"]["base"] / configData["stats"]["include"].length)),
      statHastePercent: Math.round(( 100 /sumStatValues ) * (((parseInt(sortedData.split("_")[2].replace(/[^.\d]/g, ''))) * configData["stats"]["steps"] ) + configData["stats"]["base"] / configData["stats"]["include"].length)),
      statCritPercent: Math.round(( 100 /sumStatValues ) * (((parseInt(sortedData.split("_")[3].replace(/[^.\d]/g, ''))) * configData["stats"]["steps"] ) + configData["stats"]["base"] / configData["stats"]["include"].length)),
      marker: {
        radius: radius,
        lineColor: line_color,
        lineWidth: line_width
      },
     dataLabels: dataLabel,
    });
  }

  
  while (chartForStats.series[0]) {
    chartForStats.series[0].remove(false);
  }

  chartForStats.addSeries(series, false);
  chartForStats.addSeries({ name: Intl.NumberFormat().format(minimalDps) + " DPS", color: "#00FFFF" }, false);
  chartForStats.redraw();
}
/*
 * Build wowhead tooltips
 */
function buildWowheadTooltips(data, breakConidition, simsBtn) {
  var result = [];
  for (dpsName of data[jsonSortedDataKeys]) {
    var id = data[jsonIds][dpsName]; 
    
    if (id == null) {
      id = "";
    }

    if(simsBtn == consumables) {
      url = wowheadUrl + wowheadItemPath;
    } else if( simsBtn == shards) {
      url = wowheadUrl + wowheadSpellPath;
    } else if(configData[sims][simsBtn.replaceAll("_", "-")]["lookupType"] == "spell"){
      url = wowheadUrl + wowheadSpellPath;
    } else {
      url = wowheadUrl + wowheadItemPath;
    }
    
    result.push(buildChartLine(dpsName, id, url, simsBtn));
  }
  
  return result;
}

/*
 * Build a single line of the wowhead tooltip
 */
function buildChartLine(dpsName, itemId, url, simsBtn) {
  result = "";
  result += '<div style="display:inline-block; margin-bottom:-3px">';
  if( simsBtn == null
    || simsBtn == undefined
    || simsBtn == trinkets 
    || simsBtn == consumables
    || simsBtn == shards
    || simsBtn == conduits
    || simsBtn == covenants
    || simsBtn == enchants
    || simsBtn == legendaries
    || simsBtn.replaceAll("-", "_") == legendaryItems
    || simsBtn == racials
    || simsBtn.replaceAll("-", "_") == soulbindTraits) {
      result = buildChartLineWithWowheadLine(dpsName, itemId, url, result);
  } else if(simsBtn != null && simsBtn != undefined && simsBtn.replaceAll("-", "_") == conduitCombos) {
    result = buildChartLineForConduitCombos(dpsName, result);
  } else if(simsBtn != null && simsBtn != undefined && simsBtn.replaceAll("-", "_") == soulbinds) {
    result = buildChartLineForSoulbinds(dpsName, result);
  } else if(simsBtn != null && simsBtn != undefined && simsBtn.replaceAll("-", "_") == soulbindsLaunch) {
    result = buildChartLineForSoulbindsLaunch(dpsName, result);
  } else if(simsBtn != null && simsBtn != undefined && simsBtn == talents) {
    result = buildChartLineForTrinkets(dpsName, result);
  } else if(simsBtn != null && simsBtn != undefined && simsBtn == "soulbinds_prog") {
    result = buildChartLineForSoulbindsLaunch(dpsName, result);
  } else if(simsBtn != null && simsBtn != undefined && simsBtn == "trinket_combos") {
    result = buildChartLineForTrinketCombos(dpsName, result);
  }else {
    result = buildChartLineWithWowheadLine(dpsName, itemId, url, result);
  }
  return result;
}

function buildChartLineForTrinketCombos(dpsName, currentResult) {
  var currResult = "";
  var counter = 0;
  var names = dpsName.split("-");
  for(name of names) {
    var splittedName = name.split("_");
    var slicedName = name.slice(0, name.lastIndexOf("_"));
    var trinketId = getValue(TrinketIds, slicedName);
    var ilvl = splittedName[splittedName.length -1];
    var currName = slicedName.split("_");
    var finalName = "";
    for(tempName of currName) {
      finalName = finalName + tempName.charAt(0);
    }
    finalName = finalName + " (" + ilvl + ")";
    currResult = buildChartLineWithWowheadLine(finalName, trinketId, wowheadUrl + wowheadItemPath, currResult);
    if(counter == 0) {
      currResult = currResult + '  ';
      counter++;
    }
  }

  return currResult;
}

function buildWowheadTooltipsMultipleBar(data, simsBtn) {
  var result = [];
  for(currFight in data[jsonData]) {
    result.push(buildChartLine(getValue(FightStyleExternal, currFight), "", ""));
  }

  return result;
}

function buildChartLineForTrinkets(dpsName, currentResult) {
  var currResult = "";
  var names = dpsName.split("_");
  for(name of names) {
    currResult = buildChartLineWithWowheadLine(name, getValue(TalentIds, name.toUpperCase()), wowheadUrl + wowheadSpellPath, currResult);
  }

  return currResult;
}

function buildChartLineForSoulbinds(dpsName, currentResult) {
  var currResult = "";
  var names = []
  var currNames = dpsName.split("-");
  for(name of currNames) {
    if(name.includes("_")) {
      var currNames2 = name.split("_");
      for(currName of currNames2){
        names.push(currName);
      }
    } else {
      names.push(name);
    }
  }
  currResult = buildChartLineForBasic(names, currResult);
  return currentResult + currResult;
}

function buildChartLineForSoulbindsLaunch(dpsName, currentResult) {
  var result = currentResult;
  var names = [];
  var currNames = dpsName.split("-");
  for(name of currNames) {
    if(name.includes("_")) {
      var currNames2 = name.split("_");
      for(currName of currNames2) {
        names.push(currName);
      }
    } else {
      names.push(name);
    }
  }  
  result = buildChartLineForBasic(names, result);
  return result;
}

function buildChartLineForConduitCombos(dpsName, currentResult) {
  var result = currentResult;
  var names = dpsName.split("_");
  result = buildChartLineForBasic(names, result);
  return result;
}

function buildChartLineForBasic(names, currentResult) {
  var currResult = currentResult; 
  var counter = 0;
  var currName = "";
  var nextName = "";
  var skipNext = false;
  var nextId = "";
  for(name of names) {
    counter++;
    if(!(/^\d+$/.test(name))){
      if(skipNext) {
        skipNext = false;
        continue;
      } else if (counter < names.length) {
        currName = name;
        nextName = names[counter];
        nextId = getValue(ConduitsIds, nextName.toUpperCase());
      }
      var id = getValue(ConduitsIds, name.toUpperCase());
      if(nextId == null || nextId == undefined) {
        currName = name + "(" + nextName + ")";
        skipNext = true;
      } else if( id == null || id == undefined && counter == 1) {
        currName = name + " / ";
      } else {
        currName = name;
      }
      currResult = buildChartLineWithWowheadLine(currName, getValue(ConduitsIds, name.toUpperCase()), wowheadUrl + wowheadSpellPath, currResult);
      
      nextName = "";
      nextId = "";
    } 
  }
  return currResult;
}

function buildChartLineWithWowheadLine(dpsName, itemId, url, currentResult) {
  var result = currentResult;
  result += '<a style="color: white; font-size: 16px; padding: 3px; cursor: default" href="' + url + itemId + '"';
  result += ' onclick="return false"';
  result += '" target="blank"';
  result += ">";
  result += dpsName;
  result += "</a>";

  return result;
}

/*
 * Dot chart definition used for:
 * - Stats
 */
function getDefaultDotDefinition(chartId) {
  return defaultDotDefinition = {
    chart: {
      renderTo: chartId,
      type: "scatter3d",
      backgroundColor: null,
      animation: false,
      height: 700,
      width: 600,
      options3d: {
        enabled: true,
        alpha: 10,
        beta: -10,
        depth: 700,
        fitToPlot: false,
      }
    },
    legend: {
      enabled: false,
      backgroundColor: darkColor,
      borderColor: mediumColor,
      borderWidth: 1,
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
      itemStyle: { "color": defaultFontColor },
      itemHoverStyle: { "color": defaultFontColor }
    },
    plotOptions: {
      series: {
        dataLabels: {
          allowOverlap: true,
          style: {
            color: defaultFontColor,
            fontSize: fontSize,
            fontWeight: fontWeightBold,
            fontWeight: "400",
            textOutline: ""
          }
        },
        events: {
          legendItemClick: function () {
            return false;
        }
      },
    },
  },
  series: [],
  title: {
    text: '', //"Title placeholder",
      style: {
        color: defaultFontColor,
        fontWeight: fontWeightBold,
      },
    },
    subtitle: {
      text: "",
      useHTML: true,
      style: {
        color: defaultFontColor,
        fontWeight: fontWeightBold,
        fontSize: fontSize
      }
    },
    tooltip: {
      headerFormat: '',
        pointFormatter: function () {
          return '<table>\
            <thead>\
              <tr>\
                <th ></th>\
                <th ></th>\
                <th ></th>\
              </tr>\
            </thead>\
            <tbody>\
              <tr>\
                <th >DPS</th>\
                <td>' + Intl.NumberFormat().format(this.dps) + '</td>\
                <td>' + Math.round(( 100 / this.dpsBase ) * ( this.dps - this.dpsBase) * 100 ) / 100 + '%</td>\
              </tr>\
              <tr>\
                <th >Crit</th>\
                <td>' + this.statCrit +'</td>\
                <td>' + this.statCritPercent + '%</td>\
              </tr>\
              <tr>\
                <th>Haste</th>\
                <td>' + this.statHaste +'</td>\
                <td>' + this.statHastePercent + '%</td>\
              </tr>\
              <tr>\
                <th>Mastery</th>\
                <td>' + this.statMastery +'</td>\
                <td>' + this.statMasteryPercent + '%</td>\
              </tr>\
              <tr>\
                <th>Versatility</th>\
                <td>' + this.statVers +'</td>\
                <td>' + this.statVersPercent + '%</td>\
              </tr>\
            </tbody>\
          </table>';
      },
      useHTML: true,
      borderColor: darkColor,
    },
    xAxis: {
      min: -5,
      max: 15,
      startOnTick: true,
      endOnTick: true,
      title: "",
      labels: {
        enabled: false,
      },
      gridLineWidth: 1,
      gridLineColor: mediumColor,
    },
    yAxis: {
      min: -5,
      max: 15,
      startOnTick: true,
      endOnTick: true,
      title: "",
      labels: {
        enabled: false,
      },
      gridLineWidth: 1,
      gridLineColor: mediumColor,
    },
    zAxis: {
      min: 0,
      max: 20,
      startOnTick: true,
      endOnTick: true,
      title: "",
      labels: {
        enabled: false,
      },
      reversed: true,
      gridLineWidth: 1,
      gridLineColor: mediumColor,
    },
  };
}

/*
 * Multiple bar definition used for:
 * - Covenants Choice
 * - ...
 */
function getMultipleBarChartDefinition(wowheadTooltips, data, legendTitle, yAxisTitle, chartId, maxEntries) {
  return stackedCharDefinition = {
    chart: {
      renderTo: chartId,
      type: chartType,
      backgroundColor: defaultBackgroundColor,
    },
    title: {
      title: '',
    },
    xAxis: {
      categories: wowheadTooltips,
      useHTML: true,
      max: maxEntries,
      labels: {
        x: -40,
        useHTML: true,
        style: {
          color: defaultFontColor,
          fontWeight: fontWeightBold,
          fontSize: 14,
          events: {
            legendItemClick: function () { return false; }
          },
        },
      },
    },
    yAxis: {
      min: '0',
      allowDecimals: true,
      gridLineColor: gridLineColor,
      crosshair: {
        color: whiteText,
        width: 3,
        snap: false,
        zIndex: 10,
      },
      labels: {
        style: {
          color: defaultFontColor,
        },
      },
      stackLabels: {
        enabled: false,
        style: {
          fontWeight: fontWeightBold,
          color: defaultFontColor,
          fontSize: 14,
        },
      },
      title: {
        text: yAxisTitle,
        color: defaultFontColor,
      },
    },
    legend: {
      layout: legendLayoutVertical,
      align: alignRight,
      borderColor: mediumColor,
      borderWidth: 1,
      floating: false,
      itemMarginBottom: 3,
      itemMaginTop: 0,
      reversed: true,
      shadow: false,
      verticalAlign: alignMiddle,
      x: 0,
      y: 0,
      title: {
        text: legendTitle,
        style: {
          color: lightColor,
          fontWeight: fontWeightBold,
        },
      },
      itemStyle: {
        color: defaultFontColor,
        fontWeight: fontWeightBold,
      },
    },
    plotOptions: {
      series: {
        column: {
          dataLabels: {
              enabled: false,
          },
        },
        line: {
          label: {
            enabled: false,
          },
        },
        pointPadding: 1.0, 
        states: {
          hover: {
            enabled: false
          },
          inactive: {
            opacity: 1,
          },
        },
        dataLabels: {
          align: alignRight,
          enabled: false,
          pointFormat: plotOptionsPointFormat,
        },
        stacking: stackingNormal,
        grouping: true,
        groupPadding: 0.1,
        enableMouseTracking: true,
        pointPadding: 0,
        pointWidth: 10,
        spacing: 100,
        events: {
          legendItemClick: function () { return false; }
        },
        allowPointSelect: false,
      },
    },
    title: {
      text: '',
    },
    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat: tooltipHeaderFormat, 
      style: {
        color: defaultFontColor,
      },
      pointFormat: tooltipPointFormat,
      padding: 5,
      formatter: function () {
        var result = '<div class="chartHover">'
              + '<div class="chartHoverLine">' 
              + this.x
              + "</div>";
        var minValue = 0;
        var value = 0;
        for (var i = this.points.length - 1; i >= 0; i--) {
          if(this.points[i].series.name.includes("min")) {
            minValue = this.points[i].y;
            value = minValue;
          } else if (this.points[i].series.name.includes("max")) {
            value = minValue + this.points[i].y;
            minValue = 0;
          }

          
          result += getTooltip( value, 
                                0, 
                                this.points[i].series,
                                data,
                                false);
          
        }
                  
        result += "</div>";
        return result;
      },
    },
  };   
}

/*
 * Percentage bar definition used for:
 * - Conduits
 * - Legendary Items
 * - Trinkets
 * - ....
 */
function getChartDefinitionPercentage(wowheadTooltips, data, legendTitle, yAxisTitle, chartId, maxEntries) {
  return percentageChartDefinition = {
    chart: {
      renderTo: chartId,
      type: chartType,
      backgroundColor: defaultBackgroundColor,
    },

    title: {
      title: '',
    },

    plotOptions: {
      series: {
        states: {
          hover: {
            enabled: false
          },
          inactive: {
            opacity: 1,
          },
        },
        stacking: stackingNormal,
        dataLabels: {
          align: alignRight,
          enabled: false,
          pointFormat: plotOptionsPointFormat,
        },
        enableMouseTracking: true,
        pointWidth: 15,
        spacing: 20,
        events: {
          legendItemClick: function () { return false; }
        },
        allowPointSelect: false,
      },
    },
  
    xAxis: {
      categories: wowheadTooltips,
      useHTML: true,
      max: maxEntries,
      labels: {
        useHTML: true,
        x: -40,
        style: {
          color: defaultFontColor,
          fontWeight: fontWeightBold,
          fontSize: 14,
          events: {
            legendItemClick: function () { return false; }
          },
        },
      },
    },
  
    yAxis: {
      crosshair: {
        color: whiteText,
        width: 3,
        snap: false,
        zIndex: 10,
      },
      labels: {
        style: {
          color: defaultFontColor,
        },
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: fontWeightBold,
          color: defaultFontColor,
          fontSize: 14,
        },
      },
      gridLineColor: gridLineColor,
      min: '0',
      allowDecimals: true,
      tickPositioner: function() {
        var result = [];
        var highestDPS = 0;
        let baselineDPS = data[jsonData][jsonBase];
        for(currStep of data[jsonSimulatedSteps]) {
          for(sortedData of data[jsonSortedDataKeys]) {
            var percentage = ((data[jsonData][sortedData.trim()][currStep]) / baselineDPS.DPS) * 100 - 100;
            if(percentage > highestDPS) {
              highestDPS = percentage;
            }
          }
        }
        let lastValue = 0;
        result.push(lastValue)
        for(i = 0; i <= 8; i++) {
          lastValue = lastValue + Number((Number(highestDPS / (data[jsonSimulatedSteps].length + 1))).toFixed(2) * (data[jsonSimulatedSteps].length / 7));
          result.push(Number(lastValue.toFixed(2)));
        }
        return result;
      },
      title: {
        text: yAxisTitle,
        color: defaultFontColor,
      },
    },
 
    legend: {
      layout: legendLayoutVertical,
      align: alignRight,
      borderColor: mediumColor,
      borderWidth: 1,
      floating: false,
      itemMarginBottom: 3,
      itemMaginTop: 0,
      reversed: true,
      shadow: false,
      verticalAlign: alignMiddle,
      x: 0,
      y: 0,
      title: {
        text: legendTitle,
        style: {
          color: lightColor,
          fontWeight: fontWeightBold,
        },
      },
      itemStyle: {
        color: defaultFontColor,
        fontWeight: fontWeightBold,
      },
    },
 
    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat: tooltipHeaderFormat, 
      style: {
        color: defaultFontColor,
      },
      pointFormat: tooltipPointFormat,
      padding: 5,
      formatter: function () {
        var result = '<div class="chartHover">'
                    + '<div class="chartHoverLine">' 
                    + this.x
                    + "</div>";
  
        for (var i = this.points.length - 1; i >= 0; i--) {
          result += getTooltip( this.points[i].y, 
                                (( data[jsonData][jsonBase][DPS] / 100 ) * this.points[i].y), 
                                this.points[i].series,
                                data,
                                true);
        }

        result += "</div>";
        return result;
      },
    },
  };   
}

/*
 * Single bar definition used for:
 * - Covenants
 * - Legendaries
 * - Soulbinds
 * - Conduit Combos
 * - Soulbind Traits
 * - Soulbinds Launch
 * - Soulbinds Prog
 * - Racials
 * - Talents
 * - Trinket Combos
 * - ....
 */
function getSingleBarDefinition(wowheadTooltips, data, legendTitle, yAxisTitle, showLegend, xPadding, chartId, maxEntries) {
  return singleLineBarDefinition = {
    chart: {
      renderTo: chartId,
      type: chartType,
      backgroundColor: defaultBackgroundColor,
    },
      
    title: {
      text: '',
    },
  
    plotOptions: {
      series: {
        states: {
          hover: {
            enabled: false
          },
          inactive: {
            opacity: 1,
          },
        },
        stacking: stackingNormal,
        dataLabels: {
          align: alignRight,
          enabled: false,
          pointFormat: plotOptionsPointFormat,
        },
        enableMouseTracking: true,
        pointWidth: 15,
        spacing: 20,
        events: {
          legendItemClick: function () { return false; }
        },
        allowPointSelect: false,
      },
    },
  
    xAxis: {
      labels: {
        x: xPadding,
        useHTML: true,
        style: {
          color: defaultFontColor,
          fontWeight: fontWeightBold,
          fontSize: 14,
          events: {
            legendItemClick: function () { return false; }
          },
        },
      },
      categories: wowheadTooltips,
      useHTML: true,
      max: maxEntries,
    },
  
    yAxis: {
      crosshair: {
        color: whiteText,
        width: 3,
        snap: false,
        zIndex: 10,
      },
      labels: {
        style: {
          color: defaultFontColor,
        },
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: fontWeightBold,
          color: defaultFontColor,
          fontSize: 14,
        },
      },
      gridLineColor: gridLineColor,
      title: {
        text: yAxisTitle,
        color: defaultFontColor,
      },
    },
      
    legend: {
      layout: legendLayoutVertical,
      align: alignRight,
      borderColor: mediumColor,
      borderWidth: 1,
      floating: false,
      itemMarginBottom: 3,
      itemMaginTop: 0,
      reversed: true,
      shadow: false,
      verticalAlign: alignMiddle,
      x: 0,
      y: 0,
      title: {
        text: legendTitle,
        style: {
          color: lightColor,
          fontWeight: fontWeightBold,
        },
      },
      itemStyle: {
        color: defaultFontColor,
        fontWeight: fontWeightBold,
      },
      enabled: showLegend,
    },
  
    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat: tooltipHeaderFormat,
      style: {
        color: defaultFontColor,
        textAlign: 'center',
      },
      pointFormat: tooltipPointFormat,
      padding: 5,
      formatter: function () {
        var result = '<div class="chartHover">'
              + '<div class="chartHoverLine">' 
              + this.x 
              + "</div>";
        for (var i = this.points.length - 1; i >= 0; i--) {
          result += getTooltip( this.points[i].y, 
                                ((data[jsonData][jsonBase][DPS] / 100) * this.points[i].y), 
                                this.points[i].series,
                                data,
                                true);
        }
        result += "</div>";
        return result;
      },
    },
  };   
}

function getTooltip(percentage, dpsIncrease, series, data, showBase) {
  result = "";
  if (percentage != 0) {
    result = '<div><span class="chartHoverSpan" style="border-left: 9px solid ' 
              + series.color
              + ";" 
              + '">' 
              + series.name;

    if(showBase) {
      result += " ( " + data[jsonData][jsonBase][DPS] + " base )";
    }
    result += "</span>:&nbsp;&nbsp;";

    if(dpsIncrease != 0) {
      result += "+ "
              + Intl.NumberFormat().format(dpsIncrease) 
              + space + DPS.toLowerCase()
              + space + dash + space;
    }
    result += percentage.toFixed(2);
    if (percentage > 0) {
      result += '% (Increase)';
    } else {
      result += '% (decrease)';
    }
  }

  return result;
}
var Headings = {
    profile: "Profile",
    actor: "Actor",
    DPS: "DPS",
    int: "Intellect",
    haste: "Haste",
    crit: "Critical Strike",
    mastery: "Mastery",
    vers: "Versatility",
    dpsW: "DPS Weight",
};

function parseCSV(currSimsBtn, currFightStyleBtn, currTalentBtn, chartId, metaData) {
    $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: determineCsvUrl(currSimsBtn, baseUrl, currFightStyleBtn, currTalentBtn),
            dataType: "text",
            success: function(data) {processData(data, currSimsBtn, baseUrl, currFightStyleBtn, currTalentBtn);}
         });
    });
    
    function processData(allText, currSimsBtn, baseUrl, currFightStyleBtn, currTalentBtn) {
        var record_num = 9;  // or however many elements there are in each row
        var allTextLines = allText.split(/\r\n|\n/);
        if(metaData) {
            document.getElementById('header').innerHTML = "<h3 style='color:#ffffff'>" + determineChartName("", getValue(SimTalents, currTalentBtn), getValue(Sims, currSimsBtn), currFightStyleBtn) + "</h3>";
            document.getElementById('description').innerHTML = determineChartDescription(currSimsBtn);
        }
        var result = "</br>";
        result += "<table>";

        for(var i = 0; i < allTextLines.length -1; i++){
            var lines = allTextLines[i].split(',');
            var entries = lines.splice(0, record_num);
            result += "<tr>"
            for (var j=0; j<record_num; j++) {
                var flag = "<td>";
                var flagClose = "</td>";

                if(i == 0) {
                    flag = "<th>";
                    flagClose = "</th>";
                }

                if(entries[j] != null || entries[j] != undefined) {
                    result += flag + getLabel(entries[j]) + flagClose;
                }
            }
            result += "</tr>";
        }

        result +="</table>";
        result +="</br>";
        result +="</br>";
        result +="</br>";
        
        if(result != null || result != undefined || result != ""){
            document.getElementById(chartId).innerHTML = result;
        }
    }

    function getLabel(key) {
        var result = "";
        result = Headings[key];
        if(result == null || result == undefined || result == "" ) {
            result = key;
        }

        return result.replaceAll("_", " ");
    }
}

function determineCsvUrl(simsBtn, baseurl, fightStyle, talentChoice) {
    return baseurl + slash + simsBtn + simResultPath + fightStyle + underscore + talentChoice.replaceAll("_", "-") + csvExtension;
}
!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).jsyaml=e()}(function(){return function o(a,s,c){function u(t,e){if(!s[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}var r=s[t]={exports:{}};a[t][0].call(r.exports,function(e){return u(a[t][1][e]||e)},r,r.exports,o,a,s,c)}return s[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){"use strict";var i=e("./js-yaml/loader"),r=e("./js-yaml/dumper");function o(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}t.exports.Type=e("./js-yaml/type"),t.exports.Schema=e("./js-yaml/schema"),t.exports.FAILSAFE_SCHEMA=e("./js-yaml/schema/failsafe"),t.exports.JSON_SCHEMA=e("./js-yaml/schema/json"),t.exports.CORE_SCHEMA=e("./js-yaml/schema/core"),t.exports.DEFAULT_SAFE_SCHEMA=e("./js-yaml/schema/default_safe"),t.exports.DEFAULT_FULL_SCHEMA=e("./js-yaml/schema/default_full"),t.exports.load=i.load,t.exports.loadAll=i.loadAll,t.exports.safeLoad=i.safeLoad,t.exports.safeLoadAll=i.safeLoadAll,t.exports.dump=r.dump,t.exports.safeDump=r.safeDump,t.exports.YAMLException=e("./js-yaml/exception"),t.exports.MINIMAL_SCHEMA=e("./js-yaml/schema/failsafe"),t.exports.SAFE_SCHEMA=e("./js-yaml/schema/default_safe"),t.exports.DEFAULT_SCHEMA=e("./js-yaml/schema/default_full"),t.exports.scan=o("scan"),t.exports.parse=o("parse"),t.exports.compose=o("compose"),t.exports.addConstructor=o("addConstructor")},{"./js-yaml/dumper":3,"./js-yaml/exception":4,"./js-yaml/loader":5,"./js-yaml/schema":7,"./js-yaml/schema/core":8,"./js-yaml/schema/default_full":9,"./js-yaml/schema/default_safe":10,"./js-yaml/schema/failsafe":11,"./js-yaml/schema/json":12,"./js-yaml/type":13}],2:[function(e,t,n){"use strict";function i(e){return null==e}t.exports.isNothing=i,t.exports.isObject=function(e){return"object"==typeof e&&null!==e},t.exports.toArray=function(e){return Array.isArray(e)?e:i(e)?[]:[e]},t.exports.repeat=function(e,t){for(var n="",i=0;i<t;i+=1)n+=e;return n},t.exports.isNegativeZero=function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},t.exports.extend=function(e,t){var n,i,r,o;if(t)for(n=0,i=(o=Object.keys(t)).length;n<i;n+=1)e[r=o[n]]=t[r];return e}},{}],3:[function(e,t,n){"use strict";var c=e("./common"),d=e("./exception"),i=e("./schema/default_full"),r=e("./schema/default_safe"),p=Object.prototype.toString,u=Object.prototype.hasOwnProperty,o=9,h=10,a=13,s=32,m=33,g=34,y=35,x=37,v=38,A=39,b=42,w=44,C=45,k=58,j=61,S=62,I=63,O=64,E=91,F=93,_=96,N=123,M=124,T=125,l={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},f=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function L(e){var t,n,i=e.toString(16).toUpperCase();if(e<=255)t="x",n=2;else if(e<=65535)t="u",n=4;else{if(!(e<=4294967295))throw new d("code point within a string may not be greater than 0xFFFFFFFF");t="U",n=8}return"\\"+t+c.repeat("0",n-i.length)+i}function D(e){this.schema=e.schema||i,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=c.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var n,i,r,o,a,s,c;if(null===t)return{};for(n={},r=0,o=(i=Object.keys(t)).length;r<o;r+=1)a=i[r],s=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(c=e.compiledTypeMap.fallback[a])&&u.call(c.styleAliases,s)&&(s=c.styleAliases[s]),n[a]=s;return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function U(e,t){for(var n,i=c.repeat(" ",t),r=0,o=-1,a="",s=e.length;r<s;)r=-1===(o=e.indexOf("\n",r))?(n=e.slice(r),s):(n=e.slice(r,o+1),o+1),n.length&&"\n"!==n&&(a+=i),a+=n;return a}function q(e,t){return"\n"+c.repeat(" ",e.indent*t)}function Y(e){return e===s||e===o}function R(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function B(e,t){return R(e)&&65279!==e&&e!==w&&e!==E&&e!==F&&e!==N&&e!==T&&e!==k&&(e!==y||t&&(R(n=t)&&!Y(n)&&65279!==n&&n!==a&&n!==h));var n}function P(e){return/^\n* /.test(e)}var W=1,K=2,$=3,H=4,G=5;function V(e,t,n,i,r){var o,a,s,c,u=!1,l=!1,p=-1!==i,f=-1,d=R(c=e.charCodeAt(0))&&65279!==c&&!Y(c)&&c!==C&&c!==I&&c!==k&&c!==w&&c!==E&&c!==F&&c!==N&&c!==T&&c!==y&&c!==v&&c!==b&&c!==m&&c!==M&&c!==j&&c!==S&&c!==A&&c!==g&&c!==x&&c!==O&&c!==_&&!Y(e.charCodeAt(e.length-1));if(t)for(o=0;o<e.length;o++){if(!R(a=e.charCodeAt(o)))return G;s=0<o?e.charCodeAt(o-1):null,d=d&&B(a,s)}else{for(o=0;o<e.length;o++){if((a=e.charCodeAt(o))===h)u=!0,p&&(l=l||i<o-f-1&&" "!==e[f+1],f=o);else if(!R(a))return G;s=0<o?e.charCodeAt(o-1):null,d=d&&B(a,s)}l=l||p&&i<o-f-1&&" "!==e[f+1]}return u||l?9<n&&P(e)?G:l?H:$:d&&!r(e)?W:K}function Z(i,r,o,a){i.dump=function(){if(0===r.length)return"''";if(!i.noCompatMode&&-1!==f.indexOf(r))return"'"+r+"'";var e=i.indent*Math.max(1,o),t=-1===i.lineWidth?-1:Math.max(Math.min(i.lineWidth,40),i.lineWidth-e),n=a||-1<i.flowLevel&&o>=i.flowLevel;switch(V(r,n,i.indent,t,function(e){return function(e,t){for(var n=0,i=e.implicitTypes.length;n<i;n+=1)if(e.implicitTypes[n].resolve(t))return!0;return!1}(i,e)})){case W:return r;case K:return"'"+r.replace(/'/g,"''")+"'";case $:return"|"+z(r,i.indent)+J(U(r,e));case H:return">"+z(r,i.indent)+J(U(function(t,n){var e,i,r=/(\n+)([^\n]*)/g,o=function(){var e=-1!==(e=t.indexOf("\n"))?e:t.length;return r.lastIndex=e,Q(t.slice(0,e),n)}(),a="\n"===t[0]||" "===t[0];for(;i=r.exec(t);){var s=i[1],c=i[2];e=" "===c[0],o+=s+(a||e||""===c?"":"\n")+Q(c,n),a=e}return o}(r,t),e));case G:return'"'+function(e){for(var t,n,i,r="",o=0;o<e.length;o++)55296<=(t=e.charCodeAt(o))&&t<=56319&&56320<=(n=e.charCodeAt(o+1))&&n<=57343?(r+=L(1024*(t-55296)+n-56320+65536),o++):(i=l[t],r+=!i&&R(t)?e[o]:i||L(t));return r}(r)+'"';default:throw new d("impossible error: invalid scalar style")}}()}function z(e,t){var n=P(e)?String(t):"",i="\n"===e[e.length-1];return n+(i&&("\n"===e[e.length-2]||"\n"===e)?"+":i?"":"-")+"\n"}function J(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Q(e,t){if(""===e||" "===e[0])return e;for(var n,i,r=/ [^ ]/g,o=0,a=0,s=0,c="";n=r.exec(e);)t<(s=n.index)-o&&(i=o<a?a:s,c+="\n"+e.slice(o,i),o=i+1),a=s;return c+="\n",e.length-o>t&&o<a?c+=e.slice(o,a)+"\n"+e.slice(a+1):c+=e.slice(o),c.slice(1)}function X(e,t,n){for(var i,r,o,a=n?e.explicitTypes:e.implicitTypes,s=0,c=a.length;s<c;s+=1)if(((r=a[s]).instanceOf||r.predicate)&&(!r.instanceOf||"object"==typeof t&&t instanceof r.instanceOf)&&(!r.predicate||r.predicate(t))){if(e.tag=n?r.tag:"?",r.represent){if(o=e.styleMap[r.tag]||r.defaultStyle,"[object Function]"===p.call(r.represent))i=r.represent(t,o);else{if(!u.call(r.represent,o))throw new d("!<"+r.tag+'> tag resolver accepts not "'+o+'" style');i=r.represent[o](t,o)}e.dump=i}return 1}}function ee(e,t,n,i,r,o){e.tag=null,e.dump=n,X(e,n,!1)||X(e,n,!0);var a=p.call(e.dump);i=i&&(e.flowLevel<0||e.flowLevel>t);var s,c,u="[object Object]"===a||"[object Array]"===a;if(u&&(c=-1!==(s=e.duplicates.indexOf(n))),(null!==e.tag&&"?"!==e.tag||c||2!==e.indent&&0<t)&&(r=!1),c&&e.usedDuplicates[s])e.dump="*ref_"+s;else{if(u&&c&&!e.usedDuplicates[s]&&(e.usedDuplicates[s]=!0),"[object Object]"===a)i&&0!==Object.keys(e.dump).length?(function(e,t,n,i){var r,o,a,s,c,u,l="",p=e.tag,f=Object.keys(n);if(!0===e.sortKeys)f.sort();else if("function"==typeof e.sortKeys)f.sort(e.sortKeys);else if(e.sortKeys)throw new d("sortKeys must be a boolean or a function");for(r=0,o=f.length;r<o;r+=1)u="",i&&0===r||(u+=q(e,t)),s=n[a=f[r]],ee(e,t+1,a,!0,!0,!0)&&((c=null!==e.tag&&"?"!==e.tag||e.dump&&1024<e.dump.length)&&(e.dump&&h===e.dump.charCodeAt(0)?u+="?":u+="? "),u+=e.dump,c&&(u+=q(e,t)),ee(e,t+1,s,!0,c)&&(e.dump&&h===e.dump.charCodeAt(0)?u+=":":u+=": ",l+=u+=e.dump));e.tag=p,e.dump=l||"{}"}(e,t,e.dump,r),c&&(e.dump="&ref_"+s+e.dump)):(function(e,t,n){for(var i,r,o,a="",s=e.tag,c=Object.keys(n),u=0,l=c.length;u<l;u+=1)o="",0!==u&&(o+=", "),e.condenseFlow&&(o+='"'),r=n[i=c[u]],ee(e,t,i,!1,!1)&&(1024<e.dump.length&&(o+="? "),o+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),ee(e,t,r,!1,!1)&&(a+=o+=e.dump));e.tag=s,e.dump="{"+a+"}"}(e,t,e.dump),c&&(e.dump="&ref_"+s+" "+e.dump));else if("[object Array]"===a){var l=e.noArrayIndent&&0<t?t-1:t;i&&0!==e.dump.length?(function(e,t,n,i){for(var r="",o=e.tag,a=0,s=n.length;a<s;a+=1)ee(e,t+1,n[a],!0,!0)&&(i&&0===a||(r+=q(e,t)),e.dump&&h===e.dump.charCodeAt(0)?r+="-":r+="- ",r+=e.dump);e.tag=o,e.dump=r||"[]"}(e,l,e.dump,r),c&&(e.dump="&ref_"+s+e.dump)):(function(e,t,n){for(var i="",r=e.tag,o=0,a=n.length;o<a;o+=1)ee(e,t,n[o],!1,!1)&&(0!==o&&(i+=","+(e.condenseFlow?"":" ")),i+=e.dump);e.tag=r,e.dump="["+i+"]"}(e,l,e.dump),c&&(e.dump="&ref_"+s+" "+e.dump))}else{if("[object String]"!==a){if(e.skipInvalid)return;throw new d("unacceptable kind of an object to dump "+a)}"?"!==e.tag&&Z(e,e.dump,t,o)}null!==e.tag&&"?"!==e.tag&&(e.dump="!<"+e.tag+"> "+e.dump)}return 1}function te(e,t){var n,i,r=[],o=[];for(!function e(t,n,i){var r,o,a;if(null!==t&&"object"==typeof t)if(-1!==(o=n.indexOf(t)))-1===i.indexOf(o)&&i.push(o);else if(n.push(t),Array.isArray(t))for(o=0,a=t.length;o<a;o+=1)e(t[o],n,i);else for(r=Object.keys(t),o=0,a=r.length;o<a;o+=1)e(t[r[o]],n,i)}(e,r,o),n=0,i=o.length;n<i;n+=1)t.duplicates.push(r[o[n]]);t.usedDuplicates=new Array(i)}function ne(e,t){var n=new D(t=t||{});return n.noRefs||te(e,n),ee(n,0,e,!0,!0)?n.dump+"\n":""}t.exports.dump=ne,t.exports.safeDump=function(e,t){return ne(e,c.extend({schema:r},t))}},{"./common":2,"./exception":4,"./schema/default_full":9,"./schema/default_safe":10}],4:[function(e,t,n){"use strict";function i(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}((i.prototype=Object.create(Error.prototype)).constructor=i).prototype.toString=function(e){var t=this.name+": ";return t+=this.reason||"(unknown reason)",!e&&this.mark&&(t+=" "+this.mark.toString()),t},t.exports=i},{}],5:[function(e,t,n){"use strict";var g=e("./common"),i=e("./exception"),r=e("./mark"),o=e("./schema/default_safe"),a=e("./schema/default_full"),y=Object.prototype.hasOwnProperty,x=1,v=2,A=3,b=4,w=1,C=2,k=3,c=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,s=/[\x85\u2028\u2029]/,j=/[,\[\]\{\}]/,S=/^(?:!|!!|![a-z\-]+!)$/i,I=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function l(e){return Object.prototype.toString.call(e)}function O(e){return 10===e||13===e}function E(e){return 9===e||32===e}function F(e){return 9===e||32===e||10===e||13===e}function _(e){return 44===e||91===e||93===e||123===e||125===e}function u(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}for(var f=new Array(256),d=new Array(256),p=0;p<256;p++)f[p]=u(p)?1:0,d[p]=u(p);function h(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||a,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function m(e,t){return new i(t,new r(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function N(e,t){throw m(e,t)}function M(e,t){e.onWarning&&e.onWarning.call(null,m(e,t))}var T={YAML:function(e,t,n){var i,r,o;null!==e.version&&N(e,"duplication of %YAML directive"),1!==n.length&&N(e,"YAML directive accepts exactly one argument"),null===(i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&N(e,"ill-formed argument of the YAML directive"),r=parseInt(i[1],10),o=parseInt(i[2],10),1!==r&&N(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&M(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var i,r;2!==n.length&&N(e,"TAG directive accepts exactly two arguments"),i=n[0],r=n[1],S.test(i)||N(e,"ill-formed tag handle (first argument) of the TAG directive"),y.call(e.tagMap,i)&&N(e,'there is a previously declared suffix for "'+i+'" tag handle'),I.test(r)||N(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagMap[i]=r}};function L(e,t,n,i){var r,o,a,s;if(t<n){if(s=e.input.slice(t,n),i)for(r=0,o=s.length;r<o;r+=1)9===(a=s.charCodeAt(r))||32<=a&&a<=1114111||N(e,"expected valid JSON character");else c.test(s)&&N(e,"the stream contains non-printable characters");e.result+=s}}function D(e,t,n,i){var r,o,a,s;for(g.isObject(n)||N(e,"cannot merge mappings; the provided source object is unacceptable"),a=0,s=(r=Object.keys(n)).length;a<s;a+=1)o=r[a],y.call(t,o)||(t[o]=n[o],i[o]=!0)}function U(e,t,n,i,r,o,a,s){var c,u;if(Array.isArray(r))for(c=0,u=(r=Array.prototype.slice.call(r)).length;c<u;c+=1)Array.isArray(r[c])&&N(e,"nested arrays are not supported inside keys"),"object"==typeof r&&"[object Object]"===l(r[c])&&(r[c]="[object Object]");if("object"==typeof r&&"[object Object]"===l(r)&&(r="[object Object]"),r=String(r),null===t&&(t={}),"tag:yaml.org,2002:merge"===i)if(Array.isArray(o))for(c=0,u=o.length;c<u;c+=1)D(e,t,o[c],n);else D(e,t,o,n);else e.json||y.call(n,r)||!y.call(t,r)||(e.line=a||e.line,e.position=s||e.position,N(e,"duplicated mapping key")),t[r]=o,delete n[r];return t}function q(e){var t=e.input.charCodeAt(e.position);10===t?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):N(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function Y(e,t,n){for(var i=0,r=e.input.charCodeAt(e.position);0!==r;){for(;E(r);)r=e.input.charCodeAt(++e.position);if(t&&35===r)for(;10!==(r=e.input.charCodeAt(++e.position))&&13!==r&&0!==r;);if(!O(r))break;for(q(e),r=e.input.charCodeAt(e.position),i++,e.lineIndent=0;32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return-1!==n&&0!==i&&e.lineIndent<n&&M(e,"deficient indentation"),i}function R(e){var t=e.position,n=e.input.charCodeAt(t);return 45!==n&&46!==n||n!==e.input.charCodeAt(t+1)||n!==e.input.charCodeAt(t+2)||(t+=3,0!==(n=e.input.charCodeAt(t))&&!F(n))?void 0:1}function B(e,t){1===t?e.result+=" ":1<t&&(e.result+=g.repeat("\n",t-1))}function P(e,t){var n,i,r,o,a,s,c,u,l,p=e.input.charCodeAt(e.position);if(34===p){for(e.kind="scalar",e.result="",e.position++,n=i=e.position;0!==(p=e.input.charCodeAt(e.position));){if(34===p)return L(e,n,e.position,!0),e.position++,1;if(92===p){if(L(e,n,e.position,!0),O(p=e.input.charCodeAt(++e.position)))Y(e,!1,t);else if(p<256&&f[p])e.result+=d[p],e.position++;else if(0<(a=120===(l=p)?2:117===l?4:85===l?8:0)){for(r=a,o=0;0<r;r--)p=e.input.charCodeAt(++e.position),u=void 0,0<=(a=48<=(c=p)&&c<=57?c-48:97<=(u=32|c)&&u<=102?u-97+10:-1)?o=(o<<4)+a:N(e,"expected hexadecimal character");e.result+=(s=o)<=65535?String.fromCharCode(s):String.fromCharCode(55296+(s-65536>>10),56320+(s-65536&1023)),e.position++}else N(e,"unknown escape sequence");n=i=e.position}else O(p)?(L(e,n,i,!0),B(e,Y(e,!1,t)),n=i=e.position):e.position===e.lineStart&&R(e)?N(e,"unexpected end of the document within a double quoted scalar"):(e.position++,i=e.position)}N(e,"unexpected end of the stream within a double quoted scalar")}}function W(e,t){var n,i,r=e.tag,o=e.anchor,a=[],s=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),i=e.input.charCodeAt(e.position);0!==i&&45===i&&F(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,Y(e,!0,-1)&&e.lineIndent<=t)a.push(null),i=e.input.charCodeAt(e.position);else if(n=e.line,K(e,t,A,!1,!0),a.push(e.result),Y(e,!0,-1),i=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==i)N(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=r,e.anchor=o,e.kind="sequence",e.result=a,!0)}function K(e,t,n,i,r){var o,a,s,c,u,l,p,f,d=1,h=!1,m=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=a=s=b===n||A===n,i&&Y(e,!0,-1)&&(h=!0,e.lineIndent>t?d=1:e.lineIndent===t?d=0:e.lineIndent<t&&(d=-1)),1===d)for(;function(e){var t,n,i,r=!1,o=!1,a=e.input.charCodeAt(e.position);if(33===a){if(null!==e.tag&&N(e,"duplication of a tag property"),60===(a=e.input.charCodeAt(++e.position))?(r=!0,a=e.input.charCodeAt(++e.position)):33===a?(o=!0,n="!!",a=e.input.charCodeAt(++e.position)):n="!",t=e.position,r){for(;0!==(a=e.input.charCodeAt(++e.position))&&62!==a;);e.position<e.length?(i=e.input.slice(t,e.position),a=e.input.charCodeAt(++e.position)):N(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==a&&!F(a);)33===a&&(o?N(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),S.test(n)||N(e,"named tag handle cannot contain such characters"),o=!0,t=e.position+1)),a=e.input.charCodeAt(++e.position);i=e.input.slice(t,e.position),j.test(i)&&N(e,"tag suffix cannot contain flow indicator characters")}return i&&!I.test(i)&&N(e,"tag name cannot contain such characters: "+i),r?e.tag=i:y.call(e.tagMap,n)?e.tag=e.tagMap[n]+i:"!"===n?e.tag="!"+i:"!!"===n?e.tag="tag:yaml.org,2002:"+i:N(e,'undeclared tag handle "'+n+'"'),1}}(e)||function(e){var t,n=e.input.charCodeAt(e.position);if(38===n){for(null!==e.anchor&&N(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!F(n)&&!_(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&N(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),1}}(e);)Y(e,!0,-1)?(h=!0,s=o,e.lineIndent>t?d=1:e.lineIndent===t?d=0:e.lineIndent<t&&(d=-1)):s=!1;if(s=s&&(h||r),1!==d&&b!==n||(p=x===n||v===n?t:t+1,f=e.position-e.lineStart,1===d?s&&(W(e,f)||function(e,t,n){var i,r,o,a,s,c=e.tag,u=e.anchor,l={},p={},f=null,d=null,h=null,m=!1,g=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=l),s=e.input.charCodeAt(e.position);0!==s;){if(i=e.input.charCodeAt(e.position+1),o=e.line,a=e.position,63!==s&&58!==s||!F(i)){if(!K(e,n,v,!1,!0))break;if(e.line===o){for(s=e.input.charCodeAt(e.position);E(s);)s=e.input.charCodeAt(++e.position);if(58===s)F(s=e.input.charCodeAt(++e.position))||N(e,"a whitespace character is expected after the key-value separator within a block mapping"),m&&(U(e,l,p,f,d,null),f=d=h=null),r=m=!(g=!0),f=e.tag,d=e.result;else{if(!g)return e.tag=c,e.anchor=u,1;N(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!g)return e.tag=c,e.anchor=u,1;N(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===s?(m&&(U(e,l,p,f,d,null),f=d=h=null),r=m=g=!0):m?r=!(m=!1):N(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,s=i;if((e.line===o||e.lineIndent>t)&&(K(e,t,b,!0,r)&&(m?d=e.result:h=e.result),m||(U(e,l,p,f,d,h,o,a),f=d=h=null),Y(e,!0,-1),s=e.input.charCodeAt(e.position)),e.lineIndent>t&&0!==s)N(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return m&&U(e,l,p,f,d,null),g&&(e.tag=c,e.anchor=u,e.kind="mapping",e.result=l),g}(e,f,p))||function(e,t){var n,i,r,o,a,s,c,u,l,p=!0,f=e.tag,d=e.anchor,h={},m=e.input.charCodeAt(e.position);if(91===m)s=!(r=93),i=[];else{if(123!==m)return;r=125,s=!0,i={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),m=e.input.charCodeAt(++e.position);0!==m;){if(Y(e,!0,t),(m=e.input.charCodeAt(e.position))===r)return e.position++,e.tag=f,e.anchor=d,e.kind=s?"mapping":"sequence",e.result=i,1;p||N(e,"missed comma between flow collection entries"),l=null,o=a=!1,63===m&&F(e.input.charCodeAt(e.position+1))&&(o=a=!0,e.position++,Y(e,!0,t)),n=e.line,K(e,t,x,!1,!0),u=e.tag,c=e.result,Y(e,!0,t),m=e.input.charCodeAt(e.position),!a&&e.line!==n||58!==m||(o=!0,m=e.input.charCodeAt(++e.position),Y(e,!0,t),K(e,t,x,!1,!0),l=e.result),s?U(e,i,h,u,c,l):o?i.push(U(e,null,h,u,c,l)):i.push(c),Y(e,!0,t),44===(m=e.input.charCodeAt(e.position))?(p=!0,m=e.input.charCodeAt(++e.position)):p=!1}N(e,"unexpected end of the stream within a flow collection")}(e,p)?m=!0:(a&&function(e,t){var n,i,r,o,a=w,s=!1,c=!1,u=t,l=0,p=!1,f=e.input.charCodeAt(e.position);if(124===f)i=!1;else{if(62!==f)return;i=!0}for(e.kind="scalar",e.result="";0!==f;)if(43===(f=e.input.charCodeAt(++e.position))||45===f)w===a?a=43===f?k:C:N(e,"repeat of a chomping mode identifier");else{if(!(0<=(r=48<=(o=f)&&o<=57?o-48:-1)))break;0==r?N(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?N(e,"repeat of an indentation width identifier"):(u=t+r-1,c=!0)}if(E(f)){for(;E(f=e.input.charCodeAt(++e.position)););if(35===f)for(;!O(f=e.input.charCodeAt(++e.position))&&0!==f;);}for(;0!==f;){for(q(e),e.lineIndent=0,f=e.input.charCodeAt(e.position);(!c||e.lineIndent<u)&&32===f;)e.lineIndent++,f=e.input.charCodeAt(++e.position);if(!c&&e.lineIndent>u&&(u=e.lineIndent),O(f))l++;else{if(e.lineIndent<u){a===k?e.result+=g.repeat("\n",s?1+l:l):a===w&&s&&(e.result+="\n");break}for(i?E(f)?(p=!0,e.result+=g.repeat("\n",s?1+l:l)):p?(p=!1,e.result+=g.repeat("\n",l+1)):0===l?s&&(e.result+=" "):e.result+=g.repeat("\n",l):e.result+=g.repeat("\n",s?1+l:l),c=s=!0,l=0,n=e.position;!O(f)&&0!==f;)f=e.input.charCodeAt(++e.position);L(e,n,e.position,!1)}}return 1}(e,p)||function(e,t){var n,i,r=e.input.charCodeAt(e.position);if(39===r){for(e.kind="scalar",e.result="",e.position++,n=i=e.position;0!==(r=e.input.charCodeAt(e.position));)if(39===r){if(L(e,n,e.position,!0),39!==(r=e.input.charCodeAt(++e.position)))return 1;n=e.position,e.position++,i=e.position}else O(r)?(L(e,n,i,!0),B(e,Y(e,!1,t)),n=i=e.position):e.position===e.lineStart&&R(e)?N(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);N(e,"unexpected end of the stream within a single quoted scalar")}}(e,p)||P(e,p)?m=!0:!function(e){var t,n,i=e.input.charCodeAt(e.position);if(42===i){for(i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!F(i)&&!_(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&N(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),e.anchorMap.hasOwnProperty(n)||N(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],Y(e,!0,-1),1}}(e)?function(e,t,n){var i,r,o,a,s,c,u,l=e.kind,p=e.result,f=e.input.charCodeAt(e.position);if(!F(f)&&!_(f)&&35!==f&&38!==f&&42!==f&&33!==f&&124!==f&&62!==f&&39!==f&&34!==f&&37!==f&&64!==f&&96!==f&&(63!==f&&45!==f||!(F(i=e.input.charCodeAt(e.position+1))||n&&_(i)))){for(e.kind="scalar",e.result="",r=o=e.position,a=!1;0!==f;){if(58===f){if(F(i=e.input.charCodeAt(e.position+1))||n&&_(i))break}else if(35===f){if(F(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&R(e)||n&&_(f))break;if(O(f)){if(s=e.line,c=e.lineStart,u=e.lineIndent,Y(e,!1,-1),e.lineIndent>=t){a=!0,f=e.input.charCodeAt(e.position);continue}e.position=o,e.line=s,e.lineStart=c,e.lineIndent=u;break}}a&&(L(e,r,o,!1),B(e,e.line-s),r=o=e.position,a=!1),E(f)||(o=e.position+1),f=e.input.charCodeAt(++e.position)}if(L(e,r,o,!1),e.result)return 1;e.kind=l,e.result=p}}(e,p,x===n)&&(m=!0,null===e.tag&&(e.tag="?")):(m=!0,null===e.tag&&null===e.anchor||N(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===d&&(m=s&&W(e,f))),null!==e.tag&&"!"!==e.tag)if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&N(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),c=0,u=e.implicitTypes.length;c<u;c+=1)if((l=e.implicitTypes[c]).resolve(e.result)){e.result=l.construct(e.result),e.tag=l.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else y.call(e.typeMap[e.kind||"fallback"],e.tag)?(l=e.typeMap[e.kind||"fallback"][e.tag],null!==e.result&&l.kind!==e.kind&&N(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+l.kind+'", not "'+e.kind+'"'),l.resolve(e.result)?(e.result=l.construct(e.result),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):N(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):N(e,"unknown tag !<"+e.tag+">");return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||m}function $(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new h(e,t),i=e.indexOf("\0");for(-1!==i&&(n.position=i,N(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)!function(e){var t,n,i,r,o=e.position,a=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};0!==(r=e.input.charCodeAt(e.position))&&(Y(e,!0,-1),r=e.input.charCodeAt(e.position),!(0<e.lineIndent||37!==r));){for(a=!0,r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!F(r);)r=e.input.charCodeAt(++e.position);for(i=[],(n=e.input.slice(t,e.position)).length<1&&N(e,"directive name must not be less than one character in length");0!==r;){for(;E(r);)r=e.input.charCodeAt(++e.position);if(35===r){for(;0!==(r=e.input.charCodeAt(++e.position))&&!O(r););break}if(O(r))break;for(t=e.position;0!==r&&!F(r);)r=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}0!==r&&q(e),y.call(T,n)?T[n](e,n,i):M(e,'unknown document directive "'+n+'"')}Y(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,Y(e,!0,-1)):a&&N(e,"directives end mark is expected"),K(e,e.lineIndent-1,b,!1,!0),Y(e,!0,-1),e.checkLineBreaks&&s.test(e.input.slice(o,e.position))&&M(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&R(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,Y(e,!0,-1)):e.position<e.length-1&&N(e,"end of the stream or a document separator is expected")}(n);return n.documents}function H(e,t,n){null!==t&&"object"==typeof t&&void 0===n&&(n=t,t=null);var i=$(e,n);if("function"!=typeof t)return i;for(var r=0,o=i.length;r<o;r+=1)t(i[r])}function G(e,t){var n=$(e,t);if(0!==n.length){if(1===n.length)return n[0];throw new i("expected a single document in the stream, but found more")}}t.exports.loadAll=H,t.exports.load=G,t.exports.safeLoadAll=function(e,t,n){return"object"==typeof t&&null!==t&&void 0===n&&(n=t,t=null),H(e,t,g.extend({schema:o},n))},t.exports.safeLoad=function(e,t){return G(e,g.extend({schema:o},t))}},{"./common":2,"./exception":4,"./mark":6,"./schema/default_full":9,"./schema/default_safe":10}],6:[function(e,t,n){"use strict";var s=e("./common");function i(e,t,n,i,r){this.name=e,this.buffer=t,this.position=n,this.line=i,this.column=r}i.prototype.getSnippet=function(e,t){var n,i,r,o,a;if(!this.buffer)return null;for(e=e||4,t=t||75,n="",i=this.position;0<i&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(i-1));)if(--i,this.position-i>t/2-1){n=" ... ",i+=5;break}for(r="",o=this.position;o<this.buffer.length&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(o));)if((o+=1)-this.position>t/2-1){r=" ... ",o-=5;break}return a=this.buffer.slice(i,o),s.repeat(" ",e)+n+a+r+"\n"+s.repeat(" ",e+this.position-i+n.length)+"^"},i.prototype.toString=function(e){var t,n="";return this.name&&(n+='in "'+this.name+'" '),n+="at line "+(this.line+1)+", column "+(this.column+1),e||(t=this.getSnippet())&&(n+=":\n"+t),n},t.exports=i},{"./common":2}],7:[function(e,t,n){"use strict";var r=e("./common"),o=e("./exception"),a=e("./type");function s(e,t,i){var r=[];return e.include.forEach(function(e){i=s(e,t,i)}),e[t].forEach(function(n){i.forEach(function(e,t){e.tag===n.tag&&e.kind===n.kind&&r.push(t)}),i.push(n)}),i.filter(function(e,t){return-1===r.indexOf(t)})}function c(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(e){if(e.loadKind&&"scalar"!==e.loadKind)throw new o("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=s(this,"implicit",[]),this.compiledExplicit=s(this,"explicit",[]),this.compiledTypeMap=function(){var e,t,n={scalar:{},sequence:{},mapping:{},fallback:{}};function i(e){n[e.kind][e.tag]=n.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(i);return n}(this.compiledImplicit,this.compiledExplicit)}c.DEFAULT=null,c.create=function(e,t){var n,i;switch(arguments.length){case 1:n=c.DEFAULT,i=e;break;case 2:n=e,i=t;break;default:throw new o("Wrong number of arguments for Schema.create function")}if(n=r.toArray(n),i=r.toArray(i),!n.every(function(e){return e instanceof c}))throw new o("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!i.every(function(e){return e instanceof a}))throw new o("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new c({include:n,explicit:i})},t.exports=c},{"./common":2,"./exception":4,"./type":13}],8:[function(e,t,n){"use strict";var i=e("../schema");t.exports=new i({include:[e("./json")]})},{"../schema":7,"./json":12}],9:[function(e,t,n){"use strict";var i=e("../schema");t.exports=i.DEFAULT=new i({include:[e("./default_safe")],explicit:[e("../type/js/undefined"),e("../type/js/regexp"),e("../type/js/function")]})},{"../schema":7,"../type/js/function":18,"../type/js/regexp":19,"../type/js/undefined":20,"./default_safe":10}],10:[function(e,t,n){"use strict";var i=e("../schema");t.exports=new i({include:[e("./core")],implicit:[e("../type/timestamp"),e("../type/merge")],explicit:[e("../type/binary"),e("../type/omap"),e("../type/pairs"),e("../type/set")]})},{"../schema":7,"../type/binary":14,"../type/merge":22,"../type/omap":24,"../type/pairs":25,"../type/set":27,"../type/timestamp":29,"./core":8}],11:[function(e,t,n){"use strict";var i=e("../schema");t.exports=new i({explicit:[e("../type/str"),e("../type/seq"),e("../type/map")]})},{"../schema":7,"../type/map":21,"../type/seq":26,"../type/str":28}],12:[function(e,t,n){"use strict";var i=e("../schema");t.exports=new i({include:[e("./failsafe")],implicit:[e("../type/null"),e("../type/bool"),e("../type/int"),e("../type/float")]})},{"../schema":7,"../type/bool":15,"../type/float":16,"../type/int":17,"../type/null":23,"./failsafe":11}],13:[function(e,t,n){"use strict";var r=e("./exception"),o=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],a=["scalar","sequence","mapping"];t.exports=function(t,e){var n,i;if(e=e||{},Object.keys(e).forEach(function(e){if(-1===o.indexOf(e))throw new r('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(e){return e},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.defaultStyle=e.defaultStyle||null,this.styleAliases=(n=e.styleAliases||null,i={},null!==n&&Object.keys(n).forEach(function(t){n[t].forEach(function(e){i[String(e)]=t})}),i),-1===a.indexOf(this.kind))throw new r('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}},{"./exception":4}],14:[function(e,t,n){"use strict";try{var c=e("buffer").Buffer}catch(e){}var i=e("../type"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";t.exports=new i("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;for(var t,n=0,i=e.length,r=u,o=0;o<i;o++)if(!(64<(t=r.indexOf(e.charAt(o))))){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){for(var t,n=e.replace(/[\r\n=]/g,""),i=n.length,r=u,o=0,a=[],s=0;s<i;s++)s%4==0&&s&&(a.push(o>>16&255),a.push(o>>8&255),a.push(255&o)),o=o<<6|r.indexOf(n.charAt(s));return 0==(t=i%4*6)?(a.push(o>>16&255),a.push(o>>8&255),a.push(255&o)):18==t?(a.push(o>>10&255),a.push(o>>2&255)):12==t&&a.push(o>>4&255),c?c.from?c.from(a):new c(a):a},predicate:function(e){return c&&c.isBuffer(e)},represent:function(e){for(var t,n="",i=0,r=e.length,o=u,a=0;a<r;a++)a%3==0&&a&&(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[63&i]),i=(i<<8)+e[a];return 0==(t=r%3)?(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[63&i]):2==t?(n+=o[i>>10&63],n+=o[i>>4&63],n+=o[i<<2&63],n+=o[64]):1==t&&(n+=o[i>>2&63],n+=o[i<<4&63],n+=o[64],n+=o[64]),n}})},{"../type":13}],15:[function(e,t,n){"use strict";var i=e("../type");t.exports=new i("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"})},{"../type":13}],16:[function(e,t,n){"use strict";var i=e("../common"),r=e("../type"),o=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var a=/^[-+]?[0-9]+e/;t.exports=new r("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!o.test(e)||"_"===e[e.length-1])},construct:function(e){var t,n=e.replace(/_/g,"").toLowerCase(),i="-"===n[0]?-1:1,r=[];return 0<="+-".indexOf(n[0])&&(n=n.slice(1)),".inf"===n?1==i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===n?NaN:0<=n.indexOf(":")?(n.split(":").forEach(function(e){r.unshift(parseFloat(e,10))}),n=0,t=1,r.forEach(function(e){n+=e*t,t*=60}),i*n):i*parseFloat(n,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||i.isNegativeZero(e))},represent:function(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(i.isNegativeZero(e))return"-0.0";return n=e.toString(10),a.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"})},{"../common":2,"../type":13}],17:[function(e,t,n){"use strict";var i=e("../common"),r=e("../type");t.exports=new r("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,i,r,o=e.length,a=0,s=!1;if(!o)return!1;if("-"!==(t=e[a])&&"+"!==t||(t=e[++a]),"0"===t){if(a+1===o)return!0;if("b"===(t=e[++a])){for(a++;a<o;a++)if("_"!==(t=e[a])){if("0"!==t&&"1"!==t)return!1;s=!0}return s&&"_"!==t}if("x"===t){for(a++;a<o;a++)if("_"!==(t=e[a])){if(!(48<=(i=e.charCodeAt(a))&&i<=57||65<=i&&i<=70||97<=i&&i<=102))return!1;s=!0}return s&&"_"!==t}for(;a<o;a++)if("_"!==(t=e[a])){if(!(48<=(n=e.charCodeAt(a))&&n<=55))return!1;s=!0}return s&&"_"!==t}if("_"===t)return!1;for(;a<o;a++)if("_"!==(t=e[a])){if(":"===t)break;if(!(48<=(r=e.charCodeAt(a))&&r<=57))return!1;s=!0}return!(!s||"_"===t)&&(":"!==t||/^(:[0-5]?[0-9])+$/.test(e.slice(a)))},construct:function(e){var t,n,i=e,r=1,o=[];return-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(t=i[0])&&"+"!==t||("-"===t&&(r=-1),t=(i=i.slice(1))[0]),"0"===i?0:"0"===t?"b"===i[1]?r*parseInt(i.slice(2),2):"x"===i[1]?r*parseInt(i,16):r*parseInt(i,8):-1!==i.indexOf(":")?(i.split(":").forEach(function(e){o.unshift(parseInt(e,10))}),i=0,n=1,o.forEach(function(e){i+=e*n,n*=60}),r*i):r*parseInt(i,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!i.isNegativeZero(e)},represent:{binary:function(e){return 0<=e?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return 0<=e?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return 0<=e?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},{"../common":2,"../type":13}],18:[function(e,t,n){"use strict";try{var o=e("esprima")}catch(e){"undefined"!=typeof window&&(o=window.esprima)}var i=e("../../type");t.exports=new i("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:function(e){if(null===e)return!1;try{var t="("+e+")",n=o.parse(t,{range:!0});return"Program"!==n.type||1!==n.body.length||"ExpressionStatement"!==n.body[0].type||"ArrowFunctionExpression"!==n.body[0].expression.type&&"FunctionExpression"!==n.body[0].expression.type?!1:!0}catch(e){return!1}},construct:function(e){var t,n="("+e+")",i=o.parse(n,{range:!0}),r=[];if("Program"!==i.type||1!==i.body.length||"ExpressionStatement"!==i.body[0].type||"ArrowFunctionExpression"!==i.body[0].expression.type&&"FunctionExpression"!==i.body[0].expression.type)throw new Error("Failed to resolve function");return i.body[0].expression.params.forEach(function(e){r.push(e.name)}),t=i.body[0].expression.body.range,"BlockStatement"===i.body[0].expression.body.type?new Function(r,n.slice(t[0]+1,t[1]-1)):new Function(r,"return "+n.slice(t[0],t[1]))},predicate:function(e){return"[object Function]"===Object.prototype.toString.call(e)},represent:function(e){return e.toString()}})},{"../../type":13}],19:[function(e,t,n){"use strict";var i=e("../../type");t.exports=new i("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:function(e){if(null===e)return!1;if(0===e.length)return!1;var t=e,n=/\/([gim]*)$/.exec(e),i="";if("/"===t[0]){if(n&&(i=n[1]),3<i.length)return!1;if("/"!==t[t.length-i.length-1])return!1}return!0},construct:function(e){var t=e,n=/\/([gim]*)$/.exec(e),i="";return"/"===t[0]&&(n&&(i=n[1]),t=t.slice(1,t.length-i.length-1)),new RegExp(t,i)},predicate:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},represent:function(e){var t="/"+e.source+"/";return e.global&&(t+="g"),e.multiline&&(t+="m"),e.ignoreCase&&(t+="i"),t}})},{"../../type":13}],20:[function(e,t,n){"use strict";var i=e("../../type");t.exports=new i("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:function(){return!0},construct:function(){},predicate:function(e){return void 0===e},represent:function(){return""}})},{"../../type":13}],21:[function(e,t,n){"use strict";var i=e("../type");t.exports=new i("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})},{"../type":13}],22:[function(e,t,n){"use strict";var i=e("../type");t.exports=new i("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}})},{"../type":13}],23:[function(e,t,n){"use strict";var i=e("../type");t.exports=new i("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"})},{"../type":13}],24:[function(e,t,n){"use strict";var i=e("../type"),c=Object.prototype.hasOwnProperty,u=Object.prototype.toString;t.exports=new i("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;for(var t,n,i,r=[],o=e,a=0,s=o.length;a<s;a+=1){if(t=o[a],i=!1,"[object Object]"!==u.call(t))return!1;for(n in t)if(c.call(t,n)){if(i)return!1;i=!0}if(!i)return!1;if(-1!==r.indexOf(n))return!1;r.push(n)}return!0},construct:function(e){return null!==e?e:[]}})},{"../type":13}],25:[function(e,t,n){"use strict";var i=e("../type"),s=Object.prototype.toString;t.exports=new i("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;for(var t,n,i=e,r=new Array(i.length),o=0,a=i.length;o<a;o+=1){if(t=i[o],"[object Object]"!==s.call(t))return!1;if(1!==(n=Object.keys(t)).length)return!1;r[o]=[n[0],t[n[0]]]}return!0},construct:function(e){if(null===e)return[];for(var t,n,i=e,r=new Array(i.length),o=0,a=i.length;o<a;o+=1)t=i[o],n=Object.keys(t),r[o]=[n[0],t[n[0]]];return r}})},{"../type":13}],26:[function(e,t,n){"use strict";var i=e("../type");t.exports=new i("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}})},{"../type":13}],27:[function(e,t,n){"use strict";var i=e("../type"),r=Object.prototype.hasOwnProperty;t.exports=new i("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,n=e;for(t in n)if(r.call(n,t)&&null!==n[t])return!1;return!0},construct:function(e){return null!==e?e:{}}})},{"../type":13}],28:[function(e,t,n){"use strict";var i=e("../type");t.exports=new i("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}})},{"../type":13}],29:[function(e,t,n){"use strict";var i=e("../type"),p=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),f=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");t.exports=new i("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==p.exec(e)||null!==f.exec(e))},construct:function(e){var t,n,i,r,o,a,s,c=0,u=null,l=p.exec(e);if(null===l&&(l=f.exec(e)),null===l)throw new Error("Date resolve error");if(t=+l[1],n=l[2]-1,i=+l[3],!l[4])return new Date(Date.UTC(t,n,i));if(r=+l[4],o=+l[5],a=+l[6],l[7]){for(c=l[7].slice(0,3);c.length<3;)c+="0";c=+c}return l[9]&&(u=6e4*(60*+l[10]+ +(l[11]||0)),"-"===l[9]&&(u=-u)),s=new Date(Date.UTC(t,n,i,r,o,a,c)),u&&s.setTime(s.getTime()-u),s},instanceOf:Date,represent:function(e){return e.toISOString()}})},{"../type":13}],"/":[function(e,t,n){"use strict";var i=e("./lib/js-yaml.js");t.exports=i},{"./lib/js-yaml.js":1}]},{},[])("/")});
jQuery.get({url: baseUrl + "/config.yml", dataType: "text"})
        .done(function (data) {
            configData = jsyaml.load(data);

            var elements = document.getElementsByClassName("wcp_chart");
            for(dom of elements) {
                var talent = dom.getAttribute("data-talent");
                var sims = dom.getAttribute("data-sims");
                var covenants = dom.getAttribute("data-covenants");
                var fightStyle = dom.getAttribute("data-fightStyle");
                var chartId = dom.getAttribute("id");
                var maxEntries = dom.getAttribute("data-maxentries")
                updateChart(talent, sims, covenants, "", "", fightStyle, chartId, false, parseInt(maxEntries));
            }
        }
);
