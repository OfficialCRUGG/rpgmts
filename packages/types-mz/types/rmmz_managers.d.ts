declare function DataManager(): void;
declare namespace DataManager {
  let _globalInfo: any;
  let _errors: any[];
  let _databaseFiles: {
    name: string;
    src: string;
  }[];
  function loadGlobalInfo(): void;
  function removeInvalidGlobalInfo(): void;
  function saveGlobalInfo(): void;
  function isGlobalInfoLoaded(): boolean;
  function loadDatabase(): void;
  function loadDataFile(name: any, src: any): void;
  function onXhrLoad(xhr: any, name: any, src: any, url: any): void;
  function onXhrError(name: any, src: any, url: any): void;
  function isDatabaseLoaded(): boolean;
  function loadMapData(mapId: any): void;
  function makeEmptyMap(): void;
  function isMapLoaded(): boolean;
  function onLoad(object: any): void;
  function isMapObject(object: any): boolean;
  function extractArrayMetadata(array: any): void;
  function extractMetadata(data: any): void;
  function checkError(): void;
  function isBattleTest(): boolean;
  function isEventTest(): boolean;
  function isTitleSkip(): boolean;
  function isSkill(item: any): any;
  function isItem(item: any): any;
  function isWeapon(item: any): any;
  function isArmor(item: any): any;
  function createGameObjects(): void;
  function setupNewGame(): void;
  function setupBattleTest(): void;
  function setupEventTest(): void;
  function isAnySavefileExists(): any;
  function latestSavefileId(): any;
  function earliestSavefileId(): any;
  function emptySavefileId(): any;
  function loadAllSavefileImages(): void;
  function loadSavefileImages(info: any): void;
  function maxSavefiles(): number;
  function savefileInfo(savefileId: any): any;
  function savefileExists(savefileId: any): any;
  function saveGame(savefileId: any): any;
  function loadGame(savefileId: any): any;
  function makeSavename(savefileId: any): any;
  function selectSavefileForNewGame(): void;
  function makeSavefileInfo(): {
    title: any;
    characters: any;
    faces: any;
    playtime: any;
    timestamp: number;
  };
  function makeSaveContents(): {
    system: any;
    screen: any;
    timer: any;
    switches: any;
    variables: any;
    selfSwitches: any;
    actors: any;
    party: any;
    map: any;
    player: any;
  };
  function extractSaveContents(contents: any): void;
  function correctDataErrors(): void;
}
declare function ConfigManager(): void;
declare namespace ConfigManager {
  let alwaysDash: boolean;
  let commandRemember: boolean;
  let touchUI: boolean;
  let _isLoaded: boolean;
  let bgmVolume: number;
  let bgsVolume: any;
  let meVolume: any;
  let seVolume: any;
  function load(): void;
  function save(): void;
  function isLoaded(): boolean;
  function makeData(): {
    alwaysDash: boolean;
    commandRemember: boolean;
    touchUI: boolean;
    bgmVolume: number;
    bgsVolume: any;
    meVolume: any;
    seVolume: any;
  };
  function applyData(config: any): void;
  function readFlag(config: any, name: any, defaultValue: any): any;
  function readVolume(config: any, name: any): any;
}
declare function StorageManager(): void;
declare namespace StorageManager {
  let _forageKeys: any[];
  let _forageKeysUpdated: boolean;
  function isLocalMode(): boolean;
  function saveObject(saveName: any, object: any): any;
  function loadObject(saveName: any): any;
  function objectToJson(object: any): Promise<any>;
  function jsonToObject(json: any): Promise<any>;
  function jsonToZip(json: any): Promise<any>;
  function zipToJson(zip: any): Promise<any>;
  function saveZip(saveName: any, zip: any): any;
  function loadZip(saveName: any): any;
  function exists(saveName: any): any;
  function remove(saveName: any): any;
  function saveToLocalFile(saveName: any, zip: any): Promise<any>;
  function loadFromLocalFile(saveName: any): Promise<any>;
  function localFileExists(saveName: any): any;
  function removeLocalFile(saveName: any): void;
  function saveToForage(saveName: any, zip: any): any;
  function loadFromForage(saveName: any): any;
  function forageExists(saveName: any): any;
  function removeForage(saveName: any): any;
  function updateForageKeys(): any;
  function forageKeysUpdated(): any;
  function fsMkdir(path: any): void;
  function fsRename(oldPath: any, newPath: any): void;
  function fsUnlink(path: any): void;
  function fsReadFile(path: any): any;
  function fsWriteFile(path: any, data: any): void;
  function fileDirectoryPath(): any;
  function filePath(saveName: any): string;
  function forageKey(saveName: any): string;
  function forageTestKey(): string;
}
declare function FontManager(): void;
declare namespace FontManager {
  let _urls: {};
  let _states: {};
  function load(family: any, filename: any): void;
  function isReady(): boolean;
  function startLoading(family: any, url: any): void;
  function throwLoadError(family: any): never;
  function makeUrl(filename: any): string;
}
declare function ImageManager(): void;
declare namespace ImageManager {
  let standardIconWidth: number;
  let standardIconHeight: number;
  let standardFaceWidth: number;
  let standardFaceHeight: number;
  let _cache: {};
  let _system: {};
  let _emptyBitmap: Bitmap;
  const iconWidth: any;
  const iconHeight: any;
  const faceWidth: any;
  const faceHeight: any;
  function getIconSize(): any;
  function getFaceSize(): any;
  function loadAnimation(filename: any): any;
  function loadBattleback1(filename: any): any;
  function loadBattleback2(filename: any): any;
  function loadEnemy(filename: any): any;
  function loadCharacter(filename: any): any;
  function loadFace(filename: any): any;
  function loadParallax(filename: any): any;
  function loadPicture(filename: any): any;
  function loadSvActor(filename: any): any;
  function loadSvEnemy(filename: any): any;
  function loadSystem(filename: any): any;
  function loadTileset(filename: any): any;
  function loadTitle1(filename: any): any;
  function loadTitle2(filename: any): any;
  function loadBitmap(folder: any, filename: any): any;
  function loadBitmapFromUrl(url: any): any;
  function clear(): void;
  function isReady(): boolean;
  function throwLoadError(bitmap: any): never;
  function isObjectCharacter(filename: any): boolean;
  function isBigCharacter(filename: any): boolean;
  function isZeroParallax(filename: any): boolean;
}
declare function EffectManager(): void;
declare namespace EffectManager {
  let _cache_1: {};
  export { _cache_1 as _cache };
  export let _errorUrls: any[];
  export function load(filename: any): any;
  export function startLoading(url: any): any;
  export function clear(): void;
  export function onLoad(): void;
  export function onError(url: any): void;
  export function makeUrl(filename: any): string;
  export function checkErrors(): void;
  export function throwLoadError(url: any): never;
  export function isReady(): boolean;
}
declare function AudioManager(): void;
declare namespace AudioManager {
  export let _bgmVolume: number;
  export let _bgsVolume: number;
  export let _meVolume: number;
  export let _seVolume: number;
  export let _currentBgm: any;
  export let _currentBgs: any;
  export let _bgmBuffer: any;
  export let _bgsBuffer: any;
  export let _meBuffer: any;
  export let _seBuffers: any[];
  export let _staticBuffers: any[];
  export let _replayFadeTime: number;
  export let _path: string;
  let bgmVolume_1: any;
  export { bgmVolume_1 as bgmVolume };
  let bgsVolume_1: any;
  export { bgsVolume_1 as bgsVolume };
  let meVolume_1: any;
  export { meVolume_1 as meVolume };
  let seVolume_1: any;
  export { seVolume_1 as seVolume };
  export function playBgm(bgm: any, pos: any): void;
  export function replayBgm(bgm: any): void;
  export function isCurrentBgm(bgm: any): boolean;
  export function updateBgmParameters(bgm: any): void;
  export function updateCurrentBgm(bgm: any, pos: any): void;
  export function stopBgm(): void;
  export function fadeOutBgm(duration: any): void;
  export function fadeInBgm(duration: any): void;
  export function playBgs(bgs: any, pos: any): void;
  export function replayBgs(bgs: any): void;
  export function isCurrentBgs(bgs: any): boolean;
  export function updateBgsParameters(bgs: any): void;
  export function updateCurrentBgs(bgs: any, pos: any): void;
  export function stopBgs(): void;
  export function fadeOutBgs(duration: any): void;
  export function fadeInBgs(duration: any): void;
  export function playMe(me: any): void;
  export function updateMeParameters(me: any): void;
  export function fadeOutMe(duration: any): void;
  export function stopMe(): void;
  export function playSe(se: any): void;
  export function updateSeParameters(buffer: any, se: any): void;
  export function cleanupSe(): void;
  export function stopSe(): void;
  export function playStaticSe(se: any): void;
  export function loadStaticSe(se: any): void;
  export function isStaticSe(se: any): boolean;
  export function stopAll(): void;
  export function saveBgm():
    | {
        name: string;
        volume: number;
        pitch: number;
      }
    | {
        name: any;
        volume: any;
        pitch: any;
        pan: any;
        pos: any;
      };
  export function saveBgs():
    | {
        name: string;
        volume: number;
        pitch: number;
      }
    | {
        name: any;
        volume: any;
        pitch: any;
        pan: any;
        pos: any;
      };
  export function makeEmptyAudioObject(): {
    name: string;
    volume: number;
    pitch: number;
  };
  export function createBuffer(folder: any, name: any): WebAudio;
  export function updateBufferParameters(
    buffer: any,
    configVolume: any,
    audio: any,
  ): void;
  export function audioFileExt(): string;
  export function checkErrors(): void;
  export function throwLoadError(webAudio: any): never;
}
declare function SoundManager(): void;
declare namespace SoundManager {
  function preloadImportantSounds(): void;
  function loadSystemSound(n: any): void;
  function playSystemSound(n: any): void;
  function playCursor(): void;
  function playOk(): void;
  function playCancel(): void;
  function playBuzzer(): void;
  function playEquip(): void;
  function playSave(): void;
  function playLoad(): void;
  function playBattleStart(): void;
  function playEscape(): void;
  function playEnemyAttack(): void;
  function playEnemyDamage(): void;
  function playEnemyCollapse(): void;
  function playBossCollapse1(): void;
  function playBossCollapse2(): void;
  function playActorDamage(): void;
  function playActorCollapse(): void;
  function playRecovery(): void;
  function playMiss(): void;
  function playEvasion(): void;
  function playMagicEvasion(): void;
  function playReflection(): void;
  function playShop(): void;
  function playUseItem(): void;
  function playUseSkill(): void;
}
declare function TextManager(): void;
declare namespace TextManager {
  function basic(basicId: any): any;
  function param(paramId: any): any;
  function command(commandId: any): any;
  function message(messageId: any): any;
  function getter(
    method: any,
    param: any,
  ): {
    get: () => any;
    configurable: boolean;
  };
  const currencyUnit: any;
}
declare function ColorManager(): void;
declare namespace ColorManager {
  function loadWindowskin(): void;
  function textColor(n: any): any;
  function normalColor(): any;
  function systemColor(): any;
  function crisisColor(): any;
  function deathColor(): any;
  function gaugeBackColor(): any;
  function hpGaugeColor1(): any;
  function hpGaugeColor2(): any;
  function mpGaugeColor1(): any;
  function mpGaugeColor2(): any;
  function mpCostColor(): any;
  function powerUpColor(): any;
  function powerDownColor(): any;
  function ctGaugeColor1(): any;
  function ctGaugeColor2(): any;
  function tpGaugeColor1(): any;
  function tpGaugeColor2(): any;
  function tpCostColor(): any;
  function pendingColor(): any;
  function hpColor(actor: any): any;
  function mpColor(): any;
  function tpColor(): any;
  function paramchangeTextColor(change: any): any;
  function damageColor(
    colorType: any,
  ): "#ffffff" | "#b9ffb5" | "#ffff90" | "#80b0ff" | "#808080";
  function outlineColor(): string;
  function dimColor1(): string;
  function dimColor2(): string;
  function itemBackColor1(): string;
  function itemBackColor2(): string;
}
declare function SceneManager(): void;
declare namespace SceneManager {
  let _scene: any;
  let _nextScene: any;
  let _stack: any[];
  let _exiting: boolean;
  let _previousScene: any;
  let _previousClass: any;
  let _backgroundBitmap: any;
  let _smoothDeltaTime: number;
  let _elapsedTime: number;
  function run(sceneClass: any): void;
  function initialize(): void;
  function checkBrowser(): void;
  function checkPluginErrors(): void;
  function initGraphics(): void;
  function initAudio(): void;
  function initVideo(): void;
  function initInput(): void;
  function setupEventHandlers(): void;
  function update(deltaTime: any): void;
  function determineRepeatNumber(deltaTime: any): number;
  function terminate(): void;
  function onError(event: any): void;
  function onReject(event: any): void;
  function onUnload(): void;
  function onKeyDown(event: any): void;
  function reloadGame(): void;
  function showDevTools(): void;
  function catchException(e: any): void;
  function catchNormalError(e: any): void;
  function catchLoadError(e: any): void;
  function catchUnknownError(e: any): void;
  function updateMain(): void;
  function updateFrameCount(): void;
  function updateInputData(): void;
  function updateEffekseer(): void;
  function changeScene(): void;
  function updateScene(): void;
  function isGameActive(): boolean;
  function onSceneTerminate(): void;
  function onSceneCreate(): void;
  function onBeforeSceneStart(): void;
  function onSceneStart(): void;
  function isSceneChanging(): boolean;
  function isCurrentSceneBusy(): any;
  function isNextScene(sceneClass: any): boolean;
  function isPreviousScene(sceneClass: any): boolean;
  function goto(sceneClass: any): void;
  function push(sceneClass: any): void;
  function pop(): void;
  function exit(): void;
  function clearStack(): void;
  function stop(): void;
  function prepareNextScene(...args: any[]): void;
  function snap(): Bitmap;
  function snapForBackground(): void;
  function backgroundBitmap(): any;
  function resume(): void;
}
declare function BattleManager(): void;
declare namespace BattleManager {
  function setup(troopId: any, canEscape: any, canLose: any): void;
  function initMembers(): void;
  function isTpb(): boolean;
  function isActiveTpb(): boolean;
  function isBattleTest(): any;
  function setBattleTest(battleTest: any): void;
  function setEventCallback(callback: any): void;
  function setLogWindow(logWindow: any): void;
  function setSpriteset(spriteset: any): void;
  function onEncounter(): void;
  function ratePreemptive(): any;
  function rateSurprise(): any;
  function saveBgmAndBgs(): void;
  function playBattleBgm(): void;
  function playVictoryMe(): void;
  function playDefeatMe(): void;
  function replayBgmAndBgs(): void;
  function makeEscapeRatio(): void;
  function update(timeActive: any): void;
  function updatePhase(timeActive: any): void;
  function updateEvent(): boolean;
  function updateEventMain(): boolean;
  function isBusy(): any;
  function updateTpbInput(): void;
  function checkTpbInputClose(): void;
  function checkTpbInputOpen(): void;
  function isPartyTpbInputtable(): boolean;
  function needsActorInputCancel(): boolean;
  function isTpbMainPhase(): boolean;
  function isInputting(): any;
  function isInTurn(): boolean;
  function isTurnEnd(): boolean;
  function isAborting(): boolean;
  function isBattleEnd(): boolean;
  function canEscape(): any;
  function canLose(): any;
  function isEscaped(): any;
  function actor(): any;
  function startBattle(): void;
  function displayStartMessages(): void;
  function startInput(): void;
  function inputtingAction(): any;
  function selectNextCommand(): void;
  function selectNextActor(): void;
  function selectPreviousCommand(): void;
  function selectPreviousActor(): void;
  function changeCurrentActor(forward: any): void;
  function startActorInput(): void;
  function finishActorInput(): void;
  function cancelActorInput(): void;
  function updateStart(): void;
  function startTurn(): void;
  function updateTurn(timeActive: any): void;
  function updateTpb(): void;
  function updateAllTpbBattlers(): void;
  function updateTpbBattler(battler: any): void;
  function checkTpbTurnEnd(): void;
  function processTurn(): void;
  function endBattlerActions(battler: any): void;
  function endTurn(): void;
  function updateTurnEnd(): void;
  function endAllBattlersTurn(): void;
  function displayBattlerStatus(battler: any, current: any): void;
  function getNextSubject(): any;
  function allBattleMembers(): any;
  function makeActionOrders(): void;
  function startAction(): void;
  function updateAction(): void;
  function endAction(): void;
  function invokeAction(subject: any, target: any): void;
  function invokeNormalAction(subject: any, target: any): void;
  function invokeCounterAttack(subject: any, target: any): void;
  function invokeMagicReflection(subject: any, target: any): void;
  function applySubstitute(target: any): any;
  function checkSubstitute(target: any): boolean;
  function isActionForced(): boolean;
  function forceAction(battler: any): void;
  function processForcedAction(): void;
  function abort(): void;
  function checkBattleEnd(): boolean;
  function checkAbort(): boolean;
  function processVictory(): void;
  function processEscape(): any;
  function onEscapeSuccess(): void;
  function onEscapeFailure(): void;
  function processPartyEscape(): void;
  function processAbort(): void;
  function processDefeat(): void;
  function endBattle(result: any): void;
  function updateBattleEnd(): void;
  function makeRewards(): void;
  function displayVictoryMessage(): void;
  function displayDefeatMessage(): void;
  function displayEscapeSuccessMessage(): void;
  function displayEscapeFailureMessage(): void;
  function displayRewards(): void;
  function displayExp(): void;
  function displayGold(): void;
  function displayDropItems(): void;
  function gainRewards(): void;
  function gainExp(): void;
  function gainGold(): void;
  function gainDropItems(): void;
}
declare function PluginManager(): void;
declare namespace PluginManager {
  export let _scripts: any[];
  let _errorUrls_1: any[];
  export { _errorUrls_1 as _errorUrls };
  export let _parameters: {};
  export let _commands: {};
  export function setup(plugins: any): void;
  export function parameters(name: any): any;
  export function setParameters(name: any, parameters: any): void;
  export function loadScript(filename: any): void;
  export function onError(e: any): void;
  export function makeUrl(filename: any): string;
  export function checkErrors(): void;
  export function throwLoadError(url: any): never;
  export function registerCommand(
    pluginName: any,
    commandName: any,
    func: any,
  ): void;
  export function callCommand(
    self: any,
    pluginName: any,
    commandName: any,
    args: any,
  ): void;
}
