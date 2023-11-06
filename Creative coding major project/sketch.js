function setup() {
  createCanvas(600, 800);
  background("#003153");
}

function draw() {
  strokeWeight(3);
  //Left Branch
  let apple1 = new Apple(294, 330, 27, PI / 2, { ratio: 0.43, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple1.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple2 = new Apple(266, 335, 32, 3 * PI / 2, { ratio: 0.52, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple2.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple3 = new Apple(234, 328, 36, PI / 2, { ratio: 0.40, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple3.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple4 = new Apple(189, 297, 73, PI / 30, { ratio: 0.55, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple4.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple5 = new Apple(184, 238, 46, 31 * PI / 30, { ratio: 0.55, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple5.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple6 = new Apple(190, 203, 27, PI / 30, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple6.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple7 = new Apple(180, 174, 36, PI / 2, { ratio: 0.48, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple7.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple8 = new Apple(144, 160, 42, 0, { ratio: 0.48, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple8.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple9 = new Apple(135, 112, 54, PI, { ratio: 0.60, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple9.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple10 = new Apple(148, 60, 54, 0, { ratio: 0.55, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple10.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  //Middle Branch
  let apple11 = new Apple(311, 308, 29, 0, { ratio: 0.50, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple11.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple12 = new Apple(313, 272, 45, PI, { ratio: 0.48, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple12.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple13 = new Apple(285, 246, 33, PI / 2, { ratio: 0.46, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple13.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple14 = new Apple(261, 250, 22, 3 * PI / 2, { ratio: 0.46, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple14.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple15 = new Apple(269, 226, 20, 0, { ratio: 0.52, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple15.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple16 = new Apple(343, 250, 30, 3 * PI / 2, { ratio: 0.50, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple16.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple17 = new Apple(350, 225, 23, 0, { ratio: 0.40, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple17.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  //Right Branch
  let apple18 = new Apple(329, 337, 41, 3 * PI / 2, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple18.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple19 = new Apple(364, 332, 27, 3 * PI / 2, { ratio: 0.60, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple19.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple20 = new Apple(411, 292, 44, 41 * PI / 40, { ratio: 0.60, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple20.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple21 = new Apple(395, 328, 40, PI / 2, { ratio: 0.40, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple21.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple22 = new Apple(416, 254, 32, PI / 40, { ratio: 0.40, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple22.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple23 = new Apple(421, 210, 61, 41 * PI / 40, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple23.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple24 = new Apple(419, 167, 27, PI / 40, { ratio: 0.4, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple24.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple25 = new Apple(442, 162, 20, 8 * PI / 5, { ratio: 0.4, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple25.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple26 = new Apple(473, 169, 42, 3 * PI / 5, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple26.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple27 = new Apple(508, 176, 27, 8 * PI / 5, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple27.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let apple28 = new Apple(520, 151, 27, -PI / 40, { ratio: 0.5, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  apple28.display({ c1: color(12, 133, 88), c2: color(175, 67, 67) });


  // Middle Rectangle
  strokeWeight(3);
  stroke(25,50,90);
  let middleRect = new Rect(95, 602, 417, 77, 19, 145, 99);
  middleRect.display();

  //Soil
  strokeWeight(3);
  stroke(25,50,90);
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


  //tree trunk
  strokeWeight(3);
  let Apple1 = new Apple(210, 580, 60, 29.85, { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  Apple1.display({ ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let Apple2 = new Apple(255, 585, 30, 29.85, { ratio: 0.6, c1: color(175, 67, 67), c2: color(12, 133, 88) });
  Apple2.display({ ratio: 0.6, c1: color(175, 67, 67), c2: color(12, 133, 88) });

  let Apple3 = new Apple(285, 570, 40, PI, { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  Apple3.display({ ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let Apple4 = new Apple(332, 582, 60, radians(270), { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  Apple4.display({ ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let Apple5 = new Apple(392, 582, 60, radians(270), { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  Apple5.display({ ratio: 0.6, c1: color(175, 67, 67), c2: color(12, 133, 88) });

  let Apple6 = new Apple(298, 532, 40, radians(0), { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  Apple6.display({ ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let Apple7 = new Apple(298, 490, 45, radians(0), { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  Apple7.display({ ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });

  let Apple8 = new Apple(305, 429, 80, radians(360), { ratio: 0.6, c1: color(175, 67, 67), c2: color(12, 133, 88) });
  Apple8.display({ ratio: 0.6, c1: color(175, 67, 67), c2: color(12, 133, 88) });

  let Apple9 = new Apple(300, 367, 44, radians(360), { ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });
  Apple9.display({ ratio: 0.6, c1: color(12, 133, 88), c2: color(175, 67, 67) });


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

  let line13 = new lines(181,590,420,590)
  line13.display()

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
