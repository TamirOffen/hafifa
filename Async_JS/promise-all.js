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
    const res_promise = await Promise.allSettled(
        urls.map( async (url) => {
            // console.log(`before ${url}`);
            const pr = await fetch(url);
            console.log(`Starting download - ${url}`);
            return pr;
         })
    )
    let bad_urls = []
    for (const res of res_promise) {
        if (!res.value.ok) {
            // throw new Error(`Failed to download "${res.url}" - ${res.statusText}`);
            bad_urls.push(res.value.url);
            continue;
        }
        const text = await res.value.text();
        console.log(`Finished download - ${res.value.url}`);
        const filePath = join("downloads", basename(res.value.url));
        await writeFile(filePath, text);
    }
    console.log(`Failed to download ${bad_urls.length} files:`);
    bad_urls.forEach((bad_url) => {
        console.log(`\tFailed to download ${bad_url} - Not Found`)
    });
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

const files = [
    "sample1.txt",
    "not-exists1.txt",
    "sample2.txt",
    "not-exists2.txt",
    "sample3.txt",
  ];
  
const urls = files.map(
  (fileName) => `https://filesamples.com/samples/document/txt/${fileName}`
);

await access("downloads").catch(() => mkdir("downloads"));
await downloadTextFiles(urls);

