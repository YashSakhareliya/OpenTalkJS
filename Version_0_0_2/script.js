import fs from 'fs';
import ollama from "ollama";


let question = fs.readFileSync('Version_0_0_2/q1.txt').toString()
console.log(question)
let answer;

runChat()
async function runChat() {
    try {
      const response = await ollama.chat({
        model: "llama3.2:latest",
        messages: [{ role: 'user', content: question }]
      });
  
      answer = response.message.content;
      console.log("Chatbot Response:", answer);
      fs.appendFileSync('Version_0_0_2/a1.txt',answer)
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
  }

