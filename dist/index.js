import { defineComponent as h, ref as S, watch as y, createElementBlock as l, openBlock as i, createCommentVNode as b, Fragment as m, renderList as c, createElementVNode as s, normalizeStyle as k, toDisplayString as o } from "vue";
const N = { class: "number-flip" }, F = {
  key: 0,
  class: "number-flip-negative"
}, x = /* @__PURE__ */ h({
  name: "NumberFlip",
  __name: "number-flip",
  props: {
    value: {
      type: Number,
      required: !0
    },
    decimalSeparator: {
      type: String,
      default: "."
    },
    thousandSeparator: {
      type: String,
      default: ","
    },
    formatter: {
      type: Function,
      default: (r) => r.toString()
    }
  },
  setup(r) {
    const u = r, a = S([]);
    function d(n) {
      return u.formatter(Math.abs(n)).split("").map((e) => e === u.decimalSeparator ? -1 : e === u.thousandSeparator ? -2 : parseInt(e, 10));
    }
    function f(n) {
      const t = 8.333333333333334;
      return (-10 * t + (n + 1) * t).toString();
    }
    function g(n) {
      const t = d(n);
      for (let e = a.value.length; e < t.length; e++)
        a.value.push("translateY(-100%)");
      for (let e = t.length; e < a.value.length; e++)
        a.value.pop();
      setTimeout(() => {
        a.value = t.map((e) => `translateY(${f(e)}%)`);
      }, 0);
    }
    return y(
      () => u.value,
      (n) => {
        g(n);
      },
      { immediate: !0 }
    ), (n, t) => (i(), l("div", N, [
      r.value < 0 ? (i(), l("span", F, "-")) : b("", !0),
      (i(!0), l(m, null, c(a.value, (e, v) => (i(), l("div", {
        key: v,
        class: "number-flip-digit-container"
      }, [
        t[0] || (t[0] = s("span", { style: { visibility: "hidden" } }, "0", -1)),
        s("div", {
          class: "number-flip-digit-value",
          style: k({ transform: e })
        }, [
          (i(), l(m, null, c(10, (p) => s("span", { key: p }, o(10 - p), 1)), 64)),
          s("span", null, o(r.decimalSeparator), 1),
          s("span", null, o(r.thousandSeparator), 1)
        ], 4)
      ]))), 128))
    ]));
  }
});
export {
  x as default
};
