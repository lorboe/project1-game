class Mouse {
  constructor(ctx,url) {
    this.ctx = ctx,
    this.type = "mouse",
    this.img = new Image(),
    this.img.src = url,
    this.x = Math.floor(Math.random()*x)
    this.y = Math.floor(Math.random()*y)
    this.height = 65,
    this.width = 65;
    this.vibisibility = false

  }

update() {
this.x 
this.y 
}

  
draw() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }



}

