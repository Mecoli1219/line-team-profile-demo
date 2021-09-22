const express = require("express");
const linebot = require("linebot");
// const line = require("@line/bot-sdk");

require("dotenv").config();

const app = express();
const bot = new linebot({
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken,
});

// temporary data storage
let test_score = 0;
let test_level = 1;

// template of three quizes (in json format)
let question1 = {
  type: "flex",
  altText: "this is a flex message",
  contents: {
    type: "carousel",
    contents: [
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "separator",
              margin: "md",
              color: "#9D9D9D",
            },
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: "question1 description",
                  size: "sm",
                },
              ],
              margin: "md",
            },
          ],
        },
      },
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Option1",
              weight: "bold",
              size: "md",
              wrap: true,
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "option 1 content",
                      wrap: true,
                      color: "#8c8c8c",
                      size: "xs",
                      flex: 5,
                    },
                  ],
                },
              ],
            },
          ],
          spacing: "sm",
          paddingAll: "13px",
        },
        footer: {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "SELECT",
              align: "center",
              action: {
                type: "postback",
                label: "action",
                data: "level=1&score=1",
              },
              size: "md",
              style: "italic",
              weight: "bold",
              gravity: "center",
              color: "#FFAAD5",
            },
          ],
          borderColor: "#FF0000",
          borderWidth: "medium",
          backgroundColor: "#FF5555",
        },
      },
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip11.jpg",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Option2",
              weight: "bold",
              size: "sm",
              wrap: true,
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "option 2 content",
                      wrap: true,
                      color: "#8c8c8c",
                      size: "xs",
                      flex: 5,
                    },
                  ],
                },
              ],
            },
          ],
          spacing: "sm",
          paddingAll: "13px",
        },
        footer: {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "SELECT",
              align: "center",
              action: {
                type: "postback",
                label: "action",
                data: "level=1&score=2",
              },
              size: "md",
              style: "italic",
              weight: "bold",
              gravity: "center",
              color: "#FFED97",
            },
          ],
          borderColor: "#C6A300",
          borderWidth: "medium",
          backgroundColor: "#EAC100",
        },
      },
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip12.jpg",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Option3",
              weight: "bold",
              size: "sm",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "option 3 content",
                      wrap: true,
                      color: "#8c8c8c",
                      size: "xs",
                      flex: 5,
                    },
                  ],
                },
              ],
            },
          ],
          spacing: "sm",
          paddingAll: "13px",
        },
        footer: {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "SELECT",
              align: "center",
              action: {
                type: "postback",
                label: "action",
                data: "level=1&score=3",
              },
              size: "md",
              style: "italic",
              weight: "bold",
              gravity: "center",
              color: "#97CBFF",
            },
          ],
          borderColor: "#0066CC",
          borderWidth: "medium",
          backgroundColor: "#0080FF",
        },
      },
    ],
  },
};

let question2 = {
  type: "flex",
  altText: "this is a flex message",
  contents: {
    type: "carousel",
    contents: [
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "separator",
              margin: "md",
              color: "#9D9D9D",
            },
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: "question2 description",
                  size: "sm",
                },
              ],
              margin: "md",
            },
          ],
        },
      },
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Option1",
              weight: "bold",
              size: "md",
              wrap: true,
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "option 1 content",
                      wrap: true,
                      color: "#8c8c8c",
                      size: "xs",
                      flex: 5,
                    },
                  ],
                },
              ],
            },
          ],
          spacing: "sm",
          paddingAll: "13px",
        },
        footer: {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "SELECT",
              align: "center",
              action: {
                type: "postback",
                label: "action",
                data: "level=2&score=1",
              },
              size: "md",
              style: "italic",
              weight: "bold",
              gravity: "center",
              color: "#FFAAD5",
            },
          ],
          borderColor: "#FF0000",
          borderWidth: "medium",
          backgroundColor: "#FF5555",
        },
      },
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip11.jpg",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Option2",
              weight: "bold",
              size: "sm",
              wrap: true,
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "option 2 content",
                      wrap: true,
                      color: "#8c8c8c",
                      size: "xs",
                      flex: 5,
                    },
                  ],
                },
              ],
            },
          ],
          spacing: "sm",
          paddingAll: "13px",
        },
        footer: {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "SELECT",
              align: "center",
              action: {
                type: "postback",
                label: "action",
                data: "level=2&score=2",
              },
              size: "md",
              style: "italic",
              weight: "bold",
              gravity: "center",
              color: "#FFED97",
            },
          ],
          borderColor: "#C6A300",
          borderWidth: "medium",
          backgroundColor: "#EAC100",
        },
      },
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip12.jpg",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Option3",
              weight: "bold",
              size: "sm",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "option 3 content",
                      wrap: true,
                      color: "#8c8c8c",
                      size: "xs",
                      flex: 5,
                    },
                  ],
                },
              ],
            },
          ],
          spacing: "sm",
          paddingAll: "13px",
        },
        footer: {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "SELECT",
              align: "center",
              action: {
                type: "postback",
                label: "action",
                data: "level=2&score=3",
              },
              size: "md",
              style: "italic",
              weight: "bold",
              gravity: "center",
              color: "#97CBFF",
            },
          ],
          borderColor: "#0066CC",
          borderWidth: "medium",
          backgroundColor: "#0080FF",
        },
      },
    ],
  },
};

