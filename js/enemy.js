var Enemy = function(x, y) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = 2;
}

Enemy.prototype.update = function(dt) {
  setInterval(this.render(), dt);
}

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  this.checkReset();
}

Enemy.prototype.checkReset = function() {
  if(this.x > 555) {
    this.reset();
  } else {
    this.x += this.speed;
  }
}

Enemy.prototype.reset = function() {
  this.x = 0;
  this.y = Math.floor(Math.random() * 2)*90 + 305;
}
