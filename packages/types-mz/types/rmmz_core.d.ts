/**
 * The static class that defines utility methods.
 *
 * @namespace
 */
declare function Utils(): void;
declare namespace Utils {
  let RPGMAKER_NAME: string;
  let RPGMAKER_VERSION: string;
  /**
   * Checks whether the current RPG Maker version is greater than or equal to
   * the given version.
   *
   * @param {string} version - The "x.x.x" format string to compare.
   * @returns {boolean} True if the current version is greater than or equal
   *                    to the given version.
   */
  function checkRMVersion(version: string): boolean;
  /**
   * Checks whether the option is in the query string.
   *
   * @param {string} name - The option name.
   * @returns {boolean} True if the option is in the query string.
   */
  function isOptionValid(name: string): boolean;
  /**
   * Checks whether the platform is NW.js.
   *
   * @returns {boolean} True if the platform is NW.js.
   */
  function isNwjs(): boolean;
  /**
   * Checks whether the platform is a mobile device.
   *
   * @returns {boolean} True if the platform is a mobile device.
   */
  function isMobileDevice(): boolean;
  /**
   * Checks whether the browser is Mobile Safari.
   *
   * @returns {boolean} True if the browser is Mobile Safari.
   */
  function isMobileSafari(): boolean;
  /**
   * Checks whether the browser is Android Chrome.
   *
   * @returns {boolean} True if the browser is Android Chrome.
   */
  function isAndroidChrome(): boolean;
  /**
   * Checks whether the browser is accessing local files.
   *
   * @returns {boolean} True if the browser is accessing local files.
   */
  function isLocal(): boolean;
  /**
   * Checks whether the browser supports WebGL.
   *
   * @returns {boolean} True if the browser supports WebGL.
   */
  function canUseWebGL(): boolean;
  /**
   * Checks whether the browser supports Web Audio API.
   *
   * @returns {boolean} True if the browser supports Web Audio API.
   */
  function canUseWebAudioAPI(): boolean;
  /**
   * Checks whether the browser supports CSS Font Loading.
   *
   * @returns {boolean} True if the browser supports CSS Font Loading.
   */
  function canUseCssFontLoading(): boolean;
  /**
   * Checks whether the browser supports IndexedDB.
   *
   * @returns {boolean} True if the browser supports IndexedDB.
   */
  function canUseIndexedDB(): boolean;
  /**
   * Checks whether the browser can play ogg files.
   *
   * @returns {boolean} True if the browser can play ogg files.
   */
  function canPlayOgg(): boolean;
  /**
   * Checks whether the browser can play webm files.
   *
   * @returns {boolean} True if the browser can play webm files.
   */
  function canPlayWebm(): boolean;
  /**
   * Encodes a URI component without escaping slash characters.
   *
   * @param {string} str - The input string.
   * @returns {string} Encoded string.
   */
  function encodeURI(str: string): string;
  /**
   * Gets the filename that does not include subfolders.
   *
   * @param {string} filename - The filename with subfolders.
   * @returns {string} The filename without subfolders.
   */
  function extractFileName(filename: string): string;
  /**
   * Escapes special characters for HTML.
   *
   * @param {string} str - The input string.
   * @returns {string} Escaped string.
   */
  function escapeHtml(str: string): string;
  /**
   * Checks whether the string contains any Arabic characters.
   *
   * @returns {boolean} True if the string contains any Arabic characters.
   */
  function containsArabic(str: any): boolean;
  /**
   * Sets information related to encryption.
   *
   * @param {boolean} hasImages - Whether the image files are encrypted.
   * @param {boolean} hasAudio - Whether the audio files are encrypted.
   * @param {string} key - The encryption key.
   */
  function setEncryptionInfo(
    hasImages: boolean,
    hasAudio: boolean,
    key: string,
  ): void;
  /**
   * Checks whether the image files in the game are encrypted.
   *
   * @returns {boolean} True if the image files are encrypted.
   */
  function hasEncryptedImages(): boolean;
  /**
   * Checks whether the audio files in the game are encrypted.
   *
   * @returns {boolean} True if the audio files are encrypted.
   */
  function hasEncryptedAudio(): boolean;
  /**
   * Decrypts encrypted data.
   *
   * @param {ArrayBuffer} source - The data to be decrypted.
   * @returns {ArrayBuffer} The decrypted data.
   */
  function decryptArrayBuffer(source: ArrayBuffer): ArrayBuffer;
}
/**
 * The static class that carries out graphics processing.
 *
 * @namespace
 */
