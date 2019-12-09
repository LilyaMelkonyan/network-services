var map = AmCharts.makeChart("map",{
					"type": "map",
					"dragMap": false,
					"zoomOnDoubleClick": false,
  					"zoomControl": {
  						"buttonSize": 31,
    					"zoomControlEnabled": false, 
   						"panControlEnabled": false,
  					},
  					"ZoomControl.svgIcons": false,
  					"ZoomControl.zoomControlEnabled": false,
  					"homeIconFile": "",
  					"areasSettings": {
    						"autoZoom": false,
    						"selectable": true
  							},
					"fontSize": 15,
					"dataProvider": {
						"map": "burkinaFasoLow",
						"areas": [
							{
								"id": "BF-01",
								"description": "<div class = 'mapdescdiv' id='one'><p class='balloonText'>Boucle du Mouhoun</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								// "showAsSelected":true,
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Boucle du Mouhoun",
								// "descriptionWindowTop":200,
								// "descriptionWindowRight":430
							},
							{
								"id": "BF-02",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Cascadesn</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Cascadesn",
								"descriptionWindowTop":350,
								"descriptionWindowRight":530
							},
							{
								"id": "BF-03",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Centre</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Centre",
								// "descriptionWindowTop":200,
								// "descriptionWindowRight":280
							},
							{
								"id": "BF-04",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Centre-Est</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Centre-Est",
								// "descriptionWindowTop":250,
								// "descriptionWindowRight":130
							},
							{
								"id": "BF-05",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Centre-Nord</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Centre-Nord",
								// "descriptionWindowTop":70,
								// "descriptionWindowRight":210
							},
							{
								"id": "BF-06",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Centre-Ouest</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Centre-Ouest",
								// "descriptionWindowTop":240,
								// "descriptionWindowRight":330
							},
							{
								"id": "BF-07",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Centre-Sud</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Centre-Sud",
								// "descriptionWindowTop":250,
								// "descriptionWindowRight":250
							},
							{
								"id": "BF-08",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Est</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Est",
								// "descriptionWindowTop":200,
								// "descriptionWindowRight":250
							},
							{
								"id": "BF-09",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Hauts-Bassins</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Hauts-Bassins",
								// "descriptionWindowTop":270,
								// "descriptionWindowRight":530
							},
							{
								"id": "BF-10",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Nord</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Nord",
								// "descriptionWindowTop":70,
								// "descriptionWindowRight":335
							},
							{
								"id": "BF-11",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Plateau-Central</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Plateau-Central",
								// "descriptionWindowTop":150,
								// "descriptionWindowRight":220
							},
							{
								"id": "BF-12",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Sahel</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Sahel",
								// "descriptionWindowTop":30,
								// "descriptionWindowRight":180
							},
							{
								"id": "BF-13",
								"description": "<div class = 'mapdescdiv'><p class='balloonText'>Sud-Ouest</p><p class = 'p'><span class = 'li'>LOREM &nbsp</span>2m 16sm</p><p class = 'p'><span class = 'li'>IPSUM &nbsp</span> 537</p><p class = 'p'><span class = 'li'>DOLOR &nbsp</span>NO</p><button class = 'mapbtn'>See Details &nbsp <i class='fa fa-arrow-right'></i></button><div>",
								"color": "#006699",
								"descriptionWindowWidth": 150,
								"title": " ",
								"balloonText":"Sud-Ouest",
								// "descriptionWindowTop":360,
								// "descriptionWindowRight":440
							}
						]
					},
					"balloon": {
						"horizontalPadding": 5,
						"borderAlpha": 0,
						"borderThickness": 2,
						"verticalPadding": 5
					},
					"areasSettings": {
						"color": "#FFFFFF",
						"outlineColor": "#FFFFFF",
						"rollOverOutlineColor": "#FFFFFF",
						"rollOverBrightness": 40,
						"selectedBrightness": 40,
						"selectable": true,
						"unlistedAreasAlpha": 0,
						"unlistedAreasOutlineAlpha": 0
					},
				
			
				});


