
function logAfterMs(message, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve('finished');
        }, ms);
    })
}

function maybeLog(message, errorChance) {
    const isError = Math.random() < errorChance;
    if (isError) throw new Error("Something went wrong");
    console.log(message);
}

function maybeLogAfterMs(message, ms) {
    return new Promise((resolve, reject) => {
        try {
            maybeLog(message, 0.5);
            resolve("finished");
        } catch (err) {
            reject(err);
        }
    })
}

logAfterMs("1", 0).then((result) => {
    return logAfterMs("2", 1);
})
.then((result) => {
    return maybeLogAfterMs("3", 10);
})
.then((result) => {
    return logAfterMs("4", 5);
})
.then(result => {
    console.log("5");
})
.catch(err => {
    console.log(err);
})

