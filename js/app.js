var genWaterItems = function() {
  var waterItems = [];

  for(var i = 0; i < 2; i++) {
    var x = i * 180 + 50*i;
    var y = Math.floor(Math.random() * 2)*90 + 45;
    var newRock = new Wood(x, y);
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
