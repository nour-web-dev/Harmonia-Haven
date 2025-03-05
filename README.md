# Harmonia: Your Daily Dose of Wellness

*Harmonia* is a web application designed to promote mental and physical wellness through daily affirmations, breathing exercise, workout routines, and reflective journaling. It consists of three main pages, each focusing on a specific aspect of wellness.

--

## Project Structure

### 1. *Home Page (index.html)*
 -*Purpose*: Provides an overview of the app and quick access to key features.
 -*Features*:
 -*Daily Quote*: Ftech and display a random quote using the Quotable API.
 -*Breathing Exercise*: A quided breathing exercise with an animated circle.
 -*Quick Links*: Navigate to the Affirmations and Activities pages.
 -*About Project*: A short description about the project.
 -*Daily Tips Table*:  Tips to have a better life.

### 2. *Affirmations Page(affirmations.html)*
  -*Purpose*: helps users stay positive with daily affirmations and reflective journaling.
  -*Features*:
  -*Healthy Mind Tips*:  Tips to make your life and mind better.
  -*Daily Affirmations*: Ftech and display a random affirmations using the Affirmations API.
  -*Save Affirmations*: Save your favorite affirmations to local storage.
  -*Reflection Journal*: Write and save reflections on how affirmations make you feel.

### 3. *Activities Page(activities.html)*
  -*Purpose*: Encourages physical activity with workout routines and daily challenges.
  -*Features*:
  -*Exercises*:  Fetch random exercise using the API Ninjas Exercises API.
  -*Workout Routines*: Get recommended vedios for yoga, music, or workouts.
  -*Daily Challenges*: Receive and save daily physical activity challenges.

--

## APIs Used 

### 1. *Quotable API*
 -*Purpose*: Fetch random quotes for daily inspiration.
 -*Endpoint*: https://api.quotable.io/quotes/random
 -*Usage*: Used on the *Home Page* to display motivational quotes.

### 2. *Affirmations API*
 -*Purpose*: Fetch random affirmations for positive thinking.
 -*Endpoint*: https://www.affirmations.dev/
 -*Usage*: Used on the *Affirmations Page* to display affirmations.

### 3. *API Ninjas Exercise API*
 -*Purpose*: Fetch random workout exercises with instructions.
 -*Endpoint*: https://api.api-ninjas.com/v1/exercises
 -*Usage*: Used on the *Activities Page* to display exercise details.

### 4. *AllOrigins Proxy*
 -*Purpose*: Bypass CORS restrictions for the Affirmations API.
 -*Endpoint*: https://api.allorigins.win/get?url=${encodeURIComponent('https://www.affirmations.dev/')}
 -*Usage*: Used to fetch affirmations when direct API access is restricted.

--

## How to Use

### 1. *Home Page (index.html)*
 -*Daily Quote*:
  -Click the "Get New Quote" button to fetch a random quote.
  -The quote and author will be displayed with a fade-in animation.
 -*Breathing Exercise*: 
  -Click the "Start Breathing Exercise" button to begin.
  -Follow the instructions and watch the animated circle for guidance.
 -*Quick Links*:
  -Click the links to navigate to the Affirmations and Activities pages.

### 2. *Affirmations Page (affirmations.html)*
 -*Daily Affirmations*: 
  -Click the "Get Another Affirmation" button to fetch a new affirmation.
 *Save Affirmations*:
  -Click the "Save Affirmation" button to save your favorite affirmations.
 -*Reflection Journal*: 
  -Write your reflections in the text area and click "Save Reflection" to save them.
 
### 3. *Activities Page (activities.html)*
 -*Exercises*: 
  -Click the "Get Another Exercise" button to fetch a new exercise.
 -*Workout Routines*:
  -Choose a routine (yoga, music, or workout) and get recommended vedios.
 -*Daily Challenges*:
  -Click the "Get New Challenge" button to receive a daily physical activity challenge.
  -Save challenges you want to try later by clicking the "Save Challenge" button.

--

## Technologies Used

. *HTML5*: Structure of the web pages.
. *CSS*: -Styling the layout,     colors, and fonts.
         -Adding animations (e.g., fade-in effects, breathing circle animation).
         -Ensuring responsiveness for different screen sizes.
. *JavaScript*: Dynamic functionality and API integration.
. *Google Fonts*: Typography (Montserrat and Lora).
. *Font Awesome*: Icons for visual elements.
. *Local Storage*: save user data (affirmations, reflections, challenges).

--

## Future Enhancements

 1. *User Accounts*: Allow users to create accounts and sync data across devices.
 2. *Progress Tracking*: Track daily progress for challenges and workout.
 3. *Custom Affirmations*: Allow users to add their own affirmations.
 4. *Mobile App*: Develop a mobile version for easies access.

--
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

*MIT License*
--

Enjoy using *Harmonia* to bring balance and positivity into your daily life!