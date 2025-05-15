const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Bot is ready!');
});

client.on('message', async msg => {
  if (msg.body && !msg.fromMe) {
    try {
      const chat = await msg.getChat();
      if (!chat.isGroup) {
        const gptResponse = await openai.chat.completions.create({
          messages: [{ role: 'user', content: msg.body }],
          model: 'gpt-3.5-turbo'
        });
        const reply = gptResponse.choices[0].message.content.trim();
        msg.reply(reply);
      }
    } catch (err) {
      console.error('GPT Error:', err);
      msg.reply("Sorry, I couldn't process that.");
    }
  }
});

client.initialize();