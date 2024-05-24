// Required for the application to run
const inquirer = require("inquirer")
const fs = require("fs")
const {Circle, Triangle, Square} = require("./lib/shapes")

// Prompt the user for the input. 
// Ask for Text Characters, Text Color, Background Color, and Shape

const userInput = [
    // Ask for Text Characters
    {
        type: "input",
        message: "Please enter the text characters you would like to display: ",
        name: "textCharacters",
        validate: function (value) {
            if (value.length >= 2) {
                return true;
            } else {
                return "Please enter at least two characters.";
            }
        }
    },
    // Ask for Text Color
    {
        type: "input",
        message: "Please enter the text color you would like to display, or a hex code:",
        name: "textColor",
        default: "black",
    },
    // Ask for Shape
    {
        type: "input",
        message: "Please enter the shape you would like to display: ",
        Options: ["Circle", "Triangle", "Square"],
        name: "shape",
    },
    // Ask for Background Color
    {
        type: "input",
        message: "Please enter the background color you would like to display, or a hex code:",
        name: "backgroundColor",
        default: "teal",
    },
];