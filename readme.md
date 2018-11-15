
**Crescendo Collective - Frontend Skill Test**

# Recipe API

For this javascript project we've provided an API with two endpoints. With this API, you'll need to create a tool with at least two views – list and detail. You'll also need to handle relations between the two endpoints, creating interface adjustments and actions which relate the data.

#### Endpoints
- /recipes-with-ingredients
- /specials-on-ingredients

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
