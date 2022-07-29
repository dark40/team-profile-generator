const inquirer = require('inquirer')


const addManager = () => {
    console.log('Welcome to the team generator!\n Use `npm run reset` to reset the dist/folder')

    inquirer.prompt([
        console.log("Please build your team 👥"),
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
    .then( val => {
        if (val.EngineerOrIntern === 'Engineer'){
            addEngineer();
        } else if (val.EngineerOrIntern === 'Intern') {
            addIntern();
        } else {
            return;
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
    .then( val => {
        if (val.EngineerOrIntern === 'Engineer'){
            addEngineer();
        } else if (val.EngineerOrIntern === 'Intern') {
            addIntern();
        } else {
            return;
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
    .then( val => {
        if (val.EngineerOrIntern === 'Engineer'){
            addEngineer();
        } else if (val.EngineerOrIntern === 'Intern') {
            addIntern();
        } else {
            return;
        }
    })
}