const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    if(searchText == '') {
        const searchResult = document.getElementById('search-result');
        const div = document.createElement('div');
        div.classList.add('mx-auto')
        div.innerHTML = `<p>Please input anything to search</p>`;
        searchResult.appendChild(div)
    }
    else {
        // load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
    }
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    console.log(!meals)
    if(!meals) {
        const div = document.createElement('div');
        div.classList.add('mx-auto')
        div.innerHTML = `<h1>No results found</h1>`;
        searchResult.appendChild(div)
    }
    meals.forEach(meal => {
        console.log(meal)
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealDetails.appendChild(div);
}