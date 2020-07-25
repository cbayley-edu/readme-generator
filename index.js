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
        type: "editor",
        name: "usage",
        message: "Enter steps for the usage section (notepad or vim will launch, enter text as you wish to see it). Hint: format for screen shots ![screen shot](./imgs/screen-shot.png)",
        validate: cannotBeBlank
      },
      {
        type: "input",
        name: "credits",
        message: "Enter text for the Credits section (include any collaborators):",
      },
      {
        type: "checkbox",
        message: "What licenses would you like to include?",
        name: "licBadge",
        choices: [
          "Apache v2.0", 
          "Boost v1.0", 
          "BSD v3", 
          "Creative Commons v1.0 (non-international)",
          "Eclipse Public License v1.0",
          "GNU GPL v3",
          "IBM Public License v1.0",
          "ISC",
          "MIT",
          "Mozilla Public License v2.0",
          "Open Data Commons - Attribution License (BY)",
          "Open Data Commons - Open Database License (ODbL)",
          "Open Data Commons - Public Domain Dedication and License (PDDL)",
          "Perl License",
          "Perl Artistic License v2.0",
          "SIL Open Font License v1.1",
          "Unlicense",
          "WTFPL",
          "Zlib/libpng",
        ]
      },
      {
        type: "input",
        name: "contributing",
        message: "Enter text for the Contributing section (if desired):",
      },
      {
        type: "input",
        name: "tests",
        message: "Enter text for the Tests section (if desired):",
      },
      {
        type: "input",
        name: "generate",
        message: "Press ENTER to generate your README.md file in the root folder of this project.",
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
        writeToFile("README.md", output);
    });
}

// function call to initialize program
init();

