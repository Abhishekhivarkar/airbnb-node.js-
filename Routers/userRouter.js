import express from "express"
import {
  formController,
  postFormController,
  contactUsController,
  postContactUsController
} from "../controller/userController.js"


const userRouter = express.Router()

userRouter.get("/info-form",formController)

userRouter.post("/user-info",postFormController)

userRouter.get("/contact-us",contactUsController)

userRouter.post("/contact-us",postContactUsController)
export default userRouter
