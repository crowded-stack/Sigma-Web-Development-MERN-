
setTimeout(() => {
    console.log('setTimeout');
}, 3000);

let a = 2;

// let promise = new Promise((resolve, reject) => {
//     if (Math.random() < 0.4 )
//         setTimeout(() => {
//             resolve("data");
//         }, 3000);
//     else
//         reject("Failed");
// });


// promise.then( data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// }).finally(() => {
//     console.log("Connection closed!");
// })


// let p1 = new Promise((resolve, reject) => {
//     if (Math.random() < 0.4)
//         setTimeout(() => {
//             resolve(true);
//         }, 3000);
//     else
//         reject(false);
// });

// let p2 = 

// promise.then((result) => {
//     console.log(result);
//     return result;
// }).catch(result => {
//     console.log(result);
// });

// p1.then((resul) => {
//     if (resul) {
//         return new Promise((resolve, reject) => {
//             if (Math.random() < 0.4)
//                 setTimeout(() => {
//                     resolve("data 2");
//                 }, 3000);
//             else
//                 reject("Failed 2");
//         });
//     }
//     console.log("Failed");
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log("errror " + err);
// });


let p11 = new Promise((resolve, reject) => {
    setTimeout(reject, 300, [1,2,3,4,5])
});

let p12 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, ['a', 'b', 'c'])
});

let p15 = new Promise((resolve, reject) => {
    setTimeout(reject, 400, ['d', 'e', 'f'])
});


const abfn = (clbk1, clbk2) => {

}

abfn(() => {
    return 'clbk1';
}, () => {
    return 'clbk12';
})

// let p13 = new Promise((resolve, reject) => {
//     if (Math.random() < 0.4)
//         setTimeout(() => {
//             resolve(true);
//         }, 3000);
//     else
//         reject(false);
// });

// let p14 = new Promise((resolve, reject) => {
//     if (Math.random() < 0.4)
//         setTimeout(() => {
//             resolve(true);
//         }, 3000);
//     else
//         reject(false);
// });

// Promise.all([p11, p12, p13, p14]).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.allSettled([p11, p12, p13, p14]).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

// Promise.resolve("p11").then((result) => {
//     console.log(result);
// })

Promise.race([p11, p12, p15]).then((result) => {
    console.log(result);
})

// Promise.any([p11, p12, p15]).then((result) => {
//     console.log(result);
// })