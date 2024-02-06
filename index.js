const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const promptUser = () =>

    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'Repository',
            message: 'What is your Repository name?',
        },
        {
            type: 'input',
            name: 'Project Title',
            message: 'What is the Title of your project?',
        },
        {
            type: 'input',
            name: 'sections',
            message: 'What sections are entitled here?',
        },

       {
            type: 'input',
            name: 'License',
            message: 'What License is here?',
        },


        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
    ]);

// function to write README file


// function to initialize program
function init() {
    promptUser()
    .then((answers) => console.log(answers) )
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));

}


// function call to initialize program
init();






