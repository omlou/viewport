(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.vp = factory());
})(this, (function () { 'use strict';

    const store = {
        docInfo: {}
    };
    function init(options) {
        if (!window) {
            console.warn('viewport startup time is incorrect.');
            return;
        }
        let { width = 375, mobile = true, fontSize = mobile ? "0.16rem" : "16rem", metaViewport = true, userScalable = "no", initialScale = "1.0", minimumScale = null, maximumScale = null } = options;
        store.options = { width, mobile, fontSize, metaViewport, userScalable, initialScale, minimumScale, maximumScale };
        /* 插入viewport标签 */
        if (metaViewport) {
            let meta = document.createElement("meta");
            meta.setAttribute("name", "viewport");
            let metaContent = ["width=device-width"];
            if (userScalable !== null)
                metaContent.push("user-scalable=" + userScalable);
            if (initialScale !== null)
                metaContent.push("initial-scale=" + initialScale);
            if (minimumScale !== null)
                metaContent.push("minimum-scale" + minimumScale);
            if (maximumScale !== null)
                metaContent.push("maximum-scale=" + maximumScale);
            meta.setAttribute("content", metaContent.join(","));
            let head = document.getElementsByTagName("head")[0];
            let oldvp = document.querySelector(`meta[name="viewport"]`);
            if (oldvp) {
                head.insertBefore(meta, oldvp);
                head.removeChild(oldvp);
            }
            else {
                let first = head.firstChild;
                head.insertBefore(meta, first);
            }
            store.docInfo.meta = meta;
        }
        /* 根据页面改变计算rem */
        let resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
        function recalc() {
            let docEl = document.documentElement;
            let { clientWidth } = docEl;
            if (!clientWidth)
                return;
            let pro = clientWidth / width;
            let rootSize = Number(mobile ? pro * 100 : pro).toFixed(4);
            docEl.style.fontSize = rootSize + "px";
            store.docInfo.rootSize = rootSize;
        }
        window.addEventListener(resizeEvt, recalc);
        /* 还原系统默认字体大小 */
        function resetSize() {
            document.body.style.fontSize = fontSize;
        }
        recalc();
        let observer = new MutationObserver((list) => {
            if (document.body) {
                resetSize();
                observer.disconnect();
            }
        });
        observer.observe(document.documentElement, { childList: true });
    }
    var cvp = {
        init,
        get info() {
            return store;
        }
    };

    return cvp;

}));
