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
                
                // console log to see what the object is displaying 
                console.log(data.meals[mealType].strMeal);

// creates and appends a p tag to the html on the different recipes that api results from search 
                var meal = document.createElement("p");
                meal.textContent = data.meals[mealType].strMeal;
                mealResult.append(meal);
            }
        })
};


searchButton.addEventListener("click", searchMeal);
