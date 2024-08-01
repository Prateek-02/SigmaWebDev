// async function always returns a promise.

// await pauses the execution of its surrounding async function until the promise is settled.

/*
async function hello(){
    console.log("hello");
}

hello();
*/


/*
async function getWeatherData(){
    await api(); // 1st call
    await api();
}

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    })
}

getWeatherData();
*/



function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        }, 2000);
    });
};


async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}


getAllData();