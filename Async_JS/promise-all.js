import { writeFile } from "node:fs/promises";
import { join, basename } from "node:path";
import { access, mkdir } from "node:fs/promises";
// import { errors } from "undici-types";  // gives module not found error

const downloadText = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to download "${url}" - ${res.statusText}`);
    }
    const text = await res.text();
    const filePath = join("downloads", basename(url));
    await writeFile(filePath, text);
};

const downloadTextFiles = async (urls) => {
    const res_promise = await Promise.all(
        urls.map( async (url) => {
            // console.log(`before ${url}`);
            const pr = await fetch(url);
            console.log(`Starting download - ${url}`);
            return pr;
         })
    )
    for (const res of res_promise) {
        if (!res.ok) {
            throw new Error(`Failed to download "${res.url}" - ${res.statusText}`);
        }
        const text = await res.text();
        console.log(`Finished download - ${res.url}`);
        const filePath = join("downloads", basename(res.url));
        await writeFile(filePath, text);
    }
    console.log("Finished downloading all files");
    /*  why is this bad?
        try {
        res_promise.forEach(async (res) => {
            if (!res.ok) {
                throw new Error(`Failed to download "${res.url}" - ${res.statusText}`);
            }
            const text = await res.text();
            const filePath = join("downloads", basename(res.url));
            await writeFile(filePath, text);
        })
    } catch (error) {
        throw new Error("Promise failed")
    }
    */
}


//----------------------------

const files = ["sample1.txt", "sample2.txt", "sample3.txt"];

const urls = files.map(
  (fileName) => `https://filesamples.com/samples/document/txt/${fileName}`
);

await access("downloads").catch(() => mkdir("downloads"));
await downloadTextFiles(urls);

