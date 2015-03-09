var Wood = function(x, y) {
  Enemy.call(this, x, y)
  // this.sprite = 'images/rock.png';
  this.sprite = 'images/wood_plank.png';
  this.speed = -1;
}

Wood.prototype = Object.create(Enemy.prototype);
Wood.prototype.constructor = Wood;

Wood.prototype.checkReset = function() {
  if(this.x < -60) {
    this.reset();
  } else {
    this.x += this.speed;
  }
}

Wood.prototype.reset = function() {
  this.x = 555;
  this.y = Math.floor(Math.random() * 2)*90 + 90;
}
