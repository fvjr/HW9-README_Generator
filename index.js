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
    type: 'input',
    name: 'usage',
    message: "How would a user utilize your application?",
  },
  {
    type: 'list',
    name: 'license',
    message: "What license does your application use?",
    choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD 3-clause', 'No License', 'Other']
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
    message: "How can someone contact you regarding questions about your application?",
  },
  {
    type: 'input',
    name: 'github',
    message: "What is your GitHub user name?",
  }
  
];

const promptUser = () => {
  return inquirer.prompt(questions)
}



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeToFile = (fileName, promptData) => {
  fs.writeFileSync(fileName, generate.generateMarkdown(promptData))
}

// TODO: Create a function to initialize app
// function init() {}
const init = () => {
  //ask questions and get user input
  promptUser()
  //return user input

  .then((promptData) => {
    console.log(promptData.title)
    writeToFile('genreadme.md', (promptData), err => {
      if(err){
        console.log(err);
    }
    console.log('success!')
  })
  
  // .then((answers) => writeToFile('readme.md', answers))
  
})
}

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Function call to initialize app
init();
