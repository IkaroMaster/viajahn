//direcciones departamentales
var roatan = {lat:16.7434688,lng:-86.5821722};
var copan = {lat:14.8460772 ,lng:-89.1681294};
var cortes = {lat: 15.3608151, lng: -88.64421};
var choluteca = {lat:13.3010379, lng:-87.2413189};
var comayagua = {lat: 14.5611853, lng: -88.2329068};
var franciscomorazan = {lat: 14.3376182 ,lng: -87.7372591};
var graciasadios = {lat:15.2969878 , lng:-84.6352705};
var lempira ={lat:15.2637533 ,lng:-83.7960722};
var olancho;
var lapaz = {lat:14.1199009 ,lng:-88.2033978};
var santabarbara = {lat:15.060745 ,lng:-88.9299003};
var yoro = {lat: 15.2591679 ,lng: -87.6412144};
var atlantida = {lat: 15.627768, lng: -87.099030};
var colon = {lat :14.8613507 ,lng :-88.2964084};
var valle = {lat: 13.5510876, lng: -87.8672449};
var elparaiso = {lat:13.940113, lng:-86.9665516};
var ocotepeque = {lat:14.4983909 ,lng:-89.3137522};
var intibuca = {lat:14.257167 ,lng:-88.4688548};


//variables generales

var map;
var mapCoordsHonduras = {lat:14.641775, lng:-86.2470938};
var marker = null;
 // var markersBusqueda;

 var markersBusqueda = [];


//variables para enrrutamiento
var geocoder = null;
var infowindow = null;


//varables de busqueda de hoteles

// var map, places, infoWindow;


var infoWindow,places;
var markers = [];
var autocomplete;
var countryRestrict = {'country': 'hn'};
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries = {
	'hn': {
		center: {lat:14.641775, lng:-86.2470938},
		zoom: 7
	}
};







function init(){

	
	if (navigator.geolocation){

		// cuando una funcion como success o error se pasa como no se le ponen parentesis
		navigator.geolocation.getCurrentPosition(success,error);

	}else{
		alert('actualiza tu navegador');
	}




}


