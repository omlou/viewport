(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.origin = factory());
})(this, (function () { 'use strict';

    function print() {
        console.log("Hello, World!");
    }

    return print;

}));
