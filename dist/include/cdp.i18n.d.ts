/*!
 * cdp.i18n.d.ts 
 * This file is generated by the CDP package build process.
 *
 * Date: 2017-05-19T14:41:46+0900
 */
﻿/// <reference path="require.d.ts" />
/// <reference path="jquery.d.ts" />
/// <reference path="i18next.d.ts" />
/// <reference path="cdp.core.d.ts" />
declare namespace CDP {
    /**
     * i18next へのダイレクトアクセス
     */
    let i18n: I18next.I18n;
    /**
     * @interface I18NOptions
     * @brief i18Next 設定用オプション
     */
    interface I18NOptions {
        fallbackResources?: {
            [lng: string]: {
                [ns: string]: string;
            };
        };
        preload?: string[];
        options?: I18next.Options;
    }
    /**
     * \~english
     * initialize i18next.
     *
     * \~japanese
     * i18next の初期化
     *
     * @private
     * @return {jQueryPromise}
     */
    function initializeI18N(options?: I18NOptions): JQueryPromise<any>;
}
declare module "cdp.i18n" {
    export = CDP;
}
