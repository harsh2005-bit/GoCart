(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/features/cart/cartSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addToCart": (()=>addToCart),
    "clearCart": (()=>clearCart),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteItemFromCart": (()=>deleteItemFromCart),
    "removeFromCart": (()=>removeFromCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const cartSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'cart',
    initialState: {
        total: 0,
        cartItems: {}
    },
    reducers: {
        addToCart: (state, action)=>{
            const { productId } = action.payload;
            if (state.cartItems[productId]) {
                state.cartItems[productId]++;
            } else {
                state.cartItems[productId] = 1;
            }
            state.total += 1;
        },
        removeFromCart: (state, action)=>{
            const { productId } = action.payload;
            if (state.cartItems[productId]) {
                state.cartItems[productId]--;
                if (state.cartItems[productId] === 0) {
                    delete state.cartItems[productId];
                }
            }
            state.total -= 1;
        },
        deleteItemFromCart: (state, action)=>{
            const { productId } = action.payload;
            state.total -= state.cartItems[productId] ? state.cartItems[productId] : 0;
            delete state.cartItems[productId];
        },
        clearCart: (state)=>{
            state.cartItems = {};
            state.total = 0;
        }
    }
});
const { addToCart, removeFromCart, clearCart, deleteItemFromCart } = cartSlice.actions;
const __TURBOPACK__default__export__ = cartSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/gs_logo.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/gs_logo.0ba7ab38.jpg");}}),
"[project]/assets/gs_logo.jpg.mjs { IMAGE => \"[project]/assets/gs_logo.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$gs_logo$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/gs_logo.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$gs_logo$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 1000,
    height: 1000,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1C3S/t7ueWUSTma42qN/yRxdiB04796eljHnm58qWi/rQ/9k=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/happy_store.webp (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/happy_store.8d77b741.webp");}}),
"[project]/assets/happy_store.webp.mjs { IMAGE => \"[project]/assets/happy_store.webp (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$happy_store$2e$webp__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/happy_store.webp (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$happy_store$2e$webp__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurDataURL: "data:image/webp;base64,UklGRuAAAABXRUJQVlA4TNQAAAAvB8ABAM1VICICHghACgMAAIBLsEEABhADBgAAAAAAAAAAAAAAAAAAAAAAAAAAAACADASZVzf3NQYAwANBO4EAAAA4/7cEAQAOAgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACISE79bR4IhgkAAADA+e8OAgAVABQAAAAABAAIAAAAAAAAAAAAAAAEAAAAoAAQcHQBHikA/DCc7oBvyO65vMsAy+5tZ7f/2LuAxfwyRLx6gEkorddvcoynV1kAPEIu6arl3O1YOaQAPMAOCdlcYyjAAQ==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/upload_area.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/upload_area.941d5573.svg");}}),
"[project]/assets/upload_area.svg.mjs { IMAGE => \"[project]/assets/upload_area.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$upload_area$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/upload_area.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$upload_area$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 120,
    height: 56,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/hero_model_img.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/hero_model_img.c798020a.png");}}),
"[project]/assets/hero_model_img.png.mjs { IMAGE => \"[project]/assets/hero_model_img.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_model_img$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/hero_model_img.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_model_img$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 513,
    height: 542,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABDUlEQVR42l2KPUhCUQBG77tlPs0n1SND+9PIQCQJfdUgcZ8WQdAggUT/alFEDQ5WEDSEuDk4OQk6iZOLiyAOguCgg4IugiAKooLgoIvwvOoi6vngW84BYAICQj4l5J0uLsB9MAvBmxcf6fbct+dMQ74r9QAI56YCyfbWlf/H2s14fzFr1GUIAUmP5ZJIQF+jA2/Y8dCNOz/6tufHwsqyWDYOlIpV7Z8NhVxPJ+mA46L9/2VKrq1TSkAMNzqVWWa9iTG1N5+m5Qyj/meO7ZwF1VFqk5QDaoNUmCJMylLVY3sR4cu0Gr82DdiSRzVaJdKAw+8d90uF7d2Xjzl7ycCZc1ruvW7k7hL6rFDClw4AQPxJbHLm5hQAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/hero_product_img1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/hero_product_img1.d5cc3bbf.png");}}),
"[project]/assets/hero_product_img1.png.mjs { IMAGE => \"[project]/assets/hero_product_img1.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_product_img1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/hero_product_img1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_product_img1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 210,
    height: 210,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42jWO30rCYBiH33BnuW87iXYDTfuKdjvV0fJAYiomEYE3YQlpJx6Z7mtKNxBIBCkZQgcVqcgU538QL8Axv3fgAw888PLCD4BzSOnR6dm5fqJpGopNKT2GLbF4Il1vfK5y+cfiQy5f/OBtxOJp/xjgJJJXN7W395/MfbaQucsWsJOp1K0gCAEgkkTKzHr9/et4na7ti82sak2WZQkIIeKTaT7bA8f9b/c81O47bslkVYk/wx6n3mi2ZvOlN5rMfbGbX61vRVH2YZdTKrPKeLJYD52pi2Izq/ISFMWgP/RAVUO6HjGi0ctrVL+IGGo4FIYdgA0+M3zuJon/wQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/hero_product_img2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/hero_product_img2.7873f792.png");}}),
"[project]/assets/hero_product_img2.png.mjs { IMAGE => \"[project]/assets/hero_product_img2.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_product_img2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/hero_product_img2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_product_img2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 210,
    height: 252,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/AAAAAAAAAAABCQkKFBUWFzERERMqAwMDCAAAAAAAAQEBAxUVFz46O0G+Oz1DtzI1OtMkJSmGBgYGDwAQEBA3V1VU205NTv4sLTGjLzE2zDU4PuoTExU5ACIiIVR/e3X3bWtn/y8tMLQqKy6aPUBG8BUWGD8AIiIhU3x3cvdraGT/Ky0wpiYnKn9CRErvFRUXPQAPDw82SklI2j8+QP4hIyaOKSsulDc6P9QLDA0hAAEBAQMPEBE9LC0zvTAyN6k1ODzFHyEjagICAgMAAAAAAAAAAAEHBwgUEBESMA0ODycCAgIFAAAAAMcAMT5FXQ3CAAAAAElFTkSuQmCC",
    blurWidth: 7,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img1.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img1.bcc9ab12.png");}}),
"[project]/assets/product_img1.png.mjs { IMAGE => \"[project]/assets/product_img1.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img1$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img1.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img1$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 516,
    height: 776,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR42gGoAFf/AAQDAwVEPTVRb2pid01LSE0DAwMDABUSEBmtm4bP7eDP/cTAuMUTEhISADAqJDzCrpbs69/O/uTe1eYxMC8xACgkHzJzZ1mNg3txo4eDfIsrKigrAAAAAAABAQECBQQDKAEBAAEAAAAAAAAAAAAAAAACBAQDJwAAAAAAAAAAAAEBAQIeHBpAOTUxfyEfHTcAAAABAAEAAAEXFRM1LywpWxwbGi8AAAAA9xclC4ZtcMcAAAAASUVORK5CYII=",
    blurWidth: 5,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img2.c35e6c62.png");}}),
"[project]/assets/product_img2.png.mjs { IMAGE => \"[project]/assets/product_img2.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 496,
    height: 744,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR42gGoAFf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDBAYkJSZAPz9BaiUlJjwDAwMFACgoKVdsbHDpent+/Xh4e+UsLC1PADw8PalXV1n/XV1g/2hoav9KSkygADg4ObJMTE3/UVFT/1taXP9GRkeoADM0NZ9KSkv+Tk5Q/1ZWV/47PD2SABAZGDwvRkTEO1JQ5TZNS8ASGRk0AAABAQEDCgoXBhQSLQMKChYAAQABiMQr8UQYAoMAAAAASUVORK5CYII=",
    blurWidth: 5,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img3.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img3.78428b86.png");}}),
"[project]/assets/product_img3.png.mjs { IMAGE => \"[project]/assets/product_img3.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 540,
    height: 812,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR42gGoAFf/AAAAAAAGBgYHGhoaHgwMDBAAAAAAAAEBAQVDQkFpmZmW105NSZYFBQQJAAQEBDYfHx7jNDUz/1BPSt4WFhUmAAcGBU4cFxL2ICAf/1VUUOEZGRgnAAkGBUghFxDxGRkY/1lXU9wWFRQiAAICAg47OjarZWRe/nVzbskNDQwTAAAAAAAhIB49XVtWrEdGQ24CAgIDAAAAAAAAAAABBAQDBgICAgMAAAAAqE0fbHbFiw8AAAAASUVORK5CYII=",
    blurWidth: 5,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img4.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img4.bf71377a.png");}}),
"[project]/assets/product_img4.png.mjs { IMAGE => \"[project]/assets/product_img4.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img4$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img4.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img4$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 700,
    height: 700,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1ElEQVR42l2OvwqCYBTFVdRBo0+Q8E8KunxN1haYQzo4hEWGD2CbJkTQkOiQez5AU0RIL9DQq7n2KSHRDw5c7jmcezHsB4IgaCQK+6dZiqLojEZwByFMBEGYox3ZBWRZNjVNW9E03UcCuq5tJEmatiaO48R4Ml4CAHj8C8dxA8MwFs3cBjzPS6I4vvM8P0RSszx/+P46ary2JQiC46Usa8uyDqY5y6rqWYfhdt/9oKoqPKXp27adq+u6t3NRvBRF0btAU8UwDEeSZI+iqB7LsqC9j/gA6hQiXlSAA0EAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img5.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img5.951a9613.png");}}),
"[project]/assets/product_img5.png.mjs { IMAGE => \"[project]/assets/product_img5.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img5$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img5.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img5$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 632,
    height: 632,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA20lEQVR42lWPvQqCUACFFU1NioQrXIRwkAKXaGoIIvqByBJMLRILG4rCxeznVRp6g96gobWxpbm9LWoPut0lyW88fHDOIQgMieE4ThIEoSpJUpGiKJr4R5blgmVZZ8/znuvV8pZXsnWSJMhIUFXV0XX9bZoWWq/Cz9CoHDLpBIwEURRLptF62LaNttsNmk76RwiSuUjA/WA8ql0GAwOFYYgW89mJYRKpSMAbqVa7uXdcB/m+j4IguPI8L8aHKkq30+vdXdd9aZq2o2k6GRPwNQYAUIYQNliWFX75F9DzMSNXqjmaAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img6.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img6.2d541cc9.png");}}),
"[project]/assets/product_img6.png.mjs { IMAGE => \"[project]/assets/product_img6.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img6$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img6.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img6$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBklEQVR42jWPMUiEYBzFv1M75xYdFBzMIV1CchOOEzoXhRwu2lw6msU2NxcdhKKpWSdHBRc3lyAEdxfDHDIIW4SW/Miu+sGfP+8Nj/cA+APDMGTxC0BRdP/34DiOKYqiby+2D7quX5umebnbXd1LknS+XC4PgCzLJ1EUPW82KrRt+7Ou69F1XTjrF57nT4GmaaswDAf+mIeO40xlWU6+78P1WnkXRXEFGIYhkiR5jOMYZlk2zPdaFAWcUyuWZWmgqqrcdd3bOI5wGIapbduvvu9h0zQfhmGcAUEQjtI0zaqqqvM8fwqC4M7zvFvLsm5omiYAgiALkiQPOY5jKIoi5uboj/c/8xvDbGXThf+iZAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img7.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img7.d3dfe782.png");}}),
"[project]/assets/product_img7.png.mjs { IMAGE => \"[project]/assets/product_img7.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img7$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img7.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img7$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 443,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAt0lEQVR42j3NsQqCQBzH8fPEN4g2w8Ump5ZoFzeXJl9BCHqEFvO8vLCgd/BRfAEjUOGC1pA7aWk5+p9Cv/H3Gb4IwVzXXdR1fZdSfrMsYxhjQ//I87xlVVWvvu9VmpLiD1EUhW3bfoQQitLTBJZlYULInnP+FkKqPM8L0zQNZNv2jFK6a5rmCQ0AdhnB9/1VHMdbAK6BsfN1BDjDIAjWXdfxYRgA2AQQ3jiOMy/L8gadR5IcDzr+A5vlV/5M8US6AAAAAElFTkSuQmCC",
    blurWidth: 6,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img8.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img8.7b690010.png");}}),
