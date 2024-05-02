import express, { Application, Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

dotenv.config()

const PORT: number = 8000;
const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;

const app: Application = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({apiKey: API_KEY});

app.post("/completions", async (req: Request, res: Response ) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "user",
                    content: "Give me a " + req.body.duration + " minute workout for training my " + req.body.content
                }
                ]
        });
        res.send(completion.choices[0].message);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
})

app.listen(PORT, () => console.log(`your server is running on PORT ${PORT}`));