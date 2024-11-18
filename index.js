// Function to handle dice roll logic
function rollDice() {
  const numOfDice = Math.min(
    Math.max(document.getElementById("numOfDice").value, 1),
    6
  );
  const diceResult = document.getElementById("diceResult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  diceimages.innerHTML = `<img class="rolling" src="Dice_images/rolling.svg" alt="Rolling...">`;
  diceimages.style.display = "block";
  diceimages.style.opacity = "1";

  setTimeout(() => {
    // Generate dice values and corresponding images
    for (let i = 0; i < numOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(
        `<img src="Dice_images/${value}.png" alt="Dice ${value}" style="--delay: ${i}">`
      );
    }

    // Check if all dice have the same value
    const allSame = values.every((val) => val === values[1]);
    const total = values.reduce((a, b) => a + b, 0); // Calculate total value

    // Update dice results
    diceResult.textContent = `Dice values: ${values.join(
      ", "
    )} | Total: ${total}`;

    // Display congratulatory message only if the dice values are the same
    if (allSame) {
      diceResult.textContent += " Congratulations WE Dixs🎉 !";
    }

    diceimages.innerHTML = images.join("");
  }, 500);
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

    // Show the theme toggle button after the game content appears
    const toggleThemeButton = document.getElementById("toggleThemeButton");
    toggleThemeButton.style.display = "block";
  }, 6000);
});

// Theme toggle function
function toggleTheme() {
  document.body.classList.toggle("light-theme");
}
