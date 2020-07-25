var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");


// function to validate questions that can't be blank
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
      {
        type: "editor",
        name: "usage",
        message: "Enter steps for the usage section (notepad or vim will launch, enter text as you wish to see it). Hint: format for screen shots ![screen shot](./imgs/screen-shot.png)",
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
    fs.writeFile(fileName, data, function(err){
      if (err) {
          return console.log(err);
      }        
  });

}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
      .then(function(response) {
        // var projectTitle = response.projectTitle;
        // var usage = response.usage;
        // var output = projectTitle + "\n" + usage;
        const output = generateMarkdown(response);
        writeToFile("readme.md", output);
    });
}

// function call to initialize program
init();

