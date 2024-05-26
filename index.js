// Required for the application to run
const inquirer = require("inquirer");
const fs = require("fs")
const {Circle, Triangle, Square} = require("./lib/shapes");
const { default: Choices } = require("inquirer/lib/objects/choices");
const requiredName = "./examples/require.svg";

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
        type: "list",
        message: "Please enter the shape you would like to display: ",
        choices: ["Circle", "Triangle", "Square"],
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

// Object declaration for the shape
const shapeObject = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square,
};

// Function to create the SVG file
function svgGenerator(responses) {
    const {textCharacters, textColor, shape, backgroundColor} = responses;
    const shapeOption = shapeObject[shape];
    const shapeVersion = new shapeOption();


// Define shape class with color constructor option
shapeVersion.setColor(backgroundColor);

// Return the SVG string
return `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    ${shapeVersion.render()}
    <text x="50" y="50" dy=".3em" text-anchor="middle" fill="${textColor}">${textCharacters}</text>
</svg>`;
}
// Write the SVG string to a file
function fileCreation(requiredName, data) {
    fs.writeFile (requiredName, data, (error) => 
    error ? console.error(error) : console.log("File created successfully!"));
}

//Initialize the application
function init() {
    inquirer.prompt(userInput)
    .then((responses) => {
        const svgString = svgGenerator(responses);
        fileCreation(requiredName, svgString);
    })
    .catch((error) => console.error("Error SVG not generated",error));
}


//call the function to initialize the application
init();