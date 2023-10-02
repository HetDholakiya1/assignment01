
// variables for pre-defined arrays
const nouns1 = ["Cat", "Dog", "Bird", "Fish", "Lion"];
const verbs = ["ran", "jumped", "sang", "swam", "danced"];
const adjectives = ["happy", "brave", "tall", "funny", "bright"];
const nouns2 = ["tree", "mountain", "beach", "river", "castle"];
const settings = ["in the forest", "at the park", "on the moon", "underwater", "in a dream"];

// variables to keep track of the selected words
let chosenNoun1 = "";
let chosenVerb = "";
let chosenAdjective = "";
let chosenNoun2 = "";
let chosenSetting = "";

// Here are the Event Listeners
document.getElementById("noun1").addEventListener("click", noun1_on_click);
document.getElementById("verb").addEventListener("click", verb_on_click);
document.getElementById("adjective").addEventListener("click", adjective_on_click);
document.getElementById("noun2").addEventListener("click", noun2_on_click);
document.getElementById("setting").addEventListener("click", setting_on_click);
document.getElementById("playback").addEventListener("click", playback_on_click);
document.getElementById("random").addEventListener("click", random_on_click);

// function to select a random element from an array
function getRandomElementFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// functions for the button click events
function noun1_on_click() {
    chosenNoun1 = getRandomElementFromArray(nouns1);
    document.getElementById("chosenNoun1").textContent = chosenNoun1;
}

function verb_on_click() {
    chosenVerb = getRandomElementFromArray(verbs);
    document.getElementById("chosenVerb").textContent = chosenVerb;
}

function adjective_on_click() {
    chosenAdjective = getRandomElementFromArray(adjectives);
    document.getElementById("chosenAdjective").textContent = chosenAdjective;
}

function noun2_on_click() {
    chosenNoun2 = getRandomElementFromArray(nouns2);
    document.getElementById("chosenNoun2").textContent = chosenNoun2;
}

function setting_on_click() {
    chosenSetting = getRandomElementFromArray(settings);
    document.getElementById("chosenSetting").textContent = chosenSetting;
}

function playback_on_click() {
    const story = `${chosenNoun1} ${chosenVerb} ${chosenAdjective} ${chosenNoun2} ${chosenSetting}.`;
    document.getElementById("story").textContent = story;
}

function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

const studentIdParagraph = document.getElementById("studentId");
studentIdParagraph.textContent = "Student ID: 200533738"; 
