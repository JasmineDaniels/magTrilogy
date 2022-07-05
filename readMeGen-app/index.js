// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

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
            message: 'Deployed Link: [title](https://www.example.com)',
            name: 'README5',
        },
        {
            type: 'input',
            message: 'Image Link: ![alt text](image.jpg)',
            name: 'README6',
        },
        {
            type: 'input',
            message: 'Any Collaborators, Tutorials, etc that require Recognition?',
            name: 'README7',
        },
        {
            type: 'checkbox',
            message: 'License?',
            choices: ['![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)', new inquirer.Separator(), '![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)', new inquirer.Separator(), '![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)', new inquirer.Separator(), '![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)', new inquirer.Separator(), '![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)'],
            name: 'README8',
        },
        {
            type: 'input',
            message: 'Email:[Contact Us](mailto:admin@example.com)',
            name: 'README9',
        },
        {
            type: 'input',
            message: 'Github: [title](https://www.example.com)',
            name: 'README10',
        },  // test
    ])
    .then((answers) => {
    generateMarkdown.generateMarkdown(answers)

    })
    .catch((err) => {
        console.log(err)
    })
}
// // Function call to initialize app
init();



// class initialize {
//     constructor (dependencies){
//         this.dependencies = ""
//     }
// }

// let prompt = inquirer.createPromptModule()
// prompt(questionsAll).then()

// 4. const writeToDisk = pairs.map(pair => {
        //     Copy of readmeObj
        // const newreadObj = {...pair};
        // fs.appendFile('README.md', newreadObj, (err) => {
        //     err ? console.error(err) : console.log('Success!')
        // });
        
    //})

// 5. const readMeFile = `${data.name}.md` //.md or .json ?


