const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = (answers) =>
    `# ${answers.title}
    
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
     ${answers.instructions}

     ## Usage
     ${answers.usage}

     ## License
     ![badge](https://img.shields.io/badge/license-${answers.license}-blue))

     This project was created using the ${answers.license} license.

     ## Contributing
     ${answers.guidelines}

     ## Tests
     ${answers.test}

     ## Questions

     If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${github}](https://github.com/${github}/)
    `;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'What are the installation instructions for your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do contributors use your project?',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What contributor guidelines do you have?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How do users test your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT', 'Mozilla', 'Microsoft', 'Apache', 'Creative Commons', 'GNU', 'Eclipse', 'N/A'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
    .then((answers) => {
        const readmePageContent = generateReadme(answers);
        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });