minimun install to use expresss typescipt 


Review basicaaly when we use express with nodemon in dev 
npm i express, nodemon 
mkdir src 
src/app.js
package.json 
    "main": "./src/app.js",
    "script": {
        "dev": "nodemon --watch src"
    }


with typescript 

// for dev with typescript (using types) 
npm i typescript, @types/node, @type/express, ts-node --save-dev

// for using express 
npm i express 

project structure
src/app.ts
index.ts 
package.json

package.json 
	"main": "index.js",
	"scripts": {
		"dev": "nodemon"
	},
	"nodemonConfig": {
		"watch": [
			"src"
		],
		"ext": "ts",
		"exec": "ts-node index.ts"
	}