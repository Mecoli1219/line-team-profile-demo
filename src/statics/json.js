require("dotenv").config();
const ngrok_path = process.env.ngrok_path
const {question1_text, question2_text, question3_text} = require("./text.js")

const question1 = {
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
          url: ngrok_path + '/statics/question1/question.png',
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
                  text: question1_text.question,
                  size: "sm",
                  wrap: true,
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
          url: ngrok_path + '/statics/question1/option1.png',
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
              text: question1_text.option1.name,
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
                      text: question1_text.option1.description,
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
          url: ngrok_path + '/statics/question1/option2.png',
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
              text: question1_text.option2.name,
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
                      text: question1_text.option2.description,
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
          url: ngrok_path + '/statics/question1/option3.png',
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
              text: question1_text.option3.name,
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
                      text: question1_text.option3.description,
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

const question2 = {
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
          url: ngrok_path + '/statics/question2/question.png',
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
                  text: question2_text.question,
                  size: "sm",
                  wrap: true,
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
          url: ngrok_path + '/statics/question2/option1.png',
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
              text: question2_text.option1.name,
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
                      text: question2_text.option1.description,
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
          url: ngrok_path + '/statics/question2/option2.png',
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
              text: question2_text.option2.name,
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
                      text: question2_text.option2.description,
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
          url: ngrok_path + '/statics/question2/option3.png',
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
              text: question2_text.option3.name,
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
                      text: question2_text.option3.description,
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

const question3 = {
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
          url: ngrok_path + '/statics/question3/question.png',
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
                  text: question3_text.question,
                  size: "sm",
                  wrap: true,
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
          url: ngrok_path + '/statics/question3/option1.png',
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
              text: question3_text.option1.name,
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
                      text: question3_text.option1.description,
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
          url: ngrok_path + '/statics/question3/option2.png',
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
              text: question3_text.option2.name,
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
                      text: question3_text.option2.description,
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
          url: ngrok_path + '/statics/question3/option3.png',
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
              text: question3_text.option3.name,
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
                      text: question3_text.option3.description,
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

module.exports = Object.freeze({question1, question2, question3})