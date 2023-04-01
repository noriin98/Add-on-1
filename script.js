let osloElement = document.querySelector ("#oslo");
let osloDateElement = document.querySelector("#dato");
let osloTimeElement = document.querySelector("#tid");
let osloTime = moment().tz("Europe/Oslo");

osloDateElement.innerHTML = osloTime.format("MMMM Do YYYY");
osloTimeElement.innerHTML = osloTime.format("HH mm ss");
