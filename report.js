const newman = require('newman');
require('dotenv').config();

newman.run({
    collection:`https://api.postman.com/collections/35117888-6b34dc6f-8f4d-4091-83da-b621094144c2?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});