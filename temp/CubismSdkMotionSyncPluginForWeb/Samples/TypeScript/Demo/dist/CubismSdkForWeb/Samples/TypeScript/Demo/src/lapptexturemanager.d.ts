/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { csmVector } from '@framework/type/csmvector';
/**
 * テクスチャ管理クラス
 * 画像読み込み、管理を行うクラス。
 */
export declare class LAppTextureManager {
    /**
     * コンストラクタ
     */
    constructor();
    /**
     * 解放する。
     */
    release(): void;
    /**
     * 画像読み込み
     *
     * @param fileName 読み込む画像ファイルパス名
     * @param usePremultiply Premult処理を有効にするか
     * @return 画像情報、読み込み失敗時はnullを返す
     */
    createTextureFromPngFile(fileName: string, usePremultiply: boolean, callback: (textureInfo: TextureInfo) => void): void;
    /**
     * 画像の解放
     *
     * 配列に存在する画像全てを解放する。
     */
    releaseTextures(): void;
    /**
     * 画像の解放
     *
     * 指定したテクスチャの画像を解放する。
     * @param texture 解放するテクスチャ
     */
    releaseTextureByTexture(texture: WebGLTexture): void;
    /**
     * 画像の解放
     *
     * 指定した名前の画像を解放する。
     * @param fileName 解放する画像ファイルパス名
     */
    releaseTextureByFilePath(fileName: string): void;
    _textures: csmVector<TextureInfo>;
}
/**
 * 画像情報構造体
 */
export declare class TextureInfo {
    img: HTMLImageElement;
    id: WebGLTexture;
    width: number;
    height: number;
    usePremultply: boolean;
    fileName: string;
}
//# sourceMappingURL=lapptexturemanager.d.ts.map