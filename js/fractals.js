let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
width = canvas.width =window.innerWidth
height = canvas.height = window.innerHeight

let drawRect = function(x1, y1, size, size){
    
    ctx.beginPath();
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = "red";
    ctx.fillRect(x1, y1, size, -size);
    ctx.stroke();
}



let size = 100;
let angle = Math.PI/4;
let strokeWidth = 10;

drawRect(width/2-size/2, height-strokeWidth, size, size)

let calcSquares = function(x, y, size, angle, limit){


}