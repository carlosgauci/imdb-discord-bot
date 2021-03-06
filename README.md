# IMDb Discord Bot

A discord bot that retrieves IMDb data for movies/series/games using the [OMDb (Open Movie Database) API](https://www.omdbapi.com/).

## Instructions

1. [Create a discord app](https://discord.com/developers/applications/), add a bot to your app, and get your bot token.

2. [Get an OMDb API key](https://www.omdbapi.com/apikey.aspx)

3. Replace the contents of the .env file in this repository with your bot token and api key. `DISCORD_BOT_TOKEN=<YOUR TOKEN>`, `OMDB_API_KEY=<YOUR KEY>`

4. Run `npm i` to install dependencies.

5. Run `npm start` to start the bot (or `npm run dev` to start with nodemon.)

6. Add the bot to your discord server, and use `!imdb info <title>` to fetch data about a specific title, or `!imdb search <query>` to fetch a list of titles for that query. eg: `!imdb info westworld`, `!imdb search game of thrones`.

## Examples

![!imdb info for all mankind](https://i.imgur.com/E8962bH.png)

![!imdb info the dark knight](https://i.imgur.com/6QVem1s.png)

![!imdb search westworld](https://i.imgur.com/5SkcU3b.png)
