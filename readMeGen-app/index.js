console.log(`Program Started`)
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: 'input',
        message: 'Project Title?',
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
        message: 'How does it work?',
        name: 'README4',
    } // test
])
.then((answers) => {
    let question1 = `## Project Title?\n\n`
    let question2 = `## Description?\n\n`
    let question3 = `## What Problem does it Solve?\n\n`
    let question4 = `## How does it work?\n\n`
    const questionsAll = [question1, question2, question3, question4];

    let answer1 = answers.README1
    let answer2 = answers.README2
    let answer3 = answers.README3 
    let answer4 = answers.README4 
    const answersAll = [answer1, answer2, answer3, answer4];
    //let pairs = `${question2}${answer2}`
    let welcomeNote = `# Welcome to ${answer1} App!\n\n`

    fs.writeFile('README.md', welcomeNote, (err) => {
        err ? console.error(err) : console.log('Success!')
    });
    
    for (const question of questionsAll){
        //createFormat(question, answersAll) 
        fs.appendFile('README.md', question, (err) => {
            err ? console.error(err) : console.log('Success!')
        });

        // answersAll.forEach(answer => {
        //     let answersStr = answer
        //     fs.appendFile('README.md', ('\n', answersStr, '\n'), (err) => {
        //         err ? console.error(err) : console.log('Answer!')
        //     });
        // })
        // for (const answer of answersAll){
        //     fs.appendFile('README.md', ('\n',answer, '\n'), (err) => {
        //         err ? console.error(err) : console.log('Answer!')
        //     });
        // }
    }
    
})
.catch((err) => {
    console.log(err)
})

// TODO: Create an array of questions for user input
// let question1 = `##Project Title?\n`
// let question2 = `##Description?\n`
// let question3 = `##What Problem does it Solve?\n`
// let question4 = `##How does it work?\n`
    
// const questionsAll = [question1, question2, question3, question4];

// let prompt = inquirer.createPromptModule()
// prompt(questionsAll).then()

//`${H2, answer}`
//return `${question1}, ${answer1}`
//let pairs = `${question2}, ${answer2}`

// fs.appendFile('README.md', H2, answer1 (err) =>
//    err ? console.error(err) : console.log('Success!')
// );

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

// 5. const readMeFile = `${data.name}.md` //.md or .json ?

// TODO: Create a function to write README file = Write to Disk
//function writeToFile(fileName, data) {}
// function createFormat(questions, answers) {
//     console.log(`${questions}\n${answers}`)
// }

// let H2 = `##Description:${}\n`

// fs.appendFile('README.md', H2, (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
// fs.appendFile('README.md', JSON.stringify(data, null, '\t'), (err) => {
//     err ? console.error(err) : console.log(data)
// });



// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
