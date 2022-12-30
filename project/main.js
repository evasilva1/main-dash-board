//-75.53,39.5,-71.01,42.49
mapboxgl.accessToken = 'pk.eyJ1IjoiZXNpbHZhLTEiLCJhIjoiY2tvOWJweWFkMGo0YTJ4cWh2end2NjFlNyJ9.cFv_HCk8vjYHiZI3zNQrBg';
        let bounds = [
        [-75.53,39.5],
        [-71.01,42.49]
        ];

        var map = new mapboxgl.Map({
            container: 'map', //container ID
            style: 'mapbox://styles/esilva-1/clc96vl41000614p751zevmlb', //style url
            center: [-73.978,40.752], //starting position [lng, lat]
            zoom: 12.0, //starting zoom
            maxBounds: bounds //bounds set as max
                        //place this in js and add src at the bottom
        });

        map.on('load', function(){
        map.getCanvas().style.cursor = 'default';

        let layers = [
            'projects'
        ];

        var colors = [
            '#830202'
        ];

        // Create Legend
        for (i = 0; i < layers.length; i++) {
            let layer = layers[i];
            let color = colors[i];
            let item = document.createElement('div');
            let key = document.createElement('span');
            key.className = 'legend-key';
            key.style.backgroundColor = color;
        
            var value = document.createElement('span');
            value.innerHTML = layer;
            item.appendChild(key);
            item.appendChild(value);
            legend.appendChild(item);
          }

        // Change Info on Hover
        map.on('mousemove', function(e){
            var states = map.queryRenderedFeatures(e.point, {
                layers: ['projects']
              });
          
              if (states.length > 0) {
                document.getElementById('pd').innerHTML =
                  '<h3><strong>Project: ' +
                  states[0].properties.Name +
                  '</strong></br>&nbsp;&nbsp;Address: ' +
                  states[0].properties.Address +
                  '</br>&nbsp;&nbsp;Contact: '+
                  states[0].properties.Contact_Name +
                  '</br>&nbsp;&nbsp;Phone: '+
                  states[0].properties.Phone
                  ;
              } else {
                document.getElementById('pd').innerHTML =
                  '<p>Hover over a point!</p>'
        }
        });

        });