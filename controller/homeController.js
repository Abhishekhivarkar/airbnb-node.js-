import hostModel from "../models/hostModel.js"
const homeController = (req,res,next)=>{
  return hostModel.fetchAll((homeData)=>{
  return res.render("store/Home",{pageTitle:"home",homeData:homeData})}
)}
export const homeDetailsController = (req,res,next)=>{
  return hostModel.fetchAll((homeData)=>{
    return res.render("store/HomeDetails",{homeData:homeData,pageTitle:"home details"})
  })
}


export default homeController