// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's title?",
  },
  {
    type: 'input',
    name: 'description',
    message: "What is your project's description?",
  },
  {
    type: 'input',
    name: 'installation',
    message: "How does a user install your application?",
  },
  {
    type: 'input',
    name: 'usage',
    message: "How would a user utilize your application?",
  },
  {
    type: 'input',
    name: 'credits',
    message: "Who did you collaborate with on your application?",
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeToFile = ({ title, description, installation, usage, credits}) => 
`#${title}

##Description
${description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}`;

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
.then((answers) => fs.writeFileSync('GENREADME.md', writeToFile(answers)))
.then(() => console.log('Successfully wrote to GENREADME.md'))
.catch((err) => console.error(err));

}

// Function call to initialize app
init();
