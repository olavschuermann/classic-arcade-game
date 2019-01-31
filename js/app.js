// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    
    // Size of enemy sprite (for collision detection)
    // this.width = '90';
    // this.height = '80';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // Move the enemy
    this.x += this.speed * dt;
    
    // Check if enemy is offscreen & reset position
    if (this.x > 504) {
        this.x = 0;
        // Set new speed for enemy
        this.speed = 80 + (Math.floor(Math.random() * 70));
        console.log(this.speed);
    }

    // Check for collision enemy and player (http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/#d-collision-detection)
    if (this.x < player.x + 90
        && this.x + 60 > player.x 
        && this.y < player.y + 80
        && this.y + 80 > player.y) {
        console.log('Gotcha!');

        // Reset Player
        player.x = '350';
        player.y = '420';
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';  
        // Initial location for player
        this.x = '350';
        this.y = '420';
        // Size of player sprite
        // this.width = '60';
        // this.height = '80';
    }

    update() {
        Player.prototype.update = function(dt) {
            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
            // all computers.
        };
    }

    render() {
        Player.prototype.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        };       
    }

    handleInput(event) {
        // console.log(event);
        switch(event) {
            case 'left':
                this.x = this.x -20;
                console.log('X:' + this.x + ' Y:' + this.y);
                break;
            case 'right':
                this.x = this.x +20;
                console.log('X:' + this.x + ' Y:' + this.y);
                break;
            case 'up':
                this.y = this.y -20;
                console.log('X:' + this.x + ' Y:' + this.y);
                break;
            case 'down':
                this.y = this.y +20;
                console.log('X:' + this.x + ' Y:' + this.y);
                break;        
        }

        // Player on field?
        if (this.y < 30) {
            this.x = '350';
            this.y = '420';      
        } else if (this.y > 435) {
            this.y = '435';
        } else if (this.x > 410) {
            this.x = '410';
        } else if (this.x < -10) {
            this.x = '-10';
        }
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Create enemies / TO-DO: different starting points
let enemy1 = new Enemy (0, 50, 50);
let enemy2 = new Enemy (0, 140, 150);
let enemy3 = new Enemy (0, 230, 100);

const allEnemies = [enemy1, enemy2, enemy3];

let player = new Player;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
