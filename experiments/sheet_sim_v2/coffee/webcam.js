// Generated by CoffeeScript 1.12.5
var Camera,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

$(function() {
  window.hc = new HeatCamera({
    container: $('#video-wrapper')
  });
  hc.open();
  return console.log("LOADED");
});

Camera = (function() {
  function Camera(ops) {
    _.extend(this, ops);
    this.localMediaStream = null;
    this.navigator = window.navigator;
    this.errorCallback = function(e) {
      return console.log('Permission Denied', e);
    };
    this.init();
  }

  Camera.prototype.init = function() {
    this.w = this.container.width();
    this.h = this.container.height();
    this.video = $('<video></video>').addClass('webcam-video webcam visible').attr({
      autoplay: 'autoplay'
    });
    this.canvas = $('<canvas></canvas>').addClass('webcam-canvas webcam').css({
      display: 'none'
    }).attr;
    return this.container.append([this.video]);
  };

  Camera.prototype.open = function() {
    var scope;
    scope = this;
    this.navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    scope.navigator.getUserMedia({
      video: true
    }, (function(stream) {
      scope.video.attr('src', window.URL.createObjectURL(stream));
      return scope.localMediaStream = stream;
    }), this.errorCallback);
    return this._rectification_routine();
  };

  Camera.prototype.capture = function() {
    if (!this.localMediaStream) {

    }
  };

  Camera.prototype.close = function() {};

  Camera.prototype._rectification_routine = function() {
    var d, s, system_of_eq;
    d = {
      1: {
        x: 1,
        y: 2
      },
      2: {
        x: 1,
        y: 2
      },
      3: {
        x: 1,
        y: 2
      },
      4: {
        x: 1,
        y: 2
      }
    };
    s = {
      1: {
        x: 1,
        y: 2
      },
      2: {
        x: 1,
        y: 2
      },
      3: {
        x: 1,
        y: 2
      },
      4: {
        x: 1,
        y: 2
      }
    };
    return system_of_eq = [[s[1].x, s[1].y, 0, 0, 0, -1 * s[1].x * d[1].x, -1 * s[1].y * d[1].x], [0, 0, 0, s[1].x, s[1].y, 1, -1 * s[1].x * d[1].y, -1 * s[1].y * d[1].y], [s[2].x, s[2].y, 0, 0, 0, -1 * s[2].x * d[2].x, -1 * s[2].y * d[2].x], [0, 0, 0, s[2].x, s[2].y, 1, -1 * s[2].x * d[2].y, -1 * s[2].y * d[2].y], [s[3].x, s[3].y, 0, 0, 0, -1 * s[3].x * d[3].x, -1 * s[3].y * d[3].x], [0, 0, 0, s[3].x, s[3].y, 1, -1 * s[3].x * d[3].y, -1 * s[3].y * d[3].y], [s[4].x, s[4].y, 0, 0, 0, -1 * s[4].x * d[4].x, -1 * s[4].y * d[4].x], [0, 0, 0, s[4].x, s[4].y, 1, -1 * s[4].x * d[4].y, -1 * s[4].y * d[4].y]];
  };

  return Camera;

})();

window.HeatCamera = (function(superClass) {
  extend(HeatCamera, superClass);

  function HeatCamera() {
    return HeatCamera.__super__.constructor.apply(this, arguments);
  }

  HeatCamera.prototype.to_heat = function() {};

  return HeatCamera;

})(Camera);
