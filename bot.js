require("dotenv").config();
const { Client, Intents } = require("discord.js");
const { fetchTitle } = require("./fetchTitle.js");
const { embedInfo, embedSearch } = require("./embeds.js");

const COMMAND_PREFIX = "!";
const COMMAND = "imdb";
const COMMAND_SEARCH = "search";
const COMMAND_INFO = "info";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(COMMAND_PREFIX)) {
    const [commandName, param, ...body] = message.content
      .toLowerCase()
      .trim()
      .substring(COMMAND_PREFIX.length)
      .split(/\s+/);

    const commandBody = body.join(" ");

    if (commandName === COMMAND) {
      if (param === COMMAND_SEARCH || param === COMMAND_INFO) {
        try {
          const data = await fetchTitle(param, commandBody, COMMAND_SEARCH);

          if (data.Response === "False") {
            message.channel.send(
              "Title not found.\nCheck spelling or use a broader search term."
            );
            return;
          }

          if (param === COMMAND_INFO) {
            embedInfo(data, message);
          }

          if (param === COMMAND_SEARCH) {
            embedSearch(data, message);
          }
        } catch (error) {
          console.log(error);
          message.channel.send("Error retrieving data.");
        }
      } else {
        message.channel.send(
          `Command not found.\nType \`${COMMAND_PREFIX}${COMMAND} ${COMMAND_SEARCH} <title>\` to search, or \`${COMMAND_PREFIX}${COMMAND} ${COMMAND_INFO} <title>\` to retrieve info on a specific title.`
        );
      }
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
