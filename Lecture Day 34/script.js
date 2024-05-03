let x = 50;
let y = 50;
let width = 200;
let height = 200;
window.onload = function () {
  paper.setup("myCanvas");
  for (let i = 0; i < 5; i++) {
    let rect = new paper.Path.Rectangle(x, y, width, height);
    rect.fillColor = "violet";
    rect.strokeColor = "black";
    height /= 2;
    width /= 2;
    y = y + height / 2;
    x = x + width * 2 + 10;
  }
};
