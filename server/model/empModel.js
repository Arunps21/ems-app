const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    name:{type:String},
    des:{type:String},
    sal:{type:Number},
    exp:{type:String}
},{timestamps:true})

const empModel = mongoose.model("employee_tbl",empSchema)

module.exports = empModel