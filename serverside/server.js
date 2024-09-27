const http = require("http")
const fs = require("fs")
const url = require("url")
const queryString=require("querystring")
const{MongoClient}=require("mongodb")

//connect mongodb
const client=new MongoClient("mongodb://127.0.0.1:27017/")
const PORT = 3000;


const app = http.createServer(async (req, res) => {
    const path = url.parse(req.url);
    console.log(path)
    console.log(req.method)
    //create database
    const db=client.db("DONOR")
    //create collection 
    const collection=db.collection("bloodbank")

   


    if (path.pathname == "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/index.html"))
    }

    else if (path.pathname == "/clientside/css/index.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(fs.readFileSync("../clientside/css/index.css"))
    }

    else if (path.pathname == "/js/index.js") {
        res.writeHead(200, { "Content-Type": "text/js" })
        res.end(fs.readFileSync("../clientside/js/index.js"))
    }


    else if (path.pathname == "/clientside/js/pages/addDonor.html") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/js/pages/addDonor.html"))
    }

    else if (path.pathname == "/clientside/css/doner.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(fs.readFileSync("../clientside/css/doner.css"))
    }

   else  if (path.pathname="/submit"&&req.method=="POST"){
        console.log("hai");
    let body=""
    req.on("data",(chunks)=>{
        console.log(chunks);
        body+=chunks.toString();
        console.log(body);
        
    }) 
    
    req.on("end",async()=>{
        if(body!==null){
            const formData=queryString.parse(body);
            console.log(formData);
            collection.insertOne(formData).then(()=>{
                console.log("data added")
            }).catch((error)=>{
                console.log(error);
                
            })

            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(fs.readFileSync("../clientside/index.html"))
            
        }
    });
    }

    //  if(path.pathname=="/getdonors" && req.method=="GET"){
    //    console.log("hai");
       
    //     res.end("hai")
    //     // const data=await collection.find().toArray();
    //     // const json_data=JSON.stringify(data)

    //     // console.log(json_data);

    //     // res.writeHead(200,{"Content-Type":"text/json"})
    //     // res.end(json_data)
        
    // }
else if(path.pathname=="/getdonors" && req.method=="GET"){
    console.log("hai");
    
}




})

app.listen(PORT);

