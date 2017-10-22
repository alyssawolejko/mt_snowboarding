export default {
 type: "map",
 theme: "light",
 projection: "mercator",
 panEventsEnabled : false,
 backgroundAlpha : 1,
 backgroundColor: "#eee",
 zoomControl: {
  "panControlEnabled": false,
  "zoomControlEnabled": false,
  "homeButtonEnabled": false
 },
 areasSettings : {
   selectable: false,
   color : "#ccc",
   colorSolid : "#84ADE9",
   selectedColor : "#011F65",
   outlineColor : "#ddd",
   balloonText: '',
   rollOverOutlineColor: '#ddd'
 },
 dataProvider : {
   map : "worldHigh",
   getAreasFromMap : true,
   areas : [
     {
       "id": "AT",
       "showAsSelected": true,
       "selectable": true,
     },
     {
       "id": "DE",
       "showAsSelected": true,
       "selectable": true,
     },
     {
       "id": "FR",
       "showAsSelected": true,
       "selectable": true,
     },
     {
       "id": "IT",
       "showAsSelected": true,
       "selectable": true,
     },
     {
       "id": "NL",
       "showAsSelected": true,
       "selectable": true,
     },
     {
       "id": "SE",
       "showAsSelected": true,
       "selectable": true,
     },
     {
       "id": "SK",
       "showAsSelected": true,
       "selectable": true,
     },
     {
       "id": "RU",
       "showAsSelected": true,
       "selectable": true,
     },
     {
       "id": "CA",
       "showAsSelected": true,
       "selectable": true,
     },
     {
       "id": "US",
       "showAsSelected": true,
       "selectable": true,
     },
     {
       "id": "JP",
       "showAsSelected": true,
       "selectable": true,
     }
   ]
 }
}
