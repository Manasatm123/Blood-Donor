const url=window.location.href;
console.log(url);
const urlParams = new URLSearchParams(url.split("?")[1]);
console.log(urlParams);
const id=urlParams.get("id")
console.log(id);

async function getDonors() {
    const res= await fetch(`http://localhost:3002/api/getdonor/${id}`)
    const donor=await res.json();
    console.log(donor);
    document.getElementById("frm").innerHTML=`

                <div class="input-field">
                    <label for="name">Name</label>
                    <input class="txtinput" type="text" name="name" id="name" value="${donor.name}">
                </div>
                <div class="input-field">
                    <label for="email">Age</label>
                    <input class="txtinput" type="age" name="age" id="age" value="${donor.age}">
                </div>
                <div class="input-field">
                    <label for="phone">Phone</label>
                    <input class="txtinput" type="text" name="phone" id="phone" value="${donor.phone}">
                </div>
                <div class="input-field">
                    <label for="blood">Blood Group</label>
                    <input class="txtinput" type="text" name="blood" id="blood" value="${donor.blood}">
                </div>
                <div class="input-field">
                    <label>Gender</label>
                    <div class="gender-options" value="${donor.gender}">
                        <input class="inbtn" type="radio" name="gender" value="male" id="male"  >
                        <label for="male">Male</label>
                        <input class="inbtn" type="radio" name="gender" value="female" id="female" >
                        <label for="female">Female</label>
                        <input class="inbtn" type="radio" name="gender" value="other" id="other" >
                        <label for="other">Other</label>
                    </div>
                </div>
                <div class="submit-btn">
                    <button onclick="update()">SAVE</button>
                </div>`

    
    
}

getDonors()

async function update(){
    name = document.getElementById('name').value,
        age = document.getElementById('age').value,
        phone = document.getElementById('phone').value,
        blood = document.getElementById('blood').value,
        gender = document.querySelector('input[name="gender"]:checked')?.value
        console.log(name,age,phone,blood,gender);

    

    const res = await fetch(`http://localhost:3002/api/update/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, phone, blood, gender })
    });
    
        console.log(res);

        const data=await res.json();
        res.status==201?alert(data.msg):alert(data.error)
        window.location.href=`../index.html`

        
}
