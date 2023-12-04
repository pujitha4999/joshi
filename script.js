const cont =  document.querySelector(".container")

function fetchData(){
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            createCard(data)
        })
}

fetchData()

function createCard(coffeeData){

    coffeeData.forEach((coffee) => {
        const div= document.createElement("div")
        div.classList.add("card")
       
        div.innerHTML = `
        
        <img src=${coffee.image} />
             <div class="name">
                <h4>${coffee.name}</h4>
                <p>${coffee.price}</p>
             </div>
             <div class="star">
                <span><i class="fa-solid fa-star"></i></span>
                <span>${(coffee.rating != null) ? coffee.rating : "No rating"}</span>
                <span>(${coffee.votes})</span>
        
             </div>
        `

        cont.appendChild(div)
    })
    
    
}