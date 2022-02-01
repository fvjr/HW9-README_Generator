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
];

const promptUser = () => {
  return inquirer.prompt(questions);
}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeToFile = ({ title, description}) => 
`# ${title}

## ${description}`;

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
.then((answers) => fs.writeFileSync('GENREADME.md', writeToFile(answers)))
.then(() => console.log('Successfully wrote to GENREADME.md'))
.catch((err) => console.error(err));

}

// Function call to initialize app
init();
