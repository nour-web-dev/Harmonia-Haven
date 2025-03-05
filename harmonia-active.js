
//Exercise API
const apiKey = "SkmPJ9vYB3kItHh4oKI1Sg==gqcJ9a2DlmT0ZLxN";
const apiUrl = "https://api.api-ninjas.com/v1/exercises";
const colors = ["#6CB4EE", "#53b953", "#6868c0", "#3381c1", "#49b14b", "#7e7eac"];
let lastColor = "";
function fetchExercise() {
  fetch(apiUrl, {
    method: "GET",
    headers: { "X-Api-Key": apiKey },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        const randomExercise = data[Math.floor(Math.random() * data.length)];
        // Update exercise name
        document.getElementById("exercise-name").textContent = randomExercise.name;
        // Update exercise type and difficulty with labels
        document.getElementById("exercise-type").textContent = `Type: ${randomExercise.type}`;
        document.getElementById("exercise-difficulty").textContent = `Difficulty: ${randomExercise.difficulty}`;
        // Clear previous instructions
        const instructionsContainer = document.getElementById("exercise-instructions");
        instructionsContainer.innerHTML = "";
        // Split instructions into steps and create list items
        const instructionsArray = randomExercise.instructions
          .split(".")
          .filter((step) => step.trim() !== "");
        instructionsArray.forEach((step) => {
          const li = document.createElement("li");
          li.textContent = step.trim() + ".";
          instructionsContainer.appendChild(li);
        });
        // Set a new random background color (excluding the last used color)
        let newColor;
        do {
          newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === lastColor);
        lastColor = newColor;
        // Apply the new color to the exercise card
        document.querySelector(".exercise-card").style.background = `linear-gradient(135deg, ${newColor}, ${newColor}80)`;
      } else {
        document.getElementById("exercise-name").textContent = "No exercises found.";
        document.getElementById("exercise-type").textContent = "Type: N/A";
        document.getElementById("exercise-difficulty").textContent = "Difficulty: N/A";
        document.getElementById("exercise-instructions").innerHTML = "<li>No instructions available.</li>";
      }
    })
    .catch((error) => console.error("Error:", error));
}
// Event listener for the "Get another Exercise" button
document.getElementById("new-exercise-btn").addEventListener("click", fetchExercise);
// Fetch an exercise when the page loads
window.addEventListener("load", fetchExercise);
document.getElementById("routine-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const selected = document.querySelector('input[name="routine"]:checked');
    const recommendationsDiv = document.getElementById("recommendations");

    if (!selected) {
        recommendationsDiv.innerHTML = "Please select an option!";
        return;
    }

    let links = "";

    if (selected.value === "yoga") { 
            links = `<a href="https://www.youtube.com/watch?v=v7AYKMP6rOE" target="_blank">Beginner & Advanced Yoga</a>
                     <a href="https://www.youtube.com/watch?v=4pKly2JojMw" target="_blank">Morning Yoga Flow</a>
                     <a href="https://www.youtube.com/watch?v=oBu-pQG6sTY" target="_blank">30-Min Yoga for Flexibility</a>
                     <a href="https://www.youtube.com/watch?v=RGBxdQDbvmo" target="_blank">Deep Stretch & Relax</a>
                     <a href="https://youtu.be/CLDHeV9OI5U?si=pp4vf2Vq0RTFVn0M" target="_blank">10-Min Bedtime Yoga</a>`;
    } else if (selected.value === 
             "music") {
                    links = `<a href="https://www.youtube.com/watch?v=ASj81daun5Q" target="_blank">Epic Battle Music</a>
                             <a href="https://www.youtube.com/watch?v=HMdY9CYBrIU" target="_blank">Adrenaline Rush</a>
                             <a href="https://www.youtube.com/watch?v=fCebJodm0lY" target="_blank">Unstoppable Energy</a>
                             <a href="https://www.youtube.com/watch?v=JuSsvM8B4Jc" target="_blank">Cosmic Determination</a>
                             <a href="https://www.youtube.com/watch?v=ACRZT0B1MZ4" target="_blank">Triumphant Spirit</a>`;
    } else if (selected.value ===
               "workout") {
                 links = `<a href="https://www.youtube.com/watch?v=1skBf6h2ksI" target="_blank">Full Body HIIT Workout</a>
                          <a href="https://www.youtube.com/watch?v=5HIFBp6a6OU" target="_blank">HIIT Cardio Workout</a>
                          <a href="https://www.youtube.com/watch?v=sWjTnBmCHTY" target="_blank">Abs & Core Routine</a>
                          <a href="https://www.youtube.com/watch?v=8qDDtm6BOfw" target="_blank">Hand Day Training</a>
                          <a href="https://www.youtube.com/watch?v=1HTsVvNRP88" target="_blank">Upper Body Strength</a>`; 
    }

recommendationsDiv.innerHTML = `Recommended: <div class="link-container">${links}</div>`;
});


