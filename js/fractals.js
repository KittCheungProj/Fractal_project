let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
width = canvas.width =window.innerWidth
height = canvas.height = window.innerHeight


let leftAngle = Math.PI/4;
let totalDegrees = Math.PI/2;
let rightAngle = totalDegrees - leftAngle;
let size = 100;


let pyTree = function(x, y, size, angle){
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle)
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, size, -size);

    
    let leftDiff = Math.abs(1-(leftAngle/totalDegrees));

    let leftSize = Math.abs(Math.sqrt((size*size)*leftDiff));

    let x1 = 0;
    let y1 = -size;

    
    
    let rightDiff = Math.abs(1-leftDiff);
    let rightSize = Math.abs(Math.sqrt((size*size)*rightDiff));
    let x2 = x1 + Math.cos(rightAngle) * rightSize;
    let y2 = y1 + Math.sin(-rightAngle) * rightSize;
    
        
    if (leftSize > 10){
      pyTree(x1, y1, leftSize, -leftAngle);

    }else{
        ctx.save();
      	ctx.translate(x1, y1);
      	ctx.rotate(-leftAngle);
      	ctx.fillRect(0, 0, leftSize, -leftSize);
      	ctx.restore();
    }

    if(rightSize > 10){
        pyTree(x2, y2, rightSize, rightAngle)
    }else{
      ctx.save();
    	ctx.translate(x2, y2);
    	ctx.rotate(rightAngle);
    	ctx.fillRect(0, 0, rightSize, -rightSize);
    	ctx.restore();
   }
    ctx.restore();
}
pyTree(width/2, height, size, 0)


