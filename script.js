const key = '13d62906d61f50af76203e587f44bd37'

function clickbtn() {
    const city = document.querySelector(".input-city").value
    searchcity(city)
}

async function searchcity(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    showDados(dados)
    console.log(dados)
}

function showDados(dados){
    document.querySelector(".text-city").innerHTML = "Tempo em " +dados.name
    document.querySelector(".qtd-temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-weather").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = dados.main.humidity + "% de umidade"
    document.querySelector(".img-weather").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}