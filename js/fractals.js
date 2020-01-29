
/*
Creating our canvas in html and connecting the canvas with our javascript code
*/
let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
width = canvas.width = window.innerWidth
height = canvas.height = window.innerHeight

// array of colors in hex code
let colorMap = ['#542404', '#843c02', '#9f400b', '#b83c02', '#268b04', '#26cb04', '#26cb65', '#f24cf1', '#ff0000']

// object of tree
let pyTree = {
    leftAngle: 0,
    rightAngle: 0,
    size: 100,
    time: 0,
}

/*
pyBlock() -> void
Parameter: x,y,size = draw rectangle
            angle = degrees of rotation of rectangle
            limit = how many times rectangles shall be created to prevent stack overflow
            color = colors with hexcode
returns: a rotated rectangle with color and different sizes
Rtype: void
*/
let pyBlocks = function(x, y, size, angle, limit, color){
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle)
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, size, -size);
    
    // calculation of the iterated blocksizes and their coordinates
    let leftSize = (Math.abs(Math.cos(pyTree.leftAngle)*size));
    let rightSize = Math.abs(Math.sin(pyTree.leftAngle)*size);
    let x1 = 0;
    let y1 = -size;
    let x2 = x1 + Math.cos(pyTree.leftAngle) * leftSize;
    let y2 = y1 + Math.sin(pyTree.leftAngle) * leftSize;

    // depending on blocksize a color is chosen
    if (size > 90){
        color = colorMap[1]
    }else if(size >60 && size <90){
        color = colorMap[2]
    }else if(size >50 && size <70){
        color = colorMap[3]
    }else if(size >40 && size <60){
        color = colorMap[4]
    }else if(size >30 && size <50){
        color = colorMap[5]
    }else if(size >20 && size <40){
        color = colorMap[6]
    }else if(size >10 && size <30){
        color = colorMap[7]
    }else if(size >5 && size <20){
        color = colorMap[8]
    }

    // when limit has been reached a last rectangle will be created for the LEFT SIDE
    if (limit > 0){
      pyBlocks(x1, y1, leftSize, pyTree.leftAngle, limit-1, color);
    }else{
        ctx.save();
      	ctx.translate(x1, y1);
        ctx.rotate(pyTree.leftAngle);  
        ctx.fillRect(0, 0, leftSize, -leftSize);
      	ctx.restore();
    }

    // when limit has been reached a last rectangle will be created for the RIGHT SIDE
    if(limit > 0){
        pyBlocks(x2, y2, rightSize, pyTree.rightAngle, limit-1, color);
    
    }else{
        ctx.save();
    	ctx.translate(x2, y2);
    	ctx.rotate(pyTree.rightAngle);
    	ctx.fillRect(0, 0, rightSize, -rightSize);
    	ctx.restore();
    }
    ctx.restore();
}


/*
draw() -> void
Parameter: None
returns: a loop where the tree is drawing
Rtype: void
*/

function draw() {
    ctx.clearRect(0, 0, width, height);
    pyTree.leftAngle = -Math.PI/4 + Math.sin(pyTree.time += 0.01) * Math.PI/4;
    pyTree.rightAngle = pyTree.leftAngle + 90*Math.PI / 180;
    ctx.fillStyle = colorMap[1];
    pyBlocks(width/2, height-50, pyTree.size, 0, 8);
    
    //animate the draw function
    requestAnimationFrame(draw);
}
draw();




