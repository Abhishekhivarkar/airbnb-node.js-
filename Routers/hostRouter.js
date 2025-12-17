import express from "express"
import {hostController} from "../controller/hostController.js"

const hostRouter = express.Router()
hostRouter.get("/home",hostController.hostHomeController)

hostRouter.get("/list-home",hostController.getListHomeController)

hostRouter.post("/list-home",hostController.postListHomeController)

export default hostRouter