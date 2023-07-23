const API_KEY = "d0613a88690227f4534eeb2390d638b2";

function onGeoOk(position){
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    console.log(`you live in ${lat} ,${lon} `);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url);
}

function onGeoError(){
    alert("Can't find you. No weather for you!🌨️");

} 
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

