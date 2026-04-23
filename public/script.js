//Displays a random shark fact when the button is clicked.
function showFact() {

  // List of shark facts
  const facts = [
    "Sharks existed before trees.",
    "There are over 500 species of sharks.",
    "Some sharks can glow in the dark.",
    "The Greenland shark can live for over 400 years.",
    "Sharks can detect electrical signals from other animals."
  ];

  // Generate a random number based on the number of facts
  const randomIndex = Math.floor(Math.random() * facts.length);

  // Show the random fact
  alert(facts[randomIndex]);

}