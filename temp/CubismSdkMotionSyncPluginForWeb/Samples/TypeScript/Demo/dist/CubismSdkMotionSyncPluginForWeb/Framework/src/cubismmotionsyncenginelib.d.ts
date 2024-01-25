/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { csmString } from '@framework/type/csmstring';
import { EngineType, MappingInfoListMapper } from './cubismmotionsyncutil';
export type CubismMotionSyncContext = Live2DCubismMotionSyncCore.Context;
export type CubismMotionSyncContextConfig = unknown;
export declare class CubismMotionSyncEngineLib {
    getEngineVersion(): number;
    getEngineName(): csmString;
    initializeEngine(engineConfig: number): boolean;
    disposeEngine(): void;
    createContext(type: EngineType, contextConfig: CubismMotionSyncContextConfig, mappingInfoList: MappingInfoListMapper, mappingInfoListCount: number): CubismMotionSyncContext;
    clearContext(context: CubismMotionSyncContext): void;
    deleteContext(context: CubismMotionSyncContext): void;
    getRequireSampleCount(context: CubismMotionSyncContext): number;
    analyze(context: CubismMotionSyncContext, samples: Array<number>, samplesOffset: number, sampleCount: number, analysisResultPtr: number, analysisConfigPtr: number): boolean;
    isInitialized(): boolean;
    private _isEngineInitialized;
    private _analyzeSamplesPtr;
}
import * as $ from './cubismmotionsyncenginelib';
export declare namespace Live2DCubismMotionSyncFramework {
    type CubismMotionSyncContext = $.CubismMotionSyncContext;
    const CubismMotionSyncEngineLib: typeof $.CubismMotionSyncEngineLib;
    type CubismMotionSyncEngineLib = $.CubismMotionSyncEngineLib;
}
//# sourceMappingURL=cubismmotionsyncenginelib.d.ts.map