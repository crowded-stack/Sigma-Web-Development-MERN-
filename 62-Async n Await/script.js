

// function getData(){
//     return new Promise(function(resolve, reject){
//         if (Math.random() < 0.5){
//             setTimeout(function(){
//                 resolve([1,3,4,5]);
//             }, 3000);
//         }else {
//             reject("Something went wrong!")
//         }
//     });
// }

// let data = getData();
// console.log(data);
// data.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })
// console.log("data processed");


// async function getData() {
//     return new Promise(function(resolve, reject){
//                 if (Math.random() < 0.5){
//                     setTimeout(function(){
//                         resolve([1,3,4,5]);
//                     }, 3000);
//                 }else {
//                     reject("Something went wrong!")
//                 }
//             });
// }



// const  getData= async () => {
//     return (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()
     
// }
// async function main() {
    
//     console.log("Data loading");
//     try {
//         let data = await getData()

//         console.log(data);
//         console.log("data processed");
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// main()

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
        })
        .catch(error => console.error('Error:', error));
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data));
