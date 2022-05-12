require("dotenv").config();
const axios = require("axios");
const apiKey = process.env.OMDB_API_KEY;

const fetchTitle = async (param, query, COMMAND_SEARCH) => {
  const p = param === COMMAND_SEARCH ? "s" : "t";
  const res = await axios.get(
    `http://www.omdbapi.com/?${p}=${query}&apikey=${apiKey}`
  );

  return res.data;
};

module.exports = { fetchTitle };