function createMap(_lat,_lon)
{

	//////////////////////////////// GENERANDO MAPA DE HONDURAS

	var mapCoords = {lat: _lat,lng: _lon};
	
	var mapSettings ={
		center: mapCoordsHonduras,
		mapTypeId:'roadmap', //roadmap,satellite, hybrid, terrain
		zoom: 8.03
	};
	map = new google.maps.Map(document.getElementById('map'),mapSettings);


	/////////////////////////////			GENERANDO MARCADOR DE LOCALIZACION ACTUAL

	var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

	var markerSettings = {
		map: map,
		position: mapCoords,
		title: 'Usted esta aqui',
		
		animation: google.maps.Animation.DROP,
		icon: image

	};

	marker = new google.maps.Marker(markerSettings);


	 ///////////////////////////		ACERCAMIENTO POSICION ACTUAL
	 acercar(marker);


	 geocoder = new google.maps.Geocoder;
	 infowindow = new google.maps.InfoWindow;


	 var objConfigDR = {
	 	map: map,
	 	suppressMarkers: true
	 }

	 dirService = new google.maps.DirectionsService();
	 dirDisplay = new google.maps.DirectionsRenderer(objConfigDR);




	 markersEstaticos(infowindow,14.837396,-89.141511,'Ruinas de Copán, Copán');
	 markersEstaticos(infowindow,14.22107, -88.0585427,'Cascada de Estanzuela, La Paz');
	 markersEstaticos(infowindow,14.4269552,-87.974065,'Reserva Biologica Montecillos, La Paz');
	 markersEstaticos(infowindow,14.8962668 ,-85.8709002,'Cuevas de Talgua, Olancho');
	 markersEstaticos(infowindow,14.305639 ,-85.2306887,'Parque Nacional Patuca, Olancho');
	 markersEstaticos(infowindow,14.0307822,-86.5700206,'Museo de Danlí, El Paraíso');
	 markersEstaticos(infowindow,14.0310418, -86.5736939,'Parque Lo Nuestro, El Paraíso');
	 markersEstaticos(infowindow,14.5151884, -88.6745465,'Parque Nacional Celaque, Ocotepeque');
	 markersEstaticos(infowindow,14.4002105, -89.2025686,'Antigua Ocotepeque, Ocotepeque');
	 markersEstaticos(infowindow,14.855374, -89.1604545,'Parque de Aves, Copán');
	 markersEstaticos(infowindow,14.8391917,-89.1576557,'Museo Casa Kinich, Copán');
	 markersEstaticos(infowindow,14.9184363,-88.2378099,'Parque Central de Santa Bárbara, Santa Bárbara');
	 markersEstaticos(infowindow,14.9406881,-88.0315429,'Parque Arqueológico Los Naranjos, Santa Bárbara');
	 markersEstaticos(infowindow,14.3086894, -88.1833288,'La Gruta, Intíbuca' );
	 markersEstaticos(infowindow,14.5751975, -88.1759388,'Parque Nacional Mixcure, Intíbuca' );
	 markersEstaticos(infowindow,15.7703234, -84.560609,'Brus Laguna, Gracias a Dios ');
	 markersEstaticos(infowindow,15.3577845,-83.993077,'Laguna de Caratasca, Gracias a Dios ');
	 markersEstaticos(infowindow,14.5886703, -88.5867257,'Fuerte de San Cristóbal, Lempira');
	 markersEstaticos(infowindow,14.558887, -88.571138,'Aguas Termales Presidente, Lempira');
	 markersEstaticos(infowindow,14.246219, -87.122294,'Parque La Tigra, Francisco Morazán ');
	 markersEstaticos(infowindow,14.2455674, -87.1923774,'Parque Central, Francisco Morazán ');
	 markersEstaticos(infowindow,16.327391, -86.563632,'Sandy Bay, Islas de la Bahía ');
	 markersEstaticos(infowindow,16.283638, -86.596817,'Parque Gumbalimba, Islas de la Bahía ');
	 markersEstaticos(infowindow,14.859016, -87.874733,' Parque Nacional Cerro Azul Meámbar, Cortés');
	 markersEstaticos(infowindow,15.778408, -88.040038,' Fortaleza de San Fernando, Cortés');
	 markersEstaticos(infowindow,15.618627, -86.862930,' Parque Nacional Pico Bonito, Atlántida ');
	 markersEstaticos(infowindow,15.7636789, -87.5119245,' Parque Nacional Jeanette Kawas, Atlántida ');
	 markersEstaticos(infowindow,15.229704, -87.559339,' Parque Nacional Pico Pijol, Yoro');
	 markersEstaticos(infowindow,15.394339, -87.810012,' Museo Ferroviario, Yoro');
	 markersEstaticos(infowindow,14.978148, -87.841282,' Zoologíco Joya Grande, Comayagua');
	 markersEstaticos(infowindow,14.694709, -87.951799,' Cuevas de Taulabé, Comayagua');
	 markersEstaticos(infowindow,15.921110, -85.952287,' Fortaleza Santa Barbara, Colón');
	 markersEstaticos(infowindow,15.873701, -85.940857,' Parque Nacional Capiro y Calentura, Colón');
	 markersEstaticos(infowindow,13.415633, -87.446711,' Muelle Histórico, Valle');
	 markersEstaticos(infowindow,13.291485, -87.652263,' Amapala, Valle');
	 markersEstaticos(infowindow,13.306368, -87.194946,' Iglesia Catedrál, Choluteca');
     markersEstaticos(infowindow,13.306046, -86.761826,' Cascada de la Mina, Choluteca');
	 markersEstaticos(infowindow,14.388599, -89.126007,' Cerro el Pital, Ocotepeque');




	 busqueda();




	 //							HOTELES ///////////--------------===================================

	 infoWindow = new google.maps.InfoWindow({
	 	content: document.getElementById('info-content')
	 });

        // Create the autocomplete object and associate it with the UI input control.
        // Restrict the search to the default country, and to place type "cities".
        autocomplete = new google.maps.places.Autocomplete(
        	/** @type {!HTMLInputElement} */ (
        		document.getElementById('autocomplete')), {
        		types: ['(cities)'],
        		componentRestrictions: countryRestrict
        	});
        places = new google.maps.places.PlacesService(map);

        autocomplete.addListener('place_changed', onPlaceChanged);

        // // Add a DOM event listener to react when the user selects a country.
        // document.getElementById('country').addEventListener(
        //     'change', setAutocompleteCountry);










    }


    function busqueda(){

	////////////////////////////////////////////////////codigo de barra de busquedas con autocompletacion//////////////

	// Create the search box and link it to the UI element.
	var input = document.getElementById('pac-input');


	var searchBox = new google.maps.places.SearchBox(input);
	var options = {
		types: ['(cities)'],	
		componentRestrictions: {country: 'hn'}
	};

	autocomplete = new google.maps.places.Autocomplete(input, options);
        //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
        	searchBox.setBounds(map.getBounds());
        });

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
        	searchBox.setBounds(map.getBounds());
        });

        
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {


        	$('#contenedordep').hide();
        	$('#contenedor1').show();

        	var places = searchBox.getPlaces();

        	if (places.length == 0) {
        		return;
        	}

          // Clear out the old markers.
          markersBusqueda.forEach(function(marker) {
          	marker.setMap(null);
          });
          markersBusqueda = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
          	if (!place.geometry) {
          		console.log("Returned place contains no geometry");
          		return;
          	}
          	var icon = {
          		url: place.icon,
          		size: new google.maps.Size(71, 71),
          		origin: new google.maps.Point(0, 0),
          		anchor: new google.maps.Point(17, 34),
          		scaledSize: new google.maps.Size(25, 25)
          	};

            // Create a marker for each place.
            markersBusqueda.push(new google.maps.Marker({
            	map: map,
            	icon: icon,
            	title: place.name,
            	position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
          } else {
          	bounds.extend(place.geometry.location);
          }


          markersBusqueda.forEach(function(marker) {
          	clicke(marker);
          });




      });
          map.fitBounds(bounds);



      });



    }




    function success(pos){

    	createMap(pos.coords.latitude,pos.coords.longitude);

    }


    function error(e){

    	createMap(pos.coords.latitude,pos.coords.longitude);	
    }



    function acercar(punto){

    	punto.addListener('dblclick', function() {

    		if(map.getZoom() >= 14){
    			map.setZoom(8);
    			map.setCenter(mapCoordsHonduras);
    		}else{
    			map.setZoom(14);
    			map.setCenter(punto.getPosition());
    		}

    	});

    }

    function markersEstaticos(infowindow,lt,ln,titulo){


    	var m = new google.maps.Marker({
    		map: map,
    		position: {lat: lt, lng: ln },
    		animation: google.maps.Animation.DROP,
    		title: 'hola'

    	});
    	acercar(m);


    	m.addListener('mouseover', function(){

    		var latlng = m.getPosition();


    		infowindow.setContent(titulo);

    		direccion = m.getPosition(); 

    		infowindow.open(map, m);     


    	});

    	m.addListener('mouseout', function(){
    		closeInfoWindow();
    	});

    	clicke(m);


    }




