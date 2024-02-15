// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


## Description
  ${data.description}


 ## Table of contents 
 ${data.contents}


 ## Installations
 ${data.installation}


 ##Videolink
 ${data.gif}



 ##License
 ${renderLicenseBadge(data.license)}


  ## Dependecies
 ${data.dependecies}


 ## GitHub
${data.gitHub}


## Questions
${data.questions}
`
}

module.exports = generateMarkdown;

function renderLicenseBadge (license) {
  if (license ==='MIT'){
    return MIT
  } else if ( license ==='The Unlicense'){
    return 'The Unlicense'
  } else if ( license ==='Boost Software License 1.0'){
    return 'Boost Software License 1.0'
  } else if ( license ==='Apache License 2.0'){
    return 'Apache License 2.0'
  } else if ( license ==='Mozilla Public License 2.0'){
    return 'Mozilla Public License 2.0'
  }
  }
 
 
