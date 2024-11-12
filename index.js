import { GoogleGenerativeAI } from "@google/generative-ai";
import chalk from "chalk";
import ora from "ora";
import prompt from "prompt-sync";
import dotenv from "dotenv";
dotenv.config();

/*
 ora: Creates loading spinners and progress bars in the terminal.
 chalk: Styles text in the terminal with colors and styles.
 prompt-sync: Allows synchronous user input prompts in Node.js applications.
*/

const promptSync = prompt();

async function startAiChat() {
  const spinner = ora("Starting chat...").start();
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: process.env.MODEL_NAME });

    const chat = model.startChat({
      history: [],
    });

    spinner.stop();

    while (true) {
      const userInput = promptSync(chalk.green("You: "));
      if (userInput.toLowerCase() === "exit") {
        console.log(chalk.yellow("Goodbye!"));
        process.exit(0);
      }
      const result = await chat.sendMessage(userInput);
      if (result.error) {
        console.error(chalk.red("AI Error:"), result.error.message);
        continue;
      }
      const response = result.response.text();
      console.log(chalk.blue("AI:"), response);
    }
  } catch (error) {
    spinner.stop();
    console.error(chalk.red("An error occurred:"), error.message);
    process.exit(1);
  }
}

startAiChat();
