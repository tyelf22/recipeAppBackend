# Recipe App Node / MongoDB

This is an API for Creating, Reading, Updating, and Deleting
Recipes using Node and Express and MongoDB.


## Install

    npm install

## Run the app

    npm start


The Backend endpoints are described below 
👇

## Return all Recipes

### Request
    GET /recipes

#### Response

```json
[
    {
        "ingredients": [
            "eggs",
            "salt",
            "pepper",
            "onions",
            "peppers",
            "tomatoes"
        ],
        "directions": [
            "Mix in Bowl",
            "preheat stove",
            "flip",
            "fold"
        ],
        "_id": "5fa463f044a3bc2fa80f6baa",
        "name": "Omlette",
        "description": "Fluffy yellow delicious omlettes",
        "category": "breakfast",
        "rating": 2
    },

    {
        "ingredients": [
            "eggs",
            "salt",
            "pepper"
        ],
        "directions": [
            "Mix in Bowl",
            "preheat stove",
            "flip"
        ],
        "_id": "5fa4641744a3bc2fa80f6bab",
        "name": "Pancakes",
        "description": "Fluffy pancakes",
        "category": "breakfast",
        "rating": 3
    }
]
```

## Return specific recipe

### Request
    GET /recipes/:id

#### Response

```json
{
    
    "ingredients": [
        "eggs",
        "salt",
        "pepper"
    ],
    "directions": [
        "Mix in Bowl",
        "preheat stove",
        "flip"
    ],
    "_id": "5fa4641744a3bc2fa80f6bab",
    "name": "Pancakes",
    "description": "Fluffy pancakes",
    "category": "breakfast",
    "rating": 3

}
```

## Create new recipe

### Request
    Post /recipes

```json
{
    "ingredients": [
        "eggs",
        "salt",
        "pepper"
    ],
    "directions": [
        "Mix in Bowl",
        "preheat stove",
        "flip"
    ],
    "_id": "5fa4641744a3bc2fa80f6bab",
    "name": "Pancakes",
    "description": "Fluffy pancakes",
    "category": "breakfast",
    "rating": 3
}
```
    
#### Response

```json
{
    "ingredients": [
        "eggs",
        "salt",
        "pepper"
    ],
    "directions": [
        "Mix in Bowl",
        "preheat stove",
        "flip"
    ],
    "_id": "5fa4641744a3bc2fa80f6bab",
    "name": "Pancakes",
    "description": "Fluffy pancakes",
    "category": "breakfast",
    "rating": 3
}
```

## Update Recipe

### Request
    Put /recipes/:id

```json
{
    "ingredients": [
        "eggs",
        "salt",
        "salt"
    ],
    "directions": [
        "Mix in Bowl",
        "preheat stove",
        "flip"
    ],
    "_id": "5fa4641744a3bc2fa80f6bab",
    "name": "Pancakes",
    "description": "Fluffy pancakes",
    "category": "breakfast",
    "rating": 3
}
```
    
#### Response

```json
{
    "ingredients": [
        "eggs",
        "salt",
        "salt"
    ],
    "directions": [
        "Mix in Bowl",
        "preheat stove",
        "flip"
    ],
    "_id": "5fa4641744a3bc2fa80f6bab",
    "name": "Pancakes",
    "description": "Fluffy pancakes",
    "category": "breakfast",
    "rating": 3
}
```

## Delete Recipe

### Request
    Delete /recipes/:id

    
#### Response

[Recipe was deleted]

## Return all Shopping Items

### Request
    GET /shopping

#### Response

```json
    {
        "_id": "5fb2f1a6dbba4241e04dd7cf",
        "name": "apples",
        "quantity": 6,
        "complete": false,
    }
```

## Return specific shopping item

### Request
    GET /shopping/:id

#### Response

```json
    {
        "_id": "5fb2f1a6dbba4241e04dd7cf",
        "name": "apples",
        "quantity": 6,
        "complete": false,
    }
```

## Create new shopping item

### Request
    Post /shopping

```json
{
    "_id": "5fb2f1a6dbba4241e04dd7cr",
    "name": "oranges",
    "quantity": 2,
    "complete": false,
}

```
    
#### Response

```json
{
    "_id": "5fb2f1a6dbba4241e04dd7cr",
    "name": "oranges",
    "quantity": 2,
    "complete": false,
}
```

## Update shopping item

### Request
    Patch /shopping/:id

```json
{
    "quantity": 4,
}
```
    
#### Response

```json
{
    "_id": "5fb2f1a6dbba4241e04dd7cr",
    "name": "oranges",
    "quantity": 4,
    "complete": false,
}
```

## Delete shopping item

### Request
    Delete /shopping/:id

    
#### Response

[shopping item was deleted]