let submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', displayDrink);


function displayDrink(){
    
    const userInput = document.querySelector('.user-input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
    .then(res => res.json())
    .then(data =>{
        let drinks = data.drinks[0];
        console.log(drinks);
        
        let drinkCard = document.createElement('div');
        drinkCard.className = 'drink';
        drinkCard.innerHTML = `
                        <h4 class="drink-name">${drinks.strDrink}</h4>
                        <p class="drink-info">${drinks.strInstructions}</p>
                        <img src="${drinks.strDrinkThumb}" alt="cocktail-img" class="drink-img">`;
    
        

        document.querySelector('.drinks-card').appendChild(drinkCard);
    })
    .catch(err =>{
        console.log(err)
    });

    // Clears form after submission
    document.querySelector('.user-form').reset()
}