/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import 'whatwg-fetch';
import { ICubismModelSetting } from '@framework/icubismmodelsetting';
import { CubismIdHandle } from '@framework/id/cubismid';
import { CubismMatrix44 } from '@framework/math/cubismmatrix44';
import { CubismUserModel } from '@framework/model/cubismusermodel';
import { ACubismMotion, FinishedMotionCallback } from '@framework/motion/acubismmotion';
import { CubismMotionQueueEntryHandle } from '@framework/motion/cubismmotionqueuemanager';
import { csmMap } from '@framework/type/csmmap';
import { csmRect } from '@framework/type/csmrectf';
import { csmString } from '@framework/type/csmstring';
import { csmVector } from '@framework/type/csmvector';
import { LAppWavFileHandler } from './lappwavfilehandler';
/**
 * ユーザーが実際に使用するモデルの実装クラス<br>
 * モデル生成、機能コンポーネント生成、更新処理とレンダリングの呼び出しを行う。
 */
export declare class LAppModel extends CubismUserModel {
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
     * テクスチャユニットにテクスチャをロードする
     */
    private setupTextures;
    /**
     * レンダラを再構築する
     */
    reloadRenderer(): void;
    /**
     * 更新
     */
    update(): void;
    /**
     * 引数で指定したモーションの再生を開始する
     * @param group モーショングループ名
     * @param no グループ内の番号
     * @param priority 優先度
     * @param onFinishedMotionHandler モーション再生終了時に呼び出されるコールバック関数
     * @return 開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するisFinished()の引数で使用する。開始できない時は[-1]
     */
    startMotion(group: string, no: number, priority: number, onFinishedMotionHandler?: FinishedMotionCallback): CubismMotionQueueEntryHandle;
    /**
     * ランダムに選ばれたモーションの再生を開始する。
     * @param group モーショングループ名
     * @param priority 優先度
     * @param onFinishedMotionHandler モーション再生終了時に呼び出されるコールバック関数
     * @return 開始したモーションの識別番号を返す。個別のモーションが終了したか否かを判定するisFinished()の引数で使用する。開始できない時は[-1]
     */
    startRandomMotion(group: string, priority: number, onFinishedMotionHandler?: FinishedMotionCallback): CubismMotionQueueEntryHandle;
    /**
     * 引数で指定した表情モーションをセットする
     *
     * @param expressionId 表情モーションのID
     */
    setExpression(expressionId: string): void;
    /**
     * ランダムに選ばれた表情モーションをセットする
     */
    setRandomExpression(): void;
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
     * モーションデータをグループ名から一括でロードする。
     * モーションデータの名前は内部でModelSettingから取得する。
     *
     * @param group モーションデータのグループ名
     */
    preLoadMotionGroup(group: string): void;
    /**
     * すべてのモーションデータを解放する。
     */
    releaseMotions(): void;
    /**
     * 全ての表情データを解放する。
     */
    releaseExpressions(): void;
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
    _modelSetting: ICubismModelSetting;
    _modelHomeDir: string;
    _userTimeSeconds: number;
    _eyeBlinkIds: csmVector<CubismIdHandle>;
    _lipSyncIds: csmVector<CubismIdHandle>;
    _motions: csmMap<string, ACubismMotion>;
    _expressions: csmMap<string, ACubismMotion>;
    _hitArea: csmVector<csmRect>;
    _userArea: csmVector<csmRect>;
    _idParamAngleX: CubismIdHandle;
    _idParamAngleY: CubismIdHandle;
    _idParamAngleZ: CubismIdHandle;
    _idParamEyeBallX: CubismIdHandle;
    _idParamEyeBallY: CubismIdHandle;
    _idParamBodyAngleX: CubismIdHandle;
    _state: number;
    _expressionCount: number;
    _textureCount: number;
    _motionCount: number;
    _allMotionCount: number;
    _wavFileHandler: LAppWavFileHandler;
    _consistency: boolean;
}
//# sourceMappingURL=lappmodel.d.ts.map