"[project]/assets/product_img8.png.mjs { IMAGE => \"[project]/assets/product_img8.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img8$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img8.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img8$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyElEQVR42m1PvQqCUBS+N683LwgXEUGvgxh6xclBUMFRotwbGlpde4Cg1tagBwgieoZeoheooTWiRwjpNOXggcPh/Hw/B6H+wL1TRVGGpmlOhRBby7JWqqqKPwRjquv6KM/zWxiGrW3bb03Tit8CDyAcx1kCelKW5SMIgpZz/qKUFgiaJo7jJk3Tg+d5s6qq7lEUfUDmCaA9YoxJoJvD0S7LslNd11eoFynlBqSOXQ8EKIVhGGPf99dJkpxd1130/wi2CCEckn0BRskhQRqfD8IAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img9.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img9.ee812ed2.png");}}),
"[project]/assets/product_img9.png.mjs { IMAGE => \"[project]/assets/product_img9.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img9$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img9.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img9$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 672,
    height: 672,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6ElEQVR42jWOS2rCUBSGL3TY10TpBkyb0qbdjTqLDhRNFEEQwTVEnESHol41vnADPnBiIKIDQcUHouA7A3EBSjwn4AcffJyfC5cQgGW/f+wOp4vjuH/wDxtuv+SBXxBjXVW7yHKKynKSYuPNHJ8AUQxGmq3OWJISaSmeSEOPAsFQFDfyBuQLpcZ4Mjfmi5UptqJU2u8AeQUyWVperbe36WxpoNg5WqjhY2KxWK2qqg1O+tnYHXRTbK3XH34A5BmgeaW6P+jXzfZ4Q3d7/VpUKvUXwPyozcZ88bxb8Hh9YZR3uQWG+WRxuwPGKnwjx1RMbQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img10.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img10.4e08e938.png");}}),
