document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('check');
    if (submitButton) {
        submitButton.addEventListener('click', enter);

        // Initial setup (only once):
        countryCodes = shuffleArr(Array.from(countryData.keys())); // No 'let' here
        countryName = countryData.get(countryCodes[0]); // No 'let' here
        ind = 0; // No 'let' here
        correctInd = 0; // No 'let' here
        const initialCode = countryCodes[0];
        const initialName = countryData.get(initialCode);

        document.getElementById("flag").data = "flags/" + initialCode + ".svg";
        document.getElementById("progress").innerHTML = "1/" + countryData.size;
        document.getElementById("progress").innerHTML = 0 + "/" + countryData.size + ": " + 0 + "/" + countryData.size;
    } else {
        console.log("SVG element not found");
    }

    const textbox = document.getElementById('textbox');
    if (textbox) {
        textbox.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {  // Or event.code === 'Enter' for broader browser support
                event.preventDefault(); // Prevent form submission if inside a <form>
                enter(); // Call your enter() function
            }
        });
    }

    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('#header nav ul');


});


function modeToggle(){

}


function shuffleArr(arr) {
    const newArr = [...arr]; // copies it
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; // just swaps around randomly to shuffle it
    }
    return newArr;
}


function checkAnswer(answer) { // Correct definition - only one parameter
    const officialName = countryName.toLowerCase();
    if (answer === officialName) {
        return true;
    }

    const synonyms = countrySynonyms.get(countryName);
    if (synonyms) {
        for (const synonym of synonyms) {
            if (answer === synonym.toLowerCase()) {
                return true;
            }
        }
    }

    return false;
}

let countryCodes; // Declare here (no 'let' inside DOMContentLoaded)
let countryName;  // Declare here (no 'let' inside DOMContentLoaded)
let ind;       // Declare here (no 'let' inside DOMContentLoaded)
let darkMode; 
let correctInd;
function enter() {
    const currentCode = countryCodes[0];
    countryName = countryData.get(currentCode); // Correct: Get official name

    let answer = document.getElementById("textbox").value;
    try {
        answer = answer.toLowerCase();
    } catch (error) { }

    let correct = checkAnswer(answer);

    if (correct) {
        document.getElementById("response").innerHTML = "Correct! That Flag was " + countryName;
        correctInd++;
    } else {
        document.getElementById("response").innerHTML = "Incorrect! That Flag was " + countryName;
    }

    countryCodes.shift();
    ind++;

    if (countryCodes.length === 0) {
        document.getElementById("flag").data = "";
        document.getElementById("response").innerHTML = "Game Over! Please wait 2 seconds.";
        document.getElementById("progress").innerHTML = ind + "/" + countryData.size + ": " + correctInd + "/" + countryData.size;
        document.getElementById("textbox").style.display = "none";
        document.getElementById("check").style.display = "none";

        setTimeout(function () {
            location.reload();
        }, 2000);
    } else {
        const nextCode = countryCodes[0];
        const nextName = countryData.get(nextCode);
        document.getElementById("flag").data = "flags/" + nextCode + ".svg";
        document.getElementById("progress").innerHTML = ind + "/" + countryData.size + ": " + correctInd + "/" + countryData.size;
        document.getElementById("textbox").value = "";
    }
}