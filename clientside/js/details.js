let url=window.location.href;
let urlParams = new URLSearchParams(url.split("?")[1])
let id = urlParams.get("id");
let data;
console.log(id);


async function getdetails() {
    const res = await fetch ("http://localhost:3001/getdetails")
    console.log(res);
    const data=await res.json()
    console.log(data[id]);
    datas=data[id]
    str=``
    str+=`
    <div class="deatails">
            <div class="right">
                <img src="../images/man.webp" alt="Empolye">
            </div>

            <div class="left">
                <div id="id" name="id">Employe ID : ${datas.id}</div>
                <div id="name" name="name"> Name : ${datas.name}</div>
                <div id="designation" name="designation">Designation : ${datas.designation}</div>
                <div id="salary" name="salary">Salary : ${datas.salary}</div>
                <div id="experience" name="experience">Experience : ${datas.experience}</div>
                <div id="email" name="email">Email : ${datas.email}</div>
                <div id="phone" name="phone">Phone : ${datas.phone}</div>

            </div>
        </div>
        <div class="button">
            <a href="../pages/index.html"><button>Back</button></a>
            <a href="../pages/edit.html?id=${id}"><button>Edit</button></a>
            <button onclick="dlt('${datas._id}')">Delete</button>
        </div>`

        document.getElementById("container").innerHTML=str;

}

async function dlt(id) {
    x=confirm("Do you want to delete")
    if(x){
        let res=await fetch("http://localhost:3001/delete",{
            method:"DELETE",
            headers:{"Content-Type":"text/plain"},
            body:id
        })
        if (res.status==200){
            window.location.href="http://localhost:3001/"
            getdetails()    
        }
        else{
            alert("failed")
        }
    }

    
}
getdetails()