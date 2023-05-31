const mongoose=require("mongoose")

const connectDb=async()=>{
 try {
    await mongoose.connect("mongodb+srv://jelassinesrine:Nesrine123@cluster0.ggjtrzr.mongodb.net/")
    console.log("db is connected")
 } catch (error) {
    console.log("db is not connected")
 }
}
module.exports=connectDb