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
  this.y = Math.floor(Math.random() * 2)*90 + 260;
}

var Rock = function(x, y) {
  Enemy.call(this, x, y)
  // this.sprite = 'images/rock.png';
  this.sprite = 'images/wood_plank.png';
  this.speed = -1;
}

Rock.prototype = Object.create(Enemy.prototype);
Rock.prototype.constructor = Rock;

Rock.prototype.checkReset = function() {
  if(this.x < -60) {
    this.reset();
  } else {
    this.x += this.speed;
  }
}

Rock.prototype.reset = function() {
  this.x = 555;
  this.y = Math.floor(Math.random() * 2)*90 + 45;
}

var Car = function(x, y) {
  Rock.call(this, x, y);
  this.sprite = 'images/car2.png';
  this.speed = -1;
}

Car.prototype = Object.create(Rock.prototype);
Car.prototype.constructor = Car;

Car.prototype.reset = function() {
  this.x = 1005;
  this.y = Math.floor(Math.random() * 2)*90  + 280;
}

var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 250;
  this.y = 450;
}


Player.prototype.update = function(dt) {
  setInterval(this.render(), dt);
  player.checkCollisions();
  player.checkSafeItem();
}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.checkCollisions = function() {

  var player = this;
  allEnemies.forEach(function(enemy) {
    if(Math.abs(player.x - enemy.x) < 40 && Math.abs(player.y - enemy.y) < 30){
        player.reset();
      }
    })
}

Player.prototype.checkSafeItem = function() {
  var player = this;
  var safe = false;
  allWaterItems.forEach(function(item) {
      if((item.x - player.x) < 5 && (item.x - player.x) > -120 && (player.y - item.y) < 30 && (player.y - item.y) > 1){
        //250 - 240
        safe = true;
        player.x += item.speed*2;
      }
      if(player.y < 180 && !safe) {
        player.reset()
      }
  })

}

Player.prototype.reset = function(x, y) {
  this.y = y || 450;
  this.x = x || 250;
}

Player.prototype.handleInput = function(key) {

  if(key === 'up') {
    if(this.y < 30) {
      this.reset();
    } else {
      this.y -= 30;
    }
  }else if(key === 'down') {
    this.y += 30;
  }else if(key === 'left') {
    this.x -= 30;
  }else if(key === 'right') {
    this.x += 30;
  }
}

var genWaterItems = function() {
  var waterItems = [];

  for(var i = 0; i < 2; i++) {
    var x = i * 180 + 50*i;
    var y = Math.floor(Math.random() * 2)*90 + 45;
    var newRock = new Rock(x, y);
    waterItems.push(newRock);
  }
  return waterItems;
}

var genEnemies = function() {
  var enemies = [];
  for(var i=0; i < 5; i++) {
    // var x = (Math.random(1)*600) + 100;
    var x = i * 230;
    var y = Math.floor(Math.random() * 2)*90 + 260;
    var newEnemy = new Enemy(x, y);
    enemies.push(newEnemy);
  }

  for(var i = 0; i < 5; i++) {
    var x = i * 230;
    var y = Math.floor(Math.random() * 2)*90  + 280;
    var newCar = new Car(x, y);
    enemies.push(newCar);
  }
  return enemies;
}
var allEnemies = genEnemies();
var allWaterItems = genWaterItems();
var player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
