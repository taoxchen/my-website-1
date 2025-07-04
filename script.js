const words = ["a developer.", "a creator.", "learning web dev.", "a photographer."];
let i = 0; // which word we're on
let j = 0; // which character we're at
let currentWord = "";
let isDeleting = false;

function type() {
  const target = document.querySelector(".typing");

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
    }

    target.textContent = currentWord;

    if (!isDeleting && j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 200); // pause before deleting
      return; 
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 200);
  }
}

document.addEventListener("DOMContentLoaded", type);
