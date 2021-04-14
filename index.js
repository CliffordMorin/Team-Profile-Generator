const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const generateHTML = require('./src/generateHTML');
const Intern = require('./lib/Intern');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your id number?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter your School',
      },
    ]);
  };

// writeFileAsync as a promise
const init = () => {
    promptUser()
      .then((answers) => {
        console.log(answers);
        var intern = new Intern (answers.name, answers.id, answers.email, answers.school);
        console.log(intern);
        console.log(intern.getRole());
        intern.getRole();
        
        // writeFileAsync('index.html', generateHTML(answers)))
      })
      // .then(() => console.log('Successfully wrote to index.html'))
      // .catch((err) => console.error(err));
  };
  
  init();