declare function Graphics(): void;
declare namespace Graphics {
  /**
   * Initializes the graphics system.
   *
   * @returns {boolean} True if the graphics system is available.
   */
  function initialize(): boolean;
  const app: any;
  const effekseer: any;
  /**
   * Register a handler for tick events.
   *
   * @param {function} handler - The listener function to be added for updates.
   */
  function setTickHandler(handler: Function): void;
  /**
   * Starts the game loop.
   */
  function startGameLoop(): void;
  /**
   * Stops the game loop.
   */
  function stopGameLoop(): void;
  /**
   * Sets the stage to be rendered.
   *
   * @param {Stage} stage - The stage object to be rendered.
   */
  function setStage(stage: Stage): void;
  /**
   * Shows the loading spinner.
   */
  function startLoading(): void;
  /**
   * Erases the loading spinner.
   *
   * @returns {boolean} True if the loading spinner was active.
   */
  function endLoading(): boolean;
  /**
   * Displays the error text to the screen.
   *
   * @param {string} name - The name of the error.
   * @param {string} message - The message of the error.
   * @param {Error} [error] - The error object.
   */
  function printError(name: string, message: string, error?: Error): void;
  /**
   * Displays a button to try to reload resources.
   *
   * @param {function} retry - The callback function to be called when the button
   *                           is pressed.
   */
  function showRetryButton(retry: Function): void;
  /**
   * Erases the loading error text.
   */
  function eraseError(): void;
  /**
   * Converts an x coordinate on the page to the corresponding
   * x coordinate on the canvas area.
   *
   * @param {number} x - The x coordinate on the page to be converted.
   * @returns {number} The x coordinate on the canvas area.
   */
  function pageToCanvasX(x: number): number;
  /**
   * Converts a y coordinate on the page to the corresponding
   * y coordinate on the canvas area.
   *
   * @param {number} y - The y coordinate on the page to be converted.
   * @returns {number} The y coordinate on the canvas area.
   */
  function pageToCanvasY(y: number): number;
  /**
   * Checks whether the specified point is inside the game canvas area.
   *
   * @param {number} x - The x coordinate on the canvas area.
   * @param {number} y - The y coordinate on the canvas area.
   * @returns {boolean} True if the specified point is inside the game canvas area.
   */
  function isInsideCanvas(x: number, y: number): boolean;
  /**
   * Shows the game screen.
   */
  function showScreen(): void;
  /**
   * Hides the game screen.
   */
  function hideScreen(): void;
  /**
   * Changes the size of the game screen.
   *
   * @param {number} width - The width of the game screen.
   * @param {number} height - The height of the game screen.
   */
  function resize(width: number, height: number): void;
  let width: any;
  let height: any;
  let defaultScale: any;
  function _createAllElements(): void;
  function _updateAllElements(): void;
  function _onTick(deltaTime: any): void;
  function _canRender(): boolean;
  function _updateRealScale(): void;
  function _stretchWidth(): number;
  function _stretchHeight(): number;
  function _makeErrorHtml(name: any, message: any): string;
  function _defaultStretchMode(): boolean;
  function _createErrorPrinter(): void;
  function _updateErrorPrinter(): void;
  function _createCanvas(): void;
  function _updateCanvas(): void;
  function _updateVideo(): void;
  function _createLoadingSpinner(): void;
  function _createFPSCounter(): void;
  function _centerElement(element: any): void;
  function _disableContextMenu(): void;
  function _applyCanvasFilter(): void;
  function _clearCanvasFilter(): void;
  function _setupEventHandlers(): void;
  function _onWindowResize(): void;
  function _onKeyDown(event: any): void;
  function _switchFPSCounter(): void;
  function _switchStretchMode(): void;
  function _switchFullScreen(): void;
  function _isFullScreen(): any;
  function _requestFullScreen(): void;
  function _cancelFullScreen(): void;
  function _createPixiApp(): void;
  function _setupPixi(): void;
  function _createEffekseerContext(): void;
  class FPSCounter {
    private constructor();
    initialize(): void;
    startTick(): void;
    endTick(): void;
    switchMode(): void;
    _createElements(): void;
    _update(): void;
  }
}
/**
 * The point class.
 *
 * @class
 * @extends PIXI.Point
 * @param {number} x - The x coordinate.
 * @param {number} y - The y coordinate.
 */
declare function Point(...args: any[]): void;
declare class Point {
  /**
   * The point class.
   *
   * @class
   * @extends PIXI.Point
   * @param {number} x - The x coordinate.
   * @param {number} y - The y coordinate.
   */
  constructor(...args: any[]);
  initialize(x: any, y: any): void;
}
/**
 * The rectangle class.
 *
 * @class
 * @extends PIXI.Rectangle
 * @param {number} x - The x coordinate for the upper-left corner.
 * @param {number} y - The y coordinate for the upper-left corner.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 */
declare function Rectangle(...args: any[]): void;
declare class Rectangle {
  /**
   * The rectangle class.
   *
   * @class
   * @extends PIXI.Rectangle
   * @param {number} x - The x coordinate for the upper-left corner.
   * @param {number} y - The y coordinate for the upper-left corner.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   */
  constructor(...args: any[]);
  initialize(x: any, y: any, width: any, height: any): void;
}
/**
 * The basic object that represents an image.
 *
 * @class
 * @param {number} width - The width of the bitmap.
 * @param {number} height - The height of the bitmap.
 */
