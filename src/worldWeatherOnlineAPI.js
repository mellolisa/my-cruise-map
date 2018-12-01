/*
const api =
    "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=6813e0a49ba743e781343727183011";

*/

/* Test Broken API */
const api =
    "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=6e0a49ba743e781343727183011";



const headers = {
    Accept: "application/json"
};

export const get = (name, callBack) =>
    fetch(`${api}&q=${name}&num_of_days=1&format=json`, {
        headers
    })
    .then(res => {
        if (!res.error) {
            return res.json();
        } else {
            console.log(res.error);
        }
    })
    .catch(function(error) {
        console.log("Error loading weather data!");
        callBack();
        console.log(callBack);

        return error;
    });