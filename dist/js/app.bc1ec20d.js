(function (t) {
  function e(e) {
    for (
      var a, o, u = e[0], i = e[1], s = e[2], l = 0, b = [];
      l < u.length;
      l++
    )
      (o = u[l]),
        Object.prototype.hasOwnProperty.call(n, o) && n[o] && b.push(n[o][0]),
        (n[o] = 0);
    for (a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    d && d(e);
    while (b.length) b.shift()();
    return c.push.apply(c, s || []), r();
  }
  function r() {
    for (var t, e = 0; e < c.length; e++) {
      for (var r = c[e], a = !0, o = 1; o < r.length; o++) {
        var i = r[o];
        0 !== n[i] && (a = !1);
      }
      a && (c.splice(e--, 1), (t = u((u.s = r[0]))));
    }
    return t;
  }
  var a = {},
    n = { app: 0 },
    c = [];
  function o(t) {
    return (
      u.p +
      "js/" +
      ({ about: "about" }[t] || t) +
      "." +
      { about: "747b8dac" }[t] +
      ".js"
    );
  }
  function u(e) {
    if (a[e]) return a[e].exports;
    var r = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(r.exports, r, r.exports, u), (r.l = !0), r.exports;
  }
  (u.e = function (t) {
    var e = [],
      r = n[t];
    if (0 !== r)
      if (r) e.push(r[2]);
      else {
        var a = new Promise(function (e, a) {
          r = n[t] = [e, a];
        });
        e.push((r[2] = a));
        var c,
          i = document.createElement("script");
        (i.charset = "utf-8"),
          (i.timeout = 120),
          u.nc && i.setAttribute("nonce", u.nc),
          (i.src = o(t));
        var s = new Error();
        c = function (e) {
          (i.onerror = i.onload = null), clearTimeout(l);
          var r = n[t];
          if (0 !== r) {
            if (r) {
              var a = e && ("load" === e.type ? "missing" : e.type),
                c = e && e.target && e.target.src;
              (s.message =
                "Loading chunk " + t + " failed.\n(" + a + ": " + c + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = a),
                (s.request = c),
                r[1](s);
            }
            n[t] = void 0;
          }
        };
        var l = setTimeout(function () {
          c({ type: "timeout", target: i });
        }, 12e4);
        (i.onerror = i.onload = c), document.head.appendChild(i);
      }
    return Promise.all(e);
  }),
    (u.m = t),
    (u.c = a),
    (u.d = function (t, e, r) {
      u.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (u.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (u.t = function (t, e) {
      if ((1 & e && (t = u(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (u.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          u.d(
            r,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return r;
    }),
    (u.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return u.d(e, "a", e), e;
    }),
    (u.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (u.p = "/vue-carrito/"),
    (u.oe = function (t) {
      throw (console.error(t), t);
    });
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = i.push.bind(i);
  (i.push = e), (i = i.slice());
  for (var l = 0; l < i.length; l++) e(i[l]);
  var d = s;
  c.push([0, "chunk-vendors"]), r();
})({
  0: function (t, e, r) {
    t.exports = r("56d7");
  },
  "56d7": function (t, e, r) {
    "use strict";
    r.r(e);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    var a = r("7a23"),
      n = { class: "container mt-3" };
    function c(t, e, r, c, o, u) {
      var i = Object(a["t"])("Navbar"),
        s = Object(a["t"])("router-view");
      return (
        Object(a["o"])(),
        Object(a["d"])(
          a["a"],
          null,
          [Object(a["f"])(i), Object(a["f"])("div", n, [Object(a["f"])(s)])],
          64
        )
      );
    }
    var o = { class: "navbar navbar-expand-lg navbar-dark bg-dark" },
      u = { class: "container-fluid" },
      i = Object(a["f"])(
        "a",
        { class: "navbar-brand", href: "#" },
        "Carrito App",
        -1
      ),
      s = Object(a["f"])(
        "button",
        {
          class: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarNavAltMarkup",
          "aria-controls": "navbarNavAltMarkup",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
        },
        [Object(a["f"])("span", { class: "navbar-toggler-icon" })],
        -1
      ),
      l = { class: "collapse navbar-collapse", id: "navbarNavAltMarkup" },
      d = { class: "navbar-nav" },
      b = Object(a["e"])("Productos"),
      f = Object(a["e"])("Carrito");
    function p(t, e, r, n, c, p) {
      var v = Object(a["t"])("router-link");
      return (
        Object(a["o"])(),
        Object(a["d"])("nav", o, [
          Object(a["f"])("div", u, [
            i,
            s,
            Object(a["f"])("div", l, [
              Object(a["f"])("div", d, [
                Object(a["f"])(
                  v,
                  { class: "nav-link", to: "/" },
                  {
                    default: Object(a["y"])(function () {
                      return [b];
                    }),
                    _: 1,
                  }
                ),
                Object(a["f"])(
                  v,
                  { class: "nav-link", to: "/cart" },
                  {
                    default: Object(a["y"])(function () {
                      return [f];
                    }),
                    _: 1,
                  }
                ),
              ]),
            ]),
          ]),
        ])
      );
    }
    var v = { name: "Navbar" };
    v.render = p;
    var O = v,
      j = { components: { Navbar: O } };
    j.render = c;
    var m = j,
      g = (r("d3b7"), r("3ca3"), r("ddb0"), r("6c02")),
      h = Object(a["f"])("h1", null, "Productos", -1),
      y = Object(a["f"])("hr", null, null, -1),
      P = { class: "row row-cols-1 row-cols-md-3 g-4" };
    function w(t, e, r, n, c, o) {
      var u = Object(a["t"])("Card");
      return (
        Object(a["o"])(),
        Object(a["d"])(
          a["a"],
          null,
          [
            h,
            y,
            Object(a["f"])("div", P, [
              (Object(a["o"])(!0),
              Object(a["d"])(
                a["a"],
                null,
                Object(a["s"])(n.products, function (t) {
                  return (
                    Object(a["o"])(),
                    Object(a["d"])("div", { key: t.id, class: "col" }, [
                      Object(a["f"])(u, { product: t }, null, 8, ["product"]),
                    ])
                  );
                }),
                128
              )),
            ]),
          ],
          64
        )
      );
    }
    var k = r("1da1"),
      S = (r("96cf"), r("5c40")),
      x = r("5502"),
      C = { class: "card h-100" },
      N = { class: "card-body" },
      T = { class: "card-title" },
      _ = { class: "card-text" },
      J = { class: "d-grid" };
    function M(t, e, r, n, c, o) {
      return (
        Object(a["o"])(),
        Object(a["d"])("div", C, [
          Object(a["f"])(
            "img",
            {
              src: r.product.thumbnailUrl,
              class: "card-img-top",
              alt: "image ".concat(r.product.title),
            },
            null,
            8,
            ["src", "alt"]
          ),
          Object(a["f"])("div", N, [
            Object(a["f"])("h5", T, Object(a["v"])(r.product.title), 1),
            Object(a["f"])("p", _, "$ " + Object(a["v"])(r.product.price), 1),
            Object(a["f"])("div", J, [
              Object(a["f"])(
                "b",
                {
                  utton: "",
                  class: "btn btn-dark",
                  onClick:
                    e[1] ||
                    (e[1] = function (t) {
                      return n.buy(r.product);
                    }),
                },
                "Comprar"
              ),
            ]),
          ]),
        ])
      );
    }
    var A = r("3d20"),
      E = r.n(A),
      I = E.a.mixin({
        toast: !0,
        position: "top-end",
        showConfirmButton: !1,
        timer: 3e3,
        timerProgressBar: !0,
        didOpen: function (t) {
          t.addEventListener("mouseenter", E.a.stopTimer),
            t.addEventListener("mouseleave", E.a.resumeTimer);
        },
      }),
      L = {
        props: { product: { type: Object, required: !0 } },
        setup: function () {
          var t = Object(x["b"])();
          function e(e) {
            I.fire({ icon: "success", title: "Producto añadido a carrito!" }),
              t.dispatch("addProductToCart", e);
          }
          return { buy: e };
        },
      };
    L.render = M;
    var R = L,
      q = {
        name: "Products",
        components: { Card: R },
        setup: function () {
          var t = Object(x["b"])();
          Object(S["t"])(
            Object(k["a"])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.dispatch("fetchData");
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          );
          var e = Object(S["d"])(function () {
            return t.state.products;
          });
          return { products: e };
        },
      };
    q.render = w;
    var B = q,
      D = [
        { path: "/", name: "Products", component: B },
        {
          path: "/cart",
          name: "Cart",
          component: function () {
            return r.e("about").then(r.bind(null, "b789"));
          },
        },
      ],
      U = Object(g["a"])({ history: Object(g["b"])(), routes: D }),
      $ = U,
      z = r("5530"),
      F =
        (r("07ac"),
        Object(x["a"])({
          state: {
            products: [],
            cart: JSON.parse(localStorage.getItem("cart")) || {},
          },
          mutations: {
            setProducts: function (t, e) {
              t.products = e;
            },
            setProductOnCart: function (t, e) {
              var r = e.id;
              (t.cart[r] = Object(z["a"])({}, e)),
                localStorage.setItem("cart", JSON.stringify(t.cart));
            },
            setEmptyCart: function (t) {
              (t.cart = {}), localStorage.removeItem("cart");
            },
            increaseProduct: function (t, e) {
              var r = e;
              t.cart[r].amount++,
                localStorage.setItem("cart", JSON.stringify(t.cart));
            },
            decreaseProduct: function (t, e) {
              var r = e;
              t.cart[r].amount--,
                t.cart[r].amount || delete t.cart[e],
                localStorage.setItem("cart", JSON.stringify(t.cart));
            },
            removeProduct: function (t, e) {
              delete t.cart[e],
                localStorage.setItem("cart", JSON.stringify(t.cart));
            },
          },
          actions: {
            fetchData: function (t) {
              return Object(k["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, a, n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = t.commit),
                              (e.prev = 1),
                              (e.next = 4),
                              fetch("api.json")
                            );
                          case 4:
                            return (a = e.sent), (e.next = 7), a.json();
                          case 7:
                            (n = e.sent), r("setProducts", n), (e.next = 14);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e["catch"](1)),
                              console.log(e.t0);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 11]]
                  );
                })
              )();
            },
            addProductToCart: function (t, e) {
              var r = t.commit,
                a = t.state,
                n = Object.prototype.hasOwnProperty.call(a.cart, e.id);
              (e.amount = n ? a.cart[e.id].amount + 1 : 1),
                r("setProductOnCart", e);
            },
          },
          getters: {
            totalAmount: function (t) {
              return Object.values(t.cart).reduce(function (t, e) {
                var r = e.amount;
                return t + r;
              }, 0);
            },
            totalPrice: function (t) {
              return Object.values(t.cart).reduce(function (t, e) {
                var r = e.amount,
                  a = e.price;
                return t + r * a;
              }, 0);
            },
          },
        })),
      G = Object(a["c"])(m);
    G.use(F), G.use($), G.mount("#app");
  },
});
//# sourceMappingURL=app.bc1ec20d.js.map
