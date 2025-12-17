import path from "path"
import fs from "fs"
import {fileURLToPath} from "url"
const __path = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__path)
let homeData = []
class hostModel {
  constructor(houseName,homePrice,homeLocation,homeRatings,homeUrl){
    this.houseName = houseName;
    this.homePrice = homePrice;
    this.homeLocation = homeLocation;
    this.homeRatings = homeRatings;
    this.homeUrl = homeUrl
  }
  save(){
    console.log(this)
    homeData.push(this);
    const dataPath = path.join(__dirname,"../","data","homes.json")
 fs.writeFile(dataPath,JSON.stringify(homeData),error=>{
    console.log(error)
  })
  
}
static fetchAll(callback){
  const dataPath = path.join(__dirname,"../","data","homes.json")
  fs.readFile(dataPath,(err,data)=>{
    if(err){
     return callback([])
    }
    return callback(JSON.parse(data))
  })
  }
}

export default hostModel