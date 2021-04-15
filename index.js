const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateHTML = require('./src/generateHTML');

//Empty array that holds each team member added
let teamMembers = [];

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

//initial function to choose which team member in order to run each member function
function createTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "memberChoice",
      message: "Which type of team member are you?",
      choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
      ]
    }
  ]).then(userChoice => {
    switch (userChoice.memberChoice) {
      case "Manager":
        askManagerQuestion();
        break;
      case "Engineer":
        askEngineerQuestion();
        break;  
      case "Intern":
        askInternQuestion();
        break;  
      case "I don't want to add any more team members":

      let html = generateHTML(teamMembers);
      writeFileAsync('./dist/index.html', html)
        
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
        break;      
    }
  })
};

//Manager questions
function askManagerQuestion() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team Manger's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the team Manager's id number?",
      validate: answer => {
        const regEx = /^[1-9]\d*$/;
        const pass = answer.match(regEx);
        if (pass) {
          return true;
        }
        else {
          return "Please enter at least one digit."
        }
      }
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team Manager's email?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team Manager's office number?",
      validate: answer => {
        const regEx = /^[1-9]\d*$/;
        const pass = answer.match(regEx);
        if (pass) {
          return true;
        }
        else {
          return "Please enter at least one digit."
        }
      }
    },
  ]).then((userInput) => {
    // console.log(userInput);
    var manager = new Manager (userInput.managerName, userInput.managerId, userInput.managerEmail, userInput.officeNumber);
    // console.log(manager);
    teamMembers.push(manager);
    createTeam();
  })
};

function askEngineerQuestion() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the team Engineer's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the team Engineer's id number?",
      validate: answer => {
        const regEx = /^[1-9]\d*$/;
        const pass = answer.match(regEx);
        if (pass) {
          return true;
        }
        else {
          return "Please enter at least one digit."
        }
      }
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the team Engineer's email?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is the team Engineer's GitHub?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
  ]).then((userInput) => {
    // console.log(userInput);
    var engineer = new Engineer (userInput.engineerName, userInput.engineerId, userInput.engineerEmail, userInput.gitHub);
    // console.log(engineer);
    teamMembers.push(engineer);
    createTeam();
  })
};

function askInternQuestion() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the team intern's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "internId",
      message: "What is the team intern's id number?",
      validate: answer => {
        const regEx = /^[1-9]\d*$/;
        const pass = answer.match(regEx);
        if (pass) {
          return true;
        }
        else {
          return "Please enter at least one digit."
        }
      }
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the team intern's email?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
    {
      type: "input",
      name: "school",
      message: "What is the team intern's current school they are attending?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        else {
          return "Please enter at least one Character.";
        }
      }
    },
  ]).then((userInput) => {
    // console.log(userInput);
    var intern = new Intern (userInput.internName, userInput.internId, userInput.internEmail, userInput.school);
    // console.log(intern);
    teamMembers.push(intern);
    createTeam();
  })
};

// writeFileAsync as a promise
const init = () => {

    createTeam();
      // console.log(teamMembers);
      
  };
  
  init();
