//-75.53,39.5,-71.01,42.49
mapboxgl.accessToken = 'pk.eyJ1IjoiZXNpbHZhLTEiLCJhIjoiY2xkbmN1Y2NrMGh4azNvdGI4M29xOG9keiJ9._d-9iIdLmSUJGvhXCmbTFA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.978,40.752],
    zoom: 12,
    scrollZoom: false
});

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
         "Phone":"000-000-000",
         "Number":1
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
         "Phone":"",
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
         "Address":"220 11th Avenue, New York, New York",
         "Contact_Name":"Robert Ferdinand",
         "Phone":"",
         "Number":3
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
    }
}