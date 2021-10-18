# nodejs-rest-api-demo
>Node.js REST Api demo


## base url
```
https://nodejs-rest-api-demo-app.herokuapp.com/
```

## endpoints
- GET /api/v1/director - returns all director
- GET /api/v1/director/<id> - returns the spesific director
- POST /api/v1/director - creates a new director
- PUT /api/v1/director/<id>  - update existing director. Director data should be placed on the request body
- DELETE /api/v1/director/<id> - deletes the specified director

##  - example /api/v1/director response
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

## TODOs - implementations
- Redis will be implemented for caching.
- Unit tests