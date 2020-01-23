# Primer Demo

A multiplatform React-based design system inspired by GitHub [Primer](https://primer.style/).

## Running

* Web (Storybook React): `yarn storybook:web`
* iOS simulator (Storybook React Native): `yarn storybook:ios`
* Figma plugin (React Figma): `yarn figma:webpack:watch`

## Structure

```
├── .storybook - @storybook/react configuration
├── .storybook-native - @storybook/react configuration
├── android - gradle project for React Native app
├── assets - React Native app assets
├── ios - iOS project for React Native app
├── src
│   ├── components
|   ├── fonts - fonts for web
|   ├── frames - frames for displaying through React Figma
|   ├── helpers - frames for displaying through React Figma
|   ├── hooks - React Hooks
|   ├── styles - global styles for web
|   ├── tokens - design system tokens (colors, spacing, etc.)
|   ├── wrappers - universal wrappers for base UI elements (buttons, images, etc.)
│   ├── App.tsx - React Figma app
│   ├── code.tsx - entty point for Figma plugin Main-thead
│   ├── ui.html - entty point for Figma plugin UI-thead
│   └── ui.tsx 
├── app.json - react-native config file
├── babel.config.js - babel config for react-native
├── figma.d.ts - figma plugin typings
├── figma.webpack.confgi.js - Webpack config for react-figma
├── manifest.json - Figma plugin manifest
├── metro.config.js - config for Metro bundler
├── now.json - config for Zeit Now
├── package.json
├── tsconfig.json
└── yarn.lock
```
