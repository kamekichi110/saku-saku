/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { Option } from '@framework/live2dcubismframework';
import { LAppTextureManager } from '@cubismsdksamples/lapptexturemanager';
import { MotionSyncOption } from '@motionsyncframework/live2dcubismmotionsync';
import { LAppMotionSyncView } from './lappmotionsyncview';
export declare let s_instance: LAppMotionSyncDelegate;
export declare let frameBuffer: WebGLFramebuffer;
/**
 * アプリケーションクラス。
 * Cubism SDKの管理を行う。
 */
export declare class LAppMotionSyncDelegate {
    /**
     * クラスのインスタンス（シングルトン）を返す。
     * インスタンスが生成されていない場合は内部でインスタンスを生成する。
     *
     * @return クラスのインスタンス
     */
    static getInstance(): LAppMotionSyncDelegate;
    /**
     * クラスのインスタンス（シングルトン）を解放する。
     */
    static releaseInstance(): void;
    /**
     * APPに必要な物を初期化する。
     */
    initialize(): boolean;
    /**
     * Resize canvas and re-initialize view.
     */
    onResize(): void;
    /**
     * 解放する。
     */
    release(): void;
    /**
     * 実行処理。
     */
    run(): void;
    /**
     * シェーダーを登録する。
     */
    createShader(): WebGLProgram;
    /**
     * View情報を取得する。
     */
    getView(): LAppMotionSyncView;
    getTextureManager(): LAppTextureManager;
    /**
     * コンストラクタ
     */
    constructor();
    /**
     * Cubism SDKの初期化
     */
    initializeCubism(): void;
    /**
     * Resize the canvas to fill the screen.
     */
    private _resizeCanvas;
    _cubismOption: Option;
    _cubismMotionSyncOption: MotionSyncOption;
    _view: LAppMotionSyncView;
    _captured: boolean;
    _mouseX: number;
    _mouseY: number;
    _isEnd: boolean;
    _textureManager: LAppTextureManager;
}
//# sourceMappingURL=lappmotionsyncdelegate.d.ts.map