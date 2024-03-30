const mongoose = require("mongoose");
const tasks = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"must no be empty"],
        maxLength:[20,"must be less than 20 words"]
    },
    completed:{
        type: Boolean,
        default:false,
    }
});

module.exports = mongoose.model("Tasks",tasks);