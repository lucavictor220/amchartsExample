AmCharts.makeChart("mapMoldova", {
    "type": "map",
    "pathToImages": "node_modules/ammap3/ammap/images/",
    "addClassNames": true,
    "colorSteps": 10,

    "dataProvider": {
        "getAreasFromMap": true,
        "map": "moldovaLow",
        "areas": [

            // You can change color of the regions here
            // Adding description attribute will add a label with description after clicking the region
            {"id": "MD-AN", "color": "#CC0000"},
            {"id": "MD-BA", "color": "#CC0faf"},
            {"id": "MD-BD", "color": "#CCaef1"},
            {"id": "MD-BR", "color": "#CCaef1"},
            {"id": "MD-BS", "color": "#CCaef1"},
            {"id": "MD-CA", "color": "#CCaef1"},
            {"id": "MD-CL", "color": "#CCaef1"},
            {"id": "MD-CM", "color": "#CCaef1"},
            {"id": "MD-CR", "color": "#CCaef1"},
            {"id": "MD-CS", "color": "#CCaef1"},
            {"id": "MD-CT", "color": "#CCaef1"},
            {"id": "MD-CU", "color": "#CCaef1"},
            {"id": "MD-DO", "color": "#CCaef1"},
            {"id": "MD-DR", "color": "#CCaef1"},
            {"id": "MD-DU", "color": "#Ca4af1", "description": "You can add description of Dubasari here"},
            {"id": "MD-ED", "color": "#CCaef1"},
            {"id": "MD-FA", "color": "#CCaef1"},
            {"id": "MD-FL", "color": "#CCaef1"},
            {"id": "MD-GA", "color": "#CCaef1"},
            {"id": "MD-GL", "color": "#CCaef1"},
            {"id": "MD-HI", "color": "#CCaef1"},
            {"id": "MD-IA", "color": "#CCaef1"},
            {"id": "MD-LE", "color": "#CCaef1"},
            {"id": "MD-NI", "color": "#CCaef1"},
            {"id": "MD-OC", "color": "#CCaef1"},
            {"id": "MD-OR", "color": "#CCaef1"},
            {"id": "MD-RE", "color": "#CCaef1"},
            {"id": "MD-RI", "color": "#CCaef1"},
            {"id": "MD-SD", "color": "#CCaef1"},
            {"id": "MD-SI", "color": "#CCaef1"},
            {"id": "MD-SN", "color": "#CCaef1"},
            {"id": "MD-SO", "color": "#CCaef1"},
            {"id": "MD-ST", "color": "#CCaef1"},
            {"id": "MD-SV", "color": "#CCaef1"},
            {"id": "MD-TA", "color": "#CCaef1"},
            {"id": "MD-TE", "color": "#CCaef1"},
            {"id": "MD-UN", "color": "#CCaef1"}

        ]
    },
    // You can change selection color with selectedColor attribute
    "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#4d88ff"
    },

    "defs": {
        "filter":[
          {
            "id": "shadow",
            "width": "150%",
            "height": "150%",
            "feOffset": {
              "result": "offOut",
              "in": "SourceAlpha",
              "dx": "5",
              "dy": "5"
            },
            "feGaussianBlur": {
              "result": "blurOut",
              "in": "offOut",
              "stdDeviation": "5"
            },
            "feBlend": {
              "in": "SourceGraphic",
              "in2": "blurOut",
              "mode": "normal"
            }
          }
        ]
    }

});
