let Canvas = document.getElementById("Canvas")
let ctx = Canvas.getContext("2d")
width = Canvas.width = window.innerWidth,
height = Canvas.height = window.innerHeight;


let branchAngleA = 0;
let t = 0;

draw();

	function draw() {
		ctx.clearRect(0, 0, width, height);
        branchAngleA = -Math.PI / 4 + Math.sin(t += 0.01) * Math.PI / 4;
		tree(width / 2 - 75, height, 150, 0, 8);
		requestAnimationFrame(draw);
	}

//var branchAngleA = randomRange(0, -Math.PI / 2);

tree(width / 2 - 75, height, 50, 0, 8);

function randomRange(min, max) {
    return min + Math.random() * (max - min);
}

function tree(x, y, size, angle, limit) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillRect(0, 0, size, -size);

    // left branch
    var x0 = 0,
        y0 = -size,
        size0 = Math.abs(Math.cos(branchAngleA) * size),
        angle0 = branchAngleA;
        //console.log('angle0   '+angle0)

    if(limit > 0) {
        tree(x0, y0, size0, angle0, limit -1);
    }
    else {
        ctx.save();
        ctx.translate(x0, y0);
        ctx.rotate(angle0);
        ctx.fillRect(0, 0, size0, -size0);
        ctx.restore();
    }

    // right branch
    var x1 = x0 + Math.cos(angle0) * size0,
        y1 = y0 + Math.sin(angle0) * size0,
        size1 = Math.abs(Math.sin(branchAngleA) * size)
        angle1 = angle0 + Math.PI / 2;
        console.log('angle1  '+ angle1)

    if(limit > 0) {
        tree(x1, y1, size1, angle1, limit-1);
    }
    else {
        ctx.save();
        ctx.translate(x1, y1);
        ctx.rotate(angle1);
        ctx.fillRect(0, 0, size1, -size1);
        ctx.restore();
    }


    ctx.restore();
}
