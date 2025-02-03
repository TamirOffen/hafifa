
function logAfterMs(message, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve('finished');
        }, ms);
    })
}

logAfterMs("1", 0).then((result) => {
    return logAfterMs("2", 1);
})
.then((result) => {
    return logAfterMs("3", 10);
})
.then((result) => {
    return logAfterMs("4", 5);
})
.then(result => {
    console.log("5");
})

