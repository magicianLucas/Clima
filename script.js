const chave = "cebcd482eda57fa9a6714c1c2ba91885"
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q="

const linguagem = "&lang=pt_br"

const unidade =  "&units=metric"

const urlImagem = "https://openweathermap.org/img/wn/10d@2x.png"

let nomeCidade = document.getElementById('nomeCidade')
let btn_pesquisa = document.getElementById('btn_pesquisa')
let tituloCidade = document.getElementById('tituloCidade')
let temperatura = document.getElementById('temperatura')
let icone = document.getElementById('icone')
let umidade = document.getElementById('umidade')
let descricao = document.getElementById('descricao')



let url = apiWeather + "São Paulo" + chave + linguagem + unidade

async function buscarCidade(nomeCidade){
    url = apiWeather + cidade + chave + linguagem + unidade

    const response = await fetch(url)
    const objeto = await resposta.json()
    return objeto
}

async function exibirInfo(cidade){
    let infomacoes = await buscarCidade(cidade)
    tituloCidade.innerHTML = infomacoes.name 
    temperatura.innerHTML = infomacoes.main.temp + '°C'
    umidade.innerHTML = infomacoes.main.humidity + '%'

    descricao.innerHTML = infomacoes.weather[0].description
    icone.src = urlImagem + infomacoes.weather[0].icon + '@2x.png'

}
async function pesquisar (){
    let cidade = inputCidade.value
    exibirInfo(cidade)
}

btn_pesquisa.addEventListener('click', pesquisar)

let viena = document.getElementById('Viena')
let zurique =  document.getElementById('Zurique')
let Recife = document.getElementById('Recife')
let JoaoPessoa = document.getElementById('JoaoPessoa')
let Vancouver= document.getElementById('Vancouver')
let Natal = document.getElementById('Natal')
let = document.getElementById('Copenhague')
let = document.getElementById('Maceio')