declare function Bitmap(...args: any[]): void;
declare class Bitmap {
  /**
   * The basic object that represents an image.
   *
   * @class
   * @param {number} width - The width of the bitmap.
   * @param {number} height - The height of the bitmap.
   */
  constructor(...args: any[]);
  initialize(width: any, height: any): void;
  _canvas: HTMLCanvasElement;
  _context: CanvasRenderingContext2D;
  _baseTexture: any;
  _image: HTMLImageElement;
  _url: string;
  _paintOpacity: number;
  _smooth: boolean;
  _loadListeners: any[];
  _loadingState: string;
  /**
   * The face name of the font.
   *
   * @type string
   */
  fontFace: string;
  /**
   * The size of the font in pixels.
   *
   * @type number
   */
  fontSize: number;
  /**
   * Whether the font is bold.
   *
   * @type boolean
   */
  fontBold: boolean;
  /**
   * Whether the font is italic.
   *
   * @type boolean
   */
  fontItalic: boolean;
  /**
   * The color of the text in CSS format.
   *
   * @type string
   */
  textColor: string;
  /**
   * The color of the outline of the text in CSS format.
   *
   * @type string
   */
  outlineColor: string;
  /**
   * The width of the outline of the text.
   *
   * @type number
   */
  outlineWidth: number;
  /**
   * Checks whether the bitmap is ready to render.
   *
   * @returns {boolean} True if the bitmap is ready to render.
   */
  isReady(): boolean;
  /**
   * Checks whether a loading error has occurred.
   *
   * @returns {boolean} True if a loading error has occurred.
   */
  isError(): boolean;
  get url(): string;
  get baseTexture(): any;
  get image(): HTMLImageElement;
  get canvas(): HTMLCanvasElement;
  get context(): CanvasRenderingContext2D;
  get width(): number;
  get height(): number;
  get rect(): Rectangle;
  set smooth(value: boolean);
  get smooth(): boolean;
  set paintOpacity(value: number);
  get paintOpacity(): number;
  /**
   * Destroys the bitmap.
   */
  destroy(): void;
  /**
   * Resizes the bitmap.
   *
   * @param {number} width - The new width of the bitmap.
   * @param {number} height - The new height of the bitmap.
   */
  resize(width: number, height: number): void;
  /**
   * Performs a block transfer.
   *
   * @param {Bitmap} source - The bitmap to draw.
   * @param {number} sx - The x coordinate in the source.
   * @param {number} sy - The y coordinate in the source.
   * @param {number} sw - The width of the source image.
   * @param {number} sh - The height of the source image.
   * @param {number} dx - The x coordinate in the destination.
   * @param {number} dy - The y coordinate in the destination.
   * @param {number} [dw=sw] The width to draw the image in the destination.
   * @param {number} [dh=sh] The height to draw the image in the destination.
   */
  blt(
    source: Bitmap,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw?: number,
    dh?: number,
  ): void;
  /**
   * Returns pixel color at the specified point.
   *
   * @param {number} x - The x coordinate of the pixel in the bitmap.
   * @param {number} y - The y coordinate of the pixel in the bitmap.
   * @returns {string} The pixel color (hex format).
   */
  getPixel(x: number, y: number): string;
  /**
   * Returns alpha pixel value at the specified point.
   *
   * @param {number} x - The x coordinate of the pixel in the bitmap.
   * @param {number} y - The y coordinate of the pixel in the bitmap.
   * @returns {string} The alpha value.
   */
  getAlphaPixel(x: number, y: number): string;
  /**
   * Clears the specified rectangle.
   *
   * @param {number} x - The x coordinate for the upper-left corner.
   * @param {number} y - The y coordinate for the upper-left corner.
   * @param {number} width - The width of the rectangle to clear.
   * @param {number} height - The height of the rectangle to clear.
   */
  clearRect(x: number, y: number, width: number, height: number): void;
  /**
   * Clears the entire bitmap.
   */
  clear(): void;
  /**
   * Fills the specified rectangle.
   *
   * @param {number} x - The x coordinate for the upper-left corner.
   * @param {number} y - The y coordinate for the upper-left corner.
   * @param {number} width - The width of the rectangle to fill.
   * @param {number} height - The height of the rectangle to fill.
   * @param {string} color - The color of the rectangle in CSS format.
   */
  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
  ): void;
  /**
   * Fills the entire bitmap.
   *
   * @param {string} color - The color of the rectangle in CSS format.
   */
  fillAll(color: string): void;
  /**
   * Draws the specified rectangular frame.
   *
   * @param {number} x - The x coordinate for the upper-left corner.
   * @param {number} y - The y coordinate for the upper-left corner.
   * @param {number} width - The width of the rectangle to fill.
   * @param {number} height - The height of the rectangle to fill.
   * @param {string} color - The color of the rectangle in CSS format.
   */
  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
  ): void;
  /**
   * Draws the rectangle with a gradation.
   *
   * @param {number} x - The x coordinate for the upper-left corner.
   * @param {number} y - The y coordinate for the upper-left corner.
   * @param {number} width - The width of the rectangle to fill.
   * @param {number} height - The height of the rectangle to fill.
   * @param {string} color1 - The gradient starting color.
   * @param {string} color2 - The gradient ending color.
   * @param {boolean} vertical - Whether the gradient should be draw as vertical or not.
   */
  gradientFillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color1: string,
    color2: string,
    vertical: boolean,
  ): void;
  /**
   * Draws a bitmap in the shape of a circle.
   *
   * @param {number} x - The x coordinate based on the circle center.
   * @param {number} y - The y coordinate based on the circle center.
   * @param {number} radius - The radius of the circle.
   * @param {string} color - The color of the circle in CSS format.
   */
  drawCircle(x: number, y: number, radius: number, color: string): void;
  /**
   * Draws the outline text to the bitmap.
   *
   * @param {string} text - The text that will be drawn.
   * @param {number} x - The x coordinate for the left of the text.
   * @param {number} y - The y coordinate for the top of the text.
   * @param {number} maxWidth - The maximum allowed width of the text.
   * @param {number} lineHeight - The height of the text line.
   * @param {string} align - The alignment of the text.
   */
  drawText(
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    align: string,
  ): void;
  /**
   * Returns the width of the specified text.
   *
   * @param {string} text - The text to be measured.
   * @returns {number} The width of the text in pixels.
   */
  measureTextWidth(text: string): number;
  /**
   * Adds a callback function that will be called when the bitmap is loaded.
   *
   * @param {function} listner - The callback function.
   */
  addLoadListener(listner: Function): void;
  /**
   * Tries to load the image again.
   */
  retry(): void;
  _makeFontNameText(): string;
  _drawTextOutline(text: any, tx: any, ty: any, maxWidth: any): void;
  _drawTextBody(text: any, tx: any, ty: any, maxWidth: any): void;
  _createCanvas(width: any, height: any): void;
  _ensureCanvas(): void;
  _destroyCanvas(): void;
  _createBaseTexture(source: any): void;
  _updateScaleMode(): void;
  _startLoading(): void;
  _startDecrypting(): void;
  _onXhrLoad(xhr: any): void;
  _onLoad(): void;
  _callLoadListeners(): void;
  _onError(): void;
}
declare namespace Bitmap {
  /**
   * Loads a image file.
   *
   * @param {string} url - The image url of the texture.
   * @returns {Bitmap} The new bitmap object.
   */
  function load(url: string): Bitmap;
  /**
   * Takes a snapshot of the game screen.
   *
   * @param {Stage} stage - The stage object.
   * @returns {Bitmap} The new bitmap object.
   */
  function snap(stage: Stage): Bitmap;
}
/**
 * The basic object that is rendered to the game screen.
 *
 * @class
 * @extends PIXI.Sprite
 * @param {Bitmap} bitmap - The image for the sprite.
 */
declare function Sprite(...args: any[]): void;
declare class Sprite {
  /**
   * The basic object that is rendered to the game screen.
   *
   * @class
   * @extends PIXI.Sprite
   * @param {Bitmap} bitmap - The image for the sprite.
   */
  constructor(...args: any[]);
  initialize(bitmap: any): void;
  spriteId: number;
  _bitmap: any;
  _frame: Rectangle;
  _hue: number;
  _blendColor: any;
  _colorTone: any;
  _colorFilter: ColorFilter;
  _blendMode: any;
  _hidden: boolean;
  set bitmap(value: any);
  get bitmap(): any;
  set width(value: any);
  get width(): any;
  set height(value: any);
  get height(): any;
  set opacity(value: number);
  get opacity(): number;
  set blendMode(value: any);
  get blendMode(): any;
  /**
   * Destroys the sprite.
   */
  destroy(): void;
  /**
   * Updates the sprite for each frame.
   */
  update(): void;
  /**
   * Makes the sprite "hidden".
   */
  hide(): void;
  /**
   * Releases the "hidden" state of the sprite.
   */
  show(): void;
  /**
   * Reflects the "hidden" state of the sprite to the visible state.
   */
  updateVisibility(): void;
  visible: boolean;
  /**
   * Sets the x and y at once.
   *
   * @param {number} x - The x coordinate of the sprite.
   * @param {number} y - The y coordinate of the sprite.
   */
  move(x: number, y: number): void;
  x: number;
  y: number;
  /**
   * Sets the rectagle of the bitmap that the sprite displays.
   *
   * @param {number} x - The x coordinate of the frame.
   * @param {number} y - The y coordinate of the frame.
   * @param {number} width - The width of the frame.
   * @param {number} height - The height of the frame.
   */
  setFrame(x: number, y: number, width: number, height: number): void;
  _refreshFrame: boolean;
  /**
   * Sets the hue rotation value.
   *
   * @param {number} hue - The hue value (-360, 360).
   */
  setHue(hue: number): void;
  /**
   * Gets the blend color for the sprite.
   *
   * @returns {array} The blend color [r, g, b, a].
   */
  getBlendColor(): any[];
  /**
   * Sets the blend color for the sprite.
   *
   * @param {array} color - The blend color [r, g, b, a].
   */
  setBlendColor(color: any[]): void;
  /**
   * Gets the color tone for the sprite.
   *
   * @returns {array} The color tone [r, g, b, gray].
   */
  getColorTone(): any[];
  /**
   * Sets the color tone for the sprite.
   *
   * @param {array} tone - The color tone [r, g, b, gray].
   */
  setColorTone(tone: any[]): void;
  _onBitmapChange(): void;
  _onBitmapLoad(bitmapLoaded: any): void;
  _refresh(): void;
  _createColorFilter(): void;
  filters: any[];
  _updateColorFilter(): void;
}
declare namespace Sprite {
  let _emptyBaseTexture: any;
  let _counter: number;
}
/**
 * The tilemap which displays 2D tile-based game map.
 *
 * @class
 * @extends PIXI.Container
 */
