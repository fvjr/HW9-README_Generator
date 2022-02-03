// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
//case switch for badges

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(promptData) {
  return `# ${promptData.title}
# ${promptData.description}
# ${promptData.installation}
# ${promptData.usage}
# ${promptData.license}
# ${promptData.contributing}
# ${promptData.tests}
# ${promptData.email}
# ${promptData.github}







`;
}

//original
// module.exports = generateMarkdown;
exports.generateMarkdown = generateMarkdown