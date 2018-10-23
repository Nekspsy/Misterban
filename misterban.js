const TelegramBot = require('node-telegram-bot-api');
const Agent = require('socks5-https-client/lib/Agent');
const request = require('request');

const token = '791354621:AAHmiTzF4xP8ZjhnMdoeKrPMhuP2FBuRGGU';

// Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, { polling: true });

const bot = new TelegramBot(token, {
  polling: true,
  request: {
		agentClass: Agent,
		agentOptions: {
			socksHost: "206.189.8.85",
			socksPort: "1080",
			// If authorization is needed:
			// socksUsername: process.env.PROXY_SOCKS5_USERNAME,
			// socksPassword: process.env.PROXY_SOCKS5_PASSWORD
		}
	}
});


	var timerId = setInterval(function() {
		const chatId = -1001109327125;
		// 201167093                     - chat id со мной в личке
		// -1001109327125 или 540366663  - космодром
		let md = `
		⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️
		👋 Привет вновь прибывшим. 
		Просьба внимательно изучить закреплённое сообщение сверху 👆 там ответы на часто задаваемые вопросы. 
		И немного отмотайте ленту выше - скорее всего там есть ответы. 
		Цените время админов и не забивайте эфир, иначе они вынуждены будут заблокировать нарушителей. 
		Всем добра ✌️
		⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️
		`;
	
		bot.sendMessage(chatId, md);
		// bot.sendMessage(chatId, md, {parse_mode: 'Markdown'});
	}, 900000);


















