alert("jkj")

async function getDonors(){
    const res=await fetch("http://localhost:3000/getdonors")
    console.log(res);
}

getDonors()
    