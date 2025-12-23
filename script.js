let currentlyOpen = null;
function openLetter(number) {
  // If the same letter is open, close it
  if (currentlyOpen === number) {
    closeLetter(number);
    return;
  }
  // Close any open letter
  if (currentlyOpen !== null) {
    document
      .getElementById("letter-" + currentlyOpen)
      .classList.add("hidden");
  }
  // Open selected letter
  document
    .getElementById("letter-" + number)
    .classList.remove("hidden");
  currentlyOpen = number;
}
function closeLetter(number) {
  document
    .getElementById("letter-" + number)
    .classList.add("hidden");
  currentlyOpen = null;
}
