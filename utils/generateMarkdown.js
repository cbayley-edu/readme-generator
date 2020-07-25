// function to generate markdown for README
function generateMarkdown(data) {
  //use IFs to make sure results contain data
  //toc - append to toc text in if statements to create a proper toc
  let toc = "## Table of Contents \n\n";
  //set to blank strings
  let lessonName = "";
  let description = "";
  let installation = "";
  let usage = "";
  let credits = "";
  let badges = "";
  let contributing = "";
  let tests = "";

  //lessonName
  if(data.lessonName){
    lessonName = `### ${data.lessonName} \n\n`;
  }
  //description
  if(data.description){
    description = `## Description \n\n${data.description} \n\n`;
  }
  //installation
  if(data.installation){
    installation = `## Installation \n\n${data.installation} \n\n`;
    toc += "* [Installation](#installation)\n";
  }
  //usage
  if(data.usage){
    usage = `## ${data.usage} \n\n`;
    toc += "* [Usage](#usage)\n";
  }
  //credits
  if(data.credits){
    credits = `## Credits \n\n${data.credits} \n\n`;
    toc += "* [Credits](#credits)\n";
  }
  //license badges - use selected licBadge values to call license function to get badge
  if(data.licBadge) {
    badges = "## License \n\n"
    licenses = data.licBadge;
    licenses.forEach(function(val,i) {
      badges += `${license(val)}\n`;
    });
    toc += "* [License](#license)\n";
  }
  //contributing
  if(data.contributing){
    contributing = `## Contributing \n\n${data.contributing} \n\n`;
    toc += "* [Contributing](#contributing)\n";
  }
  //tests
  if(data.tests){
    tests = `## Tests \n\n${data.tests} \n\n`;
    toc += "* [Tests](#tests)\n";
  }
  toc = toc += "\n\n";

return `# ${data.projectTitle} \n
${lessonName}${description}${toc}${installation}${usage}${credits}${badges}${contributing}${tests}`;
}

//function that is called to grab correct url for license
function license(key) {
  switch(key) {
    case "Apache v2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost v1.0":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD v3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Creative Commons v1.0 (non-international)":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse Public License v1.0":
      return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "IBM Public License v1.0":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License v2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Open Data Commons - Attribution License (BY)":
      return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      break;
    case "Open Data Commons - Open Database License (ODbL)":
      return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
      break;
    case "Open Data Commons - Public Domain Dedication and License (PDDL)":
      return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
      break;
    case "Perl License":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "Perl Artistic License v2.0":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "SIL Open Font License v1.1":
      return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      break;
    case "Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "WTFPL":
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      break;
    case "Zlib/libpng":
      return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      break;
    default:
      return "Have developer check the code!";
      break;
  }
}

module.exports = generateMarkdown;
