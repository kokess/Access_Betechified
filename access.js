// 1. A variable storing a user's name
const userName = "Austine";
const userAge = 25; // used by the age condition below

// Grab the parts of the page we will write into
const greetingEl = document.getElementById("greeting");
const ageMessageEl = document.getElementById("ageMessage");
const countHeadingEl = document.getElementById("countHeading");
const countListEl = document.getElementById("countList");

// 2. A condition that checks if the user is above 18 or not
function checkAge() {
    if (userAge > 18) {
        ageMessageEl.textContent = `You are ${userAge}, so you are above 18.`;
    } else {
        ageMessageEl.textContent = `You are ${userAge}, so you are not above 18.`;
    }
}

// 3. A loop that counts from 1 to 5
function countToFive() {
    countListEl.textContent = ""; // clear old numbers if the button is clicked again

    for (let i = 1; i <= 5; i++) {
        const item = document.createElement("li");
        item.textContent = i;
        countListEl.appendChild(item);
    }

    countHeadingEl.hidden = false;
}

// 4. A function that displays a greeting message
function displayGreeting() {
    greetingEl.textContent = `Hello, ${userName}! Welcome to my page.`;
    checkAge();
    countToFive();
}

// 5. A button that triggers the function when clicked
document.getElementById("greetBtn").addEventListener("click", displayGreeting);