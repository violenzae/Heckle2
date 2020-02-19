export class SafeSpaces {
    async getSafeSpaces(safeLat, safeLong) {   
        try {
        let result = await fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&ada=true&unisex=true&lat=${safeLat}&lng=${safeLong}`);
        let jsonifiedResult;
        if (result.ok && result.status == 200) {
          jsonifiedResult = await result.json();
        } else {
          jsonifiedResult = false;
        }
        return jsonifiedResult;
      } catch(error) {
        return false;
      }
    }
  }