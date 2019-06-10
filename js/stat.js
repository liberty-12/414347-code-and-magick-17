'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo((x + CLOUD_WIDTH), y);
  ctx.lineTo((x + CLOUD_WIDTH) - GAP, y + CLOUD_HEIGHT / 2);
  ctx.lineTo((x + CLOUD_WIDTH), (y + CLOUD_HEIGHT));
  ctx.lineTo(x + CLOUD_WIDTH / 2, (y + CLOUD_HEIGHT) - GAP);
  ctx.lineTo(x, (y + CLOUD_HEIGHT));
  ctx.lineTo(x + GAP, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
};
