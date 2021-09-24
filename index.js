const {question1, question2, question3} = require("./src/statics/json.js")
const {profile1, profile2, profile3, profile4, profile5} = require("./src/profiles/json")

const express = require("express");
const linebot = require("linebot");
// const line = require("@line/bot-sdk");

require("dotenv").config();

const app = express();
app.use(express.static(__dirname + '/src'))
const bot = new linebot({
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken,
});

// temporary data storage
let test_score = 0;
let test_level = 1;

// event handlers
bot.on("message", async (event) => {
    if (event.message.text.toUpperCase() === "START"){
    let token = event.replyToken;
    console.log(token);
    bot.reply(token, [{
      type: 'text',
      text: '您好！歡迎光臨EELITE的小店！我們將依據您的喜愛與嚮往的風格為您挑選出最適合您的專員，就讓我們開始做幾項小測驗吧！'
    }, question1]);
    console.log('ok')
  }
});

// fetch data stored in postback, should change the data format later
const fetchInfo = (data) => {
  let attributes = data.split('&');
  let value1 = attributes[0].split('=')[1];
  let value2 = attributes[1].split('=')[1];

  return [Number(value1), Number(value2)];
};

bot.on("postback", async (event) => {
  console.log(event.postback);
  // event.reply("You select " + event.postback.data);
  const [level, score] = fetchInfo(event.postback.data);
  console.log(level, score);
  const token = event.replyToken;
  if (level === test_level){
    test_score += score;
    test_level += 1;
    if (test_level === 2){
      bot.reply(token, [{
        type: 'text',
        text: "Here's the second QUIZ!!. You're current score is " + test_score 
    }, question2]);
  }
    else if (test_level === 3){
      bot.reply(token, [{
        type: 'text',
        text: "You're almost there. Here's the third QUIZ!!. You're current score is " + test_score 
    }, question3]);
  }
    else if (test_level === 4){
      bot.reply(token, [{
        type: 'text',
        text: "You did it!!. You're final score is " + test_score 
    }]);
      test_level = 1;
      if (test_score <= 4){
        bot.reply(token, [{
          type: "text", 
          text: "According to your selection, you may be interested in the following people:"
        }, profile1, profile2]);
      }
      if (test_score > 4 && test_score <= 7){
        bot.reply(token, [{
          type: "text", 
          text: "According to your selection, you may be interested in the following people:"
        }, profile3, profile4]);
      }
      if (test_score > 7){
        bot.reply(token, [{
          type: "text", 
          text: "According to your selection, you may be interested in the following person:"
        }, profile5]);
      }
      test_score = 0;
    }
  }
});

// webhook
app.post("/webhook", bot.parser());
app.listen(3000, (res) => {
  console.log("伺服器服務運行在 http://localhost:3000");
});
