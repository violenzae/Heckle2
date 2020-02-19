export class SafeSpaceInfo {
    constructor(safeSpace) {
        this.safeSpace = safeSpace;
        this.name = "NAME: " + safeSpace.name;
        this.address = "ADDRESS: " + safeSpace.street + safeSpace.city + safeSpace.state;
        this.directions = "DIRECTIONS: " + safeSpace.directions;
        this.distance = "DISTANCE FROM YOUR LOCATION: " + (safeSpace.distance).toFixed(2) + "MILES";
        this.latitude = safeSpace.latitude;
        this.longitude = safeSpace.longitude; 
        this.accessible = "ADA ACCESSIBLE? " + safeSpace.accessible;
    }
  }
