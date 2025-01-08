import fs from 'fs';
import ollama from 'ollama';

let folder = 'Questions';

async function AskME(question) {
  try {
    const response = await ollama.chat({
      model: "llama3.2:latest",
      messages: [{ role: 'user', content: question }]
    });

    return response.message.content;
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// Select question
let topic =  process.argv[2];
console.log(topic);

let Number = Math.floor(Math.random()*(3)+1)

let folder_path = `Questions/${topic}`
let file_path = `${folder_path}/q${Number}.txt`

console.log(file_path);
let answer;
fs.readFile(file_path,'utf-8',async (err,data)=>{
    if(err) throw err;
    console.log(data);
    answer =  await AskME(data);
    console.log(answer);
    fs.appendFile(`a1.txt`, `${data} - ${answer}\n`, (err) => {
      if (err) throw err;
      console.log('The answer has been saved!');
    });
})


