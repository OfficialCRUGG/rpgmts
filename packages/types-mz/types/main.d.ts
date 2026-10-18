/**
 * A list of script URLs to be imported by the game.
 */
declare const scriptUrls: string[];

/**
 * The URL of the Effekseer WebAssembly module used by the game.
 */
declare const effekseerWasmUrl: "js/libs/effekseer.wasm";

/**
 * The main class for the game, responsible for initializing all game scripts.
 */
declare class Main {
  constructor();
  xhrSucceeded: boolean;
  loadCount: number;
  error: Error;
  /**
   * Runs `showLoadingSpinner`, `testXhr`, `hookNwjsClose`, and `loadMainScripts`.
   */
  run(): void;
  /**
   * Adds a loading spinner to the HTML document.
   */
  showLoadingSpinner(): void;
  /**
   * Removes the loading spinner from the HTML document.
   */
  eraseLoadingSpinner(): void;
  /**
   * Checks whether XMLHttpRequest is functioning correctly.
   */
  testXhr(): void;
  /**
   * Adds a hook to ensure that the NW.js process fully terminates when the game window is closed.
   */
  hookNwjsClose(): void;
  /**
   * Loads the main game scripts specified in `scriptUrls`.
   */
  loadMainScripts(): void;
  /**
   * The amount of scripts to be loaded as specified in `scriptUrls`.
   */
  numScripts: number;
  /**
   * Called when a script specified in `scriptUrls` has successfully loaded.
   */
  onScriptLoad(): void;
  /**
   * Called when a script specified in `scriptUrls` fails to load.
   * @param e The event associated with the error.
   */
  onScriptError(e: Event): void;
  /**
   * Shows an error message on the HTML document.
   * @param name The name of the error.
   * @param message The error message.
   */
  printError(name: string, message: string): void;
  /**
   * Creates the HTML content for an error message.
   * @param name The name of the error.
   * @param message The error message.
   */
  makeErrorHtml(name: string, message: string): string;
  /**
   * Called when the window has finished loading.
   * Checks for various issues on window load and runs `initEffekseerRuntime` if no issues are present.
   */
  onWindowLoad(): void;
  /**
   * Called when there is an error on the window.
   * @param event The error event associated with the window error.
   */
  onWindowError(event: ErrorEvent): void;
  isPathRandomized(): boolean;
  /**
   * Initializes the Effekseer runtime by loading the WebAssembly module.
   */
  initEffekseerRuntime(): void;
  /**
   * Called when the Effekseer runtime has successfully loaded.
   * Erases the loading spinner and starts the boot scene.
   */
  onEffekseerLoad(): void;
  /**
   * Called when there is an error while loading the Effekseer runtime.
   */
  onEffekseerError(): void;
}

/**
 * Global Main instance.
 */
declare const main: Main;
