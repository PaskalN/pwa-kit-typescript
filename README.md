## ADDITIONAL FOLDERS
- **overrides/core** - collects all hooks and utils
- **overrides/app** - base TS project setup / uses and extends core folder
- **process** - collects pre-build files
- **types** - collects all declarations and types

## ADDITIONAL FILES
- **process/gen-dw.mjs** - serves to generate dw.js file from .env
- **config/dw.js** - generated file from npm gen:dw
- **.env** - configuration env file

## FILE CHANGES
- **config/default.js** - to use values from dw.js
- **tsconfig.json**
- **package.json** - additional command = npm dw:gen
