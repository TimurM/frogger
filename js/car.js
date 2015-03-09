var Car = function(x, y) {
  Wood.call(this, x, y);
  this.sprite = 'images/car2.png';
  this.speed = -1;
}

Car.prototype = Object.create(Wood.prototype);
Car.prototype.constructor = Car;

Car.prototype.reset = function() {
  this.x = 1005;
  this.y = Math.floor(Math.random() * 2)*90  + 325;
}