window.addEventListener("scroll", () => {
    const gifSection = document.getElementById("gif-section");
    const sectionTop = gifSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight * 0.75) {
        gifSection.classList.add("visible");
    }
});
const challenges = [
    "Take a 10-minute walk today!",
    "Do 15 minutes of yoga or stretching.",
    "Try a new workout routine for 20 minutes.",
    "Go for a bike ride around your neighborhood.",
    "Do 10 push-ups and 10 squats.",
    "Take the stairs instead of the elevator.",
    "Do a 5-minute plank challenge.",
    "Go for a 20-minute jog or run.",
    "Try a 10-minute HIIT workout.",
    "Do 20 lunges (10 on each leg).",
    "Stretch your hamstrings for 5 minutes.",
    "Do 15 jumping jacks.",
    "Take a 15-minute brisk walk during your lunch break.",
    "Do 10 burpees.",
    "Try a 10-minute core workout.",
    "Go for a swim or do water aerobics.",
    "Do 5 minutes of meditation or deep breathing.",
    "Do 20 sit-ups.",
    "Take a 30-minute walk in nature.",
    "Do 10 supermans (back extensions).",
    "Do 15 tricep dips using a chair.",
    "Do 15 wall push-ups.",
    "Take a 10-minute walk while focusing on your breathing.",
    "Do 10 bicycle crunches."
];
// Get a random challenge
function getRandomChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    return challenges[randomIndex];
}
// Load a random challenge on page load
window.addEventListener("load", () => {
    const challengeSpan = document.getElementById("challenge-span");
    challengeSpan.textContent = getRandomChallenge();
    displaySavedChallenges(); // Load saved challenges
});
// Get a new random challenge
document.getElementById("new-challenge-btn").addEventListener("click", () => {
    const challengeSpan = document.getElementById("challenge-span");
    challengeSpan.textContent = getRandomChallenge();
});
// Save a challenge
document.getElementById("save-challenge-btn").addEventListener("click", () => {
    const challengeText = document.getElementById("challenge-span").textContent;
    const savedChallenges = JSON.parse(localStorage.getItem("savedChallenges")) || [];
    if (!savedChallenges.includes(challengeText)) {
        savedChallenges.push(challengeText);
        localStorage.setItem("savedChallenges", JSON.stringify(savedChallenges));
        alert("Challenge saved!");
        displaySavedChallenges(); // Refresh the saved challenges list
    } else {
        alert("This challenge is already saved!");
    }
});
// Display saved challenges
function displaySavedChallenges() {
    const savedChallenges = JSON.parse(localStorage.getItem("savedChallenges")) || [];
    const savedList = document.getElementById("saved-challenges-list");
    savedList.innerHTML = ""; // Clear the list before displaying
    savedChallenges.forEach((challenge, index) => {
        const savedItem = document.createElement("div");
        savedItem.classList.add("saved-item");
        savedItem.textContent = challenge;
        // Add a remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            removeChallenge(index);
        });
        savedItem.appendChild(removeBtn);
        savedList.appendChild(savedItem);
    });
}
// Remove a challenge
function removeChallenge(index) {
    const savedChallenges = JSON.parse(localStorage.getItem("savedChallenges")) || [];
    savedChallenges.splice(index, 1);
    localStorage.setItem("savedChallenges", JSON.stringify(savedChallenges));
    displaySavedChallenges(); // Refresh the saved challenges list
}