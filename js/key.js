var Key = function() {
  Enemy.call(this);
  this.x = 250;
  this.y = 15;
  this.sprite = 'images/Key.png';
  this.speed = 0;
}

Key.prototype = Object.create(Enemy.prototype);
Key.prototype.constructor = Key;

Key.prototype.reset = function() {
  this.sprite = 'images/Heart.png';
  var that = this;
  setTimeout(function() {
    that.sprite = 'images/Key.png';
  }, 2000)
  this.x = 250;
  this.y = 15;
}

Key.prototype.render = function(newImage) {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  this.checkReset();
}
