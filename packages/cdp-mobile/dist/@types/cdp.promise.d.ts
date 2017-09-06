﻿/*!
 * cdp.promise.d.ts
 * This file is generated by the CDP package build process.
 *
 * Date: 2017-09-06T05:49:16.314Z
 */
/// <reference types="jquery" />
declare namespace CDP {
    /**
     * @en Extend interface of Native Promise definition<br>
     *     When you don't want to provide the cancel operation but you'd like to use jQuery utility, this interface is useful.
     * @ja Native Promise 拡張インターフェイス定義<br>
     *     キャンセルさせたくないが always() など jQuery method を提供したい場合に使用する.<br>
     */
    interface IPromiseBase<T> extends Promise<T> {
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): IPromiseBase<TResult1 | TResult2>;
        state: () => string;
        always: (alwaysCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...alwaysCallbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>) => IPromiseBase<T>;
        done: (doneCallback1?: JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[], ...doneCallbackN: Array<JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[]>) => IPromiseBase<T>;
        fail: (failCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...failCallbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>) => IPromiseBase<T>;
        progress: (progressCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...progressCallbackN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>) => IPromiseBase<T>;
    }
    /**
     * @es Cancelable Promise object interface definition
     * @ja キャンセル可能な Promise オブジェクトのインターフェイス定義
     */
    interface IPromise<T> extends IPromiseBase<T> {
        /**
         * @en cancel operation
         * @ja キャンセル処理
         *
         * @param info
         *  - `en` reject() argument
         *  - `ja` reject() の引数
         */
        abort(info?: object): void;
        /**
         * @en Promise object which does asynchronous processing on which this object depends.
         * @ja 依存する非同期処理を行う Promise オブジェクト
         */
        dependency?: IPromise<any>;
        /**
         * @en If the value set to true, the system fource call reject() when abort() is called from outside. <br>
         *     This setting is usually unnecessary.
         * @ja abort() コール時に自身の reject() もコールする場合 true を指定 <br>
         *     通常指定は不要
         */
        callReject?: boolean;
        /**
         * @en set IPromise which this object depends.
         * @ja 依存する IPromise を設定
         *
         * @see [[makePromise]]() example.
         */
        dependOn<U>(promise: IPromise<U> | JQueryXHR): IPromise<U>;
        then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): IPromise<TResult1 | TResult2>;
        state: () => string;
        always: (alwaysCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...alwaysCallbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>) => IPromise<T>;
        done: (doneCallback1?: JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[], ...doneCallbackN: Array<JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[]>) => IPromise<T>;
        fail: (failCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...failCallbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>) => IPromise<T>;
        progress: (progressCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...progressCallbackN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>) => IPromise<T>;
    }
    /**
     * @en alias of cancel callback for [[makePromise]] argument.
     * @ja [[makePromise]] に指定可能な cancel callback の alias.
     */
    type cancelCallback = (detail?: object) => void;
    /**
     * makePromise options
     */
    interface MakePromiseOptions {
        /**
         * @en dependent promise object.
         * @ja 依存する promise を設定
         */
        dependency?: IPromise<any>;
        /**
         * @en If the value set to true, the system fource call reject() when abort() is called from outside. <br>
         *     This setting is usually unnecessary.
         * @ja abort() コール時に自身の reject() もコールする場合 true を指定 <br>
         *     通常指定は不要
         */
        callReject?: boolean;
        /**
         * @en the function called when abort() calling.
         * @ja キャンセル時に呼ばれる関数
         */
        cancelCallback?: cancelCallback;
        /**
         * @en extends parameters. jQuery.Deferred.promise() argument.
         * @ja 拡張パラメータ. jQuery.Deferred.promise() に渡される.
         */
        [key: string]: any;
    }
    /**
     * @en make [[IPromise]] object.
     * @ja [[IPromise]] オブジェクトの作成
     *
     * @example <br>
     *
     * ```ts
     *  // pipe line operation
     *  function procPipeline(): IPromise<SomeData> {
     *      const df = $.Deferred();            // create jQueryDeferred instance.
     *      const promise = makePromise(df);    // create IPromise instance.
     *
     *      // async1(), async2(), async3() are async function and returned IPromise instance.
     *      promsie.dependOn(async1())
     *          .then(() => {
     *              return promsie.dependOn(async2());
     *          })
     *          .then(() => {
     *              return promsie.dependOn(async3());
     *          })
     *          .done(() => {
     *              df.resolve({ somedata: "hoge" });
     *          })
     *          .fail((error) => {
     *              df.reject(error);
     *          });
     *
     *      return promise;
     *  }
     *
     *  // client of pipe line operation
     *  function procCaller(): void {
     *      const promise = procPipeline();
     *      setTimeout(() => {
     *          promise.abort(); // The whole cancellation is possible by optional timing.
     *          // In whichever processing of async1(), async2() or async3(),
     *          // it can be canceled appropriately.
     *      });
     *  }
     *
     * ```
     *
     * @param df
     *  - `en` set the jQueryDeferred instance.
     *  - `ja` jQueryDeferred instance を指定
     * @param options
     *  - `en` set the extend object or cancel callback function.
     *  - `ja` jQueryPromise を拡張するオブジェクト or キャンセル時に呼び出される関数を指定
     * @returns
     */
    function makePromise<T>(df: JQueryDeferred<T>, options?: MakePromiseOptions | cancelCallback): IPromise<T>;
    /**
     * @en Wait for promise processing completing. <br>
     *     jQuery.when() returns control when one of promise is failed. <br>
     *     But this method wait for all promise objects operation including fail case.
     * @ja Promise オブジェクトの終了を待つ <br>
     *     jQuery.when() は失敗するとすぐに制御を返すのに対し、失敗も含めて待つ Promise オブジェクトを返却
     */
    function wait<T>(...deferreds: Promise<T>[]): IPromiseBase<T>;
    function wait<T>(...deferreds: JQueryGenericPromise<T>[]): IPromiseBase<T>;
    function wait<T>(...deferreds: T[]): IPromiseBase<T>;
    /**
     * @en Wait for race condition.<br>
     *     This have same semantics as ES2015 Promise.race().
     * @ja Promise オブジェクトの最初の完了を待つ <br>
     *     ES2015 Promise.race() と同等
     */
    function race<T>(...deferreds: Promise<T>[]): IPromiseBase<T>;
    function race<T>(...deferreds: JQueryGenericPromise<T>[]): IPromiseBase<T>;
    function race<T>(...deferreds: T[]): IPromiseBase<T>;
    /**
     * @en The class provides the operation for multiple [[IPromise]] object.
     * @ja 複数の [[IPromise]] を一括管理するクラス
     *
     * @example <br>
     *
     * ```ts
     *  let _prmsManager = new PromiseManager();
     *
     *  function procCaller(): void {
     *      // add parallel operations under the management.
     *      _prmsManager.add(async1);
     *      _prmsManager.add(async2);
     *      _prmsManager.add(async3);
     *  }
     *
     *  function allCancel(): void {
     *      // just one call. all parallel ops are canceled.
     *      _prmsManager.cancel();
     *  }
     * ```
     */
    class PromiseManager {
        private _pool;
        private _id;
        /**
         * @en add Promise object that has abort() method.
         * @ja abort() を持つ Promise オブジェクトを管理下に追加
         */
        add<T>(promise: IPromise<T> | JQueryXHR): IPromise<T>;
        /**
         * @en call abort() to under the management Promises.
         * @ja 管理対象の Promise に対して abort を発行
         *
         * @param info
         *  - `en` abort() argument
         *  - `ja` abort() に渡される引数
         * @returns
         *  - `en` The cancellation to cancel processing is prohibited.
         *  - `ja` キャンセル処理に対するキャンセルは不可
         */
        cancel(info?: object): IPromiseBase<any>;
        /**
         * @en get Promise objects as array. <br>
         *     only pending state object are returned.
         * @ja 管理対象の Promise を配列で取得 <br>
         *     pending 状態のオブジェクトのみが返る.
         */
        promises(): IPromise<any>[];
    }
    /**
     * @en Cancelable Promise class for ES2015 Promiise compatible.
     * @ja ES2015 Promise 互換のキャンセル可能な Promise オブジェクト
     */
    class PromiseConstructor<T> implements IPromise<T> {
        then: <TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null) => IPromise<TResult1 | TResult2>;
        catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null) => IPromiseBase<TResult>;
        state: () => string;
        always: (alwaysCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...alwaysCallbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>) => IPromise<T>;
        done: (doneCallback1?: JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[], ...doneCallbackN: Array<JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[]>) => IPromise<T>;
        fail: (failCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...failCallbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>) => IPromise<T>;
        progress: (progressCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...progressCallbackN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>) => IPromise<T>;
        private notify;
        private notifyWith;
        private reject;
        private rejectWith;
        private resolve;
        private resolveWith;
        abort: (info?: any) => void;
        dependOn: <U>(promise: IPromise<U> | JQueryXHR) => IPromise<U>;
        /**
         * @example <br>
         *
         * ```ts
         *  // override global "Promise" for using Cancelable Promise in this module scope.
         *  import { Promise } from "cdp";
         *
         *  function (): IPromise<SomeData> => {
         *      return new Promise((resolve, reject, dependOn) => {
         *      // async1(), async2() are async function and returned IPromise instance.
         *      dependOn(async1())
         *          .then(() => {
         *              return dependOn(async2());
         *          })
         *          .then(() => {
         *              resolve({ somedata: "hoge" });
         *          })
         *          .catch((error) => {
         *              reject(error);
         *          });
         *      });
         *  };
         * ```
         *
         * @param executor
         *  - `en` ES2015 Promise executer compatible with `dependOn` 3rd arg.
         *  - `ja` ES6 Promise 互換引数. (dependOn を第3引数に渡す)
         * @param options
         *  - `en` set the extend object or cancel callback function.
         *  - `ja` jQueryPromise を拡張するオブジェクト or キャンセル時に呼び出される関数を指定
         */
        constructor(executor: (resolve: (value?: T | PromiseLike<T>, ...additional: any[]) => void, reject?: (reason?: any, ...additional: any[]) => void, dependOn?: <U>(promise: IPromise<U> | JQueryXHR) => IPromise<U>) => void, options?: MakePromiseOptions | cancelCallback);
        static resolve<U>(value?: U | PromiseLike<U>): IPromise<U>;
        static reject<U>(reason?: any): IPromise<U>;
        static all<U>(...deferreds: Array<U | IPromise<U> | JQueryPromise<U>>): IPromiseBase<U>;
        static wait<U>(...deferreds: Array<U | IPromise<U> | JQueryPromise<U>>): IPromiseBase<U>;
        static race<U>(...deferreds: Array<U | IPromise<U> | JQueryPromise<U>>): IPromiseBase<U>;
    }
    const Promise: typeof PromiseConstructor;
}
declare module "cdp.promise" {
    export = CDP;
}
