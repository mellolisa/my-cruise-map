const api =
    "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=6813e0a49ba743e781343727183011";

const headers = {
    Accept: "application/json"
};

export const get = name =>
    fetch(`${api}&q=${name}&num_of_days=1&format=json`, {
        headers
    })
    .then(res => res.json())
    .then(data => data)
    .then(data => console.log(data))
    .catch(function(error) {
        console.log("Error loading weather data!");
        return error;
    });