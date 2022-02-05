let badge = "";
let licenseLink = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(promptData) {
  switch (promptData.license) {
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
      badge = ""
      break;
    default:
      badge = ""
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
function renderLicenseLink(badge) {
  switch (badge) {
    case 'MIT':
      licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case 'GPLv2':
      licenseLink = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
      break;
    case 'GPLv3':
      licenseLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case 'Apache':
      licenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case 'BSD 3-clause':
      licenseLink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    case 'No License':
      licenseLink = ""
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(promptData) {

  if (promptData.license === 'MIT') {
    return `
    >
Copyright 2022 -- Author's GitHub:${promptData.github}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
  }

  if (promptData.license === 'GPLv2') {
    return `
    >
    Copyright (C) 2022 -- Author's GitHub:${promptData.github}

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
    `
  }

  if (promptData.license === 'GPLv3') {
    return `
  >
  Copyright (C) 2022 -- Author's GitHub:${promptData.github}

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
  `
  }
  if (promptData.license === 'Apache') {
    return `
  >
  Copyright 2022 -- Author's GitHub:${promptData.github}

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  `
  }

  if (promptData.license === 'BSD 3-clause') {
    return `
  >
  Copyright 2022 -- Author's GitHub:${promptData.github}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  `
  }

  if (promptData.license === 'No License') {
    return ``
  }
}

//function to render screenshot in ReadMe
function renderScreenshot(promptData) {
  if (promptData.screenshot) {
    return `![Project mock-up image.](./assets/screenshot.png)`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(promptData) {

  return `# ${promptData.title}   
${renderLicenseLink(renderLicenseBadge(promptData))}
## Description
${promptData.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Credits](#credits)
- [Resources](#resources)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
Want to install this project?
${promptData.installation}

## Usage
Instructions and examples for use:
${promptData.usage}
${renderScreenshot(promptData)}

## Credits
${promptData.credits}

## Resources
${promptData.resources}

## Contributing
Interested in contributing?
${promptData.contributing}

## Tests
Want to run tests with this project?
 ${promptData.tests}

## Questions 
Have any questions or want to collaborate on another project? 
Feel free to contact me!
Email me - ${promptData.email}!
Reach me on GitHub - https://github.com/${promptData.github}!

## License
${promptData.license}
\n
${renderLicenseSection(promptData)}
`;

}

//original
// module.exports = generateMarkdown;
module.exports = generateMarkdown;


//copyright holder = author or github user name
//copyright = date.now 
//function to convert unix to human time