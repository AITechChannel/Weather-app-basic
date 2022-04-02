var input = document.querySelector('.head input')
var city = document.querySelector('.loca span:first-child')
var country = document.querySelector('.loca span:last-child')
var time = document.querySelector('.time')
var tem = document.querySelector('.tem span:first-child')
var weather = document.querySelector('weather')
var oversee = document.querySelector('.oversee p')
var wind = document.querySelector('.wind p')
var cloud = document.querySelector('.cloud p')

function render() {
    var api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value.trim()}&appid=d78fd1588e1b7c0c2813576ba183a667`;
    console.log(input.value.trim())
    fetch(api)
    .then(res => {
        return res.json()
    })
    .then( function(data) {
        
        if(data.cod == 200) {
            console.log(data)
            tem.innerHTML = Math.round(data.main.temp - 273)
            city.innerHTML = data.name
            country.innerHTML = data.sys.country
            wind.innerHTML =data.wind.speed + '(m/s)'
            cloud.innerHTML = data.clouds.all
        } else {
            console.log("Err")
        }
    })
    
}
render()
input.addEventListener('keydown', function(e) {
    if(e.which == 13) {
        render()
    }
})