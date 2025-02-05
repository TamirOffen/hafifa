
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
            const errorChance = Math.random();
            setTimeout(() => {
                maybeLog(message, errorChance);
                resolve(errorChance);
            }, ms);
        } catch (err) {
            reject(err);
        }
    })
}


let chance;
logAfterMs("1", 0).then((result) => {
    return logAfterMs("2", 1);
})
.then((result) => {
    return maybeLogAfterMs("3", 10);
})
.then((errorChance) => {
    chance = errorChance;
    if(errorChance > 0.8) {
        return logAfterMs("4: This is very rare!", 5);
    } else {
        return logAfterMs("4: This is very common!", 5);
    }
})
.then(result => {
    logAfterMs("5", chance*1_000);
    logAfterMs("Hi 5", 5)
    logAfterMs("Take 5", 6)
})
.catch(err => {
    console.log(err);
})

