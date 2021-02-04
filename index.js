// let a = 10

// handle(value => {
//     console.log(value)
// })

// function handle(callback){
//     setTimeout(() => {
//         a = 5
//         callback(a)
//     },1000)
// }
const request = require("request");


// function getTempCity(cityname , callback){
//     const url = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityname}`

//     request(url , {json : true}, function (error, response, body) {
//        if(error) return callback(error)
//        if(body.cod === "404") return callback(body.message)
//        return callback(null , body.main.temp)
//     });
// }

// getTempCity("Hanoi", (error , temp) => {
//     console.log(error || temp)
// })

// function getTempCity(cityname){
    // return new Promise((resolve , reject) => {
    //     const url = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityname}`

    //     request(url , {json : true}, function (error, response, body) {
    //        if(error) return reject(error)
    //        if(body.cod === "404") return reject(body.message)
    //        return resolve(body.main.temp)
    //     });
    // })
    
// }

// getTempCity("12312321")
// .then(temp => console.log(temp))
// .catch(error => console.log(error))

function cong(a , b){
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`

        request(url , {json : true}, function (error, response, body) {
           if(error) return reject(error)
           if(!body.success) return reject(body.message)
           return resolve(body.message)
        });
    })
}

function tru(a , b){
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`

        request(url , {json : true}, function (error, response, body) {
           if(error) return reject(error)
           if(!body.success) return reject(body.message)
           return resolve(body.message)
        });
    })
}
tru(1,1)
.then(tong => console.log(tong))
.catch(error => console.log(error))