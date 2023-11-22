# PROJECT - SYSTEMA
Project based on PWA Kit 3.* - TypeScript
All Hooks defined
All Utils defined
Fully extensible
Eslint and Typescript integrated - add your favourite Eslint style
Typescript error checker integrated
_________________________________________________________________
There are two project folders: app / core
Core folder contains all legacy definitions and project features - **Do not extend or update the folder**
App folder extends Core functionality. Develop your project in app folder.
Enjoy!

## REQUIREMENTS
**Node 18.x**

## HOW TO START
1. npm install
2. update .env file
3. npm run gen:dw
4. npm start

## ADDITIONAL FOLDERS
- **overrides/core** - collects all hooks and utils
- **overrides/app** - base TS project setup / uses and extends core folder
- **process** - collects pre-build files
- **types** - collects all declarations and types

## ADDITIONAL FILES
- **config/dw.js** - generated file from npm gen:dw
- **.env** - configuration env file
- **webpack.config.js** - PWA Kit webpack config extender

## FILE CHANGES
- **overrides/core/pre-build/gen-dw.mjs** - serves to generate dw.js file from .env
- **config/default.js** - to use values from dw.js
- **tsconfig.json** - ts config
- **package.json** - additional command = npm dw:gen
