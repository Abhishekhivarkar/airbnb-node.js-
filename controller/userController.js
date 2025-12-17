import path from "path"
import {fileURLToPath} from "url"
import hostModel from "../models/hostModel.js"
const __path = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__path)
export const formController = (req,res,next)=>{
  res.render("store/Info_form",{pageTitle:'Info Form'})
}

export const postFormController = (req,res,next) =>{
  console.log(req.body)
  res.sendFile(path.join(__dirname,"../","views","User_info.html"))
}

export const contactUsController = (req,res,next)=>{
  res.render('store/ContactUs',{pageTitle:'contact us'})
}

export const postContactUsController =(req,res,next)=>{
  console.log(req.body)
  res.send("form submitted")
}

export const homeBookings = (req,res,next) =>{
  return hostModel.fetchAll((homeData)=>{
  return res.render("store/Bookings",{homeData:homeData,pageTitle:"Bookings",select:"bookings"})
  })
}

export const homeFavourites = (req,res,next) =>{
  return hostModel.fetchAll((homeData) =>{
  return res.render("store/Favourite",{homeData:homeData,pageTitle:"Favourites",select:"favourite"})
  
  })
}