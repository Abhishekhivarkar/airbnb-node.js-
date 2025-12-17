const home = []
class hostModel {
  constructor(houseName,homePrice,homeLocation,homeRatings){
    this.houseName = houseName;
    this.homePrice = homePrice;
    this.homeLocation = homeLocation;
    this.homeRatings = homeRatings;
  }
  save(){
    home.push(this);
  }
  static fetchAll(){
    return home;
  }
}

export default hostModel