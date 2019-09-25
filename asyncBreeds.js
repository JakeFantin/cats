// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, printF) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!');
    printF(data);
  });
};
module.exports = breedDetailsFromFile;