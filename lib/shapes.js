// Define shape classes with color constructor option
class Shape {
    constructor(color) {
    this.color = color;
    }
    getColor() {
    return this.color;
    }
}

//Circle class extends Shape
class Circle extends Shape {
    render() {
        return `<circle fill="${this.color}" cx="50" cy="50" r="50"/>`
    }
}

//Triangle class extends Shape
class Triangle extends Shape {
    render() {
        return `<polygon fill="${this.color}" points="50,0 100,100 0,100"/>`
    }
}

//Square class extends Shape
class Square extends Shape {
    render() {
        return `<rect fill="${this.color}" x="0" y="0" width="100" height="100"/>`
    }
}

module.exports = { Circle, Triangle, Square };