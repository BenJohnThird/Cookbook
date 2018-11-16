###### Crescendo Collective - Frontend Skill Test

## Recipe API

For this javascript project we've provided a recipe API with two endpoints. With this API you'll need to complete the following objectives.

- Pull the data from the API
- Create a list view which includes all the recipes
- Create a recipe detail view to display each recipe
- Highlight the specials

#### Install & Setup

This project includes a API server (json-server) for you to use. To install and run, use the commands below:

- `npm i`
- `npm run start:api`

Once running, you can use the API endpoints listed in the following section from `http://localhost:3000`. More information about querying the server can be found on the [json-server github page](https://github.com/typicode/json-server).

#### Endpoints & Schema

##### `/recipes`

Recipe content

```
[
  Recipe {
    uuid: String
    title: String
    description: String
    image: String
    servings: Number
    prepTime: Number
    cookTime: Number
    postDate: Date
    editDate: Date
    ingredients: [
      Ingredient {
        uuid: String
        amount: Number
        measurement: String
        name: String
      }
    ]
    directions: [
      Direction {
        instructions: String
        optional: Boolean
      }
    ]
  }
]
```

##### `/specials`

Specials on ingredients

```
[
  Special {
    uuid: String
    ingredientId: String
    type: String
    title: String
    geo: String (optional)
    text: String (optional)
  }
]
```
