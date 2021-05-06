#!/usr/bin/env node

const { red, white, green, cyan, bold, blue } = require('colorette')
const head = `${blue(bold('  Danwand NS') + ' /')} ${blue('DanBrown47')} / ${white('Rooter')}` 
const info = {

	Email: green('danwand47@gmail.com') + '\n',
	Work: white(`${red('Wattlecorp CyberSecurity Labs LLP')}, AI Researcher`),
  	Github: cyan('DanBrown47'),
  	Twitter: cyan('@danwand47'),
  	LinkedIn: cyan('linkedin.com/in/danwand') + '\n',
  	Card: white('npx danbrown47')
}



const body = Object.entries(info)
  .map(([key, value]) => [white(bold(`${key}:`.padStart(16, ' '))), value].join(' '))
  .join('\n')

console.log('\n' + [head, body].join('\n\n') + '\n')
