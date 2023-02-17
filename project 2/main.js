//-75.53,39.5,-71.01,42.49
mapboxgl.accessToken = 'pk.eyJ1IjoiZXNpbHZhLTEiLCJhIjoiY2xkbmN1Y2NrMGh4azNvdGI4M29xOG9keiJ9._d-9iIdLmSUJGvhXCmbTFA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.978,40.752],
    zoom: 12,
    scrollZoom: false
});

/**  Data **/
const projects = {
  "type": "FeatureCollection",
  "features": [
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.05679799,42.35654964 ]
   },
   "properties": {
   "Name":"1 Federal Street",
   "Address":"1 Federal Street #Suite 800",
   "City":" Boston",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":1
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.93871132,40.75091635 ]
   },
   "properties": {
   "Name":"1 Queens Plaza North",
   "Address":"27-01 Queens Plaza North",
   "City":"Long Island City",
   "State":" New York",
   "Contact_Name":"CS - Anthony Falzone",
   "Phone":"646-228-3396",
   "Number":124
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97914149,40.75743074 ]
   },
   "properties": {
   "Name":"2 West 47th Street",
   "Address":"2 West 47th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Miguel Padin",
   "Phone":"646-842-9357",
   "Number":2
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.00741454,40.74872596 ]
   },
   "properties": {
   "Name":"220 11th Avenue",
   "Address":"220 11th Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Robert Ferdinand / Third Party - SSM: Diana Frank",
   "Phone":"646-522-9698 / 718-679-2161",
   "Number":3
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.00094007,40.75664645 ]
   },
   "properties": {
   "Name":"3 Hudson Boulevard Construction",
   "Address":"400 11th Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"VP - Rich Mazzella",
   "Phone":"917-359-9355",
   "Number":4
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.00736727,40.72822158 ]
   },
   "properties": {
   "Name":"345 Hudson Street",
   "Address":"345 Hudson Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Brian Feenery / Matt Struhar",
   "Phone":"917-575-3616 / 917-574-8223",
   "Number":6
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98803166,40.69165999 ]
   },
   "properties": {
   "Name":"380 Fulton Street",
   "Address":"380 Fulton Street",
   "City":" Kings County",
   "State":" New York",
   "Contact_Name":"Miguel Padin",
   "Phone":"646-842-9357",
   "Number":7
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97605002,40.75759268 ]
   },
   "properties": {
   "Name":"415 Madison Ave",
   "Address":"415 Madison Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Kevin Endres / Third Party SSM: Julian",
   "Phone":"917-938-3342 / 347-601-9614",
   "Number":8
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.01009596,40.72436452 ]
   },
   "properties": {
   "Name":"456 Greenwich Street",
   "Address":"456 Greenwich Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Miguel Padin",
   "Phone":"646-842-9357",
   "Number":10
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.00831637,40.72830959 ]
   },
   "properties": {
   "Name":"561 Greenwich St",
   "Address":"551 Greenwich Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Mel Rufini",
   "Phone":"917-578-8472",
   "Number":12
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.16669775,40.73502598 ]
   },
   "properties": {
   "Name":"777 McCarter Highway",
   "Address":"777 McCarter Highway",
   "City":" Newark",
   "State":" New Jersey",
   "Contact_Name":"VP - Richard Ortiz / CS - Ben Weber / VP - Dan Tessier",
   "Phone":"973-390-2541 / 646-856-5298 / 609-820-0760",
   "Number":13
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.01043647,40.73047609 ]
   },
   "properties": {
   "Name":"80 Clarkson Street",
   "Address":"80 Clarkson Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Miguel Padin",
   "Phone":"646-842-9357",
   "Number":14
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97537852,40.78265846 ]
   },
   "properties": {
   "Name":"AMNH Gilder Center",
   "Address":"415 Columbus Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Michael Davison",
   "Phone":"646-394-1001",
   "Number":16
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.17037035,42.36467239 ]
   },
   "properties": {
   "Name":"AOTC Watertown",
   "Address":"291 Arsenal Street",
   "City":" Watertown",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":17
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97493415,40.74051132 ]
   },
   "properties": {
   "Name":"ARE North Tower",
   "Address":"430 East 29th Street",
   "City":"New York",
   "State":"New York",
   "Contact_Name":"PM - Becky Joseph",
   "Phone":"917-414-2147",
   "Number":15
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.09000882,42.34678523 ]
   },
   "properties": {
   "Name":"Berklee College of Music",
   "Address":"8 Fenway",
   "City":" Boston",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":18
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.16176323,42.34372256 ]
   },
   "properties": {
   "Name":"Boston College - Brighton Operations Center",
   "Address":"117 Lake Street",
   "City":" Boston",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":19
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98029724,40.76555044 ]
   },
   "properties": {
   "Name":"Carnegie Hall Studio Tower Renovation Project",
   "Address":"881 7th Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Andrea Jaco / Third Party SSM: Christina",
   "Phone":"646-245-9189 / 917-282-8649",
   "Number":20
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98614197,40.75237927 ]
   },
   "properties": {
   "Name":"CBRE MSA for BoA",
   "Address":"1100 Avenue of the Americas",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Yogesh Chandrasekeran",
   "Phone":"212-708-6800",
   "Number":21
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98986834,41.04027313 ]
   },
   "properties": {
   "Name":"Data Center",
   "Address":"2000 Corporate Drive",
   "City":" Orangeburg",
   "State":" New York",
   "Contact_Name":"Bob Munno",
   "Phone":"917-999-6495",
   "Number":23
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.82108047,42.27041707 ]
   },
   "properties": {
   "Name":"Doherty School",
   "Address":"299 Highland Street",
   "City":" Worcester",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":24
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.91120054,40.86210358 ]
   },
   "properties": {
   "Name":"Fordham Landing",
   "Address":"300 West Fordham Road",
   "City":" Bronx County",
   "State":" New York",
   "Contact_Name":"Robert Ferdinand",
   "Phone":"646-522-9698",
   "Number":5
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.88396444,40.86306794 ]
   },
   "properties": {
   "Name":"Fordham University MSA",
   "Address":"457 East Fordham Road",
   "City":" Bronx County",
   "State":" New York",
   "Contact_Name":"CS - Steve Bommarito ",
   "Phone":"917-817-1674",
   "Number":25
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -72.07962768,41.34516132 ]
   },
   "properties": {
   "Name":"General Dynamics Electric Boat",
   "Address":"75 Eastern Point Road",
   "City":" Groton",
   "State":" Connecticut",
   "Contact_Name":"Alan Norris",
   "Phone":"860-222-5496",
   "Number":26
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98345414,40.76030229 ]
   },
   "properties": {
   "Name":"Hard Rock Hotel",
   "Address":"159 West 48th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Miguel Padin",
   "Phone":"646-842-9357",
   "Number":27
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.1162438,42.37803882 ]
   },
   "properties": {
   "Name":"Harvard University - McKay Lab",
   "Address":"9 Oxford Street",
   "City":" Cambridge",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":28
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.95203234,40.76776153 ]
   },
   "properties": {
   "Name":"HSS River Building GC",
   "Address":"510 East 73rd Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"VP - Dean Essen / CS - Mike Zinger / Raymond Franza",
   "Phone":"646-772-6184 / 917-817-5633 / 917-922-9577",
   "Number":29
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.79085481,40.64315486 ]
   },
   "properties": {
   "Name":"JFK New Terminal One",
   "Address":"500 Terminal Drive",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"Greg Amon / Anthony Fedor / Charlette Pellot",
   "Phone":"646-574-9123 / 646-370-9839 / 646-225-1163",
   "Number":30
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97536996,40.75659665 ]
   },
   "properties": {
   "Name":"JMPC - 270 Park Avenue",
   "Address":"270 Park Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Everol Hill  / Eric Lorenzo",
   "Phone":"917-701-9156 / 347-865-3461",
   "Number":31
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.00958158,42.36706349 ]
   },
   "properties": {
   "Name":"Logan Airport",
   "Address":"1 Harborside Dr",
   "City":"Boston",
   "State":"Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":32
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.99767812,40.75217437 ]
   },
   "properties": {
   "Name":"Manhattan West Southeast Tower",
   "Address":"401 West 31st Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Richie Tiberi Jr.",
   "Phone":"917-368-9738",
   "Number":33
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.96343824,40.77940583 ]
   },
   "properties": {
   "Name":"Metropolitan Museum of Art (The MET)",
   "Address":"1000 5th Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Senior CS - Joe Mangini / CS - Bruno Boral",
   "Phone":"917-578-8471 / 917-886-0502",
   "Number":34
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.09948343,42.35990065 ]
   },
   "properties": {
   "Name":"MIT",
   "Address":"195 Albany Street",
   "City":" Cambridge",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":35
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9537414,40.7901702 ]
   },
   "properties": {
   "Name":"Mount Sinai Fire Alarm",
   "Address":"1 Gustave L. Levy Place",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"CS - Mike Temperino",
   "Phone":"917-565-0054",
   "Number":121
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -75.52571907,39.50400891 ]
   },
   "properties": {
   "Name":"New Jersey Wind Port",
   "Address":"Salem Nuclear Power Plant",
   "City":"Lower Alloways Creek",
   "State":"New Jersey",
   "Contact_Name":"Tom Gribbin / Leigh Weissman",
   "Phone":"917-217-6558 / 917-837-4654",
   "Number":36
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1773037,40.69647301 ]
   },
   "properties": {
   "Name":"Newark Airport Terminal C",
   "Address":"Brewster Road #3",
   "City":" Newark",
   "State":" New Jersey",
   "Contact_Name":"Frank Rodriguez / CS - Mike Amato / Asst. CS - Joe Tofanelly ",
   "Phone":"973-332-7328 / 917-710-0581 / 719-309-2213",
   "Number":37
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.96956963,40.75874232 ]
   },
   "properties": {
   "Name":"NYU 159 East 53 St",
   "Address":"159 E 53rd St",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Jim Hennelly / Mike Sultana",
   "Phone":"917-560-9244 / 646-737-4641",
   "Number":38
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97403082,40.75011774 ]
   },
   "properties": {
   "Name":"NYU 222 East 41 Street",
   "Address":"222 East 41st Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"",
   "Phone":"",
   "Number":39
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9722612,40.74685753 ]
   },
   "properties": {
   "Name":"NYU 333 East 38 St",
   "Address":"333 East 38th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Robert Munderville / Third Party SSM - Georgie Skoufis",
   "Phone":"917-716-3543 / 914-433-6433",
   "Number":40
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.11716646,40.7911369 ]
   },
   "properties": {
   "Name":"NYU LICH",
   "Address":"1815 Pond Road",
   "City":" Ronkonkoma",
   "State":" New York",
   "Contact_Name":"",
   "Phone":"",
   "Number":41
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98150542,40.74612526 ]
   },
   "properties": {
   "Name":"NYU One Park Avene",
   "Address":"1 Park Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"CS - Ed Delgado ",
   "Phone":"646-831-1047",
   "Number":123
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.99537878,40.73404218 ]
   },
   "properties": {
   "Name":"NYU Rubin Hall",
   "Address":"35 5th Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Frank Polemini",
   "Phone":"646-294-7500",
   "Number":122
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97449865,40.74231799 ]
   },
   "properties": {
   "Name":"NYU Skirball",
   "Address":"540 1st Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Spiros Tzilianos / Trevor Meistrell / Anthony Guglielmo / Erica Wang / Keith Sultana",
   "Phone":"917-608-2982 / 646-922-5523 / 646-485-4926 / 347-880-2474 / 917-647-3315",
   "Number":42
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.14021685,42.3988449 ]
   },
   "properties": {
   "Name":"One Alewife Center",
   "Address":"Alewife Center",
   "City":" Cambridge",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":43
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9883666,40.74094755 ]
   },
   "properties": {
   "Name":"One Madison Avenue",
   "Address":"1 Madison Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Thane Szilagyi / John Kolody",
   "Phone":"646-630-2429 / 484-571-9138",
   "Number":44
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98641242,40.75728349 ]
   },
   "properties": {
   "Name":"One Times Square",
   "Address":"1 Times Square",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Mike Castagnoli / Justin Leddy / Third Party SSM: Ryan Riccio",
   "Phone":"646-522-2210 / 732-272-5288 / 631-449-5704",
   "Number":45
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.17786587,40.91445259 ]
   },
   "properties": {
   "Name":"Paterson Bus Depot",
   "Address":"16 Market Street",
   "City":" Paterson",
   "State":" New Jersey",
   "Contact_Name":"Alison Fleeson",
   "Phone":"201-213-6918",
   "Number":49
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97984074,40.75868877 ]
   },
   "properties": {
   "Name":"Rock Center Hotel",
   "Address":"32 West 48th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"Miguel Padin",
   "Phone":"646-842-9357",
   "Number":50
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.8124518,40.70209687 ]
   },
   "properties": {
   "Name":"SMART Local 28",
   "Address":"139-20 Jamaica Avenue",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"CS - Albert Antinori",
   "Phone":"646-277-7100",
   "Number":51
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.57230767,40.77896063 ]
   },
   "properties": {
   "Name":"SUNY Old Westbury OGS",
   "Address":"233 Store Hill Road",
   "City":" Old Westbury",
   "State":" New York",
   "Contact_Name":"Charlie Vitchers",
   "Phone":"570-832-0401",
   "Number":52
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.12271361,40.91561997 ]
   },
   "properties": {
   "Name":"SUNY Stony Brook",
   "Address":"100 Nicolls Road",
   "City":" Stony Brook",
   "State":" New York",
   "Contact_Name":"Joe Green",
   "Phone":"646-601-8207",
   "Number":53
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.01314716,40.71407955 ]
   },
   "properties": {
   "Name":"Verizon - 140 West St Elevator Equipment",
   "Address":"140 West Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Stephen Chaya / CS - Aldo DeRubeis",
   "Phone":"646-208-3550 / 917-295-6721",
   "Number":54
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.1734023,40.73700677 ]
   },
   "properties": {
   "Name":"Verizon - 165 Halsey St",
   "Address":"165 Halsey Street",
   "City":" Newark",
   "State":" New Jersey",
   "Contact_Name":"CS - David Ericson",
   "Phone":"646-647-7455",
   "Number":55
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9607108,40.80043896 ]
   },
   "properties": {
   "Name":"Verizon - 193 Manhattan Ave HVAC",
   "Address":"193 Manhattan Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Josh Lee / CS - Brian Dabrowski",
   "Phone":"646-351-9509 / 917-559-6592",
   "Number":56
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9607108,40.80043896 ]
   },
   "properties": {
   "Name":"Verizon - 193 Manhattan Ave New Heat Pumps",
   "Address":"193 Manhattan Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Brian Dabrowski",
   "Phone":"646-221-7296 / 917-559-6592",
   "Number":57
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98497069,40.73143329 ]
   },
   "properties": {
   "Name":"Verizon - 204 2nd Avenue 10th Flr",
   "Address":"204 2nd Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Josh Lee / CS - Jim Purcell",
   "Phone":"646-351-9509 / 917-837-3294",
   "Number":58
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.95733871,40.77337098 ]
   },
   "properties": {
   "Name":"Verizon - 208 East 79th St ASA RM",
   "Address":"208 East 79th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Mamadou Toure",
   "Phone":"646-221-7296 / 917-494-3893",
   "Number":59
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.95733871,40.77337098 ]
   },
   "properties": {
   "Name":"Verizon - 208 East 79th St Equipment",
   "Address":"208 East 78th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Mamadou Toure",
   "Phone":"646-221-7296 / 917-494-3893",
   "Number":60
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.95733871,40.77337098 ]
   },
   "properties": {
   "Name":"Verizon - 208 East 79th St HVAC",
   "Address":"208 East 79th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Mamadou Toure",
   "Phone":"646-221-7296 / 917-494-3893",
   "Number":61
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97837626,40.74288681 ]
   },
   "properties": {
   "Name":"Verizon - 227 West 30th St Equipment",
   "Address":"227 East 30th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Mamadou Toure",
   "Phone":"646-221-7296 / 917-494-3893",
   "Number":62
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97837626,40.74288681 ]
   },
   "properties": {
   "Name":"Verizon - 227 West 30th St HVAC",
   "Address":"227 East 30th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Mamadou Toure",
   "Phone":"646-221-7296 / 917-494-3893",
   "Number":63
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98497069,40.73143329 ]
   },
   "properties": {
   "Name":"Verizon - 2nd Avenue Fuel Fill Repair",
   "Address":"204 2nd Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Josh Lee",
   "Phone":"646-221-7296 / 646-351-9509",
   "Number":64
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.86575065,40.87136193 ]
   },
   "properties": {
   "Name":"Verizon - 3050 Cruger Ave A/C Unit Rehab",
   "Address":"3050 Cruger Avenue",
   "City":" Bronx County",
   "State":" New York",
   "Contact_Name":"PM - Anthony Russo / CS - Ken Richter",
   "Phone":"347-351-4239 / 609-209-8668",
   "Number":65
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.86575065,40.87136193 ]
   },
   "properties": {
   "Name":"Verizon - 3050 Cruger Ave Elevator Modernization",
   "Address":"3050 Cruger Avenue",
   "City":" Bronx County",
   "State":" New York",
   "Contact_Name":"PM - Anthony Russo / CS - Ken Richter",
   "Phone":"347-351-4239 / 609-209-8668",
   "Number":66
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.00496241,40.72090803 ]
   },
   "properties": {
   "Name":"Verizon - 32 6th Ave Cooling Tower",
   "Address":"32 6th Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Stephen Hutchinson",
   "Phone":"646-221-7296 / 917-733-0727",
   "Number":67
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9853829,40.69348458 ]
   },
   "properties": {
   "Name":"Verizon - 360 Bridge St Fire Alarm",
   "Address":"360 Bridge Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - John Roselli",
   "Phone":"646-221-7296 / 347-203-1898",
   "Number":68
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9906063,40.75268193 ]
   },
   "properties": {
   "Name":"Verizon - 36th St Swing Space",
   "Address":"230 West 36th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / Senior CS: Dan Zotollo / Caleb Westlake / Third Party SSM: Jim Rodriguez",
   "Phone":"646-221-7296 / 917-841 -0032 / 929-626-3179 / 917-330-8768",
   "Number":69
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98997799,40.76482698 ]
   },
   "properties": {
   "Name":"Verizon - 430 West 51st St Preorder Chiller",
   "Address":"430 West 51st Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Stephen Hutchingson / Brian Dabrowski",
   "Phone":"646-221-7296 / 917-733-0727 / 917-559-6592",
   "Number":70
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.2011848,42.48681055 ]
   },
   "properties": {
   "Name":"Verizon - 51 South Bedford St",
   "Address":"51 South Bedford Street",
   "City":" Burlington",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":71
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.96649927,40.68274288 ]
   },
   "properties": {
   "Name":"Verizon - 547 Clinton Ave Utility Separation",
   "Address":"547 Clinton Avenue",
   "City":" Kings County",
   "State":" New York",
   "Contact_Name":"PM - Stephen Chaya / CS - Aldo DeRubeis",
   "Phone":"646-208-3550 / 917-295-6721",
   "Number":72
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.44089308,40.7349696 ]
   },
   "properties": {
   "Name":"Verizon - 55 Meserole A/C Pre-Purch",
   "Address":"55 Meserole Street",
   "City":" Kings County",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh",
   "Phone":"646-291-0114",
   "Number":73
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.96665519,40.75895322 ]
   },
   "properties": {
   "Name":"Verizon - 56th St Cellar ATS Replacement",
   "Address":"228 East 56th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Stephen Hutchingson",
   "Phone":"646-221-7296 / 917-733-0727",
   "Number":74
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.95733871,40.77337098 ]
   },
   "properties": {
   "Name":"Verizon - 79th St Replacement",
   "Address":"208 East 79th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Mamadou Toure",
   "Phone":"646-221-7296 / 917-494-3893",
   "Number":76
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.7692517,40.76148306 ]
   },
   "properties": {
   "Name":"Verizon - AC Replacement Cellar Power Room",
   "Address":"214-20 43rd Avenue",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Gerard McPartland / CS - Tchabe Azimyt",
   "Phone":"646-221-7296 / 917-565-9170 / 917-509-7663",
   "Number":77
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.90522202,40.70652329 ]
   },
   "properties": {
   "Name":"Verizon - AC Replacement Pre-Purchase",
   "Address":"680 Fairview Avenue",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"PM - Stephen Chaya / CS - Gerard McPartland / CS - Tchabe Azimyt",
   "Phone":"646-208-3550 / 917-565-9170 / 917-509-7663",
   "Number":78
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.18280075,40.53554899 ]
   },
   "properties": {
   "Name":"Verizon - Amboy Road S.I.",
   "Address":"5180 Amboy Road",
   "City":" Richmond County",
   "State":" New York",
   "Contact_Name":"PM - Josh Lee / CS - Dominick Napoli",
   "Phone":"646-351-9509 / 917-697-8573",
   "Number":79
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.80738116,40.58886002 ]
   },
   "properties": {
   "Name":"Verizon - Beach St Bell Harbour AC",
   "Address":"216 Beach 81st Street",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Gerard McPartland / CS - Tchabe Azimyt",
   "Phone":"646-221-7296 / 917-565-9170 / 917-509-7663",
   "Number":80
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.22172606,40.78765401 ]
   },
   "properties": {
   "Name":"Verizon - Brentwood HVAC Replacement",
   "Address":"1265 Suffolk Avenue",
   "City":" Brentwood",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / PM - Matthew Martinez / CS - Karl Buchenhain",
   "Phone":"646-291-0114 / 332-877-5662 / 917-217-7808",
   "Number":81
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.22172606,40.78765401 ]
   },
   "properties": {
   "Name":"Verizon - Brentwood Pre Purch",
   "Address":"1265 Suffolk Avenue",
   "City":" Brentwood",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Karl Buchenhain",
   "Phone":"646-291-0114 / 917-217-7808",
   "Number":82
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.22172606,40.78765401 ]
   },
   "properties": {
   "Name":"Verizon - Brentwood Proposal Network Space Prep",
   "Address":"1265 Suffolk Avenue",
   "City":" Brentwood",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Karl Buchenhain",
   "Phone":"646-291-0114 / 917-217-7808",
   "Number":83
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.92044529,40.69053669 ]
   },
   "properties": {
   "Name":"Verizon - Bushwick Ave Facade Restoration",
   "Address":"1070 Bushwick Avenue",
   "City":" Kings County",
   "State":" New York",
   "Contact_Name":"PM - Stephen Chaya / CS - Aldo DeRubeis",
   "Phone":"646-208-3550 / 917-295-6721",
   "Number":84
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.77030134,40.70846493 ]
   },
   "properties": {
   "Name":"Verizon - Carbon Monoxide Monitoring",
   "Address":"187-07 Henderson Avenue",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Gerard McPartland / CS - Tchabe Azimyt",
   "Phone":"646-221-7296 / 917-565-9170 / 917-509-7663",
   "Number":85
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.89621317,40.77567625 ]
   },
   "properties": {
   "Name":"Verizon - Carbon Monoxide Monitoring",
   "Address":"19-19 46th St",
   "City":" Long Island City",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Gerard McPartland / CS - Tchabe Azimyt",
   "Phone":"646-221-7296 / 917-565-9170 / 917-509-7663",
   "Number":86
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.88307376,40.72978349 ]
   },
   "properties": {
   "Name":"Verizon - Carbon Monoxide Monitoring",
   "Address":"7811 57th St",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Gerard McPartland / CS - Tchabe Azimyt",
   "Phone":"646-221-7296 / 917-565-9170 / 917-509-7663",
   "Number":87
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.76893834,40.70899588 ]
   },
   "properties": {
   "Name":"Verizon - Carbon Monoxide Monitoring",
   "Address":"99-20 189th St",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Gerard McPartland / CS - Tchabe Azimyt",
   "Phone":"646-221-7296 / 917-565-9170 / 917-509-7663",
   "Number":88
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.86575065,40.87136193 ]
   },
   "properties": {
   "Name":"Verizon - Cruger Ave Filing Facade",
   "Address":"3050 Cruger Avenue",
   "City":" Bronx County",
   "State":" New York",
   "Contact_Name":"PM - Anthony Russo / CS - Ken Richter",
   "Phone":"347-351-4239 / 609-209-8668",
   "Number":89
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.32930674,40.75821792 ]
   },
   "properties": {
   "Name":"Verizon - Deer Park",
   "Address":"85 West 2nd Street",
   "City":"Deer Park",
   "State":"New York",
   "Contact_Name":"PM - James McDonagh",
   "Phone":"646-291-0115",
   "Number":126
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.44089308,40.7349696 ]
   },
   "properties": {
   "Name":"Verizon - Farmingdale Ducts Mods",
   "Address":"575 Conklin Street",
   "City":" Farmingdale",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / PM - Mathew Martinez / CS - Karl Buchenhain",
   "Phone":"646-291-0114 / 332-877-5662 / 917-217-7808",
   "Number":90
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.80738116,40.58886002 ]
   },
   "properties": {
   "Name":"Verizon - FAS Queens",
   "Address":"216 Beach 81st Street",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Gerard McPartland / CS - Tchabe Azimyt",
   "Phone":"646-221-7296 / 917-565-9170 / 917-509-7663",
   "Number":91
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.79709162,40.70566403 ]
   },
   "properties": {
   "Name":"Verizon - FAS Queens",
   "Address":"89-63 163rd Street",
   "City":"Jamaica",
   "State":"New York",
   "Contact_Name":"PM - Gary Dragona / CS - Gerard McPartland / CS - Tchabe Azimyt",
   "Phone":"646-221-7296 / 917-565-9170 / 917-509-7663",
   "Number":125
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.10098476,40.63156048 ]
   },
   "properties": {
   "Name":"Verizon - Forest Ave S.I. Pre Purch",
   "Address":"355 Forest Avenue",
   "City":" Richmond County",
   "State":" New York",
   "Contact_Name":"PM - Josh Lee / CS - Dominick Napoli",
   "Phone":"646-351-9509 / 917-697-8573",
   "Number":92
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.91831295,40.81745548 ]
   },
   "properties": {
   "Name":"Verizon - Forest Hills SC",
   "Address":"370 East 150th Street",
   "City":" Bronx County",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Gerard McPartland / CS - Tchabe Azimyt",
   "Phone":"646-221-7296 / 917-565-9170 / 917-509-7663",
   "Number":93
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.60392453,40.74094075 ]
   },
   "properties": {
   "Name":"Verizon - Garden City Structural",
   "Address":"741 Zeckendorf Boulevard",
   "City":" Garden City",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh",
   "Phone":"646-291-0114",
   "Number":94
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.52352606,40.76407904 ]
   },
   "properties": {
   "Name":"Verizon - Hicksville Facade & Roof",
   "Address":"69 West Cherry Street",
   "City":" Hicksville",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Karl Buchenhain",
   "Phone":"646-291-0114 / 917-217-7808",
   "Number":95
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.76131036,40.67215467 ]
   },
   "properties": {
   "Name":"Verizon - Laurelton A/C Replacement",
   "Address":"140-10 183rd Street",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Frank Liarikos",
   "Phone":"646-291-0114 / 917-880-6800",
   "Number":96
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.76131036,40.67215467 ]
   },
   "properties": {
   "Name":"Verizon - Laurelton Cellar Space",
   "Address":"140-10 183rd Street",
   "City":" Queens County",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - John Roselli",
   "Phone":"646-291-0114 / 347-203-1898",
   "Number":97
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.5133052,40.72670081 ]
   },
   "properties": {
   "Name":"Verizon - Levittown Generator",
   "Address":"3313 Hempstead Turnpike",
   "City":" Levittown",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / PM - Mathew Martinez / CS - Karl Buchenhain",
   "Phone":"646-291-0114 / 332-877-5662 / 917-217-7808",
   "Number":98
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.66349311,40.66012533 ]
   },
   "properties": {
   "Name":"Verizon - Lynbrook Misc. HVAC",
   "Address":"7 Washington Avenue",
   "City":" Lynbrook",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / PM - Mathew Martinez / CS - Karl Buchenhain",
   "Phone":"646-291-0114 / 332-877-5662 / 917-217-7808",
   "Number":99
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.94534838,40.70994308 ]
   },
   "properties": {
   "Name":"Verizon - Manhattan Ave AC Replacement",
   "Address":"193 Manhattan Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Josh Lee / CS - Brian Dabrowski",
   "Phone":"646-351-9509 / 917-559-6592",
   "Number":100
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.94534838,40.70994308 ]
   },
   "properties": {
   "Name":"Verizon - Manhattan Package 2",
   "Address":"193 Manhattan Avenue",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Josh Lee / CS - Jim Purcell",
   "Phone":"646-291-0114 / 646-351-9509 / 917-837-3294",
   "Number":101
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.98997799,40.76482698 ]
   },
   "properties": {
   "Name":"Verizon - Manhattan Package 2",
   "Address":"430 West 51st Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Josh Lee / CS - Jim Purcell",
   "Phone":"646-291-0114 / 646-351-9509 / 917-837-3294",
   "Number":102
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9987825,40.74096036 ]
   },
   "properties": {
   "Name":"Verizon - Manhattan Package 3",
   "Address":"215 West 17th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Josh Lee / CS - Jim Purcell",
   "Phone":"646-291-0114 / 646-351-9509 / 917-837-3294",
   "Number":103
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.97541954,40.74760267 ]
   },
   "properties": {
   "Name":"Verizon - Manhattan Package 3",
   "Address":"221 East 37th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Josh Lee / CS - Jim Purcell",
   "Phone":"646-291-0114 / 646-351-9509 / 917-837-3294",
   "Number":104
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.68523222,41.65360346 ]
   },
   "properties": {
   "Name":"Verizon - Monticello HSSB",
   "Address":"15 Saint John Street",
   "City":" Monticello",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Anthony Russo",
   "Phone":"646-221-7296 / 347-351-4239",
   "Number":105
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.83493959,40.90002106 ]
   },
   "properties": {
   "Name":"Verizon - Mt. Vernon Basement Power",
   "Address":"45 South 6th Avenue",
   "City":" Mount Vernon",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Frank Liarikos",
   "Phone":"646-291-0114 / 917-880-6800",
   "Number":106
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.8387995,40.91034672 ]
   },
   "properties": {
   "Name":"Verizon - New PEC",
   "Address":"40 South 6th Avenue",
   "City":" Mount Vernon",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Frank Liarikos",
   "Phone":"646-291-0114 / 917-880-6800",
   "Number":107
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.7847651,40.90845314 ]
   },
   "properties": {
   "Name":"Verizon - New Rochelle Fuel Tank",
   "Address":"342 Huguenot Street",
   "City":" New Rochelle",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Frank Liarikos",
   "Phone":"646-291-0114 / 917-880-6800",
   "Number":108
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.78464705,40.90789397 ]
   },
   "properties": {
   "Name":"Verizon - New Rochelle Generator",
   "Address":"342 Huguenot Street",
   "City":" New Rochelle",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh",
   "Phone":"646-291-0114",
   "Number":109
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.32549706,40.7591692 ]
   },
   "properties": {
   "Name":"Verizon - Pre-Purchase Equipment Deer Park",
   "Address":"85 West 2nd Street",
   "City":" Deer Park",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / PM - Mathew Martinez / CS - Karl Buchenhain",
   "Phone":"646-291-0114 / 332-877-5662 / 917-217-7808",
   "Number":110
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.16153203,40.6060993 ]
   },
   "properties": {
   "Name":"Verizon - Richmond Ave Fuel Oil Tank",
   "Address":"1745 Richmond Avenue",
   "City":" Richmond County",
   "State":" New York",
   "Contact_Name":"PM - Josh Lee / CS - Dominick Napoli",
   "Phone":"646-351-9509 / 917-697-8573",
   "Number":111
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.08369492,40.73842871 ]
   },
   "properties": {
   "Name":"Verizon - Sayville Network Space Prep",
   "Address":"145 Railroad Avenue",
   "City":" Sayville",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / PM - Mathew Martinez / CS - Karl Buchenhain",
   "Phone":"646-291-0114 / 332-877-5662 / 917-217-7808",
   "Number":112
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.89671871,40.85886714 ]
   },
   "properties": {
   "Name":"Verizon - Tiebout Fire Alarm Upgrade",
   "Address":"2373 Tiebout Avenue",
   "City":" Bronx County",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / CS - Anthony Russo",
   "Phone":"646-221-7296 / 347-351-4239",
   "Number":113
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -74.01309067,40.67475385 ]
   },
   "properties": {
   "Name":"Verizon - Van Dyke Pre Fab",
   "Address":"69 Van Dyke Street",
   "City":" Kings County",
   "State":" New York",
   "Contact_Name":"PM - Stephen Chaya / CS - Aldo DeRubeis",
   "Phone":"646-208-3550 / 917-295-6721",
   "Number":75
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.9906063,40.75268193 ]
   },
   "properties": {
   "Name":"Verizon - West 36th St 2022 Space Prep",
   "Address":"230 West 36th Street",
   "City":" New York",
   "State":" New York",
   "Contact_Name":"PM - Gary Dragona / J Rodriguez / CS - Dan Zotollo",
   "Phone":"646-221-7296 / 917-330-8768 / 917-841-0032",
   "Number":114
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.90031538,40.93432325 ]
   },
   "properties": {
   "Name":"Verizon - Yonkers AC Replacement",
   "Address":"40 Main Street",
   "City":" Yonkers",
   "State":" New York",
   "Contact_Name":"PM - James McDonagh / CS - Frank Liarikos",
   "Phone":"646-291-0114 / 917-880-6800",
   "Number":115
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.08386842,42.3678177 ]
   },
   "properties": {
   "Name":"Verizon IPTV Upgrade - 210 Bent Street",
   "Address":"210 Bent Street",
   "City":" Cambridge",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":116
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.08579363,42.36467776 ]
   },
   "properties": {
   "Name":"Volpe Center",
   "Address":"55 Broadway",
   "City":" Cambridge",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":117
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -71.05299183,42.35402036 ]
   },
   "properties": {
   "Name":"Wellington",
   "Address":"280 Congress Street",
   "City":" Boston",
   "State":" Massachusetts",
   "Contact_Name":"Steve Derochea",
   "Phone":"617-938-2395",
   "Number":119
   }
 },
 {
   "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -73.77887926,41.03714148 ]
   },
   "properties": {
   "Name":"Westchester County Center OGS",
   "Address":"198 Central Avenue",
   "City":" White Plains",
   "State":" New York",
   "Contact_Name":"Guy DelRosso",
   "Phone":"917-939-0033",
   "Number":120
   }
 }
]
 };

