
import { setTimeout } from "node:timers/promises";

async function logAfterMs(message, ms) {
    await setTimeout(ms);
    console.log(message);
}

async function maybeLogAfterMs(message, ms, errorChance) {
    const isError = Math.random() < errorChance;
    if (isError) throw new Error("Something went wrong");
    await setTimeout(ms);
    console.log(message);
}


async function run() {
    try {
        await logAfterMs("1", 0);
        await logAfterMs("2", 1);
        await maybeLogAfterMs("3", 10, 0.5);
        await logAfterMs("4", 5);
        await logAfterMs("5", 0);
    } catch (err) {
        console.log(err);
    }
}

run();


