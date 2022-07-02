console.log(`Program Started`)
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

//const readmeObj = inquirer.prompt([])
inquirer.prompt([
    {
        type: 'input',
        message: 'Project Title?',
        name: 'README',
    },
    {
        type: 'input',
        message: 'Description?',
        name: 'README',
    },
    {
        type: 'input',
        message: 'What Problem does it Solve?',
        name: 'README',
    },
    {
        type: 'input',
        message: 'How does it work?',
        name: 'README',
    } // test
])
.then((data) => {
    console.log(data)
    console.log(`success`)
    //const readMeFile = `${data.name}.md` //.md or .json ?
    //const readMeMessges = `${data.message}`
    //const readMeType = `${data.type}`
})

// TODO: Create an array of questions for user input
//const questions = [readMeFile, RM-MESSAGES,  ];

// 1. questions.forEach() // append to README file 

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


// // TODO: Create a function to write README file = Write to Disk
// function writeToFile(fileName, data) {}

// fs.appendFile('README.md', JSON.stringify(data, null, '\t'), (err) => {
//     err ? console.error(err) : console.log(data)
// });



// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
