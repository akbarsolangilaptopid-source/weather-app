var field = document.getElementById("field")
var temper = document.getElementById("temper")
var city = document.getElementById("cityname")
var image = document.getElementById("image")
var like = document.getElementById("like")
var mini = document.getElementById("mini")
var max = document.getElementById("maxi")
var humid = document.getElementById("humidity")
var wind1 = document.getElementById("wind")
var cloud1 = document.getElementById("cloud")
// var jumpscare = document.getElementById("jumpscare")


function search(){

var url = `https://api.openweathermap.org/data/2.5/weather?q=${field.value}&appid=4fcd41771cc91187db1651ddcc10916f`

console.log(url)

fetch(url)

.then((success) => {
return success.json()

})

.then((data) => {
   
var temp = (Math.floor(data.main.temp -273.15))
var flike = (Math.floor(data.main.feels_like -273.15))
var minimum = (Math.floor(data.main.temp_min -273.15))
var maximum = (Math.floor(data.main.temp_max -273.15))
var hum = (data.main.humidity)
var wind = (data.wind.speed)
var cloud = (data.clouds.all)

document.body.style.backgroundImage = "none"
document.body.style.backgroundColor = "rgb(57, 186, 245)"
 
var cname = (data.name)
console.log(cname)

    image.style.display = "block";


if(temp <= 0){
   image.src = "https://tse2.mm.bing.net/th/id/OIP.Vykre8n44qgaXwhLDDhBEwHaGl?rs=1&pid=ImgDetMain&o=7&rm=3"

document.body.style.backgroundImage = "url(https://tse2.mm.bing.net/th/id/OIP.Vykre8n44qgaXwhLDDhBEwHaGl?rs=1&pid=ImgDetMain&o=7&rm=3)" 
}

  
else if(temp <= 11){
   image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqCJzNaX47bzMRmUphXuGsM5_5dMZY8KVng&s"

   document.body.style.backgroundColor = "rgb(57, 186, 245)"
}
else if(temp <= 25){
   image.src='https://png.pngtree.com/png-vector/20221225/ourmid/pngtree-weather-icon-png-image_6535514.png'

   document.body.style.backgroundColor = "rgb(57, 186, 245)"

}
else if(temp >= 40){
    image.src = "https://tse2.mm.bing.net/th/id/OIP.KgVynLeqLcKdlKuSVWhUjQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"

    document.body.style.backgroundColor = "red"
}

else if(temp >= 45){
    image.src = "https://tse2.mm.bing.net/th/id/OIP.BHQBVCdcXpeqBQBK_ePF4QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"

    document.body.style.backgroundColor = "red"
}


else{
 image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwKIB2-qXIwal8-d5kM92XjSy9_cxvmHRpA&s'

 document.body.style.backgroundColor = "rgb(57, 186, 245)"
  
}


temper.innerText = temp + " 'C"

city.innerText = cname

like.innerText = `Feels like: ${flike}C`

mini.innerText = `Min Temp: ${minimum}C`

max.innerText = `Max Temp: ${maximum}C`

humid.innerText = `Humidity: ${hum}%`

wind1.innerText = `Wind: ${wind}/KM`

cloud1.innerText = `Cloud: ${cloud}%`

})

.catch((err) => {

alert("Incorrect value")

})


}