// Affirmation API
function fetchAffirmation() {
    let startTime = performance.now(); // Start Time
    let apiURL = `https://api.allorigins.win/get?url=${encodeURIComponent('https://www.affirmations.dev/')}&timestamp=${new Date().getTime()}`;
    
    fetch(apiURL)
       .then(response => response.json())
       .then(data => {
        let parsedData = JSON.parse(data.contents);
        document.getElementById("affirmation-text").textContent = `"${parsedData.affirmation}"`;
        let endTime = performance.now(); // End time
        console.log(`Time Taken: ${(endTime - startTime).toFixed(2)} ms`);
       })
       .catch(() => {
        document.getElementById("affirmation-text").textContent = "Could not fetch an affirmation. Please try again later.";
       });
}

//Display Combined Favorites 
function displayCombinedFavorites() {
    let combinedList = document.getElementById("combined-favorites-list");
    combinedList.innerHTML = "";

    let savedAffirmations = JSON.parse(localStorage.getItem("favoriteAffirmations")) || [];
    let savedReflections = JSON.parse(localStorage.getItem("reflections")) || [];

    //Check if there are any saved items
    if (savedAffirmations.length === 0 && savedReflections.length === 0) {
        //Hide the combined favorites section if there are no saved items
        let combinedSection = document.getElementById("combined-favorites-section");
        combinedSection.style.display = "none";
        return;
    }

    //Show the combined favorites section if there are saved items
    let combinedSection = document.getElementById("combined-favorites-section");
    combinedSection.style.display = "block";

    //Display saved affirmations
    savedAffirmations.forEach((affirmation, index) => {
        let div = document.createElement("div");
        div.classList.add("combined-item");
        div.textContent = `Affirmation: ${affirmation}`;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = function() {
            removeAffirmation(index);
        };
        div.appendChild(removeBtn);
        combinedList.appendChild(div);
    });

    //Display saved reflections
    savedReflections.forEach((reflection, index) => {
        let div = document.createElement("div");
        div.classList.add("combined-item");
        div.textContent = `Reflection: ${reflection}`;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = function() {
            removeReflection(index);
        };

        div.appendChild(removeBtn);
        combinedList.appendChild(div);
    });
}

// Save Affirmation 
function saveAffirmation() {
    let affirmationText = document.getElementById("affirmation-text").textContent;

    if (affirmationText === "----------" || affirmationText.includes("Could not fetch")) {
        alert("No valid affirmation to save!");
        return;
    }

    let favorites = JSON.parse(localStorage.getItem("favoriteAffirmations")) || [];

    if (!favorites.includes(affirmationText)) {
        favorites.push(affirmationText);
        localStorage.setItem("favoriteAffirmations", JSON.stringify(favorites));
        showPopup("Affirmation saved! You can view it below.");
        displayCombinedFavorites(); // Update the combined favorites section
    }
}

// Save Reflection
function saveReflection() {
    let reflectionInput = document.getElementById("reflection-input");
    let reflectionText = reflectionInput.value.trim();

    if ( reflectionText === "") return;

    let savedReflections = JSON.parse(localStorage.getItem("reflections")) || [];
    savedReflections.push(reflectionText);
    localStorage.setItem("reflections", JSON.stringify(savedReflections));
    reflectionInput.value = "";
    showPopup("Reflection saved! You can view it below.");
    displayCombinedFavorites(); // Update the combined favorites section
}

// Remove Affirmation
function removeAffirmation(index) {
    let savedAffirmations = JSON.parse(localStorage.getItem("favoriteAffirmations")) || [];
    savedAffirmations.splice(index, 1);
    localStorage.setItem("favoriteAffirmations", JSON.stringify(savedAffirmations));
    displayCombinedFavorites(); // Update the combined favorites section
}

// Remove Reflection
function removeReflection(index) {
    let savedReflections = JSON.parse(localStorage.getItem("reflections")) || [];
    savedReflections.splice(index, 1);
    localStorage.setItem("reflections", JSON.stringify(savedReflections));
    displayCombinedFavorites(); // Update the combined favorrites section
}

// Show Popup 
function showPopup(message) {
    let popup = document.getElementById("popup");
    popup.querySelector("h2").textContent = message;
    popup.classList.add("active");
    setTimeout(() => {
        popup.classList.remove("active");
    }, 2000);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("get-affirmation-btn").addEventListener("click", fetchAffirmation);
    document.getElementById("save-affirmation-btn").addEventListener("click", saveAffirmation);
    document.getElementById("save-reflection-btn").addEventListener("click", saveReflection);

    fetchAffirmation();
    displayCombinedFavorites(); // Check and display saved items on page load
});