const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

if (!configuration.apiKey) {
    throw new Error("OpenAI API key not configured, please follow instructions in README.md");
}

module.exports = openai;