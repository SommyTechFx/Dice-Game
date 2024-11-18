// Function to handle dice roll logic
function rollDice() {
  // Play the dice roll sound
  const diceRollSound = document.getElementById("diceRollSound");
  diceRollSound.currentTime = 0; // Reset sound to start
  diceRollSound.play();

  // Get the number of dice to roll
  const numOfDice = Math.min(
    Math.max(document.getElementById("numOfDice").value, 1),
    6
  );

  const diceResult = document.getElementById("diceResult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  // Show rolling animation
  diceimages.innerHTML = `<img class="rolling" src="Dice_images/rolling.svg" alt="Rolling...">`;
  diceimages.style.display = "block";

  setTimeout(() => {
    // Generate dice values and corresponding images
    for (let i = 0; i < numOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(
        `<img src="Dice_images/${value}.png" alt="Dice ${value}" style="--delay: ${i}">`
      );
    }

    const allSame = values.every((val) => val === values[1]); // Fix condition for checking if all dice are the same
    const total = values.reduce((a, b) => a + b, 0);

    // Update dice results
    diceResult.textContent = `Dice values: ${values.join(
      ", "
    )} | Total: ${total}`;

    // Display congratulatory message if all dice have the same value
    if (allSame) {
      diceResult.textContent += " Congratulations WE Dixs🎉 !";

      // Play celebratory sound
      const horray = document.getElementById("horray");
      horray.currentTime = 0; // Reset sound to start
      horray.play();
    }

    // Show dice images after the animation
    diceimages.classList.add("visible");
    diceimages.innerHTML = images.join("");
  }, 500); // Delay to show rolling animation and images
}

// Enter key event listener for rolling the dice
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    rollDice();
  }
});

// Event listener for Start button
document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("startButton").style.display = "none";
  document.getElementById("splashScreen").style.display = "block";
  document.getElementById("loader").style.display = "flex";

  // Play background music
  var audio = document.getElementById("backgroundMusic");
  audio.play(); // Start the audio

  setTimeout(function () {
    document.getElementById("splashScreen").style.display = "none";

    // Hide loader
    document.getElementById("loader").style.display = "none";

    // Show the main game content
    document.getElementById("container").style.display = "block";

    // Stop background music after the game starts
    audio.pause();

    const toggleThemeButton = document.getElementById("toggleThemeButton");
    toggleThemeButton.style.display = "block";
  }, 6000);
});

// Theme toggle function
function toggleTheme() {
  document.body.classList.toggle("light-theme");
}
