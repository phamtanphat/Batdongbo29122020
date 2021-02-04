let a = 10

handle(value => {
    console.log(value)
})

function handle(callback){
    setTimeout(() => {
        a = 5
        callback(a)
    },1000)
}