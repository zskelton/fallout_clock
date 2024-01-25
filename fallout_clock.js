// NAME: Fallout Clock (Bangle.js 2)
// DOCS: https://www.espruino.com/ReferenceBANGLEJS2
// AUTHOR: Zachary D. Skelton <zskelton@bws-solutions.com>
// VERSION: 0.1.0 (24JAN2024) - Creating [ Maj.Min.Bug ] REF: https://semver.org/
// LICENSE: MIT License (2024) [ https://opensource.org/licenses/MIT ]

/* COLORS */
// Dark Full  - #000000 - (0,0.00,0)
// Dark Half  - #002f00 - (0,0.18,0)
// Mid Green  - #005f00 - (0,0.37,0)
// Light Half - #008e00 - (0,0.55,0)
// Light Full - #00ee00 - (0,0.93,0)

/* FONTS */
// Font: Good Time Rg - https://www.dafont.com/good-times.font
// Large = 50px
Graphics.prototype.setLargeFont = function() {
  // Actual height 38 (40 - 3)
  this.setFontCustom(
    atob('AAAAAAAAAAAAAAAAAAAAAABAAAAAAAB8AAAAAAA/gAAAAAAP4AAAAAAD+AAAAAAA/gAAAAAAP4AAAAAAB8AAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAADwAAAAAAD8AAAAAAD/AAAAAAD/wAAAAAD/8AAAAAH/8AAAAAH/8AAAAAH/4AAAAAH/4AAAAAH/4AAAAAH/4AAAAAP/4AAAAAP/wAAAAAP/wAAAAAP/wAAAAAP/wAAAAAH/wAAAAAB/wAAAAAAfgAAAAAAHgAAAAAABgAAAAAAAAAAAAAAAAAAOAAAAAAB//AAAAAB//8AAAAB///wAAAA////AAAAf///4AAAP////AAAH////4AAD/+B//AAB/8AD/wAAf8AAP+AAP+AAB/gAD/AAAP8AA/gAAB/AAf4AAAf4AH8AAAD+AB/AAAA/gAfwAAAP4AH8AAAD+AB/AAAA/gAfwAAAP4AH8AAAD+AB/AAAA/gAfwAAAP4AH8AAAD+AB/gAAB/gAP4AAAfwAD/AAAP8AA/4AAH+AAH/AAD/gAB/8AD/wAAP/4H/8AAB////+AAAP////AAAB////gAAAP///wAAAB///wAAAAH//wAAAAAf/wAAAAAAOAAAAAAAAAAAAAfgAAAAAAH8AAAAAAB/AAAAAAAfwAAAAAAH8AAAAAAB/AAAAAAAfwAAAAAAH+AAAAAAB/wAAAAAAf/////wAD/////8AA//////AAH/////wAA/////8AAH/////AAAf////wAAA////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/wAH8AA//8AB/AA///AAfwAf//wAH8AH//8AB/AD///AAfwA///wAH8Af//8AB/AH8B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwD+AfwAH+B/AH8AB///wB/AAf//8AfwAD///AH8AA///gB/AAH//wAfwAA//4AH8AAH/8AB/AAAf8AAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AB/AAAB/AAfwAAAfwAH8AAAH8AB/AAAB/AAfwAAAfwAH8AAAH8AB/AAAB/AAfwAAAfwAH8AfAH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8A/gH8AB/gP4D/AAf8H/A/wAH///8/8AA/////+AAP/////gAB/////4AAf/8//8AAD/+P/+AAAf/B//AAAA/AH/AAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///AAAAB///8AAAAf///gAAAH///8AAAB////gAAAf///4AAAH////AAAAAAD/wAAAAAAP8AAAAAAB/AAAAAAAfwAAAAAAD+AAAAAAA/gAAAAAAP4AAAAAAD+AAAAAAA/gAAAAAAP4AAAAAAD+AAAAAAA/gAAAAAAP4AAAAAAD+AAAAAAA/gAAAAAAP4AAAAAAD+AAAAAAA/gAAAAAAP4AAAAAAD+AAAH/////8AB//////AAf/////wAH/////8AB//////AAf/////wAH/////8AAAAAP4AAAAAAD+AAAAAAA/gAAAAAAP4AAAAAAD+AAAAAAA/AAAAAAAAAAAAAAAAAAAAH///AD8AB///4B/AAf//+AfwAH///gH8AB///4B/AAf//+AfwAH///gH8AB///4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH8D/AAfwB/h/wAH8Af//8AB/AD//+AAfwA///gAH8AH//wAB/AA//4AAfgAH/8AAAAAAf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAB//4AAAAB///wAAAB////AAAA////4AAAf////AAAP////4AAH/////AAB//fv/wAA/8H4f+AAP+B+D/gAH/AfgP8AB/gH4D/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+A/wAH8Afwf8AB/AH///AAfwA///gAH8AP//4AB/AD//8AAfwAf/+AAH8AD//AAAAAAP/gAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAAAAB/AAAABAAfwAAAAwAH8AAAAcAB/AAAAfAAfwAAAPwAH8AAAH8AB/AAAD/AAfwAAD/wAH8AAB/8AB/AAA//AAfwAAf/gAH8AAP/gAB/AAP/wAAfwAH/4AAH8AD/8AAB/AB/8AAAfwB/+AAAH8A//AAAB/Af/gAAAfwP/gAAAH8P/wAAAB/H/4AAAAfz/8AAAAH9/8AAAAB//+AAAAAf//AAAAAH//gAAAAB//gAAAAAf/wAAAAAH/4AAAAAB/8AAAAAAf8AAAAAAH+AAAAAAB/AAAAAAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAAD/gP/gAAB/+H/8AAA//z//gAAf////8AAP/////gAD/////4AB//////AAf+P/B/wAH+A/gP8AB/AP4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8AfgH8AB/AH4B/AAfwB+AfwAH8A/gH8AB/gP8D/AAf+P/h/wAH/////8AA/////+AAP/////gAB/////wAAP/8//4AAB/+H/8AAAH+A/+AAAAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAH/4AAAAAH//gAAAAD//8AAAAB///AD8AA///4B/AAP///AfwAH///wH8AB/4f8B/AAf4B/AfwAH8APwH8AB/AD8B/AAfwA/AfwAH8APwH8AB/AD8B/AAfwA/AfwAH8APwH8AB/AD8B/AAfwA/AfwAH8APwH8AB/AD8B/AAfwA/AfwAH8APwH8AB/AD8B/AAfwA/AfwAH8APwH8AB/AD8B/AAfwA/AfwAH+APwP8AB/wD8D/AAP+A/B/gAD/wPx/4AAf/j9/+AAH/////AAA/////gAAH////4AAA////8AAAH///8AAAAf//+AAAAA//8AAAAAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAEAAAAD4AHwAAAB/AD+AAAAfwA/gAAAH8AP4AAAB/AD+AAAAfwA/gAAAD4AHwAAAAMAAYAAAAAAAAAAAAAAAAA'),
    46,
    atob("DRYqEykpKiwsJi0rDQ=="),
    50|65536
  );
  return this;
};

