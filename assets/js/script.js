// variables that help dom traversal 
var searchButton = document.getElementById("search-button");
var searchMealElement = document.getElementById("meal-search");
var mealResult = document.getElementById("meal-result");

// function that searches for meals on API 
function searchMeal() {
    var searchMeal = searchMealElement.value;
    var getMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchMeal;

    fetch(getMeal)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

// loop that gets the value of how many recipes are available from related search  
            var availableMeals = data.meals.length;
            for (var arrayMeal = 0; arrayMeal < availableMeals; arrayMeal++) {
                var mealType = arrayMeal;
                
//variable to reach certain object properties, to avoid typing whole path (pretty sure there is an easier way)
            var mealPath = (data.meals[mealType]); 

// console log to see and test what the object is displaying 
                console.log(mealPath);

// creates and appends different tags to the meal-result id on the html of each different recipes that api results from search (recipe name, igredients, instructions)
                var meal = document.createElement("h1");
                var recipe = document.createElement("p");
                var ingredientsHeader = document.createElement("h3");
                var recipeHeader = document.createElement("h3");

                meal.textContent = mealPath.strMeal;
                recipe.textContent = mealPath.strInstructions;
                ingredientsHeader.textContent ="Ingredients";
                recipeHeader.textContent ="Recipe";

                mealResult.append(meal);
                mealResult.append(ingredientsHeader);
            
// loop that goes through all the ingredients and measurements                
                for (var index = 1; index < 20; index++) {
                var allIngredients = mealPath["strIngredient" + index];
                var allMeasurements = mealPath["strMeasure" + index];
                
                var ingredients = document.createElement("li"); 
                
// combines the measurements with ingredients in one concatenated line
                ingredients.textContent = allMeasurements + " " + allIngredients;
                
                
                mealResult.append(ingredients,recipeHeader,recipe);


                }
                
            }
            
        })
};

// button to search
searchButton.addEventListener("click", searchMeal);