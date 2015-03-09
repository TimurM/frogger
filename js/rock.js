var Rock = function(x, y) {
  Enemy.call(this, x, y);
  this.sprite = 'images/rock1.png';
}

Rock.prototype = Object.create(Enemy.prototype);
Rock.prototype.constructor = Rock;

Rock.prototype.reset = function() {
  this.x = -100;
  this.y = Math.floor(Math.random() * 2)*90;
}
