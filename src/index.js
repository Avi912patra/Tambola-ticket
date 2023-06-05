const  express=require('express')
const mongoose = require('mongoose')
const route=require('./routes/route')
const app=express()

app.use(express.json())

mongoose
  .connect(
    "mongodb+srv://Avipatra912:Avi878878@cluster0.kahv6oh.mongodb.net/tambola",
    {UseNewUrlParser: true}
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message))

app.use("/", route);

app.listen(3000, function (){
  console.log("listening at " + (process.env.PORT || 3000))})
