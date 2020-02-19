export class SafeSpaceInfo {
    constructor(safeSpace) {
        this.safeSpace = safeSpace
        this.name = "NAME:" + safeSpace.name;
        this.address = "ADDRESS:" + safeSpace.street + safeSpace.city + safeSpace.state;
        this.description = "DESCRIPTION:" + safeSpace.description;
        this.distance = "DISTANCE FROM YOUR LOCATION:" + (safeSpace.distance).toFixed(2) + "MILES";
        this.latitude = safeSpace.latitude;
        this.longitude = safeSpace.longitude;
        this.accessible;
    }

  unisex() {
      if (this.accessible === true) {
          this.accessible = "ADA ACCESSIBLE: yes";
      } else {
          this.accessible = "ADA ACCESSIBLE: no";
      }
  }
  }