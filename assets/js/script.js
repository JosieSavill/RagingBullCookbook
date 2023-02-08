var searchButton = document.getElementById("search-button");
var searchMealElement = document.getElementById("meal-search");




function searchMeal() {
    var searchMeal = searchMealElement.value;
    var getMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchMeal;

    fetch(getMeal)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

        })
};

searchButton.addEventListener("click", searchMeal);
