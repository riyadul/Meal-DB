/* getting the search box value */
const searchAll = () => {
    const searchBox = document.getElementById('search-fild');
    const searchResult = searchBox.value;

    searchBox.value = ' ';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchResult}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.meals))
}

// display the result in card 
const displayResult = display => {
    const getResult = document.getElementById('display-result');
    getResult.innerHTML = ' ';
    display.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div onclick="lodeMealId(${meal.idMeal})" class="card">
          <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            
          </div>
        </div>
        `;
        getResult.appendChild(div);
    });
};

// lode single meal by id 
const lodeMealId = mealid => {
    console.log(mealid);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySingle(data.meals[0]))
}

// display single meal details
const displaySingle = single => {
    console.log(single);
    const getMeal = document.getElementById('display-single');
    getMeal.innerText = ' ';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${single.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="${single.strMeal}">Card title</h5>
                <p class="card-text">${single.strInstructions.slice(0, 100)}</p>
                <a href="${single.strYoutube}" class="btn btn-primary">Youtube</a>
    `;
    getMeal.appendChild(div);
}
