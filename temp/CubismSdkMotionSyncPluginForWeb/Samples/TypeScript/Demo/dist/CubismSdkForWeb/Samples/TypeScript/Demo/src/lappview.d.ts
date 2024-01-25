/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { CubismMatrix44 } from '@framework/math/cubismmatrix44';
import { CubismViewMatrix } from '@framework/math/cubismviewmatrix';
import { LAppSprite } from './lappsprite';
import { TouchManager } from './touchmanager';
/**
 * 描画クラス。
 */
export declare class LAppView {
    /**
     * コンストラクタ
     */
    constructor();
    /**
     * 初期化する。
     */
    initialize(): void;
    /**
     * 解放する
     */
    release(): void;
    /**
     * 描画する。
     */
    render(): void;
    /**
     * 画像の初期化を行う。
     */
    initializeSprite(): void;
    /**
     * タッチされた時に呼ばれる。
     *
     * @param pointX スクリーンX座標
     * @param pointY スクリーンY座標
     */
    onTouchesBegan(pointX: number, pointY: number): void;
    /**
     * タッチしているときにポインタが動いたら呼ばれる。
     *
     * @param pointX スクリーンX座標
     * @param pointY スクリーンY座標
     */
    onTouchesMoved(pointX: number, pointY: number): void;
    /**
     * タッチが終了したら呼ばれる。
     *
     * @param pointX スクリーンX座標
     * @param pointY スクリーンY座標
     */
    onTouchesEnded(pointX: number, pointY: number): void;
    /**
     * X座標をView座標に変換する。
     *
     * @param deviceX デバイスX座標
     */
    transformViewX(deviceX: number): number;
    /**
     * Y座標をView座標に変換する。
     *
     * @param deviceY デバイスY座標
     */
    transformViewY(deviceY: number): number;
    /**
     * X座標をScreen座標に変換する。
     * @param deviceX デバイスX座標
     */
    transformScreenX(deviceX: number): number;
    /**
     * Y座標をScreen座標に変換する。
     *
     * @param deviceY デバイスY座標
     */
    transformScreenY(deviceY: number): number;
    _touchManager: TouchManager;
    _deviceToScreen: CubismMatrix44;
    _viewMatrix: CubismViewMatrix;
    _programId: WebGLProgram;
    _back: LAppSprite;
    _gear: LAppSprite;
    _changeModel: boolean;
    _isClick: boolean;
}
//# sourceMappingURL=lappview.d.ts.map