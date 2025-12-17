import express from "express"
import bodyParser from "body-parser"
import userRouter from "./Routers/userRouter.js"
import hostRouter from "./Routers/hostRouter.js"
import homeRouter from "./Routers/homeRouter.js"
import {fileURLToPath} from "url"
import path from "path"
import {pageNotFoundController} from "./controller/pageNotFound.js"
const app = express()
app.set("view engine","ejs")
app.set("views","views")
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"./","public")))
app.use("/",homeRouter)
app.use("/user",userRouter)
app.use("/host",hostRouter)
app.use(pageNotFoundController)

const PORT = 3000
app.listen(PORT,()=>{
  console.log("server is running")
})