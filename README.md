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
    "ingredient_usage": [
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
    "ingredient_usage": {
        "initialized": true,
        "dirty": false
    },
    "name": "Recipe 1",
    "id": 1
}
```

console:
```
No metadata found. There is more than once class-validator version installed probably. You need to flatten your dependencies.
data:
{
  name: 'Recipe 1',
  ingredient_usage: [ { ingredient: 1, amount: 1 } ]
}
created recipe:
Recipe {
  ingredients: Collection { initialized: true, dirty: false },
  name: 'Recipe 1'
}
[Nest] 2512   - 07/23/2020, 12:47:25 AM   [MikroORM] [query] begin
[Nest] 2512   - 07/23/2020, 12:47:25 AM   [MikroORM] [query] insert into `recipe` (`name`) values ('Recipe 1') [took 1 ms]
[Nest] 2512   - 07/23/2020, 12:47:25 AM   [MikroORM] [query] commit
```

> Regarding the class-validator notice there, I've tried to flatten my dependencies on my actual project repo, but not here because it took a long time to sort through manually with `yarn install --flat`, so I skipped it on this repo.

## Issue

`Recipe.ingredients` is still empty, no insert to table `ingredient_recipe_usage`. I tried to put on and off `eager: true` on `Recipe` entity definition, but seems it does not help anything