"[project]/assets/product_img10.png.mjs { IMAGE => \"[project]/assets/product_img10.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img10$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img10.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img10$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42lWPzW4BYRiFP/OZtjP9m46oNKGNr5OZdnT8jE7bUSqVlgyTYE2Ee/ATFkhI7F2AvbgDCysL1yGsLCywsBFDEJ7le86bcw4AOyCE+B1tYO5NDyJJXhrBMTh+ds1ytoI/oAykT19PcEpdiqKFrajT4Dgul0mnFl+yd/TK25vuj+8lw/JlTQQAwzAYVoKtWqW4UsORGYPYnOz9nbzwjoZub1BC/61qKbtSVXVqtlgTP/6/oe3NVd8aNhEIoWw8Fp0LDvfQ/GhNenyBseUJJQ4loV5/pX3mxXdPX5Tkjt0ltQmCNJ0swbSZN7fUM20wOs8vCHp/XwOLeS6wWUw2zwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img11.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img11.6203b862.png");}}),
"[project]/assets/product_img11.png.mjs { IMAGE => \"[project]/assets/product_img11.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img11$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img11.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img11$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAx0lEQVR42pWPuwqCYACF/7S8DBKCY1NNCa1ikPgMNjQERvUINpZdnqByqWYNKjGiCMUxEyoaDKOtvUdoEOkyBG31jecM53wA/AMMwxGCIDAcx5GvAoKgSJqmU612pzmZ6mavr6g5jmNeOcAwLCYIecGybM87+YGqjcPlah2alr1LJlMJwDBMxtm61/3hGBrzxX2mG8HGcUP/fLnxPM8CiqLiklSTy5Vql2WzhXpDVgbDkSaKpSJJksTnw3vvCYIgURRFYz+bPQBCazpo4v4+/AAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/product_img12.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/product_img12.b1c9364d.png");}}),
"[project]/assets/product_img12.png.mjs { IMAGE => \"[project]/assets/product_img12.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img12$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/product_img12.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img12$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 544,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/AAAAAAAAAAABDQ0OIh0eIE0RERIvAwMDCQAAAAAAAAAAARYWGENaXGLPgIOM9XR3feI5Ojx7AwMEBgAICAgcQ0VKyHt+hf+Eh4//kZSc/2dpbugWFhhNABUVF09FR0v1eHp//29xdv98f4T/aGpu+BwcHV0ALi8weDw8QPxBQkX/UlNW/2Vmav9eX2PuGxwdPwCdnY3FZGNf/zY3Of9ERUf/TU5S/0dKTcoOEBEeAKmomsFgYmC7LC0v1EJDRe5SW2PrXGl140pZZJkALS4uNRYWFx0ICAgeHBwdPBsfIjYgJitEGh8iMtRuSye5y0itAAAAAElFTkSuQmCC",
    blurWidth: 7,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/profile_pic1.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/profile_pic1.99f4b5d9.jpg");}}),
