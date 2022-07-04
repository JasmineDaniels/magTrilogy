console.log(`Program Started`)
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
//const fs = require('fs')

// const readMEGen = inquirer.prompt([])
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
        message: 'How does it work??',
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
        message: 'License',
        name: 'README7',
    },  // test
])
.then((answers) => {
    generateMarkdown.generateMarkdown(answers)
    
})
.catch((err) => {
    console.log(err)
})

// // TODO: Create a function to initialize app

// function init() { // process.argv[2]
//     const npm = 'npm i' //string
//     console.log(npm)
//     console.log(generateMarkdown.init())
// }

// class initialize {
//     constructor (dependencies){
//         this.dependencies = ""
//     }
// }

// // Function call to initialize app
// init();





// let prompt = inquirer.createPromptModule()
// prompt(questionsAll).then()

//return `${question1}, ${answer1}`

// 2. for (const question of questions){}

// 3. const { message } = readmeObj

// 4. const createReadmeObj = readmeObj.map(questions => {
        //     Copy of readmeObj
        //const newreadObj = {...questions};
        //     For Each  
        //newreadObj.forEach(question => {
            //console.log(question) //append data to readme
        //})
        // console.log(question)
        //})
    //})

// 5. const readMeFile = `${data.name}.md` //.md or .json ?

// TODO: Create a function to write README file = Write to Disk

