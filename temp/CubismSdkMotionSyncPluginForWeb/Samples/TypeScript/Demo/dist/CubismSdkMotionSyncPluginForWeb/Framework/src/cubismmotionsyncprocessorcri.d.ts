/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { csmVector } from '@framework/type/csmvector';
import { CubismMotionSyncEngineAnalysisResult } from './cubismmotionsyncengineanalysisresult';
import { CubismMotionSyncEngineMappingInfo } from './cubismmotionsyncenginemappinginfo';
import { MotionSyncContext } from './cubismmotionsyncutil';
import { ICubismMotionSyncEngine } from './icubismmotionsyncengine';
import { ICubismMotionSyncProcessor } from './icubismmotionsyncprocessor';
export declare class CubismMotionSyncProcessorCRI extends ICubismMotionSyncProcessor {
    getSampleRate(): number;
    getBitDepth(): number;
    Analyze(samples: csmVector<number>, beginIndex: number, blendRatio: number, smoothing: number, audioLevelEffectRatio: number, analysisResult: CubismMotionSyncEngineAnalysisResult): CubismMotionSyncEngineAnalysisResult;
    constructor(engine: ICubismMotionSyncEngine, contextHandle: MotionSyncContext, mappingList: csmVector<CubismMotionSyncEngineMappingInfo>, sampleRate: number, bitDepth: number);
    release(): void;
    private _sampleRate;
    private _bitDepth;
    private _analysisConfigNativePtr;
    private _analysisResultNativePtr;
}
import * as $ from './cubismmotionsyncprocessorcri';
export declare namespace Live2DCubismMotionSyncFramework {
    const CubismMotionSyncProcessorCRI: typeof $.CubismMotionSyncProcessorCRI;
    type CubismMotionSyncProcessorCRI = $.CubismMotionSyncProcessorCRI;
}
//# sourceMappingURL=cubismmotionsyncprocessorcri.d.ts.map