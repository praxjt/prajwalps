let e;
var t,
  n = globalThis,
  i = {},
  r = {},
  a = n.parcelRequire94c2;
null == a &&
  (((a = function (e) {
    if (e in i) return i[e].exports;
    if (e in r) {
      var t = r[e];
      delete r[e];
      var n = { id: e, exports: {} };
      return (i[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var a = Error("Cannot find module '" + e + "'");
    throw ((a.code = "MODULE_NOT_FOUND"), a);
  }).register = function (e, t) {
    r[e] = t;
  }),
  (n.parcelRequire94c2 = a)),
  (0, a.register)("27Lyk", function (e, t) {
    Object.defineProperty(e.exports, "register", {
      get: () => n,
      set: (e) => (n = e),
      enumerable: !0,
      configurable: !0,
    });
    var n,
      i = new Map();
    n = function (e, t) {
      for (var n = 0; n < t.length - 1; n += 2)
        i.set(t[n], { baseUrl: e, path: t[n + 1] });
    };
  }),
  a("27Lyk").register(
    new URL("", import.meta.url).toString(),
    JSON.parse(
      '["dFSd7","index.79deabb5.js","5iXVF","finaldottedmark.30f9c420.jpg"]'
    )
  );
const s = "srgb",
  o = "srgb-linear",
  l = "linear",
  h = "srgb",
  c = "300 es";
class u {
  addEventListener(e, t) {
    void 0 === this._listeners && (this._listeners = {});
    let n = this._listeners;
    void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (void 0 === this._listeners) return !1;
    let n = this._listeners;
    return void 0 !== n[e] && -1 !== n[e].indexOf(t);
  }
  removeEventListener(e, t) {
    if (void 0 === this._listeners) return;
    let n = this._listeners[e];
    if (void 0 !== n) {
      let e = n.indexOf(t);
      -1 !== e && n.splice(e, 1);
    }
  }
  dispatchEvent(e) {
    if (void 0 === this._listeners) return;
    let t = this._listeners[e.type];
    if (void 0 !== t) {
      e.target = this;
      let n = t.slice(0);
      for (let t = 0, i = n.length; t < i; t++) n[t].call(this, e);
      e.target = null;
    }
  }
}
const d = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  p = Math.PI / 180,
  f = 180 / Math.PI;
function m() {
  let e = (0xffffffff * Math.random()) | 0,
    t = (0xffffffff * Math.random()) | 0,
    n = (0xffffffff * Math.random()) | 0,
    i = (0xffffffff * Math.random()) | 0;
  return (
    d[255 & e] +
    d[(e >> 8) & 255] +
    d[(e >> 16) & 255] +
    d[(e >> 24) & 255] +
    "-" +
    d[255 & t] +
    d[(t >> 8) & 255] +
    "-" +
    d[((t >> 16) & 15) | 64] +
    d[(t >> 24) & 255] +
    "-" +
    d[(63 & n) | 128] +
    d[(n >> 8) & 255] +
    "-" +
    d[(n >> 16) & 255] +
    d[(n >> 24) & 255] +
    d[255 & i] +
    d[(i >> 8) & 255] +
    d[(i >> 16) & 255] +
    d[(i >> 24) & 255]
  ).toLowerCase();
}
function g(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function _(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return e / 0xffffffff;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int32Array:
      return Math.max(e / 0x7fffffff, -1);
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw Error("Invalid component type.");
  }
}
function v(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint32Array:
      return Math.round(0xffffffff * e);
    case Uint16Array:
      return Math.round(65535 * e);
    case Uint8Array:
      return Math.round(255 * e);
    case Int32Array:
      return Math.round(0x7fffffff * e);
    case Int16Array:
      return Math.round(32767 * e);
    case Int8Array:
      return Math.round(127 * e);
    default:
      throw Error("Invalid component type.");
  }
}
class x {
  constructor(e = 0, t = 0) {
    (x.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    let t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (this.x = g(this.x, e.x, t.x)), (this.y = g(this.y, e.y, t.y)), this;
  }
  clampScalar(e, t) {
    return (this.x = g(this.x, e, t)), (this.y = g(this.y, e, t)), this;
  }
  clampLength(e, t) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(g(n, e, t));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    let t = Math.sqrt(this.lengthSq() * e.lengthSq());
    return 0 === t ? Math.PI / 2 : Math.acos(g(this.dot(e) / t, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    let t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    let n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * n - a * i + e.x), (this.y = r * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class y {
  constructor(e, t, n, i, r, a, s, o, l) {
    (y.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      void 0 !== e && this.set(e, t, n, i, r, a, s, o, l);
  }
  set(e, t, n, i, r, a, s, o, l) {
    let h = this.elements;
    return (
      (h[0] = e),
      (h[1] = i),
      (h[2] = s),
      (h[3] = t),
      (h[4] = r),
      (h[5] = o),
      (h[6] = n),
      (h[7] = a),
      (h[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    let t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    let t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    let n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      s = n[3],
      o = n[6],
      l = n[1],
      h = n[4],
      c = n[7],
      u = n[2],
      d = n[5],
      p = n[8],
      f = i[0],
      m = i[3],
      g = i[6],
      _ = i[1],
      v = i[4],
      x = i[7],
      y = i[2],
      M = i[5],
      S = i[8];
    return (
      (r[0] = a * f + s * _ + o * y),
      (r[3] = a * m + s * v + o * M),
      (r[6] = a * g + s * x + o * S),
      (r[1] = l * f + h * _ + c * y),
      (r[4] = l * m + h * v + c * M),
      (r[7] = l * g + h * x + c * S),
      (r[2] = u * f + d * _ + p * y),
      (r[5] = u * m + d * v + p * M),
      (r[8] = u * g + d * x + p * S),
      this
    );
  }
  multiplyScalar(e) {
    let t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    let e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      o = e[6],
      l = e[7],
      h = e[8];
    return (
      t * a * h - t * s * l - n * r * h + n * s * o + i * r * l - i * a * o
    );
  }
  invert() {
    let e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      o = e[6],
      l = e[7],
      h = e[8],
      c = h * a - s * l,
      u = s * o - h * r,
      d = l * r - a * o,
      p = t * c + n * u + i * d;
    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let f = 1 / p;
    return (
      (e[0] = c * f),
      (e[1] = (i * l - h * n) * f),
      (e[2] = (s * n - i * a) * f),
      (e[3] = u * f),
      (e[4] = (h * t - i * o) * f),
      (e[5] = (i * r - s * t) * f),
      (e[6] = d * f),
      (e[7] = (n * o - l * t) * f),
      (e[8] = (a * t - n * r) * f),
      this
    );
  }
  transpose() {
    let e;
    let t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    let t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, a, s) {
    let o = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * o,
        n * l,
        -n * (o * a + l * s) + a + e,
        -i * l,
        i * o,
        -i * (-l * a + o * s) + s + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(M.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(M.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(M.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    let t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    let t = this.elements,
      n = e.elements;
    for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    let n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const M = new y();
function S(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function E(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array;
const T = {};
function b(e) {
  e in T || ((T[e] = !0), console.warn(e));
}
const A = new y().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  ),
  w = new y().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  ),
  R = (function () {
    let e = {
        enabled: !0,
        workingColorSpace: o,
        spaces: {},
        convert: function (e, t, n) {
          return (
            !1 !== this.enabled &&
              t !== n &&
              t &&
              n &&
              (this.spaces[t].transfer === h &&
                ((e.r = C(e.r)), (e.g = C(e.g)), (e.b = C(e.b))),
              this.spaces[t].primaries !== this.spaces[n].primaries &&
                (e.applyMatrix3(this.spaces[t].toXYZ),
                e.applyMatrix3(this.spaces[n].fromXYZ)),
              this.spaces[n].transfer === h &&
                ((e.r = P(e.r)), (e.g = P(e.g)), (e.b = P(e.b)))),
            e
          );
        },
        fromWorkingColorSpace: function (e, t) {
          return this.convert(e, this.workingColorSpace, t);
        },
        toWorkingColorSpace: function (e, t) {
          return this.convert(e, t, this.workingColorSpace);
        },
        getPrimaries: function (e) {
          return this.spaces[e].primaries;
        },
        getTransfer: function (e) {
          return "" === e ? l : this.spaces[e].transfer;
        },
        getLuminanceCoefficients: function (e, t = this.workingColorSpace) {
          return e.fromArray(this.spaces[t].luminanceCoefficients);
        },
        define: function (e) {
          Object.assign(this.spaces, e);
        },
        _getMatrix: function (e, t, n) {
          return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
        },
        _getDrawingBufferColorSpace: function (e) {
          return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
        },
        _getUnpackColorSpace: function (e = this.workingColorSpace) {
          return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
        },
      },
      t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
      n = [0.2126, 0.7152, 0.0722],
      i = [0.3127, 0.329];
    return (
      e.define({
        [o]: {
          primaries: t,
          whitePoint: i,
          transfer: l,
          toXYZ: A,
          fromXYZ: w,
          luminanceCoefficients: n,
          workingColorSpaceConfig: { unpackColorSpace: s },
          outputColorSpaceConfig: { drawingBufferColorSpace: s },
        },
        [s]: {
          primaries: t,
          whitePoint: i,
          transfer: h,
          toXYZ: A,
          fromXYZ: w,
          luminanceCoefficients: n,
          outputColorSpaceConfig: { drawingBufferColorSpace: s },
        },
      }),
      e
    );
  })();
function C(e) {
  return e < 0.04045
    ? 0.0773993808 * e
    : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
}
function P(e) {
  return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
class L {
  static getDataURL(t) {
    let n;
    if (/^data:/i.test(t.src) || "undefined" == typeof HTMLCanvasElement)
      return t.src;
    if (t instanceof HTMLCanvasElement) n = t;
    else {
      void 0 === e && (e = E("canvas")),
        (e.width = t.width),
        (e.height = t.height);
      let i = e.getContext("2d");
      t instanceof ImageData
        ? i.putImageData(t, 0, 0)
        : i.drawImage(t, 0, 0, t.width, t.height),
        (n = e);
    }
    return n.width > 2048 || n.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          t
        ),
        n.toDataURL("image/jpeg", 0.6))
      : n.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      ("undefined" != typeof HTMLImageElement &&
        e instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        e instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ) {
      let t = E("canvas");
      (t.width = e.width), (t.height = e.height);
      let n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      let i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let e = 0; e < r.length; e++) r[e] = 255 * C(r[e] / 255);
      return n.putImageData(i, 0, 0), t;
    }
    if (!e.data)
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
    {
      let t = e.data.slice(0);
      for (let e = 0; e < t.length; e++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[e] = Math.floor(255 * C(t[e] / 255)))
          : (t[e] = C(t[e]));
      return { data: t, width: e.width, height: e.height };
    }
  }
}
let U = 0;
class N {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: U++ }),
      (this.uuid = m()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
    let n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (null !== i) {
      let e;
      if (Array.isArray(i)) {
        e = [];
        for (let t = 0, n = i.length; t < n; t++)
          i[t].isDataTexture ? e.push(D(i[t].image)) : e.push(D(i[t]));
      } else e = D(i);
      n.url = e;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function D(e) {
  return ("undefined" != typeof HTMLImageElement &&
    e instanceof HTMLImageElement) ||
    ("undefined" != typeof HTMLCanvasElement &&
      e instanceof HTMLCanvasElement) ||
    ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ? L.getDataURL(e)
    : e.data
    ? {
        data: Array.from(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let I = 0;
class O extends u {
  constructor(
    e = O.DEFAULT_IMAGE,
    t = O.DEFAULT_MAPPING,
    n = 1001,
    i = 1001,
    r = 1006,
    a = 1008,
    s = 1023,
    o = 1009,
    l = O.DEFAULT_ANISOTROPY,
    h = ""
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: I++ }),
      (this.uuid = m()),
      (this.name = ""),
      (this.source = new N(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = s),
      (this.internalFormat = null),
      (this.type = o),
      (this.offset = new x(0, 0)),
      (this.repeat = new x(1, 1)),
      (this.center = new x(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new y()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = h),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
    let n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (300 !== this.mapping) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          1 === Math.abs(Math.floor(e.x) % 2)
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          1 === Math.abs(Math.floor(e.y) % 2)
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    !0 === e && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    !0 === e && this.pmremVersion++;
  }
}
(O.DEFAULT_IMAGE = null), (O.DEFAULT_MAPPING = 300), (O.DEFAULT_ANISOTROPY = 1);
class F {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (F.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = void 0 !== e.w ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    let t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), (this.w /= e.w), this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    let t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    let a = e.elements,
      s = a[0],
      o = a[4],
      l = a[8],
      h = a[1],
      c = a[5],
      u = a[9],
      d = a[2],
      p = a[6],
      f = a[10];
    if (
      0.01 > Math.abs(o - h) &&
      0.01 > Math.abs(l - d) &&
      0.01 > Math.abs(u - p)
    ) {
      if (
        0.1 > Math.abs(o + h) &&
        0.1 > Math.abs(l + d) &&
        0.1 > Math.abs(u + p) &&
        0.1 > Math.abs(s + c + f - 3)
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      let e = (s + 1) / 2,
        a = (c + 1) / 2,
        m = (f + 1) / 2,
        g = (o + h) / 4,
        _ = (l + d) / 4,
        v = (u + p) / 4;
      return (
        e > a && e > m
          ? e < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((i = g / (n = Math.sqrt(e))), (r = _ / n))
          : a > m
          ? a < 0.01
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((n = g / (i = Math.sqrt(a))), (r = v / i))
          : m < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((n = _ / (r = Math.sqrt(m))), (i = v / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let m = Math.sqrt(
      (p - u) * (p - u) + (l - d) * (l - d) + (h - o) * (h - o)
    );
    return (
      0.001 > Math.abs(m) && (m = 1),
      (this.x = (p - u) / m),
      (this.y = (l - d) / m),
      (this.z = (h - o) / m),
      (this.w = Math.acos((s + c + f - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    let t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = g(this.x, e.x, t.x)),
      (this.y = g(this.y, e.y, t.y)),
      (this.z = g(this.z, e.z, t.z)),
      (this.w = g(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = g(this.x, e, t)),
      (this.y = g(this.y, e, t)),
      (this.z = g(this.z, e, t)),
      (this.w = g(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(g(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class B extends u {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new F(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new F(0, 0, e, t));
    let i = new O(
      { width: e, height: t, depth: 1 },
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: 1006,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
        },
        n
      )).mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace
    );
    (i.flipY = !1),
      (i.generateMipmaps = n.generateMipmaps),
      (i.internalFormat = n.internalFormat),
      (this.textures = []);
    let r = n.count;
    for (let e = 0; e < r; e++)
      (this.textures[e] = i.clone()),
        (this.textures[e].isRenderTargetTexture = !0);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let i = 0, r = this.textures.length; i < r; i++)
        (this.textures[i].image.width = e),
          (this.textures[i].image.height = t),
          (this.textures[i].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let t = 0, n = e.textures.length; t < n; t++)
      (this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0);
    let t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new N(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class z extends B {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class V extends O {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class H {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, r, a, s) {
    let o = n[i + 0],
      l = n[i + 1],
      h = n[i + 2],
      c = n[i + 3],
      u = r[a + 0],
      d = r[a + 1],
      p = r[a + 2],
      f = r[a + 3];
    if (0 === s) {
      (e[t + 0] = o), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = c);
      return;
    }
    if (1 === s) {
      (e[t + 0] = u), (e[t + 1] = d), (e[t + 2] = p), (e[t + 3] = f);
      return;
    }
    if (c !== f || o !== u || l !== d || h !== p) {
      let e = 1 - s,
        t = o * u + l * d + h * p + c * f,
        n = t >= 0 ? 1 : -1,
        i = 1 - t * t;
      if (i > Number.EPSILON) {
        let r = Math.sqrt(i),
          a = Math.atan2(r, t * n);
        (e = Math.sin(e * a) / r), (s = Math.sin(s * a) / r);
      }
      let r = s * n;
      if (
        ((o = o * e + u * r),
        (l = l * e + d * r),
        (h = h * e + p * r),
        (c = c * e + f * r),
        e === 1 - s)
      ) {
        let e = 1 / Math.sqrt(o * o + l * l + h * h + c * c);
        (o *= e), (l *= e), (h *= e), (c *= e);
      }
    }
    (e[t] = o), (e[t + 1] = l), (e[t + 2] = h), (e[t + 3] = c);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    let s = n[i],
      o = n[i + 1],
      l = n[i + 2],
      h = n[i + 3],
      c = r[a],
      u = r[a + 1],
      d = r[a + 2],
      p = r[a + 3];
    return (
      (e[t] = s * p + h * c + o * d - l * u),
      (e[t + 1] = o * p + h * u + l * c - s * d),
      (e[t + 2] = l * p + h * d + s * u - o * c),
      (e[t + 3] = h * p - s * c - o * u - l * d),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    let n = e._x,
      i = e._y,
      r = e._z,
      a = e._order,
      s = Math.cos,
      o = Math.sin,
      l = s(n / 2),
      h = s(i / 2),
      c = s(r / 2),
      u = o(n / 2),
      d = o(i / 2),
      p = o(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = u * h * c + l * d * p),
          (this._y = l * d * c - u * h * p),
          (this._z = l * h * p + u * d * c),
          (this._w = l * h * c - u * d * p);
        break;
      case "YXZ":
        (this._x = u * h * c + l * d * p),
          (this._y = l * d * c - u * h * p),
          (this._z = l * h * p - u * d * c),
          (this._w = l * h * c + u * d * p);
        break;
      case "ZXY":
        (this._x = u * h * c - l * d * p),
          (this._y = l * d * c + u * h * p),
          (this._z = l * h * p + u * d * c),
          (this._w = l * h * c - u * d * p);
        break;
      case "ZYX":
        (this._x = u * h * c - l * d * p),
          (this._y = l * d * c + u * h * p),
          (this._z = l * h * p - u * d * c),
          (this._w = l * h * c + u * d * p);
        break;
      case "YZX":
        (this._x = u * h * c + l * d * p),
          (this._y = l * d * c + u * h * p),
          (this._z = l * h * p - u * d * c),
          (this._w = l * h * c - u * d * p);
        break;
      case "XZY":
        (this._x = u * h * c - l * d * p),
          (this._y = l * d * c - u * h * p),
          (this._z = l * h * p + u * d * c),
          (this._w = l * h * c + u * d * p);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return !0 === t && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    let n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    let t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      a = t[1],
      s = t[5],
      o = t[9],
      l = t[2],
      h = t[6],
      c = t[10],
      u = n + s + c;
    if (u > 0) {
      let e = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / e),
        (this._x = (h - o) * e),
        (this._y = (r - l) * e),
        (this._z = (a - i) * e);
    } else if (n > s && n > c) {
      let e = 2 * Math.sqrt(1 + n - s - c);
      (this._w = (h - o) / e),
        (this._x = 0.25 * e),
        (this._y = (i + a) / e),
        (this._z = (r + l) / e);
    } else if (s > c) {
      let e = 2 * Math.sqrt(1 + s - n - c);
      (this._w = (r - l) / e),
        (this._x = (i + a) / e),
        (this._y = 0.25 * e),
        (this._z = (o + h) / e);
    } else {
      let e = 2 * Math.sqrt(1 + c - n - s);
      (this._w = (a - i) / e),
        (this._x = (r + l) / e),
        (this._y = (o + h) / e),
        (this._z = 0.25 * e);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x)),
      (this._w = n),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(g(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    let n = this.angleTo(e);
    if (0 === n) return this;
    let i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      0 === e
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    let n = e._x,
      i = e._y,
      r = e._z,
      a = e._w,
      s = t._x,
      o = t._y,
      l = t._z,
      h = t._w;
    return (
      (this._x = n * h + a * s + i * l - r * o),
      (this._y = i * h + a * o + r * s - n * l),
      (this._z = r * h + a * l + n * o - i * s),
      (this._w = a * h - n * s - i * o - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (0 === t) return this;
    if (1 === t) return this.copy(e);
    let n = this._x,
      i = this._y,
      r = this._z,
      a = this._w,
      s = a * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (s < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (s = -s))
        : this.copy(e),
      s >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
    let o = 1 - s * s;
    if (o <= Number.EPSILON) {
      let e = 1 - t;
      return (
        (this._w = e * a + t * this._w),
        (this._x = e * n + t * this._x),
        (this._y = e * i + t * this._y),
        (this._z = e * r + t * this._z),
        this.normalize(),
        this
      );
    }
    let l = Math.sqrt(o),
      h = Math.atan2(l, s),
      c = Math.sin((1 - t) * h) / l,
      u = Math.sin(t * h) / l;
    return (
      (this._w = a * c + this._w * u),
      (this._x = n * c + this._x * u),
      (this._y = i * c + this._y * u),
      (this._z = r * c + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    let e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      r = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class G {
  constructor(e = 0, t = 0, n = 0) {
    (G.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      void 0 === n && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(W.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(W.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    let t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    let t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    let t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      a = e.y,
      s = e.z,
      o = e.w,
      l = 2 * (a * i - s * n),
      h = 2 * (s * t - r * i),
      c = 2 * (r * n - a * t);
    return (
      (this.x = t + o * l + a * c - s * h),
      (this.y = n + o * h + s * l - r * c),
      (this.z = i + o * c + r * h - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    let t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = g(this.x, e.x, t.x)),
      (this.y = g(this.y, e.y, t.y)),
      (this.z = g(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = g(this.x, e, t)),
      (this.y = g(this.y, e, t)),
      (this.z = g(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(g(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    let n = e.x,
      i = e.y,
      r = e.z,
      a = t.x,
      s = t.y,
      o = t.z;
    return (
      (this.x = i * o - r * s),
      (this.y = r * a - n * o),
      (this.z = n * s - i * a),
      this
    );
  }
  projectOnVector(e) {
    let t = e.lengthSq();
    if (0 === t) return this.set(0, 0, 0);
    let n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return k.copy(this).projectOnVector(e), this.sub(k);
  }
  reflect(e) {
    return this.sub(k.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    let t = Math.sqrt(this.lengthSq() * e.lengthSq());
    return 0 === t ? Math.PI / 2 : Math.acos(g(this.dot(e) / t, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    let t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    let i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    let t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    let t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, 4 * t);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, 3 * t);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    let e = Math.random() * Math.PI * 2,
      t = 2 * Math.random() - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const k = new G(),
  W = new H();
class X {
  constructor(
    e = new G(1 / 0, 1 / 0, 1 / 0),
    t = new G(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(q.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(q.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    let n = q.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    let n = e.geometry;
    if (void 0 !== n) {
      let i = n.getAttribute("position");
      if (!0 === t && void 0 !== i && !0 !== e.isInstancedMesh)
        for (let t = 0, n = i.count; t < n; t++)
          !0 === e.isMesh
            ? e.getVertexPosition(t, q)
            : q.fromBufferAttribute(i, t),
            q.applyMatrix4(e.matrixWorld),
            this.expandByPoint(q);
      else
        void 0 !== e.boundingBox
          ? (null === e.boundingBox && e.computeBoundingBox(),
            Y.copy(e.boundingBox))
          : (null === n.boundingBox && n.computeBoundingBox(),
            Y.copy(n.boundingBox)),
          Y.applyMatrix4(e.matrixWorld),
          this.union(Y);
    }
    let i = e.children;
    for (let e = 0, n = i.length; e < n; e++) this.expandByObject(i[e], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, q),
      q.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(et),
      en.subVectors(this.max, et),
      J.subVectors(e.a, et),
      Z.subVectors(e.b, et),
      K.subVectors(e.c, et),
      $.subVectors(Z, J),
      Q.subVectors(K, Z),
      ee.subVectors(J, K);
    let t = [
      0,
      -$.z,
      $.y,
      0,
      -Q.z,
      Q.y,
      0,
      -ee.z,
      ee.y,
      $.z,
      0,
      -$.x,
      Q.z,
      0,
      -Q.x,
      ee.z,
      0,
      -ee.x,
      -$.y,
      $.x,
      0,
      -Q.y,
      Q.x,
      0,
      -ee.y,
      ee.x,
      0,
    ];
    return (
      !!(
        ea(t, J, Z, K, en) && ea((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), J, Z, K, en)
      ) && (ei.crossVectors($, Q), ea((t = [ei.x, ei.y, ei.z]), J, Z, K, en))
    );
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, q).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = 0.5 * this.getSize(q).length())),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return (
      this.isEmpty() ||
        (j[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        j[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        j[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        j[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        j[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        j[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        j[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        j[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(j)),
      this
    );
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const j = [
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
  ],
  q = new G(),
  Y = new X(),
  J = new G(),
  Z = new G(),
  K = new G(),
  $ = new G(),
  Q = new G(),
  ee = new G(),
  et = new G(),
  en = new G(),
  ei = new G(),
  er = new G();
function ea(e, t, n, i, r) {
  for (let a = 0, s = e.length - 3; a <= s; a += 3) {
    er.fromArray(e, a);
    let s = r.x * Math.abs(er.x) + r.y * Math.abs(er.y) + r.z * Math.abs(er.z),
      o = t.dot(er),
      l = n.dot(er),
      h = i.dot(er);
    if (Math.max(-Math.max(o, l, h), Math.min(o, l, h)) > s) return !1;
  }
  return !0;
}
const es = new X(),
  eo = new G(),
  el = new G();
class eh {
  constructor(e = new G(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    let n = this.center;
    void 0 !== t ? n.copy(t) : es.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let t = 0, r = e.length; t < r; t++)
      i = Math.max(i, n.distanceToSquared(e[t]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    let t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    let n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (e.set(this.center, this.center), e.expandByScalar(this.radius)),
      e
    );
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    eo.subVectors(e, this.center);
    let t = eo.lengthSq();
    if (t > this.radius * this.radius) {
      let e = Math.sqrt(t),
        n = (e - this.radius) * 0.5;
      this.center.addScaledVector(eo, n / e), (this.radius += n);
    }
    return this;
  }
  union(e) {
    return (
      e.isEmpty() ||
        (this.isEmpty()
          ? this.copy(e)
          : !0 === this.center.equals(e.center)
          ? (this.radius = Math.max(this.radius, e.radius))
          : (el.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(eo.copy(e.center).add(el)),
            this.expandByPoint(eo.copy(e.center).sub(el)))),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ec = new G(),
  eu = new G(),
  ed = new G(),
  ep = new G(),
  ef = new G(),
  em = new G(),
  eg = new G();
class e_ {
  constructor(e, t, n, i, r, a, s, o, l, h, c, u, d, p, f, m) {
    (e_.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      void 0 !== e && this.set(e, t, n, i, r, a, s, o, l, h, c, u, d, p, f, m);
  }
  set(e, t, n, i, r, a, s, o, l, h, c, u, d, p, f, m) {
    let g = this.elements;
    return (
      (g[0] = e),
      (g[4] = t),
      (g[8] = n),
      (g[12] = i),
      (g[1] = r),
      (g[5] = a),
      (g[9] = s),
      (g[13] = o),
      (g[2] = l),
      (g[6] = h),
      (g[10] = c),
      (g[14] = u),
      (g[3] = d),
      (g[7] = p),
      (g[11] = f),
      (g[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new e_().fromArray(this.elements);
  }
  copy(e) {
    let t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    let t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    let t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    let t = this.elements,
      n = e.elements,
      i = 1 / ev.setFromMatrixColumn(e, 0).length(),
      r = 1 / ev.setFromMatrixColumn(e, 1).length(),
      a = 1 / ev.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    let t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      a = Math.cos(n),
      s = Math.sin(n),
      o = Math.cos(i),
      l = Math.sin(i),
      h = Math.cos(r),
      c = Math.sin(r);
    if ("XYZ" === e.order) {
      let e = a * h,
        n = a * c,
        i = s * h,
        r = s * c;
      (t[0] = o * h),
        (t[4] = -o * c),
        (t[8] = l),
        (t[1] = n + i * l),
        (t[5] = e - r * l),
        (t[9] = -s * o),
        (t[2] = r - e * l),
        (t[6] = i + n * l),
        (t[10] = a * o);
    } else if ("YXZ" === e.order) {
      let e = o * h,
        n = o * c,
        i = l * h,
        r = l * c;
      (t[0] = e + r * s),
        (t[4] = i * s - n),
        (t[8] = a * l),
        (t[1] = a * c),
        (t[5] = a * h),
        (t[9] = -s),
        (t[2] = n * s - i),
        (t[6] = r + e * s),
        (t[10] = a * o);
    } else if ("ZXY" === e.order) {
      let e = o * h,
        n = o * c,
        i = l * h,
        r = l * c;
      (t[0] = e - r * s),
        (t[4] = -a * c),
        (t[8] = i + n * s),
        (t[1] = n + i * s),
        (t[5] = a * h),
        (t[9] = r - e * s),
        (t[2] = -a * l),
        (t[6] = s),
        (t[10] = a * o);
    } else if ("ZYX" === e.order) {
      let e = a * h,
        n = a * c,
        i = s * h,
        r = s * c;
      (t[0] = o * h),
        (t[4] = i * l - n),
        (t[8] = e * l + r),
        (t[1] = o * c),
        (t[5] = r * l + e),
        (t[9] = n * l - i),
        (t[2] = -l),
        (t[6] = s * o),
        (t[10] = a * o);
    } else if ("YZX" === e.order) {
      let e = a * o,
        n = a * l,
        i = s * o,
        r = s * l;
      (t[0] = o * h),
        (t[4] = r - e * c),
        (t[8] = i * c + n),
        (t[1] = c),
        (t[5] = a * h),
        (t[9] = -s * h),
        (t[2] = -l * h),
        (t[6] = n * c + i),
        (t[10] = e - r * c);
    } else if ("XZY" === e.order) {
      let e = a * o,
        n = a * l,
        i = s * o,
        r = s * l;
      (t[0] = o * h),
        (t[4] = -c),
        (t[8] = l * h),
        (t[1] = e * c + r),
        (t[5] = a * h),
        (t[9] = n * c - i),
        (t[2] = i * c - n),
        (t[6] = s * h),
        (t[10] = r * c + e);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(ey, e, eM);
  }
  lookAt(e, t, n) {
    let i = this.elements;
    return (
      eT.subVectors(e, t),
      0 === eT.lengthSq() && (eT.z = 1),
      eT.normalize(),
      eS.crossVectors(n, eT),
      0 === eS.lengthSq() &&
        (1 === Math.abs(n.z) ? (eT.x += 1e-4) : (eT.z += 1e-4),
        eT.normalize(),
        eS.crossVectors(n, eT)),
      eS.normalize(),
      eE.crossVectors(eT, eS),
      (i[0] = eS.x),
      (i[4] = eE.x),
      (i[8] = eT.x),
      (i[1] = eS.y),
      (i[5] = eE.y),
      (i[9] = eT.y),
      (i[2] = eS.z),
      (i[6] = eE.z),
      (i[10] = eT.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    let n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      s = n[4],
      o = n[8],
      l = n[12],
      h = n[1],
      c = n[5],
      u = n[9],
      d = n[13],
      p = n[2],
      f = n[6],
      m = n[10],
      g = n[14],
      _ = n[3],
      v = n[7],
      x = n[11],
      y = n[15],
      M = i[0],
      S = i[4],
      E = i[8],
      T = i[12],
      b = i[1],
      A = i[5],
      w = i[9],
      R = i[13],
      C = i[2],
      P = i[6],
      L = i[10],
      U = i[14],
      N = i[3],
      D = i[7],
      I = i[11],
      O = i[15];
    return (
      (r[0] = a * M + s * b + o * C + l * N),
      (r[4] = a * S + s * A + o * P + l * D),
      (r[8] = a * E + s * w + o * L + l * I),
      (r[12] = a * T + s * R + o * U + l * O),
      (r[1] = h * M + c * b + u * C + d * N),
      (r[5] = h * S + c * A + u * P + d * D),
      (r[9] = h * E + c * w + u * L + d * I),
      (r[13] = h * T + c * R + u * U + d * O),
      (r[2] = p * M + f * b + m * C + g * N),
      (r[6] = p * S + f * A + m * P + g * D),
      (r[10] = p * E + f * w + m * L + g * I),
      (r[14] = p * T + f * R + m * U + g * O),
      (r[3] = _ * M + v * b + x * C + y * N),
      (r[7] = _ * S + v * A + x * P + y * D),
      (r[11] = _ * E + v * w + x * L + y * I),
      (r[15] = _ * T + v * R + x * U + y * O),
      this
    );
  }
  multiplyScalar(e) {
    let t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    let e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      a = e[1],
      s = e[5],
      o = e[9],
      l = e[13],
      h = e[2],
      c = e[6],
      u = e[10],
      d = e[14],
      p = e[3];
    return (
      p *
        (+r * o * c -
          i * l * c -
          r * s * u +
          n * l * u +
          i * s * d -
          n * o * d) +
      e[7] *
        (+t * o * d -
          t * l * u +
          r * a * u -
          i * a * d +
          i * l * h -
          r * o * h) +
      e[11] *
        (+t * l * c -
          t * s * d -
          r * a * c +
          n * a * d +
          r * s * h -
          n * l * h) +
      e[15] *
        (-i * s * h - t * o * c + t * s * u + i * a * c - n * a * u + n * o * h)
    );
  }
  transpose() {
    let e;
    let t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    );
  }
  setPosition(e, t, n) {
    let i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    let e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      o = e[6],
      l = e[7],
      h = e[8],
      c = e[9],
      u = e[10],
      d = e[11],
      p = e[12],
      f = e[13],
      m = e[14],
      g = e[15],
      _ = c * m * l - f * u * l + f * o * d - s * m * d - c * o * g + s * u * g,
      v = p * u * l - h * m * l - p * o * d + a * m * d + h * o * g - a * u * g,
      x = h * f * l - p * c * l + p * s * d - a * f * d - h * s * g + a * c * g,
      y = p * c * o - h * f * o - p * s * u + a * f * u + h * s * m - a * c * m,
      M = t * _ + n * v + i * x + r * y;
    if (0 === M)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    let S = 1 / M;
    return (
      (e[0] = _ * S),
      (e[1] =
        (f * u * r -
          c * m * r -
          f * i * d +
          n * m * d +
          c * i * g -
          n * u * g) *
        S),
      (e[2] =
        (s * m * r -
          f * o * r +
          f * i * l -
          n * m * l -
          s * i * g +
          n * o * g) *
        S),
      (e[3] =
        (c * o * r -
          s * u * r -
          c * i * l +
          n * u * l +
          s * i * d -
          n * o * d) *
        S),
      (e[4] = v * S),
      (e[5] =
        (h * m * r -
          p * u * r +
          p * i * d -
          t * m * d -
          h * i * g +
          t * u * g) *
        S),
      (e[6] =
        (p * o * r -
          a * m * r -
          p * i * l +
          t * m * l +
          a * i * g -
          t * o * g) *
        S),
      (e[7] =
        (a * u * r -
          h * o * r +
          h * i * l -
          t * u * l -
          a * i * d +
          t * o * d) *
        S),
      (e[8] = x * S),
      (e[9] =
        (p * c * r -
          h * f * r -
          p * n * d +
          t * f * d +
          h * n * g -
          t * c * g) *
        S),
      (e[10] =
        (a * f * r -
          p * s * r +
          p * n * l -
          t * f * l -
          a * n * g +
          t * s * g) *
        S),
      (e[11] =
        (h * s * r -
          a * c * r -
          h * n * l +
          t * c * l +
          a * n * d -
          t * s * d) *
        S),
      (e[12] = y * S),
      (e[13] =
        (h * f * i -
          p * c * i +
          p * n * u -
          t * f * u -
          h * n * m +
          t * c * m) *
        S),
      (e[14] =
        (p * s * i -
          a * f * i -
          p * n * o +
          t * f * o +
          a * n * m -
          t * s * m) *
        S),
      (e[15] =
        (a * c * i -
          h * s * i +
          h * n * o -
          t * c * o -
          a * n * u +
          t * s * u) *
        S),
      this
    );
  }
  scale(e) {
    let t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    let e = this.elements;
    return Math.sqrt(
      Math.max(
        e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        e[8] * e[8] + e[9] * e[9] + e[10] * e[10]
      )
    );
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    let t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    let t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    let t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    let n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      a = e.x,
      s = e.y,
      o = e.z,
      l = r * a,
      h = r * s;
    return (
      this.set(
        l * a + n,
        l * s - i * o,
        l * o + i * s,
        0,
        l * s + i * o,
        h * s + n,
        h * o - i * a,
        0,
        l * o - i * s,
        h * o + i * a,
        r * o * o + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    let i = this.elements,
      r = t._x,
      a = t._y,
      s = t._z,
      o = t._w,
      l = r + r,
      h = a + a,
      c = s + s,
      u = r * l,
      d = r * h,
      p = r * c,
      f = a * h,
      m = a * c,
      g = s * c,
      _ = o * l,
      v = o * h,
      x = o * c,
      y = n.x,
      M = n.y,
      S = n.z;
    return (
      (i[0] = (1 - (f + g)) * y),
      (i[1] = (d + x) * y),
      (i[2] = (p - v) * y),
      (i[3] = 0),
      (i[4] = (d - x) * M),
      (i[5] = (1 - (u + g)) * M),
      (i[6] = (m + _) * M),
      (i[7] = 0),
      (i[8] = (p + v) * S),
      (i[9] = (m - _) * S),
      (i[10] = (1 - (u + f)) * S),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    let i = this.elements,
      r = ev.set(i[0], i[1], i[2]).length(),
      a = ev.set(i[4], i[5], i[6]).length(),
      s = ev.set(i[8], i[9], i[10]).length();
    0 > this.determinant() && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      ex.copy(this);
    let o = 1 / r,
      l = 1 / a,
      h = 1 / s;
    return (
      (ex.elements[0] *= o),
      (ex.elements[1] *= o),
      (ex.elements[2] *= o),
      (ex.elements[4] *= l),
      (ex.elements[5] *= l),
      (ex.elements[6] *= l),
      (ex.elements[8] *= h),
      (ex.elements[9] *= h),
      (ex.elements[10] *= h),
      t.setFromRotationMatrix(ex),
      (n.x = r),
      (n.y = a),
      (n.z = s),
      this
    );
  }
  makePerspective(e, t, n, i, r, a, s = 2e3) {
    let o, l;
    let h = this.elements;
    if (2e3 === s) (o = -(a + r) / (a - r)), (l = (-2 * a * r) / (a - r));
    else if (2001 === s) (o = -a / (a - r)), (l = (-a * r) / (a - r));
    else
      throw Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s
      );
    return (
      (h[0] = (2 * r) / (t - e)),
      (h[4] = 0),
      (h[8] = (t + e) / (t - e)),
      (h[12] = 0),
      (h[1] = 0),
      (h[5] = (2 * r) / (n - i)),
      (h[9] = (n + i) / (n - i)),
      (h[13] = 0),
      (h[2] = 0),
      (h[6] = 0),
      (h[10] = o),
      (h[14] = l),
      (h[3] = 0),
      (h[7] = 0),
      (h[11] = -1),
      (h[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, a, s = 2e3) {
    let o, l;
    let h = this.elements,
      c = 1 / (t - e),
      u = 1 / (n - i),
      d = 1 / (a - r);
    if (2e3 === s) (o = (a + r) * d), (l = -2 * d);
    else if (2001 === s) (o = r * d), (l = -1 * d);
    else
      throw Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s
      );
    return (
      (h[0] = 2 * c),
      (h[4] = 0),
      (h[8] = 0),
      (h[12] = -((t + e) * c)),
      (h[1] = 0),
      (h[5] = 2 * u),
      (h[9] = 0),
      (h[13] = -((n + i) * u)),
      (h[2] = 0),
      (h[6] = 0),
      (h[10] = l),
      (h[14] = -o),
      (h[3] = 0),
      (h[7] = 0),
      (h[11] = 0),
      (h[15] = 1),
      this
    );
  }
  equals(e) {
    let t = this.elements,
      n = e.elements;
    for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    let n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const ev = new G(),
  ex = new e_(),
  ey = new G(0, 0, 0),
  eM = new G(1, 1, 1),
  eS = new G(),
  eE = new G(),
  eT = new G(),
  eb = new e_(),
  eA = new H();
class ew {
  constructor(e = 0, t = 0, n = 0, i = ew.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    let i = e.elements,
      r = i[0],
      a = i[4],
      s = i[8],
      o = i[1],
      l = i[5],
      h = i[9],
      c = i[2],
      u = i[6],
      d = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(g(s, -1, 1))),
          0.9999999 > Math.abs(s)
            ? ((this._x = Math.atan2(-h, d)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-g(h, -1, 1))),
          0.9999999 > Math.abs(h)
            ? ((this._y = Math.atan2(s, d)), (this._z = Math.atan2(o, l)))
            : ((this._y = Math.atan2(-c, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(g(u, -1, 1))),
          0.9999999 > Math.abs(u)
            ? ((this._y = Math.atan2(-c, d)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(o, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-g(c, -1, 1))),
          0.9999999 > Math.abs(c)
            ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(g(o, -1, 1))),
          0.9999999 > Math.abs(o)
            ? ((this._x = Math.atan2(-h, l)), (this._y = Math.atan2(-c, r)))
            : ((this._x = 0), (this._y = Math.atan2(s, d)));
        break;
      case "XZY":
        (this._z = Math.asin(-g(a, -1, 1))),
          0.9999999 > Math.abs(a)
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(s, r)))
            : ((this._x = Math.atan2(-h, d)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), !0 === n && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      eb.makeRotationFromQuaternion(e), this.setFromRotationMatrix(eb, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return eA.setFromEuler(this), this.setFromQuaternion(eA, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      void 0 !== e[3] && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ew.DEFAULT_ORDER = "XYZ";
class eR {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) != 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) != 0;
  }
}
let eC = 0;
const eP = new G(),
  eL = new H(),
  eU = new e_(),
  eN = new G(),
  eD = new G(),
  eI = new G(),
  eO = new H(),
  eF = new G(1, 0, 0),
  eB = new G(0, 1, 0),
  ez = new G(0, 0, 1),
  eV = { type: "added" },
  eH = { type: "removed" },
  eG = { type: "childadded", child: null },
  ek = { type: "childremoved", child: null };
class eW extends u {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: eC++ }),
      (this.uuid = m()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = eW.DEFAULT_UP.clone());
    let e = new G(),
      t = new ew(),
      n = new H(),
      i = new G(1, 1, 1);
    t._onChange(function () {
      n.setFromEuler(t, !1);
    }),
      n._onChange(function () {
        t.setFromQuaternion(n, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new e_() },
        normalMatrix: { value: new y() },
      }),
      (this.matrix = new e_()),
      (this.matrixWorld = new e_()),
      (this.matrixAutoUpdate = eW.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = eW.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new eR()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return eL.setFromAxisAngle(e, t), this.quaternion.multiply(eL), this;
  }
  rotateOnWorldAxis(e, t) {
    return eL.setFromAxisAngle(e, t), this.quaternion.premultiply(eL), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(eF, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(eB, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ez, e);
  }
  translateOnAxis(e, t) {
    return (
      eP.copy(e).applyQuaternion(this.quaternion),
      this.position.add(eP.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(eF, e);
  }
  translateY(e) {
    return this.translateOnAxis(eB, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ez, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(eU.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? eN.copy(e) : eN.set(e, t, n);
    let i = this.parent;
    this.updateWorldMatrix(!0, !1),
      eD.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? eU.lookAt(eD, eN, this.up)
        : eU.lookAt(eN, eD, this.up),
      this.quaternion.setFromRotationMatrix(eU),
      i &&
        (eU.extractRotation(i.matrixWorld),
        eL.setFromRotationMatrix(eU),
        this.quaternion.premultiply(eL.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return (
      e === this
        ? console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            e
          )
        : e && e.isObject3D
        ? (e.removeFromParent(),
          (e.parent = this),
          this.children.push(e),
          e.dispatchEvent(eV),
          (eG.child = e),
          this.dispatchEvent(eG),
          (eG.child = null))
        : console.error(
            "THREE.Object3D.add: object not an instance of THREE.Object3D.",
            e
          ),
      this
    );
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
      return this;
    }
    let t = this.children.indexOf(e);
    return (
      -1 !== t &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(eH),
        (ek.child = e),
        this.dispatchEvent(ek),
        (ek.child = null)),
      this
    );
  }
  removeFromParent() {
    let e = this.parent;
    return null !== e && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      eU.copy(this.matrixWorld).invert(),
      null !== e.parent &&
        (e.parent.updateWorldMatrix(!0, !1), eU.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(eU),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(eV),
      (eG.child = e),
      this.dispatchEvent(eG),
      (eG.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      let i = this.children[n].getObjectByProperty(e, t);
      if (void 0 !== i) return i;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    let i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(eD, e, eI), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(eD, eO, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    let t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    let t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (!1 === this.visible) return;
    e(this);
    let t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    let t = this.parent;
    null !== t && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (!0 === this.matrixWorldAutoUpdate &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    let t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    let n = this.parent;
    if (
      (!0 === e && null !== n && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      !0 === this.matrixWorldAutoUpdate &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      !0 === t)
    ) {
      let e = this.children;
      for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e,
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    let i = {};
    function r(t, n) {
      return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid;
    }
    if (
      ((i.uuid = this.uuid),
      (i.type = this.type),
      "" !== this.name && (i.name = this.name),
      !0 === this.castShadow && (i.castShadow = !0),
      !0 === this.receiveShadow && (i.receiveShadow = !0),
      !1 === this.visible && (i.visible = !1),
      !1 === this.frustumCulled && (i.frustumCulled = !1),
      0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = "BatchedMesh"),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.visibility = this._visibility),
        (i.active = this._active),
        (i.bounds = this._bounds.map((e) => ({
          boxInitialized: e.boxInitialized,
          boxMin: e.box.min.toArray(),
          boxMax: e.box.max.toArray(),
          sphereInitialized: e.sphereInitialized,
          sphereRadius: e.sphere.radius,
          sphereCenter: e.sphere.center.toArray(),
        }))),
        (i.maxInstanceCount = this._maxInstanceCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.geometryCount = this._geometryCount),
        (i.matricesTexture = this._matricesTexture.toJSON(e)),
        null !== this._colorsTexture &&
          (i.colorsTexture = this._colorsTexture.toJSON(e)),
        null !== this.boundingSphere &&
          (i.boundingSphere = {
            center: i.boundingSphere.center.toArray(),
            radius: i.boundingSphere.radius,
          }),
        null !== this.boundingBox &&
          (i.boundingBox = {
            min: i.boundingBox.min.toArray(),
            max: i.boundingBox.max.toArray(),
          })),
      this.isScene)
    )
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          !0 !== this.environment.isRenderTargetTexture &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      let t = this.geometry.parameters;
      if (void 0 !== t && void 0 !== t.shapes) {
        let n = t.shapes;
        if (Array.isArray(n))
          for (let t = 0, i = n.length; t < i; t++) {
            let i = n[t];
            r(e.shapes, i);
          }
        else r(e.shapes, n);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    ) {
      if (Array.isArray(this.material)) {
        let t = [];
        for (let n = 0, i = this.material.length; n < i; n++)
          t.push(r(e.materials, this.material[n]));
        i.material = t;
      } else i.material = r(e.materials, this.material);
    }
    if (this.children.length > 0) {
      i.children = [];
      for (let t = 0; t < this.children.length; t++)
        i.children.push(this.children[t].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let t = 0; t < this.animations.length; t++) {
        let n = this.animations[t];
        i.animations.push(r(e.animations, n));
      }
    }
    if (t) {
      let t = a(e.geometries),
        i = a(e.materials),
        r = a(e.textures),
        s = a(e.images),
        o = a(e.shapes),
        l = a(e.skeletons),
        h = a(e.animations),
        c = a(e.nodes);
      t.length > 0 && (n.geometries = t),
        i.length > 0 && (n.materials = i),
        r.length > 0 && (n.textures = r),
        s.length > 0 && (n.images = s),
        o.length > 0 && (n.shapes = o),
        l.length > 0 && (n.skeletons = l),
        h.length > 0 && (n.animations = h),
        c.length > 0 && (n.nodes = c);
    }
    return (n.object = i), n;
    function a(e) {
      let t = [];
      for (let n in e) {
        let i = e[n];
        delete i.metadata, t.push(i);
      }
      return t;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      !0 === t)
    )
      for (let t = 0; t < e.children.length; t++) {
        let n = e.children[t];
        this.add(n.clone());
      }
    return this;
  }
}
(eW.DEFAULT_UP = new G(0, 1, 0)),
  (eW.DEFAULT_MATRIX_AUTO_UPDATE = !0),
  (eW.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
const eX = new G(),
  ej = new G(),
  eq = new G(),
  eY = new G(),
  eJ = new G(),
  eZ = new G(),
  eK = new G(),
  e$ = new G(),
  eQ = new G(),
  e0 = new G(),
  e1 = new F(),
  e2 = new F(),
  e3 = new F();
class e4 {
  constructor(e = new G(), t = new G(), n = new G()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), eX.subVectors(e, t), i.cross(eX);
    let r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    eX.subVectors(i, t), ej.subVectors(n, t), eq.subVectors(e, t);
    let a = eX.dot(eX),
      s = eX.dot(ej),
      o = eX.dot(eq),
      l = ej.dot(ej),
      h = ej.dot(eq),
      c = a * l - s * s;
    if (0 === c) return r.set(0, 0, 0), null;
    let u = 1 / c,
      d = (l * o - s * h) * u,
      p = (a * h - s * o) * u;
    return r.set(1 - d - p, p, d);
  }
  static containsPoint(e, t, n, i) {
    return (
      null !== this.getBarycoord(e, t, n, i, eY) &&
      eY.x >= 0 &&
      eY.y >= 0 &&
      eY.x + eY.y <= 1
    );
  }
  static getInterpolation(e, t, n, i, r, a, s, o) {
    return null === this.getBarycoord(e, t, n, i, eY)
      ? ((o.x = 0),
        (o.y = 0),
        "z" in o && (o.z = 0),
        "w" in o && (o.w = 0),
        null)
      : (o.setScalar(0),
        o.addScaledVector(r, eY.x),
        o.addScaledVector(a, eY.y),
        o.addScaledVector(s, eY.z),
        o);
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    return (
      e1.setScalar(0),
      e2.setScalar(0),
      e3.setScalar(0),
      e1.fromBufferAttribute(e, t),
      e2.fromBufferAttribute(e, n),
      e3.fromBufferAttribute(e, i),
      a.setScalar(0),
      a.addScaledVector(e1, r.x),
      a.addScaledVector(e2, r.y),
      a.addScaledVector(e3, r.z),
      a
    );
  }
  static isFrontFacing(e, t, n, i) {
    return eX.subVectors(n, t), ej.subVectors(e, t), 0 > eX.cross(ej).dot(i);
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      eX.subVectors(this.c, this.b),
      ej.subVectors(this.a, this.b),
      0.5 * eX.cross(ej).length()
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return e4.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return e4.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return e4.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return e4.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return e4.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    let n, i;
    let r = this.a,
      a = this.b,
      s = this.c;
    eJ.subVectors(a, r), eZ.subVectors(s, r), e$.subVectors(e, r);
    let o = eJ.dot(e$),
      l = eZ.dot(e$);
    if (o <= 0 && l <= 0) return t.copy(r);
    eQ.subVectors(e, a);
    let h = eJ.dot(eQ),
      c = eZ.dot(eQ);
    if (h >= 0 && c <= h) return t.copy(a);
    let u = o * c - h * l;
    if (u <= 0 && o >= 0 && h <= 0)
      return (n = o / (o - h)), t.copy(r).addScaledVector(eJ, n);
    e0.subVectors(e, s);
    let d = eJ.dot(e0),
      p = eZ.dot(e0);
    if (p >= 0 && d <= p) return t.copy(s);
    let f = d * l - o * p;
    if (f <= 0 && l >= 0 && p <= 0)
      return (i = l / (l - p)), t.copy(r).addScaledVector(eZ, i);
    let m = h * p - d * c;
    if (m <= 0 && c - h >= 0 && d - p >= 0)
      return (
        eK.subVectors(s, a),
        (i = (c - h) / (c - h + (d - p))),
        t.copy(a).addScaledVector(eK, i)
      );
    let g = 1 / (m + f + u);
    return (
      (n = f * g),
      (i = u * g),
      t.copy(r).addScaledVector(eJ, n).addScaledVector(eZ, i)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const e5 = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0,
    blanchedalmond: 0xffebcd,
    blue: 255,
    blueviolet: 9055202,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 6591981,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 25600,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 9109504,
    darksalmon: 0xe9967a,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 0xff1493,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 2263842,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 8421504,
    green: 32768,
    greenyellow: 0xadff2f,
    grey: 8421504,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 4915330,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 8190976,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 9498256,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 65280,
    limegreen: 3329330,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 0xba55d3,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 0xc71585,
    midnightblue: 1644912,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 128,
    oldlace: 0xfdf5e6,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 3050327,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 0xfffafa,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 0xd2b48c,
    teal: 32896,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 4251856,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32,
  },
  e6 = { h: 0, s: 0, l: 0 },
  e8 = { h: 0, s: 0, l: 0 };
function e9(e, t, n) {
  return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
    ? e + (t - e) * 6 * n
    : n < 0.5
    ? t
    : n < 2 / 3
    ? e + (t - e) * 6 * (2 / 3 - n)
    : e;
}
class e7 {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    return (
      void 0 === t && void 0 === n
        ? e && e.isColor
          ? this.copy(e)
          : "number" == typeof e
          ? this.setHex(e)
          : "string" == typeof e && this.setStyle(e)
        : this.setRGB(e, t, n),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = s) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (255 & e) / 255),
      R.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = R.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      R.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = R.workingColorSpace) {
    if (((e = ((e % 1) + 1) % 1), (t = g(t, 0, 1)), (n = g(n, 0, 1)), 0 === t))
      this.r = this.g = this.b = n;
    else {
      let i = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        r = 2 * n - i;
      (this.r = e9(r, i, e + 1 / 3)),
        (this.g = e9(r, i, e)),
        (this.b = e9(r, i, e - 1 / 3));
    }
    return R.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = s) {
    let n;
    function i(t) {
      void 0 !== t &&
        1 > parseFloat(t) &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    if ((n = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      let a = n[1],
        s = n[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              i(r[4]),
              this.setRGB(
                Math.min(255, parseInt(r[1], 10)) / 255,
                Math.min(255, parseInt(r[2], 10)) / 255,
                Math.min(255, parseInt(r[3], 10)) / 255,
                t
              )
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              i(r[4]),
              this.setRGB(
                Math.min(100, parseInt(r[1], 10)) / 100,
                Math.min(100, parseInt(r[2], 10)) / 100,
                Math.min(100, parseInt(r[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              i(r[4]),
              this.setHSL(
                parseFloat(r[1]) / 360,
                parseFloat(r[2]) / 100,
                parseFloat(r[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      let i = n[1],
        r = i.length;
      if (3 === r)
        return this.setRGB(
          parseInt(i.charAt(0), 16) / 15,
          parseInt(i.charAt(1), 16) / 15,
          parseInt(i.charAt(2), 16) / 15,
          t
        );
      if (6 === r) return this.setHex(parseInt(i, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = s) {
    let n = e5[e.toLowerCase()];
    return (
      void 0 !== n
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = C(e.r)), (this.g = C(e.g)), (this.b = C(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = P(e.r)), (this.g = P(e.g)), (this.b = P(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = s) {
    return (
      R.fromWorkingColorSpace(te.copy(this), e),
      65536 * Math.round(g(255 * te.r, 0, 255)) +
        256 * Math.round(g(255 * te.g, 0, 255)) +
        Math.round(g(255 * te.b, 0, 255))
    );
  }
  getHexString(e = s) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = R.workingColorSpace) {
    let n, i;
    R.fromWorkingColorSpace(te.copy(this), t);
    let r = te.r,
      a = te.g,
      s = te.b,
      o = Math.max(r, a, s),
      l = Math.min(r, a, s),
      h = (l + o) / 2;
    if (l === o) (n = 0), (i = 0);
    else {
      let e = o - l;
      switch (((i = h <= 0.5 ? e / (o + l) : e / (2 - o - l)), o)) {
        case r:
          n = (a - s) / e + (a < s ? 6 : 0);
          break;
        case a:
          n = (s - r) / e + 2;
          break;
        case s:
          n = (r - a) / e + 4;
      }
      n /= 6;
    }
    return (e.h = n), (e.s = i), (e.l = h), e;
  }
  getRGB(e, t = R.workingColorSpace) {
    return (
      R.fromWorkingColorSpace(te.copy(this), t),
      (e.r = te.r),
      (e.g = te.g),
      (e.b = te.b),
      e
    );
  }
  getStyle(e = s) {
    R.fromWorkingColorSpace(te.copy(this), e);
    let t = te.r,
      n = te.g,
      i = te.b;
    return e !== s
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(255 * t)},${Math.round(255 * n)},${Math.round(
          255 * i
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(e6), this.setHSL(e6.h + e, e6.s + t, e6.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(e6), e.getHSL(e8);
    let n = (1 - t) * e6.h + t * e8.h,
      i = (1 - t) * e6.s + t * e8.s,
      r = (1 - t) * e6.l + t * e8.l;
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    let t = this.r,
      n = this.g,
      i = this.b,
      r = e.elements;
    return (
      (this.r = r[0] * t + r[3] * n + r[6] * i),
      (this.g = r[1] * t + r[4] * n + r[7] * i),
      (this.b = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const te = new e7();
e7.NAMES = e5;
let tt = 0;
class tn extends u {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: tt++ }),
      (this.uuid = m()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = 100),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new e7(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = 7680),
      (this.stencilZFail = 7680),
      (this.stencilZPass = 7680),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (void 0 !== e)
      for (let t in e) {
        let n = e[t];
        if (void 0 === n) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        let i = this[t];
        if (void 0 === i) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e;
    t && (e = { textures: {}, images: {} });
    let n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function i(e) {
      let t = [];
      for (let n in e) {
        let i = e[n];
        delete i.metadata, t.push(i);
      }
      return t;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      void 0 !== this.roughness && (n.roughness = this.roughness),
      void 0 !== this.metalness && (n.metalness = this.metalness),
      void 0 !== this.sheen && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      void 0 !== this.sheenRoughness &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      void 0 !== this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      void 0 !== this.specularIntensity &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      void 0 !== this.shininess && (n.shininess = this.shininess),
      void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      void 0 !== this.dispersion && (n.dispersion = this.dispersion),
      void 0 !== this.iridescence && (n.iridescence = this.iridescence),
      void 0 !== this.iridescenceIOR &&
        (n.iridescenceIOR = this.iridescenceIOR),
      void 0 !== this.iridescenceThicknessRange &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy),
      void 0 !== this.anisotropyRotation &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        void 0 !== this.combine && (n.combine = this.combine)),
      void 0 !== this.envMapRotation &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      void 0 !== this.envMapIntensity &&
        (n.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      void 0 !== this.transmission && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      void 0 !== this.thickness && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      void 0 !== this.attenuationDistance &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      void 0 !== this.attenuationColor &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      void 0 !== this.size && (n.size = this.size),
      null !== this.shadowSide && (n.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (n.sizeAttenuation = this.sizeAttenuation),
      1 !== this.blending && (n.blending = this.blending),
      0 !== this.side && (n.side = this.side),
      !0 === this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      !0 === this.transparent && (n.transparent = !0),
      204 !== this.blendSrc && (n.blendSrc = this.blendSrc),
      205 !== this.blendDst && (n.blendDst = this.blendDst),
      100 !== this.blendEquation && (n.blendEquation = this.blendEquation),
      null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha),
      null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha),
      null !== this.blendEquationAlpha &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha),
      3 !== this.depthFunc && (n.depthFunc = this.depthFunc),
      !1 === this.depthTest && (n.depthTest = this.depthTest),
      !1 === this.depthWrite && (n.depthWrite = this.depthWrite),
      !1 === this.colorWrite && (n.colorWrite = this.colorWrite),
      255 !== this.stencilWriteMask &&
        (n.stencilWriteMask = this.stencilWriteMask),
      519 !== this.stencilFunc && (n.stencilFunc = this.stencilFunc),
      0 !== this.stencilRef && (n.stencilRef = this.stencilRef),
      255 !== this.stencilFuncMask &&
        (n.stencilFuncMask = this.stencilFuncMask),
      7680 !== this.stencilFail && (n.stencilFail = this.stencilFail),
      7680 !== this.stencilZFail && (n.stencilZFail = this.stencilZFail),
      7680 !== this.stencilZPass && (n.stencilZPass = this.stencilZPass),
      !0 === this.stencilWrite && (n.stencilWrite = this.stencilWrite),
      void 0 !== this.rotation &&
        0 !== this.rotation &&
        (n.rotation = this.rotation),
      !0 === this.polygonOffset && (n.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      void 0 !== this.linewidth &&
        1 !== this.linewidth &&
        (n.linewidth = this.linewidth),
      void 0 !== this.dashSize && (n.dashSize = this.dashSize),
      void 0 !== this.gapSize && (n.gapSize = this.gapSize),
      void 0 !== this.scale && (n.scale = this.scale),
      !0 === this.dithering && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      !0 === this.alphaHash && (n.alphaHash = !0),
      !0 === this.alphaToCoverage && (n.alphaToCoverage = !0),
      !0 === this.premultipliedAlpha && (n.premultipliedAlpha = !0),
      !0 === this.forceSinglePass && (n.forceSinglePass = !0),
      !0 === this.wireframe && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (n.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.flatShading && (n.flatShading = !0),
      !1 === this.visible && (n.visible = !1),
      !1 === this.toneMapped && (n.toneMapped = !1),
      !1 === this.fog && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t)
    ) {
      let t = i(e.textures),
        r = i(e.images);
      t.length > 0 && (n.textures = t), r.length > 0 && (n.images = r);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    let t = e.clippingPlanes,
      n = null;
    if (null !== t) {
      let e = t.length;
      n = Array(e);
      for (let i = 0; i !== e; ++i) n[i] = t[i].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class ti extends tn {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new e7(0xffffff)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new ew()),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const tr = new G(),
  ta = new x();
class ts {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.gpuType = 1015),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (2 === this.itemSize)
      for (let t = 0, n = this.count; t < n; t++)
        ta.fromBufferAttribute(this, t),
          ta.applyMatrix3(e),
          this.setXY(t, ta.x, ta.y);
    else if (3 === this.itemSize)
      for (let t = 0, n = this.count; t < n; t++)
        tr.fromBufferAttribute(this, t),
          tr.applyMatrix3(e),
          this.setXYZ(t, tr.x, tr.y, tr.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      tr.fromBufferAttribute(this, t),
        tr.applyMatrix4(e),
        this.setXYZ(t, tr.x, tr.y, tr.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      tr.fromBufferAttribute(this, t),
        tr.applyNormalMatrix(e),
        this.setXYZ(t, tr.x, tr.y, tr.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      tr.fromBufferAttribute(this, t),
        tr.transformDirection(e),
        this.setXYZ(t, tr.x, tr.y, tr.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = _(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = v(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = _(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = v(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = _(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = v(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = _(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = v(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = _(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = v(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = v(t, this.array)), (n = v(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = v(t, this.array)),
        (n = v(n, this.array)),
        (i = v(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = v(t, this.array)),
        (n = v(n, this.array)),
        (i = v(i, this.array)),
        (r = v(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    let e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      "" !== this.name && (e.name = this.name),
      35044 !== this.usage && (e.usage = this.usage),
      e
    );
  }
}
class to extends ts {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class tl extends ts {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class th extends ts {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let tc = 0;
const tu = new e_(),
  td = new eW(),
  tp = new G(),
  tf = new X(),
  tm = new X(),
  tg = new G();
class t_ extends u {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: tc++ }),
      (this.uuid = m()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (S(e) ? tl : to)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e) {
    return (this.indirect = e), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return void 0 !== this.attributes[e];
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    let t = this.attributes.position;
    void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0));
    let n = this.attributes.normal;
    if (void 0 !== n) {
      let t = new y().getNormalMatrix(e);
      n.applyNormalMatrix(t), (n.needsUpdate = !0);
    }
    let i = this.attributes.tangent;
    return (
      void 0 !== i && (i.transformDirection(e), (i.needsUpdate = !0)),
      null !== this.boundingBox && this.computeBoundingBox(),
      null !== this.boundingSphere && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return tu.makeRotationFromQuaternion(e), this.applyMatrix4(tu), this;
  }
  rotateX(e) {
    return tu.makeRotationX(e), this.applyMatrix4(tu), this;
  }
  rotateY(e) {
    return tu.makeRotationY(e), this.applyMatrix4(tu), this;
  }
  rotateZ(e) {
    return tu.makeRotationZ(e), this.applyMatrix4(tu), this;
  }
  translate(e, t, n) {
    return tu.makeTranslation(e, t, n), this.applyMatrix4(tu), this;
  }
  scale(e, t, n) {
    return tu.makeScale(e, t, n), this.applyMatrix4(tu), this;
  }
  lookAt(e) {
    return td.lookAt(e), td.updateMatrix(), this.applyMatrix4(td.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(tp).negate(),
      this.translate(tp.x, tp.y, tp.z),
      this
    );
  }
  setFromPoints(e) {
    let t = this.getAttribute("position");
    if (void 0 === t) {
      let t = [];
      for (let n = 0, i = e.length; n < i; n++) {
        let i = e[n];
        t.push(i.x, i.y, i.z || 0);
      }
      this.setAttribute("position", new th(t, 3));
    } else {
      let n = Math.min(e.length, t.count);
      for (let i = 0; i < n; i++) {
        let n = e[i];
        t.setXYZ(i, n.x, n.y, n.z || 0);
      }
      e.length > t.count &&
        console.warn(
          "THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."
        ),
        (t.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new X());
    let e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(
          new G(-1 / 0, -1 / 0, -1 / 0),
          new G(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (void 0 !== e) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let e = 0, n = t.length; e < n; e++) {
          let n = t[e];
          tf.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (tg.addVectors(this.boundingBox.min, tf.min),
                this.boundingBox.expandByPoint(tg),
                tg.addVectors(this.boundingBox.max, tf.max),
                this.boundingBox.expandByPoint(tg))
              : (this.boundingBox.expandByPoint(tf.min),
                this.boundingBox.expandByPoint(tf.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new eh());
    let e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new G(), 1 / 0);
      return;
    }
    if (e) {
      let n = this.boundingSphere.center;
      if ((tf.setFromBufferAttribute(e), t))
        for (let e = 0, n = t.length; e < n; e++) {
          let n = t[e];
          tm.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (tg.addVectors(tf.min, tm.min),
                tf.expandByPoint(tg),
                tg.addVectors(tf.max, tm.max),
                tf.expandByPoint(tg))
              : (tf.expandByPoint(tm.min), tf.expandByPoint(tm.max));
        }
      tf.getCenter(n);
      let i = 0;
      for (let t = 0, r = e.count; t < r; t++)
        tg.fromBufferAttribute(e, t),
          (i = Math.max(i, n.distanceToSquared(tg)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          let a = t[r],
            s = this.morphTargetsRelative;
          for (let t = 0, r = a.count; t < r; t++)
            tg.fromBufferAttribute(a, t),
              s && (tp.fromBufferAttribute(e, t), tg.add(tp)),
              (i = Math.max(i, n.distanceToSquared(tg)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    let e = this.index,
      t = this.attributes;
    if (
      null === e ||
      void 0 === t.position ||
      void 0 === t.normal ||
      void 0 === t.uv
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    let n = t.position,
      i = t.normal,
      r = t.uv;
    !1 === this.hasAttribute("tangent") &&
      this.setAttribute("tangent", new ts(new Float32Array(4 * n.count), 4));
    let a = this.getAttribute("tangent"),
      s = [],
      o = [];
    for (let e = 0; e < n.count; e++) (s[e] = new G()), (o[e] = new G());
    let l = new G(),
      h = new G(),
      c = new G(),
      u = new x(),
      d = new x(),
      p = new x(),
      f = new G(),
      m = new G(),
      g = this.groups;
    0 === g.length && (g = [{ start: 0, count: e.count }]);
    for (let t = 0, i = g.length; t < i; ++t) {
      let i = g[t],
        a = i.start,
        _ = i.count;
      for (let t = a, i = a + _; t < i; t += 3)
        !(function (e, t, i) {
          l.fromBufferAttribute(n, e),
            h.fromBufferAttribute(n, t),
            c.fromBufferAttribute(n, i),
            u.fromBufferAttribute(r, e),
            d.fromBufferAttribute(r, t),
            p.fromBufferAttribute(r, i),
            h.sub(l),
            c.sub(l),
            d.sub(u),
            p.sub(u);
          let a = 1 / (d.x * p.y - p.x * d.y);
          isFinite(a) &&
            (f
              .copy(h)
              .multiplyScalar(p.y)
              .addScaledVector(c, -d.y)
              .multiplyScalar(a),
            m
              .copy(c)
              .multiplyScalar(d.x)
              .addScaledVector(h, -p.x)
              .multiplyScalar(a),
            s[e].add(f),
            s[t].add(f),
            s[i].add(f),
            o[e].add(m),
            o[t].add(m),
            o[i].add(m));
        })(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
    }
    let _ = new G(),
      v = new G(),
      y = new G(),
      M = new G();
    function S(e) {
      y.fromBufferAttribute(i, e), M.copy(y);
      let t = s[e];
      _.copy(t),
        _.sub(y.multiplyScalar(y.dot(t))).normalize(),
        v.crossVectors(M, t);
      let n = v.dot(o[e]);
      a.setXYZW(e, _.x, _.y, _.z, n < 0 ? -1 : 1);
    }
    for (let t = 0, n = g.length; t < n; ++t) {
      let n = g[t],
        i = n.start,
        r = n.count;
      for (let t = i, n = i + r; t < n; t += 3)
        S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2));
    }
  }
  computeVertexNormals() {
    let e = this.index,
      t = this.getAttribute("position");
    if (void 0 !== t) {
      let n = this.getAttribute("normal");
      if (void 0 === n)
        (n = new ts(new Float32Array(3 * t.count), 3)),
          this.setAttribute("normal", n);
      else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
      let i = new G(),
        r = new G(),
        a = new G(),
        s = new G(),
        o = new G(),
        l = new G(),
        h = new G(),
        c = new G();
      if (e)
        for (let u = 0, d = e.count; u < d; u += 3) {
          let d = e.getX(u + 0),
            p = e.getX(u + 1),
            f = e.getX(u + 2);
          i.fromBufferAttribute(t, d),
            r.fromBufferAttribute(t, p),
            a.fromBufferAttribute(t, f),
            h.subVectors(a, r),
            c.subVectors(i, r),
            h.cross(c),
            s.fromBufferAttribute(n, d),
            o.fromBufferAttribute(n, p),
            l.fromBufferAttribute(n, f),
            s.add(h),
            o.add(h),
            l.add(h),
            n.setXYZ(d, s.x, s.y, s.z),
            n.setXYZ(p, o.x, o.y, o.z),
            n.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let e = 0, s = t.count; e < s; e += 3)
          i.fromBufferAttribute(t, e + 0),
            r.fromBufferAttribute(t, e + 1),
            a.fromBufferAttribute(t, e + 2),
            h.subVectors(a, r),
            c.subVectors(i, r),
            h.cross(c),
            n.setXYZ(e + 0, h.x, h.y, h.z),
            n.setXYZ(e + 1, h.x, h.y, h.z),
            n.setXYZ(e + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    let e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      tg.fromBufferAttribute(e, t),
        tg.normalize(),
        e.setXYZ(t, tg.x, tg.y, tg.z);
  }
  toNonIndexed() {
    function e(e, t) {
      let n = e.array,
        i = e.itemSize,
        r = e.normalized,
        a = new n.constructor(t.length * i),
        s = 0,
        o = 0;
      for (let r = 0, l = t.length; r < l; r++) {
        s = e.isInterleavedBufferAttribute
          ? t[r] * e.data.stride + e.offset
          : t[r] * i;
        for (let e = 0; e < i; e++) a[o++] = n[s++];
      }
      return new ts(a, i, r);
    }
    if (null === this.index)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    let t = new t_(),
      n = this.index.array,
      i = this.attributes;
    for (let r in i) {
      let a = e(i[r], n);
      t.setAttribute(r, a);
    }
    let r = this.morphAttributes;
    for (let i in r) {
      let a = [],
        s = r[i];
      for (let t = 0, i = s.length; t < i; t++) {
        let i = e(s[t], n);
        a.push(i);
      }
      t.morphAttributes[i] = a;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    let a = this.groups;
    for (let e = 0, n = a.length; e < n; e++) {
      let n = a[e];
      t.addGroup(n.start, n.count, n.materialIndex);
    }
    return t;
  }
  toJSON() {
    let e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      "" !== this.name && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      void 0 !== this.parameters)
    ) {
      let t = this.parameters;
      for (let n in t) void 0 !== t[n] && (e[n] = t[n]);
      return e;
    }
    e.data = { attributes: {} };
    let t = this.index;
    null !== t &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    let n = this.attributes;
    for (let t in n) {
      let i = n[t];
      e.data.attributes[t] = i.toJSON(e.data);
    }
    let i = {},
      r = !1;
    for (let t in this.morphAttributes) {
      let n = this.morphAttributes[t],
        a = [];
      for (let t = 0, i = n.length; t < i; t++) {
        let i = n[t];
        a.push(i.toJSON(e.data));
      }
      a.length > 0 && ((i[t] = a), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    let a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    let s = this.boundingSphere;
    return (
      null !== s &&
        (e.data.boundingSphere = {
          center: s.center.toArray(),
          radius: s.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    let t = {};
    this.name = e.name;
    let n = e.index;
    null !== n && this.setIndex(n.clone(t));
    let i = e.attributes;
    for (let e in i) {
      let n = i[e];
      this.setAttribute(e, n.clone(t));
    }
    let r = e.morphAttributes;
    for (let e in r) {
      let n = [],
        i = r[e];
      for (let e = 0, r = i.length; e < r; e++) n.push(i[e].clone(t));
      this.morphAttributes[e] = n;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    let a = e.groups;
    for (let e = 0, t = a.length; e < t; e++) {
      let t = a[e];
      this.addGroup(t.start, t.count, t.materialIndex);
    }
    let s = e.boundingBox;
    null !== s && (this.boundingBox = s.clone());
    let o = e.boundingSphere;
    return (
      null !== o && (this.boundingSphere = o.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const tv = new e_(),
  tx = new (class {
    constructor(e = new G(), t = new G(0, 0, -1)) {
      (this.origin = e), (this.direction = t);
    }
    set(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    }
    copy(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    }
    at(e, t) {
      return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this;
    }
    recast(e) {
      return this.origin.copy(this.at(e, ec)), this;
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      let n = t.dot(this.direction);
      return n < 0
        ? t.copy(this.origin)
        : t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      let t = ec.subVectors(e, this.origin).dot(this.direction);
      return t < 0
        ? this.origin.distanceToSquared(e)
        : (ec.copy(this.origin).addScaledVector(this.direction, t),
          ec.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
      let r, a, s, o;
      eu.copy(e).add(t).multiplyScalar(0.5),
        ed.copy(t).sub(e).normalize(),
        ep.copy(this.origin).sub(eu);
      let l = 0.5 * e.distanceTo(t),
        h = -this.direction.dot(ed),
        c = ep.dot(this.direction),
        u = -ep.dot(ed),
        d = ep.lengthSq(),
        p = Math.abs(1 - h * h);
      if (p > 0) {
        if (((r = h * u - c), (a = h * c - u), (o = l * p), r >= 0)) {
          if (a >= -o) {
            if (a <= o) {
              let e = 1 / p;
              (r *= e),
                (a *= e),
                (s = r * (r + h * a + 2 * c) + a * (h * r + a + 2 * u) + d);
            } else
              s =
                -(r = Math.max(0, -(h * (a = l) + c))) * r +
                a * (a + 2 * u) +
                d;
          } else
            s =
              -(r = Math.max(0, -(h * (a = -l) + c))) * r + a * (a + 2 * u) + d;
        } else
          a <= -o
            ? ((a =
                (r = Math.max(0, -(-h * l + c))) > 0
                  ? -l
                  : Math.min(Math.max(-l, -u), l)),
              (s = -r * r + a * (a + 2 * u) + d))
            : a <= o
            ? ((r = 0),
              (s = (a = Math.min(Math.max(-l, -u), l)) * (a + 2 * u) + d))
            : ((a =
                (r = Math.max(0, -(h * l + c))) > 0
                  ? l
                  : Math.min(Math.max(-l, -u), l)),
              (s = -r * r + a * (a + 2 * u) + d));
      } else
        (a = h > 0 ? -l : l),
          (s = -(r = Math.max(0, -(h * a + c))) * r + a * (a + 2 * u) + d);
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, r),
        i && i.copy(eu).addScaledVector(ed, a),
        s
      );
    }
    intersectSphere(e, t) {
      ec.subVectors(e.center, this.origin);
      let n = ec.dot(this.direction),
        i = ec.dot(ec) - n * n,
        r = e.radius * e.radius;
      if (i > r) return null;
      let a = Math.sqrt(r - i),
        s = n - a,
        o = n + a;
      return o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t);
    }
    intersectsSphere(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      let t = e.normal.dot(this.direction);
      if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
      let n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      let n = this.distanceToPlane(e);
      return null === n ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      let t = e.distanceToPoint(this.origin);
      return !!(0 === t || e.normal.dot(this.direction) * t < 0);
    }
    intersectBox(e, t) {
      let n, i, r, a, s, o;
      let l = 1 / this.direction.x,
        h = 1 / this.direction.y,
        c = 1 / this.direction.z,
        u = this.origin;
      return (l >= 0
        ? ((n = (e.min.x - u.x) * l), (i = (e.max.x - u.x) * l))
        : ((n = (e.max.x - u.x) * l), (i = (e.min.x - u.x) * l)),
      h >= 0
        ? ((r = (e.min.y - u.y) * h), (a = (e.max.y - u.y) * h))
        : ((r = (e.max.y - u.y) * h), (a = (e.min.y - u.y) * h)),
      n > a || r > i)
        ? null
        : ((r > n || isNaN(n)) && (n = r),
          (a < i || isNaN(i)) && (i = a),
          c >= 0
            ? ((s = (e.min.z - u.z) * c), (o = (e.max.z - u.z) * c))
            : ((s = (e.max.z - u.z) * c), (o = (e.min.z - u.z) * c)),
          n > o || s > i)
        ? null
        : ((s > n || n != n) && (n = s), (o < i || i != i) && (i = o), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t);
    }
    intersectsBox(e) {
      return null !== this.intersectBox(e, ec);
    }
    intersectTriangle(e, t, n, i, r) {
      let a;
      ef.subVectors(t, e), em.subVectors(n, e), eg.crossVectors(ef, em);
      let s = this.direction.dot(eg);
      if (s > 0) {
        if (i) return null;
        a = 1;
      } else {
        if (!(s < 0)) return null;
        (a = -1), (s = -s);
      }
      ep.subVectors(this.origin, e);
      let o = a * this.direction.dot(em.crossVectors(ep, em));
      if (o < 0) return null;
      let l = a * this.direction.dot(ef.cross(ep));
      if (l < 0 || o + l > s) return null;
      let h = -a * ep.dot(eg);
      return h < 0 ? null : this.at(h / s, r);
    }
    applyMatrix4(e) {
      return (
        this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
      );
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  })(),
  ty = new eh(),
  tM = new G(),
  tS = new G(),
  tE = new G(),
  tT = new G(),
  tb = new G(),
  tA = new G(),
  tw = new G(),
  tR = new G();
class tC extends eW {
  constructor(e = new t_(), t = new ti()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      void 0 !== e.morphTargetInfluences &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      void 0 !== e.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes,
      t = Object.keys(e);
    if (t.length > 0) {
      let n = e[t[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let e = 0, t = n.length; e < t; e++) {
          let t = n[e].name || String(e);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[t] = e);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    let n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    let s = this.morphTargetInfluences;
    if (r && s) {
      tA.set(0, 0, 0);
      for (let n = 0, i = r.length; n < i; n++) {
        let i = s[n],
          o = r[n];
        0 !== i &&
          (tb.fromBufferAttribute(o, e),
          a ? tA.addScaledVector(tb, i) : tA.addScaledVector(tb.sub(t), i));
      }
      t.add(tA);
    }
    return t;
  }
  raycast(e, t) {
    let n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (void 0 !== i) {
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        ty.copy(n.boundingSphere),
        ty.applyMatrix4(r),
        tx.copy(e.ray).recast(e.near),
        (!1 === ty.containsPoint(tx.origin) &&
          (null === tx.intersectSphere(ty, tM) ||
            tx.origin.distanceToSquared(tM) > (e.far - e.near) ** 2)) ||
          (tv.copy(r).invert(),
          tx.copy(e.ray).applyMatrix4(tv),
          null !== n.boundingBox && !1 === tx.intersectsBox(n.boundingBox)))
      )
        return;
      this._computeIntersections(e, t, tx);
    }
  }
  _computeIntersections(e, t, n) {
    let i;
    let r = this.geometry,
      a = this.material,
      s = r.index,
      o = r.attributes.position,
      l = r.attributes.uv,
      h = r.attributes.uv1,
      c = r.attributes.normal,
      u = r.groups,
      d = r.drawRange;
    if (null !== s) {
      if (Array.isArray(a))
        for (let r = 0, o = u.length; r < o; r++) {
          let o = u[r],
            p = a[o.materialIndex],
            f = Math.max(o.start, d.start),
            m = Math.min(
              s.count,
              Math.min(o.start + o.count, d.start + d.count)
            );
          for (let r = f; r < m; r += 3)
            (i = tP(
              this,
              p,
              e,
              n,
              l,
              h,
              c,
              s.getX(r),
              s.getX(r + 1),
              s.getX(r + 2)
            )) &&
              ((i.faceIndex = Math.floor(r / 3)),
              (i.face.materialIndex = o.materialIndex),
              t.push(i));
        }
      else {
        let r = Math.max(0, d.start),
          o = Math.min(s.count, d.start + d.count);
        for (let u = r; u < o; u += 3)
          (i = tP(
            this,
            a,
            e,
            n,
            l,
            h,
            c,
            s.getX(u),
            s.getX(u + 1),
            s.getX(u + 2)
          )) && ((i.faceIndex = Math.floor(u / 3)), t.push(i));
      }
    } else if (void 0 !== o) {
      if (Array.isArray(a))
        for (let r = 0, s = u.length; r < s; r++) {
          let s = u[r],
            p = a[s.materialIndex],
            f = Math.max(s.start, d.start),
            m = Math.min(
              o.count,
              Math.min(s.start + s.count, d.start + d.count)
            );
          for (let r = f; r < m; r += 3)
            (i = tP(this, p, e, n, l, h, c, r, r + 1, r + 2)) &&
              ((i.faceIndex = Math.floor(r / 3)),
              (i.face.materialIndex = s.materialIndex),
              t.push(i));
        }
      else {
        let r = Math.max(0, d.start),
          s = Math.min(o.count, d.start + d.count);
        for (let o = r; o < s; o += 3)
          (i = tP(this, a, e, n, l, h, c, o, o + 1, o + 2)) &&
            ((i.faceIndex = Math.floor(o / 3)), t.push(i));
      }
    }
  }
}
function tP(e, t, n, i, r, a, s, o, l, h) {
  e.getVertexPosition(o, tS),
    e.getVertexPosition(l, tE),
    e.getVertexPosition(h, tT);
  let c = (function (e, t, n, i, r, a, s, o) {
    if (
      null ===
      (1 === t.side
        ? i.intersectTriangle(s, a, r, !0, o)
        : i.intersectTriangle(r, a, s, 0 === t.side, o))
    )
      return null;
    tR.copy(o), tR.applyMatrix4(e.matrixWorld);
    let l = n.ray.origin.distanceTo(tR);
    return l < n.near || l > n.far
      ? null
      : { distance: l, point: tR.clone(), object: e };
  })(e, t, n, i, tS, tE, tT, tw);
  if (c) {
    let e = new G();
    e4.getBarycoord(tw, tS, tE, tT, e),
      r && (c.uv = e4.getInterpolatedAttribute(r, o, l, h, e, new x())),
      a && (c.uv1 = e4.getInterpolatedAttribute(a, o, l, h, e, new x())),
      s &&
        ((c.normal = e4.getInterpolatedAttribute(s, o, l, h, e, new G())),
        c.normal.dot(i.direction) > 0 && c.normal.multiplyScalar(-1));
    let t = { a: o, b: l, c: h, normal: new G(), materialIndex: 0 };
    e4.getNormal(tS, tE, tT, t.normal), (c.face = t), (c.barycoord = e);
  }
  return c;
}
class tL extends t_ {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      });
    let s = this;
    (i = Math.floor(i)), (r = Math.floor(r));
    let o = [],
      l = [],
      h = [],
      c = [],
      u = 0,
      d = 0;
    function p(e, t, n, i, r, a, p, f, m, g, _) {
      let v = a / m,
        x = p / g,
        y = a / 2,
        M = p / 2,
        S = f / 2,
        E = m + 1,
        T = g + 1,
        b = 0,
        A = 0,
        w = new G();
      for (let a = 0; a < T; a++) {
        let s = a * x - M;
        for (let o = 0; o < E; o++) {
          let u = o * v - y;
          (w[e] = u * i),
            (w[t] = s * r),
            (w[n] = S),
            l.push(w.x, w.y, w.z),
            (w[e] = 0),
            (w[t] = 0),
            (w[n] = f > 0 ? 1 : -1),
            h.push(w.x, w.y, w.z),
            c.push(o / m),
            c.push(1 - a / g),
            (b += 1);
        }
      }
      for (let e = 0; e < g; e++)
        for (let t = 0; t < m; t++) {
          let n = u + t + E * e,
            i = u + t + E * (e + 1),
            r = u + (t + 1) + E * (e + 1),
            a = u + (t + 1) + E * e;
          o.push(n, i, a), o.push(i, r, a), (A += 6);
        }
      s.addGroup(d, A, _), (d += A), (u += b);
    }
    p("z", "y", "x", -1, -1, n, t, e, (a = Math.floor(a)), r, 0),
      p("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      p("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      p("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      p("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      p("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(o),
      this.setAttribute("position", new th(l, 3)),
      this.setAttribute("normal", new th(h, 3)),
      this.setAttribute("uv", new th(c, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new tL(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function tU(e) {
  let t = {};
  for (let n in e)
    for (let i in ((t[n] = {}), e[n])) {
      let r = e[n][i];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (t[n][i] = null))
          : (t[n][i] = r.clone())
        : Array.isArray(r)
        ? (t[n][i] = r.slice())
        : (t[n][i] = r);
    }
  return t;
}
function tN(e) {
  let t = {};
  for (let n = 0; n < e.length; n++) {
    let i = tU(e[n]);
    for (let e in i) t[e] = i[e];
  }
  return t;
}
function tD(e) {
  let t = e.getRenderTarget();
  return null === t
    ? e.outputColorSpace
    : !0 === t.isXRRenderTarget
    ? t.texture.colorSpace
    : R.workingColorSpace;
}
const tI = { clone: tU };
class tO extends tn {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader =
        "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
      (this.fragmentShader =
        "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      void 0 !== e && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = tU(e.uniforms)),
      (this.uniformsGroups = (function (e) {
        let t = [];
        for (let n = 0; n < e.length; n++) t.push(e[n].clone());
        return t;
      })(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    let t = super.toJSON(e);
    for (let n in ((t.glslVersion = this.glslVersion),
    (t.uniforms = {}),
    this.uniforms)) {
      let i = this.uniforms[n].value;
      i && i.isTexture
        ? (t.uniforms[n] = { type: "t", value: i.toJSON(e).uuid })
        : i && i.isColor
        ? (t.uniforms[n] = { type: "c", value: i.getHex() })
        : i && i.isVector2
        ? (t.uniforms[n] = { type: "v2", value: i.toArray() })
        : i && i.isVector3
        ? (t.uniforms[n] = { type: "v3", value: i.toArray() })
        : i && i.isVector4
        ? (t.uniforms[n] = { type: "v4", value: i.toArray() })
        : i && i.isMatrix3
        ? (t.uniforms[n] = { type: "m3", value: i.toArray() })
        : i && i.isMatrix4
        ? (t.uniforms[n] = { type: "m4", value: i.toArray() })
        : (t.uniforms[n] = { value: i });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    let n = {};
    for (let e in this.extensions) !0 === this.extensions[e] && (n[e] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class tF extends eW {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new e_()),
      (this.projectionMatrix = new e_()),
      (this.projectionMatrixInverse = new e_()),
      (this.coordinateSystem = 2e3);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const tB = new G(),
  tz = new x(),
  tV = new x();
class tH extends tF {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    let t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = 2 * f * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    let e = Math.tan(0.5 * p * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return 2 * f * Math.atan(Math.tan(0.5 * p * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    tB.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(tB.x, tB.y).multiplyScalar(-e / tB.z),
      tB.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(tB.x, tB.y).multiplyScalar(-e / tB.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, tz, tV), t.subVectors(tV, tz);
  }
  setViewOffset(e, t, n, i, r, a) {
    (this.aspect = e / t),
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e = this.near,
      t = (e * Math.tan(0.5 * p * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i,
      a = this.view;
    if (null !== this.view && this.view.enabled) {
      let e = a.fullWidth,
        s = a.fullHeight;
      (r += (a.offsetX * i) / e),
        (t -= (a.offsetY * n) / s),
        (i *= a.width / e),
        (n *= a.height / s);
    }
    let s = this.filmOffset;
    0 !== s && (r += (e * s) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + i,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
class tG extends eW {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    let i = new tH(-90, 1, e, t);
    (i.layers = this.layers), this.add(i);
    let r = new tH(-90, 1, e, t);
    (r.layers = this.layers), this.add(r);
    let a = new tH(-90, 1, e, t);
    (a.layers = this.layers), this.add(a);
    let s = new tH(-90, 1, e, t);
    (s.layers = this.layers), this.add(s);
    let o = new tH(-90, 1, e, t);
    (o.layers = this.layers), this.add(o);
    let l = new tH(-90, 1, e, t);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    let e = this.coordinateSystem,
      t = this.children.concat(),
      [n, i, r, a, s, o] = t;
    for (let e of t) this.remove(e);
    if (2e3 === e)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        s.up.set(0, 1, 0),
        s.lookAt(0, 0, 1),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, -1);
    else if (2001 === e)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        s.up.set(0, -1, 0),
        s.lookAt(0, 0, 1),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, -1);
    else
      throw Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (let e of t) this.add(e), e.updateMatrixWorld();
  }
  update(e, t) {
    null === this.parent && this.updateMatrixWorld();
    let { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    let [r, a, s, o, l, h] = this.children,
      c = e.getRenderTarget(),
      u = e.getActiveCubeFace(),
      d = e.getActiveMipmapLevel(),
      p = e.xr.enabled;
    e.xr.enabled = !1;
    let f = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, i),
      e.render(t, r),
      e.setRenderTarget(n, 1, i),
      e.render(t, a),
      e.setRenderTarget(n, 2, i),
      e.render(t, s),
      e.setRenderTarget(n, 3, i),
      e.render(t, o),
      e.setRenderTarget(n, 4, i),
      e.render(t, l),
      (n.texture.generateMipmaps = f),
      e.setRenderTarget(n, 5, i),
      e.render(t, h),
      e.setRenderTarget(c, u, d),
      (e.xr.enabled = p),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class tk extends O {
  constructor(e, t, n, i, r, a, s, o, l, h) {
    super(
      (e = void 0 !== e ? e : []),
      (t = void 0 !== t ? t : 301),
      n,
      i,
      r,
      a,
      s,
      o,
      l,
      h
    ),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class tW extends z {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    let n = { width: e, height: e, depth: 1 };
    (this.texture = new tk(
      [n, n, n, n, n, n],
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        void 0 !== t.generateMipmaps && t.generateMipmaps),
      (this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : 1006);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    let n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new tL(5, 5, 5),
      r = new tO({
        name: "CubemapFromEquirect",
        uniforms: tU(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: 1,
        blending: 0,
      });
    r.uniforms.tEquirect.value = t;
    let a = new tC(i, r),
      s = t.minFilter;
    return (
      1008 === t.minFilter && (t.minFilter = 1006),
      new tG(1, 10, this).update(e, a),
      (t.minFilter = s),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    let r = e.getRenderTarget();
    for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const tX = new G(),
  tj = new G(),
  tq = new y();
class tY {
  constructor(e = new G(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    let i = tX.subVectors(n, t).cross(tj.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    let e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    let n = e.delta(tX),
      i = this.normal.dot(n);
    if (0 === i)
      return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
    let r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    let t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    let n = t || tq.getNormalMatrix(e),
      i = this.coplanarPoint(tX).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const tJ = new eh(),
  tZ = new G();
class tK {
  constructor(
    e = new tY(),
    t = new tY(),
    n = new tY(),
    i = new tY(),
    r = new tY(),
    a = new tY()
  ) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    let s = this.planes;
    return (
      s[0].copy(e),
      s[1].copy(t),
      s[2].copy(n),
      s[3].copy(i),
      s[4].copy(r),
      s[5].copy(a),
      this
    );
  }
  copy(e) {
    let t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3) {
    let n = this.planes,
      i = e.elements,
      r = i[0],
      a = i[1],
      s = i[2],
      o = i[3],
      l = i[4],
      h = i[5],
      c = i[6],
      u = i[7],
      d = i[8],
      p = i[9],
      f = i[10],
      m = i[11],
      g = i[12],
      _ = i[13],
      v = i[14],
      x = i[15];
    if (
      (n[0].setComponents(o - r, u - l, m - d, x - g).normalize(),
      n[1].setComponents(o + r, u + l, m + d, x + g).normalize(),
      n[2].setComponents(o + a, u + h, m + p, x + _).normalize(),
      n[3].setComponents(o - a, u - h, m - p, x - _).normalize(),
      n[4].setComponents(o - s, u - c, m - f, x - v).normalize(),
      2e3 === t)
    )
      n[5].setComponents(o + s, u + c, m + f, x + v).normalize();
    else if (2001 === t) n[5].setComponents(s, c, f, v).normalize();
    else
      throw Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (void 0 !== e.boundingSphere)
      null === e.boundingSphere && e.computeBoundingSphere(),
        tJ.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      let t = e.geometry;
      null === t.boundingSphere && t.computeBoundingSphere(),
        tJ.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(tJ);
  }
  intersectsSprite(e) {
    return (
      tJ.center.set(0, 0, 0),
      (tJ.radius = 0.7071067811865476),
      tJ.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(tJ)
    );
  }
  intersectsSphere(e) {
    let t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    let t = this.planes;
    for (let n = 0; n < 6; n++) {
      let i = t[n];
      if (
        ((tZ.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (tZ.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (tZ.z = i.normal.z > 0 ? e.max.z : e.min.z),
        0 > i.distanceToPoint(tZ))
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    let t = this.planes;
    for (let n = 0; n < 6; n++) if (0 > t[n].distanceToPoint(e)) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class t$ extends eW {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
class tQ extends O {
  constructor(e, t, n, i, r, a, s, o, l, h = 1026) {
    if (1026 !== h && 1027 !== h)
      throw Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === n && 1026 === h && (n = 1014),
      void 0 === n && 1027 === h && (n = 1020),
      super(null, i, r, a, s, o, h, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = void 0 !== s ? s : 1003),
      (this.minFilter = void 0 !== o ? o : 1003),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      null !== this.compareFunction &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class t0 {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    let n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  getPoints(e = 5) {
    let t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    let t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
    return t;
  }
  getLength() {
    let e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    let t = [],
      n,
      i = this.getPoint(0),
      r = 0;
    t.push(0);
    for (let a = 1; a <= e; a++)
      t.push((r += (n = this.getPoint(a / e)).distanceTo(i))), (i = n);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t) {
    let n;
    let i = this.getLengths(),
      r = 0,
      a = i.length;
    n = t || e * i[a - 1];
    let s = 0,
      o = a - 1,
      l;
    for (; s <= o; )
      if ((l = i[(r = Math.floor(s + (o - s) / 2))] - n) < 0) s = r + 1;
      else if (l > 0) o = r - 1;
      else {
        o = r;
        break;
      }
    if (i[(r = o)] === n) return r / (a - 1);
    let h = i[r],
      c = i[r + 1];
    return (r + (n - h) / (c - h)) / (a - 1);
  }
  getTangent(e, t) {
    let n = e - 1e-4,
      i = e + 1e-4;
    n < 0 && (n = 0), i > 1 && (i = 1);
    let r = this.getPoint(n),
      a = this.getPoint(i),
      s = t || (r.isVector2 ? new x() : new G());
    return s.copy(a).sub(r).normalize(), s;
  }
  getTangentAt(e, t) {
    let n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    let n = new G(),
      i = [],
      r = [],
      a = [],
      s = new G(),
      o = new e_();
    for (let t = 0; t <= e; t++) {
      let n = t / e;
      i[t] = this.getTangentAt(n, new G());
    }
    (r[0] = new G()), (a[0] = new G());
    let l = Number.MAX_VALUE,
      h = Math.abs(i[0].x),
      c = Math.abs(i[0].y),
      u = Math.abs(i[0].z);
    h <= l && ((l = h), n.set(1, 0, 0)),
      c <= l && ((l = c), n.set(0, 1, 0)),
      u <= l && n.set(0, 0, 1),
      s.crossVectors(i[0], n).normalize(),
      r[0].crossVectors(i[0], s),
      a[0].crossVectors(i[0], r[0]);
    for (let t = 1; t <= e; t++) {
      if (
        ((r[t] = r[t - 1].clone()),
        (a[t] = a[t - 1].clone()),
        s.crossVectors(i[t - 1], i[t]),
        s.length() > Number.EPSILON)
      ) {
        s.normalize();
        let e = Math.acos(g(i[t - 1].dot(i[t]), -1, 1));
        r[t].applyMatrix4(o.makeRotationAxis(s, e));
      }
      a[t].crossVectors(i[t], r[t]);
    }
    if (!0 === t) {
      let t = Math.acos(g(r[0].dot(r[e]), -1, 1));
      (t /= e), i[0].dot(s.crossVectors(r[0], r[e])) > 0 && (t = -t);
      for (let n = 1; n <= e; n++)
        r[n].applyMatrix4(o.makeRotationAxis(i[n], t * n)),
          a[n].crossVectors(i[n], r[n]);
    }
    return { tangents: i, normals: r, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    let e = {
      metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class t1 extends t0 {
  constructor(
    e = 0,
    t = 0,
    n = 1,
    i = 1,
    r = 0,
    a = 2 * Math.PI,
    s = !1,
    o = 0
  ) {
    super(),
      (this.isEllipseCurve = !0),
      (this.type = "EllipseCurve"),
      (this.aX = e),
      (this.aY = t),
      (this.xRadius = n),
      (this.yRadius = i),
      (this.aStartAngle = r),
      (this.aEndAngle = a),
      (this.aClockwise = s),
      (this.aRotation = o);
  }
  getPoint(e, t = new x()) {
    let n = 2 * Math.PI,
      i = this.aEndAngle - this.aStartAngle,
      r = Math.abs(i) < Number.EPSILON;
    for (; i < 0; ) i += n;
    for (; i > n; ) i -= n;
    i < Number.EPSILON && (i = r ? 0 : n),
      !0 !== this.aClockwise || r || (i === n ? (i = -n) : (i -= n));
    let a = this.aStartAngle + e * i,
      s = this.aX + this.xRadius * Math.cos(a),
      o = this.aY + this.yRadius * Math.sin(a);
    if (0 !== this.aRotation) {
      let e = Math.cos(this.aRotation),
        t = Math.sin(this.aRotation),
        n = s - this.aX,
        i = o - this.aY;
      (s = n * e - i * t + this.aX), (o = n * t + i * e + this.aY);
    }
    return t.set(s, o);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.aX = this.aX),
      (e.aY = this.aY),
      (e.xRadius = this.xRadius),
      (e.yRadius = this.yRadius),
      (e.aStartAngle = this.aStartAngle),
      (e.aEndAngle = this.aEndAngle),
      (e.aClockwise = this.aClockwise),
      (e.aRotation = this.aRotation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
}
function t2() {
  let e = 0,
    t = 0,
    n = 0,
    i = 0;
  function r(r, a, s, o) {
    (e = r),
      (t = s),
      (n = -3 * r + 3 * a - 2 * s - o),
      (i = 2 * r - 2 * a + s + o);
  }
  return {
    initCatmullRom: function (e, t, n, i, a) {
      r(t, n, a * (n - e), a * (i - t));
    },
    initNonuniformCatmullRom: function (e, t, n, i, a, s, o) {
      let l = (t - e) / a - (n - e) / (a + s) + (n - t) / s,
        h = (n - t) / s - (i - t) / (s + o) + (i - n) / o;
      r(t, n, (l *= s), (h *= s));
    },
    calc: function (r) {
      let a = r * r;
      return e + t * r + n * a + a * r * i;
    },
  };
}
const t3 = new G(),
  t4 = new t2(),
  t5 = new t2(),
  t6 = new t2();
function t8(e, t, n, i, r) {
  let a = (i - t) * 0.5,
    s = (r - n) * 0.5,
    o = e * e;
  return (
    e * o * (2 * n - 2 * i + a + s) +
    (-3 * n + 3 * i - 2 * a - s) * o +
    a * e +
    n
  );
}
function t9(e, t, n, i) {
  return (
    (function (e, t) {
      let n = 1 - e;
      return n * n * t;
    })(e, t) +
    2 * (1 - e) * e * n +
    e * e * i
  );
}
function t7(e, t, n, i, r) {
  return (
    (function (e, t) {
      let n = 1 - e;
      return n * n * n * t;
    })(e, t) +
    (function (e, t) {
      let n = 1 - e;
      return 3 * n * n * e * t;
    })(e, n) +
    3 * (1 - e) * e * e * i +
    e * e * e * r
  );
}
class ne extends t0 {
  constructor(e = new x(), t = new x(), n = new x(), i = new x()) {
    super(),
      (this.isCubicBezierCurve = !0),
      (this.type = "CubicBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(e, t = new x()) {
    let n = this.v0,
      i = this.v1,
      r = this.v2,
      a = this.v3;
    return t.set(t7(e, n.x, i.x, r.x, a.x), t7(e, n.y, i.y, r.y, a.y)), t;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
class nt extends t0 {
  constructor(e = new x(), t = new x()) {
    super(),
      (this.isLineCurve = !0),
      (this.type = "LineCurve"),
      (this.v1 = e),
      (this.v2 = t);
  }
  getPoint(e, t = new x()) {
    return (
      1 === e
        ? t.copy(this.v2)
        : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(e).add(this.v1)),
      t
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new x()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    let e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class nn extends t0 {
  constructor(e = new x(), t = new x(), n = new x()) {
    super(),
      (this.isQuadraticBezierCurve = !0),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n);
  }
  getPoint(e, t = new x()) {
    let n = this.v0,
      i = this.v1,
      r = this.v2;
    return t.set(t9(e, n.x, i.x, r.x), t9(e, n.y, i.y, r.y)), t;
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
class ni extends t0 {
  constructor(e = new G(), t = new G(), n = new G()) {
    super(),
      (this.isQuadraticBezierCurve3 = !0),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = n);
  }
  getPoint(e, t = new G()) {
    let n = this.v0,
      i = this.v1,
      r = this.v2;
    return (
      t.set(t9(e, n.x, i.x, r.x), t9(e, n.y, i.y, r.y), t9(e, n.z, i.z, r.z)), t
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
class nr extends t0 {
  constructor(e = []) {
    super(),
      (this.isSplineCurve = !0),
      (this.type = "SplineCurve"),
      (this.points = e);
  }
  getPoint(e, t = new x()) {
    let n = this.points,
      i = (n.length - 1) * e,
      r = Math.floor(i),
      a = i - r,
      s = n[0 === r ? r : r - 1],
      o = n[r],
      l = n[r > n.length - 2 ? n.length - 1 : r + 1],
      h = n[r > n.length - 3 ? n.length - 1 : r + 2];
    return t.set(t8(a, s.x, o.x, l.x, h.x), t8(a, s.y, o.y, l.y, h.y)), t;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      let n = e.points[t];
      this.points.push(n.clone());
    }
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      let n = this.points[t];
      e.points.push(n.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, n = e.points.length; t < n; t++) {
      let n = e.points[t];
      this.points.push(new x().fromArray(n));
    }
    return this;
  }
}
var na = Object.freeze({
  __proto__: null,
  ArcCurve: class extends t1 {
    constructor(e, t, n, i, r, a) {
      super(e, t, n, n, i, r, a),
        (this.isArcCurve = !0),
        (this.type = "ArcCurve");
    }
  },
  CatmullRomCurve3: class extends t0 {
    constructor(e = [], t = !1, n = "centripetal", i = 0.5) {
      super(),
        (this.isCatmullRomCurve3 = !0),
        (this.type = "CatmullRomCurve3"),
        (this.points = e),
        (this.closed = t),
        (this.curveType = n),
        (this.tension = i);
    }
    getPoint(e, t = new G()) {
      let n, i;
      let r = this.points,
        a = r.length,
        s = (a - (this.closed ? 0 : 1)) * e,
        o = Math.floor(s),
        l = s - o;
      this.closed
        ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / a) + 1) * a)
        : 0 === l && o === a - 1 && ((o = a - 2), (l = 1)),
        this.closed || o > 0
          ? (n = r[(o - 1) % a])
          : (t3.subVectors(r[0], r[1]).add(r[0]), (n = t3));
      let h = r[o % a],
        c = r[(o + 1) % a];
      if (
        (this.closed || o + 2 < a
          ? (i = r[(o + 2) % a])
          : (t3.subVectors(r[a - 1], r[a - 2]).add(r[a - 1]), (i = t3)),
        "centripetal" === this.curveType || "chordal" === this.curveType)
      ) {
        let e = "chordal" === this.curveType ? 0.5 : 0.25,
          t = Math.pow(n.distanceToSquared(h), e),
          r = Math.pow(h.distanceToSquared(c), e),
          a = Math.pow(c.distanceToSquared(i), e);
        r < 1e-4 && (r = 1),
          t < 1e-4 && (t = r),
          a < 1e-4 && (a = r),
          t4.initNonuniformCatmullRom(n.x, h.x, c.x, i.x, t, r, a),
          t5.initNonuniformCatmullRom(n.y, h.y, c.y, i.y, t, r, a),
          t6.initNonuniformCatmullRom(n.z, h.z, c.z, i.z, t, r, a);
      } else
        "catmullrom" === this.curveType &&
          (t4.initCatmullRom(n.x, h.x, c.x, i.x, this.tension),
          t5.initCatmullRom(n.y, h.y, c.y, i.y, this.tension),
          t6.initCatmullRom(n.z, h.z, c.z, i.z, this.tension));
      return t.set(t4.calc(l), t5.calc(l), t6.calc(l)), t;
    }
    copy(e) {
      super.copy(e), (this.points = []);
      for (let t = 0, n = e.points.length; t < n; t++) {
        let n = e.points[t];
        this.points.push(n.clone());
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      e.points = [];
      for (let t = 0, n = this.points.length; t < n; t++) {
        let n = this.points[t];
        e.points.push(n.toArray());
      }
      return (
        (e.closed = this.closed),
        (e.curveType = this.curveType),
        (e.tension = this.tension),
        e
      );
    }
    fromJSON(e) {
      super.fromJSON(e), (this.points = []);
      for (let t = 0, n = e.points.length; t < n; t++) {
        let n = e.points[t];
        this.points.push(new G().fromArray(n));
      }
      return (
        (this.closed = e.closed),
        (this.curveType = e.curveType),
        (this.tension = e.tension),
        this
      );
    }
  },
  CubicBezierCurve: ne,
  CubicBezierCurve3: class extends t0 {
    constructor(e = new G(), t = new G(), n = new G(), i = new G()) {
      super(),
        (this.isCubicBezierCurve3 = !0),
        (this.type = "CubicBezierCurve3"),
        (this.v0 = e),
        (this.v1 = t),
        (this.v2 = n),
        (this.v3 = i);
    }
    getPoint(e, t = new G()) {
      let n = this.v0,
        i = this.v1,
        r = this.v2,
        a = this.v3;
      return (
        t.set(
          t7(e, n.x, i.x, r.x, a.x),
          t7(e, n.y, i.y, r.y, a.y),
          t7(e, n.z, i.z, r.z, a.z)
        ),
        t
      );
    }
    copy(e) {
      return (
        super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
      );
    }
    toJSON() {
      let e = super.toJSON();
      return (
        (e.v0 = this.v0.toArray()),
        (e.v1 = this.v1.toArray()),
        (e.v2 = this.v2.toArray()),
        (e.v3 = this.v3.toArray()),
        e
      );
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
      );
    }
  },
  EllipseCurve: t1,
  LineCurve: nt,
  LineCurve3: class extends t0 {
    constructor(e = new G(), t = new G()) {
      super(),
        (this.isLineCurve3 = !0),
        (this.type = "LineCurve3"),
        (this.v1 = e),
        (this.v2 = t);
    }
    getPoint(e, t = new G()) {
      return (
        1 === e
          ? t.copy(this.v2)
          : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(e).add(this.v1)),
        t
      );
    }
    getPointAt(e, t) {
      return this.getPoint(e, t);
    }
    getTangent(e, t = new G()) {
      return t.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(e, t) {
      return this.getTangent(e, t);
    }
    copy(e) {
      return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
    }
    toJSON() {
      let e = super.toJSON();
      return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
    }
    fromJSON(e) {
      return (
        super.fromJSON(e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
      );
    }
  },
  QuadraticBezierCurve: nn,
  QuadraticBezierCurve3: ni,
  SplineCurve: nr,
});
class ns extends t0 {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    let e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      let n = !0 === e.isVector2 ? "LineCurve" : "LineCurve3";
      this.curves.push(new na[n](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    let n = e * this.getLength(),
      i = this.getCurveLengths(),
      r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        let e = i[r] - n,
          a = this.curves[r],
          s = a.getLength(),
          o = 0 === s ? 0 : 1 - e / s;
        return a.getPointAt(o, t);
      }
      r++;
    }
    return null;
  }
  getLength() {
    let e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    let e = [],
      t = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      e.push((t += this.curves[n].getLength()));
    return (this.cacheLengths = e), e;
  }
  getSpacedPoints(e = 40) {
    let t = [];
    for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    let t;
    let n = [];
    for (let i = 0, r = this.curves; i < r.length; i++) {
      let a = r[i],
        s = a.isEllipseCurve
          ? 2 * e
          : a.isLineCurve || a.isLineCurve3
          ? 1
          : a.isSplineCurve
          ? e * a.points.length
          : e,
        o = a.getPoints(s);
      for (let e = 0; e < o.length; e++) {
        let i = o[e];
        (t && t.equals(i)) || (n.push(i), (t = i));
      }
    }
    return (
      this.autoClose &&
        n.length > 1 &&
        !n[n.length - 1].equals(n[0]) &&
        n.push(n[0]),
      n
    );
  }
  copy(e) {
    super.copy(e), (this.curves = []);
    for (let t = 0, n = e.curves.length; t < n; t++) {
      let n = e.curves[t];
      this.curves.push(n.clone());
    }
    return (this.autoClose = e.autoClose), this;
  }
  toJSON() {
    let e = super.toJSON();
    (e.autoClose = this.autoClose), (e.curves = []);
    for (let t = 0, n = this.curves.length; t < n; t++) {
      let n = this.curves[t];
      e.curves.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
    for (let t = 0, n = e.curves.length; t < n; t++) {
      let n = e.curves[t];
      this.curves.push(new na[n.type]().fromJSON(n));
    }
    return this;
  }
}
class no extends ns {
  constructor(e) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new x()),
      e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    let n = new nt(this.currentPoint.clone(), new x(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, i) {
    let r = new nn(this.currentPoint.clone(), new x(e, t), new x(n, i));
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(e, t, n, i, r, a) {
    let s = new ne(
      this.currentPoint.clone(),
      new x(e, t),
      new x(n, i),
      new x(r, a)
    );
    return this.curves.push(s), this.currentPoint.set(r, a), this;
  }
  splineThru(e) {
    let t = new nr([this.currentPoint.clone()].concat(e));
    return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, i, r, a) {
    let s = this.currentPoint.x,
      o = this.currentPoint.y;
    return this.absarc(e + s, t + o, n, i, r, a), this;
  }
  absarc(e, t, n, i, r, a) {
    return this.absellipse(e, t, n, n, i, r, a), this;
  }
  ellipse(e, t, n, i, r, a, s, o) {
    let l = this.currentPoint.x,
      h = this.currentPoint.y;
    return this.absellipse(e + l, t + h, n, i, r, a, s, o), this;
  }
  absellipse(e, t, n, i, r, a, s, o) {
    let l = new t1(e, t, n, i, r, a, s, o);
    if (this.curves.length > 0) {
      let e = l.getPoint(0);
      e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
    }
    this.curves.push(l);
    let h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    let e = super.toJSON();
    return (e.currentPoint = this.currentPoint.toArray()), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class nl extends t_ {
  constructor(
    e = [new x(0, -0.5), new x(0.5, 0), new x(0, 0.5)],
    t = 12,
    n = 0,
    i = 2 * Math.PI
  ) {
    super(),
      (this.type = "LatheGeometry"),
      (this.parameters = { points: e, segments: t, phiStart: n, phiLength: i }),
      (t = Math.floor(t)),
      (i = g(i, 0, 2 * Math.PI));
    let r = [],
      a = [],
      s = [],
      o = [],
      l = [],
      h = 1 / t,
      c = new G(),
      u = new x(),
      d = new G(),
      p = new G(),
      f = new G(),
      m = 0,
      _ = 0;
    for (let t = 0; t <= e.length - 1; t++)
      switch (t) {
        case 0:
          (m = e[t + 1].x - e[t].x),
            (_ = e[t + 1].y - e[t].y),
            (d.x = 1 * _),
            (d.y = -m),
            (d.z = 0 * _),
            f.copy(d),
            d.normalize(),
            o.push(d.x, d.y, d.z);
          break;
        case e.length - 1:
          o.push(f.x, f.y, f.z);
          break;
        default:
          (m = e[t + 1].x - e[t].x),
            (_ = e[t + 1].y - e[t].y),
            (d.x = 1 * _),
            (d.y = -m),
            (d.z = 0 * _),
            p.copy(d),
            (d.x += f.x),
            (d.y += f.y),
            (d.z += f.z),
            d.normalize(),
            o.push(d.x, d.y, d.z),
            f.copy(p);
      }
    for (let r = 0; r <= t; r++) {
      let d = n + r * h * i,
        p = Math.sin(d),
        f = Math.cos(d);
      for (let n = 0; n <= e.length - 1; n++) {
        (c.x = e[n].x * p),
          (c.y = e[n].y),
          (c.z = e[n].x * f),
          a.push(c.x, c.y, c.z),
          (u.x = r / t),
          (u.y = n / (e.length - 1)),
          s.push(u.x, u.y);
        let i = o[3 * n + 0] * p,
          h = o[3 * n + 1],
          d = o[3 * n + 0] * f;
        l.push(i, h, d);
      }
    }
    for (let n = 0; n < t; n++)
      for (let t = 0; t < e.length - 1; t++) {
        let i = t + n * e.length,
          a = i + e.length,
          s = i + e.length + 1,
          o = i + 1;
        r.push(i, a, o), r.push(s, o, a);
      }
    this.setIndex(r),
      this.setAttribute("position", new th(a, 3)),
      this.setAttribute("uv", new th(s, 2)),
      this.setAttribute("normal", new th(l, 3));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new nl(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class nh extends nl {
  constructor(e = 1, t = 1, n = 4, i = 8) {
    let r = new no();
    r.absarc(0, -t / 2, e, 1.5 * Math.PI, 0),
      r.absarc(0, t / 2, e, 0, 0.5 * Math.PI),
      super(r.getPoints(n), i),
      (this.type = "CapsuleGeometry"),
      (this.parameters = {
        radius: e,
        length: t,
        capSegments: n,
        radialSegments: i,
      });
  }
  static fromJSON(e) {
    return new nh(e.radius, e.length, e.capSegments, e.radialSegments);
  }
}
class nc extends t_ {
  constructor(e = 1, t = 32, n = 0, i = 2 * Math.PI) {
    super(),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: e,
        segments: t,
        thetaStart: n,
        thetaLength: i,
      }),
      (t = Math.max(3, t));
    let r = [],
      a = [],
      s = [],
      o = [],
      l = new G(),
      h = new x();
    a.push(0, 0, 0), s.push(0, 0, 1), o.push(0.5, 0.5);
    for (let r = 0, c = 3; r <= t; r++, c += 3) {
      let u = n + (r / t) * i;
      (l.x = e * Math.cos(u)),
        (l.y = e * Math.sin(u)),
        a.push(l.x, l.y, l.z),
        s.push(0, 0, 1),
        (h.x = (a[c] / e + 1) / 2),
        (h.y = (a[c + 1] / e + 1) / 2),
        o.push(h.x, h.y);
    }
    for (let e = 1; e <= t; e++) r.push(e, e + 1, 0);
    this.setIndex(r),
      this.setAttribute("position", new th(a, 3)),
      this.setAttribute("normal", new th(s, 3)),
      this.setAttribute("uv", new th(o, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new nc(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class nu extends t_ {
  constructor(
    e = 1,
    t = 1,
    n = 1,
    i = 32,
    r = 1,
    a = !1,
    s = 0,
    o = 2 * Math.PI
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: n,
        radialSegments: i,
        heightSegments: r,
        openEnded: a,
        thetaStart: s,
        thetaLength: o,
      });
    let l = this;
    (i = Math.floor(i)), (r = Math.floor(r));
    let h = [],
      c = [],
      u = [],
      d = [],
      p = 0,
      f = [],
      m = n / 2,
      g = 0;
    function _(n) {
      let r = p,
        a = new x(),
        f = new G(),
        _ = 0,
        v = !0 === n ? e : t,
        y = !0 === n ? 1 : -1;
      for (let e = 1; e <= i; e++)
        c.push(0, m * y, 0), u.push(0, y, 0), d.push(0.5, 0.5), p++;
      let M = p;
      for (let e = 0; e <= i; e++) {
        let t = (e / i) * o + s,
          n = Math.cos(t),
          r = Math.sin(t);
        (f.x = v * r),
          (f.y = m * y),
          (f.z = v * n),
          c.push(f.x, f.y, f.z),
          u.push(0, y, 0),
          (a.x = 0.5 * n + 0.5),
          (a.y = 0.5 * r * y + 0.5),
          d.push(a.x, a.y),
          p++;
      }
      for (let e = 0; e < i; e++) {
        let t = r + e,
          i = M + e;
        !0 === n ? h.push(i, i + 1, t) : h.push(i + 1, i, t), (_ += 3);
      }
      l.addGroup(g, _, !0 === n ? 1 : 2), (g += _);
    }
    (function () {
      let a = new G(),
        _ = new G(),
        v = 0,
        x = (t - e) / n;
      for (let l = 0; l <= r; l++) {
        let h = [],
          g = l / r,
          v = g * (t - e) + e;
        for (let e = 0; e <= i; e++) {
          let t = e / i,
            r = t * o + s,
            l = Math.sin(r),
            f = Math.cos(r);
          (_.x = v * l),
            (_.y = -g * n + m),
            (_.z = v * f),
            c.push(_.x, _.y, _.z),
            a.set(l, x, f).normalize(),
            u.push(a.x, a.y, a.z),
            d.push(t, 1 - g),
            h.push(p++);
        }
        f.push(h);
      }
      for (let n = 0; n < i; n++)
        for (let i = 0; i < r; i++) {
          let a = f[i][n],
            s = f[i + 1][n],
            o = f[i + 1][n + 1],
            l = f[i][n + 1];
          (e > 0 || 0 !== i) && (h.push(a, s, l), (v += 3)),
            (t > 0 || i !== r - 1) && (h.push(s, o, l), (v += 3));
        }
      l.addGroup(g, v, 0), (g += v);
    })(),
      !1 === a && (e > 0 && _(!0), t > 0 && _(!1)),
      this.setIndex(h),
      this.setAttribute("position", new th(c, 3)),
      this.setAttribute("normal", new th(u, 3)),
      this.setAttribute("uv", new th(d, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new nu(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class nd extends nu {
  constructor(e = 1, t = 1, n = 32, i = 1, r = !1, a = 0, s = 2 * Math.PI) {
    super(0, e, t, n, i, r, a, s),
      (this.type = "ConeGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        radialSegments: n,
        heightSegments: i,
        openEnded: r,
        thetaStart: a,
        thetaLength: s,
      });
  }
  static fromJSON(e) {
    return new nd(
      e.radius,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class np extends t_ {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: n, detail: i });
    let r = [],
      a = [];
    function s(e) {
      r.push(e.x, e.y, e.z);
    }
    function o(t, n) {
      let i = 3 * t;
      (n.x = e[i + 0]), (n.y = e[i + 1]), (n.z = e[i + 2]);
    }
    function l(e, t, n, i) {
      i < 0 && 1 === e.x && (a[t] = e.x - 1),
        0 === n.x && 0 === n.z && (a[t] = i / 2 / Math.PI + 0.5);
    }
    function h(e) {
      return Math.atan2(e.z, -e.x);
    }
    (function (e) {
      let n = new G(),
        i = new G(),
        r = new G();
      for (let a = 0; a < t.length; a += 3)
        o(t[a + 0], n),
          o(t[a + 1], i),
          o(t[a + 2], r),
          (function (e, t, n, i) {
            let r = i + 1,
              a = [];
            for (let i = 0; i <= r; i++) {
              a[i] = [];
              let s = e.clone().lerp(n, i / r),
                o = t.clone().lerp(n, i / r),
                l = r - i;
              for (let e = 0; e <= l; e++)
                0 === e && i === r
                  ? (a[i][e] = s)
                  : (a[i][e] = s.clone().lerp(o, e / l));
            }
            for (let e = 0; e < r; e++)
              for (let t = 0; t < 2 * (r - e) - 1; t++) {
                let n = Math.floor(t / 2);
                t % 2 == 0
                  ? (s(a[e][n + 1]), s(a[e + 1][n]), s(a[e][n]))
                  : (s(a[e][n + 1]), s(a[e + 1][n + 1]), s(a[e + 1][n]));
              }
          })(n, i, r, e);
    })(i),
      (function (e) {
        let t = new G();
        for (let n = 0; n < r.length; n += 3)
          (t.x = r[n + 0]),
            (t.y = r[n + 1]),
            (t.z = r[n + 2]),
            t.normalize().multiplyScalar(e),
            (r[n + 0] = t.x),
            (r[n + 1] = t.y),
            (r[n + 2] = t.z);
      })(n),
      (function () {
        let e = new G();
        for (let t = 0; t < r.length; t += 3) {
          (e.x = r[t + 0]), (e.y = r[t + 1]), (e.z = r[t + 2]);
          let n = h(e) / 2 / Math.PI + 0.5,
            i =
              Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI +
              0.5;
          a.push(n, 1 - i);
        }
        (function () {
          let e = new G(),
            t = new G(),
            n = new G(),
            i = new G(),
            s = new x(),
            o = new x(),
            c = new x();
          for (let u = 0, d = 0; u < r.length; u += 9, d += 6) {
            e.set(r[u + 0], r[u + 1], r[u + 2]),
              t.set(r[u + 3], r[u + 4], r[u + 5]),
              n.set(r[u + 6], r[u + 7], r[u + 8]),
              s.set(a[d + 0], a[d + 1]),
              o.set(a[d + 2], a[d + 3]),
              c.set(a[d + 4], a[d + 5]),
              i.copy(e).add(t).add(n).divideScalar(3);
            let p = h(i);
            l(s, d + 0, e, p), l(o, d + 2, t, p), l(c, d + 4, n, p);
          }
        })(),
          (function () {
            for (let e = 0; e < a.length; e += 6) {
              let t = a[e + 0],
                n = a[e + 2],
                i = a[e + 4],
                r = Math.max(t, n, i),
                s = Math.min(t, n, i);
              r > 0.9 &&
                s < 0.1 &&
                (t < 0.2 && (a[e + 0] += 1),
                n < 0.2 && (a[e + 2] += 1),
                i < 0.2 && (a[e + 4] += 1));
            }
          })();
      })(),
      this.setAttribute("position", new th(r, 3)),
      this.setAttribute("normal", new th(r.slice(), 3)),
      this.setAttribute("uv", new th(a, 2)),
      0 === i ? this.computeVertexNormals() : this.normalizeNormals();
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new np(e.vertices, e.indices, e.radius, e.details);
  }
}
class nf extends np {
  constructor(e = 1, t = 0) {
    let n = (1 + Math.sqrt(5)) / 2,
      i = 1 / n;
    super(
      [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -i,
        -n,
        0,
        -i,
        n,
        0,
        i,
        -n,
        0,
        i,
        n,
        -i,
        -n,
        0,
        -i,
        n,
        0,
        i,
        -n,
        0,
        i,
        n,
        0,
        -n,
        0,
        -i,
        n,
        0,
        -i,
        -n,
        0,
        i,
        n,
        0,
        i,
      ],
      [
        3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8,
        17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18,
        0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13,
        18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5,
        11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14,
        5, 1, 5, 9,
      ],
      e,
      t
    ),
      (this.type = "DodecahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new nf(e.radius, e.detail);
  }
}
class nm extends no {
  constructor(e) {
    super(e), (this.uuid = m()), (this.type = "Shape"), (this.holes = []);
  }
  getPointsHoles(e) {
    let t = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
  }
  copy(e) {
    super.copy(e), (this.holes = []);
    for (let t = 0, n = e.holes.length; t < n; t++) {
      let n = e.holes[t];
      this.holes.push(n.clone());
    }
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    (e.uuid = this.uuid), (e.holes = []);
    for (let t = 0, n = this.holes.length; t < n; t++) {
      let n = this.holes[t];
      e.holes.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []);
    for (let t = 0, n = e.holes.length; t < n; t++) {
      let n = e.holes[t];
      this.holes.push(new no().fromJSON(n));
    }
    return this;
  }
}
const ng = function (e, t, n = 2) {
  let i, r, a, s, o, l, h;
  let c = t && t.length,
    u = c ? t[0] * n : e.length,
    d = n_(e, 0, u, n, !0),
    p = [];
  if (!d || d.next === d.prev) return p;
  if (
    (c &&
      (d = (function (e, t, n, i) {
        let r, a, s, o, l;
        let h = [];
        for (r = 0, a = t.length; r < a; r++)
          (s = t[r] * i),
            (o = r < a - 1 ? t[r + 1] * i : e.length),
            (l = n_(e, s, o, i, !1)) === l.next && (l.steiner = !0),
            h.push(
              (function (e) {
                let t = e,
                  n = e;
                do
                  (t.x < n.x || (t.x === n.x && t.y < n.y)) && (n = t),
                    (t = t.next);
                while (t !== e);
                return n;
              })(l)
            );
        for (h.sort(nx), r = 0; r < h.length; r++)
          n = (function (e, t) {
            let n = (function (e, t) {
              let n = t,
                i = -1 / 0,
                r,
                a = e.x,
                s = e.y;
              do {
                if (s <= n.y && s >= n.next.y && n.next.y !== n.y) {
                  let e =
                    n.x + ((s - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
                  if (
                    e <= a &&
                    e > i &&
                    ((i = e), (r = n.x < n.next.x ? n : n.next), e === a)
                  )
                    return r;
                }
                n = n.next;
              } while (n !== t);
              if (!r) return null;
              let o = r,
                l = r.x,
                h = r.y,
                c = 1 / 0,
                u;
              n = r;
              do {
                var d, p;
                a >= n.x &&
                  n.x >= l &&
                  a !== n.x &&
                  nM(s < h ? a : i, s, l, h, s < h ? i : a, s, n.x, n.y) &&
                  ((u = Math.abs(s - n.y) / (a - n.x)),
                  nw(n, e) &&
                    (u < c ||
                      (u === c &&
                        (n.x > r.x ||
                          (n.x === r.x &&
                            ((d = r),
                            (p = n),
                            0 > nS(d.prev, d, p.prev) &&
                              0 > nS(p.next, d, d.next)))))) &&
                    ((r = n), (c = u))),
                  (n = n.next);
              } while (n !== o);
              return r;
            })(e, t);
            if (!n) return t;
            let i = nR(n, e);
            return nv(i, i.next), nv(n, n.next);
          })(h[r], n);
        return n;
      })(e, t, d, n)),
    e.length > 80 * n)
  ) {
    (i = a = e[0]), (r = s = e[1]);
    for (let t = n; t < u; t += n)
      (o = e[t]),
        (l = e[t + 1]),
        o < i && (i = o),
        l < r && (r = l),
        o > a && (a = o),
        l > s && (s = l);
    h = 0 !== (h = Math.max(a - i, s - r)) ? 32767 / h : 0;
  }
  return (
    (function e(t, n, i, r, a, s, o) {
      if (!t) return;
      !o &&
        s &&
        (function (e, t, n, i) {
          let r = e;
          do
            0 === r.z && (r.z = ny(r.x, r.y, t, n, i)),
              (r.prevZ = r.prev),
              (r.nextZ = r.next),
              (r = r.next);
          while (r !== e);
          (r.prevZ.nextZ = null),
            (r.prevZ = null),
            (function (e) {
              let t,
                n,
                i,
                r,
                a,
                s,
                o,
                l,
                h = 1;
              do {
                for (n = e, e = null, a = null, s = 0; n; ) {
                  for (
                    s++, i = n, o = 0, t = 0;
                    t < h && (o++, (i = i.nextZ));
                    t++
                  );
                  for (l = h; o > 0 || (l > 0 && i); )
                    0 !== o && (0 === l || !i || n.z <= i.z)
                      ? ((r = n), (n = n.nextZ), o--)
                      : ((r = i), (i = i.nextZ), l--),
                      a ? (a.nextZ = r) : (e = r),
                      (r.prevZ = a),
                      (a = r);
                  n = i;
                }
                (a.nextZ = null), (h *= 2);
              } while (s > 1);
            })(r);
        })(t, r, a, s);
      let l = t,
        h,
        c;
      for (; t.prev !== t.next; ) {
        if (
          ((h = t.prev),
          (c = t.next),
          s
            ? (function (e, t, n, i) {
                let r = e.prev,
                  a = e.next;
                if (nS(r, e, a) >= 0) return !1;
                let s = r.x,
                  o = e.x,
                  l = a.x,
                  h = r.y,
                  c = e.y,
                  u = a.y,
                  d = s < o ? (s < l ? s : l) : o < l ? o : l,
                  p = h < c ? (h < u ? h : u) : c < u ? c : u,
                  f = s > o ? (s > l ? s : l) : o > l ? o : l,
                  m = h > c ? (h > u ? h : u) : c > u ? c : u,
                  g = ny(d, p, t, n, i),
                  _ = ny(f, m, t, n, i),
                  v = e.prevZ,
                  x = e.nextZ;
                for (; v && v.z >= g && x && x.z <= _; ) {
                  if (
                    (v.x >= d &&
                      v.x <= f &&
                      v.y >= p &&
                      v.y <= m &&
                      v !== r &&
                      v !== a &&
                      nM(s, h, o, c, l, u, v.x, v.y) &&
                      nS(v.prev, v, v.next) >= 0) ||
                    ((v = v.prevZ),
                    x.x >= d &&
                      x.x <= f &&
                      x.y >= p &&
                      x.y <= m &&
                      x !== r &&
                      x !== a &&
                      nM(s, h, o, c, l, u, x.x, x.y) &&
                      nS(x.prev, x, x.next) >= 0)
                  )
                    return !1;
                  x = x.nextZ;
                }
                for (; v && v.z >= g; ) {
                  if (
                    v.x >= d &&
                    v.x <= f &&
                    v.y >= p &&
                    v.y <= m &&
                    v !== r &&
                    v !== a &&
                    nM(s, h, o, c, l, u, v.x, v.y) &&
                    nS(v.prev, v, v.next) >= 0
                  )
                    return !1;
                  v = v.prevZ;
                }
                for (; x && x.z <= _; ) {
                  if (
                    x.x >= d &&
                    x.x <= f &&
                    x.y >= p &&
                    x.y <= m &&
                    x !== r &&
                    x !== a &&
                    nM(s, h, o, c, l, u, x.x, x.y) &&
                    nS(x.prev, x, x.next) >= 0
                  )
                    return !1;
                  x = x.nextZ;
                }
                return !0;
              })(t, r, a, s)
            : (function (e) {
                let t = e.prev,
                  n = e.next;
                if (nS(t, e, n) >= 0) return !1;
                let i = t.x,
                  r = e.x,
                  a = n.x,
                  s = t.y,
                  o = e.y,
                  l = n.y,
                  h = i < r ? (i < a ? i : a) : r < a ? r : a,
                  c = s < o ? (s < l ? s : l) : o < l ? o : l,
                  u = i > r ? (i > a ? i : a) : r > a ? r : a,
                  d = s > o ? (s > l ? s : l) : o > l ? o : l,
                  p = n.next;
                for (; p !== t; ) {
                  if (
                    p.x >= h &&
                    p.x <= u &&
                    p.y >= c &&
                    p.y <= d &&
                    nM(i, s, r, o, a, l, p.x, p.y) &&
                    nS(p.prev, p, p.next) >= 0
                  )
                    return !1;
                  p = p.next;
                }
                return !0;
              })(t))
        ) {
          n.push((h.i / i) | 0),
            n.push((t.i / i) | 0),
            n.push((c.i / i) | 0),
            nP(t),
            (t = c.next),
            (l = c.next);
          continue;
        }
        if ((t = c) === l) {
          o
            ? 1 === o
              ? e(
                  (t = (function (e, t, n) {
                    let i = e;
                    do {
                      let r = i.prev,
                        a = i.next.next;
                      !nE(r, a) &&
                        nT(r, i, i.next, a) &&
                        nw(r, a) &&
                        nw(a, r) &&
                        (t.push((r.i / n) | 0),
                        t.push((i.i / n) | 0),
                        t.push((a.i / n) | 0),
                        nP(i),
                        nP(i.next),
                        (i = e = a)),
                        (i = i.next);
                    } while (i !== e);
                    return nv(i);
                  })(nv(t), n, i)),
                  n,
                  i,
                  r,
                  a,
                  s,
                  2
                )
              : 2 === o &&
                (function (t, n, i, r, a, s) {
                  let o = t;
                  do {
                    let t = o.next.next;
                    for (; t !== o.prev; ) {
                      var l, h;
                      if (
                        o.i !== t.i &&
                        ((l = o),
                        (h = t),
                        l.next.i !== h.i &&
                          l.prev.i !== h.i &&
                          !(function (e, t) {
                            let n = e;
                            do {
                              if (
                                n.i !== e.i &&
                                n.next.i !== e.i &&
                                n.i !== t.i &&
                                n.next.i !== t.i &&
                                nT(n, n.next, e, t)
                              )
                                return !0;
                              n = n.next;
                            } while (n !== e);
                            return !1;
                          })(l, h) &&
                          ((nw(l, h) &&
                            nw(h, l) &&
                            (function (e, t) {
                              let n = e,
                                i = !1,
                                r = (e.x + t.x) / 2,
                                a = (e.y + t.y) / 2;
                              do
                                n.y > a != n.next.y > a &&
                                  n.next.y !== n.y &&
                                  r <
                                    ((n.next.x - n.x) * (a - n.y)) /
                                      (n.next.y - n.y) +
                                      n.x &&
                                  (i = !i),
                                  (n = n.next);
                              while (n !== e);
                              return i;
                            })(l, h) &&
                            (nS(l.prev, l, h.prev) || nS(l, h.prev, h))) ||
                            (nE(l, h) &&
                              nS(l.prev, l, l.next) > 0 &&
                              nS(h.prev, h, h.next) > 0)))
                      ) {
                        let l = nR(o, t);
                        (o = nv(o, o.next)),
                          (l = nv(l, l.next)),
                          e(o, n, i, r, a, s, 0),
                          e(l, n, i, r, a, s, 0);
                        return;
                      }
                      t = t.next;
                    }
                    o = o.next;
                  } while (o !== t);
                })(t, n, i, r, a, s)
            : e(nv(t), n, i, r, a, s, 1);
          break;
        }
      }
    })(d, p, n, i, r, h, 0),
    p
  );
};
function n_(e, t, n, i, r) {
  let a, s;
  if (
    r ===
    (function (e, t, n, i) {
      let r = 0;
      for (let a = t, s = n - i; a < n; a += i)
        (r += (e[s] - e[a]) * (e[a + 1] + e[s + 1])), (s = a);
      return r;
    })(e, t, n, i) >
      0
  )
    for (a = t; a < n; a += i) s = nC(a, e[a], e[a + 1], s);
  else for (a = n - i; a >= t; a -= i) s = nC(a, e[a], e[a + 1], s);
  return s && nE(s, s.next) && (nP(s), (s = s.next)), s;
}
function nv(e, t) {
  if (!e) return e;
  t || (t = e);
  let n = e,
    i;
  do
    if (
      ((i = !1), !n.steiner && (nE(n, n.next) || 0 === nS(n.prev, n, n.next)))
    ) {
      if ((nP(n), (n = t = n.prev) === n.next)) break;
      i = !0;
    } else n = n.next;
  while (i || n !== t);
  return t;
}
function nx(e, t) {
  return e.x - t.x;
}
function ny(e, t, n, i, r) {
  return (
    (e =
      ((e =
        ((e =
          ((e = ((e = ((e - n) * r) | 0) | (e << 8)) & 0xff00ff) | (e << 4)) &
          0xf0f0f0f) |
          (e << 2)) &
        0x33333333) |
        (e << 1)) &
      0x55555555) |
    ((t =
      ((t =
        ((t =
          ((t = ((t = ((t - i) * r) | 0) | (t << 8)) & 0xff00ff) | (t << 4)) &
          0xf0f0f0f) |
          (t << 2)) &
        0x33333333) |
        (t << 1)) &
      0x55555555) <<
      1)
  );
}
function nM(e, t, n, i, r, a, s, o) {
  return (
    (r - s) * (t - o) >= (e - s) * (a - o) &&
    (e - s) * (i - o) >= (n - s) * (t - o) &&
    (n - s) * (a - o) >= (r - s) * (i - o)
  );
}
function nS(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function nE(e, t) {
  return e.x === t.x && e.y === t.y;
}
function nT(e, t, n, i) {
  let r = nA(nS(e, t, n)),
    a = nA(nS(e, t, i)),
    s = nA(nS(n, i, e)),
    o = nA(nS(n, i, t));
  return !!(
    (r !== a && s !== o) ||
    (0 === r && nb(e, n, t)) ||
    (0 === a && nb(e, i, t)) ||
    (0 === s && nb(n, e, i)) ||
    (0 === o && nb(n, t, i))
  );
}
function nb(e, t, n) {
  return (
    t.x <= Math.max(e.x, n.x) &&
    t.x >= Math.min(e.x, n.x) &&
    t.y <= Math.max(e.y, n.y) &&
    t.y >= Math.min(e.y, n.y)
  );
}
function nA(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function nw(e, t) {
  return 0 > nS(e.prev, e, e.next)
    ? nS(e, t, e.next) >= 0 && nS(e, e.prev, t) >= 0
    : 0 > nS(e, t, e.prev) || 0 > nS(e, e.next, t);
}
function nR(e, t) {
  let n = new nL(e.i, e.x, e.y),
    i = new nL(t.i, t.x, t.y),
    r = e.next,
    a = t.prev;
  return (
    (e.next = t),
    (t.prev = e),
    (n.next = r),
    (r.prev = n),
    (i.next = n),
    (n.prev = i),
    (a.next = i),
    (i.prev = a),
    i
  );
}
function nC(e, t, n, i) {
  let r = new nL(e, t, n);
  return (
    i
      ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r))
      : ((r.prev = r), (r.next = r)),
    r
  );
}
function nP(e) {
  (e.next.prev = e.prev),
    (e.prev.next = e.next),
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function nL(e, t, n) {
  (this.i = e),
    (this.x = t),
    (this.y = n),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
class nU {
  static area(e) {
    let t = e.length,
      n = 0;
    for (let i = t - 1, r = 0; r < t; i = r++)
      n += e[i].x * e[r].y - e[r].x * e[i].y;
    return 0.5 * n;
  }
  static isClockWise(e) {
    return 0 > nU.area(e);
  }
  static triangulateShape(e, t) {
    let n = [],
      i = [],
      r = [];
    nN(e), nD(n, e);
    let a = e.length;
    t.forEach(nN);
    for (let e = 0; e < t.length; e++)
      i.push(a), (a += t[e].length), nD(n, t[e]);
    let s = ng(n, i);
    for (let e = 0; e < s.length; e += 3) r.push(s.slice(e, e + 3));
    return r;
  }
}
function nN(e) {
  let t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function nD(e, t) {
  for (let n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y);
}
class nI extends t_ {
  constructor(
    e = new nm([
      new x(0.5, 0.5),
      new x(-0.5, 0.5),
      new x(-0.5, -0.5),
      new x(0.5, -0.5),
    ]),
    t = {}
  ) {
    super(),
      (this.type = "ExtrudeGeometry"),
      (this.parameters = { shapes: e, options: t }),
      (e = Array.isArray(e) ? e : [e]);
    let n = this,
      i = [],
      r = [];
    for (let a = 0, s = e.length; a < s; a++)
      !(function (e) {
        let a, s, o, l;
        let h = [],
          c = void 0 !== t.curveSegments ? t.curveSegments : 12,
          u = void 0 !== t.steps ? t.steps : 1,
          d = void 0 !== t.depth ? t.depth : 1,
          p = void 0 === t.bevelEnabled || t.bevelEnabled,
          f = void 0 !== t.bevelThickness ? t.bevelThickness : 0.2,
          m = void 0 !== t.bevelSize ? t.bevelSize : f - 0.1,
          g = void 0 !== t.bevelOffset ? t.bevelOffset : 0,
          _ = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
          v = t.extrudePath,
          y = void 0 !== t.UVGenerator ? t.UVGenerator : nO,
          M,
          S = !1;
        v &&
          ((M = v.getSpacedPoints(u)),
          (S = !0),
          (p = !1),
          (a = v.computeFrenetFrames(u, !1)),
          (s = new G()),
          (o = new G()),
          (l = new G())),
          p || ((_ = 0), (f = 0), (m = 0), (g = 0));
        let E = e.extractPoints(c),
          T = E.shape,
          b = E.holes;
        if (!nU.isClockWise(T)) {
          T = T.reverse();
          for (let e = 0, t = b.length; e < t; e++) {
            let t = b[e];
            nU.isClockWise(t) && (b[e] = t.reverse());
          }
        }
        let A = nU.triangulateShape(T, b),
          w = T;
        for (let e = 0, t = b.length; e < t; e++) {
          let t = b[e];
          T = T.concat(t);
        }
        function R(e, t, n) {
          return (
            t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
            e.clone().addScaledVector(t, n)
          );
        }
        let C = T.length,
          P = A.length;
        function L(e, t, n) {
          let i, r, a;
          let s = e.x - t.x,
            o = e.y - t.y,
            l = n.x - e.x,
            h = n.y - e.y,
            c = s * s + o * o;
          if (Math.abs(s * h - o * l) > Number.EPSILON) {
            let u = Math.sqrt(c),
              d = Math.sqrt(l * l + h * h),
              p = t.x - o / u,
              f = t.y + s / u,
              m =
                ((n.x - h / d - p) * h - (n.y + l / d - f) * l) /
                (s * h - o * l),
              g = (i = p + s * m - e.x) * i + (r = f + o * m - e.y) * r;
            if (g <= 2) return new x(i, r);
            a = Math.sqrt(g / 2);
          } else {
            let e = !1;
            s > Number.EPSILON
              ? l > Number.EPSILON && (e = !0)
              : s < -Number.EPSILON
              ? l < -Number.EPSILON && (e = !0)
              : Math.sign(o) === Math.sign(h) && (e = !0),
              e
                ? ((i = -o), (r = s), (a = Math.sqrt(c)))
                : ((i = s), (r = o), (a = Math.sqrt(c / 2)));
          }
          return new x(i / a, r / a);
        }
        let U = [];
        for (
          let e = 0, t = w.length, n = t - 1, i = e + 1;
          e < t;
          e++, n++, i++
        )
          n === t && (n = 0), i === t && (i = 0), (U[e] = L(w[e], w[n], w[i]));
        let N = [],
          D,
          I = U.concat();
        for (let e = 0, t = b.length; e < t; e++) {
          let t = b[e];
          D = [];
          for (
            let e = 0, n = t.length, i = n - 1, r = e + 1;
            e < n;
            e++, i++, r++
          )
            i === n && (i = 0),
              r === n && (r = 0),
              (D[e] = L(t[e], t[i], t[r]));
          N.push(D), (I = I.concat(D));
        }
        for (let e = 0; e < _; e++) {
          let t = e / _,
            n = f * Math.cos((t * Math.PI) / 2),
            i = m * Math.sin((t * Math.PI) / 2) + g;
          for (let e = 0, t = w.length; e < t; e++) {
            let t = R(w[e], U[e], i);
            B(t.x, t.y, -n);
          }
          for (let e = 0, t = b.length; e < t; e++) {
            let t = b[e];
            D = N[e];
            for (let e = 0, r = t.length; e < r; e++) {
              let r = R(t[e], D[e], i);
              B(r.x, r.y, -n);
            }
          }
        }
        let O = m + g;
        for (let e = 0; e < C; e++) {
          let t = p ? R(T[e], I[e], O) : T[e];
          S
            ? (o.copy(a.normals[0]).multiplyScalar(t.x),
              s.copy(a.binormals[0]).multiplyScalar(t.y),
              l.copy(M[0]).add(o).add(s),
              B(l.x, l.y, l.z))
            : B(t.x, t.y, 0);
        }
        for (let e = 1; e <= u; e++)
          for (let t = 0; t < C; t++) {
            let n = p ? R(T[t], I[t], O) : T[t];
            S
              ? (o.copy(a.normals[e]).multiplyScalar(n.x),
                s.copy(a.binormals[e]).multiplyScalar(n.y),
                l.copy(M[e]).add(o).add(s),
                B(l.x, l.y, l.z))
              : B(n.x, n.y, (d / u) * e);
          }
        for (let e = _ - 1; e >= 0; e--) {
          let t = e / _,
            n = f * Math.cos((t * Math.PI) / 2),
            i = m * Math.sin((t * Math.PI) / 2) + g;
          for (let e = 0, t = w.length; e < t; e++) {
            let t = R(w[e], U[e], i);
            B(t.x, t.y, d + n);
          }
          for (let e = 0, t = b.length; e < t; e++) {
            let t = b[e];
            D = N[e];
            for (let e = 0, r = t.length; e < r; e++) {
              let r = R(t[e], D[e], i);
              S ? B(r.x, r.y + M[u - 1].y, M[u - 1].x + n) : B(r.x, r.y, d + n);
            }
          }
        }
        function F(e, t) {
          let r = e.length;
          for (; --r >= 0; ) {
            let a = r,
              s = r - 1;
            s < 0 && (s = e.length - 1);
            for (let e = 0, r = u + 2 * _; e < r; e++) {
              let r = C * e,
                o = C * (e + 1);
              !(function (e, t, r, a) {
                V(e), V(t), V(a), V(t), V(r), V(a);
                let s = i.length / 3,
                  o = y.generateSideWallUV(n, i, s - 6, s - 3, s - 2, s - 1);
                H(o[0]), H(o[1]), H(o[3]), H(o[1]), H(o[2]), H(o[3]);
              })(t + a + r, t + s + r, t + s + o, t + a + o);
            }
          }
        }
        function B(e, t, n) {
          h.push(e), h.push(t), h.push(n);
        }
        function z(e, t, r) {
          V(e), V(t), V(r);
          let a = i.length / 3,
            s = y.generateTopUV(n, i, a - 3, a - 2, a - 1);
          H(s[0]), H(s[1]), H(s[2]);
        }
        function V(e) {
          i.push(h[3 * e + 0]), i.push(h[3 * e + 1]), i.push(h[3 * e + 2]);
        }
        function H(e) {
          r.push(e.x), r.push(e.y);
        }
        (function () {
          let e = i.length / 3;
          if (p) {
            let e = 0 * C;
            for (let t = 0; t < P; t++) {
              let n = A[t];
              z(n[2] + e, n[1] + e, n[0] + e);
            }
            e = C * (u + 2 * _);
            for (let t = 0; t < P; t++) {
              let n = A[t];
              z(n[0] + e, n[1] + e, n[2] + e);
            }
          } else {
            for (let e = 0; e < P; e++) {
              let t = A[e];
              z(t[2], t[1], t[0]);
            }
            for (let e = 0; e < P; e++) {
              let t = A[e];
              z(t[0] + C * u, t[1] + C * u, t[2] + C * u);
            }
          }
          n.addGroup(e, i.length / 3 - e, 0);
        })(),
          (function () {
            let e = i.length / 3,
              t = 0;
            F(w, 0), (t += w.length);
            for (let e = 0, n = b.length; e < n; e++) {
              let n = b[e];
              F(n, t), (t += n.length);
            }
            n.addGroup(e, i.length / 3 - e, 1);
          })();
      })(e[a]);
    this.setAttribute("position", new th(i, 3)),
      this.setAttribute("uv", new th(r, 2)),
      this.computeVertexNormals();
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (function (e, t, n) {
      if (((n.shapes = []), Array.isArray(e)))
        for (let t = 0, i = e.length; t < i; t++) {
          let i = e[t];
          n.shapes.push(i.uuid);
        }
      else n.shapes.push(e.uuid);
      return (
        (n.options = Object.assign({}, t)),
        void 0 !== t.extrudePath &&
          (n.options.extrudePath = t.extrudePath.toJSON()),
        n
      );
    })(this.parameters.shapes, this.parameters.options, e);
  }
  static fromJSON(e, t) {
    let n = [];
    for (let i = 0, r = e.shapes.length; i < r; i++) {
      let r = t[e.shapes[i]];
      n.push(r);
    }
    let i = e.options.extrudePath;
    return (
      void 0 !== i && (e.options.extrudePath = new na[i.type]().fromJSON(i)),
      new nI(n, e.options)
    );
  }
}
const nO = {
  generateTopUV: function (e, t, n, i, r) {
    let a = t[3 * n],
      s = t[3 * n + 1],
      o = t[3 * i],
      l = t[3 * i + 1],
      h = t[3 * r],
      c = t[3 * r + 1];
    return [new x(a, s), new x(o, l), new x(h, c)];
  },
  generateSideWallUV: function (e, t, n, i, r, a) {
    let s = t[3 * n],
      o = t[3 * n + 1],
      l = t[3 * n + 2],
      h = t[3 * i],
      c = t[3 * i + 1],
      u = t[3 * i + 2],
      d = t[3 * r],
      p = t[3 * r + 1],
      f = t[3 * r + 2],
      m = t[3 * a],
      g = t[3 * a + 1],
      _ = t[3 * a + 2];
    return Math.abs(o - c) < Math.abs(s - h)
      ? [new x(s, 1 - l), new x(h, 1 - u), new x(d, 1 - f), new x(m, 1 - _)]
      : [new x(o, 1 - l), new x(c, 1 - u), new x(p, 1 - f), new x(g, 1 - _)];
  },
};
class nF extends np {
  constructor(e = 1, t = 0) {
    let n = (1 + Math.sqrt(5)) / 2;
    super(
      [
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        0,
        0,
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        n,
        0,
        -1,
        n,
        0,
        1,
        -n,
        0,
        -1,
        -n,
        0,
        1,
      ],
      [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ],
      e,
      t
    ),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new nF(e.radius, e.detail);
  }
}
class nB extends np {
  constructor(e = 1, t = 0) {
    super(
      [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2],
      e,
      t
    ),
      (this.type = "OctahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new nB(e.radius, e.detail);
  }
}
class nz extends t_ {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    let r = e / 2,
      a = t / 2,
      s = Math.floor(n),
      o = Math.floor(i),
      l = s + 1,
      h = o + 1,
      c = e / s,
      u = t / o,
      d = [],
      p = [],
      f = [],
      m = [];
    for (let e = 0; e < h; e++) {
      let t = e * u - a;
      for (let n = 0; n < l; n++) {
        let i = n * c - r;
        p.push(i, -t, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - e / o);
      }
    }
    for (let e = 0; e < o; e++)
      for (let t = 0; t < s; t++) {
        let n = t + l * e,
          i = t + l * (e + 1),
          r = t + 1 + l * (e + 1),
          a = t + 1 + l * e;
        d.push(n, i, a), d.push(i, r, a);
      }
    this.setIndex(d),
      this.setAttribute("position", new th(p, 3)),
      this.setAttribute("normal", new th(f, 3)),
      this.setAttribute("uv", new th(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new nz(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class nV extends t_ {
  constructor(e = 0.5, t = 1, n = 32, i = 1, r = 0, a = 2 * Math.PI) {
    super(),
      (this.type = "RingGeometry"),
      (this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: n,
        phiSegments: i,
        thetaStart: r,
        thetaLength: a,
      }),
      (n = Math.max(3, n));
    let s = [],
      o = [],
      l = [],
      h = [],
      c = e,
      u = (t - e) / (i = Math.max(1, i)),
      d = new G(),
      p = new x();
    for (let e = 0; e <= i; e++) {
      for (let e = 0; e <= n; e++) {
        let i = r + (e / n) * a;
        (d.x = c * Math.cos(i)),
          (d.y = c * Math.sin(i)),
          o.push(d.x, d.y, d.z),
          l.push(0, 0, 1),
          (p.x = (d.x / t + 1) / 2),
          (p.y = (d.y / t + 1) / 2),
          h.push(p.x, p.y);
      }
      c += u;
    }
    for (let e = 0; e < i; e++) {
      let t = e * (n + 1);
      for (let e = 0; e < n; e++) {
        let i = e + t,
          r = i + n + 1,
          a = i + n + 2,
          o = i + 1;
        s.push(i, r, o), s.push(r, a, o);
      }
    }
    this.setIndex(s),
      this.setAttribute("position", new th(o, 3)),
      this.setAttribute("normal", new th(l, 3)),
      this.setAttribute("uv", new th(h, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new nV(
      e.innerRadius,
      e.outerRadius,
      e.thetaSegments,
      e.phiSegments,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class nH extends t_ {
  constructor(
    e = new nm([new x(0, 0.5), new x(-0.5, -0.5), new x(0.5, -0.5)]),
    t = 12
  ) {
    super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = { shapes: e, curveSegments: t });
    let n = [],
      i = [],
      r = [],
      a = [],
      s = 0,
      o = 0;
    if (!1 === Array.isArray(e)) l(e);
    else
      for (let t = 0; t < e.length; t++)
        l(e[t]), this.addGroup(s, o, t), (s += o), (o = 0);
    function l(e) {
      let s = i.length / 3,
        l = e.extractPoints(t),
        h = l.shape,
        c = l.holes;
      !1 === nU.isClockWise(h) && (h = h.reverse());
      for (let e = 0, t = c.length; e < t; e++) {
        let t = c[e];
        !0 === nU.isClockWise(t) && (c[e] = t.reverse());
      }
      let u = nU.triangulateShape(h, c);
      for (let e = 0, t = c.length; e < t; e++) {
        let t = c[e];
        h = h.concat(t);
      }
      for (let e = 0, t = h.length; e < t; e++) {
        let t = h[e];
        i.push(t.x, t.y, 0), r.push(0, 0, 1), a.push(t.x, t.y);
      }
      for (let e = 0, t = u.length; e < t; e++) {
        let t = u[e],
          i = t[0] + s,
          r = t[1] + s,
          a = t[2] + s;
        n.push(i, r, a), (o += 3);
      }
    }
    this.setIndex(n),
      this.setAttribute("position", new th(i, 3)),
      this.setAttribute("normal", new th(r, 3)),
      this.setAttribute("uv", new th(a, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (function (e, t) {
      if (((t.shapes = []), Array.isArray(e)))
        for (let n = 0, i = e.length; n < i; n++) {
          let i = e[n];
          t.shapes.push(i.uuid);
        }
      else t.shapes.push(e.uuid);
      return t;
    })(this.parameters.shapes, e);
  }
  static fromJSON(e, t) {
    let n = [];
    for (let i = 0, r = e.shapes.length; i < r; i++) {
      let r = t[e.shapes[i]];
      n.push(r);
    }
    return new nH(n, e.curveSegments);
  }
}
class nG extends t_ {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    i = 0,
    r = 2 * Math.PI,
    a = 0,
    s = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: a,
        thetaLength: s,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    let o = Math.min(a + s, Math.PI),
      l = 0,
      h = [],
      c = new G(),
      u = new G(),
      d = [],
      p = [],
      f = [],
      m = [];
    for (let d = 0; d <= n; d++) {
      let g = [],
        _ = d / n,
        v = 0;
      0 === d && 0 === a
        ? (v = 0.5 / t)
        : d === n && o === Math.PI && (v = -0.5 / t);
      for (let n = 0; n <= t; n++) {
        let o = n / t;
        (c.x = -e * Math.cos(i + o * r) * Math.sin(a + _ * s)),
          (c.y = e * Math.cos(a + _ * s)),
          (c.z = e * Math.sin(i + o * r) * Math.sin(a + _ * s)),
          p.push(c.x, c.y, c.z),
          u.copy(c).normalize(),
          f.push(u.x, u.y, u.z),
          m.push(o + v, 1 - _),
          g.push(l++);
      }
      h.push(g);
    }
    for (let e = 0; e < n; e++)
      for (let i = 0; i < t; i++) {
        let t = h[e][i + 1],
          r = h[e][i],
          s = h[e + 1][i],
          l = h[e + 1][i + 1];
        (0 !== e || a > 0) && d.push(t, r, l),
          (e !== n - 1 || o < Math.PI) && d.push(r, s, l);
      }
    this.setIndex(d),
      this.setAttribute("position", new th(p, 3)),
      this.setAttribute("normal", new th(f, 3)),
      this.setAttribute("uv", new th(m, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new nG(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class nk extends np {
  constructor(e = 1, t = 0) {
    super(
      [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
      [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
      e,
      t
    ),
      (this.type = "TetrahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new nk(e.radius, e.detail);
  }
}
class nW extends t_ {
  constructor(e = 1, t = 0.4, n = 12, i = 48, r = 2 * Math.PI) {
    super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: n,
        tubularSegments: i,
        arc: r,
      }),
      (n = Math.floor(n)),
      (i = Math.floor(i));
    let a = [],
      s = [],
      o = [],
      l = [],
      h = new G(),
      c = new G(),
      u = new G();
    for (let a = 0; a <= n; a++)
      for (let d = 0; d <= i; d++) {
        let p = (d / i) * r,
          f = (a / n) * Math.PI * 2;
        (c.x = (e + t * Math.cos(f)) * Math.cos(p)),
          (c.y = (e + t * Math.cos(f)) * Math.sin(p)),
          (c.z = t * Math.sin(f)),
          s.push(c.x, c.y, c.z),
          (h.x = e * Math.cos(p)),
          (h.y = e * Math.sin(p)),
          u.subVectors(c, h).normalize(),
          o.push(u.x, u.y, u.z),
          l.push(d / i),
          l.push(a / n);
      }
    for (let e = 1; e <= n; e++)
      for (let t = 1; t <= i; t++) {
        let n = (i + 1) * e + t - 1,
          r = (i + 1) * (e - 1) + t - 1,
          s = (i + 1) * (e - 1) + t,
          o = (i + 1) * e + t;
        a.push(n, r, o), a.push(r, s, o);
      }
    this.setIndex(a),
      this.setAttribute("position", new th(s, 3)),
      this.setAttribute("normal", new th(o, 3)),
      this.setAttribute("uv", new th(l, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new nW(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class nX extends t_ {
  constructor(e = 1, t = 0.4, n = 64, i = 8, r = 2, a = 3) {
    super(),
      (this.type = "TorusKnotGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: n,
        radialSegments: i,
        p: r,
        q: a,
      }),
      (n = Math.floor(n)),
      (i = Math.floor(i));
    let s = [],
      o = [],
      l = [],
      h = [],
      c = new G(),
      u = new G(),
      d = new G(),
      p = new G(),
      f = new G(),
      m = new G(),
      g = new G();
    for (let s = 0; s <= n; ++s) {
      let v = (s / n) * r * Math.PI * 2;
      _(v, r, a, e, d),
        _(v + 0.01, r, a, e, p),
        m.subVectors(p, d),
        g.addVectors(p, d),
        f.crossVectors(m, g),
        g.crossVectors(f, m),
        f.normalize(),
        g.normalize();
      for (let e = 0; e <= i; ++e) {
        let r = (e / i) * Math.PI * 2,
          a = -t * Math.cos(r),
          p = t * Math.sin(r);
        (c.x = d.x + (a * g.x + p * f.x)),
          (c.y = d.y + (a * g.y + p * f.y)),
          (c.z = d.z + (a * g.z + p * f.z)),
          o.push(c.x, c.y, c.z),
          u.subVectors(c, d).normalize(),
          l.push(u.x, u.y, u.z),
          h.push(s / n),
          h.push(e / i);
      }
    }
    for (let e = 1; e <= n; e++)
      for (let t = 1; t <= i; t++) {
        let n = (i + 1) * (e - 1) + (t - 1),
          r = (i + 1) * e + (t - 1),
          a = (i + 1) * e + t,
          o = (i + 1) * (e - 1) + t;
        s.push(n, r, o), s.push(r, a, o);
      }
    function _(e, t, n, i, r) {
      let a = Math.cos(e),
        s = Math.sin(e),
        o = (n / t) * e,
        l = Math.cos(o);
      (r.x = i * (2 + l) * 0.5 * a),
        (r.y = i * (2 + l) * s * 0.5),
        (r.z = i * Math.sin(o) * 0.5);
    }
    this.setIndex(s),
      this.setAttribute("position", new th(o, 3)),
      this.setAttribute("normal", new th(l, 3)),
      this.setAttribute("uv", new th(h, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new nX(
      e.radius,
      e.tube,
      e.tubularSegments,
      e.radialSegments,
      e.p,
      e.q
    );
  }
}
class nj extends t_ {
  constructor(
    e = new ni(new G(-1, -1, 0), new G(-1, 1, 0), new G(1, 1, 0)),
    t = 64,
    n = 1,
    i = 8,
    r = !1
  ) {
    super(),
      (this.type = "TubeGeometry"),
      (this.parameters = {
        path: e,
        tubularSegments: t,
        radius: n,
        radialSegments: i,
        closed: r,
      });
    let a = e.computeFrenetFrames(t, r);
    (this.tangents = a.tangents),
      (this.normals = a.normals),
      (this.binormals = a.binormals);
    let s = new G(),
      o = new G(),
      l = new x(),
      h = new G(),
      c = [],
      u = [],
      d = [],
      p = [];
    function f(r) {
      h = e.getPointAt(r / t, h);
      let l = a.normals[r],
        d = a.binormals[r];
      for (let e = 0; e <= i; e++) {
        let t = (e / i) * Math.PI * 2,
          r = Math.sin(t),
          a = -Math.cos(t);
        (o.x = a * l.x + r * d.x),
          (o.y = a * l.y + r * d.y),
          (o.z = a * l.z + r * d.z),
          o.normalize(),
          u.push(o.x, o.y, o.z),
          (s.x = h.x + n * o.x),
          (s.y = h.y + n * o.y),
          (s.z = h.z + n * o.z),
          c.push(s.x, s.y, s.z);
      }
    }
    (function () {
      for (let e = 0; e < t; e++) f(e);
      f(!1 === r ? t : 0),
        (function () {
          for (let e = 0; e <= t; e++)
            for (let n = 0; n <= i; n++)
              (l.x = e / t), (l.y = n / i), d.push(l.x, l.y);
        })(),
        (function () {
          for (let e = 1; e <= t; e++)
            for (let t = 1; t <= i; t++) {
              let n = (i + 1) * (e - 1) + (t - 1),
                r = (i + 1) * e + (t - 1),
                a = (i + 1) * e + t,
                s = (i + 1) * (e - 1) + t;
              p.push(n, r, s), p.push(r, a, s);
            }
        })();
    })(),
      this.setIndex(p),
      this.setAttribute("position", new th(c, 3)),
      this.setAttribute("normal", new th(u, 3)),
      this.setAttribute("uv", new th(d, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (e.path = this.parameters.path.toJSON()), e;
  }
  static fromJSON(e) {
    return new nj(
      new na[e.path.type]().fromJSON(e.path),
      e.tubularSegments,
      e.radius,
      e.radialSegments,
      e.closed
    );
  }
}
class nq extends tn {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class nY extends tn {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
function nJ(e, t, n) {
  return e && (n || e.constructor !== t)
    ? "number" == typeof t.BYTES_PER_ELEMENT
      ? new t(e)
      : Array.prototype.slice.call(e)
    : e;
}
class nZ {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = void 0 !== i ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    let t = this.parameterPositions,
      n = this._cachedIndex,
      i = t[n],
      r = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (void 0 === i) {
                if (e < r) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === a) break;
              if (((r = i), e < (i = t[++n]))) break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= r)) {
            let s = t[1];
            e < s && ((n = 2), (r = s));
            for (let a = n - 2; ; ) {
              if (void 0 === r)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === a) break;
              if (((i = r), e >= (r = t[--n - 1]))) break t;
            }
            (a = n), (n = 0);
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          let i = (n + a) >>> 1;
          e < t[i] ? (a = i) : (n = i + 1);
        }
        if (((i = t[n]), void 0 === (r = t[n - 1])))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (void 0 === i)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    let t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i;
    for (let e = 0; e !== i; ++e) t[e] = n[r + e];
    return t;
  }
  interpolate_() {
    throw Error("call to abstract method");
  }
  intervalChanged_() {}
}
class nK extends nZ {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 });
  }
  intervalChanged_(e, t, n) {
    let i = this.parameterPositions,
      r = e - 2,
      a = e + 1,
      s = i[r],
      o = i[a];
    if (void 0 === s)
      switch (this.getSettings_().endingStart) {
        case 2401:
          (r = e), (s = 2 * t - n);
          break;
        case 2402:
          (r = i.length - 2), (s = t + i[r] - i[r + 1]);
          break;
        default:
          (r = e), (s = n);
      }
    if (void 0 === o)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          (a = e), (o = 2 * n - t);
          break;
        case 2402:
          (a = 1), (o = n + i[1] - i[0]);
          break;
        default:
          (a = e - 1), (o = t);
      }
    let l = (n - t) * 0.5,
      h = this.valueSize;
    (this._weightPrev = l / (t - s)),
      (this._weightNext = l / (o - n)),
      (this._offsetPrev = r * h),
      (this._offsetNext = a * h);
  }
  interpolate_(e, t, n, i) {
    let r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      o = e * s,
      l = o - s,
      h = this._offsetPrev,
      c = this._offsetNext,
      u = this._weightPrev,
      d = this._weightNext,
      p = (n - t) / (i - t),
      f = p * p,
      m = f * p,
      g = -u * m + 2 * u * f - u * p,
      _ = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1,
      v = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
      x = d * m - d * f;
    for (let e = 0; e !== s; ++e)
      r[e] = g * a[h + e] + _ * a[l + e] + v * a[o + e] + x * a[c + e];
    return r;
  }
}
class n$ extends nZ {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    let r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      o = e * s,
      l = o - s,
      h = (n - t) / (i - t),
      c = 1 - h;
    for (let e = 0; e !== s; ++e) r[e] = a[l + e] * c + a[o + e] * h;
    return r;
  }
}
class nQ extends nZ {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class n0 {
  constructor(e, t, n, i) {
    if (void 0 === e)
      throw Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === t || 0 === t.length)
      throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = nJ(t, this.TimeBufferType)),
      (this.values = nJ(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    let t;
    let n = e.constructor;
    if (n.toJSON !== this.toJSON) t = n.toJSON(e);
    else {
      t = {
        name: e.name,
        times: nJ(e.times, Array),
        values: nJ(e.values, Array),
      };
      let n = e.getInterpolation();
      n !== e.DefaultInterpolation && (t.interpolation = n);
    }
    return (t.type = e.ValueTypeName), t;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new nQ(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new n$(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new nK(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
    }
    if (void 0 === t) {
      let t =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (void 0 === this.createInterpolant) {
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw Error(t);
      }
      return console.warn("THREE.KeyframeTrack:", t), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (0 !== e) {
      let t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (1 !== e) {
      let t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    let n = this.times,
      i = n.length,
      r = 0,
      a = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; -1 !== a && n[a] > t; ) --a;
    if ((++a, 0 !== r || a !== i)) {
      r >= a && (r = (a = Math.max(a, 1)) - 1);
      let e = this.getValueSize();
      (this.times = n.slice(r, a)),
        (this.values = this.values.slice(r * e, a * e));
    }
    return this;
  }
  validate() {
    let e = !0,
      t = this.getValueSize();
    t - Math.floor(t) != 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    let n = this.times,
      i = this.values,
      r = n.length;
    0 === r &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let t = 0; t !== r; t++) {
      let i = n[t];
      if ("number" == typeof i && isNaN(i)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          t,
          i
        ),
          (e = !1);
        break;
      }
      if (null !== a && a > i) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, t, i, a),
          (e = !1);
        break;
      }
      a = i;
    }
    if (void 0 !== i && ArrayBuffer.isView(i) && !(i instanceof DataView))
      for (let t = 0, n = i.length; t !== n; ++t) {
        let n = i[t];
        if (isNaN(n)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            t,
            n
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      i = 2302 === this.getInterpolation(),
      r = e.length - 1,
      a = 1;
    for (let s = 1; s < r; ++s) {
      let r = !1,
        o = e[s];
      if (o !== e[s + 1] && (1 !== s || o !== e[0])) {
        if (i) r = !0;
        else {
          let e = s * n,
            i = e - n,
            a = e + n;
          for (let s = 0; s !== n; ++s) {
            let n = t[e + s];
            if (n !== t[i + s] || n !== t[a + s]) {
              r = !0;
              break;
            }
          }
        }
      }
      if (r) {
        if (s !== a) {
          e[a] = e[s];
          let i = s * n,
            r = a * n;
          for (let e = 0; e !== n; ++e) t[r + e] = t[i + e];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let e = r * n, i = a * n, s = 0; s !== n; ++s) t[i + s] = t[e + s];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    let e = this.times.slice(),
      t = this.values.slice(),
      n = new this.constructor(this.name, e, t);
    return (n.createInterpolant = this.createInterpolant), n;
  }
}
(n0.prototype.TimeBufferType = Float32Array),
  (n0.prototype.ValueBufferType = Float32Array),
  (n0.prototype.DefaultInterpolation = 2301);
class n1 extends n0 {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
(n1.prototype.ValueTypeName = "bool"),
  (n1.prototype.ValueBufferType = Array),
  (n1.prototype.DefaultInterpolation = 2300),
  (n1.prototype.InterpolantFactoryMethodLinear = void 0),
  (n1.prototype.InterpolantFactoryMethodSmooth = void 0),
  (class extends n0 {}.prototype.ValueTypeName = "color"),
  (class extends n0 {}.prototype.ValueTypeName = "number");
class n2 extends nZ {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    let r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      o = (n - t) / (i - t),
      l = e * s;
    for (let e = l + s; l !== e; l += 4) H.slerpFlat(r, 0, a, l - s, a, l, o);
    return r;
  }
}
class n3 extends n0 {
  InterpolantFactoryMethodLinear(e) {
    return new n2(this.times, this.values, this.getValueSize(), e);
  }
}
(n3.prototype.ValueTypeName = "quaternion"),
  (n3.prototype.InterpolantFactoryMethodSmooth = void 0);
class n4 extends n0 {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
(n4.prototype.ValueTypeName = "string"),
  (n4.prototype.ValueBufferType = Array),
  (n4.prototype.DefaultInterpolation = 2300),
  (n4.prototype.InterpolantFactoryMethodLinear = void 0),
  (n4.prototype.InterpolantFactoryMethodSmooth = void 0),
  (class extends n0 {}.prototype.ValueTypeName = "vector");
const n5 = {
    enabled: !1,
    files: {},
    add: function (e, t) {
      !1 !== this.enabled && (this.files[e] = t);
    },
    get: function (e) {
      if (!1 !== this.enabled) return this.files[e];
    },
    remove: function (e) {
      delete this.files[e];
    },
    clear: function () {
      this.files = {};
    },
  },
  n6 = new (class {
    constructor(e, t, n) {
      let i;
      let r = this,
        a = !1,
        s = 0,
        o = 0,
        l = [];
      (this.onStart = void 0),
        (this.onLoad = e),
        (this.onProgress = t),
        (this.onError = n),
        (this.itemStart = function (e) {
          o++, !1 === a && void 0 !== r.onStart && r.onStart(e, s, o), (a = !0);
        }),
        (this.itemEnd = function (e) {
          s++,
            void 0 !== r.onProgress && r.onProgress(e, s, o),
            s === o && ((a = !1), void 0 !== r.onLoad && r.onLoad());
        }),
        (this.itemError = function (e) {
          void 0 !== r.onError && r.onError(e);
        }),
        (this.resolveURL = function (e) {
          return i ? i(e) : e;
        }),
        (this.setURLModifier = function (e) {
          return (i = e), this;
        }),
        (this.addHandler = function (e, t) {
          return l.push(e, t), this;
        }),
        (this.removeHandler = function (e) {
          let t = l.indexOf(e);
          return -1 !== t && l.splice(t, 2), this;
        }),
        (this.getHandler = function (e) {
          for (let t = 0, n = l.length; t < n; t += 2) {
            let n = l[t],
              i = l[t + 1];
            if ((n.global && (n.lastIndex = 0), n.test(e))) return i;
          }
          return null;
        });
    }
  })();
class n8 {
  constructor(e) {
    (this.manager = void 0 !== e ? e : n6),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    let n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
n8.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class n9 extends n8 {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    let r = this,
      a = n5.get(e);
    if (void 0 !== a)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    let s = E("img");
    function o() {
      h(), n5.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function l(t) {
      h(), i && i(t), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      s.removeEventListener("load", o, !1),
        s.removeEventListener("error", l, !1);
    }
    return (
      s.addEventListener("load", o, !1),
      s.addEventListener("error", l, !1),
      "data:" !== e.slice(0, 5) &&
        void 0 !== this.crossOrigin &&
        (s.crossOrigin = this.crossOrigin),
      r.manager.itemStart(e),
      (s.src = e),
      s
    );
  }
}
class n7 extends tH {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
const ie = "\\[\\]\\.:\\/",
  it = RegExp("[" + ie + "]", "g"),
  ii = "[^" + ie + "]",
  ir = "[^" + ie.replace("\\.", "") + "]",
  ia = /((?:WC+[\/:])*)/.source.replace("WC", ii),
  is = RegExp(
    "^" +
      ia +
      /(WCOD+)?/.source.replace("WCOD", ir) +
      /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ii) +
      /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ii) +
      "$"
  ),
  io = ["material", "materials", "bones", "map"];
class il {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || il.parseTrackName(t)),
      (this.node = il.findNode(e, this.parsedPath.nodeName)),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new il.Composite(e, t, n)
      : new il(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(it, "");
  }
  static parseTrackName(e) {
    let t = is.exec(e);
    if (null === t)
      throw Error("PropertyBinding: Cannot parse trackName: " + e);
    let n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (void 0 !== i && -1 !== i) {
      let e = n.nodeName.substring(i + 1);
      -1 !== io.indexOf(e) &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = e));
    }
    if (null === n.propertyName || 0 === n.propertyName.length)
      throw Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (
      void 0 === t ||
      "" === t ||
      "." === t ||
      -1 === t ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      let n = e.skeleton.getBoneByName(t);
      if (void 0 !== n) return n;
    }
    if (e.children) {
      let n = function (e) {
          for (let i = 0; i < e.length; i++) {
            let r = e[i];
            if (r.name === t || r.uuid === t) return r;
            let a = n(r.children);
            if (a) return a;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    let n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    let n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    let n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    let n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node,
      t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName,
      r = t.propertyIndex;
    if (
      (e || ((e = il.findNode(this.rootNode, t.nodeName)), (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.warn(
        "THREE.PropertyBinding: No target node found for track: " +
          this.path +
          "."
      );
      return;
    }
    if (n) {
      let i = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let t = 0; t < e.length; t++)
            if (e[t].name === i) {
              i = t;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.map) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (void 0 === e[n]) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[n];
      }
      if (void 0 !== i) {
        if (void 0 === e[i]) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[i];
      }
    }
    let a = e[i];
    if (void 0 === a) {
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          t.nodeName +
          "." +
          i +
          " but it wasn't found.",
        e
      );
      return;
    }
    let s = this.Versioning.None;
    (this.targetObject = e),
      void 0 !== e.needsUpdate
        ? (s = this.Versioning.NeedsUpdate)
        : void 0 !== e.matrixWorldNeedsUpdate &&
          (s = this.Versioning.MatrixWorldNeedsUpdate);
    let o = this.BindingType.Direct;
    if (void 0 !== r) {
      if ("morphTargetInfluences" === i) {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
          return;
        }
        void 0 !== e.morphTargetDictionary[r] &&
          (r = e.morphTargetDictionary[r]);
      }
      (o = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = r);
    } else
      void 0 !== a.fromArray && void 0 !== a.toArray
        ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[o]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[o][s]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
function ih(e, t, n, i) {
  let r = (function (e) {
    switch (e) {
      case 1009:
      case 1010:
        return { byteLength: 1, components: 1 };
      case 1012:
      case 1011:
      case 1016:
        return { byteLength: 2, components: 1 };
      case 1017:
      case 1018:
        return { byteLength: 2, components: 4 };
      case 1014:
      case 1013:
      case 1015:
        return { byteLength: 4, components: 1 };
      case 35902:
        return { byteLength: 4, components: 3 };
    }
    throw Error(`Unknown texture type ${e}.`);
  })(i);
  switch (n) {
    case 1021:
    case 1024:
      return e * t;
    case 1025:
      return e * t * 2;
    case 1028:
    case 1029:
      return ((e * t) / r.components) * r.byteLength;
    case 1030:
    case 1031:
      return ((e * t * 2) / r.components) * r.byteLength;
    case 1022:
      return ((e * t * 3) / r.components) * r.byteLength;
    case 1023:
    case 1033:
      return ((e * t * 4) / r.components) * r.byteLength;
    case 33776:
    case 33777:
    case 36196:
    case 37492:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case 33778:
    case 33779:
    case 37496:
    case 37808:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 35841:
    case 35843:
      return (Math.max(e, 16) * Math.max(t, 8)) / 4;
    case 35840:
    case 35842:
      return (Math.max(e, 8) * Math.max(t, 8)) / 2;
    case 37809:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case 37810:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case 37811:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case 37812:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case 37813:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case 37814:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case 37815:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case 37816:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case 37817:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case 37818:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case 37819:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case 37820:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case 37821:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
    case 36285:
    case 36286:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
  }
  throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function ic() {
  let e = null,
    t = !1,
    n = null,
    i = null;
  function r(t, a) {
    n(t, a), (i = e.requestAnimationFrame(r));
  }
  return {
    start: function () {
      !0 !== t && null !== n && ((i = e.requestAnimationFrame(r)), (t = !0));
    },
    stop: function () {
      e.cancelAnimationFrame(i), (t = !1);
    },
    setAnimationLoop: function (e) {
      n = e;
    },
    setContext: function (t) {
      e = t;
    },
  };
}
function iu(e) {
  let t = new WeakMap();
  return {
    get: function (e) {
      return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
    },
    remove: function (n) {
      n.isInterleavedBufferAttribute && (n = n.data);
      let i = t.get(n);
      i && (e.deleteBuffer(i.buffer), t.delete(n));
    },
    update: function (n, i) {
      if (
        (n.isInterleavedBufferAttribute && (n = n.data), n.isGLBufferAttribute)
      ) {
        let e = t.get(n);
        (!e || e.version < n.version) &&
          t.set(n, {
            buffer: n.buffer,
            type: n.type,
            bytesPerElement: n.elementSize,
            version: n.version,
          });
        return;
      }
      let r = t.get(n);
      if (void 0 === r)
        t.set(
          n,
          (function (t, n) {
            let i;
            let r = t.array,
              a = t.usage,
              s = r.byteLength,
              o = e.createBuffer();
            if (
              (e.bindBuffer(n, o),
              e.bufferData(n, r, a),
              t.onUploadCallback(),
              r instanceof Float32Array)
            )
              i = e.FLOAT;
            else if (r instanceof Uint16Array)
              i = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
            else if (r instanceof Int16Array) i = e.SHORT;
            else if (r instanceof Uint32Array) i = e.UNSIGNED_INT;
            else if (r instanceof Int32Array) i = e.INT;
            else if (r instanceof Int8Array) i = e.BYTE;
            else if (r instanceof Uint8Array) i = e.UNSIGNED_BYTE;
            else if (r instanceof Uint8ClampedArray) i = e.UNSIGNED_BYTE;
            else
              throw Error(
                "THREE.WebGLAttributes: Unsupported buffer data format: " + r
              );
            return {
              buffer: o,
              type: i,
              bytesPerElement: r.BYTES_PER_ELEMENT,
              version: t.version,
              size: s,
            };
          })(n, i)
        );
      else if (r.version < n.version) {
        if (r.size !== n.array.byteLength)
          throw Error(
            "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
          );
        !(function (t, n, i) {
          let r = n.array,
            a = n.updateRanges;
          if ((e.bindBuffer(i, t), 0 === a.length)) e.bufferSubData(i, 0, r);
          else {
            a.sort((e, t) => e.start - t.start);
            let t = 0;
            for (let e = 1; e < a.length; e++) {
              let n = a[t],
                i = a[e];
              i.start <= n.start + n.count + 1
                ? (n.count = Math.max(n.count, i.start + i.count - n.start))
                : (a[++t] = i);
            }
            a.length = t + 1;
            for (let t = 0, n = a.length; t < n; t++) {
              let n = a[t];
              e.bufferSubData(
                i,
                n.start * r.BYTES_PER_ELEMENT,
                r,
                n.start,
                n.count
              );
            }
            n.clearUpdateRanges();
          }
          n.onUploadCallback();
        })(r.buffer, n, i),
          (r.version = n.version);
      }
    },
  };
}
(il.Composite = class {
  constructor(e, t, n) {
    let i = n || il.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    let n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    void 0 !== i && i.getValue(e, t);
  }
  setValue(e, t) {
    let n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    let e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    let e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}),
  (il.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (il.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (il.prototype.GetterByBindingType = [
    il.prototype._getValue_direct,
    il.prototype._getValue_array,
    il.prototype._getValue_arrayElement,
    il.prototype._getValue_toArray,
  ]),
  (il.prototype.SetterByBindingTypeAndVersioning = [
    [
      il.prototype._setValue_direct,
      il.prototype._setValue_direct_setNeedsUpdate,
      il.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      il.prototype._setValue_array,
      il.prototype._setValue_array_setNeedsUpdate,
      il.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      il.prototype._setValue_arrayElement,
      il.prototype._setValue_arrayElement_setNeedsUpdate,
      il.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      il.prototype._setValue_fromArray,
      il.prototype._setValue_fromArray_setNeedsUpdate,
      il.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]),
  new Float32Array(1),
  "undefined" != typeof __THREE_DEVTOOLS__ &&
    __THREE_DEVTOOLS__.dispatchEvent(
      new CustomEvent("register", { detail: { revision: "171" } })
    ),
  "undefined" != typeof window &&
    (window.__THREE__
      ? console.warn("WARNING: Multiple instances of Three.js being imported.")
      : (window.__THREE__ = "171"));
const id = {
    alphahash_fragment:
      "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
    alphahash_pars_fragment:
      "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
    alphamap_fragment:
      "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
    alphamap_pars_fragment:
      "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
    alphatest_fragment:
      "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
    alphatest_pars_fragment:
      "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
    aomap_fragment:
      "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
    aomap_pars_fragment:
      "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
    batching_pars_vertex:
      "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif",
    batching_vertex:
      "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
    begin_vertex:
      "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
    beginnormal_vertex:
      "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs:
      "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
    iridescence_fragment:
      "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
    bumpmap_pars_fragment:
      "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
    clipping_planes_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
    clipping_planes_pars_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment:
      "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment:
      "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
    color_pars_vertex:
      "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif",
    color_vertex:
      "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif",
    common:
      "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
    cube_uv_reflection_fragment:
      "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
    defaultnormal_vertex:
      "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
    displacementmap_pars_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
    displacementmap_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment:
      "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment:
      "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
    colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    colorspace_pars_fragment:
      "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
    envmap_fragment:
      "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
    envmap_common_pars_fragment:
      "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
    envmap_pars_fragment:
      "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
    envmap_pars_vertex:
      "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
    envmap_physical_pars_fragment:
      "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
    envmap_vertex:
      "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
    fog_fragment:
      "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment:
      "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
    gradientmap_pars_fragment:
      "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
    lightmap_pars_fragment:
      "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
    lights_lambert_fragment:
      "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
    lights_lambert_pars_fragment:
      "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
    lights_pars_begin:
      "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
    lights_toon_fragment:
      "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment:
      "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
    lights_phong_fragment:
      "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment:
      "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
    lights_physical_fragment:
      "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
    lights_physical_pars_fragment:
      "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin:
      "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps:
      "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
    lights_fragment_end:
      "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
    logdepthbuf_fragment:
      "#if defined( USE_LOGDEPTHBUF )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment:
      "#if defined( USE_LOGDEPTHBUF )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex:
      "#ifdef USE_LOGDEPTHBUF\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
    logdepthbuf_vertex:
      "#ifdef USE_LOGDEPTHBUF\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
    map_fragment:
      "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
    map_particle_fragment:
      "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment:
      "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment:
      "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment:
      "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
    morphinstance_vertex:
      "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
    morphcolor_vertex:
      "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
    morphnormal_vertex:
      "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
    morphtarget_pars_vertex:
      "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
    morphtarget_vertex:
      "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
    normal_fragment_begin:
      "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
    normal_fragment_maps:
      "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normal_pars_fragment:
      "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
    normal_pars_vertex:
      "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
    normal_vertex:
      "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
    normalmap_pars_fragment:
      "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
    clearcoat_normal_fragment_begin:
      "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
    clearcoat_normal_fragment_maps:
      "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
    clearcoat_pars_fragment:
      "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
    iridescence_pars_fragment:
      "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
    opaque_fragment:
      "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
    packing:
      "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}",
    premultiplied_alpha_fragment:
      "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex:
      "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment:
      "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment:
      "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
    roughnessmap_fragment:
      "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment:
      "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment:
      "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif",
    shadowmap_pars_vertex:
      "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
    shadowmap_vertex:
      "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
    shadowmask_pars_fragment:
      "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
    skinbase_vertex:
      "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex:
      "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
    skinning_vertex:
      "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex:
      "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
    specularmap_fragment:
      "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
    specularmap_pars_fragment:
      "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
    tonemapping_fragment:
      "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment:
      "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmission_fragment:
      "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
    transmission_pars_fragment:
      "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n		\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n		\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		\n		#else\n		\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
    uv_pars_fragment:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
    uv_pars_vertex:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
    uv_vertex:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
    worldpos_vertex:
      "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
    background_vert:
      "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    background_frag:
      "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
    backgroundCube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
    backgroundCube_frag:
      "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
    cube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
    cube_frag:
      "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
    depth_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
    depth_frag:
      "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
    distanceRGBA_vert:
      "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
    distanceRGBA_frag:
      "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
    equirect_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
    equirect_frag:
      "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
    linedashed_vert:
      "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
    linedashed_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
    meshbasic_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
    meshbasic_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshlambert_vert:
      "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    meshlambert_frag:
      "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshmatcap_vert:
      "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
    meshmatcap_frag:
      "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshnormal_vert:
      "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
    meshnormal_frag:
      "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
    meshphong_vert:
      "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    meshphong_frag:
      "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshphysical_vert:
      "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
    meshphysical_frag:
      "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshtoon_vert:
      "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    meshtoon_frag:
      "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    points_vert:
      "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
    points_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
    shadow_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    shadow_frag:
      "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}",
    sprite_vert:
      "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
    sprite_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}",
  },
  ip = {
    common: {
      diffuse: { value: new e7(0xffffff) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new y() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new y() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new y() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new y() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new y() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new y() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new y() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new y() },
      normalScale: { value: new x(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new y() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new y() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new y() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new y() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new e7(0xffffff) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new e7(0xffffff) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new y() },
      alphaTest: { value: 0 },
      uvTransform: { value: new y() },
    },
    sprite: {
      diffuse: { value: new e7(0xffffff) },
      opacity: { value: 1 },
      center: { value: new x(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new y() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new y() },
      alphaTest: { value: 0 },
    },
  },
  im = {
    basic: {
      uniforms: tN([
        ip.common,
        ip.specularmap,
        ip.envmap,
        ip.aomap,
        ip.lightmap,
        ip.fog,
      ]),
      vertexShader: id.meshbasic_vert,
      fragmentShader: id.meshbasic_frag,
    },
    lambert: {
      uniforms: tN([
        ip.common,
        ip.specularmap,
        ip.envmap,
        ip.aomap,
        ip.lightmap,
        ip.emissivemap,
        ip.bumpmap,
        ip.normalmap,
        ip.displacementmap,
        ip.fog,
        ip.lights,
        { emissive: { value: new e7(0) } },
      ]),
      vertexShader: id.meshlambert_vert,
      fragmentShader: id.meshlambert_frag,
    },
    phong: {
      uniforms: tN([
        ip.common,
        ip.specularmap,
        ip.envmap,
        ip.aomap,
        ip.lightmap,
        ip.emissivemap,
        ip.bumpmap,
        ip.normalmap,
        ip.displacementmap,
        ip.fog,
        ip.lights,
        {
          emissive: { value: new e7(0) },
          specular: { value: new e7(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: id.meshphong_vert,
      fragmentShader: id.meshphong_frag,
    },
    standard: {
      uniforms: tN([
        ip.common,
        ip.envmap,
        ip.aomap,
        ip.lightmap,
        ip.emissivemap,
        ip.bumpmap,
        ip.normalmap,
        ip.displacementmap,
        ip.roughnessmap,
        ip.metalnessmap,
        ip.fog,
        ip.lights,
        {
          emissive: { value: new e7(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: id.meshphysical_vert,
      fragmentShader: id.meshphysical_frag,
    },
    toon: {
      uniforms: tN([
        ip.common,
        ip.aomap,
        ip.lightmap,
        ip.emissivemap,
        ip.bumpmap,
        ip.normalmap,
        ip.displacementmap,
        ip.gradientmap,
        ip.fog,
        ip.lights,
        { emissive: { value: new e7(0) } },
      ]),
      vertexShader: id.meshtoon_vert,
      fragmentShader: id.meshtoon_frag,
    },
    matcap: {
      uniforms: tN([
        ip.common,
        ip.bumpmap,
        ip.normalmap,
        ip.displacementmap,
        ip.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: id.meshmatcap_vert,
      fragmentShader: id.meshmatcap_frag,
    },
    points: {
      uniforms: tN([ip.points, ip.fog]),
      vertexShader: id.points_vert,
      fragmentShader: id.points_frag,
    },
    dashed: {
      uniforms: tN([
        ip.common,
        ip.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: id.linedashed_vert,
      fragmentShader: id.linedashed_frag,
    },
    depth: {
      uniforms: tN([ip.common, ip.displacementmap]),
      vertexShader: id.depth_vert,
      fragmentShader: id.depth_frag,
    },
    normal: {
      uniforms: tN([
        ip.common,
        ip.bumpmap,
        ip.normalmap,
        ip.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: id.meshnormal_vert,
      fragmentShader: id.meshnormal_frag,
    },
    sprite: {
      uniforms: tN([ip.sprite, ip.fog]),
      vertexShader: id.sprite_vert,
      fragmentShader: id.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new y() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: id.background_vert,
      fragmentShader: id.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new y() },
      },
      vertexShader: id.backgroundCube_vert,
      fragmentShader: id.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: id.cube_vert,
      fragmentShader: id.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: id.equirect_vert,
      fragmentShader: id.equirect_frag,
    },
    distanceRGBA: {
      uniforms: tN([
        ip.common,
        ip.displacementmap,
        {
          referencePosition: { value: new G() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: id.distanceRGBA_vert,
      fragmentShader: id.distanceRGBA_frag,
    },
    shadow: {
      uniforms: tN([
        ip.lights,
        ip.fog,
        { color: { value: new e7(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: id.shadow_vert,
      fragmentShader: id.shadow_frag,
    },
  };
im.physical = {
  uniforms: tN([
    im.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new y() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new y() },
      clearcoatNormalScale: { value: new x(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new y() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new y() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new y() },
      sheen: { value: 0 },
      sheenColor: { value: new e7(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new y() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new y() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new y() },
      transmissionSamplerSize: { value: new x() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new y() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new e7(0) },
      specularColor: { value: new e7(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new y() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new y() },
      anisotropyVector: { value: new x() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new y() },
    },
  ]),
  vertexShader: id.meshphysical_vert,
  fragmentShader: id.meshphysical_frag,
};
const ig = { r: 0, b: 0, g: 0 },
  i_ = new ew(),
  iv = new e_();
function ix(e, t, n, i, r, a, s) {
  let o, l;
  let c = new e7(0),
    u = !0 === a ? 0 : 1,
    d = null,
    p = 0,
    f = null;
  function m(e) {
    let i = !0 === e.isScene ? e.background : null;
    return (
      i && i.isTexture && (i = (e.backgroundBlurriness > 0 ? n : t).get(i)), i
    );
  }
  function g(t, n) {
    t.getRGB(ig, tD(e)), i.buffers.color.setClear(ig.r, ig.g, ig.b, n, s);
  }
  return {
    getClearColor: function () {
      return c;
    },
    setClearColor: function (e, t = 1) {
      c.set(e), g(c, (u = t));
    },
    getClearAlpha: function () {
      return u;
    },
    setClearAlpha: function (e) {
      g(c, (u = e));
    },
    render: function (t) {
      let n = !1,
        r = m(t);
      null === r ? g(c, u) : r && r.isColor && (g(r, 1), (n = !0));
      let a = e.xr.getEnvironmentBlendMode();
      "additive" === a
        ? i.buffers.color.setClear(0, 0, 0, 1, s)
        : "alpha-blend" === a && i.buffers.color.setClear(0, 0, 0, 0, s),
        (e.autoClear || n) &&
          (i.buffers.depth.setTest(!0),
          i.buffers.depth.setMask(!0),
          i.buffers.color.setMask(!0),
          e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
    },
    addToRenderList: function (t, n) {
      let i = m(n);
      i && (i.isCubeTexture || 306 === i.mapping)
        ? (void 0 === l &&
            ((l = new tC(
              new tL(1, 1, 1),
              new tO({
                name: "BackgroundCubeMaterial",
                uniforms: tU(im.backgroundCube.uniforms),
                vertexShader: im.backgroundCube.vertexShader,
                fragmentShader: im.backgroundCube.fragmentShader,
                side: 1,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )).geometry.deleteAttribute("normal"),
            l.geometry.deleteAttribute("uv"),
            (l.onBeforeRender = function (e, t, n) {
              this.matrixWorld.copyPosition(n.matrixWorld);
            }),
            Object.defineProperty(l.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(l)),
          i_.copy(n.backgroundRotation),
          (i_.x *= -1),
          (i_.y *= -1),
          (i_.z *= -1),
          i.isCubeTexture &&
            !1 === i.isRenderTargetTexture &&
            ((i_.y *= -1), (i_.z *= -1)),
          (l.material.uniforms.envMap.value = i),
          (l.material.uniforms.flipEnvMap.value =
            i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1),
          (l.material.uniforms.backgroundBlurriness.value =
            n.backgroundBlurriness),
          (l.material.uniforms.backgroundIntensity.value =
            n.backgroundIntensity),
          l.material.uniforms.backgroundRotation.value.setFromMatrix4(
            iv.makeRotationFromEuler(i_)
          ),
          (l.material.toneMapped = R.getTransfer(i.colorSpace) !== h),
          (d !== i || p !== i.version || f !== e.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (d = i),
            (p = i.version),
            (f = e.toneMapping)),
          l.layers.enableAll(),
          t.unshift(l, l.geometry, l.material, 0, 0, null))
        : i &&
          i.isTexture &&
          (void 0 === o &&
            ((o = new tC(
              new nz(2, 2),
              new tO({
                name: "BackgroundMaterial",
                uniforms: tU(im.background.uniforms),
                vertexShader: im.background.vertexShader,
                fragmentShader: im.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )).geometry.deleteAttribute("normal"),
            Object.defineProperty(o.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(o)),
          (o.material.uniforms.t2D.value = i),
          (o.material.uniforms.backgroundIntensity.value =
            n.backgroundIntensity),
          (o.material.toneMapped = R.getTransfer(i.colorSpace) !== h),
          !0 === i.matrixAutoUpdate && i.updateMatrix(),
          o.material.uniforms.uvTransform.value.copy(i.matrix),
          (d !== i || p !== i.version || f !== e.toneMapping) &&
            ((o.material.needsUpdate = !0),
            (d = i),
            (p = i.version),
            (f = e.toneMapping)),
          o.layers.enableAll(),
          t.unshift(o, o.geometry, o.material, 0, 0, null));
    },
    dispose: function () {
      void 0 !== l && (l.geometry.dispose(), l.material.dispose()),
        void 0 !== o && (o.geometry.dispose(), o.material.dispose());
    },
  };
}
function iy(e, t) {
  let n = e.getParameter(e.MAX_VERTEX_ATTRIBS),
    i = {},
    r = h(null),
    a = r,
    s = !1;
  function o(t) {
    return e.bindVertexArray(t);
  }
  function l(t) {
    return e.deleteVertexArray(t);
  }
  function h(e) {
    let t = [],
      i = [],
      r = [];
    for (let e = 0; e < n; e++) (t[e] = 0), (i[e] = 0), (r[e] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: t,
      enabledAttributes: i,
      attributeDivisors: r,
      object: e,
      attributes: {},
      index: null,
    };
  }
  function c() {
    let e = a.newAttributes;
    for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
  }
  function u(e) {
    d(e, 0);
  }
  function d(t, n) {
    let i = a.newAttributes,
      r = a.enabledAttributes,
      s = a.attributeDivisors;
    (i[t] = 1),
      0 === r[t] && (e.enableVertexAttribArray(t), (r[t] = 1)),
      s[t] !== n && (e.vertexAttribDivisor(t, n), (s[t] = n));
  }
  function p() {
    let t = a.newAttributes,
      n = a.enabledAttributes;
    for (let i = 0, r = n.length; i < r; i++)
      n[i] !== t[i] && (e.disableVertexAttribArray(i), (n[i] = 0));
  }
  function f(t, n, i, r, a, s, o) {
    !0 === o
      ? e.vertexAttribIPointer(t, n, i, a, s)
      : e.vertexAttribPointer(t, n, i, r, a, s);
  }
  function m() {
    g(), (s = !0), a !== r && o((a = r).object);
  }
  function g() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: function (n, r, l, m, g) {
      let _ = !1,
        v = (function (t, n, r) {
          let a = !0 === r.wireframe,
            s = i[t.id];
          void 0 === s && ((s = {}), (i[t.id] = s));
          let o = s[n.id];
          void 0 === o && ((o = {}), (s[n.id] = o));
          let l = o[a];
          return (
            void 0 === l && ((l = h(e.createVertexArray())), (o[a] = l)), l
          );
        })(m, l, r);
      a !== v && o((a = v).object),
        (_ = (function (e, t, n, i) {
          let r = a.attributes,
            s = t.attributes,
            o = 0,
            l = n.getAttributes();
          for (let t in l)
            if (l[t].location >= 0) {
              let n = r[t],
                i = s[t];
              if (
                (void 0 === i &&
                  ("instanceMatrix" === t &&
                    e.instanceMatrix &&
                    (i = e.instanceMatrix),
                  "instanceColor" === t &&
                    e.instanceColor &&
                    (i = e.instanceColor)),
                void 0 === n || n.attribute !== i || (i && n.data !== i.data))
              )
                return !0;
              o++;
            }
          return a.attributesNum !== o || a.index !== i;
        })(n, m, l, g)) &&
          (function (e, t, n, i) {
            let r = {},
              s = t.attributes,
              o = 0,
              l = n.getAttributes();
            for (let t in l)
              if (l[t].location >= 0) {
                let n = s[t];
                void 0 === n &&
                  ("instanceMatrix" === t &&
                    e.instanceMatrix &&
                    (n = e.instanceMatrix),
                  "instanceColor" === t &&
                    e.instanceColor &&
                    (n = e.instanceColor));
                let i = {};
                (i.attribute = n),
                  n && n.data && (i.data = n.data),
                  (r[t] = i),
                  o++;
              }
            (a.attributes = r), (a.attributesNum = o), (a.index = i);
          })(n, m, l, g),
        null !== g && t.update(g, e.ELEMENT_ARRAY_BUFFER),
        (_ || s) &&
          ((s = !1),
          (function (n, i, r, a) {
            c();
            let s = a.attributes,
              o = r.getAttributes(),
              l = i.defaultAttributeValues;
            for (let i in o) {
              let r = o[i];
              if (r.location >= 0) {
                let o = s[i];
                if (
                  (void 0 === o &&
                    ("instanceMatrix" === i &&
                      n.instanceMatrix &&
                      (o = n.instanceMatrix),
                    "instanceColor" === i &&
                      n.instanceColor &&
                      (o = n.instanceColor)),
                  void 0 !== o)
                ) {
                  let i = o.normalized,
                    s = o.itemSize,
                    l = t.get(o);
                  if (void 0 === l) continue;
                  let h = l.buffer,
                    c = l.type,
                    p = l.bytesPerElement,
                    m =
                      c === e.INT || c === e.UNSIGNED_INT || 1013 === o.gpuType;
                  if (o.isInterleavedBufferAttribute) {
                    let t = o.data,
                      l = t.stride,
                      g = o.offset;
                    if (t.isInstancedInterleavedBuffer) {
                      for (let e = 0; e < r.locationSize; e++)
                        d(r.location + e, t.meshPerAttribute);
                      !0 !== n.isInstancedMesh &&
                        void 0 === a._maxInstanceCount &&
                        (a._maxInstanceCount = t.meshPerAttribute * t.count);
                    } else
                      for (let e = 0; e < r.locationSize; e++)
                        u(r.location + e);
                    e.bindBuffer(e.ARRAY_BUFFER, h);
                    for (let e = 0; e < r.locationSize; e++)
                      f(
                        r.location + e,
                        s / r.locationSize,
                        c,
                        i,
                        l * p,
                        (g + (s / r.locationSize) * e) * p,
                        m
                      );
                  } else {
                    if (o.isInstancedBufferAttribute) {
                      for (let e = 0; e < r.locationSize; e++)
                        d(r.location + e, o.meshPerAttribute);
                      !0 !== n.isInstancedMesh &&
                        void 0 === a._maxInstanceCount &&
                        (a._maxInstanceCount = o.meshPerAttribute * o.count);
                    } else
                      for (let e = 0; e < r.locationSize; e++)
                        u(r.location + e);
                    e.bindBuffer(e.ARRAY_BUFFER, h);
                    for (let e = 0; e < r.locationSize; e++)
                      f(
                        r.location + e,
                        s / r.locationSize,
                        c,
                        i,
                        s * p,
                        (s / r.locationSize) * e * p,
                        m
                      );
                  }
                } else if (void 0 !== l) {
                  let t = l[i];
                  if (void 0 !== t)
                    switch (t.length) {
                      case 2:
                        e.vertexAttrib2fv(r.location, t);
                        break;
                      case 3:
                        e.vertexAttrib3fv(r.location, t);
                        break;
                      case 4:
                        e.vertexAttrib4fv(r.location, t);
                        break;
                      default:
                        e.vertexAttrib1fv(r.location, t);
                    }
                }
              }
            }
            p();
          })(n, r, l, m),
          null !== g && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(g).buffer));
    },
    reset: m,
    resetDefaultState: g,
    dispose: function () {
      for (let e in (m(), i)) {
        let t = i[e];
        for (let e in t) {
          let n = t[e];
          for (let e in n) l(n[e].object), delete n[e];
          delete t[e];
        }
        delete i[e];
      }
    },
    releaseStatesOfGeometry: function (e) {
      if (void 0 === i[e.id]) return;
      let t = i[e.id];
      for (let e in t) {
        let n = t[e];
        for (let e in n) l(n[e].object), delete n[e];
        delete t[e];
      }
      delete i[e.id];
    },
    releaseStatesOfProgram: function (e) {
      for (let t in i) {
        let n = i[t];
        if (void 0 === n[e.id]) continue;
        let r = n[e.id];
        for (let e in r) l(r[e].object), delete r[e];
        delete n[e.id];
      }
    },
    initAttributes: c,
    enableAttribute: u,
    disableUnusedAttributes: p,
  };
}
function iM(e, t, n) {
  let i;
  function r(t, r, a) {
    0 !== a && (e.drawArraysInstanced(i, t, r, a), n.update(r, i, a));
  }
  (this.setMode = function (e) {
    i = e;
  }),
    (this.render = function (t, r) {
      e.drawArrays(i, t, r), n.update(r, i, 1);
    }),
    (this.renderInstances = r),
    (this.renderMultiDraw = function (e, r, a) {
      if (0 === a) return;
      t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, e, 0, r, 0, a);
      let s = 0;
      for (let e = 0; e < a; e++) s += r[e];
      n.update(s, i, 1);
    }),
    (this.renderMultiDrawInstances = function (e, a, s, o) {
      if (0 === s) return;
      let l = t.get("WEBGL_multi_draw");
      if (null === l) for (let t = 0; t < e.length; t++) r(e[t], a[t], o[t]);
      else {
        l.multiDrawArraysInstancedWEBGL(i, e, 0, a, 0, o, 0, s);
        let t = 0;
        for (let e = 0; e < s; e++) t += a[e] * o[e];
        n.update(t, i, 1);
      }
    });
}
function iS(e, t, n, i) {
  let r;
  function a(t) {
    if ("highp" === t) {
      if (
        e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision >
          0 &&
        e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      t = "mediump";
    }
    return "mediump" === t &&
      e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision >
        0 &&
      e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let s = void 0 !== n.precision ? n.precision : "highp",
    o = a(s);
  o !== s &&
    (console.warn(
      "THREE.WebGLRenderer:",
      s,
      "not supported, using",
      o,
      "instead."
    ),
    (s = o));
  let l = !0 === n.logarithmicDepthBuffer,
    h = !0 === n.reverseDepthBuffer && t.has("EXT_clip_control"),
    c = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
    u = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    d = e.getParameter(e.MAX_TEXTURE_SIZE),
    p = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
    f = e.getParameter(e.MAX_VERTEX_ATTRIBS),
    m = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: function () {
      if (void 0 !== r) return r;
      if (!0 === t.has("EXT_texture_filter_anisotropic")) {
        let n = t.get("EXT_texture_filter_anisotropic");
        r = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else r = 0;
      return r;
    },
    getMaxPrecision: a,
    textureFormatReadable: function (t) {
      return (
        1023 === t ||
        i.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)
      );
    },
    textureTypeReadable: function (n) {
      let r =
        1016 === n &&
        (t.has("EXT_color_buffer_half_float") ||
          t.has("EXT_color_buffer_float"));
      return (
        1009 === n ||
        i.convert(n) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) ||
        1015 === n ||
        !!r
      );
    },
    precision: s,
    logarithmicDepthBuffer: l,
    reverseDepthBuffer: h,
    maxTextures: c,
    maxVertexTextures: u,
    maxTextureSize: d,
    maxCubemapSize: p,
    maxAttributes: f,
    maxVertexUniforms: m,
    maxVaryings: e.getParameter(e.MAX_VARYING_VECTORS),
    maxFragmentUniforms: e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
    vertexTextures: u > 0,
    maxSamples: e.getParameter(e.MAX_SAMPLES),
  };
}
function iE(e) {
  let t = this,
    n = null,
    i = 0,
    r = !1,
    a = !1,
    s = new tY(),
    o = new y(),
    l = { value: null, needsUpdate: !1 };
  function h(e, n, i, r) {
    let a = null !== e ? e.length : 0,
      h = null;
    if (0 !== a) {
      if (((h = l.value), !0 !== r || null === h)) {
        let t = i + 4 * a,
          r = n.matrixWorldInverse;
        o.getNormalMatrix(r),
          (null === h || h.length < t) && (h = new Float32Array(t));
        for (let t = 0, n = i; t !== a; ++t, n += 4)
          s.copy(e[t]).applyMatrix4(r, o),
            s.normal.toArray(h, n),
            (h[n + 3] = s.constant);
      }
      (l.value = h), (l.needsUpdate = !0);
    }
    return (t.numPlanes = a), (t.numIntersection = 0), h;
  }
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (e, t) {
      let n = 0 !== e.length || t || 0 !== i || r;
      return (r = t), (i = e.length), n;
    }),
    (this.beginShadows = function () {
      (a = !0), h(null);
    }),
    (this.endShadows = function () {
      a = !1;
    }),
    (this.setGlobalState = function (e, t) {
      n = h(e, t, 0);
    }),
    (this.setState = function (s, o, c) {
      let u = s.clippingPlanes,
        d = s.clipIntersection,
        p = s.clipShadows,
        f = e.get(s);
      if (r && null !== u && 0 !== u.length && (!a || p)) {
        let e = a ? 0 : i,
          t = 4 * e,
          r = f.clippingState || null;
        (l.value = r), (r = h(u, o, t, c));
        for (let e = 0; e !== t; ++e) r[e] = n[e];
        (f.clippingState = r),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += e);
      } else
        a
          ? h(null)
          : (l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
            (t.numPlanes = i),
            (t.numIntersection = 0));
    });
}
function iT(e) {
  let t = new WeakMap();
  function n(e, t) {
    return 303 === t ? (e.mapping = 301) : 304 === t && (e.mapping = 302), e;
  }
  function i(e) {
    let n = e.target;
    n.removeEventListener("dispose", i);
    let r = t.get(n);
    void 0 !== r && (t.delete(n), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        let a = r.mapping;
        if (303 === a || 304 === a) {
          if (t.has(r)) return n(t.get(r).texture, r.mapping);
          {
            let a = r.image;
            if (!a || !(a.height > 0)) return null;
            {
              let s = new tW(a.height);
              return (
                s.fromEquirectangularTexture(e, r),
                t.set(r, s),
                r.addEventListener("dispose", i),
                n(s.texture, r.mapping)
              );
            }
          }
        }
      }
      return r;
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
const ib = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  iA = new (class extends tF {
    constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
      super(),
        (this.isOrthographicCamera = !0),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = e),
        (this.right = t),
        (this.top = n),
        (this.bottom = i),
        (this.near = r),
        (this.far = a),
        this.updateProjectionMatrix();
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        (this.left = e.left),
        (this.right = e.right),
        (this.top = e.top),
        (this.bottom = e.bottom),
        (this.near = e.near),
        (this.far = e.far),
        (this.zoom = e.zoom),
        (this.view = null === e.view ? null : Object.assign({}, e.view)),
        this
      );
    }
    setViewOffset(e, t, n, i, r, a) {
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = e),
        (this.view.fullHeight = t),
        (this.view.offsetX = n),
        (this.view.offsetY = i),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      let e = (this.right - this.left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2,
        r = n - e,
        a = n + e,
        s = i + t,
        o = i - t;
      if (null !== this.view && this.view.enabled) {
        let e = (this.right - this.left) / this.view.fullWidth / this.zoom,
          t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        (r += e * this.view.offsetX),
          (a = r + e * this.view.width),
          (s -= t * this.view.offsetY),
          (o = s - t * this.view.height);
      }
      this.projectionMatrix.makeOrthographic(
        r,
        a,
        s,
        o,
        this.near,
        this.far,
        this.coordinateSystem
      ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        (t.object.zoom = this.zoom),
        (t.object.left = this.left),
        (t.object.right = this.right),
        (t.object.top = this.top),
        (t.object.bottom = this.bottom),
        (t.object.near = this.near),
        (t.object.far = this.far),
        null !== this.view && (t.object.view = Object.assign({}, this.view)),
        t
      );
    }
  })(),
  iw = new e7();
let iR = null,
  iC = 0,
  iP = 0,
  iL = !1;
const iU = (1 + Math.sqrt(5)) / 2,
  iN = 1 / iU,
  iD = [
    new G(-iU, iN, 0),
    new G(iU, iN, 0),
    new G(-iN, 0, iU),
    new G(iN, 0, iU),
    new G(0, iU, -iN),
    new G(0, iU, iN),
    new G(-1, 1, -1),
    new G(1, 1, -1),
    new G(-1, 1, 1),
    new G(1, 1, 1),
  ];
class iI {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (iR = this._renderer.getRenderTarget()),
      (iC = this._renderer.getActiveCubeFace()),
      (iP = this._renderer.getActiveMipmapLevel()),
      (iL = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    let r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    null === this._cubemapMaterial &&
      ((this._cubemapMaterial = iz()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    null === this._equirectMaterial &&
      ((this._equirectMaterial = iB()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
      null !== this._equirectMaterial && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    null !== this._blurMaterial && this._blurMaterial.dispose(),
      null !== this._pingPongRenderTarget &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(iR, iC, iP),
      (this._renderer.xr.enabled = iL),
      (e.scissorTest = !1),
      iF(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    301 === e.mapping || 302 === e.mapping
      ? this._setSize(
          0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (iR = this._renderer.getRenderTarget()),
      (iC = this._renderer.getActiveCubeFace()),
      (iP = this._renderer.getActiveMipmapLevel()),
      (iL = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    let n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    let e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: 1006,
        minFilter: 1006,
        generateMipmaps: !1,
        type: 1016,
        format: 1023,
        colorSpace: o,
        depthBuffer: !1,
      },
      i = iO(e, t, n);
    if (
      null === this._pingPongRenderTarget ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      null !== this._pingPongRenderTarget && this._dispose(),
        (this._pingPongRenderTarget = iO(e, t, n));
      let { _lodMax: i } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = (function (e) {
        let t = [],
          n = [],
          i = [],
          r = e,
          a = e - 4 + 1 + ib.length;
        for (let s = 0; s < a; s++) {
          let a = Math.pow(2, r);
          n.push(a);
          let o = 1 / a;
          s > e - 4 ? (o = ib[s - e + 4 - 1]) : 0 === s && (o = 0), i.push(o);
          let l = 1 / (a - 2),
            h = -l,
            c = 1 + l,
            u = [h, h, c, h, c, c, h, h, c, c, h, c],
            d = new Float32Array(108),
            p = new Float32Array(72),
            f = new Float32Array(36);
          for (let e = 0; e < 6; e++) {
            let t = ((e % 3) * 2) / 3 - 1,
              n = e > 2 ? 0 : -1,
              i = [
                t,
                n,
                0,
                t + 2 / 3,
                n,
                0,
                t + 2 / 3,
                n + 1,
                0,
                t,
                n,
                0,
                t + 2 / 3,
                n + 1,
                0,
                t,
                n + 1,
                0,
              ];
            d.set(i, 18 * e), p.set(u, 12 * e);
            let r = [e, e, e, e, e, e];
            f.set(r, 6 * e);
          }
          let m = new t_();
          m.setAttribute("position", new ts(d, 3)),
            m.setAttribute("uv", new ts(p, 2)),
            m.setAttribute("faceIndex", new ts(f, 1)),
            t.push(m),
            r > 4 && r--;
        }
        return { lodPlanes: t, sizeLods: n, sigmas: i };
      })(i)),
        (this._blurMaterial = new tO({
          name: "SphericalGaussianBlur",
          defines: {
            n: 20,
            CUBEUV_TEXEL_WIDTH: 1 / e,
            CUBEUV_TEXEL_HEIGHT: 1 / t,
            CUBEUV_MAX_MIP: `${i}.0`,
          },
          uniforms: {
            envMap: { value: null },
            samples: { value: 1 },
            weights: { value: new Float32Array(20) },
            latitudinal: { value: !1 },
            dTheta: { value: 0 },
            mipInt: { value: 0 },
            poleAxis: { value: new G(0, 1, 0) },
          },
          vertexShader: iV(),
          fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
          blending: 0,
          depthTest: !1,
          depthWrite: !1,
        }));
    }
    return i;
  }
  _compileMaterial(e) {
    let t = new tC(this._lodPlanes[0], e);
    this._renderer.compile(t, iA);
  }
  _sceneToCubeUV(e, t, n, i) {
    let r = new tH(90, 1, t, n),
      a = [1, -1, 1, 1, 1, 1],
      s = [1, 1, 1, -1, -1, -1],
      o = this._renderer,
      l = o.autoClear,
      h = o.toneMapping;
    o.getClearColor(iw), (o.toneMapping = 0), (o.autoClear = !1);
    let c = new ti({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1,
      }),
      u = new tC(new tL(), c),
      d = !1,
      p = e.background;
    p
      ? p.isColor && (c.color.copy(p), (e.background = null), (d = !0))
      : (c.color.copy(iw), (d = !0));
    for (let t = 0; t < 6; t++) {
      let n = t % 3;
      0 === n
        ? (r.up.set(0, a[t], 0), r.lookAt(s[t], 0, 0))
        : 1 === n
        ? (r.up.set(0, 0, a[t]), r.lookAt(0, s[t], 0))
        : (r.up.set(0, a[t], 0), r.lookAt(0, 0, s[t]));
      let l = this._cubeSize;
      iF(i, n * l, t > 2 ? l : 0, l, l),
        o.setRenderTarget(i),
        d && o.render(u, r),
        o.render(e, r);
    }
    u.geometry.dispose(),
      u.material.dispose(),
      (o.toneMapping = h),
      (o.autoClear = l),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    let n = this._renderer,
      i = 301 === e.mapping || 302 === e.mapping;
    i
      ? (null === this._cubemapMaterial && (this._cubemapMaterial = iz()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          !1 === e.isRenderTargetTexture ? -1 : 1))
      : null === this._equirectMaterial && (this._equirectMaterial = iB());
    let r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new tC(this._lodPlanes[0], r);
    r.uniforms.envMap.value = e;
    let s = this._cubeSize;
    iF(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, iA);
  }
  _applyPMREM(e) {
    let t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    let i = this._lodPlanes.length;
    for (let t = 1; t < i; t++) {
      let n = Math.sqrt(
          this._sigmas[t] * this._sigmas[t] -
            this._sigmas[t - 1] * this._sigmas[t - 1]
        ),
        r = iD[(i - t - 1) % iD.length];
      this._blur(e, t - 1, t, n, r);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    let a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r),
      this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, a, s) {
    let o = this._renderer,
      l = this._blurMaterial;
    "latitudinal" !== a &&
      "longitudinal" !== a &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    let h = new tC(this._lodPlanes[i], l),
      c = l.uniforms,
      u = this._sizeLods[n] - 1,
      d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
      p = r / d,
      f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
    f > 20 &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
      );
    let m = [],
      g = 0;
    for (let e = 0; e < 20; ++e) {
      let t = e / p,
        n = Math.exp((-t * t) / 2);
      m.push(n), 0 === e ? (g += n) : e < f && (g += 2 * n);
    }
    for (let e = 0; e < m.length; e++) m[e] = m[e] / g;
    (c.envMap.value = e.texture),
      (c.samples.value = f),
      (c.weights.value = m),
      (c.latitudinal.value = "latitudinal" === a),
      s && (c.poleAxis.value = s);
    let { _lodMax: _ } = this;
    (c.dTheta.value = d), (c.mipInt.value = _ - n);
    let v = this._sizeLods[i],
      x = 4 * (this._cubeSize - v);
    iF(t, 3 * v * (i > _ - 4 ? i - _ + 4 : 0), x, 3 * v, 2 * v),
      o.setRenderTarget(t),
      o.render(h, iA);
  }
}
function iO(e, t, n) {
  let i = new z(e, t, n);
  return (
    (i.texture.mapping = 306),
    (i.texture.name = "PMREM.cubeUv"),
    (i.scissorTest = !0),
    i
  );
}
function iF(e, t, n, i, r) {
  e.viewport.set(t, n, i, r), e.scissor.set(t, n, i, r);
}
function iB() {
  return new tO({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: iV(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function iz() {
  return new tO({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: iV(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function iV() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function iH(e) {
  let t = new WeakMap(),
    n = null;
  function i(e) {
    let n = e.target;
    n.removeEventListener("dispose", i);
    let r = t.get(n);
    void 0 !== r && (t.delete(n), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        let a = r.mapping,
          s = 303 === a || 304 === a,
          o = 301 === a || 302 === a;
        if (s || o) {
          let a = t.get(r),
            l = void 0 !== a ? a.texture.pmremVersion : 0;
          if (r.isRenderTargetTexture && r.pmremVersion !== l)
            return (
              null === n && (n = new iI(e)),
              ((a = s
                ? n.fromEquirectangular(r, a)
                : n.fromCubemap(r, a)).texture.pmremVersion = r.pmremVersion),
              t.set(r, a),
              a.texture
            );
          if (void 0 !== a) return a.texture;
          {
            let l = r.image;
            return (s && l && l.height > 0) ||
              (o &&
                l &&
                (function (e) {
                  let t = 0;
                  for (let n = 0; n < 6; n++) void 0 !== e[n] && t++;
                  return 6 === t;
                })(l))
              ? (null === n && (n = new iI(e)),
                ((a = s
                  ? n.fromEquirectangular(r)
                  : n.fromCubemap(r)).texture.pmremVersion = r.pmremVersion),
                t.set(r, a),
                r.addEventListener("dispose", i),
                a.texture)
              : null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      (t = new WeakMap()), null !== n && (n.dispose(), (n = null));
    },
  };
}
function iG(e) {
  let t = {};
  function n(n) {
    let i;
    if (void 0 !== t[n]) return t[n];
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          e.getExtension("WEBGL_depth_texture") ||
          e.getExtension("MOZ_WEBGL_depth_texture") ||
          e.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          e.getExtension("EXT_texture_filter_anisotropic") ||
          e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          e.getExtension("WEBGL_compressed_texture_s3tc") ||
          e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          e.getExtension("WEBGL_compressed_texture_pvrtc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = e.getExtension(n);
    }
    return (t[n] = i), i;
  }
  return {
    has: function (e) {
      return null !== n(e);
    },
    init: function () {
      n("EXT_color_buffer_float"),
        n("WEBGL_clip_cull_distance"),
        n("OES_texture_float_linear"),
        n("EXT_color_buffer_half_float"),
        n("WEBGL_multisampled_render_to_texture"),
        n("WEBGL_render_shared_exponent");
    },
    get: function (e) {
      let t = n(e);
      return (
        null === t &&
          b("THREE.WebGLRenderer: " + e + " extension not supported."),
        t
      );
    },
  };
}
function ik(e, t, n, i) {
  let r = {},
    a = new WeakMap();
  function s(e) {
    let o = e.target;
    for (let e in (null !== o.index && t.remove(o.index), o.attributes))
      t.remove(o.attributes[e]);
    o.removeEventListener("dispose", s), delete r[o.id];
    let l = a.get(o);
    l && (t.remove(l), a.delete(o)),
      i.releaseStatesOfGeometry(o),
      !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
      n.memory.geometries--;
  }
  function o(e) {
    let n = [],
      i = e.index,
      r = e.attributes.position,
      s = 0;
    if (null !== i) {
      let e = i.array;
      s = i.version;
      for (let t = 0, i = e.length; t < i; t += 3) {
        let i = e[t + 0],
          r = e[t + 1],
          a = e[t + 2];
        n.push(i, r, r, a, a, i);
      }
    } else {
      if (void 0 === r) return;
      let e = r.array;
      s = r.version;
      for (let t = 0, i = e.length / 3 - 1; t < i; t += 3) {
        let e = t + 0,
          i = t + 1,
          r = t + 2;
        n.push(e, i, i, r, r, e);
      }
    }
    let o = new (S(n) ? tl : to)(n, 1);
    o.version = s;
    let l = a.get(e);
    l && t.remove(l), a.set(e, o);
  }
  return {
    get: function (e, t) {
      return (
        !0 === r[t.id] ||
          (t.addEventListener("dispose", s),
          (r[t.id] = !0),
          n.memory.geometries++),
        t
      );
    },
    update: function (n) {
      let i = n.attributes;
      for (let n in i) t.update(i[n], e.ARRAY_BUFFER);
    },
    getWireframeAttribute: function (e) {
      let t = a.get(e);
      if (t) {
        let n = e.index;
        null !== n && t.version < n.version && o(e);
      } else o(e);
      return a.get(e);
    },
  };
}
function iW(e, t, n) {
  let i, r, a;
  function s(t, s, o) {
    0 !== o && (e.drawElementsInstanced(i, s, r, t * a, o), n.update(s, i, o));
  }
  (this.setMode = function (e) {
    i = e;
  }),
    (this.setIndex = function (e) {
      (r = e.type), (a = e.bytesPerElement);
    }),
    (this.render = function (t, s) {
      e.drawElements(i, s, r, t * a), n.update(s, i, 1);
    }),
    (this.renderInstances = s),
    (this.renderMultiDraw = function (e, a, s) {
      if (0 === s) return;
      t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, a, 0, r, e, 0, s);
      let o = 0;
      for (let e = 0; e < s; e++) o += a[e];
      n.update(o, i, 1);
    }),
    (this.renderMultiDrawInstances = function (e, o, l, h) {
      if (0 === l) return;
      let c = t.get("WEBGL_multi_draw");
      if (null === c)
        for (let t = 0; t < e.length; t++) s(e[t] / a, o[t], h[t]);
      else {
        c.multiDrawElementsInstancedWEBGL(i, o, 0, r, e, 0, h, 0, l);
        let t = 0;
        for (let e = 0; e < l; e++) t += o[e] * h[e];
        n.update(t, i, 1);
      }
    });
}
function iX(e) {
  let t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return {
    memory: { geometries: 0, textures: 0 },
    render: t,
    programs: null,
    autoReset: !0,
    reset: function () {
      (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
    },
    update: function (n, i, r) {
      switch ((t.calls++, i)) {
        case e.TRIANGLES:
          t.triangles += (n / 3) * r;
          break;
        case e.LINES:
          t.lines += (n / 2) * r;
          break;
        case e.LINE_STRIP:
          t.lines += r * (n - 1);
          break;
        case e.LINE_LOOP:
          t.lines += r * n;
          break;
        case e.POINTS:
          t.points += r * n;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", i);
      }
    },
  };
}
function ij(e, t, n) {
  let i = new WeakMap(),
    r = new F();
  return {
    update: function (a, s, o) {
      let l = a.morphTargetInfluences,
        h =
          s.morphAttributes.position ||
          s.morphAttributes.normal ||
          s.morphAttributes.color,
        c = void 0 !== h ? h.length : 0,
        u = i.get(s);
      if (void 0 === u || u.count !== c) {
        void 0 !== u && u.texture.dispose();
        let e = void 0 !== s.morphAttributes.position,
          n = void 0 !== s.morphAttributes.normal,
          a = void 0 !== s.morphAttributes.color,
          o = s.morphAttributes.position || [],
          l = s.morphAttributes.normal || [],
          h = s.morphAttributes.color || [],
          d = 0;
        !0 === e && (d = 1), !0 === n && (d = 2), !0 === a && (d = 3);
        let p = s.attributes.position.count * d,
          f = 1;
        p > t.maxTextureSize &&
          ((f = Math.ceil(p / t.maxTextureSize)), (p = t.maxTextureSize));
        let m = new Float32Array(p * f * 4 * c),
          g = new V(m, p, f, c);
        (g.type = 1015), (g.needsUpdate = !0);
        let _ = 4 * d;
        for (let t = 0; t < c; t++) {
          let i = o[t],
            s = l[t],
            c = h[t],
            u = p * f * 4 * t;
          for (let t = 0; t < i.count; t++) {
            let o = t * _;
            !0 === e &&
              (r.fromBufferAttribute(i, t),
              (m[u + o + 0] = r.x),
              (m[u + o + 1] = r.y),
              (m[u + o + 2] = r.z),
              (m[u + o + 3] = 0)),
              !0 === n &&
                (r.fromBufferAttribute(s, t),
                (m[u + o + 4] = r.x),
                (m[u + o + 5] = r.y),
                (m[u + o + 6] = r.z),
                (m[u + o + 7] = 0)),
              !0 === a &&
                (r.fromBufferAttribute(c, t),
                (m[u + o + 8] = r.x),
                (m[u + o + 9] = r.y),
                (m[u + o + 10] = r.z),
                (m[u + o + 11] = 4 === c.itemSize ? r.w : 1));
          }
        }
        (u = { count: c, texture: g, size: new x(p, f) }),
          i.set(s, u),
          s.addEventListener("dispose", function e() {
            g.dispose(), i.delete(s), s.removeEventListener("dispose", e);
          });
      }
      if (!0 === a.isInstancedMesh && null !== a.morphTexture)
        o.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
      else {
        let t = 0;
        for (let e = 0; e < l.length; e++) t += l[e];
        let n = s.morphTargetsRelative ? 1 : 1 - t;
        o.getUniforms().setValue(e, "morphTargetBaseInfluence", n),
          o.getUniforms().setValue(e, "morphTargetInfluences", l);
      }
      o.getUniforms().setValue(e, "morphTargetsTexture", u.texture, n),
        o.getUniforms().setValue(e, "morphTargetsTextureSize", u.size);
    },
  };
}
function iq(e, t, n, i) {
  let r = new WeakMap();
  function a(e) {
    let t = e.target;
    t.removeEventListener("dispose", a),
      n.remove(t.instanceMatrix),
      null !== t.instanceColor && n.remove(t.instanceColor);
  }
  return {
    update: function (s) {
      let o = i.render.frame,
        l = s.geometry,
        h = t.get(s, l);
      if (
        (r.get(h) !== o && (t.update(h), r.set(h, o)),
        s.isInstancedMesh &&
          (!1 === s.hasEventListener("dispose", a) &&
            s.addEventListener("dispose", a),
          r.get(s) !== o &&
            (n.update(s.instanceMatrix, e.ARRAY_BUFFER),
            null !== s.instanceColor &&
              n.update(s.instanceColor, e.ARRAY_BUFFER),
            r.set(s, o))),
        s.isSkinnedMesh)
      ) {
        let e = s.skeleton;
        r.get(e) !== o && (e.update(), r.set(e, o));
      }
      return h;
    },
    dispose: function () {
      r = new WeakMap();
    },
  };
}
const iY = new O(),
  iJ = new tQ(1, 1),
  iZ = new V(),
  iK = new (class extends O {
    constructor(e = null, t = 1, n = 1, i = 1) {
      super(null),
        (this.isData3DTexture = !0),
        (this.image = { data: e, width: t, height: n, depth: i }),
        (this.magFilter = 1003),
        (this.minFilter = 1003),
        (this.wrapR = 1001),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1);
    }
  })(),
  i$ = new tk(),
  iQ = [],
  i0 = [],
  i1 = new Float32Array(16),
  i2 = new Float32Array(9),
  i3 = new Float32Array(4);
function i4(e, t, n) {
  let i = e[0];
  if (i <= 0 || i > 0) return e;
  let r = t * n,
    a = iQ[r];
  if ((void 0 === a && ((a = new Float32Array(r)), (iQ[r] = a)), 0 !== t)) {
    i.toArray(a, 0);
    for (let i = 1, r = 0; i !== t; ++i) (r += n), e[i].toArray(a, r);
  }
  return a;
}
function i5(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0, i = e.length; n < i; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function i6(e, t) {
  for (let n = 0, i = t.length; n < i; n++) e[n] = t[n];
}
function i8(e, t) {
  let n = i0[t];
  void 0 === n && ((n = new Int32Array(t)), (i0[t] = n));
  for (let i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
  return n;
}
function i9(e, t) {
  let n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), (n[0] = t));
}
function i7(e, t) {
  let n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2f(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (i5(n, t)) return;
    e.uniform2fv(this.addr, t), i6(n, t);
  }
}
function re(e, t) {
  let n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3f(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else if (void 0 !== t.r)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) &&
      (e.uniform3f(this.addr, t.r, t.g, t.b),
      (n[0] = t.r),
      (n[1] = t.g),
      (n[2] = t.b));
  else {
    if (i5(n, t)) return;
    e.uniform3fv(this.addr, t), i6(n, t);
  }
}
function rt(e, t) {
  let n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (i5(n, t)) return;
    e.uniform4fv(this.addr, t), i6(n, t);
  }
}
function rn(e, t) {
  let n = this.cache,
    i = t.elements;
  if (void 0 === i) {
    if (i5(n, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), i6(n, t);
  } else {
    if (i5(n, i)) return;
    i3.set(i), e.uniformMatrix2fv(this.addr, !1, i3), i6(n, i);
  }
}
function ri(e, t) {
  let n = this.cache,
    i = t.elements;
  if (void 0 === i) {
    if (i5(n, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), i6(n, t);
  } else {
    if (i5(n, i)) return;
    i2.set(i), e.uniformMatrix3fv(this.addr, !1, i2), i6(n, i);
  }
}
function rr(e, t) {
  let n = this.cache,
    i = t.elements;
  if (void 0 === i) {
    if (i5(n, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), i6(n, t);
  } else {
    if (i5(n, i)) return;
    i1.set(i), e.uniformMatrix4fv(this.addr, !1, i1), i6(n, i);
  }
}
function ra(e, t) {
  let n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), (n[0] = t));
}
function rs(e, t) {
  let n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2i(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (i5(n, t)) return;
    e.uniform2iv(this.addr, t), i6(n, t);
  }
}
function ro(e, t) {
  let n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3i(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else {
    if (i5(n, t)) return;
    e.uniform3iv(this.addr, t), i6(n, t);
  }
}
function rl(e, t) {
  let n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4i(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (i5(n, t)) return;
    e.uniform4iv(this.addr, t), i6(n, t);
  }
}
function rh(e, t) {
  let n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), (n[0] = t));
}
function rc(e, t) {
  let n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y) &&
      (e.uniform2ui(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (i5(n, t)) return;
    e.uniform2uiv(this.addr, t), i6(n, t);
  }
}
function ru(e, t) {
  let n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) &&
      (e.uniform3ui(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else {
    if (i5(n, t)) return;
    e.uniform3uiv(this.addr, t), i6(n, t);
  }
}
function rd(e, t) {
  let n = this.cache;
  if (void 0 !== t.x)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) &&
      (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (i5(n, t)) return;
    e.uniform4uiv(this.addr, t), i6(n, t);
  }
}
function rp(e, t, n) {
  let i;
  let r = this.cache,
    a = n.allocateTextureUnit();
  r[0] !== a && (e.uniform1i(this.addr, a), (r[0] = a)),
    this.type === e.SAMPLER_2D_SHADOW
      ? ((iJ.compareFunction = 515), (i = iJ))
      : (i = iY),
    n.setTexture2D(t || i, a);
}
function rf(e, t, n) {
  let i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture3D(t || iK, r);
}
function rm(e, t, n) {
  let i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
    n.setTextureCube(t || i$, r);
}
function rg(e, t, n) {
  let i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture2DArray(t || iZ, r);
}
function r_(e, t) {
  e.uniform1fv(this.addr, t);
}
function rv(e, t) {
  let n = i4(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function rx(e, t) {
  let n = i4(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function ry(e, t) {
  let n = i4(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function rM(e, t) {
  let n = i4(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function rS(e, t) {
  let n = i4(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function rE(e, t) {
  let n = i4(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function rT(e, t) {
  e.uniform1iv(this.addr, t);
}
function rb(e, t) {
  e.uniform2iv(this.addr, t);
}
function rA(e, t) {
  e.uniform3iv(this.addr, t);
}
function rw(e, t) {
  e.uniform4iv(this.addr, t);
}
function rR(e, t) {
  e.uniform1uiv(this.addr, t);
}
function rC(e, t) {
  e.uniform2uiv(this.addr, t);
}
function rP(e, t) {
  e.uniform3uiv(this.addr, t);
}
function rL(e, t) {
  e.uniform4uiv(this.addr, t);
}
function rU(e, t, n) {
  let i = this.cache,
    r = t.length,
    a = i8(n, r);
  i5(i, a) || (e.uniform1iv(this.addr, a), i6(i, a));
  for (let e = 0; e !== r; ++e) n.setTexture2D(t[e] || iY, a[e]);
}
function rN(e, t, n) {
  let i = this.cache,
    r = t.length,
    a = i8(n, r);
  i5(i, a) || (e.uniform1iv(this.addr, a), i6(i, a));
  for (let e = 0; e !== r; ++e) n.setTexture3D(t[e] || iK, a[e]);
}
function rD(e, t, n) {
  let i = this.cache,
    r = t.length,
    a = i8(n, r);
  i5(i, a) || (e.uniform1iv(this.addr, a), i6(i, a));
  for (let e = 0; e !== r; ++e) n.setTextureCube(t[e] || i$, a[e]);
}
function rI(e, t, n) {
  let i = this.cache,
    r = t.length,
    a = i8(n, r);
  i5(i, a) || (e.uniform1iv(this.addr, a), i6(i, a));
  for (let e = 0; e !== r; ++e) n.setTexture2DArray(t[e] || iZ, a[e]);
}
class rO {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = (function (e) {
        switch (e) {
          case 5126:
            return i9;
          case 35664:
            return i7;
          case 35665:
            return re;
          case 35666:
            return rt;
          case 35674:
            return rn;
          case 35675:
            return ri;
          case 35676:
            return rr;
          case 5124:
          case 35670:
            return ra;
          case 35667:
          case 35671:
            return rs;
          case 35668:
          case 35672:
            return ro;
          case 35669:
          case 35673:
            return rl;
          case 5125:
            return rh;
          case 36294:
            return rc;
          case 36295:
            return ru;
          case 36296:
            return rd;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return rp;
          case 35679:
          case 36299:
          case 36307:
            return rf;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return rm;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return rg;
        }
      })(t.type));
  }
}
class rF {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = (function (e) {
        switch (e) {
          case 5126:
            return r_;
          case 35664:
            return rv;
          case 35665:
            return rx;
          case 35666:
            return ry;
          case 35674:
            return rM;
          case 35675:
            return rS;
          case 35676:
            return rE;
          case 5124:
          case 35670:
            return rT;
          case 35667:
          case 35671:
            return rb;
          case 35668:
          case 35672:
            return rA;
          case 35669:
          case 35673:
            return rw;
          case 5125:
            return rR;
          case 36294:
            return rC;
          case 36295:
            return rP;
          case 36296:
            return rL;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return rU;
          case 35679:
          case 36299:
          case 36307:
            return rN;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return rD;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return rI;
        }
      })(t.type));
  }
}
class rB {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    let i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      let a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const rz = /(\w+)(\])?(\[|\.)?/g;
function rV(e, t) {
  e.seq.push(t), (e.map[t.id] = t);
}
class rH {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      let n = e.getActiveUniform(t, i),
        r = e.getUniformLocation(t, n.name);
      !(function (e, t, n) {
        let i = e.name,
          r = i.length;
        for (rz.lastIndex = 0; ; ) {
          let a = rz.exec(i),
            s = rz.lastIndex,
            o = a[1],
            l = "]" === a[2],
            h = a[3];
          if ((l && (o |= 0), void 0 === h || ("[" === h && s + 2 === r))) {
            rV(n, void 0 === h ? new rO(o, e, t) : new rF(o, e, t));
            break;
          }
          {
            let e = n.map[o];
            void 0 === e && rV(n, (e = new rB(o))), (n = e);
          }
        }
      })(n, r, this);
    }
  }
  setValue(e, t, n, i) {
    let r = this.map[t];
    void 0 !== r && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    let i = t[n];
    void 0 !== i && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      let a = t[r],
        s = n[a.id];
      !1 !== s.needsUpdate && a.setValue(e, s.value, i);
    }
  }
  static seqWithValue(e, t) {
    let n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      let r = e[i];
      r.id in t && n.push(r);
    }
    return n;
  }
}
function rG(e, t, n) {
  let i = e.createShader(t);
  return e.shaderSource(i, n), e.compileShader(i), i;
}
let rk = 0;
const rW = new y();
function rX(e, t, n) {
  let i = e.getShaderParameter(t, e.COMPILE_STATUS),
    r = e.getShaderInfoLog(t).trim();
  if (i && "" === r) return "";
  let a = /ERROR: 0:(\d+)/.exec(r);
  if (!a) return r;
  {
    let i = parseInt(a[1]);
    return (
      n.toUpperCase() +
      "\n\n" +
      r +
      "\n\n" +
      (function (e, t) {
        let n = e.split("\n"),
          i = [],
          r = Math.max(t - 6, 0),
          a = Math.min(t + 6, n.length);
        for (let e = r; e < a; e++) {
          let r = e + 1;
          i.push(`${r === t ? ">" : " "} ${r}: ${n[e]}`);
        }
        return i.join("\n");
      })(e.getShaderSource(t), i)
    );
  }
}
const rj = new G();
function rq(e) {
  return "" !== e;
}
function rY(e, t) {
  let n =
    t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function rJ(e, t) {
  return e
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection
    );
}
const rZ = /^[ \t]*#include +<([\w\d./]+)>/gm;
function rK(e) {
  return e.replace(rZ, rQ);
}
const r$ = new Map();
function rQ(e, t) {
  let n = id[t];
  if (void 0 === n) {
    let e = r$.get(t);
    if (void 0 !== e)
      (n = id[e]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          t,
          e
        );
    else throw Error("Can not resolve #include <" + t + ">");
  }
  return rK(n);
}
const r0 =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function r1(e) {
  return e.replace(r0, r2);
}
function r2(e, t, n, i) {
  let r = "";
  for (let e = parseInt(t); e < parseInt(n); e++)
    r += i
      .replace(/\[\s*i\s*\]/g, "[ " + e + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, e);
  return r;
}
function r3(e) {
  let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
  return (
    "highp" === e.precision
      ? (t += "\n#define HIGH_PRECISION")
      : "mediump" === e.precision
      ? (t += "\n#define MEDIUM_PRECISION")
      : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
    t
  );
}
function r4(e, t, n, i) {
  let r, a, s, o, u, d;
  let p = e.getContext(),
    f = n.defines,
    m = n.vertexShader,
    g = n.fragmentShader,
    _ =
      ((u = "SHADOWMAP_TYPE_BASIC"),
      1 === n.shadowMapType
        ? (u = "SHADOWMAP_TYPE_PCF")
        : 2 === n.shadowMapType
        ? (u = "SHADOWMAP_TYPE_PCF_SOFT")
        : 3 === n.shadowMapType && (u = "SHADOWMAP_TYPE_VSM"),
      u),
    v = (function (e) {
      let t = "ENVMAP_TYPE_CUBE";
      if (e.envMap)
        switch (e.envMapMode) {
          case 301:
          case 302:
            t = "ENVMAP_TYPE_CUBE";
            break;
          case 306:
            t = "ENVMAP_TYPE_CUBE_UV";
        }
      return t;
    })(n),
    x =
      ((d = "ENVMAP_MODE_REFLECTION"),
      n.envMap && 302 === n.envMapMode && (d = "ENVMAP_MODE_REFRACTION"),
      d),
    y = (function (e) {
      let t = "ENVMAP_BLENDING_NONE";
      if (e.envMap)
        switch (e.combine) {
          case 0:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case 1:
            t = "ENVMAP_BLENDING_MIX";
            break;
          case 2:
            t = "ENVMAP_BLENDING_ADD";
        }
      return t;
    })(n),
    M = (function (e) {
      let t = e.envMapCubeUVHeight;
      if (null === t) return null;
      let n = Math.log2(t) - 2;
      return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
        texelHeight: 1 / t,
        maxMip: n,
      };
    })(n),
    S = [
      n.extensionClipCullDistance
        ? "#extension GL_ANGLE_clip_cull_distance : require"
        : "",
      n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
    ]
      .filter(rq)
      .join("\n"),
    E = (function (e) {
      let t = [];
      for (let n in e) {
        let i = e[n];
        !1 !== i && t.push("#define " + n + " " + i);
      }
      return t.join("\n");
    })(f),
    T = p.createProgram(),
    b = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
  n.isRawShaderMaterial
    ? ((r = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        E,
      ]
        .filter(rq)
        .join("\n")).length > 0 && (r += "\n"),
      (a = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        E,
      ]
        .filter(rq)
        .join("\n")).length > 0 && (a += "\n"))
    : ((r = [
        r3(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        E,
        n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        n.batching ? "#define USE_BATCHING" : "",
        n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        n.instancing ? "#define USE_INSTANCING" : "",
        n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.map ? "#define USE_MAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + x : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.mapUv ? "#define MAP_UV " + n.mapUv : "",
        n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
        n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
        n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
        n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
        n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
        n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
        n.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv
          : "",
        n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
        n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
        n.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv
          : "",
        n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
        n.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv
          : "",
        n.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv
          : "",
        n.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv
          : "",
        n.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv
          : "",
        n.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv
          : "",
        n.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv
          : "",
        n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
        n.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv
          : "",
        n.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv
          : "",
        n.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv
          : "",
        n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
        n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
        n.vertexColors ? "#define USE_COLOR" : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.skinning ? "#define USE_SKINNING" : "",
        n.morphTargets ? "#define USE_MORPHTARGETS" : "",
        n.morphNormals && !1 === n.flatShading
          ? "#define USE_MORPHNORMALS"
          : "",
        n.morphColors ? "#define USE_MORPHCOLORS" : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
          : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
          : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + _ : "",
        n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        "\n",
      ]
        .filter(rq)
        .join("\n")),
      (a = [
        r3(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        E,
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        n.map ? "#define USE_MAP" : "",
        n.matcap ? "#define USE_MATCAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + v : "",
        n.envMap ? "#define " + x : "",
        n.envMap ? "#define " + y : "",
        M ? "#define CUBEUV_TEXEL_WIDTH " + M.texelWidth : "",
        M ? "#define CUBEUV_TEXEL_HEIGHT " + M.texelHeight : "",
        M ? "#define CUBEUV_MAX_MIP " + M.maxMip + ".0" : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoat ? "#define USE_CLEARCOAT" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.dispersion ? "#define USE_DISPERSION" : "",
        n.iridescence ? "#define USE_IRIDESCENCE" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaTest ? "#define USE_ALPHATEST" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.sheen ? "#define USE_SHEEN" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
        n.vertexColors || n.instancingColor || n.batchingColor
          ? "#define USE_COLOR"
          : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.gradientMap ? "#define USE_GRADIENTMAP" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + _ : "",
        n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        n.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
        0 !== n.toneMapping ? id.tonemapping_pars_fragment : "",
        0 !== n.toneMapping
          ? (function (e, t) {
              let n;
              switch (t) {
                case 1:
                  n = "Linear";
                  break;
                case 2:
                  n = "Reinhard";
                  break;
                case 3:
                  n = "Cineon";
                  break;
                case 4:
                  n = "ACESFilmic";
                  break;
                case 6:
                  n = "AgX";
                  break;
                case 7:
                  n = "Neutral";
                  break;
                case 5:
                  n = "Custom";
                  break;
                default:
                  console.warn(
                    "THREE.WebGLProgram: Unsupported toneMapping:",
                    t
                  ),
                    (n = "Linear");
              }
              return (
                "vec3 " +
                e +
                "( vec3 color ) { return " +
                n +
                "ToneMapping( color ); }"
              );
            })("toneMapping", n.toneMapping)
          : "",
        n.dithering ? "#define DITHERING" : "",
        n.opaque ? "#define OPAQUE" : "",
        id.colorspace_pars_fragment,
        (function (e, t) {
          let n = (function (e) {
            R._getMatrix(rW, R.workingColorSpace, e);
            let t = `mat3( ${rW.elements.map((e) => e.toFixed(4))} )`;
            switch (R.getTransfer(e)) {
              case l:
                return [t, "LinearTransferOETF"];
              case h:
                return [t, "sRGBTransferOETF"];
              default:
                return (
                  console.warn(
                    "THREE.WebGLProgram: Unsupported color space: ",
                    e
                  ),
                  [t, "LinearTransferOETF"]
                );
            }
          })(t);
          return `vec4 ${e}( vec4 value ) {
	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );
}`;
        })("linearToOutputTexel", n.outputColorSpace),
        (function () {
          R.getLuminanceCoefficients(rj);
          let e = rj.x.toFixed(4),
            t = rj.y.toFixed(4),
            n = rj.z.toFixed(4);
          return `float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( ${e}, ${t}, ${n} );
	return dot( weights, rgb );
}`;
        })(),
        n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
        "\n",
      ]
        .filter(rq)
        .join("\n"))),
    (m = rJ((m = rY((m = rK(m)), n)), n)),
    (g = rJ((g = rY((g = rK(g)), n)), n)),
    (m = r1(m)),
    (g = r1(g)),
    !0 !== n.isRawShaderMaterial &&
      ((b = "#version 300 es\n"),
      (r =
        [
          S,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join("\n") +
        "\n" +
        r),
      (a =
        [
          "#define varying in",
          n.glslVersion === c
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          n.glslVersion === c ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join("\n") +
        "\n" +
        a));
  let A = b + r + m,
    w = b + a + g,
    C = rG(p, p.VERTEX_SHADER, A),
    P = rG(p, p.FRAGMENT_SHADER, w);
  function L(t) {
    if (e.debug.checkShaderErrors) {
      let n = p.getProgramInfoLog(T).trim(),
        i = p.getShaderInfoLog(C).trim(),
        s = p.getShaderInfoLog(P).trim(),
        o = !0,
        l = !0;
      if (!1 === p.getProgramParameter(T, p.LINK_STATUS)) {
        if (((o = !1), "function" == typeof e.debug.onShaderError))
          e.debug.onShaderError(p, T, C, P);
        else {
          let e = rX(p, C, "vertex"),
            i = rX(p, P, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              p.getError() +
              " - VALIDATE_STATUS " +
              p.getProgramParameter(T, p.VALIDATE_STATUS) +
              "\n\nMaterial Name: " +
              t.name +
              "\nMaterial Type: " +
              t.type +
              "\n\nProgram Info Log: " +
              n +
              "\n" +
              e +
              "\n" +
              i
          );
        }
      } else
        "" !== n
          ? console.warn("THREE.WebGLProgram: Program Info Log:", n)
          : ("" === i || "" === s) && (l = !1);
      l &&
        (t.diagnostics = {
          runnable: o,
          programLog: n,
          vertexShader: { log: i, prefix: r },
          fragmentShader: { log: s, prefix: a },
        });
    }
    p.deleteShader(C),
      p.deleteShader(P),
      (s = new rH(p, T)),
      (o = (function (e, t) {
        let n = {},
          i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
        for (let r = 0; r < i; r++) {
          let i = e.getActiveAttrib(t, r),
            a = i.name,
            s = 1;
          i.type === e.FLOAT_MAT2 && (s = 2),
            i.type === e.FLOAT_MAT3 && (s = 3),
            i.type === e.FLOAT_MAT4 && (s = 4),
            (n[a] = {
              type: i.type,
              location: e.getAttribLocation(t, a),
              locationSize: s,
            });
        }
        return n;
      })(p, T));
  }
  p.attachShader(T, C),
    p.attachShader(T, P),
    void 0 !== n.index0AttributeName
      ? p.bindAttribLocation(T, 0, n.index0AttributeName)
      : !0 === n.morphTargets && p.bindAttribLocation(T, 0, "position"),
    p.linkProgram(T),
    (this.getUniforms = function () {
      return void 0 === s && L(this), s;
    }),
    (this.getAttributes = function () {
      return void 0 === o && L(this), o;
    });
  let U = !1 === n.rendererExtensionParallelShaderCompile;
  return (
    (this.isReady = function () {
      return !1 === U && (U = p.getProgramParameter(T, 37297)), U;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        p.deleteProgram(T),
        (this.program = void 0);
    }),
    (this.type = n.shaderType),
    (this.name = n.shaderName),
    (this.id = rk++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = T),
    (this.vertexShader = C),
    (this.fragmentShader = P),
    this
  );
}
let r5 = 0;
class r6 {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    let t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      !1 === a.has(i) && (a.add(i), i.usedTimes++),
      !1 === a.has(r) && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    for (let t of this.materialCache.get(e))
      t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    let t = this.materialCache,
      n = t.get(e);
    return void 0 === n && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    let t = this.shaderCache,
      n = t.get(e);
    return void 0 === n && ((n = new r8(e)), t.set(e, n)), n;
  }
}
class r8 {
  constructor(e) {
    (this.id = r5++), (this.code = e), (this.usedTimes = 0);
  }
}
function r9(e, t, n, i, r, a, s) {
  let l = new eR(),
    c = new r6(),
    u = new Set(),
    d = [],
    p = r.logarithmicDepthBuffer,
    f = r.vertexTextures,
    m = r.precision,
    g = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
  function _(e) {
    return (u.add(e), 0 === e) ? "uv" : `uv${e}`;
  }
  return {
    getParameters: function (a, l, d, v, x) {
      let y, M, S, E;
      let T = v.fog,
        b = x.geometry,
        A = a.isMeshStandardMaterial ? v.environment : null,
        w = (a.isMeshStandardMaterial ? n : t).get(a.envMap || A),
        C = w && 306 === w.mapping ? w.image.height : null,
        P = g[a.type];
      null !== a.precision &&
        (m = r.getMaxPrecision(a.precision)) !== a.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          a.precision,
          "not supported, using",
          m,
          "instead."
        );
      let L =
          b.morphAttributes.position ||
          b.morphAttributes.normal ||
          b.morphAttributes.color,
        U = void 0 !== L ? L.length : 0,
        N = 0;
      if (
        (void 0 !== b.morphAttributes.position && (N = 1),
        void 0 !== b.morphAttributes.normal && (N = 2),
        void 0 !== b.morphAttributes.color && (N = 3),
        P)
      ) {
        let e = im[P];
        (y = e.vertexShader), (M = e.fragmentShader);
      } else
        (y = a.vertexShader),
          (M = a.fragmentShader),
          c.update(a),
          (S = c.getVertexShaderID(a)),
          (E = c.getFragmentShaderID(a));
      let D = e.getRenderTarget(),
        I = e.state.buffers.depth.getReversed(),
        O = !0 === x.isInstancedMesh,
        F = !0 === x.isBatchedMesh,
        B = !!a.map,
        z = !!a.matcap,
        V = !!w,
        H = !!a.aoMap,
        G = !!a.lightMap,
        k = !!a.bumpMap,
        W = !!a.normalMap,
        X = !!a.displacementMap,
        j = !!a.emissiveMap,
        q = !!a.metalnessMap,
        Y = !!a.roughnessMap,
        J = a.anisotropy > 0,
        Z = a.clearcoat > 0,
        K = a.dispersion > 0,
        $ = a.iridescence > 0,
        Q = a.sheen > 0,
        ee = a.transmission > 0,
        et = J && !!a.anisotropyMap,
        en = Z && !!a.clearcoatMap,
        ei = Z && !!a.clearcoatNormalMap,
        er = Z && !!a.clearcoatRoughnessMap,
        ea = $ && !!a.iridescenceMap,
        es = $ && !!a.iridescenceThicknessMap,
        eo = Q && !!a.sheenColorMap,
        el = Q && !!a.sheenRoughnessMap,
        eh = !!a.specularMap,
        ec = !!a.specularColorMap,
        eu = !!a.specularIntensityMap,
        ed = ee && !!a.transmissionMap,
        ep = ee && !!a.thicknessMap,
        ef = !!a.gradientMap,
        em = !!a.alphaMap,
        eg = a.alphaTest > 0,
        e_ = !!a.alphaHash,
        ev = !!a.extensions,
        ex = 0;
      a.toneMapped &&
        (null === D || !0 === D.isXRRenderTarget) &&
        (ex = e.toneMapping);
      let ey = {
        shaderID: P,
        shaderType: a.type,
        shaderName: a.name,
        vertexShader: y,
        fragmentShader: M,
        defines: a.defines,
        customVertexShaderID: S,
        customFragmentShaderID: E,
        isRawShaderMaterial: !0 === a.isRawShaderMaterial,
        glslVersion: a.glslVersion,
        precision: m,
        batching: F,
        batchingColor: F && null !== x._colorsTexture,
        instancing: O,
        instancingColor: O && null !== x.instanceColor,
        instancingMorph: O && null !== x.morphTexture,
        supportsVertexTextures: f,
        outputColorSpace:
          null === D
            ? e.outputColorSpace
            : !0 === D.isXRRenderTarget
            ? D.texture.colorSpace
            : o,
        alphaToCoverage: !!a.alphaToCoverage,
        map: B,
        matcap: z,
        envMap: V,
        envMapMode: V && w.mapping,
        envMapCubeUVHeight: C,
        aoMap: H,
        lightMap: G,
        bumpMap: k,
        normalMap: W,
        displacementMap: f && X,
        emissiveMap: j,
        normalMapObjectSpace: W && 1 === a.normalMapType,
        normalMapTangentSpace: W && 0 === a.normalMapType,
        metalnessMap: q,
        roughnessMap: Y,
        anisotropy: J,
        anisotropyMap: et,
        clearcoat: Z,
        clearcoatMap: en,
        clearcoatNormalMap: ei,
        clearcoatRoughnessMap: er,
        dispersion: K,
        iridescence: $,
        iridescenceMap: ea,
        iridescenceThicknessMap: es,
        sheen: Q,
        sheenColorMap: eo,
        sheenRoughnessMap: el,
        specularMap: eh,
        specularColorMap: ec,
        specularIntensityMap: eu,
        transmission: ee,
        transmissionMap: ed,
        thicknessMap: ep,
        gradientMap: ef,
        opaque:
          !1 === a.transparent && 1 === a.blending && !1 === a.alphaToCoverage,
        alphaMap: em,
        alphaTest: eg,
        alphaHash: e_,
        combine: a.combine,
        mapUv: B && _(a.map.channel),
        aoMapUv: H && _(a.aoMap.channel),
        lightMapUv: G && _(a.lightMap.channel),
        bumpMapUv: k && _(a.bumpMap.channel),
        normalMapUv: W && _(a.normalMap.channel),
        displacementMapUv: X && _(a.displacementMap.channel),
        emissiveMapUv: j && _(a.emissiveMap.channel),
        metalnessMapUv: q && _(a.metalnessMap.channel),
        roughnessMapUv: Y && _(a.roughnessMap.channel),
        anisotropyMapUv: et && _(a.anisotropyMap.channel),
        clearcoatMapUv: en && _(a.clearcoatMap.channel),
        clearcoatNormalMapUv: ei && _(a.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: er && _(a.clearcoatRoughnessMap.channel),
        iridescenceMapUv: ea && _(a.iridescenceMap.channel),
        iridescenceThicknessMapUv: es && _(a.iridescenceThicknessMap.channel),
        sheenColorMapUv: eo && _(a.sheenColorMap.channel),
        sheenRoughnessMapUv: el && _(a.sheenRoughnessMap.channel),
        specularMapUv: eh && _(a.specularMap.channel),
        specularColorMapUv: ec && _(a.specularColorMap.channel),
        specularIntensityMapUv: eu && _(a.specularIntensityMap.channel),
        transmissionMapUv: ed && _(a.transmissionMap.channel),
        thicknessMapUv: ep && _(a.thicknessMap.channel),
        alphaMapUv: em && _(a.alphaMap.channel),
        vertexTangents: !!b.attributes.tangent && (W || J),
        vertexColors: a.vertexColors,
        vertexAlphas:
          !0 === a.vertexColors &&
          !!b.attributes.color &&
          4 === b.attributes.color.itemSize,
        pointsUvs: !0 === x.isPoints && !!b.attributes.uv && (B || em),
        fog: !!T,
        useFog: !0 === a.fog,
        fogExp2: !!T && T.isFogExp2,
        flatShading: !0 === a.flatShading,
        sizeAttenuation: !0 === a.sizeAttenuation,
        logarithmicDepthBuffer: p,
        reverseDepthBuffer: I,
        skinning: !0 === x.isSkinnedMesh,
        morphTargets: void 0 !== b.morphAttributes.position,
        morphNormals: void 0 !== b.morphAttributes.normal,
        morphColors: void 0 !== b.morphAttributes.color,
        morphTargetsCount: U,
        morphTextureStride: N,
        numDirLights: l.directional.length,
        numPointLights: l.point.length,
        numSpotLights: l.spot.length,
        numSpotLightMaps: l.spotLightMap.length,
        numRectAreaLights: l.rectArea.length,
        numHemiLights: l.hemi.length,
        numDirLightShadows: l.directionalShadowMap.length,
        numPointLightShadows: l.pointShadowMap.length,
        numSpotLightShadows: l.spotShadowMap.length,
        numSpotLightShadowsWithMaps: l.numSpotLightShadowsWithMaps,
        numLightProbes: l.numLightProbes,
        numClippingPlanes: s.numPlanes,
        numClipIntersection: s.numIntersection,
        dithering: a.dithering,
        shadowMapEnabled: e.shadowMap.enabled && d.length > 0,
        shadowMapType: e.shadowMap.type,
        toneMapping: ex,
        decodeVideoTexture:
          B &&
          !0 === a.map.isVideoTexture &&
          R.getTransfer(a.map.colorSpace) === h,
        decodeVideoTextureEmissive:
          j &&
          !0 === a.emissiveMap.isVideoTexture &&
          R.getTransfer(a.emissiveMap.colorSpace) === h,
        premultipliedAlpha: a.premultipliedAlpha,
        doubleSided: 2 === a.side,
        flipSided: 1 === a.side,
        useDepthPacking: a.depthPacking >= 0,
        depthPacking: a.depthPacking || 0,
        index0AttributeName: a.index0AttributeName,
        extensionClipCullDistance:
          ev &&
          !0 === a.extensions.clipCullDistance &&
          i.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw:
          ((ev && !0 === a.extensions.multiDraw) || F) &&
          i.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: i.has(
          "KHR_parallel_shader_compile"
        ),
        customProgramCacheKey: a.customProgramCacheKey(),
      };
      return (
        (ey.vertexUv1s = u.has(1)),
        (ey.vertexUv2s = u.has(2)),
        (ey.vertexUv3s = u.has(3)),
        u.clear(),
        ey
      );
    },
    getProgramCacheKey: function (t) {
      let n = [];
      if (
        (t.shaderID
          ? n.push(t.shaderID)
          : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)),
        void 0 !== t.defines)
      )
        for (let e in t.defines) n.push(e), n.push(t.defines[e]);
      return (
        !1 === t.isRawShaderMaterial &&
          (n.push(t.precision),
          n.push(t.outputColorSpace),
          n.push(t.envMapMode),
          n.push(t.envMapCubeUVHeight),
          n.push(t.mapUv),
          n.push(t.alphaMapUv),
          n.push(t.lightMapUv),
          n.push(t.aoMapUv),
          n.push(t.bumpMapUv),
          n.push(t.normalMapUv),
          n.push(t.displacementMapUv),
          n.push(t.emissiveMapUv),
          n.push(t.metalnessMapUv),
          n.push(t.roughnessMapUv),
          n.push(t.anisotropyMapUv),
          n.push(t.clearcoatMapUv),
          n.push(t.clearcoatNormalMapUv),
          n.push(t.clearcoatRoughnessMapUv),
          n.push(t.iridescenceMapUv),
          n.push(t.iridescenceThicknessMapUv),
          n.push(t.sheenColorMapUv),
          n.push(t.sheenRoughnessMapUv),
          n.push(t.specularMapUv),
          n.push(t.specularColorMapUv),
          n.push(t.specularIntensityMapUv),
          n.push(t.transmissionMapUv),
          n.push(t.thicknessMapUv),
          n.push(t.combine),
          n.push(t.fogExp2),
          n.push(t.sizeAttenuation),
          n.push(t.morphTargetsCount),
          n.push(t.morphAttributeCount),
          n.push(t.numDirLights),
          n.push(t.numPointLights),
          n.push(t.numSpotLights),
          n.push(t.numSpotLightMaps),
          n.push(t.numHemiLights),
          n.push(t.numRectAreaLights),
          n.push(t.numDirLightShadows),
          n.push(t.numPointLightShadows),
          n.push(t.numSpotLightShadows),
          n.push(t.numSpotLightShadowsWithMaps),
          n.push(t.numLightProbes),
          n.push(t.shadowMapType),
          n.push(t.toneMapping),
          n.push(t.numClippingPlanes),
          n.push(t.numClipIntersection),
          n.push(t.depthPacking),
          l.disableAll(),
          t.supportsVertexTextures && l.enable(0),
          t.instancing && l.enable(1),
          t.instancingColor && l.enable(2),
          t.instancingMorph && l.enable(3),
          t.matcap && l.enable(4),
          t.envMap && l.enable(5),
          t.normalMapObjectSpace && l.enable(6),
          t.normalMapTangentSpace && l.enable(7),
          t.clearcoat && l.enable(8),
          t.iridescence && l.enable(9),
          t.alphaTest && l.enable(10),
          t.vertexColors && l.enable(11),
          t.vertexAlphas && l.enable(12),
          t.vertexUv1s && l.enable(13),
          t.vertexUv2s && l.enable(14),
          t.vertexUv3s && l.enable(15),
          t.vertexTangents && l.enable(16),
          t.anisotropy && l.enable(17),
          t.alphaHash && l.enable(18),
          t.batching && l.enable(19),
          t.dispersion && l.enable(20),
          t.batchingColor && l.enable(21),
          n.push(l.mask),
          l.disableAll(),
          t.fog && l.enable(0),
          t.useFog && l.enable(1),
          t.flatShading && l.enable(2),
          t.logarithmicDepthBuffer && l.enable(3),
          t.reverseDepthBuffer && l.enable(4),
          t.skinning && l.enable(5),
          t.morphTargets && l.enable(6),
          t.morphNormals && l.enable(7),
          t.morphColors && l.enable(8),
          t.premultipliedAlpha && l.enable(9),
          t.shadowMapEnabled && l.enable(10),
          t.doubleSided && l.enable(11),
          t.flipSided && l.enable(12),
          t.useDepthPacking && l.enable(13),
          t.dithering && l.enable(14),
          t.transmission && l.enable(15),
          t.sheen && l.enable(16),
          t.opaque && l.enable(17),
          t.pointsUvs && l.enable(18),
          t.decodeVideoTexture && l.enable(19),
          t.decodeVideoTextureEmissive && l.enable(20),
          t.alphaToCoverage && l.enable(21),
          n.push(l.mask),
          n.push(e.outputColorSpace)),
        n.push(t.customProgramCacheKey),
        n.join()
      );
    },
    getUniforms: function (e) {
      let t;
      let n = g[e.type];
      if (n) {
        let e = im[n];
        t = tI.clone(e.uniforms);
      } else t = e.uniforms;
      return t;
    },
    acquireProgram: function (t, n) {
      let i;
      for (let e = 0, t = d.length; e < t; e++) {
        let t = d[e];
        if (t.cacheKey === n) {
          (i = t), ++i.usedTimes;
          break;
        }
      }
      return void 0 === i && ((i = new r4(e, n, t, a)), d.push(i)), i;
    },
    releaseProgram: function (e) {
      if (0 == --e.usedTimes) {
        let t = d.indexOf(e);
        (d[t] = d[d.length - 1]), d.pop(), e.destroy();
      }
    },
    releaseShaderCache: function (e) {
      c.remove(e);
    },
    programs: d,
    dispose: function () {
      c.dispose();
    },
  };
}
function r7() {
  let e = new WeakMap();
  return {
    has: function (t) {
      return e.has(t);
    },
    get: function (t) {
      let n = e.get(t);
      return void 0 === n && ((n = {}), e.set(t, n)), n;
    },
    remove: function (t) {
      e.delete(t);
    },
    update: function (t, n, i) {
      e.get(t)[n] = i;
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function ae(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.material.id !== t.material.id
    ? e.material.id - t.material.id
    : e.z !== t.z
    ? e.z - t.z
    : e.id - t.id;
}
function at(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.z !== t.z
    ? t.z - e.z
    : e.id - t.id;
}
function an() {
  let e = [],
    t = 0,
    n = [],
    i = [],
    r = [];
  function a(n, i, r, a, s, o) {
    let l = e[t];
    return (
      void 0 === l
        ? ((l = {
            id: n.id,
            object: n,
            geometry: i,
            material: r,
            groupOrder: a,
            renderOrder: n.renderOrder,
            z: s,
            group: o,
          }),
          (e[t] = l))
        : ((l.id = n.id),
          (l.object = n),
          (l.geometry = i),
          (l.material = r),
          (l.groupOrder = a),
          (l.renderOrder = n.renderOrder),
          (l.z = s),
          (l.group = o)),
      t++,
      l
    );
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: r,
    init: function () {
      (t = 0), (n.length = 0), (i.length = 0), (r.length = 0);
    },
    push: function (e, t, s, o, l, h) {
      let c = a(e, t, s, o, l, h);
      s.transmission > 0
        ? i.push(c)
        : !0 === s.transparent
        ? r.push(c)
        : n.push(c);
    },
    unshift: function (e, t, s, o, l, h) {
      let c = a(e, t, s, o, l, h);
      s.transmission > 0
        ? i.unshift(c)
        : !0 === s.transparent
        ? r.unshift(c)
        : n.unshift(c);
    },
    finish: function () {
      for (let n = t, i = e.length; n < i; n++) {
        let t = e[n];
        if (null === t.id) break;
        (t.id = null),
          (t.object = null),
          (t.geometry = null),
          (t.material = null),
          (t.group = null);
      }
    },
    sort: function (e, t) {
      n.length > 1 && n.sort(e || ae),
        i.length > 1 && i.sort(t || at),
        r.length > 1 && r.sort(t || at);
    },
  };
}
function ai() {
  let e = new WeakMap();
  return {
    get: function (t, n) {
      let i;
      let r = e.get(t);
      return (
        void 0 === r
          ? ((i = new an()), e.set(t, [i]))
          : n >= r.length
          ? ((i = new an()), r.push(i))
          : (i = r[n]),
        i
      );
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function ar() {
  let e = {};
  return {
    get: function (t) {
      let n;
      if (void 0 !== e[t.id]) return e[t.id];
      switch (t.type) {
        case "DirectionalLight":
          n = { direction: new G(), color: new e7() };
          break;
        case "SpotLight":
          n = {
            position: new G(),
            direction: new G(),
            color: new e7(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          n = { position: new G(), color: new e7(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          n = { direction: new G(), skyColor: new e7(), groundColor: new e7() };
          break;
        case "RectAreaLight":
          n = {
            color: new e7(),
            position: new G(),
            halfWidth: new G(),
            halfHeight: new G(),
          };
      }
      return (e[t.id] = n), n;
    },
  };
}
let aa = 0;
function as(e, t) {
  return (
    (t.castShadow ? 2 : 0) -
    (e.castShadow ? 2 : 0) +
    (t.map ? 1 : 0) -
    (e.map ? 1 : 0)
  );
}
function ao(e) {
  let t = new ar(),
    n = (function () {
      let e = {};
      return {
        get: function (t) {
          let n;
          if (void 0 !== e[t.id]) return e[t.id];
          switch (t.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new x(),
              };
              break;
            case "PointLight":
              n = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new x(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3,
              };
          }
          return (e[t.id] = n), n;
        },
      };
    })(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let e = 0; e < 9; e++) i.probe.push(new G());
  let r = new G(),
    a = new e_(),
    s = new e_();
  return {
    setup: function (r) {
      let a = 0,
        s = 0,
        o = 0;
      for (let e = 0; e < 9; e++) i.probe[e].set(0, 0, 0);
      let l = 0,
        h = 0,
        c = 0,
        u = 0,
        d = 0,
        p = 0,
        f = 0,
        m = 0,
        g = 0,
        _ = 0,
        v = 0;
      r.sort(as);
      for (let e = 0, x = r.length; e < x; e++) {
        let x = r[e],
          y = x.color,
          M = x.intensity,
          S = x.distance,
          E = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
        if (x.isAmbientLight) (a += y.r * M), (s += y.g * M), (o += y.b * M);
        else if (x.isLightProbe) {
          for (let e = 0; e < 9; e++)
            i.probe[e].addScaledVector(x.sh.coefficients[e], M);
          v++;
        } else if (x.isDirectionalLight) {
          let e = t.get(x);
          if (
            (e.color.copy(x.color).multiplyScalar(x.intensity), x.castShadow)
          ) {
            let e = x.shadow,
              t = n.get(x);
            (t.shadowIntensity = e.intensity),
              (t.shadowBias = e.bias),
              (t.shadowNormalBias = e.normalBias),
              (t.shadowRadius = e.radius),
              (t.shadowMapSize = e.mapSize),
              (i.directionalShadow[l] = t),
              (i.directionalShadowMap[l] = E),
              (i.directionalShadowMatrix[l] = x.shadow.matrix),
              p++;
          }
          (i.directional[l] = e), l++;
        } else if (x.isSpotLight) {
          let e = t.get(x);
          e.position.setFromMatrixPosition(x.matrixWorld),
            e.color.copy(y).multiplyScalar(M),
            (e.distance = S),
            (e.coneCos = Math.cos(x.angle)),
            (e.penumbraCos = Math.cos(x.angle * (1 - x.penumbra))),
            (e.decay = x.decay),
            (i.spot[c] = e);
          let r = x.shadow;
          if (
            (x.map &&
              ((i.spotLightMap[g] = x.map),
              g++,
              r.updateMatrices(x),
              x.castShadow && _++),
            (i.spotLightMatrix[c] = r.matrix),
            x.castShadow)
          ) {
            let e = n.get(x);
            (e.shadowIntensity = r.intensity),
              (e.shadowBias = r.bias),
              (e.shadowNormalBias = r.normalBias),
              (e.shadowRadius = r.radius),
              (e.shadowMapSize = r.mapSize),
              (i.spotShadow[c] = e),
              (i.spotShadowMap[c] = E),
              m++;
          }
          c++;
        } else if (x.isRectAreaLight) {
          let e = t.get(x);
          e.color.copy(y).multiplyScalar(M),
            e.halfWidth.set(0.5 * x.width, 0, 0),
            e.halfHeight.set(0, 0.5 * x.height, 0),
            (i.rectArea[u] = e),
            u++;
        } else if (x.isPointLight) {
          let e = t.get(x);
          if (
            (e.color.copy(x.color).multiplyScalar(x.intensity),
            (e.distance = x.distance),
            (e.decay = x.decay),
            x.castShadow)
          ) {
            let e = x.shadow,
              t = n.get(x);
            (t.shadowIntensity = e.intensity),
              (t.shadowBias = e.bias),
              (t.shadowNormalBias = e.normalBias),
              (t.shadowRadius = e.radius),
              (t.shadowMapSize = e.mapSize),
              (t.shadowCameraNear = e.camera.near),
              (t.shadowCameraFar = e.camera.far),
              (i.pointShadow[h] = t),
              (i.pointShadowMap[h] = E),
              (i.pointShadowMatrix[h] = x.shadow.matrix),
              f++;
          }
          (i.point[h] = e), h++;
        } else if (x.isHemisphereLight) {
          let e = t.get(x);
          e.skyColor.copy(x.color).multiplyScalar(M),
            e.groundColor.copy(x.groundColor).multiplyScalar(M),
            (i.hemi[d] = e),
            d++;
        }
      }
      u > 0 &&
        (!0 === e.has("OES_texture_float_linear")
          ? ((i.rectAreaLTC1 = ip.LTC_FLOAT_1),
            (i.rectAreaLTC2 = ip.LTC_FLOAT_2))
          : ((i.rectAreaLTC1 = ip.LTC_HALF_1),
            (i.rectAreaLTC2 = ip.LTC_HALF_2))),
        (i.ambient[0] = a),
        (i.ambient[1] = s),
        (i.ambient[2] = o);
      let x = i.hash;
      (x.directionalLength !== l ||
        x.pointLength !== h ||
        x.spotLength !== c ||
        x.rectAreaLength !== u ||
        x.hemiLength !== d ||
        x.numDirectionalShadows !== p ||
        x.numPointShadows !== f ||
        x.numSpotShadows !== m ||
        x.numSpotMaps !== g ||
        x.numLightProbes !== v) &&
        ((i.directional.length = l),
        (i.spot.length = c),
        (i.rectArea.length = u),
        (i.point.length = h),
        (i.hemi.length = d),
        (i.directionalShadow.length = p),
        (i.directionalShadowMap.length = p),
        (i.pointShadow.length = f),
        (i.pointShadowMap.length = f),
        (i.spotShadow.length = m),
        (i.spotShadowMap.length = m),
        (i.directionalShadowMatrix.length = p),
        (i.pointShadowMatrix.length = f),
        (i.spotLightMatrix.length = m + g - _),
        (i.spotLightMap.length = g),
        (i.numSpotLightShadowsWithMaps = _),
        (i.numLightProbes = v),
        (x.directionalLength = l),
        (x.pointLength = h),
        (x.spotLength = c),
        (x.rectAreaLength = u),
        (x.hemiLength = d),
        (x.numDirectionalShadows = p),
        (x.numPointShadows = f),
        (x.numSpotShadows = m),
        (x.numSpotMaps = g),
        (x.numLightProbes = v),
        (i.version = aa++));
    },
    setupView: function (e, t) {
      let n = 0,
        o = 0,
        l = 0,
        h = 0,
        c = 0,
        u = t.matrixWorldInverse;
      for (let t = 0, d = e.length; t < d; t++) {
        let d = e[t];
        if (d.isDirectionalLight) {
          let e = i.directional[n];
          e.direction.setFromMatrixPosition(d.matrixWorld),
            r.setFromMatrixPosition(d.target.matrixWorld),
            e.direction.sub(r),
            e.direction.transformDirection(u),
            n++;
        } else if (d.isSpotLight) {
          let e = i.spot[l];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            e.direction.setFromMatrixPosition(d.matrixWorld),
            r.setFromMatrixPosition(d.target.matrixWorld),
            e.direction.sub(r),
            e.direction.transformDirection(u),
            l++;
        } else if (d.isRectAreaLight) {
          let e = i.rectArea[h];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            s.identity(),
            a.copy(d.matrixWorld),
            a.premultiply(u),
            s.extractRotation(a),
            e.halfWidth.set(0.5 * d.width, 0, 0),
            e.halfHeight.set(0, 0.5 * d.height, 0),
            e.halfWidth.applyMatrix4(s),
            e.halfHeight.applyMatrix4(s),
            h++;
        } else if (d.isPointLight) {
          let e = i.point[o];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            o++;
        } else if (d.isHemisphereLight) {
          let e = i.hemi[c];
          e.direction.setFromMatrixPosition(d.matrixWorld),
            e.direction.transformDirection(u),
            c++;
        }
      }
    },
    state: i,
  };
}
function al(e) {
  let t = new ao(e),
    n = [],
    i = [],
    r = {
      lightsArray: n,
      shadowsArray: i,
      camera: null,
      lights: t,
      transmissionRenderTarget: {},
    };
  return {
    init: function (e) {
      (r.camera = e), (n.length = 0), (i.length = 0);
    },
    state: r,
    setupLights: function () {
      t.setup(n);
    },
    setupLightsView: function (e) {
      t.setupView(n, e);
    },
    pushLight: function (e) {
      n.push(e);
    },
    pushShadow: function (e) {
      i.push(e);
    },
  };
}
function ah(e) {
  let t = new WeakMap();
  return {
    get: function (n, i = 0) {
      let r;
      let a = t.get(n);
      return (
        void 0 === a
          ? ((r = new al(e)), t.set(n, [r]))
          : i >= a.length
          ? ((r = new al(e)), a.push(r))
          : (r = a[i]),
        r
      );
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
function ac(e, t, n) {
  let i = new tK(),
    r = new x(),
    a = new x(),
    s = new F(),
    o = new nq({ depthPacking: 3201 }),
    l = new nY(),
    h = {},
    c = n.maxTextureSize,
    u = { 0: 1, 1: 0, 2: 2 },
    d = new tO({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new x() },
        radius: { value: 4 },
      },
      vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
      fragmentShader:
        "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
    }),
    p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  let f = new t_();
  f.setAttribute(
    "position",
    new ts(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  let m = new tC(f, d),
    g = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1);
  let _ = this.type;
  function v(t, n, i, r) {
    let a = null,
      s =
        !0 === i.isPointLight
          ? t.customDistanceMaterial
          : t.customDepthMaterial;
    if (void 0 !== s) a = s;
    else if (
      ((a = !0 === i.isPointLight ? l : o),
      (e.localClippingEnabled &&
        !0 === n.clipShadows &&
        Array.isArray(n.clippingPlanes) &&
        0 !== n.clippingPlanes.length) ||
        (n.displacementMap && 0 !== n.displacementScale) ||
        (n.alphaMap && n.alphaTest > 0) ||
        (n.map && n.alphaTest > 0))
    ) {
      let e = a.uuid,
        t = n.uuid,
        i = h[e];
      void 0 === i && ((i = {}), (h[e] = i));
      let r = i[t];
      void 0 === r &&
        ((r = a.clone()), (i[t] = r), n.addEventListener("dispose", y)),
        (a = r);
    }
    return (
      (a.visible = n.visible),
      (a.wireframe = n.wireframe),
      3 === r
        ? (a.side = null !== n.shadowSide ? n.shadowSide : n.side)
        : (a.side = null !== n.shadowSide ? n.shadowSide : u[n.side]),
      (a.alphaMap = n.alphaMap),
      (a.alphaTest = n.alphaTest),
      (a.map = n.map),
      (a.clipShadows = n.clipShadows),
      (a.clippingPlanes = n.clippingPlanes),
      (a.clipIntersection = n.clipIntersection),
      (a.displacementMap = n.displacementMap),
      (a.displacementScale = n.displacementScale),
      (a.displacementBias = n.displacementBias),
      (a.wireframeLinewidth = n.wireframeLinewidth),
      (a.linewidth = n.linewidth),
      !0 === i.isPointLight &&
        !0 === a.isMeshDistanceMaterial &&
        (e.properties.get(a).light = i),
      a
    );
  }
  function y(e) {
    for (let t in (e.target.removeEventListener("dispose", y), h)) {
      let n = h[t],
        i = e.target.uuid;
      i in n && (n[i].dispose(), delete n[i]);
    }
  }
  this.render = function (n, o, l) {
    if (
      !1 === g.enabled ||
      (!1 === g.autoUpdate && !1 === g.needsUpdate) ||
      0 === n.length
    )
      return;
    let h = e.getRenderTarget(),
      u = e.getActiveCubeFace(),
      f = e.getActiveMipmapLevel(),
      x = e.state;
    x.setBlending(0),
      x.buffers.color.setClear(1, 1, 1, 1),
      x.buffers.depth.setTest(!0),
      x.setScissorTest(!1);
    let y = 3 !== _ && 3 === this.type,
      M = 3 === _ && 3 !== this.type;
    for (let h = 0, u = n.length; h < u; h++) {
      let u = n[h],
        f = u.shadow;
      if (void 0 === f) {
        console.warn("THREE.WebGLShadowMap:", u, "has no shadow.");
        continue;
      }
      if (!1 === f.autoUpdate && !1 === f.needsUpdate) continue;
      r.copy(f.mapSize);
      let g = f.getFrameExtents();
      if (
        (r.multiply(g),
        a.copy(f.mapSize),
        (r.x > c || r.y > c) &&
          (r.x > c &&
            ((a.x = Math.floor(c / g.x)),
            (r.x = a.x * g.x),
            (f.mapSize.x = a.x)),
          r.y > c &&
            ((a.y = Math.floor(c / g.y)),
            (r.y = a.y * g.y),
            (f.mapSize.y = a.y))),
        null === f.map || !0 === y || !0 === M)
      ) {
        let e = 3 !== this.type ? { minFilter: 1003, magFilter: 1003 } : {};
        null !== f.map && f.map.dispose(),
          (f.map = new z(r.x, r.y, e)),
          (f.map.texture.name = u.name + ".shadowMap"),
          f.camera.updateProjectionMatrix();
      }
      e.setRenderTarget(f.map), e.clear();
      let _ = f.getViewportCount();
      for (let n = 0; n < _; n++) {
        let r = f.getViewport(n);
        s.set(a.x * r.x, a.y * r.y, a.x * r.z, a.y * r.w),
          x.viewport(s),
          f.updateMatrices(u, n),
          (i = f.getFrustum()),
          (function n(r, a, s, o, l) {
            if (!1 === r.visible) return;
            if (
              r.layers.test(a.layers) &&
              (r.isMesh || r.isLine || r.isPoints) &&
              (r.castShadow || (r.receiveShadow && 3 === l)) &&
              (!r.frustumCulled || i.intersectsObject(r))
            ) {
              r.modelViewMatrix.multiplyMatrices(
                s.matrixWorldInverse,
                r.matrixWorld
              );
              let n = t.update(r),
                i = r.material;
              if (Array.isArray(i)) {
                let t = n.groups;
                for (let h = 0, c = t.length; h < c; h++) {
                  let c = t[h],
                    u = i[c.materialIndex];
                  if (u && u.visible) {
                    let t = v(r, u, o, l);
                    r.onBeforeShadow(e, r, a, s, n, t, c),
                      e.renderBufferDirect(s, null, n, t, r, c),
                      r.onAfterShadow(e, r, a, s, n, t, c);
                  }
                }
              } else if (i.visible) {
                let t = v(r, i, o, l);
                r.onBeforeShadow(e, r, a, s, n, t, null),
                  e.renderBufferDirect(s, null, n, t, r, null),
                  r.onAfterShadow(e, r, a, s, n, t, null);
              }
            }
            let h = r.children;
            for (let e = 0, t = h.length; e < t; e++) n(h[e], a, s, o, l);
          })(o, l, f.camera, u, this.type);
      }
      !0 !== f.isPointLightShadow &&
        3 === this.type &&
        (function (n, i) {
          let a = t.update(m);
          d.defines.VSM_SAMPLES !== n.blurSamples &&
            ((d.defines.VSM_SAMPLES = n.blurSamples),
            (p.defines.VSM_SAMPLES = n.blurSamples),
            (d.needsUpdate = !0),
            (p.needsUpdate = !0)),
            null === n.mapPass && (n.mapPass = new z(r.x, r.y)),
            (d.uniforms.shadow_pass.value = n.map.texture),
            (d.uniforms.resolution.value = n.mapSize),
            (d.uniforms.radius.value = n.radius),
            e.setRenderTarget(n.mapPass),
            e.clear(),
            e.renderBufferDirect(i, null, a, d, m, null),
            (p.uniforms.shadow_pass.value = n.mapPass.texture),
            (p.uniforms.resolution.value = n.mapSize),
            (p.uniforms.radius.value = n.radius),
            e.setRenderTarget(n.map),
            e.clear(),
            e.renderBufferDirect(i, null, a, p, m, null);
        })(f, l),
        (f.needsUpdate = !1);
    }
    (_ = this.type), (g.needsUpdate = !1), e.setRenderTarget(h, u, f);
  };
}
const au = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 };
function ad(e, t) {
  let n = new (function () {
      let t = !1,
        n = new F(),
        i = null,
        r = new F(0, 0, 0, 0);
      return {
        setMask: function (n) {
          i === n || t || (e.colorMask(n, n, n, n), (i = n));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t, i, a, s, o) {
          !0 === o && ((t *= s), (i *= s), (a *= s)),
            n.set(t, i, a, s),
            !1 === r.equals(n) && (e.clearColor(t, i, a, s), r.copy(n));
        },
        reset: function () {
          (t = !1), (i = null), r.set(-1, 0, 0, 0);
        },
      };
    })(),
    i = new (function () {
      let n = !1,
        i = !1,
        r = null,
        a = null,
        s = null;
      return {
        setReversed: function (e) {
          if (i !== e) {
            let e = t.get("EXT_clip_control");
            i
              ? e.clipControlEXT(e.LOWER_LEFT_EXT, e.ZERO_TO_ONE_EXT)
              : e.clipControlEXT(e.LOWER_LEFT_EXT, e.NEGATIVE_ONE_TO_ONE_EXT);
            let n = s;
            (s = null), this.setClear(n);
          }
          i = e;
        },
        getReversed: function () {
          return i;
        },
        setTest: function (t) {
          t ? V(e.DEPTH_TEST) : H(e.DEPTH_TEST);
        },
        setMask: function (t) {
          r === t || n || (e.depthMask(t), (r = t));
        },
        setFunc: function (t) {
          if ((i && (t = au[t]), a !== t)) {
            switch (t) {
              case 0:
                e.depthFunc(e.NEVER);
                break;
              case 1:
                e.depthFunc(e.ALWAYS);
                break;
              case 2:
                e.depthFunc(e.LESS);
                break;
              case 3:
              default:
                e.depthFunc(e.LEQUAL);
                break;
              case 4:
                e.depthFunc(e.EQUAL);
                break;
              case 5:
                e.depthFunc(e.GEQUAL);
                break;
              case 6:
                e.depthFunc(e.GREATER);
                break;
              case 7:
                e.depthFunc(e.NOTEQUAL);
            }
            a = t;
          }
        },
        setLocked: function (e) {
          n = e;
        },
        setClear: function (t) {
          s !== t && (i && (t = 1 - t), e.clearDepth(t), (s = t));
        },
        reset: function () {
          (n = !1), (r = null), (a = null), (s = null), (i = !1);
        },
      };
    })(),
    r = new (function () {
      let t = !1,
        n = null,
        i = null,
        r = null,
        a = null,
        s = null,
        o = null,
        l = null,
        h = null;
      return {
        setTest: function (n) {
          t || (n ? V(e.STENCIL_TEST) : H(e.STENCIL_TEST));
        },
        setMask: function (i) {
          n === i || t || (e.stencilMask(i), (n = i));
        },
        setFunc: function (t, n, s) {
          (i !== t || r !== n || a !== s) &&
            (e.stencilFunc(t, n, s), (i = t), (r = n), (a = s));
        },
        setOp: function (t, n, i) {
          (s !== t || o !== n || l !== i) &&
            (e.stencilOp(t, n, i), (s = t), (o = n), (l = i));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t) {
          h !== t && (e.clearStencil(t), (h = t));
        },
        reset: function () {
          (t = !1),
            (n = null),
            (i = null),
            (r = null),
            (a = null),
            (s = null),
            (o = null),
            (l = null),
            (h = null);
        },
      };
    })(),
    a = new WeakMap(),
    s = new WeakMap(),
    o = {},
    l = {},
    h = new WeakMap(),
    c = [],
    u = null,
    d = !1,
    p = null,
    f = null,
    m = null,
    g = null,
    _ = null,
    v = null,
    x = null,
    y = new e7(0, 0, 0),
    M = 0,
    S = !1,
    E = null,
    T = null,
    b = null,
    A = null,
    w = null,
    R = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
    C = !1,
    P = e.getParameter(e.VERSION);
  -1 !== P.indexOf("WebGL")
    ? (C = parseFloat(/^WebGL (\d)/.exec(P)[1]) >= 1)
    : -1 !== P.indexOf("OpenGL ES") &&
      (C = parseFloat(/^OpenGL ES (\d)/.exec(P)[1]) >= 2);
  let L = null,
    U = {},
    N = e.getParameter(e.SCISSOR_BOX),
    D = e.getParameter(e.VIEWPORT),
    I = new F().fromArray(N),
    O = new F().fromArray(D);
  function B(t, n, i, r) {
    let a = new Uint8Array(4),
      s = e.createTexture();
    e.bindTexture(t, s),
      e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
      e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let s = 0; s < i; s++)
      t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY
        ? e.texImage3D(n, 0, e.RGBA, 1, 1, r, 0, e.RGBA, e.UNSIGNED_BYTE, a)
        : e.texImage2D(n + s, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
    return s;
  }
  let z = {};
  function V(t) {
    !0 !== o[t] && (e.enable(t), (o[t] = !0));
  }
  function H(t) {
    !1 !== o[t] && (e.disable(t), (o[t] = !1));
  }
  (z[e.TEXTURE_2D] = B(e.TEXTURE_2D, e.TEXTURE_2D, 1)),
    (z[e.TEXTURE_CUBE_MAP] = B(
      e.TEXTURE_CUBE_MAP,
      e.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (z[e.TEXTURE_2D_ARRAY] = B(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1)),
    (z[e.TEXTURE_3D] = B(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1)),
    n.setClear(0, 0, 0, 1),
    i.setClear(1),
    r.setClear(0),
    V(e.DEPTH_TEST),
    i.setFunc(3),
    X(!1),
    j(1),
    V(e.CULL_FACE),
    W(0);
  let G = {
    100: e.FUNC_ADD,
    101: e.FUNC_SUBTRACT,
    102: e.FUNC_REVERSE_SUBTRACT,
  };
  (G[103] = e.MIN), (G[104] = e.MAX);
  let k = {
    200: e.ZERO,
    201: e.ONE,
    202: e.SRC_COLOR,
    204: e.SRC_ALPHA,
    210: e.SRC_ALPHA_SATURATE,
    208: e.DST_COLOR,
    206: e.DST_ALPHA,
    203: e.ONE_MINUS_SRC_COLOR,
    205: e.ONE_MINUS_SRC_ALPHA,
    209: e.ONE_MINUS_DST_COLOR,
    207: e.ONE_MINUS_DST_ALPHA,
    211: e.CONSTANT_COLOR,
    212: e.ONE_MINUS_CONSTANT_COLOR,
    213: e.CONSTANT_ALPHA,
    214: e.ONE_MINUS_CONSTANT_ALPHA,
  };
  function W(t, n, i, r, a, s, o, l, h, c) {
    if (0 === t) {
      !0 === d && (H(e.BLEND), (d = !1));
      return;
    }
    if ((!1 === d && (V(e.BLEND), (d = !0)), 5 !== t)) {
      if (t !== p || c !== S) {
        if (
          ((100 !== f || 100 !== _) &&
            (e.blendEquation(e.FUNC_ADD), (f = 100), (_ = 100)),
          c)
        )
          switch (t) {
            case 1:
              e.blendFuncSeparate(
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              e.blendFunc(e.ONE, e.ONE);
              break;
            case 3:
              e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
              break;
            case 4:
              e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        else
          switch (t) {
            case 1:
              e.blendFuncSeparate(
                e.SRC_ALPHA,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              e.blendFunc(e.SRC_ALPHA, e.ONE);
              break;
            case 3:
              e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
              break;
            case 4:
              e.blendFunc(e.ZERO, e.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        (m = null),
          (g = null),
          (v = null),
          (x = null),
          y.set(0, 0, 0),
          (M = 0),
          (p = t),
          (S = c);
      }
      return;
    }
    (a = a || n),
      (s = s || i),
      (o = o || r),
      (n !== f || a !== _) &&
        (e.blendEquationSeparate(G[n], G[a]), (f = n), (_ = a)),
      (i !== m || r !== g || s !== v || o !== x) &&
        (e.blendFuncSeparate(k[i], k[r], k[s], k[o]),
        (m = i),
        (g = r),
        (v = s),
        (x = o)),
      (!1 === l.equals(y) || h !== M) &&
        (e.blendColor(l.r, l.g, l.b, h), y.copy(l), (M = h)),
      (p = t),
      (S = !1);
  }
  function X(t) {
    E !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), (E = t));
  }
  function j(t) {
    0 !== t
      ? (V(e.CULL_FACE),
        t !== T &&
          (1 === t
            ? e.cullFace(e.BACK)
            : 2 === t
            ? e.cullFace(e.FRONT)
            : e.cullFace(e.FRONT_AND_BACK)))
      : H(e.CULL_FACE),
      (T = t);
  }
  function q(t, n, i) {
    t
      ? (V(e.POLYGON_OFFSET_FILL),
        (A !== n || w !== i) && (e.polygonOffset(n, i), (A = n), (w = i)))
      : H(e.POLYGON_OFFSET_FILL);
  }
  return {
    buffers: { color: n, depth: i, stencil: r },
    enable: V,
    disable: H,
    bindFramebuffer: function (t, n) {
      return (
        l[t] !== n &&
        (e.bindFramebuffer(t, n),
        (l[t] = n),
        t === e.DRAW_FRAMEBUFFER && (l[e.FRAMEBUFFER] = n),
        t === e.FRAMEBUFFER && (l[e.DRAW_FRAMEBUFFER] = n),
        !0)
      );
    },
    drawBuffers: function (t, n) {
      let i = c,
        r = !1;
      if (t) {
        void 0 === (i = h.get(n)) && ((i = []), h.set(n, i));
        let a = t.textures;
        if (i.length !== a.length || i[0] !== e.COLOR_ATTACHMENT0) {
          for (let t = 0, n = a.length; t < n; t++)
            i[t] = e.COLOR_ATTACHMENT0 + t;
          (i.length = a.length), (r = !0);
        }
      } else i[0] !== e.BACK && ((i[0] = e.BACK), (r = !0));
      r && e.drawBuffers(i);
    },
    useProgram: function (t) {
      return u !== t && (e.useProgram(t), (u = t), !0);
    },
    setBlending: W,
    setMaterial: function (t, a) {
      2 === t.side ? H(e.CULL_FACE) : V(e.CULL_FACE);
      let s = 1 === t.side;
      a && (s = !s),
        X(s),
        1 === t.blending && !1 === t.transparent
          ? W(0)
          : W(
              t.blending,
              t.blendEquation,
              t.blendSrc,
              t.blendDst,
              t.blendEquationAlpha,
              t.blendSrcAlpha,
              t.blendDstAlpha,
              t.blendColor,
              t.blendAlpha,
              t.premultipliedAlpha
            ),
        i.setFunc(t.depthFunc),
        i.setTest(t.depthTest),
        i.setMask(t.depthWrite),
        n.setMask(t.colorWrite);
      let o = t.stencilWrite;
      r.setTest(o),
        o &&
          (r.setMask(t.stencilWriteMask),
          r.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
          r.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
        q(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
        !0 === t.alphaToCoverage
          ? V(e.SAMPLE_ALPHA_TO_COVERAGE)
          : H(e.SAMPLE_ALPHA_TO_COVERAGE);
    },
    setFlipSided: X,
    setCullFace: j,
    setLineWidth: function (t) {
      t !== b && (C && e.lineWidth(t), (b = t));
    },
    setPolygonOffset: q,
    setScissorTest: function (t) {
      t ? V(e.SCISSOR_TEST) : H(e.SCISSOR_TEST);
    },
    activeTexture: function (t) {
      void 0 === t && (t = e.TEXTURE0 + R - 1),
        L !== t && (e.activeTexture(t), (L = t));
    },
    bindTexture: function (t, n, i) {
      void 0 === i && (i = null === L ? e.TEXTURE0 + R - 1 : L);
      let r = U[i];
      void 0 === r && ((r = { type: void 0, texture: void 0 }), (U[i] = r)),
        (r.type !== t || r.texture !== n) &&
          (L !== i && (e.activeTexture(i), (L = i)),
          e.bindTexture(t, n || z[t]),
          (r.type = t),
          (r.texture = n));
    },
    unbindTexture: function () {
      let t = U[L];
      void 0 !== t &&
        void 0 !== t.type &&
        (e.bindTexture(t.type, null), (t.type = void 0), (t.texture = void 0));
    },
    compressedTexImage2D: function () {
      try {
        e.compressedTexImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    compressedTexImage3D: function () {
      try {
        e.compressedTexImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texImage2D: function () {
      try {
        e.texImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texImage3D: function () {
      try {
        e.texImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    updateUBOMapping: function (t, n) {
      let i = s.get(n);
      void 0 === i && ((i = new WeakMap()), s.set(n, i));
      let r = i.get(t);
      void 0 === r && ((r = e.getUniformBlockIndex(n, t.name)), i.set(t, r));
    },
    uniformBlockBinding: function (t, n) {
      let i = s.get(n).get(t);
      a.get(n) !== i &&
        (e.uniformBlockBinding(n, i, t.__bindingPointIndex), a.set(n, i));
    },
    texStorage2D: function () {
      try {
        e.texStorage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texStorage3D: function () {
      try {
        e.texStorage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texSubImage2D: function () {
      try {
        e.texSubImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texSubImage3D: function () {
      try {
        e.texSubImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    compressedTexSubImage2D: function () {
      try {
        e.compressedTexSubImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    compressedTexSubImage3D: function () {
      try {
        e.compressedTexSubImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    scissor: function (t) {
      !1 === I.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), I.copy(t));
    },
    viewport: function (t) {
      !1 === O.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), O.copy(t));
    },
    reset: function () {
      e.disable(e.BLEND),
        e.disable(e.CULL_FACE),
        e.disable(e.DEPTH_TEST),
        e.disable(e.POLYGON_OFFSET_FILL),
        e.disable(e.SCISSOR_TEST),
        e.disable(e.STENCIL_TEST),
        e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),
        e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.ONE, e.ZERO),
        e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO),
        e.blendColor(0, 0, 0, 0),
        e.colorMask(!0, !0, !0, !0),
        e.clearColor(0, 0, 0, 0),
        e.depthMask(!0),
        e.depthFunc(e.LESS),
        i.setReversed(!1),
        e.clearDepth(1),
        e.stencilMask(0xffffffff),
        e.stencilFunc(e.ALWAYS, 0, 0xffffffff),
        e.stencilOp(e.KEEP, e.KEEP, e.KEEP),
        e.clearStencil(0),
        e.cullFace(e.BACK),
        e.frontFace(e.CCW),
        e.polygonOffset(0, 0),
        e.activeTexture(e.TEXTURE0),
        e.bindFramebuffer(e.FRAMEBUFFER, null),
        e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
        e.bindFramebuffer(e.READ_FRAMEBUFFER, null),
        e.useProgram(null),
        e.lineWidth(1),
        e.scissor(0, 0, e.canvas.width, e.canvas.height),
        e.viewport(0, 0, e.canvas.width, e.canvas.height),
        (o = {}),
        (L = null),
        (U = {}),
        (l = {}),
        (h = new WeakMap()),
        (c = []),
        (u = null),
        (d = !1),
        (p = null),
        (f = null),
        (m = null),
        (g = null),
        (_ = null),
        (v = null),
        (x = null),
        (y = new e7(0, 0, 0)),
        (M = 0),
        (S = !1),
        (E = null),
        (T = null),
        (b = null),
        (A = null),
        (w = null),
        I.set(0, 0, e.canvas.width, e.canvas.height),
        O.set(0, 0, e.canvas.width, e.canvas.height),
        n.reset(),
        i.reset(),
        r.reset();
    },
  };
}
function ap(e, t, n, i, r, a, s) {
  let c;
  let u = t.has("WEBGL_multisampled_render_to_texture")
      ? t.get("WEBGL_multisampled_render_to_texture")
      : null,
    d =
      "undefined" != typeof navigator &&
      /OculusBrowser/g.test(navigator.userAgent),
    p = new x(),
    f = new WeakMap(),
    m = new WeakMap(),
    g = !1;
  try {
    g =
      "undefined" != typeof OffscreenCanvas &&
      null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (e) {}
  function _(e, t) {
    return g ? new OffscreenCanvas(e, t) : E("canvas");
  }
  function v(e, t, n) {
    let i = 1,
      r = j(e);
    if (
      ((r.width > n || r.height > n) && (i = n / Math.max(r.width, r.height)),
      i < 1)
    ) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          e instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          e instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap) ||
        ("undefined" != typeof VideoFrame && e instanceof VideoFrame)
      ) {
        let n = Math.floor(i * r.width),
          a = Math.floor(i * r.height);
        void 0 === c && (c = _(n, a));
        let s = t ? _(n, a) : c;
        return (
          (s.width = n),
          (s.height = a),
          s.getContext("2d").drawImage(e, 0, 0, n, a),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              r.width +
              "x" +
              r.height +
              ") to (" +
              n +
              "x" +
              a +
              ")."
          ),
          s
        );
      }
      "data" in e &&
        console.warn(
          "THREE.WebGLRenderer: Image in DataTexture is too big (" +
            r.width +
            "x" +
            r.height +
            ")."
        );
    }
    return e;
  }
  function y(e) {
    return e.generateMipmaps;
  }
  function M(t) {
    e.generateMipmap(t);
  }
  function S(n, i, r, a, s = !1) {
    if (null !== n) {
      if (void 0 !== e[n]) return e[n];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          n +
          "'"
      );
    }
    let o = i;
    if (
      (i === e.RED &&
        (r === e.FLOAT && (o = e.R32F),
        r === e.HALF_FLOAT && (o = e.R16F),
        r === e.UNSIGNED_BYTE && (o = e.R8)),
      i === e.RED_INTEGER &&
        (r === e.UNSIGNED_BYTE && (o = e.R8UI),
        r === e.UNSIGNED_SHORT && (o = e.R16UI),
        r === e.UNSIGNED_INT && (o = e.R32UI),
        r === e.BYTE && (o = e.R8I),
        r === e.SHORT && (o = e.R16I),
        r === e.INT && (o = e.R32I)),
      i === e.RG &&
        (r === e.FLOAT && (o = e.RG32F),
        r === e.HALF_FLOAT && (o = e.RG16F),
        r === e.UNSIGNED_BYTE && (o = e.RG8)),
      i === e.RG_INTEGER &&
        (r === e.UNSIGNED_BYTE && (o = e.RG8UI),
        r === e.UNSIGNED_SHORT && (o = e.RG16UI),
        r === e.UNSIGNED_INT && (o = e.RG32UI),
        r === e.BYTE && (o = e.RG8I),
        r === e.SHORT && (o = e.RG16I),
        r === e.INT && (o = e.RG32I)),
      i === e.RGB_INTEGER &&
        (r === e.UNSIGNED_BYTE && (o = e.RGB8UI),
        r === e.UNSIGNED_SHORT && (o = e.RGB16UI),
        r === e.UNSIGNED_INT && (o = e.RGB32UI),
        r === e.BYTE && (o = e.RGB8I),
        r === e.SHORT && (o = e.RGB16I),
        r === e.INT && (o = e.RGB32I)),
      i === e.RGBA_INTEGER &&
        (r === e.UNSIGNED_BYTE && (o = e.RGBA8UI),
        r === e.UNSIGNED_SHORT && (o = e.RGBA16UI),
        r === e.UNSIGNED_INT && (o = e.RGBA32UI),
        r === e.BYTE && (o = e.RGBA8I),
        r === e.SHORT && (o = e.RGBA16I),
        r === e.INT && (o = e.RGBA32I)),
      i === e.RGB && r === e.UNSIGNED_INT_5_9_9_9_REV && (o = e.RGB9_E5),
      i === e.RGBA)
    ) {
      let t = s ? l : R.getTransfer(a);
      r === e.FLOAT && (o = e.RGBA32F),
        r === e.HALF_FLOAT && (o = e.RGBA16F),
        r === e.UNSIGNED_BYTE && (o = t === h ? e.SRGB8_ALPHA8 : e.RGBA8),
        r === e.UNSIGNED_SHORT_4_4_4_4 && (o = e.RGBA4),
        r === e.UNSIGNED_SHORT_5_5_5_1 && (o = e.RGB5_A1);
    }
    return (
      (o === e.R16F ||
        o === e.R32F ||
        o === e.RG16F ||
        o === e.RG32F ||
        o === e.RGBA16F ||
        o === e.RGBA32F) &&
        t.get("EXT_color_buffer_float"),
      o
    );
  }
  function T(t, n) {
    let i;
    return (
      t
        ? null === n || 1014 === n || 1020 === n
          ? (i = e.DEPTH24_STENCIL8)
          : 1015 === n
          ? (i = e.DEPTH32F_STENCIL8)
          : 1012 === n &&
            ((i = e.DEPTH24_STENCIL8),
            console.warn(
              "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
            ))
        : null === n || 1014 === n || 1020 === n
        ? (i = e.DEPTH_COMPONENT24)
        : 1015 === n
        ? (i = e.DEPTH_COMPONENT32F)
        : 1012 === n && (i = e.DEPTH_COMPONENT16),
      i
    );
  }
  function b(e, t) {
    return !0 === y(e) ||
      (e.isFramebufferTexture && 1003 !== e.minFilter && 1006 !== e.minFilter)
      ? Math.log2(Math.max(t.width, t.height)) + 1
      : void 0 !== e.mipmaps && e.mipmaps.length > 0
      ? e.mipmaps.length
      : e.isCompressedTexture && Array.isArray(e.image)
      ? t.mipmaps.length
      : 1;
  }
  function A(e) {
    let t = e.target;
    t.removeEventListener("dispose", A),
      (function (e) {
        let t = i.get(e);
        if (void 0 === t.__webglInit) return;
        let n = e.source,
          r = m.get(n);
        if (r) {
          let i = r[t.__cacheKey];
          i.usedTimes--,
            0 === i.usedTimes && C(e),
            0 === Object.keys(r).length && m.delete(n);
        }
        i.remove(e);
      })(t),
      t.isVideoTexture && f.delete(t);
  }
  function w(t) {
    let n = t.target;
    n.removeEventListener("dispose", w),
      (function (t) {
        let n = i.get(t);
        if (
          (t.depthTexture &&
            (t.depthTexture.dispose(), i.remove(t.depthTexture)),
          t.isWebGLCubeRenderTarget)
        )
          for (let t = 0; t < 6; t++) {
            if (Array.isArray(n.__webglFramebuffer[t]))
              for (let i = 0; i < n.__webglFramebuffer[t].length; i++)
                e.deleteFramebuffer(n.__webglFramebuffer[t][i]);
            else e.deleteFramebuffer(n.__webglFramebuffer[t]);
            n.__webglDepthbuffer &&
              e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
          }
        else {
          if (Array.isArray(n.__webglFramebuffer))
            for (let t = 0; t < n.__webglFramebuffer.length; t++)
              e.deleteFramebuffer(n.__webglFramebuffer[t]);
          else e.deleteFramebuffer(n.__webglFramebuffer);
          if (
            (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer),
            n.__webglMultisampledFramebuffer &&
              e.deleteFramebuffer(n.__webglMultisampledFramebuffer),
            n.__webglColorRenderbuffer)
          )
            for (let t = 0; t < n.__webglColorRenderbuffer.length; t++)
              n.__webglColorRenderbuffer[t] &&
                e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
          n.__webglDepthRenderbuffer &&
            e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
        }
        let r = t.textures;
        for (let t = 0, n = r.length; t < n; t++) {
          let n = i.get(r[t]);
          n.__webglTexture &&
            (e.deleteTexture(n.__webglTexture), s.memory.textures--),
            i.remove(r[t]);
        }
        i.remove(t);
      })(n);
  }
  function C(t) {
    let n = i.get(t);
    e.deleteTexture(n.__webglTexture);
    let r = t.source,
      a = m.get(r);
    delete a[n.__cacheKey], s.memory.textures--;
  }
  let P = 0;
  function L(t, r) {
    let a = i.get(t);
    if (
      (t.isVideoTexture &&
        (function (e) {
          let t = s.render.frame;
          f.get(e) !== t && (f.set(e, t), e.update());
        })(t),
      !1 === t.isRenderTargetTexture &&
        t.version > 0 &&
        a.__version !== t.version)
    ) {
      let e = t.image;
      if (null === e)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (!1 === e.complete)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        F(a, t, r);
        return;
      }
    }
    n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + r);
  }
  let U = { 1e3: e.REPEAT, 1001: e.CLAMP_TO_EDGE, 1002: e.MIRRORED_REPEAT },
    N = {
      1003: e.NEAREST,
      1004: e.NEAREST_MIPMAP_NEAREST,
      1005: e.NEAREST_MIPMAP_LINEAR,
      1006: e.LINEAR,
      1007: e.LINEAR_MIPMAP_NEAREST,
      1008: e.LINEAR_MIPMAP_LINEAR,
    },
    D = {
      512: e.NEVER,
      519: e.ALWAYS,
      513: e.LESS,
      515: e.LEQUAL,
      514: e.EQUAL,
      518: e.GEQUAL,
      516: e.GREATER,
      517: e.NOTEQUAL,
    };
  function I(n, a) {
    if (
      (1015 === a.type &&
        !1 === t.has("OES_texture_float_linear") &&
        (1006 === a.magFilter ||
          1007 === a.magFilter ||
          1005 === a.magFilter ||
          1008 === a.magFilter ||
          1006 === a.minFilter ||
          1007 === a.minFilter ||
          1005 === a.minFilter ||
          1008 === a.minFilter) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      e.texParameteri(n, e.TEXTURE_WRAP_S, U[a.wrapS]),
      e.texParameteri(n, e.TEXTURE_WRAP_T, U[a.wrapT]),
      (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) &&
        e.texParameteri(n, e.TEXTURE_WRAP_R, U[a.wrapR]),
      e.texParameteri(n, e.TEXTURE_MAG_FILTER, N[a.magFilter]),
      e.texParameteri(n, e.TEXTURE_MIN_FILTER, N[a.minFilter]),
      a.compareFunction &&
        (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE),
        e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, D[a.compareFunction])),
      !0 === t.has("EXT_texture_filter_anisotropic") &&
        1003 !== a.magFilter &&
        (1005 === a.minFilter || 1008 === a.minFilter) &&
        (1015 !== a.type || !1 !== t.has("OES_texture_float_linear")) &&
        (a.anisotropy > 1 || i.get(a).__currentAnisotropy))
    ) {
      let s = t.get("EXT_texture_filter_anisotropic");
      e.texParameterf(
        n,
        s.TEXTURE_MAX_ANISOTROPY_EXT,
        Math.min(a.anisotropy, r.getMaxAnisotropy())
      ),
        (i.get(a).__currentAnisotropy = a.anisotropy);
    }
  }
  function O(t, n) {
    let i = !1;
    void 0 === t.__webglInit &&
      ((t.__webglInit = !0), n.addEventListener("dispose", A));
    let r = n.source,
      a = m.get(r);
    void 0 === a && ((a = {}), m.set(r, a));
    let o = (function (e) {
      let t = [];
      return (
        t.push(e.wrapS),
        t.push(e.wrapT),
        t.push(e.wrapR || 0),
        t.push(e.magFilter),
        t.push(e.minFilter),
        t.push(e.anisotropy),
        t.push(e.internalFormat),
        t.push(e.format),
        t.push(e.type),
        t.push(e.generateMipmaps),
        t.push(e.premultiplyAlpha),
        t.push(e.flipY),
        t.push(e.unpackAlignment),
        t.push(e.colorSpace),
        t.join()
      );
    })(n);
    if (o !== t.__cacheKey) {
      void 0 === a[o] &&
        ((a[o] = { texture: e.createTexture(), usedTimes: 0 }),
        s.memory.textures++,
        (i = !0)),
        a[o].usedTimes++;
      let r = a[t.__cacheKey];
      void 0 !== r && (a[t.__cacheKey].usedTimes--, 0 === r.usedTimes && C(n)),
        (t.__cacheKey = o),
        (t.__webglTexture = a[o].texture);
    }
    return i;
  }
  function F(t, s, o) {
    let l = e.TEXTURE_2D;
    (s.isDataArrayTexture || s.isCompressedArrayTexture) &&
      (l = e.TEXTURE_2D_ARRAY),
      s.isData3DTexture && (l = e.TEXTURE_3D);
    let h = O(t, s),
      c = s.source;
    n.bindTexture(l, t.__webglTexture, e.TEXTURE0 + o);
    let u = i.get(c);
    if (c.version !== u.__version || !0 === h) {
      let t;
      n.activeTexture(e.TEXTURE0 + o);
      let i = R.getPrimaries(R.workingColorSpace),
        d = "" === s.colorSpace ? null : R.getPrimaries(s.colorSpace),
        p = "" === s.colorSpace || i === d ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, s.flipY),
        e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.premultiplyAlpha),
        e.pixelStorei(e.UNPACK_ALIGNMENT, s.unpackAlignment),
        e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, p);
      let f = v(s.image, !1, r.maxTextureSize);
      f = X(s, f);
      let m = a.convert(s.format, s.colorSpace),
        g = a.convert(s.type),
        _ = S(s.internalFormat, m, g, s.colorSpace, s.isVideoTexture);
      I(l, s);
      let x = s.mipmaps,
        E = !0 !== s.isVideoTexture,
        A = void 0 === u.__version || !0 === h,
        w = c.dataReady,
        C = b(s, f);
      if (s.isDepthTexture)
        (_ = T(1027 === s.format, s.type)),
          A &&
            (E
              ? n.texStorage2D(e.TEXTURE_2D, 1, _, f.width, f.height)
              : n.texImage2D(
                  e.TEXTURE_2D,
                  0,
                  _,
                  f.width,
                  f.height,
                  0,
                  m,
                  g,
                  null
                ));
      else if (s.isDataTexture) {
        if (x.length > 0) {
          E && A && n.texStorage2D(e.TEXTURE_2D, C, _, x[0].width, x[0].height);
          for (let i = 0, r = x.length; i < r; i++)
            (t = x[i]),
              E
                ? w &&
                  n.texSubImage2D(
                    e.TEXTURE_2D,
                    i,
                    0,
                    0,
                    t.width,
                    t.height,
                    m,
                    g,
                    t.data
                  )
                : n.texImage2D(
                    e.TEXTURE_2D,
                    i,
                    _,
                    t.width,
                    t.height,
                    0,
                    m,
                    g,
                    t.data
                  );
          s.generateMipmaps = !1;
        } else
          E
            ? (A && n.texStorage2D(e.TEXTURE_2D, C, _, f.width, f.height),
              w &&
                n.texSubImage2D(
                  e.TEXTURE_2D,
                  0,
                  0,
                  0,
                  f.width,
                  f.height,
                  m,
                  g,
                  f.data
                ))
            : n.texImage2D(
                e.TEXTURE_2D,
                0,
                _,
                f.width,
                f.height,
                0,
                m,
                g,
                f.data
              );
      } else if (s.isCompressedTexture) {
        if (s.isCompressedArrayTexture) {
          E &&
            A &&
            n.texStorage3D(
              e.TEXTURE_2D_ARRAY,
              C,
              _,
              x[0].width,
              x[0].height,
              f.depth
            );
          for (let i = 0, r = x.length; i < r; i++)
            if (((t = x[i]), 1023 !== s.format)) {
              if (null !== m) {
                if (E) {
                  if (w) {
                    if (s.layerUpdates.size > 0) {
                      let r = ih(t.width, t.height, s.format, s.type);
                      for (let a of s.layerUpdates) {
                        let s = t.data.subarray(
                          (a * r) / t.data.BYTES_PER_ELEMENT,
                          ((a + 1) * r) / t.data.BYTES_PER_ELEMENT
                        );
                        n.compressedTexSubImage3D(
                          e.TEXTURE_2D_ARRAY,
                          i,
                          0,
                          0,
                          a,
                          t.width,
                          t.height,
                          1,
                          m,
                          s
                        );
                      }
                      s.clearLayerUpdates();
                    } else
                      n.compressedTexSubImage3D(
                        e.TEXTURE_2D_ARRAY,
                        i,
                        0,
                        0,
                        0,
                        t.width,
                        t.height,
                        f.depth,
                        m,
                        t.data
                      );
                  }
                } else
                  n.compressedTexImage3D(
                    e.TEXTURE_2D_ARRAY,
                    i,
                    _,
                    t.width,
                    t.height,
                    f.depth,
                    0,
                    t.data,
                    0,
                    0
                  );
              } else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                );
            } else
              E
                ? w &&
                  n.texSubImage3D(
                    e.TEXTURE_2D_ARRAY,
                    i,
                    0,
                    0,
                    0,
                    t.width,
                    t.height,
                    f.depth,
                    m,
                    g,
                    t.data
                  )
                : n.texImage3D(
                    e.TEXTURE_2D_ARRAY,
                    i,
                    _,
                    t.width,
                    t.height,
                    f.depth,
                    0,
                    m,
                    g,
                    t.data
                  );
        } else {
          E && A && n.texStorage2D(e.TEXTURE_2D, C, _, x[0].width, x[0].height);
          for (let i = 0, r = x.length; i < r; i++)
            (t = x[i]),
              1023 !== s.format
                ? null !== m
                  ? E
                    ? w &&
                      n.compressedTexSubImage2D(
                        e.TEXTURE_2D,
                        i,
                        0,
                        0,
                        t.width,
                        t.height,
                        m,
                        t.data
                      )
                    : n.compressedTexImage2D(
                        e.TEXTURE_2D,
                        i,
                        _,
                        t.width,
                        t.height,
                        0,
                        t.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : E
                ? w &&
                  n.texSubImage2D(
                    e.TEXTURE_2D,
                    i,
                    0,
                    0,
                    t.width,
                    t.height,
                    m,
                    g,
                    t.data
                  )
                : n.texImage2D(
                    e.TEXTURE_2D,
                    i,
                    _,
                    t.width,
                    t.height,
                    0,
                    m,
                    g,
                    t.data
                  );
        }
      } else if (s.isDataArrayTexture) {
        if (E) {
          if (
            (A &&
              n.texStorage3D(
                e.TEXTURE_2D_ARRAY,
                C,
                _,
                f.width,
                f.height,
                f.depth
              ),
            w)
          ) {
            if (s.layerUpdates.size > 0) {
              let t = ih(f.width, f.height, s.format, s.type);
              for (let i of s.layerUpdates) {
                let r = f.data.subarray(
                  (i * t) / f.data.BYTES_PER_ELEMENT,
                  ((i + 1) * t) / f.data.BYTES_PER_ELEMENT
                );
                n.texSubImage3D(
                  e.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  i,
                  f.width,
                  f.height,
                  1,
                  m,
                  g,
                  r
                );
              }
              s.clearLayerUpdates();
            } else
              n.texSubImage3D(
                e.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                f.width,
                f.height,
                f.depth,
                m,
                g,
                f.data
              );
          }
        } else
          n.texImage3D(
            e.TEXTURE_2D_ARRAY,
            0,
            _,
            f.width,
            f.height,
            f.depth,
            0,
            m,
            g,
            f.data
          );
      } else if (s.isData3DTexture)
        E
          ? (A &&
              n.texStorage3D(e.TEXTURE_3D, C, _, f.width, f.height, f.depth),
            w &&
              n.texSubImage3D(
                e.TEXTURE_3D,
                0,
                0,
                0,
                0,
                f.width,
                f.height,
                f.depth,
                m,
                g,
                f.data
              ))
          : n.texImage3D(
              e.TEXTURE_3D,
              0,
              _,
              f.width,
              f.height,
              f.depth,
              0,
              m,
              g,
              f.data
            );
      else if (s.isFramebufferTexture) {
        if (A) {
          if (E) n.texStorage2D(e.TEXTURE_2D, C, _, f.width, f.height);
          else {
            let t = f.width,
              i = f.height;
            for (let r = 0; r < C; r++)
              n.texImage2D(e.TEXTURE_2D, r, _, t, i, 0, m, g, null),
                (t >>= 1),
                (i >>= 1);
          }
        }
      } else if (x.length > 0) {
        if (E && A) {
          let t = j(x[0]);
          n.texStorage2D(e.TEXTURE_2D, C, _, t.width, t.height);
        }
        for (let i = 0, r = x.length; i < r; i++)
          (t = x[i]),
            E
              ? w && n.texSubImage2D(e.TEXTURE_2D, i, 0, 0, m, g, t)
              : n.texImage2D(e.TEXTURE_2D, i, _, m, g, t);
        s.generateMipmaps = !1;
      } else if (E) {
        if (A) {
          let t = j(f);
          n.texStorage2D(e.TEXTURE_2D, C, _, t.width, t.height);
        }
        w && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, m, g, f);
      } else n.texImage2D(e.TEXTURE_2D, 0, _, m, g, f);
      y(s) && M(l), (u.__version = c.version), s.onUpdate && s.onUpdate(s);
    }
    t.__version = s.version;
  }
  function B(t, r, s, o, l, h) {
    let c = a.convert(s.format, s.colorSpace),
      d = a.convert(s.type),
      p = S(s.internalFormat, c, d, s.colorSpace),
      f = i.get(r),
      m = i.get(s);
    if (((m.__renderTarget = r), !f.__hasExternalTextures)) {
      let t = Math.max(1, r.width >> h),
        i = Math.max(1, r.height >> h);
      l === e.TEXTURE_3D || l === e.TEXTURE_2D_ARRAY
        ? n.texImage3D(l, h, p, t, i, r.depth, 0, c, d, null)
        : n.texImage2D(l, h, p, t, i, 0, c, d, null);
    }
    n.bindFramebuffer(e.FRAMEBUFFER, t),
      W(r)
        ? u.framebufferTexture2DMultisampleEXT(
            e.FRAMEBUFFER,
            o,
            l,
            m.__webglTexture,
            0,
            k(r)
          )
        : (l === e.TEXTURE_2D ||
            (l >= e.TEXTURE_CUBE_MAP_POSITIVE_X &&
              l <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          e.framebufferTexture2D(e.FRAMEBUFFER, o, l, m.__webglTexture, h),
      n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function z(t, n, i) {
    if ((e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer)) {
      let r = n.depthTexture,
        a = r && r.isDepthTexture ? r.type : null,
        s = T(n.stencilBuffer, a),
        o = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
        l = k(n);
      W(n)
        ? u.renderbufferStorageMultisampleEXT(
            e.RENDERBUFFER,
            l,
            s,
            n.width,
            n.height
          )
        : i
        ? e.renderbufferStorageMultisample(
            e.RENDERBUFFER,
            l,
            s,
            n.width,
            n.height
          )
        : e.renderbufferStorage(e.RENDERBUFFER, s, n.width, n.height),
        e.framebufferRenderbuffer(e.FRAMEBUFFER, o, e.RENDERBUFFER, t);
    } else {
      let t = n.textures;
      for (let r = 0; r < t.length; r++) {
        let s = t[r],
          o = a.convert(s.format, s.colorSpace),
          l = a.convert(s.type),
          h = S(s.internalFormat, o, l, s.colorSpace),
          c = k(n);
        i && !1 === W(n)
          ? e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              c,
              h,
              n.width,
              n.height
            )
          : W(n)
          ? u.renderbufferStorageMultisampleEXT(
              e.RENDERBUFFER,
              c,
              h,
              n.width,
              n.height
            )
          : e.renderbufferStorage(e.RENDERBUFFER, h, n.width, n.height);
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function V(t) {
    let r = i.get(t),
      a = !0 === t.isWebGLCubeRenderTarget;
    if (r.__boundDepthTexture !== t.depthTexture) {
      let e = t.depthTexture;
      if ((r.__depthDisposeCallback && r.__depthDisposeCallback(), e)) {
        let t = () => {
          delete r.__boundDepthTexture,
            delete r.__depthDisposeCallback,
            e.removeEventListener("dispose", t);
        };
        e.addEventListener("dispose", t), (r.__depthDisposeCallback = t);
      }
      r.__boundDepthTexture = e;
    }
    if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
      if (a)
        throw Error("target.depthTexture not supported in Cube render targets");
      !(function (t, r) {
        if (r && r.isWebGLCubeRenderTarget)
          throw Error(
            "Depth Texture with cube render targets is not supported"
          );
        if (
          (n.bindFramebuffer(e.FRAMEBUFFER, t),
          !(r.depthTexture && r.depthTexture.isDepthTexture))
        )
          throw Error(
            "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
          );
        let a = i.get(r.depthTexture);
        (a.__renderTarget = r),
          (a.__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
          L(r.depthTexture, 0);
        let s = a.__webglTexture,
          o = k(r);
        if (1026 === r.depthTexture.format)
          W(r)
            ? u.framebufferTexture2DMultisampleEXT(
                e.FRAMEBUFFER,
                e.DEPTH_ATTACHMENT,
                e.TEXTURE_2D,
                s,
                0,
                o
              )
            : e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.DEPTH_ATTACHMENT,
                e.TEXTURE_2D,
                s,
                0
              );
        else if (1027 === r.depthTexture.format)
          W(r)
            ? u.framebufferTexture2DMultisampleEXT(
                e.FRAMEBUFFER,
                e.DEPTH_STENCIL_ATTACHMENT,
                e.TEXTURE_2D,
                s,
                0,
                o
              )
            : e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.DEPTH_STENCIL_ATTACHMENT,
                e.TEXTURE_2D,
                s,
                0
              );
        else throw Error("Unknown depthTexture format");
      })(r.__webglFramebuffer, t);
    } else if (a) {
      r.__webglDepthbuffer = [];
      for (let i = 0; i < 6; i++)
        if (
          (n.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer[i]),
          void 0 === r.__webglDepthbuffer[i])
        )
          (r.__webglDepthbuffer[i] = e.createRenderbuffer()),
            z(r.__webglDepthbuffer[i], t, !1);
        else {
          let n = t.stencilBuffer
              ? e.DEPTH_STENCIL_ATTACHMENT
              : e.DEPTH_ATTACHMENT,
            a = r.__webglDepthbuffer[i];
          e.bindRenderbuffer(e.RENDERBUFFER, a),
            e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
        }
    } else if (
      (n.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer),
      void 0 === r.__webglDepthbuffer)
    )
      (r.__webglDepthbuffer = e.createRenderbuffer()),
        z(r.__webglDepthbuffer, t, !1);
    else {
      let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
        i = r.__webglDepthbuffer;
      e.bindRenderbuffer(e.RENDERBUFFER, i),
        e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, i);
    }
    n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  let H = [],
    G = [];
  function k(e) {
    return Math.min(r.maxSamples, e.samples);
  }
  function W(e) {
    let n = i.get(e);
    return (
      e.samples > 0 &&
      !0 === t.has("WEBGL_multisampled_render_to_texture") &&
      !1 !== n.__useRenderToTexture
    );
  }
  function X(e, t) {
    let n = e.colorSpace,
      i = e.format,
      r = e.type;
    return (
      !0 === e.isCompressedTexture ||
        !0 === e.isVideoTexture ||
        (n !== o &&
          "" !== n &&
          (R.getTransfer(n) === h
            ? (1023 !== i || 1009 !== r) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                n
              ))),
      t
    );
  }
  function j(e) {
    return (
      "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement
        ? ((p.width = e.naturalWidth || e.width),
          (p.height = e.naturalHeight || e.height))
        : "undefined" != typeof VideoFrame && e instanceof VideoFrame
        ? ((p.width = e.displayWidth), (p.height = e.displayHeight))
        : ((p.width = e.width), (p.height = e.height)),
      p
    );
  }
  (this.allocateTextureUnit = function () {
    let e = P;
    return (
      e >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            e +
            " texture units while this GPU supports only " +
            r.maxTextures
        ),
      (P += 1),
      e
    );
  }),
    (this.resetTextureUnits = function () {
      P = 0;
    }),
    (this.setTexture2D = L),
    (this.setTexture2DArray = function (t, r) {
      let a = i.get(t);
      if (t.version > 0 && a.__version !== t.version) {
        F(a, t, r);
        return;
      }
      n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + r);
    }),
    (this.setTexture3D = function (t, r) {
      let a = i.get(t);
      if (t.version > 0 && a.__version !== t.version) {
        F(a, t, r);
        return;
      }
      n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + r);
    }),
    (this.setTextureCube = function (t, s) {
      let o = i.get(t);
      if (t.version > 0 && o.__version !== t.version) {
        (function (t, s, o) {
          if (6 !== s.image.length) return;
          let l = O(t, s),
            h = s.source;
          n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + o);
          let c = i.get(h);
          if (h.version !== c.__version || !0 === l) {
            let t;
            n.activeTexture(e.TEXTURE0 + o);
            let i = R.getPrimaries(R.workingColorSpace),
              u = "" === s.colorSpace ? null : R.getPrimaries(s.colorSpace),
              d =
                "" === s.colorSpace || i === u
                  ? e.NONE
                  : e.BROWSER_DEFAULT_WEBGL;
            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, s.flipY),
              e.pixelStorei(
                e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                s.premultiplyAlpha
              ),
              e.pixelStorei(e.UNPACK_ALIGNMENT, s.unpackAlignment),
              e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
            let p = s.isCompressedTexture || s.image[0].isCompressedTexture,
              f = s.image[0] && s.image[0].isDataTexture,
              m = [];
            for (let e = 0; e < 6; e++)
              p || f
                ? (m[e] = f ? s.image[e].image : s.image[e])
                : (m[e] = v(s.image[e], !0, r.maxCubemapSize)),
                (m[e] = X(s, m[e]));
            let g = m[0],
              _ = a.convert(s.format, s.colorSpace),
              x = a.convert(s.type),
              E = S(s.internalFormat, _, x, s.colorSpace),
              T = !0 !== s.isVideoTexture,
              A = void 0 === c.__version || !0 === l,
              w = h.dataReady,
              C = b(s, g);
            if ((I(e.TEXTURE_CUBE_MAP, s), p)) {
              T &&
                A &&
                n.texStorage2D(e.TEXTURE_CUBE_MAP, C, E, g.width, g.height);
              for (let i = 0; i < 6; i++) {
                t = m[i].mipmaps;
                for (let r = 0; r < t.length; r++) {
                  let a = t[r];
                  1023 !== s.format
                    ? null !== _
                      ? T
                        ? w &&
                          n.compressedTexSubImage2D(
                            e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                            r,
                            0,
                            0,
                            a.width,
                            a.height,
                            _,
                            a.data
                          )
                        : n.compressedTexImage2D(
                            e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                            r,
                            E,
                            a.width,
                            a.height,
                            0,
                            a.data
                          )
                      : console.warn(
                          "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                        )
                    : T
                    ? w &&
                      n.texSubImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                        r,
                        0,
                        0,
                        a.width,
                        a.height,
                        _,
                        x,
                        a.data
                      )
                    : n.texImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                        r,
                        E,
                        a.width,
                        a.height,
                        0,
                        _,
                        x,
                        a.data
                      );
                }
              }
            } else {
              if (((t = s.mipmaps), T && A)) {
                t.length > 0 && C++;
                let i = j(m[0]);
                n.texStorage2D(e.TEXTURE_CUBE_MAP, C, E, i.width, i.height);
              }
              for (let i = 0; i < 6; i++)
                if (f) {
                  T
                    ? w &&
                      n.texSubImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                        0,
                        0,
                        0,
                        m[i].width,
                        m[i].height,
                        _,
                        x,
                        m[i].data
                      )
                    : n.texImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                        0,
                        E,
                        m[i].width,
                        m[i].height,
                        0,
                        _,
                        x,
                        m[i].data
                      );
                  for (let r = 0; r < t.length; r++) {
                    let a = t[r].image[i].image;
                    T
                      ? w &&
                        n.texSubImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                          r + 1,
                          0,
                          0,
                          a.width,
                          a.height,
                          _,
                          x,
                          a.data
                        )
                      : n.texImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                          r + 1,
                          E,
                          a.width,
                          a.height,
                          0,
                          _,
                          x,
                          a.data
                        );
                  }
                } else {
                  T
                    ? w &&
                      n.texSubImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                        0,
                        0,
                        0,
                        _,
                        x,
                        m[i]
                      )
                    : n.texImage2D(
                        e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                        0,
                        E,
                        _,
                        x,
                        m[i]
                      );
                  for (let r = 0; r < t.length; r++) {
                    let a = t[r];
                    T
                      ? w &&
                        n.texSubImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                          r + 1,
                          0,
                          0,
                          _,
                          x,
                          a.image[i]
                        )
                      : n.texImage2D(
                          e.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                          r + 1,
                          E,
                          _,
                          x,
                          a.image[i]
                        );
                  }
                }
            }
            y(s) && M(e.TEXTURE_CUBE_MAP),
              (c.__version = h.version),
              s.onUpdate && s.onUpdate(s);
          }
          t.__version = s.version;
        })(o, t, s);
        return;
      }
      n.bindTexture(e.TEXTURE_CUBE_MAP, o.__webglTexture, e.TEXTURE0 + s);
    }),
    (this.rebindTextures = function (t, n, r) {
      let a = i.get(t);
      void 0 !== n &&
        B(
          a.__webglFramebuffer,
          t,
          t.texture,
          e.COLOR_ATTACHMENT0,
          e.TEXTURE_2D,
          0
        ),
        void 0 !== r && V(t);
    }),
    (this.setupRenderTarget = function (t) {
      let r = t.texture,
        o = i.get(t),
        l = i.get(r);
      t.addEventListener("dispose", w);
      let h = t.textures,
        c = !0 === t.isWebGLCubeRenderTarget,
        u = h.length > 1;
      if (
        (!u &&
          (void 0 === l.__webglTexture &&
            (l.__webglTexture = e.createTexture()),
          (l.__version = r.version),
          s.memory.textures++),
        c)
      ) {
        o.__webglFramebuffer = [];
        for (let t = 0; t < 6; t++)
          if (r.mipmaps && r.mipmaps.length > 0) {
            o.__webglFramebuffer[t] = [];
            for (let n = 0; n < r.mipmaps.length; n++)
              o.__webglFramebuffer[t][n] = e.createFramebuffer();
          } else o.__webglFramebuffer[t] = e.createFramebuffer();
      } else {
        if (r.mipmaps && r.mipmaps.length > 0) {
          o.__webglFramebuffer = [];
          for (let t = 0; t < r.mipmaps.length; t++)
            o.__webglFramebuffer[t] = e.createFramebuffer();
        } else o.__webglFramebuffer = e.createFramebuffer();
        if (u)
          for (let t = 0, n = h.length; t < n; t++) {
            let n = i.get(h[t]);
            void 0 === n.__webglTexture &&
              ((n.__webglTexture = e.createTexture()), s.memory.textures++);
          }
        if (t.samples > 0 && !1 === W(t)) {
          (o.__webglMultisampledFramebuffer = e.createFramebuffer()),
            (o.__webglColorRenderbuffer = []),
            n.bindFramebuffer(e.FRAMEBUFFER, o.__webglMultisampledFramebuffer);
          for (let n = 0; n < h.length; n++) {
            let i = h[n];
            (o.__webglColorRenderbuffer[n] = e.createRenderbuffer()),
              e.bindRenderbuffer(e.RENDERBUFFER, o.__webglColorRenderbuffer[n]);
            let r = a.convert(i.format, i.colorSpace),
              s = a.convert(i.type),
              l = S(
                i.internalFormat,
                r,
                s,
                i.colorSpace,
                !0 === t.isXRRenderTarget
              ),
              c = k(t);
            e.renderbufferStorageMultisample(
              e.RENDERBUFFER,
              c,
              l,
              t.width,
              t.height
            ),
              e.framebufferRenderbuffer(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0 + n,
                e.RENDERBUFFER,
                o.__webglColorRenderbuffer[n]
              );
          }
          e.bindRenderbuffer(e.RENDERBUFFER, null),
            t.depthBuffer &&
              ((o.__webglDepthRenderbuffer = e.createRenderbuffer()),
              z(o.__webglDepthRenderbuffer, t, !0)),
            n.bindFramebuffer(e.FRAMEBUFFER, null);
        }
      }
      if (c) {
        n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture),
          I(e.TEXTURE_CUBE_MAP, r);
        for (let n = 0; n < 6; n++)
          if (r.mipmaps && r.mipmaps.length > 0)
            for (let i = 0; i < r.mipmaps.length; i++)
              B(
                o.__webglFramebuffer[n][i],
                t,
                r,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                i
              );
          else
            B(
              o.__webglFramebuffer[n],
              t,
              r,
              e.COLOR_ATTACHMENT0,
              e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
              0
            );
        y(r) && M(e.TEXTURE_CUBE_MAP), n.unbindTexture();
      } else if (u) {
        for (let r = 0, a = h.length; r < a; r++) {
          let a = h[r],
            s = i.get(a);
          n.bindTexture(e.TEXTURE_2D, s.__webglTexture),
            I(e.TEXTURE_2D, a),
            B(
              o.__webglFramebuffer,
              t,
              a,
              e.COLOR_ATTACHMENT0 + r,
              e.TEXTURE_2D,
              0
            ),
            y(a) && M(e.TEXTURE_2D);
        }
        n.unbindTexture();
      } else {
        let i = e.TEXTURE_2D;
        if (
          ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
            (i = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY),
          n.bindTexture(i, l.__webglTexture),
          I(i, r),
          r.mipmaps && r.mipmaps.length > 0)
        )
          for (let n = 0; n < r.mipmaps.length; n++)
            B(o.__webglFramebuffer[n], t, r, e.COLOR_ATTACHMENT0, i, n);
        else B(o.__webglFramebuffer, t, r, e.COLOR_ATTACHMENT0, i, 0);
        y(r) && M(i), n.unbindTexture();
      }
      t.depthBuffer && V(t);
    }),
    (this.updateRenderTargetMipmap = function (t) {
      let r = t.textures;
      for (let a = 0, s = r.length; a < s; a++) {
        let s = r[a];
        if (y(s)) {
          let r = t.isWebGLCubeRenderTarget
              ? e.TEXTURE_CUBE_MAP
              : t.isWebGL3DRenderTarget
              ? e.TEXTURE_3D
              : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture
              ? e.TEXTURE_2D_ARRAY
              : e.TEXTURE_2D,
            a = i.get(s).__webglTexture;
          n.bindTexture(r, a), M(r), n.unbindTexture();
        }
      }
    }),
    (this.updateMultisampleRenderTarget = function (t) {
      if (t.samples > 0) {
        if (!1 === W(t)) {
          let r = t.textures,
            a = t.width,
            s = t.height,
            o = e.COLOR_BUFFER_BIT,
            l = t.stencilBuffer
              ? e.DEPTH_STENCIL_ATTACHMENT
              : e.DEPTH_ATTACHMENT,
            h = i.get(t),
            c = r.length > 1;
          if (c)
            for (let t = 0; t < r.length; t++)
              n.bindFramebuffer(
                e.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                e.framebufferRenderbuffer(
                  e.FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.RENDERBUFFER,
                  null
                ),
                n.bindFramebuffer(e.FRAMEBUFFER, h.__webglFramebuffer),
                e.framebufferTexture2D(
                  e.DRAW_FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.TEXTURE_2D,
                  null,
                  0
                );
          n.bindFramebuffer(
            e.READ_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          ),
            n.bindFramebuffer(e.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
          for (let n = 0; n < r.length; n++) {
            if (
              (t.resolveDepthBuffer &&
                (t.depthBuffer && (o |= e.DEPTH_BUFFER_BIT),
                t.stencilBuffer &&
                  t.resolveStencilBuffer &&
                  (o |= e.STENCIL_BUFFER_BIT)),
              c)
            ) {
              e.framebufferRenderbuffer(
                e.READ_FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                e.RENDERBUFFER,
                h.__webglColorRenderbuffer[n]
              );
              let t = i.get(r[n]).__webglTexture;
              e.framebufferTexture2D(
                e.DRAW_FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_2D,
                t,
                0
              );
            }
            e.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, e.NEAREST),
              !0 === d &&
                ((H.length = 0),
                (G.length = 0),
                H.push(e.COLOR_ATTACHMENT0 + n),
                t.depthBuffer &&
                  !1 === t.resolveDepthBuffer &&
                  (H.push(l),
                  G.push(l),
                  e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, G)),
                e.invalidateFramebuffer(e.READ_FRAMEBUFFER, H));
          }
          if (
            (n.bindFramebuffer(e.READ_FRAMEBUFFER, null),
            n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
            c)
          )
            for (let t = 0; t < r.length; t++) {
              n.bindFramebuffer(
                e.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                e.framebufferRenderbuffer(
                  e.FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.RENDERBUFFER,
                  h.__webglColorRenderbuffer[t]
                );
              let a = i.get(r[t]).__webglTexture;
              n.bindFramebuffer(e.FRAMEBUFFER, h.__webglFramebuffer),
                e.framebufferTexture2D(
                  e.DRAW_FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0 + t,
                  e.TEXTURE_2D,
                  a,
                  0
                );
            }
          n.bindFramebuffer(
            e.DRAW_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          );
        } else if (t.depthBuffer && !1 === t.resolveDepthBuffer && d) {
          let n = t.stencilBuffer
            ? e.DEPTH_STENCIL_ATTACHMENT
            : e.DEPTH_ATTACHMENT;
          e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
        }
      }
    }),
    (this.setupDepthRenderbuffer = V),
    (this.setupFrameBufferTexture = B),
    (this.useMultisampledRTT = W);
}
function af(e, t) {
  return {
    convert: function (n, i = "") {
      let r;
      let a = R.getTransfer(i);
      if (1009 === n) return e.UNSIGNED_BYTE;
      if (1017 === n) return e.UNSIGNED_SHORT_4_4_4_4;
      if (1018 === n) return e.UNSIGNED_SHORT_5_5_5_1;
      if (35902 === n) return e.UNSIGNED_INT_5_9_9_9_REV;
      if (1010 === n) return e.BYTE;
      if (1011 === n) return e.SHORT;
      if (1012 === n) return e.UNSIGNED_SHORT;
      if (1013 === n) return e.INT;
      if (1014 === n) return e.UNSIGNED_INT;
      if (1015 === n) return e.FLOAT;
      if (1016 === n) return e.HALF_FLOAT;
      if (1021 === n) return e.ALPHA;
      if (1022 === n) return e.RGB;
      if (1023 === n) return e.RGBA;
      if (1024 === n) return e.LUMINANCE;
      if (1025 === n) return e.LUMINANCE_ALPHA;
      if (1026 === n) return e.DEPTH_COMPONENT;
      if (1027 === n) return e.DEPTH_STENCIL;
      if (1028 === n) return e.RED;
      if (1029 === n) return e.RED_INTEGER;
      if (1030 === n) return e.RG;
      if (1031 === n) return e.RG_INTEGER;
      if (1033 === n) return e.RGBA_INTEGER;
      if (33776 === n || 33777 === n || 33778 === n || 33779 === n) {
        if (a === h) {
          if (null === (r = t.get("WEBGL_compressed_texture_s3tc_srgb")))
            return null;
          if (33776 === n) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (33777 === n) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (33778 === n) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (33779 === n) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (null === (r = t.get("WEBGL_compressed_texture_s3tc")))
            return null;
          if (33776 === n) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (33777 === n) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (33778 === n) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (33779 === n) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      }
      if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
        if (null === (r = t.get("WEBGL_compressed_texture_pvrtc"))) return null;
        if (35840 === n) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (35841 === n) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (35842 === n) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (35843 === n) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (36196 === n || 37492 === n || 37496 === n) {
        if (null === (r = t.get("WEBGL_compressed_texture_etc"))) return null;
        if (36196 === n || 37492 === n)
          return a === h ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (37496 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (
        37808 === n ||
        37809 === n ||
        37810 === n ||
        37811 === n ||
        37812 === n ||
        37813 === n ||
        37814 === n ||
        37815 === n ||
        37816 === n ||
        37817 === n ||
        37818 === n ||
        37819 === n ||
        37820 === n ||
        37821 === n
      ) {
        if (null === (r = t.get("WEBGL_compressed_texture_astc"))) return null;
        if (37808 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (37809 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (37810 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (37811 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (37812 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (37813 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (37814 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (37815 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (37816 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (37817 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (37818 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (37819 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (37820 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (37821 === n)
          return a === h
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (36492 === n || 36494 === n || 36495 === n) {
        if (null === (r = t.get("EXT_texture_compression_bptc"))) return null;
        if (36492 === n)
          return a === h
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (36494 === n) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (36495 === n) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (36283 === n || 36284 === n || 36285 === n || 36286 === n) {
        if (null === (r = t.get("EXT_texture_compression_rgtc"))) return null;
        if (36492 === n) return r.COMPRESSED_RED_RGTC1_EXT;
        if (36284 === n) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (36285 === n) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (36286 === n) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return 1020 === n ? e.UNSIGNED_INT_24_8 : void 0 !== e[n] ? e[n] : null;
    },
  };
}
const am = { type: "move" };
class ag {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      null === this._hand &&
        ((this._hand = new t$()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      null === this._targetRay &&
        ((this._targetRay = new t$()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new G()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new G())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      null === this._grip &&
        ((this._grip = new t$()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new G()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new G())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      null !== this._targetRay && this._targetRay.dispatchEvent(e),
      null !== this._grip && this._grip.dispatchEvent(e),
      null !== this._hand && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      let t = this._hand;
      if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      null !== this._targetRay && (this._targetRay.visible = !1),
      null !== this._grip && (this._grip.visible = !1),
      null !== this._hand && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      a = null,
      s = this._targetRay,
      o = this._grip,
      l = this._hand;
    if (e && "visible-blurred" !== t.session.visibilityState) {
      if (l && e.hand) {
        for (let i of ((a = !0), e.hand.values())) {
          let e = t.getJointPose(i, n),
            r = this._getHandJoint(l, i);
          null !== e &&
            (r.matrix.fromArray(e.transform.matrix),
            r.matrix.decompose(r.position, r.rotation, r.scale),
            (r.matrixWorldNeedsUpdate = !0),
            (r.jointRadius = e.radius)),
            (r.visible = null !== e);
        }
        let i = l.joints["index-finger-tip"],
          r = l.joints["thumb-tip"],
          s = i.position.distanceTo(r.position);
        l.inputState.pinching && s > 0.025
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            s <= 0.015 &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        null !== o &&
          e.gripSpace &&
          null !== (r = t.getPose(e.gripSpace, n)) &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1));
      null !== s &&
        (null === (i = t.getPose(e.targetRaySpace, n)) && null !== r && (i = r),
        null !== i &&
          (s.matrix.fromArray(i.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          (s.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(i.linearVelocity))
            : (s.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(i.angularVelocity))
            : (s.hasAngularVelocity = !1),
          this.dispatchEvent(am)));
    }
    return (
      null !== s && (s.visible = null !== i),
      null !== o && (o.visible = null !== r),
      null !== l && (l.visible = null !== a),
      this
    );
  }
  _getHandJoint(e, t) {
    if (void 0 === e.joints[t.jointName]) {
      let n = new t$();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const a_ = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  av = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class ax {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t, n) {
    if (null === this.texture) {
      let i = new O();
      (e.properties.get(i).__webglTexture = t.texture),
        (t.depthNear != n.depthNear || t.depthFar != n.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = i);
    }
  }
  getMesh(e) {
    if (null !== this.texture && null === this.mesh) {
      let t = e.cameras[0].viewport,
        n = new tO({
          vertexShader: a_,
          fragmentShader: av,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new tC(new nz(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class ay extends u {
  constructor(e, t) {
    super();
    let n = this,
      i = null,
      r = 1,
      a = null,
      s = "local-floor",
      o = 1,
      l = null,
      h = null,
      c = null,
      u = null,
      d = null,
      p = null,
      m = new ax(),
      g = t.getContextAttributes(),
      _ = null,
      v = null,
      y = [],
      M = [],
      S = new x(),
      E = null,
      T = new tH();
    T.viewport = new F();
    let b = new tH();
    b.viewport = new F();
    let A = [T, b],
      w = new n7(),
      R = null,
      C = null;
    function P(e) {
      let t = M.indexOf(e.inputSource);
      if (-1 === t) return;
      let n = y[t];
      void 0 !== n &&
        (n.update(e.inputSource, e.frame, l || a),
        n.dispatchEvent({ type: e.type, data: e.inputSource }));
    }
    function L() {
      i.removeEventListener("select", P),
        i.removeEventListener("selectstart", P),
        i.removeEventListener("selectend", P),
        i.removeEventListener("squeeze", P),
        i.removeEventListener("squeezestart", P),
        i.removeEventListener("squeezeend", P),
        i.removeEventListener("end", L),
        i.removeEventListener("inputsourceschange", U);
      for (let e = 0; e < y.length; e++) {
        let t = M[e];
        null !== t && ((M[e] = null), y[e].disconnect(t));
      }
      (R = null),
        (C = null),
        m.reset(),
        e.setRenderTarget(_),
        (d = null),
        (u = null),
        (c = null),
        (i = null),
        (v = null),
        B.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(E),
        e.setSize(S.width, S.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    function U(e) {
      for (let t = 0; t < e.removed.length; t++) {
        let n = e.removed[t],
          i = M.indexOf(n);
        i >= 0 && ((M[i] = null), y[i].disconnect(n));
      }
      for (let t = 0; t < e.added.length; t++) {
        let n = e.added[t],
          i = M.indexOf(n);
        if (-1 === i) {
          for (let e = 0; e < y.length; e++) {
            if (e >= M.length) {
              M.push(n), (i = e);
              break;
            }
            if (null === M[e]) {
              (M[e] = n), (i = e);
              break;
            }
          }
          if (-1 === i) break;
        }
        let r = y[i];
        r && r.connect(n);
      }
    }
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (e) {
        let t = y[e];
        return (
          void 0 === t && ((t = new ag()), (y[e] = t)), t.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (e) {
        let t = y[e];
        return void 0 === t && ((t = new ag()), (y[e] = t)), t.getGripSpace();
      }),
      (this.getHand = function (e) {
        let t = y[e];
        return void 0 === t && ((t = new ag()), (y[e] = t)), t.getHandSpace();
      }),
      (this.setFramebufferScaleFactor = function (e) {
        (r = e),
          !0 === n.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
            );
      }),
      (this.setReferenceSpaceType = function (e) {
        (s = e),
          !0 === n.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (e) {
        l = e;
      }),
      (this.getBaseLayer = function () {
        return null !== u ? u : d;
      }),
      (this.getBinding = function () {
        return c;
      }),
      (this.getFrame = function () {
        return p;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (h) {
        if (null !== (i = h)) {
          if (
            ((_ = e.getRenderTarget()),
            i.addEventListener("select", P),
            i.addEventListener("selectstart", P),
            i.addEventListener("selectend", P),
            i.addEventListener("squeeze", P),
            i.addEventListener("squeezestart", P),
            i.addEventListener("squeezeend", P),
            i.addEventListener("end", L),
            i.addEventListener("inputsourceschange", U),
            !0 !== g.xrCompatible && (await t.makeXRCompatible()),
            (E = e.getPixelRatio()),
            e.getSize(S),
            void 0 === i.renderState.layers)
          ) {
            let n = {
              antialias: g.antialias,
              alpha: !0,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: r,
            };
            (d = new XRWebGLLayer(i, t, n)),
              i.updateRenderState({ baseLayer: d }),
              e.setPixelRatio(1),
              e.setSize(d.framebufferWidth, d.framebufferHeight, !1),
              (v = new z(d.framebufferWidth, d.framebufferHeight, {
                format: 1023,
                type: 1009,
                colorSpace: e.outputColorSpace,
                stencilBuffer: g.stencil,
              }));
          } else {
            let n = null,
              a = null,
              s = null;
            g.depth &&
              ((s = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (n = g.stencil ? 1027 : 1026),
              (a = g.stencil ? 1020 : 1014));
            let o = { colorFormat: t.RGBA8, depthFormat: s, scaleFactor: r };
            (u = (c = new XRWebGLBinding(i, t)).createProjectionLayer(o)),
              i.updateRenderState({ layers: [u] }),
              e.setPixelRatio(1),
              e.setSize(u.textureWidth, u.textureHeight, !1),
              (v = new z(u.textureWidth, u.textureHeight, {
                format: 1023,
                type: 1009,
                depthTexture: new tQ(
                  u.textureWidth,
                  u.textureHeight,
                  a,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  n
                ),
                stencilBuffer: g.stencil,
                colorSpace: e.outputColorSpace,
                samples: g.antialias ? 4 : 0,
                resolveDepthBuffer: !1 === u.ignoreDepthValues,
              }));
          }
          (v.isXRRenderTarget = !0),
            this.setFoveation(o),
            (l = null),
            (a = await i.requestReferenceSpace(s)),
            B.setContext(i),
            B.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (null !== i) return i.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return m.getDepthTexture();
      });
    let N = new G(),
      D = new G();
    function I(e, t) {
      null === t
        ? e.matrixWorld.copy(e.matrix)
        : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
        e.matrixWorldInverse.copy(e.matrixWorld).invert();
    }
    (this.updateCamera = function (e) {
      if (null === i) return;
      let t = e.near,
        n = e.far;
      null !== m.texture &&
        (m.depthNear > 0 && (t = m.depthNear),
        m.depthFar > 0 && (n = m.depthFar)),
        (w.near = b.near = T.near = t),
        (w.far = b.far = T.far = n),
        (R !== w.near || C !== w.far) &&
          (i.updateRenderState({ depthNear: w.near, depthFar: w.far }),
          (R = w.near),
          (C = w.far)),
        (T.layers.mask = 2 | e.layers.mask),
        (b.layers.mask = 4 | e.layers.mask),
        (w.layers.mask = T.layers.mask | b.layers.mask);
      let r = e.parent,
        a = w.cameras;
      I(w, r);
      for (let e = 0; e < a.length; e++) I(a[e], r);
      2 === a.length
        ? (function (e, t, n) {
            N.setFromMatrixPosition(t.matrixWorld),
              D.setFromMatrixPosition(n.matrixWorld);
            let i = N.distanceTo(D),
              r = t.projectionMatrix.elements,
              a = n.projectionMatrix.elements,
              s = r[14] / (r[10] - 1),
              o = r[14] / (r[10] + 1),
              l = (r[9] + 1) / r[5],
              h = (r[9] - 1) / r[5],
              c = (r[8] - 1) / r[0],
              u = (a[8] + 1) / a[0],
              d = i / (-c + u),
              p = -(d * c);
            if (
              (t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
              e.translateX(p),
              e.translateZ(d),
              e.matrixWorld.compose(e.position, e.quaternion, e.scale),
              e.matrixWorldInverse.copy(e.matrixWorld).invert(),
              -1 === r[10])
            )
              e.projectionMatrix.copy(t.projectionMatrix),
                e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
            else {
              let t = s + d,
                n = o + d;
              e.projectionMatrix.makePerspective(
                s * c - p,
                s * u + (i - p),
                ((l * o) / n) * t,
                ((h * o) / n) * t,
                t,
                n
              ),
                e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
            }
          })(w, T, b)
        : w.projectionMatrix.copy(T.projectionMatrix),
        null === r
          ? e.matrix.copy(w.matrixWorld)
          : (e.matrix.copy(r.matrixWorld),
            e.matrix.invert(),
            e.matrix.multiply(w.matrixWorld)),
        e.matrix.decompose(e.position, e.quaternion, e.scale),
        e.updateMatrixWorld(!0),
        e.projectionMatrix.copy(w.projectionMatrix),
        e.projectionMatrixInverse.copy(w.projectionMatrixInverse),
        e.isPerspectiveCamera &&
          ((e.fov = 2 * f * Math.atan(1 / e.projectionMatrix.elements[5])),
          (e.zoom = 1));
    }),
      (this.getCamera = function () {
        return w;
      }),
      (this.getFoveation = function () {
        if (null !== u || null !== d) return o;
      }),
      (this.setFoveation = function (e) {
        (o = e),
          null !== u && (u.fixedFoveation = e),
          null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = e);
      }),
      (this.hasDepthSensing = function () {
        return null !== m.texture;
      }),
      (this.getDepthSensingMesh = function () {
        return m.getMesh(w);
      });
    let O = null,
      B = new ic();
    B.setAnimationLoop(function (t, r) {
      if (((h = r.getViewerPose(l || a)), (p = r), null !== h)) {
        let t = h.views;
        null !== d &&
          (e.setRenderTargetFramebuffer(v, d.framebuffer),
          e.setRenderTarget(v));
        let n = !1;
        t.length !== w.cameras.length && ((w.cameras.length = 0), (n = !0));
        for (let i = 0; i < t.length; i++) {
          let r = t[i],
            a = null;
          if (null !== d) a = d.getViewport(r);
          else {
            let t = c.getViewSubImage(u, r);
            (a = t.viewport),
              0 === i &&
                (e.setRenderTargetTextures(
                  v,
                  t.colorTexture,
                  u.ignoreDepthValues ? void 0 : t.depthStencilTexture
                ),
                e.setRenderTarget(v));
          }
          let s = A[i];
          void 0 === s &&
            ((s = new tH()).layers.enable(i),
            (s.viewport = new F()),
            (A[i] = s)),
            s.matrix.fromArray(r.transform.matrix),
            s.matrix.decompose(s.position, s.quaternion, s.scale),
            s.projectionMatrix.fromArray(r.projectionMatrix),
            s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),
            s.viewport.set(a.x, a.y, a.width, a.height),
            0 === i &&
              (w.matrix.copy(s.matrix),
              w.matrix.decompose(w.position, w.quaternion, w.scale)),
            !0 === n && w.cameras.push(s);
        }
        let r = i.enabledFeatures;
        if (r && r.includes("depth-sensing")) {
          let n = c.getDepthInformation(t[0]);
          n && n.isValid && n.texture && m.init(e, n, i.renderState);
        }
      }
      for (let e = 0; e < y.length; e++) {
        let t = M[e],
          n = y[e];
        null !== t && void 0 !== n && n.update(t, r, l || a);
      }
      O && O(t, r),
        r.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: r }),
        (p = null);
    }),
      (this.setAnimationLoop = function (e) {
        O = e;
      }),
      (this.dispose = function () {});
  }
}
const aM = new ew(),
  aS = new e_();
function aE(e, t) {
  function n(e, t) {
    !0 === e.matrixAutoUpdate && e.updateMatrix(), t.value.copy(e.matrix);
  }
  function i(e, i) {
    (e.opacity.value = i.opacity),
      i.color && e.diffuse.value.copy(i.color),
      i.emissive &&
        e.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
      i.map && ((e.map.value = i.map), n(i.map, e.mapTransform)),
      i.alphaMap &&
        ((e.alphaMap.value = i.alphaMap), n(i.alphaMap, e.alphaMapTransform)),
      i.bumpMap &&
        ((e.bumpMap.value = i.bumpMap),
        n(i.bumpMap, e.bumpMapTransform),
        (e.bumpScale.value = i.bumpScale),
        1 === i.side && (e.bumpScale.value *= -1)),
      i.normalMap &&
        ((e.normalMap.value = i.normalMap),
        n(i.normalMap, e.normalMapTransform),
        e.normalScale.value.copy(i.normalScale),
        1 === i.side && e.normalScale.value.negate()),
      i.displacementMap &&
        ((e.displacementMap.value = i.displacementMap),
        n(i.displacementMap, e.displacementMapTransform),
        (e.displacementScale.value = i.displacementScale),
        (e.displacementBias.value = i.displacementBias)),
      i.emissiveMap &&
        ((e.emissiveMap.value = i.emissiveMap),
        n(i.emissiveMap, e.emissiveMapTransform)),
      i.specularMap &&
        ((e.specularMap.value = i.specularMap),
        n(i.specularMap, e.specularMapTransform)),
      i.alphaTest > 0 && (e.alphaTest.value = i.alphaTest);
    let r = t.get(i),
      a = r.envMap,
      s = r.envMapRotation;
    a &&
      ((e.envMap.value = a),
      aM.copy(s),
      (aM.x *= -1),
      (aM.y *= -1),
      (aM.z *= -1),
      a.isCubeTexture &&
        !1 === a.isRenderTargetTexture &&
        ((aM.y *= -1), (aM.z *= -1)),
      e.envMapRotation.value.setFromMatrix4(aS.makeRotationFromEuler(aM)),
      (e.flipEnvMap.value =
        a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1),
      (e.reflectivity.value = i.reflectivity),
      (e.ior.value = i.ior),
      (e.refractionRatio.value = i.refractionRatio)),
      i.lightMap &&
        ((e.lightMap.value = i.lightMap),
        (e.lightMapIntensity.value = i.lightMapIntensity),
        n(i.lightMap, e.lightMapTransform)),
      i.aoMap &&
        ((e.aoMap.value = i.aoMap),
        (e.aoMapIntensity.value = i.aoMapIntensity),
        n(i.aoMap, e.aoMapTransform));
  }
  return {
    refreshFogUniforms: function (t, n) {
      n.color.getRGB(t.fogColor.value, tD(e)),
        n.isFog
          ? ((t.fogNear.value = n.near), (t.fogFar.value = n.far))
          : n.isFogExp2 && (t.fogDensity.value = n.density);
    },
    refreshMaterialUniforms: function (e, r, a, s, o) {
      r.isMeshBasicMaterial
        ? i(e, r)
        : r.isMeshLambertMaterial
        ? i(e, r)
        : r.isMeshToonMaterial
        ? (i(e, r), r.gradientMap && (e.gradientMap.value = r.gradientMap))
        : r.isMeshPhongMaterial
        ? (i(e, r),
          e.specular.value.copy(r.specular),
          (e.shininess.value = Math.max(r.shininess, 1e-4)))
        : r.isMeshStandardMaterial
        ? (i(e, r),
          (e.metalness.value = r.metalness),
          r.metalnessMap &&
            ((e.metalnessMap.value = r.metalnessMap),
            n(r.metalnessMap, e.metalnessMapTransform)),
          (e.roughness.value = r.roughness),
          r.roughnessMap &&
            ((e.roughnessMap.value = r.roughnessMap),
            n(r.roughnessMap, e.roughnessMapTransform)),
          r.envMap && (e.envMapIntensity.value = r.envMapIntensity),
          r.isMeshPhysicalMaterial &&
            ((e.ior.value = r.ior),
            r.sheen > 0 &&
              (e.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),
              (e.sheenRoughness.value = r.sheenRoughness),
              r.sheenColorMap &&
                ((e.sheenColorMap.value = r.sheenColorMap),
                n(r.sheenColorMap, e.sheenColorMapTransform)),
              r.sheenRoughnessMap &&
                ((e.sheenRoughnessMap.value = r.sheenRoughnessMap),
                n(r.sheenRoughnessMap, e.sheenRoughnessMapTransform))),
            r.clearcoat > 0 &&
              ((e.clearcoat.value = r.clearcoat),
              (e.clearcoatRoughness.value = r.clearcoatRoughness),
              r.clearcoatMap &&
                ((e.clearcoatMap.value = r.clearcoatMap),
                n(r.clearcoatMap, e.clearcoatMapTransform)),
              r.clearcoatRoughnessMap &&
                ((e.clearcoatRoughnessMap.value = r.clearcoatRoughnessMap),
                n(r.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)),
              r.clearcoatNormalMap &&
                ((e.clearcoatNormalMap.value = r.clearcoatNormalMap),
                n(r.clearcoatNormalMap, e.clearcoatNormalMapTransform),
                e.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),
                1 === r.side && e.clearcoatNormalScale.value.negate())),
            r.dispersion > 0 && (e.dispersion.value = r.dispersion),
            r.iridescence > 0 &&
              ((e.iridescence.value = r.iridescence),
              (e.iridescenceIOR.value = r.iridescenceIOR),
              (e.iridescenceThicknessMinimum.value =
                r.iridescenceThicknessRange[0]),
              (e.iridescenceThicknessMaximum.value =
                r.iridescenceThicknessRange[1]),
              r.iridescenceMap &&
                ((e.iridescenceMap.value = r.iridescenceMap),
                n(r.iridescenceMap, e.iridescenceMapTransform)),
              r.iridescenceThicknessMap &&
                ((e.iridescenceThicknessMap.value = r.iridescenceThicknessMap),
                n(
                  r.iridescenceThicknessMap,
                  e.iridescenceThicknessMapTransform
                ))),
            r.transmission > 0 &&
              ((e.transmission.value = r.transmission),
              (e.transmissionSamplerMap.value = o.texture),
              e.transmissionSamplerSize.value.set(o.width, o.height),
              r.transmissionMap &&
                ((e.transmissionMap.value = r.transmissionMap),
                n(r.transmissionMap, e.transmissionMapTransform)),
              (e.thickness.value = r.thickness),
              r.thicknessMap &&
                ((e.thicknessMap.value = r.thicknessMap),
                n(r.thicknessMap, e.thicknessMapTransform)),
              (e.attenuationDistance.value = r.attenuationDistance),
              e.attenuationColor.value.copy(r.attenuationColor)),
            r.anisotropy > 0 &&
              (e.anisotropyVector.value.set(
                r.anisotropy * Math.cos(r.anisotropyRotation),
                r.anisotropy * Math.sin(r.anisotropyRotation)
              ),
              r.anisotropyMap &&
                ((e.anisotropyMap.value = r.anisotropyMap),
                n(r.anisotropyMap, e.anisotropyMapTransform))),
            (e.specularIntensity.value = r.specularIntensity),
            e.specularColor.value.copy(r.specularColor),
            r.specularColorMap &&
              ((e.specularColorMap.value = r.specularColorMap),
              n(r.specularColorMap, e.specularColorMapTransform)),
            r.specularIntensityMap &&
              ((e.specularIntensityMap.value = r.specularIntensityMap),
              n(r.specularIntensityMap, e.specularIntensityMapTransform))))
        : r.isMeshMatcapMaterial
        ? (i(e, r), r.matcap && (e.matcap.value = r.matcap))
        : r.isMeshDepthMaterial
        ? i(e, r)
        : r.isMeshDistanceMaterial
        ? (i(e, r),
          (function (e, n) {
            let i = t.get(n).light;
            e.referencePosition.value.setFromMatrixPosition(i.matrixWorld),
              (e.nearDistance.value = i.shadow.camera.near),
              (e.farDistance.value = i.shadow.camera.far);
          })(e, r))
        : r.isMeshNormalMaterial
        ? i(e, r)
        : r.isLineBasicMaterial
        ? (e.diffuse.value.copy(r.color),
          (e.opacity.value = r.opacity),
          r.map && ((e.map.value = r.map), n(r.map, e.mapTransform)),
          r.isLineDashedMaterial &&
            ((e.dashSize.value = r.dashSize),
            (e.totalSize.value = r.dashSize + r.gapSize),
            (e.scale.value = r.scale)))
        : r.isPointsMaterial
        ? (e.diffuse.value.copy(r.color),
          (e.opacity.value = r.opacity),
          (e.size.value = r.size * a),
          (e.scale.value = 0.5 * s),
          r.map && ((e.map.value = r.map), n(r.map, e.uvTransform)),
          r.alphaMap &&
            ((e.alphaMap.value = r.alphaMap),
            n(r.alphaMap, e.alphaMapTransform)),
          r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest))
        : r.isSpriteMaterial
        ? (e.diffuse.value.copy(r.color),
          (e.opacity.value = r.opacity),
          (e.rotation.value = r.rotation),
          r.map && ((e.map.value = r.map), n(r.map, e.mapTransform)),
          r.alphaMap &&
            ((e.alphaMap.value = r.alphaMap),
            n(r.alphaMap, e.alphaMapTransform)),
          r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest))
        : r.isShadowMaterial
        ? (e.color.value.copy(r.color), (e.opacity.value = r.opacity))
        : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
    },
  };
}
function aT(e, t, n, i) {
  let r = {},
    a = {},
    s = [],
    o = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(e) {
    let t = { boundary: 0, storage: 0 };
    return (
      "number" == typeof e || "boolean" == typeof e
        ? ((t.boundary = 4), (t.storage = 4))
        : e.isVector2
        ? ((t.boundary = 8), (t.storage = 8))
        : e.isVector3 || e.isColor
        ? ((t.boundary = 16), (t.storage = 12))
        : e.isVector4
        ? ((t.boundary = 16), (t.storage = 16))
        : e.isMatrix3
        ? ((t.boundary = 48), (t.storage = 48))
        : e.isMatrix4
        ? ((t.boundary = 64), (t.storage = 64))
        : e.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            e
          ),
      t
    );
  }
  function h(t) {
    let n = t.target;
    n.removeEventListener("dispose", h);
    let i = s.indexOf(n.__bindingPointIndex);
    s.splice(i, 1), e.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id];
  }
  return {
    bind: function (e, t) {
      let n = t.program;
      i.uniformBlockBinding(e, n);
    },
    update: function (n, c) {
      let u = r[n.id];
      void 0 === u &&
        ((function (e) {
          let t = e.uniforms,
            n = 0;
          for (let e = 0, i = t.length; e < i; e++) {
            let i = Array.isArray(t[e]) ? t[e] : [t[e]];
            for (let e = 0, t = i.length; e < t; e++) {
              let t = i[e],
                r = Array.isArray(t.value) ? t.value : [t.value];
              for (let e = 0, i = r.length; e < i; e++) {
                let i = l(r[e]),
                  a = n % 16,
                  s = a % i.boundary,
                  o = a + s;
                (n += s),
                  0 !== o && 16 - o < i.storage && (n += 16 - o),
                  (t.__data = new Float32Array(
                    i.storage / Float32Array.BYTES_PER_ELEMENT
                  )),
                  (t.__offset = n),
                  (n += i.storage);
              }
            }
          }
          let i = n % 16;
          i > 0 && (n += 16 - i), (e.__size = n), (e.__cache = {});
        })(n),
        (u = (function (t) {
          let n = (function () {
            for (let e = 0; e < o; e++)
              if (-1 === s.indexOf(e)) return s.push(e), e;
            return (
              console.error(
                "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
              ),
              0
            );
          })();
          t.__bindingPointIndex = n;
          let i = e.createBuffer(),
            r = t.__size,
            a = t.usage;
          return (
            e.bindBuffer(e.UNIFORM_BUFFER, i),
            e.bufferData(e.UNIFORM_BUFFER, r, a),
            e.bindBuffer(e.UNIFORM_BUFFER, null),
            e.bindBufferBase(e.UNIFORM_BUFFER, n, i),
            i
          );
        })(n)),
        (r[n.id] = u),
        n.addEventListener("dispose", h));
      let d = c.program;
      i.updateUBOMapping(n, d);
      let p = t.render.frame;
      a[n.id] !== p &&
        ((function (t) {
          let n = r[t.id],
            i = t.uniforms,
            a = t.__cache;
          e.bindBuffer(e.UNIFORM_BUFFER, n);
          for (let t = 0, n = i.length; t < n; t++) {
            let n = Array.isArray(i[t]) ? i[t] : [i[t]];
            for (let i = 0, r = n.length; i < r; i++) {
              let r = n[i];
              if (
                !0 ===
                (function (e, t, n, i) {
                  let r = e.value,
                    a = t + "_" + n;
                  if (void 0 === i[a])
                    return (
                      "number" == typeof r || "boolean" == typeof r
                        ? (i[a] = r)
                        : (i[a] = r.clone()),
                      !0
                    );
                  {
                    let e = i[a];
                    if ("number" == typeof r || "boolean" == typeof r) {
                      if (e !== r) return (i[a] = r), !0;
                    } else if (!1 === e.equals(r)) return e.copy(r), !0;
                  }
                  return !1;
                })(r, t, i, a)
              ) {
                let t = r.__offset,
                  n = Array.isArray(r.value) ? r.value : [r.value],
                  i = 0;
                for (let a = 0; a < n.length; a++) {
                  let s = n[a],
                    o = l(s);
                  "number" == typeof s || "boolean" == typeof s
                    ? ((r.__data[0] = s),
                      e.bufferSubData(e.UNIFORM_BUFFER, t + i, r.__data))
                    : s.isMatrix3
                    ? ((r.__data[0] = s.elements[0]),
                      (r.__data[1] = s.elements[1]),
                      (r.__data[2] = s.elements[2]),
                      (r.__data[3] = 0),
                      (r.__data[4] = s.elements[3]),
                      (r.__data[5] = s.elements[4]),
                      (r.__data[6] = s.elements[5]),
                      (r.__data[7] = 0),
                      (r.__data[8] = s.elements[6]),
                      (r.__data[9] = s.elements[7]),
                      (r.__data[10] = s.elements[8]),
                      (r.__data[11] = 0))
                    : (s.toArray(r.__data, i),
                      (i += o.storage / Float32Array.BYTES_PER_ELEMENT));
                }
                e.bufferSubData(e.UNIFORM_BUFFER, t, r.__data);
              }
            }
          }
          e.bindBuffer(e.UNIFORM_BUFFER, null);
        })(n),
        (a[n.id] = p));
    },
    dispose: function () {
      for (let t in r) e.deleteBuffer(r[t]);
      (s = []), (r = {}), (a = {});
    },
  };
}
var ab = {};
ab = new URL("finaldottedmark.30f9c420.jpg", import.meta.url).toString();
let aA = document.querySelector(".locationGlobe");
const aw = new (class {
  constructor(e = {}) {
    let t,
      n,
      i,
      r,
      a,
      l,
      h,
      c,
      u,
      d,
      p,
      f,
      m,
      g,
      _,
      v,
      x,
      y,
      M,
      S,
      T,
      A,
      w,
      C,
      P;
    let {
      canvas: L = (function () {
        let e = E("canvas");
        return (e.style.display = "block"), e;
      })(),
      context: U = null,
      depth: N = !0,
      stencil: D = !1,
      alpha: I = !1,
      antialias: O = !1,
      premultipliedAlpha: B = !0,
      preserveDrawingBuffer: V = !1,
      powerPreference: H = "default",
      failIfMajorPerformanceCaveat: k = !1,
      reverseDepthBuffer: W = !1,
    } = e;
    if (((this.isWebGLRenderer = !0), null !== U)) {
      if (
        "undefined" != typeof WebGLRenderingContext &&
        U instanceof WebGLRenderingContext
      )
        throw Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      t = U.getContextAttributes().alpha;
    } else t = I;
    let X = new Uint32Array(4),
      j = new Int32Array(4),
      q = null,
      Y = null,
      J = [],
      Z = [];
    (this.domElement = L),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = s),
      (this.toneMapping = 0),
      (this.toneMappingExposure = 1);
    let K = this,
      $ = !1,
      Q = 0,
      ee = 0,
      et = null,
      en = -1,
      ei = null,
      er = new F(),
      ea = new F(),
      es = null,
      eo = new e7(0),
      el = 0,
      eh = L.width,
      ec = L.height,
      eu = 1,
      ed = null,
      ep = null,
      ef = new F(0, 0, eh, ec),
      em = new F(0, 0, eh, ec),
      eg = !1,
      ev = new tK(),
      ex = !1,
      ey = !1,
      eM = new e_(),
      eS = new e_(),
      eE = new G(),
      eT = new F(),
      eb = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      },
      eA = !1;
    function ew() {
      return null === et ? eu : 1;
    }
    let eR = U;
    function eC(e, t) {
      return L.getContext(e, t);
    }
    try {
      if (
        ("setAttribute" in L && L.setAttribute("data-engine", "three.js r171"),
        L.addEventListener("webglcontextlost", eU, !1),
        L.addEventListener("webglcontextrestored", eN, !1),
        L.addEventListener("webglcontextcreationerror", eD, !1),
        null === eR)
      ) {
        let e = "webgl2";
        if (
          ((eR = eC(e, {
            alpha: !0,
            depth: N,
            stencil: D,
            antialias: O,
            premultipliedAlpha: B,
            preserveDrawingBuffer: V,
            powerPreference: H,
            failIfMajorPerformanceCaveat: k,
          })),
          null === eR)
        ) {
          if (eC(e))
            throw Error(
              "Error creating WebGL context with your selected attributes."
            );
          throw Error("Error creating WebGL context.");
        }
      }
    } catch (e) {
      throw (console.error("THREE.WebGLRenderer: " + e.message), e);
    }
    function eP() {
      (n = new iG(eR)).init(),
        (w = new af(eR, n)),
        (i = new iS(eR, n, e, w)),
        (r = new ad(eR, n)),
        i.reverseDepthBuffer && W && r.buffers.depth.setReversed(!0),
        (a = new iX(eR)),
        (l = new r7()),
        (h = new ap(eR, n, r, l, i, w, a)),
        (c = new iT(K)),
        (u = new iH(K)),
        (d = new iu(eR)),
        (C = new iy(eR, d)),
        (p = new ik(eR, d, a, C)),
        (f = new iq(eR, p, d, a)),
        (S = new ij(eR, i, h)),
        (x = new iE(l)),
        (m = new r9(K, c, u, n, i, C, x)),
        (g = new aE(K, l)),
        (_ = new ai()),
        (v = new ah(n)),
        (M = new ix(K, c, u, r, f, t, B)),
        (y = new ac(K, f, i)),
        (P = new aT(eR, a, i, r)),
        (T = new iM(eR, n, a)),
        (A = new iW(eR, n, a)),
        (a.programs = m.programs),
        (K.capabilities = i),
        (K.extensions = n),
        (K.properties = l),
        (K.renderLists = _),
        (K.shadowMap = y),
        (K.state = r),
        (K.info = a);
    }
    eP();
    let eL = new ay(K, eR);
    function eU(e) {
      e.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        ($ = !0);
    }
    function eN() {
      console.log("THREE.WebGLRenderer: Context Restored."), ($ = !1);
      let e = a.autoReset,
        t = y.enabled,
        n = y.autoUpdate,
        i = y.needsUpdate,
        r = y.type;
      eP(),
        (a.autoReset = e),
        (y.enabled = t),
        (y.autoUpdate = n),
        (y.needsUpdate = i),
        (y.type = r);
    }
    function eD(e) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        e.statusMessage
      );
    }
    function eI(e) {
      let t = e.target;
      t.removeEventListener("dispose", eI),
        (function (e) {
          let t = l.get(e).programs;
          void 0 !== t &&
            (t.forEach(function (e) {
              m.releaseProgram(e);
            }),
            e.isShaderMaterial && m.releaseShaderCache(e));
        })(t),
        l.remove(t);
    }
    function eO(e, t, n) {
      !0 === e.transparent && 2 === e.side && !1 === e.forceSinglePass
        ? ((e.side = 1),
          (e.needsUpdate = !0),
          ej(e, t, n),
          (e.side = 0),
          (e.needsUpdate = !0),
          ej(e, t, n),
          (e.side = 2))
        : ej(e, t, n);
    }
    (this.xr = eL),
      (this.getContext = function () {
        return eR;
      }),
      (this.getContextAttributes = function () {
        return eR.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        let e = n.get("WEBGL_lose_context");
        e && e.loseContext();
      }),
      (this.forceContextRestore = function () {
        let e = n.get("WEBGL_lose_context");
        e && e.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return eu;
      }),
      (this.setPixelRatio = function (e) {
        void 0 !== e && ((eu = e), this.setSize(eh, ec, !1));
      }),
      (this.getSize = function (e) {
        return e.set(eh, ec);
      }),
      (this.setSize = function (e, t, n = !0) {
        if (eL.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (eh = e),
          (ec = t),
          (L.width = Math.floor(e * eu)),
          (L.height = Math.floor(t * eu)),
          !0 === n && ((L.style.width = e + "px"), (L.style.height = t + "px")),
          this.setViewport(0, 0, e, t);
      }),
      (this.getDrawingBufferSize = function (e) {
        return e.set(eh * eu, ec * eu).floor();
      }),
      (this.setDrawingBufferSize = function (e, t, n) {
        (eh = e),
          (ec = t),
          (eu = n),
          (L.width = Math.floor(e * n)),
          (L.height = Math.floor(t * n)),
          this.setViewport(0, 0, e, t);
      }),
      (this.getCurrentViewport = function (e) {
        return e.copy(er);
      }),
      (this.getViewport = function (e) {
        return e.copy(ef);
      }),
      (this.setViewport = function (e, t, n, i) {
        e.isVector4 ? ef.set(e.x, e.y, e.z, e.w) : ef.set(e, t, n, i),
          r.viewport(er.copy(ef).multiplyScalar(eu).round());
      }),
      (this.getScissor = function (e) {
        return e.copy(em);
      }),
      (this.setScissor = function (e, t, n, i) {
        e.isVector4 ? em.set(e.x, e.y, e.z, e.w) : em.set(e, t, n, i),
          r.scissor(ea.copy(em).multiplyScalar(eu).round());
      }),
      (this.getScissorTest = function () {
        return eg;
      }),
      (this.setScissorTest = function (e) {
        r.setScissorTest((eg = e));
      }),
      (this.setOpaqueSort = function (e) {
        ed = e;
      }),
      (this.setTransparentSort = function (e) {
        ep = e;
      }),
      (this.getClearColor = function (e) {
        return e.copy(M.getClearColor());
      }),
      (this.setClearColor = function () {
        M.setClearColor.apply(M, arguments);
      }),
      (this.getClearAlpha = function () {
        return M.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        M.setClearAlpha.apply(M, arguments);
      }),
      (this.clear = function (e = !0, t = !0, n = !0) {
        let i = 0;
        if (e) {
          let e = !1;
          if (null !== et) {
            let t = et.texture.format;
            e = 1033 === t || 1031 === t || 1029 === t;
          }
          if (e) {
            let e = et.texture.type,
              t = M.getClearColor(),
              n = M.getClearAlpha(),
              i = t.r,
              r = t.g,
              a = t.b;
            1009 === e ||
            1014 === e ||
            1012 === e ||
            1020 === e ||
            1017 === e ||
            1018 === e
              ? ((X[0] = i),
                (X[1] = r),
                (X[2] = a),
                (X[3] = n),
                eR.clearBufferuiv(eR.COLOR, 0, X))
              : ((j[0] = i),
                (j[1] = r),
                (j[2] = a),
                (j[3] = n),
                eR.clearBufferiv(eR.COLOR, 0, j));
          } else i |= eR.COLOR_BUFFER_BIT;
        }
        t && (i |= eR.DEPTH_BUFFER_BIT),
          n &&
            ((i |= eR.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(0xffffffff)),
          eR.clear(i);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        L.removeEventListener("webglcontextlost", eU, !1),
          L.removeEventListener("webglcontextrestored", eN, !1),
          L.removeEventListener("webglcontextcreationerror", eD, !1),
          M.dispose(),
          _.dispose(),
          v.dispose(),
          l.dispose(),
          c.dispose(),
          u.dispose(),
          f.dispose(),
          C.dispose(),
          P.dispose(),
          m.dispose(),
          eL.dispose(),
          eL.removeEventListener("sessionstart", eB),
          eL.removeEventListener("sessionend", ez),
          eV.stop();
      }),
      (this.renderBufferDirect = function (e, t, a, s, f, m) {
        let _;
        null === t && (t = eb);
        let v = f.isMesh && 0 > f.matrixWorld.determinant(),
          y = (function (e, t, n, a, s) {
            var d;
            !0 !== t.isScene && (t = eb), h.resetTextureUnits();
            let p = t.fog,
              f = a.isMeshStandardMaterial ? t.environment : null,
              m =
                null === et
                  ? K.outputColorSpace
                  : !0 === et.isXRRenderTarget
                  ? et.texture.colorSpace
                  : o,
              _ = (a.isMeshStandardMaterial ? u : c).get(a.envMap || f),
              v =
                !0 === a.vertexColors &&
                !!n.attributes.color &&
                4 === n.attributes.color.itemSize,
              y = !!n.attributes.tangent && (!!a.normalMap || a.anisotropy > 0),
              M = !!n.morphAttributes.position,
              E = !!n.morphAttributes.normal,
              T = !!n.morphAttributes.color,
              b = 0;
            a.toneMapped &&
              (null === et || !0 === et.isXRRenderTarget) &&
              (b = K.toneMapping);
            let A =
                n.morphAttributes.position ||
                n.morphAttributes.normal ||
                n.morphAttributes.color,
              w = void 0 !== A ? A.length : 0,
              R = l.get(a),
              C = Y.state.lights;
            if (!0 === ex && (!0 === ey || e !== ei)) {
              let t = e === ei && a.id === en;
              x.setState(a, e, t);
            }
            let L = !1;
            a.version === R.__version
              ? R.needsLights && R.lightsStateVersion !== C.state.version
                ? (L = !0)
                : R.outputColorSpace !== m
                ? (L = !0)
                : s.isBatchedMesh && !1 === R.batching
                ? (L = !0)
                : s.isBatchedMesh || !0 !== R.batching
                ? s.isBatchedMesh &&
                  !0 === R.batchingColor &&
                  null === s.colorTexture
                  ? (L = !0)
                  : s.isBatchedMesh &&
                    !1 === R.batchingColor &&
                    null !== s.colorTexture
                  ? (L = !0)
                  : s.isInstancedMesh && !1 === R.instancing
                  ? (L = !0)
                  : s.isInstancedMesh || !0 !== R.instancing
                  ? s.isSkinnedMesh && !1 === R.skinning
                    ? (L = !0)
                    : s.isSkinnedMesh || !0 !== R.skinning
                    ? s.isInstancedMesh &&
                      !0 === R.instancingColor &&
                      null === s.instanceColor
                      ? (L = !0)
                      : s.isInstancedMesh &&
                        !1 === R.instancingColor &&
                        null !== s.instanceColor
                      ? (L = !0)
                      : s.isInstancedMesh &&
                        !0 === R.instancingMorph &&
                        null === s.morphTexture
                      ? (L = !0)
                      : s.isInstancedMesh &&
                        !1 === R.instancingMorph &&
                        null !== s.morphTexture
                      ? (L = !0)
                      : R.envMap !== _
                      ? (L = !0)
                      : !0 === a.fog && R.fog !== p
                      ? (L = !0)
                      : void 0 !== R.numClippingPlanes &&
                        (R.numClippingPlanes !== x.numPlanes ||
                          R.numIntersection !== x.numIntersection)
                      ? (L = !0)
                      : R.vertexAlphas !== v
                      ? (L = !0)
                      : R.vertexTangents !== y
                      ? (L = !0)
                      : R.morphTargets !== M
                      ? (L = !0)
                      : R.morphNormals !== E
                      ? (L = !0)
                      : R.morphColors !== T
                      ? (L = !0)
                      : R.toneMapping !== b
                      ? (L = !0)
                      : R.morphTargetsCount !== w && (L = !0)
                    : (L = !0)
                  : (L = !0)
                : (L = !0)
              : ((L = !0), (R.__version = a.version));
            let U = R.currentProgram;
            !0 === L && (U = ej(a, t, s));
            let N = !1,
              D = !1,
              I = !1,
              O = U.getUniforms(),
              F = R.uniforms;
            if (
              (r.useProgram(U.program) && ((N = !0), (D = !0), (I = !0)),
              a.id !== en && ((en = a.id), (D = !0)),
              N || ei !== e)
            ) {
              r.buffers.depth.getReversed()
                ? (eM.copy(e.projectionMatrix),
                  (function (e) {
                    let t = e.elements;
                    (t[2] = 0.5 * t[2] + 0.5 * t[3]),
                      (t[6] = 0.5 * t[6] + 0.5 * t[7]),
                      (t[10] = 0.5 * t[10] + 0.5 * t[11]),
                      (t[14] = 0.5 * t[14] + 0.5 * t[15]);
                  })(eM),
                  (function (e) {
                    let t = e.elements;
                    -1 === t[11]
                      ? ((t[10] = -t[10] - 1), (t[14] = -t[14]))
                      : ((t[10] = -t[10]), (t[14] = -t[14] + 1));
                  })(eM),
                  O.setValue(eR, "projectionMatrix", eM))
                : O.setValue(eR, "projectionMatrix", e.projectionMatrix),
                O.setValue(eR, "viewMatrix", e.matrixWorldInverse);
              let t = O.map.cameraPosition;
              void 0 !== t &&
                t.setValue(eR, eE.setFromMatrixPosition(e.matrixWorld)),
                i.logarithmicDepthBuffer &&
                  O.setValue(
                    eR,
                    "logDepthBufFC",
                    2 / (Math.log(e.far + 1) / Math.LN2)
                  ),
                (a.isMeshPhongMaterial ||
                  a.isMeshToonMaterial ||
                  a.isMeshLambertMaterial ||
                  a.isMeshBasicMaterial ||
                  a.isMeshStandardMaterial ||
                  a.isShaderMaterial) &&
                  O.setValue(
                    eR,
                    "isOrthographic",
                    !0 === e.isOrthographicCamera
                  ),
                ei !== e && ((ei = e), (D = !0), (I = !0));
            }
            if (s.isSkinnedMesh) {
              O.setOptional(eR, s, "bindMatrix"),
                O.setOptional(eR, s, "bindMatrixInverse");
              let e = s.skeleton;
              e &&
                (null === e.boneTexture && e.computeBoneTexture(),
                O.setValue(eR, "boneTexture", e.boneTexture, h));
            }
            s.isBatchedMesh &&
              (O.setOptional(eR, s, "batchingTexture"),
              O.setValue(eR, "batchingTexture", s._matricesTexture, h),
              O.setOptional(eR, s, "batchingIdTexture"),
              O.setValue(eR, "batchingIdTexture", s._indirectTexture, h),
              O.setOptional(eR, s, "batchingColorTexture"),
              null !== s._colorsTexture &&
                O.setValue(eR, "batchingColorTexture", s._colorsTexture, h));
            let B = n.morphAttributes;
            if (
              ((void 0 !== B.position ||
                void 0 !== B.normal ||
                void 0 !== B.color) &&
                S.update(s, n, U),
              (D || R.receiveShadow !== s.receiveShadow) &&
                ((R.receiveShadow = s.receiveShadow),
                O.setValue(eR, "receiveShadow", s.receiveShadow)),
              a.isMeshGouraudMaterial &&
                null !== a.envMap &&
                ((F.envMap.value = _),
                (F.flipEnvMap.value =
                  _.isCubeTexture && !1 === _.isRenderTargetTexture ? -1 : 1)),
              a.isMeshStandardMaterial &&
                null === a.envMap &&
                null !== t.environment &&
                (F.envMapIntensity.value = t.environmentIntensity),
              D &&
                (O.setValue(eR, "toneMappingExposure", K.toneMappingExposure),
                R.needsLights &&
                  ((d = I),
                  (F.ambientLightColor.needsUpdate = d),
                  (F.lightProbe.needsUpdate = d),
                  (F.directionalLights.needsUpdate = d),
                  (F.directionalLightShadows.needsUpdate = d),
                  (F.pointLights.needsUpdate = d),
                  (F.pointLightShadows.needsUpdate = d),
                  (F.spotLights.needsUpdate = d),
                  (F.spotLightShadows.needsUpdate = d),
                  (F.rectAreaLights.needsUpdate = d),
                  (F.hemisphereLights.needsUpdate = d)),
                p && !0 === a.fog && g.refreshFogUniforms(F, p),
                g.refreshMaterialUniforms(
                  F,
                  a,
                  eu,
                  ec,
                  Y.state.transmissionRenderTarget[e.id]
                ),
                rH.upload(eR, eq(R), F, h)),
              a.isShaderMaterial &&
                !0 === a.uniformsNeedUpdate &&
                (rH.upload(eR, eq(R), F, h), (a.uniformsNeedUpdate = !1)),
              a.isSpriteMaterial && O.setValue(eR, "center", s.center),
              O.setValue(eR, "modelViewMatrix", s.modelViewMatrix),
              O.setValue(eR, "normalMatrix", s.normalMatrix),
              O.setValue(eR, "modelMatrix", s.matrixWorld),
              a.isShaderMaterial || a.isRawShaderMaterial)
            ) {
              let e = a.uniformsGroups;
              for (let t = 0, n = e.length; t < n; t++) {
                let n = e[t];
                P.update(n, U), P.bind(n, U);
              }
            }
            return U;
          })(e, t, a, s, f);
        r.setMaterial(s, v);
        let M = a.index,
          E = 1;
        if (!0 === s.wireframe) {
          if (void 0 === (M = p.getWireframeAttribute(a))) return;
          E = 2;
        }
        let b = a.drawRange,
          w = a.attributes.position,
          R = b.start * E,
          L = (b.start + b.count) * E;
        null !== m &&
          ((R = Math.max(R, m.start * E)),
          (L = Math.min(L, (m.start + m.count) * E))),
          null !== M
            ? ((R = Math.max(R, 0)), (L = Math.min(L, M.count)))
            : null != w && ((R = Math.max(R, 0)), (L = Math.min(L, w.count)));
        let U = L - R;
        if (U < 0 || U === 1 / 0) return;
        C.setup(f, s, y, a, M);
        let N = T;
        if ((null !== M && ((_ = d.get(M)), (N = A).setIndex(_)), f.isMesh))
          !0 === s.wireframe
            ? (r.setLineWidth(s.wireframeLinewidth * ew()), N.setMode(eR.LINES))
            : N.setMode(eR.TRIANGLES);
        else if (f.isLine) {
          let e = s.linewidth;
          void 0 === e && (e = 1),
            r.setLineWidth(e * ew()),
            f.isLineSegments
              ? N.setMode(eR.LINES)
              : f.isLineLoop
              ? N.setMode(eR.LINE_LOOP)
              : N.setMode(eR.LINE_STRIP);
        } else
          f.isPoints
            ? N.setMode(eR.POINTS)
            : f.isSprite && N.setMode(eR.TRIANGLES);
        if (f.isBatchedMesh) {
          if (null !== f._multiDrawInstances)
            N.renderMultiDrawInstances(
              f._multiDrawStarts,
              f._multiDrawCounts,
              f._multiDrawCount,
              f._multiDrawInstances
            );
          else if (n.get("WEBGL_multi_draw"))
            N.renderMultiDraw(
              f._multiDrawStarts,
              f._multiDrawCounts,
              f._multiDrawCount
            );
          else {
            let e = f._multiDrawStarts,
              t = f._multiDrawCounts,
              n = f._multiDrawCount,
              i = M ? d.get(M).bytesPerElement : 1,
              r = l.get(s).currentProgram.getUniforms();
            for (let a = 0; a < n; a++)
              r.setValue(eR, "_gl_DrawID", a), N.render(e[a] / i, t[a]);
          }
        } else if (f.isInstancedMesh) N.renderInstances(R, U, f.count);
        else if (a.isInstancedBufferGeometry) {
          let e = void 0 !== a._maxInstanceCount ? a._maxInstanceCount : 1 / 0,
            t = Math.min(a.instanceCount, e);
          N.renderInstances(R, U, t);
        } else N.render(R, U);
      }),
      (this.compile = function (e, t, n = null) {
        null === n && (n = e),
          (Y = v.get(n)).init(t),
          Z.push(Y),
          n.traverseVisible(function (e) {
            e.isLight &&
              e.layers.test(t.layers) &&
              (Y.pushLight(e), e.castShadow && Y.pushShadow(e));
          }),
          e !== n &&
            e.traverseVisible(function (e) {
              e.isLight &&
                e.layers.test(t.layers) &&
                (Y.pushLight(e), e.castShadow && Y.pushShadow(e));
            }),
          Y.setupLights();
        let i = new Set();
        return (
          e.traverse(function (e) {
            if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
            let t = e.material;
            if (t) {
              if (Array.isArray(t))
                for (let r = 0; r < t.length; r++) {
                  let a = t[r];
                  eO(a, n, e), i.add(a);
                }
              else eO(t, n, e), i.add(t);
            }
          }),
          Z.pop(),
          (Y = null),
          i
        );
      }),
      (this.compileAsync = function (e, t, i = null) {
        let r = this.compile(e, t, i);
        return new Promise((t) => {
          function i() {
            if (
              (r.forEach(function (e) {
                l.get(e).currentProgram.isReady() && r.delete(e);
              }),
              0 === r.size)
            ) {
              t(e);
              return;
            }
            setTimeout(i, 10);
          }
          null !== n.get("KHR_parallel_shader_compile")
            ? i()
            : setTimeout(i, 10);
        });
      });
    let eF = null;
    function eB() {
      eV.stop();
    }
    function ez() {
      eV.start();
    }
    let eV = new ic();
    function eH(e, t, n, i) {
      if (!1 === e.visible) return;
      if (e.layers.test(t.layers)) {
        if (e.isGroup) n = e.renderOrder;
        else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
        else if (e.isLight) Y.pushLight(e), e.castShadow && Y.pushShadow(e);
        else if (e.isSprite) {
          if (!e.frustumCulled || ev.intersectsSprite(e)) {
            i && eT.setFromMatrixPosition(e.matrixWorld).applyMatrix4(eS);
            let t = f.update(e),
              r = e.material;
            r.visible && q.push(e, t, r, n, eT.z, null);
          }
        } else if (
          (e.isMesh || e.isLine || e.isPoints) &&
          (!e.frustumCulled || ev.intersectsObject(e))
        ) {
          let t = f.update(e),
            r = e.material;
          if (
            (i &&
              (void 0 !== e.boundingSphere
                ? (null === e.boundingSphere && e.computeBoundingSphere(),
                  eT.copy(e.boundingSphere.center))
                : (null === t.boundingSphere && t.computeBoundingSphere(),
                  eT.copy(t.boundingSphere.center)),
              eT.applyMatrix4(e.matrixWorld).applyMatrix4(eS)),
            Array.isArray(r))
          ) {
            let i = t.groups;
            for (let a = 0, s = i.length; a < s; a++) {
              let s = i[a],
                o = r[s.materialIndex];
              o && o.visible && q.push(e, t, o, n, eT.z, s);
            }
          } else r.visible && q.push(e, t, r, n, eT.z, null);
        }
      }
      let r = e.children;
      for (let e = 0, a = r.length; e < a; e++) eH(r[e], t, n, i);
    }
    function eG(e, t, n, i) {
      let a = e.opaque,
        s = e.transmissive,
        o = e.transparent;
      Y.setupLightsView(n),
        !0 === ex && x.setGlobalState(K.clippingPlanes, n),
        i && r.viewport(er.copy(i)),
        a.length > 0 && eW(a, t, n),
        s.length > 0 && eW(s, t, n),
        o.length > 0 && eW(o, t, n),
        r.buffers.depth.setTest(!0),
        r.buffers.depth.setMask(!0),
        r.buffers.color.setMask(!0),
        r.setPolygonOffset(!1);
    }
    function ek(e, t, i, r) {
      if (null !== (!0 === i.isScene ? i.overrideMaterial : null)) return;
      void 0 === Y.state.transmissionRenderTarget[r.id] &&
        (Y.state.transmissionRenderTarget[r.id] = new z(1, 1, {
          generateMipmaps: !0,
          type:
            n.has("EXT_color_buffer_half_float") ||
            n.has("EXT_color_buffer_float")
              ? 1016
              : 1009,
          minFilter: 1008,
          samples: 4,
          stencilBuffer: D,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: R.workingColorSpace,
        }));
      let a = Y.state.transmissionRenderTarget[r.id],
        s = r.viewport || er;
      a.setSize(s.z, s.w);
      let o = K.getRenderTarget();
      K.setRenderTarget(a),
        K.getClearColor(eo),
        (el = K.getClearAlpha()) < 1 && K.setClearColor(0xffffff, 0.5),
        K.clear(),
        eA && M.render(i);
      let l = K.toneMapping;
      K.toneMapping = 0;
      let c = r.viewport;
      if (
        (void 0 !== r.viewport && (r.viewport = void 0),
        Y.setupLightsView(r),
        !0 === ex && x.setGlobalState(K.clippingPlanes, r),
        eW(e, i, r),
        h.updateMultisampleRenderTarget(a),
        h.updateRenderTargetMipmap(a),
        !1 === n.has("WEBGL_multisampled_render_to_texture"))
      ) {
        let e = !1;
        for (let n = 0, a = t.length; n < a; n++) {
          let a = t[n],
            s = a.object,
            o = a.geometry,
            l = a.material,
            h = a.group;
          if (2 === l.side && s.layers.test(r.layers)) {
            let t = l.side;
            (l.side = 1),
              (l.needsUpdate = !0),
              eX(s, i, r, o, l, h),
              (l.side = t),
              (l.needsUpdate = !0),
              (e = !0);
          }
        }
        !0 === e &&
          (h.updateMultisampleRenderTarget(a), h.updateRenderTargetMipmap(a));
      }
      K.setRenderTarget(o),
        K.setClearColor(eo, el),
        void 0 !== c && (r.viewport = c),
        (K.toneMapping = l);
    }
    function eW(e, t, n) {
      let i = !0 === t.isScene ? t.overrideMaterial : null;
      for (let r = 0, a = e.length; r < a; r++) {
        let a = e[r],
          s = a.object,
          o = a.geometry,
          l = null === i ? a.material : i,
          h = a.group;
        s.layers.test(n.layers) && eX(s, t, n, o, l, h);
      }
    }
    function eX(e, t, n, i, r, a) {
      e.onBeforeRender(K, t, n, i, r, a),
        e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
        e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
        r.onBeforeRender(K, t, n, i, e, a),
        !0 === r.transparent && 2 === r.side && !1 === r.forceSinglePass
          ? ((r.side = 1),
            (r.needsUpdate = !0),
            K.renderBufferDirect(n, t, i, r, e, a),
            (r.side = 0),
            (r.needsUpdate = !0),
            K.renderBufferDirect(n, t, i, r, e, a),
            (r.side = 2))
          : K.renderBufferDirect(n, t, i, r, e, a),
        e.onAfterRender(K, t, n, i, r, a);
    }
    function ej(e, t, n) {
      !0 !== t.isScene && (t = eb);
      let i = l.get(e),
        r = Y.state.lights,
        a = Y.state.shadowsArray,
        s = r.state.version,
        o = m.getParameters(e, r.state, a, t, n),
        h = m.getProgramCacheKey(o),
        d = i.programs;
      (i.environment = e.isMeshStandardMaterial ? t.environment : null),
        (i.fog = t.fog),
        (i.envMap = (e.isMeshStandardMaterial ? u : c).get(
          e.envMap || i.environment
        )),
        (i.envMapRotation =
          null !== i.environment && null === e.envMap
            ? t.environmentRotation
            : e.envMapRotation),
        void 0 === d &&
          (e.addEventListener("dispose", eI),
          (d = new Map()),
          (i.programs = d));
      let p = d.get(h);
      if (void 0 !== p) {
        if (i.currentProgram === p && i.lightsStateVersion === s)
          return eY(e, o), p;
      } else
        (o.uniforms = m.getUniforms(e)),
          e.onBeforeCompile(o, K),
          (p = m.acquireProgram(o, h)),
          d.set(h, p),
          (i.uniforms = o.uniforms);
      let f = i.uniforms;
      return (
        ((e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping) ||
          (f.clippingPlanes = x.uniform),
        eY(e, o),
        (i.needsLights =
          e.isMeshLambertMaterial ||
          e.isMeshToonMaterial ||
          e.isMeshPhongMaterial ||
          e.isMeshStandardMaterial ||
          e.isShadowMaterial ||
          (e.isShaderMaterial && !0 === e.lights)),
        (i.lightsStateVersion = s),
        i.needsLights &&
          ((f.ambientLightColor.value = r.state.ambient),
          (f.lightProbe.value = r.state.probe),
          (f.directionalLights.value = r.state.directional),
          (f.directionalLightShadows.value = r.state.directionalShadow),
          (f.spotLights.value = r.state.spot),
          (f.spotLightShadows.value = r.state.spotShadow),
          (f.rectAreaLights.value = r.state.rectArea),
          (f.ltc_1.value = r.state.rectAreaLTC1),
          (f.ltc_2.value = r.state.rectAreaLTC2),
          (f.pointLights.value = r.state.point),
          (f.pointLightShadows.value = r.state.pointShadow),
          (f.hemisphereLights.value = r.state.hemi),
          (f.directionalShadowMap.value = r.state.directionalShadowMap),
          (f.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
          (f.spotShadowMap.value = r.state.spotShadowMap),
          (f.spotLightMatrix.value = r.state.spotLightMatrix),
          (f.spotLightMap.value = r.state.spotLightMap),
          (f.pointShadowMap.value = r.state.pointShadowMap),
          (f.pointShadowMatrix.value = r.state.pointShadowMatrix)),
        (i.currentProgram = p),
        (i.uniformsList = null),
        p
      );
    }
    function eq(e) {
      if (null === e.uniformsList) {
        let t = e.currentProgram.getUniforms();
        e.uniformsList = rH.seqWithValue(t.seq, e.uniforms);
      }
      return e.uniformsList;
    }
    function eY(e, t) {
      let n = l.get(e);
      (n.outputColorSpace = t.outputColorSpace),
        (n.batching = t.batching),
        (n.batchingColor = t.batchingColor),
        (n.instancing = t.instancing),
        (n.instancingColor = t.instancingColor),
        (n.instancingMorph = t.instancingMorph),
        (n.skinning = t.skinning),
        (n.morphTargets = t.morphTargets),
        (n.morphNormals = t.morphNormals),
        (n.morphColors = t.morphColors),
        (n.morphTargetsCount = t.morphTargetsCount),
        (n.numClippingPlanes = t.numClippingPlanes),
        (n.numIntersection = t.numClipIntersection),
        (n.vertexAlphas = t.vertexAlphas),
        (n.vertexTangents = t.vertexTangents),
        (n.toneMapping = t.toneMapping);
    }
    eV.setAnimationLoop(function (e) {
      eF && eF(e);
    }),
      "undefined" != typeof self && eV.setContext(self),
      (this.setAnimationLoop = function (e) {
        (eF = e), eL.setAnimationLoop(e), null === e ? eV.stop() : eV.start();
      }),
      eL.addEventListener("sessionstart", eB),
      eL.addEventListener("sessionend", ez),
      (this.render = function (e, t) {
        if (void 0 !== t && !0 !== t.isCamera) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (!0 === $) return;
        if (
          (!0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(),
          null === t.parent &&
            !0 === t.matrixWorldAutoUpdate &&
            t.updateMatrixWorld(),
          !0 === eL.enabled &&
            !0 === eL.isPresenting &&
            (!0 === eL.cameraAutoUpdate && eL.updateCamera(t),
            (t = eL.getCamera())),
          !0 === e.isScene && e.onBeforeRender(K, e, t, et),
          (Y = v.get(e, Z.length)).init(t),
          Z.push(Y),
          eS.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
          ev.setFromProjectionMatrix(eS),
          (ey = this.localClippingEnabled),
          (ex = x.init(this.clippingPlanes, ey)),
          (q = _.get(e, J.length)).init(),
          J.push(q),
          !0 === eL.enabled && !0 === eL.isPresenting)
        ) {
          let e = K.xr.getDepthSensingMesh();
          null !== e && eH(e, t, -1 / 0, K.sortObjects);
        }
        eH(e, t, 0, K.sortObjects),
          q.finish(),
          !0 === K.sortObjects && q.sort(ed, ep),
          (eA =
            !1 === eL.enabled ||
            !1 === eL.isPresenting ||
            !1 === eL.hasDepthSensing()) && M.addToRenderList(q, e),
          this.info.render.frame++,
          !0 === ex && x.beginShadows();
        let n = Y.state.shadowsArray;
        y.render(n, e, t),
          !0 === ex && x.endShadows(),
          !0 === this.info.autoReset && this.info.reset();
        let i = q.opaque,
          r = q.transmissive;
        if ((Y.setupLights(), t.isArrayCamera)) {
          let n = t.cameras;
          if (r.length > 0)
            for (let t = 0, a = n.length; t < a; t++) ek(i, r, e, n[t]);
          eA && M.render(e);
          for (let t = 0, i = n.length; t < i; t++) {
            let i = n[t];
            eG(q, e, i, i.viewport);
          }
        } else r.length > 0 && ek(i, r, e, t), eA && M.render(e), eG(q, e, t);
        null !== et &&
          (h.updateMultisampleRenderTarget(et), h.updateRenderTargetMipmap(et)),
          !0 === e.isScene && e.onAfterRender(K, e, t),
          C.resetDefaultState(),
          (en = -1),
          (ei = null),
          Z.pop(),
          Z.length > 0
            ? ((Y = Z[Z.length - 1]),
              !0 === ex && x.setGlobalState(K.clippingPlanes, Y.state.camera))
            : (Y = null),
          J.pop(),
          (q = J.length > 0 ? J[J.length - 1] : null);
      }),
      (this.getActiveCubeFace = function () {
        return Q;
      }),
      (this.getActiveMipmapLevel = function () {
        return ee;
      }),
      (this.getRenderTarget = function () {
        return et;
      }),
      (this.setRenderTargetTextures = function (e, t, i) {
        (l.get(e.texture).__webglTexture = t),
          (l.get(e.depthTexture).__webglTexture = i);
        let r = l.get(e);
        (r.__hasExternalTextures = !0),
          (r.__autoAllocateDepthBuffer = void 0 === i),
          r.__autoAllocateDepthBuffer ||
            !0 !== n.has("WEBGL_multisampled_render_to_texture") ||
            (console.warn(
              "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
            ),
            (r.__useRenderToTexture = !1));
      }),
      (this.setRenderTargetFramebuffer = function (e, t) {
        let n = l.get(e);
        (n.__webglFramebuffer = t), (n.__useDefaultFramebuffer = void 0 === t);
      }),
      (this.setRenderTarget = function (e, t = 0, n = 0) {
        (et = e), (Q = t), (ee = n);
        let i = !0,
          a = null,
          s = !1,
          o = !1;
        if (e) {
          let c = l.get(e);
          if (void 0 !== c.__useDefaultFramebuffer)
            r.bindFramebuffer(eR.FRAMEBUFFER, null), (i = !1);
          else if (void 0 === c.__webglFramebuffer) h.setupRenderTarget(e);
          else if (c.__hasExternalTextures)
            h.rebindTextures(
              e,
              l.get(e.texture).__webglTexture,
              l.get(e.depthTexture).__webglTexture
            );
          else if (e.depthBuffer) {
            let t = e.depthTexture;
            if (c.__boundDepthTexture !== t) {
              if (
                null !== t &&
                l.has(t) &&
                (e.width !== t.image.width || e.height !== t.image.height)
              )
                throw Error(
                  "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."
                );
              h.setupDepthRenderbuffer(e);
            }
          }
          let u = e.texture;
          (u.isData3DTexture ||
            u.isDataArrayTexture ||
            u.isCompressedArrayTexture) &&
            (o = !0);
          let d = l.get(e).__webglFramebuffer;
          e.isWebGLCubeRenderTarget
            ? ((a = Array.isArray(d[t]) ? d[t][n] : d[t]), (s = !0))
            : (a =
                e.samples > 0 && !1 === h.useMultisampledRTT(e)
                  ? l.get(e).__webglMultisampledFramebuffer
                  : Array.isArray(d)
                  ? d[n]
                  : d),
            er.copy(e.viewport),
            ea.copy(e.scissor),
            (es = e.scissorTest);
        } else
          er.copy(ef).multiplyScalar(eu).floor(),
            ea.copy(em).multiplyScalar(eu).floor(),
            (es = eg);
        if (
          (r.bindFramebuffer(eR.FRAMEBUFFER, a) && i && r.drawBuffers(e, a),
          r.viewport(er),
          r.scissor(ea),
          r.setScissorTest(es),
          s)
        ) {
          let i = l.get(e.texture);
          eR.framebufferTexture2D(
            eR.FRAMEBUFFER,
            eR.COLOR_ATTACHMENT0,
            eR.TEXTURE_CUBE_MAP_POSITIVE_X + t,
            i.__webglTexture,
            n
          );
        } else if (o) {
          let i = l.get(e.texture);
          eR.framebufferTextureLayer(
            eR.FRAMEBUFFER,
            eR.COLOR_ATTACHMENT0,
            i.__webglTexture,
            n || 0,
            t || 0
          );
        }
        en = -1;
      }),
      (this.readRenderTargetPixels = function (e, t, n, a, s, o, h) {
        if (!(e && e.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let c = l.get(e).__webglFramebuffer;
        if ((e.isWebGLCubeRenderTarget && void 0 !== h && (c = c[h]), c)) {
          r.bindFramebuffer(eR.FRAMEBUFFER, c);
          try {
            let r = e.texture,
              l = r.format,
              h = r.type;
            if (!i.textureFormatReadable(l)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            if (!i.textureTypeReadable(h)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            t >= 0 &&
              t <= e.width - a &&
              n >= 0 &&
              n <= e.height - s &&
              eR.readPixels(t, n, a, s, w.convert(l), w.convert(h), o);
          } finally {
            let e = null !== et ? l.get(et).__webglFramebuffer : null;
            r.bindFramebuffer(eR.FRAMEBUFFER, e);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (e, t, n, a, s, o, h) {
        if (!(e && e.isWebGLRenderTarget))
          throw Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let c = l.get(e).__webglFramebuffer;
        if ((e.isWebGLCubeRenderTarget && void 0 !== h && (c = c[h]), c)) {
          let h = e.texture,
            d = h.format,
            p = h.type;
          if (!i.textureFormatReadable(d))
            throw Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
            );
          if (!i.textureTypeReadable(p))
            throw Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
            );
          if (t >= 0 && t <= e.width - a && n >= 0 && n <= e.height - s) {
            var u;
            r.bindFramebuffer(eR.FRAMEBUFFER, c);
            let e = eR.createBuffer();
            eR.bindBuffer(eR.PIXEL_PACK_BUFFER, e),
              eR.bufferData(eR.PIXEL_PACK_BUFFER, o.byteLength, eR.STREAM_READ),
              eR.readPixels(t, n, a, s, w.convert(d), w.convert(p), 0);
            let i = null !== et ? l.get(et).__webglFramebuffer : null;
            r.bindFramebuffer(eR.FRAMEBUFFER, i);
            let h = eR.fenceSync(eR.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              eR.flush(),
              await ((u = eR),
              new Promise(function (e, t) {
                setTimeout(function n() {
                  switch (u.clientWaitSync(h, u.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                    case u.WAIT_FAILED:
                      t();
                      break;
                    case u.TIMEOUT_EXPIRED:
                      setTimeout(n, 4);
                      break;
                    default:
                      e();
                  }
                }, 4);
              })),
              eR.bindBuffer(eR.PIXEL_PACK_BUFFER, e),
              eR.getBufferSubData(eR.PIXEL_PACK_BUFFER, 0, o),
              eR.deleteBuffer(e),
              eR.deleteSync(h),
              o
            );
          }
          throw Error(
            "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range."
          );
        }
      }),
      (this.copyFramebufferToTexture = function (e, t = null, n = 0) {
        !0 !== e.isTexture &&
          (b(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed."
          ),
          (t = arguments[0] || null),
          (e = arguments[1]));
        let i = Math.pow(2, -n),
          a = Math.floor(e.image.width * i),
          s = Math.floor(e.image.height * i),
          o = null !== t ? t.x : 0,
          l = null !== t ? t.y : 0;
        h.setTexture2D(e, 0),
          eR.copyTexSubImage2D(eR.TEXTURE_2D, n, 0, 0, o, l, a, s),
          r.unbindTexture();
      });
    let eJ = eR.createFramebuffer(),
      eZ = eR.createFramebuffer();
    (this.copyTextureToTexture = function (
      e,
      t,
      n = null,
      i = null,
      a = 0,
      s = null
    ) {
      let o, c, u, d, p, f, m, g, _, v;
      !0 !== e.isTexture &&
        (b(
          "WebGLRenderer: copyTextureToTexture function signature has changed."
        ),
        (i = arguments[0] || null),
        (e = arguments[1]),
        (t = arguments[2]),
        (s = arguments[3] || 0),
        (n = null)),
        null === s &&
          (0 !== a
            ? (b(
                "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."
              ),
              (s = a),
              (a = 0))
            : (s = 0));
      let x = e.isCompressedTexture ? e.mipmaps[s] : e.image;
      if (null !== n)
        (o = n.max.x - n.min.x),
          (c = n.max.y - n.min.y),
          (u = n.isBox3 ? n.max.z - n.min.z : 1),
          (d = n.min.x),
          (p = n.min.y),
          (f = n.isBox3 ? n.min.z : 0);
      else {
        let t = Math.pow(2, -a);
        (o = Math.floor(x.width * t)),
          (c = Math.floor(x.height * t)),
          (u = e.isDataArrayTexture
            ? x.depth
            : e.isData3DTexture
            ? Math.floor(x.depth * t)
            : 1),
          (d = 0),
          (p = 0),
          (f = 0);
      }
      null !== i
        ? ((m = i.x), (g = i.y), (_ = i.z))
        : ((m = 0), (g = 0), (_ = 0));
      let y = w.convert(t.format),
        M = w.convert(t.type);
      t.isData3DTexture
        ? (h.setTexture3D(t, 0), (v = eR.TEXTURE_3D))
        : t.isDataArrayTexture || t.isCompressedArrayTexture
        ? (h.setTexture2DArray(t, 0), (v = eR.TEXTURE_2D_ARRAY))
        : (h.setTexture2D(t, 0), (v = eR.TEXTURE_2D)),
        eR.pixelStorei(eR.UNPACK_FLIP_Y_WEBGL, t.flipY),
        eR.pixelStorei(eR.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
        eR.pixelStorei(eR.UNPACK_ALIGNMENT, t.unpackAlignment);
      let S = eR.getParameter(eR.UNPACK_ROW_LENGTH),
        E = eR.getParameter(eR.UNPACK_IMAGE_HEIGHT),
        T = eR.getParameter(eR.UNPACK_SKIP_PIXELS),
        A = eR.getParameter(eR.UNPACK_SKIP_ROWS),
        R = eR.getParameter(eR.UNPACK_SKIP_IMAGES);
      eR.pixelStorei(eR.UNPACK_ROW_LENGTH, x.width),
        eR.pixelStorei(eR.UNPACK_IMAGE_HEIGHT, x.height),
        eR.pixelStorei(eR.UNPACK_SKIP_PIXELS, d),
        eR.pixelStorei(eR.UNPACK_SKIP_ROWS, p),
        eR.pixelStorei(eR.UNPACK_SKIP_IMAGES, f);
      let C = e.isDataArrayTexture || e.isData3DTexture,
        P = t.isDataArrayTexture || t.isData3DTexture;
      if (e.isDepthTexture) {
        let n = l.get(e),
          i = l.get(t),
          h = l.get(n.__renderTarget),
          v = l.get(i.__renderTarget);
        r.bindFramebuffer(eR.READ_FRAMEBUFFER, h.__webglFramebuffer),
          r.bindFramebuffer(eR.DRAW_FRAMEBUFFER, v.__webglFramebuffer);
        for (let n = 0; n < u; n++)
          C &&
            (eR.framebufferTextureLayer(
              eR.READ_FRAMEBUFFER,
              eR.COLOR_ATTACHMENT0,
              l.get(e).__webglTexture,
              a,
              f + n
            ),
            eR.framebufferTextureLayer(
              eR.DRAW_FRAMEBUFFER,
              eR.COLOR_ATTACHMENT0,
              l.get(t).__webglTexture,
              s,
              _ + n
            )),
            eR.blitFramebuffer(
              d,
              p,
              o,
              c,
              m,
              g,
              o,
              c,
              eR.DEPTH_BUFFER_BIT,
              eR.NEAREST
            );
        r.bindFramebuffer(eR.READ_FRAMEBUFFER, null),
          r.bindFramebuffer(eR.DRAW_FRAMEBUFFER, null);
      } else if (0 !== a || e.isRenderTargetTexture || l.has(e)) {
        let n = l.get(e),
          i = l.get(t);
        r.bindFramebuffer(eR.READ_FRAMEBUFFER, eJ),
          r.bindFramebuffer(eR.DRAW_FRAMEBUFFER, eZ);
        for (let e = 0; e < u; e++)
          C
            ? eR.framebufferTextureLayer(
                eR.READ_FRAMEBUFFER,
                eR.COLOR_ATTACHMENT0,
                n.__webglTexture,
                a,
                f + e
              )
            : eR.framebufferTexture2D(
                eR.READ_FRAMEBUFFER,
                eR.COLOR_ATTACHMENT0,
                eR.TEXTURE_2D,
                n.__webglTexture,
                a
              ),
            P
              ? eR.framebufferTextureLayer(
                  eR.DRAW_FRAMEBUFFER,
                  eR.COLOR_ATTACHMENT0,
                  i.__webglTexture,
                  s,
                  _ + e
                )
              : eR.framebufferTexture2D(
                  eR.DRAW_FRAMEBUFFER,
                  eR.COLOR_ATTACHMENT0,
                  eR.TEXTURE_2D,
                  i.__webglTexture,
                  s
                ),
            0 !== a
              ? eR.blitFramebuffer(
                  d,
                  p,
                  o,
                  c,
                  m,
                  g,
                  o,
                  c,
                  eR.COLOR_BUFFER_BIT,
                  eR.NEAREST
                )
              : P
              ? eR.copyTexSubImage3D(v, s, m, g, _ + e, d, p, o, c)
              : eR.copyTexSubImage2D(v, s, m, g, d, p, o, c);
        r.bindFramebuffer(eR.READ_FRAMEBUFFER, null),
          r.bindFramebuffer(eR.DRAW_FRAMEBUFFER, null);
      } else
        P
          ? e.isDataTexture || e.isData3DTexture
            ? eR.texSubImage3D(v, s, m, g, _, o, c, u, y, M, x.data)
            : t.isCompressedArrayTexture
            ? eR.compressedTexSubImage3D(v, s, m, g, _, o, c, u, y, x.data)
            : eR.texSubImage3D(v, s, m, g, _, o, c, u, y, M, x)
          : e.isDataTexture
          ? eR.texSubImage2D(eR.TEXTURE_2D, s, m, g, o, c, y, M, x.data)
          : e.isCompressedTexture
          ? eR.compressedTexSubImage2D(
              eR.TEXTURE_2D,
              s,
              m,
              g,
              x.width,
              x.height,
              y,
              x.data
            )
          : eR.texSubImage2D(eR.TEXTURE_2D, s, m, g, o, c, y, M, x);
      eR.pixelStorei(eR.UNPACK_ROW_LENGTH, S),
        eR.pixelStorei(eR.UNPACK_IMAGE_HEIGHT, E),
        eR.pixelStorei(eR.UNPACK_SKIP_PIXELS, T),
        eR.pixelStorei(eR.UNPACK_SKIP_ROWS, A),
        eR.pixelStorei(eR.UNPACK_SKIP_IMAGES, R),
        0 === s && t.generateMipmaps && eR.generateMipmap(v),
        r.unbindTexture();
    }),
      (this.copyTextureToTexture3D = function (
        e,
        t,
        n = null,
        i = null,
        r = 0
      ) {
        return (
          !0 !== e.isTexture &&
            (b(
              "WebGLRenderer: copyTextureToTexture3D function signature has changed."
            ),
            (n = arguments[0] || null),
            (i = arguments[1] || null),
            (e = arguments[2]),
            (t = arguments[3]),
            (r = arguments[4] || 0)),
          b(
            'WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'
          ),
          this.copyTextureToTexture(e, t, n, i, r)
        );
      }),
      (this.initRenderTarget = function (e) {
        void 0 === l.get(e).__webglFramebuffer && h.setupRenderTarget(e);
      }),
      (this.initTexture = function (e) {
        e.isCubeTexture
          ? h.setTextureCube(e, 0)
          : e.isData3DTexture
          ? h.setTexture3D(e, 0)
          : e.isDataArrayTexture || e.isCompressedArrayTexture
          ? h.setTexture2DArray(e, 0)
          : h.setTexture2D(e, 0),
          r.unbindTexture();
      }),
      (this.resetState = function () {
        (Q = 0), (ee = 0), (et = null), r.reset(), C.reset();
      }),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    let t = this.getContext();
    (t.drawingBufferColorspace = R._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = R._getUnpackColorSpace());
  }
})();
aw.setSize(322, 322),
  aw.setSize(322, 322),
  aw.setClearColor(0xffffff, 0),
  aA.appendChild(aw.domElement);
const aR = new (class extends eW {
    constructor() {
      super(),
        (this.isScene = !0),
        (this.type = "Scene"),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.backgroundBlurriness = 0),
        (this.backgroundIntensity = 1),
        (this.backgroundRotation = new ew()),
        (this.environmentIntensity = 1),
        (this.environmentRotation = new ew()),
        (this.overrideMaterial = null),
        "undefined" != typeof __THREE_DEVTOOLS__ &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this })
          );
    }
    copy(e, t) {
      return (
        super.copy(e, t),
        null !== e.background && (this.background = e.background.clone()),
        null !== e.environment && (this.environment = e.environment.clone()),
        null !== e.fog && (this.fog = e.fog.clone()),
        (this.backgroundBlurriness = e.backgroundBlurriness),
        (this.backgroundIntensity = e.backgroundIntensity),
        this.backgroundRotation.copy(e.backgroundRotation),
        (this.environmentIntensity = e.environmentIntensity),
        this.environmentRotation.copy(e.environmentRotation),
        null !== e.overrideMaterial &&
          (this.overrideMaterial = e.overrideMaterial.clone()),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this
      );
    }
    toJSON(e) {
      let t = super.toJSON(e);
      return (
        null !== this.fog && (t.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 &&
          (t.object.backgroundBlurriness = this.backgroundBlurriness),
        1 !== this.backgroundIntensity &&
          (t.object.backgroundIntensity = this.backgroundIntensity),
        (t.object.backgroundRotation = this.backgroundRotation.toArray()),
        1 !== this.environmentIntensity &&
          (t.object.environmentIntensity = this.environmentIntensity),
        (t.object.environmentRotation = this.environmentRotation.toArray()),
        t
      );
    }
  })(),
  aC = new tH(39, 1, 0.1, 1e3),
  aP = new (class extends n8 {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      let r = new O(),
        a = new n9(this.manager);
      return (
        a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(
          e,
          function (e) {
            (r.image = e), (r.needsUpdate = !0), void 0 !== t && t(r);
          },
          n,
          i
        ),
        r
      );
    }
  })().load((t = ab) && t.__esModule ? t.default : t),
  aL = new tC(new nG(7, 32, 32), new ti({ map: aP }));
aR.add(aL);
let aU = !1,
  aN = 0,
  aD = 0;
aA.addEventListener("mousedown", (e) => {
  (aU = !0), (aN = e.clientX), (aD = 0);
}),
  aA.addEventListener("mousemove", (e) => {
    if (aU) {
      let t = e.clientX - aN;
      (aL.rotation.y += 0.005 * t), (aD = 0.005 * t), (aN = e.clientX);
    }
  }),
  document.addEventListener("mouseup", () => {
    aU = !1;
  }),
  aA.addEventListener("touchstart", (e) => {
    (aU = !0), (aN = e.touches[0].clientX), (aD = 0);
  }),
  aA.addEventListener("touchmove", (e) => {
    if (aU) {
      let t = e.touches[0].clientX,
        n = t - aN;
      (aL.rotation.y += 0.005 * n), (aD = 0.005 * n), (aN = t);
    }
  }),
  document.addEventListener("touchend", () => {
    aU = !1;
  }),
  aC.position.set(0, 9, 19),
  aC.lookAt(0, 0, 0),
  (function e() {
    requestAnimationFrame(e),
      !aU && Math.abs(aD) > 0.001 && ((aL.rotation.y += aD), (aD *= 0.7)),
      aw.render(aR, aC);
  })();
//# sourceMappingURL=index.79deabb5.js.map