declare function Tilemap(...args: any[]): void;
declare class Tilemap {
  /**
   * The tilemap which displays 2D tile-based game map.
   *
   * @class
   * @extends PIXI.Container
   */
  constructor(...args: any[]);
  initialize(): void;
  _width: any;
  _height: any;
  _margin: number;
  _mapWidth: number;
  _mapHeight: number;
  _mapData: any[];
  _bitmaps: any[];
  /**
   * The width of each tile.
   *
   * @type number
   */
  tileWidth: number;
  /**
   * The height of each tile.
   *
   * @type number
   */
  tileHeight: number;
  /**
   * The origin point of the tilemap for scrolling.
   *
   * @type Point
   */
  origin: Point;
  /**
   * The tileset flags.
   *
   * @type array
   */
  flags: any[];
  /**
   * The animation count for autotiles.
   *
   * @type number
   */
  animationCount: number;
  /**
   * Whether the tilemap loops horizontal.
   *
   * @type boolean
   */
  horizontalWrap: boolean;
  /**
   * Whether the tilemap loops vertical.
   *
   * @type boolean
   */
  verticalWrap: boolean;
  set width(value: any);
  get width(): any;
  set height(value: any);
  get height(): any;
  /**
   * Destroys the tilemap.
   */
  destroy(): void;
  /**
   * Sets the tilemap data.
   *
   * @param {number} width - The width of the map in number of tiles.
   * @param {number} height - The height of the map in number of tiles.
   * @param {array} data - The one dimensional array for the map data.
   */
  setData(width: number, height: number, data: any[]): void;
  /**
   * Updates the tilemap for each frame.
   */
  update(): void;
  animationFrame: number;
  /**
   * Sets the bitmaps used as a tileset.
   *
   * @param {array} bitmaps - The array of the tileset bitmaps.
   */
  setBitmaps(bitmaps: any[]): void;
  _needsBitmapsUpdate: boolean;
  /**
   * Forces to repaint the entire tilemap.
   */
  refresh(): void;
  _needsRepaint: boolean;
  /**
   * Updates the transform on all children of this container for rendering.
   */
  updateTransform(): void;
  _lastAnimationFrame: number;
  _lastStartX: number;
  _lastStartY: number;
  _createLayers(): void;
  _lowerLayer: any;
  _upperLayer: any;
  _updateBitmaps(): void;
  _addAllSpots(startX: any, startY: any): void;
  _addSpot(startX: any, startY: any, x: any, y: any): void;
  _addSpotTile(tileId: any, dx: any, dy: any): void;
  _addTile(layer: any, tileId: any, dx: any, dy: any): void;
  _addNormalTile(layer: any, tileId: any, dx: any, dy: any): void;
  _addAutotile(layer: any, tileId: any, dx: any, dy: any): void;
  _addTableEdge(layer: any, tileId: any, dx: any, dy: any): void;
  _addShadow(layer: any, shadowBits: any, dx: any, dy: any): void;
  _readMapData(x: any, y: any, z: any): any;
  _isHigherTile(tileId: any): number;
  _isTableTile(tileId: any): number;
  _isOverpassPosition(): boolean;
  _sortChildren(): void;
  _compareChildOrder(a: any, b: any): number;
}
declare namespace Tilemap {
  let TILE_ID_B: number;
  let TILE_ID_C: number;
  let TILE_ID_D: number;
  let TILE_ID_E: number;
  let TILE_ID_A5: number;
  let TILE_ID_A1: number;
  let TILE_ID_A2: number;
  let TILE_ID_A3: number;
  let TILE_ID_A4: number;
  let TILE_ID_MAX: number;
  function isVisibleTile(tileId: any): boolean;
  function isAutotile(tileId: any): boolean;
  function getAutotileKind(tileId: any): number;
  function getAutotileShape(tileId: any): number;
  function makeAutotileId(kind: any, shape: any): any;
  function isSameKindTile(tileID1: any, tileID2: any): boolean;
  function isTileA1(tileId: any): boolean;
  function isTileA2(tileId: any): boolean;
  function isTileA3(tileId: any): boolean;
  function isTileA4(tileId: any): boolean;
  function isTileA5(tileId: any): boolean;
  function isWaterTile(tileId: any): boolean;
  function isWaterfallTile(tileId: any): boolean;
  function isGroundTile(tileId: any): boolean;
  function isShadowingTile(tileId: any): boolean;
  function isRoofTile(tileId: any): boolean;
  function isWallTopTile(tileId: any): boolean;
  function isWallSideTile(tileId: any): boolean;
  function isWallTile(tileId: any): boolean;
  function isFloorTypeAutotile(tileId: any): boolean;
  function isWallTypeAutotile(tileId: any): boolean;
  function isWaterfallTypeAutotile(tileId: any): boolean;
  let FLOOR_AUTOTILE_TABLE: number[][][];
  let WALL_AUTOTILE_TABLE: number[][][];
  let WATERFALL_AUTOTILE_TABLE: number[][][];
  class Layer {
    private constructor();
    initialize(): void;
    destroy(): void;
    setBitmaps(bitmaps: any): void;
    clear(): void;
    size(): any;
    addRect(
      setNumber: any,
      sx: any,
      sy: any,
      dx: any,
      dy: any,
      w: any,
      h: any,
    ): void;
    render(renderer: any): void;
    isReady(): boolean;
    _createVao(): void;
    _updateIndexBuffer(): void;
    _updateVertexBuffer(): void;
  }
  namespace Layer {
    let MAX_GL_TEXTURES: number;
    let VERTEX_STRIDE: number;
    let MAX_SIZE: number;
  }
  class CombinedLayer {
    private constructor();
    initialize(): void;
    destroy(): void;
    setBitmaps(bitmaps: any): void;
    clear(): void;
    size(): any;
    addRect(
      setNumber: any,
      sx: any,
      sy: any,
      dx: any,
      dy: any,
      w: any,
      h: any,
    ): void;
    isReady(): any;
  }
  class Renderer {
    private constructor();
    initialize(renderer: any): void;
    destroy(): void;
    getShader(): any;
    contextChange(): void;
    _createShader(): any;
    _createInternalTextures(): void;
    _destroyInternalTextures(): void;
    updateTextures(renderer: any, images: any): void;
    bindTextures(renderer: any): void;
  }
}
/**
 * The sprite object for a tiling image.
 *
 * @class
 * @extends PIXI.TilingSprite
 * @param {Bitmap} bitmap - The image for the tiling sprite.
 */
