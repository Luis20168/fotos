import {Schema, model} from "mongoose";


const userShema= new Schema({
    name: {type: String},
    lastName: {type: String},
    image: {type: String}

})


export default model('user', userShema)