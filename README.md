# Node.js REST API Example

From now on, you can add all your favorite directors to your own special database!
<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f3a5.png?v8" width="30" title="hover text">
<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f47b.png?v8" width="30" title="hover text">

## technologies

- postgresql
- express.js
- kerevizlog: my personal project [here](https://www.npmjs.com/package/kerevizlog)

## endpoints

- POST /api/v1/user - register a user
- POST /api/v1/token - retrieve a token for a user
- GET /api/v1/director - returns all director
- GET /api/v1/director/:id - returns the specific director
- POST /api/v1/director - creates a new director
- PUT /api/v1/director/:id - updates existing director. Director data should be placed on the request body
- DELETE /api/v1/director/:id - deletes the specified director

## POST /api/v1/user response for already registered

```JSON
{
    "user": {
        "id": 5,
        "username": "sametk",
        "password": "$2b$10$F4dE6Sqp2AaizfhpvlxoeOsfanuqFBSPySNrZlVN2S70wMpS9ooAy",
        "createdAt": "2024-07-30T18:33:47.460Z",
        "updatedAt": "2024-07-30T18:33:47.460Z"
    },
    "error": true,
    "message": "user is already registered"
}
```

## POST /api/v1/user response for new registration

```JSON
{
    "user": {
        "id": 5,
        "username": "sametk",
        "password": "$2b$10$F4dE6Sqp2AaizfhpvlxoeOsfanuqFBSPySNrZlVN2S70wMpS9ooAy",
        "createdAt": "2024-07-30T18:33:47.460Z",
        "updatedAt": "2024-07-30T18:33:47.460Z"
    }
}s
```

## POST /api/v1/token response

```JSON
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbWV0IiwicGFzc3dvcmQiOiJiYXJyIiwiaWF0IjoxNzIyMzY0Nzg2LCJleHAiOjE3MjIzNjgzODZ9.TFKIPQRxWin4UU9158imudPfWD70zDxTRiJXRmH650U"
}
```

## sample /api/v1/director response

```JSON
[
    {
        "id": 12,
        "name": "Ridley",
        "surname": "Scott",
        "gender": "Male",
        "age": 31,
        "maritalStatus": "Married",
        "createdAt": "2023-02-20T21:02:57.000Z",
        "updatedAt": "2023-02-20T21:02:57.000Z"
    },
    {
        "id": 13,
        "name": "Quentin",
        "surname": "Tarantino",
        "gender": "Male",
        "age": 32,
        "maritalStatus": "Single",
        "createdAt": "2023-02-20T21:02:57.000Z",
        "updatedAt": "2023-02-20T21:02:57.000Z"
    },
    {
        "id": 14,
        "name": "Alfred",
        "surname": "Hitchcock",
        "gender": "Male",
        "age": 31,
        "maritalStatus": "Single",
        "createdAt": "2023-02-20T21:02:57.000Z",
        "updatedAt": "2023-02-20T21:02:57.000Z"
    }
]
```

## example environment variables

```
DB_NAME=director
DB_HOST=localhost
DB_USER=sametkamgul
DB_PASS=123
DB_PORT=5432
TOKEN_SECRET=samet
SALT_ROUNDS=10
TEST_USER_EMAIL=foo.bar@mail.com
TEST_USER_PASSWORD=bar
```

## package installation

```
npm i
```

or

```
npm install
```

## inserting postgresql database

```
npm run migrate
```

## running on dev mode

```
npm run dev
```

## POSTMAN collection

```JSON
{
	"info": {
		"_postman_id": "ecbad884-9904-43c7-b79e-72bdd0a33a91",
		"name": "REST API basics: CRUD",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "2129586"
	},
	"item": [
		{
			"name": "Get all data",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/v1/director",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"v1",
						"director"
					]
				},
				"description": "This is a GET request and it is used to \"get\" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).\n\nA successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data."
			},
			"response": []
		},
		{
			"name": "Get data with id",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/v1/director/10",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"v1",
						"director",
						"10"
					]
				},
				"description": "This is a GET request and it is used to \"get\" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).\n\nA successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data."
			},
			"response": []
		},
		{
			"name": "Post data",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Successful POST request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([200, 201]);",
							"});",
							""
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"name\": \"Samet\",\n    \"surname\": \"Kamgul\",\n    \"gender\": \"M\",\n    \"age\": 35,\n    \"maritalStatus\": \"single\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/v1/director",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"v1",
						"director"
					]
				},
				"description": "This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.\n\nA successful POST request typically returns a `200 OK` or `201 Created` response code."
			},
			"response": []
		},
		{
			"name": "Update data",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Successful PUT request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([200, 201, 204]);",
							"});",
							""
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"id\": \"1\",\n\t\"name\": \"Foo\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/v1/director",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"v1",
						"director"
					]
				},
				"description": "This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful PUT request typically returns a `200 OK`, `201 Created`, or `204 No Content` response code."
			},
			"response": []
		},
		{
			"name": "Delete data",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Successful DELETE request\", function () {",
							"    pm.expect(pm.response.code).to.be.oneOf([200, 202, 204]);",
							"});",
							""
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/v1/director/6",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"v1",
						"director",
						"6"
					]
				},
				"description": "This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).\n\nA successful DELETE request typically returns a `200 OK`, `202 Accepted`, or `204 No Content` response code."
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	]
}
```

## TODOs - implementations

- Unit tests will be developed
