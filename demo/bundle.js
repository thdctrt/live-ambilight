"use strict";
var Ambilight = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    initAmbilight: () => initAmbilight
  });

  // node_modules/.pnpm/colorthief@2.6.0/node_modules/colorthief/dist/color-thief.mjs
  var t = function(t2, r2) {
    return t2 < r2 ? -1 : t2 > r2 ? 1 : 0;
  };
  var r = function(t2) {
    return t2.reduce(function(t3, r2) {
      return t3 + r2;
    }, 0);
  };
  var n = /* @__PURE__ */ function() {
    function t2(t3) {
      this.colors = t3;
    }
    var r2 = t2.prototype;
    return r2.palette = function() {
      return this.colors;
    }, r2.map = function(t3) {
      return t3;
    }, t2;
  }();
  var o = function() {
    function o2(t2, r2, n2) {
      return (t2 << 10) + (r2 << 5) + n2;
    }
    function e2(t2) {
      var r2 = [], n2 = false;
      function o3() {
        r2.sort(t2), n2 = true;
      }
      return { push: function(t3) {
        r2.push(t3), n2 = false;
      }, peek: function(t3) {
        return n2 || o3(), void 0 === t3 && (t3 = r2.length - 1), r2[t3];
      }, pop: function() {
        return n2 || o3(), r2.pop();
      }, size: function() {
        return r2.length;
      }, map: function(t3) {
        return r2.map(t3);
      }, debug: function() {
        return n2 || o3(), r2;
      } };
    }
    function i2(t2, r2, n2, o3, e3, i3, u3) {
      var a2 = this;
      a2.r1 = t2, a2.r2 = r2, a2.g1 = n2, a2.g2 = o3, a2.b1 = e3, a2.b2 = i3, a2.histo = u3;
    }
    function u2() {
      this.vboxes = new e2(function(r2, n2) {
        return t(r2.vbox.count() * r2.vbox.volume(), n2.vbox.count() * n2.vbox.volume());
      });
    }
    function a(t2, r2) {
      if (r2.count()) {
        var n2 = r2.r2 - r2.r1 + 1, e3 = r2.g2 - r2.g1 + 1, i3 = Math.max.apply(null, [n2, e3, r2.b2 - r2.b1 + 1]);
        if (1 == r2.count())
          return [r2.copy()];
        var u3, a2, c, f, s = 0, h = [], v = [];
        if (i3 == n2)
          for (u3 = r2.r1; u3 <= r2.r2; u3++) {
            for (f = 0, a2 = r2.g1; a2 <= r2.g2; a2++)
              for (c = r2.b1; c <= r2.b2; c++)
                f += t2[o2(u3, a2, c)] || 0;
            h[u3] = s += f;
          }
        else if (i3 == e3)
          for (u3 = r2.g1; u3 <= r2.g2; u3++) {
            for (f = 0, a2 = r2.r1; a2 <= r2.r2; a2++)
              for (c = r2.b1; c <= r2.b2; c++)
                f += t2[o2(a2, u3, c)] || 0;
            h[u3] = s += f;
          }
        else
          for (u3 = r2.b1; u3 <= r2.b2; u3++) {
            for (f = 0, a2 = r2.r1; a2 <= r2.r2; a2++)
              for (c = r2.g1; c <= r2.g2; c++)
                f += t2[o2(a2, c, u3)] || 0;
            h[u3] = s += f;
          }
        return h.forEach(function(t3, r3) {
          v[r3] = s - t3;
        }), function(t3) {
          var n3, o3, e4, i4, a3, c2 = t3 + "1", f2 = t3 + "2", l = 0;
          for (u3 = r2[c2]; u3 <= r2[f2]; u3++)
            if (h[u3] > s / 2) {
              for (e4 = r2.copy(), i4 = r2.copy(), a3 = (n3 = u3 - r2[c2]) <= (o3 = r2[f2] - u3) ? Math.min(r2[f2] - 1, ~~(u3 + o3 / 2)) : Math.max(r2[c2], ~~(u3 - 1 - n3 / 2)); !h[a3]; )
                a3++;
              for (l = v[a3]; !l && h[a3 - 1]; )
                l = v[--a3];
              return e4[f2] = a3, i4[c2] = e4[f2] + 1, [e4, i4];
            }
        }(i3 == n2 ? "r" : i3 == e3 ? "g" : "b");
      }
    }
    return i2.prototype = { volume: function(t2) {
      var r2 = this;
      return r2._volume && !t2 || (r2._volume = (r2.r2 - r2.r1 + 1) * (r2.g2 - r2.g1 + 1) * (r2.b2 - r2.b1 + 1)), r2._volume;
    }, count: function(t2) {
      var r2 = this, n2 = r2.histo;
      if (!r2._count_set || t2) {
        var e3, i3, u3, a2 = 0;
        for (e3 = r2.r1; e3 <= r2.r2; e3++)
          for (i3 = r2.g1; i3 <= r2.g2; i3++)
            for (u3 = r2.b1; u3 <= r2.b2; u3++)
              a2 += n2[o2(e3, i3, u3)] || 0;
        r2._count = a2, r2._count_set = true;
      }
      return r2._count;
    }, copy: function() {
      var t2 = this;
      return new i2(t2.r1, t2.r2, t2.g1, t2.g2, t2.b1, t2.b2, t2.histo);
    }, avg: function(t2) {
      var r2 = this, n2 = r2.histo;
      if (!r2._avg || t2) {
        var e3, i3, u3, a2, c = 0, f = 0, s = 0, h = 0;
        if (r2.r1 === r2.r2 && r2.g1 === r2.g2 && r2.b1 === r2.b2)
          r2._avg = [r2.r1 << 3, r2.g1 << 3, r2.b1 << 3];
        else {
          for (i3 = r2.r1; i3 <= r2.r2; i3++)
            for (u3 = r2.g1; u3 <= r2.g2; u3++)
              for (a2 = r2.b1; a2 <= r2.b2; a2++)
                c += e3 = n2[o2(i3, u3, a2)] || 0, f += e3 * (i3 + 0.5) * 8, s += e3 * (u3 + 0.5) * 8, h += e3 * (a2 + 0.5) * 8;
          r2._avg = c ? [~~(f / c), ~~(s / c), ~~(h / c)] : [~~(8 * (r2.r1 + r2.r2 + 1) / 2), ~~(8 * (r2.g1 + r2.g2 + 1) / 2), ~~(8 * (r2.b1 + r2.b2 + 1) / 2)];
        }
      }
      return r2._avg;
    }, contains: function(t2) {
      var r2 = this, n2 = t2[0] >> 3;
      return gval = t2[1] >> 3, bval = t2[2] >> 3, n2 >= r2.r1 && n2 <= r2.r2 && gval >= r2.g1 && gval <= r2.g2 && bval >= r2.b1 && bval <= r2.b2;
    } }, u2.prototype = { push: function(t2) {
      this.vboxes.push({ vbox: t2, color: t2.avg() });
    }, palette: function() {
      return this.vboxes.map(function(t2) {
        return t2.color;
      });
    }, size: function() {
      return this.vboxes.size();
    }, map: function(t2) {
      for (var r2 = this.vboxes, n2 = 0; n2 < r2.size(); n2++)
        if (r2.peek(n2).vbox.contains(t2))
          return r2.peek(n2).color;
      return this.nearest(t2);
    }, nearest: function(t2) {
      for (var r2, n2, o3, e3 = this.vboxes, i3 = 0; i3 < e3.size(); i3++)
        ((n2 = Math.sqrt(Math.pow(t2[0] - e3.peek(i3).color[0], 2) + Math.pow(t2[1] - e3.peek(i3).color[1], 2) + Math.pow(t2[2] - e3.peek(i3).color[2], 2))) < r2 || void 0 === r2) && (r2 = n2, o3 = e3.peek(i3).color);
      return o3;
    }, forcebw: function() {
      var n2 = this.vboxes;
      n2.sort(function(n3, o4) {
        return t(r(n3.color), r(o4.color));
      });
      var o3 = n2[0].color;
      o3[0] < 5 && o3[1] < 5 && o3[2] < 5 && (n2[0].color = [0, 0, 0]);
      var e3 = n2.length - 1, i3 = n2[e3].color;
      i3[0] > 251 && i3[1] > 251 && i3[2] > 251 && (n2[e3].color = [255, 255, 255]);
    } }, { quantize: function(r2, c) {
      if (!Number.isInteger(c) || c < 1 || c > 256)
        throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");
      if (!r2.length || c < 2 || c > 256)
        return false;
      if (!r2.length || c < 2 || c > 256)
        return false;
      for (var f = [], s = /* @__PURE__ */ new Set(), h = 0; h < r2.length; h++) {
        var v = r2[h], l = v.join(",");
        s.has(l) || (s.add(l), f.push(v));
      }
      if (f.length <= c)
        return new n(f);
      var g = function(t2) {
        var r3, n2 = new Array(32768);
        return t2.forEach(function(t3) {
          r3 = o2(t3[0] >> 3, t3[1] >> 3, t3[2] >> 3), n2[r3] = (n2[r3] || 0) + 1;
        }), n2;
      }(r2);
      g.forEach(function() {
      });
      var p = function(t2, r3) {
        var n2, o3, e3, u3 = 1e6, a2 = 0, c2 = 1e6, f2 = 0, s2 = 1e6, h2 = 0;
        return t2.forEach(function(t3) {
          (n2 = t3[0] >> 3) < u3 ? u3 = n2 : n2 > a2 && (a2 = n2), (o3 = t3[1] >> 3) < c2 ? c2 = o3 : o3 > f2 && (f2 = o3), (e3 = t3[2] >> 3) < s2 ? s2 = e3 : e3 > h2 && (h2 = e3);
        }), new i2(u3, a2, c2, f2, s2, h2, r3);
      }(r2, g), b = new e2(function(r3, n2) {
        return t(r3.count(), n2.count());
      });
      function m(t2, r3) {
        for (var n2, o3 = t2.size(), e3 = 0; e3 < 1e3; ) {
          if (o3 >= r3)
            return;
          if (e3++ > 1e3)
            return;
          if ((n2 = t2.pop()).count()) {
            var i3 = a(g, n2), u3 = i3[0], c2 = i3[1];
            if (!u3)
              return;
            t2.push(u3), c2 && (t2.push(c2), o3++);
          } else
            t2.push(n2), e3++;
        }
      }
      b.push(p), m(b, 0.75 * c);
      for (var d = new e2(function(r3, n2) {
        return t(r3.count() * r3.volume(), n2.count() * n2.volume());
      }); b.size(); )
        d.push(b.pop());
      m(d, c);
      for (var w = new u2(); d.size(); )
        w.push(d.pop());
      return w;
    } };
  }().quantize;
  var e = function(t2) {
    this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.width = this.canvas.width = t2.naturalWidth, this.height = this.canvas.height = t2.naturalHeight, this.context.drawImage(t2, 0, 0, this.width, this.height);
  };
  e.prototype.getImageData = function() {
    return this.context.getImageData(0, 0, this.width, this.height);
  };
  var u = function() {
  };
  u.prototype.getColor = function(t2, r2) {
    return void 0 === r2 && (r2 = 10), this.getPalette(t2, 5, r2)[0];
  }, u.prototype.getPalette = function(t2, r2, n2) {
    var i2 = function(t3) {
      var r3 = t3.colorCount, n3 = t3.quality;
      if (void 0 !== r3 && Number.isInteger(r3)) {
        if (1 === r3)
          throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");
        r3 = Math.max(r3, 2), r3 = Math.min(r3, 20);
      } else
        r3 = 10;
      return (void 0 === n3 || !Number.isInteger(n3) || n3 < 1) && (n3 = 10), { colorCount: r3, quality: n3 };
    }({ colorCount: r2, quality: n2 }), u2 = new e(t2), a = function(t3, r3, n3) {
      for (var o2, e2, i3, u3, a2, c2 = t3, f = [], s = 0; s < r3; s += n3)
        e2 = c2[0 + (o2 = 4 * s)], i3 = c2[o2 + 1], u3 = c2[o2 + 2], (void 0 === (a2 = c2[o2 + 3]) || a2 >= 125) && (e2 > 250 && i3 > 250 && u3 > 250 || f.push([e2, i3, u3]));
      return f;
    }(u2.getImageData().data, u2.width * u2.height, i2.quality), c = o(a, i2.colorCount);
    return c ? c.palette() : null;
  }, u.prototype.getColorFromUrl = function(t2, r2, n2) {
    var o2 = this, e2 = document.createElement("img");
    e2.addEventListener("load", function() {
      var i2 = o2.getPalette(e2, 5, n2);
      r2(i2[0], t2);
    }), e2.src = t2;
  }, u.prototype.getImageData = function(t2, r2) {
    var n2 = new XMLHttpRequest();
    n2.open("GET", t2, true), n2.responseType = "arraybuffer", n2.onload = function() {
      if (200 == this.status) {
        var t3 = new Uint8Array(this.response);
        i = t3.length;
        for (var n3 = new Array(i), o2 = 0; o2 < t3.length; o2++)
          n3[o2] = String.fromCharCode(t3[o2]);
        var e2 = n3.join(""), u2 = window.btoa(e2);
        r2("data:image/png;base64," + u2);
      }
    }, n2.send();
  }, u.prototype.getColorAsync = function(t2, r2, n2) {
    var o2 = this;
    this.getImageData(t2, function(t3) {
      var e2 = document.createElement("img");
      e2.addEventListener("load", function() {
        var t4 = o2.getPalette(e2, 5, n2);
        r2(t4[0], this);
      }), e2.src = t3;
    });
  };

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/array.mjs
  function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
      arr.push(item);
  }
  function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
      arr.splice(index, 1);
  }

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/clamp.mjs
  var clamp = (min, max, v) => {
    if (v > max)
      return max;
    if (v < min)
      return min;
    return v;
  };

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/errors.mjs
  var warning = () => {
  };
  var invariant = () => {
  };
  if (true) {
    warning = (check, message) => {
      if (!check && typeof console !== "undefined") {
        console.warn(message);
      }
    };
    invariant = (check, message) => {
      if (!check) {
        throw new Error(message);
      }
    };
  }

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/global-config.mjs
  var MotionGlobalConfig = {};

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/is-numerical-string.mjs
  var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/is-object.mjs
  function isObject(value) {
    return typeof value === "object" && value !== null;
  }

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/is-zero-value-string.mjs
  var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/memo.mjs
  // @__NO_SIDE_EFFECTS__
  function memo(callback) {
    let result;
    return () => {
      if (result === void 0)
        result = callback();
      return result;
    };
  }

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/noop.mjs
  var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/pipe.mjs
  var combineFunctions = (a, b) => (v) => b(a(v));
  var pipe = (...transformers) => transformers.reduce(combineFunctions);

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/progress.mjs
  var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
  };

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/subscription-manager.mjs
  var SubscriptionManager = class {
    constructor() {
      this.subscriptions = [];
    }
    add(handler) {
      addUniqueItem(this.subscriptions, handler);
      return () => removeItem(this.subscriptions, handler);
    }
    notify(a, b, c) {
      const numSubscriptions = this.subscriptions.length;
      if (!numSubscriptions)
        return;
      if (numSubscriptions === 1) {
        this.subscriptions[0](a, b, c);
      } else {
        for (let i2 = 0; i2 < numSubscriptions; i2++) {
          const handler = this.subscriptions[i2];
          handler && handler(a, b, c);
        }
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  };

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/time-conversion.mjs
  var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
  var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/velocity-per-second.mjs
  function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1e3 / frameDuration) : 0;
  }

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/warn-once.mjs
  var warned = /* @__PURE__ */ new Set();
  function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
      return;
    console.warn(message);
    if (element)
      console.warn(element);
    warned.add(message);
  }

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/wrap.mjs
  var wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
  };

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
  var calcBezier = (t2, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t2 + (3 * a2 - 6 * a1)) * t2 + 3 * a1) * t2;
  var subdivisionPrecision = 1e-7;
  var subdivisionMaxIterations = 12;
  function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i2 = 0;
    do {
      currentT = lowerBound + (upperBound - lowerBound) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - x;
      if (currentX > 0) {
        upperBound = currentT;
      } else {
        lowerBound = currentT;
      }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i2 < subdivisionMaxIterations);
    return currentT;
  }
  function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
      return noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    return (t2) => t2 === 0 || t2 === 1 ? t2 : calcBezier(getTForX(t2), mY1, mY2);
  }

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
  var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
  var reverseEasing = (easing) => (p) => 1 - easing(1 - p);

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/back.mjs
  var backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
  var backIn = /* @__PURE__ */ reverseEasing(backOut);
  var backInOut = /* @__PURE__ */ mirrorEasing(backIn);

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/anticipate.mjs
  var anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/circ.mjs
  var circIn = (p) => 1 - Math.sin(Math.acos(p));
  var circOut = reverseEasing(circIn);
  var circInOut = mirrorEasing(circIn);

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/ease.mjs
  var easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
  var easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
  var easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
  var isEasingArray = (ease2) => {
    return Array.isArray(ease2) && typeof ease2[0] !== "number";
  };

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
  function getEasingForSegment(easing, i2) {
    return isEasingArray(easing) ? easing[wrap(0, easing.length, i2)] : easing;
  }

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
  var isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";

  // node_modules/.pnpm/motion-utils@12.19.0/node_modules/motion-utils/dist/es/easing/utils/map.mjs
  var easingLookup = {
    linear: noop,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate
  };
  var isValidEasing = (easing) => {
    return typeof easing === "string";
  };
  var easingDefinitionToFunction = (definition) => {
    if (isBezierDefinition(definition)) {
      invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
      const [x1, y1, x2, y2] = definition;
      return cubicBezier(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
      invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
      return easingLookup[definition];
    }
    return definition;
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/frameloop/order.mjs
  var stepsOrder = [
    "setup",
    // Compute
    "read",
    // Read
    "resolveKeyframes",
    // Write/Read/Write/Read
    "preUpdate",
    // Compute
    "update",
    // Compute
    "preRender",
    // Compute
    "render",
    // Write
    "postRender"
    // Compute
  ];

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/stats/buffer.mjs
  var statsBuffer = {
    value: null,
    addProjectionMetrics: null
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/frameloop/render-step.mjs
  function createRenderStep(runNextFrame, stepName) {
    let thisFrame = /* @__PURE__ */ new Set();
    let nextFrame = /* @__PURE__ */ new Set();
    let isProcessing = false;
    let flushNextFrame = false;
    const toKeepAlive = /* @__PURE__ */ new WeakSet();
    let latestFrameData = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    let numCalls = 0;
    function triggerCallback(callback) {
      if (toKeepAlive.has(callback)) {
        step.schedule(callback);
        runNextFrame();
      }
      numCalls++;
      callback(latestFrameData);
    }
    const step = {
      /**
       * Schedule a process to run on the next frame.
       */
      schedule: (callback, keepAlive = false, immediate = false) => {
        const addToCurrentFrame = immediate && isProcessing;
        const queue = addToCurrentFrame ? thisFrame : nextFrame;
        if (keepAlive)
          toKeepAlive.add(callback);
        if (!queue.has(callback))
          queue.add(callback);
        return callback;
      },
      /**
       * Cancel the provided callback from running on the next frame.
       */
      cancel: (callback) => {
        nextFrame.delete(callback);
        toKeepAlive.delete(callback);
      },
      /**
       * Execute all schedule callbacks.
       */
      process: (frameData2) => {
        latestFrameData = frameData2;
        if (isProcessing) {
          flushNextFrame = true;
          return;
        }
        isProcessing = true;
        [thisFrame, nextFrame] = [nextFrame, thisFrame];
        thisFrame.forEach(triggerCallback);
        if (stepName && statsBuffer.value) {
          statsBuffer.value.frameloop[stepName].push(numCalls);
        }
        numCalls = 0;
        thisFrame.clear();
        isProcessing = false;
        if (flushNextFrame) {
          flushNextFrame = false;
          step.process(frameData2);
        }
      }
    };
    return step;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/frameloop/batcher.mjs
  var maxElapsed = 40;
  function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    const flagRunNextFrame = () => runNextFrame = true;
    const steps = stepsOrder.reduce((acc, key) => {
      acc[key] = createRenderStep(flagRunNextFrame, allowKeepAlive ? key : void 0);
      return acc;
    }, {});
    const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
    const processBatch = () => {
      const timestamp = MotionGlobalConfig.useManualTiming ? state.timestamp : performance.now();
      runNextFrame = false;
      if (!MotionGlobalConfig.useManualTiming) {
        state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
      }
      state.timestamp = timestamp;
      state.isProcessing = true;
      setup.process(state);
      read.process(state);
      resolveKeyframes.process(state);
      preUpdate.process(state);
      update.process(state);
      preRender.process(state);
      render.process(state);
      postRender.process(state);
      state.isProcessing = false;
      if (runNextFrame && allowKeepAlive) {
        useDefaultElapsed = false;
        scheduleNextBatch(processBatch);
      }
    };
    const wake = () => {
      runNextFrame = true;
      useDefaultElapsed = true;
      if (!state.isProcessing) {
        scheduleNextBatch(processBatch);
      }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
      const step = steps[key];
      acc[key] = (process2, keepAlive = false, immediate = false) => {
        if (!runNextFrame)
          wake();
        return step.schedule(process2, keepAlive, immediate);
      };
      return acc;
    }, {});
    const cancel = (process2) => {
      for (let i2 = 0; i2 < stepsOrder.length; i2++) {
        steps[stepsOrder[i2]].cancel(process2);
      }
    };
    return { schedule, cancel, state, steps };
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs
  var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
  var now;
  function clearTime() {
    now = void 0;
  }
  var time = {
    now: () => {
      if (now === void 0) {
        time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
      }
      return now;
    },
    set: (newTime) => {
      now = newTime;
      queueMicrotask(clearTime);
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/stats/animation-count.mjs
  var activeAnimations = {
    layout: 0,
    mainThread: 0,
    waapi: 0
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
  var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
  var isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
  var startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
  var isCSSVariableToken = (value) => {
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken)
      return false;
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
  };
  var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
  var number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v
  };
  var alpha = {
    ...number,
    transform: (v) => clamp(0, 1, v)
  };
  var scale = {
    ...number,
    default: 1
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
  var sanitize = (v) => Math.round(v * 1e5) / 1e5;

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
  var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
  function isNullish(v) {
    return v == null;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
  var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/color/utils.mjs
  var isColorString = (type, testProp) => (v) => {
    return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
  };
  var splitColor = (aName, bName, cName) => (v) => {
    if (typeof v !== "string")
      return v;
    const [a, b, c, alpha2] = v.match(floatRegex);
    return {
      [aName]: parseFloat(a),
      [bName]: parseFloat(b),
      [cName]: parseFloat(c),
      alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
    };
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
  var clampRgbUnit = (v) => clamp(0, 255, v);
  var rgbUnit = {
    ...number,
    transform: (v) => Math.round(clampRgbUnit(v))
  };
  var rgba = {
    test: /* @__PURE__ */ isColorString("rgb", "red"),
    parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/color/hex.mjs
  function parseHex(v) {
    let r2 = "";
    let g = "";
    let b = "";
    let a = "";
    if (v.length > 5) {
      r2 = v.substring(1, 3);
      g = v.substring(3, 5);
      b = v.substring(5, 7);
      a = v.substring(7, 9);
    } else {
      r2 = v.substring(1, 2);
      g = v.substring(2, 3);
      b = v.substring(3, 4);
      a = v.substring(4, 5);
      r2 += r2;
      g += g;
      b += b;
      a += a;
    }
    return {
      red: parseInt(r2, 16),
      green: parseInt(g, 16),
      blue: parseInt(b, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1
    };
  }
  var hex = {
    test: /* @__PURE__ */ isColorString("#"),
    parse: parseHex,
    transform: rgba.transform
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
  var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
    test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`
  });
  var degrees = /* @__PURE__ */ createUnitType("deg");
  var percent = /* @__PURE__ */ createUnitType("%");
  var px = /* @__PURE__ */ createUnitType("px");
  var vh = /* @__PURE__ */ createUnitType("vh");
  var vw = /* @__PURE__ */ createUnitType("vw");
  var progressPercentage = /* @__PURE__ */ (() => ({
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100)
  }))();

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
  var hsla = {
    test: /* @__PURE__ */ isColorString("hsl", "hue"),
    parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
      return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/color/index.mjs
  var color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
      if (rgba.test(v)) {
        return rgba.parse(v);
      } else if (hsla.test(v)) {
        return hsla.parse(v);
      } else {
        return hex.parse(v);
      }
    },
    transform: (v) => {
      return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
    },
    getAnimatableNone: (v) => {
      const parsed = color.parse(v);
      parsed.alpha = 0;
      return color.transform(parsed);
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
  var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
  function test(v) {
    return isNaN(v) && typeof v === "string" && (v.match(floatRegex)?.length || 0) + (v.match(colorRegex)?.length || 0) > 0;
  }
  var NUMBER_TOKEN = "number";
  var COLOR_TOKEN = "color";
  var VAR_TOKEN = "var";
  var VAR_FUNCTION_TOKEN = "var(";
  var SPLIT_TOKEN = "${}";
  var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
      color: [],
      number: [],
      var: []
    };
    const types = [];
    let i2 = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
      if (color.test(parsedValue)) {
        indexes.color.push(i2);
        types.push(COLOR_TOKEN);
        values.push(color.parse(parsedValue));
      } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
        indexes.var.push(i2);
        types.push(VAR_TOKEN);
        values.push(parsedValue);
      } else {
        indexes.number.push(i2);
        types.push(NUMBER_TOKEN);
        values.push(parseFloat(parsedValue));
      }
      ++i2;
      return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return { values, split, indexes, types };
  }
  function parseComplexValue(v) {
    return analyseComplexValue(v).values;
  }
  function createTransformer(source) {
    const { split, types } = analyseComplexValue(source);
    const numSections = split.length;
    return (v) => {
      let output = "";
      for (let i2 = 0; i2 < numSections; i2++) {
        output += split[i2];
        if (v[i2] !== void 0) {
          const type = types[i2];
          if (type === NUMBER_TOKEN) {
            output += sanitize(v[i2]);
          } else if (type === COLOR_TOKEN) {
            output += color.transform(v[i2]);
          } else {
            output += v[i2];
          }
        }
      }
      return output;
    };
  }
  var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
  function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
  }
  var complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
  function hueToRgb(p, q, t2) {
    if (t2 < 0)
      t2 += 1;
    if (t2 > 1)
      t2 -= 1;
    if (t2 < 1 / 6)
      return p + (q - p) * 6 * t2;
    if (t2 < 1 / 2)
      return q;
    if (t2 < 2 / 3)
      return p + (q - p) * (2 / 3 - t2) * 6;
    return p;
  }
  function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
      red = green = blue = lightness;
    } else {
      const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
      const p = 2 * lightness - q;
      red = hueToRgb(p, q, hue + 1 / 3);
      green = hueToRgb(p, q, hue);
      blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
      red: Math.round(red * 255),
      green: Math.round(green * 255),
      blue: Math.round(blue * 255),
      alpha: alpha2
    };
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
  function mixImmediate(a, b) {
    return (p) => p > 0 ? b : a;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/mix/number.mjs
  var mixNumber = (from, to, progress2) => {
    return from + (to - from) * progress2;
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/mix/color.mjs
  var mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
  };
  var colorTypes = [hex, rgba, hsla];
  var getColorType = (v) => colorTypes.find((type) => type.test(v));
  function asRGBA(color2) {
    const type = getColorType(color2);
    warning(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`);
    if (!Boolean(type))
      return false;
    let model = type.parse(color2);
    if (type === hsla) {
      model = hslaToRgba(model);
    }
    return model;
  }
  var mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
      return mixImmediate(from, to);
    }
    const blended = { ...fromRGBA };
    return (v) => {
      blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
      blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
      blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
      blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
      return rgba.transform(blended);
    };
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
  var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
  function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
      return (p) => p <= 0 ? origin : target;
    } else {
      return (p) => p >= 1 ? target : origin;
    }
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
  function mixNumber2(a, b) {
    return (p) => mixNumber(a, b, p);
  }
  function getMixer(a) {
    if (typeof a === "number") {
      return mixNumber2;
    } else if (typeof a === "string") {
      return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
    } else if (Array.isArray(a)) {
      return mixArray;
    } else if (typeof a === "object") {
      return color.test(a) ? mixColor : mixObject;
    }
    return mixImmediate;
  }
  function mixArray(a, b) {
    const output = [...a];
    const numValues = output.length;
    const blendValue = a.map((v, i2) => getMixer(v)(v, b[i2]));
    return (p) => {
      for (let i2 = 0; i2 < numValues; i2++) {
        output[i2] = blendValue[i2](p);
      }
      return output;
    };
  }
  function mixObject(a, b) {
    const output = { ...a, ...b };
    const blendValue = {};
    for (const key in output) {
      if (a[key] !== void 0 && b[key] !== void 0) {
        blendValue[key] = getMixer(a[key])(a[key], b[key]);
      }
    }
    return (v) => {
      for (const key in blendValue) {
        output[key] = blendValue[key](v);
      }
      return output;
    };
  }
  function matchOrder(origin, target) {
    const orderedOrigin = [];
    const pointers = { color: 0, var: 0, number: 0 };
    for (let i2 = 0; i2 < target.values.length; i2++) {
      const type = target.types[i2];
      const originIndex = origin.indexes[type][pointers[type]];
      const originValue = origin.values[originIndex] ?? 0;
      orderedOrigin[i2] = originValue;
      pointers[type]++;
    }
    return orderedOrigin;
  }
  var mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyseComplexValue(origin);
    const targetStats = analyseComplexValue(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
      if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
        return mixVisibility(origin, target);
      }
      return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
      warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
      return mixImmediate(origin, target);
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/mix/index.mjs
  function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
      return mixNumber(from, to, p);
    }
    const mixer = getMixer(from);
    return mixer(from, to);
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
  var frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
      start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
      stop: () => cancelFrame(passTimestamp),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => frameData.isProcessing ? frameData.timestamp : time.now()
    };
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
  var generateLinearEasing = (easing, duration, resolution = 10) => {
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for (let i2 = 0; i2 < numPoints; i2++) {
      points += Math.round(easing(i2 / (numPoints - 1)) * 1e4) / 1e4 + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
  var maxGeneratorDuration = 2e4;
  function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
      duration += timeStep;
      state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
  function createGeneratorEasing(options, scale2 = 100, createGenerator) {
    const generator = createGenerator({ ...options, keyframes: [0, scale2] });
    const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
    return {
      type: "keyframes",
      ease: (progress2) => {
        return generator.next(duration * progress2).value / scale2;
      },
      duration: millisecondsToSeconds(duration)
    };
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
  var velocitySampleDuration = 5;
  function calcGeneratorVelocity(resolveValue, t2, current) {
    const prevT = Math.max(t2 - velocitySampleDuration, 0);
    return velocityPerSecond(current - resolveValue(prevT), t2 - prevT);
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/generators/spring/defaults.mjs
  var springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    // Default duration/bounce-based options
    duration: 800,
    // in ms
    bounce: 0.3,
    visualDuration: 0.3,
    // in seconds
    // Rest thresholds
    restSpeed: {
      granular: 0.01,
      default: 2
    },
    restDelta: {
      granular: 5e-3,
      default: 0.5
    },
    // Limits
    minDuration: 0.01,
    // in seconds
    maxDuration: 10,
    // in seconds
    minDamping: 0.05,
    maxDamping: 1
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/generators/spring/find.mjs
  var safeMin = 1e-3;
  function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
    let envelope;
    let derivative;
    warning(duration <= secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
    duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
      envelope = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const a = exponentialDecay - velocity;
        const b = calcAngularFreq(undampedFreq2, dampingRatio);
        const c = Math.exp(-delta);
        return safeMin - a / b * c;
      };
      derivative = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const d = delta * velocity + velocity;
        const e2 = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
        const f = Math.exp(-delta);
        const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
        const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
        return factor * ((d - e2) * f) / g;
      };
    } else {
      envelope = (undampedFreq2) => {
        const a = Math.exp(-undampedFreq2 * duration);
        const b = (undampedFreq2 - velocity) * duration + 1;
        return -safeMin + a * b;
      };
      derivative = (undampedFreq2) => {
        const a = Math.exp(-undampedFreq2 * duration);
        const b = (velocity - undampedFreq2) * (duration * duration);
        return a * b;
      };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
      return {
        stiffness: springDefaults.stiffness,
        damping: springDefaults.damping,
        duration
      };
    } else {
      const stiffness = Math.pow(undampedFreq, 2) * mass;
      return {
        stiffness,
        damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
        duration
      };
    }
  }
  var rootIterations = 12;
  function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i2 = 1; i2 < rootIterations; i2++) {
      result = result - envelope(result) / derivative(result);
    }
    return result;
  }
  function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs
  var durationKeys = ["duration", "bounce"];
  var physicsKeys = ["stiffness", "damping", "mass"];
  function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== void 0);
  }
  function getSpringOptions(options) {
    let springOptions = {
      velocity: springDefaults.velocity,
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      mass: springDefaults.mass,
      isResolvedFromDuration: false,
      ...options
    };
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
      if (options.visualDuration) {
        const visualDuration = options.visualDuration;
        const root = 2 * Math.PI / (visualDuration * 1.2);
        const stiffness = root * root;
        const damping = 2 * clamp(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
        springOptions = {
          ...springOptions,
          mass: springDefaults.mass,
          stiffness,
          damping
        };
      } else {
        const derived = findSpring(options);
        springOptions = {
          ...springOptions,
          ...derived,
          mass: springDefaults.mass
        };
        springOptions.isResolvedFromDuration = true;
      }
    }
    return springOptions;
  }
  function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
    const options = typeof optionsOrVisualDuration !== "object" ? {
      visualDuration: optionsOrVisualDuration,
      keyframes: [0, 1],
      bounce
    } : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
      ...options,
      velocity: -millisecondsToSeconds(options.velocity || 0)
    });
    const initialVelocity = velocity || 0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
    let resolveSpring;
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t2) + initialDelta * Math.cos(angularFreq * t2));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t2) => target - Math.exp(-undampedAngularFreq * t2) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t2);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        const freqForT = Math.min(dampedAngularFreq * t2, 300);
        return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
    const generator = {
      calculatedDuration: isResolvedFromDuration ? duration || null : null,
      next: (t2) => {
        const current = resolveSpring(t2);
        if (!isResolvedFromDuration) {
          let currentVelocity = t2 === 0 ? initialVelocity : 0;
          if (dampingRatio < 1) {
            currentVelocity = t2 === 0 ? secondsToMilliseconds(initialVelocity) : calcGeneratorVelocity(resolveSpring, t2, current);
          }
          const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
          const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
          state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        } else {
          state.done = t2 >= duration;
        }
        state.value = state.done ? target : current;
        return state;
      },
      toString: () => {
        const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
        const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
        return calculatedDuration + "ms " + easing;
      },
      toTransition: () => {
      }
    };
    return generator;
  }
  spring.applyToOptions = (options) => {
    const generatorOptions = createGeneratorEasing(options, 100, spring);
    options.ease = generatorOptions.ease;
    options.duration = secondsToMilliseconds(generatorOptions.duration);
    options.type = "keyframes";
    return options;
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
  function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
    const origin = keyframes2[0];
    const state = {
      done: false,
      value: origin
    };
    const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
    const nearestBoundary = (v) => {
      if (min === void 0)
        return max;
      if (max === void 0)
        return min;
      return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
    if (target !== ideal)
      amplitude = target - origin;
    const calcDelta = (t2) => -amplitude * Math.exp(-t2 / timeConstant);
    const calcLatest = (t2) => target + calcDelta(t2);
    const applyFriction = (t2) => {
      const delta = calcDelta(t2);
      const latest = calcLatest(t2);
      state.done = Math.abs(delta) <= restDelta;
      state.value = state.done ? target : latest;
    };
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t2) => {
      if (!isOutOfBounds(state.value))
        return;
      timeReachedBoundary = t2;
      spring$1 = spring({
        keyframes: [state.value, nearestBoundary(state.value)],
        velocity: calcGeneratorVelocity(calcLatest, t2, state.value),
        // TODO: This should be passing * 1000
        damping: bounceDamping,
        stiffness: bounceStiffness,
        restDelta,
        restSpeed
      });
    };
    checkCatchBoundary(0);
    return {
      calculatedDuration: null,
      next: (t2) => {
        let hasUpdatedFrame = false;
        if (!spring$1 && timeReachedBoundary === void 0) {
          hasUpdatedFrame = true;
          applyFriction(t2);
          checkCatchBoundary(t2);
        }
        if (timeReachedBoundary !== void 0 && t2 >= timeReachedBoundary) {
          return spring$1.next(t2 - timeReachedBoundary);
        } else {
          !hasUpdatedFrame && applyFriction(t2);
          return state;
        }
      }
    };
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/interpolate.mjs
  function createMixers(output, ease2, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
    const numMixers = output.length - 1;
    for (let i2 = 0; i2 < numMixers; i2++) {
      let mixer = mixerFactory(output[i2], output[i2 + 1]);
      if (ease2) {
        const easingFunction = Array.isArray(ease2) ? ease2[i2] || noop : ease2;
        mixer = pipe(easingFunction, mixer);
      }
      mixers.push(mixer);
    }
    return mixers;
  }
  function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length, "Both input and output ranges must be the same length");
    if (inputLength === 1)
      return () => output[0];
    if (inputLength === 2 && output[0] === output[1])
      return () => output[1];
    const isZeroDeltaRange = input[0] === input[1];
    if (input[0] > input[inputLength - 1]) {
      input = [...input].reverse();
      output = [...output].reverse();
    }
    const mixers = createMixers(output, ease2, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
      if (isZeroDeltaRange && v < input[0])
        return output[0];
      let i2 = 0;
      if (numMixers > 1) {
        for (; i2 < input.length - 2; i2++) {
          if (v < input[i2 + 1])
            break;
        }
      }
      const progressInRange = progress(input[i2], input[i2 + 1], v);
      return mixers[i2](progressInRange);
    };
    return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
  function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i2 = 1; i2 <= remaining; i2++) {
      const offsetProgress = progress(0, remaining, i2);
      offset.push(mixNumber(min, 1, offsetProgress));
    }
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
  function defaultOffset(arr) {
    const offset = [0];
    fillOffset(offset, arr.length - 1);
    return offset;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
  function convertOffsetToTimes(offset, duration) {
    return offset.map((o2) => o2 * duration);
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
  function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
  }
  function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
    const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
    const state = {
      done: false,
      value: keyframeValues[0]
    };
    const absoluteTimes = convertOffsetToTimes(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
      duration
    );
    const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
      ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
      calculatedDuration: duration,
      next: (t2) => {
        state.value = mapTimeToKeyframe(t2);
        state.done = t2 >= duration;
        return state;
      }
    };
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
  var isNotNull = (value) => value !== null;
  function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
    const resolvedKeyframes = keyframes2.filter(isNotNull);
    const useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
    const index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
  var transitionTypeMap = {
    decay: inertia,
    inertia,
    tween: keyframes,
    keyframes,
    spring
  };
  function replaceTransitionType(transition) {
    if (typeof transition.type === "string") {
      transition.type = transitionTypeMap[transition.type];
    }
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
  var WithPromise = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((resolve) => {
        this.resolve = resolve;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    /**
     * Allows the animation to be awaited.
     *
     * @deprecated Use `finished` instead.
     */
    then(onResolve, onReject) {
      return this.finished.then(onResolve, onReject);
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
  var percentToProgress = (percent2) => percent2 / 100;
  var JSAnimation = class extends WithPromise {
    constructor(options) {
      super();
      this.state = "idle";
      this.startTime = null;
      this.isStopped = false;
      this.currentTime = 0;
      this.holdTime = null;
      this.playbackSpeed = 1;
      this.stop = () => {
        const { motionValue: motionValue2 } = this.options;
        if (motionValue2 && motionValue2.updatedAt !== time.now()) {
          this.tick(time.now());
        }
        this.isStopped = true;
        if (this.state === "idle")
          return;
        this.teardown();
        this.options.onStop?.();
      };
      activeAnimations.mainThread++;
      this.options = options;
      this.initAnimation();
      this.play();
      if (options.autoplay === false)
        this.pause();
    }
    initAnimation() {
      const { options } = this;
      replaceTransitionType(options);
      const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
      let { keyframes: keyframes$1 } = options;
      const generatorFactory = type || keyframes;
      if (generatorFactory !== keyframes) {
        invariant(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
      }
      if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
        this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
        keyframes$1 = [0, 100];
      }
      const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
      if (repeatType === "mirror") {
        this.mirroredGenerator = generatorFactory({
          ...options,
          keyframes: [...keyframes$1].reverse(),
          velocity: -velocity
        });
      }
      if (generator.calculatedDuration === null) {
        generator.calculatedDuration = calcGeneratorDuration(generator);
      }
      const { calculatedDuration } = generator;
      this.calculatedDuration = calculatedDuration;
      this.resolvedDuration = calculatedDuration + repeatDelay;
      this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
      this.generator = generator;
    }
    updateTime(timestamp) {
      const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
      if (this.holdTime !== null) {
        this.currentTime = this.holdTime;
      } else {
        this.currentTime = animationTime;
      }
    }
    tick(timestamp, sample = false) {
      const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
      if (this.startTime === null)
        return generator.next(0);
      const { delay = 0, keyframes: keyframes2, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
      if (this.speed > 0) {
        this.startTime = Math.min(this.startTime, timestamp);
      } else if (this.speed < 0) {
        this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
      }
      if (sample) {
        this.currentTime = timestamp;
      } else {
        this.updateTime(timestamp);
      }
      const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
      const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
      this.currentTime = Math.max(timeWithoutDelay, 0);
      if (this.state === "finished" && this.holdTime === null) {
        this.currentTime = totalDuration;
      }
      let elapsed = this.currentTime;
      let frameGenerator = generator;
      if (repeat) {
        const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
        let currentIteration = Math.floor(progress2);
        let iterationProgress = progress2 % 1;
        if (!iterationProgress && progress2 >= 1) {
          iterationProgress = 1;
        }
        iterationProgress === 1 && currentIteration--;
        currentIteration = Math.min(currentIteration, repeat + 1);
        const isOddIteration = Boolean(currentIteration % 2);
        if (isOddIteration) {
          if (repeatType === "reverse") {
            iterationProgress = 1 - iterationProgress;
            if (repeatDelay) {
              iterationProgress -= repeatDelay / resolvedDuration;
            }
          } else if (repeatType === "mirror") {
            frameGenerator = mirroredGenerator;
          }
        }
        elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
      }
      const state = isInDelayPhase ? { done: false, value: keyframes2[0] } : frameGenerator.next(elapsed);
      if (mixKeyframes) {
        state.value = mixKeyframes(state.value);
      }
      let { done } = state;
      if (!isInDelayPhase && calculatedDuration !== null) {
        done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
      }
      const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
      if (isAnimationFinished && type !== inertia) {
        state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
      }
      if (onUpdate) {
        onUpdate(state.value);
      }
      if (isAnimationFinished) {
        this.finish();
      }
      return state;
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(resolve, reject) {
      return this.finished.then(resolve, reject);
    }
    get duration() {
      return millisecondsToSeconds(this.calculatedDuration);
    }
    get time() {
      return millisecondsToSeconds(this.currentTime);
    }
    set time(newTime) {
      newTime = secondsToMilliseconds(newTime);
      this.currentTime = newTime;
      if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
        this.holdTime = newTime;
      } else if (this.driver) {
        this.startTime = this.driver.now() - newTime / this.playbackSpeed;
      }
      this.driver?.start(false);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(newSpeed) {
      this.updateTime(time.now());
      const hasChanged = this.playbackSpeed !== newSpeed;
      this.playbackSpeed = newSpeed;
      if (hasChanged) {
        this.time = millisecondsToSeconds(this.currentTime);
      }
    }
    play() {
      if (this.isStopped)
        return;
      const { driver = frameloopDriver, startTime } = this.options;
      if (!this.driver) {
        this.driver = driver((timestamp) => this.tick(timestamp));
      }
      this.options.onPlay?.();
      const now2 = this.driver.now();
      if (this.state === "finished") {
        this.updateFinished();
        this.startTime = now2;
      } else if (this.holdTime !== null) {
        this.startTime = now2 - this.holdTime;
      } else if (!this.startTime) {
        this.startTime = startTime ?? now2;
      }
      if (this.state === "finished" && this.speed < 0) {
        this.startTime += this.calculatedDuration;
      }
      this.holdTime = null;
      this.state = "running";
      this.driver.start();
    }
    pause() {
      this.state = "paused";
      this.updateTime(time.now());
      this.holdTime = this.currentTime;
    }
    complete() {
      if (this.state !== "running") {
        this.play();
      }
      this.state = "finished";
      this.holdTime = null;
    }
    finish() {
      this.notifyFinished();
      this.teardown();
      this.state = "finished";
      this.options.onComplete?.();
    }
    cancel() {
      this.holdTime = null;
      this.startTime = 0;
      this.tick(0);
      this.teardown();
      this.options.onCancel?.();
    }
    teardown() {
      this.state = "idle";
      this.stopDriver();
      this.startTime = this.holdTime = null;
      activeAnimations.mainThread--;
    }
    stopDriver() {
      if (!this.driver)
        return;
      this.driver.stop();
      this.driver = void 0;
    }
    sample(sampleTime) {
      this.startTime = 0;
      return this.tick(sampleTime, true);
    }
    attachTimeline(timeline) {
      if (this.options.allowFlatten) {
        this.options.type = "keyframes";
        this.options.ease = "linear";
        this.initAnimation();
      }
      this.driver?.stop();
      return timeline.observe(this);
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
  function fillWildcards(keyframes2) {
    for (let i2 = 1; i2 < keyframes2.length; i2++) {
      keyframes2[i2] ?? (keyframes2[i2] = keyframes2[i2 - 1]);
    }
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
  var radToDeg = (rad) => rad * 180 / Math.PI;
  var rotate = (v) => {
    const angle = radToDeg(Math.atan2(v[1], v[0]));
    return rebaseAngle(angle);
  };
  var matrix2dParsers = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
    rotate,
    rotateZ: rotate,
    skewX: (v) => radToDeg(Math.atan(v[1])),
    skewY: (v) => radToDeg(Math.atan(v[2])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
  };
  var rebaseAngle = (angle) => {
    angle = angle % 360;
    if (angle < 0)
      angle += 360;
    return angle;
  };
  var rotateZ = rotate;
  var scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
  var scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
  var matrix3dParsers = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX,
    scaleY,
    scale: (v) => (scaleX(v) + scaleY(v)) / 2,
    rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
    rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
    rotateZ,
    rotate: rotateZ,
    skewX: (v) => radToDeg(Math.atan(v[4])),
    skewY: (v) => radToDeg(Math.atan(v[1])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
  };
  function defaultTransformValue(name) {
    return name.includes("scale") ? 1 : 0;
  }
  function parseValueFromTransform(transform, name) {
    if (!transform || transform === "none") {
      return defaultTransformValue(name);
    }
    const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let parsers;
    let match;
    if (matrix3dMatch) {
      parsers = matrix3dParsers;
      match = matrix3dMatch;
    } else {
      const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      parsers = matrix2dParsers;
      match = matrix2dMatch;
    }
    if (!match) {
      return defaultTransformValue(name);
    }
    const valueParser = parsers[name];
    const values = match[1].split(",").map(convertTransformToNumber);
    return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
  }
  var readTransformValue = (instance, name) => {
    const { transform = "none" } = getComputedStyle(instance);
    return parseValueFromTransform(transform, name);
  };
  function convertTransformToNumber(value) {
    return parseFloat(value.trim());
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
  var transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
  ];
  var transformProps = /* @__PURE__ */ (() => new Set(transformPropOrder))();

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
  var isNumOrPxType = (v) => v === number || v === px;
  var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
  var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
  function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
      const value = visualElement.getValue(key);
      if (value !== void 0) {
        removedTransforms.push([key, value.get()]);
        value.set(key.startsWith("scale") ? 1 : 0);
      }
    });
    return removedTransforms;
  }
  var positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
    y: (_bbox, { transform }) => parseValueFromTransform(transform, "y")
  };
  positionalValues.translateX = positionalValues.x;
  positionalValues.translateY = positionalValues.y;

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
  var toResolve = /* @__PURE__ */ new Set();
  var isScheduled = false;
  var anyNeedsMeasurement = false;
  var isForced = false;
  function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
      const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
      const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
      const transformsToRestore = /* @__PURE__ */ new Map();
      elementsToMeasure.forEach((element) => {
        const removedTransforms = removeNonTranslationalTransform(element);
        if (!removedTransforms.length)
          return;
        transformsToRestore.set(element, removedTransforms);
        element.render();
      });
      resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
      elementsToMeasure.forEach((element) => {
        element.render();
        const restore = transformsToRestore.get(element);
        if (restore) {
          restore.forEach(([key, value]) => {
            element.getValue(key)?.set(value);
          });
        }
      });
      resolversToMeasure.forEach((resolver) => resolver.measureEndState());
      resolversToMeasure.forEach((resolver) => {
        if (resolver.suspendedScrollY !== void 0) {
          window.scrollTo(0, resolver.suspendedScrollY);
        }
      });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver) => resolver.complete(isForced));
    toResolve.clear();
  }
  function readAllKeyframes() {
    toResolve.forEach((resolver) => {
      resolver.readKeyframes();
      if (resolver.needsMeasurement) {
        anyNeedsMeasurement = true;
      }
    });
  }
  function flushKeyframeResolvers() {
    isForced = true;
    readAllKeyframes();
    measureAllKeyframes();
    isForced = false;
  }
  var KeyframeResolver = class {
    constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
      this.state = "pending";
      this.isAsync = false;
      this.needsMeasurement = false;
      this.unresolvedKeyframes = [...unresolvedKeyframes];
      this.onComplete = onComplete;
      this.name = name;
      this.motionValue = motionValue2;
      this.element = element;
      this.isAsync = isAsync;
    }
    scheduleResolve() {
      this.state = "scheduled";
      if (this.isAsync) {
        toResolve.add(this);
        if (!isScheduled) {
          isScheduled = true;
          frame.read(readAllKeyframes);
          frame.resolveKeyframes(measureAllKeyframes);
        }
      } else {
        this.readKeyframes();
        this.complete();
      }
    }
    readKeyframes() {
      const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
      if (unresolvedKeyframes[0] === null) {
        const currentValue = motionValue2?.get();
        const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (currentValue !== void 0) {
          unresolvedKeyframes[0] = currentValue;
        } else if (element && name) {
          const valueAsRead = element.readValue(name, finalKeyframe);
          if (valueAsRead !== void 0 && valueAsRead !== null) {
            unresolvedKeyframes[0] = valueAsRead;
          }
        }
        if (unresolvedKeyframes[0] === void 0) {
          unresolvedKeyframes[0] = finalKeyframe;
        }
        if (motionValue2 && currentValue === void 0) {
          motionValue2.set(unresolvedKeyframes[0]);
        }
      }
      fillWildcards(unresolvedKeyframes);
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete(isForcedComplete = false) {
      this.state = "complete";
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
      toResolve.delete(this);
    }
    cancel() {
      if (this.state === "scheduled") {
        toResolve.delete(this);
        this.state = "pending";
      }
    }
    resume() {
      if (this.state === "pending")
        this.scheduleResolve();
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
  var isCSSVar = (name) => name.startsWith("--");

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
  function setStyle(element, name, value) {
    isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
  var supportsScrollTimeline = /* @__PURE__ */ memo(() => window.ScrollTimeline !== void 0);

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
  var supportsFlags = {};

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
  function memoSupports(callback, supportsFlag) {
    const memoized = memo(callback);
    return () => supportsFlags[supportsFlag] ?? memoized();
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
  var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e2) {
      return false;
    }
    return true;
  }, "linearEasing");

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
  var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
  var supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
  function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
      return void 0;
    } else if (typeof easing === "function") {
      return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
    } else if (isBezierDefinition(easing)) {
      return cubicBezierAsString(easing);
    } else if (Array.isArray(easing)) {
      return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    } else {
      return supportedWaapiEasing[easing];
    }
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
  function startWaapiAnimation(element, valueName, keyframes2, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeOut", times } = {}, pseudoElement = void 0) {
    const keyframeOptions = {
      [valueName]: keyframes2
    };
    if (times)
      keyframeOptions.offset = times;
    const easing = mapEasingToNativeEasing(ease2, duration);
    if (Array.isArray(easing))
      keyframeOptions.easing = easing;
    if (statsBuffer.value) {
      activeAnimations.waapi++;
    }
    const options = {
      delay,
      duration,
      easing: !Array.isArray(easing) ? easing : "linear",
      fill: "both",
      iterations: repeat + 1,
      direction: repeatType === "reverse" ? "alternate" : "normal"
    };
    if (pseudoElement)
      options.pseudoElement = pseudoElement;
    const animation = element.animate(keyframeOptions, options);
    if (statsBuffer.value) {
      animation.finished.finally(() => {
        activeAnimations.waapi--;
      });
    }
    return animation;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
  function isGenerator(type) {
    return typeof type === "function" && "applyToOptions" in type;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
  function applyGeneratorOptions({ type, ...options }) {
    if (isGenerator(type) && supportsLinearEasing()) {
      return type.applyToOptions(options);
    } else {
      options.duration ?? (options.duration = 300);
      options.ease ?? (options.ease = "easeOut");
    }
    return options;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
  var NativeAnimation = class extends WithPromise {
    constructor(options) {
      super();
      this.finishedTime = null;
      this.isStopped = false;
      if (!options)
        return;
      const { element, name, keyframes: keyframes2, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
      this.isPseudoElement = Boolean(pseudoElement);
      this.allowFlatten = allowFlatten;
      this.options = options;
      invariant(typeof options.type !== "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
      const transition = applyGeneratorOptions(options);
      this.animation = startWaapiAnimation(element, name, keyframes2, transition, pseudoElement);
      if (transition.autoplay === false) {
        this.animation.pause();
      }
      this.animation.onfinish = () => {
        this.finishedTime = this.time;
        if (!pseudoElement) {
          const keyframe = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
          if (this.updateMotionValue) {
            this.updateMotionValue(keyframe);
          } else {
            setStyle(element, name, keyframe);
          }
          this.animation.cancel();
        }
        onComplete?.();
        this.notifyFinished();
      };
    }
    play() {
      if (this.isStopped)
        return;
      this.animation.play();
      if (this.state === "finished") {
        this.updateFinished();
      }
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch (e2) {
      }
    }
    stop() {
      if (this.isStopped)
        return;
      this.isStopped = true;
      const { state } = this;
      if (state === "idle" || state === "finished") {
        return;
      }
      if (this.updateMotionValue) {
        this.updateMotionValue();
      } else {
        this.commitStyles();
      }
      if (!this.isPseudoElement)
        this.cancel();
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * In this method, we commit styles back to the DOM before cancelling
     * the animation.
     *
     * This is designed to be overridden by NativeAnimationExtended, which
     * will create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to also correctly calculate velocity for any subsequent animation
     * while deferring the commit until the next animation frame.
     */
    commitStyles() {
      if (!this.isPseudoElement) {
        this.animation.commitStyles?.();
      }
    }
    get duration() {
      const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
      return millisecondsToSeconds(Number(duration));
    }
    get time() {
      return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
    }
    set time(newTime) {
      this.finishedTime = null;
      this.animation.currentTime = secondsToMilliseconds(newTime);
    }
    /**
     * The playback speed of the animation.
     * 1 = normal speed, 2 = double speed, 0.5 = half speed.
     */
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(newSpeed) {
      if (newSpeed < 0)
        this.finishedTime = null;
      this.animation.playbackRate = newSpeed;
    }
    get state() {
      return this.finishedTime !== null ? "finished" : this.animation.playState;
    }
    get startTime() {
      return Number(this.animation.startTime);
    }
    set startTime(newStartTime) {
      this.animation.startTime = newStartTime;
    }
    /**
     * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
     */
    attachTimeline({ timeline, observe }) {
      if (this.allowFlatten) {
        this.animation.effect?.updateTiming({ easing: "linear" });
      }
      this.animation.onfinish = null;
      if (timeline && supportsScrollTimeline()) {
        this.animation.timeline = timeline;
        return noop;
      } else {
        return observe(this);
      }
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
  var unsupportedEasingFunctions = {
    anticipate,
    backInOut,
    circInOut
  };
  function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
  }
  function replaceStringEasing(transition) {
    if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) {
      transition.ease = unsupportedEasingFunctions[transition.ease];
    }
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
  var sampleDelta = 10;
  var NativeAnimationExtended = class extends NativeAnimation {
    constructor(options) {
      replaceStringEasing(options);
      replaceTransitionType(options);
      super(options);
      if (options.startTime) {
        this.startTime = options.startTime;
      }
      this.options = options;
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * Rather than read commited styles back out of the DOM, we can
     * create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to calculate velocity for any subsequent animation.
     */
    updateMotionValue(value) {
      const { motionValue: motionValue2, onUpdate, onComplete, element, ...options } = this.options;
      if (!motionValue2)
        return;
      if (value !== void 0) {
        motionValue2.set(value);
        return;
      }
      const sampleAnimation = new JSAnimation({
        ...options,
        autoplay: false
      });
      const sampleTime = secondsToMilliseconds(this.finishedTime ?? this.time);
      motionValue2.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
      sampleAnimation.stop();
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
  var isAnimatable = (value, name) => {
    if (name === "zIndex")
      return false;
    if (typeof value === "number" || Array.isArray(value))
      return true;
    if (typeof value === "string" && // It's animatable if we have a string
    (complex.test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(")) {
      return true;
    }
    return false;
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
  function hasKeyframesChanged(keyframes2) {
    const current = keyframes2[0];
    if (keyframes2.length === 1)
      return true;
    for (let i2 = 0; i2 < keyframes2.length; i2++) {
      if (keyframes2[i2] !== current)
        return true;
    }
  }
  function canAnimate(keyframes2, name, type, velocity) {
    const originKeyframe = keyframes2[0];
    if (originKeyframe === null)
      return false;
    if (name === "display" || name === "visibility")
      return true;
    const targetKeyframe = keyframes2[keyframes2.length - 1];
    const isOriginAnimatable = isAnimatable(originKeyframe, name);
    const isTargetAnimatable = isAnimatable(targetKeyframe, name);
    warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    if (!isOriginAnimatable || !isTargetAnimatable) {
      return false;
    }
    return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
  function isHTMLElement(element) {
    return isObject(element) && "offsetHeight" in element;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
  var acceleratedValues = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
    // TODO: Could be re-enabled now we have support for linear() easing
    // "background-color"
  ]);
  var supportsWaapi = /* @__PURE__ */ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  function supportsBrowserAnimation(options) {
    const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type } = options;
    if (!isHTMLElement(motionValue2?.owner?.current)) {
      return false;
    }
    const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
    return supportsWaapi() && name && acceleratedValues.has(name) && (name !== "transform" || !transformTemplate) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
  var MAX_RESOLVE_DELAY = 40;
  var AsyncMotionValueAnimation = class extends WithPromise {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes: keyframes2, name, motionValue: motionValue2, element, ...options }) {
      super();
      this.stop = () => {
        if (this._animation) {
          this._animation.stop();
          this.stopTimeline?.();
        }
        this.keyframeResolver?.cancel();
      };
      this.createdAt = time.now();
      const optionsWithDefaults = {
        autoplay,
        delay,
        type,
        repeat,
        repeatDelay,
        repeatType,
        name,
        motionValue: motionValue2,
        element,
        ...options
      };
      const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
      this.keyframeResolver = new KeyframeResolver$1(keyframes2, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue2, element);
      this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(keyframes2, finalKeyframe, options, sync) {
      this.keyframeResolver = void 0;
      const { name, type, velocity, delay, isHandoff, onUpdate } = options;
      this.resolvedAt = time.now();
      if (!canAnimate(keyframes2, name, type, velocity)) {
        if (MotionGlobalConfig.instantAnimations || !delay) {
          onUpdate?.(getFinalKeyframe(keyframes2, options, finalKeyframe));
        }
        keyframes2[0] = keyframes2[keyframes2.length - 1];
        options.duration = 0;
        options.repeat = 0;
      }
      const startTime = sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0;
      const resolvedOptions = {
        startTime,
        finalKeyframe,
        ...options,
        keyframes: keyframes2
      };
      const animation = !isHandoff && supportsBrowserAnimation(resolvedOptions) ? new NativeAnimationExtended({
        ...resolvedOptions,
        element: resolvedOptions.motionValue.owner.current
      }) : new JSAnimation(resolvedOptions);
      animation.finished.then(() => this.notifyFinished()).catch(noop);
      if (this.pendingTimeline) {
        this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
        this.pendingTimeline = void 0;
      }
      this._animation = animation;
    }
    get finished() {
      if (!this._animation) {
        return this._finished;
      } else {
        return this.animation.finished;
      }
    }
    then(onResolve, _onReject) {
      return this.finished.finally(onResolve).then(() => {
      });
    }
    get animation() {
      if (!this._animation) {
        this.keyframeResolver?.resume();
        flushKeyframeResolvers();
      }
      return this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get time() {
      return this.animation.time;
    }
    set time(newTime) {
      this.animation.time = newTime;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(newSpeed) {
      this.animation.speed = newSpeed;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(timeline) {
      if (this._animation) {
        this.stopTimeline = this.animation.attachTimeline(timeline);
      } else {
        this.pendingTimeline = timeline;
      }
      return () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      if (this._animation) {
        this.animation.cancel();
      }
      this.keyframeResolver?.cancel();
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs
  var GroupAnimation = class {
    constructor(animations) {
      this.stop = () => this.runAll("stop");
      this.animations = animations.filter(Boolean);
    }
    get finished() {
      return Promise.all(this.animations.map((animation) => animation.finished));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */
    getAll(propName) {
      return this.animations[0][propName];
    }
    setAll(propName, newValue) {
      for (let i2 = 0; i2 < this.animations.length; i2++) {
        this.animations[i2][propName] = newValue;
      }
    }
    attachTimeline(timeline) {
      const subscriptions = this.animations.map((animation) => animation.attachTimeline(timeline));
      return () => {
        subscriptions.forEach((cancel, i2) => {
          cancel && cancel();
          this.animations[i2].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(time2) {
      this.setAll("time", time2);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(speed) {
      this.setAll("speed", speed);
    }
    get state() {
      return this.getAll("state");
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let max = 0;
      for (let i2 = 0; i2 < this.animations.length; i2++) {
        max = Math.max(max, this.animations[i2].duration);
      }
      return max;
    }
    runAll(methodName) {
      this.animations.forEach((controls) => controls[methodName]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
  var GroupAnimationWithThen = class extends GroupAnimation {
    then(onResolve, _onReject) {
      return this.finished.finally(onResolve).then(() => {
      });
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
  var splitCSSVariableRegex = (
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
    /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
  );
  function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
      return [,];
    const [, token1, token2, fallback] = match;
    return [`--${token1 ?? token2}`, fallback];
  }
  var maxDepth = 4;
  function getVariableValue(current, element, depth = 1) {
    invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    if (!token)
      return;
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
      const trimmed = resolved.trim();
      return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
  function getValueTransition(transition, key) {
    return transition?.[key] ?? transition?.["default"] ?? transition;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
  var positionalKeys = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...transformPropOrder
  ]);

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/auto.mjs
  var auto = {
    test: (v) => v === "auto",
    parse: (v) => v
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/test.mjs
  var testValueType = (v) => (type) => type.test(v);

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/dimensions.mjs
  var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
  var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
  function isNone(value) {
    if (typeof value === "number") {
      return value === 0;
    } else if (value !== null) {
      return value === "none" || value === "0" || isZeroValueString(value);
    } else {
      return true;
    }
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
  var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
      return v;
    const [number2] = value.match(floatRegex) || [];
    if (!number2)
      return v;
    const unit = value.replace(number2, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number2 !== value)
      defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
  }
  var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
  var filter = {
    ...complex,
    getAnimatableNone: (v) => {
      const functions = v.match(functionRegex);
      return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/int.mjs
  var int = {
    ...number,
    transform: Math.round
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/maps/transform.mjs
  var transformValueTypes = {
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/maps/number.mjs
  var numberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    // Misc
    backgroundPositionX: px,
    backgroundPositionY: px,
    ...transformValueTypes,
    zIndex: int,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
  var defaultValueTypes = {
    ...numberValueTypes,
    // Color props
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter
  };
  var getDefaultValueType = (key) => defaultValueTypes[key];

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
  function getAnimatableNone2(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
      defaultValueType = complex;
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
  var invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i2 = 0;
    let animatableTemplate = void 0;
    while (i2 < unresolvedKeyframes.length && !animatableTemplate) {
      const keyframe = unresolvedKeyframes[i2];
      if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
        animatableTemplate = unresolvedKeyframes[i2];
      }
      i2++;
    }
    if (animatableTemplate && name) {
      for (const noneIndex of noneKeyframeIndexes) {
        unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
      }
    }
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
  var DOMKeyframesResolver = class extends KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
      super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
    }
    readKeyframes() {
      const { unresolvedKeyframes, element, name } = this;
      if (!element || !element.current)
        return;
      super.readKeyframes();
      for (let i2 = 0; i2 < unresolvedKeyframes.length; i2++) {
        let keyframe = unresolvedKeyframes[i2];
        if (typeof keyframe === "string") {
          keyframe = keyframe.trim();
          if (isCSSVariableToken(keyframe)) {
            const resolved = getVariableValue(keyframe, element.current);
            if (resolved !== void 0) {
              unresolvedKeyframes[i2] = resolved;
            }
            if (i2 === unresolvedKeyframes.length - 1) {
              this.finalKeyframe = keyframe;
            }
          }
        }
      }
      this.resolveNoneKeyframes();
      if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
        return;
      }
      const [origin, target] = unresolvedKeyframes;
      const originType = findDimensionValueType(origin);
      const targetType = findDimensionValueType(target);
      if (originType === targetType)
        return;
      if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
        for (let i2 = 0; i2 < unresolvedKeyframes.length; i2++) {
          const value = unresolvedKeyframes[i2];
          if (typeof value === "string") {
            unresolvedKeyframes[i2] = parseFloat(value);
          }
        }
      } else if (positionalValues[name]) {
        this.needsMeasurement = true;
      }
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes, name } = this;
      const noneKeyframeIndexes = [];
      for (let i2 = 0; i2 < unresolvedKeyframes.length; i2++) {
        if (unresolvedKeyframes[i2] === null || isNone(unresolvedKeyframes[i2])) {
          noneKeyframeIndexes.push(i2);
        }
      }
      if (noneKeyframeIndexes.length) {
        makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
      }
    }
    measureInitialState() {
      const { element, unresolvedKeyframes, name } = this;
      if (!element || !element.current)
        return;
      if (name === "height") {
        this.suspendedScrollY = window.pageYOffset;
      }
      this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      unresolvedKeyframes[0] = this.measuredOrigin;
      const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (measureKeyframe !== void 0) {
        element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
      }
    }
    measureEndState() {
      const { element, name, unresolvedKeyframes } = this;
      if (!element || !element.current)
        return;
      const value = element.getValue(name);
      value && value.jump(this.measuredOrigin, false);
      const finalKeyframeIndex = unresolvedKeyframes.length - 1;
      const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
      unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      if (finalKeyframe !== null && this.finalKeyframe === void 0) {
        this.finalKeyframe = finalKeyframe;
      }
      if (this.removedTransforms?.length) {
        this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
          element.getValue(unsetTransformName).set(unsetTransformValue);
        });
      }
      this.resolveNoneKeyframes();
    }
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
  function resolveElements(elementOrSelector, scope, selectorCache) {
    if (elementOrSelector instanceof EventTarget) {
      return [elementOrSelector];
    } else if (typeof elementOrSelector === "string") {
      let root = document;
      if (scope) {
        root = scope.current;
      }
      const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
      return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
  var getValueAsType = (value, type) => {
    return type && typeof value === "number" ? type.transform(value) : value;
  };

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/index.mjs
  var MAX_VELOCITY_DELTA = 30;
  var isFloat = (value) => {
    return !isNaN(parseFloat(value));
  };
  var collectMotionValues = {
    current: void 0
  };
  var MotionValue = class {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     */
    constructor(init, options = {}) {
      this.canTrackVelocity = null;
      this.events = {};
      this.updateAndNotify = (v, render = true) => {
        const currentTime = time.now();
        if (this.updatedAt !== currentTime) {
          this.setPrevFrameValue();
        }
        this.prev = this.current;
        this.setCurrent(v);
        if (this.current !== this.prev) {
          this.events.change?.notify(this.current);
          if (this.dependents) {
            for (const dependent of this.dependents) {
              dependent.dirty();
            }
          }
        }
        if (render) {
          this.events.renderRequest?.notify(this.current);
        }
      };
      this.hasAnimated = false;
      this.setCurrent(init);
      this.owner = options.owner;
    }
    setCurrent(current) {
      this.current = current;
      this.updatedAt = time.now();
      if (this.canTrackVelocity === null && current !== void 0) {
        this.canTrackVelocity = isFloat(this.current);
      }
    }
    setPrevFrameValue(prevFrameValue = this.current) {
      this.prevFrameValue = prevFrameValue;
      this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
      if (true) {
        warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
      }
      return this.on("change", subscription);
    }
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      const unsubscribe = this.events[eventName].add(callback);
      if (eventName === "change") {
        return () => {
          unsubscribe();
          frame.read(() => {
            if (!this.events.change.getSize()) {
              this.stop();
            }
          });
        };
      }
      return unsubscribe;
    }
    clearListeners() {
      for (const eventManagers in this.events) {
        this.events[eventManagers].clear();
      }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     */
    attach(passiveEffect, stopPassiveEffect) {
      this.passiveEffect = passiveEffect;
      this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
      if (!render || !this.passiveEffect) {
        this.updateAndNotify(v, render);
      } else {
        this.passiveEffect(v, this.updateAndNotify);
      }
    }
    setWithVelocity(prev, current, delta) {
      this.set(current);
      this.prev = void 0;
      this.prevFrameValue = prev;
      this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v, endAnimation = true) {
      this.updateAndNotify(v);
      this.prev = v;
      this.prevUpdatedAt = this.prevFrameValue = void 0;
      endAnimation && this.stop();
      if (this.stopPassiveEffect)
        this.stopPassiveEffect();
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(dependent) {
      if (!this.dependents) {
        this.dependents = /* @__PURE__ */ new Set();
      }
      this.dependents.add(dependent);
    }
    removeDependent(dependent) {
      if (this.dependents) {
        this.dependents.delete(dependent);
      }
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
      if (collectMotionValues.current) {
        collectMotionValues.current.push(this);
      }
      return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
      return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
      const currentTime = time.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
        return 0;
      }
      const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
      return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     */
    start(startAnimation) {
      this.stop();
      return new Promise((resolve) => {
        this.hasAnimated = true;
        this.animation = startAnimation(resolve);
        if (this.events.animationStart) {
          this.events.animationStart.notify();
        }
      }).then(() => {
        if (this.events.animationComplete) {
          this.events.animationComplete.notify();
        }
        this.clearAnimation();
      });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
      if (this.animation) {
        this.animation.stop();
        if (this.events.animationCancel) {
          this.events.animationCancel.notify();
        }
      }
      this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
      this.dependents?.clear();
      this.events.destroy?.notify();
      this.clearListeners();
      this.stop();
      if (this.stopPassiveEffect) {
        this.stopPassiveEffect();
      }
    }
  };
  function motionValue(init, options) {
    return new MotionValue(init, options);
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
  function isSVGElement(element) {
    return isObject(element) && "ownerSVGElement" in element;
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
  function isSVGSVGElement(element) {
    return isSVGElement(element) && element.tagName === "svg";
  }

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
  var isMotionValue = (value) => Boolean(value && value.getVelocity);

  // node_modules/.pnpm/motion-dom@12.22.0/node_modules/motion-dom/dist/es/value/types/utils/find.mjs
  var valueTypes = [...dimensionValueTypes, color, complex];
  var findValueType = (v) => valueTypes.find(testValueType(v));

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
  function isDOMKeyframes(keyframes2) {
    return typeof keyframes2 === "object" && !Array.isArray(keyframes2);
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
  function resolveSubjects(subject, keyframes2, scope, selectorCache) {
    if (typeof subject === "string" && isDOMKeyframes(keyframes2)) {
      return resolveElements(subject, scope, selectorCache);
    } else if (subject instanceof NodeList) {
      return Array.from(subject);
    } else if (Array.isArray(subject)) {
      return subject;
    } else {
      return [subject];
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
  function calculateRepeatDuration(duration, repeat, _repeatDelay) {
    return duration * (repeat + 1);
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
  function calcNextTime(current, next, prev, labels) {
    if (typeof next === "number") {
      return next;
    } else if (next.startsWith("-") || next.startsWith("+")) {
      return Math.max(0, current + parseFloat(next));
    } else if (next === "<") {
      return prev;
    } else if (next.startsWith("<")) {
      return Math.max(0, prev + parseFloat(next.slice(1)));
    } else {
      return labels.get(next) ?? current;
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
  function eraseKeyframes(sequence, startTime, endTime) {
    for (let i2 = 0; i2 < sequence.length; i2++) {
      const keyframe = sequence[i2];
      if (keyframe.at > startTime && keyframe.at < endTime) {
        removeItem(sequence, keyframe);
        i2--;
      }
    }
  }
  function addKeyframes(sequence, keyframes2, easing, offset, startTime, endTime) {
    eraseKeyframes(sequence, startTime, endTime);
    for (let i2 = 0; i2 < keyframes2.length; i2++) {
      sequence.push({
        value: keyframes2[i2],
        at: mixNumber(startTime, endTime, offset[i2]),
        easing: getEasingForSegment(easing, i2)
      });
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
  function normalizeTimes(times, repeat) {
    for (let i2 = 0; i2 < times.length; i2++) {
      times[i2] = times[i2] / (repeat + 1);
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
  function compareByTime(a, b) {
    if (a.at === b.at) {
      if (a.value === null)
        return 1;
      if (b.value === null)
        return -1;
      return 0;
    } else {
      return a.at - b.at;
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/sequence/create.mjs
  var defaultSegmentEasing = "easeInOut";
  var MAX_REPEAT = 20;
  function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = /* @__PURE__ */ new Map();
    const sequences = /* @__PURE__ */ new Map();
    const elementCache = {};
    const timeLabels = /* @__PURE__ */ new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    for (let i2 = 0; i2 < sequence.length; i2++) {
      const segment = sequence[i2];
      if (typeof segment === "string") {
        timeLabels.set(segment, currentTime);
        continue;
      } else if (!Array.isArray(segment)) {
        timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
        continue;
      }
      let [subject, keyframes2, transition = {}] = segment;
      if (transition.at !== void 0) {
        currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
      }
      let maxDuration = 0;
      const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
        const valueKeyframesAsList = keyframesAsList(valueKeyframes);
        const { delay = 0, times = defaultOffset(valueKeyframesAsList), type = "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
        let { ease: ease2 = defaultTransition.ease || "easeOut", duration } = valueTransition;
        const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
        const numKeyframes = valueKeyframesAsList.length;
        const createGenerator = isGenerator(type) ? type : generators?.[type || "keyframes"];
        if (numKeyframes <= 2 && createGenerator) {
          let absoluteDelta = 100;
          if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
            const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
            absoluteDelta = Math.abs(delta);
          }
          const springTransition = { ...remainingTransition };
          if (duration !== void 0) {
            springTransition.duration = secondsToMilliseconds(duration);
          }
          const springEasing = createGeneratorEasing(springTransition, absoluteDelta, createGenerator);
          ease2 = springEasing.ease;
          duration = springEasing.duration;
        }
        duration ?? (duration = defaultDuration);
        const startTime = currentTime + calculatedDelay;
        if (times.length === 1 && times[0] === 0) {
          times[1] = 1;
        }
        const remainder = times.length - valueKeyframesAsList.length;
        remainder > 0 && fillOffset(times, remainder);
        valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
        if (repeat) {
          invariant(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20");
          duration = calculateRepeatDuration(duration, repeat);
          const originalKeyframes = [...valueKeyframesAsList];
          const originalTimes = [...times];
          ease2 = Array.isArray(ease2) ? [...ease2] : [ease2];
          const originalEase = [...ease2];
          for (let repeatIndex = 0; repeatIndex < repeat; repeatIndex++) {
            valueKeyframesAsList.push(...originalKeyframes);
            for (let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++) {
              times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
              ease2.push(keyframeIndex === 0 ? "linear" : getEasingForSegment(originalEase, keyframeIndex - 1));
            }
          }
          normalizeTimes(times, repeat);
        }
        const targetTime = startTime + duration;
        addKeyframes(valueSequence, valueKeyframesAsList, ease2, times, startTime, targetTime);
        maxDuration = Math.max(calculatedDelay + duration, maxDuration);
        totalDuration = Math.max(targetTime, totalDuration);
      };
      if (isMotionValue(subject)) {
        const subjectSequence = getSubjectSequence(subject, sequences);
        resolveValueSequence(keyframes2, transition, getValueSequence("default", subjectSequence));
      } else {
        const subjects = resolveSubjects(subject, keyframes2, scope, elementCache);
        const numSubjects = subjects.length;
        for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
          keyframes2 = keyframes2;
          transition = transition;
          const thisSubject = subjects[subjectIndex];
          const subjectSequence = getSubjectSequence(thisSubject, sequences);
          for (const key in keyframes2) {
            resolveValueSequence(keyframes2[key], getValueTransition2(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
          }
        }
      }
      prevTime = currentTime;
      currentTime += maxDuration;
    }
    sequences.forEach((valueSequences, element) => {
      for (const key in valueSequences) {
        const valueSequence = valueSequences[key];
        valueSequence.sort(compareByTime);
        const keyframes2 = [];
        const valueOffset = [];
        const valueEasing = [];
        for (let i2 = 0; i2 < valueSequence.length; i2++) {
          const { at, value, easing } = valueSequence[i2];
          keyframes2.push(value);
          valueOffset.push(progress(0, totalDuration, at));
          valueEasing.push(easing || "easeOut");
        }
        if (valueOffset[0] !== 0) {
          valueOffset.unshift(0);
          keyframes2.unshift(keyframes2[0]);
          valueEasing.unshift(defaultSegmentEasing);
        }
        if (valueOffset[valueOffset.length - 1] !== 1) {
          valueOffset.push(1);
          keyframes2.push(null);
        }
        if (!animationDefinitions.has(element)) {
          animationDefinitions.set(element, {
            keyframes: {},
            transition: {}
          });
        }
        const definition = animationDefinitions.get(element);
        definition.keyframes[key] = keyframes2;
        definition.transition[key] = {
          ...defaultTransition,
          duration: totalDuration,
          ease: valueEasing,
          times: valueOffset,
          ...sequenceTransition
        };
      }
    });
    return animationDefinitions;
  }
  function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
  }
  function getValueSequence(name, sequences) {
    if (!sequences[name])
      sequences[name] = [];
    return sequences[name];
  }
  function keyframesAsList(keyframes2) {
    return Array.isArray(keyframes2) ? keyframes2 : [keyframes2];
  }
  function getValueTransition2(transition, key) {
    return transition && transition[key] ? {
      ...transition,
      ...transition[key]
    } : { ...transition };
  }
  var isNumber = (keyframe) => typeof keyframe === "number";
  var isNumberKeyframesArray = (keyframes2) => keyframes2.every(isNumber);

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/store.mjs
  var visualElementStore = /* @__PURE__ */ new WeakMap();

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
  var isKeyframesTarget = (v) => {
    return Array.isArray(v);
  };

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
  function getValueState(visualElement) {
    const state = [{}, {}];
    visualElement?.values.forEach((value, key) => {
      state[0][key] = value.get();
      state[1][key] = value.getVelocity();
    });
    return state;
  }
  function resolveVariantFromProps(props, definition, custom, visualElement) {
    if (typeof definition === "function") {
      const [current, velocity] = getValueState(visualElement);
      definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    if (typeof definition === "string") {
      definition = props.variants && props.variants[definition];
    }
    if (typeof definition === "function") {
      const [current, velocity] = getValueState(visualElement);
      definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    return definition;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
  function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/utils/setters.mjs
  function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
      visualElement.getValue(key).set(value);
    } else {
      visualElement.addValue(key, motionValue(value));
    }
  }
  function resolveFinalValueInKeyframes(v) {
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
  }
  function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
      const value = resolveFinalValueInKeyframes(target[key]);
      setMotionValue(visualElement, key, value);
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
  function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
  function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    if (isWillChangeMotionValue(willChange)) {
      return willChange.add(key);
    } else if (!willChange && MotionGlobalConfig.WillChange) {
      const newWillChange = new MotionGlobalConfig.WillChange("auto");
      visualElement.addValue("willChange", newWillChange);
      newWillChange.add(key);
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
  var camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
  var optimizedAppearDataId = "framerAppearId";
  var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
  function getOptimisedAppearId(visualElement) {
    return visualElement.props[optimizedAppearDataAttribute];
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
  var isNotNull2 = (value) => value !== null;
  function getFinalKeyframe2(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe) {
    const resolvedKeyframes = keyframes2.filter(isNotNull2);
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
  var underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
  var criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  });
  var keyframesTransition = {
    type: "keyframes",
    duration: 0.8
  };
  var ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  };
  var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
    if (keyframes2.length > 2) {
      return keyframesTransition;
    } else if (transformProps.has(valueKey)) {
      return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
    }
    return ease;
  };

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
  function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
  var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
    const valueTransition = getValueTransition(transition, name) || {};
    const delay = valueTransition.delay || transition.delay || 0;
    let { elapsed = 0 } = transition;
    elapsed = elapsed - secondsToMilliseconds(delay);
    const options = {
      keyframes: Array.isArray(target) ? target : [null, target],
      ease: "easeOut",
      velocity: value.getVelocity(),
      ...valueTransition,
      delay: -elapsed,
      onUpdate: (v) => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      },
      name,
      motionValue: value,
      element: isHandoff ? void 0 : element
    };
    if (!isTransitionDefined(valueTransition)) {
      Object.assign(options, getDefaultTransition(name, options));
    }
    options.duration && (options.duration = secondsToMilliseconds(options.duration));
    options.repeatDelay && (options.repeatDelay = secondsToMilliseconds(options.repeatDelay));
    if (options.from !== void 0) {
      options.keyframes[0] = options.from;
    }
    let shouldSkip = false;
    if (options.type === false || options.duration === 0 && !options.repeatDelay) {
      options.duration = 0;
      if (options.delay === 0) {
        shouldSkip = true;
      }
    }
    if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations) {
      shouldSkip = true;
      options.duration = 0;
      options.delay = 0;
    }
    options.allowFlatten = !valueTransition.type && !valueTransition.ease;
    if (shouldSkip && !isHandoff && value.get() !== void 0) {
      const finalKeyframe = getFinalKeyframe2(options.keyframes, valueTransition);
      if (finalKeyframe !== void 0) {
        frame.update(() => {
          options.onUpdate(finalKeyframe);
          options.onComplete();
        });
        return;
      }
    }
    return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
  };

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
  function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
  }
  function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
    if (transitionOverride)
      transition = transitionOverride;
    const animations = [];
    const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    for (const key in target) {
      const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
      const valueTarget = target[key];
      if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
        continue;
      }
      const valueTransition = {
        delay,
        ...getValueTransition(transition || {}, key)
      };
      const currentValue = value.get();
      if (currentValue !== void 0 && !value.isAnimating && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
        continue;
      }
      let isHandoff = false;
      if (window.MotionHandoffAnimation) {
        const appearId = getOptimisedAppearId(visualElement);
        if (appearId) {
          const startTime = window.MotionHandoffAnimation(appearId, key, frame);
          if (startTime !== null) {
            valueTransition.startTime = startTime;
            isHandoff = true;
          }
        }
      }
      addValueToWillChange(visualElement, key);
      value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
      const animation = value.animation;
      if (animation) {
        animations.push(animation);
      }
    }
    if (transitionEnd) {
      Promise.all(animations).then(() => {
        frame.update(() => {
          transitionEnd && setTarget(visualElement, transitionEnd);
        });
      });
    }
    return animations;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
  function convertBoundingBoxToBox({ top, left, right, bottom }) {
    return {
      x: { min: left, max: right },
      y: { min: top, max: bottom }
    };
  }
  function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
      return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
      top: topLeft.y,
      left: topLeft.x,
      bottom: bottomRight.y,
      right: bottomRight.x
    };
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/projection/utils/measure.mjs
  function measureViewportBox(instance, transformPoint) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/motion/features/definitions.mjs
  var featureProps = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag"
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  };
  var featureDefinitions = {};
  for (const key in featureProps) {
    featureDefinitions[key] = {
      isEnabled: (props) => featureProps[key].some((name) => !!props[name])
    };
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/projection/geometry/models.mjs
  var createAxis = () => ({ min: 0, max: 0 });
  var createBox = () => ({
    x: createAxis(),
    y: createAxis()
  });

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/utils/is-browser.mjs
  var isBrowser = typeof window !== "undefined";

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
  var prefersReducedMotion = { current: null };
  var hasReducedMotionListener = { current: false };

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
  function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!isBrowser)
      return;
    if (window.matchMedia) {
      const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
      const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
      motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
      setReducedMotionPreferences();
    } else {
      prefersReducedMotion.current = false;
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
  function isAnimationControls(v) {
    return v !== null && typeof v === "object" && typeof v.start === "function";
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
  function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
  var variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ];
  var variantProps = ["initial", ...variantPriorityOrder];

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
  function isControllingVariants(props) {
    return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
  }
  function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
  function updateMotionValuesFromProps(element, next, prev) {
    for (const key in next) {
      const nextValue = next[key];
      const prevValue = prev[key];
      if (isMotionValue(nextValue)) {
        element.addValue(key, nextValue);
      } else if (isMotionValue(prevValue)) {
        element.addValue(key, motionValue(nextValue, { owner: element }));
      } else if (prevValue !== nextValue) {
        if (element.hasValue(key)) {
          const existingValue = element.getValue(key);
          if (existingValue.liveStyle === true) {
            existingValue.jump(nextValue);
          } else if (!existingValue.hasAnimated) {
            existingValue.set(nextValue);
          }
        } else {
          const latestValue = element.getStaticValue(key);
          element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
        }
      }
    }
    for (const key in prev) {
      if (next[key] === void 0)
        element.removeValue(key);
    }
    return next;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/VisualElement.mjs
  var propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ];
  var VisualElement = class {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
      return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options = {}) {
      this.current = null;
      this.children = /* @__PURE__ */ new Set();
      this.isVariantNode = false;
      this.isControllingVariants = false;
      this.shouldReduceMotion = null;
      this.values = /* @__PURE__ */ new Map();
      this.KeyframeResolver = KeyframeResolver;
      this.features = {};
      this.valueSubscriptions = /* @__PURE__ */ new Map();
      this.prevMotionValues = {};
      this.events = {};
      this.propEventSubscriptions = {};
      this.notifyUpdate = () => this.notify("Update", this.latestValues);
      this.render = () => {
        if (!this.current)
          return;
        this.triggerBuild();
        this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
      };
      this.renderScheduledAt = 0;
      this.scheduleRender = () => {
        const now2 = time.now();
        if (this.renderScheduledAt < now2) {
          this.renderScheduledAt = now2;
          frame.render(this.render, false, true);
        }
      };
      const { latestValues, renderState } = visualState;
      this.latestValues = latestValues;
      this.baseTarget = { ...latestValues };
      this.initialValues = props.initial ? { ...latestValues } : {};
      this.renderState = renderState;
      this.parent = parent;
      this.props = props;
      this.presenceContext = presenceContext;
      this.depth = parent ? parent.depth + 1 : 0;
      this.reducedMotionConfig = reducedMotionConfig;
      this.options = options;
      this.blockInitialAnimation = Boolean(blockInitialAnimation);
      this.isControllingVariants = isControllingVariants(props);
      this.isVariantNode = isVariantNode(props);
      if (this.isVariantNode) {
        this.variantChildren = /* @__PURE__ */ new Set();
      }
      this.manuallyAnimateOnMount = Boolean(parent && parent.current);
      const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
      for (const key in initialMotionValues) {
        const value = initialMotionValues[key];
        if (latestValues[key] !== void 0 && isMotionValue(value)) {
          value.set(latestValues[key], false);
        }
      }
    }
    mount(instance) {
      this.current = instance;
      visualElementStore.set(instance, this);
      if (this.projection && !this.projection.instance) {
        this.projection.mount(instance);
      }
      if (this.parent && this.isVariantNode && !this.isControllingVariants) {
        this.removeFromVariantTree = this.parent.addVariantChild(this);
      }
      this.values.forEach((value, key) => this.bindToMotionValue(key, value));
      if (!hasReducedMotionListener.current) {
        initPrefersReducedMotion();
      }
      this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
      if (true) {
        warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
      }
      if (this.parent)
        this.parent.children.add(this);
      this.update(this.props, this.presenceContext);
    }
    unmount() {
      this.projection && this.projection.unmount();
      cancelFrame(this.notifyUpdate);
      cancelFrame(this.render);
      this.valueSubscriptions.forEach((remove) => remove());
      this.valueSubscriptions.clear();
      this.removeFromVariantTree && this.removeFromVariantTree();
      this.parent && this.parent.children.delete(this);
      for (const key in this.events) {
        this.events[key].clear();
      }
      for (const key in this.features) {
        const feature = this.features[key];
        if (feature) {
          feature.unmount();
          feature.isMounted = false;
        }
      }
      this.current = null;
    }
    bindToMotionValue(key, value) {
      if (this.valueSubscriptions.has(key)) {
        this.valueSubscriptions.get(key)();
      }
      const valueIsTransform = transformProps.has(key);
      if (valueIsTransform && this.onBindTransform) {
        this.onBindTransform();
      }
      const removeOnChange = value.on("change", (latestValue) => {
        this.latestValues[key] = latestValue;
        this.props.onUpdate && frame.preRender(this.notifyUpdate);
        if (valueIsTransform && this.projection) {
          this.projection.isTransformDirty = true;
        }
      });
      const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
      let removeSyncCheck;
      if (window.MotionCheckAppearSync) {
        removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
      }
      this.valueSubscriptions.set(key, () => {
        removeOnChange();
        removeOnRenderRequest();
        if (removeSyncCheck)
          removeSyncCheck();
        if (value.owner)
          value.stop();
      });
    }
    sortNodePosition(other) {
      if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
        return 0;
      }
      return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
      let key = "animation";
      for (key in featureDefinitions) {
        const featureDefinition = featureDefinitions[key];
        if (!featureDefinition)
          continue;
        const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
        if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
          this.features[key] = new FeatureConstructor(this);
        }
        if (this.features[key]) {
          const feature = this.features[key];
          if (feature.isMounted) {
            feature.update();
          } else {
            feature.mount();
            feature.isMounted = true;
          }
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
    }
    getStaticValue(key) {
      return this.latestValues[key];
    }
    setStaticValue(key, value) {
      this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
      if (props.transformTemplate || this.props.transformTemplate) {
        this.scheduleRender();
      }
      this.prevProps = this.props;
      this.props = props;
      this.prevPresenceContext = this.presenceContext;
      this.presenceContext = presenceContext;
      for (let i2 = 0; i2 < propEventHandlers.length; i2++) {
        const key = propEventHandlers[i2];
        if (this.propEventSubscriptions[key]) {
          this.propEventSubscriptions[key]();
          delete this.propEventSubscriptions[key];
        }
        const listenerName = "on" + key;
        const listener = props[listenerName];
        if (listener) {
          this.propEventSubscriptions[key] = this.on(key, listener);
        }
      }
      this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
      if (this.handleChildMotionValue) {
        this.handleChildMotionValue();
      }
    }
    getProps() {
      return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
      return this.props.variants ? this.props.variants[name] : void 0;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
      const closestVariantNode = this.getClosestVariantNode();
      if (closestVariantNode) {
        closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
        return () => closestVariantNode.variantChildren.delete(child);
      }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
      const existingValue = this.values.get(key);
      if (value !== existingValue) {
        if (existingValue)
          this.removeValue(key);
        this.bindToMotionValue(key, value);
        this.values.set(key, value);
        this.latestValues[key] = value.get();
      }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
      this.values.delete(key);
      const unsubscribe = this.valueSubscriptions.get(key);
      if (unsubscribe) {
        unsubscribe();
        this.valueSubscriptions.delete(key);
      }
      delete this.latestValues[key];
      this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
      return this.values.has(key);
    }
    getValue(key, defaultValue) {
      if (this.props.values && this.props.values[key]) {
        return this.props.values[key];
      }
      let value = this.values.get(key);
      if (value === void 0 && defaultValue !== void 0) {
        value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
        this.addValue(key, value);
      }
      return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key, target) {
      let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
      if (value !== void 0 && value !== null) {
        if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
          value = parseFloat(value);
        } else if (!findValueType(value) && complex.test(target)) {
          value = getAnimatableNone2(key, target);
        }
        this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
      }
      return isMotionValue(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
      this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
      const { initial } = this.props;
      let valueFromInitial;
      if (typeof initial === "string" || typeof initial === "object") {
        const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
        if (variant) {
          valueFromInitial = variant[key];
        }
      }
      if (initial && valueFromInitial !== void 0) {
        return valueFromInitial;
      }
      const target = this.getBaseTargetFromProps(this.props, key);
      if (target !== void 0 && !isMotionValue(target))
        return target;
      return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
    }
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
      if (this.events[eventName]) {
        this.events[eventName].notify(...args);
      }
    }
  };

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
  var DOMVisualElement = class extends VisualElement {
    constructor() {
      super(...arguments);
      this.KeyframeResolver = DOMKeyframesResolver;
    }
    sortInstanceNodePosition(a, b) {
      return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
      return props.style ? props.style[key] : void 0;
    }
    removeValueFromRenderState(key, { vars, style }) {
      delete vars[key];
      delete style[key];
    }
    handleChildMotionValue() {
      if (this.childSubscription) {
        this.childSubscription();
        delete this.childSubscription;
      }
      const { children } = this.props;
      if (isMotionValue(children)) {
        this.childSubscription = children.on("change", (latest) => {
          if (this.current) {
            this.current.textContent = `${latest}`;
          }
        });
      }
    }
  };

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
  var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  var numTransforms = transformPropOrder.length;
  function buildTransform(latestValues, transform, transformTemplate) {
    let transformString = "";
    let transformIsDefault = true;
    for (let i2 = 0; i2 < numTransforms; i2++) {
      const key = transformPropOrder[i2];
      const value = latestValues[key];
      if (value === void 0)
        continue;
      let valueIsDefault = true;
      if (typeof value === "number") {
        valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
      } else {
        valueIsDefault = parseFloat(value) === 0;
      }
      if (!valueIsDefault || transformTemplate) {
        const valueAsType = getValueAsType(value, numberValueTypes[key]);
        if (!valueIsDefault) {
          transformIsDefault = false;
          const transformName = translateAlias[key] || key;
          transformString += `${transformName}(${valueAsType}) `;
        }
        if (transformTemplate) {
          transform[key] = valueAsType;
        }
      }
    }
    transformString = transformString.trim();
    if (transformTemplate) {
      transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    } else if (transformIsDefault) {
      transformString = "none";
    }
    return transformString;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
  function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    let hasTransform = false;
    let hasTransformOrigin = false;
    for (const key in latestValues) {
      const value = latestValues[key];
      if (transformProps.has(key)) {
        hasTransform = true;
        continue;
      } else if (isCSSVariableName(key)) {
        vars[key] = value;
        continue;
      } else {
        const valueAsType = getValueAsType(value, numberValueTypes[key]);
        if (key.startsWith("origin")) {
          hasTransformOrigin = true;
          transformOrigin[key] = valueAsType;
        } else {
          style[key] = valueAsType;
        }
      }
    }
    if (!latestValues.transform) {
      if (hasTransform || transformTemplate) {
        style.transform = buildTransform(latestValues, state.transform, transformTemplate);
      } else if (style.transform) {
        style.transform = "none";
      }
    }
    if (hasTransformOrigin) {
      const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
      style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/html/utils/render.mjs
  function renderHTML(element, { style, vars }, styleProp, projection) {
    const elementStyle = element.style;
    let key;
    for (key in style) {
      elementStyle[key] = style[key];
    }
    projection?.applyProjectionStyles(elementStyle, styleProp);
    for (key in vars) {
      elementStyle.setProperty(key, vars[key]);
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
  var scaleCorrectors = {};

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
  function isForcedMotionValue(key, { layout, layoutId }) {
    return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
  function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const { style } = props;
    const newValues = {};
    for (const key in style) {
      if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) {
        newValues[key] = style[key];
      }
    }
    return newValues;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
  function getComputedStyle2(element) {
    return window.getComputedStyle(element);
  }
  var HTMLVisualElement = class extends DOMVisualElement {
    constructor() {
      super(...arguments);
      this.type = "html";
      this.renderInstance = renderHTML;
    }
    readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
      } else {
        const computedStyle = getComputedStyle2(instance);
        const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
        return typeof value === "string" ? value.trim() : value;
      }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
      return measureViewportBox(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
      buildHTMLStyles(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps(props, prevProps, visualElement);
    }
  };

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/object/ObjectVisualElement.mjs
  function isObjectKey(key, object) {
    return key in object;
  }
  var ObjectVisualElement = class extends VisualElement {
    constructor() {
      super(...arguments);
      this.type = "object";
    }
    readValueFromInstance(instance, key) {
      if (isObjectKey(key, instance)) {
        const value = instance[key];
        if (typeof value === "string" || typeof value === "number") {
          return value;
        }
      }
      return void 0;
    }
    getBaseTargetFromProps() {
      return void 0;
    }
    removeValueFromRenderState(key, renderState) {
      delete renderState.output[key];
    }
    measureInstanceViewportBox() {
      return createBox();
    }
    build(renderState, latestValues) {
      Object.assign(renderState.output, latestValues);
    }
    renderInstance(instance, { output }) {
      Object.assign(instance, output);
    }
    sortInstanceNodePosition() {
      return 0;
    }
  };

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
  var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    attrs.pathLength = 1;
    const keys = useDashCase ? dashKeys : camelKeys;
    attrs[keys.offset] = px.transform(-offset);
    const pathLength = px.transform(length);
    const pathSpacing = px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
  function buildSVGAttrs(state, {
    attrX,
    attrY,
    attrScale,
    pathLength,
    pathSpacing = 1,
    pathOffset = 0,
    // This is object creation, which we try to avoid per-frame.
    ...latest
  }, isSVGTag2, transformTemplate, styleProp) {
    buildHTMLStyles(state, latest, transformTemplate);
    if (isSVGTag2) {
      if (state.style.viewBox) {
        state.attrs.viewBox = state.style.viewBox;
      }
      return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style } = state;
    if (attrs.transform) {
      style.transform = attrs.transform;
      delete attrs.transform;
    }
    if (style.transform || attrs.transformOrigin) {
      style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
      delete attrs.transformOrigin;
    }
    if (style.transform) {
      style.transformBox = styleProp?.transformBox ?? "fill-box";
      delete attrs.transformBox;
    }
    if (attrX !== void 0)
      attrs.x = attrX;
    if (attrY !== void 0)
      attrs.y = attrY;
    if (attrScale !== void 0)
      attrs.scale = attrScale;
    if (pathLength !== void 0) {
      buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
  var camelCaseAttributes = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
  ]);

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
  var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
  function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, void 0, projection);
    for (const key in renderState.attrs) {
      element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
  function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
    const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
    for (const key in props) {
      if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
        const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
        newValues[targetKey] = props[key];
      }
    }
    return newValues;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
  var SVGVisualElement = class extends DOMVisualElement {
    constructor() {
      super(...arguments);
      this.type = "svg";
      this.isSVGTag = false;
      this.measureInstanceViewportBox = createBox;
    }
    getBaseTargetFromProps(props, key) {
      return props[key];
    }
    readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        const defaultType = getDefaultValueType(key);
        return defaultType ? defaultType.default || 0 : 0;
      }
      key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
      return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
      buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
    }
    renderInstance(instance, renderState, styleProp, projection) {
      renderSVG(instance, renderState, styleProp, projection);
    }
    mount(instance) {
      this.isSVGTag = isSVGTag(instance.tagName);
      super.mount(instance);
    }
  };

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
  function createDOMVisualElement(element) {
    const options = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {}
        },
        latestValues: {}
      }
    };
    const node = isSVGElement(element) && !isSVGSVGElement(element) ? new SVGVisualElement(options) : new HTMLVisualElement(options);
    node.mount(element);
    visualElementStore.set(element, node);
  }
  function createObjectVisualElement(subject) {
    const options = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          output: {}
        },
        latestValues: {}
      }
    };
    const node = new ObjectVisualElement(options);
    node.mount(subject);
    visualElementStore.set(subject, node);
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/animate/single-value.mjs
  function animateSingleValue(value, keyframes2, options) {
    const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
    return motionValue$1.animation;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/animate/subject.mjs
  function isSingleValue(subject, keyframes2) {
    return isMotionValue(subject) || typeof subject === "number" || typeof subject === "string" && !isDOMKeyframes(keyframes2);
  }
  function animateSubject(subject, keyframes2, options, scope) {
    const animations = [];
    if (isSingleValue(subject, keyframes2)) {
      animations.push(animateSingleValue(subject, isDOMKeyframes(keyframes2) ? keyframes2.default || keyframes2 : keyframes2, options ? options.default || options : options));
    } else {
      const subjects = resolveSubjects(subject, keyframes2, scope);
      const numSubjects = subjects.length;
      invariant(Boolean(numSubjects), "No valid elements provided.");
      for (let i2 = 0; i2 < numSubjects; i2++) {
        const thisSubject = subjects[i2];
        const createVisualElement = thisSubject instanceof Element ? createDOMVisualElement : createObjectVisualElement;
        if (!visualElementStore.has(thisSubject)) {
          createVisualElement(thisSubject);
        }
        const visualElement = visualElementStore.get(thisSubject);
        const transition = { ...options };
        if ("delay" in transition && typeof transition.delay === "function") {
          transition.delay = transition.delay(i2, numSubjects);
        }
        animations.push(...animateTarget(visualElement, { ...keyframes2, transition }, {}));
      }
    }
    return animations;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
  function animateSequence(sequence, options, scope) {
    const animations = [];
    const animationDefinitions = createAnimationsFromSequence(sequence, options, scope, { spring });
    animationDefinitions.forEach(({ keyframes: keyframes2, transition }, subject) => {
      animations.push(...animateSubject(subject, keyframes2, transition));
    });
    return animations;
  }

  // node_modules/.pnpm/framer-motion@12.23.0/node_modules/framer-motion/dist/es/animation/animate/index.mjs
  function isSequence(value) {
    return Array.isArray(value) && value.some(Array.isArray);
  }
  function createScopedAnimate(scope) {
    function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
      let animations = [];
      if (isSequence(subjectOrSequence)) {
        animations = animateSequence(subjectOrSequence, optionsOrKeyframes, scope);
      } else {
        animations = animateSubject(subjectOrSequence, optionsOrKeyframes, options, scope);
      }
      const animation = new GroupAnimationWithThen(animations);
      if (scope) {
        scope.animations.push(animation);
        animation.finished.then(() => {
          removeItem(scope.animations, animation);
        });
      }
      return animation;
    }
    return scopedAnimate;
  }
  var animate = createScopedAnimate();

  // src/functions/applyAmbilightEffect.ts
  function applyAmbilightEffect(dominantColor, state) {
    if (!dominantColor)
      return;
    let { container, currentAnimation, variableName, animationDuration, animationEase } = state;
    if (!container || !currentAnimation) {
      return;
    }
    if (currentAnimation) {
      currentAnimation.stop();
    }
    const nextColor = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;
    const prevColor = container.style.getPropertyValue(variableName).trim() || "rgba(255, 255, 255, 0)";
    state.currentAnimation = animate(
      container,
      { [variableName]: [prevColor, nextColor] },
      {
        duration: animationDuration,
        ease: animationEase
      }
    );
  }

  // src/functions/analyzeCurrentFrame.ts
  function analyzeCurrentFrame(state) {
    const { video, canvas, ctx } = state;
    try {
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
      if (videoWidth === 0 || videoHeight === 0 || isNaN(videoWidth) || isNaN(videoHeight)) {
        return;
      }
      if (canvas.width !== videoWidth || canvas.height !== videoHeight) {
        canvas.width = videoWidth;
        canvas.height = videoHeight;
      }
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const img = new Image();
      img.src = canvas.toDataURL();
      img.onload = () => {
        try {
          const dominantColor = state.colorThief.getColor(img);
          applyAmbilightEffect(dominantColor, state);
        } catch (error) {
          console.error("Error in color thief after image load:", error);
        }
      };
    } catch (error) {
      console.error("Error analyzing frame:", error);
    }
  }

  // src/functions/analysisLoop.ts
  function analysisLoop(state) {
    const { video, analysisInterval } = state;
    if (video.paused || video.ended) {
      state.animationFrameId = null;
      return;
    }
    const now2 = Date.now();
    if (now2 - state.lastAnalysisTime >= analysisInterval) {
      state.lastAnalysisTime = now2;
      analyzeCurrentFrame(state);
    }
    state.animationFrameId = requestAnimationFrame(() => analysisLoop(state));
  }

  // src/index.ts
  function initAmbilight(videoSelector, containerSelector, analysisInterval = 400, variableName = "--ambilight-color", animationDuration = 1.5, animationEase = "easeInOut") {
    const video = document.querySelector(videoSelector);
    const container = document.querySelector(containerSelector);
    if (!video || !container) {
      console.error("Video or container element not found");
      return;
    }
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) {
      console.error("Canvas context not available");
      return;
    }
    const state = {
      video,
      container,
      canvas,
      ctx,
      colorThief: new u(),
      animationFrameId: null,
      currentAnimation: animate(container, { [variableName]: "rgba(255, 255, 255, 0)" }, { duration: animationDuration }),
      lastAnalysisTime: 0,
      analysisInterval,
      variableName,
      animationDuration,
      animationEase
    };
    video.addEventListener("play", () => {
      if (!state.animationFrameId) {
        analysisLoop(state);
      }
    });
    video.addEventListener("pause", () => {
      if (state.animationFrameId) {
        cancelAnimationFrame(state.animationFrameId);
        state.animationFrameId = null;
      }
      if (state.currentAnimation) {
        state.currentAnimation.stop();
      }
    });
    video.addEventListener("seeked", () => {
      if (!video.paused) {
        analyzeCurrentFrame(state);
      }
    });
    video.addEventListener("loadeddata", () => {
      analyzeCurrentFrame(state);
    });
    if (!video.paused && !state.animationFrameId) {
      analysisLoop(state);
    } else if (video.readyState >= 2) {
      analyzeCurrentFrame(state);
    }
  }
  return __toCommonJS(src_exports);
})();
