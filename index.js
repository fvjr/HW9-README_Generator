// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown')

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
    type: 'confirm',
    name: 'screenshot',
    message: "Want to include a screenshot? Select 'Y', Save a screenshot titled 'screenshot' in a folder titled 'Assets' in your project folder structure. The screenshot will be included in your ReadMe. If not, select 'N'.",
  },
  {
    type: 'input',
    name: 'usage',
    message: "How would a user utilize your application?",
  },
  {
    type: 'list',
    name: 'license',
    message: "What license does your application use?",
    choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD 3-clause', 'No License(not recommended)']
  },
  {
  type: 'input',
  name: 'credits',
  message: 'Who did you collaborate with on the project?'
  },
  {
    type: 'input',
    name: 'resources',
    message: 'What resources did you use when developing your project?'
    },
  {
    type: 'input',
    name: 'contributing',
    message: "How can someone contribute to your application?",
  },
  {
    type: 'input',
    name: 'tests',
    message: "How can someone test your application?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address?",
  },
  {
    type: 'input',
    name: 'github',
    message: "What is your GitHub user name?",
  }
  
];

//get user input from prompts
const promptUser = () => {
  return inquirer.prompt(questions)
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeToFile = (fileName, promptData) => {
  fs.writeFileSync(fileName, generate(promptData))
}

// TODO: Create a function to initialize app
// function init() {}
const init = () => {
  //ask questions and get user input
  promptUser()
  //return user input
  .then((promptData) => {
    console.log(promptData.title)
    //write user input to file
    writeToFile('readme.md', (promptData), err => {
      if(err){
        console.log(err);
    }
    console.log('success!')
  })
  
  // .then((answers) => writeToFile('readme.md', answers))
  
})
}

// Function call to initialize app
init();
