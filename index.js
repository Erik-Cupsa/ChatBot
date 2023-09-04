import OpenAI from "openai";
import dotenv from "dotenv"; 
dotenv.config(); 

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", 
        messages: [
            {role: "user", content: "What is the capital of Massachussets?"}
        ]
    });

    console.log(chatCompletion.choices[0].message)
}

main(); 