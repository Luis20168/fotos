import mongoose from "mongoose";


export const db= ()=>{
    try {
        mongoose.connect("mongodb+srv://luis:luis@cluster0.trhswsz.mongodb.net/?retryWrites=true&w=majority")
        console.log("db is connected")
    } catch (error) {
        console.error(error)
        
    }

}