declare function TilingSprite(...args: any[]): void;
declare class TilingSprite {
  /**
   * The sprite object for a tiling image.
   *
   * @class
   * @extends PIXI.TilingSprite
   * @param {Bitmap} bitmap - The image for the tiling sprite.
   */
  constructor(...args: any[]);
  initialize(bitmap: any): void;
  _bitmap: any;
  _width: number;
  _height: number;
  _frame: Rectangle;
  /**
   * The origin point of the tiling sprite for scrolling.
   *
   * @type Point
   */
  origin: Point;
  set bitmap(value: any);
  get bitmap(): any;
  set opacity(value: number);
  get opacity(): number;
  /**
   * Destroys the tiling sprite.
   */
  destroy(): void;
  /**
   * Updates the tiling sprite for each frame.
   */
  update(): void;
  /**
   * Sets the x, y, width, and height all at once.
   *
   * @param {number} x - The x coordinate of the tiling sprite.
   * @param {number} y - The y coordinate of the tiling sprite.
   * @param {number} width - The width of the tiling sprite.
   * @param {number} height - The height of the tiling sprite.
   */
  move(x: number, y: number, width: number, height: number): void;
  x: number;
  y: number;
  /**
   * Specifies the region of the image that the tiling sprite will use.
   *
   * @param {number} x - The x coordinate of the frame.
   * @param {number} y - The y coordinate of the frame.
   * @param {number} width - The width of the frame.
   * @param {number} height - The height of the frame.
   */
  setFrame(x: number, y: number, width: number, height: number): void;
  /**
   * Updates the transform on all children of this container for rendering.
   */
  updateTransform(): void;
  _onBitmapChange(): void;
  _onBitmapLoad(): void;
  _refresh(): void;
}
declare namespace TilingSprite {
  let _emptyBaseTexture_1: any;
  export { _emptyBaseTexture_1 as _emptyBaseTexture };
}
/**
 * The sprite which covers the entire game screen.
 *
 * @class
 * @extends PIXI.Container
 */
declare function ScreenSprite(...args: any[]): void;
declare class ScreenSprite {
  /**
   * The sprite which covers the entire game screen.
   *
   * @class
   * @extends PIXI.Container
   */
  constructor(...args: any[]);
  initialize(): void;
  _graphics: any;
  opacity: number;
  _red: number;
  _green: number;
  _blue: number;
  /**
   * Destroys the screen sprite.
   */
  destroy(): void;
  /**
   * Sets black to the color of the screen sprite.
   */
  setBlack(): void;
  /**
   * Sets white to the color of the screen sprite.
   */
  setWhite(): void;
  /**
   * Sets the color of the screen sprite by values.
   *
   * @param {number} r - The red value in the range (0, 255).
   * @param {number} g - The green value in the range (0, 255).
   * @param {number} b - The blue value in the range (0, 255).
   */
  setColor(r: number, g: number, b: number): void;
}
/**
 * The window in the game.
 *
 * @class
 * @extends PIXI.Container
 */
