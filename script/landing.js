let $ = document.querySelector.bind(document);
let $on = document.addEventListener.bind(document);
let xmouse, ymouse;
$on("mousemove", function (e) {
  xmouse = e.clientX || e.pageX;
  ymouse = e.clientY || e.pageY;
});

let ball = $(".ball");
let x = void 0,
  y = void 0,
  dx = void 0,
  dy = void 0,
  tx = 0,
  ty = 0,
  key = -1;

let followMouse = function followMouse() {
  key = requestAnimationFrame(followMouse);
  if (!x || !y) {
    x = xmouse;
    y = ymouse;
  } else {
    dx = (xmouse - x) * 0.0425;
    dy = (ymouse - y) * 0.0425;
    if (Math.abs(dx) + Math.abs(dy) < 0.1) {
      x = xmouse;
      y = ymouse;
    } else {
      x += dx;
      y += dy;
    }
  }
  ball.style.left = x - 500 + "px";
  ball.style.top = y - 500 + "px";
};
