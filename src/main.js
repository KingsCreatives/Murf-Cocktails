let submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', displayDrink);


function displayDrink(){
    
    const userInput = document.querySelector('.user-input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
    .then(res => res.json())
    .then(data =>{
        let drinks = data.drinks;
        console.log(drinks);
        
        drinks.forEach(drink =>{
            let drinkCard = document.createElement('div');
            drinkCard.className = 'card drink text-center col-md-6 col-lg-6 col-sm-12';
            drinkCard.innerHTML = `
                            <img src="${drink.strDrinkThumb}" alt="cocktail-img" class="img-fluid drink-img">
                            <div class="card-body">
                                <h5 class="card-title">${drink.strDrink}</h5>
                                <p class="card-text">${drink.strInstructions}</p>
                             

                            </div>
                            `;

        
                    if(drink.strVideo !== null){
                        let link = document.createElement('a');
                        link.href = drink.strVideo;
                        link.className = "btn btn-secondary";
                        link.textContent = 'Watch tutorial';

                        drinkCard.insertAdjacentElement('beforeend', link)
                    }
            
    
            document.querySelector('.drinks-card').appendChild(drinkCard);

        })
    })
    .catch(err =>{
        console.log(err)
    });

    // Clears form after submission
    document.querySelector('.user-form').reset()
}


