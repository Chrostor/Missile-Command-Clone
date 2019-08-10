var canvas, canvasContext;
var framesPerSecond = 60;
var size = 2;
var x, y;
var speedX = 0;
var speedY = 5;
var shotX, shotY;


window.onload = function() {
    canvas = document.getElementById('gameCanvas'); // bind canvas variable to it's HTML element
    canvasContext = canvas.getContext('2d'); // set the context of the canvas to 2d
    x = Math.floor(Math.random() * canvas.width);
    y = 0;
    // var framesPerSecond = 60;
    setInterval(updateAll, 1000/framesPerSecond); // call a (function, x number of times)

    // canvas.addEventListener('mousemove', updateMousePos); // add a mouse move listener to canvas
    canvas.addEventListener('click', missileShot);

    // brickReset();
    // ballReset();
 
}

function updateAll(){
    if(x >= canvas.width){
        speedX *= -1;
        x = canvas.width - 1;
    } else if (x <= 0) {
        speedX *= -1;
        x = 1;
    } else {
        x += speedX;
    }
    if (y >= canvas.height - 100){
        //speedY *= -1;
        //y = canvas.height -1;
        y = 0;
        x = Math.floor(Math.random() * canvas.width);
    } else if (y <= 0) {
        speedY *= -1;
        y = 1;
    } else {
        y += speedY;
    }
    if (shotX >= x - 50 && shotX <= x + 50 && shotY <= y + 50 && shotY >= y - 50){
        y = 0;
        x = Math.floor(Math.random() * canvas.width);
    }
    drawAll();
    console.log(shotX + " " + shotY);
}

function missileShot(evt){
    shotX = evt.clientX;
    shotY = evt.clientY;
    
}

function drawAll(){
    drawObject(0, 0, canvas.width, canvas.height, 'black'); // draw canvas background
    drawGround();
    drawObject(x, y, 5, 5, 'white'); // draw falling "missile"
    drawText();
    //drawObject(shotX - 18, shotY - 18, 20, 20,'white'); // draw shot location
}

function drawObject(xPos, yPos, sizeX, sizeY, fillColor){
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(xPos, yPos, sizeX, sizeY);
}

function drawText(){
    canvasContext.font = '20px Arial';
    canvasContext.fillText('X',shotX - 14, shotY);
}

function drawGround(){
    drawObject(0, 500, 800, 100, 'sienna');
}

