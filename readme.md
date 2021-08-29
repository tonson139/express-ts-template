# Minimun install to use expresss typescipt 

#### Review 
Review basicaaly when we use express with nodemon in dev 

```
npm i express, nodemon 
mkdir src 
```
#### Project structure
src/app.js
package.json 
    "main": "./src/app.js",
    "script": {
        "dev": "nodemon --watch src"
    }


### With Typescript 
```
// for dev with typescript (using types) 
npm i typescript, @types/node, @type/express, ts-node --save-dev

// for using express 
npm i express 
``` 

#### Project structure
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

# Example Express-Typeorm
Using docker 

```
//initial 
docker pull mysql:8.0 
docker run --name mysqldb2 -v my-vol:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=admin -e MYSQL_USER=admin -e MYSQL_PASSWORD=admin -d mysql
docker exec -it [containterId] bash
//after intial 
docker start 
``` 

Setup MySQL
https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server 
```
// intial create schema
mysql -u root -p
admin
CREATE SCHEMA alcoholter;
USE alcoholter;
```