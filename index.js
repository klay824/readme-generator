const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require("./utils/generateReadme.js");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: function(response) {
                if(response.length < 1) {
                    return console.log("Please enter a title for your project to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
            validate: function(response) {
                if(response.length < 1) {
                    return console.log("Please enter a description of your project to continue")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please provide the terminal command to install your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do contributors use your project?',
            validate: function(response) {
                if(response.length < 1 ) {
                    return console.log("Please enter usage instructions to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What contributor guidelines do you have?',
            validate: function(response) {
                if(response.length < 1 ) {
                    return console.log("Please enter contributor guidelines to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter the terminal command for users to test your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT', 'Mozilla', 'Microsoft', 'Apache', 'OSL 3.0', 'GNU', 'Eclipse'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: function(response) {
                if(response.length < 1 ) {
                    return console.log("Please enter your GitHub username to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: function(response) {
                if(response.length < 1 ) {
                    return console.log("Please enter a valid email address to continue.")
                }
                return true;
            }
        },
    ])
};

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('./utils/README.md', generateReadme(answers)))
      .then(() => console.log('Successfully generated README.md in your utils folder!'))
      .catch((err) => console.error(err));
  };
  
  init();
  

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'title',
//             message: 'What is your project title?',
//             validate: function(response) {
//                 if(response.length < 1) {
//                     return console.log("Please enter a title for your project to continue.")
//                 }
//                 return true;
//             }
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'Please provide a description of your project.',
//             validate: function(response) {
//                 if(response.length < 1) {
//                     return console.log("Please enter a description of your project to continue")
//                 }
//                 return true;
//             }
//         },
//         {
//             type: 'input',
//             name: 'instructions',
//             message: 'Please provide the terminal command to install your project.',
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'How do contributors use your project?',
//             validate: function(response) {
//                 if(response.length < 1 ) {
//                     return console.log("Please enter usage instructions to continue.")
//                 }
//                 return true;
//             }
//         },
//         {
//             type: 'input',
//             name: 'guidelines',
//             message: 'What contributor guidelines do you have?',
//             validate: function(response) {
//                 if(response.length < 1 ) {
//                     return console.log("Please enter contributor guidelines to continue.")
//                 }
//                 return true;
//             }
//         },
//         {
//             type: 'input',
//             name: 'test',
//             message: 'Please enter the terminal command for users to test your project.',
//         },
//         {
//             type: 'list',
//             name: 'license',
//             message: 'What license did you use?',
//             choices: ['MIT', 'Mozilla', 'Microsoft', 'Apache', 'OSL-3.0', 'GNU', 'Eclipse'],
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: 'What is your GitHub username?',
//             validate: function(response) {
//                 if(response.length < 1 ) {
//                     return console.log("Please enter your GitHub username to continue.")
//                 }
//                 return true;
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email address?',
//             validate: function(response) {
//                 if(response.length < 1 ) {
//                     return console.log("Please enter a valid email address to continue.")
//                 }
//                 return true;
//             }
//         },
//     ])
//     .then((answers) => {
//         const readmePageContent = generateReadme(answers);
//         fs.writeFile('./utils/README.md', readmePageContent, (err) =>
//             err ? console.log(err) : console.log('Successfully created README.md in your utils folder!')
//         );
//     });