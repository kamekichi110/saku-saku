/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { CubismMatrix44 } from '@framework/math/cubismmatrix44';
import { ACubismMotion } from '@framework/motion/acubismmotion';
import { csmVector } from '@framework/type/csmvector';
import { LAppModel } from './lappmodel';
export declare let s_instance: LAppLive2DManager;
/**
 * サンプルアプリケーションにおいてCubismModelを管理するクラス
 * モデル生成と破棄、タップイベントの処理、モデル切り替えを行う。
 */
export declare class LAppLive2DManager {
    /**
     * クラスのインスタンス（シングルトン）を返す。
     * インスタンスが生成されていない場合は内部でインスタンスを生成する。
     *
     * @return クラスのインスタンス
     */
    static getInstance(): LAppLive2DManager;
    /**
     * クラスのインスタンス（シングルトン）を解放する。
     */
    static releaseInstance(): void;
    /**
     * 現在のシーンで保持しているモデルを返す。
     *
     * @param no モデルリストのインデックス値
     * @return モデルのインスタンスを返す。インデックス値が範囲外の場合はNULLを返す。
     */
    getModel(no: number): LAppModel;
    /**
     * 現在のシーンで保持しているすべてのモデルを解放する
     */
    releaseAllModel(): void;
    /**
     * 画面をドラッグした時の処理
     *
     * @param x 画面のX座標
     * @param y 画面のY座標
     */
    onDrag(x: number, y: number): void;
    /**
     * 画面をタップした時の処理
     *
     * @param x 画面のX座標
     * @param y 画面のY座標
     */
    onTap(x: number, y: number): void;
    /**
     * 画面を更新するときの処理
     * モデルの更新処理及び描画処理を行う
     */
    onUpdate(): void;
    /**
     * 次のシーンに切りかえる
     * サンプルアプリケーションではモデルセットの切り替えを行う。
     */
    nextScene(): void;
    /**
     * シーンを切り替える
     * サンプルアプリケーションではモデルセットの切り替えを行う。
     */
    changeScene(index: number): void;
    setViewMatrix(m: CubismMatrix44): void;
    /**
     * コンストラクタ
     */
    constructor();
    _viewMatrix: CubismMatrix44;
    _models: csmVector<LAppModel>;
    _sceneIndex: number;
    _finishedMotion: (self: ACubismMotion) => void;
}
//# sourceMappingURL=lapplive2dmanager.d.ts.map