const canvas = document.getElementById("source");
const ctx = canvas.getContext("2d");

let t = 0; //time in seconds
function loop(time) {
  // time in milliseconds
  let dt = time / 1000 - t;
  t = time / 1000;

  updateCanvasSize();
  calculate(dt);
  render(dt);

  window.requestAnimationFrame(loop);
}

function updateCanvasSize() {
  ctx.canvas.width = canvas.clientWidth;
  ctx.canvas.height = canvas.clientHeight;
}

function init() {
  window.requestAnimationFrame(loop);
}

function render(dt) {
  let size = 50;

  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(
    ctx.canvas.width / 2 - size / 2,
    ctx.canvas.height / 2 - size / 2,
    size,
    size
  );
}

function calculate(dt) {}

init();
