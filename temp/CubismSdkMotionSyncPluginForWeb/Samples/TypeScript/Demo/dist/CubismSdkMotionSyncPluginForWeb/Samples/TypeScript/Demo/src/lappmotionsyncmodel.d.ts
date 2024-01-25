/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import 'whatwg-fetch';
import { CubismMatrix44 } from '@framework/math/cubismmatrix44';
import { CubismUserModel } from '@framework/model/cubismusermodel';
import { csmRect } from '@framework/type/csmrectf';
import { csmString } from '@framework/type/csmstring';
import { csmVector } from '@framework/type/csmvector';
import { CubismModelMotionSyncSettingJson } from '@motionsyncframework/cubismmodelmotionsyncsettingjson';
import { LAppPlaySound } from './lappplaysound';
import { CubismMotionSync } from '@motionsyncframework/live2dcubismmotionsync';
declare enum LoadStep {
    LoadAssets = 0,
    LoadModel = 1,
    WaitLoadModel = 2,
    LoadExpression = 3,
    WaitLoadExpression = 4,
    LoadPhysics = 5,
    WaitLoadPhysics = 6,
    LoadPose = 7,
    WaitLoadPose = 8,
    SetupEyeBlink = 9,
    SetupBreath = 10,
    LoadUserData = 11,
    WaitLoadUserData = 12,
    SetupEyeBlinkIds = 13,
    SetupLipSyncIds = 14,
    SetupLayout = 15,
    LoadMotionSync = 16,
    LoadMotion = 17,
    WaitLoadMotion = 18,
    CompleteInitialize = 19,
    CompleteSetupModel = 20,
    LoadTexture = 21,
    WaitLoadTexture = 22,
    CompleteSetup = 23
}
/**
 * ユーザーが実際に使用するモデルの実装クラス<br>
 * モデル生成、機能コンポーネント生成、更新処理とレンダリングの呼び出しを行う。
 */
export declare class LAppMotionSyncModel extends CubismUserModel {
    /**
     * model3.jsonが置かれたディレクトリとファイルパスからモデルを生成する
     * @param dir
     * @param fileName
     */
    loadAssets(dir: string, fileName: string): void;
    /**
     * model3.jsonからモデルを生成する。
     * model3.jsonの記述に従ってモデル生成、モーション、物理演算などのコンポーネント生成を行う。
     *
     * @param setting ICubismModelSettingのインスタンス
     */
    private setupModel;
    /**
     * モーションシンクデータの読み込み
     * @param buffer  physics3.jsonが読み込まれているバッファ
     * @param size    バッファのサイズ
     */
    private loadMotionSync;
    /**
     * テクスチャユニットにテクスチャをロードする
     */
    private setupTextures;
    /**
     * レンダラを再構築する
     */
    reloadRenderer(): void;
    /**
     * 音声ファイルリストから読み込みを行う。
     */
    loadFromSoundList(): void;
    /**
     * 現在の音声のコンテキストが待機状態かどうかを判定する
     *
     * @returns 現在の音声のコンテキストが待機状態か？
     */
    isSuspendedCurrentSoundContext(): boolean;
    /**
     * 現在の音声を再生する
     */
    playCurrentSound(): void;
    /**
     * 現在の音声を再生停止する
     */
    stopCurrentSound(): void;
    /**
     * 更新
     */
    update(): void;
    /**
     * イベントの発火を受け取る
     */
    motionEventFired(eventValue: csmString): void;
    /**
     * 当たり判定テスト
     * 指定ＩＤの頂点リストから矩形を計算し、座標をが矩形範囲内か判定する。
     *
     * @param hitArenaName  当たり判定をテストする対象のID
     * @param x             判定を行うX座標
     * @param y             判定を行うY座標
     */
    hitTest(hitArenaName: string, x: number, y: number): boolean;
    /**
     * モデルを描画する処理。モデルを描画する空間のView-Projection行列を渡す。
     */
    doDraw(): void;
    /**
     * モデルを描画する処理。モデルを描画する空間のView-Projection行列を渡す。
     */
    draw(matrix: CubismMatrix44): void;
    hasMocConsistencyFromFile(): Promise<boolean>;
    /**
     * コンストラクタ
     */
    constructor();
    release(): void;
    _modelSetting: CubismModelMotionSyncSettingJson;
    _modelHomeDir: string;
    _userTimeSeconds: number;
    _hitArea: csmVector<csmRect>;
    _userArea: csmVector<csmRect>;
    _state: LoadStep;
    _expressionCount: number;
    _textureCount: number;
    _motionCount: number;
    _allMotionCount: number;
    _consistency: boolean;
    _soundFileList: csmVector<csmString>;
    _soundIndex: number;
    _soundData: LAppPlaySound;
    _motionSync: CubismMotionSync;
}
export {};
//# sourceMappingURL=lappmotionsyncmodel.d.ts.map