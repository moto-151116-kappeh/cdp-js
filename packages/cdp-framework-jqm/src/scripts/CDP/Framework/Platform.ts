﻿/* tslint:disable:max-line-length */

namespace CDP.Framework {

    /**
     * platform 判定オブジェクト
     * [参考] https://w3g.jp/blog/tools/js_browser_sniffing
     */
    export let Platform = (() => {
        let ua = navigator.userAgent.toLowerCase();

        let majorVersion = function (browser: string): number {
            let version = ua.match(new RegExp("(" + browser + ")( |/)([0-9]+)"));
            if (!version || version.length < 4) {
                return 0;
            }
            return parseInt(version[3], 10);
        };

        return {
            ltIE6: typeof window.addEventListener === "undefined" && typeof (<any>document.documentElement).style.maxHeight === "undefined",
            ltIE7: typeof window.addEventListener === "undefined" && typeof document.querySelectorAll === "undefined",
            ltIE8: typeof window.addEventListener === "undefined" && typeof document.getElementsByClassName === "undefined",
            ltIE9: (<any>document).uniqueID && typeof window.matchMedia === "undefined",
            gtIE10: (<any>document).uniqueID && window.matchMedia,
            Trident: (<any>document).uniqueID,
            Gecko: "MozAppearance" in (<any>document.documentElement).style,
            Presto: global.opera,
            Blink: global.chrome,
            Webkit: typeof global.chrome === "undefined" && "WebkitAppearance" in (<any>document.documentElement).style,
            Touch: typeof global.ontouchstart !== "undefined",
            Mobile: typeof global.orientation !== "undefined",
            ltAd4_4: typeof global.orientation !== "undefined" && (typeof global.EventSource === "undefined" || 30 > majorVersion("chrome")),
            Pointer: global.navigator.pointerEnabled,
            MSPoniter: global.navigator.msPointerEnabled,
            Android: (ua.indexOf("android") !== -1),
            iOS: (ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1 || ua.indexOf("ipod") !== -1),
        };
    })();
}
