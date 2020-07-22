## How to run

1. `yarn`

2. `yarn run seed`

3. `yarn run start`

4. Create a recipe

```
curl --location --request POST 'localhost:3000/recipe/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Recipe 1",
    "ingredients": [
        {
            "ingredient": 1,
            "amount": 1
        }
    ]
}'
```
response:
```
{
    "id": 1,
    "ingredients": [],
    "name": "Recipe 1"
}
```

console:
```
data:
{ name: 'Recipe 1', ingredients: [ { ingredient: 1, amount: 1 } ] }
created recipe:
Recipe {
  ingredients: Collection { initialized: true, dirty: false },
  name: 'Recipe 1'
}
[Nest] 652   - 07/23/2020, 12:33:46 AM   [MikroORM] [query] begin
[Nest] 652   - 07/23/2020, 12:33:46 AM   [MikroORM] [query] insert into `recipe` (`name`) values ('Recipe 1') [took 6 ms]
[Nest] 652   - 07/23/2020, 12:33:46 AM   [MikroORM] [query] commit
```

## Issue

`Recipe.ingredients` is still empty, no insert to table `ingredient_recipe_usage`. I tried to put on and off `eager: true` on `Recipe` entity definition, but seems it does not help anything