"[project]/assets/profile_pic1.jpg.mjs { IMAGE => \"[project]/assets/profile_pic1.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic1$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/profile_pic1.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic1$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDTuvHPh2LxQsxu5zsBhcqh2g9M/wC7/Ws7O9zTmXLY/9k=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/profile_pic2.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/profile_pic2.56bc10d3.jpg");}}),
"[project]/assets/profile_pic2.jpg.mjs { IMAGE => \"[project]/assets/profile_pic2.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic2$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/profile_pic2.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic2$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDZbxPoqa39mOpAAHyiu35N31x696NebyHePJ5n/9k=",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/profile_pic3.jpg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/profile_pic3.f93af6cc.jpg");}}),
"[project]/assets/profile_pic3.jpg.mjs { IMAGE => \"[project]/assets/profile_pic3.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic3$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/assets/profile_pic3.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic3$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 100,
    height: 100,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCb+3LyfUHvLbUTLDGwR7hT8sce3nIPGc+1OXN7RK4oqPsn7p//2Q==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/assets/assets.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addressDummyData": (()=>addressDummyData),
    "assets": (()=>assets),
    "categories": (()=>categories),
    "couponDummyData": (()=>couponDummyData),
    "dummyAdminDashboardData": (()=>dummyAdminDashboardData),
    "dummyRatingsData": (()=>dummyRatingsData),
    "dummyStoreDashboardData": (()=>dummyStoreDashboardData),
    "dummyStoreData": (()=>dummyStoreData),
    "dummyUserData": (()=>dummyUserData),
    "orderDummyData": (()=>orderDummyData),
    "ourSpecsData": (()=>ourSpecsData),
    "productDummyData": (()=>productDummyData),
    "storesDummyData": (()=>storesDummyData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$gs_logo$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$gs_logo$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/gs_logo.jpg.mjs { IMAGE => "[project]/assets/gs_logo.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$happy_store$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$happy_store$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/happy_store.webp.mjs { IMAGE => "[project]/assets/happy_store.webp (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$upload_area$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$upload_area$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/upload_area.svg.mjs { IMAGE => "[project]/assets/upload_area.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_model_img$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$hero_model_img$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/hero_model_img.png.mjs { IMAGE => "[project]/assets/hero_model_img.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_product_img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$hero_product_img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/hero_product_img1.png.mjs { IMAGE => "[project]/assets/hero_product_img1.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_product_img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$hero_product_img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/hero_product_img2.png.mjs { IMAGE => "[project]/assets/hero_product_img2.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img1.png.mjs { IMAGE => "[project]/assets/product_img1.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img2.png.mjs { IMAGE => "[project]/assets/product_img2.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img3.png.mjs { IMAGE => "[project]/assets/product_img3.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img4.png.mjs { IMAGE => "[project]/assets/product_img4.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img5$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img5.png.mjs { IMAGE => "[project]/assets/product_img5.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img6$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img6.png.mjs { IMAGE => "[project]/assets/product_img6.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img7$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img7$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img7.png.mjs { IMAGE => "[project]/assets/product_img7.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img8$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img8.png.mjs { IMAGE => "[project]/assets/product_img8.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img9$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img9$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img9.png.mjs { IMAGE => "[project]/assets/product_img9.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img10$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img10$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img10.png.mjs { IMAGE => "[project]/assets/product_img10.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img11$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img11$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img11.png.mjs { IMAGE => "[project]/assets/product_img11.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img12$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img12$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/product_img12.png.mjs { IMAGE => "[project]/assets/product_img12.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$fading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockFadingIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-fading.js [app-client] (ecmascript) <export default as ClockFadingIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadsetIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headset.js [app-client] (ecmascript) <export default as HeadsetIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as SendIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$profile_pic1$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/profile_pic1.jpg.mjs { IMAGE => "[project]/assets/profile_pic1.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$profile_pic2$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/profile_pic2.jpg.mjs { IMAGE => "[project]/assets/profile_pic2.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$profile_pic3$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/assets/profile_pic3.jpg.mjs { IMAGE => "[project]/assets/profile_pic3.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const assets = {
    upload_area: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$upload_area$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$upload_area$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    hero_model_img: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_model_img$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$hero_model_img$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    hero_product_img1: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_product_img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$hero_product_img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    hero_product_img2: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$hero_product_img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$hero_product_img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    gs_logo: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$gs_logo$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$gs_logo$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img1: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img2: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img3: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img4: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img5: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img5$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img6: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img6$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img7: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img7$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img7$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img8: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img8$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img9: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img9$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img9$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img10: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img10$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img10$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img11: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img11$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img11$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    product_img12: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img12$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img12$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
};
const categories = [
    "Headphones",
    "Speakers",
    "Watch",
    "Earbuds",
    "Mouse",
    "Decoration"
];
const dummyRatingsData = [
    {
        id: "rat_1",
        rating: 4.2,
        review: "I was a bit skeptical at first, but this product turned out to be even better than I imagined. The quality feels premium, it's easy to use, and it delivers exactly what was promised. I've already recommended it to friends and will definitely purchase again in the future.",
        user: {
            name: 'Kristin Watson',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$profile_pic1$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        productId: "prod_1",
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        product: {
            name: 'Bluetooth Speakers',
            category: 'Electronics',
            id: 'prod_1'
        }
    },
    {
        id: "rat_2",
        rating: 5.0,
        review: "This product is great. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.",
        user: {
            name: 'Jenny Wilson',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$profile_pic2$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        productId: "prod_2",
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        product: {
            name: 'Bluetooth Speakers',
            category: 'Electronics',
            id: 'prod_1'
        }
    },
    {
        id: "rat_3",
        rating: 4.1,
        review: "This product is amazing. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.",
        user: {
            name: 'Bessie Cooper',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$profile_pic3$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        productId: "prod_3",
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        product: {
            name: 'Bluetooth Speakers',
            category: 'Electronics',
            id: 'prod_1'
        }
    },
    {
        id: "rat_4",
        rating: 5.0,
        review: "This product is great. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.",
        user: {
            name: 'Kristin Watson',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic1$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$profile_pic1$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        productId: "prod_4",
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        product: {
            name: 'Bluetooth Speakers',
            category: 'Electronics',
            id: 'prod_1'
        }
    },
    {
        id: "rat_5",
        rating: 4.3,
        review: "Overall, I'm very happy with this purchase. It works as described and feels durable. The only reason I didn't give it five stars is because of a small issue (such as setup taking a bit longer than expected, or packaging being slightly damaged). Still, highly recommend it for anyone looking for a reliable option.",
        user: {
            name: 'Jenny Wilson',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic2$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$profile_pic2$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        productId: "prod_5",
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        product: {
            name: 'Bluetooth Speakers',
            category: 'Electronics',
            id: 'prod_1'
        }
    },
    {
        id: "rat_6",
        rating: 5.0,
        review: "This product is great. I love it!  You made it so simple. My new site is so much faster and easier to work with than my old site.",
        user: {
            name: 'Bessie Cooper',
            image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$profile_pic3$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$profile_pic3$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        productId: "prod_6",
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        product: {
            name: 'Bluetooth Speakers',
            category: 'Electronics',
            id: 'prod_1'
        }
    }
];
const dummyStoreData = {
    id: "store_1",
    userId: "user_1",
    name: "Happy Shop",
    description: "At Happy Shop, we believe shopping should be simple, smart, and satisfying. Whether you're hunting for the latest fashion trends, top-notch electronics, home essentials, or unique lifestyle products — we've got it all under one digital roof.",
    username: "happyshop",
    address: "3rd Floor, Happy Shop , New Building, 123 street , c sector , NY, US",
    status: "approved",
    isActive: true,
    logo: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$happy_store$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$happy_store$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    email: "happyshop@example.com",
    contact: "+0 1234567890",
    createdAt: "2025-09-04T09:04:16.189Z",
    updatedAt: "2025-09-04T09:04:44.273Z",
    user: {
        id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "Great Stack",
        email: "user.greatstack@gmail.com",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$gs_logo$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$gs_logo$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    }
};
const productDummyData = [
    {
        id: "prod_1",
        name: "Modern table lamp",
        description: "Modern table lamp with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty. Enhance your audio experience with this earbuds. Indulge yourself in a world of pure sound with 50 hours of uninterrupted playtime. Equipped with the cutting-edge Zen Mode Tech ENC and BoomX Tech, prepare to be enthralled by a symphony of crystal-clear melodies.",
        mrp: 40,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img1$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        category: "Decoration",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_2",
        name: "Smart speaker gray",
        description: "Smart speaker with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 50,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Speakers",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_3",
        name: "Smart watch white",
        description: "Smart watch with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 60,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Watch",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_4",
        name: "Wireless headphones",
        description: "Wireless headphones with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 70,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img4$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Headphones",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_5",
        name: "Smart watch black",
        description: "Smart watch with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 49,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img5$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Watch",
        rating: [
            ...dummyRatingsData,
            ...dummyRatingsData
        ],
        createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_6",
        name: "Security Camera",
        description: "Security Camera with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 59,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img6$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img6$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Camera",
        rating: [
            ...dummyRatingsData,
            ...dummyRatingsData
        ],
        createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_7",
        name: "Smart Pen for iPad",
        description: "Smart Pen for iPad with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 89,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img7$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img7$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Pen",
        rating: [
            ...dummyRatingsData,
            ...dummyRatingsData
        ],
        createdAt: 'Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_8",
        name: "Home Theater",
        description: "Home Theater with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 99,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img8$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Theater",
        rating: [
            ...dummyRatingsData,
            ...dummyRatingsData
        ],
        createdAt: 'Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_9",
        name: "Apple Wireless Earbuds",
        description: "Apple Wireless Earbuds with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 89,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img9$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img9$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Earbuds",
        rating: [
            ...dummyRatingsData,
            ...dummyRatingsData
        ],
        createdAt: 'Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_10",
        name: "Apple Smart Watch",
        description: "Apple Smart Watch with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 179,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img10$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img10$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Watch",
        rating: [
            ...dummyRatingsData,
            ...dummyRatingsData
        ],
        createdAt: 'Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_11",
        name: "RGB Gaming Mouse",
        description: "RGB Gaming Mouse with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 39,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img11$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img11$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Mouse",
        rating: [
            ...dummyRatingsData,
            ...dummyRatingsData
        ],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)'
    },
    {
        id: "prod_12",
        name: "Smart Home Cleaner",
        description: "Smart Home Cleaner with a sleek design. It's perfect for any room. It's made of high-quality materials and comes with a lifetime warranty.",
        mrp: 199,
        price: 29,
        images: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$product_img12$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$product_img12$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        ],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Cleaner",
        rating: [
            ...dummyRatingsData,
            ...dummyRatingsData
        ],
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)'
    }
];
const ourSpecsData = [
    {
        title: "Free Shipping",
        description: "Enjoy fast, free delivery on every order no conditions, just reliable doorstep.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendIcon$3e$__["SendIcon"],
        accent: '#05DF72'
    },
    {
        title: "7 Days easy Return",
        description: "Change your mind? No worries. Return any item within 7 days.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$fading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockFadingIcon$3e$__["ClockFadingIcon"],
        accent: '#FF8904'
    },
    {
        title: "24/7 Customer Support",
        description: "We're here for you. Get expert help with our customer support.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadsetIcon$3e$__["HeadsetIcon"],
        accent: '#A684FF'
    }
];
const addressDummyData = {
    id: "addr_1",
    userId: "user_1",
    name: "John Doe",
    email: "johndoe@example.com",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
    phone: "1234567890",
    createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)'
};
const couponDummyData = [
    {
        code: "NEW20",
        description: "20% Off for New Users",
        discount: 20,
        forNewUser: true,
        forMember: false,
        isPublic: false,
        expiresAt: "2026-12-31T00:00:00.000Z",
        createdAt: "2025-08-22T08:35:31.183Z"
    },
    {
        code: "NEW10",
        description: "10% Off for New Users",
        discount: 10,
        forNewUser: true,
        forMember: false,
        isPublic: false,
        expiresAt: "2026-12-31T00:00:00.000Z",
        createdAt: "2025-08-22T08:35:50.653Z"
    },
    {
        code: "OFF20",
        description: "20% Off for All Users",
        discount: 20,
        forNewUser: false,
        forMember: false,
        isPublic: false,
        expiresAt: "2026-12-31T00:00:00.000Z",
        createdAt: "2025-08-22T08:42:00.811Z"
    },
    {
        code: "OFF10",
        description: "10% Off for All Users",
        discount: 10,
        forNewUser: false,
        forMember: false,
        isPublic: false,
        expiresAt: "2026-12-31T00:00:00.000Z",
        createdAt: "2025-08-22T08:42:21.279Z"
    },
    {
        code: "PLUS10",
        description: "20% Off for Members",
        discount: 10,
        forNewUser: false,
        forMember: true,
        isPublic: false,
        expiresAt: "2027-03-06T00:00:00.000Z",
        createdAt: "2025-08-22T11:38:20.194Z"
    }
];
const dummyUserData = {
    id: "user_31dQbH27HVtovbs13X2cmqefddM",
    name: "GreatStack",
    email: "greatstack@example.com",
    image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$gs_logo$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$gs_logo$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
    cart: {}
};
const orderDummyData = [
    {
        id: "cmemm75h5001jtat89016h1p3",
        total: 214.2,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:15:03.929Z",
        updatedAt: "2025-08-22T09:15:50.723Z",
        isCouponUsed: true,
        coupon: dummyRatingsData[2],
        orderItems: [
            {
                orderId: "cmemm75h5001jtat89016h1p3",
                productId: "cmemlydnx0017tat8h3rg92hz",
                quantity: 1,
                price: 89,
                product: productDummyData[0]
            },
            {
                orderId: "cmemm75h5001jtat89016h1p3",
                productId: "cmemlxgnk0015tat84qm8si5v",
                quantity: 1,
                price: 149,
                product: productDummyData[1]
            }
        ],
        address: addressDummyData,
        user: dummyUserData
    },
    {
        id: "cmemm6jv7001htat8vmm3gxaf",
        total: 421.6,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:14:35.923Z",
        updatedAt: "2025-08-22T09:15:52.535Z",
        isCouponUsed: true,
        coupon: couponDummyData[0],
        orderItems: [
            {
                orderId: "cmemm6jv7001htat8vmm3gxaf",
                productId: "cmemm1f3y001dtat8liccisar",
                quantity: 1,
                price: 229,
                product: productDummyData[2]
            },
            {
                orderId: "cmemm6jv7001htat8vmm3gxaf",
                productId: "cmemm0nh2001btat8glfvhry1",
                quantity: 1,
                price: 99,
                product: productDummyData[3]
            },
            {
                orderId: "cmemm6jv7001htat8vmm3gxaf",
                productId: "cmemlz8640019tat8kz7emqca",
                quantity: 1,
                price: 199,
                product: productDummyData[4]
            }
        ],
        address: addressDummyData,
        user: dummyUserData
    }
];
const storesDummyData = [
    {
        id: "cmemkb98v0001tat8r1hiyxhn",
        userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "GreatStack",
        description: "GreatStack is the education marketplace where you can buy goodies related to coding and tech",
        username: "greatstack",
        address: "123 Maplewood Drive Springfield, IL 62704 USA",
        status: "approved",
        isActive: true,
        logo: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$gs_logo$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$gs_logo$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        email: "greatstack@example.com",
        contact: "+0 1234567890",
        createdAt: "2025-08-22T08:22:16.189Z",
        updatedAt: "2025-08-22T08:22:44.273Z",
        user: dummyUserData
    },
    {
        id: "cmemkqnzm000htat8u7n8cpte",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        name: "Happy Shop",
        description: "At Happy Shop, we believe shopping should be simple, smart, and satisfying. Whether you're hunting for the latest fashion trends, top-notch electronics, home essentials, or unique lifestyle products — we've got it all under one digital roof.",
        username: "happyshop",
        address: "3rd Floor, Happy Shop , New Building, 123 street , c sector , NY, US",
        status: "approved",
        isActive: true,
        logo: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$happy_store$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$happy_store$2e$webp__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        email: "happyshop@example.com",
        contact: "+0 123456789",
        createdAt: "2025-08-22T08:34:15.155Z",
        updatedAt: "2025-08-22T08:34:47.162Z",
        user: dummyUserData
    }
];
const dummyAdminDashboardData = {
    "orders": 6,
    "stores": 2,
    "products": 12,
    "revenue": "959.10",
    "allOrders": [
        {
            "createdAt": "2025-08-20T08:46:58.239Z",
            "total": 145.6
        },
        {
            "createdAt": "2025-08-22T08:46:21.818Z",
            "total": 97.2
        },
        {
            "createdAt": "2025-08-22T08:45:59.587Z",
            "total": 54.4
        },
        {
            "createdAt": "2025-08-23T09:15:03.929Z",
            "total": 214.2
        },
        {
            "createdAt": "2025-08-23T09:14:35.923Z",
            "total": 421.6
        },
        {
            "createdAt": "2025-08-23T11:44:29.713Z",
            "total": 26.1
        },
        {
            "createdAt": "2025-08-24T09:15:03.929Z",
            "total": 214.2
        },
        {
            "createdAt": "2025-08-24T09:14:35.923Z",
            "total": 421.6
        },
        {
            "createdAt": "2025-08-24T11:44:29.713Z",
            "total": 26.1
        },
        {
            "createdAt": "2025-08-24T11:56:29.713Z",
            "total": 36.1
        },
        {
            "createdAt": "2025-08-25T11:44:29.713Z",
            "total": 26.1
        },
        {
            "createdAt": "2025-08-25T09:15:03.929Z",
            "total": 214.2
        },
        {
            "createdAt": "2025-08-25T09:14:35.923Z",
            "total": 421.6
        },
        {
            "createdAt": "2025-08-25T11:44:29.713Z",
            "total": 26.1
        },
        {
            "createdAt": "2025-08-25T11:56:29.713Z",
            "total": 36.1
        },
        {
            "createdAt": "2025-08-25T11:30:29.713Z",
            "total": 110.1
        }
    ]
};
const dummyStoreDashboardData = {
    "ratings": dummyRatingsData,
    "totalOrders": 2,
    "totalEarnings": 636,
    "totalProducts": 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/features/product/productSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearProduct": (()=>clearProduct),
    "default": (()=>__TURBOPACK__default__export__),
    "setProduct": (()=>setProduct)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assets/assets.js [app-client] (ecmascript)");
;
;
const productSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'product',
    initialState: {
        list: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productDummyData"]
    },
    reducers: {
        setProduct: (state, action)=>{
            state.list = action.payload;
        },
        clearProduct: (state)=>{
            state.list = [];
        }
    }
});
const { setProduct, clearProduct } = productSlice.actions;
const __TURBOPACK__default__export__ = productSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/features/address/addressSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addAddress": (()=>addAddress),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/assets/assets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const addressSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'address',
    initialState: {
        list: [
            __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addressDummyData"]
        ]
    },
    reducers: {
        addAddress: (state, action)=>{
            state.list.push(action.payload);
        }
    }
});
const { addAddress } = addressSlice.actions;
const __TURBOPACK__default__export__ = addressSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/features/rating/ratingSlice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addRating": (()=>addRating),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const ratingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'rating',
    initialState: {
        ratings: []
    },
    reducers: {
        addRating: (state, action)=>{
            state.ratings.push(action.payload);
        }
    }
});
const { addRating } = ratingSlice.actions;
const __TURBOPACK__default__export__ = ratingSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/store.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "makeStore": (()=>makeStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$cart$2f$cartSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/features/cart/cartSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$product$2f$productSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/features/product/productSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$address$2f$addressSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/features/address/addressSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$rating$2f$ratingSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/features/rating/ratingSlice.js [app-client] (ecmascript)");
;
;
;
;
;
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: {
            cart: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$cart$2f$cartSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            product: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$product$2f$productSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            address: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$address$2f$addressSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            rating: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$features$2f$rating$2f$ratingSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/StoreProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StoreProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StoreProvider({ children }) {
    _s();
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeStore"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/StoreProvider.js",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_s(StoreProvider, "EtiU7pDwGhTDZwMnrKEqZbxjqXE=");
_c = StoreProvider;
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_2dfb7b59._.js.map