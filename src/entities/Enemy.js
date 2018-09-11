const uuidv1 = require('uuid/v1');

export default class Enemy {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.width = 200;
    this.height = 200;

    this.x = canvas.width - 220;
    this.y = canvas.height / 2 - this.height / 2;

    this.velocity = {
      x: 3 * (Math.random() > 0.5 ? 1 : -1),
      y: 3 * (Math.random() > 0.5 ? 1 : -1)
    };

    this.health = 200;

    this.id = uuidv1();
  }

  init() {
    this.img = new Image();
    this.img.src = "./images/alienpng.png";
    
    this.img.onload = () => {
      this.draw();
    } 
  }

  draw() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x <= 0 || this.x >= this.canvas.width - this.width) {
      this.velocity.x *= -1; 
    }

    if (this.y <= 0 || this.y >= this.canvas.height - this.height) {
      this.velocity.y *= -1;
    }

    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, this.y, this.health, 5);
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}