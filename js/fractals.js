let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
width = canvas.width =window.innerWidth
height = canvas.height = window.innerHeight


//let leftAngle = -330*Math.PI/180;
//let rightAngle = leftAngle + 360*Math.PI / 180;
//Math.abs(totalDegrees + leftAngle);

//let size = 100;
//let leftAngle = 0;
//let rightAngle;
//let t = 0;



let pyBlocks = function(x, y, size, angle, limit, color){

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle)
    ctx.fillStyle = '\"#'+color+'\"';
    ctx.fillRect(0, 0, size, -size);

    let leftSize = (Math.abs(Math.cos(pyTree.leftAngle)*size));
    let rightSize = Math.abs(Math.sin(pyTree.leftAngle)*size);

    let x1 = 0;
    let y1 = -size;
    let x2 = x1 + Math.cos(pyTree.leftAngle) * leftSize;
    let y2 = y1 + Math.sin(pyTree.leftAngle) * leftSize;

        
    if (limit > 0){      
      pyBlocks(x1, y1, leftSize, pyTree.leftAngle, limit-1, color);

    }else{
        ctx.save();
      	ctx.translate(x1, y1);
      	ctx.rotate(pyTree.leftAngle);
      	ctx.fillRect(0, 0, leftSize, -leftSize);
      	ctx.restore();
    }

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

//let size = 100;
//let leftAngle = 0;
//let rightAngle;
//let t = 0;

let pyTree = {
    leftAngle: 0,
    rightAngle: 0,
    size: 100,
    // color: [[000000],[654321]],
    time: 0,
}
//let color = {
//    r: "#654321",
//    g: "#009a00",
//    b: 
//}

let colorMap;
let color = {
    r: 0,
    g: 0,
    b: 0,
}

let rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

let fullColorHex = function(r,g,b) {   
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red+green+blue;
  };


draw();

	function draw() {
		ctx.clearRect(0, 0, width, height);
        pyTree.leftAngle = -Math.PI/4 + Math.sin(pyTree.time += 0.01) * Math.PI/4;
        pyTree.rightAngle = pyTree.leftAngle + 90*Math.PI / 180;

        if(color.r <255){
            color.r += 5            
        }else{
            color.r = 0;
        }
        if(color.g <255){
            color.g += 10
        }else{
            color.g = 0;
        }
        if(color.b <255){
            color.b += 15 
        }else{
            color.b = 0;
        }   
       
        colorMap = fullColorHex(color.r, color.g, color.b);

		pyBlocks(width/2, height-50, pyTree.size, 0, 8, colorMap);
        requestAnimationFrame(draw);
    }

    