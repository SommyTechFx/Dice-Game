function rollDice() {
  const numOfDice = Math.min(
    Math.max(document.getElementById("numOfDice").value, 1),
    6
  ); // Ensure dice count is between 1 and 6
  const diceResult = document.getElementById("diceResult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  // Clear previous results and display rolling animation
  diceimages.innerHTML = `<img class="rolling" src="Dice_images/rolling.png" alt="Rolling...">`;
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
    )} | Total: ${total} `;

    // Display congratulatory message only if the dice value is not 1
    if (allSame) {
      diceResult.textContent += " Congratulations WE Dixs🎉 !";
    }

    // Display dice images
    diceimages.innerHTML = images.join("");
  }, 500); // Wait 500ms for the rolling animation to finish
}

// Add keyboard support for "Enter" key to roll dice
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    rollDice();
  }
});

// Theme toggle function
function toggleTheme() {
  document.body.classList.toggle("light-theme");
}