// Medium = 16px ()
Graphics.prototype.setMediumFont = function() {
  // Actual height 12 (11 - 0)
  this.setFontCustom(
    atob('AAAAAAAADwAAAB8AAAAPAAAAGwAAAb8AAB/9AAH/kAAv+QAA/4AAAPQAAAACvkAAH//wAD///AC/Qf4A/AA/APQAHwDwAA8A9AAfAPwAPwC+Qf4AP//8AB//9AAG/4AAoAAAAPAAAAD4AAAA////AL///wAv//8AAAAAAPAL/wDwH/8A8D//APA9DwDwPA8A8DwPAPA8DwDwPA8A9DwPAP78DwD/+A8AL+APAPAADwDwAA8A8BQPAPA8DwDwPA8A8DwPAPA8DwDwPA8A9DwfAP7/vwD///8AP+v8AAUBUACqqQAA//9AAP//wABVW8AAAAPAAAADwAAAA8AAAAPAAAADwAD///8A////AP///wAAA8AAAAKAAAAAAAD//A8A//wPAP/8DwDwPA8A8DwPAPA8DwDwPA8A8DwPAPA8DwDwPR8A8D+/APAv/gCgC/gAC//gAD///AC///4A/Tx/APg8LwDwPA8A8DwPAPA8DwDwPA8A8D0fAPA/vwDwL/4AoAv4AAAAQABQAAAA8AAHAPAAHwDwAL8A8AP/APAf+ADwf9AA8v9AAP/4AAD/4AAA/0AAAP0AAAAAAEAAL9v4AL///gD//78A+H0vAPA8DwDwPA8A8DwPAPA8DwDwPA8A9D0fAP7/vwD///8AP9v8AC/4AAC//g8A/r8PAPQfDwDwDw8A8A8PAPAPDwDwDw8A+A8fAP5PfwC///4AL//8AAb/4AAAAAAAAAAAAAA8DwAAfB8AADwPAA=='),
    46,
    atob("BAcNBg0NDg4ODA4OBA=="),
    16|131072
  );
  return this;
};

/* VARIABLES */
const H = g.getHeight();
const W = g.getWidth();

/* UTILITY FUNCTIONS */
function getCurrentTime() {
  try {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    return `${h}:${m.toString().padStart(2,0)}`;
  } catch (e) {
    console.log(e);
    return "0:00";
  }
}

function getCurrentDate() {
  try {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    return `${month.toString() + 1}.${day.toString().padStart(2,0)}.${year}`;
  } catch (e) {
    console.log(e);
    return "0.0.0000";
  }
}

function draw() {
  // Clear Screen
  g.reset();
  g.setBgColor(0,0,0);
  // Draw Background
  g.setColor(0,0,0);
  g.fillRect(0,0,W,H);
  // Set Font for Time
  g.setColor(0,0.93,0);
  g.setLargeFont();
  g.setFontAlign(0,0);
  // Draw Time
  let time = getCurrentTime();
  g.drawString(time, W/2, H/2, true /*clear background*/);
  // draw the date, in a normal font
  g.setColor(0,0.55,0);
  g.setMediumFont();
  g.setFontAlign(0,1);
  // pad the date - this clears the background if the date were to change length
  //var dateStr = "    "+require("locale").date(d)+"    ";
  const dateStr = getCurrentDate();
  g.drawString(dateStr, W/2, H-45, true);
  // Draw Top and Bottom Line
  g.setColor(0,0.18,0);
  g.drawLine(5,5,W-5,5);
  g.drawLine(5,H-5,W-5,H-5);
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

/* MAIN LOOP */
function main() {
  g.clear();
  draw();
  /* Show launcher when middle button pressed
  This should be done *before* Bangle.loadWidgets so that
  widgets know if they're being loaded into a clock app or not */
  Bangle.setUI("clock");
  // Load widgets
  Bangle.loadWidgets();
  Bangle.drawWidgets();
}

/* BOOT CODE */
main();
