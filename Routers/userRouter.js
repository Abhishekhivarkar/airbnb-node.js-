import express from "express"
import {
  formController,
  postFormController,
  contactUsController,
  postContactUsController,
  homeBookings,
homeFavourites
} from "../controller/userController.js"


const userRouter = express.Router()

userRouter.get("/info-form",formController)

userRouter.post("/user-info",postFormController)

userRouter.get("/contact-us",contactUsController)

userRouter.post("/contact-us",postContactUsController)
userRouter.get("/bookings",homeBookings)
userRouter.get("/favourite",homeFavourites)
export default userRouter
