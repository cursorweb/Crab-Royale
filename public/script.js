const socket = io();

let canvas;
let joystick;

function setup() {
    createCanvas(windowWidth, windowHeight).class("game");

    noStroke();

    canvas = document.querySelector(".game");
    if (mobile) joystick = new Movement(canvas);
}

function draw() {
    background(244, 234, 201);

    if (mobile) joystick.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
