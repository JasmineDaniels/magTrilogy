const fs = require('fs')


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
let generateMarkdown = (answers) => {
  //Questions
  let question1 = `## Project Name?\n\n`
  let question2 = `## Description?\n\n`
  let question3 = `## What Problem does it Solve?\n\n`
  let question4 = `## How does it work?\n\n`
  let question5 = `## Deployed Link: [title](https://www.example.com)'\n\n`
  let question6 = `## Image Link: ![alt text](image.jpg)\n\n`
  let question7 = `## License\n\n`

  //Answers
  let answer1 = answers.README1
  let answer2 = answers.README2
  let answer3 = answers.README3 
  let answer4 = answers.README4 
  let answer5 = answers.README5 
  let answer6 = answers.README6 
  let answer7 = answers.README7 

  //Pairs
  let pairs1 = `${question1}${answer1}\n\n`
  let pairs2 = `${question2}${answer2}\n\n`
  let pairs3 = `${question3}${answer3}\n\n`
  let pairs4 = `${question4}${answer4}\n\n`
  let pairs5 = `${question5}${answer5}\n\n`
  let pairs6 = `${question6}${answer6}\n\n`
  let pairs7 = `${question7}${answer7}\n\n`
  let pairs = [pairs1, pairs2, pairs3, pairs4, pairs5, pairs6, pairs7]

  let welcomeNote = `# Welcome to ${answer1} App!\n\n`
  fs.writeFile('README.md', welcomeNote, (err) => {
    err ? console.error(err) : console.log('Success!')
  });

  for (const pair of pairs){ 
    fs.appendFile('README.md', pair, (err) => {
      err ? console.error(err) : console.log('Success!')
    });
  }
}


// add all functions 
module.exports = {
  generateMarkdown,
  
};