////////////////////////				CERRAR INFOWINDOW QUE NO SEA EL QUE TENGA EL MOUSE SOBRE EL
function closeInfoWindow() {
	infowindow.close();
}




function hoteles(){

	alert('hotel');
	
}
















function clicke(ma){
	ma.addListener('click', function(){

		//geocodeLatLng(geocoder, map, infowindow,ma);

		// $('#map').css({ 'width':'100%', 
		// 	'height':'500px',
		// 	'border':'5px solid red',
		// 	'margin':'0',
		// 	'display':'inline-block',
		// 	'margin-left': '2%'  });

		// $('#directions').show();

		var desde = marker.getPosition();
		var hasta = ma.getPosition();

		console.log(desde);
		console.log(hasta);
		var travel = $('#travelMode').val();

		if(desde =='' || hasta =='')
			if (travel =='')
				return;


		// alert(travel)
		// return false;

		var request = {
			origin: desde,
			destination: hasta,
			travelMode: travel ,// WALKING, BICYCLING
			provideRouteAlternatives:true

		};


		//primero recibe la informacion de la peticion que esta en request y lo segundo una funcion anonima
		dirService.route(request, function(result,status){

			if (status == 'OK')
			{

				dirDisplay.setPanel(document.getElementById('directions'));
				dirDisplay.setDirections(result);

				alert('Ruta trazada con exito');
			}else if (status == 'NOT_FOUND'){
				alert('error');
			}
		});


	});



}



