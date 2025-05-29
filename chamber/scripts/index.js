import { footer } from "./footer.js";
import { navigation } from "./navigation.js";

navigation();
footer();

/*WEATHER TODAY*/
const info = document.querySelector("#weather-info");
const iconspan = document.querySelector("#icon");
const temp = document.createElement("h3");
const description = document.createElement("p");
const max_temp = document.createElement("p");
const min_temp = document.createElement("p");
const humidity = document.createElement("p");
const sunrise = document.createElement("p");
const sunset = document.createElement("p");
const icon = document.createElement("img");

iconspan.appendChild(icon);
info.appendChild(temp);
info.appendChild(description);
info.appendChild(max_temp);
info.appendChild(min_temp);
info.appendChild(humidity);
info.appendChild(sunrise);
info.appendChild(sunset);
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.052108567016836&lon=-77.05096891060207&appid=80fb88839baefdfeaa514a0ddd4f3b7a&units=metric';

async function apiFetch() {
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults1(data);
        } else{
            throw Error(await response.text());
        }
        
    } catch(error){
        console.log(error);
    }
}
apiFetch();

function displayResults1(data){
    temp.innerHTML = `${data.main.temp} &deg;C`;
    description.innerHTML = `${data.weather[0].description}`;
    max_temp.innerHTML = `Max Temp: ${data.main.temp_max} &deg;C`;
    min_temp.innerHTML = `Min Temp: ${data.main.temp_min} &deg;C`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    const sunrisehour = new Date(data.sys.sunrise * 1000);
    let rmaxh = sunrisehour.getHours().toString();
    let rmaxm = sunrisehour.getMinutes().toString().padStart(2, '0');
    sunrise.innerHTML = `Sunrise: ${rmaxh}:${rmaxm} am`;
    const sunsethour = new Date(data.sys.sunset *1000);
    let smaxh = sunsethour.getHours().toString().padStart(2,'0');
    let smaxm = sunsethour.getMinutes().toString().padStart(2,'0');
    sunset.innerHTML = `Sunset: ${smaxh}:${smaxm} pm`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    icon.setAttribute("src",iconsrc);
    icon.setAttribute("alt","weather icon");
    icon.setAttribute("loading","lazy");
}

/*WEATHER FORECAST*/
const todaytemp = document.querySelector("#today");
const tomorrowtemp = document.querySelector("#tomorrow");
const day_past_tomorrow = document.querySelector("#day-past-tomorrow");
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=-12.052108567016836&lon=-77.05096891060207&appid=80fb88839baefdfeaa514a0ddd4f3b7a&units=metric";

async function apiFetch2() {
    try{
        const response = await fetch(forecastURL);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults2(data);
        } else{
            throw Error(await response.text());
        }
        
    } catch(error){
        console.log(error);
    }
}
apiFetch2();

function displayResults2(data){
    todaytemp.innerHTML = `Tomorrow: <strong>${data.list[1].main.temp} &deg;C</strong>`;
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let tomday = new Date (data.list[9].dt_txt);
    tomorrowtemp.innerHTML = `${daysOfWeek[tomday.getDay()]}: <strong>${data.list[9].main.temp} &deg;C</strong>`;
    let tom2day = new Date (data.list[17].dt_txt);
    day_past_tomorrow.innerHTML = `${daysOfWeek[tom2day.getDay()]}: <strong>${data.list[17].main.temp} &deg;C</strong>`;
}

/*BUSINESSES*/
const businesses = document.querySelector("#businesses");
async function getCompaniesData() {
    try{
        const response = await fetch('data/members.json');
        if(response.ok){
            const data2 = await response.json();
            console.log(data2);
            displayCompanies(data2);
        } else{
            throw Error(await response.text());
        }
        
    } catch(error){
        console.log(error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
  getCompaniesData();
});
function displayCompanies(data){
    const filteredBusinesses = data.filter(b => b.membershipLevel > 1);

    const shuffled = filteredBusinesses.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    shuffled.forEach(business => {
        
            const div = document.createElement("div")
            const busname = document.createElement("h3");
            const logo = document.createElement("img");
            const infodiv = document.createElement("div")
            const phone = document.createElement("p");
            const address = document.createElement("p");
            const website = document.createElement("a");
            const membershiplevel = document.createElement("p");
            div.setAttribute("class","buscard");
            div.appendChild(busname);
            div.appendChild(logo);
            infodiv.appendChild(phone);
            infodiv.appendChild(address);
            infodiv.appendChild(website);
            infodiv.appendChild(membershiplevel);
            businesses.appendChild(div);
            div.appendChild(infodiv);

            busname.innerHTML = business.name;
            let logo_src = business.image;
            logo.setAttribute("src",logo_src);
            logo.setAttribute("alt",business.name);
            logo.setAttribute("loading","lazy");
            logo.setAttribute("width","150");
            logo.setAttribute("height","150");
            phone.innerHTML = `Phone: ${business.phone}`; 
            address.innerHTML = `Address: ${business.address}`;
            website.innerHTML = `<a href='${business.website}'>${business.name}</a>`;
            let levels = ['Bronze','Silver','Gold']
            membershiplevel.innerHTML = `Membership: <strong>${levels[business.membershipLevel-1]}</strong>`;
    }
    );
}
