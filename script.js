const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
};

const brailleMap = {
    'A': '⠁', 'B': '⠃', 'C': '⠉', 'D': '⠙', 'E': '⠑', 'F': '⠋', 'G': '⠛', 'H': '⠓',
    'I': '⠊', 'J': '⠚', 'K': '⠅', 'L': '⠇', 'M': '⠍', 'N': '⠝', 'O': '⠕', 'P': '⠏',
    'Q': '⠟', 'R': '⠗', 'S': '⠎', 'T': '⠞', 'U': '⠥', 'V': '⠧', 'W': '⠺', 'X': '⠭',
    'Y': '⠽', 'Z': '⠵', '0': '⠴', '1': '⠂', '2': '⠆', '3': '⠒', '4': '⠲', '5': '⠢',
    '6': '⠖', '7': '⠶', '8': '⠦', '9': '⠔', ' ': ' '
};

const reverseMorseCodeMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));
const reverseBrailleMap = Object.fromEntries(Object.entries(brailleMap).map(([k, v]) => [v, k]));

function convertToMorse() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const morseCode = inputText.split('').map(char => morseCodeMap[char] || char).join(' ');
    document.getElementById('outputText').value = morseCode;
}

function convertFromMorse() {
    const inputText = document.getElementById('inputText').value.trim();
    const normalText = inputText.split(' ').map(code => reverseMorseCodeMap[code] || code).join('');
    document.getElementById('outputText').value = normalText;
}

function convertToReverse() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = inputText.split('').reverse().join('');
}

function convertFromReverse() {
    convertToReverse(); // Gleiche Funktion, da sie nur den Text umkehrt
}

function convertToBraille() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const brailleText = inputText.split('').map(char => brailleMap[char] || char).join('');
    document.getElementById('outputText').value = brailleText;
}

function convertFromBraille() {
    const inputText = document.getElementById('inputText').value;
    const normalText = inputText.split('').map(char => reverseBrailleMap[char] || char).join('');
    document.getElementById('outputText').value = normalText;
}

function convertToASCII() {
    let input = document.getElementById("inputText").value;
    let output = input.split('')
                      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0')) // Wandelt in Binär (8 Bit)
                      .join(' ');
    document.getElementById("outputText").value = output;
}

function convertFromASCII() {
    let input = document.getElementById("inputText").value;
    let output = input.split(' ')
                      .map(code => String.fromCharCode(parseInt(code, 2))) // Wandelt Binär zurück in Zeichen
                      .join('');
    document.getElementById("outputText").value = output;
}

