import { tool } from "@langchain/core/tools";
import {ChatGroq} from "@langchain/groq";
export const getDiscoveryCallDetails = tool((input) => {
    // Option1
    // In a real scenario, you would connect this to Google Calendar API to check the next available slot.

    //Temp Option2 - Hardcoded response
    // return "The next avaialable slot for a Discovery Call is on Thu Feb 27 2025."


    //Temp Option3 - Dynamically Calculated response set to next Monday.
    var d = new Date();
    d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);      
    return "The next avaialable slot for a Discovery Call is on "+d.toDateString();

  }, {
    name: "getDiscoveryCall",
    description: "Call to get the next available Discovery call slot.",
  });

export const getWeatherTool = tool((input) =>{
  console.log("inside getWeatherTool");
  return "The weather is 30C";
},{
  name:"getWeather",
  description:"Call to get weather"
})

export const getSimilarCoursesTool = tool(async (input) =>{
  console.log("inside getSimilarCoursesTool 1");
  const chat = new ChatGroq({
    model: "qwen-qwq-32b",
    temperature: 0,
    apiKey: process.env.GROQ_API_KEY 
    // other params...
  });
  console.log("inside getSimilarCoursesTool 2");
  const aiMsg = await chat.invoke([
    {
      role: "system",
      content:
        "You are a helpful assistant that returns similar Neuroscience courses in a short response.",
    },
    { role: "user", content: "Find similar courses" },
  ]);
  console.log("inside getSimilarCoursesTool 3:"+aiMsg);
  return aiMsg;
},{
  name:"getSimilarCoursesTool",
  description:"Call to get Similar Courses"
})