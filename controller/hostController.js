import hostModel from "../models/hostModel.js"
const hostHomeController = (req,res,next)=>{
 return res.render('admin/HostHome',{pageTitle:'host home'})
}

const getListHomeController = (req,res,next)=>{
 return hostModel.fetchAll((homeData)=>{
 return res.render("admin/ListHome",{homeData:homeData,pageTitle: 'List Home'})
 } )
  
}

const postListHomeController = (req,res,next)=>{
  const {houseName,homePrice,homeLocation,homeRatings,homeUrl} = req.body
  const home = new hostModel(houseName,homePrice,homeLocation,homeRatings,homeUrl)
  home.save()
  
  return res.send(`<h1>thanks</h1>
  <a href="/host/list-home">go back</a>
  `)
}
export const hostController = {
  hostHomeController,
  getListHomeController,
  postListHomeController
}