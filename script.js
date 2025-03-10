
const countryButton = document.getElementById("countryForm");
const countryInput = document.getElementById("CountryInput");
countryButton.addEventListener('submit', getCountryDetails);

function getCountryDetails(event) {
    event.preventDefault();
    
    const input = countryInput.value.trim(); 
    console.log(input);
    let details = getCountryName(input).value;
    
    
    //const 
    
    

 }

async function getCountryName(name) {
    const url = "https://restcountries.com/v3.1/name/"+name;
    let to;
    try {
      const response = await fetch(url);
      const json = await response.json();
      //to = json
      //document.getElementById("").innerHTML= json
      console.log(json)
      const len =json[0].borders.length
      let list = document.getElementById("info");
      
      let capital = document.createElement("li")
      capital.innerText = "Capital: " + json[0].capital;
      let population = document.createElement("li")
      population.innerText = "Population: " + json[0].population;
      let flag = document.createElement("img")
      let region = document.createElement("li")
      region.innerText = "Region " + json[0].region;
      flag.src= json[0].flags.png;
      flag.style.width = '400px'
      list.append(capital);
      list.append(population);
      list.append(region)
     list.append(flag);
      for(let i = 0; i<len;i++){
        getNeighbour(json[0].borders[i]);
      }
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
        
    } catch (error) {
      console.error("Error",Error);
      
    }
    
  }
  
async function getNeighbour(name) {
    const url = "https://restcountries.com/v3.1/name/"+name;
    let to;
    try {
      const response = await fetch(url);
      const json = await response.json();
      //to = json
      //document.getElementById("").innerHTML= json
      console.log(json)
      const len =json[0].borders.length
      let list = document.getElementById("adjacentCountriesList");
      
      let capital = document.createElement("li")
      capital.innerText = json[0].name.common;
      
      let flag = document.createElement("img")
      flag.src = json[0].flags.png;
      list.append(capital);
      list.append(flag);
     
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
        
    } catch (error) {
      console.error("Error",Error);
      
    }
  }  