declare function Window(...args: any[]): void;
declare class Window {
  /**
   * The window in the game.
   *
   * @class
   * @extends PIXI.Container
   */
  constructor(...args: any[]);
  initialize(): void;
  _isWindow: boolean;
  _windowskin: any;
  _width: any;
  _height: number;
  _cursorRect: Rectangle;
  _openness: number;
  _animationCount: number;
  _padding: number;
  _margin: number;
  _colorTone: any;
  _innerChildren: any[];
  _container: any;
  _backSprite: Sprite;
  _frameSprite: Sprite;
  _contentsBackSprite: Sprite;
  _cursorSprite: Sprite;
  _contentsSprite: Sprite;
  _downArrowSprite: Sprite;
  _upArrowSprite: Sprite;
  _pauseSignSprite: Sprite;
  /**
   * The origin point of the window for scrolling.
   *
   * @type Point
   */
  origin: Point;
  /**
   * The active state for the window.
   *
   * @type boolean
   */
  active: boolean;
  /**
   * The visibility of the frame.
   *
   * @type boolean
   */
  frameVisible: boolean;
  /**
   * The visibility of the cursor.
   *
   * @type boolean
   */
  cursorVisible: boolean;
  /**
   * The visibility of the down scroll arrow.
   *
   * @type boolean
   */
  downArrowVisible: boolean;
  /**
   * The visibility of the up scroll arrow.
   *
   * @type boolean
   */
  upArrowVisible: boolean;
  /**
   * The visibility of the pause sign.
   *
   * @type boolean
   */
  pause: boolean;
  set windowskin(value: any);
  get windowskin(): any;
  set contents(value: any);
  get contents(): any;
  set contentsBack(value: any);
  get contentsBack(): any;
  set width(value: any);
  get width(): any;
  set height(value: any);
  get height(): any;
  set padding(value: any);
  get padding(): any;
  set margin(value: any);
  get margin(): any;
  set opacity(value: number);
  get opacity(): number;
  set backOpacity(value: number);
  get backOpacity(): number;
  set contentsOpacity(value: number);
  get contentsOpacity(): number;
  set openness(value: any);
  get openness(): any;
  get innerWidth(): number;
  get innerHeight(): number;
  get innerRect(): Rectangle;
  /**
   * Destroys the window.
   */
  destroy(): void;
  /**
   * Updates the window for each frame.
   */
  update(): void;
  /**
   * Sets the x, y, width, and height all at once.
   *
   * @param {number} x - The x coordinate of the window.
   * @param {number} y - The y coordinate of the window.
   * @param {number} width - The width of the window.
   * @param {number} height - The height of the window.
   */
  move(x: number, y: number, width: number, height: number): void;
  x: number;
  y: number;
  /**
   * Checks whether the window is completely open (openness == 255).
   *
   * @returns {boolean} True if the window is open.
   */
  isOpen(): boolean;
  /**
   * Checks whether the window is completely closed (openness == 0).
   *
   * @returns {boolean} True if the window is closed.
   */
  isClosed(): boolean;
  /**
   * Sets the position of the command cursor.
   *
   * @param {number} x - The x coordinate of the cursor.
   * @param {number} y - The y coordinate of the cursor.
   * @param {number} width - The width of the cursor.
   * @param {number} height - The height of the cursor.
   */
  setCursorRect(x: number, y: number, width: number, height: number): void;
  /**
   * Moves the cursor position by the given amount.
   *
   * @param {number} x - The amount of horizontal movement.
   * @param {number} y - The amount of vertical movement.
   */
  moveCursorBy(x: number, y: number): void;
  /**
   * Moves the inner children by the given amount.
   *
   * @param {number} x - The amount of horizontal movement.
   * @param {number} y - The amount of vertical movement.
   */
  moveInnerChildrenBy(x: number, y: number): void;
  /**
   * Changes the color of the background.
   *
   * @param {number} r - The red value in the range (-255, 255).
   * @param {number} g - The green value in the range (-255, 255).
   * @param {number} b - The blue value in the range (-255, 255).
   */
  setTone(r: number, g: number, b: number): void;
  /**
   * Adds a child between the background and contents.
   *
   * @param {object} child - The child to add.
   * @returns {object} The child that was added.
   */
  addChildToBack(child: object): object;
  /**
   * Adds a child to the client area.
   *
   * @param {object} child - The child to add.
   * @returns {object} The child that was added.
   */
  addInnerChild(child: object): object;
  /**
   * Updates the transform on all children of this container for rendering.
   */
  updateTransform(): void;
  /**
   * Draws the window shape into PIXI.Graphics object. Used by WindowLayer.
   */
  drawShape(graphics: any): void;
  _createAllParts(): void;
  _createContainer(): void;
  _createBackSprite(): void;
  _createFrameSprite(): void;
  _createClientArea(): void;
  _clientArea: Sprite;
  _createContentsBackSprite(): void;
  _createCursorSprite(): void;
  _createContentsSprite(): void;
  _createArrowSprites(): void;
  _createPauseSignSprites(): void;
  _onWindowskinLoad(): void;
  _refreshAllParts(): void;
  _refreshBack(): void;
  _refreshFrame(): void;
  _refreshCursor(): void;
  _setRectPartsGeometry(sprite: any, srect: any, drect: any, m: any): void;
  _refreshArrows(): void;
  _refreshPauseSign(): void;
  _updateClientArea(): void;
  _updateFrame(): void;
  _updateContentsBack(): void;
  _updateCursor(): void;
  _makeCursorAlpha(): number;
  _updateContents(): void;
  _updateArrows(): void;
  _updatePauseSign(): void;
  _updateFilterArea(): void;
}
/**
 * The layer which contains game windows.
 *
 * @class
 * @extends PIXI.Container
 */
declare function WindowLayer(...args: any[]): void;
declare class WindowLayer {
  /**
   * The layer which contains game windows.
   *
   * @class
   * @extends PIXI.Container
   */
  constructor(...args: any[]);
  initialize(): void;
  /**
   * Updates the window layer for each frame.
   */
  update(): void;
  /**
   * Renders the object using the WebGL renderer.
   *
   * @param {PIXI.Renderer} renderer - The renderer.
   */
  render(renderer: PIXI.Renderer): void;
}
/**
 * The weather effect which displays rain, storm, or snow.
 *
 * @class
 * @extends PIXI.Container
 */
declare function Weather(...args: any[]): void;
declare class Weather {
  /**
   * The weather effect which displays rain, storm, or snow.
   *
   * @class
   * @extends PIXI.Container
   */
  constructor(...args: any[]);
  initialize(): void;
  _width: any;
  _height: any;
  _sprites: any[];
  /**
   * The type of the weather in ["none", "rain", "storm", "snow"].
   *
   * @type string
   */
  type: string;
  /**
   * The power of the weather in the range (0, 9).
   *
   * @type number
   */
  power: number;
  /**
   * The origin point of the weather for scrolling.
   *
   * @type Point
   */
  origin: Point;
  /**
   * Destroys the weather.
   */
  destroy(): void;
  /**
   * Updates the weather for each frame.
   */
  update(): void;
  _createBitmaps(): void;
  _rainBitmap: Bitmap;
  _stormBitmap: Bitmap;
  _snowBitmap: Bitmap;
  _createDimmer(): void;
  _dimmerSprite: ScreenSprite;
  _updateDimmer(): void;
  _updateAllSprites(): void;
  _addSprite(): void;
  _removeSprite(): void;
  _updateSprite(sprite: any): void;
  _updateRainSprite(sprite: any): void;
  _updateStormSprite(sprite: any): void;
  _updateSnowSprite(sprite: any): void;
  _rebornSprite(sprite: any): void;
}
/**
 * The color filter for WebGL.
 *
 * @class
 * @extends PIXI.Filter
 */
declare function ColorFilter(...args: any[]): void;
declare class ColorFilter {
  /**
   * The color filter for WebGL.
   *
   * @class
   * @extends PIXI.Filter
   */
  constructor(...args: any[]);
  initialize(): void;
  /**
   * Sets the hue rotation value.
   *
   * @param {number} hue - The hue value (-360, 360).
   */
  setHue(hue: number): void;
  /**
   * Sets the color tone.
   *
   * @param {array} tone - The color tone [r, g, b, gray].
   */
  setColorTone(tone: any[]): void;
  /**
   * Sets the blend color.
   *
   * @param {array} color - The blend color [r, g, b, a].
   */
  setBlendColor(color: any[]): void;
  /**
   * Sets the brightness.
   *
   * @param {number} brightness - The brightness (0 to 255).
   */
  setBrightness(brightness: number): void;
  _fragmentSrc(): string;
}
/**
 * The root object of the display tree.
 *
 * @class
 * @extends PIXI.Container
 */
