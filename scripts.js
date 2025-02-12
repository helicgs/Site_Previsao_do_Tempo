
const key = "78271928bd2f79d8557a41c5ce0e9b6f"

function colocarDadosNaTela(dados){
    console.log(dados)
   document.querySelector(".cidaade").innerHTML ="Tempo em " + dados.name
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C" // Math.floor()Arredondar cassas decimais
   document.querySelector(".texto_previsao").innerHTML = dados.weather[0].description
   document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
   document.querySelector(".img_previsao").src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
   
}

async function busacarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueNoBotao(){
    const cidade = document.querySelector(".input_cidade").value

    busacarCidade(cidade)

}