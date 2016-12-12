beeFunction('#movingbee1', 'left');
beeFunction('#movingbee2', 'left');
beeFunction('#movingbee3', 'left');
beeFunction('#movingbee4', 'right');
beeFunction('#movingbee5', 'right');
beeFunction('#movingbee6', 'right');

function beeFunction(selector, slice) {
  stayTime =  15000 * Math.random() + 5000;

  if (stayTime < 5000) {
    stayTime =  20000 * Math.random();
  }

  initPos(selector, slice);
  setAnimateTime(selector);
  setNewPos(selector);

  setInterval(function(){
    setNewPos(selector);
  }, stayTime);
}

function initPos(selector,slice) {
  var XInitMultiplier = Math.random();
  var YInitMultiplier = Math.random();

  if (slice == 'left') {
    $(selector).css({
      'bottom': YInitMultiplier * $('.main').height(),
      'right': XInitMultiplier * ($('.main').width() * 0.2) + ($('.main').width() * 0.8),
    });
  } else {
    $(selector).css({
      'bottom': YInitMultiplier * $('.main').height(),
      'right': XInitMultiplier * ($('.main').width() * 0.2),
    });
  }
}

function setNewPos(selector) {
  var rotateValue = Math.random() * 360;
  var translateXDirection = 0;
  var translateYDirection = 0;

  if (Math.random() >= 0.5) {
    translateXDirection = -1;
  } else {
    translateXDirection = 1;
  }

  if (Math.random() >= 0.5) {
    translateYDirection = -1;
  } else {
    translateYDirection = 1;
  }

  var translateXValue = Math.random() * 30 * translateXDirection;
  var translateYValue = Math.random() * 30 * translateYDirection;

  var propertyValue = 'rotateZ(' + rotateValue + 'deg)' + 'translate3d(' + translateXValue + 'px,' + translateYValue + 'px, 0px)'
  $(selector).css({
    'transform': propertyValue
  });
}

function setAnimateTime(selector) {
  $(selector).css({
    'transition-duration': (Math.random() * 300 + 900) + 'ms'
  });
}
