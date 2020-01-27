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
    
    let leftSize = size*Math.abs(1-(leftAngle/90));
    let x1 = 0;
    let y1 = -leftSize;
    //let leftAngle = startAngle;
    //let leftDiff = Math.abs(1-(leftAngle/-90));
    
        
    if (leftSize > 5){
        pyTree(x1, y1, leftSize, leftAngle)
        //pyTree(rightX2, rightY2, rightSize, rightAngle)
   // } else{
   //     ctx.save();
   // 	ctx.translate(x1, y1);
   // 	ctx.rotate(leftAngle);
   // 	ctx.fillRect(0, 0, size0, -size0);
   // 	ctx.restore();
//
   // }

        
    }
    ctx.restore();
}
pyTree(width/2-size/2, height, size, 0)



  //let rightAngle = angle-leftAngle;   
    //let rightDiff = Math.abs(1 - leftDiff);    
    //let rightSize = Math.sqrt(size*size*rightDiff);

    //let leftX2 = 0;
    //let     
    //let leftX2 = x - size * Math.cos(leftDiff*angle)
    //let leftY2 = y - size * Math.sin(leftDiff*angle)
    //let rightX2 = x + size + rightSize*Math.cos(rightDiff*angle)
    //let rightY2 = y - rightSize*Math.sin(rightDiff*angle)