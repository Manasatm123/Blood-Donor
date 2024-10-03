let url=window.location.href;
let urlParams = new URLSearchParams(url.split("?")[1])
let id = urlParams.get("id");
let data;
console.log(id);


async function getedit() {
    const res = await fetch ("http://localhost:3001/getedit")
    console.log(res);
    const data=await res.json()
    console.log(data[id]);
    datas=data[id]
    str=``
    str+=`
     <div class="deatails">
            

            <div class="left">
                <label for="employee-id">Employee ID</label>
                <input type="text" id="employee-id"  name="employee-id" value="${datas.id}">

                <label for="employee-name">Name</label>
                <input type="text" id="employee-name" name="employee-name" value="${datas.name}">

                <label for="designation">Designation</label>
                <input type="text" id="designation" name="designation" value="${datas.designation}">

                <label for="salary">Salary</label>
                <input type="text" id="salary" name="salary" value="${datas.salary}">

                <label for="experience">Experience</label>
                <input type="text" id="experience" name="experience" value="${datas.experience}">

                <label for="email">Email</label>
                <input type="email" id="email" name="email" value="${datas.email}">

                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value="${datas.phone}">
            </div>
        </div>
        <div class="button">
            
            <button onclick="save('${datas._id}')">SAVE</button>
        </div> `
        document.getElementById('container').innerHTML=str
        
    
    
}

async function save(a) {
    console.log(a);

    const id=document.getElementById(`employee-id`).value
    const name = document.getElementById(`employee-name`).value;
    const designation = document.getElementById(`designation`).value;
    const salary = document.getElementById(`salary`).value;
    const experience = document.getElementById(`experience`).value;
    const email = document.getElementById(`email`).value;
    const phone = document.getElementById(`phone`).value;




    console.log(name,designation,salary,experience,phone,email);
    const data = { a, id,name, designation, salary, experience, phone, email,};

    const res=await fetch(`http://localhost:3001/update`,{
        method:"PUT",
        headers:{"Content-Type":"text/json"},
        body:JSON.stringify(data)
    })
    
    if (res.status==200) {
        getedit()
        window.location.href="http://localhost:3001/"   

    }else{
        alert("failed")
    }
    
    }
    
    
    

getedit()