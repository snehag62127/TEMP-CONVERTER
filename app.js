const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const clearBtn = document.querySelector("#clear-btn");
const tempType = document.querySelector("#temp-type");

convertBtn.addEventListener("click", () => {
  convertTemperature();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertTemperature() {
  let inputValue = degree.value;
  inputValue=Number.parseFloat(inputValue)
  
  setTimeout( () => {
    if(degree.value === ""){
      convertBtn.addEventListener('click',()=>{
        celsiusField.innerHTML=""
      })
    }
    else if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      const FahrenheitToKelvin = (inputValue - 32) * (5 / 9) + 273.15;
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(2)} &#8451    and    ${FahrenheitToKelvin.toFixed(2)} &#8490`;
    } 
    else if (tempType.value === "kelvin") {
      const KelvinToCelsius = (inputValue - 273.15);
      const KelvinToFahrenheit = (inputValue - 273.15) * (9 / 5) + 32;
      celsiusField.innerHTML = `${KelvinToCelsius.toFixed(2)} &#8451    and    ${KelvinToFahrenheit.toFixed(2)} &#8457`;
    }
    else if (tempType.value === "celcius") {
      const CelciusToFahrenheit = (inputValue * (9 / 5) + 32);
      const CelsiusToKelvin = (inputValue + 273.15);
      console.log(CelciusToFahrenheit,CelsiusToKelvin)
      celsiusField.innerHTML = `${CelciusToFahrenheit.toFixed(2)} &#8457    and    ${CelsiusToKelvin.toFixed(2)} &#8490`;
    }
  }, 1000)
}

clearBtn.addEventListener('click',()=>{
  degree.value="";
  tempType.value="";
  celsiusField.innerHTML=""
})