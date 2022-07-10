const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([ 
      {
          type: 'input',
          message: 'Project Name?',
          name: 'README1',
      },
      {
          type: 'input',
          message: 'Description?',
          name: 'README2',
      },
      {
          type: 'input',
          message: 'What Problem does it Solve?',
          name: 'README3',
      },
      {
          type: 'input',
          message: 'How to use?',
          name: 'README4',
      },
      {
          type: 'input',
          message: 'Deployed Link: https://www.example.com',
          name: 'README5',
      },
      {
          type: 'input',
          message: 'Image Link: ./img/example.png ',
          name: 'README6',
      },
      {
          type: 'input',
          message: 'Any Collaborators, Tutorials, etc that require Recognition?',
          name: 'README7',
      },
      {
          type: 'checkbox',
          message: 'License / Badge',
          choices: ['![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)', new inquirer.Separator(), '![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)', new inquirer.Separator(), '![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)',new inquirer.Separator(),'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', new inquirer.Separator(),'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'], 
          name: 'README8',
      },
      {
          type: 'input',
          message: 'Email:',
          name: 'README9',
      },
      {
          type: 'input',
          message: 'Github Username:',
          name: 'README10',
      },  // test
  ])
  .then((answers) => {
    console.log(typeof answers)
    generateMarkdown(answers)

  })
  .catch((err) => {
      console.log(err)
  })
}

// TODO: Create a function to generate markdown for README
let generateMarkdown = (answers) => {
  // The prompts ask the questions to get the answers you need from the console.
  // The generateMarkdown questions are the ones that are printed to the readme.

  //Questions
  let question1 = `## Table of Contents\n\n` 
  let question2 = `## Description?\n\n`
  let question3 = `## What Problem does it Solve?\n\n`
  let question4 = `### How to Use?\n\n`
  let question5 = `### Deployed Link:\n\n`
  let question6 = `### Demo Link:\n\n`
  let question7 = `## Credits\n\n` 
  let question8 = `## License\n\n` // choice
  let question9 = `### Email:\n\n`
  let question10 = `### Github:\n\n`
  
  //Answers
  let answer1 = answers.README1
  let answer2 = answers.README2
  let answer3 = answers.README3 
  let answer4 = answers.README4 
  let answer5 = answers.README5 
  let answer6 = answers.README6 
  let answer7 = answers.README7
  let answer8 = answers.README8 
  let answer9 = answers.README9 
  let answer10 = answers.README10 
  
  //Pairs
  let pair0 = `# Welcome to ${answer1} App!\n\n`
  let installList = `- [Installation](#installation)\n\n`
  let creditsList = `- [Credits](#credits)\n\n`
  let licenseList = `- [License](#license)\n\n`
  let contactList = `- [Contact](#contact)\n\n`
  let install = `## Installation\n\n`
  let checkout = `## Go Check us out\n\n`
  let contact = `## Contact\n\n`
  let contactEmail = `[Contact Email](mailto:${answer9})`
  let contactGithub = `[Our Github](https://github.com/${answer10})`
  let deployedLink = `[${answer1}](${answer5})`
  let imageLink = `![${answer1} Demo](${answer6})`
  //let pair1 = `${question1}${answer1}\n\n`
  let pair2 = `${question2}${answer2}\n\n`
  let pair3 = `${question3}${answer3}\n\n`
  let pair4 = `${question4}${answer4}\n\n`
  let pair5 = `${question5}${deployedLink}\n\n`
  let pair6 = `${question6}${imageLink}\n\n`
  let pair7 = `${question7}${answer7}\n\n`
  let pair8 = `${question8}${answer8}\n\n`
  let pair9 = `${question9}${contactEmail}\n\n`
  let pair10 = `${question10}${contactGithub}\n\n`
    
  let readMEGen = `${pair0}${question1}${installList}${creditsList}${licenseList}${contactList}${pair2}${pair3}${install}${pair4}${checkout}${pair5}${pair6}${pair7}${pair8}${contact}${pair9}${pair10}`
    
  //Write to disk
  fs.writeFile('README.md', readMEGen, (err) => {
    err ? console.error(err) : console.log('Success!')
  });
}


// add all functions 
module.exports = {
  generateMarkdown,
  init,
  
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {} // table of contents

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}