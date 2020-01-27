let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
width = canvas.width =window.innerWidth
height = canvas.height = window.innerHeight

let size = 100;
let angleB = - 45 * Math.PI / 180;


// let drawRect = function(x, y, size){
    
//     ctx.beginPath();
//     ctx.fillStyle = "red";
//     ctx.fillRect(x, y, size, -size);
//     ctx.stroke();
// }


function drawTree(x, y, size, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, size, -size);
    
    let size1 = Math.abs(Math.cos( angleB ) * size);
    let x1 = 0;
    let y1 = -size;
    let angle1 = angleB;
    // drawRect(x1, y1, size1);

    if (size1 > 10) {
        drawTree(x1, y1, size1, angle1);
  

    } else {
        ctx.save();
        ctx.translate(x1, y1);
        ctx.rotate(angle1);
        ctx.fillRect(0, 0, size1, -size1);
        ctx.restore();
    }
    let x2 = x1 + Math.cos(angle1) * size1,
        y2= y1 + Math.sin(angle1) * size1,
        size2 = Math.abs(Math.sin(angleB) * size)
        angle2 = angle1 + Math.PI / 2;

    if(size1 > 10) {
        drawTree(x2, y2, size2, angle2);
    }
    else {
        ctx.save();
        ctx.translate(x2, y2);
        ctx.rotate(angle2);
        ctx.fillRect(0, 0, size2, -size2);
        ctx.restore();
    }



    ctx.restore();
}

// drawRect(width / 2 - size / 2, height, size)
drawTree(width / 2 , height, size, 0)




// window.onload = function() {
// 	var canvas = document.getElementById("Canvas"),
// 		ctx = canvas.getContext("2d"),
// 		width = canvas.width = window.innerWidth,
// 		height = canvas.height = window.innerHeight;

// 	var branchAngleA = -Math.PI / 4;

// 	tree(width / 2 - 75, height, 100, 0, 10);

// 	// function randomRange(min, max) {
// 	// 	return min + Math.random() * (max - min);
// 	// }

// 	function tree(x, y, size, angle) {
// 		ctx.save();
// 		ctx.translate(x, y);
// 		ctx.rotate(angle);
// 		ctx.fillRect(0, 0, size, -size);

// 		//left branch
// 		var x0 = 0,
// 			y0 = -size,
// 			size0 = Math.abs(Math.cos(branchAngleA) * size),
// 			angle0 = branchAngleA;

// 		if(size0 > 10) {
// 			tree(x0, y0, size0, angle0);
// 		}
// 		else {
// 			ctx.save();
// 			ctx.translate(x0, y0);
// 			ctx.rotate(angle0);
// 			ctx.fillRect(0, 0, size0, -size0);
// 			ctx.restore();
// 		}

// 		// right branch
// 		var x1 = x0 + Math.cos(angle0) * size0,
// 			y1 = y0 + Math.sin(angle0) * size0,
// 			size1 = Math.abs(Math.sin(branchAngleA) * size)
// 			angle1 = angle0 + Math.PI / 2;

// 		if(limit > 0) {
// 			tree(x1, y1, size1, angle1, limit - 1);
// 		}
// 		else {
// 			ctx.save();
// 			ctx.translate(x1, y1);
// 			ctx.rotate(angle1);
// 			ctx.fillRect(0, 0, size1, -size1);
// 			ctx.restore();
// 		}


// 		ctx.restore();
// 	}
// };

//     }
// }
    