/* Assign a unique ID to each project */
projects.features.forEach(function (project, i){
    project.properties.id = i;
});

map.on('load', () => {
    /* Add the data to your map as a layer */
    map.addLayer({
        id: 'locations',
        type: 'circle',
        /* Add a GeoJSON source containing place coordinates and information. */
        source: {
            type: 'geojson',
            data: projects
        }
    });
    buildLocationsList(projects);
});

map.on('click', (event) => {
    /* Determine if a feature in the "locations" layer exists at that point. */
    const features = map.queryRenderedFeatures(event.point, {
        layers:['locations']
    });

    /* If it does not exist, return */
    if (!features.length) return;

    const clickedPoint = features[0];

    /* Fly to the point */
    flyToProject(clickedPoint);

    /* Close all other popups and display popup for clicked store */
    createPopUp(clickedPoint);

    /* Highlight listing in sidebar (and remove highligh for all other listings) */
    const activeItem = document.getElementsByClassName('active');
    if (activeItem[0]){
        activeItem[0].classList.remove('active');
    }
    const listing = document.getElementById(
        `listing-${clickedPoint.properties.id}`
    );
    listing.classList.add('active');
});

function buildLocationsList(projects) {
    for (const project of projects.features){
        /* Add a new listing section to the sidebar */
        const listings = document.getElementById('listings');
        const listing = listings.appendChild(document.createElement('div'));
        /* Assign a unique 'id' to the listings */
        listing.id = `listing-${project.properties.id}`;
        /* Assign the 'item' class to each listing for styling. */
        listing.className = 'item';

        /* Add the link to the individual listing created above */
        const link = listing.appendChild(document.createElement('a')); /* Update - Sidebar - Main */
        link.href = '#';
        link.className = 'title';
        link.id = `link-${project.properties.id}`;
        link.innerHTML = `${project.properties.Name}`;

        /* Add details to the individual listing */
        const details = listing.appendChild(document.createElement('div')); /* Update - Sidebar - Details */
        details.innerHTML = `${project.properties.Contact_Name}`;
        /* details.innerHTML = `${project.properties.Address}`; */
        if (project.properties.Phone) {
            details.innerHTML += ` <br> ${project.properties.Phone}</br>`;
        }

        /* Add Event Listener */
        link.addEventListener('click', function() {
            for (const feature of projects.features) {
                if (this.id === `link-${feature.properties.id}`){
                    flyToProject(feature);
                    createPopUp(feature);
                }
            }
            const activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });
    }
}

function flyToProject(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 13
    });
}

function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    /** Check if there is already a pop up on th emap and if so, remove it */
    if (popUps[0]) popUps[0].remove();

    const popup = new mapboxgl.Popup({ closeOnClick: false }) /* Update - Popup */
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(`<h3>${currentFeature.properties.Name}</h3><h4>${currentFeature.properties.Address}, ${currentFeature.properties.City}</h4>`)
        .addTo(map);
}