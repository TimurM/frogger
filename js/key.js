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
  this.x = 250;
  this.y = 15;
}
