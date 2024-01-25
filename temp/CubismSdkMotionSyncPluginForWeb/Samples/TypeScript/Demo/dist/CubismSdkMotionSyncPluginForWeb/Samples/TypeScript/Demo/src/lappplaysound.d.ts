/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { csmVector } from '@framework/type/csmvector';
import { LAppMotionSyncAudioManager } from './lappmotionsyncaudiomanager';
export declare class LAppPlaySound {
    /**
     * パスからの音声ファイルの読み込み
     *
     * @param path ファイルパス
     */
    loadFile(path: string, index: number): void;
    /**
     * 更新
     */
    update(): void;
    /**
     * コンテナの先頭から要素を削除して他の要素をシフトする
     *
     * @param buffer 変更するバッファ
     * @param size 削除する大きさ
     * @returns 変更後のバッファ
     */
    spliceBegin(buffer: csmVector<number>, size: number): csmVector<number>;
    /**
     * 先頭からsize分データを削除する
     *
     * @param index データを削除するバッファのインデックス
     * @param size 削除するデータの要素数
     */
    removeDataArrayByIndex(index: number, size: number): void;
    /**
     * 指定したインデックスの音声コンテキストが待機状態になっているかを判定する
     *
     * @param index 指定するインデックス
     * @returns 音声コンテキストが待機状態になっているか？
     */
    isSuspendedContextByIndex(index: number): boolean;
    /**
     * インデックスを使って音声を再生する。
     *
     * @param index インデックス
     */
    playByIndex(index: number): void;
    /**
     * インデックスを使って音声の再生を停止する。
     *
     * @param index インデックス
     */
    stopByIndex(index: number): void;
    /**
     * インデックスを使って音声が再生中か判定する。
     *
     * @param index インデックス
     * @returns 再生中か？
     */
    isPlayByIndex(index: number): boolean;
    getSoundBufferContext(): SoundBufferContext;
    constructor();
    release(): void;
    private _soundBufferContext;
}
export declare class SoundBufferContext {
    getBuffers(): csmVector<csmVector<number>>;
    getAudioManager(): LAppMotionSyncAudioManager;
    getUpdateSizes(): csmVector<number>;
    setUpdateSize(index: number, value: number): void;
    constructor(buffers?: csmVector<csmVector<number>>, audioManager?: LAppMotionSyncAudioManager, updateSizes?: csmVector<number>);
    release(): void;
    private _buffers;
    private _audioManager;
    private _updateSizes;
}
//# sourceMappingURL=lappplaysound.d.ts.map