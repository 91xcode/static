(function(n) {
	function e(e) {
		for (var a, s, c = e[0], o = e[1], g = e[2], m = 0, p = []; m < c.length; m++) s = c[m], Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]), i[s] = 0;
		for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
		l && l(e);
		while (p.length) p.shift()();
		return r.push.apply(r, g || []), t()
	}

	function t() {
		for (var n, e = 0; e < r.length; e++) {
			for (var t = r[e], a = !0, c = 1; c < t.length; c++) {
				var o = t[c];
				0 !== i[o] && (a = !1)
			}
			a && (r.splice(e--, 1), n = s(s.s = t[0]))
		}
		return n
	}
	var a = {},
		i = {
			app: 0
		},
		r = [];

	function s(e) {
		if (a[e]) return a[e].exports;
		var t = a[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return n[e].call(t.exports, t, t.exports, s), t.l = !0, t.exports
	}
	s.m = n, s.c = a, s.d = function(n, e, t) {
		s.o(n, e) || Object.defineProperty(n, e, {
			enumerable: !0,
			get: t
		})
	}, s.r = function(n) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(n, "__esModule", {
			value: !0
		})
	}, s.t = function(n, e) {
		if (1 & e && (n = s(n)), 8 & e) return n;
		if (4 & e && "object" === typeof n && n && n.__esModule) return n;
		var t = Object.create(null);
		if (s.r(t), Object.defineProperty(t, "default", {
			enumerable: !0,
			value: n
		}), 2 & e && "string" != typeof n) for (var a in n) s.d(t, a, function(e) {
			return n[e]
		}.bind(null, a));
		return t
	}, s.n = function(n) {
		var e = n && n.__esModule ?
		function() {
			return n["default"]
		} : function() {
			return n
		};
		return s.d(e, "a", e), e
	}, s.o = function(n, e) {
		return Object.prototype.hasOwnProperty.call(n, e)
	}, s.p = "";
	var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
		o = c.push.bind(c);
	c.push = e, c = c.slice();
	for (var g = 0; g < c.length; g++) e(c[g]);
	var l = o;
	r.push([0, "chunk-vendors"]), t()
})({
	0: function(n, e, t) {
		n.exports = t("56d7")
	},
	"0074": function(n, e, t) {},
	"034f": function(n, e, t) {
		"use strict";
		var a = t("85ec"),
			i = t.n(a);
		i.a
	},
	1: function(n, e) {},
	2: function(n, e) {},
	3: function(n, e) {},
	"56d7": function(n, e, t) {
		"use strict";
		t.r(e);
		t("e260"), t("e6cf"), t("cca6"), t("a79d");
		var a, i = t("2b0e"),
			r = function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					attrs: {
						id: "app"
					}
				}, [t("h3", [n._v("头像生成器")]), t("Main")], 1)
			},
			s = [],
			c = function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					staticClass: "hello"
				}, [t("div", {
					staticClass: "canvas-warp"
				}, [t("canvas", {
					ref: "canvas",
					attrs: {
						id: "canvas"
					}
				})]), t("van-uploader", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: n.uploadImgBtn,
						expression: "uploadImgBtn"
					}],
					staticClass: "uploader",
					attrs: {
						"after-read": n.onChange,
						"image-fit": "cover"
					}
				}, [t("van-button", {
					staticClass: "uploader-btn",
					attrs: {
						plain: "",
						icon: "photo",
						color: "#222"
					}
				}, [n._v("上传图片")])], 1), t("van-popup", {
					staticClass: "save-popup",
					style: {
						width: "80%"
					},
					attrs: {
						closeable: ""
					},
					model: {
						value: n.saveShow,
						callback: function(e) {
							n.saveShow = e
						},
						expression: "saveShow"
					}
				}, [n._v("长按或右键保存图片！"), t("br"), t("br"), t("img", {
					attrs: {
						src: n.saveImgUrl,
						alt: ""
					}
				})]), t("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: n.showBtnBar,
						expression: "showBtnBar"
					}],
					staticClass: "btn-bar"
				}, [t("van-button", {
					attrs: {
						icon: "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/save.png",
						color: "#212121"
					},
					on: {
						click: n.saveImg
					}
				}), t("van-button", {
					attrs: {
						icon: "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/reset.png",
						color: "#212121"
					},
					on: {
						click: n.reset
					}
				}), t("van-button", {
					attrs: {
						icon: "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/lock.png",
						color: "#212121"
					},
					on: {
						click: n.lockObj
					}
				}), t("van-button", {
					attrs: {
						icon: "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/jiesuo.png",
						color: "#212121"
					},
					on: {
						click: n.unlockObj
					}
				}), t("van-button", {
					attrs: {
						icon: "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/remove.png",
						color: "#212121"
					},
					on: {
						click: n.removeObj
					}
				})], 1), t("van-tabs", {
					staticClass: "pic-list"
				}, n._l(n.material, (function(e) {
					return t("van-tab", {
						key: e.title,
						attrs: {
							title: e.title
						}
					}, [t("van-grid", {
						attrs: {
							"column-num": 5,
							gutter: 10,
							clickable: !0,
							square: !0
						}
					}, n._l(e.img, (function(a, i) {
						return t("van-grid-item", {
							key: e.title + i
						}, [t("img", {
							attrs: {
								id: "my-image",
								src: a
							},
							on: {
								click: n.addImg
							}
						})])
					})), 1)], 1)
				})), 1)], 1)
			},
			o = [],
			g = (t("b0c0"), t("fc11")),
			l = (t("0ec5"), t("21ab")),
			m = (t("3df5"), t("2830")),
			p = (t("bda7"), t("5e46")),
			h = (t("da3c"), t("0b33")),
			u = (t("9a83"), t("f564")),
			v = (t("e930"), t("8f80")),
			d = (t("8a58"), t("e41f")),
			f = (t("66b9"), t("b650")),
			b = t("7a94"),
			w = {
				name: "app",
				components: (a = {}, Object(g["a"])(a, f["a"].name, f["a"]), Object(g["a"])(a, d["a"].name, d["a"]), Object(g["a"])(a, v["a"].name, v["a"]), Object(g["a"])(a, u["a"].name, u["a"]), Object(g["a"])(a, h["a"].name, h["a"]), Object(g["a"])(a, p["a"].name, p["a"]), Object(g["a"])(a, m["a"].name, m["a"]), Object(g["a"])(a, l["a"].name, l["a"]), a),
				data: function() {
					return {
						canvas: null,
						material: [{
							title: "常用",
							img: ["https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/1.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/2.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/3.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/4.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/5.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/6.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/7.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/8.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/9.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/10.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/11.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/12.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/13.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/14.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/15.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/16.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/17.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/18.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/19.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/20.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/21.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/22.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/23.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/24.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/25.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/26.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/christmes/27.png"]
						}, {
							title: "创意",
							img: ["https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/1.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/2.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/3.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/4.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/5.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/6.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/7.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/8.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/9.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/10.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/11.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/12.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/13.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/14.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/15.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/16.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/17.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/18.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/19.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/20.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/21.png", "https://cdn.jsdelivr.net/gh/91xcode/static@master/avatar/static/img/newyear/22.png"]
						}],
						uploadImgBtn: !0,
						Uploaded: !1,
						saveShow: !1,
						saveImgUrl: "",
						showBtnBar: !1
					}
				},
				mounted: function() {
					this.initCanvas()
				},
				computed: {
					canvasWidth: function() {
						return window.innerWidth
					},
					canvasHeight: function() {
						return window.innerHeight
					}
				},
				methods: {
					initCanvas: function() {
						this.canvas = new b["fabric"].Canvas("canvas", {
							backgroundColor: "#eee",
							preserveObjectStacking: !0,
							devicePixelRatio: !0
						}), this.canvasWidth > 480 ? (this.canvas.setWidth(480), this.canvas.setHeight(480)) : this.canvasWidth < this.canvasHeight ? (this.canvas.setWidth(this.canvasWidth), this.canvas.setHeight(this.canvasWidth)) : (this.canvas.setWidth(.8 * this.canvasHeight), this.canvas.setHeight(.8 * this.canvasHeight))
					},
					onChange: function(n) {
						this.Uploaded = !0, this.loadImg(n.content), this.canvas.backgroundColor = ""
					},
					loadImg: function(n) {
						var e = this;
						b["fabric"].Image.fromURL(n, (function(n) {
							n.lockRotation = !0, n.set({
								transparentCorners: !1,
								cornerColor: "#ff110094",
								borderColor: "#ff110094",
								cornerSize: 16,
								cornerStyle: "circle",
								borderDashArray: [5, 8]
							}), n.scale(e.canvas.width / n.width), e.canvas.add(n)
						})), this.uploadImgBtn = !1, this.showBtnBar = !0
					},
					addImg: function(n) {
						if (!this.Uploaded) return Object(u["a"])("请先上传图片噢(oﾟvﾟ)ノ"), !1;
						var e = new b["fabric"].Image(n.target, {
							left: 100,
							top: 100,
							scaleX: .5,
							scaleY: .5
						});
						e.set({
							transparentCorners: !1,
							cornerColor: "#ff110094",
							borderColor: "#ff110094",
							cornerSize: 16,
							padding: 10,
							cornerStyle: "circle",
							borderDashArray: [5, 8]
						}), this.canvas.add(e), this.canvas.renderAll()
					},
					reset: function() {
						for (var n = this.canvas.getObjects(), e = 0; e < n.length; e++) this.canvas.remove(n[e]);
						this.Uploaded = !1, this.uploadImgBtn = !0, this.showBtnBar = !1
					},
					lockObj: function() {
						var n = this.canvas.getActiveObject();
						if (!n) return Object(u["a"])("先选一个要锁定的图片啦╰(￣ω￣ｏ)"), !1;
						n.lockMovementX = !0, n.lockMovementY = !0, n.lockRotation = !0, n.lockScalingX = !0, n.lockScalingY = !0, n.hasControls = !1, this.canvas.renderAll()
					},
					unlockObj: function() {
						var n = this.canvas.getActiveObject();
						if (!n) return Object(u["a"])("╰(￣ω￣ｏ)先选一个要解锁的图片啦"), !1;
						n.lockMovementX = !1, n.lockMovementY = !1, n.lockRotation = !1, n.lockScalingX = !1, n.lockScalingY = !1, n.hasControls = !0, this.canvas.renderAll()
					},
					removeObj: function() {
						var n = this.canvas.getActiveObject();
						if (!n) return Object(u["a"])("先选一个要删掉的图片啦╰(￣ω￣ｏ)"), !1;
						this.canvas.remove(n)
					},
					saveImg: function() {
						var n = this.canvas.toDataURL({
							format: "png"
						});
						this.saveImgUrl = n, this.saveShow = !0
					}
				}
			},
			y = w,
			O = (t("d969"), t("2877")),
			j = Object(O["a"])(y, c, o, !1, null, null, null),
			k = j.exports,
			C = {
				name: "app",
				components: {
					Main: k
				}
			},
			S = C,
			I = (t("034f"), Object(O["a"])(S, r, s, !1, null, null, null)),
			B = I.exports;
		i["a"].config.productionTip = !1, new i["a"]({
			render: function(n) {
				return n(B)
			}
		}).$mount("#app")
	},
	"85ec": function(n, e, t) {},
	d969: function(n, e, t) {
		"use strict";
		var a = t("0074"),
			i = t.n(a);
		i.a
	}
});
//# sourceMappingURL=app.9dbd59a4.js.map