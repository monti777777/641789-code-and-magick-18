var CLOUD_WIDTH = 490;
var CLOUD_HEIGHT = 180;
var BEGIN_X = 140;
var BEGIN_Y = 220;
var GAP = 5;
var GAP_BETWEEN = 20;
var TEXT_HEIGHT = 15;
var BAR_WIDTH = 60;
var barHeight = -(CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP);

var renderCloud = function (ctx) {
  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.moveTo(115, 70);
  ctx.lineTo(635, 70);
  ctx.lineTo(605, 160);
  ctx.lineTo(635, 250);
  ctx.lineTo(115, 250);
  ctx.lineTo(145, 160);
  ctx.lineTo(115, 70);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = '#fff';
  ctx.moveTo(100, 60);
  ctx.lineTo(620, 60);
  ctx.lineTo(590, 150);
  ctx.lineTo(620, 240);
  ctx.lineTo(100, 240);
  ctx.lineTo(130, 150);
  ctx.lineTo(100, 60);
  ctx.closePath();
  ctx.fill();
};

// Функция находим максимальный элемент и помещает его как 0 индекс.
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx);
  // Здесь надпись о том, что игрок выиграл
  ctx.textBaseline = "hanging";

  ctx.fillStyle = '#fff'
  ctx.fillRect(200, 20, 320, 40);
  ctx.fillStyle = '#000'
  ctx.fillText('Вы выиграли! Ваш результат: ', 220, 30);



  // Здесь начала кода гистограммы
  var maxTime = getMaxElement(times);

  // Формула расчёта длины столбца.
  // X = (barHeight * times[i]) / maxTime)
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000'
    ctx.fillText(players[i], BEGIN_X + (BAR_WIDTH + GAP_BETWEEN) * i, BEGIN_Y);
    ctx.fillStyle = 'blue'
    ctx.fillRect(BEGIN_X + (BAR_WIDTH + GAP_BETWEEN) * i, BEGIN_Y - GAP, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }
};
