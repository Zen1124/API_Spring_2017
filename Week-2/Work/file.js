//let chicken = {
//  name: "Generic Chicken",
//  ingredients: [
//    "Chicken",
//    "Salt",
//    "Bones"
//  ]
//}
//let ingredient1 = chicken.ingredients;
//console.log("Name: " + chicken.name);
//console.log("Calories: " + chicken.calories)
//console.log("Ingredients: " + ingredient1)

const pastrami_sandwich = {
  name: "Pastrami Sandwich",
  calories: 700
}
const grilled_chicken = {
  name: "Chicken Sandwich",
  calories: 700
}
const tuna_sandwich = {
  name: "Tuna Sandwich",
  calories: 700
}
const roast_beef = {
  name: "Roast Beef",
  calories: 500
}
let sandwiches = [
  pastrami_sandwich,
  grilled_chicken,
  tuna_sandwich,
  roast_beef
]

let lessThan500 = () => {
  for(let i =0; i < sandwiches.length; i++) {
    if (sandwiches[i].calories <= 500) {
      console.log(sandwiches[i].name)
    }
  }
}
lessThan500()
