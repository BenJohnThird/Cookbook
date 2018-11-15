
###### Crescendo Collective - Frontend Skill Test

## Recipe API

For this javascript project we've provided a recipe API with two endpoints. With this API you'll need to complete the following objectives.

  - Pull the data from the API
  - Create a list view which includes all the recipes
  - Create a recipe detail view to display each recipe and highlight the specials

#### Endpoints
  - Recipes – /recipes-with-ingredients
  - Specials – /specials-on-ingredients

#### API Schema

##### /recipes-with-ingredients

```
[
  Recipe {
    uuid: String
    title: String
    description: String
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

##### /specials-on-ingredients

```
[
  Special {
    uuid: String
    ingredientId: String
    type: String
    title: String
    text: String (optional)
    geo: String (optional)
    promo: String (optional)
    postDate: Date
    editDate: Date
    endDate: Date
  }
]
```