let question3 = {
  type: "flex",
  altText: "this is a flex message",
  contents: {
    type: "carousel",
    contents: [
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "separator",
              margin: "md",
              color: "#9D9D9D",
            },
            {
              type: "box",
              layout: "baseline",
              contents: [
                {
                  type: "text",
                  text: "question3 description",
                  size: "sm",
                },
              ],
              margin: "md",
            },
          ],
        },
      },
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Option1",
              weight: "bold",
              size: "md",
              wrap: true,
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "option 1 content",
                      wrap: true,
                      color: "#8c8c8c",
                      size: "xs",
                      flex: 5,
                    },
                  ],
                },
              ],
            },
          ],
          spacing: "sm",
          paddingAll: "13px",
        },
        footer: {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "SELECT",
              align: "center",
              action: {
                type: "postback",
                label: "action",
                data: "level=3&score=1",
              },
              size: "md",
              style: "italic",
              weight: "bold",
              gravity: "center",
              color: "#FFAAD5",
            },
          ],
          borderColor: "#FF0000",
          borderWidth: "medium",
          backgroundColor: "#FF5555",
        },
      },
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip11.jpg",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Option2",
              weight: "bold",
              size: "sm",
              wrap: true,
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "option 2 content",
                      wrap: true,
                      color: "#8c8c8c",
                      size: "xs",
                      flex: 5,
                    },
                  ],
                },
              ],
            },
          ],
          spacing: "sm",
          paddingAll: "13px",
        },
        footer: {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "SELECT",
              align: "center",
              action: {
                type: "postback",
                label: "action",
                data: "level=3&score=2",
              },
              size: "md",
              style: "italic",
              weight: "bold",
              gravity: "center",
              color: "#FFED97",
            },
          ],
          borderColor: "#C6A300",
          borderWidth: "medium",
          backgroundColor: "#EAC100",
        },
      },
      {
        type: "bubble",
        size: "micro",
        hero: {
          type: "image",
          url: "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip12.jpg",
          size: "full",
          aspectMode: "cover",
          aspectRatio: "320:213",
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Option3",
              weight: "bold",
              size: "sm",
            },
            {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "option 3 content",
                      wrap: true,
                      color: "#8c8c8c",
                      size: "xs",
                      flex: 5,
                    },
                  ],
                },
              ],
            },
          ],
          spacing: "sm",
          paddingAll: "13px",
        },
        footer: {
          type: "box",
          layout: "baseline",
          contents: [
            {
              type: "text",
              text: "SELECT",
              align: "center",
              action: {
                type: "postback",
                label: "action",
                data: "level=3&score=3",
              },
              size: "md",
              style: "italic",
              weight: "bold",
              gravity: "center",
              color: "#97CBFF",
            },
          ],
          borderColor: "#0066CC",
          borderWidth: "medium",
          backgroundColor: "#0080FF",
        },
      },
    ],
  },
};

// event handlers
bot.on("message", async (event) => {
    // event.reply(event.message.text)
    if (event.message.text.toUpperCase() === "START"){
    let token = event.replyToken;
    console.log(token);
    bot.reply(token, [{
      type: 'text',
      text: 'QUIZ START!'
    }, question1]);
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
      test_score = 0;
      test_level = 1;
    }
  }
});

// webhook
app.post("/webhook", bot.parser());
app.listen(3000, (res) => {
  console.log("伺服器服務運行在 http://localhost:3000");
});
