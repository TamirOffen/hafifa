
const fs = require('fs');

let input_file_name = process.argv[2];

fs.readFile(input_file_name, 'utf8', function(err, data) {
    if (err) throw err;
    words = data.trim().split(" ");
    cleaned_words = words.filter((word) => word.length > 0);
    if (!process.env.DEBUG) {
        console.log(cleaned_words.length);
    } else {
        console.log(cleaned_words);
        let word_counts = {};
        cleaned_words.map((word) => {
            if (word in word_counts) {
                word_counts[String(word)]++;
            } else {
                word_counts[String(word)] = 1;
            }
        })
        console.log(word_counts);
    }
} );

