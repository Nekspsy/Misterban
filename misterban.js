const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '791354621:AAHmiTzF4xP8ZjhnMdoeKrPMhuP2FBuRGGU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });


	var timerId = setInterval(function() {
		const chatId = -1001109327125;

		let md = `
		⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️
		👋 Привет вновь прибывшим. 
		Просьба внимательно изучить закреплённое сообщение сверху 👆 там ответы на часто задаваемые вопросы. 
		И немного отмотайте ленту выше - скорее всего там есть ответы. 
		Цените время админов и не забивайте эфир, иначе они вынуждены будут заблокировать нарушителей. 
		Всем добра ✌️

		❗️ Более подробно читайте на https://rkt8.io/ 
		❗️ Бот, который ответит на все твои вопросы - @VRT8_bot
		⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️
		`;
	
		bot.sendMessage(chatId, md);
		
	}, 900000);


















