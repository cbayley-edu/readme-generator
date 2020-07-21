var inquirer = require("inquirer");
var fs = require("fs");

//function to validate questions that can't be blank
const cannotBeBlank = async(input) => {
    if (input === "") {
       return "You must supply a value";
    }
    return true;
 };

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your Project Title?",
        validate: cannotBeBlank
      },
      {
        type: "input",
        name: "lessonName",
        message: "What is the lesson name? (i.e. Unit 09 Node.js and ES6+ Homework: Good README Generator)"
      },
      {
        type: "input",
        name: "description",
        message: "Enter a Description for your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter text for the Installation section:",
      },
      {
        type: "input",
        name: "contributing",
        message: "Enter text for the Contributing section:",
      },
      {
        type: "input",
        name: "tests",
        message: "Enter text for the Tests section:",
      },




      //this might be the answer for the loop below
      {
        type: "editor",
        name: "usage",
        message: "Enter steps for the usage section. Enter screen shots like example: ![screen shot](./imgs/screen-shot.png).",
      },



      //how can I loop through this??  do I do it in the code?
      {
        type: "input",
        name: "usageStep",
        message: "Enter text for a step for the Usage section:",
      },
      {
        type: "input",
        name: "usageImageFileName",
        message: "If you want to include a screen shot for the text, enter the file name (ex. screen-shot.png):",
      },
      {
        type: "input",
        name: "usageImageAltText",
        message: "If you included a screen shot, enter a description for the image:",
      },
      //do I need to add a question here to add another step to loop through the above 3 questions?
      {
        type: "confirm",
        name: "usageAddAnotherStep",
        message: "Do you need to add another step to the Update section?",
      },




      {
        type: "checkbox",
        message: "What licenses would you like to include?",
        name: "stack",
        choices: [
          "MIT", 
          "MIT", 
          "MIT", 
          "MIT"
        ]
      }
    
];

// function to write README file
function writeToFile(fileName, data) {


}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
      .then(function(response) {
        var projectTitle = response.projectTitle;
        var usage = response.usage;
        var output = projectTitle + "\n" + usage;
        fs.writeFile("log.txt", output, function(err){
            if (err) {
                return console.log(err);
            }        
        });
    });
}

// function call to initialize program
init();

