var Engine = (function(global) {

    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 550;
    canvas.height = 600;
    doc.body.appendChild(canvas);


    function main() {

        var now = Date.now(),
            dt = (now - lastTime) * 100;

        update(dt);
        render();

        lastTime = now;

        win.requestAnimationFrame(main);
    };

    function init() {
        reset();
        lastTime = Date.now();
        main();
    }


    function update(dt) {
        updateEntities(dt);
    }

    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });

        allWaterItems.forEach(function(item) {
            item.update(dt)
        });

        player.update(dt);
        key.update(dt);
    }

    function render() {

        var rowImages = [
                'images/grass-block.png',    // Row 2 of 2 of grass
                'images/grass-block.png',    // Row 2 of 2 of grass
                'images/water-block.png',   // Top row is water
                'images/water-block.png',   // Top row is water
                'images/water-block.png',   // Top row is water
                'images/water-block.png',   // Top row is water
                'images/grass-block.png',    // Row 2 of 2 of grass
                // 'images/stone-block.png',   // Row 1 of 3 of stone
                'images/stone-block.png',   // Row 2 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                // 'images/grass-block.png',   // Row 1 of 2 of grass
                'images/grass-block.png'    // Row 2 of 2 of grass
            ],
            numRows = 12,
            numCols = 10,
            row, col;

        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {

                ctx.drawImage(Resources.get(rowImages[row]), col * 55, row * 45);
            }
        }


        renderEntities();
    }

    function renderEntities() {

        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        allWaterItems.forEach(function(item) {
            item.render();
        });

        player.render();
        key.render();
    }

    function reset() {
        // noop
    }

    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png',
        'images/rock11.png',
        'images/wood_plank.png',
        'images/Key.png',
        'images/Heart.png',
        'images/car2.png'
    ]);
    Resources.onReady(init);

    global.ctx = ctx;
})(this);