$(document).ready(function(){


	$('#tipoMapa').on('change',function (){

		var mapTypeId= $(this).val();
		map.setMapTypeId(mapTypeId);
	});



    $('#autocomplete').empty();




	$('#contenedor1').show();
	// $('#map').css({ 'width':'95%', 
	// 	'height':'600px',
	// 	'border':'5px solid red',
	// 	'margin':'0 auto',
	// 	'margin-top':' 30px',
	// 	'margin-booton':' 30px' 
	// 	 });
	$('#contenedor1').hide();
	$('#autocomplete').hide();
	$('#contenedorHoteles').hide();



	/////////////////////////////////////////////acciones en inicio

	$('#uno').on('click', function() {  


		$('#contenedordep').show('');
        		$('#contenedor1').hide();


		init();

		$('#directions').empty();
		$('#directions').hide();

			// $('#map').css({ 'width':'100%', 
			// 	'height':'600px',
			// 	'border':'5px solid red',
			// 	'margin':'0 auto',
			// 	'margin-top':' 30px',
			// 	'margin-booton':' 30px' 
  	// 		});

  	$('#autocomplete').hide();
  	$('#pac-input').show();
  	$('#contenedorHoteles').hide();






  });

    /////////////////////////////////////////////acciones en lugares sigeridos


    $('#dos').on('click', function() { 

     

        
    	$('#contenedordep').hide();
    	$('#contenedor1').show();


    	init();

    	$('#directions').empty();
    	$('#directions').show();


    	$('#autocomplete').hide();
    	$('#pac-input').show();
    	$('#contenedorHoteles').hide();


    	$('#map').css({ 'width':'100%','margin-left':'0%'});










    });


    /////////////////////////////////////////////acciones en hoteles

    $('#tres').on('click', function() {

    	$('#contenedordep').hide();
    	$('#contenedor1').show(); 

    	$('#pac-input').hide();
    	$('#autocomplete').show();

    	$('#contenedorHoteles').hide();


		// $('#directions').css({ 'width':'100%'

        init();

  // 			});
  $('#directions').empty();
  $('#directions').show();


  $('#map').css({ 'width':'100%','margin-left':'0%'});




});








    $('#roatan').on('click', function() {  


       


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Islas de la Bahía,Honduras');

            map.setCenter(roatan);
            map.setZoom(10);


    	
    });
    



    $('#copan').on('click', function() {  



    	$('#contenedordep').hide();
    	$('#contenedor1').show();

        alert('Copan,Honduras');

    	map.setCenter(copan);
    	map.setZoom(10);
    });

    $('#cortes').on('click', function() {  



        $('#contenedordep').hide();
        $('#contenedor1').show();

        alert('Cortés,Honduras');

    	map.setCenter(cortes);
    	map.setZoom(10);
    });



    $('#choluteca').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Choluteca,Honduras');

    	map.setCenter(choluteca);
    	map.setZoom(10);
    });


    $('#comayagua').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Copan,Honduras');

    	map.setCenter(comayagua);
    	map.setZoom(10);
    });


    $('#franciscomorazan').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Francisco Morazán,Honduras');

    	map.setCenter(franciscomorazan);
    	map.setZoom(10);
    });

    $('#graciasadios').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Gracias a Dios,Honduras');

    	map.setCenter(graciasadios);
    	map.setZoom(10);
    });

    $('#lempira').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Lempira,Honduras');

    	map.setCenter(lempira);
    	map.setZoom(10);
    });

    $('#olancho').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Olancho,Honduras');

    	map.setCenter(olancho);
    	map.setZoom(10);
    });

    $('#lapaz').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('La Paz,Honduras');

    	map.setCenter(lapaz);
    	map.setZoom(10);
    });

    $('#santabarbara').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Santa Barbara,Honduras');

    	map.setCenter(santabarbara);
    	map.setZoom(10);
    });

    $('#yoro').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Yoro,Honduras');

    	map.setCenter(yoro);
    	map.setZoom(10);
    });

    $('#atlantida').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Atlántida,Honduras');

    	map.setCenter(atlantida);
    	map.setZoom(10);
    });

    $('#colon').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Colon,Honduras');

    	map.setCenter(colon);
    	map.setZoom(10);
    });

    $('#valle').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Valle,Honduras');

    	map.setCenter(valle);
    	map.setZoom(10);
    });

    $('#elparaiso').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('El Paraíso,Honduras');

    	map.setCenter(elparaiso);
    	map.setZoom(10);
    });

    $('#ocotepeque').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Ocotepeque,Honduras');

    	map.setCenter(ocotepeque);
    	map.setZoom(10);
    });

    $('#intibuca').on('click', function() {  


    	$('#contenedordep').hide();
    	$('#contenedor1').show();


        alert('Intíbuca,Honduras');

    	map.setCenter(intibuca);
    	map.setZoom(10);
    });





});











































      // function init() {
      //   map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: countries['hn'].zoom,
      //     center: countries['hn'].center,
      //     mapTypeControl: false,
      //     panControl: false,
      //     zoomControl: false,
      //     streetViewControl: false
      //   });


      // }

      // When the user selects a city, get the place details for the city and
      // zoom the map in on the city.
      function onPlaceChanged() {
      	var place = autocomplete.getPlace();
      	if (place.geometry) {
      		map.panTo(place.geometry.location);
      		map.setZoom(15);
      		search();
      	} else {
      		document.getElementById('autocomplete').placeholder = 'Enter a city';
      	}
      }

      // Search for hotels in the selected city, within the viewport of the map.
      function search() {
      	var search = {
      		bounds: map.getBounds(),
      		types: ['lodging']
      	};

      	places.nearbySearch(search, function(results, status) {
      		if (status === google.maps.places.PlacesServiceStatus.OK) {
      			clearResults();
      			clearMarkers();
            // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
            	var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
            	var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
              	position: results[i].geometry.location,
              	animation: google.maps.Animation.DROP,
              	icon: markerIcon
              });
              // If the user clicks a hotel marker, show the details of that hotel
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
          }

          $('#map').css({ 'width':'60%','margin-left':'5%'});

          $('#contenedorHoteles').show();


      }
  });
      }

      function clearMarkers() {
      	for (var i = 0; i < markers.length; i++) {
      		if (markers[i]) {
      			markers[i].setMap(null);
      		}
      	}
      	markers = [];
      }

      // Set the country restriction based on user input.
      // Also center and zoom the map on the given country.
      function setAutocompleteCountry() {
      	var country = document.getElementById('country').value;
      	if (country == 'all') {
      		autocomplete.setComponentRestrictions([]);
      		map.setCenter({lat: 15, lng: 0});
      		map.setZoom(2);
      	} else {
      		autocomplete.setComponentRestrictions({'country': country});
      		map.setCenter(countries[country].center);
      		map.setZoom(countries[country].zoom);
      	}
      	clearResults();
      	clearMarkers();
      }

      function dropMarker(i) {
      	return function() {
      		markers[i].setMap(map);
      	};
      }

      function addResult(result, i) {
      	var results = document.getElementById('results');
      	var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
      	var markerIcon = MARKER_PATH + markerLetter + '.png';

      	var tr = document.createElement('tr');
      	tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
      	tr.onclick = function() {
      		google.maps.event.trigger(markers[i], 'click');
      	};

      	var iconTd = document.createElement('td');
      	var nameTd = document.createElement('td');
      	var icon = document.createElement('img');
      	icon.src = markerIcon;
      	icon.setAttribute('class', 'placeIcon');
      	icon.setAttribute('className', 'placeIcon');
      	var name = document.createTextNode(result.name);
      	iconTd.appendChild(icon);
      	nameTd.appendChild(name);
      	tr.appendChild(iconTd);
      	tr.appendChild(nameTd);
      	results.appendChild(tr);
      }

      function clearResults() {
      	var results = document.getElementById('results');
      	while (results.childNodes[0]) {
      		results.removeChild(results.childNodes[0]);
      	}
      }

      // Get the place details for a hotel. Show the information in an info window,
      // anchored on the marker for the hotel that the user selected.
      function showInfoWindow() {
      	var marker = this;
      	places.getDetails({placeId: marker.placeResult.place_id},
      		function(place, status) {
      			if (status !== google.maps.places.PlacesServiceStatus.OK) {
      				return;
      			}
      			infoWindow.open(map, marker);
      			buildIWContent(place);

               // markers.forEach(function(marker) {


          // });
      });

      	clicke(marker);
      }

      // Load the place information into the HTML elements used by the info window.
      function buildIWContent(place) {
      	document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
      	'src="' + place.icon + '"/>';
      	document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
      	'">' + place.name + '</a></b>';
      	document.getElementById('iw-address').textContent = place.vicinity;

      	if (place.formatted_phone_number) {
      		document.getElementById('iw-phone-row').style.display = '';
      		document.getElementById('iw-phone').textContent =
      		place.formatted_phone_number;
      	} else {
      		document.getElementById('iw-phone-row').style.display = 'none';
      	}

        // Assign a five-star rating to the hotel, using a black star ('&#10029;')
        // to indicate the rating the hotel has earned, and a white star ('&#10025;')
        // for the rating points not achieved.
        if (place.rating) {
        	var ratingHtml = '';
        	for (var i = 0; i < 5; i++) {
        		if (place.rating < (i + 0.5)) {
        			ratingHtml += '&#10025;';
        		} else {
        			ratingHtml += '&#10029;';
        		}
        		document.getElementById('iw-rating-row').style.display = '';
        		document.getElementById('iw-rating').innerHTML = ratingHtml;
        	}
        } else {
        	document.getElementById('iw-rating-row').style.display = 'none';
        }

        // The regexp isolates the first part of the URL (domain plus subdomain)
        // to give a short URL for displaying in the info window.
        if (place.website) {
        	var fullUrl = place.website;
        	var website = hostnameRegexp.exec(place.website);
        	if (website === null) {
        		website = 'http://' + place.website + '/';
        		fullUrl = website;
        	}
        	document.getElementById('iw-website-row').style.display = '';
        	document.getElementById('iw-website').textContent = website;
        } else {
        	document.getElementById('iw-website-row').style.display = 'none';
        }
    }







