//Opstilling af variabler til canvas.
var canvas;
var context; 

//Input-variabler til bevægelse af spilleren
var upKey;
var rightKey;
var downKey;
var leftKey; 

//Opstilling af variabler til spillet.
var gameLoop;
var player;
var coins = [];
var obstacles = [];
var enemies = [];

//Kører, når siden loades.
window.onload = function() {
    //Canvas-variabler tildeles en mening.
    canvas = document.getElementById("game-canvas"); 
    context = canvas.getContext("2d"); 

    //Opstilling af kontrol-taster.
    setupInputs(); 

    //Skab spilleren.
    player = new Player(630, 600);

    //Skab obstacles
    /*
    for (let i = 0; i < 6; i++) {
        obstacles.push(new obstacle(0 + 100*i, 650, 780, 100, 3));
    }
    for (let i = 0; i < 3; i++) {
        obstacles.push(new obstacle(1180, 500 + 100*i, 50, 100, 3));
    }
    obstacles.push(new obstacle(0, 520, 100, 100, 2));
    */
    obstacles.push(new obstacle(0, 650, 1280, 50, 3));
    obstacles.push(new obstacle(0, 500, 500, 30, 3));
    obstacles.push(new obstacle(780, 500, 500, 30, 3));
    obstacles.push(new obstacle(0, 350, 250, 30, 3));
    obstacles.push(new obstacle(1030, 350, 250, 30, 3));
    obstacles.push(new obstacle(400, 270, 500, 30, 3));
    obstacles.push(new obstacle(0, 130, 500, 30, 3));
    obstacles.push(new obstacle(780, 130, 550, 30, 3));

    //Skab enemies
    enemies.push(new Enemy(10, 80));

    //skab coins
    coins.push(new Coin(600, 600, 22, 22));
    coins.push(new Coin(50, 80, 22, 22));
    coins.push(new Coin(1000, 80, 22, 22));
    coins.push(new Coin(720, 220, 22, 22));
    coins.push(new Coin(360, 450, 22, 22));
    coins.push(new Coin(900, 450, 22, 22));

    //Start game loop. Kalder "skridt-funktionen" 30 gange i sekundet. Skaber illusion af bevægelse.
    gameLoop = setInterval(skridt, 1000/30); 
}

function skridt() {
    //Spillerens skridt
    player.skridt();
    
    //Draw'er alting. Kalder function "draw", da vi canvas skal tegnes, hver gang vi bevæger os.
    draw();  
}

function draw() {
    //Clear vores canvas, så spillerens, fjendernes osv. - placering konstant opdateres.
    //Variablen bruges til at tegne en hvid firkant på canvas.
    context.fillStyle = "white"; 
    context.fillRect(0, 0, 1280, 700);  

    //Draw spilleren
    player.draw();

     //Draw coins
    for (let i = 0; i < coins.length; i++) {
        coins[i].draw();
    }

    //Draw enemy og kald move-function. 
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].draw();
        enemies[i].move();  
    }

    //Draw obstacles
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].draw(); 

    
        }
}
//Opstiller kontrollerne, som styrer spillerens bevægelse. Hvis en af de følgende knapper nedtrykkes, ændres den tilhørende boolean-variables værdi. 
function setupInputs() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = true; 
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = true; 
        } else if (event.key === "s" || event.key === "ArrowDown") {
            DownKey = true; 
        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = true; 
        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = false; 
        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = false; 
        } else if (event.key === "s" || event.key === "ArrowDown") {
            DownKey = false; 
        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = false; 
        }
    });
}

//Undersøger om en af de fire conditions bliver overholdt. Dette vil sige, at player ikke kolliderer med en obstacle, og skal derfor return false. Hvis dog alle fire conditons overholdes, så betyder det, at player må kollidere med en obstacle. Derfor return true. 
function undersoegKollision(r1, r2) {
    if (r1.x >= r2.x + r2.width) {
        return false;
    } else if (r1.x + r1.width <= r2.x) {
        return false; 
    } else if (r1.y >= r2.y + r2.height) {
        return false;
    } else if (r1.y + r1.height <= r2.y) {
        return false;
    } else {
        return true; 
    }
} 