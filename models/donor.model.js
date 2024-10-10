import mongoose from "mongoose"

const donorSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    blood:{type:String},
    phone:{type:Number},
    gender:{type:String},
})

export default mongoose.models.Donor || mongoose.model('Donor', donorSchema);
