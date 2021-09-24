require("dotenv").config();
const ngrok_path = process.env.ngrok_path

const profile1 = {
    "type": "image",
    "originalContentUrl": ngrok_path + "/profiles/person1/profile.png",
    "previewImageUrl": ngrok_path + "/profiles/person1/profile.png"
} 

const profile2 = {
    "type": "image",
    "originalContentUrl": ngrok_path + "/profiles/person2/profile.png",
    "previewImageUrl": ngrok_path + "/profiles/person2/profile.png"
} 

const profile3 = {
    "type": "image",
    "originalContentUrl": ngrok_path + "/profiles/person3/profile.png",
    "previewImageUrl": ngrok_path + "/profiles/person3/profile.png"
} 

const profile4 = {
    "type": "image",
    "originalContentUrl": ngrok_path + "/profiles/person4/profile.png",
    "previewImageUrl": ngrok_path + "/profiles/person4/profile.png"
} 

const profile5 = {
    "type": "image",
    "originalContentUrl": ngrok_path + "/profiles/person5/profile.png",
    "previewImageUrl": ngrok_path + "/profiles/person5/profile.png"
} 

module.exports = Object.freeze({profile1, profile2, profile3, profile4, profile5})
