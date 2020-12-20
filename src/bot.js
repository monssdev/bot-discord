const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const config = require('./config.json')
const ytdl = require('ytdl-core')


client.on('ready', () => {
	var channel = client.channels.cache.get('787347414699737128')
})

client.on('message', message => {
	const prfx = config.infos.prefix
  if (!message.content.startsWith(prfx) || message.author.bot) return
  const args = message.content.trim().split(' ')
	var voiceChannelUser = message.member.voice.channel


	if (args[0] == `${prfx}ytb`) {
  	voiceChannelUser.join().then(connection => {
  		connection.play(ytdl(args[1]))
		}).catch(console.error)
	}

	if (args[0] == `${prfx}roll`)
		message.channel.send(`:game_die: Vous avez obtenu le ${Math.floor(Math.random() * 101)}/100`)

	if(args[0] == `${prfx}blague`) {
		const randomJoke = Math.floor(Math.random() * config.commands.blagues.length)
		console.log(randomJoke)
		message.reply(config.commands.blagues[randomJoke])
	}

	if (args[0] == `${prfx}bot` && args[1] == 'quitter')
		voiceChannelUser.leave()


})

client.login(config.infos['token'])