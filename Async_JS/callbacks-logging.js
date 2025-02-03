
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
    const errorChance = Math.random();

    setTimeout(() => {
        try {
            maybeLog(message, errorChance);
            done(null, errorChance);
        } catch (err) {
            done(err);
        }
        
    }, ms);

}

logAfterMs("1", 0, ()=> {
    logAfterMs("2", 1, ()=>{
        maybeLogAfterMs("3", 10, (err, errorChance)=>{
            if (err) {
                console.log(err);
            } else {
                if (errorChance > 0.8) {
                    console.log("4: This is very rare!");
                } else {
                    console.log("4: This is very common!");
                }
                logAfterMs("5", errorChance*1_000, ()=>{})
                logAfterMs("Hi five", 5, ()=>{});
                logAfterMs("Take five", 6, ()=>{});
            }
        })
    })
});


