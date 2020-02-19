export class SafeSpaceInfo {
    constructor(safeSpace) {
        this.safeSpace = safeSpace
        this.name = '<strong>' + "NAME: " + '</strong>' + safeSpace.name;
        this.address = '<strong>' + "ADDRESS: " + '</strong>' + safeSpace.street + safeSpace.city + safeSpace.state;
        this.directions = '<strong>' + "DIRECTIONS: " + '</strong>' + safeSpace.directions;
        this.distance = '<strong>' + "DISTANCE FROM YOUR LOCATION: " + '</strong>' + (safeSpace.distance).toFixed(2) + "MILES";
        this.latitude = safeSpace.latitude;
        this.longitude = safeSpace.longitude; 
        this.accessible = '<strong>' + "ADA ACCESSIBLE? " + '</strong>' + safeSpace.accessible;
    }
  }
