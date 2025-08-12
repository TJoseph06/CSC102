let memeInterval;
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    let reversed = cleaned.split('').reverse().join('');
    if (cleaned === reversed) {
        alert(`"${str}" is a palindrome!`);
    } else {
        alert(`"${str}" is NOT a palindrome.`);
    }
}
class UserInput {
    constructor(input) {
        this.original = input;
    }
    validate() {
        return typeof this.original === 'string' && this.original.trim().length > 0;
    }
    checkPalindrome() {
        if (this.validate()) {
            isPalindrome(this.original);
        } else {
            alert("Please enter a valid non-empty string.");
        }
    }
}

function promptAndCheck() {
    let input = prompt("Enter a word or phrase:");
    let userInput = new UserInput(input);
    userInput.checkPalindrome();
}

function startMemeMove() {
    let meme = document.getElementById("memeimage");
    let position = 0;
    memeInterval = setInterval(() => {
        if (position >= 300) position = 0; 
        meme.style.marginLeft = position + "px";
        position += 5;
    }, 100);
}
function stopMemeMove() {
    clearInterval(memeInterval);
}

function changeBackgroundColor() {
    const colors = ["#f0f8ff", "#ffe4e1", "#fafad2", "#e0ffff", "#d8bfd8", "#f5f5dc", "#d3ffd3", "#ffc0cb", "#add8e6"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}


window.onload = function () {
    changeBackgroundColor();
}