declare function Stage(...args: any[]): void;
declare class Stage {
  /**
   * The root object of the display tree.
   *
   * @class
   * @extends PIXI.Container
   */
  constructor(...args: any[]);
  initialize(): void;
  /**
   * Destroys the stage.
   */
  destroy(): void;
}
/**
 * The audio object of Web Audio API.
 *
 * @class
 * @param {string} url - The url of the audio file.
 */
declare function WebAudio(...args: any[]): void;
declare class WebAudio {
  /**
   * The audio object of Web Audio API.
   *
   * @class
   * @param {string} url - The url of the audio file.
   */
  constructor(...args: any[]);
  initialize(url: any): void;
  _url: any;
  /**
   * Clears the audio data.
   */
  clear(): void;
  _data: any;
  _fetchedSize: number;
  _fetchedData: any[];
  _buffers: any[];
  _sourceNodes: any[];
  _gainNode: any;
  _pannerNode: any;
  _totalTime: number;
  _sampleRate: number;
  _loop: number | boolean;
  _loopStart: number;
  _loopLength: number;
  _loopStartTime: number;
  _loopLengthTime: number;
  _startTime: number;
  _volume: number;
  _pitch: number;
  _pan: number;
  _endTimer: number;
  _loadListeners: any[];
  _stopListeners: any[];
  _lastUpdateTime: any;
  _isLoaded: boolean;
  _isError: boolean;
  _isPlaying: boolean;
  _decoder: any;
  get url(): any;
  set volume(value: number);
  get volume(): number;
  set pitch(value: number);
  get pitch(): number;
  set pan(value: number);
  get pan(): number;
  /**
   * Checks whether the audio data is ready to play.
   *
   * @returns {boolean} True if the audio data is ready to play.
   */
  isReady(): boolean;
  /**
   * Checks whether a loading error has occurred.
   *
   * @returns {boolean} True if a loading error has occurred.
   */
  isError(): boolean;
  /**
   * Checks whether the audio is playing.
   *
   * @returns {boolean} True if the audio is playing.
   */
  isPlaying(): boolean;
  /**
   * Plays the audio.
   *
   * @param {boolean} loop - Whether the audio data play in a loop.
   * @param {number} offset - The start position to play in seconds.
   */
  play(loop: boolean, offset: number): void;
  /**
   * Stops the audio.
   */
  stop(): void;
  /**
   * Destroys the audio.
   */
  destroy(): void;
  /**
   * Performs the audio fade-in.
   *
   * @param {number} duration - Fade-in time in seconds.
   */
  fadeIn(duration: number): void;
  /**
   * Performs the audio fade-out.
   *
   * @param {number} duration - Fade-out time in seconds.
   */
  fadeOut(duration: number): void;
  /**
   * Gets the seek position of the audio.
   */
  seek(): number;
  /**
   * Adds a callback function that will be called when the audio data is loaded.
   *
   * @param {function} listner - The callback function.
   */
  addLoadListener(listner: Function): void;
  /**
   * Adds a callback function that will be called when the playback is stopped.
   *
   * @param {function} listner - The callback function.
   */
  addStopListener(listner: Function): void;
  /**
   * Tries to load the audio again.
   */
  retry(): void;
  _startLoading(): void;
  _shouldUseDecoder(): boolean;
  _createDecoder(): void;
  _destroyDecoder(): void;
  _realUrl(): string;
  _startXhrLoading(url: any): void;
  _startFetching(url: any): void;
  _onXhrLoad(xhr: any): void;
  _onFetch(response: any): void;
  _onError(): void;
  _onFetchProcess(value: any): void;
  _updateBufferOnFetch(): void;
  _concatenateFetchedData(): void;
  _updateBuffer(): void;
  _readableBuffer(): any;
  _decodeAudioData(arrayBuffer: any): void;
  _onDecode(buffer: any): void;
  _refreshSourceNode(): void;
  _startPlaying(offset: any): void;
  _startAllSourceNodes(): void;
  _startSourceNode(index: any): void;
  _stopSourceNode(): void;
  _createPannerNode(): void;
  _createGainNode(): void;
  _createAllSourceNodes(): void;
  _createSourceNode(index: any): void;
  _removeNodes(): void;
  _createEndTimer(): void;
  _removeEndTimer(): void;
  _updatePanner(): void;
  _onLoad(): void;
  _readLoopComments(arrayBuffer: any): void;
  _readMetaData(view: any, index: any, size: any): void;
  _readFourCharacters(view: any, index: any): string;
}
declare namespace WebAudio {
  /**
   * Initializes the audio system.
   *
   * @returns {boolean} True if the audio system is available.
   */
  function initialize(): boolean;
  /**
   * Sets the master volume for all audio.
   *
   * @param {number} value - The master volume (0 to 1).
   */
  function setMasterVolume(value: number): void;
  function _createContext(): void;
  function _currentTime(): any;
  function _createMasterGainNode(): void;
  function _setupEventHandlers(): void;
  function _onUserGesture(): void;
  function _onVisibilityChange(): void;
  function _onHide(): void;
  function _onShow(): void;
  function _shouldMuteOnHide(): boolean;
  function _resetVolume(): void;
  function _fadeIn(duration: any): void;
  function _fadeOut(duration: any): void;
}
/**
 * The static class that handles video playback.
 *
 * @namespace
 */
declare function Video(): void;
declare namespace Video {
  /**
   * Initializes the video system.
   *
   * @param {number} width - The width of the video.
   * @param {number} height - The height of the video.
   */
  function initialize(width: number, height: number): void;
  /**
   * Changes the display size of the video.
   *
   * @param {number} width - The width of the video.
   * @param {number} height - The height of the video.
   */
  function resize(width: number, height: number): void;
  /**
   * Starts playback of a video.
   *
   * @param {string} src - The url of the video.
   */
  function play(src: string): void;
  /**
   * Checks whether the video is playing.
   *
   * @returns {boolean} True if the video is playing.
   */
  function isPlaying(): boolean;
  /**
   * Sets the volume for videos.
   *
   * @param {number} volume - The volume for videos (0 to 1).
   */
  function setVolume(volume: number): void;
  function _createElement(): void;
  function _onLoad(): void;
  function _onError(): never;
  function _onEnd(): void;
  function _updateVisibility(videoVisible: any): void;
  function _isVisible(): boolean;
  function _setupEventHandlers(): void;
  function _onUserGesture(): void;
}
/**
 * The static class that handles input data from the keyboard and gamepads.
 *
 * @namespace
 */
