const mobile = true;//'createTouch' in document;

class Movement {
    constructor(canvas) {
        this.canvas = canvas;
        this.left = -1;
        this.right = -1;

        this.moveVec = {
            fg: createVector(0, 0), // finger
            bg: createVector(0, 0), // back
        };

        this.attkVec = {
            fg: createVector(0, 0), // finger
            bg: createVector(0, 0), // back
        };

        this.canvas.addEventListener("touchstart", this.onTouchStart.bind(this), false);
        this.canvas.addEventListener("touchmove", this.onTouchMove.bind(this), false);
        this.canvas.addEventListener("touchend", this.onTouchEnd.bind(this), false);
    }

    draw() {
        // movement
        if (this.left > -1) {
            fill(0, 0, 0, 255 / 4);
            circle(this.moveVec.bg.x, this.moveVec.bg.y, 100, 100);
            fill(0, 0, 0, 255 / 3);
            circle(this.moveVec.fg.x, this.moveVec.fg.y, 50, 50);
        }

        // attack
        if (this.right > -1) {
            fill(0, 0, 0, 255 / 4);
            circle(this.attkVec.bg.x, this.attkVec.bg.y, 100, 100);
            fill(0, 0, 0, 255 / 3);
            circle(this.attkVec.fg.x, this.attkVec.fg.y, 50, 50);
        }
    }

    onTouchStart(e) {
        for (const touch of e.changedTouches) {
            if (this.left < 0 && touch.clientX <= width / 2) {
                this.left = touch.identifier;

                this.moveVec.bg.x = touch.clientX;
                this.moveVec.bg.y = touch.clientY;

                this.moveVec.fg.x = touch.clientX;
                this.moveVec.fg.y = touch.clientY;
            }

            if (this.right < 0 && touch.clientX > width / 2) {
                this.right = touch.identifier;

                this.attkVec.bg.x = touch.clientX;
                this.attkVec.bg.y = touch.clientY;

                this.attkVec.fg.x = touch.clientX;
                this.attkVec.fg.y = touch.clientY;
            }
        }
    }

    onTouchMove(e) {
        e.preventDefault();

        for (const touch of e.changedTouches) {
            if (this.left == touch.identifier) {
                this.moveVec.fg.x = touch.clientX;
                this.moveVec.fg.y = touch.clientY;
            }

            if (this.right == touch.identifier) {
                this.attkVec.fg.x = touch.clientX;
                this.attkVec.fg.y = touch.clientY;
            }
        }
    }

    onTouchEnd(e) {
        for (const touch of e.changedTouches) {
            if (this.left == touch.identifier) {
                this.left = -1;
            }

            if (this.right == touch.identifier) {
                this.right = -1;
            }
        }
    }
}