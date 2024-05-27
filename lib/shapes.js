// Define shape classes with color constructor option
class Shape {
    constructor() {
    this.color = "";
    }
    setColor(color) {
    this.color = color;
    }
}

//Circle class extends Shape
class Circle extends Shape {
    render() {
        return `<circle fill="${this.color}" cx="150" cy="100" r="100"/>`
    }
}

//Triangle class extends Shape
class Triangle extends Shape {
    render() {
        return `<polygon fill="${this.color}" points="150,0 300,200 0,200"/>`
    }
}

//Square class extends Shape
class Square extends Shape {
    render() {
        return `<rect fill="${this.color}" x="0" y="0" width="300" height="200"/>`
    }
}

module.exports = {Circle, Triangle, Square};