﻿/// <reference path="../../../external/include/external.d.ts" />

module Config {

    var global = global || window;

    let baseUrl = /(.+\/)[^/]*#[^/]+/.exec(location.href);
    if (!baseUrl) {
        baseUrl = /(.+\/)/.exec(location.href);
    }

    /**
     * require.js 用設定値
     */
    let requireConfig = {
        //        baseUrl: baseUrl[1],
        baseUrl: baseUrl[1].split("tests")[0],

        urlArgs: "bust=" + Date.now(),

        paths: {
            // external modules
            "jquery": "external/jquery/scripts/jquery",
            "jquery.mobile": "external/jquery/scripts/jquery.mobile",
            "underscore": "external/underscore/scripts/underscore",
            "backbone": "external/backbone/scripts/backbone",
            "hogan": "external/hogan/scripts/hogan",
            "iscroll": "external/iscroll/scripts/iscroll-probe",

            // cdp module
            "cdp": "dist/cdp",

            // application
            "app": "tests/app/scripts/app",
        },

        shim: {
        },
    };

    // global export
    global.requirejs = requireConfig;

    /**
     * jQuery の設定
     */
    export function jquery(): void {
        $.support.cors = true;            // cross domain request を許可
        $.ajaxSetup({ cache: false });    // ajax の cache を無効化
    }

    /**
     * jQuery Mobile の設定
     * http://api.jquerymobile.com/global-config/
     */
    export function jquerymobile(): void {
        $.mobile.allowCrossDomainPages = true;
        $.mobile.defaultPageTransition = "none";
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
    }

    /**
     * i18next の設定
     * http://i18next.com/docs/options/#init-options
     */
    export let i18next = {
        modulePath: "external/i18next/scripts",
        options: {
            fallbackLng: "dev",
            ns: "translation",
            backend: {
                loadPath: "res/locales/{{ns}}-{{lng}}.json",
            }
        },
    };

    /**
     * CDP.lazyLoad() の sourceURL 自動挿入時に、
     * domain を指定しない場合には false を指定
     */
    export let autoDomainAssign = true;

    /**
     * コンフリクトを避けるために使用される文字列
     * CDP.Tools.Touche の touch event 定義に使用される
     */
    export let namespace = "cdp";

    /**
     * ビルド設定判定
     *
     * リリース版では '%% buildsetting %%' を '' (空文字列) に置換することにより
     *   !!("") (== false)
     * の設定が反映される
     */
    export let DEBUG = ((): boolean => {
        return !!("%% buildsetting %%");    //! リリース時には false が返る
    })();
}