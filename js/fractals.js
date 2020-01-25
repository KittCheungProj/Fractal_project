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

let startAngle = 45; 
let size = 100;
let angle = Math.PI/180;
let strokeWidth = 10;
let startX = width/2-size/2;
let startY = height-strokeWidth;
let nrBlocks = 5;
 

drawRect(startX, startY, size, size)

let calcSquares = function(x, y, size, startAngle, angle, limit){

    let lengthOfBlock = Math.sqrt(size*size/2); 
    
    let leftX2 = x - size *Math.cos(startAngle*angle)
    let leftY2 = y - size *Math.sin(startAngle*angle)
    //let rightX2 = x + size + lengthOfBlock*Math.cos(startAngle*angle)
    //let rightY2 = y - lengthOfBlock*Math.sin(startAngle*angle)

    drawRect(leftX2, leftY2, size, size)
    drawRect(rightX2, rightY2, size, size)


}

calcSquares(startX, startY, size, startAngle, angle, nrBlocks)