let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
width = canvas.width =window.innerWidth
height = canvas.height = window.innerHeight

let size = 50;
let angle = Math.PI / 180;


let drawRect = function(x, y, size){
    
    ctx.beginPath();

    ctx.strokeStyle = "red";
    ctx.fillRect(x, y, size, -size);
    ctx.stroke();
}




function drawTree(x, y, size, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-45 * angle);
    ctx.fillRect(0, 0, size, -size);

    let x1 = 0;
    let y1 = -size;
    let size1 = Math.abs(-45 * angle);

    if (size1 > 10) {
        drawTree(x1, y1, size1, -45 * angle);
    } else {
        ctx.save();
        ctx.translate(x1, y1);
        ctx.rotate(-45 * angle);
        ctx.fillRect(0, 0, size, -size);
        ctx.restore();
    }

    ctx.restore();
}

drawRect(width / 2 - size / 2, height, size)
drawTree(width / 2 -size / 2, height, size, angle)