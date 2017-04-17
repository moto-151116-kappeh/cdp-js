/*!
 * cdp.d.ts 
 * This file is generated by the CDP package build process.
 *
 * Date: 2017-04-17T12:43:02+0900
 */
﻿/// <reference path="cdp.core.d.ts" />
/// <reference path="cdp.promise.d.ts" />
/// <reference path="cdp.framework.jqm.d.ts" />
/// <reference path="cdp.tools.d.ts" />
/// <reference path="cdp.ui.listview.d.ts" />
/// <reference path="cdp.ui.jqm.d.ts" />
declare module "cdp/core/core" {
    import _core = require("cdp.core");
    export let global: any;
    export let coreInitialize: typeof _core.initialize;
    export let webRoot: string;
    export let Config: any;
    export type CoreInitOptions = _core.CoreInitOptions;
}
declare module "cdp/core/promise" {
    import _promise = require("cdp.promise");
    export let makePromise: typeof _promise.makePromise;
    export let wait: typeof _promise.wait;
    export type PromiseManager = CDP.PromiseManager;
    export let PromiseManager: typeof _promise.PromiseManager;
    export type IPromise<T> = CDP.IPromise<T>;
    export type Promise = CDP.Promise;
}
declare module "cdp/core/i18n" {
    import _i18n = require("cdp.i18n");
    export let i18n: I18next.I18n;
    export type I18NOptions = _i18n.I18NOptions;
}
declare module "cdp/core/framework.jqm" {
    export let waitForDeviceReady: typeof CDP.waitForDeviceReady;
    export let setBackButtonHandler: typeof CDP.setBackButtonHandler;
}
declare module "cdp/core" {
    export * from "cdp/core/core";
    export * from "cdp/core/promise";
    export * from "cdp/core/i18n";
    export * from "cdp/core/framework.jqm";
}
declare module "cdp/framework/jqm" {
    export type Patch = CDP.Framework.Patch;
    export let Patch: typeof CDP.Framework.Patch;
    export let Platform: {
        ltIE6: boolean;
        ltIE7: boolean;
        ltIE8: boolean;
        ltIE9: boolean;
        gtIE10: (mediaQuery: string) => MediaQueryList;
        Trident: any;
        Gecko: boolean;
        Presto: any;
        Blink: any;
        Webkit: boolean;
        Touch: boolean;
        Mobile: boolean;
        ltAd4_4: boolean;
        Pointer: any;
        MSPoniter: any;
        Android: boolean;
        iOS: boolean;
    };
    export let getOrientation: typeof CDP.Framework.getOrientation;
    export let toUrl: typeof CDP.Framework.toUrl;
    export let setBeforeRouteChangeHandler: typeof CDP.Framework.setBeforeRouteChangeHandler;
    export type Router = CDP.Framework.Router;
    export let Router: typeof CDP.Framework.Router;
    export let initialize: typeof CDP.Framework.initialize;
    export let isInitialized: typeof CDP.Framework.isInitialized;
    export let waitForInitialize: typeof CDP.Framework.waitForInitialize;
    export let registerOrientationChangedListener: typeof CDP.Framework.registerOrientationChangedListener;
    export let unregisterOrientationChangedListener: typeof CDP.Framework.unregisterOrientationChangedListener;
    export let setupEventHandlers: typeof CDP.Framework.setupEventHandlers;
    export let setActivePage: typeof CDP.Framework.setActivePage;
    export let getDefaultClickEvent: typeof CDP.Framework.getDefaultClickEvent;
    export type Page = CDP.Framework.Page;
    export let Page: typeof CDP.Framework.Page;
    export type Orientation = CDP.Framework.Orientation;
    export type IPage = CDP.Framework.IPage;
    export type ShowEventData = CDP.Framework.ShowEventData;
    export type HideEventData = CDP.Framework.HideEventData;
    export type FrameworkOptions = CDP.Framework.FrameworkOptions;
}
declare module "cdp/framework" {
    export * from "cdp/framework/jqm";
}
declare module "cdp/tools/tools" {
    export module Blob {
        let arrayBufferToBlob: typeof CDP.Tools.Blob.arrayBufferToBlob;
        let base64ToBlob: typeof CDP.Tools.Blob.base64ToBlob;
        let base64ToArrayBuffer: typeof CDP.Tools.Blob.base64ToArrayBuffer;
        let base64ToUint8Array: typeof CDP.Tools.Blob.base64ToUint8Array;
        let arrayBufferToBase64: typeof CDP.Tools.Blob.arrayBufferToBase64;
        let uint8ArrayToBase64: typeof CDP.Tools.Blob.uint8ArrayToBase64;
        let URL: any;
    }
    export type DateTime = CDP.Tools.DateTime;
    export let DateTime: typeof CDP.Tools.DateTime;
    export let abs: typeof CDP.Tools.abs;
    export let max: typeof CDP.Tools.max;
    export let min: typeof CDP.Tools.min;
    export let await: typeof CDP.Tools.await;
    export let toZeroPadding: typeof CDP.Tools.toZeroPadding;
    export let inherit: typeof CDP.Tools.inherit;
    export let mixin: typeof CDP.Tools.mixin;
    export let extend: typeof CDP.Tools.extend;
    export let getDevicePixcelRatio: typeof CDP.Tools.getDevicePixcelRatio;
    export let doWork: typeof CDP.Tools.doWork;
    export type Template = CDP.Tools.Template;
    export let Template: typeof CDP.Tools.Template;
    export type JST = CDP.Tools.JST;
}
declare module "cdp/tools" {
    export * from "cdp/tools/tools";
}
declare module "cdp/ui/listview" {
    export let ListViewGlobalConfig: typeof CDP.UI.ListViewGlobalConfig;
    export type LineProfile = CDP.UI.LineProfile;
    export let LineProfile: typeof CDP.UI.LineProfile;
    export type GroupProfile = CDP.UI.GroupProfile;
    export let GroupProfile: typeof CDP.UI.GroupProfile;
    export let composeViews: typeof CDP.UI.composeViews;
    export let deriveViews: typeof CDP.UI.deriveViews;
    export let mixinViews: typeof CDP.UI.mixinViews;
    export type StatusManager = CDP.UI.StatusManager;
    export let StatusManager: typeof CDP.UI.StatusManager;
    export type PageProfile = CDP.UI.PageProfile;
    export let PageProfile: typeof CDP.UI.PageProfile;
    export type ScrollerElement = CDP.UI.ScrollerElement;
    export let ScrollerElement: typeof CDP.UI.ScrollerElement;
    export let ScrollerNative: typeof CDP.UI.ScrollerNative;
    export type ScrollerIScroll = CDP.UI.ScrollerIScroll;
    export let ScrollerIScroll: typeof CDP.UI.ScrollerIScroll;
    export type ListItemView<TModel extends Backbone.Model> = CDP.UI.ListItemView<TModel>;
    export let ListItemView: typeof CDP.UI.ListItemView;
    export type ScrollManager = CDP.UI.ScrollManager;
    export let ScrollManager: typeof CDP.UI.ScrollManager;
    export type ListView<TModel extends Backbone.Model> = CDP.UI.ListView<TModel>;
    export let ListView: typeof CDP.UI.ListView;
    export type GroupListItemView<TModel extends Backbone.Model> = CDP.UI.GroupListItemView<TModel>;
    export let GroupListItemView: typeof CDP.UI.GroupListItemView;
    export type ExpandManager = CDP.UI.ExpandManager;
    export let ExpandManager: typeof CDP.UI.ExpandManager;
    export type ExpandableListView<TModel extends Backbone.Model> = CDP.UI.ExpandableListView<TModel>;
    export let ExpandableListView: typeof CDP.UI.ExpandableListView;
    export type ListViewOptions = CDP.UI.ListViewOptions;
    export type IListViewFramework = CDP.UI.IListViewFramework;
    export type IScroller = CDP.UI.IScroller;
    export type IScrollable = CDP.UI.IScrollable;
    export type IBackupRestore = CDP.UI.IBackupRestore;
    export type ViewConstructor = CDP.UI.ViewConstructor;
    export type IComposableView = CDP.UI.IComposableView;
    export type IComposableViewStatic = CDP.UI.IComposableViewStatic;
    export type UpdateHeightOptions = CDP.UI.UpdateHeightOptions;
    export type IListItemView = CDP.UI.IListItemView;
    export type BaseListItemView = CDP.UI.BaseListItemView;
    export type EnsureVisibleOptions = CDP.UI.EnsureVisibleOptions;
    export type IListView = CDP.UI.IListView;
    export type BaseListView = CDP.UI.BaseListView;
    export type IStatusManager = CDP.UI.IStatusManager;
    export type IExpandManager = CDP.UI.IExpandManager;
    export type IExpandableListView = CDP.UI.IExpandableListView;
    export type BaseExpandableListView = CDP.UI.BaseExpandableListView;
    export type ListItemViewOptions<TModel extends Backbone.Model> = CDP.UI.ListItemViewOptions<TModel>;
    export type ListViewConstructOptions<TModel extends Backbone.Model> = CDP.UI.ListViewConstructOptions<TModel>;
    export type GroupListItemViewOptions<TModel extends Backbone.Model> = CDP.UI.GroupListItemViewOptions<TModel>;
}
declare module "cdp/ui/jqm" {
    export type Theme = CDP.UI.Theme;
    export let Theme: typeof CDP.UI.Theme;
    export type PlatformTransition = CDP.UI.PlatformTransition;
    export type TransitionMap = CDP.UI.TransitionMap;
    export type ExtensionManager = CDP.UI.ExtensionManager;
    export let ExtensionManager: typeof CDP.UI.ExtensionManager;
    export type DomExtensionOptions = CDP.UI.DomExtensionOptions;
    export type DomExtension = CDP.UI.DomExtension;
    export module Toast {
        let LENGTH_SHORT: number;
        let LENGTH_LONG: number;
        let StyleBuilderDefault: typeof CDP.UI.Toast.StyleBuilderDefault;
        let show: typeof CDP.UI.Toast.show;
        type OffsetX = CDP.UI.Toast.OffsetX;
        type OffsetY = CDP.UI.Toast.OffsetY;
        type StyleBuilder = CDP.UI.Toast.StyleBuilder;
    }
    export type Dialog = CDP.UI.Dialog;
    export let Dialog: typeof CDP.UI.Dialog;
    export type DialogOptions = CDP.UI.DialogOptions;
    export let alert: typeof CDP.UI.alert;
    export let confirm: typeof CDP.UI.confirm;
    export let prompt: typeof CDP.UI.prompt;
    export type BaseHeaderView<TModel extends Backbone.Model> = CDP.UI.BaseHeaderView<TModel>;
    export let BaseHeaderView: typeof CDP.UI.BaseHeaderView;
    export type BaseHeaderViewOptions<TModel extends Backbone.Model> = CDP.UI.BaseHeaderViewOptions<TModel>;
    export type BasePage<TModel extends Backbone.Model> = CDP.UI.BasePage<TModel>;
    export let BasePage: typeof CDP.UI.BasePage;
    export type BasePageOptions<TModel extends Backbone.Model> = CDP.UI.BasePageOptions<TModel>;
    export type BasePageView = CDP.UI.BasePageView;
    export type PageContainerView<TModel extends Backbone.Model> = CDP.UI.PageContainerView<TModel>;
    export let PageContainerView: typeof CDP.UI.PageContainerView;
    export type PageContainerOptions<TModel extends Backbone.Model> = CDP.UI.PageContainerOptions<TModel>;
    export type PageView<TModel extends Backbone.Model> = CDP.UI.PageView<TModel>;
    export let PageView: typeof CDP.UI.PageView;
    export type PageViewConstructOptions<TModel extends Backbone.Model> = CDP.UI.PageViewConstructOptions<TModel>;
    export type PageListView<TModel extends Backbone.Model> = CDP.UI.PageListView<TModel>;
    export let PageListView: typeof CDP.UI.PageListView;
    export type PageListViewConstructOptions<TModel extends Backbone.Model> = CDP.UI.PageListViewConstructOptions<TModel>;
    export type PageExpandableListView<TModel extends Backbone.Model> = CDP.UI.PageExpandableListView<TModel>;
    export let PageExpandableListView: typeof CDP.UI.PageExpandableListView;
}
declare module "cdp/ui" {
    export * from "cdp/ui/listview";
    export * from "cdp/ui/jqm";
}
declare module "cdp" {
    export * from "cdp/core";
    import * as Framework from "cdp/framework";
    import * as Tools from "cdp/tools";
    import * as UI from "cdp/ui";
    export { Framework, Tools, UI };
    export let initialize: typeof CDP.Framework.initialize;
    export let isInitialized: typeof CDP.Framework.isInitialized;
    export let waitForInitialize: typeof CDP.Framework.waitForInitialize;
}
