const { Circle, Triangle, Square } = require("./shapes");

// Test the Circle class
describe("Circle", () => {
    it("should create a circle object", () => {{
        const circle = new Circle();
        circle.setColor("green")
        expect(circle.render()).toEqual(
            '<circle fill="green" cx="50" cy="50" r="50"/>'
        );
    }});
    });

// Test the Triangle class
describe("Triangle", () => {
    it("should create a triangle object", () => {{
        const triangle = new Triangle();
        triangle.setColor("red")
        expect(triangle.render()).toEqual(
            '<polygon fill="red" points="50,0 100,100 0,100"/>'
        );
    }});
    });


// Test the Square class
describe("Square", () => {
    it("should create a square object", () => {{
        const square = new Square();
        square.setColor("yellow")
        expect(square.render()).toEqual(
            '<rect fill="yellow" x="0" y="0" width="100" height="100"/>'
        );
    }});
    });