var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 250;
  this.y = 495;
}


Player.prototype.update = function(dt) {
  setInterval(this.render(), dt);
  player.checkWin();
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

Player.prototype.checkWin = function() {

  if ((key.x - player.x) < 20 && (key.x - player.x) > -20 && Math.abs(player.y - key.y) < 20) {
    player.reset();
    key.reset();
  }
}

Player.prototype.checkSafeItem = function() {
  var player = this;
  var safe = false;
  allWaterItems.forEach(function(item) {
    // if((item.x - player.x) < 5 && (item.x - player.x) > -120 && (player.y - item.y) < 30 && (player.y - item.y) > 1){
    if((item.x - player.x) < 25 && (item.x - player.x) > -100 && (player.y - item.y) < 50 && (player.y - item.y) > 1){
      safe = true;
      player.x += item.speed*2;
    }
  })

  if(player.y < 225 && player.y > 53 && !safe) {
    player.reset()
  }
}

Player.prototype.reset = function(x, y) {
  this.y = y || 495;
  this.x = x || 250;
}

Player.prototype.handleInput = function(key) {
  if((key === 'up') && (this.y > 20)) {
      this.y -= 35;
  }else if((key === 'down') && (this.y < 460)) {
    this.y += 35;
  }else if((key === 'left') && (this.x > 0)) {
    this.x -= 30;
  }else if((key === 'right') && (this.x < 500)) {
    this.x += 30;
  }else if(key === "space_bar") {
    this.y -= 100;
  }
}
