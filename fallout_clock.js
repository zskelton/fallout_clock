// NAME: Fallout Clock (Bangle.js 2)
// DOCS: https://www.espruino.com/ReferenceBANGLEJS2
// AUTHOR: Zachary D. Skelton <zskelton@bws-solutions.com>
// VERSION: 0.1.0 (24JAN2024) - Creating [ Maj.Min.Bug ] REF: https://semver.org/
// LICENSE: MIT License (2024) [ https://opensource.org/licenses/MIT ]


// Load fonts
require("Font7x11Numeric7Seg").add(Graphics);
// position on screen
const X = 140, Y = 120;

function draw() {
  // work out how to display the current time
  var d = new Date();
  var h = d.getHours(), m = d.getMinutes();
  var time = (" "+h).substr(-2) + ":" + m.toString().padStart(2,0);
  // Reset the state of the graphics library
  g.reset();
  // draw the current time (4x size 7 segment)
  g.setFont("7x11Numeric7Seg",4);
  g.setFontAlign(1,1); // align right bottom
  g.drawString(time, X, Y, true /*clear background*/);
  // draw the seconds (2x size 7 segment)
  g.setFont("7x11Numeric7Seg",2);
  g.drawString(("0"+d.getSeconds()).substr(-2), X+30, Y, true /*clear background*/);
  // draw the date, in a normal font
  g.setFont("6x8");
  g.setFontAlign(0,1); // align center bottom
  // pad the date - this clears the background if the date were to change length
  var dateStr = "    "+require("locale").date(d)+"    ";
  g.drawString(dateStr, g.getWidth()/2, Y+15, true /*clear background*/);
  g.setColor(0,1,0);
  g.fillCircle(10, 10, 10);
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
// now draw every second
var secondInterval = setInterval(draw, 1000);
// Stop updates when LCD is off, restart when on
Bangle.on('lcdPower',on=>{
  if (secondInterval) clearInterval(secondInterval);
  secondInterval = undefined;
  if (on) {
    secondInterval = setInterval(draw, 1000);
    draw(); // draw immediately
  }
});

/* Show launcher when middle button pressed
This should be done *before* Bangle.loadWidgets so that
widgets know if they're being loaded into a clock app or not */
Bangle.setUI("clock");
// Load widgets
Bangle.loadWidgets();
Bangle.drawWidgets();
