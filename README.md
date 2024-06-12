# Responsive Toolbar: Config Presets

[![npm version](https://img.shields.io/npm/v/@responsive-toolbar/config-presets.svg)](https://www.npmjs.com/package/@responsive-toolbar/config-presets)
[![license](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## Config Presets Module

The Config Presets module provides predefined configurations for the Responsive Toolbar library.

### Files Included

- `DeviceList.js`: Contains configurations related to device lists.
- `DeviceMockups.js`: Contains configurations related to device mockups.
- `Localization.js`: Contains configurations related to localization (i18n).
- `Themes.js`: Contains configurations related to themes.

### Usage

```javascript
import { ConfigPresets } from '@responsive-toolbar/config-presets';

// Example usage
console.log(ConfigPresets.deviceList);
console.log(ConfigPresets.deviceMockups);
console.log(ConfigPresets.i18n);
console.log(ConfigPresets.themes);

## Scripts

Here are the available npm scripts for development and production:

- `npm run prepare-npm-package`: Build the product and perform a dry-run package preparation.
- `npm run release-npm-package`: Publish the package to npm.

## License

This project is licensed under the CC BY-NC-ND 4.0 License. See the [LICENSE](https://creativecommons.org/licenses/by-nc-nd/4.0/) file for details.