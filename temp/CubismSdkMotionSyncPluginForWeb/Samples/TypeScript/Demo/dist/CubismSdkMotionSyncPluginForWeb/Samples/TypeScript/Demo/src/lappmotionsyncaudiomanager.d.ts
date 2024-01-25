/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { csmVector } from '@framework/type/csmvector';
/**
 * WorkletProcessorモジュール用の型定義
 */
export interface LAppResponseObject {
    eventType: string;
    audioBuffer: Float32Array;
}
/**
 * 音声管理クラス
 * 音声読み込み、管理を行うクラス。
 */
export declare class LAppMotionSyncAudioManager {
    /**
     * コンストラクタ
     */
    constructor();
    /**
     * 解放する。
     */
    release(): void;
    /**
     * 音声読み込み
     *
     * @param fileName 読み込む音声ファイルパス名
     * @param audioContext 音声コンテキスト
     * @return 音声情報、読み込み失敗時はnullを返す
     */
    createAudioFromFile(fileName: string, index: number, audioContext: AudioContext, callback: (audioInfo: AudioInfo, callbackIndex: number) => void): void;
    /**
     * 音声の解放
     *
     * 配列に存在する音声全てを解放する。
     */
    clearAudios(): void;
    /**
     * 音声の解放
     *
     * 指定した音声コンテキストの音声を解放する。
     * @param audioContext 解放する音声コンテキスト
     */
    releaseAudioByAudioContext(audioContext: AudioContext): void;
    /**
     * 音声の解放
     *
     * 指定した名前の音声を解放する。
     * @param fileName 解放する音声ファイルパス
     */
    releaseAudioByFilePath(fileName: string): void;
    /**
     * 再生中かどうかを取得
     *
     * @param filePath 音声ファイルパス
     * @returns 指定した名前の音声が再生中か？
     */
    isPlayByFilePath(filePath: string): boolean;
    /**
     * 指定したファイルパスの音声を再生
     *
     * @param filePath 音声ファイルパス
     */
    playByFilePath(filePath: string): void;
    /**
     * 指定したファイルパスの音声の再生を停止
     *
     * @param filePath 音声ファイルパス
     */
    stopByFilePath(filePath: string): void;
    /**
     * 指定したファイルパスの音声の再生を一時停止
     *
     * @param filePath 音声ファイルパス
     */
    pauseByFilePath(filePath: string): void;
    /**
     * WorkletProcessorモジュールからデータを受け取るコールバック設定用の関数
     *
     * @param index 音声のインデックス
     * @param buffer データを入れるバッファ
     * @param updateSizes 更新サイズの配列
     */
    setOnMessageByIndex(index: number, buffer: csmVector<number>, updateSizes: csmVector<number>): void;
    /**
     * 再生中かどうかを取得
     *
     * @param index インデックス
     * @returns 指定したインデックスの音声が再生中か？
     */
    isPlayByIndex(index: number): boolean;
    /**
     * 指定したインデックスの音声を再生
     *
     * @param index インデックス
     */
    playByIndex(index: number): void;
    /**
     * 指定したインデックスの音声の再生を停止
     *
     * @param index インデックス
     */
    stopByIndex(index: number): void;
    /**
     * 指定したインデックスの音声の再生を一時停止
     *
     * @param index インデックス
     */
    pauseByIndex(index: number): void;
    _audios: csmVector<AudioInfo>;
}
/**
 * 音声情報構造体
 */
export declare class AudioInfo {
    audio: HTMLAudioElement;
    audioContext: AudioContext;
    source: MediaElementAudioSourceNode;
    workletNode: AudioWorkletNode;
    filePath: string;
    isPlay: boolean;
}
//# sourceMappingURL=lappmotionsyncaudiomanager.d.ts.map