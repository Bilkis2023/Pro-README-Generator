// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description


${data.title}
${data.description}
${data.contents}
${data.installation}
${data.videolink}
${data.license}
${data.dependecies}
${data.gitHub}
${data.questions}
`
}

module.exports = generateMarkdown;
