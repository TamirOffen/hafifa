
function logAfterMs(message, ms, done) {
    setTimeout(() => {
        console.log(message);
        done();
    }, ms);
}

logAfterMs("1", 0, () => {
    logAfterMs("2", 1, ()=>{
        logAfterMs("3", 10, ()=>{
            logAfterMs("4", 5, ()=>{
                logAfterMs("5", 0, ()=>{})
            })
        })
    }) 
});

