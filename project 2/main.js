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
     "Address":"1 Federal Street #suite 800, Boston, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"2 West 47th Street, New York, New York",
     "Contact_Name":"Miguel Padin",
     "Phone":""
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
     "Address":"220 11th Avenue, New York, New York",
     "Contact_Name":"Robert Ferdinand",
     "Phone":""
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
     "Address":"400 11th Avenue, New York, New York",
     "Contact_Name":"Rich Mazzella",
     "Phone":""
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
     "Address":"300 West Fordham Road, Bronx County, New York",
     "Contact_Name":"",
     "Phone":""
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
     "Address":"345 Hudson Street, New York, New York",
     "Contact_Name":"Brian Feenery / Matt Struhar",
     "Phone":"917-575-3616 / 917-574-8223"
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
     "Address":"380 Fulton Street, Kings County, New York",
     "Contact_Name":"Miguel Padin",
     "Phone":""
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
     "Address":"415 Madison Avenue, New York, New York",
     "Contact_Name":"Kevin Endres / Third Party SSM: Julian",
     "Phone":"917-938-3342 / 347-601-9614"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.9709623,40.76118252 ]
     },
     "properties": {
     "Name":"425 Park Avenue",
     "Address":"425 Park Avenue, New York, New York",
     "Contact_Name":"",
     "Phone":""
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
     "Address":"456 Greenwich Street, New York, New York",
     "Contact_Name":"Miguel Padin",
     "Phone":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.97393463,40.76194469 ]
     },
     "properties": {
     "Name":"550 Madison Avenue",
     "Address":"550 Madison Avenue, New York, New York",
     "Contact_Name":"",
     "Phone":""
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
     "Address":"551 Greenwich Street, New York, New York",
     "Contact_Name":"",
     "Phone":""
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
     "Address":"777 McCarter Highway, Newark, New Jersey",
     "Contact_Name":"VP - Richard Ortiz / CS - Ben Weber / VP - Dan Tessier",
     "Phone":"973-390-2541 / 646-856-5298 / 609-820-0760"
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
     "Address":"80 Clarkson Street, New York, New York",
     "Contact_Name":"Miguel Padin",
     "Phone":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.97493415,40.74051132 ]
     },
     "properties": {
     "Name":"ACLS West Tower - 1st Floor",
     "Address":"430 East 29th Street, New York, New York",
     "Contact_Name":"",
     "Phone":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.97390597,40.78197997 ]
     },
     "properties": {
     "Name":"AMNH Gilder Center",
     "Address":"200 Central Park West, New York, New York",
     "Contact_Name":"",
     "Phone":""
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
     "Address":"415 Columbus Avenue, New York, New York",
     "Contact_Name":"",
     "Phone":""
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
     "Address":"291 Arsenal Street, Watertown, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"8 Fenway, Boston, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"117 Lake Street, Boston, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"881 7th Avenue, New York, New York",
     "Contact_Name":"Andrea Jaco / Third Party SSM: Christina",
     "Phone":"646-245-9189 / 917-282-8649"
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
     "Address":"1100 Avenue of the Americas, New York, New York",
     "Contact_Name":"",
     "Phone":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -74.01041433,40.72137898 ]
     },
     "properties": {
     "Name":"Citigroup Greenwich Street",
     "Address":"388 Greenwich Street, New York, New York",
     "Contact_Name":"",
     "Phone":""
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
     "Address":"2000 Corporate Drive, Orangeburg, New York",
     "Contact_Name":"Bob Munno",
     "Phone":"917-999-6495"
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
     "Address":"299 Highland Street, Worcester, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"457 East Fordham Road, Bronx County, New York",
     "Contact_Name":"CS - Steve Bommarito ",
     "Phone":"917-817-1674"
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
     "Address":"75 Eastern Point Road, Groton, Connecticut",
     "Contact_Name":"Alan Norris",
     "Phone":"860-222-5496"
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
     "Address":"159 West 48th Street, New York, New York",
     "Contact_Name":"",
     "Phone":""
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
     "Address":"9 Oxford Street, Cambridge, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"510 East 73rd Street, New York, New York",
     "Contact_Name":"VP - Dean Essen / CS - Mike Zinger / Raymond Franza",
     "Phone":"646-772-6184 / 917-817-5633 / 917-922-9577"
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
     "Address":"500 Terminal Drive, Queens County, New York",
     "Contact_Name":"Greg Amon",
     "Phone":"646-574-9123"
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
     "Address":"270 Park Avenue, New York, New York",
     "Contact_Name":"Everol Hill  / Eric Lorenzon",
     "Phone":"917-701-9156 / 347-865-3461"
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
     "Address":"",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"401 West 31st Street, New York, New York",
     "Contact_Name":"Richie Tiberi Jr.",
     "Phone":""
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
     "Address":"1000 5th Avenue, New York, New York",
     "Contact_Name":"Senior CS - Joe Mangini / CS - Bruno Boral",
     "Phone":"917-578-8471 / 917-886-0502"
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
     "Address":"195 Albany Street, Cambridge, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"",
     "Contact_Name":"Tom Gribbin",
     "Phone":"917-217-6558"
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
     "Address":"Brewster Road #3, Newark, New Jersey",
     "Contact_Name":"Frank Rodriguez / CS - Mike Amato / Asst. CS - Joe Tofanelly ",
     "Phone":"973-332-7328 / 917-710-0581 / 719-309-2213"
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
     "Address":"159 E 53rd St, New York, New York",
     "Contact_Name":"Jim Hennelly / Mike Sultana",
     "Phone":"917-560-9244 / 646-737-4641"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.97004597,40.75886668 ]
     },
     "properties": {
     "Name":"NYU 159 East 53 St",
     "Address":"601 Lexington Avenue, New York, New York",
     "Contact_Name":"Jim Hennelly / Mike Sultana",
     "Phone":"917-560-9244 / 646-737-4641"
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
     "Address":"222 East 41st Street, New York, New York",
     "Contact_Name":"",
     "Phone":""
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
     "Address":"333 East 38th Street, New York, New York",
     "Contact_Name":"Robert Munderville / Third Party SSM - Georgie Skoufis",
     "Phone":"917-716-3543 / 914-433-6433"
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
     "Address":"1815 Pond Road, Ronkonkoma, New York",
     "Contact_Name":"",
     "Phone":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.97399268,40.7416564 ]
     },
     "properties": {
     "Name":"NYU Skirball",
     "Address":"435 East 30th Street, New York, New York",
     "Contact_Name":"Spiros Tzilianos / Trevor Meistrell / Anthony Guglielmo / Erica Wang / Keith Sultana",
     "Phone":"917-608-2982 / 646-922-5523 / 646-485-4926 / 347-880-2474 / 917-647-3314"
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
     "Address":"540 1st Avenue, New York, New York",
     "Contact_Name":"Spiros Tzilianos / Trevor Meistrell / Anthony Guglielmo / Erica Wang / Keith Sultana",
     "Phone":"917-608-2982 / 646-922-5523 / 646-485-4926 / 347-880-2474 / 917-647-3315"
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
     "Address":"Alewife Center, Cambridge, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"1 Madison Avenue, New York, New York",
     "Contact_Name":"Thane Szilagyi / John Kolody",
     "Phone":""
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
     "Address":"1 Times Square, New York, New York",
     "Contact_Name":"Mike Castagnoli / Justin Leddy / Third Party SSM: Ryan Riccio",
     "Phone":"646-522-2210 / 732-272-5288 / 631-449-5704"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.978826,40.75382989 ]
     },
     "properties": {
     "Name":"One Vanderbilt Avenue",
     "Address":"1 Vanderbilt Avenue, New York, New York",
     "Contact_Name":"",
     "Phone":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.97381254,40.68294737 ]
     },
     "properties": {
     "Name":"Pacific Park B15",
     "Address":"662 Pacific Street, Kings County, New York",
     "Contact_Name":"Miguel Padin",
     "Phone":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.97402997,40.68368346 ]
     },
     "properties": {
     "Name":"Pacific Park B4",
     "Address":"18 6th Avenue, Kings County, New York",
     "Contact_Name":"Miguel Padin",
     "Phone":""
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
     "Address":"16 Market Street, Paterson, New Jersey",
     "Contact_Name":"Alison Fleeson",
     "Phone":"201-213-6918"
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
     "Address":"32 West 48th Street, New York, New York",
     "Contact_Name":"Miguel Padin",
     "Phone":""
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
     "Address":"139-20 Jamaica Avenue, Queens County, New York",
     "Contact_Name":"Albert Antinori",
     "Phone":""
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
     "Address":"233 Store Hill Road, Old Westbury, New York",
     "Contact_Name":"Charlie Vitchers",
     "Phone":"570-832-0401"
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
     "Address":"100 Nicolls Road, Stony Brook, New York",
     "Contact_Name":"Joe Green",
     "Phone":"646-601-8207"
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
     "Address":"140 West Street, New York, New York",
     "Contact_Name":"PM - Stephen Chaya",
     "Phone":"646-208-3550"
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
     "Address":"165 Halsey Street, Newark, New Jersey",
     "Contact_Name":"CS - David Ericson",
     "Phone":"646-647-7455"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.94534838,40.70994308 ]
     },
     "properties": {
     "Name":"Verizon - 193 Manhattan Ave HVAC",
     "Address":"193 Manhattan Avenue, New York, New York",
     "Contact_Name":"PM - Josh Lee",
     "Phone":"646-351-9509"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.96045646,40.80097437 ]
     },
     "properties": {
     "Name":"Verizon - 193 Manhattan Ave New Heat Pumps",
     "Address":"193 Manhattan Avenue, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"204 2nd Avenue, New York, New York",
     "Contact_Name":"PM - Josh Lee",
     "Phone":"646-351-9509"
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
     "Address":"208 East 79th Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"208 East 78th Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"208 East 79th Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"227 East 30th Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"227 East 30th Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"204 2nd Avenue, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"3050 Cruger Avenue, Bronx County, New York",
     "Contact_Name":"PM - Anthony Russo",
     "Phone":"347-351-4239"
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
     "Address":"3050 Cruger Avenue, Bronx County, New York",
     "Contact_Name":"PM - Anthony Russo",
     "Phone":"347-351-4239"
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
     "Address":"32 6th Avenue, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"Bridge Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"230 West 36th Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona / Senior CS: Dan Zotollo / Caleb Westlake / Third Party SSM: Jim Rodriguez",
     "Phone":"646-221-7296 / 917-841 -0032 / 929-626-3179 / 917-330-8768"
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
     "Address":"430 West 51st Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona / Brian Darbowski",
     "Phone":"646-221-7296 / 917-559-6592"
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
     "Address":"51 South Bedford Street, Burlington, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"547 Clinton Avenue, Kings County, New York",
     "Contact_Name":"PM - Stephen Chaya",
     "Phone":"646-208-3550"
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
     "Address":"55 Meserole Street, Kings County, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"228 East 56th Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -74.01309067,40.67475385 ]
     },
     "properties": {
     "Name":"Verizon - 69 Van Dyke Pre Fab",
     "Address":"69 Van Dyke Street, Kings County, New York",
     "Contact_Name":"PM - Stephen Chaya",
     "Phone":"646-208-3550"
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
     "Address":"208 East 79th Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"214-20 43rd Avenue, Queens County, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"680 Fairview Avenue, Queens County, New York",
     "Contact_Name":"PM - Stephen Chaya",
     "Phone":"646-208-3550"
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
     "Address":"5180 Amboy Road, Richmond County, New York",
     "Contact_Name":"PM - Josh Lee",
     "Phone":"646-351-9509"
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
     "Address":"216 Beach 81st Street, Queens County, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"1265 Suffolk Avenue, Brentwood, New York",
     "Contact_Name":"PM - James McDonagh / Matthew Martinez",
     "Phone":"646-291-0114 / 332-877-5662"
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
     "Address":"1265 Suffolk Avenue, Brentwood, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"1265 Suffolk Avenue, Brentwood, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"1070 Bushwick Avenue, Kings County, New York",
     "Contact_Name":"PM - Stephen Chaya",
     "Phone":"646-208-3550"
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
     "Address":"187-07 Henderson Avenue, Queens County, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"19-19 46th St, Long Island City, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"7811 57th St, Queens County, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"99-20 189th St, Queens County, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"3050 Cruger Avenue, Bronx County, New York",
     "Contact_Name":"PM - Anthony Russo",
     "Phone":"347-351-4239"
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
     "Address":"575 Conklin Street, Farmingdale, New York",
     "Contact_Name":"PM - James McDonagh / Mathew Martinez",
     "Phone":"646-291-0114 / 332-877-5662"
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
     "Address":"216 Beach 81st Street, Queens County, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"355 Forest Avenue, Richmond County, New York",
     "Contact_Name":"PM - Josh Lee",
     "Phone":"646-351-9509"
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
     "Address":"370 East 150th Street, Bronx County, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"741 Zeckendorf Boulevard, Garden City, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"69 West Cherry Street, Hicksville, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"140-10 183rd Street, Queens County, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"140-10 183rd Street, Queens County, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"3313 Hempstead Turnpike, Levittown, New York",
     "Contact_Name":"PM - James McDonagh / Mathew Martinez",
     "Phone":"646-291-0114 / 332-877-5662"
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
     "Address":"7 Washington Avenue, Lynbrook, New York",
     "Contact_Name":"PM - James McDonagh / Mathew Martinez",
     "Phone":"646-291-0114 / 332-877-5662"
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
     "Address":"193 Manhattan Avenue, New York, New York",
     "Contact_Name":"PM - Josh Lee",
     "Phone":"646-351-9509"
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
     "Address":"193 Manhattan Avenue, New York, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"430 West 51st Street, New York, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"215 West 17th Street, New York, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"221 East 37th Street, New York, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"15 Saint John Street, Monticello, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"45 South 6th Avenue, Mount Vernon, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.8387995,40.91034672 ]
     },
     "properties": {
     "Name":"Verizon - New PPEC",
     "Address":"40 South 6th Avenue, Mount Vernon, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"342 Huguenot Street, New Rochelle, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"342 Huguenot Street, New Rochelle, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"85 West 2nd Street, Deer Park, New York",
     "Contact_Name":"PM - James McDonagh / Mathew Martinez",
     "Phone":"646-291-0114 / 332-877-5662"
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
     "Address":"1745 Richmond Avenue, Richmond County, New York",
     "Contact_Name":"PM - Josh Lee / Asst. CS: Dominic",
     "Phone":"646-351-9509 / 917-697-8573"
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
     "Address":"145 Railroad Avenue, Sayville, New York",
     "Contact_Name":"PM - James McDonagh / Mathew Martinez",
     "Phone":"646-291-0114 / 332-877-5662"
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
     "Address":"2373 Tiebout Avenue, Bronx County, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"230 West 36th Street, New York, New York",
     "Contact_Name":"PM - Gary Dragona",
     "Phone":"646-221-7296"
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
     "Address":"40 Main Street, Yonkers, New York",
     "Contact_Name":"PM - James McDonagh",
     "Phone":"646-291-0114"
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
     "Address":"210 Bent Street, Cambridge, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"55 Broadway, Cambridge, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.97349917,40.75690437 ]
     },
     "properties": {
     "Name":"Waldorf Redevelopment",
     "Address":"301 Park Avenue, New York, New York",
     "Contact_Name":"",
     "Phone":""
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
     "Address":"280 Congress Street, Boston, Massachusetts",
     "Contact_Name":"Steve Derochea",
     "Phone":""
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
     "Address":"198 Central Avenue, White Plains, New York",
     "Contact_Name":"Guy DelRosso",
     "Phone":"917-939-0033"
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
     "Address":"1 Gustave L. Levy Place, New York, New York",
     "Contact_Name":"CS - Mike Temperino",
     "Phone":"917-565-0054"
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
        const link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = `link-${project.properties.id}`;
        link.innerHTML = `${project.properties.Name}`;

        /* Add details to the individual listing */
        const details = listing.appendChild(document.createElement('div'));
        details.innerHTML = `${project.properties.Contact_Name}`;
        /* details.innerHTML = `${project.properties.Address}`; */
        if (project.properties.Phone) {
            details.innerHTML += ` - ${project.properties.Phone}`;
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

    const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(`<h3>${currentFeature.properties.Name}</h3><h4>${currentFeature.properties.Contact_Name}<br>${currentFeature.properties.Phone}</br></h4>`)
        .addTo(map);
}