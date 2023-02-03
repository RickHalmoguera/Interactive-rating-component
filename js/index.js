const cardContainer = document.getElementById("card")

let ratingClickedId = ""
let rating = 0

const displayThankYou = (rating) =>{

    cardContainer.innerHTML = `
        <div class="centered-card">
            <div class="img-container">
                <img src="./images/illustration-thank-you.svg" alt="thak you">
            </div>

            <div class="your-selection-container">
                <p>You selected ${rating} out of 5 </p>
            </div>

            <div class="card-text-container">
                <h1 class="card-title">Thank you!</h1>
                <p class="card-text">We appreciate you taking the time to give a rating. If you ever need more support, 
                    don’t hesitate to get in touch!</p>
            </div>
        </div>`
}

const checkClick = (ratingClickedId)=>{
    const circles= document.querySelectorAll(".rating-btn")
    circles.forEach(circle => {
        circle.style.backgroundColor ="hsl(213, 19%, 18%)"
        circle.style.color ="hsl(217, 12%, 63%)"
    });
    
    const circleClicked = document.getElementById(`${ratingClickedId}`)
    
    if (circleClicked) {
        circleClicked.style.backgroundColor = "hsl(25, 97%, 53%)"
        circleClicked.style.color = "hsl(0, 0%, 100%)"
    }
    
    switch (ratingClickedId) {
        case ratingClickedId ="btn-1":
            rating = 1
            circleClicked.style.backgroundColor = "hsl(25, 97%, 53%)"
            circleClicked.style.color = "hsl(0, 0%, 100%)"
            break;
        
        case ratingClickedId ="btn-2":
            rating = 2
            break;

        case ratingClickedId ="btn-3":
            rating = 3
            break;

        case ratingClickedId ="btn-4":
            rating = 4
            break;

        case ratingClickedId ="btn-5":
            rating = 5
            break;

        case ratingClickedId ="submit":
            displayThankYou(rating)
            break;

        default:
            break;
    }
}


document.addEventListener("click", (e)=>{
    console.log(e.target.id)
    ratingClickedId = e.target.id
    checkClick(ratingClickedId)
})