document.getElementById('donorForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log("form");

    name = document.getElementById('name').value,
        age = document.getElementById('age').value,
        phone = document.getElementById('phone').value,
        blood = document.getElementById('blood').value,
        gender = document.querySelector('input[name="gender"]:checked')?.value
    const res = await fetch('http://localhost:3002/api/add', {
        method: "POST",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify({ name, age, phone, blood, gender })
    })
    const data = await res.json()
    if (res.status == 201) {
        alert(data.msg)
        window.location.href=`../index.html`

    }
    else {
        alert(data.error)

    }

});


