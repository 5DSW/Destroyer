# WhatsApp Cloud Bot

A Node.js bot using the WhatsApp Cloud API, with ChatGPT integration.

## Features
- Auto-replies with GPT
- Support message logging
- Cloud deployable (Heroku-ready)

## Setup

1. Fork and clone this repo
2. Add a `.env` file based on `.env.example`
3. Link to your WhatsApp Cloud App via Meta Developer settings
4. Set the webhook URL and VERIFY_TOKEN
5. Push to GitHub
6. Connect GitHub to Heroku and deploy!

## Environment Variables
```
VERIFY_TOKEN=your_verify_token
WHATSAPP_TOKEN=your_whatsapp_access_token
PHONE_NUMBER_ID=your_whatsapp_phone_number_id
OPENAI_API_KEY=your_openai_api_key
```

## Deploying to Heroku
1. Create a new Heroku app
2. Connect your GitHub repo
3. Enable automatic deploys
4. Add the required environment variables in Heroku settings
5. Set your webhook URL in Meta's developer portal: `https://your-heroku-app.herokuapp.com/webhook`

You're live!