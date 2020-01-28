let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
width = canvas.width =window.innerWidth
height = canvas.height = window.innerHeight

//let startAngle = 0 + Math.random()*Math.PI/4*90;
let leftAngle = Math.PI/4;
let totalDegrees = Math.PI/2;
let rightAngle = Math.abs(totalDegrees - leftAngle)
let size = 100;
console.log('ett   ' + leftAngle)
console.log('ett1  '+totalDegrees)

let pyTree = function(x, y, size, angle){
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle)
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, size, -size);
    console.log('size   '+size)
    
    let leftDiff = Math.abs(1-(leftAngle/totalDegrees));
    console.log('två   '+leftDiff)
    let leftSize = Math.abs(Math.sqrt((size*size)*leftDiff));
    //let leftSize = size * Math.abs(1-(leftAngle/90));
    let x1 = 0;
    let y1 = -size;
    console.log('tre    '+ leftSize);
    
    
    let rightDiff = Math.abs(1-leftDiff);
    let rightSize = Math.abs(Math.sqrt((size*size)*rightDiff));
    let x2 = x1+Math.cos(rightAngle)*rightSize;
    let y2 = y1+Math.sin(rightAngle)*rightSize;
    
        
    if (leftSize > 10){
      pyTree(x1, y1, leftSize, -leftAngle);

    }else{
        ctx.save();
      	ctx.translate(x1, y1);
      	ctx.rotate(leftAngle);
      	ctx.fillRect(0, 0, leftSize, -leftSize);
      	ctx.restore();
    }
    
    if(rightSize > 10){
        pyTree(x2, y2, rightSize, rightAngle)
    }else{
        ctx.save();
    	ctx.translate(x1, y1);
    	ctx.rotate(leftAngle);
    	ctx.fillRect(0, 0, size, -size);
    	ctx.restore();
   }

        
    // }
    ctx.restore();
}
pyTree(width/2, height, size, 0)



  //let rightAngle = angle-leftAngle;   
    //let rightDiff = Math.abs(1 - leftDiff);    
    //let rightSize = Math.sqrt(size*size*rightDiff);

    //let leftX2 = 0;
    //let     
    //let leftX2 = x - size * Math.cos(leftDiff*angle)
    //let leftY2 = y - size * Math.sin(leftDiff*angle)
    //let rightX2 = x + size + rightSize*Math.cos(rightDiff*angle)
    //let rightY2 = y - rightSize*Math.sin(rightDiff*angle)