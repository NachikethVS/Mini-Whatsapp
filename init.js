const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successfull");
})
  .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

  let allChats = [
    {
      from: "nachiketh",
      to: "apna college",
      msg: "thanks for help",
      created_at: new Date(),
    },
    {
      from: "apna college",
      to: "nachiketh",
      msg: "always happy to help!",
      created_at: new Date(),
    },
    {
      from: "ria",
      to: "code academy",
      msg: "where can I find the assignment?",
      created_at: new Date(),
    },
    {
      from: "code academy",
      to: "ria",
      msg: "check the dashboard under 'Week 3'.",
      created_at: new Date(),
    },
    {
      from: "arjun",
      to: "tech tribe",
      msg: "how do I use aggregate pipeline?",
      created_at: new Date(),
    },
    {
      from: "tech tribe",
      to: "arjun",
      msg: "let’s walk through an example together.",
      created_at: new Date(),
    },
    {
      from: "meera",
      to: "dev nest",
      msg: "can you review my PR?",
      created_at: new Date(),
    },
    {
      from: "dev nest",
      to: "meera",
      msg: "on it—should be done in 20 minutes.",
      created_at: new Date(),
    },
    {
      from: "karan",
      to: "data dojo",
      msg: "is it okay to normalize this dataset?",
      created_at: new Date(),
    },
    {
      from: "data dojo",
      to: "karan",
      msg: "yes, especially before running ML models.",
      created_at: new Date(),
    },
  ];
  

  Chat.insertMany(allChats);

