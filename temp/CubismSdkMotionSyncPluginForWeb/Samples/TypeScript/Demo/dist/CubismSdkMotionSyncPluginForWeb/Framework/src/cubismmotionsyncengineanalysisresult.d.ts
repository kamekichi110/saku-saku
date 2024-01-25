/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
export declare class CubismMotionSyncEngineAnalysisResult {
    constructor(valuesSize: number);
    copy(result: CubismMotionSyncEngineAnalysisResult): void;
    toNativeArray(forceConversion: boolean): Int32Array;
    releaseNativeArray(): void;
    release(): void;
    getValues(): Array<number>;
    getValuesCount(): number;
    getProcessedSampleCount(): number;
    setProcessedSampleCount(sampleCount: number): void;
    ConvertNativeAnalysisResult(nativeArrayPtr: number): void;
    private ConvertFromNativeResultValues;
    private ConvertFromNativeProcessedSampleCount;
    private deallocNativeArrayPtr;
    private _values;
    private _valuesCount;
    private _processedSampleCount;
    private _resultArray;
    private _resultArrayPtr;
}
import * as $ from './cubismmotionsyncengineanalysisresult';
export declare namespace Live2DCubismMotionSyncFramework {
    const CubismMotionSyncEngineAnalysisResult: typeof $.CubismMotionSyncEngineAnalysisResult;
    type CubismMotionSyncEngineAnalysisResult = $.CubismMotionSyncEngineAnalysisResult;
}
//# sourceMappingURL=cubismmotionsyncengineanalysisresult.d.ts.map