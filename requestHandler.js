import donorSchema from './models/donor.model.js'

export async function addDonor(req,res) {
    console.log(req.body);

    const {...donors}=req.body
    await donorSchema.create({...donors}).then(()=>{
        res.status(201).send({msg: "Successfully added donor"})
    })
    .catch((error)=>{
        res.status(500).send({error: error})
    })
}

export async function getDonors(req,res){
    console.log("get donors")

    const data = await donorSchema.find()
    console.log(data);

    res.status(200).send(data)
}

export async function getDonor(req,res){
    console.log(req.params)
    const {id}=req.params
    const data = await donorSchema.findOne({_id:id})
    console.log(data);

    res.status(200).send(data)
}


export async function update(req,res) {
    console.log(req.params);
    console.log(req.body);
    const {...donor}=req.body
    await donorSchema.updateOne({_id:req.params.id},{$set:{...donor}}).then(()=>{
        res.status(201).send({msg:"updated"})
    }).catch((error)=>{
        res.status(500).send({error: error})
    
    })
    
}


export async function deleteDonor(req, res) {
    const id = req.params.id;
    donorSchema.deleteOne({ _id: id })
        .then(() => {
            res.status(200).send({ msg: "Donor deleted successfully" });
        })
        .catch((error) => {
            console.error("Error deleting donor:", error);
            res.status(500).send({ error: "Failed to delete the donor" });
        });
}
    