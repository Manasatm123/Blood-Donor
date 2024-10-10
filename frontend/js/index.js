async function getDonors() {
    const res = await fetch("http://localhost:3002/api/getdonors");
    if (res.status!=200) {
        console.error("Failed to fetch donors:", res.statusText);
        return;
    }
    
    const data = await res.json();
    console.log(data)
    let str = ``;
    
    data.forEach((dt) => {
        str += `
        <div class="box">
            <div class="box1" id="name-${dt._id}">${dt.name}</div>
            <div class="box1" id="age-${dt._id}">${dt.age}</div>
            <div class="box1" id="phone-${dt._id}">${dt.phone}</div>
            <div class="box1" id="blood-${dt._id}">${dt.blood}</div>
            <div class="box1" id="gender-${dt._id}">${dt.gender}</div>
            <div class="button">
                <a href="../pages/edit.html?id=${dt._id}">
                    <button class="butn" style="background-color: rgb(54, 85, 195); color: white;">Edit</button>
                </a>
                <button class="butn" style="background-color: rgb(203, 44, 46); color: white;" onclick="deleteDonor('${dt._id}')">Delete</button>
            </div>
        </div>`;
    });
    

    document.getElementById('container1').innerHTML = str;
}

getDonors();

async function deleteDonor(id) {
    const res = await fetch(`http://localhost:3002/api/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });

    const data = await res.json();
    if (res.status === 200) {
        alert(data.msg);
    } else {
        alert(data.error);
    }
    
}



