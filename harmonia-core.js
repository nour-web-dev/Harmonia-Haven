//Quote Api
document.getElementById("new-quote-btn").addEventListener("click", fetchQuote);

function fetchQuote() {
    let quoteElement = document.getElementById('quote');
    let authorElement = document.getElementById('author');
    let buttonElement = document.getElementById('new-quote-btn');

    // Disable the button to prevent multiple clicks
    buttonElement.disabled = true;
    buttonElement.textContent = "Loading...";

    // Fade out the text before fetching
    quoteElement.style.opacity = "0";
    authorElement.style.opacity = "0";
    
    fetch('https://api.api-ninjas.com/v1/quotes', {
        method: "Get",
        headers: {"X-Api-Key": "SkmPJ9vYB3kItHh4oKI1Sg==gqcJ9a2DlmT0ZLxN"}
    })
     .then(response =>  {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
     })
     .then(data => {
         setTimeout(() => {
            quoteElement.innerHTML = `<i class="fa-solid fa-quote-left"></i> <span>${data[0].quote}</span> <i class="fa-solid fa-quote-right"></i>`;
            authorElement.textContent = `- ${data[0].author}`;
            quoteElement.style.opacity = "1";
            authorElement.style.opacity = "1";
            buttonElement.textContent = "🎐 Get New Quote 🎐";
            buttonElement.disabled = false;
         }, 500);
     })
     .catch(() => {
         setTimeout(() => {
            quoteElement.textContent = "Could not fetch a quote. Please try again later" ;
            authorElement.textContent = "";
            quoteElement.style.opacity = "1";
            authorElement.style.opacity = "1";
            buttonElement.textContent = "🎐 Get New Quote 🎐";
            buttonElement.disabled = false;
         }, 500);
     });
}

//Fetch a quote when the page loads
fetchQuote();


//Breathing Exercise
document.getElementById('start-breathing-btn').addEventListener('click', startBreathingExercise);

let isBreathing = false; 

function startBreathingExercise() {
    if (isBreathing) return; 
    isBreathing = true;

    const inhaleTime = 4000; 
    const holdTime = 7000; 
    const exhaleTime = 8000; 
    const breathingCircle = document.getElementById('breathing-circle');
    const breathingInstructions = document.getElementById('breathing-instructions');
                                                                                    
    breathingInstructions.textContent = "";

    setTimeout(() => {
        breathingInstructions.textContent = "Inhale for 4 seconds";
        breathingCircle.style.transform = "scale(1.5)"; 
        breathingCircle.style.transition = `transform ${inhaleTime / 1000}s ease-in-out`;
    }, 0);

    setTimeout(() => {
        breathingInstructions.textContent = "Hold for 7 seconds";
        breathingCircle.style.transform = "scale(1.5)"; 
    }, inhaleTime);

    setTimeout(() => {
        breathingInstructions.textContent = "Exhale for 8 seconds";
        breathingCircle.style.transform = "scale(1)"; 
        breathingCircle.style.transition = `transform ${exhaleTime / 1000}s ease-in-out`;
    }, inhaleTime + holdTime);

    setTimeout(() => {
        breathingInstructions.textContent = "Start Again";
        isBreathing = false;
    }, inhaleTime + holdTime + exhaleTime);
}
