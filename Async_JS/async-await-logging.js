
import { setTimeout } from "node:timers/promises";

async function logAfterMs(message, ms) {
    await setTimeout(ms);
    console.log(message);
}

async function maybeLogAfterMs(message, ms) {
    const errorChance = Math.random();

    const isError = Math.random() < errorChance;
    if (isError) throw new Error("Something went wrong");
    await setTimeout(ms);
    console.log(message);

    return errorChance;
}


async function run() {
    try {
        await logAfterMs("1", 0);
        await logAfterMs("2", 1);
        const errorChance = await maybeLogAfterMs("3", 10);
        if (errorChance > 0.8) {
            await logAfterMs("4: This is very rare!", 5);
        } else {
            await logAfterMs("4: This is very common!", 5);
        }
        await Promise.all([logAfterMs("5", errorChance*1_000),
        logAfterMs("Hi 5", 5),
        logAfterMs("Take 5", 6)])
    } catch (err) {
        console.log(err);
    }
}

run();


