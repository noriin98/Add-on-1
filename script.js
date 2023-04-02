function updateTime() {	
let osloElement = document.querySelector("#oslo");	
if (osloElement) {	
let osloDateElement = document.querySelector(".dato");	
let osloTimeElement = document.querySelector(".tid");	
let osloTime = moment().tz("Europe/Oslo");	
osloDateElement.innerHTML = osloTime.format("MMMM Do YYYY");	
osloTimeElement.innerHTML = osloTime.format("HH mm ss");	
}	
}	
 function updateCity(event) {	
let cityTimeZone = event.target.value;	
if (cityTimeZone === "location") {	
    cityTimeZone = moment.tz.guess();	
}	
let cityName = cityTimeZone.replace("_", " ").split("/")[1];	
let cityTime = moment().tz(cityTimeZone);	
let citiesElement = document.querySelector(".city");	
citiesElement.innerHTML = `	
<div class="city">	
        <div class="row">	
            <div class="col-6">	
                <h2>${cityName}</h2>
                <br>	
                <p class="dato">${cityTime.format("MMMM Do YYYY")}</p>	
            </div>	
            <div class="col-6">	
                <h2 class="tid">${cityTime.format("HH mm ss")}</h2>	
            </div>	
        </div>	
        </div>`;	
 }	


let citiesSelectElement = document.querySelector("#cities");	
citiesSelectElement.addEventListener("change", updateCity);	
setInterval("updateCity", 1000);