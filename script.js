function updateTime() {	
let osloElement = document.querySelector(".by");	
if (osloElement) {	
let osloDateElement = document.querySelector(".dato");	
let osloTimeElement = document.querySelector(".tid");	
let osloTime = moment().tz("America/New_York");	
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

var select = document.querySelector("select");
var html = document.querySelector(".container");
html.style.backgroundSize = "cover";
html.style.backgroundRepeat = "no-repeat";

select.addEventListener("change", background);

function background() {
    var choice= select.value;

    if(choice === "location") {
        html.style.backgroundImage = "url(world.webp)";
        html.style.color = "White";

    }

    if(choice === "Asia/Karachi") {
        html.style.backgroundImage = "url(pakistan1.jpg)";
        html.style.color = "White";

    }
    if(choice === "Europe/Oslo") {
        html.style.backgroundImage = "url(oslo.jpg)";
        html.style.color = "White";
    }
    if(choice === "Africa/Johannesburg") {
        html.style.backgroundImage = "url(south-africa1.jpg)";
        html.style.color = "White";
    }
    if(choice === "America/Sao_Paulo") {
        html.style.backgroundImage = "url(brazil2.jpg)";
        html.style.color = "White";
    }
    if(choice === "America/New_York") {
        html.style.backgroundImage = "url(new-york.jpg)";
        html.style.color = "Black";
    }
    if(choice === "Australia/Sydney") {
        html.style.backgroundImage = "url(sydney.jpg)";
    }
}

updateTime();
let citiesSelectElement = document.querySelector("#cities");	
citiesSelectElement.addEventListener("change", updateCity);	
setInterval(updateCity, 1000);
setInterval(updateTime, 1000);