const { MessageEmbed } = require("discord.js");

const embedInfo = (data, message) => {
  const {
    Title,
    Year,
    Type,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Awards,
    Poster,
    imdbRating,
    imdbID,
    totalSeasons,
    BoxOffice,
  } = data;
  const embed = new MessageEmbed()
    .setColor("#0058a0")
    .setTitle(`${Title} (${Type}) ${Year}`)
    .addFields(
      {
        name: "IMDB Rating",
        value: `${imdbRating}/10`,
      },
      {
        name: "Plot Summary",
        value: Plot,
      },
      {
        name: "Writers",
        value: Writer,
        inline: true,
      },
      {
        name: "Directors",
        value: Director,
        inline: true,
      },
      {
        name: "Actors",
        value: Actors,
      },
      {
        name: "Genre",
        value: Genre,
        inline: true,
      },
      {
        name: "Runtime",
        value: Runtime,
        inline: true,
      }
    );

  Type === "series" && embed.addField("Seasons", totalSeasons);
  BoxOffice && embed.addField("Box Office", BoxOffice, true);

  embed
    .addFields(
      {
        name: "Awards",
        value: Awards,
      },
      {
        name: "Links",
        value: `[IMDB Page](https://www.imdb.com/title/${imdbID}/)`,
      }
    )
    .setImage(Poster);

  message.channel.send({ embeds: [embed] });
};

const embedSearch = (data, message) => {
  const titles = data.Search;
  const embed = new MessageEmbed()
    .setColor("#0058a0")
    .setTitle("Search Results");

  titles.forEach((t) =>
    embed.addField(
      `\u200B`,
      `[**${t.Title} (${t.Type}) ${t.Year}**](https://www.imdb.com/title/${t.imdbID}/)`
    )
  );

  message.channel.send({ embeds: [embed] });
};

module.exports = { embedInfo, embedSearch };
