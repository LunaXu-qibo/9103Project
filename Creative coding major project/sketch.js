// Initialize
let playingg = true;
let timerr = 0;
let scoree = 0;
let winn = 37;
let goldd = [];
let amountt = 37;
let sizee = [25, 50, 100];
let anglee = 0;
let plusanglee = 0.025;
let lengthh = 100;
let pluslengthh = 5;
let changelengthh = 0;

let fg = false
let mk = null

let bx;
let by;



function setup() {
  createCanvas(1200, 800);
	textFont('Georgia');
	rectMode(CENTER);
	ellipseMode(CENTER);

	// Interaction with apple
	goldd[0] = new Apple(294, 330, 27, PI / 2, { ratio: 0.43, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[1] = new Apple(266, 335, 32, 3 * PI / 2, { ratio: 0.52, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[2] = new Apple(234, 328, 36, PI / 2, { ratio: 0.40, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[3] = new Apple(189, 297, 73, PI / 30, { ratio: 0.55, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[4] = new Apple(184, 238, 46, 31 * PI / 30, { ratio: 0.55, c1: color(12, 133, 88), c2: color(175, 67, 67) });

	goldd[5] = new Apple(190, 203, 27, PI / 30, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[6] = new Apple(180, 174, 36, PI / 2, { ratio: 0.48, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[7] = new Apple(144, 160, 42, 0, { ratio: 0.48, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[8] = new Apple(135, 112, 54, PI, { ratio: 0.60, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[9] = new Apple(148, 60, 54, 0, { ratio: 0.55, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[10] = new Apple(311, 308, 29, 0, { ratio: 0.50, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[11] = new Apple(313, 272, 45, PI, { ratio: 0.48, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[12] = new Apple(285, 246, 33, PI / 2, { ratio: 0.46, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[13] = new Apple(261, 250, 22, 3 * PI / 2, { ratio: 0.46, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[14] = new Apple(269, 226, 20, 0, { ratio: 0.52, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[15] = new Apple(343, 250, 30, 3 * PI / 2, { ratio: 0.50, c1: color(12, 133, 88), c2: color(175, 67, 67) });


	goldd[16] = new Apple(350, 225, 23, 0, { ratio: 0.40, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[17] = new Apple(329, 337, 41, 3 * PI / 2, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[18] = new Apple(364, 332, 27, 3 * PI / 2, { ratio: 0.60, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[19] = new Apple(411, 292, 44, 41 * PI / 40, { ratio: 0.60, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[20] = new Apple(395, 328, 40, PI / 2, { ratio: 0.40, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[21] = new Apple(416, 254, 32, PI / 40, { ratio: 0.40, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[22] = new Apple(421, 210, 61, 41 * PI / 40, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[23] = new Apple(419, 167, 27, PI / 40, { ratio: 0.4, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[24] = new Apple(442, 162, 20, 8 * PI / 5, { ratio: 0.4, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[25] = new Apple(473, 169, 42, 3 * PI / 5, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[26] = new Apple(508, 176, 27, 8 * PI / 5, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[27] = new Apple(520, 151, 27, -PI / 40, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });


	goldd[28] = new Apple(210, 580, 60, 29.85, { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[29] = new Apple(255, 585, 30, 29.85, { ratio: 0.6, c1: color(175, 67, 67), c2: color(12, 133, 88) });
	goldd[30] = new Apple(285, 570, 40, PI, { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[31] = new Apple(332, 582, 60, radians(270), { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[32] = new Apple(392, 582, 60, radians(270), { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[33] = new Apple(298, 532, 40, radians(0), { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[34] = new Apple(298, 490, 45, radians(0), { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
	goldd[35] = new Apple(305, 429, 80, radians(360), { ratio: 0.6, c1: color(175, 67, 67), c2: color(12, 133, 88) });
	goldd[36] = new Apple(300, 367, 44, radians(360), { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });

	
// Initialize the x,y-coordinate of the hook
	bx = width / 2;
	by = height / 2
}

function draw() {
  background("#003153");
	textAlign(LEFT);
	textSize(25);

 // Set the timer
	timerr = int(millis() / 1000);
	text('Time: ' + timerr + ' sec', 60, 40);
	scoree = amountt - goldd.length;
	text('Score: ' + scoree + ' / ' + winn, 60, 80);
	line(0, 100, windowWidth, 100);
	square(bx, 75, 50);



	push()
// Translate the coordinate origin to the position of the tree
	translate(300, 120)
	rectMode(CORNER)
// Middle Rectangle
	strokeWeight(3);
	stroke(25, 50, 90);
	let middleRect = new Rect(95, 602, 417, 77, 19, 145, 99);
	middleRect.display();

// Soil
	strokeWeight(3);
	stroke(25, 50, 90);
	let soil = new Rect(120, 590, 370, 77, 188, 168, 88);
	soil.display();

	let soil1 = new Rect(120, 590, 60, 77, 188, 168, 88);
	soil1.display();

	let soil2 = new Rect(180, 590, 60, 77, 175, 67, 67);
	soil2.display();

	let soil3 = new Rect(240, 590, 60, 77, 19, 145, 99);
	soil3.display();

	let soil4 = new Rect(300, 590, 60, 77, 188, 168, 88);
	soil4.display();

	let soil5 = new Rect(360, 590, 60, 77, 19, 145, 99);
	soil5.display();

	let acr1 = new Arc(150, 666, 60, 77, PI, 0, 12, 133, 88);
	acr1.display();

	let acr2 = new Arc(210, 666, 60, 50, PI, 0, 12, 133, 88);
	acr2.display();

	let acr3 = new Arc(270, 666, 60, 90, PI, 0, 175, 67, 67);
	acr3.display();

	let acr4 = new Arc(330, 666, 60, 70, PI, 0, 175, 67, 67);
	acr4.display();

	let acr5 = new Arc(390, 666, 60, 30, PI, 0, 188, 168, 88);
	acr5.display();

	let acr6 = new Arc(455, 666, 70, 50, PI, 0, 12, 133, 88);
	acr6.display();


	// Tree trunk
	strokeWeight(3);

	pop()


	 // Draw the hook
	fill(0);
	linexx = bx + lengthh * cos(anglee);
	lineyy = 75 + lengthh * sin(anglee);
	line(bx, 75, linexx, lineyy);

	fill(255, 255, 0)
	circle(linexx, lineyy, 25);
	fill(0)
	if (anglee < 0) plusanglee = -plusanglee;
	if (anglee > 3) plusanglee = -plusanglee;
	anglee = anglee + plusanglee;
	if (changelengthh === 1) lengthh = lengthh + pluslengthh;
	if (changelengthh === 2) lengthh = lengthh - pluslengthh;

	for (let i = 0; i < goldd.length; i++) {

	push()
  
  //Translate the coordinate origin to the position of the tree
		translate(300, 120)
		//line branches
		let line1 = new lines(292, 590, 292, 338)
		line1.display()

		let line2 = new lines(180, 335, 413, 335)
		line2.display()

		let line3 = new lines(180, 335, 195, 177)
		line3.display()

		let line4 = new lines(195, 177, 147, 177)
		line4.display()

		let line5 = new lines(147, 177, 142, 38)
		line5.display()

		let line6 = new lines(413, 335, 426, 154)
		line6.display()

		let line7 = new lines(426, 154, 520, 180)
		line7.display()

		let line8 = new lines(520, 180, 520, 140)
		line8.display()

		let line9 = new lines(310, 335, 310, 253)
		line9.display()

		let line10 = new lines(251, 250, 355, 250)
		line10.display()

		let line11 = new lines(268, 250, 268, 219)
		line11.display()

		let line12 = new lines(355, 250, 355, 217)
		line12.display()

		let line13 = new lines(181, 590, 420, 590)
		line13.display()

		if (i < 28) goldd[i].display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });
		else goldd[i].display({ ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });

		pop()


    // If the hook catches an apple, update the apple's position
		if (dist(goldd[i].x, goldd[i].y, linexx - 300, lineyy - 120) < goldd[i].d / 2) {
			goldd[i].x = linexx - 300
			goldd[i].y = lineyy - 120
			returnn();
			mk = i
			console.log(i)
		}

	}
	if (lengthh > 800) misss();// Hook length becomes too long, game over
  // Reset the hook length to its initial state and restore the game state
	if (lengthh < 100 && fg) {
		plusanglee = 0.025;
		lengthh = 150;
		changelengthh = 0;

		fg = false
         console.log(mk,"ppp")
		if (mk>-1) {
			console.log(mk,"kkk")
			goldd.splice(mk, 1);
			mk = null
		}
	}


	if (keyIsPressed) {
		if (keyCode === LEFT_ARROW) { bx -= 5 }
		if (keyCode === RIGHT_ARROW) { bx += 5 }
	}
}
 // Control the horizontal movement of the hook based on keyboard input
function keyPressed() {
	if (key === ' ') startt();
	if (keyCode === ENTER) location.reload()


}

function startt() {
	plusanglee = 0;
	changelengthh = 1;
}

function returnn() {
	plusanglee = 0;
	changelengthh = 2;
	fg = true
}

function misss() {



	plusanglee = 0;
	changelengthh = 2;
	fg = true

}

//class for branch
class lines {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
  }
  display() {
    push()
    strokeWeight(4)
    stroke(188, 168, 88)
    line(this.x1, this.y1, this.x2, this.y2)
    pop()
  }
}

//class of apple
class Apple {
  constructor(x, y, d, angle, settings) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.angle = angle;
    this.ratio = settings.ratio;
  }

  display(settings) {
    push();
    translate(this.x, this.y)
    rotate(this.angle)
    stroke(25,50,90);
    fill(settings.c1);
    arc(0, 0, this.d, this.d, -(PI * (1 - this.ratio)) + PI, (PI * (1 - this.ratio)) + PI, OPEN, CHORD);
    fill(settings.c2);
    arc(0, 0, this.d, this.d, -PI * this.ratio, PI * this.ratio, OPEN, CHORD);
    pop();
  }

}

//class of rectangle
class Rect {
  constructor(x, y, w, h, r, g, b) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fillColor = color(r, g, b);
  }

  //Draw a rectangle
  display() {
    fill(this.fillColor);
    rect(this.x, this.y, this.w, this.h);
  }
}

//class of arc
class Arc {
  constructor(x, y, w, h, start, stop, r, g, b, mode = PIE) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.start = start;
    this.stop = stop;
    this.fillColor = color(r, g, b);
    this.mode = mode;
  }

  //Draw an arc
  display() {
    fill(this.fillColor);
    noStroke();
    arc(this.x, this.y, this.w, this.h, this.start, this.stop, this.mode);
  }
}
