const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require('util');
// const generateHTML = require('./src/generateHTML');

const teamMembers = [];
const idArray = [];

// create writeFile function using promises instead of a callback function
// const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () => {
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//       },
//       {
//         type: 'input',
//         name: 'id',
//         message: 'What is your id number?',
//       },
//       {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email?',
//       },
//       {
//         type: 'input',
//         name: 'officeNumber',
//         message: 'What is your office number?',
//       },
//       {
//         type: 'input',
//         name: 'github',
//         message: 'Enter your GitHub Username',
//       },
//       {
//         type: 'input',
//         name: 'school',
//         message: 'Enter your School',
//       },
//     ]);
//   };


//runs menu of questions
// function appMenu() {

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
      console.log(userInput);
      var manager = new Manager (userInput.managerName, userInput.managerId, userInput.managerEmail, userInput.officeNumber);
      console.log(manager);
      console.log(manager.getRole());
      createTeam();
    })
  };
// }
// writeFileAsync as a promise
const init = () => {

    createTeam();
    
    // promptUser()
    //   .then((answers) => {
    //     console.log(answers);
    //     var intern = new Intern (answers.name, answers.id, answers.email, answers.school);
    //     console.log(intern);
    //     console.log(intern.getRole());
    //     intern.getRole();
        
        // writeFileAsync('index.html', generateHTML(answers)))
      // })
      // .then(() => console.log('Successfully wrote to index.html'))
      // .catch((err) => console.error(err));
  };
  
  init();
