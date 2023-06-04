import { openBlock as u, createElementBlock as r, createElementVNode as t, toDisplayString as d, createApp as m } from "vue";
const f = { class: "wrapper" }, _ = { class: "confirm-dialog" }, g = { class: "confirm-message" }, s = {
  __name: "ConfirmDialog",
  setup(a) {
    const e = {
      options: Object,
      onDone: Function,
      onClose: Function
    }, o = () => {
      e.onDone();
    }, l = () => {
      e.onClose();
    };
    return (n, p) => (u(), r("div", f, [
      t("div", _, [
        t("div", g, d(n.options.message), 1),
        t("div", { class: "confirm-buttons" }, [
          t("button", { onClick: o }, "Ok"),
          t("button", { onClick: l }, "\u041E\u0442\u043C\u0435\u043D\u0430")
        ])
      ])
    ]));
  }
};
function i(a) {
  i.installed || (i.installed = !0, a.component("ConfirmDialog", s));
}
const C = {
  install: i
};
let c = null;
typeof window < "u" ? c = window.Vue : typeof global < "u" && (c = global.Vue);
c && c.use(C);
function y() {
  return {
    confirm: (e) => {
      if (e != null && e.message) {
        const o = m(s, {
          options: e,
          onDone: async () => {
            var n;
            await ((n = e.onDone) == null ? void 0 : n.call(e)), o.unmount();
          },
          onClose: async () => {
            var n;
            await ((n = e.onClose) == null ? void 0 : n.call(e)), o.unmount();
          }
        }), l = document.createElement("div");
        document.body.appendChild(l), o.mount(l);
      }
    }
  };
}
export {
  y as default
};
