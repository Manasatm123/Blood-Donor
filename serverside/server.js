const http=require("http")
const fs=require("fs")
const url=require("url")
const queryString=require("querystring")
const PORT=3001
const app=http.createServer(async(req,res)=>{
    const path=url.parse(req.url);
    console.log(path);



    if (path.pathname == "/") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/pages/index.html"))
    }

    else if (path.pathname == "/css/index.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(fs.readFileSync("../clientside/css/index.css"))
    }

    else if (path.pathname == "/images/man.webp"){
        res.writeHead(200, { "Content-Type": "image/webp" })
        res.end(fs.readFileSync("../clientside/images/man.webp"))
    }

    else if (path.pathname == "/pages/Addemploye.html"){
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/pages/Addemploye.html"))
    }

    else if (path.pathname == "/css/Add.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(fs.readFileSync("../clientside/css/Add.css"))
    }

    else if (path.pathname == "/pages/details.html"){
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/pages/details.html"))
    }

    else if (path.pathname == "/css/details.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(fs.readFileSync("../clientside/css/details.css"))
    }

    else if (path.pathname == "/pages/edit.html"){
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(fs.readFileSync("../clientside/pages/edit.html"))
    }

    else if (path.pathname == "/css/edit.css") {
        res.writeHead(200, { "Content-Type": "text/css" })
        res.end(fs.readFileSync("../clientside/css/edit.css"))
    }





})
app.listen(PORT)
