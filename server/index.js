import P5 from "p5";
import io from "socket.io-client";

import { Movement, mobile } from "./movement";

new P5(p => {
    const socket = io();

    socket.on("connect", () => {
        console.log("connected as", socket.id);
    });

    let canvas;
    let joystick;

    p.setup = () => {
        p.createCanvas(innerWidth, innerHeight).class("game");

        p.noStroke();

        canvas = document.querySelector(".game");
        if (mobile) joystick = new Movement(canvas, p);
    };

    p.draw = () => {
        p.background(244, 234, 201);

        if (mobile) joystick.draw();
    };

    p.windowResized = () => {
        p.resizeCanvas(innerWidth, innerHeight);
    };
});