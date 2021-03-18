
const input = document.querySelector('input');

fetch('/', {
    method: 'POST',
    headers: {
        'Content-type': 'aplication/json',
        "Accept": "application/json"
    },
    body: JSON.stringify({
        country: input.value
    })
}).then(res => res.json()).then(data => {
    // setData(data);
    console.log(data);
})

// function setData(data){
//     console.log(data.country);
// }
