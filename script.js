const key = '13d62906d61f50af76203e587f44bd37'

function clickbtn() {
    const city = document.querySelector(".input-city").value
    searchcity(city)
}

async function searchcity(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(repost => repost.json())
    console.log(dados)
}