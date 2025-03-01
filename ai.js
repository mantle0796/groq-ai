const Groq = require('groq-sdk');
const dotenv = require('dotenv');
dotenv.config();

const client = new Groq({
    apiKey: process.env.GROQ_API
});

async function main(content) {
    const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content }],
        model: 'llama3-8b-8192',
    });

    const response = chatCompletion.choices[0].message.content
    console.log(response);
    return response;
}

const content = "hey, tell me hitler personality"
main(content);