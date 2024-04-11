import { OpenAI } from "openai";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config({ path: `..\\.env` });
const apiKey = process.env.API_KEY;
const port = process.env.PORT;
const app = express();
app.use(cors());
const openai = new OpenAI({
    apiKey: apiKey
});

async function getCompletion(prompt, model){
    return openai.chat.completions.create({
        messages: [
            { role: "user", content: prompt}
        ],
        model: model
    }).then(response => response.choices[0].message.content);
}

app.get("/response", async (req, res)=>{
    let completion = await getCompletion("How is your day?", "gpt-3.5-turbo");
    res.send(completion);
})



app.listen(port, ()=>{
    console.log(`Server runs on port ${port}`);
})






