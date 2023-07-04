const drawWave = () => {
  var unit = 100, canvasList, info = {}, colorList;
  function init() {
    info.seconds = 0;
    info.t = 0;
    canvasList = [];
    colorList = [];
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(["rgba(12, 80, 198, 0.75) "]);
    for (var canvasIndex in canvasList) {
      var canvas = canvasList[canvasIndex];
      canvas.width = document.documentElement.clientWidth;
      canvas.height = 650;
      canvas.contextCache = canvas.getContext("2d");
    }
    update();
  }
  function update() {
    for (var canvasIndex in canvasList) {
      var canvas = canvasList[canvasIndex];
      draw(canvas, colorList[canvasIndex]);
    }
    info.seconds = info.seconds + 0.014;
    info.t = info.seconds * Math.PI;
    setTimeout(update, 200);
  }
  function draw(canvas, color) {
    var context = canvas.contextCache;
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawWave2(canvas, color[0], 1, 2, 0);
  }
  function drawWave2(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height);
    context.lineTo(0, canvas.height);
    context.closePath();
    context.fill();
  }
  function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height / 2);
    var yAxis = 0;
    var context = canvas.contextCache;
    var x = t;
    var y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis);
    for (var i = yAxis; i <= canvas.width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 3;
      context.lineTo(i, unit * y + xAxis);
    }
  }
  init();
};
export {
  drawWave
};
