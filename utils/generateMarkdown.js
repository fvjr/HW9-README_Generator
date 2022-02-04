let badge = "";
let licenseLink = "";
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(promptData) {
  
  switch(promptData.license){
case 'MIT':
    badge = "MIT";
    break;
case 'GPLv2':
    badge = "GPLV2"
    break;
case 'GPLv3':
    badge = "GPLv3"
    break; 
case 'Apache':
    badge = "Apache"
    break;
case 'BSD 3-clause':
    badge = "BSD 3-clause"
    break;
case 'No License':
    badge = "No License"
    break;
case 'Other':
    badge = "Other"
    break;                   
default:
  badge = ""
}
return badge
}
//case switch for badges
//['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD 3-clause', 'No License', 'Other']


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
function renderLicenseLink(badge) {
switch(badge){
case 'MIT':
  licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  break;
}
return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(promptData) {
  renderLicenseBadge(promptData);
  renderLicenseLink(badge)
  console.log(badge)
  return `# ${promptData.title}

## Description
${promptData.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
${promptData.installation}

## Usage
${promptData.usage}

## License
${promptData.license}

## Contributing
${promptData.contributing}

## Tests
 ${promptData.tests}

## Email ${promptData.email}
## Github ${promptData.github}


## LicenseBadge
${badge}
${licenseLink}




`;

}

//original
// module.exports = generateMarkdown;
exports.generateMarkdown = generateMarkdown;

