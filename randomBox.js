class Square {
    width;
    height;
    color;
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
        console.log(width, height);
        let boxWidth = Math.floor(Math.random() * (width - this.width));
        let boxHeight = Math.floor(Math.random() * (height - this.height));
        let box = document.createElement('div');
        box.style.position = 'absolute';
        box.style.top = boxHeight + 'px';
        box.style.left = boxWidth + 'px';
        box.style.width = this.width + 'px';
        box.style.height = this.height + 'px';
        box.style.backgroundColor = this.color;
        document.body.appendChild(box);
    }
}
let 네모링 = new Square(30, 30, 'red');
let 초록네모링 = new Square(30, 30, 'green');
네모링.draw();
네모링.draw();
네모링.draw();
네모링.draw();
초록네모링.draw();
