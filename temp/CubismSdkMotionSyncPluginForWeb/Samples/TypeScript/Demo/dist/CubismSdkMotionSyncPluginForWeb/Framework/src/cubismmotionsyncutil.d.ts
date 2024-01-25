/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { csmVector } from '@framework/type/csmvector';
import { CubismMotionSyncContext } from './cubismmotionsyncenginelib';
import { CubismMotionSyncEngineMappingInfo } from './cubismmotionsyncenginemappinginfo';
export declare enum EngineType {
    EngineType_Cri = 0,
    EngineType_Unknown = 1
}
export declare class MappingInfoListMapper {
    release(): void;
    setJObject(mappingInfoList: csmVector<CubismMotionSyncEngineMappingInfo>): void;
    ConvertObjectToNative(infoList: csmVector<CubismMotionSyncEngineMappingInfo>): void;
    deleteMappingInfoList(): void;
    getMappingInfoListPtr(): number;
    private _infoBufferList;
    private _mappingInfoListFirstPtr;
}
export declare class MotionSyncContext {
    constructor(context: CubismMotionSyncContext, mapper: MappingInfoListMapper, cubismParameterCount: number);
    release(): void;
    getContext(): CubismMotionSyncContext;
    getMapper(): MappingInfoListMapper;
    getCubismParameterCount(): number;
    private _context;
    private _mapper;
    private _cubismParameterCount;
}
import * as $ from './cubismmotionsyncutil';
export declare namespace Live2DCubismMotionSyncFramework {
    const MotionSyncContext: typeof $.MotionSyncContext;
    type MotionSyncContext = $.MotionSyncContext;
    const MappingInfoListMapper: typeof $.MappingInfoListMapper;
    type MappingInfoListMapper = $.MappingInfoListMapper;
}
//# sourceMappingURL=cubismmotionsyncutil.d.ts.map