const generateLicenseLink = (license) => {
    let path;

    switch (license) {
        case "MIT":
            path = "MIT";
            break;

        case "Mozilla":
            path = "MPL-2.0";
            break;

        case "Microsoft":
            path = "MS-PL";
            break;

        case "Apache":
            path = "Apache-2.0";
            break;

        case "OSL 3.0":
            path = "OSL-3.0";
            break;

        case "GNU":
            path = "GPL-3.0";
            break;

        case "Eclipse":
            path = "EPL-2.0";
            break;
    }
    return `https://opensource.org/licenses/${path}/`
}

const generateLicenseBadge = (license) => {
    let licenseBadge;

    switch (license) {
        case "MIT":
            licenseBadge = { name: "MIT", color: "blue" };
            break;

        case "Mozilla":
            licenseBadge = { name: "Mozilla", color: "brightgreen" };
            break;

        case "Microsoft":
            licenseBadge = { name: "MicroSoft", color: "yellow" };
            break;

        case "Apache":
            licenseBadge = { name: "Apache", color: "orange" };
            break;

        case "OSL 3.0":
            licenseBadge = { name: "OSL--3.0", color: "blueviolet" };
            break;

        case "GNU":
            licenseBadge = { name: "GNU", color: "red" };
            break;

        case "Eclipse":
            licenseBadge = { name: "Eclipse", color: "ff69b4" };
            break;
    }
    return `https://img.shields.io/badge/license-${licenseBadge.name}-${licenseBadge.color}`
}

const generateReadme = (answers) =>
    `# ${answers.title} ![badge](${generateLicenseBadge(answers.license)})
    
    
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

This project is covered under the [${answers.license}](${generateLicenseLink(answers.license)}) license.


## Contributing
${answers.guidelines}


## Tests
To run tests, run *${answers.test}* in your terminal.


## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).`;




module.exports = generateReadme;