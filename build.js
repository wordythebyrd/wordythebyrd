'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const divider = chalk.dim('·').repeat(38)

const data = {
  name:     chalk.bold.white('Andrew Byrd'),
  handle:   chalk.cyan('@wordythebyrd'),
  work:     chalk.white('Sr. Software Engineer') + chalk.dim(' at ') + chalk.green('Pendo'),
  also:     chalk.white('Dad, husband & French bulldog wrangler'),
  projects: chalk.dim('https://') + chalk.cyan('massivenerds.com'),
  npm:      chalk.dim('https://npmjs.com/') + chalk.cyan('~wordythebyrd'),
  github:   chalk.dim('https://github.com/') + chalk.cyan('wordythebyrd'),
  linkedin: chalk.dim('https://linkedin.com/in/') + chalk.cyan('wordythebyrd'),
  web:      chalk.cyan('https://andrewbyrd.dev'),
  npx:      chalk.yellow('npx wordythebyrd'),

  labelWork:     chalk.bold.cyan('     Work:'),
  labelAlso:     chalk.bold.cyan('     Also:'),
  labelProjects: chalk.bold.cyan(' Projects:'),
  labelnpm:      chalk.bold.cyan('      npm:'),
  labelGitHub:   chalk.bold.cyan('   GitHub:'),
  labelLinkedIn: chalk.bold.cyan(' LinkedIn:'),
  labelWeb:      chalk.bold.cyan('      Web:'),
  labelCard:     chalk.bold.cyan('     Card:')
}

const n = '\n'

const output =
  `${data.name}  ${data.handle}` + n +
  divider + n +
  `${data.labelWork}  ${data.work}` + n +
  `${data.labelAlso}  ${data.also}` + n +
  divider + n +
  `${data.labelProjects}  ${data.projects}` + n +
  `${data.labelnpm}  ${data.npm}` + n +
  `${data.labelGitHub}  ${data.github}` + n +
  `${data.labelLinkedIn}  ${data.linkedin}` + n +
  `${data.labelWeb}  ${data.web}` + n +
  divider + n +
  `${data.labelCard}  ${data.npx}`

fs.writeFileSync(path.join(__dirname, 'bin/output'), boxen(output, boxenOptions))
