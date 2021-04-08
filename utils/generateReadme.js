const generateReadme = (answers) =>
    `# ${answers.title} ![badge](https://img.shields.io/badge/license-${answers.license}-blue)
    
    
## Description
${answers.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    

## Installation
Please run *${answers.instructions}* in your terminal.


## Usage
${answers.usage}

## License

This project is covered under the ${answers.license} license.


## Contributing
${answers.guidelines}


## Tests
To run tests, run *${answers.test}* in your terminal.


## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).`;

module.exports = generateReadme;