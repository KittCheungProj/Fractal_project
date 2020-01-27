let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
width = canvas.width =window.innerWidth
height = canvas.height = window.innerHeight

//let startAngle = 0 + Math.random()*Math.PI/4*90;
let leftAngle = -45 * Math.PI/180;
let size = 100;

let pyTree = function(x, y, size, angle){
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle)
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, size, -size);
    
    let leftSize = size * Math.abs(1-(leftAngle/90));
    let x1 = 0;
    let y1 = -size;
    //let leftAngle = startAngle;
    //let leftDiff = Math.abs(1-(leftAngle/-90));
    
        
    if (leftSize > 10){
      pyTree(x1, y1, leftSize/1.5, leftAngle);

    }else{
        ctx.save();
      	ctx.translate(x1, y1);
      	ctx.rotate(leftAngle);
      	ctx.fillRect(0, 0, leftSize/ 1.5, -leftSize /1.5);
      	ctx.restore();
    }
    let rightAngle = angle - Math.abs(leftAngle);   
    let rightSize = size * Math.abs(1-(rightAngle/90));
    let x2 =  x1 + Math.cos(rightAngle)* leftSize;
    let y2 =  y1 + Math.sin(rightAngle)* leftSize;
    
    pyTree(x2, y2, rightSize, rightAngle)
 
    if (leftSize > 50){
        ctx.save();
        ctx.translate(x2, y2);
        ctx.rotate(rightAngle);
        ctx.fillRect(0, 0, rightSize / 1.5 , -rightSize / 1.5);
        ctx.restore();

    }

    ctx.restore();
}
pyTree(width/2, height, size, 0)



    //   let rightAngle = angle - Math.abs(leftAngle);   
    // //let rightDiff = Math.abs(1 - leftDiff);    
    //   let rightSize = size * Math.abs(1-(rightAngle/90))
    //   //Math.sqrt(size*size*rightDiff);

    // let x2 = x1 + leftSize + rightRize * Math.cos(rightAngle);
    // let y2 = y1 - rightSize * Math.sin(rightAngle)    
    //let leftX2 = x - size * Math.cos(leftDiff*angle)
    //let leftY2 = y - size * Math.sin(leftDiff*angle)
    //let rightX2 = x + size + rightSize*Math.cos(rightDiff*angle)
    //let rightY2 = y - rightSize*Math.sin(rightDiff*angle)