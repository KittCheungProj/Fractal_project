let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
width = canvas.width =window.innerWidth
height = canvas.height = window.innerHeight


let leftAngle = -70* Math.PI/180;
let totalDegrees = 90*Math.PI/180;
let rightAngle = leftAngle + Math.PI / 2;
//Math.abs(totalDegrees + leftAngle);
let size = 100;


let pyTree = function(x, y, size, angle, limit){
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle)
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, size, -size);

    
    let leftDiff = Math.abs(1-(leftAngle/-totalDegrees));
    console.log(leftDiff)
    let leftSize = (Math.sqrt((size*size)*leftDiff));

    let x1 = 0;
    let y1 = -size;

    
    
    let rightDiff = (1-leftDiff);
    console.log('r' + rightDiff)
    let rightSize = Math.abs(Math.sqrt((size*size)*rightDiff));
    let x2 = x1 + Math.cos(leftAngle) * leftSize;
    let y2 = y1 + Math.sin(leftAngle) * leftSize;
    
        
    if (limit > 0){
      pyTree(x1, y1, leftSize, leftAngle, limit-1);

    }else{
        ctx.save();
      	ctx.translate(x1, y1);
      	ctx.rotate(leftAngle);
      	ctx.fillRect(0, 0, leftSize, -leftSize);
      	ctx.restore();
    }

    if(limit > 0){
        pyTree(x2, y2, rightSize, rightAngle+ 0.18, limit-1)
    }else{
      ctx.save();
    	ctx.translate(x2, y2);
    	ctx.rotate(rightAngle);
    	ctx.fillRect(0, 0, rightSize, -rightSize);
    	ctx.restore();
   }
    ctx.restore();
}
pyTree(width/2, height, size, 0, 8)


