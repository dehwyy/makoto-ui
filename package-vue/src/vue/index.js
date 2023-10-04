import {
	defineComponent as e,
	openBlock as r,
	createElementBlock as a,
	Fragment as n,
	createElementVNode as s,
	renderSlot as o
} from 'vue'
const c = /* @__PURE__ */ s(
		'div',
		{ class: 'stars__wrapper' },
		[
			/* @__PURE__ */ s('div', { class: 'stars' }),
			/* @__PURE__ */ s('div', { class: 'stars2' }),
			/* @__PURE__ */ s('div', { class: 'stars3' })
		],
		-1
	),
	_ = { class: 'stars__content' },
	p = /* @__PURE__ */ e({
		__name: 'stars-background',
		setup(d) {
			return (t, l) => (r(), a(n, null, [c, s('div', _, [o(t.$slots, 'default')])], 64))
		}
	})
import '../../css/stars-background.css'z
export { p as StarsBackground }
