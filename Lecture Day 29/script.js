let direction = "";
let meriKey = setInterval(function () {
  if (direction == "right") {
    truck.style.left = truck.offsetLeft + 2 + "px";
  } else if (direction == "left") {
    truck.style.left = truck.offsetLeft - 2 + "px";
  } else if (direction == "top") {
    truck.style.top = truck.offsetTop + 2 + "px";
  } else if (direction == "bottom") {
    truck.style.top = truck.offsetTop - 2 + "px";
  }
}, 100);
function top() {
  return (direction = "top");
}

function bottom() {
  return (direction = "bottom");
}

function left() {
  return (direction = "left");
}

function right() {
  return (direction = "right");
}
