# Silent Failure of Expo WebBrowser.openBrowserAsync() on Android

This repository demonstrates a bug where `WebBrowser.openBrowserAsync()` in Expo may fail silently on Android devices. The promise resolves without providing a clear indication of failure, such as `result.type === 'cancel'` or `result.type === 'dismiss'`.  This makes error handling and debugging significantly challenging.

## Steps to Reproduce

1. Clone this repository.
2. Run the project on an Android emulator or physical device.
3. Observe that the link may open, or may fail without an error being logged.
4. Check the console logs - there is no error message to explain the failure.

## Expected Behavior

The `WebBrowser.openBrowserAsync()` function should either successfully open the URL or return a meaningful result object indicating failure, such as with `result.type` set to 'cancel' or 'dismiss'.

## Actual Behavior

The function sometimes resolves without setting `result.type`, making it impossible to distinguish between success and failure.

## Workaround

A workaround is provided in `bugSolution.js`, that uses a timeout. This workaround is not ideal, but it can prevent silent failures from going unnoticed.

## Solution

The ideal solution is for Expo to provide more robust error handling within `WebBrowser.openBrowserAsync()` to handle all possible scenarios and consistently return a result object.