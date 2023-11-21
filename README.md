# PROJECT - SYSTEMA
## HOW TO START
Project based on PWA Kit 3.* - TypeScript

1. npm run gen:dw
2. npm start

## ADDITIONAL FOLDERS
- **overrides/core** - collects all hooks and utils
- **overrides/app** - base TS project setup / uses and extends core folder
- **process** - collects pre-build files
- **types** - collects all declarations and types

## ADDITIONAL FILES
- **config/dw.js** - generated file from npm gen:dw
- **.env** - configuration env file

## FILE CHANGES
- **overrides/core/pre-build/gen-dw.mjs** - serves to generate dw.js file from .env
- **config/default.js** - to use values from dw.js
- **tsconfig.json** - ts config
- **package.json** - additional command = npm dw:gen
