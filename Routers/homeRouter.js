import path from "path"
import express from "express"
import {fileURLToPath} from "url"
import homeController,{homeDetailsController} from "../controller/homeController.js"
const homeRouter = express.Router()
const __filename=fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

homeRouter.get("/",homeController)

homeRouter.get("/home-details",homeDetailsController)

export default homeRouter