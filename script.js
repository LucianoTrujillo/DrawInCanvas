var canvas = document.getElementById("canvas");
var pen = canvas.getContext("2d");

var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var startPos = {
    x: canvas.height / 2, y: canvas.width / 2
}
var x = startPos.x;
var y = startPos.y;
var movement = 2;
var color = "red";
var canDraw = false;

document.addEventListener("keyup", keyboardDraw);
document.addEventListener("mousemove", mouseDraw);
document.addEventListener("mousedown", mouseStateChange);
document.addEventListener("mouseup", mouseStateChange);

function mouseStateChange(){
    canDraw = !canDraw;
}

function mouseDraw(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
    offsetX = pen.canvas.offsetLeft
    offsetY = pen.canvas.offsetTop

    if(mouseX > offsetX && mouseX < offsetX + canvas.width && mouseY > offsetY && mouseY < canvas.height + offsetY && canDraw){
        drawPoint(color, mouseX - offsetX - 4, mouseY - offsetY - 5, pen);
    }
}

drawPoint("red", 250, 250, pen)

function keyboardDraw(event){
    switch(event.keyCode){
        case keys.UP:
            drawLine(color, x, y - movement, pen)  
            y = y - movement; 
        break;
        case keys.DOWN:
            drawLine(color, x, y + movement, pen)  
            y = y + movement;    
        break;
        case keys.LEFT:
            drawLine(color, x - movement, y, pen)  
            x = x - movement;    
        break;
        case keys.RIGHT:
            drawLine(color, x + movement, y, pen)  
            x = x + movement;     
        break;
        default: 
        break;
    }
}

function drawLine(color, xEnd, yEnd, pen)
{
  pen.strokeStyle = color;
  pen.lineWidth = 3;
  pen.lineTo(xEnd, yEnd);
  pen.stroke();
}

function drawPoint(color, x, y, pen)
{
  pen.strokeStyle = color;
  pen.lineWidth = 1;
  pen.moveTo(x - 1, y - 1)
  pen.lineTo(x + 1, y + 1);
  pen.stroke();
}