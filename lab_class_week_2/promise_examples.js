// Promise Examples

function makePromise(a) {
    var p = new Promise((resolve, reject) => {
        if (a > 10) {
            resolve({ status: true, message: `Promise resolved: ${a}` });
        } else {
            const obj = {status: false, message: `Promise rejected: ${a}`}
            reject(obj);
        }
    });
    return p;
}

// Promise Example 1
makePromise(10).then((result) => {
    console.log(`Status: ${result.status}, ${result.message}`);
}, (error) => {
    console.log(`Status: ${error.status}, ${error.message}`);
}).finally(() => {
    console.log('Finally block')
});

// Promise Example 2
makePromise(20).then((result) => {
    console.log(`Status: ${result.status}, Message: ${result.message}`);
}).catch((error) => {
    console.log(`Status: ${error.status}, Message: ${error.message}`);
});

// Promise Example 3
console.log('Promise Example3');
var p = makePromise(30)
p.then((result) => {
    console.log(result.status);
    return result;
}).then(result => {
    // console.log(`RES : ${result}`);
    console.log(result.status);
    console.log(result.message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally block')
})

//Promise Example 4
Promise.all([makePromise(10), makePromise(20), makePromise(30)]).then((res) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally block')
})
