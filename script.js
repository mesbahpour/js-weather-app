let cityName = document.getElementById("cityName");
let form = document.querySelector("form");
let select = document.querySelector("select");
let description = document.getElementById("description");
let temp = document.getElementById("temp");
let card = document.getElementById("card");
let countryName = document.getElementById("countryName");
let weatherImg  = document.getElementById("weather-img");
let loader = document.getElementById("loader-container");

let countryList = [];

fetch("https://countriesnow.space/api/v0.1/countries/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    loader.style.display = 'none';
    for (let el of data.data) {
      countryList.push(el.country);
    }
    countryList.forEach((element) => {
      let option = document.createElement("option");
      option.innerHTML = element;
      select.appendChild(option);
  });

  select.addEventListener('change',e => {
    flag = true;
    loader.style.display = 'flex';
    cname = select.options[select.selectedIndex].text;
    
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=94e6cc601757d2f2fbdea1a57d9ac55a&units=metric`;
        
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            loader.style.display = 'none';
            card.style.display = 'flex';
            description.innerHTML = data.weather[0].main;
            countryName.innerHTML = cname;
            temp.innerHTML = data.main.temp+"° C";
            src = `./img/${data.weather[0].main}.svg`
            weatherImg.innerHTML = `<img width="100" height="100" class="icon" src= ${src}>`;

          });
        })

});






