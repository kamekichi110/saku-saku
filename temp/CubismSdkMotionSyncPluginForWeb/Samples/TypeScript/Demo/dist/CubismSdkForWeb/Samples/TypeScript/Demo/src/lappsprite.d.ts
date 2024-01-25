/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/**
 * スプライトを実装するクラス
 *
 * テクスチャＩＤ、Rectの管理
 */
export declare class LAppSprite {
    /**
     * コンストラクタ
     * @param x            x座標
     * @param y            y座標
     * @param width        横幅
     * @param height       高さ
     * @param textureId    テクスチャ
     */
    constructor(x: number, y: number, width: number, height: number, textureId: WebGLTexture);
    /**
     * 解放する。
     */
    release(): void;
    /**
     * テクスチャを返す
     */
    getTexture(): WebGLTexture;
    /**
     * 描画する。
     * @param programId シェーダープログラム
     * @param canvas 描画するキャンパス情報
     */
    render(programId: WebGLProgram): void;
    /**
     * 当たり判定
     * @param pointX x座標
     * @param pointY y座標
     */
    isHit(pointX: number, pointY: number): boolean;
    _texture: WebGLTexture;
    _vertexBuffer: WebGLBuffer;
    _uvBuffer: WebGLBuffer;
    _indexBuffer: WebGLBuffer;
    _rect: Rect;
    _positionLocation: number;
    _uvLocation: number;
    _textureLocation: WebGLUniformLocation;
    _positionArray: Float32Array;
    _uvArray: Float32Array;
    _indexArray: Uint16Array;
    _firstDraw: boolean;
}
export declare class Rect {
    left: number;
    right: number;
    up: number;
    down: number;
}
//# sourceMappingURL=lappsprite.d.ts.map