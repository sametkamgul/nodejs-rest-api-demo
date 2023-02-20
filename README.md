# Node.js REST API Example

From now on, you can add all your favorite directors to your own special database!
  <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f3a5.png?v8" width="30" title="hover text">
  <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f47b.png?v8" width="30" title="hover text">


## endpoints

-   GET /api/v1/director - returns all director
-   GET /api/v1/director/:id - returns the specific director
-   POST /api/v1/director - creates a new director
-   PUT /api/v1/director/:id - updates existing director. Director data should be placed on the request body
-   DELETE /api/v1/director/:id - deletes the specified director

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

## package installation

```
npm i
```

or

```
npm install
```

## migrating mysql database

```
npm run migrate
```

## running on dev mode

```
npm run dev
```

## TODOs - implementations

-   Redis will be developed for caching.
-   Unit tests will be developed
