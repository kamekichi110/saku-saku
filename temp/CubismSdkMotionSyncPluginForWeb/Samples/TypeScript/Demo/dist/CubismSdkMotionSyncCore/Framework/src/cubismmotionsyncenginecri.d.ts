/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { csmVector } from '@framework/type/csmvector';
import { csmString } from '@framework/type/csmstring';
import { CubismMotionSyncEngineVersion } from './cubismmotionsyncengineversion';
import { CubismMotionSyncEngineLib } from './cubismmotionsyncenginelib';
import { CubismMotionSyncEngineMappingInfo } from './cubismmotionsyncenginemappinginfo';
import { CubismMotionSyncProcessorCRI } from './cubismmotionsyncprocessorcri';
import { ICubismMotionSyncEngine } from './icubismmotionsyncengine';
import { ICubismMotionSyncProcessor } from './icubismmotionsyncprocessor';
import { EngineType } from './cubismmotionsyncutil';
export declare const SampleRateMin: number;
export declare const SampleRateMax: number;
export declare class CubismMotionSyncEngineCri extends ICubismMotionSyncEngine {
    CreateProcessor(cubismParameterCount: number, mappingInfoList: csmVector<CubismMotionSyncEngineMappingInfo>, sampleRate: number): CubismMotionSyncProcessorCRI;
    constructor(engineHandle: CubismMotionSyncEngineLib, type: EngineType, name: csmString, version: CubismMotionSyncEngineVersion);
    protected _processors: csmVector<ICubismMotionSyncProcessor>;
}
import * as $ from './motionsyncconfig_cri';
export declare namespace Live2DCubismMotionSyncFramework {
    const MotionSyncContextConfig_CRI: typeof $.MotionSyncContextConfig_CRI;
    type MotionSyncContextConfig_CRI = $.MotionSyncContextConfig_CRI;
}
//# sourceMappingURL=cubismmotionsyncenginecri.d.ts.map