declare function Input(): void;
declare namespace Input {
  /**
   * Initializes the input system.
   */
  function initialize(): void;
  let keyRepeatWait: number;
  let keyRepeatInterval: number;
  let keyMapper: any;
  let gamepadMapper: any;
  /**
   * Clears all the input data.
   */
  function clear(): void;
  /**
   * Updates the input data.
   */
  function update(): void;
  /**
   * Checks whether a key is currently pressed down.
   *
   * @param {string} keyName - The mapped name of the key.
   * @returns {boolean} True if the key is pressed.
   */
  function isPressed(keyName: string): boolean;
  /**
   * Checks whether a key is just pressed.
   *
   * @param {string} keyName - The mapped name of the key.
   * @returns {boolean} True if the key is triggered.
   */
  function isTriggered(keyName: string): boolean;
  /**
   * Checks whether a key is just pressed or a key repeat occurred.
   *
   * @param {string} keyName - The mapped name of the key.
   * @returns {boolean} True if the key is repeated.
   */
  function isRepeated(keyName: string): boolean;
  /**
   * Checks whether a key is kept depressed.
   *
   * @param {string} keyName - The mapped name of the key.
   * @returns {boolean} True if the key is long-pressed.
   */
  function isLongPressed(keyName: string): boolean;
  const dir4: any;
  const dir8: any;
  const date: any;
  function virtualClick(buttonName: any): void;
  function _setupEventHandlers(): void;
  function _onKeyDown(event: any): void;
  function _shouldPreventDefault(keyCode: any): boolean;
  function _onKeyUp(event: any): void;
  function _onLostFocus(): void;
  function _pollGamepads(): void;
  function _updateGamepadState(gamepad: any): void;
  function _updateDirection(): void;
  function _signX(): number;
  function _signY(): number;
  function _makeNumpadDirection(x: any, y: any): any;
  function _isEscapeCompatible(keyName: any): boolean;
}
/**
 * The static class that handles input data from the mouse and touchscreen.
 *
 * @namespace
 */
declare function TouchInput(): void;
declare namespace TouchInput {
  /**
   * Initializes the touch system.
   */
  export function initialize(): void;
  let keyRepeatWait_1: number;
  export { keyRepeatWait_1 as keyRepeatWait };
  let keyRepeatInterval_1: number;
  export { keyRepeatInterval_1 as keyRepeatInterval };
  export let moveThreshold: number;
  /**
   * Clears all the touch data.
   */
  export function clear(): void;
  /**
   * Updates the touch data.
   */
  export function update(): void;
  /**
   * Checks whether the mouse button or touchscreen has been pressed and
   * released at the same position.
   *
   * @returns {boolean} True if the mouse button or touchscreen is clicked.
   */
  export function isClicked(): boolean;
  /**
   * Checks whether the mouse button or touchscreen is currently pressed down.
   *
   * @returns {boolean} True if the mouse button or touchscreen is pressed.
   */
  export function isPressed(): boolean;
  /**
   * Checks whether the left mouse button or touchscreen is just pressed.
   *
   * @returns {boolean} True if the mouse button or touchscreen is triggered.
   */
  export function isTriggered(): boolean;
  /**
   * Checks whether the left mouse button or touchscreen is just pressed
   * or a pseudo key repeat occurred.
   *
   * @returns {boolean} True if the mouse button or touchscreen is repeated.
   */
  export function isRepeated(): boolean;
  /**
   * Checks whether the left mouse button or touchscreen is kept depressed.
   *
   * @returns {boolean} True if the left mouse button or touchscreen is long-pressed.
   */
  export function isLongPressed(): boolean;
  /**
   * Checks whether the right mouse button is just pressed.
   *
   * @returns {boolean} True if the right mouse button is just pressed.
   */
  export function isCancelled(): boolean;
  /**
   * Checks whether the mouse or a finger on the touchscreen is moved.
   *
   * @returns {boolean} True if the mouse or a finger on the touchscreen is moved.
   */
  export function isMoved(): boolean;
  /**
   * Checks whether the mouse is moved without pressing a button.
   *
   * @returns {boolean} True if the mouse is hovered.
   */
  export function isHovered(): boolean;
  /**
   * Checks whether the left mouse button or touchscreen is released.
   *
   * @returns {boolean} True if the mouse button or touchscreen is released.
   */
  export function isReleased(): boolean;
  export const wheelX: any;
  export const wheelY: any;
  export const x: any;
  export const y: any;
  const date_1: any;
  export { date_1 as date };
  export function _createNewState(): {
    triggered: boolean;
    cancelled: boolean;
    moved: boolean;
    hovered: boolean;
    released: boolean;
    wheelX: number;
    wheelY: number;
  };
  export function _setupEventHandlers(): void;
  export function _onMouseDown(event: any): void;
  export function _onLeftButtonDown(event: any): void;
  export function _onMiddleButtonDown(): void;
  export function _onRightButtonDown(event: any): void;
  export function _onMouseMove(event: any): void;
  export function _onMouseUp(event: any): void;
  export function _onWheel(event: any): void;
  export function _onTouchStart(event: any): void;
  export function _onTouchMove(event: any): void;
  export function _onTouchEnd(event: any): void;
  export function _onTouchCancel(): void;
  export function _onLostFocus(): void;
  export function _onTrigger(x: any, y: any): void;
  export function _onCancel(x: any, y: any): void;
  export function _onMove(x: any, y: any): void;
  export function _onHover(x: any, y: any): void;
  export function _onRelease(x: any, y: any): void;
}
/**
 * The static class that handles JSON with object information.
 *
 * @namespace
 */
declare function JsonEx(): void;
declare namespace JsonEx {
  let maxDepth: number;
  /**
   * Converts an object to a JSON string with object information.
   *
   * @param {object} object - The object to be converted.
   * @returns {string} The JSON string.
   */
  function stringify(object: object): string;
  /**
   * Parses a JSON string and reconstructs the corresponding object.
   *
   * @param {string} json - The JSON string.
   * @returns {object} The reconstructed object.
   */
  function parse(json: string): object;
  /**
   * Makes a deep copy of the specified object.
   *
   * @param {object} object - The object to be copied.
   * @returns {object} The copied object.
   */
  function makeDeepCopy(object: object): object;
  function _encode(value: any, depth: any): any;
  function _decode(value: any): any;
}
