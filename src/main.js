import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import { SafeSpaces } from './safeSpaces.js';
import { SafeSpaceInfo } from './../src/safeSpaceInfo.js';

$(document).ready(function() {

  $('#safeSpaceLoc').click(function() {
    let safeLat;
    let safeLong;

    function showLocation(position) {
      safeLat = position.coords.latitude;
      safeLong = position.coords.longitude; 
      console.log(safeLat, safeLong);
      (async () => {
        let safeSpaces = new SafeSpaces();
        const result = await safeSpaces.getSafeSpaces(safeLat, safeLong);
        getElements(result);
        console.log(result);
      })();
    }

    async function getElements(result) {
      result.forEach(function(safeSpace) {
        let safeSpaceInfo = new SafeSpaceInfo(safeSpace);
        let info = '<li>' + safeSpaceInfo.name + "<br>" + safeSpaceInfo.address + "<br>" + safeSpaceInfo.directions + "<br>" + safeSpaceInfo.distance + "<br>" + safeSpaceInfo.accessible + "</li>";
        $("ul.spaceList").append(info);
    });
  }

   function errorHandler(err) {
      if(err.code == 1) {
        alert("Error: Access is denied!");
      } else if( err.code == 2) {
        alert("Error: Position is unavailable!");
      }
    }

  function getLocation() {

    if(navigator.geolocation) {     
          // timeout at 60000 milliseconds (60 seconds)
          var options = {timeout:60000};
          navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
        } else {
          alert("Sorry, browser does not support geolocation!");
        }
      }  
    
    getLocation();
    

  });
});