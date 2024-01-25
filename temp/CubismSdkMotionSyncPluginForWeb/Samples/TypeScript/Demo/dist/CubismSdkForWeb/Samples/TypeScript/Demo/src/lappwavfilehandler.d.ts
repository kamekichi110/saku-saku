/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
export declare let s_instance: LAppWavFileHandler;
export declare class LAppWavFileHandler {
    /**
     * クラスのインスタンス（シングルトン）を返す。
     * インスタンスが生成されていない場合は内部でインスタンスを生成する。
     *
     * @return クラスのインスタンス
     */
    static getInstance(): LAppWavFileHandler;
    /**
     * クラスのインスタンス（シングルトン）を解放する。
     */
    static releaseInstance(): void;
    update(deltaTimeSeconds: number): boolean;
    start(filePath: string): void;
    getRms(): number;
    loadWavFile(filePath: string): boolean;
    getPcmSample(): number;
    releasePcmData(): void;
    constructor();
    _pcmData: Array<Float32Array>;
    _userTimeSeconds: number;
    _lastRms: number;
    _sampleOffset: number;
    _wavFileInfo: WavFileInfo;
    _byteReader: ByteReader;
    _loadFiletoBytes: (arrayBuffer: ArrayBuffer, length: number) => void;
}
export declare class WavFileInfo {
    constructor();
    _fileName: string;
    _numberOfChannels: number;
    _bitsPerSample: number;
    _samplingRate: number;
    _samplesPerChannel: number;
}
export declare class ByteReader {
    constructor();
    /**
     * @brief 8ビット読み込み
     * @return Csm::csmUint8 読み取った8ビット値
     */
    get8(): number;
    /**
     * @brief 16ビット読み込み（リトルエンディアン）
     * @return Csm::csmUint16 読み取った16ビット値
     */
    get16LittleEndian(): number;
    /**
     * @brief 24ビット読み込み（リトルエンディアン）
     * @return Csm::csmUint32 読み取った24ビット値（下位24ビットに設定）
     */
    get24LittleEndian(): number;
    /**
     * @brief 32ビット読み込み（リトルエンディアン）
     * @return Csm::csmUint32 読み取った32ビット値
     */
    get32LittleEndian(): number;
    /**
     * @brief シグネチャの取得と参照文字列との一致チェック
     * @param[in] reference 検査対象のシグネチャ文字列
     * @retval  true    一致している
     * @retval  false   一致していない
     */
    getCheckSignature(reference: string): boolean;
    _fileByte: ArrayBuffer;
    _fileDataView: DataView;
    _fileSize: number;
    _readOffset: number;
}
//# sourceMappingURL=lappwavfilehandler.d.ts.map