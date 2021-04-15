const generateHTML = (answers) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="https://bootswatch.com/4/sketchy/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="jumbotron bg-danger">
        <h1 class="display-3" style="text-align: center;">My Team</h1>
        <p class="lead" style="text-align: center;">"Team work makes the dream work!"</p>
    </header>
    <div class="card-ctn">
        <div class="row">
            ${generateManager()}
            ${generateEngineer()}
            ${generateIntern()}
        </div>
    </div>  

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>   
    <script src="/src/generateHTML.js"></script>   
</body>
</html>
`
};

const generateManager = (manager) => {
    return  `
            <div class="card bg-info mb-3" style="max-width: 20rem;">
                <div class="card-header">
                    <h2>${manager.getName()}</h2>
                    <h4><i class="fas fa-mug-hot"> ${manager.getRole()}</i></h4>
                </div>
                <div class="card-body bg-light">
                <p class="card-text">
                    <div class="list-group">
                        <a href="" class="list-group-item list-group-item-action active">ID: ${manager.getId()}</a>
                        <a href="mailto: ${manager.getEmail()}" class="list-group-item list-group-item-action">Email: ${manager.getEmail()}</a>
                        <a href="" class="list-group-item list-group-item-action disabled">Office Number: ${manager.officeNumber()}</a>
                    </div>
                </p>
                </div>
            </div>
            `
};

const generateEngineer = (engineer) => {
    return  `
            <div class="card bg-info mb-3" style="max-width: 20rem;">
                <div class="card-header">
                    <h2>${engineer.getName()}</h2>
                    <h4><i class="fas fa-glasses"> ${engineer.getRole()}</i></h4>
                </div>
                <div class="card-body bg-light">
                <p class="card-text">
                    <div class="list-group">
                        <a href="" class="list-group-item list-group-item-action active">ID: ${engineer.getId()}</a>
                        <a href="mailto: ${engineer.getEmail()}" class="list-group-item list-group-item-action">Email: ${engineer.getEmail()}</a>
                        <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="list-group-item list-group-item-action disabled">Github: ${engineer.getGithub()}</a>
                    </div>
                </p>
                </div>
            </div>
            `
};

const generateIntern = (intern) => {
    return  `
            <div class="card bg-info mb-3" style="max-width: 20rem;">
                <div class="card-header">
                    <h2>${intern.getName()}</h2>
                    <h4><i class="fas fa-user-graduate"> ${intern.getRole()}</i></h4>
                </div>
                <div class="card-body bg-light">
                <p class="card-text">
                    <div class="list-group">
                        <a href="" class="list-group-item list-group-item-action active">ID: ${intern.getId()}</a>
                        <a href="mailto: ${intern.getEmail()}" class="list-group-item list-group-item-action">Email: ${intern.getEmail()}</a>
                        <a href="" class="list-group-item list-group-item-action disabled">School: ${intern.getSchool()}</a>
                    </div>
                </p>
                </div>
            </div>
            `
};