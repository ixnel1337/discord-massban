const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menuOptions = [
  "[1]: ban all"
];

function displayMenu() {
  console.log("\nMenu:");
  menuOptions.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
}

function handleUserInput(input, banall) {
  const choice = parseInt(input);

  if (isNaN(choice) || choice < 1 || choice > menuOptions.length) {
    console.clear();
    console.log("Invalid choice. Please enter a valid option.");
    displayMenu();
    rl.prompt();
  } else {
    switch (choice) {
      case 1:
        console.log("You chose Option 1. Performing action...");
        banall();
        break;

    }

  }
}

function startMenu() {
  displayMenu();
  rl.setPrompt("choice: ");
  rl.prompt();

  rl.on('line', (input) => {
    handleUserInput(input.trim(), banall);
  });
}

function clearAndShowMenu() {
  setTimeout(() => {
    console.clear();
    displayMenu();
    rl.prompt();
  }, 1000);
}

module.exports = {
  displayMenu,
  handleUserInput,
  clearAndShowMenu,
  startMenu,
  rl,
};