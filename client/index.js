import P5 from "p5";
import io from "socket.io-client";

import { Movement, mobile } from "./movement";

const socket = io();
const players = {};

socket.on("connect", () => {
    console.log("connected as", socket.id);
});

new P5(p => {
    let joystick;

    p.setup = () => {
        p.createCanvas(innerWidth, innerHeight).class("game");

        p.noStroke();

        if (mobile) joystick = new Movement(document.querySelector(".game"), p);
    };

    p.draw = () => {
        p.background(244, 234, 201);

        if (mobile) joystick.draw();
    };

    p.windowResized = () => {
        p.resizeCanvas(innerWidth, innerHeight);
    };
});