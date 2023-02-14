var apiKey  = "e03b14a13a81827b9aeafad59274a1cc"




function getCoords() {

    var searchCity = document.querySelector(".citySearch").value;
    var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=${apiKey}`

    fetch(apiUrl)
        .then(function (res) { 
            return res.json()
        })

        .then(function (data) {
           console.log(data)
           console.log("lat", data[0].lat)
           var lat = data[0].lat;
           var lon = data[0].lon;
           getWeather(lat, lon); 
           
        })
}


function getWeather(lat, lon) {

                //dt_txt: "2023-02-10 18:00:00"
            var currentHour = parseInt( dayjs().format("HH") ) // gets current hour

console.log(currentHour)

     //var apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
     var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
     var currentWeather 
     fetch(apiUrl)
        .then(function (res) { 
            return res.json()
        })

        .then(function (data) {

           var currentTempEl = document.querySelector(".currentTemp");
           currentTempEl.textContent="Current Temperature: " + data.main.temp + " ℉"
            console.log(data.main.temp)
           


           
        })

} 


var cityBtn = document.querySelector(".citySearchBtn") 

cityBtn.addEventListener("click", function(){

    getCoords();

})
