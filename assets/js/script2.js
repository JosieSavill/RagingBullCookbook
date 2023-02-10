var apiKey  = "e03b14a13a81827b9aeafad59274a1cc"




function getCoords() {

    var searchCity = "Scottsdale"//document.querySelector("#search-input").value;
    var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=${apiKey}`

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

     var apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
     var currentWeather 
     fetch(apiUrl)
        .then(function (res) { 
            return res.json()
        })

        .then(function (data) {

           
            console.log(data.list)
            for(let i = 0; i < data.list.length; i++){
                let checkHour = parseInt( data.list[i].dt_txt.split(" ")[1].split(":")[0] ); //10:00:
                console.log(checkHour, currentHour, (Math.abs(checkHour - currentHour))  )

                
                if( (Math.abs(checkHour - currentHour)) < 3){
                    //console.log("winner", data.list[i])
                    currentWeather =  data.list[i];

                }
            }


           
        })

} 

getCoords();