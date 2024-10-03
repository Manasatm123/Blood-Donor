
async function getEmpolyees() {
    const res = await fetch("http://localhost:3001/getemployes")
    console.log(res);
    const data = await res.json()
    console.log(data)


    str = ``
    data.map((dt,index) => {
        console.log(dt)

    str+=`
        <div class="card" id="card">

     <div class="card-image">
            <img src="../images/man.webp" alt="Employee">
        </div>
        <div>
        <div class="card-content">
            <div class="employee-details">
                <div id="id" name="id">Employee Id :${dt.id}</div>
                <div id="name" name="name">Name :${dt.name}</div>
                <div id="designation" name="designation">Designation :${dt.designation} </div>
            </div>
        </div>
        
        <div class="card-action"><a href="../pages/details.html?id=${index}">
            <button class="info-btn">INFO</button></a>
        </div>
        </div> <br> 
        </div>
        `        
    })

    document.getElementById("one").innerHTML=str
}


getEmpolyees()



