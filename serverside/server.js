const http = require("http")
const fs = require("fs")
const url = require("url")
const queryString = require("querystring")
const { MongoClient, ObjectId} = require("mongodb")


//connect mongodb
const client = new MongoClient("mongodb://127.0.0.1:27017/")
const PORT = 3001


const app = http.createServer(async (req, res) => {
    const path = url.parse(req.url);
    console.log(path);

    //create database
    const db = client.db("EMPLOYEES")
    //create collection 
    const collection = db.collection("employe")



    if (path.pathname == "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/pages/index.html"))
    }

    else if (path.pathname == "/css/index.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(fs.readFileSync("../clientside/css/index.css"))
    }

    else if (path.pathname == "/images/man.webp") {
        res.writeHead(200, { "Content-Type": "image/webp" })
        res.end(fs.readFileSync("../clientside/images/man.webp"))
    }

    else if (path.pathname == "/pages/Addemploye.html") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/pages/Addemploye.html"))
    }

    else if (path.pathname == "/css/Add.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(fs.readFileSync("../clientside/css/Add.css"))
    }

    else if (path.pathname == "/pages/details.html") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/pages/details.html"))
    }

    else if (path.pathname == "/css/details.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(fs.readFileSync("../clientside/css/details.css"))
    }

    else if (path.pathname == "/pages/edit.html") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/pages/edit.html"))
    }

    else if (path.pathname == "/css/edit.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(fs.readFileSync("../clientside/css/edit.css"))
    }

    else if (path.pathname == "/pages/index.html") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/pages/index.html"))
    }

    else if (path.pathname == "/js/index.js") {
        res.writeHead(200, { "Content-Type": "text/js" })
        res.end(fs.readFileSync("../clientside/js/index.js"))
    }

    else if (path.pathname == "/js/edit.js") {
        res.writeHead(200, { "Content-Type": "text/js" })
        res.end(fs.readFileSync("../clientside/js/edit.js"))
    }

    else if (path.pathname == "/js/details.js") {
        res.writeHead(200, { "Content-Type": "text/js" })
        res.end(fs.readFileSync("../clientside/js/details.js"))
    }

  

    else if (path.pathname == "/submit" && req.method == "POST") {

        let body = ""
        req.on("data", (chunks) => {
            console.log(chunks);
            body += chunks.toString();
            console.log(body);

        })
        req.on("end", async () => {
            if (body !== null) {
                const formData = queryString.parse(body);
                console.log(formData);
                collection.insertOne(formData).then(() => {
                    console.log("data added")
                }).catch((error) => {
                    console.log(error);

                })

                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(fs.readFileSync("../clientside/pages/index.html"))

            }
        });
    }

    if (path.pathname == "/getemployes" && req.method == "GET") {



        const data = await collection.find().toArray();
        const json_data = JSON.stringify(data)

        console.log(json_data);

        res.writeHead(200, { "Content-Type": "text/json" })
        res.end(json_data)

    }


    else if (path.pathname== "/getdetails" && req.method == "GET"){
        const data=await collection.find().toArray();
        const json_data=JSON.stringify(data)
        console.log(json_data)

        res.writeHead(200, { "Content-Type": "text/json" })
        res.end(json_data)

    }

    if (path.pathname=="/getedit"&&req.method=="GET"){
        const data=await collection.find().toArray();
        const json_data=JSON.stringify(data)
        console.log(json_data)

        res.writeHead(200, { "Content-Type": "text/json" })
        res.end(json_data)

    }

    else if (path.pathname == "/delete" && req.method == "DELETE") {

        let body = ""
        req.on("data", (chunks) => {
            console.log(chunks);
            body += chunks.toString();
            console.log(body);

        })
        req.on("end", async () => {
            let _id=new ObjectId(body)
            console.log(_id)
            await collection.deleteOne({_id}).then(()=>{
                res.writeHead(200, { "Content-Type": "text/plain" })
                res.end("success")
    
            }).catch(() => {
                    

                res.writeHead(200, { "Content-Type": "text/plain" })
                res.end("Failed")

            })
        });

    }

    else if(path.pathname=="/update"&&req.method=="PUT"){   
        let body='';
        req.on('data',(chunks)=>{
            body+=chunks.toString();
        });
        req.on('end',async()=>{
            let  data =JSON.parse(body);
            let _id=new ObjectId(data.a)
            let updateData={
                id: data.id,
                name: data.name,
                designation: data.designation,
                experience: data.experience,
                salary: data.salary,
                phone: data.phone,
                email: data.email
            };
            await collection.updateOne({_id},{$set:updateData}).then(()=>{
            console.log("updateSuccess");

                res.writeHead(200,{"Content-Type":"text/plain"})

                res.end("success")
            }).catch((error)=>{
                console.log(error);
                
                res.writeHead(404,{"Content-Type":"text/plain"})
                res.end("fail")
            })
        })
    }





})
app.listen(PORT)
