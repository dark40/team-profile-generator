
const generateManager = manager => {
    return `
        <div class="card" style="width: 16rem;">
            <div class="card-header">
              <h3>${manager.getName()}</h3>
              <h4>☕ ${manager.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()}</li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                  </ul>
              </div>
          </div>`
}


const generateEngineer = engineer => {
    return `
        <div class="card" style="width: 16rem;">
            <div class="card-header">
              <h3>${engineer.getName()}</h3>
              <h4>☕ ${engineer.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                    <li class="list-group-item">Github: ${engineer.getGithub()}</li>
                  </ul>
              </div>
          </div>`
}

const generateIntern = intern => {
    return `
        <div class="card" style="width: 16rem;">
            <div class="card-header">
              <h3>${intern.getName()}</h3>
              <h4>☕ ${intern.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: ${intern.getEmail()}</li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                  </ul>
              </div>
          </div>`
}



const addTeamHTML = (teamArr) => {
    let htmlArr = '';

    for (i = 0; i < teamArr.length; i++) {
        if (teamArr[i].getRole === 'Manager') {
            htmlArr += generateManager(teamArr[i]);
        }
        if (teamArr[i].getRole === 'Engineer') {
            htmlArr += generateEngineer(teamArr[i]);
        }
        if (teamArr[i].getRole === 'Intern') {
            htmlArr += generateIntern(teamArr[i]);
        }
    }
}

const htmlTemp = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />

</head>

<header>
    <section id="hero">
        <h1>My Team</h1>
    </section>

</header>

<body>
<div class="container">
${addTeamHTML(data)}
    

</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
    <script src="../index.js"></script>
</body>

</html>`
}


module.exports = htmlTemp

