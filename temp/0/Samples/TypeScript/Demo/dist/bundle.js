/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../Framework/src/cubismmodelmotionsyncsettingjson.ts":
/*!******************************************************************!*\
  !*** ../../../Framework/src/cubismmodelmotionsyncsettingjson.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismModelMotionSyncSettingJson = exports.MotionSync = exports.FileReferences = void 0;
var cubismmodelsettingjson_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/cubismmodelsettingjson'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmstring_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmstring'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
exports.FileReferences = 'FileReferences';
exports.MotionSync = 'MotionSync';
var CubismModelMotionSyncSettingJson = /** @class */ (function (_super) {
    __extends(CubismModelMotionSyncSettingJson, _super);
    function CubismModelMotionSyncSettingJson(buffer, size) {
        var _this = _super.call(this, buffer, size) || this;
        _this._motionSyncFilePath = _this.GetJson()
            .getRoot()
            .getValueByString(exports.FileReferences)
            .getValueByString(exports.MotionSync)
            .getRawString();
        return _this;
    }
    CubismModelMotionSyncSettingJson.prototype.getMotionSyncFileName = function () {
        return this._motionSyncFilePath;
    };
    CubismModelMotionSyncSettingJson.prototype.getMotionSyncSoundFileList = function () {
        var list = new csmvector_1.csmVector();
        for (var index = 0; index < this.getMotionGroupCount(); index++) {
            var groupName = this.getMotionGroupName(index);
            for (var listIndex = 0; listIndex < this.getMotionCount(groupName); listIndex++) {
                list.pushBack(new csmstring_1.csmString(this.getMotionSoundFileName(groupName, listIndex)));
            }
        }
        return list;
    };
    return CubismModelMotionSyncSettingJson;
}(cubismmodelsettingjson_1.CubismModelSettingJson));
exports.CubismModelMotionSyncSettingJson = CubismModelMotionSyncSettingJson;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./cubismmodelmotionsyncsettingjson */ "../../../Framework/src/cubismmodelmotionsyncsettingjson.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.CubismModelMotionSyncSettingJson = $.CubismModelMotionSyncSettingJson;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismmotionsyncdata.ts":
/*!******************************************************!*\
  !*** ../../../Framework/src/cubismmotionsyncdata.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismMotionSyncDataSetting = exports.CubismMotionSyncDataMapping = exports.CubismMotionSyncDataMappingTarget = exports.CubismMotionSyncDataAudioParameter = exports.CubismMotionSyncDataCubismParameter = exports.CubismMotionSyncDataMeta = exports.CubismMotionSyncDataMetaDictionary = exports.CubismMotionSyncDataMappingType = exports.CubismMotionSyncDataUseCase = exports.CubismMotionSyncData = void 0;
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismdebug_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmotionsyncdatajson_1 = __webpack_require__(/*! ./cubismmotionsyncdatajson */ "../../../Framework/src/cubismmotionsyncdatajson.ts");
var cubismmotionsyncenginemappinginfo_1 = __webpack_require__(/*! ./cubismmotionsyncenginemappinginfo */ "../../../Framework/src/cubismmotionsyncenginemappinginfo.ts");
var CubismMotionSyncData = /** @class */ (function () {
    /**
     * コンストラクタ
     */
    function CubismMotionSyncData() {
        this._version = 0;
        this._meta = null;
        this._settings = null;
    }
    /**
     * インスタンスの作成
     * @param buffer    physics3.jsonが読み込まれているバッファ
     * @param size      バッファのサイズ
     * @return 作成されたインスタンス
     */
    CubismMotionSyncData.create = function (model, buffer, size) {
        var ret = new CubismMotionSyncData();
        ret.parse(model, buffer, size);
        return ret;
    };
    /**
     * インスタンスを破棄する
     * @param motionSyncData 破棄するインスタンス
     */
    CubismMotionSyncData.delete = function (motionSyncData) {
        if (motionSyncData != null) {
            motionSyncData.release();
            motionSyncData = null;
        }
    };
    /**
     * motionsync3.jsonをパースする。
     *
     * @param motionSyncJson  motionsync3.jsonが読み込まれているバッファ
     * @param size        バッファのサイズ
     */
    CubismMotionSyncData.prototype.parse = function (model, motionSyncJson, size) {
        var json = new cubismmotionsyncdatajson_1.CubismMotionSyncDataJson(motionSyncJson, size);
        if (json._json == null || model == null) {
            (0, cubismdebug_1.CubismLogWarning)('Failed to parse .motionsync3.json.');
            return;
        }
        this._version = json.getVersion();
        this._meta = json.getMeta();
        this._settings = new csmvector_1.csmVector();
        for (var index = 0; index < this._meta.settingCount; index++) {
            this._settings.pushBack(json.getSetting(index));
        }
        this._settingCount = this._settings.getSize();
        for (var index = 0; index < this._settings.getSize(); index++) {
            var cubismParameterList = this._settings.at(index).cubismParameterList;
            var parameterCount = cubismParameterList.getSize();
            for (var cubismParameterIndex = 0; cubismParameterIndex < parameterCount; cubismParameterIndex++) {
                var partIndex = parameterCount;
                for (var modelParameterIndex = 0; modelParameterIndex < model.getParameterCount(); modelParameterIndex++) {
                    if (model
                        .getParameterId(modelParameterIndex)
                        .isEqual(cubismParameterList.at(cubismParameterIndex).id)) {
                        partIndex = modelParameterIndex;
                        break;
                    }
                }
                cubismParameterList.at(cubismParameterIndex).parameterIndex = partIndex;
            }
        }
        json.release();
        json = void 0;
        json = null;
    };
    /**
     * デストラクタ相当の処理
     */
    CubismMotionSyncData.prototype.release = function () {
        this._version = void 0;
        this._meta = void 0;
        this._meta = null;
        this._settings = void 0;
        this._settings = null;
        this._settingCount = 0;
    };
    CubismMotionSyncData.prototype.getVersion = function () {
        return this._version;
    };
    CubismMotionSyncData.prototype.getMeta = function () {
        return this._meta;
    };
    CubismMotionSyncData.prototype.getSetting = function (index) {
        return this._settings.at(index);
    };
    CubismMotionSyncData.prototype.getSettingCount = function () {
        return this._settingCount;
    };
    CubismMotionSyncData.prototype.getMappingInfoList = function (index) {
        if (this._settings.getSize() <= index) {
            return null;
        }
        var mappingInfoList = new csmvector_1.csmVector();
        var setting = this.getSetting(index);
        for (var audioParamIndex = 0; audioParamIndex < setting.audioParameterList.getSize(); audioParamIndex++) {
            var audioParamId = setting.audioParameterList.at(audioParamIndex).id;
            var modelParamIds = new csmvector_1.csmVector();
            var modelParamValues = new csmvector_1.csmVector();
            for (var serchIndex = 0; serchIndex < setting.audioParameterList.getSize(); serchIndex++) {
                if (audioParamId.isEqual(setting.mappingList.at(serchIndex).audioId.s)) {
                    for (var cubismPramIndex = 0; cubismPramIndex < setting.cubismParameterList.getSize(); cubismPramIndex++) {
                        var target = setting.mappingList.at(serchIndex).targetList.at(cubismPramIndex);
                        modelParamIds.pushBack(target.id);
                        modelParamValues.pushBack(target.value);
                    }
                    break;
                }
            }
            var scale = setting.audioParameterList.at(audioParamIndex).scale;
            var enabled = setting.audioParameterList.at(audioParamIndex).enabled;
            mappingInfoList.pushBack(new cubismmotionsyncenginemappinginfo_1.CubismMotionSyncEngineMappingInfo(audioParamId, modelParamIds, modelParamValues, scale, enabled));
        }
        return mappingInfoList;
    };
    return CubismMotionSyncData;
}());
exports.CubismMotionSyncData = CubismMotionSyncData;
/**
 * モーションシンク設定のユースケース
 */
var CubismMotionSyncDataUseCase;
(function (CubismMotionSyncDataUseCase) {
    CubismMotionSyncDataUseCase[CubismMotionSyncDataUseCase["UseCase_Mouth"] = 0] = "UseCase_Mouth";
    CubismMotionSyncDataUseCase[CubismMotionSyncDataUseCase["UseCase_Unknown"] = 1] = "UseCase_Unknown";
})(CubismMotionSyncDataUseCase || (exports.CubismMotionSyncDataUseCase = CubismMotionSyncDataUseCase = {}));
/**
 * モーションシンク設定のマッピングタイプ
 */
var CubismMotionSyncDataMappingType;
(function (CubismMotionSyncDataMappingType) {
    CubismMotionSyncDataMappingType[CubismMotionSyncDataMappingType["MappingType_Shape"] = 0] = "MappingType_Shape";
    CubismMotionSyncDataMappingType[CubismMotionSyncDataMappingType["MappingType_Unknown"] = 1] = "MappingType_Unknown";
})(CubismMotionSyncDataMappingType || (exports.CubismMotionSyncDataMappingType = CubismMotionSyncDataMappingType = {}));
/**
 * モーションシンク設定のIdと名称
 */
var CubismMotionSyncDataMetaDictionary = /** @class */ (function () {
    function CubismMotionSyncDataMetaDictionary() {
    }
    return CubismMotionSyncDataMetaDictionary;
}());
exports.CubismMotionSyncDataMetaDictionary = CubismMotionSyncDataMetaDictionary;
/**
 * メタデータ
 */
var CubismMotionSyncDataMeta = /** @class */ (function () {
    function CubismMotionSyncDataMeta() {
    }
    return CubismMotionSyncDataMeta;
}());
exports.CubismMotionSyncDataMeta = CubismMotionSyncDataMeta;
/**
 * CubismParametarsに登録されているCubismParametar
 */
var CubismMotionSyncDataCubismParameter = /** @class */ (function () {
    function CubismMotionSyncDataCubismParameter() {
    }
    return CubismMotionSyncDataCubismParameter;
}());
exports.CubismMotionSyncDataCubismParameter = CubismMotionSyncDataCubismParameter;
/**
 * AudioParametersに登録されている音声の要素
 */
var CubismMotionSyncDataAudioParameter = /** @class */ (function () {
    function CubismMotionSyncDataAudioParameter() {
    }
    return CubismMotionSyncDataAudioParameter;
}());
exports.CubismMotionSyncDataAudioParameter = CubismMotionSyncDataAudioParameter;
/**
 * マッピングのターゲット
 */
var CubismMotionSyncDataMappingTarget = /** @class */ (function () {
    function CubismMotionSyncDataMappingTarget() {
    }
    return CubismMotionSyncDataMappingTarget;
}());
exports.CubismMotionSyncDataMappingTarget = CubismMotionSyncDataMappingTarget;
/**
 * マッピングデータ
 */
var CubismMotionSyncDataMapping = /** @class */ (function () {
    function CubismMotionSyncDataMapping() {
    }
    return CubismMotionSyncDataMapping;
}());
exports.CubismMotionSyncDataMapping = CubismMotionSyncDataMapping;
var CubismMotionSyncDataSetting = /** @class */ (function () {
    function CubismMotionSyncDataSetting() {
    }
    return CubismMotionSyncDataSetting;
}());
exports.CubismMotionSyncDataSetting = CubismMotionSyncDataSetting;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./cubismmotionsyncdata */ "../../../Framework/src/cubismmotionsyncdata.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.CubismMotionSyncData = $.CubismMotionSyncData;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismmotionsyncdatajson.ts":
/*!**********************************************************!*\
  !*** ../../../Framework/src/cubismmotionsyncdatajson.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismMotionSyncDataJson = void 0;
var cubismjson_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismjson'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmstring_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmstring'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismdebug_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmotionsyncutil_1 = __webpack_require__(/*! ./cubismmotionsyncutil */ "../../../Framework/src/cubismmotionsyncutil.ts");
var cubismmotionsyncdata_1 = __webpack_require__(/*! ./cubismmotionsyncdata */ "../../../Framework/src/cubismmotionsyncdata.ts");
// JSON keys
var Version = 'Version';
var Meta = 'Meta';
var SettingCount = 'SettingCount';
var Dictionary = 'Dictionary';
var Id = 'Id';
var Name = 'Name';
var Settings = 'Settings';
var AnalysisType = 'AnalysisType';
var UseCase = 'UseCase';
var CubismParameters = 'CubismParameters';
var Min = 'Min';
var Max = 'Max';
var Damper = 'Damper';
var Smooth = 'Smooth';
var AudioParameters = 'AudioParameters';
var Scale = 'Scale';
var Enabled = 'Enabled';
var Mappings = 'Mappings';
var Type = 'Type';
var Targets = 'Targets';
var Value = 'Value';
var PostProcessing = 'PostProcessing';
var BlendRatio = 'BlendRatio';
var Smoothing = 'Smoothing';
var SampleRate = 'SampleRate';
/**
 * motionsync3.jsonのコンテナ。
 */
var CubismMotionSyncDataJson = /** @class */ (function () {
    /**
     * コンストラクタ
     * @param buffer motionsync3.jsonが読み込まれているバッファ
     * @param size バッファのサイズ
     */
    function CubismMotionSyncDataJson(buffer, size) {
        this._json = cubismjson_1.CubismJson.create(buffer, size);
    }
    /**
     * デストラクタ相当の処理
     */
    CubismMotionSyncDataJson.prototype.release = function () {
        cubismjson_1.CubismJson.delete(this._json);
    };
    /**
     * バージョン情報を取得する
     * @return バージョン数
     */
    CubismMotionSyncDataJson.prototype.getVersion = function () {
        return this._json.getRoot().getValueByString(Version).toInt();
    };
    // --- Meta ---
    /**
     * モーションシンク設定のメタ情報を取得する
     * @return ーションシンク設定のメタ情報
     */
    CubismMotionSyncDataJson.prototype.getMeta = function () {
        var meta = null;
        meta = new cubismmotionsyncdata_1.CubismMotionSyncDataMeta();
        meta.settingCount = this.getSettingCount();
        meta.dictionary = new csmvector_1.csmVector();
        for (var index = 0; index < meta.settingCount; index++) {
            meta.dictionary.pushBack(this.getMetaDictionaryItem(index));
        }
        return meta;
    };
    /**
     * Metaのモーションシンク設定リストのアイテムを取得する
     * @param index アイテムのインデックス
     * @return モーションシンク設定リストのアイテム
     */
    CubismMotionSyncDataJson.prototype.getMetaDictionaryItem = function (index) {
        var dictionary = new cubismmotionsyncdata_1.CubismMotionSyncDataMetaDictionary();
        dictionary.id = new csmstring_1.csmString(this.getIdFromMeta(index));
        dictionary.name = new csmstring_1.csmString(this.getName(index));
        return dictionary;
    };
    /**
     * モーションシンク設定の数を取得する
     * @return モーションシンク設定の数
     */
    CubismMotionSyncDataJson.prototype.getSettingCount = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(SettingCount)
            .toInt();
    };
    /**
     * Metaからモーションシンク設定のIdを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @return モーションシンク設定のId
     */
    CubismMotionSyncDataJson.prototype.getIdFromMeta = function (settingIndex) {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(Dictionary)
            .getValueByIndex(settingIndex)
            .getValueByString(Id)
            .getString();
    };
    /**
     * モーションシンク設定の名前を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @return モーションシンク設定の名前
     */
    CubismMotionSyncDataJson.prototype.getName = function (settingIndex) {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(Dictionary)
            .getValueByIndex(settingIndex)
            .getValueByString(Name)
            .getString();
    };
    // --- Settings ---
    /**
     * Settingsからモーションシンク設定を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @return モーションシンク設定
     */
    CubismMotionSyncDataJson.prototype.getSetting = function (settingIndex) {
        var setting = new cubismmotionsyncdata_1.CubismMotionSyncDataSetting();
        // Id
        setting.id = new csmstring_1.csmString(this.getIdFromSettings(settingIndex));
        // AnalysisType
        var analysisType = this.getAnalysisType(settingIndex);
        switch (analysisType) {
            case 'CRI':
                setting.analysisType = cubismmotionsyncutil_1.EngineType.EngineType_Cri;
                break;
            default:
                (0, cubismdebug_1.CubismLogWarning)('Unknown Settings.AnalysisType.');
                setting.analysisType = cubismmotionsyncutil_1.EngineType.EngineType_Unknown;
                break;
        }
        // UseCase
        var useCase = this.getUseCase(settingIndex);
        switch (useCase) {
            case 'Mouth':
                setting.useCase = cubismmotionsyncdata_1.CubismMotionSyncDataUseCase.UseCase_Mouth;
                break;
            default:
                (0, cubismdebug_1.CubismLogWarning)('Unknown Settings.UseCase.');
                setting.useCase = cubismmotionsyncdata_1.CubismMotionSyncDataUseCase.UseCase_Unknown;
                break;
        }
        // CubismParametars
        var cubismParametarsCount = this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(CubismParameters)
            .getSize();
        setting.cubismParameterList =
            new csmvector_1.csmVector();
        for (var index = 0; index < cubismParametarsCount; index++) {
            setting.cubismParameterList.pushBack(this.getCubismParametarsElement(settingIndex, index));
        }
        // AudioParameters
        var audioParametersCount = this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(AudioParameters)
            .getSize();
        setting.audioParameterList =
            new csmvector_1.csmVector();
        for (var index = 0; index < audioParametersCount; index++) {
            setting.audioParameterList.pushBack(this.getAudioParametersElement(settingIndex, index));
        }
        // Mappings
        setting.mappingList = new csmvector_1.csmVector();
        for (var index = 0; index < audioParametersCount; index++) {
            setting.mappingList.pushBack(this.getMappingsElement(settingIndex, index, cubismParametarsCount));
        }
        // PostProcessing
        setting.blendRatio = this.getBlendRatio(settingIndex);
        setting.smoothing = this.getSmoothingFromPostProcessing(settingIndex);
        setting.sampleRate = this.getSampleRate(settingIndex);
        return setting;
    };
    /**
     * Settingsからモーションシンク設定のIdを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @return モーションシンク設定のId
     */
    CubismMotionSyncDataJson.prototype.getIdFromSettings = function (settingIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(Id)
            .getString();
    };
    /**
     * モーションシンク設定の音声解析タイプを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @return 音声解析タイプ
     */
    CubismMotionSyncDataJson.prototype.getAnalysisType = function (settingIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(AnalysisType)
            .getString();
    };
    /**
     * モーションシンク設定のユースケースを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @return ユースケース
     */
    CubismMotionSyncDataJson.prototype.getUseCase = function (settingIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(UseCase)
            .getString();
    };
    // --- CubismParametars ---
    /**
     * CubismParametarsに登録されているCubismParametarアイテムを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex CubismParametarsから取得したい要素のインデックス
     * @return CubismParametarアイテム
     */
    CubismMotionSyncDataJson.prototype.getCubismParametarsElement = function (settingIndex, elementIndex) {
        var cubismParametar = new cubismmotionsyncdata_1.CubismMotionSyncDataCubismParameter();
        cubismParametar.name = new csmstring_1.csmString(this.getNameFromCubismParameters(settingIndex, elementIndex));
        cubismParametar.id = new csmstring_1.csmString(this.getIdFromCubismParameters(settingIndex, elementIndex));
        cubismParametar.min = this.getMinFromCubismParameters(settingIndex, elementIndex);
        cubismParametar.max = this.getMaxFromCubismParameters(settingIndex, elementIndex);
        cubismParametar.damper = this.getDamperFromCubismParameters(settingIndex, elementIndex);
        cubismParametar.smooth = this.getSmoothFromCubismParameters(settingIndex, elementIndex);
        return cubismParametar;
    };
    /**
     * CubismParametarsに登録されているCubismParametarの名称を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex CubismParametarsから取得したい要素のインデックス
     * @return CubismParametarの名称
     */
    CubismMotionSyncDataJson.prototype.getNameFromCubismParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(CubismParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Name)
            .getString();
    };
    /**
     * CubismParametarsに登録されているCubismParametarのIdを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex CubismParametarsから取得したい要素のインデックス
     * @return CubismParametarのId
     */
    CubismMotionSyncDataJson.prototype.getIdFromCubismParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(CubismParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Id)
            .getString();
    };
    /**
     * CubismParametarsに登録されているCubismParametarの最小値を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex CubismParametarsから取得したい要素のインデックス
     * @return CubismParametarの最小値
     */
    CubismMotionSyncDataJson.prototype.getMinFromCubismParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(CubismParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Min)
            .toFloat();
    };
    /**
     * CubismParametarsに登録されているCubismParametarの最大値を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex CubismParametarsから取得したい要素のインデックス
     * @return CubismParametarの最大値
     */
    CubismMotionSyncDataJson.prototype.getMaxFromCubismParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(CubismParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Max)
            .toFloat();
    };
    /**
     * CubismParametarsに登録されているCubismParametarの減衰値を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex CubismParametarsから取得したい要素のインデックス
     * @return CubismParametarの減衰値
     */
    CubismMotionSyncDataJson.prototype.getDamperFromCubismParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(CubismParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Damper)
            .toFloat();
    };
    /**
     * CubismParametarsに登録されているCubismParametarのスムージング値を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex CubismParametarsから取得したい要素のインデックス
     * @return CubismParametarのスムージング値
     */
    CubismMotionSyncDataJson.prototype.getSmoothFromCubismParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(CubismParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Smooth)
            .toFloat();
    };
    // --- AudioParameters ---
    /**
     * AudioParametersに登録されている音声の要素を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex AudioParametersから取得したい要素のインデックス
     * @return 音声の要素
     */
    CubismMotionSyncDataJson.prototype.getAudioParametersElement = function (settingIndex, elementIndex) {
        var audioParameter = new cubismmotionsyncdata_1.CubismMotionSyncDataAudioParameter();
        audioParameter.name = new csmstring_1.csmString(this.getNameFromAudioParameters(settingIndex, elementIndex));
        audioParameter.id = new csmstring_1.csmString(this.getIdFromAudioParameters(settingIndex, elementIndex));
        audioParameter.min = this.getMinFromAudioParameters(settingIndex, elementIndex);
        audioParameter.max = this.getMaxFromAudioParameters(settingIndex, elementIndex);
        audioParameter.scale = this.getScaleFromAudioParameters(settingIndex, elementIndex);
        audioParameter.enabled = this.getEnabledFromAudioParameters(settingIndex, elementIndex);
        return audioParameter;
    };
    /**
     * AudioParametersに登録されている音声の要素の名称を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex AudioParametersから取得したい要素のインデックス
     * @return 音声の要素の名称
     */
    CubismMotionSyncDataJson.prototype.getNameFromAudioParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(AudioParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Name)
            .getString();
    };
    /**
     * AudioParametersに登録されている音声の要素のIdを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex AudioParametersから取得したい要素のインデックス
     * @return 音声の要素のId
     */
    CubismMotionSyncDataJson.prototype.getIdFromAudioParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(AudioParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Id)
            .getString();
    };
    /**
     * AudioParametersに登録されている音声の要素の最小値を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex AudioParametersから取得したい要素のインデックス
     * @return 音声の要素の最小値
     */
    CubismMotionSyncDataJson.prototype.getMinFromAudioParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(AudioParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Min)
            .toFloat();
    };
    /**
     * AudioParametersに登録されている音声の要素の最大値を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex AudioParametersから取得したい要素のインデックス
     * @return 音声の要素の最大値
     */
    CubismMotionSyncDataJson.prototype.getMaxFromAudioParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(AudioParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Max)
            .toFloat();
    };
    /**
     * AudioParametersに登録されている音声の要素のスケール値を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex AudioParametersから取得したい要素のインデックス
     * @return 音声の要素のスケール値
     */
    CubismMotionSyncDataJson.prototype.getScaleFromAudioParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(AudioParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Scale)
            .toFloat();
    };
    /**
     * AudioParametersに登録されている音声の要素の有効フラグを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex AudioParametersから取得したい要素のインデックス
     * @return 音声の要素の有効フラグ
     */
    CubismMotionSyncDataJson.prototype.getEnabledFromAudioParameters = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(AudioParameters)
            .getValueByIndex(elementIndex)
            .getValueByString(Enabled)
            .toBoolean();
    };
    // --- Mappings ---
    /**
     * Mappingsに登録されているマッピングデータを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex Mappingsから取得したい要素のインデックス
     * @return マッピングデータ
     */
    CubismMotionSyncDataJson.prototype.getMappingsElement = function (settingIndex, elementIndex, targetCount) {
        var mapping = new cubismmotionsyncdata_1.CubismMotionSyncDataMapping();
        var type = this.getMappingType(settingIndex, elementIndex);
        switch (type) {
            case 'Shape':
                mapping.type = cubismmotionsyncdata_1.CubismMotionSyncDataMappingType.MappingType_Shape;
                break;
            default:
                (0, cubismdebug_1.CubismLogWarning)('Unknown Mappings.Type.');
                mapping.type = cubismmotionsyncdata_1.CubismMotionSyncDataMappingType.MappingType_Unknown;
                break;
        }
        mapping.audioId = new csmstring_1.csmString(this.getAudioParamIdFromMappings(settingIndex, elementIndex));
        mapping.targetList = new csmvector_1.csmVector();
        for (var targetIndex = 0; targetIndex < targetCount; targetIndex++) {
            mapping.targetList.pushBack(this.getMappingTargetsElement(settingIndex, elementIndex, targetIndex));
        }
        return mapping;
    };
    /**
     * Mappingsに登録されているTargetsの要素を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param mappingIndex Mappingsから取得したい要素のインデックス
     * @param TargetsIndex Targetsから取得したい要素のインデックス
     * @return Targetsの要素
     */
    CubismMotionSyncDataJson.prototype.getMappingTargetsElement = function (settingIndex, mappingIndex, targetIndex) {
        var target = new cubismmotionsyncdata_1.CubismMotionSyncDataMappingTarget();
        target.id = new csmstring_1.csmString(this.getCubismIdFromMappingTarget(settingIndex, mappingIndex, targetIndex));
        target.value = this.getValueFromMappingTarget(settingIndex, mappingIndex, targetIndex);
        return target;
    };
    /**
     * マッピングのタイプを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex Mappingsから取得したい要素のインデックス
     * @return マッピングのタイプ
     */
    CubismMotionSyncDataJson.prototype.getMappingType = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(Mappings)
            .getValueByIndex(elementIndex)
            .getValueByString(Type)
            .getString();
    };
    /**
     * Mappingsに登録されている音声の要素のIdを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param elementIndex Mappingsから取得したい要素のインデックス
     * @return 音声の要素のId
     */
    CubismMotionSyncDataJson.prototype.getAudioParamIdFromMappings = function (settingIndex, elementIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(Mappings)
            .getValueByIndex(elementIndex)
            .getValueByString(Id)
            .getString();
    };
    /**
     * Targetsに登録されているCubismParameterのIdを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param mappingIndex Mappingsから取得したい要素のインデックス
     * @param TargetsIndex Targetsから取得したい要素のインデックス
     * @return CubismParameterのId
     */
    CubismMotionSyncDataJson.prototype.getCubismIdFromMappingTarget = function (settingIndex, mappingIndex, targetIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(Mappings)
            .getValueByIndex(mappingIndex)
            .getValueByString(Targets)
            .getValueByIndex(targetIndex)
            .getValueByString(Id)
            .getString();
    };
    /**
     * Targetsに登録されているCubismParameterの値を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @param mappingIndex Mappingsから取得したい要素のインデックス
     * @param TargetsIndex Targetsから取得したい要素のインデックス
     * @return CubismParameterの値
     */
    CubismMotionSyncDataJson.prototype.getValueFromMappingTarget = function (settingIndex, mappingIndex, targetIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(Mappings)
            .getValueByIndex(mappingIndex)
            .getValueByString(Targets)
            .getValueByIndex(targetIndex)
            .getValueByString(Value)
            .toFloat();
    };
    // --- PostProcessing ---
    /**
     * ブレンド率を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @return ブレンド率
     */
    CubismMotionSyncDataJson.prototype.getBlendRatio = function (settingIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(PostProcessing)
            .getValueByString(BlendRatio)
            .toFloat();
    };
    /**
     * スムージング値を取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @return スムージング値
     */
    CubismMotionSyncDataJson.prototype.getSmoothingFromPostProcessing = function (settingIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(PostProcessing)
            .getValueByString(Smoothing)
            .toInt();
    };
    /**
     * 設定フレームレートを取得する
     * @param settingIndex モーションシンク設定のインデックス
     * @return 設定フレームレート
     */
    CubismMotionSyncDataJson.prototype.getSampleRate = function (settingIndex) {
        return this._json
            .getRoot()
            .getValueByString(Settings)
            .getValueByIndex(settingIndex)
            .getValueByString(PostProcessing)
            .getValueByString(SampleRate)
            .toFloat();
    };
    return CubismMotionSyncDataJson;
}());
exports.CubismMotionSyncDataJson = CubismMotionSyncDataJson;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./cubismmotionsyncdatajson */ "../../../Framework/src/cubismmotionsyncdatajson.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.CubismMotionSyncDataJson = $.CubismMotionSyncDataJson;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismmotionsyncengineanalysisresult.ts":
/*!**********************************************************************!*\
  !*** ../../../Framework/src/cubismmotionsyncengineanalysisresult.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismMotionSyncEngineAnalysisResult = void 0;
var ToPointer = Live2DCubismMotionSyncCore.ToPointer;
var s_analysisResultStructSize = 3;
var CubismMotionSyncEngineAnalysisResult = /** @class */ (function () {
    function CubismMotionSyncEngineAnalysisResult(valuesSize) {
        this._values = new Array(valuesSize);
        this._valuesCount = valuesSize;
        this._processedSampleCount = 0;
    }
    CubismMotionSyncEngineAnalysisResult.prototype.copy = function (result) {
        this._values = new Array();
        for (var index = 0; index < result.getValues().length; index++) {
            this._values.push(result.getValues()[index]);
        }
        this._valuesCount = result.getValuesCount();
        this._processedSampleCount = 0;
    };
    CubismMotionSyncEngineAnalysisResult.prototype.toNativeArray = function (forceConversion) {
        // 強制的に新規作成しないのであれば既にあるものを返す
        if (!forceConversion && this._resultArray) {
            return this._resultArray;
        }
        if (this._resultArray) {
            this.releaseNativeArray();
        }
        this._resultArray = new Int32Array(this._valuesCount);
        this._resultArrayPtr = ToPointer.Malloc(this._resultArray.length * this._resultArray.BYTES_PER_ELEMENT);
        // Nativeポインタへの変換
        this._resultArray = ToPointer.ConvertAnalysisResultToInt32Array(this._resultArray, this._resultArrayPtr, this._valuesCount);
        return this._resultArray;
    };
    CubismMotionSyncEngineAnalysisResult.prototype.releaseNativeArray = function () {
        this.deallocNativeArrayPtr();
        this._resultArray = void 0;
    };
    CubismMotionSyncEngineAnalysisResult.prototype.release = function () {
        this._values = void 0;
        this._values = null;
        this._valuesCount = 0;
        this._processedSampleCount = 0;
    };
    CubismMotionSyncEngineAnalysisResult.prototype.getValues = function () {
        return this._values;
    };
    CubismMotionSyncEngineAnalysisResult.prototype.getValuesCount = function () {
        return this._valuesCount;
    };
    CubismMotionSyncEngineAnalysisResult.prototype.getProcessedSampleCount = function () {
        return this._processedSampleCount;
    };
    CubismMotionSyncEngineAnalysisResult.prototype.setProcessedSampleCount = function (sampleCount) {
        this._processedSampleCount = sampleCount;
    };
    CubismMotionSyncEngineAnalysisResult.prototype.ConvertNativeAnalysisResult = function (nativeArrayPtr) {
        this.ConvertFromNativeResultValues();
        this.ConvertFromNativeProcessedSampleCount(nativeArrayPtr);
    };
    CubismMotionSyncEngineAnalysisResult.prototype.ConvertFromNativeResultValues = function () {
        this._values = ToPointer.GetValuesFromAnalysisResult(this._resultArray[0], this._valuesCount);
    };
    CubismMotionSyncEngineAnalysisResult.prototype.ConvertFromNativeProcessedSampleCount = function (nativeArrayPtr) {
        this._processedSampleCount =
            ToPointer.GetProcessedSampleCountFromAnalysisResult(nativeArrayPtr + 8);
    };
    CubismMotionSyncEngineAnalysisResult.prototype.deallocNativeArrayPtr = function () {
        // 参照渡しになっている箇所だけ先にメモリ解放
        ToPointer.Free(this._resultArray[0]);
        // 配列本体を解放
        ToPointer.Free(this._resultArrayPtr);
        this._resultArrayPtr = 0;
    };
    return CubismMotionSyncEngineAnalysisResult;
}());
exports.CubismMotionSyncEngineAnalysisResult = CubismMotionSyncEngineAnalysisResult;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./cubismmotionsyncengineanalysisresult */ "../../../Framework/src/cubismmotionsyncengineanalysisresult.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.CubismMotionSyncEngineAnalysisResult = $.CubismMotionSyncEngineAnalysisResult;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismmotionsyncenginecontroller.ts":
/*!******************************************************************!*\
  !*** ../../../Framework/src/cubismmotionsyncenginecontroller.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismMotionSyncEngineController = void 0;
var csmmap_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmmap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismdebug_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmotionsyncenginecri_1 = __webpack_require__(/*! ./cubismmotionsyncenginecri */ "../../../Framework/src/cubismmotionsyncenginecri.ts");
var cubismmotionsyncenginelib_1 = __webpack_require__(/*! ./cubismmotionsyncenginelib */ "../../../Framework/src/cubismmotionsyncenginelib.ts");
var cubismmotionsyncengineversion_1 = __webpack_require__(/*! ./cubismmotionsyncengineversion */ "../../../Framework/src/cubismmotionsyncengineversion.ts");
var cubismmotionsyncutil_1 = __webpack_require__(/*! ./cubismmotionsyncutil */ "../../../Framework/src/cubismmotionsyncutil.ts");
var CubismMotionSyncEngineController = /** @class */ (function () {
    function CubismMotionSyncEngineController() {
    }
    CubismMotionSyncEngineController.initializeEngine = function (engineConfig) {
        var engineLib = new cubismmotionsyncenginelib_1.CubismMotionSyncEngineLib();
        var engineName = engineLib.getEngineName();
        var engineType = this.ToEngineType(engineName);
        var nativeVersion = engineLib.getEngineVersion();
        var version = new cubismmotionsyncengineversion_1.CubismMotionSyncEngineVersion(nativeVersion);
        if (!this._engineMap) {
            this._engineMap = new csmmap_1.csmMap();
        }
        if (this._engineMap.isExist(engineType)) {
            engineLib = void 0;
            engineLib = null;
            return null;
        }
        (0, cubismdebug_1.CubismLogInfo)(engineName.s + ' ' + version.toString());
        var isInitialized = engineLib.initializeEngine(engineConfig);
        if (!isInitialized) {
            engineLib = void 0;
            engineLib = null;
            return null;
        }
        var engine = null;
        switch (engineType) {
            case cubismmotionsyncutil_1.EngineType.EngineType_Cri:
                engine = new cubismmotionsyncenginecri_1.CubismMotionSyncEngineCri(engineLib, engineType, engineName, version);
                break;
            default:
                engineLib.disposeEngine();
                engineLib = void 0;
                engineLib = null;
                return null;
        }
        this._engineMap.appendKey(engineType);
        this._engineMap.setValue(engineType, engine);
        return engine;
    };
    CubismMotionSyncEngineController.getEngine = function (type) {
        if (this._engineMap && this._engineMap.isExist(type)) {
            return this._engineMap.getValue(type);
        }
        return null;
    };
    CubismMotionSyncEngineController.getEngines = function () {
        var vector = new csmvector_1.csmVector();
        for (var iter = this._engineMap.begin(); iter != this._engineMap.end(); iter.increment()) {
            vector.pushBack(iter.ptr().second);
        }
        return vector;
    };
    CubismMotionSyncEngineController.releaseEngineNotForce = function (engine) {
        this.releaseEngine(engine, false);
    };
    CubismMotionSyncEngineController.releaseEngine = function (engine, isForce) {
        engine.close(isForce);
    };
    CubismMotionSyncEngineController.deleteAllEngine = function () {
        var engines = this.getEngines();
        for (var index = 0; index < engines.getSize(); index++) {
            engines.at(index).close(true);
        }
        this._engineMap.clear();
    };
    CubismMotionSyncEngineController.ToEngineType = function (engineName) {
        var engineType = cubismmotionsyncutil_1.EngineType.EngineType_Unknown;
        if (engineName.s == 'Live2DCubismMotionSyncEngine_CRI') {
            engineType = cubismmotionsyncutil_1.EngineType.EngineType_Cri;
        }
        return engineType;
    };
    CubismMotionSyncEngineController.deleteAssociation = function (engine) {
        for (var iter = this._engineMap.begin(); iter != this._engineMap.end(); iter.increment()) {
            if (iter.ptr().first == engine.getType()) {
                engine = void 0;
                this._engineMap.erase(iter);
                break;
            }
        }
    };
    return CubismMotionSyncEngineController;
}());
exports.CubismMotionSyncEngineController = CubismMotionSyncEngineController;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./cubismmotionsyncenginecontroller */ "../../../Framework/src/cubismmotionsyncenginecontroller.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.CubismMotionSyncEngineController = $.CubismMotionSyncEngineController;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismmotionsyncenginecri.ts":
/*!***********************************************************!*\
  !*** ../../../Framework/src/cubismmotionsyncenginecri.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismMotionSyncEngineCri = exports.SampleRateMax = exports.SampleRateMin = void 0;
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismdebug_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmotionsyncprocessorcri_1 = __webpack_require__(/*! ./cubismmotionsyncprocessorcri */ "../../../Framework/src/cubismmotionsyncprocessorcri.ts");
var motionsyncconfig_cri_1 = __webpack_require__(/*! ./motionsyncconfig_cri */ "../../../Framework/src/motionsyncconfig_cri.ts");
var icubismmotionsyncengine_1 = __webpack_require__(/*! ./icubismmotionsyncengine */ "../../../Framework/src/icubismmotionsyncengine.ts");
var cubismmotionsyncutil_1 = __webpack_require__(/*! ./cubismmotionsyncutil */ "../../../Framework/src/cubismmotionsyncutil.ts");
exports.SampleRateMin = 16000;
exports.SampleRateMax = 128000;
var CubismMotionSyncEngineCri = /** @class */ (function (_super) {
    __extends(CubismMotionSyncEngineCri, _super);
    function CubismMotionSyncEngineCri(engineHandle, type, name, version) {
        var _this = _super.call(this, engineHandle, type, name, version) || this;
        _this._processors = new csmvector_1.csmVector();
        return _this;
    }
    CubismMotionSyncEngineCri.prototype.CreateProcessor = function (cubismParameterCount, mappingInfoList, sampleRate) {
        if (this.isClosed()) {
            (0, cubismdebug_1.CubismLogWarning)("[CubismMotionSyncEngineCri.CreateProcessor] Cubism MotionSync Engine is not started.'");
            return null;
        }
        if (mappingInfoList.getSize() < 1) {
            (0, cubismdebug_1.CubismLogWarning)("[CubismMotionSyncEngineCri.CreateProcessor] mappingInfoList size is invalid.'");
            return null;
        }
        if (!(exports.SampleRateMin <= sampleRate && sampleRate <= exports.SampleRateMax)) {
            (0, cubismdebug_1.CubismLogWarning)("[CubismMotionSyncEngineCri.CreateProcessor] sampleRate is invalid.'");
            return null;
        }
        var contextConfig = new motionsyncconfig_cri_1.MotionSyncContextConfig_CRI(sampleRate, icubismmotionsyncengine_1.DefaultAudioBitDepth);
        var mapper = new cubismmotionsyncutil_1.MappingInfoListMapper();
        mapper.setJObject(mappingInfoList);
        var context = this.getEngineHandle().createContext(this.getType(), contextConfig, mapper, mappingInfoList.getSize());
        var contextHandle = new cubismmotionsyncutil_1.MotionSyncContext(context, mapper, cubismParameterCount);
        var processor = new cubismmotionsyncprocessorcri_1.CubismMotionSyncProcessorCRI(this, contextHandle, mappingInfoList, sampleRate, icubismmotionsyncengine_1.DefaultAudioBitDepth);
        this._processors.pushBack(processor);
        return processor;
    };
    return CubismMotionSyncEngineCri;
}(icubismmotionsyncengine_1.ICubismMotionSyncEngine));
exports.CubismMotionSyncEngineCri = CubismMotionSyncEngineCri;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./motionsyncconfig_cri */ "../../../Framework/src/motionsyncconfig_cri.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.MotionSyncContextConfig_CRI = $.MotionSyncContextConfig_CRI;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismmotionsyncenginelib.ts":
/*!***********************************************************!*\
  !*** ../../../Framework/src/cubismmotionsyncenginelib.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismMotionSyncEngineLib = void 0;
var csmstring_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmstring'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismdebug_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmotionsyncutil_1 = __webpack_require__(/*! ./cubismmotionsyncutil */ "../../../Framework/src/cubismmotionsyncutil.ts");
var ToPointer = Live2DCubismMotionSyncCore.ToPointer;
var CubismMotionSyncEngineLib = /** @class */ (function () {
    function CubismMotionSyncEngineLib() {
    }
    CubismMotionSyncEngineLib.prototype.getEngineVersion = function () {
        return Live2DCubismMotionSyncCore.CubismMotionSyncEngine.csmMotionSyncGetEngineVersion();
    };
    CubismMotionSyncEngineLib.prototype.getEngineName = function () {
        return new csmstring_1.csmString(Live2DCubismMotionSyncCore.CubismMotionSyncEngine.csmMotionSyncGetEngineName());
    };
    CubismMotionSyncEngineLib.prototype.initializeEngine = function (engineConfig) {
        if (this.isInitialized()) {
            (0, cubismdebug_1.CubismLogInfo)('Cubism MotionSync Core already initialized.');
            return true;
        }
        this._isEngineInitialized = false;
        var result = Live2DCubismMotionSyncCore.CubismMotionSyncEngine.csmMotionSyncInitializeEngine(engineConfig);
        if (result == Live2DCubismMotionSyncCore.csmMotionSyncFalse) {
            (0, cubismdebug_1.CubismLogWarning)('Cubism MotionSync Core Initializing failed.');
            return false;
        }
        this._isEngineInitialized = true;
        return true;
    };
    CubismMotionSyncEngineLib.prototype.disposeEngine = function () {
        if (!this.isInitialized()) {
            (0, cubismdebug_1.CubismLogInfo)('Cubism MotionSync Core initialized yet.');
            return;
        }
        Live2DCubismMotionSyncCore.CubismMotionSyncEngine.csmMotionSyncDisposeEngine();
        this._isEngineInitialized = false;
    };
    CubismMotionSyncEngineLib.prototype.createContext = function (type, contextConfig, mappingInfoList, mappingInfoListCount) {
        if (!this.isInitialized()) {
            (0, cubismdebug_1.CubismLogInfo)('Cubism MotionSync Core initialized yet.');
            return null;
        }
        var context = new Live2DCubismMotionSyncCore.Context();
        // EngineTypeでConfigを分ける
        var contextConfigPtr;
        switch (type) {
            case cubismmotionsyncutil_1.EngineType.EngineType_Cri:
                {
                    // ポインタへ変換
                    var contextConfigCri = contextConfig;
                    contextConfigCri === null || contextConfigCri === void 0 ? void 0 : contextConfigCri.toNativeArray(true);
                    contextConfigPtr = contextConfigCri === null || contextConfigCri === void 0 ? void 0 : contextConfigCri.getNativePtr();
                }
                break;
            default:
                return null;
        }
        context.csmMotionSyncCreate(contextConfigPtr, mappingInfoList.getMappingInfoListPtr(), mappingInfoListCount);
        return context;
    };
    CubismMotionSyncEngineLib.prototype.clearContext = function (context) {
        if (!this.isInitialized()) {
            (0, cubismdebug_1.CubismLogInfo)('Cubism MotionSync Core initialized yet.');
            return;
        }
        context === null || context === void 0 ? void 0 : context.csmMotionSyncClear();
    };
    CubismMotionSyncEngineLib.prototype.deleteContext = function (context) {
        if (!this.isInitialized()) {
            (0, cubismdebug_1.CubismLogInfo)('Cubism MotionSync Core initialized yet.');
            return;
        }
        context === null || context === void 0 ? void 0 : context.csmMotionSyncDelete();
    };
    CubismMotionSyncEngineLib.prototype.getRequireSampleCount = function (context) {
        if (!this.isInitialized()) {
            (0, cubismdebug_1.CubismLogInfo)('Cubism MotionSync Core initialized yet.');
            return 0;
        }
        if (context == null) {
            (0, cubismdebug_1.CubismLogInfo)('context is null.');
            return 0;
        }
        var requireCount = context.csmMotionSyncGetRequireSampleCount();
        return requireCount;
    };
    CubismMotionSyncEngineLib.prototype.analyze = function (context, samples, samplesOffset, sampleCount, analysisResultPtr, analysisConfigPtr) {
        if (!this.isInitialized()) {
            (0, cubismdebug_1.CubismLogInfo)('Cubism MotionSync Core initialized yet.');
            return false;
        }
        if (context == null) {
            (0, cubismdebug_1.CubismLogInfo)('context is null.');
            return false;
        }
        var analyzeSamples = new Array(sampleCount);
        for (var index = 0; index < sampleCount; index++) {
            analyzeSamples[index] = samples[index + samplesOffset];
        }
        ToPointer.Free(this._analyzeSamplesPtr);
        this._analyzeSamplesPtr =
            ToPointer.ConvertNumberArrayToFloatArrayPtr(analyzeSamples);
        // samplesの先頭アドレス、Resultのアドレス、configのアドレスを渡す
        var result = context.csmMotionSyncAnalyze(this._analyzeSamplesPtr, sampleCount, analysisResultPtr, analysisConfigPtr);
        return result == Live2DCubismMotionSyncCore.csmMotionSyncTrue
            ? true
            : false;
    };
    CubismMotionSyncEngineLib.prototype.isInitialized = function () {
        return this._isEngineInitialized;
    };
    return CubismMotionSyncEngineLib;
}());
exports.CubismMotionSyncEngineLib = CubismMotionSyncEngineLib;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./cubismmotionsyncenginelib */ "../../../Framework/src/cubismmotionsyncenginelib.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.CubismMotionSyncEngineLib = $.CubismMotionSyncEngineLib;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismmotionsyncenginemappinginfo.ts":
/*!*******************************************************************!*\
  !*** ../../../Framework/src/cubismmotionsyncenginemappinginfo.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismMotionSyncEngineMappingInfo = exports.MappingInfoStructSize = void 0;
var cubismdebug_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var ToPointer = Live2DCubismMotionSyncCore.ToPointer;
exports.MappingInfoStructSize = 6;
var CubismMotionSyncEngineMappingInfo = /** @class */ (function () {
    function CubismMotionSyncEngineMappingInfo(audioParameterId, modelParameterIds, modelParameterValues, scale, enabled) {
        if (audioParameterId.getLength() == 0) {
            (0, cubismdebug_1.CubismLogError)('The audio parameter ID is null.');
        }
        if (modelParameterIds.getSize() == 0) {
            (0, cubismdebug_1.CubismLogError)('The array length of IDs differs from the array length of parameter values. Please make them the same');
        }
        if (modelParameterValues.getSize() == 0) {
            (0, cubismdebug_1.CubismLogError)('The model parameter ID array or the model parameter value array length is 0.');
        }
        if (!(0.1 <= scale && scale <= 10.0)) {
            (0, cubismdebug_1.CubismLogError)('The value of scale is incorrect. The value is limited to between 0.1 and 10.0.');
        }
        this._audioParameterId = audioParameterId;
        this._modelParameterIds = modelParameterIds;
        this._modelParameterValues = modelParameterValues;
        this._scale = scale;
        this._enabled = Number(enabled);
    }
    CubismMotionSyncEngineMappingInfo.prototype.toNativeArray = function (forceConversion) {
        // 強制的に新規作成しないのであれば既にあるものを返す
        if (!forceConversion && this._nativeArray) {
            return this._nativeArray;
        }
        if (this._nativeArray) {
            this.releaseNativeArray();
        }
        this._nativeArray = new Float32Array(exports.MappingInfoStructSize);
        this._nativeArrayPtr = ToPointer.Malloc(this._nativeArray.length * this._nativeArray.BYTES_PER_ELEMENT);
        var mappingInfoModelParameterIds = new Array();
        var mappingInfoModelParameterValues = new Array();
        for (var mappingInfoIndex = 0; mappingInfoIndex < this._modelParameterIds.getSize(); mappingInfoIndex++) {
            // 直接 csmStringとstringは変換できないので一度確保する
            mappingInfoModelParameterIds.push(this._modelParameterIds.at(mappingInfoIndex).s);
            // 事故防止のためIds同様に一度確保する
            mappingInfoModelParameterValues.push(this._modelParameterValues.at(mappingInfoIndex));
        }
        // Nativeポインタへの変換
        this._nativeArray = ToPointer.ConvertMappingInfoCriToFloat32Array(this._nativeArray, this._nativeArrayPtr, this._audioParameterId.s, mappingInfoModelParameterIds, mappingInfoModelParameterValues, this._modelParameterIds.getSize(), this._scale, this._enabled);
        return this._nativeArray;
    };
    CubismMotionSyncEngineMappingInfo.prototype.releaseNativeArray = function () {
        this.deallocNativeArrayPtr();
        this._nativeArray = void 0;
    };
    CubismMotionSyncEngineMappingInfo.prototype.getAudioParameterId = function () {
        return this._audioParameterId;
    };
    CubismMotionSyncEngineMappingInfo.prototype.getModelParameterIds = function () {
        return this._modelParameterIds;
    };
    CubismMotionSyncEngineMappingInfo.prototype.getModelParameterValues = function () {
        return this._modelParameterValues;
    };
    CubismMotionSyncEngineMappingInfo.prototype.getScale = function () {
        return this._scale;
    };
    CubismMotionSyncEngineMappingInfo.prototype.getEnabled = function () {
        return this._enabled;
    };
    CubismMotionSyncEngineMappingInfo.prototype.deallocNativeArrayPtr = function () {
        // 参照渡しになっている箇所だけ先にメモリ解放
        ToPointer.Free(this._nativeArray[0]);
        ToPointer.Free(this._nativeArray[1]);
        ToPointer.Free(this._nativeArray[2]);
        // 配列本体を解放
        ToPointer.Free(this._nativeArrayPtr);
        this._nativeArrayPtr = 0;
    };
    return CubismMotionSyncEngineMappingInfo;
}());
exports.CubismMotionSyncEngineMappingInfo = CubismMotionSyncEngineMappingInfo;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./cubismmotionsyncenginemappinginfo */ "../../../Framework/src/cubismmotionsyncenginemappinginfo.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.CubismMotionSyncEngineMappingInfo = $.CubismMotionSyncEngineMappingInfo;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismmotionsyncengineversion.ts":
/*!***************************************************************!*\
  !*** ../../../Framework/src/cubismmotionsyncengineversion.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismMotionSyncEngineVersion = void 0;
var CubismMotionSyncEngineVersion = /** @class */ (function () {
    function CubismMotionSyncEngineVersion(rawVersion) {
        this._versionNumber = rawVersion;
        this._major = (this._versionNumber & 0xff000000) >> 24;
        this._minor = (this._versionNumber & 0x00ff0000) >> 16;
        this._patch = this._versionNumber & 0x0000ffff;
    }
    CubismMotionSyncEngineVersion.prototype.getMajor = function () {
        return this._major;
    };
    CubismMotionSyncEngineVersion.prototype.getMinor = function () {
        return this._minor;
    };
    CubismMotionSyncEngineVersion.prototype.getPatch = function () {
        return this._patch;
    };
    CubismMotionSyncEngineVersion.prototype.toString = function () {
        return (this._major +
            '.' +
            this._minor +
            '.' +
            this._patch +
            '(' +
            this._versionNumber +
            ')');
    };
    return CubismMotionSyncEngineVersion;
}());
exports.CubismMotionSyncEngineVersion = CubismMotionSyncEngineVersion;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./cubismmotionsyncengineversion */ "../../../Framework/src/cubismmotionsyncengineversion.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.CubismMotionSyncEngineVersion = $.CubismMotionSyncEngineVersion;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismmotionsyncprocessorcri.ts":
/*!**************************************************************!*\
  !*** ../../../Framework/src/cubismmotionsyncprocessorcri.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismMotionSyncProcessorCRI = void 0;
var cubismdebug_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var icubismmotionsyncprocessor_1 = __webpack_require__(/*! ./icubismmotionsyncprocessor */ "../../../Framework/src/icubismmotionsyncprocessor.ts");
var motionsyncconfig_cri_1 = __webpack_require__(/*! ./motionsyncconfig_cri */ "../../../Framework/src/motionsyncconfig_cri.ts");
var ToPointer = Live2DCubismMotionSyncCore.ToPointer;
var CubismMotionSyncProcessorCRI = /** @class */ (function (_super) {
    __extends(CubismMotionSyncProcessorCRI, _super);
    function CubismMotionSyncProcessorCRI(engine, contextHandle, mappingList, sampleRate, bitDepth) {
        var _this = _super.call(this, engine, contextHandle, mappingList) || this;
        _this._sampleRate = sampleRate;
        _this._bitDepth = bitDepth;
        return _this;
    }
    CubismMotionSyncProcessorCRI.prototype.getSampleRate = function () {
        return this._sampleRate;
    };
    CubismMotionSyncProcessorCRI.prototype.getBitDepth = function () {
        return this._bitDepth;
    };
    CubismMotionSyncProcessorCRI.prototype.Analyze = function (samples, beginIndex, blendRatio, smoothing, audioLevelEffectRatio, analysisResult) {
        var samplesSize = samples.getSize();
        if (samplesSize <
            this.getEngine()
                .getEngineHandle()
                .getRequireSampleCount(this.getContextHandle().getContext())) {
            (0, cubismdebug_1.CubismLogError)('The argument is invalid. Please check that the samples is the correct value.');
            return null;
        }
        if (!(0 <= beginIndex && beginIndex < samples.getSize())) {
            (0, cubismdebug_1.CubismLogError)('The value of beginIndex is incorrect. It should be less than the length of samples.');
            return null;
        }
        if (!(0.0 <= blendRatio && blendRatio <= 1.0)) {
            (0, cubismdebug_1.CubismLogError)('The value of blend ratio is incorrect. The value is limited to between 0.0 and 1.0.');
            return null;
        }
        if (!(1 <= smoothing && smoothing <= 100)) {
            (0, cubismdebug_1.CubismLogError)('The value of smoothing is incorrect. The value is limited to between 1 and 100.');
            return null;
        }
        if (!(0.0 <= audioLevelEffectRatio && audioLevelEffectRatio <= 1.0)) {
            (0, cubismdebug_1.CubismLogError)('The value of audio level effect ratio is incorrect. The value is limited to between 0.0 and 1.0.');
            return null;
        }
        if (!analysisResult) {
            (0, cubismdebug_1.CubismLogError)('The result instance is null.');
            return null;
        }
        var analysisConfig = new motionsyncconfig_cri_1.MotionSyncAnalysisConfig_CRI(blendRatio, smoothing, audioLevelEffectRatio);
        var analysisConfigBuffer = analysisConfig.toNativeArray(false);
        // ポインタを生成
        if (!this._analysisConfigNativePtr || this._analysisConfigNativePtr == 0) {
            this._analysisConfigNativePtr = ToPointer.Malloc(analysisConfigBuffer.length);
        }
        ToPointer.AddValuePtrFloat(this._analysisConfigNativePtr, 0, analysisConfigBuffer[0]);
        ToPointer.AddValuePtrInt32(this._analysisConfigNativePtr, 4, analysisConfigBuffer[1]);
        ToPointer.AddValuePtrFloat(this._analysisConfigNativePtr, 8, analysisConfigBuffer[2]);
        var analysisResultBuffer = analysisResult.toNativeArray(false);
        // ポインタを生成
        if (!this._analysisResultNativePtr || this._analysisResultNativePtr == 0) {
            this._analysisResultNativePtr = ToPointer.Malloc(analysisResultBuffer.length * analysisResultBuffer.BYTES_PER_ELEMENT);
        }
        ToPointer.AddValuePtrInt32(this._analysisResultNativePtr, 0, analysisResultBuffer[0]);
        ToPointer.AddValuePtrInt32(this._analysisResultNativePtr, 4, analysisResultBuffer[1]);
        ToPointer.AddValuePtrInt32(this._analysisResultNativePtr, 8, analysisResultBuffer[2]);
        var ret = this.getEngine()
            .getEngineHandle()
            .analyze(this.getContextHandle().getContext(), samples._ptr, beginIndex, samplesSize - beginIndex, this._analysisResultNativePtr, this._analysisConfigNativePtr);
        if (!ret) {
            (0, cubismdebug_1.CubismLogError)('Failed to analyze.');
            return null;
        }
        // データを引っ張ってくる。
        analysisResult.ConvertNativeAnalysisResult(this._analysisResultNativePtr);
        return analysisResult;
    };
    CubismMotionSyncProcessorCRI.prototype.release = function () {
        ToPointer.Free(this._analysisConfigNativePtr);
        this._analysisConfigNativePtr = 0;
        ToPointer.Free(this._analysisResultNativePtr);
        this._analysisResultNativePtr = 0;
    };
    return CubismMotionSyncProcessorCRI;
}(icubismmotionsyncprocessor_1.ICubismMotionSyncProcessor));
exports.CubismMotionSyncProcessorCRI = CubismMotionSyncProcessorCRI;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./cubismmotionsyncprocessorcri */ "../../../Framework/src/cubismmotionsyncprocessorcri.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.CubismMotionSyncProcessorCRI = $.CubismMotionSyncProcessorCRI;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismmotionsyncutil.ts":
/*!******************************************************!*\
  !*** ../../../Framework/src/cubismmotionsyncutil.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.MotionSyncContext = exports.MappingInfoListMapper = exports.EngineType = void 0;
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmotionsyncenginemappinginfo_1 = __webpack_require__(/*! ./cubismmotionsyncenginemappinginfo */ "../../../Framework/src/cubismmotionsyncenginemappinginfo.ts");
var ToPointer = Live2DCubismMotionSyncCore.ToPointer;
var EngineType;
(function (EngineType) {
    EngineType[EngineType["EngineType_Cri"] = 0] = "EngineType_Cri";
    EngineType[EngineType["EngineType_Unknown"] = 1] = "EngineType_Unknown";
})(EngineType || (exports.EngineType = EngineType = {}));
var MappingInfoListMapper = /** @class */ (function () {
    function MappingInfoListMapper() {
    }
    // デストラクタ
    MappingInfoListMapper.prototype.release = function () {
        this.deleteMappingInfoList();
    };
    MappingInfoListMapper.prototype.setJObject = function (mappingInfoList) {
        this.deleteMappingInfoList();
        this._infoBufferList = new csmvector_1.csmVector();
        this.ConvertObjectToNative(mappingInfoList);
    };
    MappingInfoListMapper.prototype.ConvertObjectToNative = function (infoList) {
        var infoListCount = infoList.getSize();
        for (var index = 0; index < infoListCount; index++) {
            this._infoBufferList.pushBack(infoList.at(index).toNativeArray(true));
        }
        // メモリ確保
        var mappingInfoListPtr = ToPointer.Malloc(this._infoBufferList.at(0).length *
            infoListCount *
            this._infoBufferList.at(0).BYTES_PER_ELEMENT);
        // 先頭アドレスを保存
        this._mappingInfoListFirstPtr = mappingInfoListPtr;
        // メモリ上で1列に並べる
        for (var infoListIndex = 0; infoListIndex < infoListCount; infoListIndex++) {
            // 要素の数分回す
            for (var infoElementIndex = 0; infoElementIndex < cubismmotionsyncenginemappinginfo_1.MappingInfoStructSize; infoElementIndex++) {
                if (infoElementIndex == 4) {
                    // Floatの値渡しなのでここだけこのようにする
                    ToPointer.AddValuePtrFloat(mappingInfoListPtr, infoElementIndex * Float32Array.BYTES_PER_ELEMENT, this._infoBufferList.at(infoListIndex)[infoElementIndex]);
                }
                ToPointer.AddValuePtrInt32(mappingInfoListPtr, infoElementIndex * Float32Array.BYTES_PER_ELEMENT, this._infoBufferList.at(infoListIndex)[infoElementIndex]);
            }
            // 利用したバイト数分ポインタを進める
            mappingInfoListPtr +=
                cubismmotionsyncenginemappinginfo_1.MappingInfoStructSize * Float32Array.BYTES_PER_ELEMENT;
        }
    };
    MappingInfoListMapper.prototype.deleteMappingInfoList = function () {
        if (!this._infoBufferList) {
            return;
        }
        this._infoBufferList.clear();
        this._infoBufferList = void 0;
        this._infoBufferList = null;
    };
    MappingInfoListMapper.prototype.getMappingInfoListPtr = function () {
        return this._mappingInfoListFirstPtr;
    };
    return MappingInfoListMapper;
}());
exports.MappingInfoListMapper = MappingInfoListMapper;
var MotionSyncContext = /** @class */ (function () {
    function MotionSyncContext(context, mapper, cubismParameterCount) {
        this._context = context;
        this._mapper = mapper;
        this._cubismParameterCount = cubismParameterCount;
    }
    MotionSyncContext.prototype.release = function () {
        var _a, _b;
        (_a = this._context) === null || _a === void 0 ? void 0 : _a.csmMotionSyncDelete();
        this._context = void 0;
        this._context = null;
        (_b = this._mapper) === null || _b === void 0 ? void 0 : _b.release();
        this._mapper = void 0;
        this._mapper = null;
        this._cubismParameterCount = 0;
    };
    MotionSyncContext.prototype.getContext = function () {
        return this._context;
    };
    MotionSyncContext.prototype.getMapper = function () {
        return this._mapper;
    };
    MotionSyncContext.prototype.getCubismParameterCount = function () {
        return this._cubismParameterCount;
    };
    return MotionSyncContext;
}());
exports.MotionSyncContext = MotionSyncContext;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./cubismmotionsyncutil */ "../../../Framework/src/cubismmotionsyncutil.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.MotionSyncContext = $.MotionSyncContext;
    Live2DCubismMotionSyncFramework.MappingInfoListMapper = $.MappingInfoListMapper;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/icubismmotionsyncengine.ts":
/*!*********************************************************!*\
  !*** ../../../Framework/src/icubismmotionsyncengine.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.ICubismMotionSyncEngine = exports.DefaultAudioBitDepth = void 0;
// Engine側に渡すBitDepth
exports.DefaultAudioBitDepth = 32;
var ICubismMotionSyncEngine = /** @class */ (function () {
    function ICubismMotionSyncEngine(engineHandle, type, name, version) {
        this._engineHandle = engineHandle;
        this._type = type;
        this._name = name;
        this._version = version;
    }
    ICubismMotionSyncEngine.prototype.getType = function () {
        return this._type;
    };
    ICubismMotionSyncEngine.prototype.getName = function () {
        return this._name;
    };
    ICubismMotionSyncEngine.prototype.getVersion = function () {
        return this._version;
    };
    ICubismMotionSyncEngine.prototype.getEngineHandle = function () {
        return this._engineHandle;
    };
    ICubismMotionSyncEngine.prototype.getProcessors = function () {
        return this._processors;
    };
    ICubismMotionSyncEngine.prototype.isClosed = function () {
        return this.getEngineHandle() == null;
    };
    ICubismMotionSyncEngine.prototype.releaseAllProcessor = function () {
        if (this.isClosed()) {
            return;
        }
        for (var index = 0; index < this._processors.getSize(); index++) {
            this._processors.at(index).Close();
        }
    };
    ICubismMotionSyncEngine.prototype.close = function (isForce) {
        if (this.isClosed()) {
            return;
        }
        if (0 < this._processors.getSize()) {
            if (isForce) {
                this.releaseAllProcessor();
            }
            else {
                return;
            }
        }
        this.getEngineHandle().disposeEngine();
        this._engineHandle = void 0;
        this._engineHandle = null;
        cubismmotionsyncenginecontroller_1.CubismMotionSyncEngineController.deleteAssociation(this);
    };
    ICubismMotionSyncEngine.prototype.DeleteAssociation = function (processor) {
        for (var index = 0; index < this._processors.getSize(); index++) {
            if (this._processors.at(index) == processor) {
                this._processors.at(index).Close();
                this._processors.remove(index);
                break;
            }
        }
    };
    return ICubismMotionSyncEngine;
}());
exports.ICubismMotionSyncEngine = ICubismMotionSyncEngine;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./icubismmotionsyncengine */ "../../../Framework/src/icubismmotionsyncengine.ts"));
var cubismmotionsyncenginecontroller_1 = __webpack_require__(/*! ./cubismmotionsyncenginecontroller */ "../../../Framework/src/cubismmotionsyncenginecontroller.ts");
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.ICubismMotionSyncEngine = $.ICubismMotionSyncEngine;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/icubismmotionsyncprocessor.ts":
/*!************************************************************!*\
  !*** ../../../Framework/src/icubismmotionsyncprocessor.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.ICubismMotionSyncProcessor = void 0;
var cubismmotionsyncengineanalysisresult_1 = __webpack_require__(/*! ./cubismmotionsyncengineanalysisresult */ "../../../Framework/src/cubismmotionsyncengineanalysisresult.ts");
var ICubismMotionSyncProcessor = /** @class */ (function () {
    function ICubismMotionSyncProcessor(engine, contextHandle, mappingList) {
        this._engine = engine;
        this._contextHandle = contextHandle;
        this._mappingInfoArray = mappingList;
    }
    /**
     * createAnalysisResult
     */
    ICubismMotionSyncProcessor.prototype.createAnalysisResult = function () {
        if (this.isClosed() || this._mappingInfoArray.getSize() < 1) {
            return new cubismmotionsyncengineanalysisresult_1.CubismMotionSyncEngineAnalysisResult(0);
        }
        return new cubismmotionsyncengineanalysisresult_1.CubismMotionSyncEngineAnalysisResult(this._mappingInfoArray.at(0).getModelParameterValues().getSize());
    };
    /**
     * isClosed
     */
    ICubismMotionSyncProcessor.prototype.isClosed = function () {
        return this._contextHandle == null;
    };
    ICubismMotionSyncProcessor.prototype.Close = function () {
        // 解放済みなら何もしない。
        if (this.isClosed()) {
            return;
        }
        this._contextHandle.release();
        this._contextHandle = void 0;
        this._contextHandle = null;
        this._engine.DeleteAssociation(this);
    };
    ICubismMotionSyncProcessor.prototype.getContextHandle = function () {
        return this._contextHandle;
    };
    ICubismMotionSyncProcessor.prototype.getEngine = function () {
        return this._engine;
    };
    ICubismMotionSyncProcessor.prototype.getType = function () {
        return this._engine.getType();
    };
    ICubismMotionSyncProcessor.prototype.getRequireSampleCount = function () {
        var _a, _b;
        if (!((_a = this.getEngine()) === null || _a === void 0 ? void 0 : _a.getEngineHandle()) ||
            !((_b = this.getContextHandle()) === null || _b === void 0 ? void 0 : _b.getContext())) {
            return 0;
        }
        return this.getEngine()
            .getEngineHandle()
            .getRequireSampleCount(this.getContextHandle().getContext());
    };
    return ICubismMotionSyncProcessor;
}());
exports.ICubismMotionSyncProcessor = ICubismMotionSyncProcessor;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./icubismmotionsyncprocessor */ "../../../Framework/src/icubismmotionsyncprocessor.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.ICubismMotionSyncProcessor = $.ICubismMotionSyncProcessor;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/live2dcubismmotionsync.ts":
/*!********************************************************!*\
  !*** ../../../Framework/src/live2dcubismmotionsync.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.CubismProcessorInfo = exports.MotionSyncEngineConfigCriData = exports.MotionSyncOption = exports.CubismMotionSync = void 0;
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismdebug_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmotionsyncdata_1 = __webpack_require__(/*! ./cubismmotionsyncdata */ "../../../Framework/src/cubismmotionsyncdata.ts");
var cubismmotionsyncenginecontroller_1 = __webpack_require__(/*! ./cubismmotionsyncenginecontroller */ "../../../Framework/src/cubismmotionsyncenginecontroller.ts");
var cubismmotionsyncutil_1 = __webpack_require__(/*! ./cubismmotionsyncutil */ "../../../Framework/src/cubismmotionsyncutil.ts");
// ファイルスコープの変数を初期化
var s_isStarted = false;
var s_isInitialized = false;
var s_option = null;
var s_engineConfigCriData = null;
var s_engineConfigStructSize = 2;
var CubismMotionSync = /** @class */ (function () {
    function CubismMotionSync(model, data, processorList) {
        this._data = data;
        this._processorInfoList = new csmvector_1.csmVector();
        for (var index = 0; index < (processorList === null || processorList === void 0 ? void 0 : processorList.getSize()); index++) {
            this._processorInfoList.pushBack(new CubismProcessorInfo(processorList.at(index), model, data.getSetting(index)));
            this._processorInfoList.at(index).init(data.getSetting(index));
        }
    }
    /**
     * Cubism MotionSync FrameworkのAPIを使用可能にする。
     *  APIを実行する前に必ずこの関数を実行すること。
     *  一度準備が完了して以降は、再び実行しても内部処理がスキップされます。
     *
     * @param    option      MotionSyncLogOptionクラスのインスタンス
     *
     * @return   準備処理が完了したらtrueが返ります。
     */
    CubismMotionSync.startUp = function (option) {
        if (option === void 0) { option = null; }
        if (s_isStarted) {
            (0, cubismdebug_1.CubismLogInfo)('CubismMotionSyncFramework.startUp() is already done.');
            return s_isStarted;
        }
        s_option = option;
        if (s_option != null) {
            Live2DCubismMotionSyncCore.Logging.csmMotionSyncSetLogFunction(s_option.logFunction);
        }
        s_isStarted = true;
        (0, cubismdebug_1.CubismLogInfo)('CubismMotionSyncFramework.startUp() is complete.');
        return s_isStarted;
    };
    /**
     * StartUp()で初期化したCubism MotionSync Frameworkの各パラメータをクリアします。
     * Dispose()したCubism MotionSync Frameworkを再利用する際に利用してください。
     */
    CubismMotionSync.cleanUp = function () {
        s_isStarted = false;
        s_isInitialized = false;
        s_option = null;
    };
    /**
     * Cubism MotionSync Framework内のリソースを初期化してモデルを表示可能な状態にします。
     *     再度Initialize()するには先にDispose()を実行する必要があります。
     */
    CubismMotionSync.initialize = function () {
        (0, cubismdebug_1.CSM_ASSERT)(s_isStarted);
        if (!s_isStarted) {
            (0, cubismdebug_1.CubismLogWarning)('CubismMotionSyncFramework is not started.');
            return;
        }
        // --- s_isInitializedによる連続初期化ガード ---
        // 連続してリソース確保が行われないようにする。
        // 再度Initialize()するには先にDispose()を実行する必要がある。
        if (s_isInitialized) {
            (0, cubismdebug_1.CubismLogWarning)('CubismMotionSyncFramework.initialize() skipped, already initialized.');
            return;
        }
        s_isInitialized = true;
        (0, cubismdebug_1.CubismLogInfo)('CubismMotionSyncFramework.initialize() is complete.');
    };
    /**
     * Cubism MotionSync Framework内の全てのリソースを解放します。
     *      ただし、外部で確保されたリソースについては解放しません。
     *      外部で適切に破棄する必要があります。
     */
    CubismMotionSync.dispose = function () {
        (0, cubismdebug_1.CSM_ASSERT)(s_isStarted);
        if (!s_isStarted) {
            (0, cubismdebug_1.CubismLogWarning)('CubismMotionSyncFramework is not started.');
            return;
        }
        // --- s_isInitializedによる未初期化解放ガード ---
        // dispose()するには先にinitialize()を実行する必要がある。
        if (!s_isInitialized) {
            // false...リソース未確保の場合
            (0, cubismdebug_1.CubismLogWarning)('CubismMotionSyncFramework.dispose() skipped, not initialized.');
            return;
        }
        s_isInitialized = false;
        (0, cubismdebug_1.CubismLogInfo)('CubismMotionSyncFramework.dispose() is complete.');
    };
    /**
     * Cubism MotionSync FrameworkのAPIを使用する準備が完了したかどうか
     * @return APIを使用する準備が完了していればtrueが返ります。
     */
    CubismMotionSync.isStarted = function () {
        return s_isStarted;
    };
    /**
     * Cubism MotionSync Frameworkのリソース初期化がすでに行われているかどうか
     * @return リソース確保が完了していればtrueが返ります
     */
    CubismMotionSync.isInitialized = function () {
        return s_isInitialized;
    };
    CubismMotionSync.create = function (model, buffer, size, samplePerSec) {
        if (!CubismMotionSync.isInitialized()) {
            return;
        }
        var data = cubismmotionsyncdata_1.CubismMotionSyncData.create(model, buffer, size);
        if (!data) {
            return null;
        }
        var processorList = new csmvector_1.csmVector();
        for (var index = 0; index < data.getSettingCount(); index++) {
            var processor = null;
            var engineType = data.getSetting(index).analysisType;
            switch (engineType) {
                case cubismmotionsyncutil_1.EngineType.EngineType_Cri:
                    processor = this.InitializeEngineCri(engineType, data, index, samplePerSec);
                    break;
                default:
                    (0, cubismdebug_1.CubismLogWarning)('[CubismMotionSync.Create] Index{0}: Can not create processor because `AnalysisType` is unknown.', index);
                    break;
            }
            if (processor != null) {
                processorList.pushBack(processor);
            }
        }
        return new CubismMotionSync(model, data, processorList);
    };
    CubismMotionSync.InitializeEngineCri = function (engineType, data, index, samplePerSec) {
        var engine = cubismmotionsyncenginecontroller_1.CubismMotionSyncEngineController.getEngine(engineType);
        if (s_option.engineConfig != null) {
            s_engineConfigCriData = new MotionSyncEngineConfigCriData();
            s_engineConfigCriData.engineConfigBuffer = new Int32Array(s_engineConfigStructSize);
            s_engineConfigCriData.engineConfigPtr =
                Live2DCubismMotionSyncCore.ToPointer.Malloc(s_engineConfigCriData.engineConfigBuffer.length *
                    s_engineConfigCriData.engineConfigBuffer.BYTES_PER_ELEMENT);
            Live2DCubismMotionSyncCore.ToPointer.ConvertEngineConfigCriToInt32Array(s_engineConfigCriData.engineConfigBuffer, s_engineConfigCriData.engineConfigPtr, s_option.engineConfig.Allocator, s_option.engineConfig.Deallocator);
        }
        var configPtr = s_engineConfigCriData != null ? s_engineConfigCriData.engineConfigPtr : 0;
        if (!engine) {
            engine = cubismmotionsyncenginecontroller_1.CubismMotionSyncEngineController.initializeEngine(configPtr);
        }
        var processor = null;
        if (engine) {
            processor = engine.CreateProcessor(data.getSetting(index).cubismParameterList.getSize(), data.getMappingInfoList(index), samplePerSec);
        }
        return processor;
    };
    CubismMotionSync.delete = function (instance) {
        if (!CubismMotionSync.isInitialized()) {
            return;
        }
        instance = void 0;
        instance = null;
    };
    CubismMotionSync.prototype.setSoundBuffer = function (processIndex, buffer) {
        if (!CubismMotionSync.isInitialized()) {
            return;
        }
        if (processIndex < this._processorInfoList.getSize()) {
            this._processorInfoList.at(processIndex)._sampleBuffer = buffer;
            this._processorInfoList.at(processIndex)._sampleBufferIndex = 0;
        }
    };
    CubismMotionSync.prototype.release = function () {
        var _a;
        if (!CubismMotionSync.isInitialized()) {
            return;
        }
        cubismmotionsyncdata_1.CubismMotionSyncData.delete(this._data);
        for (var index = 0; index < this._processorInfoList.getSize(); index++) {
            (_a = this._processorInfoList.at(index)._processor) === null || _a === void 0 ? void 0 : _a.Close();
        }
    };
    CubismMotionSync.prototype.updateParameters = function (model, deltaTimeSeconds) {
        if (!CubismMotionSync.isInitialized()) {
            return;
        }
        // 設定から時間を変更すると、経過時間がマイナスになることがあるので、経過時間0として対応。
        if (deltaTimeSeconds < 0.0) {
            deltaTimeSeconds = 0.0;
        }
        for (var processIndex = 0; processIndex < this._processorInfoList.getSize(); processIndex++) {
            this._processorInfoList.at(processIndex)._currentRemainTime +=
                deltaTimeSeconds;
            // Check each time assuming it may have been updated.
            var fps = this._processorInfoList.at(processIndex)._sampleRate;
            var processorDeltaTime = 1.0 / fps;
            // If the specified frame time is not reached, no analysis is performed.
            if (this._processorInfoList.at(processIndex)._currentRemainTime <
                processorDeltaTime) {
                for (var targetIndex = 0; targetIndex <
                    this._data.getSetting(processIndex).cubismParameterList.getSize(); targetIndex++) {
                    if (isNaN(this._processorInfoList
                        .at(processIndex)
                        ._analysisResult.getValues()[targetIndex])) {
                        continue;
                    }
                    // Overwrite parameter values every frame to prevent data from replacing itself
                    model.setParameterValueByIndex(this._data
                        .getSetting(processIndex)
                        .cubismParameterList.at(targetIndex).parameterIndex, this._processorInfoList
                        .at(processIndex)
                        ._lastDampedList.at(targetIndex));
                }
                continue;
            }
            this.analyze(model, processIndex);
            // Reset counter.
            this._processorInfoList.at(processIndex)._currentRemainTime =
                this._processorInfoList.at(processIndex)._currentRemainTime %
                    processorDeltaTime;
            for (var targetIndex = 0; targetIndex <
                this._data.getSetting(processIndex).cubismParameterList.getSize(); targetIndex++) {
                if (isNaN(this._processorInfoList
                    .at(processIndex)
                    ._analysisResult.getValues()[targetIndex])) {
                    continue;
                }
                // Overwrite parameter values every frame to prevent data from replacing itself
                model.setParameterValueByIndex(this._data
                    .getSetting(processIndex)
                    .cubismParameterList.at(targetIndex).parameterIndex, this._processorInfoList
                    .at(processIndex)
                    ._lastDampedList.at(targetIndex));
            }
        }
    };
    CubismMotionSync.prototype.analyze = function (model, processIndex) {
        if (!CubismMotionSync.isInitialized()) {
            return;
        }
        var processor = this._processorInfoList.at(processIndex)._processor;
        var samples = this._processorInfoList.at(processIndex)._sampleBuffer;
        var beginIndex = this._processorInfoList.at(processIndex)._sampleBufferIndex;
        if (processor == null ||
            this._processorInfoList.at(processIndex)._sampleBuffer == null) {
            return;
        }
        var analysisResult = null;
        var blendRatio = this._processorInfoList.at(processIndex)._blendRatio;
        var smoothing = this._processorInfoList.at(processIndex)._smoothing;
        var audioLevelEffectRatio = this._processorInfoList.at(processIndex)._audioLevelEffectRatio;
        this._processorInfoList.at(processIndex)._lastTotalProcessedCount = 0;
        do {
            var samplesSize = samples.getSize();
            if (samplesSize == 0 ||
                samplesSize <= beginIndex ||
                samplesSize - beginIndex < processor.getRequireSampleCount()) {
                break;
            }
            switch (processor.getType()) {
                case cubismmotionsyncutil_1.EngineType.EngineType_Cri:
                    analysisResult = processor.Analyze(samples, beginIndex, blendRatio, smoothing, audioLevelEffectRatio, this._processorInfoList.at(processIndex)._analysisResult);
                    break;
                default:
                    break;
            }
            if (!analysisResult) {
                break;
            }
            var processedCount = analysisResult.getProcessedSampleCount();
            beginIndex += processedCount;
            this._processorInfoList.at(processIndex)._lastTotalProcessedCount +=
                processedCount;
            // モーションシンクライブラリで計算した内容をモデルに反映
            for (var targetIndex = 0; targetIndex <
                this._data.getSetting(processIndex).cubismParameterList.getSize(); targetIndex++) {
                var cacheValue = analysisResult.getValues()[targetIndex];
                if (isNaN(cacheValue)) {
                    continue;
                }
                var smooth = this._data
                    .getSetting(processIndex)
                    .cubismParameterList.at(targetIndex).smooth;
                var damper = this._data
                    .getSetting(processIndex)
                    .cubismParameterList.at(targetIndex).damper;
                // Smoothing
                cacheValue =
                    ((100.0 - smooth) * cacheValue +
                        this._processorInfoList
                            .at(processIndex)
                            ._lastSmoothedList.at(targetIndex) *
                            smooth) /
                        100.0;
                this._processorInfoList
                    .at(processIndex)
                    ._lastSmoothedList.set(targetIndex, cacheValue);
                // Dampening
                if (Math.abs(cacheValue -
                    this._processorInfoList
                        .at(processIndex)
                        ._lastDampedList.at(targetIndex)) < damper) {
                    cacheValue = this._processorInfoList
                        .at(processIndex)
                        ._lastDampedList.at(targetIndex);
                }
                this._processorInfoList
                    .at(processIndex)
                    ._lastDampedList.set(targetIndex, cacheValue);
            }
        } while (analysisResult != null);
    };
    CubismMotionSync.prototype.setBlendRatio = function (processIndex, blendRatio) {
        if (!CubismMotionSync.isInitialized()) {
            return;
        }
        if (processIndex < this._processorInfoList.getSize()) {
            this._processorInfoList.at(processIndex)._blendRatio = blendRatio;
        }
    };
    CubismMotionSync.prototype.SetSmoothing = function (processIndex, smoothing) {
        if (!CubismMotionSync.isInitialized()) {
            return;
        }
        if (processIndex < this._processorInfoList.getSize()) {
            this._processorInfoList.at(processIndex)._smoothing = smoothing;
        }
    };
    CubismMotionSync.prototype.SetSampleRate = function (processIndex, sampleRate) {
        if (!CubismMotionSync.isInitialized()) {
            return;
        }
        if (processIndex < this._processorInfoList.getSize()) {
            this._processorInfoList.at(processIndex)._sampleRate = sampleRate;
        }
    };
    CubismMotionSync.prototype.SetAudioLevelEffectRatio = function (processIndex, audioLevelEffectRatio) {
        if (!CubismMotionSync.isInitialized()) {
            return;
        }
        if (processIndex < this._processorInfoList.getSize()) {
            this._processorInfoList.at(processIndex)._audioLevelEffectRatio =
                audioLevelEffectRatio;
        }
    };
    CubismMotionSync.prototype.getData = function () {
        return this._data;
    };
    CubismMotionSync.prototype.getLastTotalProcessedCount = function (processIndex) {
        return this._processorInfoList.at(processIndex)._lastTotalProcessedCount;
    };
    return CubismMotionSync;
}());
exports.CubismMotionSync = CubismMotionSync;
var MotionSyncOption = /** @class */ (function () {
    function MotionSyncOption() {
    }
    return MotionSyncOption;
}());
exports.MotionSyncOption = MotionSyncOption;
var MotionSyncEngineConfigCriData = /** @class */ (function () {
    function MotionSyncEngineConfigCriData() {
    }
    return MotionSyncEngineConfigCriData;
}());
exports.MotionSyncEngineConfigCriData = MotionSyncEngineConfigCriData;
var CubismProcessorInfo = /** @class */ (function () {
    function CubismProcessorInfo(processor, model, setting) {
        this._processor = processor;
        this._blendRatio = 0.0;
        this._smoothing = 1;
        this._sampleRate = 30.0;
        this._audioLevelEffectRatio = 0.0;
        this._sampleBuffer = null;
        this._sampleBufferIndex = 0;
        this._model = model;
        this._currentRemainTime = 0.0;
        this._lastTotalProcessedCount = 0;
        this.init(setting);
        this._analysisResult = this._processor.createAnalysisResult();
    }
    CubismProcessorInfo.prototype.init = function (setting) {
        this._currentRemainTime = 0.0;
        this._lastSmoothedList = new csmvector_1.csmVector();
        this._lastDampedList = new csmvector_1.csmVector();
        for (var index = 0; index < setting.cubismParameterList.getSize(); index++) {
            var parameterValue = this._model.getParameterValueByIndex(setting.cubismParameterList.at(index).parameterIndex);
            this._lastSmoothedList.pushBack(parameterValue);
            this._lastDampedList.pushBack(parameterValue);
        }
        this._blendRatio = setting.blendRatio;
        this._smoothing = setting.smoothing;
        this._sampleRate = setting.sampleRate;
        this._lastTotalProcessedCount = 0;
    };
    return CubismProcessorInfo;
}());
exports.CubismProcessorInfo = CubismProcessorInfo;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./live2dcubismmotionsync */ "../../../Framework/src/live2dcubismmotionsync.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.CubismMotionSync = $.CubismMotionSync;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "../../../Framework/src/motionsyncconfig_cri.ts":
/*!******************************************************!*\
  !*** ../../../Framework/src/motionsyncconfig_cri.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismMotionSyncFramework = exports.MotionSyncAnalysisConfig_CRI = exports.MotionSyncContextConfig_CRI = void 0;
var ToPointer = Live2DCubismMotionSyncCore.ToPointer;
var s_contextConfigInfoStructSize = 2;
var s_analysisConfigInfoStructSize = 3;
var MotionSyncContextConfig_CRI = /** @class */ (function () {
    function MotionSyncContextConfig_CRI(sampleRate, bitDepth) {
        if (sampleRate === void 0) { sampleRate = 0; }
        if (bitDepth === void 0) { bitDepth = 0; }
        this.SampleRate = sampleRate;
        this.BitDepth = bitDepth;
    }
    MotionSyncContextConfig_CRI.prototype.toNativeArray = function (forceConversion) {
        // 強制的に新規作成しないのであれば早期リターン
        if (!forceConversion && this._nativeArray) {
            return;
        }
        if (this._nativeArray) {
            this.releaseNativeArray();
        }
        this._nativeArray = new Int32Array(s_contextConfigInfoStructSize);
        this._nativeArrayPtr = ToPointer.Malloc(this._nativeArray.length * this._nativeArray.BYTES_PER_ELEMENT);
        // Nativeポインタへの変換
        this._nativeArray = ToPointer.ConvertContextConfigCriToInt32Array(this._nativeArray, this._nativeArrayPtr, this.SampleRate, this.BitDepth);
    };
    MotionSyncContextConfig_CRI.prototype.getNativePtr = function () {
        return this._nativeArrayPtr;
    };
    MotionSyncContextConfig_CRI.prototype.releaseNativeArray = function () {
        this.deallocNativeArrayPtr();
        this._nativeArray = void 0;
    };
    MotionSyncContextConfig_CRI.prototype.deallocNativeArrayPtr = function () {
        // 配列本体を解放
        ToPointer.Free(this._nativeArrayPtr);
        this._nativeArrayPtr = 0;
    };
    return MotionSyncContextConfig_CRI;
}());
exports.MotionSyncContextConfig_CRI = MotionSyncContextConfig_CRI;
var MotionSyncAnalysisConfig_CRI = /** @class */ (function () {
    function MotionSyncAnalysisConfig_CRI(blendRatio, smoothing, audioLevelEffectRatio) {
        if (blendRatio === void 0) { blendRatio = 0.0; }
        if (smoothing === void 0) { smoothing = 0; }
        if (audioLevelEffectRatio === void 0) { audioLevelEffectRatio = 0.0; }
        this.BlendRatio = blendRatio;
        this.Smoothing = smoothing;
        this.AudioLevelEffectRatio = audioLevelEffectRatio;
    }
    MotionSyncAnalysisConfig_CRI.prototype.toNativeArray = function (forceConversion) {
        // 強制的に新規作成しないのであれば既にあるものを返す
        if (!forceConversion && this._nativeArray) {
            return this._nativeArray;
        }
        if (this._nativeArray) {
            this.releaseNativeArray();
        }
        this._nativeArray = new Float32Array(s_analysisConfigInfoStructSize);
        this._nativeArrayPtr = ToPointer.Malloc(this._nativeArray.length * this._nativeArray.BYTES_PER_ELEMENT);
        // Nativeポインタへの変換
        this._nativeArray = ToPointer.ConvertAnalysisConfigToFloat32Array(this._nativeArray, this._nativeArrayPtr, this.BlendRatio, this.Smoothing, this.AudioLevelEffectRatio);
        return this._nativeArray;
    };
    MotionSyncAnalysisConfig_CRI.prototype.releaseNativeArray = function () {
        this.deallocNativePtr();
        this._nativeArray = void 0;
    };
    MotionSyncAnalysisConfig_CRI.prototype.deallocNativePtr = function () {
        // 配列本体を解放
        ToPointer.Free(this._nativeArrayPtr);
        this._nativeArrayPtr = 0;
    };
    return MotionSyncAnalysisConfig_CRI;
}());
exports.MotionSyncAnalysisConfig_CRI = MotionSyncAnalysisConfig_CRI;
// Namespace definition for compatibility.
var $ = __importStar(__webpack_require__(/*! ./motionsyncconfig_cri */ "../../../Framework/src/motionsyncconfig_cri.ts"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismMotionSyncFramework;
(function (Live2DCubismMotionSyncFramework) {
    Live2DCubismMotionSyncFramework.MotionSyncContextConfig_CRI = $.MotionSyncContextConfig_CRI;
})(Live2DCubismMotionSyncFramework || (exports.Live2DCubismMotionSyncFramework = Live2DCubismMotionSyncFramework = {}));


/***/ }),

/***/ "./src/lappmotionsyncaudiomanager.ts":
/*!*******************************************!*\
  !*** ./src/lappmotionsyncaudiomanager.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioInfo = exports.LAppMotionSyncAudioManager = void 0;
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var LAppMotionSyncDefine = __importStar(__webpack_require__(/*! ./lappmotionsyncdefine */ "./src/lappmotionsyncdefine.ts"));
/**
 * 音声管理クラス
 * 音声読み込み、管理を行うクラス。
 */
var LAppMotionSyncAudioManager = /** @class */ (function () {
    /**
     * コンストラクタ
     */
    function LAppMotionSyncAudioManager() {
        this._audios = new csmvector_1.csmVector();
    }
    /**
     * 解放する。
     */
    LAppMotionSyncAudioManager.prototype.release = function () {
        for (var ite = this._audios.begin(); ite.notEqual(this._audios.end()); ite.preIncrement()) {
            if (!ite.ptr()) {
                continue;
            }
            if (ite.ptr().workletNode) {
                ite.ptr().workletNode.disconnect();
            }
            if (ite.ptr().source) {
                ite.ptr().source.disconnect();
            }
            if (ite.ptr().audioContext) {
                ite.ptr().audioContext.close();
            }
        }
        this._audios = null;
    };
    /**
     * 音声読み込み
     *
     * @param fileName 読み込む音声ファイルパス名
     * @param audioContext 音声コンテキスト
     * @return 音声情報、読み込み失敗時はnullを返す
     */
    LAppMotionSyncAudioManager.prototype.createAudioFromFile = function (fileName, index, audioContext, callback) {
        var _this = this;
        if (this._audios && this._audios.at(index) != null) {
            var _loop_1 = function (ite) {
                if (ite.ptr().filePath == fileName &&
                    ite.ptr().audioContext == audioContext &&
                    audioContext != null) {
                    // 2回目以降はキャッシュが使用される(待ち時間なし)
                    // WebKitでは同じImageのonloadを再度呼ぶには再インスタンスが必要
                    // 詳細：https://stackoverflow.com/a/5024181
                    ite.ptr().audio = new Audio();
                    ite
                        .ptr()
                        .audio.addEventListener('load', function () { return callback(ite.ptr(), index); }, {
                        passive: true
                    });
                    ite.ptr().audio.src = fileName;
                    ite.ptr().audioContext = audioContext;
                    return { value: void 0 };
                }
            };
            // search loaded audio already
            for (var ite = this._audios.begin(); ite.notEqual(this._audios.end()); ite.preIncrement()) {
                var state_1 = _loop_1(ite);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        // 音声コンテキストの作成
        var newAudioContext = new AudioContext({
            sampleRate: LAppMotionSyncDefine.SamplesPerSec
        });
        newAudioContext.suspend();
        // 埋め込み音声要素を作成
        var audio = new Audio(fileName);
        // 埋め込み音声要素の初期設定
        audio.preload = 'auto';
        // 音源ノードの作成
        var source = newAudioContext.createMediaElementSource(audio);
        // AudioWorklet用のモジュールを追加
        newAudioContext.audioWorklet
            .addModule('./src/lappaudioworkletprocessor.js')
            .then(function () {
            var audioWorkletNode = new AudioWorkletNode(newAudioContext, 'lappaudioworkletprocessor');
            // 各ノードを接続する
            source.connect(audioWorkletNode);
            audioWorkletNode.connect(newAudioContext.destination);
            var audioInfo = new AudioInfo();
            if (audioInfo != null && _this._audios != null) {
                audioInfo.filePath = fileName;
                audioInfo.audioContext = newAudioContext;
                audioInfo.audio = audio;
                audioInfo.source = source;
                audioInfo.workletNode = audioWorkletNode;
                audioInfo.isPlay = false;
                //this._audios.pushBack(audioInfo);
                _this._audios.set(index, audioInfo);
                callback(audioInfo, index);
            }
            audio.src = fileName;
            // 再生終了時に再生されていないとマークする。
            audio.onended = function () {
                audioInfo.isPlay = false;
            };
        });
    };
    /**
     * 音声の解放
     *
     * 配列に存在する音声全てを解放する。
     */
    LAppMotionSyncAudioManager.prototype.clearAudios = function () {
        for (var i = 0; i < this._audios.getSize(); i++) {
            this._audios.at(i).workletNode.disconnect();
            this._audios.at(i).source.disconnect();
            this._audios.at(i).audioContext.close();
            this._audios.set(i, null);
        }
        this._audios.clear();
    };
    /**
     * 音声の解放
     *
     * 指定した音声コンテキストの音声を解放する。
     * @param audioContext 解放する音声コンテキスト
     */
    LAppMotionSyncAudioManager.prototype.releaseAudioByAudioContext = function (audioContext) {
        for (var i = 0; i < this._audios.getSize(); i++) {
            if (this._audios.at(i).audioContext != audioContext) {
                continue;
            }
            this._audios.at(i).workletNode.disconnect();
            this._audios.at(i).source.disconnect();
            this._audios.at(i).audioContext.close();
            this._audios.set(i, null);
            this._audios.remove(i);
            break;
        }
    };
    /**
     * 音声の解放
     *
     * 指定した名前の音声を解放する。
     * @param fileName 解放する音声ファイルパス
     */
    LAppMotionSyncAudioManager.prototype.releaseAudioByFilePath = function (fileName) {
        for (var i = 0; i < this._audios.getSize(); i++) {
            if (this._audios.at(i).filePath != fileName) {
                continue;
            }
            this._audios.at(i).workletNode.disconnect();
            this._audios.at(i).source.disconnect();
            this._audios.at(i).audioContext.close();
            this._audios.set(i, null);
            this._audios.remove(i);
            break;
        }
    };
    /**
     * 再生中かどうかを取得
     *
     * @param filePath 音声ファイルパス
     * @returns 指定した名前の音声が再生中か？
     */
    LAppMotionSyncAudioManager.prototype.isPlayByFilePath = function (filePath) {
        for (var i = 0; i < this._audios.getSize(); i++) {
            if (this._audios.at(i).filePath != filePath) {
                continue;
            }
            return this._audios.at(i).isPlay;
        }
        return false;
    };
    /**
     * 指定したファイルパスの音声を再生
     *
     * @param filePath 音声ファイルパス
     */
    LAppMotionSyncAudioManager.prototype.playByFilePath = function (filePath) {
        for (var i = 0; i < this._audios.getSize(); i++) {
            if (this._audios.at(i).filePath != filePath) {
                continue;
            }
            this._audios.at(i).audio.play();
            this._audios.at(i).isPlay = true;
            break;
        }
    };
    /**
     * 指定したファイルパスの音声の再生を停止
     *
     * @param filePath 音声ファイルパス
     */
    LAppMotionSyncAudioManager.prototype.stopByFilePath = function (filePath) {
        for (var i = 0; i < this._audios.getSize(); i++) {
            if (this._audios.at(i).filePath != filePath) {
                continue;
            }
            this._audios.at(i).audio.load();
            this._audios.at(i).isPlay = false;
            break;
        }
    };
    /**
     * 指定したファイルパスの音声の再生を一時停止
     *
     * @param filePath 音声ファイルパス
     */
    LAppMotionSyncAudioManager.prototype.pauseByFilePath = function (filePath) {
        for (var i = 0; i < this._audios.getSize(); i++) {
            if (this._audios.at(i).filePath != filePath) {
                continue;
            }
            this._audios.at(i).audio.pause();
            this._audios.at(i).isPlay = false;
            break;
        }
    };
    /**
     * WorkletProcessorモジュールからデータを受け取るコールバック設定用の関数
     *
     * @param index 音声のインデックス
     * @param buffer データを入れるバッファ
     * @param updateSizes 更新サイズの配列
     */
    LAppMotionSyncAudioManager.prototype.setOnMessageByIndex = function (index, buffer, updateSizes) {
        var _this = this;
        this._audios.at(index).workletNode.port.onmessage = function (e) {
            if (!_this.isPlayByIndex(index)) {
                return;
            }
            // 元がany型なので定義に入れる。
            var data = e.data;
            // WorkletProcessorモジュールからデータを取得
            if (data.eventType === 'data') {
                var newValue_1 = updateSizes.at(index);
                data.audioBuffer.forEach(function (element) {
                    buffer.pushBack(element);
                    newValue_1++;
                });
                updateSizes.set(index, newValue_1);
            }
        };
    };
    /**
     * 再生中かどうかを取得
     *
     * @param index インデックス
     * @returns 指定したインデックスの音声が再生中か？
     */
    LAppMotionSyncAudioManager.prototype.isPlayByIndex = function (index) {
        if (this._audios == null || !(index < this._audios.getSize()) || this._audios.at(index) == null) {
            return false;
        }
        return this._audios.at(index).isPlay;
    };
    /**
     * 指定したインデックスの音声を再生
     *
     * @param index インデックス
     */
    LAppMotionSyncAudioManager.prototype.playByIndex = function (index) {
        if (!(index < this._audios.getSize()) || this._audios.at(index) == null) {
            return;
        }
        this._audios.at(index).audio.play();
        this._audios.at(index).isPlay = true;
    };
    /**
     * 指定したインデックスの音声の再生を停止
     *
     * @param index インデックス
     */
    LAppMotionSyncAudioManager.prototype.stopByIndex = function (index) {
        if (!(index < this._audios.getSize()) || this._audios.at(index) == null) {
            return;
        }
        this._audios.at(index).audio.load();
        this._audios.at(index).isPlay = false;
    };
    /**
     * 指定したインデックスの音声の再生を一時停止
     *
     * @param index インデックス
     */
    LAppMotionSyncAudioManager.prototype.pauseByIndex = function (index) {
        if (!(index < this._audios.getSize()) || this._audios.at(index) == null) {
            return;
        }
        this._audios.at(index).audio.pause();
        this._audios.at(index).isPlay = false;
    };
    return LAppMotionSyncAudioManager;
}());
exports.LAppMotionSyncAudioManager = LAppMotionSyncAudioManager;
/**
 * 音声情報構造体
 */
var AudioInfo = /** @class */ (function () {
    function AudioInfo() {
        this.audioContext = null; // 音声コンテキスト
        this.source = null; // 音源ノード
        this.workletNode = null; // リアルタイム時間領域用のノード
    }
    return AudioInfo;
}());
exports.AudioInfo = AudioInfo;


/***/ }),

/***/ "./src/lappmotionsyncdefine.ts":
/*!*************************************!*\
  !*** ./src/lappmotionsyncdefine.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitDepth = exports.SamplesPerSec = exports.Channels = exports.ModelDirSize = exports.ModelDir = exports.FastForwardImageName = exports.MotionSyncModelSoundsDirName = exports.ResourcesPath = void 0;
/**
 * Sample Appで使用する定数
 */
// 相対パス
exports.ResourcesPath = '../../Resources/';
exports.MotionSyncModelSoundsDirName = 'sounds/';
// 早送りの画像ファイル
exports.FastForwardImageName = 'icon_fastForward.png';
// モデル定義---------------------------------------------
// モデルを配置したディレクトリ名の配列
// ディレクトリ名とmodel3.jsonの名前を一致させておくこと
exports.ModelDir = ['shiro_hachi'];
exports.ModelDirSize = exports.ModelDir.length;
// チャンネル数
exports.Channels = 2;
// サンプリング周波数
exports.SamplesPerSec = 48000;
// ビット深度
exports.BitDepth = 16;


/***/ }),

/***/ "./src/lappmotionsyncdelegate.ts":
/*!***************************************!*\
  !*** ./src/lappmotionsyncdelegate.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppMotionSyncDelegate = exports.frameBuffer = exports.s_instance = void 0;
var live2dcubismframework_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/live2dcubismframework'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var LAppDefine = __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappdefine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var lapppal_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lapppal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var lapptexturemanager_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lapptexturemanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var live2dcubismmotionsync_1 = __webpack_require__(/*! @motionsyncframework/live2dcubismmotionsync */ "../../../Framework/src/live2dcubismmotionsync.ts");
var lappmotionsyncview_1 = __webpack_require__(/*! ./lappmotionsyncview */ "./src/lappmotionsyncview.ts");
var lappmotionsynclive2dmanager_1 = __webpack_require__(/*! ./lappmotionsynclive2dmanager */ "./src/lappmotionsynclive2dmanager.ts");
var lappglmanager_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappglmanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
exports.s_instance = null;
exports.frameBuffer = null;
/**
 * アプリケーションクラス。
 * Cubism SDKの管理を行う。
 */
var LAppMotionSyncDelegate = /** @class */ (function () {
    /**
     * コンストラクタ
     */
    function LAppMotionSyncDelegate() {
        this._captured = false;
        this._mouseX = 0.0;
        this._mouseY = 0.0;
        this._isEnd = false;
        this._cubismOption = new live2dcubismframework_1.Option();
        this._cubismMotionSyncOption = new live2dcubismmotionsync_1.MotionSyncOption();
        this._view = new lappmotionsyncview_1.LAppMotionSyncView();
        this._textureManager = new lapptexturemanager_1.LAppTextureManager();
    }
    /**
     * クラスのインスタンス（シングルトン）を返す。
     * インスタンスが生成されていない場合は内部でインスタンスを生成する。
     *
     * @return クラスのインスタンス
     */
    LAppMotionSyncDelegate.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppMotionSyncDelegate();
        }
        return exports.s_instance;
    };
    /**
     * クラスのインスタンス（シングルトン）を解放する。
     */
    LAppMotionSyncDelegate.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance.release();
        }
        exports.s_instance = null;
    };
    /**
     * APPに必要な物を初期化する。
     */
    LAppMotionSyncDelegate.prototype.initialize = function () {
        // キャンバスを DOM に追加
        document.body.appendChild(lappglmanager_1.canvas);
        if (LAppDefine.CanvasSize === 'auto') {
            this._resizeCanvas();
        }
        else {
            lappglmanager_1.canvas.width = LAppDefine.CanvasSize.width;
            lappglmanager_1.canvas.height = LAppDefine.CanvasSize.height;
        }
        if (!exports.frameBuffer) {
            exports.frameBuffer = lappglmanager_1.gl.getParameter(lappglmanager_1.gl.FRAMEBUFFER_BINDING);
        }
        // 透過設定
        lappglmanager_1.gl.enable(lappglmanager_1.gl.BLEND);
        lappglmanager_1.gl.blendFunc(lappglmanager_1.gl.SRC_ALPHA, lappglmanager_1.gl.ONE_MINUS_SRC_ALPHA);
        var supportTouch = 'ontouchend' in lappglmanager_1.canvas;
        if (supportTouch) {
            // タッチ関連コールバック関数登録
            lappglmanager_1.canvas.addEventListener('touchstart', onTouchBegan, { passive: true });
            lappglmanager_1.canvas.addEventListener('touchmove', onTouchMoved, { passive: true });
            lappglmanager_1.canvas.addEventListener('touchend', onTouchEnded, { passive: true });
            lappglmanager_1.canvas.addEventListener('touchcancel', onTouchCancel, { passive: true });
        }
        else {
            // マウス関連コールバック関数登録
            lappglmanager_1.canvas.addEventListener('mousedown', onClickBegan, { passive: true });
            lappglmanager_1.canvas.addEventListener('mousemove', onMouseMoved, { passive: true });
            lappglmanager_1.canvas.addEventListener('mouseup', onClickEnded, { passive: true });
        }
        // AppViewの初期化
        this._view.initialize();
        // Cubism SDKの初期化
        this.initializeCubism();
        return true;
    };
    /**
     * Resize canvas and re-initialize view.
     */
    LAppMotionSyncDelegate.prototype.onResize = function () {
        this._resizeCanvas();
        this._view.initialize();
        this._view.initializeSprite();
    };
    /**
     * 解放する。
     */
    LAppMotionSyncDelegate.prototype.release = function () {
        this._textureManager.release();
        this._textureManager = null;
        this._view.release();
        this._view = null;
        // リソースを解放
        lappmotionsynclive2dmanager_1.LAppMotionSyncLive2DManager.releaseInstance();
        // Cubism SDKの解放
        live2dcubismframework_1.CubismFramework.dispose();
        live2dcubismmotionsync_1.CubismMotionSync.dispose();
    };
    /**
     * 実行処理。
     */
    LAppMotionSyncDelegate.prototype.run = function () {
        var _this = this;
        // メインループ
        var loop = function () {
            // インスタンスの有無の確認
            if (exports.s_instance == null) {
                return;
            }
            // 時間更新
            lapppal_1.LAppPal.updateTime();
            // 画面の初期化
            lappglmanager_1.gl.clearColor(0.0, 0.0, 0.0, 1.0);
            // 深度テストを有効化
            lappglmanager_1.gl.enable(lappglmanager_1.gl.DEPTH_TEST);
            // 近くにある物体は、遠くにある物体を覆い隠す
            lappglmanager_1.gl.depthFunc(lappglmanager_1.gl.LEQUAL);
            // カラーバッファや深度バッファをクリアする
            lappglmanager_1.gl.clear(lappglmanager_1.gl.COLOR_BUFFER_BIT | lappglmanager_1.gl.DEPTH_BUFFER_BIT);
            lappglmanager_1.gl.clearDepth(1.0);
            // 透過設定
            lappglmanager_1.gl.enable(lappglmanager_1.gl.BLEND);
            lappglmanager_1.gl.blendFunc(lappglmanager_1.gl.SRC_ALPHA, lappglmanager_1.gl.ONE_MINUS_SRC_ALPHA);
            // 描画更新
            _this._view.render();
            // ループのために再帰呼び出し
            requestAnimationFrame(loop);
        };
        loop();
    };
    /**
     * シェーダーを登録する。
     */
    LAppMotionSyncDelegate.prototype.createShader = function () {
        // バーテックスシェーダーのコンパイル
        var vertexShaderId = lappglmanager_1.gl.createShader(lappglmanager_1.gl.VERTEX_SHADER);
        if (vertexShaderId == null) {
            lapppal_1.LAppPal.printMessage('failed to create vertexShader');
            return null;
        }
        var vertexShader = 'precision mediump float;' +
            'attribute vec3 position;' +
            'attribute vec2 uv;' +
            'varying vec2 vuv;' +
            'void main(void)' +
            '{' +
            '   gl_Position = vec4(position, 1.0);' +
            '   vuv = uv;' +
            '}';
        lappglmanager_1.gl.shaderSource(vertexShaderId, vertexShader);
        lappglmanager_1.gl.compileShader(vertexShaderId);
        // フラグメントシェーダのコンパイル
        var fragmentShaderId = lappglmanager_1.gl.createShader(lappglmanager_1.gl.FRAGMENT_SHADER);
        if (fragmentShaderId == null) {
            lapppal_1.LAppPal.printMessage('failed to create fragmentShader');
            return null;
        }
        var fragmentShader = 'precision mediump float;' +
            'varying vec2 vuv;' +
            'uniform sampler2D texture;' +
            'void main(void)' +
            '{' +
            '   gl_FragColor = texture2D(texture, vuv);' +
            '}';
        lappglmanager_1.gl.shaderSource(fragmentShaderId, fragmentShader);
        lappglmanager_1.gl.compileShader(fragmentShaderId);
        // プログラムオブジェクトの作成
        var programId = lappglmanager_1.gl.createProgram();
        lappglmanager_1.gl.attachShader(programId, vertexShaderId);
        lappglmanager_1.gl.attachShader(programId, fragmentShaderId);
        lappglmanager_1.gl.deleteShader(vertexShaderId);
        lappglmanager_1.gl.deleteShader(fragmentShaderId);
        // リンク
        lappglmanager_1.gl.linkProgram(programId);
        lappglmanager_1.gl.useProgram(programId);
        return programId;
    };
    /**
     * View情報を取得する。
     */
    LAppMotionSyncDelegate.prototype.getView = function () {
        return this._view;
    };
    LAppMotionSyncDelegate.prototype.getTextureManager = function () {
        return this._textureManager;
    };
    /**
     * Cubism SDKの初期化
     */
    LAppMotionSyncDelegate.prototype.initializeCubism = function () {
        // setup cubism
        this._cubismOption.logFunction = lapppal_1.LAppPal.printMessage;
        this._cubismOption.loggingLevel = LAppDefine.CubismLoggingLevel;
        live2dcubismframework_1.CubismFramework.startUp(this._cubismOption);
        // setup motionsync
        this._cubismMotionSyncOption.logFunction = lapppal_1.LAppPal.printMessage;
        this._cubismMotionSyncOption.loggingLevel = LAppDefine.CubismLoggingLevel;
        live2dcubismmotionsync_1.CubismMotionSync.startUp(this._cubismMotionSyncOption);
        // initialize cubism
        live2dcubismframework_1.CubismFramework.initialize();
        live2dcubismmotionsync_1.CubismMotionSync.initialize();
        // load model
        lappmotionsynclive2dmanager_1.LAppMotionSyncLive2DManager.getInstance();
        lapppal_1.LAppPal.updateTime();
        this._view.initializeSprite();
    };
    /**
     * Resize the canvas to fill the screen.
     */
    LAppMotionSyncDelegate.prototype._resizeCanvas = function () {
        lappglmanager_1.canvas.width = lappglmanager_1.canvas.clientWidth * window.devicePixelRatio;
        lappglmanager_1.canvas.height = lappglmanager_1.canvas.clientHeight * window.devicePixelRatio;
        lappglmanager_1.gl.viewport(0, 0, lappglmanager_1.gl.drawingBufferWidth, lappglmanager_1.gl.drawingBufferHeight);
    };
    return LAppMotionSyncDelegate;
}());
exports.LAppMotionSyncDelegate = LAppMotionSyncDelegate;
/**
 * クリックしたときに呼ばれる。
 */
function onClickBegan(e) {
    if (!LAppMotionSyncDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    LAppMotionSyncDelegate.getInstance()._captured = true;
    var posX = e.pageX;
    var posY = e.pageY;
    LAppMotionSyncDelegate.getInstance()._view.onTouchesBegan(posX, posY);
    // HACK: On Safari.
    if (navigator.userAgent.includes("AppleWebKit")) {
        var audio = new Audio();
        audio.play();
    }
}
/**
 * マウスポインタが動いたら呼ばれる。
 */
function onMouseMoved(e) {
    if (!LAppMotionSyncDelegate.getInstance()._captured) {
        return;
    }
    if (!LAppMotionSyncDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = e.target.getBoundingClientRect();
    var posX = e.clientX - rect.left;
    var posY = e.clientY - rect.top;
    LAppMotionSyncDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}
/**
 * クリックが終了したら呼ばれる。
 */
function onClickEnded(e) {
    LAppMotionSyncDelegate.getInstance()._captured = false;
    if (!LAppMotionSyncDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = e.target.getBoundingClientRect();
    var posX = e.clientX - rect.left;
    var posY = e.clientY - rect.top;
    LAppMotionSyncDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
/**
 * タッチしたときに呼ばれる。
 */
function onTouchBegan(e) {
    if (!LAppMotionSyncDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    LAppMotionSyncDelegate.getInstance()._captured = true;
    var posX = e.changedTouches[0].pageX;
    var posY = e.changedTouches[0].pageY;
    LAppMotionSyncDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}
/**
 * スワイプすると呼ばれる。
 */
function onTouchMoved(e) {
    if (!LAppMotionSyncDelegate.getInstance()._captured) {
        return;
    }
    if (!LAppMotionSyncDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = e.target.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppMotionSyncDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}
/**
 * タッチが終了したら呼ばれる。
 */
function onTouchEnded(e) {
    LAppMotionSyncDelegate.getInstance()._captured = false;
    if (!LAppMotionSyncDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = e.target.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppMotionSyncDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
/**
 * タッチがキャンセルされると呼ばれる。
 */
function onTouchCancel(e) {
    LAppMotionSyncDelegate.getInstance()._captured = false;
    if (!LAppMotionSyncDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = e.target.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppMotionSyncDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}


/***/ }),

/***/ "./src/lappmotionsynclive2dmanager.ts":
/*!********************************************!*\
  !*** ./src/lappmotionsynclive2dmanager.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppMotionSyncLive2DManager = exports.s_instance = void 0;
var cubismmatrix44_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismmatrix44'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var LAppDefine = __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappdefine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var LappMotionSyncDefine = __importStar(__webpack_require__(/*! ./lappmotionsyncdefine */ "./src/lappmotionsyncdefine.ts"));
var lappglmanager_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappglmanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var lappmotionsyncmodel_1 = __webpack_require__(/*! ./lappmotionsyncmodel */ "./src/lappmotionsyncmodel.ts");
var lapppal_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lapppal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
exports.s_instance = null;
/**
 * サンプルアプリケーションにおいてCubismModelを管理するクラス
 * モデル生成と破棄、タップイベントの処理、モデル切り替えを行う。
 */
var LAppMotionSyncLive2DManager = /** @class */ (function () {
    /**
     * コンストラクタ
     */
    function LAppMotionSyncLive2DManager() {
        this._viewMatrix = new cubismmatrix44_1.CubismMatrix44();
        this._models = new csmvector_1.csmVector();
        this._sceneIndex = 0;
        this.changeScene(this._sceneIndex);
    }
    /**
     * クラスのインスタンス（シングルトン）を返す。
     * インスタンスが生成されていない場合は内部でインスタンスを生成する。
     *
     * @return クラスのインスタンス
     */
    LAppMotionSyncLive2DManager.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppMotionSyncLive2DManager();
        }
        return exports.s_instance;
    };
    /**
     * クラスのインスタンス（シングルトン）を解放する。
     */
    LAppMotionSyncLive2DManager.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance = void 0;
        }
        exports.s_instance = null;
    };
    /**
     * 現在のシーンで保持しているモデルを返す。
     *
     * @param no モデルリストのインデックス値
     * @return モデルのインスタンスを返す。インデックス値が範囲外の場合はNULLを返す。
     */
    LAppMotionSyncLive2DManager.prototype.getModel = function (no) {
        if (no < this._models.getSize()) {
            return this._models.at(no);
        }
        return null;
    };
    /**
     * 現在のシーンで保持しているすべてのモデルを解放する
     */
    LAppMotionSyncLive2DManager.prototype.releaseAllModel = function () {
        for (var i = 0; i < this._models.getSize(); i++) {
            this._models.at(i).release();
            this._models.set(i, null);
        }
        this._models.clear();
    };
    /**
     * 画面をタップした時の処理
     *
     * @param x 画面のX座標
     * @param y 画面のY座標
     */
    LAppMotionSyncLive2DManager.prototype.onTap = function (x, y) {
        if (LAppDefine.DebugLogEnable) {
            lapppal_1.LAppPal.printMessage("[APP]tap point: {x: ".concat(x.toFixed(2), " y: ").concat(y.toFixed(2), "}"));
        }
    };
    /**
     * 画面を更新するときの処理
     * モデルの更新処理及び描画処理を行う
     */
    LAppMotionSyncLive2DManager.prototype.onUpdate = function () {
        var width = lappglmanager_1.canvas.width, height = lappglmanager_1.canvas.height;
        var modelCount = this._models.getSize();
        for (var i = 0; i < modelCount; ++i) {
            var projection = new cubismmatrix44_1.CubismMatrix44();
            var model = this.getModel(i);
            if (model.getModel()) {
                if (model.getModel().getCanvasWidth() > 1.0 && width < height) {
                    // 横に長いモデルを縦長ウィンドウに表示する際モデルの横サイズでscaleを算出する
                    model.getModelMatrix().setWidth(2.0);
                    projection.scale(1.0, width / height);
                }
                else {
                    projection.scale(height / width, 1.0);
                }
                // 必要があればここで乗算
                if (this._viewMatrix != null) {
                    projection.multiplyByMatrix(this._viewMatrix);
                }
            }
            model.update();
            model.draw(projection); // 参照渡しなのでprojectionは変質する。
        }
    };
    /**
     * 次の音声に切り替える
     */
    LAppMotionSyncLive2DManager.prototype.changeNextIndexSound = function () {
        var model = this._models.at(0);
        if (!model.isSuspendedCurrentSoundContext()) {
            model.stopCurrentSound();
            // インデックスを更新
            model._soundIndex =
                (model._soundIndex + 1) % model._soundFileList.getSize();
        }
        model.playCurrentSound();
    };
    /**
     * 次のシーンに切りかえる
     * サンプルアプリケーションではモデルセットの切り替えを行う。
     */
    LAppMotionSyncLive2DManager.prototype.nextScene = function () {
        var no = (this._sceneIndex + 1) % LappMotionSyncDefine.ModelDirSize;
        this.changeScene(no);
    };
    /**
     * シーンを切り替える
     * サンプルアプリケーションではモデルセットの切り替えを行う。
     */
    LAppMotionSyncLive2DManager.prototype.changeScene = function (index) {
        this._sceneIndex = index;
        if (LAppDefine.DebugLogEnable) {
            lapppal_1.LAppPal.printMessage("[APP]model index: ".concat(this._sceneIndex));
        }
        // ModelDir[]に保持したディレクトリ名から
        // model3.jsonのパスを決定する。
        // ディレクトリ名とmodel3.jsonの名前を一致させておくこと。
        var model = LappMotionSyncDefine.ModelDir[index];
        var modelPath = LappMotionSyncDefine.ResourcesPath + model + '/';
        var modelJsonName = LappMotionSyncDefine.ModelDir[index];
        modelJsonName += '.model3.json';
        this.releaseAllModel();
        this._models.pushBack(new lappmotionsyncmodel_1.LAppMotionSyncModel());
        this._models.at(0).loadAssets(modelPath, modelJsonName);
    };
    LAppMotionSyncLive2DManager.prototype.setViewMatrix = function (m) {
        for (var i = 0; i < 16; i++) {
            this._viewMatrix.getArray()[i] = m.getArray()[i];
        }
    };
    return LAppMotionSyncLive2DManager;
}());
exports.LAppMotionSyncLive2DManager = LAppMotionSyncLive2DManager;


/***/ }),

/***/ "./src/lappmotionsyncmodel.ts":
/*!************************************!*\
  !*** ./src/lappmotionsyncmodel.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppMotionSyncModel = void 0;
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
var cubismusermodel_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/model/cubismusermodel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmmap_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmmap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismdebug_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/utils/cubismdebug'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var LAppDefine = __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappdefine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var LAppMotionSyncDefine = __importStar(__webpack_require__(/*! ./lappmotionsyncdefine */ "./src/lappmotionsyncdefine.ts"));
var lappmotionsyncdelegate_1 = __webpack_require__(/*! ./lappmotionsyncdelegate */ "./src/lappmotionsyncdelegate.ts");
var lapppal_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lapppal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmoc_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/model/cubismmoc'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismmodelmotionsyncsettingjson_1 = __webpack_require__(/*! @motionsyncframework/cubismmodelmotionsyncsettingjson */ "../../../Framework/src/cubismmodelmotionsyncsettingjson.ts");
var lappplaysound_1 = __webpack_require__(/*! ./lappplaysound */ "./src/lappplaysound.ts");
var live2dcubismmotionsync_1 = __webpack_require__(/*! @motionsyncframework/live2dcubismmotionsync */ "../../../Framework/src/live2dcubismmotionsync.ts");
var lappglmanager_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappglmanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var LoadStep;
(function (LoadStep) {
    LoadStep[LoadStep["LoadAssets"] = 0] = "LoadAssets";
    LoadStep[LoadStep["LoadModel"] = 1] = "LoadModel";
    LoadStep[LoadStep["WaitLoadModel"] = 2] = "WaitLoadModel";
    LoadStep[LoadStep["LoadExpression"] = 3] = "LoadExpression";
    LoadStep[LoadStep["WaitLoadExpression"] = 4] = "WaitLoadExpression";
    LoadStep[LoadStep["LoadPhysics"] = 5] = "LoadPhysics";
    LoadStep[LoadStep["WaitLoadPhysics"] = 6] = "WaitLoadPhysics";
    LoadStep[LoadStep["LoadPose"] = 7] = "LoadPose";
    LoadStep[LoadStep["WaitLoadPose"] = 8] = "WaitLoadPose";
    LoadStep[LoadStep["SetupEyeBlink"] = 9] = "SetupEyeBlink";
    LoadStep[LoadStep["SetupBreath"] = 10] = "SetupBreath";
    LoadStep[LoadStep["LoadUserData"] = 11] = "LoadUserData";
    LoadStep[LoadStep["WaitLoadUserData"] = 12] = "WaitLoadUserData";
    LoadStep[LoadStep["SetupEyeBlinkIds"] = 13] = "SetupEyeBlinkIds";
    LoadStep[LoadStep["SetupLipSyncIds"] = 14] = "SetupLipSyncIds";
    LoadStep[LoadStep["SetupLayout"] = 15] = "SetupLayout";
    LoadStep[LoadStep["LoadMotionSync"] = 16] = "LoadMotionSync";
    LoadStep[LoadStep["LoadMotion"] = 17] = "LoadMotion";
    LoadStep[LoadStep["WaitLoadMotion"] = 18] = "WaitLoadMotion";
    LoadStep[LoadStep["CompleteInitialize"] = 19] = "CompleteInitialize";
    LoadStep[LoadStep["CompleteSetupModel"] = 20] = "CompleteSetupModel";
    LoadStep[LoadStep["LoadTexture"] = 21] = "LoadTexture";
    LoadStep[LoadStep["WaitLoadTexture"] = 22] = "WaitLoadTexture";
    LoadStep[LoadStep["CompleteSetup"] = 23] = "CompleteSetup";
})(LoadStep || (LoadStep = {}));
/**
 * ユーザーが実際に使用するモデルの実装クラス<br>
 * モデル生成、機能コンポーネント生成、更新処理とレンダリングの呼び出しを行う。
 */
var LAppMotionSyncModel = /** @class */ (function (_super) {
    __extends(LAppMotionSyncModel, _super);
    /**
     * コンストラクタ
     */
    function LAppMotionSyncModel() {
        var _this = _super.call(this) || this;
        _this._modelSetting = null;
        _this._modelHomeDir = null;
        _this._userTimeSeconds = 0.0;
        _this._hitArea = new csmvector_1.csmVector();
        _this._userArea = new csmvector_1.csmVector();
        if (LAppDefine.MOCConsistencyValidationEnable) {
            _this._mocConsistency = true;
        }
        _this._state = LoadStep.LoadAssets;
        _this._expressionCount = 0;
        _this._textureCount = 0;
        _this._motionCount = 0;
        _this._allMotionCount = 0;
        _this._consistency = false;
        _this._soundFileList = new csmvector_1.csmVector();
        _this._soundIndex = 0;
        _this._soundData = new lappplaysound_1.LAppPlaySound();
        return _this;
    }
    /**
     * model3.jsonが置かれたディレクトリとファイルパスからモデルを生成する
     * @param dir
     * @param fileName
     */
    LAppMotionSyncModel.prototype.loadAssets = function (dir, fileName) {
        var _this = this;
        this._modelHomeDir = dir;
        fetch("".concat(this._modelHomeDir).concat(fileName))
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (arrayBuffer) {
            var setting = new cubismmodelmotionsyncsettingjson_1.CubismModelMotionSyncSettingJson(arrayBuffer, arrayBuffer.byteLength);
            // ステートを更新
            _this._state = LoadStep.LoadModel;
            // 結果を保存
            _this.setupModel(setting);
        });
    };
    /**
     * model3.jsonからモデルを生成する。
     * model3.jsonの記述に従ってモデル生成、モーション、物理演算などのコンポーネント生成を行う。
     *
     * @param setting ICubismModelSettingのインスタンス
     */
    LAppMotionSyncModel.prototype.setupModel = function (setting) {
        var _this = this;
        this._updating = true;
        this._initialized = false;
        this._modelSetting = setting;
        // CubismModel
        if (this._modelSetting.getModelFileName() != '') {
            var modelFileName = this._modelSetting.getModelFileName();
            fetch("".concat(this._modelHomeDir).concat(modelFileName))
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                _this.loadModel(arrayBuffer, _this._mocConsistency);
                _this._state = LoadStep.SetupLayout;
                // Callback
                setupLayout();
            });
            this._state = LoadStep.WaitLoadModel;
        }
        else {
            lapppal_1.LAppPal.printMessage('Model data does not exist.');
        }
        // Layout
        var setupLayout = function () {
            var layout = new csmmap_1.csmMap();
            if (_this._modelSetting == null || _this._modelMatrix == null) {
                (0, cubismdebug_1.CubismLogError)('Failed to setupLayout().');
                return;
            }
            _this._modelSetting.getLayoutMap(layout);
            _this._modelMatrix.setupFromLayout(layout);
            _this._state = LoadStep.LoadMotionSync;
            // MotionSync
            setupMotionSync();
        };
        // MotionSync
        var setupMotionSync = function () {
            if (_this._modelSetting.getMotionSyncFileName() != '') {
                var motionSyncFile = _this._modelSetting.getMotionSyncFileName();
                fetch("".concat(_this._modelHomeDir).concat(motionSyncFile))
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadMotionSync(arrayBuffer, arrayBuffer.byteLength);
                    // 音声ファイルの読み込み
                    _this._soundFileList =
                        _this._modelSetting.getMotionSyncSoundFileList();
                    _this._soundIndex = 0;
                }).then(function () {
                    _this.loadFromSoundList();
                    _this._state = LoadStep.LoadTexture;
                    _this._updating = false;
                    _this._initialized = true;
                    _this.createRenderer();
                    _this.setupTextures();
                    _this.getRenderer().startUp(lappglmanager_1.gl);
                });
            }
        };
    };
    /**
     * モーションシンクデータの読み込み
     * @param buffer  physics3.jsonが読み込まれているバッファ
     * @param size    バッファのサイズ
     */
    LAppMotionSyncModel.prototype.loadMotionSync = function (buffer, size) {
        this._motionSync = live2dcubismmotionsync_1.CubismMotionSync.create(this._model, buffer, size, LAppMotionSyncDefine.SamplesPerSec);
    };
    /**
     * テクスチャユニットにテクスチャをロードする
     */
    LAppMotionSyncModel.prototype.setupTextures = function () {
        var _this = this;
        // iPhoneでのアルファ品質向上のためTypescriptではpremultipliedAlphaを採用
        var usePremultiply = true;
        if (this._state == LoadStep.LoadTexture) {
            // テクスチャ読み込み用
            var textureCount_1 = this._modelSetting.getTextureCount();
            var _loop_1 = function (modelTextureNumber) {
                // テクスチャ名が空文字だった場合はロード・バインド処理をスキップ
                if (this_1._modelSetting.getTextureFileName(modelTextureNumber) == '') {
                    console.log('getTextureFileName null');
                    return "continue";
                }
                // WebGLのテクスチャユニットにテクスチャをロードする
                var texturePath = this_1._modelSetting.getTextureFileName(modelTextureNumber);
                texturePath = this_1._modelHomeDir + texturePath;
                // ロード完了時に呼び出すコールバック関数
                var onLoad = function (textureInfo) {
                    _this.getRenderer().bindTexture(modelTextureNumber, textureInfo.id);
                    _this._textureCount++;
                    if (_this._textureCount >= textureCount_1) {
                        // ロード完了
                        _this._state = LoadStep.CompleteSetup;
                    }
                };
                // 読み込み
                lappmotionsyncdelegate_1.LAppMotionSyncDelegate.getInstance()
                    .getTextureManager()
                    .createTextureFromPngFile(texturePath, usePremultiply, onLoad);
                this_1.getRenderer().setIsPremultipliedAlpha(usePremultiply);
            };
            var this_1 = this;
            for (var modelTextureNumber = 0; modelTextureNumber < textureCount_1; modelTextureNumber++) {
                _loop_1(modelTextureNumber);
            }
            this._state = LoadStep.WaitLoadTexture;
        }
    };
    /**
     * レンダラを再構築する
     */
    LAppMotionSyncModel.prototype.reloadRenderer = function () {
        this.deleteRenderer();
        this.createRenderer();
        this.setupTextures();
    };
    /**
     * 音声ファイルリストから読み込みを行う。
     */
    LAppMotionSyncModel.prototype.loadFromSoundList = function () {
        if (!this._soundFileList || !this._soundData) {
            return;
        }
        this._soundData.getSoundBufferContext().getAudioManager()._audios.resize(this._soundFileList.getSize());
        this._soundData.getSoundBufferContext().getBuffers().resize(this._soundFileList.getSize());
        for (var index = 0; index < this._soundFileList.getSize(); index++) {
            var filePath = this._modelHomeDir + this._soundFileList.at(index).s;
            this._soundData.loadFile(filePath, index);
        }
    };
    /**
     * 現在の音声のコンテキストが待機状態かどうかを判定する
     *
     * @returns 現在の音声のコンテキストが待機状態か？
     */
    LAppMotionSyncModel.prototype.isSuspendedCurrentSoundContext = function () {
        return this._soundData.isSuspendedContextByIndex(this._soundIndex);
    };
    /**
     * 現在の音声を再生する
     */
    LAppMotionSyncModel.prototype.playCurrentSound = function () {
        if (!this._soundData ||
            !this._soundFileList ||
            !(this._soundIndex < this._soundFileList.getSize())) {
            return;
        }
        this._motionSync.setSoundBuffer(0, this._soundData
            .getSoundBufferContext()
            .getBuffers()
            .at(this._soundIndex));
        this._soundData.playByIndex(this._soundIndex);
    };
    /**
     * 現在の音声を再生停止する
     */
    LAppMotionSyncModel.prototype.stopCurrentSound = function () {
        if (!this._soundData ||
            !this._soundFileList ||
            !(this._soundIndex < this._soundFileList.getSize())) {
            return;
        }
        this._soundData.stopByIndex(this._soundIndex);
    };
    /**
     * 更新
     */
    LAppMotionSyncModel.prototype.update = function () {
        if (this._state != LoadStep.CompleteSetup)
            return;
        var deltaTimeSeconds = lapppal_1.LAppPal.getDeltaTime();
        this._userTimeSeconds += deltaTimeSeconds;
        // 物理演算の設定
        if (this._physics != null) {
            this._physics.evaluate(this._model, deltaTimeSeconds);
        }
        // ポーズの設定
        if (this._pose != null) {
            this._pose.updateParameters(this._model, deltaTimeSeconds);
        }
        if (this._soundData.isPlayByIndex(this._soundIndex)) {
            // 現在のフレームのデータを取得
            this._soundData.update();
            // サウンドバッファを新しいものへ更新
            this._motionSync.setSoundBuffer(0, this._soundData.getSoundBufferContext().getBuffers().at(this._soundIndex));
            // 現在のフレームのデータから解析処理を行う
            this._motionSync.updateParameters(this._model, deltaTimeSeconds);
            // 現在のフレームでの解析したサンプル数
            var processedCount = this._motionSync.getLastTotalProcessedCount(0);
            // 解析した数だけデータの配列の先頭から削除
            this._soundData.removeDataArrayByIndex(this._soundIndex, processedCount);
        }
        this._model.update();
    };
    /**
     * イベントの発火を受け取る
     */
    LAppMotionSyncModel.prototype.motionEventFired = function (eventValue) {
        (0, cubismdebug_1.CubismLogInfo)('{0} is fired on LAppModel!!', eventValue.s);
    };
    /**
     * 当たり判定テスト
     * 指定ＩＤの頂点リストから矩形を計算し、座標をが矩形範囲内か判定する。
     *
     * @param hitArenaName  当たり判定をテストする対象のID
     * @param x             判定を行うX座標
     * @param y             判定を行うY座標
     */
    LAppMotionSyncModel.prototype.hitTest = function (hitArenaName, x, y) {
        // 透明時は当たり判定無し。
        if (this._opacity < 1) {
            return false;
        }
        var count = this._modelSetting.getHitAreasCount();
        for (var i = 0; i < count; i++) {
            if (this._modelSetting.getHitAreaName(i) == hitArenaName) {
                var drawId = this._modelSetting.getHitAreaId(i);
                return this.isHit(drawId, x, y);
            }
        }
        return false;
    };
    /**
     * モデルを描画する処理。モデルを描画する空間のView-Projection行列を渡す。
     */
    LAppMotionSyncModel.prototype.doDraw = function () {
        if (this._model == null)
            return;
        // キャンバスサイズを渡す
        var viewport = [0, 0, lappglmanager_1.canvas.width, lappglmanager_1.canvas.height];
        this.getRenderer().setRenderState(lappmotionsyncdelegate_1.frameBuffer, viewport);
        this.getRenderer().drawModel();
    };
    /**
     * モデルを描画する処理。モデルを描画する空間のView-Projection行列を渡す。
     */
    LAppMotionSyncModel.prototype.draw = function (matrix) {
        if (this._model == null) {
            return;
        }
        // 各読み込み終了後
        if (this._state == LoadStep.CompleteSetup) {
            matrix.multiplyByMatrix(this._modelMatrix);
            this.getRenderer().setMvpMatrix(matrix);
            this.doDraw();
        }
    };
    LAppMotionSyncModel.prototype.hasMocConsistencyFromFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modelFileName, response, arrayBuffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, cubismdebug_1.CSM_ASSERT)(this._modelSetting.getModelFileName().localeCompare(""));
                        if (!(this._modelSetting.getModelFileName() != '')) return [3 /*break*/, 3];
                        modelFileName = this._modelSetting.getModelFileName();
                        return [4 /*yield*/, fetch("".concat(this._modelHomeDir).concat(modelFileName))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.arrayBuffer()];
                    case 2:
                        arrayBuffer = _a.sent();
                        this._consistency = cubismmoc_1.CubismMoc.hasMocConsistency(arrayBuffer);
                        if (!this._consistency) {
                            (0, cubismdebug_1.CubismLogInfo)('Inconsistent MOC3.');
                        }
                        else {
                            (0, cubismdebug_1.CubismLogInfo)('Consistent MOC3.');
                        }
                        return [2 /*return*/, this._consistency];
                    case 3:
                        lapppal_1.LAppPal.printMessage('Model data does not exist.');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LAppMotionSyncModel.prototype.release = function () {
        var _a, _b;
        _super.prototype.release.call(this);
        if (this._motionSync) {
            this._motionSync.release();
            this._motionSync = null;
        }
        if (this._soundFileList) {
            (_a = this._soundFileList) === null || _a === void 0 ? void 0 : _a.clear();
            this._soundFileList = null;
        }
        if (this._soundData) {
            (_b = this._soundData) === null || _b === void 0 ? void 0 : _b.release();
            this._soundData = null;
        }
    };
    return LAppMotionSyncModel;
}(cubismusermodel_1.CubismUserModel));
exports.LAppMotionSyncModel = LAppMotionSyncModel;


/***/ }),

/***/ "./src/lappmotionsyncview.ts":
/*!***********************************!*\
  !*** ./src/lappmotionsyncview.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppMotionSyncView = void 0;
var cubismmatrix44_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismmatrix44'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var cubismviewmatrix_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/math/cubismviewmatrix'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var LAppDefine = __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappdefine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var LAppMotionSyncDefine = __importStar(__webpack_require__(/*! ./lappmotionsyncdefine */ "./src/lappmotionsyncdefine.ts"));
var lappglmanager_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappglmanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var lappmotionsyncdelegate_1 = __webpack_require__(/*! ./lappmotionsyncdelegate */ "./src/lappmotionsyncdelegate.ts");
var lappsprite_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappsprite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var lappmotionsynclive2dmanager_1 = __webpack_require__(/*! ./lappmotionsynclive2dmanager */ "./src/lappmotionsynclive2dmanager.ts");
var lapppal_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lapppal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var touchmanager_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/touchmanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
/**
 * 描画クラス。
 */
var LAppMotionSyncView = /** @class */ (function () {
    /**
     * コンストラクタ
     */
    function LAppMotionSyncView() {
        this._programId = null;
        this._back = null;
        this._gear = null;
        this._fastForward = null;
        // タッチ関係のイベント管理
        this._touchManager = new touchmanager_1.TouchManager();
        // デバイス座標からスクリーン座標に変換するための
        this._deviceToScreen = new cubismmatrix44_1.CubismMatrix44();
        // 画面の表示の拡大縮小や移動の変換を行う行列
        this._viewMatrix = new cubismviewmatrix_1.CubismViewMatrix();
    }
    /**
     * 初期化する。
     */
    LAppMotionSyncView.prototype.initialize = function () {
        var width = lappglmanager_1.canvas.width, height = lappglmanager_1.canvas.height;
        var ratio = width / height;
        var left = -ratio;
        var right = ratio;
        var bottom = LAppDefine.ViewLogicalLeft;
        var top = LAppDefine.ViewLogicalRight;
        this._viewMatrix.setScreenRect(left, right, bottom, top); // デバイスに対応する画面の範囲。 Xの左端、Xの右端、Yの下端、Yの上端
        this._viewMatrix.scale(LAppDefine.ViewScale, LAppDefine.ViewScale);
        this._deviceToScreen.loadIdentity();
        if (width > height) {
            var screenW = Math.abs(right - left);
            this._deviceToScreen.scaleRelative(screenW / width, -screenW / width);
        }
        else {
            var screenH = Math.abs(top - bottom);
            this._deviceToScreen.scaleRelative(screenH / height, -screenH / height);
        }
        this._deviceToScreen.translateRelative(-width * 0.5, -height * 0.5);
        // 表示範囲の設定
        this._viewMatrix.setMaxScale(LAppDefine.ViewMaxScale); // 限界拡張率
        this._viewMatrix.setMinScale(LAppDefine.ViewMinScale); // 限界縮小率
        // 表示できる最大範囲
        this._viewMatrix.setMaxScreenRect(LAppDefine.ViewLogicalMaxLeft, LAppDefine.ViewLogicalMaxRight, LAppDefine.ViewLogicalMaxBottom, LAppDefine.ViewLogicalMaxTop);
    };
    /**
     * 解放する
     */
    LAppMotionSyncView.prototype.release = function () {
        this._viewMatrix = null;
        this._touchManager = null;
        this._deviceToScreen = null;
        this._fastForward.release();
        this._fastForward = null;
        this._gear.release();
        this._gear = null;
        this._back.release();
        this._back = null;
        lappglmanager_1.gl.deleteProgram(this._programId);
        this._programId = null;
    };
    /**
     * 描画する。
     */
    LAppMotionSyncView.prototype.render = function () {
        lappglmanager_1.gl.useProgram(this._programId);
        if (this._back) {
            this._back.render(this._programId);
        }
        if (this._gear) {
            this._gear.render(this._programId);
        }
        if (this._fastForward) {
            this._fastForward.render(this._programId);
        }
        lappglmanager_1.gl.flush();
        var live2DManager = lappmotionsynclive2dmanager_1.LAppMotionSyncLive2DManager.getInstance();
        live2DManager.setViewMatrix(this._viewMatrix);
        live2DManager.onUpdate();
    };
    /**
     * 画像の初期化を行う。
     */
    LAppMotionSyncView.prototype.initializeSprite = function () {
        var _this = this;
        var width = lappglmanager_1.canvas.width;
        var height = lappglmanager_1.canvas.height;
        var textureManager = lappmotionsyncdelegate_1.LAppMotionSyncDelegate.getInstance().getTextureManager();
        var resourcesPath = LAppDefine.ResourcesPath;
        var imageName = '';
        // 背景画像初期化
        imageName = LAppDefine.BackImageName;
        // 非同期なのでコールバック関数を作成
        var initBackGroundTexture = function (textureInfo) {
            var x = width * 0.5;
            var y = height * 0.5;
            var fwidth = textureInfo.width * 2.0;
            var fheight = height * 0.95;
            _this._back = new lappsprite_1.LAppSprite(x, y, fwidth, fheight, textureInfo.id);
        };
        textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initBackGroundTexture);
        // 歯車画像初期化
        imageName = LAppDefine.GearImageName;
        var initGearTexture = function (textureInfo) {
            var x = width - textureInfo.width * 0.5;
            var y = height - textureInfo.height * 0.5;
            var fwidth = textureInfo.width;
            var fheight = textureInfo.height;
            _this._gear = new lappsprite_1.LAppSprite(x, y, fwidth, fheight, textureInfo.id);
        };
        textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initGearTexture);
        // 音声遷移画像初期化
        imageName = LAppMotionSyncDefine.FastForwardImageName;
        var initFastForwardTexture = function (textureInfo) {
            var x = textureInfo.width * 0.5;
            var y = height - textureInfo.height * 0.5;
            var fwidth = textureInfo.width;
            var fheight = textureInfo.height;
            _this._fastForward = new lappsprite_1.LAppSprite(x, y, fwidth, fheight, textureInfo.id);
        };
        textureManager.createTextureFromPngFile(resourcesPath + imageName, false, initFastForwardTexture);
        // シェーダーを作成
        if (this._programId == null) {
            this._programId = lappmotionsyncdelegate_1.LAppMotionSyncDelegate.getInstance().createShader();
        }
    };
    /**
     * タッチされた時に呼ばれる。
     *
     * @param pointX スクリーンX座標
     * @param pointY スクリーンY座標
     */
    LAppMotionSyncView.prototype.onTouchesBegan = function (pointX, pointY) {
        this._touchManager.touchesBegan(pointX * window.devicePixelRatio, pointY * window.devicePixelRatio);
    };
    /**
     * タッチしているときにポインタが動いたら呼ばれる。
     *
     * @param pointX スクリーンX座標
     * @param pointY スクリーンY座標
     */
    LAppMotionSyncView.prototype.onTouchesMoved = function (pointX, pointY) {
        var viewX = this.transformViewX(this._touchManager.getX());
        var viewY = this.transformViewY(this._touchManager.getY());
        this._touchManager.touchesMoved(pointX * window.devicePixelRatio, pointY * window.devicePixelRatio);
    };
    /**
     * タッチが終了したら呼ばれる。
     *
     * @param pointX スクリーンX座標
     * @param pointY スクリーンY座標
     */
    LAppMotionSyncView.prototype.onTouchesEnded = function (pointX, pointY) {
        // タッチ終了
        var live2DManager = lappmotionsynclive2dmanager_1.LAppMotionSyncLive2DManager.getInstance();
        {
            // シングルタップ
            var x = this._deviceToScreen.transformX(this._touchManager.getX()); // 論理座標変換した座標を取得。
            var y = this._deviceToScreen.transformY(this._touchManager.getY()); // 論理座標変化した座標を取得。
            if (LAppDefine.DebugTouchLogEnable) {
                lapppal_1.LAppPal.printMessage("[APP]touchesEnded x: ".concat(x, " y: ").concat(y));
            }
            live2DManager.onTap(x, y);
            // 歯車にタップしたか
            if (this._gear.isHit(pointX * window.devicePixelRatio, pointY * window.devicePixelRatio)) {
                live2DManager.nextScene();
            }
            // 音声遷移にタップしたか
            if (this._fastForward.isHit(pointX * window.devicePixelRatio, pointY * window.devicePixelRatio)) {
                live2DManager.changeNextIndexSound();
            }
        }
    };
    /**
     * X座標をView座標に変換する。
     *
     * @param deviceX デバイスX座標
     */
    LAppMotionSyncView.prototype.transformViewX = function (deviceX) {
        var screenX = this._deviceToScreen.transformX(deviceX); // 論理座標変換した座標を取得。
        return this._viewMatrix.invertTransformX(screenX); // 拡大、縮小、移動後の値。
    };
    /**
     * Y座標をView座標に変換する。
     *
     * @param deviceY デバイスY座標
     */
    LAppMotionSyncView.prototype.transformViewY = function (deviceY) {
        var screenY = this._deviceToScreen.transformY(deviceY); // 論理座標変換した座標を取得。
        return this._viewMatrix.invertTransformY(screenY);
    };
    /**
     * X座標をScreen座標に変換する。
     * @param deviceX デバイスX座標
     */
    LAppMotionSyncView.prototype.transformScreenX = function (deviceX) {
        return this._deviceToScreen.transformX(deviceX);
    };
    /**
     * Y座標をScreen座標に変換する。
     *
     * @param deviceY デバイスY座標
     */
    LAppMotionSyncView.prototype.transformScreenY = function (deviceY) {
        return this._deviceToScreen.transformY(deviceY);
    };
    return LAppMotionSyncView;
}());
exports.LAppMotionSyncView = LAppMotionSyncView;


/***/ }),

/***/ "./src/lappplaysound.ts":
/*!******************************!*\
  !*** ./src/lappplaysound.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoundBufferContext = exports.LAppPlaySound = void 0;
var csmvector_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@framework/type/csmvector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var lappmotionsyncaudiomanager_1 = __webpack_require__(/*! ./lappmotionsyncaudiomanager */ "./src/lappmotionsyncaudiomanager.ts");
var LAppPlaySound = /** @class */ (function () {
    function LAppPlaySound() {
        this._soundBufferContext = new SoundBufferContext();
    }
    /**
     * パスからの音声ファイルの読み込み
     *
     * @param path ファイルパス
     */
    LAppPlaySound.prototype.loadFile = function (path, index) {
        var _this = this;
        this._soundBufferContext
            .getAudioManager()
            .createAudioFromFile(path, index, null, function (audioInfo, index) {
            _this._soundBufferContext
                .getBuffers()
                .set(index, new csmvector_1.csmVector());
            // 前回のサンプルから進んだ数の配列に設定
            _this._soundBufferContext.getUpdateSizes().pushBack(0);
            // Messege発した時にデータ取って来れるように設定
            _this._soundBufferContext
                .getAudioManager()
                .setOnMessageByIndex(index, _this._soundBufferContext.getBuffers().at(index), _this._soundBufferContext.getUpdateSizes());
        });
    };
    /**
     * 更新
     */
    LAppPlaySound.prototype.update = function () {
        var audioManager = this._soundBufferContext.getAudioManager();
        var updateSizes = this._soundBufferContext.getUpdateSizes();
        for (var index = 0; index < audioManager._audios.getSize(); index++) {
            if (!audioManager.isPlayByIndex(index)) {
                continue;
            }
            // 更新されたので要素数をリセット
            updateSizes.set(index, 0);
        }
    };
    /**
     * コンテナの先頭から要素を削除して他の要素をシフトする
     *
     * @param buffer 変更するバッファ
     * @param size 削除する大きさ
     * @returns 変更後のバッファ
     */
    LAppPlaySound.prototype.spliceBegin = function (buffer, size) {
        if (!(buffer === null || buffer === void 0 ? void 0 : buffer.begin()) || (buffer === null || buffer === void 0 ? void 0 : buffer._size) <= size) {
            return buffer; // 削除範囲外
        }
        // 削除
        buffer._ptr.splice(0, size);
        buffer._size -= size;
        return buffer;
    };
    /**
     * 先頭からsize分データを削除する
     *
     * @param index データを削除するバッファのインデックス
     * @param size 削除するデータの要素数
     */
    LAppPlaySound.prototype.removeDataArrayByIndex = function (index, size) {
        var buffer = this._soundBufferContext.getBuffers().at(index);
        if (size < buffer.getSize()) {
            // 途中からのバッファにする
            buffer = this.spliceBegin(buffer, size);
        }
        else {
            // バッファの全要素をクリア
            buffer.clear();
        }
    };
    /**
     * 指定したインデックスの音声コンテキストが待機状態になっているかを判定する
     *
     * @param index 指定するインデックス
     * @returns 音声コンテキストが待機状態になっているか？
     */
    LAppPlaySound.prototype.isSuspendedContextByIndex = function (index) {
        var audioContext = this.getSoundBufferContext()
            .getAudioManager()
            ._audios.at(index).audioContext;
        return audioContext.state == 'suspended';
    };
    /**
     * インデックスを使って音声を再生する。
     *
     * @param index インデックス
     */
    LAppPlaySound.prototype.playByIndex = function (index) {
        var _this = this;
        if (this.isPlayByIndex(index)) {
            return;
        }
        var audioContext = this.getSoundBufferContext()
            .getAudioManager()
            ._audios.at(index).audioContext;
        // まだ待機状態だったらrunningにする
        if (this.isSuspendedContextByIndex(index)) {
            audioContext.resume().then(function () {
                _this._soundBufferContext.getAudioManager().playByIndex(index);
            });
        }
        else {
            this._soundBufferContext.getAudioManager().playByIndex(index);
        }
    };
    /**
     * インデックスを使って音声の再生を停止する。
     *
     * @param index インデックス
     */
    LAppPlaySound.prototype.stopByIndex = function (index) {
        if (!this.isPlayByIndex(index)) {
            return;
        }
        this._soundBufferContext.getAudioManager().stopByIndex(index);
        // バッファの中身をクリアする。
        var buffer = this._soundBufferContext.getBuffers().at(index);
        buffer.clear();
    };
    /**
     * インデックスを使って音声が再生中か判定する。
     *
     * @param index インデックス
     * @returns 再生中か？
     */
    LAppPlaySound.prototype.isPlayByIndex = function (index) {
        return this._soundBufferContext.getAudioManager().isPlayByIndex(index);
    };
    LAppPlaySound.prototype.getSoundBufferContext = function () {
        return this._soundBufferContext;
    };
    LAppPlaySound.prototype.release = function () {
        if (this._soundBufferContext) {
            this._soundBufferContext.release();
            this._soundBufferContext = void 0;
        }
    };
    return LAppPlaySound;
}());
exports.LAppPlaySound = LAppPlaySound;
var SoundBufferContext = /** @class */ (function () {
    function SoundBufferContext(buffers, audioManager, updateSizes) {
        this._buffers = buffers
            ? buffers
            : new csmvector_1.csmVector();
        this._audioManager = audioManager
            ? audioManager
            : new lappmotionsyncaudiomanager_1.LAppMotionSyncAudioManager();
        this._updateSizes = updateSizes ? updateSizes : new csmvector_1.csmVector();
    }
    SoundBufferContext.prototype.getBuffers = function () {
        return this._buffers;
    };
    SoundBufferContext.prototype.getAudioManager = function () {
        return this._audioManager;
    };
    SoundBufferContext.prototype.getUpdateSizes = function () {
        return this._updateSizes;
    };
    SoundBufferContext.prototype.setUpdateSize = function (index, value) {
        this._updateSizes.set(index, value);
    };
    SoundBufferContext.prototype.release = function () {
        if (this._buffers != null) {
            this._buffers.clear();
            this._buffers = void 0;
        }
        if (this._audioManager != null) {
            this._audioManager.release();
            this._audioManager = void 0;
        }
        if (this._updateSizes != null) {
            this._updateSizes.clear();
            this._updateSizes = void 0;
        }
    };
    return SoundBufferContext;
}());
exports.SoundBufferContext = SoundBufferContext;


/***/ }),

/***/ "./src/mainmotionsync.ts":
/*!*******************************!*\
  !*** ./src/mainmotionsync.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var lappmotionsyncdelegate_1 = __webpack_require__(/*! ./lappmotionsyncdelegate */ "./src/lappmotionsyncdelegate.ts");
var LAppDefine = __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappdefine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
var lappglmanager_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@cubismsdksamples/lappglmanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
/**
 * ブラウザロード後の処理
 */
window.addEventListener('load', function () {
    // Initialize WebGL and create the application instance
    if (!lappglmanager_1.LAppGlManager.getInstance() ||
        !lappmotionsyncdelegate_1.LAppMotionSyncDelegate.getInstance().initialize()) {
        return;
    }
    lappmotionsyncdelegate_1.LAppMotionSyncDelegate.getInstance().run();
}, { passive: true });
/**
 * 終了時の処理
 */
window.addEventListener('beforeunload', function () { return lappmotionsyncdelegate_1.LAppMotionSyncDelegate.releaseInstance(); }, { passive: true });
/**
 * Process when changing screen size.
 */
window.addEventListener('resize', function () {
    if (LAppDefine.CanvasSize === 'auto') {
        lappmotionsyncdelegate_1.LAppMotionSyncDelegate.getInstance().onResize();
    }
}, { passive: true });


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMException: function() { return /* binding */ DOMException; },
/* harmony export */   Headers: function() { return /* binding */ Headers; },
/* harmony export */   Request: function() { return /* binding */ Request; },
/* harmony export */   Response: function() { return /* binding */ Response; },
/* harmony export */   fetch: function() { return /* binding */ fetch; }
/* harmony export */ });
/* eslint-disable no-prototype-builtins */
var g =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  // eslint-disable-next-line no-undef
  (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g) ||
  {}

var support = {
  searchParams: 'URLSearchParams' in g,
  iterable: 'Symbol' in g && 'iterator' in Symbol,
  blob:
    'FileReader' in g &&
    'Blob' in g &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in g,
  arrayBuffer: 'ArrayBuffer' in g
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      if (header.length != 2) {
        throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)
      }
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body._noBody) return
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type)
  var encoding = match ? match[1] : 'utf-8'
  reader.readAsText(blob, encoding)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    // eslint-disable-next-line no-self-assign
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._noBody = true;
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }
  }

  this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var isConsumed = consumed(this)
      if (isConsumed) {
        return isConsumed
      } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
        return Promise.resolve(
          this._bodyArrayBuffer.buffer.slice(
            this._bodyArrayBuffer.byteOffset,
            this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
          )
        )
      } else {
        return Promise.resolve(this._bodyArrayBuffer)
      }
    } else if (support.blob) {
      return this.blob().then(readBlobAsArrayBuffer)
    } else {
      throw new Error('could not read as ArrayBuffer')
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal || (function () {
    if ('AbortController' in g) {
      var ctrl = new AbortController();
      return ctrl.signal;
    }
  }());
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        try {
          headers.append(key, value)
        } catch (error) {
          console.warn('Response ' + error.message)
        }
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  if (this.status < 200 || this.status > 599) {
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].")
  }
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 200, statusText: ''})
  response.status = 0
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = g.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      // This check if specifically for when a user fetches a file locally from the file system
      // Only if the status is out of a normal range
      if (request.url.startsWith('file://') && (xhr.status < 200 || xhr.status > 599)) {
        options.status = 200;
      } else {
        options.status = xhr.status;
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request timed out'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && g.location.href ? g.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {
      var names = [];
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        names.push(normalizeName(name))
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
      request.headers.forEach(function(value, name) {
        if (names.indexOf(name) === -1) {
          xhr.setRequestHeader(name, value)
        }
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!g.fetch) {
  g.fetch = fetch
  g.Headers = Headers
  g.Request = Request
  g.Response = Response
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/mainmotionsync.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLDBCQUEwQixlQUFlO0FBQ3RFOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaG9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uLy4uL0ZyYW1ld29yay9zcmMvY3ViaXNtbW9kZWxtb3Rpb25zeW5jc2V0dGluZ2pzb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL0ZyYW1ld29yay9zcmMvY3ViaXNtbW90aW9uc3luY2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL0ZyYW1ld29yay9zcmMvY3ViaXNtbW90aW9uc3luY2RhdGFqc29uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9GcmFtZXdvcmsvc3JjL2N1YmlzbW1vdGlvbnN5bmNlbmdpbmVhbmFseXNpc3Jlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vRnJhbWV3b3JrL3NyYy9jdWJpc21tb3Rpb25zeW5jZW5naW5lY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vRnJhbWV3b3JrL3NyYy9jdWJpc21tb3Rpb25zeW5jZW5naW5lY3JpLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9GcmFtZXdvcmsvc3JjL2N1YmlzbW1vdGlvbnN5bmNlbmdpbmVsaWIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL0ZyYW1ld29yay9zcmMvY3ViaXNtbW90aW9uc3luY2VuZ2luZW1hcHBpbmdpbmZvLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9GcmFtZXdvcmsvc3JjL2N1YmlzbW1vdGlvbnN5bmNlbmdpbmV2ZXJzaW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9GcmFtZXdvcmsvc3JjL2N1YmlzbW1vdGlvbnN5bmNwcm9jZXNzb3JjcmkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL0ZyYW1ld29yay9zcmMvY3ViaXNtbW90aW9uc3luY3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL0ZyYW1ld29yay9zcmMvaWN1YmlzbW1vdGlvbnN5bmNlbmdpbmUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL0ZyYW1ld29yay9zcmMvaWN1YmlzbW1vdGlvbnN5bmNwcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL0ZyYW1ld29yay9zcmMvbGl2ZTJkY3ViaXNtbW90aW9uc3luYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vRnJhbWV3b3JrL3NyYy9tb3Rpb25zeW5jY29uZmlnX2NyaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFwcG1vdGlvbnN5bmNhdWRpb21hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhcHBtb3Rpb25zeW5jZGVmaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXBwbW90aW9uc3luY2RlbGVnYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXBwbW90aW9uc3luY2xpdmUyZG1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhcHBtb3Rpb25zeW5jbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhcHBtb3Rpb25zeW5jdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFwcHBsYXlzb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbm1vdGlvbnN5bmMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtTW9kZWxTZXR0aW5nSnNvbiB9IGZyb20gJ0BmcmFtZXdvcmsvY3ViaXNtbW9kZWxzZXR0aW5nanNvbic7XG5pbXBvcnQgeyBjc21TdHJpbmcgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3Ntc3RyaW5nJztcbmltcG9ydCB7IGNzbVZlY3RvciB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc212ZWN0b3InO1xuXG5leHBvcnQgY29uc3QgRmlsZVJlZmVyZW5jZXM6IHN0cmluZyA9ICdGaWxlUmVmZXJlbmNlcyc7XG5leHBvcnQgY29uc3QgTW90aW9uU3luYzogc3RyaW5nID0gJ01vdGlvblN5bmMnO1xuXG5leHBvcnQgY2xhc3MgQ3ViaXNtTW9kZWxNb3Rpb25TeW5jU2V0dGluZ0pzb24gZXh0ZW5kcyBDdWJpc21Nb2RlbFNldHRpbmdKc29uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKGJ1ZmZlcjogQXJyYXlCdWZmZXIsIHNpemU6IG51bWJlcikge1xuICAgIHN1cGVyKGJ1ZmZlciwgc2l6ZSk7XG4gICAgdGhpcy5fbW90aW9uU3luY0ZpbGVQYXRoID0gdGhpcy5HZXRKc29uKClcbiAgICAgIC5nZXRSb290KClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKEZpbGVSZWZlcmVuY2VzKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoTW90aW9uU3luYylcbiAgICAgIC5nZXRSYXdTdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb3Rpb25TeW5jRmlsZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW90aW9uU3luY0ZpbGVQYXRoO1xuICB9XG5cbiAgcHVibGljIGdldE1vdGlvblN5bmNTb3VuZEZpbGVMaXN0KCk6IGNzbVZlY3Rvcjxjc21TdHJpbmc+IHtcbiAgICBjb25zdCBsaXN0OiBjc21WZWN0b3I8Y3NtU3RyaW5nPiA9IG5ldyBjc21WZWN0b3I8Y3NtU3RyaW5nPigpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZ2V0TW90aW9uR3JvdXBDb3VudCgpOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBncm91cE5hbWU6IHN0cmluZyA9IHRoaXMuZ2V0TW90aW9uR3JvdXBOYW1lKGluZGV4KTtcblxuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGxpc3RJbmRleCA9IDA7XG4gICAgICAgIGxpc3RJbmRleCA8IHRoaXMuZ2V0TW90aW9uQ291bnQoZ3JvdXBOYW1lKTtcbiAgICAgICAgbGlzdEluZGV4KytcbiAgICAgICkge1xuICAgICAgICBsaXN0LnB1c2hCYWNrKFxuICAgICAgICAgIG5ldyBjc21TdHJpbmcodGhpcy5nZXRNb3Rpb25Tb3VuZEZpbGVOYW1lKGdyb3VwTmFtZSwgbGlzdEluZGV4KSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIHByaXZhdGUgX21vdGlvblN5bmNGaWxlUGF0aDogc3RyaW5nO1xufVxuXG4vLyBOYW1lc3BhY2UgZGVmaW5pdGlvbiBmb3IgY29tcGF0aWJpbGl0eS5cbmltcG9ydCAqIGFzICQgZnJvbSAnLi9jdWJpc21tb2RlbG1vdGlvbnN5bmNzZXR0aW5nanNvbic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21Nb3Rpb25TeW5jRnJhbWV3b3JrIHtcbiAgZXhwb3J0IGNvbnN0IEN1YmlzbU1vZGVsTW90aW9uU3luY1NldHRpbmdKc29uID1cbiAgICAkLkN1YmlzbU1vZGVsTW90aW9uU3luY1NldHRpbmdKc29uO1xuICBleHBvcnQgdHlwZSBDdWJpc21Nb2RlbE1vdGlvblN5bmNTZXR0aW5nSnNvbiA9XG4gICAgJC5DdWJpc21Nb2RlbE1vdGlvblN5bmNTZXR0aW5nSnNvbjtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IGNzbVN0cmluZyB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21zdHJpbmcnO1xuaW1wb3J0IHsgY3NtVmVjdG9yIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXZlY3Rvcic7XG5pbXBvcnQgeyBDdWJpc21Mb2dXYXJuaW5nIH0gZnJvbSAnQGZyYW1ld29yay91dGlscy9jdWJpc21kZWJ1Zyc7XG5pbXBvcnQgeyBDdWJpc21Nb2RlbCB9IGZyb20gJ0BmcmFtZXdvcmsvbW9kZWwvY3ViaXNtbW9kZWwnO1xuaW1wb3J0IHsgRW5naW5lVHlwZSB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY3V0aWwnO1xuaW1wb3J0IHsgQ3ViaXNtTW90aW9uU3luY0RhdGFKc29uIH0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jZGF0YWpzb24nO1xuaW1wb3J0IHsgQ3ViaXNtTW90aW9uU3luY0VuZ2luZU1hcHBpbmdJbmZvIH0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jZW5naW5lbWFwcGluZ2luZm8nO1xuXG5leHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uU3luY0RhdGEge1xuICAvKipcbiAgICog44Kk44Oz44K544K/44Oz44K544Gu5L2c5oiQXG4gICAqIEBwYXJhbSBidWZmZXIgICAgcGh5c2ljczMuanNvbuOBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgKiBAcGFyYW0gc2l6ZSAgICAgIOODkOODg+ODleOCoeOBruOCteOCpOOCulxuICAgKiBAcmV0dXJuIOS9nOaIkOOBleOCjOOBn+OCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjcmVhdGUobW9kZWw6IEN1YmlzbU1vZGVsLCBidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXQ6IEN1YmlzbU1vdGlvblN5bmNEYXRhID0gbmV3IEN1YmlzbU1vdGlvblN5bmNEYXRhKCk7XG5cbiAgICByZXQucGFyc2UobW9kZWwsIGJ1ZmZlciwgc2l6ZSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOOCpOODs+OCueOCv+ODs+OCueOCkuegtOajhOOBmeOCi1xuICAgKiBAcGFyYW0gbW90aW9uU3luY0RhdGEg56C05qOE44GZ44KL44Kk44Oz44K544K/44Oz44K5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGRlbGV0ZShtb3Rpb25TeW5jRGF0YTogQ3ViaXNtTW90aW9uU3luY0RhdGEpOiB2b2lkIHtcbiAgICBpZiAobW90aW9uU3luY0RhdGEgIT0gbnVsbCkge1xuICAgICAgbW90aW9uU3luY0RhdGEucmVsZWFzZSgpO1xuICAgICAgbW90aW9uU3luY0RhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogbW90aW9uc3luYzMuanNvbuOCkuODkeODvOOCueOBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gbW90aW9uU3luY0pzb24gIG1vdGlvbnN5bmMzLmpzb27jgYzoqq3jgb/ovrzjgb7jgozjgabjgYTjgovjg5Djg4Pjg5XjgqFcbiAgICogQHBhcmFtIHNpemUgICAgICAgIOODkOODg+ODleOCoeOBruOCteOCpOOCulxuICAgKi9cbiAgcHVibGljIHBhcnNlKFxuICAgIG1vZGVsOiBDdWJpc21Nb2RlbCxcbiAgICBtb3Rpb25TeW5jSnNvbjogQXJyYXlCdWZmZXIsXG4gICAgc2l6ZTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGxldCBqc29uOiBDdWJpc21Nb3Rpb25TeW5jRGF0YUpzb24gPSBuZXcgQ3ViaXNtTW90aW9uU3luY0RhdGFKc29uKFxuICAgICAgbW90aW9uU3luY0pzb24sXG4gICAgICBzaXplXG4gICAgKTtcblxuICAgIGlmIChqc29uLl9qc29uID09IG51bGwgfHwgbW9kZWwgPT0gbnVsbCkge1xuICAgICAgQ3ViaXNtTG9nV2FybmluZygnRmFpbGVkIHRvIHBhcnNlIC5tb3Rpb25zeW5jMy5qc29uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3ZlcnNpb24gPSBqc29uLmdldFZlcnNpb24oKTtcbiAgICB0aGlzLl9tZXRhID0ganNvbi5nZXRNZXRhKCk7XG5cbiAgICB0aGlzLl9zZXR0aW5ncyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU3luY0RhdGFTZXR0aW5nPigpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9tZXRhLnNldHRpbmdDb3VudDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5fc2V0dGluZ3MucHVzaEJhY2soanNvbi5nZXRTZXR0aW5nKGluZGV4KSk7XG4gICAgfVxuICAgIHRoaXMuX3NldHRpbmdDb3VudCA9IHRoaXMuX3NldHRpbmdzLmdldFNpemUoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zZXR0aW5ncy5nZXRTaXplKCk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGN1YmlzbVBhcmFtZXRlckxpc3QgPSB0aGlzLl9zZXR0aW5ncy5hdChpbmRleCkuY3ViaXNtUGFyYW1ldGVyTGlzdDtcbiAgICAgIGNvbnN0IHBhcmFtZXRlckNvdW50ID0gY3ViaXNtUGFyYW1ldGVyTGlzdC5nZXRTaXplKCk7XG5cbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBjdWJpc21QYXJhbWV0ZXJJbmRleCA9IDA7XG4gICAgICAgIGN1YmlzbVBhcmFtZXRlckluZGV4IDwgcGFyYW1ldGVyQ291bnQ7XG4gICAgICAgIGN1YmlzbVBhcmFtZXRlckluZGV4KytcbiAgICAgICkge1xuICAgICAgICBsZXQgcGFydEluZGV4OiBudW1iZXIgPSBwYXJhbWV0ZXJDb3VudDtcblxuICAgICAgICBmb3IgKFxuICAgICAgICAgIGxldCBtb2RlbFBhcmFtZXRlckluZGV4ID0gMDtcbiAgICAgICAgICBtb2RlbFBhcmFtZXRlckluZGV4IDwgbW9kZWwuZ2V0UGFyYW1ldGVyQ291bnQoKTtcbiAgICAgICAgICBtb2RlbFBhcmFtZXRlckluZGV4KytcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbW9kZWxcbiAgICAgICAgICAgICAgLmdldFBhcmFtZXRlcklkKG1vZGVsUGFyYW1ldGVySW5kZXgpXG4gICAgICAgICAgICAgIC5pc0VxdWFsKGN1YmlzbVBhcmFtZXRlckxpc3QuYXQoY3ViaXNtUGFyYW1ldGVySW5kZXgpLmlkKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcGFydEluZGV4ID0gbW9kZWxQYXJhbWV0ZXJJbmRleDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjdWJpc21QYXJhbWV0ZXJMaXN0LmF0KGN1YmlzbVBhcmFtZXRlckluZGV4KS5wYXJhbWV0ZXJJbmRleCA9IHBhcnRJbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBqc29uLnJlbGVhc2UoKTtcbiAgICBqc29uID0gdm9pZCAwO1xuICAgIGpzb24gPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOODh+OCueODiOODqeOCr+OCv+ebuOW9k+OBruWHpueQhlxuICAgKi9cbiAgcHVibGljIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZvaWQgMDtcbiAgICB0aGlzLl9tZXRhID0gdm9pZCAwO1xuICAgIHRoaXMuX21ldGEgPSBudWxsO1xuICAgIHRoaXMuX3NldHRpbmdzID0gdm9pZCAwO1xuICAgIHRoaXMuX3NldHRpbmdzID0gbnVsbDtcbiAgICB0aGlzLl9zZXR0aW5nQ291bnQgPSAwO1xuICB9XG5cbiAgcHVibGljIGdldFZlcnNpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNZXRhKCk6IEN1YmlzbU1vdGlvblN5bmNEYXRhTWV0YSB7XG4gICAgcmV0dXJuIHRoaXMuX21ldGE7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2V0dGluZyhpbmRleDogbnVtYmVyKTogQ3ViaXNtTW90aW9uU3luY0RhdGFTZXR0aW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuYXQoaW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGdldFNldHRpbmdDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zZXR0aW5nQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWFwcGluZ0luZm9MaXN0KFxuICAgIGluZGV4OiBudW1iZXJcbiAgKTogY3NtVmVjdG9yPEN1YmlzbU1vdGlvblN5bmNFbmdpbmVNYXBwaW5nSW5mbz4ge1xuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5nZXRTaXplKCkgPD0gaW5kZXgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXBwaW5nSW5mb0xpc3Q6IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25TeW5jRW5naW5lTWFwcGluZ0luZm8+ID1cbiAgICAgIG5ldyBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU3luY0VuZ2luZU1hcHBpbmdJbmZvPigpO1xuXG4gICAgY29uc3Qgc2V0dGluZyA9IHRoaXMuZ2V0U2V0dGluZyhpbmRleCk7XG5cbiAgICBmb3IgKFxuICAgICAgbGV0IGF1ZGlvUGFyYW1JbmRleCA9IDA7XG4gICAgICBhdWRpb1BhcmFtSW5kZXggPCBzZXR0aW5nLmF1ZGlvUGFyYW1ldGVyTGlzdC5nZXRTaXplKCk7XG4gICAgICBhdWRpb1BhcmFtSW5kZXgrK1xuICAgICkge1xuICAgICAgY29uc3QgYXVkaW9QYXJhbUlkOiBjc21TdHJpbmcgPVxuICAgICAgICBzZXR0aW5nLmF1ZGlvUGFyYW1ldGVyTGlzdC5hdChhdWRpb1BhcmFtSW5kZXgpLmlkO1xuXG4gICAgICBjb25zdCBtb2RlbFBhcmFtSWRzOiBjc21WZWN0b3I8Y3NtU3RyaW5nPiA9IG5ldyBjc21WZWN0b3I8Y3NtU3RyaW5nPigpO1xuICAgICAgY29uc3QgbW9kZWxQYXJhbVZhbHVlczogY3NtVmVjdG9yPG51bWJlcj4gPSBuZXcgY3NtVmVjdG9yPG51bWJlcj4oKTtcblxuICAgICAgZm9yIChcbiAgICAgICAgbGV0IHNlcmNoSW5kZXggPSAwO1xuICAgICAgICBzZXJjaEluZGV4IDwgc2V0dGluZy5hdWRpb1BhcmFtZXRlckxpc3QuZ2V0U2l6ZSgpO1xuICAgICAgICBzZXJjaEluZGV4KytcbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYXVkaW9QYXJhbUlkLmlzRXF1YWwoc2V0dGluZy5tYXBwaW5nTGlzdC5hdChzZXJjaEluZGV4KS5hdWRpb0lkLnMpXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICBsZXQgY3ViaXNtUHJhbUluZGV4ID0gMDtcbiAgICAgICAgICAgIGN1YmlzbVByYW1JbmRleCA8IHNldHRpbmcuY3ViaXNtUGFyYW1ldGVyTGlzdC5nZXRTaXplKCk7XG4gICAgICAgICAgICBjdWJpc21QcmFtSW5kZXgrK1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0OiBDdWJpc21Nb3Rpb25TeW5jRGF0YU1hcHBpbmdUYXJnZXQgPVxuICAgICAgICAgICAgICBzZXR0aW5nLm1hcHBpbmdMaXN0LmF0KHNlcmNoSW5kZXgpLnRhcmdldExpc3QuYXQoY3ViaXNtUHJhbUluZGV4KTtcbiAgICAgICAgICAgIG1vZGVsUGFyYW1JZHMucHVzaEJhY2sodGFyZ2V0LmlkKTtcbiAgICAgICAgICAgIG1vZGVsUGFyYW1WYWx1ZXMucHVzaEJhY2sodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NhbGU6IG51bWJlciA9XG4gICAgICAgIHNldHRpbmcuYXVkaW9QYXJhbWV0ZXJMaXN0LmF0KGF1ZGlvUGFyYW1JbmRleCkuc2NhbGU7XG4gICAgICBjb25zdCBlbmFibGVkOiBib29sZWFuID1cbiAgICAgICAgc2V0dGluZy5hdWRpb1BhcmFtZXRlckxpc3QuYXQoYXVkaW9QYXJhbUluZGV4KS5lbmFibGVkO1xuXG4gICAgICBtYXBwaW5nSW5mb0xpc3QucHVzaEJhY2soXG4gICAgICAgIG5ldyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lTWFwcGluZ0luZm8oXG4gICAgICAgICAgYXVkaW9QYXJhbUlkLFxuICAgICAgICAgIG1vZGVsUGFyYW1JZHMsXG4gICAgICAgICAgbW9kZWxQYXJhbVZhbHVlcyxcbiAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICBlbmFibGVkXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcHBpbmdJbmZvTGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fdmVyc2lvbiA9IDA7XG4gICAgdGhpcy5fbWV0YSA9IG51bGw7XG4gICAgdGhpcy5fc2V0dGluZ3MgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmVyc2lvbjogbnVtYmVyO1xuICBwcml2YXRlIF9tZXRhOiBDdWJpc21Nb3Rpb25TeW5jRGF0YU1ldGE7XG4gIHByaXZhdGUgX3NldHRpbmdzOiBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU3luY0RhdGFTZXR0aW5nPjtcbiAgcHJpdmF0ZSBfc2V0dGluZ0NvdW50OiBudW1iZXI7XG59XG5cbi8qKlxuICog44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu44Om44O844K544Kx44O844K5XG4gKi9cbmV4cG9ydCBlbnVtIEN1YmlzbU1vdGlvblN5bmNEYXRhVXNlQ2FzZSB7XG4gIFVzZUNhc2VfTW91dGggPSAwLFxuICBVc2VDYXNlX1Vua25vd25cbn1cblxuLyoqXG4gKiDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jg57jg4Pjg5Tjg7PjgrDjgr/jgqTjg5dcbiAqL1xuZXhwb3J0IGVudW0gQ3ViaXNtTW90aW9uU3luY0RhdGFNYXBwaW5nVHlwZSB7XG4gIE1hcHBpbmdUeXBlX1NoYXBlID0gMCxcbiAgTWFwcGluZ1R5cGVfVW5rbm93blxufVxuXG4vKipcbiAqIOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBrklk44Go5ZCN56ewXG4gKi9cbmV4cG9ydCBjbGFzcyBDdWJpc21Nb3Rpb25TeW5jRGF0YU1ldGFEaWN0aW9uYXJ5IHtcbiAgcHVibGljIGlkOiBjc21TdHJpbmc7XG4gIHB1YmxpYyBuYW1lOiBjc21TdHJpbmc7XG59XG5cbi8qKlxuICog44Oh44K/44OH44O844K/XG4gKi9cbmV4cG9ydCBjbGFzcyBDdWJpc21Nb3Rpb25TeW5jRGF0YU1ldGEge1xuICBwdWJsaWMgc2V0dGluZ0NvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBkaWN0aW9uYXJ5OiBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU3luY0RhdGFNZXRhRGljdGlvbmFyeT47XG59XG5cbi8qKlxuICogQ3ViaXNtUGFyYW1ldGFyc+OBq+eZu+mMsuOBleOCjOOBpuOBhOOCi0N1YmlzbVBhcmFtZXRhclxuICovXG5leHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uU3luY0RhdGFDdWJpc21QYXJhbWV0ZXIge1xuICBwdWJsaWMgbmFtZTogY3NtU3RyaW5nO1xuICBwdWJsaWMgaWQ6IGNzbVN0cmluZztcbiAgcHVibGljIG1pbjogbnVtYmVyO1xuICBwdWJsaWMgbWF4OiBudW1iZXI7XG4gIHB1YmxpYyBkYW1wZXI6IG51bWJlcjtcbiAgcHVibGljIHNtb290aDogbnVtYmVyO1xuICBwdWJsaWMgcGFyYW1ldGVySW5kZXg6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBdWRpb1BhcmFtZXRlcnPjgavnmbvpjLLjgZXjgozjgabjgYTjgovpn7Plo7Djga7opoHntKBcbiAqL1xuZXhwb3J0IGNsYXNzIEN1YmlzbU1vdGlvblN5bmNEYXRhQXVkaW9QYXJhbWV0ZXIge1xuICBwdWJsaWMgbmFtZTogY3NtU3RyaW5nO1xuICBwdWJsaWMgaWQ6IGNzbVN0cmluZztcbiAgcHVibGljIG1pbjogbnVtYmVyO1xuICBwdWJsaWMgbWF4OiBudW1iZXI7XG4gIHB1YmxpYyBzY2FsZTogbnVtYmVyO1xuICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiDjg57jg4Pjg5Tjg7PjgrDjga7jgr/jg7zjgrLjg4Pjg4hcbiAqL1xuZXhwb3J0IGNsYXNzIEN1YmlzbU1vdGlvblN5bmNEYXRhTWFwcGluZ1RhcmdldCB7XG4gIHB1YmxpYyBpZDogY3NtU3RyaW5nO1xuICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcbn1cblxuLyoqXG4gKiDjg57jg4Pjg5Tjg7PjgrDjg4fjg7zjgr9cbiAqL1xuZXhwb3J0IGNsYXNzIEN1YmlzbU1vdGlvblN5bmNEYXRhTWFwcGluZyB7XG4gIHB1YmxpYyB0eXBlOiBDdWJpc21Nb3Rpb25TeW5jRGF0YU1hcHBpbmdUeXBlO1xuICBwdWJsaWMgYXVkaW9JZDogY3NtU3RyaW5nO1xuICBwdWJsaWMgdGFyZ2V0TGlzdDogY3NtVmVjdG9yPEN1YmlzbU1vdGlvblN5bmNEYXRhTWFwcGluZ1RhcmdldD47XG59XG5cbmV4cG9ydCBjbGFzcyBDdWJpc21Nb3Rpb25TeW5jRGF0YVNldHRpbmcge1xuICBwdWJsaWMgaWQ6IGNzbVN0cmluZztcbiAgcHVibGljIGFuYWx5c2lzVHlwZTogRW5naW5lVHlwZTtcbiAgcHVibGljIHVzZUNhc2U6IEN1YmlzbU1vdGlvblN5bmNEYXRhVXNlQ2FzZTtcbiAgcHVibGljIGN1YmlzbVBhcmFtZXRlckxpc3Q6IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25TeW5jRGF0YUN1YmlzbVBhcmFtZXRlcj47XG4gIHB1YmxpYyBhdWRpb1BhcmFtZXRlckxpc3Q6IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25TeW5jRGF0YUF1ZGlvUGFyYW1ldGVyPjtcbiAgcHVibGljIG1hcHBpbmdMaXN0OiBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU3luY0RhdGFNYXBwaW5nPjtcbiAgcHVibGljIGJsZW5kUmF0aW86IG51bWJlcjtcbiAgcHVibGljIHNtb290aGluZzogbnVtYmVyO1xuICBwdWJsaWMgc2FtcGxlUmF0ZTogbnVtYmVyO1xufVxuXG4vLyBOYW1lc3BhY2UgZGVmaW5pdGlvbiBmb3IgY29tcGF0aWJpbGl0eS5cbmltcG9ydCAqIGFzICQgZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jZGF0YSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21Nb3Rpb25TeW5jRnJhbWV3b3JrIHtcbiAgZXhwb3J0IGNvbnN0IEN1YmlzbU1vdGlvblN5bmNEYXRhID0gJC5DdWJpc21Nb3Rpb25TeW5jRGF0YTtcbiAgZXhwb3J0IHR5cGUgQ3ViaXNtTW90aW9uU3luY0RhdGEgPSAkLkN1YmlzbU1vdGlvblN5bmNEYXRhO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtSnNvbiwgSnNvbk1hcCB9IGZyb20gJ0BmcmFtZXdvcmsvdXRpbHMvY3ViaXNtanNvbic7XG5pbXBvcnQgeyBjc21WZWN0b3IgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yJztcbmltcG9ydCB7IGNzbVN0cmluZyB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21zdHJpbmcnO1xuaW1wb3J0IHsgQ3ViaXNtTG9nV2FybmluZyB9IGZyb20gJ0BmcmFtZXdvcmsvdXRpbHMvY3ViaXNtZGVidWcnO1xuaW1wb3J0IHsgRW5naW5lVHlwZSB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY3V0aWwnO1xuaW1wb3J0IHsgQ3ViaXNtTW90aW9uU3luYyB9IGZyb20gJy4vbGl2ZTJkY3ViaXNtbW90aW9uc3luYyc7XG5pbXBvcnQge1xuICBDdWJpc21Nb3Rpb25TeW5jRGF0YSxcbiAgQ3ViaXNtTW90aW9uU3luY0RhdGFBdWRpb1BhcmFtZXRlcixcbiAgQ3ViaXNtTW90aW9uU3luY0RhdGFDdWJpc21QYXJhbWV0ZXIsXG4gIEN1YmlzbU1vdGlvblN5bmNEYXRhTWFwcGluZyxcbiAgQ3ViaXNtTW90aW9uU3luY0RhdGFNYXBwaW5nVGFyZ2V0LFxuICBDdWJpc21Nb3Rpb25TeW5jRGF0YU1hcHBpbmdUeXBlLFxuICBDdWJpc21Nb3Rpb25TeW5jRGF0YU1ldGEsXG4gIEN1YmlzbU1vdGlvblN5bmNEYXRhTWV0YURpY3Rpb25hcnksXG4gIEN1YmlzbU1vdGlvblN5bmNEYXRhU2V0dGluZyxcbiAgQ3ViaXNtTW90aW9uU3luY0RhdGFVc2VDYXNlXG59IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2RhdGEnO1xuXG4vLyBKU09OIGtleXNcbmNvbnN0IFZlcnNpb24gPSAnVmVyc2lvbic7XG5jb25zdCBNZXRhID0gJ01ldGEnO1xuY29uc3QgU2V0dGluZ0NvdW50ID0gJ1NldHRpbmdDb3VudCc7XG5jb25zdCBEaWN0aW9uYXJ5ID0gJ0RpY3Rpb25hcnknO1xuY29uc3QgSWQgPSAnSWQnO1xuY29uc3QgTmFtZSA9ICdOYW1lJztcbmNvbnN0IFNldHRpbmdzID0gJ1NldHRpbmdzJztcbmNvbnN0IEFuYWx5c2lzVHlwZSA9ICdBbmFseXNpc1R5cGUnO1xuY29uc3QgVXNlQ2FzZSA9ICdVc2VDYXNlJztcbmNvbnN0IEN1YmlzbVBhcmFtZXRlcnMgPSAnQ3ViaXNtUGFyYW1ldGVycyc7XG5jb25zdCBNaW4gPSAnTWluJztcbmNvbnN0IE1heCA9ICdNYXgnO1xuY29uc3QgRGFtcGVyID0gJ0RhbXBlcic7XG5jb25zdCBTbW9vdGggPSAnU21vb3RoJztcbmNvbnN0IEF1ZGlvUGFyYW1ldGVycyA9ICdBdWRpb1BhcmFtZXRlcnMnO1xuY29uc3QgU2NhbGUgPSAnU2NhbGUnO1xuY29uc3QgRW5hYmxlZCA9ICdFbmFibGVkJztcbmNvbnN0IE1hcHBpbmdzID0gJ01hcHBpbmdzJztcbmNvbnN0IFR5cGUgPSAnVHlwZSc7XG5jb25zdCBUYXJnZXRzID0gJ1RhcmdldHMnO1xuY29uc3QgVmFsdWUgPSAnVmFsdWUnO1xuY29uc3QgUG9zdFByb2Nlc3NpbmcgPSAnUG9zdFByb2Nlc3NpbmcnO1xuY29uc3QgQmxlbmRSYXRpbyA9ICdCbGVuZFJhdGlvJztcbmNvbnN0IFNtb290aGluZyA9ICdTbW9vdGhpbmcnO1xuY29uc3QgU2FtcGxlUmF0ZSA9ICdTYW1wbGVSYXRlJztcblxuLyoqXG4gKiBtb3Rpb25zeW5jMy5qc29u44Gu44Kz44Oz44OG44OK44CCXG4gKi9cbmV4cG9ydCBjbGFzcyBDdWJpc21Nb3Rpb25TeW5jRGF0YUpzb24ge1xuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqIEBwYXJhbSBidWZmZXIgbW90aW9uc3luYzMuanNvbuOBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9qc29uID0gQ3ViaXNtSnNvbi5jcmVhdGUoYnVmZmVyLCBzaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlKCk6IHZvaWQge1xuICAgIEN1YmlzbUpzb24uZGVsZXRlKHRoaXMuX2pzb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIOODkOODvOOCuOODp+ODs+aDheWgseOCkuWPluW+l+OBmeOCi1xuICAgKiBAcmV0dXJuIOODkOODvOOCuOODp+ODs+aVsFxuICAgKi9cbiAgcHVibGljIGdldFZlcnNpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fanNvbi5nZXRSb290KCkuZ2V0VmFsdWVCeVN0cmluZyhWZXJzaW9uKS50b0ludCgpO1xuICB9XG5cbiAgLy8gLS0tIE1ldGEgLS0tXG5cbiAgLyoqXG4gICAqIOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruODoeOCv+aDheWgseOCkuWPluW+l+OBmeOCi1xuICAgKiBAcmV0dXJuIOODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruODoeOCv+aDheWgsVxuICAgKi9cbiAgcHVibGljIGdldE1ldGEoKTogQ3ViaXNtTW90aW9uU3luY0RhdGFNZXRhIHtcbiAgICBsZXQgbWV0YTogQ3ViaXNtTW90aW9uU3luY0RhdGFNZXRhID0gbnVsbDtcbiAgICBtZXRhID0gbmV3IEN1YmlzbU1vdGlvblN5bmNEYXRhTWV0YSgpO1xuXG4gICAgbWV0YS5zZXR0aW5nQ291bnQgPSB0aGlzLmdldFNldHRpbmdDb3VudCgpO1xuICAgIG1ldGEuZGljdGlvbmFyeSA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU3luY0RhdGFNZXRhRGljdGlvbmFyeT4oKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtZXRhLnNldHRpbmdDb3VudDsgaW5kZXgrKykge1xuICAgICAgbWV0YS5kaWN0aW9uYXJ5LnB1c2hCYWNrKHRoaXMuZ2V0TWV0YURpY3Rpb25hcnlJdGVtKGluZGV4KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGE7XG4gIH1cblxuICAvKipcbiAgICogTWV0YeOBruODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuODquOCueODiOOBruOCouOCpOODhuODoOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gaW5kZXgg44Ki44Kk44OG44Og44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4g44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Oq44K544OI44Gu44Ki44Kk44OG44OgXG4gICAqL1xuICBwdWJsaWMgZ2V0TWV0YURpY3Rpb25hcnlJdGVtKFxuICAgIGluZGV4OiBudW1iZXJcbiAgKTogQ3ViaXNtTW90aW9uU3luY0RhdGFNZXRhRGljdGlvbmFyeSB7XG4gICAgY29uc3QgZGljdGlvbmFyeTogQ3ViaXNtTW90aW9uU3luY0RhdGFNZXRhRGljdGlvbmFyeSA9XG4gICAgICBuZXcgQ3ViaXNtTW90aW9uU3luY0RhdGFNZXRhRGljdGlvbmFyeSgpO1xuICAgIGRpY3Rpb25hcnkuaWQgPSBuZXcgY3NtU3RyaW5nKHRoaXMuZ2V0SWRGcm9tTWV0YShpbmRleCkpO1xuICAgIGRpY3Rpb25hcnkubmFtZSA9IG5ldyBjc21TdHJpbmcodGhpcy5nZXROYW1lKGluZGV4KSk7XG5cbiAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7mlbDjgpLlj5blvpfjgZnjgotcbiAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7mlbBcbiAgICovXG4gIHB1YmxpYyBnZXRTZXR0aW5nQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoTWV0YSlcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFNldHRpbmdDb3VudClcbiAgICAgIC50b0ludCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGHjgYvjgonjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga5JZOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gc2V0dGluZ0luZGV4IOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBrklkXG4gICAqL1xuICBwdWJsaWMgZ2V0SWRGcm9tTWV0YShzZXR0aW5nSW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25cbiAgICAgIC5nZXRSb290KClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKE1ldGEpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhEaWN0aW9uYXJ5KVxuICAgICAgLmdldFZhbHVlQnlJbmRleChzZXR0aW5nSW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhJZClcbiAgICAgIC5nZXRTdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7lkI3liY3jgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHNldHRpbmdJbmRleCDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7lkI3liY1cbiAgICovXG4gIHB1YmxpYyBnZXROYW1lKHNldHRpbmdJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoTWV0YSlcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKERpY3Rpb25hcnkpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHNldHRpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKE5hbWUpXG4gICAgICAuZ2V0U3RyaW5nKCk7XG4gIH1cblxuICAvLyAtLS0gU2V0dGluZ3MgLS0tXG5cbiAgLyoqXG4gICAqIFNldHRpbmdz44GL44KJ44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSBzZXR0aW5nSW5kZXgg44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4g44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6aXG4gICAqL1xuICBwdWJsaWMgZ2V0U2V0dGluZyhzZXR0aW5nSW5kZXg6IG51bWJlcik6IEN1YmlzbU1vdGlvblN5bmNEYXRhU2V0dGluZyB7XG4gICAgY29uc3Qgc2V0dGluZzogQ3ViaXNtTW90aW9uU3luY0RhdGFTZXR0aW5nID1cbiAgICAgIG5ldyBDdWJpc21Nb3Rpb25TeW5jRGF0YVNldHRpbmcoKTtcblxuICAgIC8vIElkXG4gICAgc2V0dGluZy5pZCA9IG5ldyBjc21TdHJpbmcodGhpcy5nZXRJZEZyb21TZXR0aW5ncyhzZXR0aW5nSW5kZXgpKTtcblxuICAgIC8vIEFuYWx5c2lzVHlwZVxuICAgIGNvbnN0IGFuYWx5c2lzVHlwZTogc3RyaW5nID0gdGhpcy5nZXRBbmFseXNpc1R5cGUoc2V0dGluZ0luZGV4KTtcbiAgICBzd2l0Y2ggKGFuYWx5c2lzVHlwZSkge1xuICAgICAgY2FzZSAnQ1JJJzpcbiAgICAgICAgc2V0dGluZy5hbmFseXNpc1R5cGUgPSBFbmdpbmVUeXBlLkVuZ2luZVR5cGVfQ3JpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoJ1Vua25vd24gU2V0dGluZ3MuQW5hbHlzaXNUeXBlLicpO1xuICAgICAgICBzZXR0aW5nLmFuYWx5c2lzVHlwZSA9IEVuZ2luZVR5cGUuRW5naW5lVHlwZV9Vbmtub3duO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBVc2VDYXNlXG4gICAgY29uc3QgdXNlQ2FzZTogc3RyaW5nID0gdGhpcy5nZXRVc2VDYXNlKHNldHRpbmdJbmRleCk7XG4gICAgc3dpdGNoICh1c2VDYXNlKSB7XG4gICAgICBjYXNlICdNb3V0aCc6XG4gICAgICAgIHNldHRpbmcudXNlQ2FzZSA9IEN1YmlzbU1vdGlvblN5bmNEYXRhVXNlQ2FzZS5Vc2VDYXNlX01vdXRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoJ1Vua25vd24gU2V0dGluZ3MuVXNlQ2FzZS4nKTtcbiAgICAgICAgc2V0dGluZy51c2VDYXNlID0gQ3ViaXNtTW90aW9uU3luY0RhdGFVc2VDYXNlLlVzZUNhc2VfVW5rbm93bjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gQ3ViaXNtUGFyYW1ldGFyc1xuICAgIGNvbnN0IGN1YmlzbVBhcmFtZXRhcnNDb3VudDogbnVtYmVyID0gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoU2V0dGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHNldHRpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKEN1YmlzbVBhcmFtZXRlcnMpXG4gICAgICAuZ2V0U2l6ZSgpO1xuXG4gICAgc2V0dGluZy5jdWJpc21QYXJhbWV0ZXJMaXN0ID1cbiAgICAgIG5ldyBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU3luY0RhdGFDdWJpc21QYXJhbWV0ZXI+KCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGN1YmlzbVBhcmFtZXRhcnNDb3VudDsgaW5kZXgrKykge1xuICAgICAgc2V0dGluZy5jdWJpc21QYXJhbWV0ZXJMaXN0LnB1c2hCYWNrKFxuICAgICAgICB0aGlzLmdldEN1YmlzbVBhcmFtZXRhcnNFbGVtZW50KHNldHRpbmdJbmRleCwgaW5kZXgpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEF1ZGlvUGFyYW1ldGVyc1xuICAgIGNvbnN0IGF1ZGlvUGFyYW1ldGVyc0NvdW50OiBudW1iZXIgPSB0aGlzLl9qc29uXG4gICAgICAuZ2V0Um9vdCgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhTZXR0aW5ncylcbiAgICAgIC5nZXRWYWx1ZUJ5SW5kZXgoc2V0dGluZ0luZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoQXVkaW9QYXJhbWV0ZXJzKVxuICAgICAgLmdldFNpemUoKTtcblxuICAgIHNldHRpbmcuYXVkaW9QYXJhbWV0ZXJMaXN0ID1cbiAgICAgIG5ldyBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU3luY0RhdGFBdWRpb1BhcmFtZXRlcj4oKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXVkaW9QYXJhbWV0ZXJzQ291bnQ7IGluZGV4KyspIHtcbiAgICAgIHNldHRpbmcuYXVkaW9QYXJhbWV0ZXJMaXN0LnB1c2hCYWNrKFxuICAgICAgICB0aGlzLmdldEF1ZGlvUGFyYW1ldGVyc0VsZW1lbnQoc2V0dGluZ0luZGV4LCBpbmRleClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gTWFwcGluZ3NcbiAgICBzZXR0aW5nLm1hcHBpbmdMaXN0ID0gbmV3IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25TeW5jRGF0YU1hcHBpbmc+KCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGF1ZGlvUGFyYW1ldGVyc0NvdW50OyBpbmRleCsrKSB7XG4gICAgICBzZXR0aW5nLm1hcHBpbmdMaXN0LnB1c2hCYWNrKFxuICAgICAgICB0aGlzLmdldE1hcHBpbmdzRWxlbWVudChzZXR0aW5nSW5kZXgsIGluZGV4LCBjdWJpc21QYXJhbWV0YXJzQ291bnQpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFBvc3RQcm9jZXNzaW5nXG4gICAgc2V0dGluZy5ibGVuZFJhdGlvID0gdGhpcy5nZXRCbGVuZFJhdGlvKHNldHRpbmdJbmRleCk7XG4gICAgc2V0dGluZy5zbW9vdGhpbmcgPSB0aGlzLmdldFNtb290aGluZ0Zyb21Qb3N0UHJvY2Vzc2luZyhzZXR0aW5nSW5kZXgpO1xuICAgIHNldHRpbmcuc2FtcGxlUmF0ZSA9IHRoaXMuZ2V0U2FtcGxlUmF0ZShzZXR0aW5nSW5kZXgpO1xuXG4gICAgcmV0dXJuIHNldHRpbmc7XG4gIH1cblxuICAvKipcbiAgICogU2V0dGluZ3PjgYvjgonjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga5JZOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gc2V0dGluZ0luZGV4IOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJuIOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBrklkXG4gICAqL1xuICBwdWJsaWMgZ2V0SWRGcm9tU2V0dGluZ3Moc2V0dGluZ0luZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9qc29uXG4gICAgICAuZ2V0Um9vdCgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhTZXR0aW5ncylcbiAgICAgIC5nZXRWYWx1ZUJ5SW5kZXgoc2V0dGluZ0luZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoSWQpXG4gICAgICAuZ2V0U3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICog44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu6Z+z5aOw6Kej5p6Q44K/44Kk44OX44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSBzZXR0aW5nSW5kZXgg44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4g6Z+z5aOw6Kej5p6Q44K/44Kk44OXXG4gICAqL1xuICBwdWJsaWMgZ2V0QW5hbHlzaXNUeXBlKHNldHRpbmdJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoU2V0dGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHNldHRpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKEFuYWx5c2lzVHlwZSlcbiAgICAgIC5nZXRTdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jg6bjg7zjgrnjgrHjg7zjgrnjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHNldHRpbmdJbmRleCDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiDjg6bjg7zjgrnjgrHjg7zjgrlcbiAgICovXG4gIHB1YmxpYyBnZXRVc2VDYXNlKHNldHRpbmdJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoU2V0dGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHNldHRpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFVzZUNhc2UpXG4gICAgICAuZ2V0U3RyaW5nKCk7XG4gIH1cblxuICAvLyAtLS0gQ3ViaXNtUGFyYW1ldGFycyAtLS1cblxuICAvKipcbiAgICogQ3ViaXNtUGFyYW1ldGFyc+OBq+eZu+mMsuOBleOCjOOBpuOBhOOCi0N1YmlzbVBhcmFtZXRhcuOCouOCpOODhuODoOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gc2V0dGluZ0luZGV4IOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcGFyYW0gZWxlbWVudEluZGV4IEN1YmlzbVBhcmFtZXRhcnPjgYvjgonlj5blvpfjgZfjgZ/jgYTopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiBDdWJpc21QYXJhbWV0YXLjgqLjgqTjg4bjg6BcbiAgICovXG4gIHB1YmxpYyBnZXRDdWJpc21QYXJhbWV0YXJzRWxlbWVudChcbiAgICBzZXR0aW5nSW5kZXg6IG51bWJlcixcbiAgICBlbGVtZW50SW5kZXg6IG51bWJlclxuICApOiBDdWJpc21Nb3Rpb25TeW5jRGF0YUN1YmlzbVBhcmFtZXRlciB7XG4gICAgY29uc3QgY3ViaXNtUGFyYW1ldGFyOiBDdWJpc21Nb3Rpb25TeW5jRGF0YUN1YmlzbVBhcmFtZXRlciA9XG4gICAgICBuZXcgQ3ViaXNtTW90aW9uU3luY0RhdGFDdWJpc21QYXJhbWV0ZXIoKTtcbiAgICBjdWJpc21QYXJhbWV0YXIubmFtZSA9IG5ldyBjc21TdHJpbmcoXG4gICAgICB0aGlzLmdldE5hbWVGcm9tQ3ViaXNtUGFyYW1ldGVycyhzZXR0aW5nSW5kZXgsIGVsZW1lbnRJbmRleClcbiAgICApO1xuICAgIGN1YmlzbVBhcmFtZXRhci5pZCA9IG5ldyBjc21TdHJpbmcoXG4gICAgICB0aGlzLmdldElkRnJvbUN1YmlzbVBhcmFtZXRlcnMoc2V0dGluZ0luZGV4LCBlbGVtZW50SW5kZXgpXG4gICAgKTtcbiAgICBjdWJpc21QYXJhbWV0YXIubWluID0gdGhpcy5nZXRNaW5Gcm9tQ3ViaXNtUGFyYW1ldGVycyhcbiAgICAgIHNldHRpbmdJbmRleCxcbiAgICAgIGVsZW1lbnRJbmRleFxuICAgICk7XG4gICAgY3ViaXNtUGFyYW1ldGFyLm1heCA9IHRoaXMuZ2V0TWF4RnJvbUN1YmlzbVBhcmFtZXRlcnMoXG4gICAgICBzZXR0aW5nSW5kZXgsXG4gICAgICBlbGVtZW50SW5kZXhcbiAgICApO1xuICAgIGN1YmlzbVBhcmFtZXRhci5kYW1wZXIgPSB0aGlzLmdldERhbXBlckZyb21DdWJpc21QYXJhbWV0ZXJzKFxuICAgICAgc2V0dGluZ0luZGV4LFxuICAgICAgZWxlbWVudEluZGV4XG4gICAgKTtcbiAgICBjdWJpc21QYXJhbWV0YXIuc21vb3RoID0gdGhpcy5nZXRTbW9vdGhGcm9tQ3ViaXNtUGFyYW1ldGVycyhcbiAgICAgIHNldHRpbmdJbmRleCxcbiAgICAgIGVsZW1lbnRJbmRleFxuICAgICk7XG5cbiAgICByZXR1cm4gY3ViaXNtUGFyYW1ldGFyO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1YmlzbVBhcmFtZXRhcnPjgavnmbvpjLLjgZXjgozjgabjgYTjgotDdWJpc21QYXJhbWV0YXLjga7lkI3np7DjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHNldHRpbmdJbmRleCDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHBhcmFtIGVsZW1lbnRJbmRleCBDdWJpc21QYXJhbWV0YXJz44GL44KJ5Y+W5b6X44GX44Gf44GE6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4gQ3ViaXNtUGFyYW1ldGFy44Gu5ZCN56ewXG4gICAqL1xuICBwdWJsaWMgZ2V0TmFtZUZyb21DdWJpc21QYXJhbWV0ZXJzKFxuICAgIHNldHRpbmdJbmRleDogbnVtYmVyLFxuICAgIGVsZW1lbnRJbmRleDogbnVtYmVyXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25cbiAgICAgIC5nZXRSb290KClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFNldHRpbmdzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChzZXR0aW5nSW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhDdWJpc21QYXJhbWV0ZXJzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChlbGVtZW50SW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhOYW1lKVxuICAgICAgLmdldFN0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1YmlzbVBhcmFtZXRhcnPjgavnmbvpjLLjgZXjgozjgabjgYTjgotDdWJpc21QYXJhbWV0YXLjga5JZOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gc2V0dGluZ0luZGV4IOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcGFyYW0gZWxlbWVudEluZGV4IEN1YmlzbVBhcmFtZXRhcnPjgYvjgonlj5blvpfjgZfjgZ/jgYTopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiBDdWJpc21QYXJhbWV0YXLjga5JZFxuICAgKi9cbiAgcHVibGljIGdldElkRnJvbUN1YmlzbVBhcmFtZXRlcnMoXG4gICAgc2V0dGluZ0luZGV4OiBudW1iZXIsXG4gICAgZWxlbWVudEluZGV4OiBudW1iZXJcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoU2V0dGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHNldHRpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKEN1YmlzbVBhcmFtZXRlcnMpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KGVsZW1lbnRJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKElkKVxuICAgICAgLmdldFN0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1YmlzbVBhcmFtZXRhcnPjgavnmbvpjLLjgZXjgozjgabjgYTjgotDdWJpc21QYXJhbWV0YXLjga7mnIDlsI/lgKTjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHNldHRpbmdJbmRleCDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHBhcmFtIGVsZW1lbnRJbmRleCBDdWJpc21QYXJhbWV0YXJz44GL44KJ5Y+W5b6X44GX44Gf44GE6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4gQ3ViaXNtUGFyYW1ldGFy44Gu5pyA5bCP5YCkXG4gICAqL1xuICBwdWJsaWMgZ2V0TWluRnJvbUN1YmlzbVBhcmFtZXRlcnMoXG4gICAgc2V0dGluZ0luZGV4OiBudW1iZXIsXG4gICAgZWxlbWVudEluZGV4OiBudW1iZXJcbiAgKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoU2V0dGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHNldHRpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKEN1YmlzbVBhcmFtZXRlcnMpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KGVsZW1lbnRJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKE1pbilcbiAgICAgIC50b0Zsb2F0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ3ViaXNtUGFyYW1ldGFyc+OBq+eZu+mMsuOBleOCjOOBpuOBhOOCi0N1YmlzbVBhcmFtZXRhcuOBruacgOWkp+WApOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gc2V0dGluZ0luZGV4IOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcGFyYW0gZWxlbWVudEluZGV4IEN1YmlzbVBhcmFtZXRhcnPjgYvjgonlj5blvpfjgZfjgZ/jgYTopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiBDdWJpc21QYXJhbWV0YXLjga7mnIDlpKflgKRcbiAgICovXG4gIHB1YmxpYyBnZXRNYXhGcm9tQ3ViaXNtUGFyYW1ldGVycyhcbiAgICBzZXR0aW5nSW5kZXg6IG51bWJlcixcbiAgICBlbGVtZW50SW5kZXg6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9qc29uXG4gICAgICAuZ2V0Um9vdCgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhTZXR0aW5ncylcbiAgICAgIC5nZXRWYWx1ZUJ5SW5kZXgoc2V0dGluZ0luZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoQ3ViaXNtUGFyYW1ldGVycylcbiAgICAgIC5nZXRWYWx1ZUJ5SW5kZXgoZWxlbWVudEluZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoTWF4KVxuICAgICAgLnRvRmxvYXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdWJpc21QYXJhbWV0YXJz44Gr55m76Yyy44GV44KM44Gm44GE44KLQ3ViaXNtUGFyYW1ldGFy44Gu5rib6KGw5YCk44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSBzZXR0aW5nSW5kZXgg44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEBwYXJhbSBlbGVtZW50SW5kZXggQ3ViaXNtUGFyYW1ldGFyc+OBi+OCieWPluW+l+OBl+OBn+OBhOimgee0oOOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJuIEN1YmlzbVBhcmFtZXRhcuOBrua4m+ihsOWApFxuICAgKi9cbiAgcHVibGljIGdldERhbXBlckZyb21DdWJpc21QYXJhbWV0ZXJzKFxuICAgIHNldHRpbmdJbmRleDogbnVtYmVyLFxuICAgIGVsZW1lbnRJbmRleDogbnVtYmVyXG4gICk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25cbiAgICAgIC5nZXRSb290KClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFNldHRpbmdzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChzZXR0aW5nSW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhDdWJpc21QYXJhbWV0ZXJzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChlbGVtZW50SW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhEYW1wZXIpXG4gICAgICAudG9GbG9hdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1YmlzbVBhcmFtZXRhcnPjgavnmbvpjLLjgZXjgozjgabjgYTjgotDdWJpc21QYXJhbWV0YXLjga7jgrnjg6Djg7zjgrjjg7PjgrDlgKTjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHNldHRpbmdJbmRleCDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHBhcmFtIGVsZW1lbnRJbmRleCBDdWJpc21QYXJhbWV0YXJz44GL44KJ5Y+W5b6X44GX44Gf44GE6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4gQ3ViaXNtUGFyYW1ldGFy44Gu44K544Og44O844K444Oz44Kw5YCkXG4gICAqL1xuICBwdWJsaWMgZ2V0U21vb3RoRnJvbUN1YmlzbVBhcmFtZXRlcnMoXG4gICAgc2V0dGluZ0luZGV4OiBudW1iZXIsXG4gICAgZWxlbWVudEluZGV4OiBudW1iZXJcbiAgKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoU2V0dGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHNldHRpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKEN1YmlzbVBhcmFtZXRlcnMpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KGVsZW1lbnRJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFNtb290aClcbiAgICAgIC50b0Zsb2F0KCk7XG4gIH1cblxuICAvLyAtLS0gQXVkaW9QYXJhbWV0ZXJzIC0tLVxuXG4gIC8qKlxuICAgKiBBdWRpb1BhcmFtZXRlcnPjgavnmbvpjLLjgZXjgozjgabjgYTjgovpn7Plo7Djga7opoHntKDjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHNldHRpbmdJbmRleCDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHBhcmFtIGVsZW1lbnRJbmRleCBBdWRpb1BhcmFtZXRlcnPjgYvjgonlj5blvpfjgZfjgZ/jgYTopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiDpn7Plo7Djga7opoHntKBcbiAgICovXG4gIHB1YmxpYyBnZXRBdWRpb1BhcmFtZXRlcnNFbGVtZW50KFxuICAgIHNldHRpbmdJbmRleDogbnVtYmVyLFxuICAgIGVsZW1lbnRJbmRleDogbnVtYmVyXG4gICk6IEN1YmlzbU1vdGlvblN5bmNEYXRhQXVkaW9QYXJhbWV0ZXIge1xuICAgIGNvbnN0IGF1ZGlvUGFyYW1ldGVyOiBDdWJpc21Nb3Rpb25TeW5jRGF0YUF1ZGlvUGFyYW1ldGVyID1cbiAgICAgIG5ldyBDdWJpc21Nb3Rpb25TeW5jRGF0YUF1ZGlvUGFyYW1ldGVyKCk7XG4gICAgYXVkaW9QYXJhbWV0ZXIubmFtZSA9IG5ldyBjc21TdHJpbmcoXG4gICAgICB0aGlzLmdldE5hbWVGcm9tQXVkaW9QYXJhbWV0ZXJzKHNldHRpbmdJbmRleCwgZWxlbWVudEluZGV4KVxuICAgICk7XG4gICAgYXVkaW9QYXJhbWV0ZXIuaWQgPSBuZXcgY3NtU3RyaW5nKFxuICAgICAgdGhpcy5nZXRJZEZyb21BdWRpb1BhcmFtZXRlcnMoc2V0dGluZ0luZGV4LCBlbGVtZW50SW5kZXgpXG4gICAgKTtcbiAgICBhdWRpb1BhcmFtZXRlci5taW4gPSB0aGlzLmdldE1pbkZyb21BdWRpb1BhcmFtZXRlcnMoXG4gICAgICBzZXR0aW5nSW5kZXgsXG4gICAgICBlbGVtZW50SW5kZXhcbiAgICApO1xuICAgIGF1ZGlvUGFyYW1ldGVyLm1heCA9IHRoaXMuZ2V0TWF4RnJvbUF1ZGlvUGFyYW1ldGVycyhcbiAgICAgIHNldHRpbmdJbmRleCxcbiAgICAgIGVsZW1lbnRJbmRleFxuICAgICk7XG4gICAgYXVkaW9QYXJhbWV0ZXIuc2NhbGUgPSB0aGlzLmdldFNjYWxlRnJvbUF1ZGlvUGFyYW1ldGVycyhcbiAgICAgIHNldHRpbmdJbmRleCxcbiAgICAgIGVsZW1lbnRJbmRleFxuICAgICk7XG4gICAgYXVkaW9QYXJhbWV0ZXIuZW5hYmxlZCA9IHRoaXMuZ2V0RW5hYmxlZEZyb21BdWRpb1BhcmFtZXRlcnMoXG4gICAgICBzZXR0aW5nSW5kZXgsXG4gICAgICBlbGVtZW50SW5kZXhcbiAgICApO1xuXG4gICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1ZGlvUGFyYW1ldGVyc+OBq+eZu+mMsuOBleOCjOOBpuOBhOOCi+mfs+WjsOOBruimgee0oOOBruWQjeensOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gc2V0dGluZ0luZGV4IOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcGFyYW0gZWxlbWVudEluZGV4IEF1ZGlvUGFyYW1ldGVyc+OBi+OCieWPluW+l+OBl+OBn+OBhOimgee0oOOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJuIOmfs+WjsOOBruimgee0oOOBruWQjeensFxuICAgKi9cbiAgcHVibGljIGdldE5hbWVGcm9tQXVkaW9QYXJhbWV0ZXJzKFxuICAgIHNldHRpbmdJbmRleDogbnVtYmVyLFxuICAgIGVsZW1lbnRJbmRleDogbnVtYmVyXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25cbiAgICAgIC5nZXRSb290KClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFNldHRpbmdzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChzZXR0aW5nSW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhBdWRpb1BhcmFtZXRlcnMpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KGVsZW1lbnRJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKE5hbWUpXG4gICAgICAuZ2V0U3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogQXVkaW9QYXJhbWV0ZXJz44Gr55m76Yyy44GV44KM44Gm44GE44KL6Z+z5aOw44Gu6KaB57Sg44GuSWTjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHNldHRpbmdJbmRleCDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHBhcmFtIGVsZW1lbnRJbmRleCBBdWRpb1BhcmFtZXRlcnPjgYvjgonlj5blvpfjgZfjgZ/jgYTopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiDpn7Plo7Djga7opoHntKDjga5JZFxuICAgKi9cbiAgcHVibGljIGdldElkRnJvbUF1ZGlvUGFyYW1ldGVycyhcbiAgICBzZXR0aW5nSW5kZXg6IG51bWJlcixcbiAgICBlbGVtZW50SW5kZXg6IG51bWJlclxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9qc29uXG4gICAgICAuZ2V0Um9vdCgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhTZXR0aW5ncylcbiAgICAgIC5nZXRWYWx1ZUJ5SW5kZXgoc2V0dGluZ0luZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoQXVkaW9QYXJhbWV0ZXJzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChlbGVtZW50SW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhJZClcbiAgICAgIC5nZXRTdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdWRpb1BhcmFtZXRlcnPjgavnmbvpjLLjgZXjgozjgabjgYTjgovpn7Plo7Djga7opoHntKDjga7mnIDlsI/lgKTjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHNldHRpbmdJbmRleCDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHBhcmFtIGVsZW1lbnRJbmRleCBBdWRpb1BhcmFtZXRlcnPjgYvjgonlj5blvpfjgZfjgZ/jgYTopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiDpn7Plo7Djga7opoHntKDjga7mnIDlsI/lgKRcbiAgICovXG4gIHB1YmxpYyBnZXRNaW5Gcm9tQXVkaW9QYXJhbWV0ZXJzKFxuICAgIHNldHRpbmdJbmRleDogbnVtYmVyLFxuICAgIGVsZW1lbnRJbmRleDogbnVtYmVyXG4gICk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25cbiAgICAgIC5nZXRSb290KClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFNldHRpbmdzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChzZXR0aW5nSW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhBdWRpb1BhcmFtZXRlcnMpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KGVsZW1lbnRJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKE1pbilcbiAgICAgIC50b0Zsb2F0KCk7XG4gIH1cblxuICAvKipcbiAgICogQXVkaW9QYXJhbWV0ZXJz44Gr55m76Yyy44GV44KM44Gm44GE44KL6Z+z5aOw44Gu6KaB57Sg44Gu5pyA5aSn5YCk44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSBzZXR0aW5nSW5kZXgg44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEBwYXJhbSBlbGVtZW50SW5kZXggQXVkaW9QYXJhbWV0ZXJz44GL44KJ5Y+W5b6X44GX44Gf44GE6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4g6Z+z5aOw44Gu6KaB57Sg44Gu5pyA5aSn5YCkXG4gICAqL1xuICBwdWJsaWMgZ2V0TWF4RnJvbUF1ZGlvUGFyYW1ldGVycyhcbiAgICBzZXR0aW5nSW5kZXg6IG51bWJlcixcbiAgICBlbGVtZW50SW5kZXg6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9qc29uXG4gICAgICAuZ2V0Um9vdCgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhTZXR0aW5ncylcbiAgICAgIC5nZXRWYWx1ZUJ5SW5kZXgoc2V0dGluZ0luZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoQXVkaW9QYXJhbWV0ZXJzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChlbGVtZW50SW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhNYXgpXG4gICAgICAudG9GbG9hdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1ZGlvUGFyYW1ldGVyc+OBq+eZu+mMsuOBleOCjOOBpuOBhOOCi+mfs+WjsOOBruimgee0oOOBruOCueOCseODvOODq+WApOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gc2V0dGluZ0luZGV4IOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcGFyYW0gZWxlbWVudEluZGV4IEF1ZGlvUGFyYW1ldGVyc+OBi+OCieWPluW+l+OBl+OBn+OBhOimgee0oOOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJuIOmfs+WjsOOBruimgee0oOOBruOCueOCseODvOODq+WApFxuICAgKi9cbiAgcHVibGljIGdldFNjYWxlRnJvbUF1ZGlvUGFyYW1ldGVycyhcbiAgICBzZXR0aW5nSW5kZXg6IG51bWJlcixcbiAgICBlbGVtZW50SW5kZXg6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9qc29uXG4gICAgICAuZ2V0Um9vdCgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhTZXR0aW5ncylcbiAgICAgIC5nZXRWYWx1ZUJ5SW5kZXgoc2V0dGluZ0luZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoQXVkaW9QYXJhbWV0ZXJzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChlbGVtZW50SW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhTY2FsZSlcbiAgICAgIC50b0Zsb2F0KCk7XG4gIH1cblxuICAvKipcbiAgICogQXVkaW9QYXJhbWV0ZXJz44Gr55m76Yyy44GV44KM44Gm44GE44KL6Z+z5aOw44Gu6KaB57Sg44Gu5pyJ5Yq544OV44Op44Kw44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSBzZXR0aW5nSW5kZXgg44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEBwYXJhbSBlbGVtZW50SW5kZXggQXVkaW9QYXJhbWV0ZXJz44GL44KJ5Y+W5b6X44GX44Gf44GE6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4g6Z+z5aOw44Gu6KaB57Sg44Gu5pyJ5Yq544OV44Op44KwXG4gICAqL1xuICBwdWJsaWMgZ2V0RW5hYmxlZEZyb21BdWRpb1BhcmFtZXRlcnMoXG4gICAgc2V0dGluZ0luZGV4OiBudW1iZXIsXG4gICAgZWxlbWVudEluZGV4OiBudW1iZXJcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25cbiAgICAgIC5nZXRSb290KClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFNldHRpbmdzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChzZXR0aW5nSW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhBdWRpb1BhcmFtZXRlcnMpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KGVsZW1lbnRJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKEVuYWJsZWQpXG4gICAgICAudG9Cb29sZWFuKCk7XG4gIH1cblxuICAvLyAtLS0gTWFwcGluZ3MgLS0tXG5cbiAgLyoqXG4gICAqIE1hcHBpbmdz44Gr55m76Yyy44GV44KM44Gm44GE44KL44Oe44OD44OU44Oz44Kw44OH44O844K/44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSBzZXR0aW5nSW5kZXgg44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEBwYXJhbSBlbGVtZW50SW5kZXggTWFwcGluZ3PjgYvjgonlj5blvpfjgZfjgZ/jgYTopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiDjg57jg4Pjg5Tjg7PjgrDjg4fjg7zjgr9cbiAgICovXG4gIHB1YmxpYyBnZXRNYXBwaW5nc0VsZW1lbnQoXG4gICAgc2V0dGluZ0luZGV4OiBudW1iZXIsXG4gICAgZWxlbWVudEluZGV4OiBudW1iZXIsXG4gICAgdGFyZ2V0Q291bnQ6IG51bWJlclxuICApOiBDdWJpc21Nb3Rpb25TeW5jRGF0YU1hcHBpbmcge1xuICAgIGNvbnN0IG1hcHBpbmc6IEN1YmlzbU1vdGlvblN5bmNEYXRhTWFwcGluZyA9XG4gICAgICBuZXcgQ3ViaXNtTW90aW9uU3luY0RhdGFNYXBwaW5nKCk7XG4gICAgY29uc3QgdHlwZTogc3RyaW5nID0gdGhpcy5nZXRNYXBwaW5nVHlwZShzZXR0aW5nSW5kZXgsIGVsZW1lbnRJbmRleCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ1NoYXBlJzpcbiAgICAgICAgbWFwcGluZy50eXBlID0gQ3ViaXNtTW90aW9uU3luY0RhdGFNYXBwaW5nVHlwZS5NYXBwaW5nVHlwZV9TaGFwZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKCdVbmtub3duIE1hcHBpbmdzLlR5cGUuJyk7XG4gICAgICAgIG1hcHBpbmcudHlwZSA9IEN1YmlzbU1vdGlvblN5bmNEYXRhTWFwcGluZ1R5cGUuTWFwcGluZ1R5cGVfVW5rbm93bjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbWFwcGluZy5hdWRpb0lkID0gbmV3IGNzbVN0cmluZyhcbiAgICAgIHRoaXMuZ2V0QXVkaW9QYXJhbUlkRnJvbU1hcHBpbmdzKHNldHRpbmdJbmRleCwgZWxlbWVudEluZGV4KVxuICAgICk7XG5cbiAgICBtYXBwaW5nLnRhcmdldExpc3QgPSBuZXcgY3NtVmVjdG9yPEN1YmlzbU1vdGlvblN5bmNEYXRhTWFwcGluZ1RhcmdldD4oKTtcblxuICAgIGZvciAobGV0IHRhcmdldEluZGV4ID0gMDsgdGFyZ2V0SW5kZXggPCB0YXJnZXRDb3VudDsgdGFyZ2V0SW5kZXgrKykge1xuICAgICAgbWFwcGluZy50YXJnZXRMaXN0LnB1c2hCYWNrKFxuICAgICAgICB0aGlzLmdldE1hcHBpbmdUYXJnZXRzRWxlbWVudChzZXR0aW5nSW5kZXgsIGVsZW1lbnRJbmRleCwgdGFyZ2V0SW5kZXgpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBtYXBwaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcHBpbmdz44Gr55m76Yyy44GV44KM44Gm44GE44KLVGFyZ2V0c+OBruimgee0oOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gc2V0dGluZ0luZGV4IOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcGFyYW0gbWFwcGluZ0luZGV4IE1hcHBpbmdz44GL44KJ5Y+W5b6X44GX44Gf44GE6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEBwYXJhbSBUYXJnZXRzSW5kZXggVGFyZ2V0c+OBi+OCieWPluW+l+OBl+OBn+OBhOimgee0oOOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJuIFRhcmdldHPjga7opoHntKBcbiAgICovXG4gIHB1YmxpYyBnZXRNYXBwaW5nVGFyZ2V0c0VsZW1lbnQoXG4gICAgc2V0dGluZ0luZGV4OiBudW1iZXIsXG4gICAgbWFwcGluZ0luZGV4OiBudW1iZXIsXG4gICAgdGFyZ2V0SW5kZXg6IG51bWJlclxuICApOiBDdWJpc21Nb3Rpb25TeW5jRGF0YU1hcHBpbmdUYXJnZXQge1xuICAgIGNvbnN0IHRhcmdldDogQ3ViaXNtTW90aW9uU3luY0RhdGFNYXBwaW5nVGFyZ2V0ID1cbiAgICAgIG5ldyBDdWJpc21Nb3Rpb25TeW5jRGF0YU1hcHBpbmdUYXJnZXQoKTtcbiAgICB0YXJnZXQuaWQgPSBuZXcgY3NtU3RyaW5nKFxuICAgICAgdGhpcy5nZXRDdWJpc21JZEZyb21NYXBwaW5nVGFyZ2V0KHNldHRpbmdJbmRleCwgbWFwcGluZ0luZGV4LCB0YXJnZXRJbmRleClcbiAgICApO1xuICAgIHRhcmdldC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tTWFwcGluZ1RhcmdldChcbiAgICAgIHNldHRpbmdJbmRleCxcbiAgICAgIG1hcHBpbmdJbmRleCxcbiAgICAgIHRhcmdldEluZGV4XG4gICAgKTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICog44Oe44OD44OU44Oz44Kw44Gu44K/44Kk44OX44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSBzZXR0aW5nSW5kZXgg44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEBwYXJhbSBlbGVtZW50SW5kZXggTWFwcGluZ3PjgYvjgonlj5blvpfjgZfjgZ/jgYTopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiDjg57jg4Pjg5Tjg7PjgrDjga7jgr/jgqTjg5dcbiAgICovXG4gIHB1YmxpYyBnZXRNYXBwaW5nVHlwZShzZXR0aW5nSW5kZXg6IG51bWJlciwgZWxlbWVudEluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9qc29uXG4gICAgICAuZ2V0Um9vdCgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhTZXR0aW5ncylcbiAgICAgIC5nZXRWYWx1ZUJ5SW5kZXgoc2V0dGluZ0luZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoTWFwcGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KGVsZW1lbnRJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFR5cGUpXG4gICAgICAuZ2V0U3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFwcGluZ3PjgavnmbvpjLLjgZXjgozjgabjgYTjgovpn7Plo7Djga7opoHntKDjga5JZOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gc2V0dGluZ0luZGV4IOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcGFyYW0gZWxlbWVudEluZGV4IE1hcHBpbmdz44GL44KJ5Y+W5b6X44GX44Gf44GE6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4g6Z+z5aOw44Gu6KaB57Sg44GuSWRcbiAgICovXG4gIHB1YmxpYyBnZXRBdWRpb1BhcmFtSWRGcm9tTWFwcGluZ3MoXG4gICAgc2V0dGluZ0luZGV4OiBudW1iZXIsXG4gICAgZWxlbWVudEluZGV4OiBudW1iZXJcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoU2V0dGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHNldHRpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKE1hcHBpbmdzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChlbGVtZW50SW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhJZClcbiAgICAgIC5nZXRTdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYXJnZXRz44Gr55m76Yyy44GV44KM44Gm44GE44KLQ3ViaXNtUGFyYW1ldGVy44GuSWTjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHNldHRpbmdJbmRleCDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHBhcmFtIG1hcHBpbmdJbmRleCBNYXBwaW5nc+OBi+OCieWPluW+l+OBl+OBn+OBhOimgee0oOOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcGFyYW0gVGFyZ2V0c0luZGV4IFRhcmdldHPjgYvjgonlj5blvpfjgZfjgZ/jgYTopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiBDdWJpc21QYXJhbWV0ZXLjga5JZFxuICAgKi9cbiAgcHVibGljIGdldEN1YmlzbUlkRnJvbU1hcHBpbmdUYXJnZXQoXG4gICAgc2V0dGluZ0luZGV4OiBudW1iZXIsXG4gICAgbWFwcGluZ0luZGV4OiBudW1iZXIsXG4gICAgdGFyZ2V0SW5kZXg6IG51bWJlclxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9qc29uXG4gICAgICAuZ2V0Um9vdCgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhTZXR0aW5ncylcbiAgICAgIC5nZXRWYWx1ZUJ5SW5kZXgoc2V0dGluZ0luZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoTWFwcGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KG1hcHBpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFRhcmdldHMpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHRhcmdldEluZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoSWQpXG4gICAgICAuZ2V0U3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVGFyZ2V0c+OBq+eZu+mMsuOBleOCjOOBpuOBhOOCi0N1YmlzbVBhcmFtZXRlcuOBruWApOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0gc2V0dGluZ0luZGV4IOODouODvOOCt+ODp+ODs+OCt+ODs+OCr+ioreWumuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcGFyYW0gbWFwcGluZ0luZGV4IE1hcHBpbmdz44GL44KJ5Y+W5b6X44GX44Gf44GE6KaB57Sg44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEBwYXJhbSBUYXJnZXRzSW5kZXggVGFyZ2V0c+OBi+OCieWPluW+l+OBl+OBn+OBhOimgee0oOOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJuIEN1YmlzbVBhcmFtZXRlcuOBruWApFxuICAgKi9cbiAgcHVibGljIGdldFZhbHVlRnJvbU1hcHBpbmdUYXJnZXQoXG4gICAgc2V0dGluZ0luZGV4OiBudW1iZXIsXG4gICAgbWFwcGluZ0luZGV4OiBudW1iZXIsXG4gICAgdGFyZ2V0SW5kZXg6IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9qc29uXG4gICAgICAuZ2V0Um9vdCgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhTZXR0aW5ncylcbiAgICAgIC5nZXRWYWx1ZUJ5SW5kZXgoc2V0dGluZ0luZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoTWFwcGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KG1hcHBpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFRhcmdldHMpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHRhcmdldEluZGV4KVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoVmFsdWUpXG4gICAgICAudG9GbG9hdCgpO1xuICB9XG5cbiAgLy8gLS0tIFBvc3RQcm9jZXNzaW5nIC0tLVxuXG4gIC8qKlxuICAgKiDjg5bjg6zjg7Pjg4nnjofjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHNldHRpbmdJbmRleCDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/oqK3lrprjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybiDjg5bjg6zjg7Pjg4nnjodcbiAgICovXG4gIHB1YmxpYyBnZXRCbGVuZFJhdGlvKHNldHRpbmdJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoU2V0dGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHNldHRpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFBvc3RQcm9jZXNzaW5nKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoQmxlbmRSYXRpbylcbiAgICAgIC50b0Zsb2F0KCk7XG4gIH1cblxuICAvKipcbiAgICog44K544Og44O844K444Oz44Kw5YCk44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSBzZXR0aW5nSW5kZXgg44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4g44K544Og44O844K444Oz44Kw5YCkXG4gICAqL1xuICBwdWJsaWMgZ2V0U21vb3RoaW5nRnJvbVBvc3RQcm9jZXNzaW5nKHNldHRpbmdJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblxuICAgICAgLmdldFJvb3QoKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoU2V0dGluZ3MpXG4gICAgICAuZ2V0VmFsdWVCeUluZGV4KHNldHRpbmdJbmRleClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFBvc3RQcm9jZXNzaW5nKVxuICAgICAgLmdldFZhbHVlQnlTdHJpbmcoU21vb3RoaW5nKVxuICAgICAgLnRvSW50KCk7XG4gIH1cblxuICAvKipcbiAgICog6Kit5a6a44OV44Os44O844Og44Os44O844OI44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSBzZXR0aW5nSW5kZXgg44Oi44O844K344On44Oz44K344Oz44Kv6Kit5a6a44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm4g6Kit5a6a44OV44Os44O844Og44Os44O844OIXG4gICAqL1xuICBwdWJsaWMgZ2V0U2FtcGxlUmF0ZShzZXR0aW5nSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25cbiAgICAgIC5nZXRSb290KClcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFNldHRpbmdzKVxuICAgICAgLmdldFZhbHVlQnlJbmRleChzZXR0aW5nSW5kZXgpXG4gICAgICAuZ2V0VmFsdWVCeVN0cmluZyhQb3N0UHJvY2Vzc2luZylcbiAgICAgIC5nZXRWYWx1ZUJ5U3RyaW5nKFNhbXBsZVJhdGUpXG4gICAgICAudG9GbG9hdCgpO1xuICB9XG5cbiAgX2pzb246IEN1YmlzbUpzb247IC8vIG1vdGlvbnN5bmMzLmpzb27jga7jg4fjg7zjgr9cbn1cblxuLy8gTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQgKiBhcyAkIGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2RhdGFqc29uJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbU1vdGlvblN5bmNGcmFtZXdvcmsge1xuICBleHBvcnQgY29uc3QgQ3ViaXNtTW90aW9uU3luY0RhdGFKc29uID0gJC5DdWJpc21Nb3Rpb25TeW5jRGF0YUpzb247XG4gIGV4cG9ydCB0eXBlIEN1YmlzbU1vdGlvblN5bmNEYXRhSnNvbiA9ICQuQ3ViaXNtTW90aW9uU3luY0RhdGFKc29uO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IFRvUG9pbnRlciA9IExpdmUyREN1YmlzbU1vdGlvblN5bmNDb3JlLlRvUG9pbnRlcjtcblxuY29uc3Qgc19hbmFseXNpc1Jlc3VsdFN0cnVjdFNpemUgPSAzO1xuXG5leHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uU3luY0VuZ2luZUFuYWx5c2lzUmVzdWx0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlc1NpemU6IG51bWJlcikge1xuICAgIHRoaXMuX3ZhbHVlcyA9IG5ldyBBcnJheTxudW1iZXI+KHZhbHVlc1NpemUpO1xuICAgIHRoaXMuX3ZhbHVlc0NvdW50ID0gdmFsdWVzU2l6ZTtcbiAgICB0aGlzLl9wcm9jZXNzZWRTYW1wbGVDb3VudCA9IDA7XG4gIH1cblxuICBwdWJsaWMgY29weShyZXN1bHQ6IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVBbmFseXNpc1Jlc3VsdCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzdWx0LmdldFZhbHVlcygpLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5fdmFsdWVzLnB1c2gocmVzdWx0LmdldFZhbHVlcygpW2luZGV4XSk7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWVzQ291bnQgPSByZXN1bHQuZ2V0VmFsdWVzQ291bnQoKTtcbiAgICB0aGlzLl9wcm9jZXNzZWRTYW1wbGVDb3VudCA9IDA7XG4gIH1cblxuICBwdWJsaWMgdG9OYXRpdmVBcnJheShmb3JjZUNvbnZlcnNpb246IGJvb2xlYW4pOiBJbnQzMkFycmF5IHtcbiAgICAvLyDlvLfliLbnmoTjgavmlrDopo/kvZzmiJDjgZfjgarjgYTjga7jgafjgYLjgozjgbDml6LjgavjgYLjgovjgoLjga7jgpLov5TjgZlcbiAgICBpZiAoIWZvcmNlQ29udmVyc2lvbiAmJiB0aGlzLl9yZXN1bHRBcnJheSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc3VsdEFycmF5O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yZXN1bHRBcnJheSkge1xuICAgICAgdGhpcy5yZWxlYXNlTmF0aXZlQXJyYXkoKTtcbiAgICB9XG4gICAgdGhpcy5fcmVzdWx0QXJyYXkgPSBuZXcgSW50MzJBcnJheSh0aGlzLl92YWx1ZXNDb3VudCk7XG4gICAgdGhpcy5fcmVzdWx0QXJyYXlQdHIgPSBUb1BvaW50ZXIuTWFsbG9jKFxuICAgICAgdGhpcy5fcmVzdWx0QXJyYXkubGVuZ3RoICogdGhpcy5fcmVzdWx0QXJyYXkuQllURVNfUEVSX0VMRU1FTlRcbiAgICApO1xuXG4gICAgLy8gTmF0aXZl44Od44Kk44Oz44K/44G444Gu5aSJ5o+bXG4gICAgdGhpcy5fcmVzdWx0QXJyYXkgPSBUb1BvaW50ZXIuQ29udmVydEFuYWx5c2lzUmVzdWx0VG9JbnQzMkFycmF5KFxuICAgICAgdGhpcy5fcmVzdWx0QXJyYXksXG4gICAgICB0aGlzLl9yZXN1bHRBcnJheVB0cixcbiAgICAgIHRoaXMuX3ZhbHVlc0NvdW50XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLl9yZXN1bHRBcnJheTtcbiAgfVxuXG4gIHB1YmxpYyByZWxlYXNlTmF0aXZlQXJyYXkoKTogdm9pZCB7XG4gICAgdGhpcy5kZWFsbG9jTmF0aXZlQXJyYXlQdHIoKTtcbiAgICB0aGlzLl9yZXN1bHRBcnJheSA9IHZvaWQgMDtcbiAgfVxuXG4gIHB1YmxpYyByZWxlYXNlKCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHZvaWQgMDtcbiAgICB0aGlzLl92YWx1ZXMgPSBudWxsO1xuICAgIHRoaXMuX3ZhbHVlc0NvdW50ID0gMDtcbiAgICB0aGlzLl9wcm9jZXNzZWRTYW1wbGVDb3VudCA9IDA7XG4gIH1cblxuICBwdWJsaWMgZ2V0VmFsdWVzKCk6IEFycmF5PG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0VmFsdWVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvY2Vzc2VkU2FtcGxlQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc2VkU2FtcGxlQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgc2V0UHJvY2Vzc2VkU2FtcGxlQ291bnQoc2FtcGxlQ291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3Byb2Nlc3NlZFNhbXBsZUNvdW50ID0gc2FtcGxlQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgQ29udmVydE5hdGl2ZUFuYWx5c2lzUmVzdWx0KG5hdGl2ZUFycmF5UHRyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLkNvbnZlcnRGcm9tTmF0aXZlUmVzdWx0VmFsdWVzKCk7XG4gICAgdGhpcy5Db252ZXJ0RnJvbU5hdGl2ZVByb2Nlc3NlZFNhbXBsZUNvdW50KG5hdGl2ZUFycmF5UHRyKTtcbiAgfVxuXG4gIHByaXZhdGUgQ29udmVydEZyb21OYXRpdmVSZXN1bHRWYWx1ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWVzID0gVG9Qb2ludGVyLkdldFZhbHVlc0Zyb21BbmFseXNpc1Jlc3VsdChcbiAgICAgIHRoaXMuX3Jlc3VsdEFycmF5WzBdLFxuICAgICAgdGhpcy5fdmFsdWVzQ291bnRcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBDb252ZXJ0RnJvbU5hdGl2ZVByb2Nlc3NlZFNhbXBsZUNvdW50KG5hdGl2ZUFycmF5UHRyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9wcm9jZXNzZWRTYW1wbGVDb3VudCA9XG4gICAgICBUb1BvaW50ZXIuR2V0UHJvY2Vzc2VkU2FtcGxlQ291bnRGcm9tQW5hbHlzaXNSZXN1bHQobmF0aXZlQXJyYXlQdHIgKyA4KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVhbGxvY05hdGl2ZUFycmF5UHRyKCk6IHZvaWQge1xuICAgIC8vIOWPgueFp+a4oeOBl+OBq+OBquOBo+OBpuOBhOOCi+euh+aJgOOBoOOBkeWFiOOBq+ODoeODouODquino+aUvlxuICAgIFRvUG9pbnRlci5GcmVlKHRoaXMuX3Jlc3VsdEFycmF5WzBdKTtcblxuICAgIC8vIOmFjeWIl+acrOS9k+OCkuino+aUvlxuICAgIFRvUG9pbnRlci5GcmVlKHRoaXMuX3Jlc3VsdEFycmF5UHRyKTtcbiAgICB0aGlzLl9yZXN1bHRBcnJheVB0ciA9IDA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZXM6IEFycmF5PG51bWJlcj47XG4gIHByaXZhdGUgX3ZhbHVlc0NvdW50OiBudW1iZXI7XG4gIHByaXZhdGUgX3Byb2Nlc3NlZFNhbXBsZUNvdW50OiBudW1iZXI7XG4gIHByaXZhdGUgX3Jlc3VsdEFycmF5OiBJbnQzMkFycmF5O1xuICBwcml2YXRlIF9yZXN1bHRBcnJheVB0cjogbnVtYmVyO1xufVxuXG4vLyBOYW1lc3BhY2UgZGVmaW5pdGlvbiBmb3IgY29tcGF0aWJpbGl0eS5cbmltcG9ydCAqIGFzICQgZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jZW5naW5lYW5hbHlzaXNyZXN1bHQnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0ZyYW1ld29yayB7XG4gIGV4cG9ydCBjb25zdCBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQW5hbHlzaXNSZXN1bHQgPVxuICAgICQuQ3ViaXNtTW90aW9uU3luY0VuZ2luZUFuYWx5c2lzUmVzdWx0O1xuICBleHBvcnQgdHlwZSBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQW5hbHlzaXNSZXN1bHQgPVxuICAgICQuQ3ViaXNtTW90aW9uU3luY0VuZ2luZUFuYWx5c2lzUmVzdWx0O1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgY3NtTWFwLCBpdGVyYXRvciB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21tYXAnO1xuaW1wb3J0IHsgY3NtU3RyaW5nIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXN0cmluZyc7XG5pbXBvcnQgeyBjc21WZWN0b3IgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yJztcbmltcG9ydCB7IEN1YmlzbUxvZ0luZm8gfSBmcm9tICdAZnJhbWV3b3JrL3V0aWxzL2N1YmlzbWRlYnVnJztcbmltcG9ydCB7IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVDcmkgfSBmcm9tICcuL2N1YmlzbW1vdGlvbnN5bmNlbmdpbmVjcmknO1xuaW1wb3J0IHsgQ3ViaXNtTW90aW9uU3luY0VuZ2luZUxpYiB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZWxpYic7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lVmVyc2lvbiB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZXZlcnNpb24nO1xuaW1wb3J0IHsgRW5naW5lVHlwZSB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY3V0aWwnO1xuaW1wb3J0IHsgSUN1YmlzbU1vdGlvblN5bmNFbmdpbmUgfSBmcm9tICcuL2ljdWJpc21tb3Rpb25zeW5jZW5naW5lJztcblxuZXhwb3J0IGNsYXNzIEN1YmlzbU1vdGlvblN5bmNFbmdpbmVDb250cm9sbGVyIHtcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplRW5naW5lKFxuICAgIGVuZ2luZUNvbmZpZzogbnVtYmVyXG4gICk6IElDdWJpc21Nb3Rpb25TeW5jRW5naW5lIHtcbiAgICBsZXQgZW5naW5lTGliOiBDdWJpc21Nb3Rpb25TeW5jRW5naW5lTGliID0gbmV3IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVMaWIoKTtcbiAgICBjb25zdCBlbmdpbmVOYW1lOiBjc21TdHJpbmcgPSBlbmdpbmVMaWIuZ2V0RW5naW5lTmFtZSgpO1xuICAgIGNvbnN0IGVuZ2luZVR5cGU6IEVuZ2luZVR5cGUgPSB0aGlzLlRvRW5naW5lVHlwZShlbmdpbmVOYW1lKTtcbiAgICBjb25zdCBuYXRpdmVWZXJzaW9uOiBudW1iZXIgPSBlbmdpbmVMaWIuZ2V0RW5naW5lVmVyc2lvbigpO1xuICAgIGNvbnN0IHZlcnNpb246IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVWZXJzaW9uID1cbiAgICAgIG5ldyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lVmVyc2lvbihuYXRpdmVWZXJzaW9uKTtcblxuICAgIGlmICghdGhpcy5fZW5naW5lTWFwKSB7XG4gICAgICB0aGlzLl9lbmdpbmVNYXAgPSBuZXcgY3NtTWFwPEVuZ2luZVR5cGUsIElDdWJpc21Nb3Rpb25TeW5jRW5naW5lPigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbmdpbmVNYXAuaXNFeGlzdChlbmdpbmVUeXBlKSkge1xuICAgICAgZW5naW5lTGliID0gdm9pZCAwO1xuICAgICAgZW5naW5lTGliID0gbnVsbDtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIEN1YmlzbUxvZ0luZm8oZW5naW5lTmFtZS5zICsgJyAnICsgdmVyc2lvbi50b1N0cmluZygpKTtcblxuICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBlbmdpbmVMaWIuaW5pdGlhbGl6ZUVuZ2luZShlbmdpbmVDb25maWcpO1xuXG4gICAgaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gICAgICBlbmdpbmVMaWIgPSB2b2lkIDA7XG4gICAgICBlbmdpbmVMaWIgPSBudWxsO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGVuZ2luZTogSUN1YmlzbU1vdGlvblN5bmNFbmdpbmUgPSBudWxsO1xuICAgIHN3aXRjaCAoZW5naW5lVHlwZSkge1xuICAgICAgY2FzZSBFbmdpbmVUeXBlLkVuZ2luZVR5cGVfQ3JpOlxuICAgICAgICBlbmdpbmUgPSBuZXcgQ3ViaXNtTW90aW9uU3luY0VuZ2luZUNyaShcbiAgICAgICAgICBlbmdpbmVMaWIsXG4gICAgICAgICAgZW5naW5lVHlwZSxcbiAgICAgICAgICBlbmdpbmVOYW1lLFxuICAgICAgICAgIHZlcnNpb25cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbmdpbmVMaWIuZGlzcG9zZUVuZ2luZSgpO1xuICAgICAgICBlbmdpbmVMaWIgPSB2b2lkIDA7XG4gICAgICAgIGVuZ2luZUxpYiA9IG51bGw7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuX2VuZ2luZU1hcC5hcHBlbmRLZXkoZW5naW5lVHlwZSk7XG4gICAgdGhpcy5fZW5naW5lTWFwLnNldFZhbHVlKGVuZ2luZVR5cGUsIGVuZ2luZSk7XG5cbiAgICByZXR1cm4gZW5naW5lO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRFbmdpbmUodHlwZTogRW5naW5lVHlwZSkge1xuICAgIGlmICh0aGlzLl9lbmdpbmVNYXAgJiYgdGhpcy5fZW5naW5lTWFwLmlzRXhpc3QodHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbmdpbmVNYXAuZ2V0VmFsdWUodHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRFbmdpbmVzKCk6IGNzbVZlY3RvcjxJQ3ViaXNtTW90aW9uU3luY0VuZ2luZT4ge1xuICAgIGNvbnN0IHZlY3RvcjogY3NtVmVjdG9yPElDdWJpc21Nb3Rpb25TeW5jRW5naW5lPiA9IG5ldyBjc21WZWN0b3IoKTtcbiAgICBmb3IgKFxuICAgICAgbGV0IGl0ZXI6IGl0ZXJhdG9yPEVuZ2luZVR5cGUsIElDdWJpc21Nb3Rpb25TeW5jRW5naW5lPiA9XG4gICAgICAgIHRoaXMuX2VuZ2luZU1hcC5iZWdpbigpO1xuICAgICAgaXRlciAhPSB0aGlzLl9lbmdpbmVNYXAuZW5kKCk7XG4gICAgICBpdGVyLmluY3JlbWVudCgpXG4gICAgKSB7XG4gICAgICB2ZWN0b3IucHVzaEJhY2soaXRlci5wdHIoKS5zZWNvbmQpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlbGVhc2VFbmdpbmVOb3RGb3JjZShlbmdpbmU6IElDdWJpc21Nb3Rpb25TeW5jRW5naW5lKTogdm9pZCB7XG4gICAgdGhpcy5yZWxlYXNlRW5naW5lKGVuZ2luZSwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZWxlYXNlRW5naW5lKFxuICAgIGVuZ2luZTogSUN1YmlzbU1vdGlvblN5bmNFbmdpbmUsXG4gICAgaXNGb3JjZTogYm9vbGVhblxuICApOiB2b2lkIHtcbiAgICBlbmdpbmUuY2xvc2UoaXNGb3JjZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlbGV0ZUFsbEVuZ2luZSgpOiB2b2lkIHtcbiAgICBjb25zdCBlbmdpbmVzOiBjc21WZWN0b3I8SUN1YmlzbU1vdGlvblN5bmNFbmdpbmU+ID0gdGhpcy5nZXRFbmdpbmVzKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVuZ2luZXMuZ2V0U2l6ZSgpOyBpbmRleCsrKSB7XG4gICAgICBlbmdpbmVzLmF0KGluZGV4KS5jbG9zZSh0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9lbmdpbmVNYXAuY2xlYXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgVG9FbmdpbmVUeXBlKGVuZ2luZU5hbWU6IGNzbVN0cmluZyk6IEVuZ2luZVR5cGUge1xuICAgIGxldCBlbmdpbmVUeXBlOiBFbmdpbmVUeXBlID0gRW5naW5lVHlwZS5FbmdpbmVUeXBlX1Vua25vd247XG5cbiAgICBpZiAoZW5naW5lTmFtZS5zID09ICdMaXZlMkRDdWJpc21Nb3Rpb25TeW5jRW5naW5lX0NSSScpIHtcbiAgICAgIGVuZ2luZVR5cGUgPSBFbmdpbmVUeXBlLkVuZ2luZVR5cGVfQ3JpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmdpbmVUeXBlO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWxldGVBc3NvY2lhdGlvbihlbmdpbmU6IElDdWJpc21Nb3Rpb25TeW5jRW5naW5lKSB7XG4gICAgZm9yIChcbiAgICAgIGxldCBpdGVyOiBpdGVyYXRvcjxFbmdpbmVUeXBlLCBJQ3ViaXNtTW90aW9uU3luY0VuZ2luZT4gPVxuICAgICAgICB0aGlzLl9lbmdpbmVNYXAuYmVnaW4oKTtcbiAgICAgIGl0ZXIgIT0gdGhpcy5fZW5naW5lTWFwLmVuZCgpO1xuICAgICAgaXRlci5pbmNyZW1lbnQoKVxuICAgICkge1xuICAgICAgaWYgKGl0ZXIucHRyKCkuZmlyc3QgPT0gZW5naW5lLmdldFR5cGUoKSkge1xuICAgICAgICBlbmdpbmUgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMuX2VuZ2luZU1hcC5lcmFzZShpdGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2VuZ2luZU1hcDogY3NtTWFwPEVuZ2luZVR5cGUsIElDdWJpc21Nb3Rpb25TeW5jRW5naW5lPjtcbn1cblxuLy8gTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQgKiBhcyAkIGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZWNvbnRyb2xsZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0ZyYW1ld29yayB7XG4gIGV4cG9ydCBjb25zdCBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQ29udHJvbGxlciA9XG4gICAgJC5DdWJpc21Nb3Rpb25TeW5jRW5naW5lQ29udHJvbGxlcjtcbiAgZXhwb3J0IHR5cGUgQ3ViaXNtTW90aW9uU3luY0VuZ2luZUNvbnRyb2xsZXIgPVxuICAgICQuQ3ViaXNtTW90aW9uU3luY0VuZ2luZUNvbnRyb2xsZXI7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBjc21WZWN0b3IgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yJztcbmltcG9ydCB7IEN1YmlzbUxvZ1dhcm5pbmcgfSBmcm9tICdAZnJhbWV3b3JrL3V0aWxzL2N1YmlzbWRlYnVnJztcbmltcG9ydCB7IGNzbVN0cmluZyB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21zdHJpbmcnO1xuaW1wb3J0IHsgQ3ViaXNtTW90aW9uU3luY0VuZ2luZVZlcnNpb24gfSBmcm9tICcuL2N1YmlzbW1vdGlvbnN5bmNlbmdpbmV2ZXJzaW9uJztcbmltcG9ydCB7XG4gIEN1YmlzbU1vdGlvblN5bmNDb250ZXh0LFxuICBDdWJpc21Nb3Rpb25TeW5jRW5naW5lTGliXG59IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZWxpYic7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lTWFwcGluZ0luZm8gfSBmcm9tICcuL2N1YmlzbW1vdGlvbnN5bmNlbmdpbmVtYXBwaW5naW5mbyc7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yQ1JJIH0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jcHJvY2Vzc29yY3JpJztcbmltcG9ydCB7IE1vdGlvblN5bmNDb250ZXh0Q29uZmlnX0NSSSB9IGZyb20gJy4vbW90aW9uc3luY2NvbmZpZ19jcmknO1xuaW1wb3J0IHtcbiAgRGVmYXVsdEF1ZGlvQml0RGVwdGgsXG4gIElDdWJpc21Nb3Rpb25TeW5jRW5naW5lXG59IGZyb20gJy4vaWN1YmlzbW1vdGlvbnN5bmNlbmdpbmUnO1xuaW1wb3J0IHsgSUN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3IgfSBmcm9tICcuL2ljdWJpc21tb3Rpb25zeW5jcHJvY2Vzc29yJztcbmltcG9ydCB7XG4gIEVuZ2luZVR5cGUsXG4gIE1hcHBpbmdJbmZvTGlzdE1hcHBlcixcbiAgTW90aW9uU3luY0NvbnRleHRcbn0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBTYW1wbGVSYXRlTWluOiBudW1iZXIgPSAxNjAwMDtcbmV4cG9ydCBjb25zdCBTYW1wbGVSYXRlTWF4OiBudW1iZXIgPSAxMjgwMDA7XG5cbmV4cG9ydCBjbGFzcyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQ3JpIGV4dGVuZHMgSUN1YmlzbU1vdGlvblN5bmNFbmdpbmUge1xuICBwdWJsaWMgQ3JlYXRlUHJvY2Vzc29yKFxuICAgIGN1YmlzbVBhcmFtZXRlckNvdW50OiBudW1iZXIsXG4gICAgbWFwcGluZ0luZm9MaXN0OiBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU3luY0VuZ2luZU1hcHBpbmdJbmZvPixcbiAgICBzYW1wbGVSYXRlOiBudW1iZXJcbiAgKTogQ3ViaXNtTW90aW9uU3luY1Byb2Nlc3NvckNSSSB7XG4gICAgaWYgKHRoaXMuaXNDbG9zZWQoKSkge1xuICAgICAgQ3ViaXNtTG9nV2FybmluZyhcbiAgICAgICAgXCJbQ3ViaXNtTW90aW9uU3luY0VuZ2luZUNyaS5DcmVhdGVQcm9jZXNzb3JdIEN1YmlzbSBNb3Rpb25TeW5jIEVuZ2luZSBpcyBub3Qgc3RhcnRlZC4nXCJcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobWFwcGluZ0luZm9MaXN0LmdldFNpemUoKSA8IDEpIHtcbiAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXG4gICAgICAgIFwiW0N1YmlzbU1vdGlvblN5bmNFbmdpbmVDcmkuQ3JlYXRlUHJvY2Vzc29yXSBtYXBwaW5nSW5mb0xpc3Qgc2l6ZSBpcyBpbnZhbGlkLidcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghKFNhbXBsZVJhdGVNaW4gPD0gc2FtcGxlUmF0ZSAmJiBzYW1wbGVSYXRlIDw9IFNhbXBsZVJhdGVNYXgpKSB7XG4gICAgICBDdWJpc21Mb2dXYXJuaW5nKFxuICAgICAgICBcIltDdWJpc21Nb3Rpb25TeW5jRW5naW5lQ3JpLkNyZWF0ZVByb2Nlc3Nvcl0gc2FtcGxlUmF0ZSBpcyBpbnZhbGlkLidcIlxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHRDb25maWc6IE1vdGlvblN5bmNDb250ZXh0Q29uZmlnX0NSSSA9XG4gICAgICBuZXcgTW90aW9uU3luY0NvbnRleHRDb25maWdfQ1JJKHNhbXBsZVJhdGUsIERlZmF1bHRBdWRpb0JpdERlcHRoKTtcbiAgICBjb25zdCBtYXBwZXI6IE1hcHBpbmdJbmZvTGlzdE1hcHBlciA9IG5ldyBNYXBwaW5nSW5mb0xpc3RNYXBwZXIoKTtcbiAgICBtYXBwZXIuc2V0Sk9iamVjdChtYXBwaW5nSW5mb0xpc3QpO1xuXG4gICAgY29uc3QgY29udGV4dDogQ3ViaXNtTW90aW9uU3luY0NvbnRleHQgPVxuICAgICAgdGhpcy5nZXRFbmdpbmVIYW5kbGUoKS5jcmVhdGVDb250ZXh0KFxuICAgICAgICB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgY29udGV4dENvbmZpZyxcbiAgICAgICAgbWFwcGVyLFxuICAgICAgICBtYXBwaW5nSW5mb0xpc3QuZ2V0U2l6ZSgpXG4gICAgICApO1xuICAgIGNvbnN0IGNvbnRleHRIYW5kbGU6IE1vdGlvblN5bmNDb250ZXh0ID0gbmV3IE1vdGlvblN5bmNDb250ZXh0KFxuICAgICAgY29udGV4dCxcbiAgICAgIG1hcHBlcixcbiAgICAgIGN1YmlzbVBhcmFtZXRlckNvdW50XG4gICAgKTtcbiAgICBjb25zdCBwcm9jZXNzb3I6IEN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3JDUkkgPVxuICAgICAgbmV3IEN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3JDUkkoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGNvbnRleHRIYW5kbGUsXG4gICAgICAgIG1hcHBpbmdJbmZvTGlzdCxcbiAgICAgICAgc2FtcGxlUmF0ZSxcbiAgICAgICAgRGVmYXVsdEF1ZGlvQml0RGVwdGhcbiAgICAgICk7XG4gICAgdGhpcy5fcHJvY2Vzc29ycy5wdXNoQmFjayhwcm9jZXNzb3IpO1xuXG4gICAgcmV0dXJuIHByb2Nlc3NvcjtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBlbmdpbmVIYW5kbGU6IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVMaWIsXG4gICAgdHlwZTogRW5naW5lVHlwZSxcbiAgICBuYW1lOiBjc21TdHJpbmcsXG4gICAgdmVyc2lvbjogQ3ViaXNtTW90aW9uU3luY0VuZ2luZVZlcnNpb25cbiAgKSB7XG4gICAgc3VwZXIoZW5naW5lSGFuZGxlLCB0eXBlLCBuYW1lLCB2ZXJzaW9uKTtcbiAgICB0aGlzLl9wcm9jZXNzb3JzID0gbmV3IGNzbVZlY3RvcjxJQ3ViaXNtTW90aW9uU3luY1Byb2Nlc3Nvcj4oKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcHJvY2Vzc29yczogY3NtVmVjdG9yPElDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yPjtcbn1cblxuLy8gTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQgKiBhcyAkIGZyb20gJy4vbW90aW9uc3luY2NvbmZpZ19jcmknO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0ZyYW1ld29yayB7XG4gIGV4cG9ydCBjb25zdCBNb3Rpb25TeW5jQ29udGV4dENvbmZpZ19DUkkgPSAkLk1vdGlvblN5bmNDb250ZXh0Q29uZmlnX0NSSTtcbiAgZXhwb3J0IHR5cGUgTW90aW9uU3luY0NvbnRleHRDb25maWdfQ1JJID0gJC5Nb3Rpb25TeW5jQ29udGV4dENvbmZpZ19DUkk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBjc21TdHJpbmcgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3Ntc3RyaW5nJztcbmltcG9ydCB7IGNzbVZlY3RvciB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc212ZWN0b3InO1xuaW1wb3J0IHsgQ3ViaXNtTG9nSW5mbywgQ3ViaXNtTG9nV2FybmluZyB9IGZyb20gJ0BmcmFtZXdvcmsvdXRpbHMvY3ViaXNtZGVidWcnO1xuaW1wb3J0IHsgRW5naW5lVHlwZSwgTWFwcGluZ0luZm9MaXN0TWFwcGVyIH0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jdXRpbCc7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQW5hbHlzaXNSZXN1bHQgfSBmcm9tICcuL2N1YmlzbW1vdGlvbnN5bmNlbmdpbmVhbmFseXNpc3Jlc3VsdCc7XG5pbXBvcnQge1xuICBNb3Rpb25TeW5jQW5hbHlzaXNDb25maWdfQ1JJLFxuICBNb3Rpb25TeW5jQ29udGV4dENvbmZpZ19DUklcbn0gZnJvbSAnLi9tb3Rpb25zeW5jY29uZmlnX2NyaSc7XG5pbXBvcnQgVG9Qb2ludGVyID0gTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0NvcmUuVG9Qb2ludGVyO1xuXG5leHBvcnQgdHlwZSBDdWJpc21Nb3Rpb25TeW5jQ29udGV4dCA9IExpdmUyREN1YmlzbU1vdGlvblN5bmNDb3JlLkNvbnRleHQ7XG5leHBvcnQgdHlwZSBDdWJpc21Nb3Rpb25TeW5jQ29udGV4dENvbmZpZyA9IHVua25vd247XG5cbmV4cG9ydCBjbGFzcyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lTGliIHtcbiAgcHVibGljIGdldEVuZ2luZVZlcnNpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0NvcmUuQ3ViaXNtTW90aW9uU3luY0VuZ2luZS5jc21Nb3Rpb25TeW5jR2V0RW5naW5lVmVyc2lvbigpO1xuICB9XG5cbiAgcHVibGljIGdldEVuZ2luZU5hbWUoKTogY3NtU3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IGNzbVN0cmluZyhcbiAgICAgIExpdmUyREN1YmlzbU1vdGlvblN5bmNDb3JlLkN1YmlzbU1vdGlvblN5bmNFbmdpbmUuY3NtTW90aW9uU3luY0dldEVuZ2luZU5hbWUoKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZUVuZ2luZShlbmdpbmVDb25maWc6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgQ3ViaXNtTG9nSW5mbygnQ3ViaXNtIE1vdGlvblN5bmMgQ29yZSBhbHJlYWR5IGluaXRpYWxpemVkLicpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMuX2lzRW5naW5lSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyID1cbiAgICAgIExpdmUyREN1YmlzbU1vdGlvblN5bmNDb3JlLkN1YmlzbU1vdGlvblN5bmNFbmdpbmUuY3NtTW90aW9uU3luY0luaXRpYWxpemVFbmdpbmUoXG4gICAgICAgIGVuZ2luZUNvbmZpZ1xuICAgICAgKTtcblxuICAgIGlmIChyZXN1bHQgPT0gTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0NvcmUuY3NtTW90aW9uU3luY0ZhbHNlKSB7XG4gICAgICBDdWJpc21Mb2dXYXJuaW5nKCdDdWJpc20gTW90aW9uU3luYyBDb3JlIEluaXRpYWxpemluZyBmYWlsZWQuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2lzRW5naW5lSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRpc3Bvc2VFbmdpbmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgQ3ViaXNtTG9nSW5mbygnQ3ViaXNtIE1vdGlvblN5bmMgQ29yZSBpbml0aWFsaXplZCB5ZXQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0NvcmUuQ3ViaXNtTW90aW9uU3luY0VuZ2luZS5jc21Nb3Rpb25TeW5jRGlzcG9zZUVuZ2luZSgpO1xuICAgIHRoaXMuX2lzRW5naW5lSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDb250ZXh0KFxuICAgIHR5cGU6IEVuZ2luZVR5cGUsXG4gICAgY29udGV4dENvbmZpZzogQ3ViaXNtTW90aW9uU3luY0NvbnRleHRDb25maWcsXG4gICAgbWFwcGluZ0luZm9MaXN0OiBNYXBwaW5nSW5mb0xpc3RNYXBwZXIsXG4gICAgbWFwcGluZ0luZm9MaXN0Q291bnQ6IG51bWJlclxuICApOiBDdWJpc21Nb3Rpb25TeW5jQ29udGV4dCB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgQ3ViaXNtTG9nSW5mbygnQ3ViaXNtIE1vdGlvblN5bmMgQ29yZSBpbml0aWFsaXplZCB5ZXQuJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0OiBDdWJpc21Nb3Rpb25TeW5jQ29udGV4dCA9XG4gICAgICBuZXcgTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0NvcmUuQ29udGV4dCgpO1xuXG4gICAgLy8gRW5naW5lVHlwZeOBp0NvbmZpZ+OCkuWIhuOBkeOCi1xuICAgIGxldCBjb250ZXh0Q29uZmlnUHRyOiBudW1iZXI7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEVuZ2luZVR5cGUuRW5naW5lVHlwZV9Dcmk6XG4gICAgICAgIHtcbiAgICAgICAgICAvLyDjg53jgqTjg7Pjgr/jgbjlpInmj5tcbiAgICAgICAgICBjb25zdCBjb250ZXh0Q29uZmlnQ3JpOiBNb3Rpb25TeW5jQ29udGV4dENvbmZpZ19DUkkgPVxuICAgICAgICAgICAgY29udGV4dENvbmZpZyBhcyBNb3Rpb25TeW5jQ29udGV4dENvbmZpZ19DUkk7XG4gICAgICAgICAgY29udGV4dENvbmZpZ0NyaT8udG9OYXRpdmVBcnJheSh0cnVlKTtcbiAgICAgICAgICBjb250ZXh0Q29uZmlnUHRyID0gY29udGV4dENvbmZpZ0NyaT8uZ2V0TmF0aXZlUHRyKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb250ZXh0LmNzbU1vdGlvblN5bmNDcmVhdGUoXG4gICAgICBjb250ZXh0Q29uZmlnUHRyLFxuICAgICAgbWFwcGluZ0luZm9MaXN0LmdldE1hcHBpbmdJbmZvTGlzdFB0cigpLFxuICAgICAgbWFwcGluZ0luZm9MaXN0Q291bnRcbiAgICApO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJDb250ZXh0KGNvbnRleHQ6IEN1YmlzbU1vdGlvblN5bmNDb250ZXh0KSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgQ3ViaXNtTG9nSW5mbygnQ3ViaXNtIE1vdGlvblN5bmMgQ29yZSBpbml0aWFsaXplZCB5ZXQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGV4dD8uY3NtTW90aW9uU3luY0NsZWFyKCk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlQ29udGV4dChjb250ZXh0OiBDdWJpc21Nb3Rpb25TeW5jQ29udGV4dCkge1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIEN1YmlzbUxvZ0luZm8oJ0N1YmlzbSBNb3Rpb25TeW5jIENvcmUgaW5pdGlhbGl6ZWQgeWV0LicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQ/LmNzbU1vdGlvblN5bmNEZWxldGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1aXJlU2FtcGxlQ291bnQoY29udGV4dDogQ3ViaXNtTW90aW9uU3luY0NvbnRleHQpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIEN1YmlzbUxvZ0luZm8oJ0N1YmlzbSBNb3Rpb25TeW5jIENvcmUgaW5pdGlhbGl6ZWQgeWV0LicpO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgQ3ViaXNtTG9nSW5mbygnY29udGV4dCBpcyBudWxsLicpO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWlyZUNvdW50OiBudW1iZXIgPSBjb250ZXh0LmNzbU1vdGlvblN5bmNHZXRSZXF1aXJlU2FtcGxlQ291bnQoKTtcbiAgICByZXR1cm4gcmVxdWlyZUNvdW50O1xuICB9XG5cbiAgcHVibGljIGFuYWx5emUoXG4gICAgY29udGV4dDogQ3ViaXNtTW90aW9uU3luY0NvbnRleHQsXG4gICAgc2FtcGxlczogQXJyYXk8bnVtYmVyPixcbiAgICBzYW1wbGVzT2Zmc2V0OiBudW1iZXIsXG4gICAgc2FtcGxlQ291bnQ6IG51bWJlcixcbiAgICBhbmFseXNpc1Jlc3VsdFB0cjogbnVtYmVyLFxuICAgIGFuYWx5c2lzQ29uZmlnUHRyOiBudW1iZXJcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgQ3ViaXNtTG9nSW5mbygnQ3ViaXNtIE1vdGlvblN5bmMgQ29yZSBpbml0aWFsaXplZCB5ZXQuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgQ3ViaXNtTG9nSW5mbygnY29udGV4dCBpcyBudWxsLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGFuYWx5emVTYW1wbGVzID0gbmV3IEFycmF5PG51bWJlcj4oc2FtcGxlQ291bnQpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzYW1wbGVDb3VudDsgaW5kZXgrKykge1xuICAgICAgYW5hbHl6ZVNhbXBsZXNbaW5kZXhdID0gc2FtcGxlc1tpbmRleCArIHNhbXBsZXNPZmZzZXRdO1xuICAgIH1cblxuICAgIFRvUG9pbnRlci5GcmVlKHRoaXMuX2FuYWx5emVTYW1wbGVzUHRyKTtcblxuICAgIHRoaXMuX2FuYWx5emVTYW1wbGVzUHRyID1cbiAgICAgIFRvUG9pbnRlci5Db252ZXJ0TnVtYmVyQXJyYXlUb0Zsb2F0QXJyYXlQdHIoYW5hbHl6ZVNhbXBsZXMpO1xuXG4gICAgLy8gc2FtcGxlc+OBruWFiOmgreOCouODieODrOOCueOAgVJlc3VsdOOBruOCouODieODrOOCueOAgWNvbmZpZ+OBruOCouODieODrOOCueOCkua4oeOBmVxuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyID0gY29udGV4dC5jc21Nb3Rpb25TeW5jQW5hbHl6ZShcbiAgICAgIHRoaXMuX2FuYWx5emVTYW1wbGVzUHRyLFxuICAgICAgc2FtcGxlQ291bnQsXG4gICAgICBhbmFseXNpc1Jlc3VsdFB0cixcbiAgICAgIGFuYWx5c2lzQ29uZmlnUHRyXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQgPT0gTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0NvcmUuY3NtTW90aW9uU3luY1RydWVcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0luaXRpYWxpemVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0VuZ2luZUluaXRpYWxpemVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNFbmdpbmVJbml0aWFsaXplZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYW5hbHl6ZVNhbXBsZXNQdHI6IG51bWJlcjtcbn1cblxuLy8gTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQgKiBhcyAkIGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZWxpYic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21Nb3Rpb25TeW5jRnJhbWV3b3JrIHtcbiAgZXhwb3J0IHR5cGUgQ3ViaXNtTW90aW9uU3luY0NvbnRleHQgPSAkLkN1YmlzbU1vdGlvblN5bmNDb250ZXh0O1xuICBleHBvcnQgY29uc3QgQ3ViaXNtTW90aW9uU3luY0VuZ2luZUxpYiA9ICQuQ3ViaXNtTW90aW9uU3luY0VuZ2luZUxpYjtcbiAgZXhwb3J0IHR5cGUgQ3ViaXNtTW90aW9uU3luY0VuZ2luZUxpYiA9ICQuQ3ViaXNtTW90aW9uU3luY0VuZ2luZUxpYjtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IGNzbVN0cmluZyB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21zdHJpbmcnO1xuaW1wb3J0IHsgY3NtVmVjdG9yIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXZlY3Rvcic7XG5pbXBvcnQgeyBDdWJpc21Mb2dFcnJvciwgQ3ViaXNtTG9nV2FybmluZyB9IGZyb20gJ0BmcmFtZXdvcmsvdXRpbHMvY3ViaXNtZGVidWcnO1xuaW1wb3J0IFRvUG9pbnRlciA9IExpdmUyREN1YmlzbU1vdGlvblN5bmNDb3JlLlRvUG9pbnRlcjtcblxuZXhwb3J0IGNvbnN0IE1hcHBpbmdJbmZvU3RydWN0U2l6ZSA9IDY7XG5cbmV4cG9ydCBjbGFzcyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lTWFwcGluZ0luZm8ge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgYXVkaW9QYXJhbWV0ZXJJZDogY3NtU3RyaW5nLFxuICAgIG1vZGVsUGFyYW1ldGVySWRzOiBjc21WZWN0b3I8Y3NtU3RyaW5nPixcbiAgICBtb2RlbFBhcmFtZXRlclZhbHVlczogY3NtVmVjdG9yPG51bWJlcj4sXG4gICAgc2NhbGU6IG51bWJlcixcbiAgICBlbmFibGVkOiBib29sZWFuXG4gICkge1xuICAgIGlmIChhdWRpb1BhcmFtZXRlcklkLmdldExlbmd0aCgpID09IDApIHtcbiAgICAgIEN1YmlzbUxvZ0Vycm9yKCdUaGUgYXVkaW8gcGFyYW1ldGVyIElEIGlzIG51bGwuJyk7XG4gICAgfVxuICAgIGlmIChtb2RlbFBhcmFtZXRlcklkcy5nZXRTaXplKCkgPT0gMCkge1xuICAgICAgQ3ViaXNtTG9nRXJyb3IoXG4gICAgICAgICdUaGUgYXJyYXkgbGVuZ3RoIG9mIElEcyBkaWZmZXJzIGZyb20gdGhlIGFycmF5IGxlbmd0aCBvZiBwYXJhbWV0ZXIgdmFsdWVzLiBQbGVhc2UgbWFrZSB0aGVtIHRoZSBzYW1lJ1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKG1vZGVsUGFyYW1ldGVyVmFsdWVzLmdldFNpemUoKSA9PSAwKSB7XG4gICAgICBDdWJpc21Mb2dFcnJvcihcbiAgICAgICAgJ1RoZSBtb2RlbCBwYXJhbWV0ZXIgSUQgYXJyYXkgb3IgdGhlIG1vZGVsIHBhcmFtZXRlciB2YWx1ZSBhcnJheSBsZW5ndGggaXMgMC4nXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoISgwLjEgPD0gc2NhbGUgJiYgc2NhbGUgPD0gMTAuMCkpIHtcbiAgICAgIEN1YmlzbUxvZ0Vycm9yKFxuICAgICAgICAnVGhlIHZhbHVlIG9mIHNjYWxlIGlzIGluY29ycmVjdC4gVGhlIHZhbHVlIGlzIGxpbWl0ZWQgdG8gYmV0d2VlbiAwLjEgYW5kIDEwLjAuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdWRpb1BhcmFtZXRlcklkID0gYXVkaW9QYXJhbWV0ZXJJZDtcbiAgICB0aGlzLl9tb2RlbFBhcmFtZXRlcklkcyA9IG1vZGVsUGFyYW1ldGVySWRzO1xuICAgIHRoaXMuX21vZGVsUGFyYW1ldGVyVmFsdWVzID0gbW9kZWxQYXJhbWV0ZXJWYWx1ZXM7XG4gICAgdGhpcy5fc2NhbGUgPSBzY2FsZTtcbiAgICB0aGlzLl9lbmFibGVkID0gTnVtYmVyKGVuYWJsZWQpO1xuICB9XG5cbiAgcHVibGljIHRvTmF0aXZlQXJyYXkoZm9yY2VDb252ZXJzaW9uOiBib29sZWFuKTogRmxvYXQzMkFycmF5IHtcbiAgICAvLyDlvLfliLbnmoTjgavmlrDopo/kvZzmiJDjgZfjgarjgYTjga7jgafjgYLjgozjgbDml6LjgavjgYLjgovjgoLjga7jgpLov5TjgZlcbiAgICBpZiAoIWZvcmNlQ29udmVyc2lvbiAmJiB0aGlzLl9uYXRpdmVBcnJheSkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hdGl2ZUFycmF5O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9uYXRpdmVBcnJheSkge1xuICAgICAgdGhpcy5yZWxlYXNlTmF0aXZlQXJyYXkoKTtcbiAgICB9XG4gICAgdGhpcy5fbmF0aXZlQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KE1hcHBpbmdJbmZvU3RydWN0U2l6ZSk7XG4gICAgdGhpcy5fbmF0aXZlQXJyYXlQdHIgPSBUb1BvaW50ZXIuTWFsbG9jKFxuICAgICAgdGhpcy5fbmF0aXZlQXJyYXkubGVuZ3RoICogdGhpcy5fbmF0aXZlQXJyYXkuQllURVNfUEVSX0VMRU1FTlRcbiAgICApO1xuXG4gICAgY29uc3QgbWFwcGluZ0luZm9Nb2RlbFBhcmFtZXRlcklkcyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgY29uc3QgbWFwcGluZ0luZm9Nb2RlbFBhcmFtZXRlclZhbHVlcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgZm9yIChcbiAgICAgIGxldCBtYXBwaW5nSW5mb0luZGV4ID0gMDtcbiAgICAgIG1hcHBpbmdJbmZvSW5kZXggPCB0aGlzLl9tb2RlbFBhcmFtZXRlcklkcy5nZXRTaXplKCk7XG4gICAgICBtYXBwaW5nSW5mb0luZGV4KytcbiAgICApIHtcbiAgICAgIC8vIOebtOaOpSBjc21TdHJpbmfjgahzdHJpbmfjga/lpInmj5vjgafjgY3jgarjgYTjga7jgafkuIDluqbnorrkv53jgZnjgotcbiAgICAgIG1hcHBpbmdJbmZvTW9kZWxQYXJhbWV0ZXJJZHMucHVzaChcbiAgICAgICAgdGhpcy5fbW9kZWxQYXJhbWV0ZXJJZHMuYXQobWFwcGluZ0luZm9JbmRleCkuc1xuICAgICAgKTtcblxuICAgICAgLy8g5LqL5pWF6Ziy5q2i44Gu44Gf44KBSWRz5ZCM5qeY44Gr5LiA5bqm56K65L+d44GZ44KLXG4gICAgICBtYXBwaW5nSW5mb01vZGVsUGFyYW1ldGVyVmFsdWVzLnB1c2goXG4gICAgICAgIHRoaXMuX21vZGVsUGFyYW1ldGVyVmFsdWVzLmF0KG1hcHBpbmdJbmZvSW5kZXgpXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIE5hdGl2ZeODneOCpOODs+OCv+OBuOOBruWkieaPm1xuICAgIHRoaXMuX25hdGl2ZUFycmF5ID0gVG9Qb2ludGVyLkNvbnZlcnRNYXBwaW5nSW5mb0NyaVRvRmxvYXQzMkFycmF5KFxuICAgICAgdGhpcy5fbmF0aXZlQXJyYXksXG4gICAgICB0aGlzLl9uYXRpdmVBcnJheVB0cixcbiAgICAgIHRoaXMuX2F1ZGlvUGFyYW1ldGVySWQucyxcbiAgICAgIG1hcHBpbmdJbmZvTW9kZWxQYXJhbWV0ZXJJZHMsXG4gICAgICBtYXBwaW5nSW5mb01vZGVsUGFyYW1ldGVyVmFsdWVzLFxuICAgICAgdGhpcy5fbW9kZWxQYXJhbWV0ZXJJZHMuZ2V0U2l6ZSgpLFxuICAgICAgdGhpcy5fc2NhbGUsXG4gICAgICB0aGlzLl9lbmFibGVkXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLl9uYXRpdmVBcnJheTtcbiAgfVxuXG4gIHB1YmxpYyByZWxlYXNlTmF0aXZlQXJyYXkoKTogdm9pZCB7XG4gICAgdGhpcy5kZWFsbG9jTmF0aXZlQXJyYXlQdHIoKTtcbiAgICB0aGlzLl9uYXRpdmVBcnJheSA9IHZvaWQgMDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdWRpb1BhcmFtZXRlcklkKCk6IGNzbVN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2F1ZGlvUGFyYW1ldGVySWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0TW9kZWxQYXJhbWV0ZXJJZHMoKTogY3NtVmVjdG9yPGNzbVN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9tb2RlbFBhcmFtZXRlcklkcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb2RlbFBhcmFtZXRlclZhbHVlcygpOiBjc21WZWN0b3I8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsUGFyYW1ldGVyVmFsdWVzO1xuICB9XG5cbiAgcHVibGljIGdldFNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG5cbiAgcHVibGljIGdldEVuYWJsZWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgZGVhbGxvY05hdGl2ZUFycmF5UHRyKCk6IHZvaWQge1xuICAgIC8vIOWPgueFp+a4oeOBl+OBq+OBquOBo+OBpuOBhOOCi+euh+aJgOOBoOOBkeWFiOOBq+ODoeODouODquino+aUvlxuICAgIFRvUG9pbnRlci5GcmVlKHRoaXMuX25hdGl2ZUFycmF5WzBdKTtcbiAgICBUb1BvaW50ZXIuRnJlZSh0aGlzLl9uYXRpdmVBcnJheVsxXSk7XG4gICAgVG9Qb2ludGVyLkZyZWUodGhpcy5fbmF0aXZlQXJyYXlbMl0pO1xuXG4gICAgLy8g6YWN5YiX5pys5L2T44KS6Kej5pS+XG4gICAgVG9Qb2ludGVyLkZyZWUodGhpcy5fbmF0aXZlQXJyYXlQdHIpO1xuICAgIHRoaXMuX25hdGl2ZUFycmF5UHRyID0gMDtcbiAgfVxuXG4gIHByaXZhdGUgX2F1ZGlvUGFyYW1ldGVySWQ6IGNzbVN0cmluZztcbiAgcHJpdmF0ZSBfbW9kZWxQYXJhbWV0ZXJJZHM6IGNzbVZlY3Rvcjxjc21TdHJpbmc+O1xuICBwcml2YXRlIF9tb2RlbFBhcmFtZXRlclZhbHVlczogY3NtVmVjdG9yPG51bWJlcj47XG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX2VuYWJsZWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbmF0aXZlQXJyYXk6IEZsb2F0MzJBcnJheTtcbiAgcHJpdmF0ZSBfbmF0aXZlQXJyYXlQdHI6IG51bWJlcjtcbn1cblxuLy8gTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQgKiBhcyAkIGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZW1hcHBpbmdpbmZvJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbU1vdGlvblN5bmNGcmFtZXdvcmsge1xuICBleHBvcnQgY29uc3QgQ3ViaXNtTW90aW9uU3luY0VuZ2luZU1hcHBpbmdJbmZvID1cbiAgICAkLkN1YmlzbU1vdGlvblN5bmNFbmdpbmVNYXBwaW5nSW5mbztcbiAgZXhwb3J0IHR5cGUgQ3ViaXNtTW90aW9uU3luY0VuZ2luZU1hcHBpbmdJbmZvID1cbiAgICAkLkN1YmlzbU1vdGlvblN5bmNFbmdpbmVNYXBwaW5nSW5mbztcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IGNzbVN0cmluZyB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21zdHJpbmcnO1xuXG5leHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uU3luY0VuZ2luZVZlcnNpb24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IocmF3VmVyc2lvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmVyc2lvbk51bWJlciA9IHJhd1ZlcnNpb247XG4gICAgdGhpcy5fbWFqb3IgPSAodGhpcy5fdmVyc2lvbk51bWJlciAmIDB4ZmYwMDAwMDApID4+IDI0O1xuICAgIHRoaXMuX21pbm9yID0gKHRoaXMuX3ZlcnNpb25OdW1iZXIgJiAweDAwZmYwMDAwKSA+PiAxNjtcbiAgICB0aGlzLl9wYXRjaCA9IHRoaXMuX3ZlcnNpb25OdW1iZXIgJiAweDAwMDBmZmZmO1xuICB9XG5cbiAgcHVibGljIGdldE1ham9yKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21ham9yO1xuICB9XG5cbiAgcHVibGljIGdldE1pbm9yKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pbm9yO1xuICB9XG5cbiAgcHVibGljIGdldFBhdGNoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdGNoO1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX21ham9yICtcbiAgICAgICcuJyArXG4gICAgICB0aGlzLl9taW5vciArXG4gICAgICAnLicgK1xuICAgICAgdGhpcy5fcGF0Y2ggK1xuICAgICAgJygnICtcbiAgICAgIHRoaXMuX3ZlcnNpb25OdW1iZXIgK1xuICAgICAgJyknXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZlcnNpb25OdW1iZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWFqb3I6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWlub3I6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcGF0Y2g6IG51bWJlcjtcbn1cblxuLy8gTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQgKiBhcyAkIGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZXZlcnNpb24nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0ZyYW1ld29yayB7XG4gIGV4cG9ydCBjb25zdCBDdWJpc21Nb3Rpb25TeW5jRW5naW5lVmVyc2lvbiA9ICQuQ3ViaXNtTW90aW9uU3luY0VuZ2luZVZlcnNpb247XG4gIGV4cG9ydCB0eXBlIEN1YmlzbU1vdGlvblN5bmNFbmdpbmVWZXJzaW9uID0gJC5DdWJpc21Nb3Rpb25TeW5jRW5naW5lVmVyc2lvbjtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IGNzbVZlY3RvciB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc212ZWN0b3InO1xuaW1wb3J0IHsgQ3ViaXNtTG9nRXJyb3IgfSBmcm9tICdAZnJhbWV3b3JrL3V0aWxzL2N1YmlzbWRlYnVnJztcbmltcG9ydCB7IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVBbmFseXNpc1Jlc3VsdCB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZWFuYWx5c2lzcmVzdWx0JztcbmltcG9ydCB7IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVNYXBwaW5nSW5mbyB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZW1hcHBpbmdpbmZvJztcbmltcG9ydCB7IE1vdGlvblN5bmNDb250ZXh0IH0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jdXRpbCc7XG5pbXBvcnQgeyBJQ3ViaXNtTW90aW9uU3luY0VuZ2luZSB9IGZyb20gJy4vaWN1YmlzbW1vdGlvbnN5bmNlbmdpbmUnO1xuaW1wb3J0IHsgSUN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3IgfSBmcm9tICcuL2ljdWJpc21tb3Rpb25zeW5jcHJvY2Vzc29yJztcbmltcG9ydCB7IE1vdGlvblN5bmNBbmFseXNpc0NvbmZpZ19DUkkgfSBmcm9tICcuL21vdGlvbnN5bmNjb25maWdfY3JpJztcbmltcG9ydCBUb1BvaW50ZXIgPSBMaXZlMkRDdWJpc21Nb3Rpb25TeW5jQ29yZS5Ub1BvaW50ZXI7XG5cbmV4cG9ydCBjbGFzcyBDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yQ1JJIGV4dGVuZHMgSUN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3Ige1xuICBwdWJsaWMgZ2V0U2FtcGxlUmF0ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zYW1wbGVSYXRlO1xuICB9XG5cbiAgcHVibGljIGdldEJpdERlcHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdERlcHRoO1xuICB9XG5cbiAgcHVibGljIEFuYWx5emUoXG4gICAgc2FtcGxlczogY3NtVmVjdG9yPG51bWJlcj4sXG4gICAgYmVnaW5JbmRleDogbnVtYmVyLFxuICAgIGJsZW5kUmF0aW86IG51bWJlcixcbiAgICBzbW9vdGhpbmc6IG51bWJlcixcbiAgICBhdWRpb0xldmVsRWZmZWN0UmF0aW86IG51bWJlcixcbiAgICBhbmFseXNpc1Jlc3VsdDogQ3ViaXNtTW90aW9uU3luY0VuZ2luZUFuYWx5c2lzUmVzdWx0XG4gICk6IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVBbmFseXNpc1Jlc3VsdCB7XG4gICAgY29uc3Qgc2FtcGxlc1NpemUgPSBzYW1wbGVzLmdldFNpemUoKTtcbiAgICBpZiAoXG4gICAgICBzYW1wbGVzU2l6ZSA8XG4gICAgICB0aGlzLmdldEVuZ2luZSgpXG4gICAgICAgIC5nZXRFbmdpbmVIYW5kbGUoKVxuICAgICAgICAuZ2V0UmVxdWlyZVNhbXBsZUNvdW50KHRoaXMuZ2V0Q29udGV4dEhhbmRsZSgpLmdldENvbnRleHQoKSlcbiAgICApIHtcbiAgICAgIEN1YmlzbUxvZ0Vycm9yKFxuICAgICAgICAnVGhlIGFyZ3VtZW50IGlzIGludmFsaWQuIFBsZWFzZSBjaGVjayB0aGF0IHRoZSBzYW1wbGVzIGlzIHRoZSBjb3JyZWN0IHZhbHVlLidcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoISgwIDw9IGJlZ2luSW5kZXggJiYgYmVnaW5JbmRleCA8IHNhbXBsZXMuZ2V0U2l6ZSgpKSkge1xuICAgICAgQ3ViaXNtTG9nRXJyb3IoXG4gICAgICAgICdUaGUgdmFsdWUgb2YgYmVnaW5JbmRleCBpcyBpbmNvcnJlY3QuIEl0IHNob3VsZCBiZSBsZXNzIHRoYW4gdGhlIGxlbmd0aCBvZiBzYW1wbGVzLidcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoISgwLjAgPD0gYmxlbmRSYXRpbyAmJiBibGVuZFJhdGlvIDw9IDEuMCkpIHtcbiAgICAgIEN1YmlzbUxvZ0Vycm9yKFxuICAgICAgICAnVGhlIHZhbHVlIG9mIGJsZW5kIHJhdGlvIGlzIGluY29ycmVjdC4gVGhlIHZhbHVlIGlzIGxpbWl0ZWQgdG8gYmV0d2VlbiAwLjAgYW5kIDEuMC4nXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCEoMSA8PSBzbW9vdGhpbmcgJiYgc21vb3RoaW5nIDw9IDEwMCkpIHtcbiAgICAgIEN1YmlzbUxvZ0Vycm9yKFxuICAgICAgICAnVGhlIHZhbHVlIG9mIHNtb290aGluZyBpcyBpbmNvcnJlY3QuIFRoZSB2YWx1ZSBpcyBsaW1pdGVkIHRvIGJldHdlZW4gMSBhbmQgMTAwLidcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoISgwLjAgPD0gYXVkaW9MZXZlbEVmZmVjdFJhdGlvICYmIGF1ZGlvTGV2ZWxFZmZlY3RSYXRpbyA8PSAxLjApKSB7XG4gICAgICBDdWJpc21Mb2dFcnJvcihcbiAgICAgICAgJ1RoZSB2YWx1ZSBvZiBhdWRpbyBsZXZlbCBlZmZlY3QgcmF0aW8gaXMgaW5jb3JyZWN0LiBUaGUgdmFsdWUgaXMgbGltaXRlZCB0byBiZXR3ZWVuIDAuMCBhbmQgMS4wLidcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIWFuYWx5c2lzUmVzdWx0KSB7XG4gICAgICBDdWJpc21Mb2dFcnJvcignVGhlIHJlc3VsdCBpbnN0YW5jZSBpcyBudWxsLicpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgYW5hbHlzaXNDb25maWc6IE1vdGlvblN5bmNBbmFseXNpc0NvbmZpZ19DUkkgPVxuICAgICAgbmV3IE1vdGlvblN5bmNBbmFseXNpc0NvbmZpZ19DUkkoXG4gICAgICAgIGJsZW5kUmF0aW8sXG4gICAgICAgIHNtb290aGluZyxcbiAgICAgICAgYXVkaW9MZXZlbEVmZmVjdFJhdGlvXG4gICAgICApO1xuXG4gICAgY29uc3QgYW5hbHlzaXNDb25maWdCdWZmZXI6IEZsb2F0MzJBcnJheSA9XG4gICAgICBhbmFseXNpc0NvbmZpZy50b05hdGl2ZUFycmF5KGZhbHNlKTtcblxuICAgIC8vIOODneOCpOODs+OCv+OCkueUn+aIkFxuICAgIGlmICghdGhpcy5fYW5hbHlzaXNDb25maWdOYXRpdmVQdHIgfHwgdGhpcy5fYW5hbHlzaXNDb25maWdOYXRpdmVQdHIgPT0gMCkge1xuICAgICAgdGhpcy5fYW5hbHlzaXNDb25maWdOYXRpdmVQdHIgPSBUb1BvaW50ZXIuTWFsbG9jKFxuICAgICAgICBhbmFseXNpc0NvbmZpZ0J1ZmZlci5sZW5ndGhcbiAgICAgICk7XG4gICAgfVxuICAgIFRvUG9pbnRlci5BZGRWYWx1ZVB0ckZsb2F0KFxuICAgICAgdGhpcy5fYW5hbHlzaXNDb25maWdOYXRpdmVQdHIsXG4gICAgICAwLFxuICAgICAgYW5hbHlzaXNDb25maWdCdWZmZXJbMF1cbiAgICApO1xuICAgIFRvUG9pbnRlci5BZGRWYWx1ZVB0ckludDMyKFxuICAgICAgdGhpcy5fYW5hbHlzaXNDb25maWdOYXRpdmVQdHIsXG4gICAgICA0LFxuICAgICAgYW5hbHlzaXNDb25maWdCdWZmZXJbMV1cbiAgICApO1xuICAgIFRvUG9pbnRlci5BZGRWYWx1ZVB0ckZsb2F0KFxuICAgICAgdGhpcy5fYW5hbHlzaXNDb25maWdOYXRpdmVQdHIsXG4gICAgICA4LFxuICAgICAgYW5hbHlzaXNDb25maWdCdWZmZXJbMl1cbiAgICApO1xuXG4gICAgY29uc3QgYW5hbHlzaXNSZXN1bHRCdWZmZXI6IEludDMyQXJyYXkgPVxuICAgICAgYW5hbHlzaXNSZXN1bHQudG9OYXRpdmVBcnJheShmYWxzZSk7XG5cbiAgICAvLyDjg53jgqTjg7Pjgr/jgpLnlJ/miJBcbiAgICBpZiAoIXRoaXMuX2FuYWx5c2lzUmVzdWx0TmF0aXZlUHRyIHx8IHRoaXMuX2FuYWx5c2lzUmVzdWx0TmF0aXZlUHRyID09IDApIHtcbiAgICAgIHRoaXMuX2FuYWx5c2lzUmVzdWx0TmF0aXZlUHRyID0gVG9Qb2ludGVyLk1hbGxvYyhcbiAgICAgICAgYW5hbHlzaXNSZXN1bHRCdWZmZXIubGVuZ3RoICogYW5hbHlzaXNSZXN1bHRCdWZmZXIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAgICk7XG4gICAgfVxuICAgIFRvUG9pbnRlci5BZGRWYWx1ZVB0ckludDMyKFxuICAgICAgdGhpcy5fYW5hbHlzaXNSZXN1bHROYXRpdmVQdHIsXG4gICAgICAwLFxuICAgICAgYW5hbHlzaXNSZXN1bHRCdWZmZXJbMF1cbiAgICApO1xuICAgIFRvUG9pbnRlci5BZGRWYWx1ZVB0ckludDMyKFxuICAgICAgdGhpcy5fYW5hbHlzaXNSZXN1bHROYXRpdmVQdHIsXG4gICAgICA0LFxuICAgICAgYW5hbHlzaXNSZXN1bHRCdWZmZXJbMV1cbiAgICApO1xuICAgIFRvUG9pbnRlci5BZGRWYWx1ZVB0ckludDMyKFxuICAgICAgdGhpcy5fYW5hbHlzaXNSZXN1bHROYXRpdmVQdHIsXG4gICAgICA4LFxuICAgICAgYW5hbHlzaXNSZXN1bHRCdWZmZXJbMl1cbiAgICApO1xuXG4gICAgY29uc3QgcmV0OiBib29sZWFuID0gdGhpcy5nZXRFbmdpbmUoKVxuICAgICAgLmdldEVuZ2luZUhhbmRsZSgpXG4gICAgICAuYW5hbHl6ZShcbiAgICAgICAgdGhpcy5nZXRDb250ZXh0SGFuZGxlKCkuZ2V0Q29udGV4dCgpLFxuICAgICAgICBzYW1wbGVzLl9wdHIsXG4gICAgICAgIGJlZ2luSW5kZXgsXG4gICAgICAgIHNhbXBsZXNTaXplIC0gYmVnaW5JbmRleCxcbiAgICAgICAgdGhpcy5fYW5hbHlzaXNSZXN1bHROYXRpdmVQdHIsXG4gICAgICAgIHRoaXMuX2FuYWx5c2lzQ29uZmlnTmF0aXZlUHRyXG4gICAgICApO1xuXG4gICAgaWYgKCFyZXQpIHtcbiAgICAgIEN1YmlzbUxvZ0Vycm9yKCdGYWlsZWQgdG8gYW5hbHl6ZS4nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIOODh+ODvOOCv+OCkuW8leOBo+W8teOBo+OBpuOBj+OCi+OAglxuICAgIGFuYWx5c2lzUmVzdWx0LkNvbnZlcnROYXRpdmVBbmFseXNpc1Jlc3VsdCh0aGlzLl9hbmFseXNpc1Jlc3VsdE5hdGl2ZVB0cik7XG5cbiAgICByZXR1cm4gYW5hbHlzaXNSZXN1bHQ7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgZW5naW5lOiBJQ3ViaXNtTW90aW9uU3luY0VuZ2luZSxcbiAgICBjb250ZXh0SGFuZGxlOiBNb3Rpb25TeW5jQ29udGV4dCxcbiAgICBtYXBwaW5nTGlzdDogY3NtVmVjdG9yPEN1YmlzbU1vdGlvblN5bmNFbmdpbmVNYXBwaW5nSW5mbz4sXG4gICAgc2FtcGxlUmF0ZTogbnVtYmVyLFxuICAgIGJpdERlcHRoOiBudW1iZXJcbiAgKSB7XG4gICAgc3VwZXIoZW5naW5lLCBjb250ZXh0SGFuZGxlLCBtYXBwaW5nTGlzdCk7XG4gICAgdGhpcy5fc2FtcGxlUmF0ZSA9IHNhbXBsZVJhdGU7XG4gICAgdGhpcy5fYml0RGVwdGggPSBiaXREZXB0aDtcbiAgfVxuXG4gIHB1YmxpYyByZWxlYXNlKCk6IHZvaWQge1xuICAgIFRvUG9pbnRlci5GcmVlKHRoaXMuX2FuYWx5c2lzQ29uZmlnTmF0aXZlUHRyKTtcbiAgICB0aGlzLl9hbmFseXNpc0NvbmZpZ05hdGl2ZVB0ciA9IDA7XG4gICAgVG9Qb2ludGVyLkZyZWUodGhpcy5fYW5hbHlzaXNSZXN1bHROYXRpdmVQdHIpO1xuICAgIHRoaXMuX2FuYWx5c2lzUmVzdWx0TmF0aXZlUHRyID0gMDtcbiAgfVxuXG4gIHByaXZhdGUgX3NhbXBsZVJhdGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYml0RGVwdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYW5hbHlzaXNDb25maWdOYXRpdmVQdHI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYW5hbHlzaXNSZXN1bHROYXRpdmVQdHI6IG51bWJlcjtcbn1cblxuLy8gTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQgKiBhcyAkIGZyb20gJy4vY3ViaXNtbW90aW9uc3luY3Byb2Nlc3NvcmNyaSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21Nb3Rpb25TeW5jRnJhbWV3b3JrIHtcbiAgZXhwb3J0IGNvbnN0IEN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3JDUkkgPSAkLkN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3JDUkk7XG4gIGV4cG9ydCB0eXBlIEN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3JDUkkgPSAkLkN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3JDUkk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBjc21WZWN0b3IgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yJztcbmltcG9ydCB7IEN1YmlzbU1vdGlvblN5bmNDb250ZXh0IH0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jZW5naW5lbGliJztcbmltcG9ydCB7XG4gIEN1YmlzbU1vdGlvblN5bmNFbmdpbmVNYXBwaW5nSW5mbyxcbiAgTWFwcGluZ0luZm9TdHJ1Y3RTaXplXG59IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZW1hcHBpbmdpbmZvJztcbmltcG9ydCBUb1BvaW50ZXIgPSBMaXZlMkRDdWJpc21Nb3Rpb25TeW5jQ29yZS5Ub1BvaW50ZXI7XG5cbmV4cG9ydCBlbnVtIEVuZ2luZVR5cGUge1xuICBFbmdpbmVUeXBlX0NyaSA9IDAsXG4gIEVuZ2luZVR5cGVfVW5rbm93blxufVxuXG5leHBvcnQgY2xhc3MgTWFwcGluZ0luZm9MaXN0TWFwcGVyIHtcbiAgLy8g44OH44K544OI44Op44Kv44K/XG4gIHB1YmxpYyByZWxlYXNlKCk6IHZvaWQge1xuICAgIHRoaXMuZGVsZXRlTWFwcGluZ0luZm9MaXN0KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0Sk9iamVjdChcbiAgICBtYXBwaW5nSW5mb0xpc3Q6IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25TeW5jRW5naW5lTWFwcGluZ0luZm8+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuZGVsZXRlTWFwcGluZ0luZm9MaXN0KCk7XG4gICAgdGhpcy5faW5mb0J1ZmZlckxpc3QgPSBuZXcgY3NtVmVjdG9yPEZsb2F0MzJBcnJheT4oKTtcbiAgICB0aGlzLkNvbnZlcnRPYmplY3RUb05hdGl2ZShtYXBwaW5nSW5mb0xpc3QpO1xuICB9XG5cbiAgcHVibGljIENvbnZlcnRPYmplY3RUb05hdGl2ZShcbiAgICBpbmZvTGlzdDogY3NtVmVjdG9yPEN1YmlzbU1vdGlvblN5bmNFbmdpbmVNYXBwaW5nSW5mbz5cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgaW5mb0xpc3RDb3VudDogbnVtYmVyID0gaW5mb0xpc3QuZ2V0U2l6ZSgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGluZm9MaXN0Q291bnQ7IGluZGV4KyspIHtcbiAgICAgIHRoaXMuX2luZm9CdWZmZXJMaXN0LnB1c2hCYWNrKGluZm9MaXN0LmF0KGluZGV4KS50b05hdGl2ZUFycmF5KHRydWUpKTtcbiAgICB9XG5cbiAgICAvLyDjg6Hjg6Ljg6rnorrkv51cbiAgICBsZXQgbWFwcGluZ0luZm9MaXN0UHRyID0gVG9Qb2ludGVyLk1hbGxvYyhcbiAgICAgIHRoaXMuX2luZm9CdWZmZXJMaXN0LmF0KDApLmxlbmd0aCAqXG4gICAgICAgIGluZm9MaXN0Q291bnQgKlxuICAgICAgICB0aGlzLl9pbmZvQnVmZmVyTGlzdC5hdCgwKS5CWVRFU19QRVJfRUxFTUVOVFxuICAgICk7XG4gICAgLy8g5YWI6aCt44Ki44OJ44Os44K544KS5L+d5a2YXG4gICAgdGhpcy5fbWFwcGluZ0luZm9MaXN0Rmlyc3RQdHIgPSBtYXBwaW5nSW5mb0xpc3RQdHI7XG5cbiAgICAvLyDjg6Hjg6Ljg6rkuIrjgacx5YiX44Gr5Lim44G544KLXG4gICAgZm9yIChcbiAgICAgIGxldCBpbmZvTGlzdEluZGV4ID0gMDtcbiAgICAgIGluZm9MaXN0SW5kZXggPCBpbmZvTGlzdENvdW50O1xuICAgICAgaW5mb0xpc3RJbmRleCsrXG4gICAgKSB7XG4gICAgICAvLyDopoHntKDjga7mlbDliIblm57jgZlcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBpbmZvRWxlbWVudEluZGV4ID0gMDtcbiAgICAgICAgaW5mb0VsZW1lbnRJbmRleCA8IE1hcHBpbmdJbmZvU3RydWN0U2l6ZTtcbiAgICAgICAgaW5mb0VsZW1lbnRJbmRleCsrXG4gICAgICApIHtcbiAgICAgICAgaWYgKGluZm9FbGVtZW50SW5kZXggPT0gNCkge1xuICAgICAgICAgIC8vIEZsb2F044Gu5YCk5rih44GX44Gq44Gu44Gn44GT44GT44Gg44GR44GT44Gu44KI44GG44Gr44GZ44KLXG4gICAgICAgICAgVG9Qb2ludGVyLkFkZFZhbHVlUHRyRmxvYXQoXG4gICAgICAgICAgICBtYXBwaW5nSW5mb0xpc3RQdHIsXG4gICAgICAgICAgICBpbmZvRWxlbWVudEluZGV4ICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxuICAgICAgICAgICAgdGhpcy5faW5mb0J1ZmZlckxpc3QuYXQoaW5mb0xpc3RJbmRleClbaW5mb0VsZW1lbnRJbmRleF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFRvUG9pbnRlci5BZGRWYWx1ZVB0ckludDMyKFxuICAgICAgICAgIG1hcHBpbmdJbmZvTGlzdFB0cixcbiAgICAgICAgICBpbmZvRWxlbWVudEluZGV4ICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5ULFxuICAgICAgICAgIHRoaXMuX2luZm9CdWZmZXJMaXN0LmF0KGluZm9MaXN0SW5kZXgpW2luZm9FbGVtZW50SW5kZXhdXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyDliKnnlKjjgZfjgZ/jg5DjgqTjg4jmlbDliIbjg53jgqTjg7Pjgr/jgpLpgLLjgoHjgotcbiAgICAgIG1hcHBpbmdJbmZvTGlzdFB0ciArPVxuICAgICAgICBNYXBwaW5nSW5mb1N0cnVjdFNpemUgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRlbGV0ZU1hcHBpbmdJbmZvTGlzdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2luZm9CdWZmZXJMaXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faW5mb0J1ZmZlckxpc3QuY2xlYXIoKTtcbiAgICB0aGlzLl9pbmZvQnVmZmVyTGlzdCA9IHZvaWQgMDtcbiAgICB0aGlzLl9pbmZvQnVmZmVyTGlzdCA9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWFwcGluZ0luZm9MaXN0UHRyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21hcHBpbmdJbmZvTGlzdEZpcnN0UHRyO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5mb0J1ZmZlckxpc3Q6IGNzbVZlY3RvcjxGbG9hdDMyQXJyYXk+O1xuICBwcml2YXRlIF9tYXBwaW5nSW5mb0xpc3RGaXJzdFB0cjogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTW90aW9uU3luY0NvbnRleHQge1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgY29udGV4dDogQ3ViaXNtTW90aW9uU3luY0NvbnRleHQsXG4gICAgbWFwcGVyOiBNYXBwaW5nSW5mb0xpc3RNYXBwZXIsXG4gICAgY3ViaXNtUGFyYW1ldGVyQ291bnQ6IG51bWJlclxuICApIHtcbiAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLl9tYXBwZXIgPSBtYXBwZXI7XG4gICAgdGhpcy5fY3ViaXNtUGFyYW1ldGVyQ291bnQgPSBjdWJpc21QYXJhbWV0ZXJDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyByZWxlYXNlKCkge1xuICAgIHRoaXMuX2NvbnRleHQ/LmNzbU1vdGlvblN5bmNEZWxldGUoKTtcbiAgICB0aGlzLl9jb250ZXh0ID0gdm9pZCAwO1xuICAgIHRoaXMuX2NvbnRleHQgPSBudWxsO1xuXG4gICAgdGhpcy5fbWFwcGVyPy5yZWxlYXNlKCk7XG4gICAgdGhpcy5fbWFwcGVyID0gdm9pZCAwO1xuICAgIHRoaXMuX21hcHBlciA9IG51bGw7XG5cbiAgICB0aGlzLl9jdWJpc21QYXJhbWV0ZXJDb3VudCA9IDA7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29udGV4dCgpOiBDdWJpc21Nb3Rpb25TeW5jQ29udGV4dCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWFwcGVyKCk6IE1hcHBpbmdJbmZvTGlzdE1hcHBlciB7XG4gICAgcmV0dXJuIHRoaXMuX21hcHBlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdWJpc21QYXJhbWV0ZXJDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdWJpc21QYXJhbWV0ZXJDb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnRleHQ6IEN1YmlzbU1vdGlvblN5bmNDb250ZXh0O1xuICBwcml2YXRlIF9tYXBwZXI6IE1hcHBpbmdJbmZvTGlzdE1hcHBlcjtcbiAgcHJpdmF0ZSBfY3ViaXNtUGFyYW1ldGVyQ291bnQ6IG51bWJlcjtcbn1cblxuLy8gTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQgKiBhcyAkIGZyb20gJy4vY3ViaXNtbW90aW9uc3luY3V0aWwnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0ZyYW1ld29yayB7XG4gIGV4cG9ydCBjb25zdCBNb3Rpb25TeW5jQ29udGV4dCA9ICQuTW90aW9uU3luY0NvbnRleHQ7XG4gIGV4cG9ydCB0eXBlIE1vdGlvblN5bmNDb250ZXh0ID0gJC5Nb3Rpb25TeW5jQ29udGV4dDtcbiAgZXhwb3J0IGNvbnN0IE1hcHBpbmdJbmZvTGlzdE1hcHBlciA9ICQuTWFwcGluZ0luZm9MaXN0TWFwcGVyO1xuICBleHBvcnQgdHlwZSBNYXBwaW5nSW5mb0xpc3RNYXBwZXIgPSAkLk1hcHBpbmdJbmZvTGlzdE1hcHBlcjtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7IGNzbVZlY3RvciB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc212ZWN0b3InO1xuaW1wb3J0IHsgY3NtU3RyaW5nIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXN0cmluZyc7XG5pbXBvcnQgeyBJQ3ViaXNtTW90aW9uU3luY1Byb2Nlc3NvciB9IGZyb20gJy4vaWN1YmlzbW1vdGlvbnN5bmNwcm9jZXNzb3InO1xuaW1wb3J0IHsgQ3ViaXNtTW90aW9uU3luY0VuZ2luZUxpYiB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZWxpYic7XG5pbXBvcnQgeyBFbmdpbmVUeXBlIH0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jdXRpbCc7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lVmVyc2lvbiB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZXZlcnNpb24nO1xuXG4vLyBFbmdpbmXlgbTjgavmuKHjgZlCaXREZXB0aFxuZXhwb3J0IGNvbnN0IERlZmF1bHRBdWRpb0JpdERlcHRoOiBudW1iZXIgPSAzMjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElDdWJpc21Nb3Rpb25TeW5jRW5naW5lIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGVuZ2luZUhhbmRsZTogQ3ViaXNtTW90aW9uU3luY0VuZ2luZUxpYixcbiAgICB0eXBlOiBFbmdpbmVUeXBlLFxuICAgIG5hbWU6IGNzbVN0cmluZyxcbiAgICB2ZXJzaW9uOiBDdWJpc21Nb3Rpb25TeW5jRW5naW5lVmVyc2lvblxuICApIHtcbiAgICB0aGlzLl9lbmdpbmVIYW5kbGUgPSBlbmdpbmVIYW5kbGU7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0VHlwZSgpOiBFbmdpbmVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXROYW1lKCk6IGNzbVN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0VmVyc2lvbigpOiBDdWJpc21Nb3Rpb25TeW5jRW5naW5lVmVyc2lvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0RW5naW5lSGFuZGxlKCk6IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVMaWIge1xuICAgIHJldHVybiB0aGlzLl9lbmdpbmVIYW5kbGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvY2Vzc29ycygpOiBjc21WZWN0b3I8SUN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3I+IHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc29ycztcbiAgfVxuXG4gIHB1YmxpYyBpc0Nsb3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbmdpbmVIYW5kbGUoKSA9PSBudWxsO1xuICB9XG5cbiAgcHVibGljIHJlbGVhc2VBbGxQcm9jZXNzb3IoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNDbG9zZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9wcm9jZXNzb3JzLmdldFNpemUoKTsgaW5kZXgrKykge1xuICAgICAgdGhpcy5fcHJvY2Vzc29ycy5hdChpbmRleCkuQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoaXNGb3JjZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQ2xvc2VkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoMCA8IHRoaXMuX3Byb2Nlc3NvcnMuZ2V0U2l6ZSgpKSB7XG4gICAgICBpZiAoaXNGb3JjZSkge1xuICAgICAgICB0aGlzLnJlbGVhc2VBbGxQcm9jZXNzb3IoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmdldEVuZ2luZUhhbmRsZSgpLmRpc3Bvc2VFbmdpbmUoKTtcbiAgICB0aGlzLl9lbmdpbmVIYW5kbGUgPSB2b2lkIDA7XG4gICAgdGhpcy5fZW5naW5lSGFuZGxlID0gbnVsbDtcbiAgICBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQ29udHJvbGxlci5kZWxldGVBc3NvY2lhdGlvbih0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBEZWxldGVBc3NvY2lhdGlvbihwcm9jZXNzb3I6IElDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3Byb2Nlc3NvcnMuZ2V0U2l6ZSgpOyBpbmRleCsrKSB7XG4gICAgICBpZiAodGhpcy5fcHJvY2Vzc29ycy5hdChpbmRleCkgPT0gcHJvY2Vzc29yKSB7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NvcnMuYXQoaW5kZXgpLkNsb3NlKCk7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NvcnMucmVtb3ZlKGluZGV4KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9wcm9jZXNzb3JzOiBjc21WZWN0b3I8SUN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3I+O1xuICBwcml2YXRlIF9lbmdpbmVIYW5kbGU6IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVMaWI7XG4gIHByaXZhdGUgX3R5cGU6IEVuZ2luZVR5cGU7XG4gIHByaXZhdGUgX25hbWU6IGNzbVN0cmluZztcbiAgcHJpdmF0ZSBfdmVyc2lvbjogQ3ViaXNtTW90aW9uU3luY0VuZ2luZVZlcnNpb247XG59XG5cbi8vIE5hbWVzcGFjZSBkZWZpbml0aW9uIGZvciBjb21wYXRpYmlsaXR5LlxuaW1wb3J0ICogYXMgJCBmcm9tICcuL2ljdWJpc21tb3Rpb25zeW5jZW5naW5lJztcbmltcG9ydCB7IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVDb250cm9sbGVyIH0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jZW5naW5lY29udHJvbGxlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21Nb3Rpb25TeW5jRnJhbWV3b3JrIHtcbiAgZXhwb3J0IGNvbnN0IElDdWJpc21Nb3Rpb25TeW5jRW5naW5lID0gJC5JQ3ViaXNtTW90aW9uU3luY0VuZ2luZTtcbiAgZXhwb3J0IHR5cGUgSUN1YmlzbU1vdGlvblN5bmNFbmdpbmUgPSAkLklDdWJpc21Nb3Rpb25TeW5jRW5naW5lO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgY3NtVmVjdG9yIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXZlY3Rvcic7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQW5hbHlzaXNSZXN1bHQgfSBmcm9tICcuL2N1YmlzbW1vdGlvbnN5bmNlbmdpbmVhbmFseXNpc3Jlc3VsdCc7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lTWFwcGluZ0luZm8gfSBmcm9tICcuL2N1YmlzbW1vdGlvbnN5bmNlbmdpbmVtYXBwaW5naW5mbyc7XG5pbXBvcnQgeyBFbmdpbmVUeXBlLCBNb3Rpb25TeW5jQ29udGV4dCB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY3V0aWwnO1xuaW1wb3J0IHsgSUN1YmlzbU1vdGlvblN5bmNFbmdpbmUgfSBmcm9tICcuL2ljdWJpc21tb3Rpb25zeW5jZW5naW5lJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yIHtcbiAgLyoqXG4gICAqIGNyZWF0ZUFuYWx5c2lzUmVzdWx0XG4gICAqL1xuICBwdWJsaWMgY3JlYXRlQW5hbHlzaXNSZXN1bHQoKTogQ3ViaXNtTW90aW9uU3luY0VuZ2luZUFuYWx5c2lzUmVzdWx0IHtcbiAgICBpZiAodGhpcy5pc0Nsb3NlZCgpIHx8IHRoaXMuX21hcHBpbmdJbmZvQXJyYXkuZ2V0U2l6ZSgpIDwgMSkge1xuICAgICAgcmV0dXJuIG5ldyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQW5hbHlzaXNSZXN1bHQoMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQW5hbHlzaXNSZXN1bHQoXG4gICAgICB0aGlzLl9tYXBwaW5nSW5mb0FycmF5LmF0KDApLmdldE1vZGVsUGFyYW1ldGVyVmFsdWVzKCkuZ2V0U2l6ZSgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpc0Nsb3NlZFxuICAgKi9cbiAgcHVibGljIGlzQ2xvc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0SGFuZGxlID09IG51bGw7XG4gIH1cblxuICBwdWJsaWMgQ2xvc2UoKTogdm9pZCB7XG4gICAgLy8g6Kej5pS+5riI44G/44Gq44KJ5L2V44KC44GX44Gq44GE44CCXG4gICAgaWYgKHRoaXMuaXNDbG9zZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jb250ZXh0SGFuZGxlLnJlbGVhc2UoKTtcbiAgICB0aGlzLl9jb250ZXh0SGFuZGxlID0gdm9pZCAwO1xuICAgIHRoaXMuX2NvbnRleHRIYW5kbGUgPSBudWxsO1xuICAgIHRoaXMuX2VuZ2luZS5EZWxldGVBc3NvY2lhdGlvbih0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb250ZXh0SGFuZGxlKCk6IE1vdGlvblN5bmNDb250ZXh0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dEhhbmRsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFbmdpbmUoKTogSUN1YmlzbU1vdGlvblN5bmNFbmdpbmUge1xuICAgIHJldHVybiB0aGlzLl9lbmdpbmU7XG4gIH1cblxuICBwdWJsaWMgZ2V0VHlwZSgpOiBFbmdpbmVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZW5naW5lLmdldFR5cGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZXF1aXJlU2FtcGxlQ291bnQoKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuZ2V0RW5naW5lKCk/LmdldEVuZ2luZUhhbmRsZSgpIHx8XG4gICAgICAhdGhpcy5nZXRDb250ZXh0SGFuZGxlKCk/LmdldENvbnRleHQoKVxuICAgICkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEVuZ2luZSgpXG4gICAgICAuZ2V0RW5naW5lSGFuZGxlKClcbiAgICAgIC5nZXRSZXF1aXJlU2FtcGxlQ291bnQodGhpcy5nZXRDb250ZXh0SGFuZGxlKCkuZ2V0Q29udGV4dCgpKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBlbmdpbmU6IElDdWJpc21Nb3Rpb25TeW5jRW5naW5lLFxuICAgIGNvbnRleHRIYW5kbGU6IE1vdGlvblN5bmNDb250ZXh0LFxuICAgIG1hcHBpbmdMaXN0OiBjc21WZWN0b3I8Q3ViaXNtTW90aW9uU3luY0VuZ2luZU1hcHBpbmdJbmZvPlxuICApIHtcbiAgICB0aGlzLl9lbmdpbmUgPSBlbmdpbmU7XG4gICAgdGhpcy5fY29udGV4dEhhbmRsZSA9IGNvbnRleHRIYW5kbGU7XG4gICAgdGhpcy5fbWFwcGluZ0luZm9BcnJheSA9IG1hcHBpbmdMaXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfZW5naW5lOiBJQ3ViaXNtTW90aW9uU3luY0VuZ2luZTtcbiAgcHJpdmF0ZSBfY29udGV4dEhhbmRsZTogTW90aW9uU3luY0NvbnRleHQ7XG4gIHByaXZhdGUgX21hcHBpbmdJbmZvQXJyYXk6IGNzbVZlY3RvcjxDdWJpc21Nb3Rpb25TeW5jRW5naW5lTWFwcGluZ0luZm8+O1xufVxuXG4vLyBOYW1lc3BhY2UgZGVmaW5pdGlvbiBmb3IgY29tcGF0aWJpbGl0eS5cbmltcG9ydCAqIGFzICQgZnJvbSAnLi9pY3ViaXNtbW90aW9uc3luY3Byb2Nlc3Nvcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21Nb3Rpb25TeW5jRnJhbWV3b3JrIHtcbiAgZXhwb3J0IGNvbnN0IElDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yID0gJC5JQ3ViaXNtTW90aW9uU3luY1Byb2Nlc3NvcjtcbiAgZXhwb3J0IHR5cGUgSUN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3IgPSAkLklDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tICdAZnJhbWV3b3JrL2xpdmUyZGN1YmlzbWZyYW1ld29yayc7XG5pbXBvcnQgeyBDdWJpc21Nb2RlbCB9IGZyb20gJ0BmcmFtZXdvcmsvbW9kZWwvY3ViaXNtbW9kZWwnO1xuaW1wb3J0IHsgY3NtVmVjdG9yIH0gZnJvbSAnQGZyYW1ld29yay90eXBlL2NzbXZlY3Rvcic7XG5pbXBvcnQge1xuICBDU01fQVNTRVJULFxuICBDdWJpc21Mb2dJbmZvLFxuICBDdWJpc21Mb2dXYXJuaW5nXG59IGZyb20gJ0BmcmFtZXdvcmsvdXRpbHMvY3ViaXNtZGVidWcnO1xuaW1wb3J0IHtcbiAgQ3ViaXNtTW90aW9uU3luY0RhdGEsXG4gIEN1YmlzbU1vdGlvblN5bmNEYXRhU2V0dGluZ1xufSBmcm9tICcuL2N1YmlzbW1vdGlvbnN5bmNkYXRhJztcbmltcG9ydCB7IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVBbmFseXNpc1Jlc3VsdCB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY2VuZ2luZWFuYWx5c2lzcmVzdWx0JztcbmltcG9ydCB7IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVDb250cm9sbGVyIH0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jZW5naW5lY29udHJvbGxlcic7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQ3JpIH0gZnJvbSAnLi9jdWJpc21tb3Rpb25zeW5jZW5naW5lY3JpJztcbmltcG9ydCB7IEN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3JDUkkgfSBmcm9tICcuL2N1YmlzbW1vdGlvbnN5bmNwcm9jZXNzb3JjcmknO1xuaW1wb3J0IHsgRW5naW5lVHlwZSB9IGZyb20gJy4vY3ViaXNtbW90aW9uc3luY3V0aWwnO1xuaW1wb3J0IHsgSUN1YmlzbU1vdGlvblN5bmNFbmdpbmUgfSBmcm9tICcuL2ljdWJpc21tb3Rpb25zeW5jZW5naW5lJztcbmltcG9ydCB7IElDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yIH0gZnJvbSAnLi9pY3ViaXNtbW90aW9uc3luY3Byb2Nlc3Nvcic7XG5cbi8vIOODleOCoeOCpOODq+OCueOCs+ODvOODl+OBruWkieaVsOOCkuWIneacn+WMllxuXG5sZXQgc19pc1N0YXJ0ZWQgPSBmYWxzZTtcbmxldCBzX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmxldCBzX29wdGlvbjogTW90aW9uU3luY09wdGlvbiA9IG51bGw7XG5sZXQgc19lbmdpbmVDb25maWdDcmlEYXRhOiBNb3Rpb25TeW5jRW5naW5lQ29uZmlnQ3JpRGF0YSA9IG51bGw7XG5jb25zdCBzX2VuZ2luZUNvbmZpZ1N0cnVjdFNpemUgPSAyO1xuXG5leHBvcnQgY2xhc3MgQ3ViaXNtTW90aW9uU3luYyB7XG4gIC8qKlxuICAgKiBDdWJpc20gTW90aW9uU3luYyBGcmFtZXdvcmvjga5BUEnjgpLkvb/nlKjlj6/og73jgavjgZnjgovjgIJcbiAgICogIEFQSeOCkuWun+ihjOOBmeOCi+WJjeOBq+W/heOBmuOBk+OBrumWouaVsOOCkuWun+ihjOOBmeOCi+OBk+OBqOOAglxuICAgKiAg5LiA5bqm5rqW5YKZ44GM5a6M5LqG44GX44Gm5Lul6ZmN44Gv44CB5YaN44Gz5a6f6KGM44GX44Gm44KC5YaF6YOo5Yem55CG44GM44K544Kt44OD44OX44GV44KM44G+44GZ44CCXG4gICAqXG4gICAqIEBwYXJhbSAgICBvcHRpb24gICAgICBNb3Rpb25TeW5jTG9nT3B0aW9u44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAqXG4gICAqIEByZXR1cm4gICDmupblgpnlh6bnkIbjgYzlrozkuobjgZfjgZ/jgol0cnVl44GM6L+U44KK44G+44GZ44CCXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN0YXJ0VXAob3B0aW9uOiBNb3Rpb25TeW5jT3B0aW9uID0gbnVsbCk6IGJvb2xlYW4ge1xuICAgIGlmIChzX2lzU3RhcnRlZCkge1xuICAgICAgQ3ViaXNtTG9nSW5mbygnQ3ViaXNtTW90aW9uU3luY0ZyYW1ld29yay5zdGFydFVwKCkgaXMgYWxyZWFkeSBkb25lLicpO1xuICAgICAgcmV0dXJuIHNfaXNTdGFydGVkO1xuICAgIH1cblxuICAgIHNfb3B0aW9uID0gb3B0aW9uO1xuXG4gICAgaWYgKHNfb3B0aW9uICE9IG51bGwpIHtcbiAgICAgIExpdmUyREN1YmlzbU1vdGlvblN5bmNDb3JlLkxvZ2dpbmcuY3NtTW90aW9uU3luY1NldExvZ0Z1bmN0aW9uKFxuICAgICAgICBzX29wdGlvbi5sb2dGdW5jdGlvblxuICAgICAgKTtcbiAgICB9XG5cbiAgICBzX2lzU3RhcnRlZCA9IHRydWU7XG5cbiAgICBDdWJpc21Mb2dJbmZvKCdDdWJpc21Nb3Rpb25TeW5jRnJhbWV3b3JrLnN0YXJ0VXAoKSBpcyBjb21wbGV0ZS4nKTtcblxuICAgIHJldHVybiBzX2lzU3RhcnRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydFVwKCnjgafliJ3mnJ/ljJbjgZfjgZ9DdWJpc20gTW90aW9uU3luYyBGcmFtZXdvcmvjga7lkITjg5Hjg6njg6Hjg7zjgr/jgpLjgq/jg6rjgqLjgZfjgb7jgZnjgIJcbiAgICogRGlzcG9zZSgp44GX44GfQ3ViaXNtIE1vdGlvblN5bmMgRnJhbWV3b3Jr44KS5YaN5Yip55So44GZ44KL6Zqb44Gr5Yip55So44GX44Gm44GP44Gg44GV44GE44CCXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNsZWFuVXAoKTogdm9pZCB7XG4gICAgc19pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICBzX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBzX29wdGlvbiA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3ViaXNtIE1vdGlvblN5bmMgRnJhbWV3b3Jr5YaF44Gu44Oq44K944O844K544KS5Yid5pyf5YyW44GX44Gm44Oi44OH44Or44KS6KGo56S65Y+v6IO944Gq54q25oWL44Gr44GX44G+44GZ44CCXG4gICAqICAgICDlho3luqZJbml0aWFsaXplKCnjgZnjgovjgavjga/lhYjjgatEaXNwb3NlKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICBDU01fQVNTRVJUKHNfaXNTdGFydGVkKTtcbiAgICBpZiAoIXNfaXNTdGFydGVkKSB7XG4gICAgICBDdWJpc21Mb2dXYXJuaW5nKCdDdWJpc21Nb3Rpb25TeW5jRnJhbWV3b3JrIGlzIG5vdCBzdGFydGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIC0tLSBzX2lzSW5pdGlhbGl6ZWTjgavjgojjgovpgKPntprliJ3mnJ/ljJbjgqzjg7zjg4kgLS0tXG4gICAgLy8g6YCj57aa44GX44Gm44Oq44K944O844K556K65L+d44GM6KGM44KP44KM44Gq44GE44KI44GG44Gr44GZ44KL44CCXG4gICAgLy8g5YaN5bqmSW5pdGlhbGl6ZSgp44GZ44KL44Gr44Gv5YWI44GrRGlzcG9zZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KL44CCXG4gICAgaWYgKHNfaXNJbml0aWFsaXplZCkge1xuICAgICAgQ3ViaXNtTG9nV2FybmluZyhcbiAgICAgICAgJ0N1YmlzbU1vdGlvblN5bmNGcmFtZXdvcmsuaW5pdGlhbGl6ZSgpIHNraXBwZWQsIGFscmVhZHkgaW5pdGlhbGl6ZWQuJ1xuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgQ3ViaXNtTG9nSW5mbygnQ3ViaXNtTW90aW9uU3luY0ZyYW1ld29yay5pbml0aWFsaXplKCkgaXMgY29tcGxldGUuJyk7XG4gIH1cblxuICAvKipcbiAgICogQ3ViaXNtIE1vdGlvblN5bmMgRnJhbWV3b3Jr5YaF44Gu5YWo44Gm44Gu44Oq44K944O844K544KS6Kej5pS+44GX44G+44GZ44CCXG4gICAqICAgICAg44Gf44Gg44GX44CB5aSW6YOo44Gn56K65L+d44GV44KM44Gf44Oq44K944O844K544Gr44Gk44GE44Gm44Gv6Kej5pS+44GX44G+44Gb44KT44CCXG4gICAqICAgICAg5aSW6YOo44Gn6YGp5YiH44Gr56C05qOE44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgQ1NNX0FTU0VSVChzX2lzU3RhcnRlZCk7XG4gICAgaWYgKCFzX2lzU3RhcnRlZCkge1xuICAgICAgQ3ViaXNtTG9nV2FybmluZygnQ3ViaXNtTW90aW9uU3luY0ZyYW1ld29yayBpcyBub3Qgc3RhcnRlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyAtLS0gc19pc0luaXRpYWxpemVk44Gr44KI44KL5pyq5Yid5pyf5YyW6Kej5pS+44Ks44O844OJIC0tLVxuICAgIC8vIGRpc3Bvc2UoKeOBmeOCi+OBq+OBr+WFiOOBq2luaXRpYWxpemUoKeOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCi+OAglxuICAgIGlmICghc19pc0luaXRpYWxpemVkKSB7XG4gICAgICAvLyBmYWxzZS4uLuODquOCveODvOOCueacqueiuuS/neOBruWgtOWQiFxuICAgICAgQ3ViaXNtTG9nV2FybmluZyhcbiAgICAgICAgJ0N1YmlzbU1vdGlvblN5bmNGcmFtZXdvcmsuZGlzcG9zZSgpIHNraXBwZWQsIG5vdCBpbml0aWFsaXplZC4nXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gICAgQ3ViaXNtTG9nSW5mbygnQ3ViaXNtTW90aW9uU3luY0ZyYW1ld29yay5kaXNwb3NlKCkgaXMgY29tcGxldGUuJyk7XG4gIH1cblxuICAvKipcbiAgICogQ3ViaXNtIE1vdGlvblN5bmMgRnJhbWV3b3Jr44GuQVBJ44KS5L2/55So44GZ44KL5rqW5YKZ44GM5a6M5LqG44GX44Gf44GL44Gp44GG44GLXG4gICAqIEByZXR1cm4gQVBJ44KS5L2/55So44GZ44KL5rqW5YKZ44GM5a6M5LqG44GX44Gm44GE44KM44GwdHJ1ZeOBjOi/lOOCiuOBvuOBmeOAglxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1N0YXJ0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHNfaXNTdGFydGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1YmlzbSBNb3Rpb25TeW5jIEZyYW1ld29ya+OBruODquOCveODvOOCueWIneacn+WMluOBjOOBmeOBp+OBq+ihjOOCj+OCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi1xuICAgKiBAcmV0dXJuIOODquOCveODvOOCueeiuuS/neOBjOWujOS6huOBl+OBpuOBhOOCjOOBsHRydWXjgYzov5Tjgorjgb7jgZlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNJbml0aWFsaXplZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gc19pc0luaXRpYWxpemVkO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjcmVhdGUoXG4gICAgbW9kZWw6IEN1YmlzbU1vZGVsLFxuICAgIGJ1ZmZlcjogQXJyYXlCdWZmZXIsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHNhbXBsZVBlclNlYzogbnVtYmVyXG4gICk6IEN1YmlzbU1vdGlvblN5bmMge1xuICAgIGlmICghQ3ViaXNtTW90aW9uU3luYy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhOiBDdWJpc21Nb3Rpb25TeW5jRGF0YSA9IEN1YmlzbU1vdGlvblN5bmNEYXRhLmNyZWF0ZShcbiAgICAgIG1vZGVsLFxuICAgICAgYnVmZmVyLFxuICAgICAgc2l6ZVxuICAgICk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2Nlc3Nvckxpc3Q6IGNzbVZlY3RvcjxJQ3ViaXNtTW90aW9uU3luY1Byb2Nlc3Nvcj4gPVxuICAgICAgbmV3IGNzbVZlY3RvcjxJQ3ViaXNtTW90aW9uU3luY1Byb2Nlc3Nvcj4oKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmdldFNldHRpbmdDb3VudCgpOyBpbmRleCsrKSB7XG4gICAgICBsZXQgcHJvY2Vzc29yOiBJQ3ViaXNtTW90aW9uU3luY1Byb2Nlc3NvciA9IG51bGw7XG4gICAgICBjb25zdCBlbmdpbmVUeXBlOiBFbmdpbmVUeXBlID0gZGF0YS5nZXRTZXR0aW5nKGluZGV4KS5hbmFseXNpc1R5cGU7XG4gICAgICBzd2l0Y2ggKGVuZ2luZVR5cGUpIHtcbiAgICAgICAgY2FzZSBFbmdpbmVUeXBlLkVuZ2luZVR5cGVfQ3JpOlxuICAgICAgICAgIHByb2Nlc3NvciA9IHRoaXMuSW5pdGlhbGl6ZUVuZ2luZUNyaShcbiAgICAgICAgICAgIGVuZ2luZVR5cGUsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBzYW1wbGVQZXJTZWNcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXG4gICAgICAgICAgICAnW0N1YmlzbU1vdGlvblN5bmMuQ3JlYXRlXSBJbmRleHswfTogQ2FuIG5vdCBjcmVhdGUgcHJvY2Vzc29yIGJlY2F1c2UgYEFuYWx5c2lzVHlwZWAgaXMgdW5rbm93bi4nLFxuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzc29yICE9IG51bGwpIHtcbiAgICAgICAgcHJvY2Vzc29yTGlzdC5wdXNoQmFjayhwcm9jZXNzb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgQ3ViaXNtTW90aW9uU3luYyhtb2RlbCwgZGF0YSwgcHJvY2Vzc29yTGlzdCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBJbml0aWFsaXplRW5naW5lQ3JpKFxuICAgIGVuZ2luZVR5cGU6IEVuZ2luZVR5cGUsXG4gICAgZGF0YTogQ3ViaXNtTW90aW9uU3luY0RhdGEsXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBzYW1wbGVQZXJTZWM6IG51bWJlclxuICApOiBDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yQ1JJIHtcbiAgICBsZXQgZW5naW5lOiBJQ3ViaXNtTW90aW9uU3luY0VuZ2luZSA9XG4gICAgICBDdWJpc21Nb3Rpb25TeW5jRW5naW5lQ29udHJvbGxlci5nZXRFbmdpbmUoZW5naW5lVHlwZSk7XG5cbiAgICBpZiAoc19vcHRpb24uZW5naW5lQ29uZmlnICE9IG51bGwpIHtcbiAgICAgIHNfZW5naW5lQ29uZmlnQ3JpRGF0YSA9IG5ldyBNb3Rpb25TeW5jRW5naW5lQ29uZmlnQ3JpRGF0YSgpO1xuICAgICAgc19lbmdpbmVDb25maWdDcmlEYXRhLmVuZ2luZUNvbmZpZ0J1ZmZlciA9IG5ldyBJbnQzMkFycmF5KFxuICAgICAgICBzX2VuZ2luZUNvbmZpZ1N0cnVjdFNpemVcbiAgICAgICk7XG4gICAgICBzX2VuZ2luZUNvbmZpZ0NyaURhdGEuZW5naW5lQ29uZmlnUHRyID1cbiAgICAgICAgTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0NvcmUuVG9Qb2ludGVyLk1hbGxvYyhcbiAgICAgICAgICBzX2VuZ2luZUNvbmZpZ0NyaURhdGEuZW5naW5lQ29uZmlnQnVmZmVyLmxlbmd0aCAqXG4gICAgICAgICAgICBzX2VuZ2luZUNvbmZpZ0NyaURhdGEuZW5naW5lQ29uZmlnQnVmZmVyLkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgICAgICk7XG4gICAgICBMaXZlMkRDdWJpc21Nb3Rpb25TeW5jQ29yZS5Ub1BvaW50ZXIuQ29udmVydEVuZ2luZUNvbmZpZ0NyaVRvSW50MzJBcnJheShcbiAgICAgICAgc19lbmdpbmVDb25maWdDcmlEYXRhLmVuZ2luZUNvbmZpZ0J1ZmZlcixcbiAgICAgICAgc19lbmdpbmVDb25maWdDcmlEYXRhLmVuZ2luZUNvbmZpZ1B0cixcbiAgICAgICAgc19vcHRpb24uZW5naW5lQ29uZmlnLkFsbG9jYXRvcixcbiAgICAgICAgc19vcHRpb24uZW5naW5lQ29uZmlnLkRlYWxsb2NhdG9yXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZ1B0cjogbnVtYmVyID1cbiAgICAgIHNfZW5naW5lQ29uZmlnQ3JpRGF0YSAhPSBudWxsID8gc19lbmdpbmVDb25maWdDcmlEYXRhLmVuZ2luZUNvbmZpZ1B0ciA6IDA7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIGVuZ2luZSA9IEN1YmlzbU1vdGlvblN5bmNFbmdpbmVDb250cm9sbGVyLmluaXRpYWxpemVFbmdpbmUoY29uZmlnUHRyKTtcbiAgICB9XG5cbiAgICBsZXQgcHJvY2Vzc29yOiBDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yQ1JJID0gbnVsbDtcbiAgICBpZiAoZW5naW5lKSB7XG4gICAgICBwcm9jZXNzb3IgPSAoZW5naW5lIGFzIEN1YmlzbU1vdGlvblN5bmNFbmdpbmVDcmkpLkNyZWF0ZVByb2Nlc3NvcihcbiAgICAgICAgZGF0YS5nZXRTZXR0aW5nKGluZGV4KS5jdWJpc21QYXJhbWV0ZXJMaXN0LmdldFNpemUoKSxcbiAgICAgICAgZGF0YS5nZXRNYXBwaW5nSW5mb0xpc3QoaW5kZXgpLFxuICAgICAgICBzYW1wbGVQZXJTZWNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NvcjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVsZXRlKGluc3RhbmNlOiBDdWJpc21Nb3Rpb25TeW5jKTogdm9pZCB7XG4gICAgaWYgKCFDdWJpc21Nb3Rpb25TeW5jLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnN0YW5jZSA9IHZvaWQgMDtcbiAgICBpbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgc2V0U291bmRCdWZmZXIocHJvY2Vzc0luZGV4OiBudW1iZXIsIGJ1ZmZlcjogY3NtVmVjdG9yPG51bWJlcj4pIHtcbiAgICBpZiAoIUN1YmlzbU1vdGlvblN5bmMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwcm9jZXNzSW5kZXggPCB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5nZXRTaXplKCkpIHtcbiAgICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0LmF0KHByb2Nlc3NJbmRleCkuX3NhbXBsZUJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0LmF0KHByb2Nlc3NJbmRleCkuX3NhbXBsZUJ1ZmZlckluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkIHtcbiAgICBpZiAoIUN1YmlzbU1vdGlvblN5bmMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIEN1YmlzbU1vdGlvblN5bmNEYXRhLmRlbGV0ZSh0aGlzLl9kYXRhKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fcHJvY2Vzc29ySW5mb0xpc3QuZ2V0U2l6ZSgpOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChpbmRleCkuX3Byb2Nlc3Nvcj8uQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlUGFyYW1ldGVycyhtb2RlbDogQ3ViaXNtTW9kZWwsIGRlbHRhVGltZVNlY29uZHM6IG51bWJlcikge1xuICAgIGlmICghQ3ViaXNtTW90aW9uU3luYy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8g6Kit5a6a44GL44KJ5pmC6ZaT44KS5aSJ5pu044GZ44KL44Go44CB57WM6YGO5pmC6ZaT44GM44Oe44Kk44OK44K544Gr44Gq44KL44GT44Go44GM44GC44KL44Gu44Gn44CB57WM6YGO5pmC6ZaTMOOBqOOBl+OBpuWvvuW/nOOAglxuICAgIGlmIChkZWx0YVRpbWVTZWNvbmRzIDwgMC4wKSB7XG4gICAgICBkZWx0YVRpbWVTZWNvbmRzID0gMC4wO1xuICAgIH1cblxuICAgIGZvciAoXG4gICAgICBsZXQgcHJvY2Vzc0luZGV4ID0gMDtcbiAgICAgIHByb2Nlc3NJbmRleCA8IHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0LmdldFNpemUoKTtcbiAgICAgIHByb2Nlc3NJbmRleCsrXG4gICAgKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9jdXJyZW50UmVtYWluVGltZSArPVxuICAgICAgICBkZWx0YVRpbWVTZWNvbmRzO1xuXG4gICAgICAvLyBDaGVjayBlYWNoIHRpbWUgYXNzdW1pbmcgaXQgbWF5IGhhdmUgYmVlbiB1cGRhdGVkLlxuICAgICAgY29uc3QgZnBzOiBudW1iZXIgPSB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9zYW1wbGVSYXRlO1xuICAgICAgY29uc3QgcHJvY2Vzc29yRGVsdGFUaW1lOiBudW1iZXIgPSAxLjAgLyBmcHM7XG5cbiAgICAgIC8vIElmIHRoZSBzcGVjaWZpZWQgZnJhbWUgdGltZSBpcyBub3QgcmVhY2hlZCwgbm8gYW5hbHlzaXMgaXMgcGVyZm9ybWVkLlxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9jdXJyZW50UmVtYWluVGltZSA8XG4gICAgICAgIHByb2Nlc3NvckRlbHRhVGltZVxuICAgICAgKSB7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IHRhcmdldEluZGV4ID0gMDtcbiAgICAgICAgICB0YXJnZXRJbmRleCA8XG4gICAgICAgICAgdGhpcy5fZGF0YS5nZXRTZXR0aW5nKHByb2Nlc3NJbmRleCkuY3ViaXNtUGFyYW1ldGVyTGlzdC5nZXRTaXplKCk7XG4gICAgICAgICAgdGFyZ2V0SW5kZXgrK1xuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBpc05hTihcbiAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc29ySW5mb0xpc3RcbiAgICAgICAgICAgICAgICAuYXQocHJvY2Vzc0luZGV4KVxuICAgICAgICAgICAgICAgIC5fYW5hbHlzaXNSZXN1bHQuZ2V0VmFsdWVzKClbdGFyZ2V0SW5kZXhdXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBPdmVyd3JpdGUgcGFyYW1ldGVyIHZhbHVlcyBldmVyeSBmcmFtZSB0byBwcmV2ZW50IGRhdGEgZnJvbSByZXBsYWNpbmcgaXRzZWxmXG4gICAgICAgICAgbW9kZWwuc2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KFxuICAgICAgICAgICAgdGhpcy5fZGF0YVxuICAgICAgICAgICAgICAuZ2V0U2V0dGluZyhwcm9jZXNzSW5kZXgpXG4gICAgICAgICAgICAgIC5jdWJpc21QYXJhbWV0ZXJMaXN0LmF0KHRhcmdldEluZGV4KS5wYXJhbWV0ZXJJbmRleCxcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0XG4gICAgICAgICAgICAgIC5hdChwcm9jZXNzSW5kZXgpXG4gICAgICAgICAgICAgIC5fbGFzdERhbXBlZExpc3QuYXQodGFyZ2V0SW5kZXgpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmFseXplKG1vZGVsLCBwcm9jZXNzSW5kZXgpO1xuXG4gICAgICAvLyBSZXNldCBjb3VudGVyLlxuICAgICAgdGhpcy5fcHJvY2Vzc29ySW5mb0xpc3QuYXQocHJvY2Vzc0luZGV4KS5fY3VycmVudFJlbWFpblRpbWUgPVxuICAgICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9jdXJyZW50UmVtYWluVGltZSAlXG4gICAgICAgIHByb2Nlc3NvckRlbHRhVGltZTtcblxuICAgICAgZm9yIChcbiAgICAgICAgbGV0IHRhcmdldEluZGV4ID0gMDtcbiAgICAgICAgdGFyZ2V0SW5kZXggPFxuICAgICAgICB0aGlzLl9kYXRhLmdldFNldHRpbmcocHJvY2Vzc0luZGV4KS5jdWJpc21QYXJhbWV0ZXJMaXN0LmdldFNpemUoKTtcbiAgICAgICAgdGFyZ2V0SW5kZXgrK1xuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc05hTihcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0XG4gICAgICAgICAgICAgIC5hdChwcm9jZXNzSW5kZXgpXG4gICAgICAgICAgICAgIC5fYW5hbHlzaXNSZXN1bHQuZ2V0VmFsdWVzKClbdGFyZ2V0SW5kZXhdXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdmVyd3JpdGUgcGFyYW1ldGVyIHZhbHVlcyBldmVyeSBmcmFtZSB0byBwcmV2ZW50IGRhdGEgZnJvbSByZXBsYWNpbmcgaXRzZWxmXG4gICAgICAgIG1vZGVsLnNldFBhcmFtZXRlclZhbHVlQnlJbmRleChcbiAgICAgICAgICB0aGlzLl9kYXRhXG4gICAgICAgICAgICAuZ2V0U2V0dGluZyhwcm9jZXNzSW5kZXgpXG4gICAgICAgICAgICAuY3ViaXNtUGFyYW1ldGVyTGlzdC5hdCh0YXJnZXRJbmRleCkucGFyYW1ldGVySW5kZXgsXG4gICAgICAgICAgdGhpcy5fcHJvY2Vzc29ySW5mb0xpc3RcbiAgICAgICAgICAgIC5hdChwcm9jZXNzSW5kZXgpXG4gICAgICAgICAgICAuX2xhc3REYW1wZWRMaXN0LmF0KHRhcmdldEluZGV4KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYW5hbHl6ZShtb2RlbDogQ3ViaXNtTW9kZWwsIHByb2Nlc3NJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCFDdWJpc21Nb3Rpb25TeW5jLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcm9jZXNzb3I6IElDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yID1cbiAgICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0LmF0KHByb2Nlc3NJbmRleCkuX3Byb2Nlc3NvcjtcbiAgICBjb25zdCBzYW1wbGVzOiBjc21WZWN0b3I8bnVtYmVyPiA9XG4gICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9zYW1wbGVCdWZmZXI7XG4gICAgbGV0IGJlZ2luSW5kZXg6IG51bWJlciA9XG4gICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9zYW1wbGVCdWZmZXJJbmRleDtcblxuICAgIGlmIChcbiAgICAgIHByb2Nlc3NvciA9PSBudWxsIHx8XG4gICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9zYW1wbGVCdWZmZXIgPT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBhbmFseXNpc1Jlc3VsdDogQ3ViaXNtTW90aW9uU3luY0VuZ2luZUFuYWx5c2lzUmVzdWx0ID0gbnVsbDtcblxuICAgIGNvbnN0IGJsZW5kUmF0aW86IG51bWJlciA9XG4gICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9ibGVuZFJhdGlvO1xuICAgIGNvbnN0IHNtb290aGluZzogbnVtYmVyID1cbiAgICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0LmF0KHByb2Nlc3NJbmRleCkuX3Ntb290aGluZztcbiAgICBjb25zdCBhdWRpb0xldmVsRWZmZWN0UmF0aW86IG51bWJlciA9XG4gICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9hdWRpb0xldmVsRWZmZWN0UmF0aW87XG5cbiAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9sYXN0VG90YWxQcm9jZXNzZWRDb3VudCA9IDA7XG5cbiAgICBkbyB7XG4gICAgICBjb25zdCBzYW1wbGVzU2l6ZSA9IHNhbXBsZXMuZ2V0U2l6ZSgpO1xuICAgICAgaWYgKFxuICAgICAgICBzYW1wbGVzU2l6ZSA9PSAwIHx8XG4gICAgICAgIHNhbXBsZXNTaXplIDw9IGJlZ2luSW5kZXggfHxcbiAgICAgICAgc2FtcGxlc1NpemUgLSBiZWdpbkluZGV4IDwgcHJvY2Vzc29yLmdldFJlcXVpcmVTYW1wbGVDb3VudCgpXG4gICAgICApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAocHJvY2Vzc29yLmdldFR5cGUoKSkge1xuICAgICAgICBjYXNlIEVuZ2luZVR5cGUuRW5naW5lVHlwZV9Dcmk6XG4gICAgICAgICAgYW5hbHlzaXNSZXN1bHQgPSAocHJvY2Vzc29yIGFzIEN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3JDUkkpLkFuYWx5emUoXG4gICAgICAgICAgICBzYW1wbGVzLFxuICAgICAgICAgICAgYmVnaW5JbmRleCxcbiAgICAgICAgICAgIGJsZW5kUmF0aW8sXG4gICAgICAgICAgICBzbW9vdGhpbmcsXG4gICAgICAgICAgICBhdWRpb0xldmVsRWZmZWN0UmF0aW8sXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9hbmFseXNpc1Jlc3VsdFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghYW5hbHlzaXNSZXN1bHQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb2Nlc3NlZENvdW50ID0gYW5hbHlzaXNSZXN1bHQuZ2V0UHJvY2Vzc2VkU2FtcGxlQ291bnQoKTtcbiAgICAgIGJlZ2luSW5kZXggKz0gcHJvY2Vzc2VkQ291bnQ7XG5cbiAgICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0LmF0KHByb2Nlc3NJbmRleCkuX2xhc3RUb3RhbFByb2Nlc3NlZENvdW50ICs9XG4gICAgICAgIHByb2Nlc3NlZENvdW50O1xuXG4gICAgICAvLyDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/jg6njgqTjg5bjg6njg6rjgafoqIjnrpfjgZfjgZ/lhoXlrrnjgpLjg6Ljg4fjg6vjgavlj43mmKBcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCB0YXJnZXRJbmRleCA9IDA7XG4gICAgICAgIHRhcmdldEluZGV4IDxcbiAgICAgICAgdGhpcy5fZGF0YS5nZXRTZXR0aW5nKHByb2Nlc3NJbmRleCkuY3ViaXNtUGFyYW1ldGVyTGlzdC5nZXRTaXplKCk7XG4gICAgICAgIHRhcmdldEluZGV4KytcbiAgICAgICkge1xuICAgICAgICBsZXQgY2FjaGVWYWx1ZTogbnVtYmVyID0gYW5hbHlzaXNSZXN1bHQuZ2V0VmFsdWVzKClbdGFyZ2V0SW5kZXhdO1xuXG4gICAgICAgIGlmIChpc05hTihjYWNoZVZhbHVlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc21vb3RoOiBudW1iZXIgPSB0aGlzLl9kYXRhXG4gICAgICAgICAgLmdldFNldHRpbmcocHJvY2Vzc0luZGV4KVxuICAgICAgICAgIC5jdWJpc21QYXJhbWV0ZXJMaXN0LmF0KHRhcmdldEluZGV4KS5zbW9vdGg7XG4gICAgICAgIGNvbnN0IGRhbXBlcjogbnVtYmVyID0gdGhpcy5fZGF0YVxuICAgICAgICAgIC5nZXRTZXR0aW5nKHByb2Nlc3NJbmRleClcbiAgICAgICAgICAuY3ViaXNtUGFyYW1ldGVyTGlzdC5hdCh0YXJnZXRJbmRleCkuZGFtcGVyO1xuXG4gICAgICAgIC8vIFNtb290aGluZ1xuICAgICAgICBjYWNoZVZhbHVlID1cbiAgICAgICAgICAoKDEwMC4wIC0gc21vb3RoKSAqIGNhY2hlVmFsdWUgK1xuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc29ySW5mb0xpc3RcbiAgICAgICAgICAgICAgLmF0KHByb2Nlc3NJbmRleClcbiAgICAgICAgICAgICAgLl9sYXN0U21vb3RoZWRMaXN0LmF0KHRhcmdldEluZGV4KSAqXG4gICAgICAgICAgICAgIHNtb290aCkgL1xuICAgICAgICAgIDEwMC4wO1xuICAgICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdFxuICAgICAgICAgIC5hdChwcm9jZXNzSW5kZXgpXG4gICAgICAgICAgLl9sYXN0U21vb3RoZWRMaXN0LnNldCh0YXJnZXRJbmRleCwgY2FjaGVWYWx1ZSk7XG5cbiAgICAgICAgLy8gRGFtcGVuaW5nXG4gICAgICAgIGlmIChcbiAgICAgICAgICBNYXRoLmFicyhcbiAgICAgICAgICAgIGNhY2hlVmFsdWUgLVxuICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdFxuICAgICAgICAgICAgICAgIC5hdChwcm9jZXNzSW5kZXgpXG4gICAgICAgICAgICAgICAgLl9sYXN0RGFtcGVkTGlzdC5hdCh0YXJnZXRJbmRleClcbiAgICAgICAgICApIDwgZGFtcGVyXG4gICAgICAgICkge1xuICAgICAgICAgIGNhY2hlVmFsdWUgPSB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdFxuICAgICAgICAgICAgLmF0KHByb2Nlc3NJbmRleClcbiAgICAgICAgICAgIC5fbGFzdERhbXBlZExpc3QuYXQodGFyZ2V0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0XG4gICAgICAgICAgLmF0KHByb2Nlc3NJbmRleClcbiAgICAgICAgICAuX2xhc3REYW1wZWRMaXN0LnNldCh0YXJnZXRJbmRleCwgY2FjaGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoYW5hbHlzaXNSZXN1bHQgIT0gbnVsbCk7XG4gIH1cblxuICBwdWJsaWMgc2V0QmxlbmRSYXRpbyhwcm9jZXNzSW5kZXg6IG51bWJlciwgYmxlbmRSYXRpbzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCFDdWJpc21Nb3Rpb25TeW5jLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzc0luZGV4IDwgdGhpcy5fcHJvY2Vzc29ySW5mb0xpc3QuZ2V0U2l6ZSgpKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9ibGVuZFJhdGlvID0gYmxlbmRSYXRpbztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgU2V0U21vb3RoaW5nKHByb2Nlc3NJbmRleDogbnVtYmVyLCBzbW9vdGhpbmc6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghQ3ViaXNtTW90aW9uU3luYy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3NJbmRleCA8IHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0LmdldFNpemUoKSkge1xuICAgICAgdGhpcy5fcHJvY2Vzc29ySW5mb0xpc3QuYXQocHJvY2Vzc0luZGV4KS5fc21vb3RoaW5nID0gc21vb3RoaW5nO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBTZXRTYW1wbGVSYXRlKHByb2Nlc3NJbmRleDogbnVtYmVyLCBzYW1wbGVSYXRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIUN1YmlzbU1vdGlvblN5bmMuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwcm9jZXNzSW5kZXggPCB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5nZXRTaXplKCkpIHtcbiAgICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0LmF0KHByb2Nlc3NJbmRleCkuX3NhbXBsZVJhdGUgPSBzYW1wbGVSYXRlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBTZXRBdWRpb0xldmVsRWZmZWN0UmF0aW8oXG4gICAgcHJvY2Vzc0luZGV4OiBudW1iZXIsXG4gICAgYXVkaW9MZXZlbEVmZmVjdFJhdGlvOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgaWYgKCFDdWJpc21Nb3Rpb25TeW5jLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzc0luZGV4IDwgdGhpcy5fcHJvY2Vzc29ySW5mb0xpc3QuZ2V0U2l6ZSgpKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzb3JJbmZvTGlzdC5hdChwcm9jZXNzSW5kZXgpLl9hdWRpb0xldmVsRWZmZWN0UmF0aW8gPVxuICAgICAgICBhdWRpb0xldmVsRWZmZWN0UmF0aW87XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldERhdGEoKTogQ3ViaXNtTW90aW9uU3luY0RhdGEge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgcHVibGljIGdldExhc3RUb3RhbFByb2Nlc3NlZENvdW50KHByb2Nlc3NJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc29ySW5mb0xpc3QuYXQocHJvY2Vzc0luZGV4KS5fbGFzdFRvdGFsUHJvY2Vzc2VkQ291bnQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIG1vZGVsOiBDdWJpc21Nb2RlbCxcbiAgICBkYXRhOiBDdWJpc21Nb3Rpb25TeW5jRGF0YSxcbiAgICBwcm9jZXNzb3JMaXN0OiBjc21WZWN0b3I8SUN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3I+XG4gICkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0ID0gbmV3IGNzbVZlY3RvcjxDdWJpc21Qcm9jZXNzb3JJbmZvPigpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2Nlc3Nvckxpc3Q/LmdldFNpemUoKTsgaW5kZXgrKykge1xuICAgICAgdGhpcy5fcHJvY2Vzc29ySW5mb0xpc3QucHVzaEJhY2soXG4gICAgICAgIG5ldyBDdWJpc21Qcm9jZXNzb3JJbmZvKFxuICAgICAgICAgIHByb2Nlc3Nvckxpc3QuYXQoaW5kZXgpLFxuICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgIGRhdGEuZ2V0U2V0dGluZyhpbmRleClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHRoaXMuX3Byb2Nlc3NvckluZm9MaXN0LmF0KGluZGV4KS5pbml0KGRhdGEuZ2V0U2V0dGluZyhpbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Byb2Nlc3NvckluZm9MaXN0OiBjc21WZWN0b3I8Q3ViaXNtUHJvY2Vzc29ySW5mbz47XG4gIHByaXZhdGUgX2RhdGE6IEN1YmlzbU1vdGlvblN5bmNEYXRhO1xufVxuXG5leHBvcnQgY2xhc3MgTW90aW9uU3luY09wdGlvbiB7XG4gIGVuZ2luZUNvbmZpZzogTW90aW9uU3luY0VuZ2luZUNvbmZpZ0NyaTtcbiAgbG9nRnVuY3Rpb246IExpdmUyREN1YmlzbU1vdGlvblN5bmNDb3JlLmNzbU1vdGlvblN5bmNMb2dGdW5jdGlvbjsgLy8g44Ot44Kw5Ye65Yqb44Gu6Zai5pWw44Kq44OW44K444Kn44Kv44OIXG4gIGxvZ2dpbmdMZXZlbDogTG9nTGV2ZWw7IC8vIOODreOCsOWHuuWKm+ODrOODmeODq+OBruioreWumlxufVxuXG5leHBvcnQgY2xhc3MgTW90aW9uU3luY0VuZ2luZUNvbmZpZ0NyaURhdGEge1xuICBlbmdpbmVDb25maWdCdWZmZXI6IEludDMyQXJyYXk7XG4gIGVuZ2luZUNvbmZpZ1B0cjogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQ3ViaXNtUHJvY2Vzc29ySW5mbyB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwcm9jZXNzb3I6IElDdWJpc21Nb3Rpb25TeW5jUHJvY2Vzc29yLFxuICAgIG1vZGVsOiBDdWJpc21Nb2RlbCxcbiAgICBzZXR0aW5nOiBDdWJpc21Nb3Rpb25TeW5jRGF0YVNldHRpbmdcbiAgKSB7XG4gICAgdGhpcy5fcHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMuX2JsZW5kUmF0aW8gPSAwLjA7XG4gICAgdGhpcy5fc21vb3RoaW5nID0gMTtcbiAgICB0aGlzLl9zYW1wbGVSYXRlID0gMzAuMDtcbiAgICB0aGlzLl9hdWRpb0xldmVsRWZmZWN0UmF0aW8gPSAwLjA7XG4gICAgdGhpcy5fc2FtcGxlQnVmZmVyID0gbnVsbDtcbiAgICB0aGlzLl9zYW1wbGVCdWZmZXJJbmRleCA9IDA7XG4gICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLl9jdXJyZW50UmVtYWluVGltZSA9IDAuMDtcbiAgICB0aGlzLl9sYXN0VG90YWxQcm9jZXNzZWRDb3VudCA9IDA7XG5cbiAgICB0aGlzLmluaXQoc2V0dGluZyk7XG4gICAgdGhpcy5fYW5hbHlzaXNSZXN1bHQgPSB0aGlzLl9wcm9jZXNzb3IuY3JlYXRlQW5hbHlzaXNSZXN1bHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0KHNldHRpbmc6IEN1YmlzbU1vdGlvblN5bmNEYXRhU2V0dGluZyk6IHZvaWQge1xuICAgIHRoaXMuX2N1cnJlbnRSZW1haW5UaW1lID0gMC4wO1xuICAgIHRoaXMuX2xhc3RTbW9vdGhlZExpc3QgPSBuZXcgY3NtVmVjdG9yPG51bWJlcj4oKTtcbiAgICB0aGlzLl9sYXN0RGFtcGVkTGlzdCA9IG5ldyBjc21WZWN0b3I8bnVtYmVyPigpO1xuXG4gICAgZm9yIChcbiAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICBpbmRleCA8IHNldHRpbmcuY3ViaXNtUGFyYW1ldGVyTGlzdC5nZXRTaXplKCk7XG4gICAgICBpbmRleCsrXG4gICAgKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJWYWx1ZTogbnVtYmVyID0gdGhpcy5fbW9kZWwuZ2V0UGFyYW1ldGVyVmFsdWVCeUluZGV4KFxuICAgICAgICBzZXR0aW5nLmN1YmlzbVBhcmFtZXRlckxpc3QuYXQoaW5kZXgpLnBhcmFtZXRlckluZGV4XG4gICAgICApO1xuICAgICAgdGhpcy5fbGFzdFNtb290aGVkTGlzdC5wdXNoQmFjayhwYXJhbWV0ZXJWYWx1ZSk7XG4gICAgICB0aGlzLl9sYXN0RGFtcGVkTGlzdC5wdXNoQmFjayhwYXJhbWV0ZXJWYWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fYmxlbmRSYXRpbyA9IHNldHRpbmcuYmxlbmRSYXRpbztcbiAgICB0aGlzLl9zbW9vdGhpbmcgPSBzZXR0aW5nLnNtb290aGluZztcbiAgICB0aGlzLl9zYW1wbGVSYXRlID0gc2V0dGluZy5zYW1wbGVSYXRlO1xuXG4gICAgdGhpcy5fbGFzdFRvdGFsUHJvY2Vzc2VkQ291bnQgPSAwO1xuICB9XG5cbiAgX3Byb2Nlc3NvcjogSUN1YmlzbU1vdGlvblN5bmNQcm9jZXNzb3I7XG4gIF9ibGVuZFJhdGlvOiBudW1iZXI7XG4gIF9zbW9vdGhpbmc6IG51bWJlcjtcbiAgX3NhbXBsZVJhdGU6IG51bWJlcjtcbiAgX2F1ZGlvTGV2ZWxFZmZlY3RSYXRpbzogbnVtYmVyO1xuICBfc2FtcGxlQnVmZmVyOiBjc21WZWN0b3I8bnVtYmVyPjtcbiAgX3NhbXBsZUJ1ZmZlckluZGV4OiBudW1iZXI7XG4gIF9tb2RlbDogQ3ViaXNtTW9kZWw7XG4gIF9hbmFseXNpc1Jlc3VsdDogQ3ViaXNtTW90aW9uU3luY0VuZ2luZUFuYWx5c2lzUmVzdWx0O1xuICBfY3VycmVudFJlbWFpblRpbWU6IG51bWJlcjtcbiAgX2xhc3RTbW9vdGhlZExpc3Q6IGNzbVZlY3RvcjxudW1iZXI+O1xuICBfbGFzdERhbXBlZExpc3Q6IGNzbVZlY3RvcjxudW1iZXI+O1xuICBfbGFzdFRvdGFsUHJvY2Vzc2VkQ291bnQ6IG51bWJlcjtcbn1cblxuLy8gTmFtZXNwYWNlIGRlZmluaXRpb24gZm9yIGNvbXBhdGliaWxpdHkuXG5pbXBvcnQgKiBhcyAkIGZyb20gJy4vbGl2ZTJkY3ViaXNtbW90aW9uc3luYyc7XG5pbXBvcnQgeyBNb3Rpb25TeW5jRW5naW5lQ29uZmlnX0NSSSBhcyBNb3Rpb25TeW5jRW5naW5lQ29uZmlnQ3JpIH0gZnJvbSAnLi9tb3Rpb25zeW5jY29uZmlnX2NyaSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21Nb3Rpb25TeW5jRnJhbWV3b3JrIHtcbiAgZXhwb3J0IGNvbnN0IEN1YmlzbU1vdGlvblN5bmMgPSAkLkN1YmlzbU1vdGlvblN5bmM7XG4gIGV4cG9ydCB0eXBlIEN1YmlzbU1vdGlvblN5bmMgPSAkLkN1YmlzbU1vdGlvblN5bmM7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgVG9Qb2ludGVyID0gTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0NvcmUuVG9Qb2ludGVyO1xuXG5jb25zdCBzX2NvbnRleHRDb25maWdJbmZvU3RydWN0U2l6ZSA9IDI7XG5jb25zdCBzX2FuYWx5c2lzQ29uZmlnSW5mb1N0cnVjdFNpemUgPSAzO1xuXG4vKiogRW5naW5lIGNvbmZpZ3VyYXRpb24gZm9yIENSSS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTW90aW9uU3luY0VuZ2luZUNvbmZpZ19DUkkge1xuICBBbGxvY2F0b3I6IExpdmUyREN1YmlzbU1vdGlvblN5bmNDb3JlLmNzbU1vdGlvblN5bmNfQWxsb2NGdW5jO1xuICBEZWFsbG9jYXRvcjogTGl2ZTJEQ3ViaXNtTW90aW9uU3luY0NvcmUuY3NtTW90aW9uU3luY19EZWFsbG9jRnVuYztcbn1cblxuZXhwb3J0IGNsYXNzIE1vdGlvblN5bmNDb250ZXh0Q29uZmlnX0NSSSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzYW1wbGVSYXRlOiBudW1iZXIgPSAwLCBiaXREZXB0aDogbnVtYmVyID0gMCkge1xuICAgIHRoaXMuU2FtcGxlUmF0ZSA9IHNhbXBsZVJhdGU7XG4gICAgdGhpcy5CaXREZXB0aCA9IGJpdERlcHRoO1xuICB9XG5cbiAgcHVibGljIHRvTmF0aXZlQXJyYXkoZm9yY2VDb252ZXJzaW9uOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8g5by35Yi255qE44Gr5paw6KaP5L2c5oiQ44GX44Gq44GE44Gu44Gn44GC44KM44Gw5pep5pyf44Oq44K/44O844OzXG4gICAgaWYgKCFmb3JjZUNvbnZlcnNpb24gJiYgdGhpcy5fbmF0aXZlQXJyYXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbmF0aXZlQXJyYXkpIHtcbiAgICAgIHRoaXMucmVsZWFzZU5hdGl2ZUFycmF5KCk7XG4gICAgfVxuICAgIHRoaXMuX25hdGl2ZUFycmF5ID0gbmV3IEludDMyQXJyYXkoc19jb250ZXh0Q29uZmlnSW5mb1N0cnVjdFNpemUpO1xuICAgIHRoaXMuX25hdGl2ZUFycmF5UHRyID0gVG9Qb2ludGVyLk1hbGxvYyhcbiAgICAgIHRoaXMuX25hdGl2ZUFycmF5Lmxlbmd0aCAqIHRoaXMuX25hdGl2ZUFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgKTtcblxuICAgIC8vIE5hdGl2ZeODneOCpOODs+OCv+OBuOOBruWkieaPm1xuICAgIHRoaXMuX25hdGl2ZUFycmF5ID0gVG9Qb2ludGVyLkNvbnZlcnRDb250ZXh0Q29uZmlnQ3JpVG9JbnQzMkFycmF5KFxuICAgICAgdGhpcy5fbmF0aXZlQXJyYXksXG4gICAgICB0aGlzLl9uYXRpdmVBcnJheVB0cixcbiAgICAgIHRoaXMuU2FtcGxlUmF0ZSxcbiAgICAgIHRoaXMuQml0RGVwdGhcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldE5hdGl2ZVB0cigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uYXRpdmVBcnJheVB0cjtcbiAgfVxuXG4gIHB1YmxpYyByZWxlYXNlTmF0aXZlQXJyYXkoKTogdm9pZCB7XG4gICAgdGhpcy5kZWFsbG9jTmF0aXZlQXJyYXlQdHIoKTtcbiAgICB0aGlzLl9uYXRpdmVBcnJheSA9IHZvaWQgMDtcbiAgfVxuXG4gIHByaXZhdGUgZGVhbGxvY05hdGl2ZUFycmF5UHRyKCk6IHZvaWQge1xuICAgIC8vIOmFjeWIl+acrOS9k+OCkuino+aUvlxuICAgIFRvUG9pbnRlci5GcmVlKHRoaXMuX25hdGl2ZUFycmF5UHRyKTtcbiAgICB0aGlzLl9uYXRpdmVBcnJheVB0ciA9IDA7XG4gIH1cblxuICBwdWJsaWMgU2FtcGxlUmF0ZTogbnVtYmVyO1xuICBwdWJsaWMgQml0RGVwdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbmF0aXZlQXJyYXk6IEludDMyQXJyYXk7XG4gIHByaXZhdGUgX25hdGl2ZUFycmF5UHRyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNb3Rpb25TeW5jQW5hbHlzaXNDb25maWdfQ1JJIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIGJsZW5kUmF0aW86IG51bWJlciA9IDAuMCxcbiAgICBzbW9vdGhpbmc6IG51bWJlciA9IDAsXG4gICAgYXVkaW9MZXZlbEVmZmVjdFJhdGlvOiBudW1iZXIgPSAwLjBcbiAgKSB7XG4gICAgdGhpcy5CbGVuZFJhdGlvID0gYmxlbmRSYXRpbztcbiAgICB0aGlzLlNtb290aGluZyA9IHNtb290aGluZztcbiAgICB0aGlzLkF1ZGlvTGV2ZWxFZmZlY3RSYXRpbyA9IGF1ZGlvTGV2ZWxFZmZlY3RSYXRpbztcbiAgfVxuXG4gIHB1YmxpYyB0b05hdGl2ZUFycmF5KGZvcmNlQ29udmVyc2lvbjogYm9vbGVhbik6IEZsb2F0MzJBcnJheSB7XG4gICAgLy8g5by35Yi255qE44Gr5paw6KaP5L2c5oiQ44GX44Gq44GE44Gu44Gn44GC44KM44Gw5pei44Gr44GC44KL44KC44Gu44KS6L+U44GZXG4gICAgaWYgKCFmb3JjZUNvbnZlcnNpb24gJiYgdGhpcy5fbmF0aXZlQXJyYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYXRpdmVBcnJheTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbmF0aXZlQXJyYXkpIHtcbiAgICAgIHRoaXMucmVsZWFzZU5hdGl2ZUFycmF5KCk7XG4gICAgfVxuICAgIHRoaXMuX25hdGl2ZUFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShzX2FuYWx5c2lzQ29uZmlnSW5mb1N0cnVjdFNpemUpO1xuICAgIHRoaXMuX25hdGl2ZUFycmF5UHRyID0gVG9Qb2ludGVyLk1hbGxvYyhcbiAgICAgIHRoaXMuX25hdGl2ZUFycmF5Lmxlbmd0aCAqIHRoaXMuX25hdGl2ZUFycmF5LkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgKTtcblxuICAgIC8vIE5hdGl2ZeODneOCpOODs+OCv+OBuOOBruWkieaPm1xuICAgIHRoaXMuX25hdGl2ZUFycmF5ID0gVG9Qb2ludGVyLkNvbnZlcnRBbmFseXNpc0NvbmZpZ1RvRmxvYXQzMkFycmF5KFxuICAgICAgdGhpcy5fbmF0aXZlQXJyYXksXG4gICAgICB0aGlzLl9uYXRpdmVBcnJheVB0cixcbiAgICAgIHRoaXMuQmxlbmRSYXRpbyxcbiAgICAgIHRoaXMuU21vb3RoaW5nLFxuICAgICAgdGhpcy5BdWRpb0xldmVsRWZmZWN0UmF0aW9cbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuX25hdGl2ZUFycmF5O1xuICB9XG5cbiAgcHVibGljIHJlbGVhc2VOYXRpdmVBcnJheSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlYWxsb2NOYXRpdmVQdHIoKTtcbiAgICB0aGlzLl9uYXRpdmVBcnJheSA9IHZvaWQgMDtcbiAgfVxuXG4gIHByaXZhdGUgZGVhbGxvY05hdGl2ZVB0cigpOiB2b2lkIHtcbiAgICAvLyDphY3liJfmnKzkvZPjgpLop6PmlL5cbiAgICBUb1BvaW50ZXIuRnJlZSh0aGlzLl9uYXRpdmVBcnJheVB0cik7XG4gICAgdGhpcy5fbmF0aXZlQXJyYXlQdHIgPSAwO1xuICB9XG5cbiAgcHVibGljIEJsZW5kUmF0aW86IG51bWJlcjtcbiAgcHVibGljIFNtb290aGluZzogbnVtYmVyO1xuICBwdWJsaWMgQXVkaW9MZXZlbEVmZmVjdFJhdGlvOiBudW1iZXI7XG4gIHByaXZhdGUgX25hdGl2ZUFycmF5OiBGbG9hdDMyQXJyYXk7XG4gIHByaXZhdGUgX25hdGl2ZUFycmF5UHRyOiBudW1iZXI7XG59XG5cbi8vIE5hbWVzcGFjZSBkZWZpbml0aW9uIGZvciBjb21wYXRpYmlsaXR5LlxuaW1wb3J0ICogYXMgJCBmcm9tICcuL21vdGlvbnN5bmNjb25maWdfY3JpJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbU1vdGlvblN5bmNGcmFtZXdvcmsge1xuICBleHBvcnQgY29uc3QgTW90aW9uU3luY0NvbnRleHRDb25maWdfQ1JJID0gJC5Nb3Rpb25TeW5jQ29udGV4dENvbmZpZ19DUkk7XG4gIGV4cG9ydCB0eXBlIE1vdGlvblN5bmNDb250ZXh0Q29uZmlnX0NSSSA9ICQuTW90aW9uU3luY0NvbnRleHRDb25maWdfQ1JJO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgY3NtVmVjdG9yLCBpdGVyYXRvciB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc212ZWN0b3InO1xuaW1wb3J0ICogYXMgTEFwcE1vdGlvblN5bmNEZWZpbmUgZnJvbSAnLi9sYXBwbW90aW9uc3luY2RlZmluZSc7XG5cbi8qKlxuICogV29ya2xldFByb2Nlc3NvcuODouOCuOODpeODvOODq+eUqOOBruWei+Wumue+qVxuICovXG5leHBvcnQgaW50ZXJmYWNlIExBcHBSZXNwb25zZU9iamVjdCB7XG4gIGV2ZW50VHlwZTogc3RyaW5nO1xuICBhdWRpb0J1ZmZlcjogRmxvYXQzMkFycmF5O1xufVxuXG4vKipcbiAqIOmfs+WjsOeuoeeQhuOCr+ODqeOCuVxuICog6Z+z5aOw6Kqt44G/6L6844G/44CB566h55CG44KS6KGM44GG44Kv44Op44K544CCXG4gKi9cbmV4cG9ydCBjbGFzcyBMQXBwTW90aW9uU3luY0F1ZGlvTWFuYWdlciB7XG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2F1ZGlvcyA9IG5ldyBjc21WZWN0b3I8QXVkaW9JbmZvPigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHJlbGVhc2UoKTogdm9pZCB7XG4gICAgZm9yIChcbiAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPEF1ZGlvSW5mbz4gPSB0aGlzLl9hdWRpb3MuYmVnaW4oKTtcbiAgICAgIGl0ZS5ub3RFcXVhbCh0aGlzLl9hdWRpb3MuZW5kKCkpO1xuICAgICAgaXRlLnByZUluY3JlbWVudCgpXG4gICAgKSB7XG4gICAgICBpZighaXRlLnB0cigpKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKGl0ZS5wdHIoKS53b3JrbGV0Tm9kZSl7XG4gICAgICAgIGl0ZS5wdHIoKS53b3JrbGV0Tm9kZS5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgICBpZihpdGUucHRyKCkuc291cmNlKXtcbiAgICAgICAgaXRlLnB0cigpLnNvdXJjZS5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgICBpZihpdGUucHRyKCkuYXVkaW9Db250ZXh0KXtcbiAgICAgICAgaXRlLnB0cigpLmF1ZGlvQ29udGV4dC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9hdWRpb3MgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOmfs+WjsOiqreOBv+i+vOOBv1xuICAgKlxuICAgKiBAcGFyYW0gZmlsZU5hbWUg6Kqt44G/6L6844KA6Z+z5aOw44OV44Kh44Kk44Or44OR44K55ZCNXG4gICAqIEBwYXJhbSBhdWRpb0NvbnRleHQg6Z+z5aOw44Kz44Oz44OG44Kt44K544OIXG4gICAqIEByZXR1cm4g6Z+z5aOw5oOF5aCx44CB6Kqt44G/6L6844G/5aSx5pWX5pmC44GvbnVsbOOCkui/lOOBmVxuICAgKi9cbiAgcHVibGljIGNyZWF0ZUF1ZGlvRnJvbUZpbGUoXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIGF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0LFxuICAgIGNhbGxiYWNrOiAoYXVkaW9JbmZvOiBBdWRpb0luZm8sIGNhbGxiYWNrSW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXVkaW9zICYmIHRoaXMuX2F1ZGlvcy5hdChpbmRleCkgIT0gbnVsbCkge1xuICAgICAgLy8gc2VhcmNoIGxvYWRlZCBhdWRpbyBhbHJlYWR5XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxBdWRpb0luZm8+ID0gdGhpcy5fYXVkaW9zLmJlZ2luKCk7XG4gICAgICAgIGl0ZS5ub3RFcXVhbCh0aGlzLl9hdWRpb3MuZW5kKCkpO1xuICAgICAgICBpdGUucHJlSW5jcmVtZW50KClcbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXRlLnB0cigpLmZpbGVQYXRoID09IGZpbGVOYW1lICYmXG4gICAgICAgICAgaXRlLnB0cigpLmF1ZGlvQ29udGV4dCA9PSBhdWRpb0NvbnRleHQgJiZcbiAgICAgICAgICBhdWRpb0NvbnRleHQgIT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICAvLyAy5Zue55uu5Lul6ZmN44Gv44Kt44Oj44OD44K344Ol44GM5L2/55So44GV44KM44KLKOW+heOBoeaZgumWk+OBquOBlylcbiAgICAgICAgICAvLyBXZWJLaXTjgafjga/lkIzjgZhJbWFnZeOBrm9ubG9hZOOCkuWGjeW6puWRvOOBtuOBq+OBr+WGjeOCpOODs+OCueOCv+ODs+OCueOBjOW/heimgVxuICAgICAgICAgIC8vIOips+e0sO+8mmh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MDI0MTgxXG4gICAgICAgICAgaXRlLnB0cigpLmF1ZGlvID0gbmV3IEF1ZGlvKCk7XG4gICAgICAgICAgaXRlXG4gICAgICAgICAgICAucHRyKClcbiAgICAgICAgICAgIC5hdWRpby5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAnbG9hZCcsXG4gICAgICAgICAgICAgICgpOiB2b2lkID0+IGNhbGxiYWNrKGl0ZS5wdHIoKSwgaW5kZXgpLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIGl0ZS5wdHIoKS5hdWRpby5zcmMgPSBmaWxlTmFtZTtcbiAgICAgICAgICBpdGUucHRyKCkuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOmfs+WjsOOCs+ODs+ODhuOCreOCueODiOOBruS9nOaIkFxuICAgIGNvbnN0IG5ld0F1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoe1xuICAgICAgc2FtcGxlUmF0ZTogTEFwcE1vdGlvblN5bmNEZWZpbmUuU2FtcGxlc1BlclNlY1xuICAgIH0pO1xuXG4gICAgbmV3QXVkaW9Db250ZXh0LnN1c3BlbmQoKTtcblxuICAgIC8vIOWfi+OCgei+vOOBv+mfs+WjsOimgee0oOOCkuS9nOaIkFxuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGZpbGVOYW1lKTtcblxuICAgIC8vIOWfi+OCgei+vOOBv+mfs+WjsOimgee0oOOBruWIneacn+ioreWumlxuICAgIGF1ZGlvLnByZWxvYWQgPSAnYXV0byc7XG5cbiAgICAvLyDpn7PmupDjg47jg7zjg4njga7kvZzmiJBcbiAgICBjb25zdCBzb3VyY2UgPSBuZXdBdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcblxuICAgIC8vIEF1ZGlvV29ya2xldOeUqOOBruODouOCuOODpeODvOODq+OCkui/veWKoFxuICAgIG5ld0F1ZGlvQ29udGV4dC5hdWRpb1dvcmtsZXRcbiAgICAgIC5hZGRNb2R1bGUoJy4vc3JjL2xhcHBhdWRpb3dvcmtsZXRwcm9jZXNzb3IuanMnKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBhdWRpb1dvcmtsZXROb2RlID0gbmV3IEF1ZGlvV29ya2xldE5vZGUoXG4gICAgICAgICAgbmV3QXVkaW9Db250ZXh0LFxuICAgICAgICAgICdsYXBwYXVkaW93b3JrbGV0cHJvY2Vzc29yJ1xuICAgICAgICApO1xuXG4gICAgICAgIC8vIOWQhOODjuODvOODieOCkuaOpee2muOBmeOCi1xuICAgICAgICBzb3VyY2UuY29ubmVjdChhdWRpb1dvcmtsZXROb2RlKTtcbiAgICAgICAgYXVkaW9Xb3JrbGV0Tm9kZS5jb25uZWN0KG5ld0F1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgY29uc3QgYXVkaW9JbmZvOiBBdWRpb0luZm8gPSBuZXcgQXVkaW9JbmZvKCk7XG4gICAgICAgIGlmIChhdWRpb0luZm8gIT0gbnVsbCAmJiB0aGlzLl9hdWRpb3MgIT0gbnVsbCkge1xuICAgICAgICAgIGF1ZGlvSW5mby5maWxlUGF0aCA9IGZpbGVOYW1lO1xuICAgICAgICAgIGF1ZGlvSW5mby5hdWRpb0NvbnRleHQgPSBuZXdBdWRpb0NvbnRleHQ7XG4gICAgICAgICAgYXVkaW9JbmZvLmF1ZGlvID0gYXVkaW87XG4gICAgICAgICAgYXVkaW9JbmZvLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICBhdWRpb0luZm8ud29ya2xldE5vZGUgPSBhdWRpb1dvcmtsZXROb2RlO1xuICAgICAgICAgIGF1ZGlvSW5mby5pc1BsYXkgPSBmYWxzZTtcbiAgICAgICAgICAvL3RoaXMuX2F1ZGlvcy5wdXNoQmFjayhhdWRpb0luZm8pO1xuICAgICAgICAgIHRoaXMuX2F1ZGlvcy5zZXQoaW5kZXgsIGF1ZGlvSW5mbyk7XG5cbiAgICAgICAgICBjYWxsYmFjayhhdWRpb0luZm8sIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBhdWRpby5zcmMgPSBmaWxlTmFtZTtcblxuICAgICAgICAvLyDlho3nlJ/ntYLkuobmmYLjgavlho3nlJ/jgZXjgozjgabjgYTjgarjgYTjgajjg57jg7zjgq/jgZnjgovjgIJcbiAgICAgICAgYXVkaW8ub25lbmRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhdWRpb0luZm8uaXNQbGF5ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpn7Plo7Djga7op6PmlL5cbiAgICpcbiAgICog6YWN5YiX44Gr5a2Y5Zyo44GZ44KL6Z+z5aOw5YWo44Gm44KS6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgY2xlYXJBdWRpb3MoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9hdWRpb3MuZ2V0U2l6ZSgpOyBpKyspIHtcbiAgICAgIHRoaXMuX2F1ZGlvcy5hdChpKS53b3JrbGV0Tm9kZS5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9hdWRpb3MuYXQoaSkuc291cmNlLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuX2F1ZGlvcy5hdChpKS5hdWRpb0NvbnRleHQuY2xvc2UoKTtcbiAgICAgIHRoaXMuX2F1ZGlvcy5zZXQoaSwgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXVkaW9zLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICog6Z+z5aOw44Gu6Kej5pS+XG4gICAqXG4gICAqIOaMh+WumuOBl+OBn+mfs+WjsOOCs+ODs+ODhuOCreOCueODiOOBrumfs+WjsOOCkuino+aUvuOBmeOCi+OAglxuICAgKiBAcGFyYW0gYXVkaW9Db250ZXh0IOino+aUvuOBmeOCi+mfs+WjsOOCs+ODs+ODhuOCreOCueODiFxuICAgKi9cbiAgcHVibGljIHJlbGVhc2VBdWRpb0J5QXVkaW9Db250ZXh0KGF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0KTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9hdWRpb3MuZ2V0U2l6ZSgpOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9hdWRpb3MuYXQoaSkuYXVkaW9Db250ZXh0ICE9IGF1ZGlvQ29udGV4dCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2F1ZGlvcy5hdChpKS53b3JrbGV0Tm9kZS5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9hdWRpb3MuYXQoaSkuc291cmNlLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuX2F1ZGlvcy5hdChpKS5hdWRpb0NvbnRleHQuY2xvc2UoKTtcbiAgICAgIHRoaXMuX2F1ZGlvcy5zZXQoaSwgbnVsbCk7XG4gICAgICB0aGlzLl9hdWRpb3MucmVtb3ZlKGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmfs+WjsOOBruino+aUvlxuICAgKlxuICAgKiDmjIflrprjgZfjgZ/lkI3liY3jga7pn7Plo7DjgpLop6PmlL7jgZnjgovjgIJcbiAgICogQHBhcmFtIGZpbGVOYW1lIOino+aUvuOBmeOCi+mfs+WjsOODleOCoeOCpOODq+ODkeOCuVxuICAgKi9cbiAgcHVibGljIHJlbGVhc2VBdWRpb0J5RmlsZVBhdGgoZmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYXVkaW9zLmdldFNpemUoKTsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fYXVkaW9zLmF0KGkpLmZpbGVQYXRoICE9IGZpbGVOYW1lKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXVkaW9zLmF0KGkpLndvcmtsZXROb2RlLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuX2F1ZGlvcy5hdChpKS5zb3VyY2UuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fYXVkaW9zLmF0KGkpLmF1ZGlvQ29udGV4dC5jbG9zZSgpO1xuICAgICAgdGhpcy5fYXVkaW9zLnNldChpLCBudWxsKTtcbiAgICAgIHRoaXMuX2F1ZGlvcy5yZW1vdmUoaSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5YaN55Sf5Lit44GL44Gp44GG44GL44KS5Y+W5b6XXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlUGF0aCDpn7Plo7Djg5XjgqHjgqTjg6vjg5HjgrlcbiAgICogQHJldHVybnMg5oyH5a6a44GX44Gf5ZCN5YmN44Gu6Z+z5aOw44GM5YaN55Sf5Lit44GL77yfXG4gICAqL1xuICBwdWJsaWMgaXNQbGF5QnlGaWxlUGF0aChmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9hdWRpb3MuZ2V0U2l6ZSgpOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9hdWRpb3MuYXQoaSkuZmlsZVBhdGggIT0gZmlsZVBhdGgpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9hdWRpb3MuYXQoaSkuaXNQbGF5O1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmjIflrprjgZfjgZ/jg5XjgqHjgqTjg6vjg5Hjgrnjga7pn7Plo7DjgpLlho3nlJ9cbiAgICpcbiAgICogQHBhcmFtIGZpbGVQYXRoIOmfs+WjsOODleOCoeOCpOODq+ODkeOCuVxuICAgKi9cbiAgcHVibGljIHBsYXlCeUZpbGVQYXRoKGZpbGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2F1ZGlvcy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2F1ZGlvcy5hdChpKS5maWxlUGF0aCAhPSBmaWxlUGF0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYXVkaW9zLmF0KGkpLmF1ZGlvLnBsYXkoKTtcbiAgICAgIHRoaXMuX2F1ZGlvcy5hdChpKS5pc1BsYXkgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOaMh+WumuOBl+OBn+ODleOCoeOCpOODq+ODkeOCueOBrumfs+WjsOOBruWGjeeUn+OCkuWBnOatolxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVBhdGgg6Z+z5aOw44OV44Kh44Kk44Or44OR44K5XG4gICAqL1xuICBwdWJsaWMgc3RvcEJ5RmlsZVBhdGgoZmlsZVBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYXVkaW9zLmdldFNpemUoKTsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5fYXVkaW9zLmF0KGkpLmZpbGVQYXRoICE9IGZpbGVQYXRoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hdWRpb3MuYXQoaSkuYXVkaW8ubG9hZCgpO1xuICAgICAgdGhpcy5fYXVkaW9zLmF0KGkpLmlzUGxheSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOaMh+WumuOBl+OBn+ODleOCoeOCpOODq+ODkeOCueOBrumfs+WjsOOBruWGjeeUn+OCkuS4gOaZguWBnOatolxuICAgKlxuICAgKiBAcGFyYW0gZmlsZVBhdGgg6Z+z5aOw44OV44Kh44Kk44Or44OR44K5XG4gICAqL1xuICBwdWJsaWMgcGF1c2VCeUZpbGVQYXRoKGZpbGVQYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2F1ZGlvcy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2F1ZGlvcy5hdChpKS5maWxlUGF0aCAhPSBmaWxlUGF0aCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYXVkaW9zLmF0KGkpLmF1ZGlvLnBhdXNlKCk7XG4gICAgICB0aGlzLl9hdWRpb3MuYXQoaSkuaXNQbGF5ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV29ya2xldFByb2Nlc3NvcuODouOCuOODpeODvOODq+OBi+OCieODh+ODvOOCv+OCkuWPl+OBkeWPluOCi+OCs+ODvOODq+ODkOODg+OCr+ioreWumueUqOOBrumWouaVsFxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXgg6Z+z5aOw44Gu44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEBwYXJhbSBidWZmZXIg44OH44O844K/44KS5YWl44KM44KL44OQ44OD44OV44KhXG4gICAqIEBwYXJhbSB1cGRhdGVTaXplcyDmm7TmlrDjgrXjgqTjgrrjga7phY3liJdcbiAgICovXG4gIHB1YmxpYyBzZXRPbk1lc3NhZ2VCeUluZGV4KFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgYnVmZmVyOiBjc21WZWN0b3I8bnVtYmVyPixcbiAgICB1cGRhdGVTaXplczogY3NtVmVjdG9yPG51bWJlcj5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5fYXVkaW9zLmF0KGluZGV4KS53b3JrbGV0Tm9kZS5wb3J0Lm9ubWVzc2FnZSA9IGUgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzUGxheUJ5SW5kZXgoaW5kZXgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8g5YWD44GMYW555Z6L44Gq44Gu44Gn5a6a576p44Gr5YWl44KM44KL44CCXG4gICAgICBjb25zdCBkYXRhOiBMQXBwUmVzcG9uc2VPYmplY3QgPSBlLmRhdGE7XG5cbiAgICAgIC8vIFdvcmtsZXRQcm9jZXNzb3Ljg6Ljgrjjg6Xjg7zjg6vjgYvjgonjg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgIGlmIChkYXRhLmV2ZW50VHlwZSA9PT0gJ2RhdGEnKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHVwZGF0ZVNpemVzLmF0KGluZGV4KTtcbiAgICAgICAgZGF0YS5hdWRpb0J1ZmZlci5mb3JFYWNoKChlbGVtZW50OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBidWZmZXIucHVzaEJhY2soZWxlbWVudCk7XG4gICAgICAgICAgbmV3VmFsdWUrKztcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZVNpemVzLnNldChpbmRleCwgbmV3VmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog5YaN55Sf5Lit44GL44Gp44GG44GL44KS5Y+W5b6XXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybnMg5oyH5a6a44GX44Gf44Kk44Oz44OH44OD44Kv44K544Gu6Z+z5aOw44GM5YaN55Sf5Lit44GL77yfXG4gICAqL1xuICBwdWJsaWMgaXNQbGF5QnlJbmRleChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2F1ZGlvcyA9PSBudWxsIHx8ICEoaW5kZXggPCB0aGlzLl9hdWRpb3MuZ2V0U2l6ZSgpKSB8fCB0aGlzLl9hdWRpb3MuYXQoaW5kZXgpID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYXVkaW9zLmF0KGluZGV4KS5pc1BsYXk7XG4gIH1cblxuICAvKipcbiAgICog5oyH5a6a44GX44Gf44Kk44Oz44OH44OD44Kv44K544Gu6Z+z5aOw44KS5YaN55SfXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICovXG4gIHB1YmxpYyBwbGF5QnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCEoaW5kZXggPCB0aGlzLl9hdWRpb3MuZ2V0U2l6ZSgpKSB8fCB0aGlzLl9hdWRpb3MuYXQoaW5kZXgpID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hdWRpb3MuYXQoaW5kZXgpLmF1ZGlvLnBsYXkoKTtcbiAgICB0aGlzLl9hdWRpb3MuYXQoaW5kZXgpLmlzUGxheSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICog5oyH5a6a44GX44Gf44Kk44Oz44OH44OD44Kv44K544Gu6Z+z5aOw44Gu5YaN55Sf44KS5YGc5q2iXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICovXG4gIHB1YmxpYyBzdG9wQnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCEoaW5kZXggPCB0aGlzLl9hdWRpb3MuZ2V0U2l6ZSgpKSB8fCB0aGlzLl9hdWRpb3MuYXQoaW5kZXgpID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9hdWRpb3MuYXQoaW5kZXgpLmF1ZGlvLmxvYWQoKTtcbiAgICB0aGlzLl9hdWRpb3MuYXQoaW5kZXgpLmlzUGxheSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOaMh+WumuOBl+OBn+OCpOODs+ODh+ODg+OCr+OCueOBrumfs+WjsOOBruWGjeeUn+OCkuS4gOaZguWBnOatolxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K5XG4gICAqL1xuICBwdWJsaWMgcGF1c2VCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIShpbmRleCA8IHRoaXMuX2F1ZGlvcy5nZXRTaXplKCkpIHx8IHRoaXMuX2F1ZGlvcy5hdChpbmRleCkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2F1ZGlvcy5hdChpbmRleCkuYXVkaW8ucGF1c2UoKTtcbiAgICB0aGlzLl9hdWRpb3MuYXQoaW5kZXgpLmlzUGxheSA9IGZhbHNlO1xuICB9XG5cbiAgX2F1ZGlvczogY3NtVmVjdG9yPEF1ZGlvSW5mbz47XG59XG5cbi8qKlxuICog6Z+z5aOw5oOF5aCx5qeL6YCg5L2TXG4gKi9cbmV4cG9ydCBjbGFzcyBBdWRpb0luZm8ge1xuICBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudDsgLy8g5Z+L44KB6L6844G/6Z+z5aOw6KaB57SgXG4gIGF1ZGlvQ29udGV4dDogQXVkaW9Db250ZXh0ID0gbnVsbDsgLy8g6Z+z5aOw44Kz44Oz44OG44Kt44K544OIXG4gIHNvdXJjZTogTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlID0gbnVsbDsgLy8g6Z+z5rqQ44OO44O844OJXG4gIHdvcmtsZXROb2RlOiBBdWRpb1dvcmtsZXROb2RlID0gbnVsbDsgLy8g44Oq44Ki44Or44K/44Kk44Og5pmC6ZaT6aCY5Z+f55So44Gu44OO44O844OJXG4gIGZpbGVQYXRoOiBzdHJpbmc7IC8vIOODleOCoeOCpOODq+WQjVxuICBpc1BsYXk6IGJvb2xlYW47IC8vIOWGjeeUn+S4reOBi++8n1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuLyoqXG4gKiBTYW1wbGUgQXBw44Gn5L2/55So44GZ44KL5a6a5pWwXG4gKi9cblxuLy8g55u45a++44OR44K5XG5leHBvcnQgY29uc3QgUmVzb3VyY2VzUGF0aCA9ICcuLi8uLi9SZXNvdXJjZXMvJztcbmV4cG9ydCBjb25zdCBNb3Rpb25TeW5jTW9kZWxTb3VuZHNEaXJOYW1lID0gJ3NvdW5kcy8nO1xuXG4vLyDml6npgIHjgorjga7nlLvlg4/jg5XjgqHjgqTjg6tcbmV4cG9ydCBjb25zdCBGYXN0Rm9yd2FyZEltYWdlTmFtZSA9ICdpY29uX2Zhc3RGb3J3YXJkLnBuZyc7XG5cbi8vIOODouODh+ODq+Wumue+qS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8g44Oi44OH44Or44KS6YWN572u44GX44Gf44OH44Kj44Os44Kv44OI44Oq5ZCN44Gu6YWN5YiXXG4vLyDjg4fjgqPjg6zjgq/jg4jjg6rlkI3jgahtb2RlbDMuanNvbuOBruWQjeWJjeOCkuS4gOiHtOOBleOBm+OBpuOBiuOBj+OBk+OBqFxuZXhwb3J0IGNvbnN0IE1vZGVsRGlyOiBzdHJpbmdbXSA9IFsnc2hpcm9faGFjaGknXTtcblxuZXhwb3J0IGNvbnN0IE1vZGVsRGlyU2l6ZTogbnVtYmVyID0gTW9kZWxEaXIubGVuZ3RoO1xuXG4vLyDjg4Hjg6Pjg7Pjg43jg6vmlbBcbmV4cG9ydCBjb25zdCBDaGFubmVscyA9IDI7XG4vLyDjgrXjg7Pjg5fjg6rjg7PjgrDlkajms6LmlbBcbmV4cG9ydCBjb25zdCBTYW1wbGVzUGVyU2VjID0gNDgwMDA7XG4vLyDjg5Pjg4Pjg4jmt7HluqZcbmV4cG9ydCBjb25zdCBCaXREZXB0aCA9IDE2O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtRnJhbWV3b3JrLCBPcHRpb24gfSBmcm9tICdAZnJhbWV3b3JrL2xpdmUyZGN1YmlzbWZyYW1ld29yayc7XG5cbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnQGN1YmlzbXNka3NhbXBsZXMvbGFwcGRlZmluZSc7XG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnQGN1YmlzbXNka3NhbXBsZXMvbGFwcHBhbCc7XG5pbXBvcnQgeyBMQXBwVGV4dHVyZU1hbmFnZXIgfSBmcm9tICdAY3ViaXNtc2Rrc2FtcGxlcy9sYXBwdGV4dHVyZW1hbmFnZXInO1xuaW1wb3J0IHtcbiAgQ3ViaXNtTW90aW9uU3luYyxcbiAgTW90aW9uU3luY09wdGlvblxufSBmcm9tICdAbW90aW9uc3luY2ZyYW1ld29yay9saXZlMmRjdWJpc21tb3Rpb25zeW5jJztcbmltcG9ydCB7IExBcHBNb3Rpb25TeW5jVmlldyB9IGZyb20gJy4vbGFwcG1vdGlvbnN5bmN2aWV3JztcbmltcG9ydCB7IExBcHBNb3Rpb25TeW5jTGl2ZTJETWFuYWdlciB9IGZyb20gJy4vbGFwcG1vdGlvbnN5bmNsaXZlMmRtYW5hZ2VyJztcbmltcG9ydCB7IGNhbnZhcywgZ2wgfSBmcm9tICdAY3ViaXNtc2Rrc2FtcGxlcy9sYXBwZ2xtYW5hZ2VyJztcblxuZXhwb3J0IGxldCBzX2luc3RhbmNlOiBMQXBwTW90aW9uU3luY0RlbGVnYXRlID0gbnVsbDtcbmV4cG9ydCBsZXQgZnJhbWVCdWZmZXI6IFdlYkdMRnJhbWVidWZmZXIgPSBudWxsO1xuXG4vKipcbiAqIOOCouODl+ODquOCseODvOOCt+ODp+ODs+OCr+ODqeOCueOAglxuICogQ3ViaXNtIFNES+OBrueuoeeQhuOCkuihjOOBhuOAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZSB7XG4gIC8qKlxuICAgKiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvInjgpLov5TjgZnjgIJcbiAgICog44Kk44Oz44K544K/44Oz44K544GM55Sf5oiQ44GV44KM44Gm44GE44Gq44GE5aC05ZCI44Gv5YaF6YOo44Gn44Kk44Oz44K544K/44Oz44K544KS55Sf5oiQ44GZ44KL44CCXG4gICAqXG4gICAqIEByZXR1cm4g44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IExBcHBNb3Rpb25TeW5jRGVsZWdhdGUge1xuICAgIGlmIChzX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSBuZXcgTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzX2luc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCue+8iOOCt+ODs+OCsOODq+ODiOODs++8ieOCkuino+aUvuOBmeOCi+OAglxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWxlYXNlSW5zdGFuY2UoKTogdm9pZCB7XG4gICAgaWYgKHNfaW5zdGFuY2UgIT0gbnVsbCkge1xuICAgICAgc19pbnN0YW5jZS5yZWxlYXNlKCk7XG4gICAgfVxuXG4gICAgc19pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQVBQ44Gr5b+F6KaB44Gq54mp44KS5Yid5pyf5YyW44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiBib29sZWFuIHtcbiAgICAvLyDjgq3jg6Pjg7Pjg5DjgrnjgpIgRE9NIOOBq+i/veWKoFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAgIGlmIChMQXBwRGVmaW5lLkNhbnZhc1NpemUgPT09ICdhdXRvJykge1xuICAgICAgdGhpcy5fcmVzaXplQ2FudmFzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IExBcHBEZWZpbmUuQ2FudmFzU2l6ZS53aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBMQXBwRGVmaW5lLkNhbnZhc1NpemUuaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICghZnJhbWVCdWZmZXIpIHtcbiAgICAgIGZyYW1lQnVmZmVyID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLkZSQU1FQlVGRkVSX0JJTkRJTkcpO1xuICAgIH1cblxuICAgIC8vIOmAj+mBjuioreWumlxuICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XG4gICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG5cbiAgICBjb25zdCBzdXBwb3J0VG91Y2g6IGJvb2xlYW4gPSAnb250b3VjaGVuZCcgaW4gY2FudmFzO1xuXG4gICAgaWYgKHN1cHBvcnRUb3VjaCkge1xuICAgICAgLy8g44K/44OD44OB6Zai6YCj44Kz44O844Or44OQ44OD44Kv6Zai5pWw55m76YyyXG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hCZWdhbiwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZGVkLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBvblRvdWNoQ2FuY2VsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOODnuOCpuOCuemWoumAo+OCs+ODvOODq+ODkOODg+OCr+mWouaVsOeZu+mMslxuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uQ2xpY2tCZWdhbiwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkNsaWNrRW5kZWQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICAvLyBBcHBWaWV344Gu5Yid5pyf5YyWXG4gICAgdGhpcy5fdmlldy5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBDdWJpc20gU0RL44Gu5Yid5pyf5YyWXG4gICAgdGhpcy5pbml0aWFsaXplQ3ViaXNtKCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNpemUgY2FudmFzIGFuZCByZS1pbml0aWFsaXplIHZpZXcuXG4gICAqL1xuICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplQ2FudmFzKCk7XG4gICAgdGhpcy5fdmlldy5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fdmlldy5pbml0aWFsaXplU3ByaXRlKCk7XG4gIH1cblxuICAvKipcbiAgICog6Kej5pS+44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkIHtcbiAgICB0aGlzLl90ZXh0dXJlTWFuYWdlci5yZWxlYXNlKCk7XG4gICAgdGhpcy5fdGV4dHVyZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fdmlldy5yZWxlYXNlKCk7XG4gICAgdGhpcy5fdmlldyA9IG51bGw7XG5cbiAgICAvLyDjg6rjgr3jg7zjgrnjgpLop6PmlL5cbiAgICBMQXBwTW90aW9uU3luY0xpdmUyRE1hbmFnZXIucmVsZWFzZUluc3RhbmNlKCk7XG5cbiAgICAvLyBDdWJpc20gU0RL44Gu6Kej5pS+XG4gICAgQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKTtcbiAgICBDdWJpc21Nb3Rpb25TeW5jLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlrp/ooYzlh6bnkIbjgIJcbiAgICovXG4gIHB1YmxpYyBydW4oKTogdm9pZCB7XG4gICAgLy8g44Oh44Kk44Oz44Or44O844OXXG4gICAgY29uc3QgbG9vcCA9ICgpOiB2b2lkID0+IHtcbiAgICAgIC8vIOOCpOODs+OCueOCv+ODs+OCueOBruacieeEoeOBrueiuuiqjVxuICAgICAgaWYgKHNfaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIOaZgumWk+abtOaWsFxuICAgICAgTEFwcFBhbC51cGRhdGVUaW1lKCk7XG5cbiAgICAgIC8vIOeUu+mdouOBruWIneacn+WMllxuICAgICAgZ2wuY2xlYXJDb2xvcigwLjAsIDAuMCwgMC4wLCAxLjApO1xuXG4gICAgICAvLyDmt7Hluqbjg4bjgrnjg4jjgpLmnInlirnljJZcbiAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcblxuICAgICAgLy8g6L+R44GP44Gr44GC44KL54mp5L2T44Gv44CB6YGg44GP44Gr44GC44KL54mp5L2T44KS6KaG44GE6Zqg44GZXG4gICAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTtcblxuICAgICAgLy8g44Kr44Op44O844OQ44OD44OV44Kh44KE5rex5bqm44OQ44OD44OV44Kh44KS44Kv44Oq44Ki44GZ44KLXG4gICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG5cbiAgICAgIGdsLmNsZWFyRGVwdGgoMS4wKTtcblxuICAgICAgLy8g6YCP6YGO6Kit5a6aXG4gICAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuICAgICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSk7XG5cbiAgICAgIC8vIOaPj+eUu+abtOaWsFxuICAgICAgdGhpcy5fdmlldy5yZW5kZXIoKTtcblxuICAgICAgLy8g44Or44O844OX44Gu44Gf44KB44Gr5YaN5biw5ZG844Gz5Ye644GXXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgICBsb29wKCk7XG4gIH1cblxuICAvKipcbiAgICog44K344Kn44O844OA44O844KS55m76Yyy44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlU2hhZGVyKCk6IFdlYkdMUHJvZ3JhbSB7XG4gICAgLy8g44OQ44O844OG44OD44Kv44K544K344Kn44O844OA44O844Gu44Kz44Oz44OR44Kk44OrXG4gICAgY29uc3QgdmVydGV4U2hhZGVySWQgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG5cbiAgICBpZiAodmVydGV4U2hhZGVySWQgPT0gbnVsbCkge1xuICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ2ZhaWxlZCB0byBjcmVhdGUgdmVydGV4U2hhZGVyJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXI6IHN0cmluZyA9XG4gICAgICAncHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7JyArXG4gICAgICAnYXR0cmlidXRlIHZlYzMgcG9zaXRpb247JyArXG4gICAgICAnYXR0cmlidXRlIHZlYzIgdXY7JyArXG4gICAgICAndmFyeWluZyB2ZWMyIHZ1djsnICtcbiAgICAgICd2b2lkIG1haW4odm9pZCknICtcbiAgICAgICd7JyArXG4gICAgICAnICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvc2l0aW9uLCAxLjApOycgK1xuICAgICAgJyAgIHZ1diA9IHV2OycgK1xuICAgICAgJ30nO1xuXG4gICAgZ2wuc2hhZGVyU291cmNlKHZlcnRleFNoYWRlcklkLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIodmVydGV4U2hhZGVySWQpO1xuXG4gICAgLy8g44OV44Op44Kw44Oh44Oz44OI44K344Kn44O844OA44Gu44Kz44Oz44OR44Kk44OrXG4gICAgY29uc3QgZnJhZ21lbnRTaGFkZXJJZCA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpO1xuXG4gICAgaWYgKGZyYWdtZW50U2hhZGVySWQgPT0gbnVsbCkge1xuICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ2ZhaWxlZCB0byBjcmVhdGUgZnJhZ21lbnRTaGFkZXInKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyOiBzdHJpbmcgPVxuICAgICAgJ3ByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OycgK1xuICAgICAgJ3ZhcnlpbmcgdmVjMiB2dXY7JyArXG4gICAgICAndW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTsnICtcbiAgICAgICd2b2lkIG1haW4odm9pZCknICtcbiAgICAgICd7JyArXG4gICAgICAnICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUsIHZ1dik7JyArXG4gICAgICAnfSc7XG5cbiAgICBnbC5zaGFkZXJTb3VyY2UoZnJhZ21lbnRTaGFkZXJJZCwgZnJhZ21lbnRTaGFkZXIpO1xuICAgIGdsLmNvbXBpbGVTaGFkZXIoZnJhZ21lbnRTaGFkZXJJZCk7XG5cbiAgICAvLyDjg5fjg63jgrDjg6njg6Djgqrjg5bjgrjjgqfjgq/jg4jjga7kvZzmiJBcbiAgICBjb25zdCBwcm9ncmFtSWQgPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW1JZCwgdmVydGV4U2hhZGVySWQpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtSWQsIGZyYWdtZW50U2hhZGVySWQpO1xuXG4gICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleFNoYWRlcklkKTtcbiAgICBnbC5kZWxldGVTaGFkZXIoZnJhZ21lbnRTaGFkZXJJZCk7XG5cbiAgICAvLyDjg6rjg7Pjgq9cbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtSWQpO1xuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtSWQpO1xuXG4gICAgcmV0dXJuIHByb2dyYW1JZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaWV35oOF5aCx44KS5Y+W5b6X44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgZ2V0VmlldygpOiBMQXBwTW90aW9uU3luY1ZpZXcge1xuICAgIHJldHVybiB0aGlzLl92aWV3O1xuICB9XG5cbiAgcHVibGljIGdldFRleHR1cmVNYW5hZ2VyKCk6IExBcHBUZXh0dXJlTWFuYWdlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHR1cmVNYW5hZ2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY2FwdHVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9tb3VzZVggPSAwLjA7XG4gICAgdGhpcy5fbW91c2VZID0gMC4wO1xuICAgIHRoaXMuX2lzRW5kID0gZmFsc2U7XG5cbiAgICB0aGlzLl9jdWJpc21PcHRpb24gPSBuZXcgT3B0aW9uKCk7XG4gICAgdGhpcy5fY3ViaXNtTW90aW9uU3luY09wdGlvbiA9IG5ldyBNb3Rpb25TeW5jT3B0aW9uKCk7XG4gICAgdGhpcy5fdmlldyA9IG5ldyBMQXBwTW90aW9uU3luY1ZpZXcoKTtcbiAgICB0aGlzLl90ZXh0dXJlTWFuYWdlciA9IG5ldyBMQXBwVGV4dHVyZU1hbmFnZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdWJpc20gU0RL44Gu5Yid5pyf5YyWXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZUN1YmlzbSgpOiB2b2lkIHtcbiAgICAvLyBzZXR1cCBjdWJpc21cbiAgICB0aGlzLl9jdWJpc21PcHRpb24ubG9nRnVuY3Rpb24gPSBMQXBwUGFsLnByaW50TWVzc2FnZTtcbiAgICB0aGlzLl9jdWJpc21PcHRpb24ubG9nZ2luZ0xldmVsID0gTEFwcERlZmluZS5DdWJpc21Mb2dnaW5nTGV2ZWw7XG4gICAgQ3ViaXNtRnJhbWV3b3JrLnN0YXJ0VXAodGhpcy5fY3ViaXNtT3B0aW9uKTtcblxuICAgIC8vIHNldHVwIG1vdGlvbnN5bmNcbiAgICB0aGlzLl9jdWJpc21Nb3Rpb25TeW5jT3B0aW9uLmxvZ0Z1bmN0aW9uID0gTEFwcFBhbC5wcmludE1lc3NhZ2U7XG4gICAgdGhpcy5fY3ViaXNtTW90aW9uU3luY09wdGlvbi5sb2dnaW5nTGV2ZWwgPSBMQXBwRGVmaW5lLkN1YmlzbUxvZ2dpbmdMZXZlbDtcbiAgICBDdWJpc21Nb3Rpb25TeW5jLnN0YXJ0VXAodGhpcy5fY3ViaXNtTW90aW9uU3luY09wdGlvbik7XG5cbiAgICAvLyBpbml0aWFsaXplIGN1YmlzbVxuICAgIEN1YmlzbUZyYW1ld29yay5pbml0aWFsaXplKCk7XG4gICAgQ3ViaXNtTW90aW9uU3luYy5pbml0aWFsaXplKCk7XG5cbiAgICAvLyBsb2FkIG1vZGVsXG4gICAgTEFwcE1vdGlvblN5bmNMaXZlMkRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICBMQXBwUGFsLnVwZGF0ZVRpbWUoKTtcblxuICAgIHRoaXMuX3ZpZXcuaW5pdGlhbGl6ZVNwcml0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSB0aGUgY2FudmFzIHRvIGZpbGwgdGhlIHNjcmVlbi5cbiAgICovXG4gIHByaXZhdGUgX3Jlc2l6ZUNhbnZhcygpOiB2b2lkIHtcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmRyYXdpbmdCdWZmZXJXaWR0aCwgZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCk7XG4gIH1cblxuICBfY3ViaXNtT3B0aW9uOiBPcHRpb247IC8vIEN1YmlzbSBTREsgT3B0aW9uXG4gIF9jdWJpc21Nb3Rpb25TeW5jT3B0aW9uOiBNb3Rpb25TeW5jT3B0aW9uOyAvLyBDdWJpc20gU0RLIE1vdGlvblN5bmMgT3B0aW9uXG4gIF92aWV3OiBMQXBwTW90aW9uU3luY1ZpZXc7IC8vIFZpZXfmg4XloLFcbiAgX2NhcHR1cmVkOiBib29sZWFuOyAvLyDjgq/jg6rjg4Pjgq/jgZfjgabjgYTjgovjgYtcbiAgX21vdXNlWDogbnVtYmVyOyAvLyDjg57jgqbjgrlY5bqn5qiZXG4gIF9tb3VzZVk6IG51bWJlcjsgLy8g44Oe44Km44K5WeW6p+aomVxuICBfaXNFbmQ6IGJvb2xlYW47IC8vIEFQUOe1guS6huOBl+OBpuOBhOOCi+OBi1xuICBfdGV4dHVyZU1hbmFnZXI6IExBcHBUZXh0dXJlTWFuYWdlcjsgLy8g44OG44Kv44K544OB44Oj44Oe44ON44O844K444Oj44O8XG59XG5cbi8qKlxuICog44Kv44Oq44OD44Kv44GX44Gf44Go44GN44Gr5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uQ2xpY2tCZWdhbihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gIGlmICghTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCA9IHRydWU7XG5cbiAgY29uc3QgcG9zWDogbnVtYmVyID0gZS5wYWdlWDtcbiAgY29uc3QgcG9zWTogbnVtYmVyID0gZS5wYWdlWTtcblxuICBMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzQmVnYW4ocG9zWCwgcG9zWSk7XG5cbiAgLy8gSEFDSzogT24gU2FmYXJpLlxuICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcyhcIkFwcGxlV2ViS2l0XCIpKSB7XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cbn1cblxuLyoqXG4gKiDjg57jgqbjgrnjg53jgqTjg7Pjgr/jgYzli5XjgYTjgZ/jgonlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25Nb3VzZU1vdmVkKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgaWYgKCFMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcpIHtcbiAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgndmlldyBub3Rmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSAoZS50YXJnZXQgYXMgRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHBvc1g6IG51bWJlciA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgY29uc3QgcG9zWTogbnVtYmVyID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc01vdmVkKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOOCr+ODquODg+OCr+OBjOe1guS6huOBl+OBn+OCieWRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvbkNsaWNrRW5kZWQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICBMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkuX2NhcHR1cmVkID0gZmFsc2U7XG4gIGlmICghTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWN0ID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBwb3NYOiBudW1iZXIgPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gIGNvbnN0IHBvc1k6IG51bWJlciA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gIExBcHBNb3Rpb25TeW5jRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldy5vblRvdWNoZXNFbmRlZChwb3NYLCBwb3NZKTtcbn1cblxuLyoqXG4gKiDjgr/jg4Pjg4HjgZfjgZ/jgajjgY3jgavlkbzjgbDjgozjgovjgIJcbiAqL1xuZnVuY3Rpb24gb25Ub3VjaEJlZ2FuKGU6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgaWYgKCFMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcpIHtcbiAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgndmlldyBub3Rmb3VuZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIExBcHBNb3Rpb25TeW5jRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fY2FwdHVyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IHBvc1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICBjb25zdCBwb3NZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcblxuICBMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzQmVnYW4ocG9zWCwgcG9zWSk7XG59XG5cbi8qKlxuICog44K544Ov44Kk44OX44GZ44KL44Go5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlZChlOiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gIGlmICghTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWN0ID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGNvbnN0IHBvc1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gIGNvbnN0IHBvc1kgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnRvcDtcblxuICBMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzTW92ZWQocG9zWCwgcG9zWSk7XG59XG5cbi8qKlxuICog44K/44OD44OB44GM57WC5LqG44GX44Gf44KJ5ZG844Gw44KM44KL44CCXG4gKi9cbmZ1bmN0aW9uIG9uVG91Y2hFbmRlZChlOiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gIExBcHBNb3Rpb25TeW5jRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fY2FwdHVyZWQgPSBmYWxzZTtcblxuICBpZiAoIUxBcHBNb3Rpb25TeW5jRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5fdmlldykge1xuICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKCd2aWV3IG5vdGZvdW5kJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVjdCA9IChlLnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBjb25zdCBwb3NYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICBjb25zdCBwb3NZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3Lm9uVG91Y2hlc0VuZGVkKHBvc1gsIHBvc1kpO1xufVxuXG4vKipcbiAqIOOCv+ODg+ODgeOBjOOCreODo+ODs+OCu+ODq+OBleOCjOOCi+OBqOWRvOOBsOOCjOOCi+OAglxuICovXG5mdW5jdGlvbiBvblRvdWNoQ2FuY2VsKGU6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl9jYXB0dXJlZCA9IGZhbHNlO1xuXG4gIGlmICghTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZS5nZXRJbnN0YW5jZSgpLl92aWV3KSB7XG4gICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoJ3ZpZXcgbm90Zm91bmQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCByZWN0ID0gKGUudGFyZ2V0IGFzIEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGNvbnN0IHBvc1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gIGNvbnN0IHBvc1kgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnRvcDtcblxuICBMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkuX3ZpZXcub25Ub3VjaGVzRW5kZWQocG9zWCwgcG9zWSk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBDdWJpc21NYXRyaXg0NCB9IGZyb20gJ0BmcmFtZXdvcmsvbWF0aC9jdWJpc21tYXRyaXg0NCc7XG5pbXBvcnQgeyBjc21WZWN0b3IgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yJztcblxuaW1wb3J0ICogYXMgTEFwcERlZmluZSBmcm9tICdAY3ViaXNtc2Rrc2FtcGxlcy9sYXBwZGVmaW5lJztcbmltcG9ydCAqIGFzIExhcHBNb3Rpb25TeW5jRGVmaW5lIGZyb20gJy4vbGFwcG1vdGlvbnN5bmNkZWZpbmUnO1xuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnQGN1YmlzbXNka3NhbXBsZXMvbGFwcGdsbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwTW90aW9uU3luY01vZGVsIH0gZnJvbSAnLi9sYXBwbW90aW9uc3luY21vZGVsJztcbmltcG9ydCB7IExBcHBQYWwgfSBmcm9tICdAY3ViaXNtc2Rrc2FtcGxlcy9sYXBwcGFsJztcblxuZXhwb3J0IGxldCBzX2luc3RhbmNlOiBMQXBwTW90aW9uU3luY0xpdmUyRE1hbmFnZXIgPSBudWxsO1xuXG4vKipcbiAqIOOCteODs+ODl+ODq+OCouODl+ODquOCseODvOOCt+ODp+ODs+OBq+OBiuOBhOOBpkN1YmlzbU1vZGVs44KS566h55CG44GZ44KL44Kv44Op44K5XG4gKiDjg6Ljg4fjg6vnlJ/miJDjgajnoLTmo4TjgIHjgr/jg4Pjg5fjgqTjg5njg7Pjg4jjga7lh6bnkIbjgIHjg6Ljg4fjg6vliIfjgormm7/jgYjjgpLooYzjgYbjgIJcbiAqL1xuZXhwb3J0IGNsYXNzIExBcHBNb3Rpb25TeW5jTGl2ZTJETWFuYWdlciB7XG4gIC8qKlxuICAgKiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvInjgpLov5TjgZnjgIJcbiAgICog44Kk44Oz44K544K/44Oz44K544GM55Sf5oiQ44GV44KM44Gm44GE44Gq44GE5aC05ZCI44Gv5YaF6YOo44Gn44Kk44Oz44K544K/44Oz44K544KS55Sf5oiQ44GZ44KL44CCXG4gICAqXG4gICAqIEByZXR1cm4g44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IExBcHBNb3Rpb25TeW5jTGl2ZTJETWFuYWdlciB7XG4gICAgaWYgKHNfaW5zdGFuY2UgPT0gbnVsbCkge1xuICAgICAgc19pbnN0YW5jZSA9IG5ldyBMQXBwTW90aW9uU3luY0xpdmUyRE1hbmFnZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc19pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnvvIjjgrfjg7PjgrDjg6vjg4jjg7PvvInjgpLop6PmlL7jgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVsZWFzZUluc3RhbmNlKCk6IHZvaWQge1xuICAgIGlmIChzX2luc3RhbmNlICE9IG51bGwpIHtcbiAgICAgIHNfaW5zdGFuY2UgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgc19pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu44K344O844Oz44Gn5L+d5oyB44GX44Gm44GE44KL44Oi44OH44Or44KS6L+U44GZ44CCXG4gICAqXG4gICAqIEBwYXJhbSBubyDjg6Ljg4fjg6vjg6rjgrnjg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICogQHJldHVybiDjg6Ljg4fjg6vjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLov5TjgZnjgILjgqTjg7Pjg4fjg4Pjgq/jgrnlgKTjgYznr4Tlm7LlpJbjga7loLTlkIjjga9OVUxM44KS6L+U44GZ44CCXG4gICAqL1xuICBwdWJsaWMgZ2V0TW9kZWwobm86IG51bWJlcik6IExBcHBNb3Rpb25TeW5jTW9kZWwge1xuICAgIGlmIChubyA8IHRoaXMuX21vZGVscy5nZXRTaXplKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2RlbHMuYXQobm8pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOePvuWcqOOBruOCt+ODvOODs+OBp+S/neaMgeOBl+OBpuOBhOOCi+OBmeOBueOBpuOBruODouODh+ODq+OCkuino+aUvuOBmeOCi1xuICAgKi9cbiAgcHVibGljIHJlbGVhc2VBbGxNb2RlbCgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21vZGVscy5nZXRTaXplKCk7IGkrKykge1xuICAgICAgdGhpcy5fbW9kZWxzLmF0KGkpLnJlbGVhc2UoKTtcbiAgICAgIHRoaXMuX21vZGVscy5zZXQoaSwgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kZWxzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICog55S76Z2i44KS44K/44OD44OX44GX44Gf5pmC44Gu5Yem55CGXG4gICAqXG4gICAqIEBwYXJhbSB4IOeUu+mdouOBrljluqfmqJlcbiAgICogQHBhcmFtIHkg55S76Z2i44GuWeW6p+aomVxuICAgKi9cbiAgcHVibGljIG9uVGFwKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKExBcHBEZWZpbmUuRGVidWdMb2dFbmFibGUpIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKFxuICAgICAgICBgW0FQUF10YXAgcG9pbnQ6IHt4OiAke3gudG9GaXhlZCgyKX0geTogJHt5LnRvRml4ZWQoMil9fWBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+mdouOCkuabtOaWsOOBmeOCi+OBqOOBjeOBruWHpueQhlxuICAgKiDjg6Ljg4fjg6vjga7mm7TmlrDlh6bnkIblj4rjgbPmj4/nlLvlh6bnkIbjgpLooYzjgYZcbiAgICovXG4gIHB1YmxpYyBvblVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhcztcblxuICAgIGNvbnN0IG1vZGVsQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVscy5nZXRTaXplKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZGVsQ291bnQ7ICsraSkge1xuICAgICAgY29uc3QgcHJvamVjdGlvbjogQ3ViaXNtTWF0cml4NDQgPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcbiAgICAgIGNvbnN0IG1vZGVsOiBMQXBwTW90aW9uU3luY01vZGVsID0gdGhpcy5nZXRNb2RlbChpKTtcblxuICAgICAgaWYgKG1vZGVsLmdldE1vZGVsKCkpIHtcbiAgICAgICAgaWYgKG1vZGVsLmdldE1vZGVsKCkuZ2V0Q2FudmFzV2lkdGgoKSA+IDEuMCAmJiB3aWR0aCA8IGhlaWdodCkge1xuICAgICAgICAgIC8vIOaoquOBq+mVt+OBhOODouODh+ODq+OCkue4pumVt+OCpuOCo+ODs+ODieOCpuOBq+ihqOekuuOBmeOCi+mam+ODouODh+ODq+OBruaoquOCteOCpOOCuuOBp3NjYWxl44KS566X5Ye644GZ44KLXG4gICAgICAgICAgbW9kZWwuZ2V0TW9kZWxNYXRyaXgoKS5zZXRXaWR0aCgyLjApO1xuICAgICAgICAgIHByb2plY3Rpb24uc2NhbGUoMS4wLCB3aWR0aCAvIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvamVjdGlvbi5zY2FsZShoZWlnaHQgLyB3aWR0aCwgMS4wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOW/heimgeOBjOOBguOCjOOBsOOBk+OBk+OBp+S5l+eul1xuICAgICAgICBpZiAodGhpcy5fdmlld01hdHJpeCAhPSBudWxsKSB7XG4gICAgICAgICAgcHJvamVjdGlvbi5tdWx0aXBseUJ5TWF0cml4KHRoaXMuX3ZpZXdNYXRyaXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1vZGVsLnVwZGF0ZSgpO1xuICAgICAgbW9kZWwuZHJhdyhwcm9qZWN0aW9uKTsgLy8g5Y+C54Wn5rih44GX44Gq44Gu44GncHJvamVjdGlvbuOBr+WkieizquOBmeOCi+OAglxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmrKHjga7pn7Plo7DjgavliIfjgormm7/jgYjjgotcbiAgICovXG4gIHB1YmxpYyBjaGFuZ2VOZXh0SW5kZXhTb3VuZCgpIHtcbiAgICBjb25zdCBtb2RlbCA9IHRoaXMuX21vZGVscy5hdCgwKTtcblxuICAgIGlmICghbW9kZWwuaXNTdXNwZW5kZWRDdXJyZW50U291bmRDb250ZXh0KCkpIHtcbiAgICAgIG1vZGVsLnN0b3BDdXJyZW50U291bmQoKTtcblxuICAgICAgLy8g44Kk44Oz44OH44OD44Kv44K544KS5pu05pawXG4gICAgICBtb2RlbC5fc291bmRJbmRleCA9XG4gICAgICAgIChtb2RlbC5fc291bmRJbmRleCArIDEpICUgbW9kZWwuX3NvdW5kRmlsZUxpc3QuZ2V0U2l6ZSgpO1xuICAgIH1cbiAgICBtb2RlbC5wbGF5Q3VycmVudFNvdW5kKCk7XG4gIH1cblxuICAvKipcbiAgICog5qyh44Gu44K344O844Oz44Gr5YiH44KK44GL44GI44KLXG4gICAqIOOCteODs+ODl+ODq+OCouODl+ODquOCseODvOOCt+ODp+ODs+OBp+OBr+ODouODh+ODq+OCu+ODg+ODiOOBruWIh+OCiuabv+OBiOOCkuihjOOBhuOAglxuICAgKi9cbiAgcHVibGljIG5leHRTY2VuZSgpOiB2b2lkIHtcbiAgICBjb25zdCBubzogbnVtYmVyID1cbiAgICAgICh0aGlzLl9zY2VuZUluZGV4ICsgMSkgJSBMYXBwTW90aW9uU3luY0RlZmluZS5Nb2RlbERpclNpemU7XG4gICAgdGhpcy5jaGFuZ2VTY2VuZShubyk7XG4gIH1cblxuICAvKipcbiAgICog44K344O844Oz44KS5YiH44KK5pu/44GI44KLXG4gICAqIOOCteODs+ODl+ODq+OCouODl+ODquOCseODvOOCt+ODp+ODs+OBp+OBr+ODouODh+ODq+OCu+ODg+ODiOOBruWIh+OCiuabv+OBiOOCkuihjOOBhuOAglxuICAgKi9cbiAgcHVibGljIGNoYW5nZVNjZW5lKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zY2VuZUluZGV4ID0gaW5kZXg7XG4gICAgaWYgKExBcHBEZWZpbmUuRGVidWdMb2dFbmFibGUpIHtcbiAgICAgIExBcHBQYWwucHJpbnRNZXNzYWdlKGBbQVBQXW1vZGVsIGluZGV4OiAke3RoaXMuX3NjZW5lSW5kZXh9YCk7XG4gICAgfVxuXG4gICAgLy8gTW9kZWxEaXJbXeOBq+S/neaMgeOBl+OBn+ODh+OCo+ODrOOCr+ODiOODquWQjeOBi+OCiVxuICAgIC8vIG1vZGVsMy5qc29u44Gu44OR44K544KS5rG65a6a44GZ44KL44CCXG4gICAgLy8g44OH44Kj44Os44Kv44OI44Oq5ZCN44GobW9kZWwzLmpzb27jga7lkI3liY3jgpLkuIDoh7TjgZXjgZvjgabjgYrjgY/jgZPjgajjgIJcbiAgICBjb25zdCBtb2RlbDogc3RyaW5nID0gTGFwcE1vdGlvblN5bmNEZWZpbmUuTW9kZWxEaXJbaW5kZXhdO1xuICAgIGNvbnN0IG1vZGVsUGF0aDogc3RyaW5nID0gTGFwcE1vdGlvblN5bmNEZWZpbmUuUmVzb3VyY2VzUGF0aCArIG1vZGVsICsgJy8nO1xuICAgIGxldCBtb2RlbEpzb25OYW1lOiBzdHJpbmcgPSBMYXBwTW90aW9uU3luY0RlZmluZS5Nb2RlbERpcltpbmRleF07XG4gICAgbW9kZWxKc29uTmFtZSArPSAnLm1vZGVsMy5qc29uJztcblxuICAgIHRoaXMucmVsZWFzZUFsbE1vZGVsKCk7XG4gICAgdGhpcy5fbW9kZWxzLnB1c2hCYWNrKG5ldyBMQXBwTW90aW9uU3luY01vZGVsKCkpO1xuICAgIHRoaXMuX21vZGVscy5hdCgwKS5sb2FkQXNzZXRzKG1vZGVsUGF0aCwgbW9kZWxKc29uTmFtZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Vmlld01hdHJpeChtOiBDdWJpc21NYXRyaXg0NCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgdGhpcy5fdmlld01hdHJpeC5nZXRBcnJheSgpW2ldID0gbS5nZXRBcnJheSgpW2ldO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBuZXcgQ3ViaXNtTWF0cml4NDQoKTtcbiAgICB0aGlzLl9tb2RlbHMgPSBuZXcgY3NtVmVjdG9yPExBcHBNb3Rpb25TeW5jTW9kZWw+KCk7XG4gICAgdGhpcy5fc2NlbmVJbmRleCA9IDA7XG4gICAgdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLl9zY2VuZUluZGV4KTtcbiAgfVxuXG4gIF92aWV3TWF0cml4OiBDdWJpc21NYXRyaXg0NDsgLy8g44Oi44OH44Or5o+P55S744Gr55So44GE44KLdmlld+ihjOWIl1xuICBfbW9kZWxzOiBjc21WZWN0b3I8TEFwcE1vdGlvblN5bmNNb2RlbD47IC8vIOODouODh+ODq+OCpOODs+OCueOCv+ODs+OCueOBruOCs+ODs+ODhuODilxuICBfc2NlbmVJbmRleDogbnVtYmVyOyAvLyDooajnpLrjgZnjgovjgrfjg7zjg7Pjga7jgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmxpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCAnd2hhdHdnLWZldGNoJztcblxuaW1wb3J0IHsgQ3ViaXNtSWRIYW5kbGUgfSBmcm9tICdAZnJhbWV3b3JrL2lkL2N1YmlzbWlkJztcbmltcG9ydCB7IEN1YmlzbU1hdHJpeDQ0IH0gZnJvbSAnQGZyYW1ld29yay9tYXRoL2N1YmlzbW1hdHJpeDQ0JztcbmltcG9ydCB7IEN1YmlzbVVzZXJNb2RlbCB9IGZyb20gJ0BmcmFtZXdvcmsvbW9kZWwvY3ViaXNtdXNlcm1vZGVsJztcbmltcG9ydCB7IGNzbU1hcCB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21tYXAnO1xuaW1wb3J0IHsgY3NtUmVjdCB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc21yZWN0Zic7XG5pbXBvcnQgeyBjc21TdHJpbmcgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3Ntc3RyaW5nJztcbmltcG9ydCB7IGNzbVZlY3RvciB9IGZyb20gJ0BmcmFtZXdvcmsvdHlwZS9jc212ZWN0b3InO1xuaW1wb3J0IHtcbiAgQ1NNX0FTU0VSVCxcbiAgQ3ViaXNtTG9nRXJyb3IsXG4gIEN1YmlzbUxvZ0luZm9cbn0gZnJvbSAnQGZyYW1ld29yay91dGlscy9jdWJpc21kZWJ1Zyc7XG5cbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnQGN1YmlzbXNka3NhbXBsZXMvbGFwcGRlZmluZSc7XG5pbXBvcnQgKiBhcyBMQXBwTW90aW9uU3luY0RlZmluZSBmcm9tICcuL2xhcHBtb3Rpb25zeW5jZGVmaW5lJztcbmltcG9ydCB7IGZyYW1lQnVmZmVyLCBMQXBwTW90aW9uU3luY0RlbGVnYXRlIH0gZnJvbSAnLi9sYXBwbW90aW9uc3luY2RlbGVnYXRlJztcbmltcG9ydCB7IExBcHBQYWwgfSBmcm9tICdAY3ViaXNtc2Rrc2FtcGxlcy9sYXBwcGFsJztcbmltcG9ydCB7IFRleHR1cmVJbmZvIH0gZnJvbSAnQGN1YmlzbXNka3NhbXBsZXMvbGFwcHRleHR1cmVtYW5hZ2VyJztcbmltcG9ydCB7IEN1YmlzbU1vYyB9IGZyb20gJ0BmcmFtZXdvcmsvbW9kZWwvY3ViaXNtbW9jJztcbmltcG9ydCB7IEN1YmlzbU1vZGVsTW90aW9uU3luY1NldHRpbmdKc29uIH0gZnJvbSAnQG1vdGlvbnN5bmNmcmFtZXdvcmsvY3ViaXNtbW9kZWxtb3Rpb25zeW5jc2V0dGluZ2pzb24nO1xuaW1wb3J0IHsgTEFwcFBsYXlTb3VuZCB9IGZyb20gJy4vbGFwcHBsYXlzb3VuZCc7XG5pbXBvcnQgeyBDdWJpc21Nb3Rpb25TeW5jIH0gZnJvbSAnQG1vdGlvbnN5bmNmcmFtZXdvcmsvbGl2ZTJkY3ViaXNtbW90aW9uc3luYyc7XG5pbXBvcnQgeyBjYW52YXMsIGdsIH0gZnJvbSAnQGN1YmlzbXNka3NhbXBsZXMvbGFwcGdsbWFuYWdlcic7XG5cbmVudW0gTG9hZFN0ZXAge1xuICBMb2FkQXNzZXRzLFxuICBMb2FkTW9kZWwsXG4gIFdhaXRMb2FkTW9kZWwsXG4gIExvYWRFeHByZXNzaW9uLFxuICBXYWl0TG9hZEV4cHJlc3Npb24sXG4gIExvYWRQaHlzaWNzLFxuICBXYWl0TG9hZFBoeXNpY3MsXG4gIExvYWRQb3NlLFxuICBXYWl0TG9hZFBvc2UsXG4gIFNldHVwRXllQmxpbmssXG4gIFNldHVwQnJlYXRoLFxuICBMb2FkVXNlckRhdGEsXG4gIFdhaXRMb2FkVXNlckRhdGEsXG4gIFNldHVwRXllQmxpbmtJZHMsXG4gIFNldHVwTGlwU3luY0lkcyxcbiAgU2V0dXBMYXlvdXQsXG4gIExvYWRNb3Rpb25TeW5jLFxuICBMb2FkTW90aW9uLFxuICBXYWl0TG9hZE1vdGlvbixcbiAgQ29tcGxldGVJbml0aWFsaXplLFxuICBDb21wbGV0ZVNldHVwTW9kZWwsXG4gIExvYWRUZXh0dXJlLFxuICBXYWl0TG9hZFRleHR1cmUsXG4gIENvbXBsZXRlU2V0dXBcbn1cblxuLyoqXG4gKiDjg6bjg7zjgrbjg7zjgYzlrp/pmpvjgavkvb/nlKjjgZnjgovjg6Ljg4fjg6vjga7lrp/oo4Xjgq/jg6njgrk8YnI+XG4gKiDjg6Ljg4fjg6vnlJ/miJDjgIHmqZ/og73jgrPjg7Pjg53jg7zjg43jg7Pjg4jnlJ/miJDjgIHmm7TmlrDlh6bnkIbjgajjg6zjg7Pjg4Djg6rjg7PjgrDjga7lkbzjgbPlh7rjgZfjgpLooYzjgYbjgIJcbiAqL1xuZXhwb3J0IGNsYXNzIExBcHBNb3Rpb25TeW5jTW9kZWwgZXh0ZW5kcyBDdWJpc21Vc2VyTW9kZWwge1xuICAvKipcbiAgICogbW9kZWwzLmpzb27jgYznva7jgYvjgozjgZ/jg4fjgqPjg6zjgq/jg4jjg6rjgajjg5XjgqHjgqTjg6vjg5HjgrnjgYvjgonjg6Ljg4fjg6vjgpLnlJ/miJDjgZnjgotcbiAgICogQHBhcmFtIGRpclxuICAgKiBAcGFyYW0gZmlsZU5hbWVcbiAgICovXG4gIHB1YmxpYyBsb2FkQXNzZXRzKGRpcjogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbW9kZWxIb21lRGlyID0gZGlyO1xuXG4gICAgZmV0Y2goYCR7dGhpcy5fbW9kZWxIb21lRGlyfSR7ZmlsZU5hbWV9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiB7XG4gICAgICAgIGNvbnN0IHNldHRpbmc6IEN1YmlzbU1vZGVsTW90aW9uU3luY1NldHRpbmdKc29uID1cbiAgICAgICAgICBuZXcgQ3ViaXNtTW9kZWxNb3Rpb25TeW5jU2V0dGluZ0pzb24oXG4gICAgICAgICAgICBhcnJheUJ1ZmZlcixcbiAgICAgICAgICAgIGFycmF5QnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICAgICApO1xuXG4gICAgICAgIC8vIOOCueODhuODvOODiOOCkuabtOaWsFxuICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLkxvYWRNb2RlbDtcblxuICAgICAgICAvLyDntZDmnpzjgpLkv53lrZhcbiAgICAgICAgdGhpcy5zZXR1cE1vZGVsKHNldHRpbmcpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogbW9kZWwzLmpzb27jgYvjgonjg6Ljg4fjg6vjgpLnlJ/miJDjgZnjgovjgIJcbiAgICogbW9kZWwzLmpzb27jga7oqJjov7DjgavlvpPjgaPjgabjg6Ljg4fjg6vnlJ/miJDjgIHjg6Ljg7zjgrfjg6fjg7PjgIHniannkIbmvJTnrpfjgarjganjga7jgrPjg7Pjg53jg7zjg43jg7Pjg4jnlJ/miJDjgpLooYzjgYbjgIJcbiAgICpcbiAgICogQHBhcmFtIHNldHRpbmcgSUN1YmlzbU1vZGVsU2V0dGluZ+OBruOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgcHJpdmF0ZSBzZXR1cE1vZGVsKHNldHRpbmc6IEN1YmlzbU1vZGVsTW90aW9uU3luY1NldHRpbmdKc29uKTogdm9pZCB7XG4gICAgdGhpcy5fdXBkYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9tb2RlbFNldHRpbmcgPSBzZXR0aW5nO1xuXG4gICAgLy8gQ3ViaXNtTW9kZWxcbiAgICBpZiAodGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vZGVsRmlsZU5hbWUoKSAhPSAnJykge1xuICAgICAgY29uc3QgbW9kZWxGaWxlTmFtZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb2RlbEZpbGVOYW1lKCk7XG5cbiAgICAgIGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vZGVsRmlsZU5hbWV9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZE1vZGVsKGFycmF5QnVmZmVyLCB0aGlzLl9tb2NDb25zaXN0ZW5jeSk7XG5cbiAgICAgICAgICB0aGlzLl9zdGF0ZSA9IExvYWRTdGVwLlNldHVwTGF5b3V0O1xuXG4gICAgICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgICAgICBzZXR1cExheW91dCgpO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5XYWl0TG9hZE1vZGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnTW9kZWwgZGF0YSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICB9XG5cbiAgICAvLyBMYXlvdXRcbiAgICBjb25zdCBzZXR1cExheW91dCA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGNvbnN0IGxheW91dDogY3NtTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBjc21NYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cbiAgICAgIGlmICh0aGlzLl9tb2RlbFNldHRpbmcgPT0gbnVsbCB8fCB0aGlzLl9tb2RlbE1hdHJpeCA9PSBudWxsKSB7XG4gICAgICAgIEN1YmlzbUxvZ0Vycm9yKCdGYWlsZWQgdG8gc2V0dXBMYXlvdXQoKS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TGF5b3V0TWFwKGxheW91dCk7XG4gICAgICB0aGlzLl9tb2RlbE1hdHJpeC5zZXR1cEZyb21MYXlvdXQobGF5b3V0KTtcbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuTG9hZE1vdGlvblN5bmM7XG5cbiAgICAgIC8vIE1vdGlvblN5bmNcbiAgICAgIHNldHVwTW90aW9uU3luYygpO1xuICAgIH07XG5cbiAgICAvLyBNb3Rpb25TeW5jXG4gICAgY29uc3Qgc2V0dXBNb3Rpb25TeW5jID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25TeW5jRmlsZU5hbWUoKSAhPSAnJykge1xuICAgICAgICBjb25zdCBtb3Rpb25TeW5jRmlsZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb3Rpb25TeW5jRmlsZU5hbWUoKTtcblxuICAgICAgICBmZXRjaChgJHt0aGlzLl9tb2RlbEhvbWVEaXJ9JHttb3Rpb25TeW5jRmlsZX1gKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkTW90aW9uU3luYyhhcnJheUJ1ZmZlciwgYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgICAvLyDpn7Plo7Djg5XjgqHjgqTjg6vjga7oqq3jgb/ovrzjgb9cbiAgICAgICAgICAgIHRoaXMuX3NvdW5kRmlsZUxpc3QgPVxuICAgICAgICAgICAgdGhpcy5fbW9kZWxTZXR0aW5nLmdldE1vdGlvblN5bmNTb3VuZEZpbGVMaXN0KCk7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZEluZGV4ID0gMDtcbiAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZEZyb21Tb3VuZExpc3QoKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkVGV4dHVyZTtcblxuICAgICAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgICAgICAgICAgdGhpcy5zZXR1cFRleHR1cmVzKCk7XG4gICAgICAgICAgICB0aGlzLmdldFJlbmRlcmVyKCkuc3RhcnRVcChnbCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg7zjgrfjg6fjg7Pjgrfjg7Pjgq/jg4fjg7zjgr/jga7oqq3jgb/ovrzjgb9cbiAgICogQHBhcmFtIGJ1ZmZlciAgcGh5c2ljczMuanNvbuOBjOiqreOBv+i+vOOBvuOCjOOBpuOBhOOCi+ODkOODg+ODleOCoVxuICAgKiBAcGFyYW0gc2l6ZSAgICDjg5Djg4Pjg5XjgqHjga7jgrXjgqTjgrpcbiAgICovXG4gIHByaXZhdGUgbG9hZE1vdGlvblN5bmMoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbW90aW9uU3luYyA9IEN1YmlzbU1vdGlvblN5bmMuY3JlYXRlKFxuICAgICAgdGhpcy5fbW9kZWwsXG4gICAgICBidWZmZXIsXG4gICAgICBzaXplLFxuICAgICAgTEFwcE1vdGlvblN5bmNEZWZpbmUuU2FtcGxlc1BlclNlY1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICog44OG44Kv44K544OB44Oj44Om44OL44OD44OI44Gr44OG44Kv44K544OB44Oj44KS44Ot44O844OJ44GZ44KLXG4gICAqL1xuICBwcml2YXRlIHNldHVwVGV4dHVyZXMoKTogdm9pZCB7XG4gICAgLy8gaVBob25l44Gn44Gu44Ki44Or44OV44Kh5ZOB6LOq5ZCR5LiK44Gu44Gf44KBVHlwZXNjcmlwdOOBp+OBr3ByZW11bHRpcGxpZWRBbHBoYeOCkuaOoeeUqFxuICAgIGNvbnN0IHVzZVByZW11bHRpcGx5ID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9zdGF0ZSA9PSBMb2FkU3RlcC5Mb2FkVGV4dHVyZSkge1xuICAgICAgLy8g44OG44Kv44K544OB44Oj6Kqt44G/6L6844G/55SoXG4gICAgICBjb25zdCB0ZXh0dXJlQ291bnQ6IG51bWJlciA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRUZXh0dXJlQ291bnQoKTtcblxuICAgICAgZm9yIChcbiAgICAgICAgbGV0IG1vZGVsVGV4dHVyZU51bWJlciA9IDA7XG4gICAgICAgIG1vZGVsVGV4dHVyZU51bWJlciA8IHRleHR1cmVDb3VudDtcbiAgICAgICAgbW9kZWxUZXh0dXJlTnVtYmVyKytcbiAgICAgICkge1xuICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PlkI3jgYznqbrmloflrZfjgaDjgaPjgZ/loLTlkIjjga/jg63jg7zjg4njg7vjg5DjgqTjg7Pjg4nlh6bnkIbjgpLjgrnjgq3jg4Pjg5dcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRUZXh0dXJlRmlsZU5hbWUobW9kZWxUZXh0dXJlTnVtYmVyKSA9PSAnJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRUZXh0dXJlRmlsZU5hbWUgbnVsbCcpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2ViR0zjga7jg4bjgq/jgrnjg4Hjg6Pjg6bjg4vjg4Pjg4jjgavjg4bjgq/jgrnjg4Hjg6PjgpLjg63jg7zjg4njgZnjgotcbiAgICAgICAgbGV0IHRleHR1cmVQYXRoID1cbiAgICAgICAgICB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0VGV4dHVyZUZpbGVOYW1lKG1vZGVsVGV4dHVyZU51bWJlcik7XG4gICAgICAgIHRleHR1cmVQYXRoID0gdGhpcy5fbW9kZWxIb21lRGlyICsgdGV4dHVyZVBhdGg7XG5cbiAgICAgICAgLy8g44Ot44O844OJ5a6M5LqG5pmC44Gr5ZG844Gz5Ye644GZ44Kz44O844Or44OQ44OD44Kv6Zai5pWwXG4gICAgICAgIGNvbnN0IG9uTG9hZCA9ICh0ZXh0dXJlSW5mbzogVGV4dHVyZUluZm8pOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLmdldFJlbmRlcmVyKCkuYmluZFRleHR1cmUobW9kZWxUZXh0dXJlTnVtYmVyLCB0ZXh0dXJlSW5mby5pZCk7XG5cbiAgICAgICAgICB0aGlzLl90ZXh0dXJlQ291bnQrKztcblxuICAgICAgICAgIGlmICh0aGlzLl90ZXh0dXJlQ291bnQgPj0gdGV4dHVyZUNvdW50KSB7XG4gICAgICAgICAgICAvLyDjg63jg7zjg4nlrozkuoZcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuQ29tcGxldGVTZXR1cDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g6Kqt44G/6L6844G/XG4gICAgICAgIExBcHBNb3Rpb25TeW5jRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKVxuICAgICAgICAgIC5nZXRUZXh0dXJlTWFuYWdlcigpXG4gICAgICAgICAgLmNyZWF0ZVRleHR1cmVGcm9tUG5nRmlsZSh0ZXh0dXJlUGF0aCwgdXNlUHJlbXVsdGlwbHksIG9uTG9hZCk7XG4gICAgICAgIHRoaXMuZ2V0UmVuZGVyZXIoKS5zZXRJc1ByZW11bHRpcGxpZWRBbHBoYSh1c2VQcmVtdWx0aXBseSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0YXRlID0gTG9hZFN0ZXAuV2FpdExvYWRUZXh0dXJlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njgpLlho3mp4vnr4njgZnjgotcbiAgICovXG4gIHB1YmxpYyByZWxvYWRSZW5kZXJlcigpOiB2b2lkIHtcbiAgICB0aGlzLmRlbGV0ZVJlbmRlcmVyKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuICAgIHRoaXMuc2V0dXBUZXh0dXJlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmfs+WjsOODleOCoeOCpOODq+ODquOCueODiOOBi+OCieiqreOBv+i+vOOBv+OCkuihjOOBhuOAglxuICAgKi9cbiAgcHVibGljIGxvYWRGcm9tU291bmRMaXN0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fc291bmRGaWxlTGlzdCB8fCAhdGhpcy5fc291bmREYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc291bmREYXRhLmdldFNvdW5kQnVmZmVyQ29udGV4dCgpLmdldEF1ZGlvTWFuYWdlcigpLl9hdWRpb3MucmVzaXplKHRoaXMuX3NvdW5kRmlsZUxpc3QuZ2V0U2l6ZSgpKTtcbiAgICB0aGlzLl9zb3VuZERhdGEuZ2V0U291bmRCdWZmZXJDb250ZXh0KCkuZ2V0QnVmZmVycygpLnJlc2l6ZSh0aGlzLl9zb3VuZEZpbGVMaXN0LmdldFNpemUoKSk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fc291bmRGaWxlTGlzdC5nZXRTaXplKCk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5fbW9kZWxIb21lRGlyICsgdGhpcy5fc291bmRGaWxlTGlzdC5hdChpbmRleCkucztcbiAgICAgIHRoaXMuX3NvdW5kRGF0YS5sb2FkRmlsZShmaWxlUGF0aCwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDnj77lnKjjga7pn7Plo7Djga7jgrPjg7Pjg4bjgq3jgrnjg4jjgYzlvoXmqZ/nirbmhYvjgYvjganjgYbjgYvjgpLliKTlrprjgZnjgotcbiAgICpcbiAgICogQHJldHVybnMg54++5Zyo44Gu6Z+z5aOw44Gu44Kz44Oz44OG44Kt44K544OI44GM5b6F5qmf54q25oWL44GL77yfXG4gICAqL1xuICBwdWJsaWMgaXNTdXNwZW5kZWRDdXJyZW50U291bmRDb250ZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3VuZERhdGEuaXNTdXNwZW5kZWRDb250ZXh0QnlJbmRleCh0aGlzLl9zb3VuZEluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnj77lnKjjga7pn7Plo7DjgpLlho3nlJ/jgZnjgotcbiAgICovXG4gIHB1YmxpYyBwbGF5Q3VycmVudFNvdW5kKCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICF0aGlzLl9zb3VuZERhdGEgfHxcbiAgICAgICF0aGlzLl9zb3VuZEZpbGVMaXN0IHx8XG4gICAgICAhKHRoaXMuX3NvdW5kSW5kZXggPCB0aGlzLl9zb3VuZEZpbGVMaXN0LmdldFNpemUoKSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb3Rpb25TeW5jLnNldFNvdW5kQnVmZmVyKFxuICAgICAgMCxcbiAgICAgIHRoaXMuX3NvdW5kRGF0YVxuICAgICAgICAuZ2V0U291bmRCdWZmZXJDb250ZXh0KClcbiAgICAgICAgLmdldEJ1ZmZlcnMoKVxuICAgICAgICAuYXQodGhpcy5fc291bmRJbmRleClcbiAgICApO1xuXG4gICAgdGhpcy5fc291bmREYXRhLnBsYXlCeUluZGV4KHRoaXMuX3NvdW5kSW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOePvuWcqOOBrumfs+WjsOOCkuWGjeeUn+WBnOatouOBmeOCi1xuICAgKi9cbiAgcHVibGljIHN0b3BDdXJyZW50U291bmQoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuX3NvdW5kRGF0YSB8fFxuICAgICAgIXRoaXMuX3NvdW5kRmlsZUxpc3QgfHxcbiAgICAgICEodGhpcy5fc291bmRJbmRleCA8IHRoaXMuX3NvdW5kRmlsZUxpc3QuZ2V0U2l6ZSgpKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NvdW5kRGF0YS5zdG9wQnlJbmRleCh0aGlzLl9zb3VuZEluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrBcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N0YXRlICE9IExvYWRTdGVwLkNvbXBsZXRlU2V0dXApIHJldHVybjtcblxuICAgIGNvbnN0IGRlbHRhVGltZVNlY29uZHM6IG51bWJlciA9IExBcHBQYWwuZ2V0RGVsdGFUaW1lKCk7XG4gICAgdGhpcy5fdXNlclRpbWVTZWNvbmRzICs9IGRlbHRhVGltZVNlY29uZHM7XG5cbiAgICAvLyDniannkIbmvJTnrpfjga7oqK3lrppcbiAgICBpZiAodGhpcy5fcGh5c2ljcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9waHlzaWNzLmV2YWx1YXRlKHRoaXMuX21vZGVsLCBkZWx0YVRpbWVTZWNvbmRzKTtcbiAgICB9XG5cbiAgICAvLyDjg53jg7zjgrrjga7oqK3lrppcbiAgICBpZiAodGhpcy5fcG9zZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3NlLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5fbW9kZWwsIGRlbHRhVGltZVNlY29uZHMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zb3VuZERhdGEuaXNQbGF5QnlJbmRleCh0aGlzLl9zb3VuZEluZGV4KSkge1xuICAgICAgLy8g54++5Zyo44Gu44OV44Os44O844Og44Gu44OH44O844K/44KS5Y+W5b6XXG4gICAgICB0aGlzLl9zb3VuZERhdGEudXBkYXRlKCk7XG5cbiAgICAgIC8vIOOCteOCpuODs+ODieODkOODg+ODleOCoeOCkuaWsOOBl+OBhOOCguOBruOBuOabtOaWsFxuICAgICAgdGhpcy5fbW90aW9uU3luYy5zZXRTb3VuZEJ1ZmZlcigwLCB0aGlzLl9zb3VuZERhdGEuZ2V0U291bmRCdWZmZXJDb250ZXh0KCkuZ2V0QnVmZmVycygpLmF0KHRoaXMuX3NvdW5kSW5kZXgpKTtcblxuICAgICAgLy8g54++5Zyo44Gu44OV44Os44O844Og44Gu44OH44O844K/44GL44KJ6Kej5p6Q5Yem55CG44KS6KGM44GGXG4gICAgICB0aGlzLl9tb3Rpb25TeW5jLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5fbW9kZWwsIGRlbHRhVGltZVNlY29uZHMpO1xuXG4gICAgICAvLyDnj77lnKjjga7jg5Xjg6zjg7zjg6Djgafjga7op6PmnpDjgZfjgZ/jgrXjg7Pjg5fjg6vmlbBcbiAgICAgIGNvbnN0IHByb2Nlc3NlZENvdW50ID0gdGhpcy5fbW90aW9uU3luYy5nZXRMYXN0VG90YWxQcm9jZXNzZWRDb3VudCgwKTtcblxuICAgICAgLy8g6Kej5p6Q44GX44Gf5pWw44Gg44GR44OH44O844K/44Gu6YWN5YiX44Gu5YWI6aCt44GL44KJ5YmK6ZmkXG4gICAgICB0aGlzLl9zb3VuZERhdGEucmVtb3ZlRGF0YUFycmF5QnlJbmRleCh0aGlzLl9zb3VuZEluZGV4LCBwcm9jZXNzZWRDb3VudCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kZWwudXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICog44Kk44OZ44Oz44OI44Gu55m654Gr44KS5Y+X44GR5Y+W44KLXG4gICAqL1xuICBwdWJsaWMgbW90aW9uRXZlbnRGaXJlZChldmVudFZhbHVlOiBjc21TdHJpbmcpOiB2b2lkIHtcbiAgICBDdWJpc21Mb2dJbmZvKCd7MH0gaXMgZmlyZWQgb24gTEFwcE1vZGVsISEnLCBldmVudFZhbHVlLnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+OBn+OCiuWIpOWumuODhuOCueODiFxuICAgKiDmjIflrprvvKnvvKTjga7poILngrnjg6rjgrnjg4jjgYvjgonnn6nlvaLjgpLoqIjnrpfjgZfjgIHluqfmqJnjgpLjgYznn6nlvaLnr4Tlm7LlhoXjgYvliKTlrprjgZnjgovjgIJcbiAgICpcbiAgICogQHBhcmFtIGhpdEFyZW5hTmFtZSAg5b2T44Gf44KK5Yik5a6a44KS44OG44K544OI44GZ44KL5a++6LGh44GuSURcbiAgICogQHBhcmFtIHggICAgICAgICAgICAg5Yik5a6a44KS6KGM44GGWOW6p+aomVxuICAgKiBAcGFyYW0geSAgICAgICAgICAgICDliKTlrprjgpLooYzjgYZZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgaGl0VGVzdChoaXRBcmVuYU5hbWU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAvLyDpgI/mmI7mmYLjga/lvZPjgZ/jgorliKTlrprnhKHjgZfjgIJcbiAgICBpZiAodGhpcy5fb3BhY2l0eSA8IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb3VudDogbnVtYmVyID0gdGhpcy5fbW9kZWxTZXR0aW5nLmdldEhpdEFyZWFzQ291bnQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRIaXRBcmVhTmFtZShpKSA9PSBoaXRBcmVuYU5hbWUpIHtcbiAgICAgICAgY29uc3QgZHJhd0lkOiBDdWJpc21JZEhhbmRsZSA9IHRoaXMuX21vZGVsU2V0dGluZy5nZXRIaXRBcmVhSWQoaSk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSGl0KGRyYXdJZCwgeCwgeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODh+ODq+OCkuaPj+eUu+OBmeOCi+WHpueQhuOAguODouODh+ODq+OCkuaPj+eUu+OBmeOCi+epuumWk+OBrlZpZXctUHJvamVjdGlvbuihjOWIl+OCkua4oeOBmeOAglxuICAgKi9cbiAgcHVibGljIGRvRHJhdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544K144Kk44K644KS5rih44GZXG4gICAgY29uc3Qgdmlld3BvcnQ6IG51bWJlcltdID0gWzAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF07XG5cbiAgICB0aGlzLmdldFJlbmRlcmVyKCkuc2V0UmVuZGVyU3RhdGUoZnJhbWVCdWZmZXIsIHZpZXdwb3J0KTtcbiAgICB0aGlzLmdldFJlbmRlcmVyKCkuZHJhd01vZGVsKCk7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OH44Or44KS5o+P55S744GZ44KL5Yem55CG44CC44Oi44OH44Or44KS5o+P55S744GZ44KL56m66ZaT44GuVmlldy1Qcm9qZWN0aW9u6KGM5YiX44KS5rih44GZ44CCXG4gICAqL1xuICBwdWJsaWMgZHJhdyhtYXRyaXg6IEN1YmlzbU1hdHJpeDQ0KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21vZGVsID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDlkIToqq3jgb/ovrzjgb/ntYLkuoblvoxcbiAgICBpZiAodGhpcy5fc3RhdGUgPT0gTG9hZFN0ZXAuQ29tcGxldGVTZXR1cCkge1xuICAgICAgbWF0cml4Lm11bHRpcGx5QnlNYXRyaXgodGhpcy5fbW9kZWxNYXRyaXgpO1xuXG4gICAgICB0aGlzLmdldFJlbmRlcmVyKCkuc2V0TXZwTWF0cml4KG1hdHJpeCk7XG5cbiAgICAgIHRoaXMuZG9EcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGhhc01vY0NvbnNpc3RlbmN5RnJvbUZpbGUoKSB7XG4gICAgQ1NNX0FTU0VSVCh0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW9kZWxGaWxlTmFtZSgpLmxvY2FsZUNvbXBhcmUoYGApKTtcblxuICAgIC8vIEN1YmlzbU1vZGVsXG4gICAgaWYgKHRoaXMuX21vZGVsU2V0dGluZy5nZXRNb2RlbEZpbGVOYW1lKCkgIT0gJycpIHtcbiAgICAgIGNvbnN0IG1vZGVsRmlsZU5hbWUgPSB0aGlzLl9tb2RlbFNldHRpbmcuZ2V0TW9kZWxGaWxlTmFtZSgpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuX21vZGVsSG9tZURpcn0ke21vZGVsRmlsZU5hbWV9YCk7XG4gICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG5cbiAgICAgIHRoaXMuX2NvbnNpc3RlbmN5ID0gQ3ViaXNtTW9jLmhhc01vY0NvbnNpc3RlbmN5KGFycmF5QnVmZmVyKTtcblxuICAgICAgaWYgKCF0aGlzLl9jb25zaXN0ZW5jeSkge1xuICAgICAgICBDdWJpc21Mb2dJbmZvKCdJbmNvbnNpc3RlbnQgTU9DMy4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEN1YmlzbUxvZ0luZm8oJ0NvbnNpc3RlbnQgTU9DMy4nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2NvbnNpc3RlbmN5O1xuICAgIH0gZWxzZSB7XG4gICAgICBMQXBwUGFsLnByaW50TWVzc2FnZSgnTW9kZWwgZGF0YSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX21vZGVsU2V0dGluZyA9IG51bGw7XG4gICAgdGhpcy5fbW9kZWxIb21lRGlyID0gbnVsbDtcbiAgICB0aGlzLl91c2VyVGltZVNlY29uZHMgPSAwLjA7XG5cbiAgICB0aGlzLl9oaXRBcmVhID0gbmV3IGNzbVZlY3Rvcjxjc21SZWN0PigpO1xuICAgIHRoaXMuX3VzZXJBcmVhID0gbmV3IGNzbVZlY3Rvcjxjc21SZWN0PigpO1xuXG4gICAgaWYgKExBcHBEZWZpbmUuTU9DQ29uc2lzdGVuY3lWYWxpZGF0aW9uRW5hYmxlKSB7XG4gICAgICB0aGlzLl9tb2NDb25zaXN0ZW5jeSA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUgPSBMb2FkU3RlcC5Mb2FkQXNzZXRzO1xuICAgIHRoaXMuX2V4cHJlc3Npb25Db3VudCA9IDA7XG4gICAgdGhpcy5fdGV4dHVyZUNvdW50ID0gMDtcbiAgICB0aGlzLl9tb3Rpb25Db3VudCA9IDA7XG4gICAgdGhpcy5fYWxsTW90aW9uQ291bnQgPSAwO1xuICAgIHRoaXMuX2NvbnNpc3RlbmN5ID0gZmFsc2U7XG4gICAgdGhpcy5fc291bmRGaWxlTGlzdCA9IG5ldyBjc21WZWN0b3I8Y3NtU3RyaW5nPigpO1xuICAgIHRoaXMuX3NvdW5kSW5kZXggPSAwO1xuICAgIHRoaXMuX3NvdW5kRGF0YSA9IG5ldyBMQXBwUGxheVNvdW5kKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVsZWFzZSgpOiB2b2lkIHtcbiAgICBzdXBlci5yZWxlYXNlKCk7XG5cbiAgICBpZih0aGlzLl9tb3Rpb25TeW5jKXtcbiAgICAgIHRoaXMuX21vdGlvblN5bmMucmVsZWFzZSgpO1xuICAgICAgdGhpcy5fbW90aW9uU3luYyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYodGhpcy5fc291bmRGaWxlTGlzdCl7XG4gICAgICB0aGlzLl9zb3VuZEZpbGVMaXN0Py5jbGVhcigpO1xuICAgICAgdGhpcy5fc291bmRGaWxlTGlzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYodGhpcy5fc291bmREYXRhKXtcbiAgICAgIHRoaXMuX3NvdW5kRGF0YT8ucmVsZWFzZSgpO1xuICAgICAgdGhpcy5fc291bmREYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBfbW9kZWxTZXR0aW5nOiBDdWJpc21Nb2RlbE1vdGlvblN5bmNTZXR0aW5nSnNvbjsgLy8g44Oi44OH44Or44K744OD44OG44Kj44Oz44Kw5oOF5aCxXG4gIF9tb2RlbEhvbWVEaXI6IHN0cmluZzsgLy8g44Oi44OH44Or44K744OD44OG44Kj44Oz44Kw44GM572u44GL44KM44Gf44OH44Kj44Os44Kv44OI44OqXG4gIF91c2VyVGltZVNlY29uZHM6IG51bWJlcjsgLy8g44OH44Or44K/5pmC6ZaT44Gu56mN566X5YCkW+enkl1cblxuICBfaGl0QXJlYTogY3NtVmVjdG9yPGNzbVJlY3Q+O1xuICBfdXNlckFyZWE6IGNzbVZlY3Rvcjxjc21SZWN0PjtcblxuICBfc3RhdGU6IExvYWRTdGVwOyAvLyDnj77lnKjjga7jgrnjg4bjg7zjgr/jgrnnrqHnkIbnlKhcbiAgX2V4cHJlc3Npb25Db3VudDogbnVtYmVyOyAvLyDooajmg4Xjg4fjg7zjgr/jgqvjgqbjg7Pjg4hcbiAgX3RleHR1cmVDb3VudDogbnVtYmVyOyAvLyDjg4bjgq/jgrnjg4Hjg6Pjgqvjgqbjg7Pjg4hcbiAgX21vdGlvbkNvdW50OiBudW1iZXI7IC8vIOODouODvOOCt+ODp+ODs+ODh+ODvOOCv+OCq+OCpuODs+ODiFxuICBfYWxsTW90aW9uQ291bnQ6IG51bWJlcjsgLy8g44Oi44O844K344On44Oz57eP5pWwXG4gIF9jb25zaXN0ZW5jeTogYm9vbGVhbjsgLy8gTU9DM+S4gOiyq+aAp+ODgeOCp+ODg+OCr+euoeeQhueUqFxuXG4gIF9zb3VuZEZpbGVMaXN0OiBjc21WZWN0b3I8Y3NtU3RyaW5nPjsgLy8g44Oi44O844K344On44Oz44K344Oz44Kv44Gn5Yip55So44GZ44KL44OV44Kh44Kk44Or44Gu44Oq44K544OIXG4gIF9zb3VuZEluZGV4OiBudW1iZXI7IC8vIOWGjeeUn+OBmeOCi+mfs+WjsOODh+ODvOOCv+OBruOCpOODs+ODh+ODg+OCr+OCuVxuICBfc291bmREYXRhOiBMQXBwUGxheVNvdW5kOyAvLyDpn7Plo7DnrqHnkIZcbiAgX21vdGlvblN5bmM6IEN1YmlzbU1vdGlvblN5bmM7IC8vIOODouODvOOCt+ODp+ODs+OCt+ODs+OCr1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cHM6Ly93d3cubGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtTWF0cml4NDQgfSBmcm9tICdAZnJhbWV3b3JrL21hdGgvY3ViaXNtbWF0cml4NDQnO1xuaW1wb3J0IHsgQ3ViaXNtVmlld01hdHJpeCB9IGZyb20gJ0BmcmFtZXdvcmsvbWF0aC9jdWJpc212aWV3bWF0cml4JztcblxuaW1wb3J0ICogYXMgTEFwcERlZmluZSBmcm9tICdAY3ViaXNtc2Rrc2FtcGxlcy9sYXBwZGVmaW5lJztcbmltcG9ydCAqIGFzIExBcHBNb3Rpb25TeW5jRGVmaW5lIGZyb20gJy4vbGFwcG1vdGlvbnN5bmNkZWZpbmUnO1xuaW1wb3J0IHsgY2FudmFzLCBnbCB9IGZyb20gJ0BjdWJpc21zZGtzYW1wbGVzL2xhcHBnbG1hbmFnZXInO1xuaW1wb3J0IHsgTEFwcE1vdGlvblN5bmNEZWxlZ2F0ZSB9IGZyb20gJy4vbGFwcG1vdGlvbnN5bmNkZWxlZ2F0ZSc7XG5pbXBvcnQgeyBMQXBwU3ByaXRlIH0gZnJvbSAnQGN1YmlzbXNka3NhbXBsZXMvbGFwcHNwcml0ZSc7XG5pbXBvcnQgeyBUZXh0dXJlSW5mbyB9IGZyb20gJ0BjdWJpc21zZGtzYW1wbGVzL2xhcHB0ZXh0dXJlbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwTW90aW9uU3luY0xpdmUyRE1hbmFnZXIgfSBmcm9tICcuL2xhcHBtb3Rpb25zeW5jbGl2ZTJkbWFuYWdlcic7XG5pbXBvcnQgeyBMQXBwUGFsIH0gZnJvbSAnQGN1YmlzbXNka3NhbXBsZXMvbGFwcHBhbCc7XG5pbXBvcnQgeyBUb3VjaE1hbmFnZXIgfSBmcm9tICdAY3ViaXNtc2Rrc2FtcGxlcy90b3VjaG1hbmFnZXInO1xuXG4vKipcbiAqIOaPj+eUu+OCr+ODqeOCueOAglxuICovXG5leHBvcnQgY2xhc3MgTEFwcE1vdGlvblN5bmNWaWV3IHtcbiAgLyoqXG4gICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcHJvZ3JhbUlkID0gbnVsbDtcbiAgICB0aGlzLl9iYWNrID0gbnVsbDtcbiAgICB0aGlzLl9nZWFyID0gbnVsbDtcbiAgICB0aGlzLl9mYXN0Rm9yd2FyZCA9IG51bGw7XG5cbiAgICAvLyDjgr/jg4Pjg4HplqLkv4Ljga7jgqTjg5njg7Pjg4jnrqHnkIZcbiAgICB0aGlzLl90b3VjaE1hbmFnZXIgPSBuZXcgVG91Y2hNYW5hZ2VyKCk7XG5cbiAgICAvLyDjg4fjg5DjgqTjgrnluqfmqJnjgYvjgonjgrnjgq/jg6rjg7zjg7PluqfmqJnjgavlpInmj5vjgZnjgovjgZ/jgoHjga5cbiAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbiA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xuXG4gICAgLy8g55S76Z2i44Gu6KGo56S644Gu5ouh5aSn57iu5bCP44KE56e75YuV44Gu5aSJ5o+b44KS6KGM44GG6KGM5YiXXG4gICAgdGhpcy5fdmlld01hdHJpeCA9IG5ldyBDdWJpc21WaWV3TWF0cml4KCk7XG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyW44GZ44KL44CCXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhcztcblxuICAgIGNvbnN0IHJhdGlvOiBudW1iZXIgPSB3aWR0aCAvIGhlaWdodDtcbiAgICBjb25zdCBsZWZ0OiBudW1iZXIgPSAtcmF0aW87XG4gICAgY29uc3QgcmlnaHQ6IG51bWJlciA9IHJhdGlvO1xuICAgIGNvbnN0IGJvdHRvbTogbnVtYmVyID0gTEFwcERlZmluZS5WaWV3TG9naWNhbExlZnQ7XG4gICAgY29uc3QgdG9wOiBudW1iZXIgPSBMQXBwRGVmaW5lLlZpZXdMb2dpY2FsUmlnaHQ7XG5cbiAgICB0aGlzLl92aWV3TWF0cml4LnNldFNjcmVlblJlY3QobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wKTsgLy8g44OH44OQ44Kk44K544Gr5a++5b+c44GZ44KL55S76Z2i44Gu56+E5Zuy44CCIFjjga7lt6bnq6/jgIFY44Gu5Y+z56uv44CBWeOBruS4i+err+OAgVnjga7kuIrnq69cbiAgICB0aGlzLl92aWV3TWF0cml4LnNjYWxlKExBcHBEZWZpbmUuVmlld1NjYWxlLCBMQXBwRGVmaW5lLlZpZXdTY2FsZSk7XG5cbiAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbi5sb2FkSWRlbnRpdHkoKTtcbiAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcbiAgICAgIGNvbnN0IHNjcmVlblc6IG51bWJlciA9IE1hdGguYWJzKHJpZ2h0IC0gbGVmdCk7XG4gICAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbi5zY2FsZVJlbGF0aXZlKHNjcmVlblcgLyB3aWR0aCwgLXNjcmVlblcgLyB3aWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjcmVlbkg6IG51bWJlciA9IE1hdGguYWJzKHRvcCAtIGJvdHRvbSk7XG4gICAgICB0aGlzLl9kZXZpY2VUb1NjcmVlbi5zY2FsZVJlbGF0aXZlKHNjcmVlbkggLyBoZWlnaHQsIC1zY3JlZW5IIC8gaGVpZ2h0KTtcbiAgICB9XG4gICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4udHJhbnNsYXRlUmVsYXRpdmUoLXdpZHRoICogMC41LCAtaGVpZ2h0ICogMC41KTtcblxuICAgIC8vIOihqOekuuevhOWbsuOBruioreWumlxuICAgIHRoaXMuX3ZpZXdNYXRyaXguc2V0TWF4U2NhbGUoTEFwcERlZmluZS5WaWV3TWF4U2NhbGUpOyAvLyDpmZDnlYzmi6HlvLXnjodcbiAgICB0aGlzLl92aWV3TWF0cml4LnNldE1pblNjYWxlKExBcHBEZWZpbmUuVmlld01pblNjYWxlKTsgLy8g6ZmQ55WM57iu5bCP546HXG5cbiAgICAvLyDooajnpLrjgafjgY3jgovmnIDlpKfnr4Tlm7JcbiAgICB0aGlzLl92aWV3TWF0cml4LnNldE1heFNjcmVlblJlY3QoXG4gICAgICBMQXBwRGVmaW5lLlZpZXdMb2dpY2FsTWF4TGVmdCxcbiAgICAgIExBcHBEZWZpbmUuVmlld0xvZ2ljYWxNYXhSaWdodCxcbiAgICAgIExBcHBEZWZpbmUuVmlld0xvZ2ljYWxNYXhCb3R0b20sXG4gICAgICBMQXBwRGVmaW5lLlZpZXdMb2dpY2FsTWF4VG9wXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDop6PmlL7jgZnjgotcbiAgICovXG4gIHB1YmxpYyByZWxlYXNlKCk6IHZvaWQge1xuICAgIHRoaXMuX3ZpZXdNYXRyaXggPSBudWxsO1xuICAgIHRoaXMuX3RvdWNoTWFuYWdlciA9IG51bGw7XG4gICAgdGhpcy5fZGV2aWNlVG9TY3JlZW4gPSBudWxsO1xuXG4gICAgdGhpcy5fZmFzdEZvcndhcmQucmVsZWFzZSgpO1xuICAgIHRoaXMuX2Zhc3RGb3J3YXJkID0gbnVsbDtcblxuICAgIHRoaXMuX2dlYXIucmVsZWFzZSgpO1xuICAgIHRoaXMuX2dlYXIgPSBudWxsO1xuXG4gICAgdGhpcy5fYmFjay5yZWxlYXNlKCk7XG4gICAgdGhpcy5fYmFjayA9IG51bGw7XG5cbiAgICBnbC5kZWxldGVQcm9ncmFtKHRoaXMuX3Byb2dyYW1JZCk7XG4gICAgdGhpcy5fcHJvZ3JhbUlkID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmj4/nlLvjgZnjgovjgIJcbiAgICovXG4gIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XG4gICAgZ2wudXNlUHJvZ3JhbSh0aGlzLl9wcm9ncmFtSWQpO1xuXG4gICAgaWYgKHRoaXMuX2JhY2spIHtcbiAgICAgIHRoaXMuX2JhY2sucmVuZGVyKHRoaXMuX3Byb2dyYW1JZCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9nZWFyKSB7XG4gICAgICB0aGlzLl9nZWFyLnJlbmRlcih0aGlzLl9wcm9ncmFtSWQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZmFzdEZvcndhcmQpIHtcbiAgICAgIHRoaXMuX2Zhc3RGb3J3YXJkLnJlbmRlcih0aGlzLl9wcm9ncmFtSWQpO1xuICAgIH1cblxuICAgIGdsLmZsdXNoKCk7XG5cbiAgICBjb25zdCBsaXZlMkRNYW5hZ2VyOiBMQXBwTW90aW9uU3luY0xpdmUyRE1hbmFnZXIgPVxuICAgICAgTEFwcE1vdGlvblN5bmNMaXZlMkRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICBsaXZlMkRNYW5hZ2VyLnNldFZpZXdNYXRyaXgodGhpcy5fdmlld01hdHJpeCk7XG5cbiAgICBsaXZlMkRNYW5hZ2VyLm9uVXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICog55S75YOP44Gu5Yid5pyf5YyW44KS6KGM44GG44CCXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZVNwcml0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB3aWR0aDogbnVtYmVyID0gY2FudmFzLndpZHRoO1xuICAgIGNvbnN0IGhlaWdodDogbnVtYmVyID0gY2FudmFzLmhlaWdodDtcblxuICAgIGNvbnN0IHRleHR1cmVNYW5hZ2VyID1cbiAgICAgIExBcHBNb3Rpb25TeW5jRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5nZXRUZXh0dXJlTWFuYWdlcigpO1xuICAgIGNvbnN0IHJlc291cmNlc1BhdGggPSBMQXBwRGVmaW5lLlJlc291cmNlc1BhdGg7XG5cbiAgICBsZXQgaW1hZ2VOYW1lID0gJyc7XG5cbiAgICAvLyDog4zmma/nlLvlg4/liJ3mnJ/ljJZcbiAgICBpbWFnZU5hbWUgPSBMQXBwRGVmaW5lLkJhY2tJbWFnZU5hbWU7XG5cbiAgICAvLyDpnZ7lkIzmnJ/jgarjga7jgafjgrPjg7zjg6vjg5Djg4Pjgq/plqLmlbDjgpLkvZzmiJBcbiAgICBjb25zdCBpbml0QmFja0dyb3VuZFRleHR1cmUgPSAodGV4dHVyZUluZm86IFRleHR1cmVJbmZvKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCB4OiBudW1iZXIgPSB3aWR0aCAqIDAuNTtcbiAgICAgIGNvbnN0IHk6IG51bWJlciA9IGhlaWdodCAqIDAuNTtcblxuICAgICAgY29uc3QgZndpZHRoID0gdGV4dHVyZUluZm8ud2lkdGggKiAyLjA7XG4gICAgICBjb25zdCBmaGVpZ2h0ID0gaGVpZ2h0ICogMC45NTtcbiAgICAgIHRoaXMuX2JhY2sgPSBuZXcgTEFwcFNwcml0ZSh4LCB5LCBmd2lkdGgsIGZoZWlnaHQsIHRleHR1cmVJbmZvLmlkKTtcbiAgICB9O1xuXG4gICAgdGV4dHVyZU1hbmFnZXIuY3JlYXRlVGV4dHVyZUZyb21QbmdGaWxlKFxuICAgICAgcmVzb3VyY2VzUGF0aCArIGltYWdlTmFtZSxcbiAgICAgIGZhbHNlLFxuICAgICAgaW5pdEJhY2tHcm91bmRUZXh0dXJlXG4gICAgKTtcblxuICAgIC8vIOatr+i7iueUu+WDj+WIneacn+WMllxuICAgIGltYWdlTmFtZSA9IExBcHBEZWZpbmUuR2VhckltYWdlTmFtZTtcbiAgICBjb25zdCBpbml0R2VhclRleHR1cmUgPSAodGV4dHVyZUluZm86IFRleHR1cmVJbmZvKTogdm9pZCA9PiB7XG4gICAgICBjb25zdCB4ID0gd2lkdGggLSB0ZXh0dXJlSW5mby53aWR0aCAqIDAuNTtcbiAgICAgIGNvbnN0IHkgPSBoZWlnaHQgLSB0ZXh0dXJlSW5mby5oZWlnaHQgKiAwLjU7XG4gICAgICBjb25zdCBmd2lkdGggPSB0ZXh0dXJlSW5mby53aWR0aDtcbiAgICAgIGNvbnN0IGZoZWlnaHQgPSB0ZXh0dXJlSW5mby5oZWlnaHQ7XG4gICAgICB0aGlzLl9nZWFyID0gbmV3IExBcHBTcHJpdGUoeCwgeSwgZndpZHRoLCBmaGVpZ2h0LCB0ZXh0dXJlSW5mby5pZCk7XG4gICAgfTtcblxuICAgIHRleHR1cmVNYW5hZ2VyLmNyZWF0ZVRleHR1cmVGcm9tUG5nRmlsZShcbiAgICAgIHJlc291cmNlc1BhdGggKyBpbWFnZU5hbWUsXG4gICAgICBmYWxzZSxcbiAgICAgIGluaXRHZWFyVGV4dHVyZVxuICAgICk7XG5cbiAgICAvLyDpn7Plo7Dpgbfnp7vnlLvlg4/liJ3mnJ/ljJZcbiAgICBpbWFnZU5hbWUgPSBMQXBwTW90aW9uU3luY0RlZmluZS5GYXN0Rm9yd2FyZEltYWdlTmFtZTtcbiAgICBjb25zdCBpbml0RmFzdEZvcndhcmRUZXh0dXJlID0gKHRleHR1cmVJbmZvOiBUZXh0dXJlSW5mbyk6IHZvaWQgPT4ge1xuICAgICAgY29uc3QgeCA9IHRleHR1cmVJbmZvLndpZHRoICogMC41O1xuICAgICAgY29uc3QgeSA9IGhlaWdodCAtIHRleHR1cmVJbmZvLmhlaWdodCAqIDAuNTtcbiAgICAgIGNvbnN0IGZ3aWR0aCA9IHRleHR1cmVJbmZvLndpZHRoO1xuICAgICAgY29uc3QgZmhlaWdodCA9IHRleHR1cmVJbmZvLmhlaWdodDtcbiAgICAgIHRoaXMuX2Zhc3RGb3J3YXJkID0gbmV3IExBcHBTcHJpdGUoeCwgeSwgZndpZHRoLCBmaGVpZ2h0LCB0ZXh0dXJlSW5mby5pZCk7XG4gICAgfTtcblxuICAgIHRleHR1cmVNYW5hZ2VyLmNyZWF0ZVRleHR1cmVGcm9tUG5nRmlsZShcbiAgICAgIHJlc291cmNlc1BhdGggKyBpbWFnZU5hbWUsXG4gICAgICBmYWxzZSxcbiAgICAgIGluaXRGYXN0Rm9yd2FyZFRleHR1cmVcbiAgICApO1xuXG4gICAgLy8g44K344Kn44O844OA44O844KS5L2c5oiQXG4gICAgaWYgKHRoaXMuX3Byb2dyYW1JZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wcm9ncmFtSWQgPSBMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkuY3JlYXRlU2hhZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODg+ODgeOBleOCjOOBn+aZguOBq+WRvOOBsOOCjOOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gcG9pbnRYIOOCueOCr+ODquODvOODs1jluqfmqJlcbiAgICogQHBhcmFtIHBvaW50WSDjgrnjgq/jg6rjg7zjg7NZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgb25Ub3VjaGVzQmVnYW4ocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fdG91Y2hNYW5hZ2VyLnRvdWNoZXNCZWdhbihcbiAgICAgIHBvaW50WCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLFxuICAgICAgcG9pbnRZICogd2luZG93LmRldmljZVBpeGVsUmF0aW9cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODg+ODgeOBl+OBpuOBhOOCi+OBqOOBjeOBq+ODneOCpOODs+OCv+OBjOWLleOBhOOBn+OCieWRvOOBsOOCjOOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gcG9pbnRYIOOCueOCr+ODquODvOODs1jluqfmqJlcbiAgICogQHBhcmFtIHBvaW50WSDjgrnjgq/jg6rjg7zjg7NZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgb25Ub3VjaGVzTW92ZWQocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgdmlld1g6IG51bWJlciA9IHRoaXMudHJhbnNmb3JtVmlld1godGhpcy5fdG91Y2hNYW5hZ2VyLmdldFgoKSk7XG4gICAgY29uc3Qgdmlld1k6IG51bWJlciA9IHRoaXMudHJhbnNmb3JtVmlld1kodGhpcy5fdG91Y2hNYW5hZ2VyLmdldFkoKSk7XG5cbiAgICB0aGlzLl90b3VjaE1hbmFnZXIudG91Y2hlc01vdmVkKFxuICAgICAgcG9pbnRYICogd2luZG93LmRldmljZVBpeGVsUmF0aW8sXG4gICAgICBwb2ludFkgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICog44K/44OD44OB44GM57WC5LqG44GX44Gf44KJ5ZG844Gw44KM44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBwb2ludFgg44K544Kv44Oq44O844OzWOW6p+aomVxuICAgKiBAcGFyYW0gcG9pbnRZIOOCueOCr+ODquODvOODs1nluqfmqJlcbiAgICovXG4gIHB1YmxpYyBvblRvdWNoZXNFbmRlZChwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyDjgr/jg4Pjg4HntYLkuoZcbiAgICBjb25zdCBsaXZlMkRNYW5hZ2VyOiBMQXBwTW90aW9uU3luY0xpdmUyRE1hbmFnZXIgPVxuICAgICAgTEFwcE1vdGlvblN5bmNMaXZlMkRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG5cbiAgICB7XG4gICAgICAvLyDjgrfjg7PjgrDjg6vjgr/jg4Pjg5dcbiAgICAgIGNvbnN0IHg6IG51bWJlciA9IHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zZm9ybVgoXG4gICAgICAgIHRoaXMuX3RvdWNoTWFuYWdlci5nZXRYKClcbiAgICAgICk7IC8vIOirlueQhuW6p+aomeWkieaPm+OBl+OBn+W6p+aomeOCkuWPluW+l+OAglxuICAgICAgY29uc3QgeTogbnVtYmVyID0gdGhpcy5fZGV2aWNlVG9TY3JlZW4udHJhbnNmb3JtWShcbiAgICAgICAgdGhpcy5fdG91Y2hNYW5hZ2VyLmdldFkoKVxuICAgICAgKTsgLy8g6KuW55CG5bqn5qiZ5aSJ5YyW44GX44Gf5bqn5qiZ44KS5Y+W5b6X44CCXG5cbiAgICAgIGlmIChMQXBwRGVmaW5lLkRlYnVnVG91Y2hMb2dFbmFibGUpIHtcbiAgICAgICAgTEFwcFBhbC5wcmludE1lc3NhZ2UoYFtBUFBddG91Y2hlc0VuZGVkIHg6ICR7eH0geTogJHt5fWApO1xuICAgICAgfVxuICAgICAgbGl2ZTJETWFuYWdlci5vblRhcCh4LCB5KTtcblxuICAgICAgLy8g5q2v6LuK44Gr44K/44OD44OX44GX44Gf44GLXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX2dlYXIuaXNIaXQoXG4gICAgICAgICAgcG9pbnRYICogd2luZG93LmRldmljZVBpeGVsUmF0aW8sXG4gICAgICAgICAgcG9pbnRZICogd2luZG93LmRldmljZVBpeGVsUmF0aW9cbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGxpdmUyRE1hbmFnZXIubmV4dFNjZW5lKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIOmfs+WjsOmBt+enu+OBq+OCv+ODg+ODl+OBl+OBn+OBi1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9mYXN0Rm9yd2FyZC5pc0hpdChcbiAgICAgICAgICBwb2ludFggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxcbiAgICAgICAgICBwb2ludFkgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgbGl2ZTJETWFuYWdlci5jaGFuZ2VOZXh0SW5kZXhTb3VuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBY5bqn5qiZ44KSVmlld+W6p+aomeOBq+WkieaPm+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gZGV2aWNlWCDjg4fjg5DjgqTjgrlY5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtVmlld1goZGV2aWNlWDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JlZW5YOiBudW1iZXIgPSB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1YKGRldmljZVgpOyAvLyDoq5bnkIbluqfmqJnlpInmj5vjgZfjgZ/luqfmqJnjgpLlj5blvpfjgIJcbiAgICByZXR1cm4gdGhpcy5fdmlld01hdHJpeC5pbnZlcnRUcmFuc2Zvcm1YKHNjcmVlblgpOyAvLyDmi6HlpKfjgIHnuK7lsI/jgIHnp7vli5Xlvozjga7lgKTjgIJcbiAgfVxuXG4gIC8qKlxuICAgKiBZ5bqn5qiZ44KSVmlld+W6p+aomeOBq+WkieaPm+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gZGV2aWNlWSDjg4fjg5DjgqTjgrlZ5bqn5qiZXG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtVmlld1koZGV2aWNlWTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JlZW5ZOiBudW1iZXIgPSB0aGlzLl9kZXZpY2VUb1NjcmVlbi50cmFuc2Zvcm1ZKGRldmljZVkpOyAvLyDoq5bnkIbluqfmqJnlpInmj5vjgZfjgZ/luqfmqJnjgpLlj5blvpfjgIJcbiAgICByZXR1cm4gdGhpcy5fdmlld01hdHJpeC5pbnZlcnRUcmFuc2Zvcm1ZKHNjcmVlblkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFjluqfmqJnjgpJTY3JlZW7luqfmqJnjgavlpInmj5vjgZnjgovjgIJcbiAgICogQHBhcmFtIGRldmljZVgg44OH44OQ44Kk44K5WOW6p+aomVxuICAgKi9cbiAgcHVibGljIHRyYW5zZm9ybVNjcmVlblgoZGV2aWNlWDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlVG9TY3JlZW4udHJhbnNmb3JtWChkZXZpY2VYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBZ5bqn5qiZ44KSU2NyZWVu5bqn5qiZ44Gr5aSJ5o+b44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBkZXZpY2VZIOODh+ODkOOCpOOCuVnluqfmqJlcbiAgICovXG4gIHB1YmxpYyB0cmFuc2Zvcm1TY3JlZW5ZKGRldmljZVk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RldmljZVRvU2NyZWVuLnRyYW5zZm9ybVkoZGV2aWNlWSk7XG4gIH1cblxuICBfdG91Y2hNYW5hZ2VyOiBUb3VjaE1hbmFnZXI7IC8vIOOCv+ODg+ODgeODnuODjeODvOOCuOODo+ODvFxuICBfZGV2aWNlVG9TY3JlZW46IEN1YmlzbU1hdHJpeDQ0OyAvLyDjg4fjg5DjgqTjgrnjgYvjgonjgrnjgq/jg6rjg7zjg7Pjgbjjga7ooYzliJdcbiAgX3ZpZXdNYXRyaXg6IEN1YmlzbVZpZXdNYXRyaXg7IC8vIHZpZXdNYXRyaXhcbiAgX3Byb2dyYW1JZDogV2ViR0xQcm9ncmFtOyAvLyDjgrfjgqfjg7zjg4BJRFxuICBfYmFjazogTEFwcFNwcml0ZTsgLy8g6IOM5pmv55S75YOPXG4gIF9nZWFyOiBMQXBwU3ByaXRlOyAvLyDjgq7jgqLnlLvlg49cbiAgX2Zhc3RGb3J3YXJkOiBMQXBwU3ByaXRlOyAvLy88IOaXqemAgeOCiueUu+WDj1xuICBfY2hhbmdlTW9kZWw6IGJvb2xlYW47IC8vIOODouODh+ODq+WIh+OCiuabv+OBiOODleODqeOCsFxuICBfaXNDbGljazogYm9vbGVhbjsgLy8g44Kv44Oq44OD44Kv5LitXG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBjc21WZWN0b3IgfSBmcm9tICdAZnJhbWV3b3JrL3R5cGUvY3NtdmVjdG9yJztcbmltcG9ydCB7XG4gIEF1ZGlvSW5mbyxcbiAgTEFwcE1vdGlvblN5bmNBdWRpb01hbmFnZXJcbn0gZnJvbSAnLi9sYXBwbW90aW9uc3luY2F1ZGlvbWFuYWdlcic7XG5pbXBvcnQgKiBhcyBMQXBwTW90aW9uU3luY0RlZmluZSBmcm9tICcuL2xhcHBtb3Rpb25zeW5jZGVmaW5lJztcblxuZXhwb3J0IGNsYXNzIExBcHBQbGF5U291bmQge1xuICAvKipcbiAgICog44OR44K544GL44KJ44Gu6Z+z5aOw44OV44Kh44Kk44Or44Gu6Kqt44G/6L6844G/XG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIOODleOCoeOCpOODq+ODkeOCuVxuICAgKi9cbiAgcHVibGljIGxvYWRGaWxlKHBhdGg6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3NvdW5kQnVmZmVyQ29udGV4dFxuICAgICAgLmdldEF1ZGlvTWFuYWdlcigpXG4gICAgICAuY3JlYXRlQXVkaW9Gcm9tRmlsZShcbiAgICAgICAgcGF0aCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIG51bGwsXG4gICAgICAgIChhdWRpb0luZm86IEF1ZGlvSW5mbywgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMuX3NvdW5kQnVmZmVyQ29udGV4dFxuICAgICAgICAgICAgLmdldEJ1ZmZlcnMoKVxuICAgICAgICAgICAgLnNldChcbiAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgIG5ldyBjc21WZWN0b3I8bnVtYmVyPigpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8g5YmN5Zue44Gu44K144Oz44OX44Or44GL44KJ6YCy44KT44Gg5pWw44Gu6YWN5YiX44Gr6Kit5a6aXG4gICAgICAgICAgdGhpcy5fc291bmRCdWZmZXJDb250ZXh0LmdldFVwZGF0ZVNpemVzKCkucHVzaEJhY2soMCk7XG5cbiAgICAgICAgICAvLyBNZXNzZWdl55m644GX44Gf5pmC44Gr44OH44O844K/5Y+W44Gj44Gm5p2l44KM44KL44KI44GG44Gr6Kit5a6aXG4gICAgICAgICAgdGhpcy5fc291bmRCdWZmZXJDb250ZXh0XG4gICAgICAgICAgICAuZ2V0QXVkaW9NYW5hZ2VyKClcbiAgICAgICAgICAgIC5zZXRPbk1lc3NhZ2VCeUluZGV4KFxuICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgdGhpcy5fc291bmRCdWZmZXJDb250ZXh0LmdldEJ1ZmZlcnMoKS5hdChpbmRleCksXG4gICAgICAgICAgICAgIHRoaXMuX3NvdW5kQnVmZmVyQ29udGV4dC5nZXRVcGRhdGVTaXplcygpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKi9cbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBhdWRpb01hbmFnZXIgPSB0aGlzLl9zb3VuZEJ1ZmZlckNvbnRleHQuZ2V0QXVkaW9NYW5hZ2VyKCk7XG4gICAgY29uc3QgdXBkYXRlU2l6ZXMgPSB0aGlzLl9zb3VuZEJ1ZmZlckNvbnRleHQuZ2V0VXBkYXRlU2l6ZXMoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhdWRpb01hbmFnZXIuX2F1ZGlvcy5nZXRTaXplKCk7IGluZGV4KyspIHtcbiAgICAgIGlmICghYXVkaW9NYW5hZ2VyLmlzUGxheUJ5SW5kZXgoaW5kZXgpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyDmm7TmlrDjgZXjgozjgZ/jga7jgafopoHntKDmlbDjgpLjg6rjgrvjg4Pjg4hcbiAgICAgIHVwZGF0ZVNpemVzLnNldChpbmRleCwgMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreOBi+OCieimgee0oOOCkuWJiumZpOOBl+OBpuS7luOBruimgee0oOOCkuOCt+ODleODiOOBmeOCi1xuICAgKlxuICAgKiBAcGFyYW0gYnVmZmVyIOWkieabtOOBmeOCi+ODkOODg+ODleOCoVxuICAgKiBAcGFyYW0gc2l6ZSDliYrpmaTjgZnjgovlpKfjgY3jgZVcbiAgICogQHJldHVybnMg5aSJ5pu05b6M44Gu44OQ44OD44OV44KhXG4gICAqL1xuICBwdWJsaWMgc3BsaWNlQmVnaW4oYnVmZmVyOiBjc21WZWN0b3I8bnVtYmVyPiwgc2l6ZTogbnVtYmVyKTogY3NtVmVjdG9yPG51bWJlcj4ge1xuICAgIGlmICghYnVmZmVyPy5iZWdpbigpIHx8IGJ1ZmZlcj8uX3NpemUgPD0gc2l6ZSkge1xuICAgICAgcmV0dXJuIGJ1ZmZlcjsgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgfVxuXG4gICAgLy8g5YmK6ZmkXG4gICAgYnVmZmVyLl9wdHIuc3BsaWNlKDAsIHNpemUpO1xuICAgIGJ1ZmZlci5fc2l6ZSAtPSBzaXplO1xuXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiDlhYjpoK3jgYvjgolzaXpl5YiG44OH44O844K/44KS5YmK6Zmk44GZ44KLXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCDjg4fjg7zjgr/jgpLliYrpmaTjgZnjgovjg5Djg4Pjg5XjgqHjga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHBhcmFtIHNpemUg5YmK6Zmk44GZ44KL44OH44O844K/44Gu6KaB57Sg5pWwXG4gICAqL1xuICBwdWJsaWMgcmVtb3ZlRGF0YUFycmF5QnlJbmRleChpbmRleDogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcbiAgICBsZXQgYnVmZmVyID0gdGhpcy5fc291bmRCdWZmZXJDb250ZXh0LmdldEJ1ZmZlcnMoKS5hdChpbmRleCk7XG5cbiAgICBpZiAoc2l6ZSA8IGJ1ZmZlci5nZXRTaXplKCkpIHtcbiAgICAgIC8vIOmAlOS4reOBi+OCieOBruODkOODg+ODleOCoeOBq+OBmeOCi1xuICAgICAgYnVmZmVyID0gdGhpcy5zcGxpY2VCZWdpbihidWZmZXIsIHNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDjg5Djg4Pjg5XjgqHjga7lhajopoHntKDjgpLjgq/jg6rjgqJcbiAgICAgIGJ1ZmZlci5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmjIflrprjgZfjgZ/jgqTjg7Pjg4fjg4Pjgq/jgrnjga7pn7Plo7DjgrPjg7Pjg4bjgq3jgrnjg4jjgYzlvoXmqZ/nirbmhYvjgavjgarjgaPjgabjgYTjgovjgYvjgpLliKTlrprjgZnjgotcbiAgICpcbiAgICogQHBhcmFtIGluZGV4IOaMh+WumuOBmeOCi+OCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJucyDpn7Plo7DjgrPjg7Pjg4bjgq3jgrnjg4jjgYzlvoXmqZ/nirbmhYvjgavjgarjgaPjgabjgYTjgovjgYvvvJ9cbiAgICovXG4gIHB1YmxpYyBpc1N1c3BlbmRlZENvbnRleHRCeUluZGV4KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBhdWRpb0NvbnRleHQgPSB0aGlzLmdldFNvdW5kQnVmZmVyQ29udGV4dCgpXG4gICAgICAuZ2V0QXVkaW9NYW5hZ2VyKClcbiAgICAgIC5fYXVkaW9zLmF0KGluZGV4KS5hdWRpb0NvbnRleHQ7XG5cbiAgICByZXR1cm4gYXVkaW9Db250ZXh0LnN0YXRlID09ICdzdXNwZW5kZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCpOODs+ODh+ODg+OCr+OCueOCkuS9v+OBo+OBpumfs+WjsOOCkuWGjeeUn+OBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K5XG4gICAqL1xuICBwdWJsaWMgcGxheUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUGxheUJ5SW5kZXgoaW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXVkaW9Db250ZXh0ID0gdGhpcy5nZXRTb3VuZEJ1ZmZlckNvbnRleHQoKVxuICAgICAgLmdldEF1ZGlvTWFuYWdlcigpXG4gICAgICAuX2F1ZGlvcy5hdChpbmRleCkuYXVkaW9Db250ZXh0O1xuXG4gICAgLy8g44G+44Gg5b6F5qmf54q25oWL44Gg44Gj44Gf44KJcnVubmluZ+OBq+OBmeOCi1xuICAgIGlmICh0aGlzLmlzU3VzcGVuZGVkQ29udGV4dEJ5SW5kZXgoaW5kZXgpKSB7XG4gICAgICBhdWRpb0NvbnRleHQucmVzdW1lKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NvdW5kQnVmZmVyQ29udGV4dC5nZXRBdWRpb01hbmFnZXIoKS5wbGF5QnlJbmRleChpbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc291bmRCdWZmZXJDb250ZXh0LmdldEF1ZGlvTWFuYWdlcigpLnBsYXlCeUluZGV4KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Kk44Oz44OH44OD44Kv44K544KS5L2/44Gj44Gm6Z+z5aOw44Gu5YaN55Sf44KS5YGc5q2i44GZ44KL44CCXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICovXG4gIHB1YmxpYyBzdG9wQnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzUGxheUJ5SW5kZXgoaW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc291bmRCdWZmZXJDb250ZXh0LmdldEF1ZGlvTWFuYWdlcigpLnN0b3BCeUluZGV4KGluZGV4KTtcblxuICAgIC8vIOODkOODg+ODleOCoeOBruS4rei6q+OCkuOCr+ODquOCouOBmeOCi+OAglxuICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuX3NvdW5kQnVmZmVyQ29udGV4dC5nZXRCdWZmZXJzKCkuYXQoaW5kZXgpO1xuICAgIGJ1ZmZlci5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCpOODs+ODh+ODg+OCr+OCueOCkuS9v+OBo+OBpumfs+WjsOOBjOWGjeeUn+S4reOBi+WIpOWumuOBmeOCi+OAglxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXgg44Kk44Oz44OH44OD44Kv44K5XG4gICAqIEByZXR1cm5zIOWGjeeUn+S4reOBi++8n1xuICAgKi9cbiAgcHVibGljIGlzUGxheUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3VuZEJ1ZmZlckNvbnRleHQuZ2V0QXVkaW9NYW5hZ2VyKCkuaXNQbGF5QnlJbmRleChpbmRleCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U291bmRCdWZmZXJDb250ZXh0KCk6IFNvdW5kQnVmZmVyQ29udGV4dCB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdW5kQnVmZmVyQ29udGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zb3VuZEJ1ZmZlckNvbnRleHQgPSBuZXcgU291bmRCdWZmZXJDb250ZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgcmVsZWFzZSgpIHtcbiAgICBpZih0aGlzLl9zb3VuZEJ1ZmZlckNvbnRleHQpIHtcbiAgICAgIHRoaXMuX3NvdW5kQnVmZmVyQ29udGV4dC5yZWxlYXNlKCk7XG4gICAgICB0aGlzLl9zb3VuZEJ1ZmZlckNvbnRleHQgPSB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc291bmRCdWZmZXJDb250ZXh0OiBTb3VuZEJ1ZmZlckNvbnRleHQ7XG59XG5cbmV4cG9ydCBjbGFzcyBTb3VuZEJ1ZmZlckNvbnRleHQge1xuICBwdWJsaWMgZ2V0QnVmZmVycygpOiBjc21WZWN0b3I8Y3NtVmVjdG9yPG51bWJlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVycztcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdWRpb01hbmFnZXIoKTogTEFwcE1vdGlvblN5bmNBdWRpb01hbmFnZXIge1xuICAgIHJldHVybiB0aGlzLl9hdWRpb01hbmFnZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0VXBkYXRlU2l6ZXMoKTogY3NtVmVjdG9yPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVTaXplcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRVcGRhdGVTaXplKGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl91cGRhdGVTaXplcy5zZXQoaW5kZXgsIHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBidWZmZXJzPzogY3NtVmVjdG9yPGNzbVZlY3RvcjxudW1iZXI+PixcbiAgICBhdWRpb01hbmFnZXI/OiBMQXBwTW90aW9uU3luY0F1ZGlvTWFuYWdlcixcbiAgICB1cGRhdGVTaXplcz86IGNzbVZlY3RvcjxudW1iZXI+XG4gICkge1xuICAgIHRoaXMuX2J1ZmZlcnMgPSBidWZmZXJzXG4gICAgICA/IGJ1ZmZlcnNcbiAgICAgIDogbmV3IGNzbVZlY3Rvcjxjc21WZWN0b3I8bnVtYmVyPj4oKTtcbiAgICB0aGlzLl9hdWRpb01hbmFnZXIgPSBhdWRpb01hbmFnZXJcbiAgICAgID8gYXVkaW9NYW5hZ2VyXG4gICAgICA6IG5ldyBMQXBwTW90aW9uU3luY0F1ZGlvTWFuYWdlcigpO1xuICAgIHRoaXMuX3VwZGF0ZVNpemVzID0gdXBkYXRlU2l6ZXMgPyB1cGRhdGVTaXplcyA6IG5ldyBjc21WZWN0b3I8bnVtYmVyPigpO1xuICB9XG5cbiAgcHVibGljIHJlbGVhc2UoKSB7XG4gICAgaWYodGhpcy5fYnVmZmVycyAhPSBudWxsKXtcbiAgICAgIHRoaXMuX2J1ZmZlcnMuY2xlYXIoKTtcbiAgICAgIHRoaXMuX2J1ZmZlcnMgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgaWYodGhpcy5fYXVkaW9NYW5hZ2VyICE9IG51bGwpe1xuICAgICAgdGhpcy5fYXVkaW9NYW5hZ2VyLnJlbGVhc2UoKTtcbiAgICAgIHRoaXMuX2F1ZGlvTWFuYWdlciA9IHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZih0aGlzLl91cGRhdGVTaXplcyAhPSBudWxsKXtcbiAgICAgIHRoaXMuX3VwZGF0ZVNpemVzLmNsZWFyKCk7XG4gICAgICB0aGlzLl91cGRhdGVTaXplcyA9IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9idWZmZXJzOiBjc21WZWN0b3I8Y3NtVmVjdG9yPG51bWJlcj4+O1xuICBwcml2YXRlIF9hdWRpb01hbmFnZXI6IExBcHBNb3Rpb25TeW5jQXVkaW9NYW5hZ2VyO1xuICBwcml2YXRlIF91cGRhdGVTaXplczogY3NtVmVjdG9yPG51bWJlcj47XG59XG4iLCIvKipcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwczovL3d3dy5saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQgeyBMQXBwTW90aW9uU3luY0RlbGVnYXRlIH0gZnJvbSAnLi9sYXBwbW90aW9uc3luY2RlbGVnYXRlJztcbmltcG9ydCAqIGFzIExBcHBEZWZpbmUgZnJvbSAnQGN1YmlzbXNka3NhbXBsZXMvbGFwcGRlZmluZSc7XG5pbXBvcnQgeyBMQXBwR2xNYW5hZ2VyIH0gZnJvbSAnQGN1YmlzbXNka3NhbXBsZXMvbGFwcGdsbWFuYWdlcic7XG5cbi8qKlxuICog44OW44Op44Km44K244Ot44O844OJ5b6M44Gu5Yem55CGXG4gKi9cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAnbG9hZCcsXG4gICgpOiB2b2lkID0+IHtcbiAgICAvLyBJbml0aWFsaXplIFdlYkdMIGFuZCBjcmVhdGUgdGhlIGFwcGxpY2F0aW9uIGluc3RhbmNlXG4gICAgaWYgKFxuICAgICAgIUxBcHBHbE1hbmFnZXIuZ2V0SW5zdGFuY2UoKSB8fFxuICAgICAgIUxBcHBNb3Rpb25TeW5jRGVsZWdhdGUuZ2V0SW5zdGFuY2UoKS5pbml0aWFsaXplKClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkucnVuKCk7XG4gIH0sXG4gIHsgcGFzc2l2ZTogdHJ1ZSB9XG4pO1xuXG4vKipcbiAqIOe1guS6huaZguOBruWHpueQhlxuICovXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICgpOiB2b2lkID0+IExBcHBNb3Rpb25TeW5jRGVsZWdhdGUucmVsZWFzZUluc3RhbmNlKCksXG4gIHsgcGFzc2l2ZTogdHJ1ZSB9XG4pO1xuXG4vKipcbiAqIFByb2Nlc3Mgd2hlbiBjaGFuZ2luZyBzY3JlZW4gc2l6ZS5cbiAqL1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICdyZXNpemUnLFxuICAoKSA9PiB7XG4gICAgaWYgKExBcHBEZWZpbmUuQ2FudmFzU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICBMQXBwTW90aW9uU3luY0RlbGVnYXRlLmdldEluc3RhbmNlKCkub25SZXNpemUoKTtcbiAgICB9XG4gIH0sXG4gIHsgcGFzc2l2ZTogdHJ1ZSB9XG4pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG52YXIgZyA9XG4gICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbCkgfHxcbiAge31cblxudmFyIHN1cHBvcnQgPSB7XG4gIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gZyxcbiAgaXRlcmFibGU6ICdTeW1ib2wnIGluIGcgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gIGJsb2I6XG4gICAgJ0ZpbGVSZWFkZXInIGluIGcgJiZcbiAgICAnQmxvYicgaW4gZyAmJlxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gZyxcbiAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gZ1xufVxuXG5mdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbn1cblxuaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gIF1cblxuICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPVxuICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgfVxuICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5eX2B8fiFdL2kudGVzdChuYW1lKSB8fCBuYW1lID09PSAnJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiJylcbiAgfVxuICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG5mdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvclxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpdGVyYXRvclxufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gIHRoaXMubWFwID0ge31cblxuICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgIH0sIHRoaXMpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgIGlmIChoZWFkZXIubGVuZ3RoICE9IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSGVhZGVycyBjb25zdHJ1Y3RvcjogZXhwZWN0ZWQgbmFtZS92YWx1ZSBwYWlyIHRvIGJlIGxlbmd0aCAyLCBmb3VuZCcgKyBoZWFkZXIubGVuZ3RoKVxuICAgICAgfVxuICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgfSwgdGhpcylcbiAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgIH0sIHRoaXMpXG4gIH1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlICsgJywgJyArIHZhbHVlIDogdmFsdWVcbn1cblxuSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgfVxuICB9XG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW1zID0gW11cbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgaXRlbXMucHVzaChuYW1lKVxuICB9KVxuICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpdGVtcy5wdXNoKHZhbHVlKVxuICB9KVxuICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW1zID0gW11cbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKVxuICB9KVxuICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG59XG5cbmlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG59XG5cbmZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgaWYgKGJvZHkuX25vQm9keSkgcmV0dXJuXG4gIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICB9XG4gIGJvZHkuYm9keVVzZWQgPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICB9XG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICByZXR1cm4gcHJvbWlzZVxufVxuXG5mdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgdmFyIG1hdGNoID0gL2NoYXJzZXQ9KFtBLVphLXowLTlfLV0rKS8uZXhlYyhibG9iLnR5cGUpXG4gIHZhciBlbmNvZGluZyA9IG1hdGNoID8gbWF0Y2hbMV0gOiAndXRmLTgnXG4gIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IsIGVuY29kaW5nKVxuICByZXR1cm4gcHJvbWlzZVxufVxuXG5mdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gIH1cbiAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICB9IGVsc2Uge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgfVxufVxuXG5mdW5jdGlvbiBCb2R5KCkge1xuICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAvKlxuICAgICAgZmV0Y2gtbW9jayB3cmFwcyB0aGUgUmVzcG9uc2Ugb2JqZWN0IGluIGFuIEVTNiBQcm94eSB0b1xuICAgICAgcHJvdmlkZSB1c2VmdWwgdGVzdCBoYXJuZXNzIGZlYXR1cmVzIHN1Y2ggYXMgZmx1c2guIEhvd2V2ZXIsIG9uXG4gICAgICBFUzUgYnJvd3NlcnMgd2l0aG91dCBmZXRjaCBvciBQcm94eSBzdXBwb3J0IHBvbGx5ZmlsbHMgbXVzdCBiZSB1c2VkO1xuICAgICAgdGhlIHByb3h5LXBvbGx5ZmlsbCBpcyB1bmFibGUgdG8gcHJveHkgYW4gYXR0cmlidXRlIHVubGVzcyBpdCBleGlzdHNcbiAgICAgIG9uIHRoZSBvYmplY3QgYmVmb3JlIHRoZSBQcm94eSBpcyBjcmVhdGVkLiBUaGlzIGNoYW5nZSBlbnN1cmVzXG4gICAgICBSZXNwb25zZS5ib2R5VXNlZCBleGlzdHMgb24gdGhlIGluc3RhbmNlLCB3aGlsZSBtYWludGFpbmluZyB0aGVcbiAgICAgIHNlbWFudGljIG9mIHNldHRpbmcgUmVxdWVzdC5ib2R5VXNlZCBpbiB0aGUgY29uc3RydWN0b3IgYmVmb3JlXG4gICAgICBfaW5pdEJvZHkgaXMgY2FsbGVkLlxuICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtYXNzaWduXG4gICAgdGhpcy5ib2R5VXNlZCA9IHRoaXMuYm9keVVzZWRcbiAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICBpZiAoIWJvZHkpIHtcbiAgICAgIHRoaXMuX25vQm9keSA9IHRydWU7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGJvZHkpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgdmFyIGlzQ29uc3VtZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKGlzQ29uc3VtZWQpIHtcbiAgICAgICAgcmV0dXJuIGlzQ29uc3VtZWRcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcbiAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnVmZmVyLnNsaWNlKFxuICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVPZmZzZXQsXG4gICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZU9mZnNldCArIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIGFzIEFycmF5QnVmZmVyJylcbiAgICB9XG4gIH1cblxuICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICB9XG4gIH1cblxuICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG52YXIgbWV0aG9kcyA9IFsnQ09OTkVDVCcsICdERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQQVRDSCcsICdQT1NUJywgJ1BVVCcsICdUUkFDRSddXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICByZXR1cm4gbWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEgPyB1cGNhc2VkIDogbWV0aG9kXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXF1ZXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgdGhlIFwibmV3XCIgb3BlcmF0b3IsIHRoaXMgRE9NIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJylcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICB9XG4gICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgdGhpcy5zaWduYWwgPSBpbnB1dC5zaWduYWxcbiAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgfVxuXG4gIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJ1xuICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gIH1cbiAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICB0aGlzLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsIHx8IHRoaXMuc2lnbmFsIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCdBYm9ydENvbnRyb2xsZXInIGluIGcpIHtcbiAgICAgIHZhciBjdHJsID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgcmV0dXJuIGN0cmwuc2lnbmFsO1xuICAgIH1cbiAgfSgpKTtcbiAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICB9XG4gIHRoaXMuX2luaXRCb2R5KGJvZHkpXG5cbiAgaWYgKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSB7XG4gICAgaWYgKG9wdGlvbnMuY2FjaGUgPT09ICduby1zdG9yZScgfHwgb3B0aW9ucy5jYWNoZSA9PT0gJ25vLWNhY2hlJykge1xuICAgICAgLy8gU2VhcmNoIGZvciBhICdfJyBwYXJhbWV0ZXIgaW4gdGhlIHF1ZXJ5IHN0cmluZ1xuICAgICAgdmFyIHJlUGFyYW1TZWFyY2ggPSAvKFs/Jl0pXz1bXiZdKi9cbiAgICAgIGlmIChyZVBhcmFtU2VhcmNoLnRlc3QodGhpcy51cmwpKSB7XG4gICAgICAgIC8vIElmIGl0IGFscmVhZHkgZXhpc3RzIHRoZW4gc2V0IHRoZSB2YWx1ZSB3aXRoIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLnVybC5yZXBsYWNlKHJlUGFyYW1TZWFyY2gsICckMV89JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBhIG5ldyAnXycgcGFyYW1ldGVyIHRvIHRoZSBlbmQgd2l0aCB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgIHZhciByZVF1ZXJ5U3RyaW5nID0gL1xcPy9cbiAgICAgICAgdGhpcy51cmwgKz0gKHJlUXVlcnlTdHJpbmcudGVzdCh0aGlzLnVybCkgPyAnJicgOiAnPycpICsgJ189JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7Ym9keTogdGhpcy5fYm9keUluaXR9KVxufVxuXG5mdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gIGJvZHlcbiAgICAudHJpbSgpXG4gICAgLnNwbGl0KCcmJylcbiAgICAuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgcmV0dXJuIGZvcm1cbn1cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gIC8vIFJlcGxhY2UgaW5zdGFuY2VzIG9mIFxcclxcbiBhbmQgXFxuIGZvbGxvd2VkIGJ5IGF0IGxlYXN0IG9uZSBzcGFjZSBvciBob3Jpem9udGFsIHRhYiB3aXRoIGEgc3BhY2VcbiAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjJcbiAgdmFyIHByZVByb2Nlc3NlZEhlYWRlcnMgPSByYXdIZWFkZXJzLnJlcGxhY2UoL1xccj9cXG5bXFx0IF0rL2csICcgJylcbiAgLy8gQXZvaWRpbmcgc3BsaXQgdmlhIHJlZ2V4IHRvIHdvcmsgYXJvdW5kIGEgY29tbW9uIElFMTEgYnVnIHdpdGggdGhlIGNvcmUtanMgMy42LjAgcmVnZXggcG9seWZpbGxcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaC9pc3N1ZXMvNzQ4XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy83NTFcbiAgcHJlUHJvY2Vzc2VkSGVhZGVyc1xuICAgIC5zcGxpdCgnXFxyJylcbiAgICAubWFwKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgcmV0dXJuIGhlYWRlci5pbmRleE9mKCdcXG4nKSA9PT0gMCA/IGhlYWRlci5zdWJzdHIoMSwgaGVhZGVyLmxlbmd0aCkgOiBoZWFkZXJcbiAgICB9KVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUud2FybignUmVzcG9uc2UgJyArIGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICByZXR1cm4gaGVhZGVyc1xufVxuXG5Cb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbmV4cG9ydCBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVzcG9uc2UpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGxlYXNlIHVzZSB0aGUgXCJuZXdcIiBvcGVyYXRvciwgdGhpcyBET00gb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi4nKVxuICB9XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDIwMCA6IG9wdGlvbnMuc3RhdHVzXG4gIGlmICh0aGlzLnN0YXR1cyA8IDIwMCB8fCB0aGlzLnN0YXR1cyA+IDU5OSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUmVzcG9uc2UnOiBUaGUgc3RhdHVzIHByb3ZpZGVkICgwKSBpcyBvdXRzaWRlIHRoZSByYW5nZSBbMjAwLCA1OTldLlwiKVxuICB9XG4gIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgdGhpcy5zdGF0dXNUZXh0ID0gb3B0aW9ucy5zdGF0dXNUZXh0ID09PSB1bmRlZmluZWQgPyAnJyA6ICcnICsgb3B0aW9ucy5zdGF0dXNUZXh0XG4gIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbn1cblxuQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgIHVybDogdGhpcy51cmxcbiAgfSlcbn1cblxuUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDIwMCwgc3RhdHVzVGV4dDogJyd9KVxuICByZXNwb25zZS5zdGF0dXMgPSAwXG4gIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gIHJldHVybiByZXNwb25zZVxufVxuXG52YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG59XG5cbmV4cG9ydCB2YXIgRE9NRXhjZXB0aW9uID0gZy5ET01FeGNlcHRpb25cbnRyeSB7XG4gIG5ldyBET01FeGNlcHRpb24oKVxufSBjYXRjaCAoZXJyKSB7XG4gIERPTUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG5hbWUpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHZhciBlcnJvciA9IEVycm9yKG1lc3NhZ2UpXG4gICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrXG4gIH1cbiAgRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKVxuICBET01FeGNlcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRE9NRXhjZXB0aW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaChpbnB1dCwgaW5pdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcblxuICAgIGlmIChyZXF1ZXN0LnNpZ25hbCAmJiByZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgIH1cblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgZnVuY3Rpb24gYWJvcnRYaHIoKSB7XG4gICAgICB4aHIuYWJvcnQoKVxuICAgIH1cblxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgIH1cbiAgICAgIC8vIFRoaXMgY2hlY2sgaWYgc3BlY2lmaWNhbGx5IGZvciB3aGVuIGEgdXNlciBmZXRjaGVzIGEgZmlsZSBsb2NhbGx5IGZyb20gdGhlIGZpbGUgc3lzdGVtXG4gICAgICAvLyBPbmx5IGlmIHRoZSBzdGF0dXMgaXMgb3V0IG9mIGEgbm9ybWFsIHJhbmdlXG4gICAgICBpZiAocmVxdWVzdC51cmwuc3RhcnRzV2l0aCgnZmlsZTovLycpICYmICh4aHIuc3RhdHVzIDwgMjAwIHx8IHhoci5zdGF0dXMgPiA1OTkpKSB7XG4gICAgICAgIG9wdGlvbnMuc3RhdHVzID0gMjAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5zdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgICAgfVxuICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCB0aW1lZCBvdXQnKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZml4VXJsKHVybCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHVybCA9PT0gJycgJiYgZy5sb2NhdGlvbi5ocmVmID8gZy5sb2NhdGlvbi5ocmVmIDogdXJsXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgZml4VXJsKHJlcXVlc3QudXJsKSwgdHJ1ZSlcblxuICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgfSBlbHNlIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnb21pdCcpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIpIHtcbiAgICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgc3VwcG9ydC5hcnJheUJ1ZmZlclxuICAgICAgKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluaXQgJiYgdHlwZW9mIGluaXQuaGVhZGVycyA9PT0gJ29iamVjdCcgJiYgIShpbml0LmhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzIHx8IChnLkhlYWRlcnMgJiYgaW5pdC5oZWFkZXJzIGluc3RhbmNlb2YgZy5IZWFkZXJzKSkpIHtcbiAgICAgIHZhciBuYW1lcyA9IFtdO1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaW5pdC5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgbmFtZXMucHVzaChub3JtYWxpemVOYW1lKG5hbWUpKVxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBub3JtYWxpemVWYWx1ZShpbml0LmhlYWRlcnNbbmFtZV0pKVxuICAgICAgfSlcbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lcy5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsKSB7XG4gICAgICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKVxuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIERPTkUgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSlcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgcmVxdWVzdC5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gIH0pXG59XG5cbmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxuXG5pZiAoIWcuZmV0Y2gpIHtcbiAgZy5mZXRjaCA9IGZldGNoXG4gIGcuSGVhZGVycyA9IEhlYWRlcnNcbiAgZy5SZXF1ZXN0ID0gUmVxdWVzdFxuICBnLlJlc3BvbnNlID0gUmVzcG9uc2Vcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbm1vdGlvbnN5bmMudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=