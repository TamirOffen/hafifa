
function logAfterMs(message, ms, done) {
    setTimeout(() => {
        console.log(message);
        done();
    }, ms);
}

function maybeLog(message, errorChance) {
    const isError = Math.random() < errorChance;
    if (isError) throw new Error("Something went wrong");
    console.log(message);
}

function maybeLogAfterMs(message, ms, done) {
    // const errorChance = Math.random();

    setTimeout(() => {
        try {
            maybeLog(message, 0.5);
            done();
        } catch (err) {
            console.log(err);
        }
        
    }, ms);

}

logAfterMs("1", 0, ()=> {
    logAfterMs("2", 1, ()=>{
        maybeLogAfterMs("3", 10, ()=>{
            logAfterMs("4", 5, ()=>{
                logAfterMs("5", 0, ()=>{})
            })
        })
    })
});


