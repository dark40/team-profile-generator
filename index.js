const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs')

const render = require('./src/page-template')

const teamArr = [];

const addManager = () => {
    console.log('Welcome to the team generator!\n')
    console.log("Please build your team 👥");
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager_name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "What is the team manager's id?",
        },
        {
            type: 'input',
            name: 'manager_email',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'manager_number',
            message: "What is the team manager's office number?",
        },
        {
            type: 'list',
            name: 'EngineerOrIntern',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        },
    ])
        .then((answers) => {
            const manager = new Manager(
                answers.manager_name,
                answers.manager_id,
                answers.manager_email,
                answers.manager_number
            );
            teamArr.push(manager);

            if (answers.EngineerOrIntern === 'Engineer') {
                addEngineer();
            } else if (answers.EngineerOrIntern === 'Intern') {
                addIntern();
            } else if (answers.EngineerOrIntern === "I don't want to add any more team members") {
                writeToFile(teamArr);
            }
        })

}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineer_name',
            message: "What is your engineer's name?",
        },
        {
            type: 'input',
            name: 'engineer_id',
            message: "What is your engineer's id?",
        },
        {
            type: 'input',
            name: 'engineer_email',
            message: "What is your engineer's email?",
        },
        {
            type: 'input',
            name: 'engineer_git',
            message: "What is your engineer's GitHub username?",
        },
        {
            type: 'list',
            name: 'EngineerOrIntern',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        },
    ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineer_name,
                answers.engineer_id,
                answers.engineer_email,
                answers.engineer_git
            );
            teamArr.push(engineer)

            if (answers.EngineerOrIntern === 'Engineer') {
                addEngineer();
            } else if (answers.EngineerOrIntern === 'Intern') {
                addIntern();
            } else if (answers.EngineerOrIntern === "I don't want to add any more team members") {
                writeToFile(teamArr);
            }
        })

}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intern_name',
            message: "What is your intern's name?",
        },
        {
            type: 'input',
            name: 'intern_id',
            message: "What is your intern's id?",
        },
        {
            type: 'input',
            name: 'intern_email',
            message: "What is your intern's email?",
        },
        {
            type: 'input',
            name: 'intern_school',
            message: "What is your intern's school?",
        },
        {
            type: 'list',
            name: 'EngineerOrIntern',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        },
    ])
        .then((answers) => {
            const intern = new Intern(
                answers.intern_name,
                answers.intern_id,
                answers.intern_email,
                answers.intern_school
            );
            teamArr.push(intern)

            if (answers.EngineerOrIntern === 'Engineer') {
                addEngineer();
            } else if (answers.EngineerOrIntern === 'Intern') {
                addIntern();
            } else if (answers.EngineerOrIntern === "I don't want to add any more team members") {
                writeToFile(teamArr);
            }
        })

}


// Create a function to  initialize the app
const init = () => {
    addManager()
}

const writeToFile = () => {
    fs.writeFileSync('./dist/team.html', render(teamArr))
}


init()
