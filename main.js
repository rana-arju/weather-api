const searchTem = () => {
    const cityName = document.getElementById("city_name").value;
    const Api_KEY = `f3f9682307a5301fed413db0ea0ab714`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Api_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => displayData(data))
}
const displayData = data => {
    document.getElementById("city").innerText = data.name;
    document.getElementById("tem").innerText = data.main.temp;
    console.log(data);
}